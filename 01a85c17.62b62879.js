(window.webpackJsonp=window.webpackJsonp||[]).push([[6,28],{164:function(e,t,a){"use strict";var r=a(2),n=a(6),l=a(0),o=a.n(l),c=a(160),s=a(159),m=a(158),i=a(161),f=a(45),u=a.n(f);function d(e){var t=e.to,a=e.href,l=e.label,c=e.prependBaseUrlToHref,m=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),f=Object(i.a)(t),u=Object(i.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:f},m),l)}var E=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,l=r.links,s=void 0===l?[]:l,f=r.logo,v=void 0===f?{}:f,g=Object(i.a)(v.src);return a?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},s&&s.length>0&&o.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(d,e))}))):null)}))),(v||n)&&o.a.createElement("div",{className:"text--center"},v&&v.src&&o.a.createElement("div",{className:"margin-bottom--sm"},v.href?o.a.createElement("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},o.a.createElement(E,{alt:v.alt,url:g})):o.a.createElement(E,{alt:v.alt,url:g})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null}},55:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(163),o=a(159);t.default=function(e){var t=e.tags,a={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)}));var r=Object.entries(a).sort((function(e,t){var a=e[0],r=t[0];return a===r?0:a>r?1:-1})).map((function(e){var a=e[0],r=e[1];return n.a.createElement("div",{key:a},n.a.createElement("h3",null,a),r.map((function(e){return n.a.createElement(o.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},r)))))}}}]);