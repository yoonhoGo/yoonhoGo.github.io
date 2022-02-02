import { useColorMode } from '@docusaurus/theme-common';
import { useRef, useEffect } from 'react';

const utterancesSelector = 'iframe.utterances-frame';

export default (isBlogPostPage: boolean) => {
  const { isDarkTheme } = useColorMode();
  const utterancesTheme = isDarkTheme ? 'github-dark' : 'github-light';
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isBlogPostPage) return;

    const utterancesEl = containerRef.current.querySelector(utterancesSelector);

    const createUtterancesEl = () => {
      const script = document.createElement('script');

      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'yoonhoGo/yoonhoGo.github.io');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'comment');
      script.setAttribute('theme', utterancesTheme);
      script.crossOrigin = 'anonymous';
      script.async = true;

      containerRef.current.appendChild(script);
    };

    const postThemeMessage = () => {
      const message = {
        type: 'set-theme',
        theme: utterancesTheme,
      };

      utterancesEl.contentWindow.postMessage(message, 'https://utteranc.es');
    };

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [utterancesTheme]);

  return containerRef;
}
