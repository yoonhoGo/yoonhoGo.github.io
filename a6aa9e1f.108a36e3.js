(window.webpackJsonp=window.webpackJsonp||[]).push([[60,28],{154:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(158),m=t(163),o=t(167),c=t(159);var i=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(c.a,{className:"pagination-nav__link",to:t},n.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(c.a,{className:"pagination-nav__link",to:r},n.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,r=Object(l.a)().siteConfig.title,c="/"===a.permalink?r:"Blog",s=a.blogDescription;return n.a.createElement(m.a,{title:c,description:s},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return n.a.createElement(o.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null))})),n.a.createElement(i,{metadata:a})))))}},164:function(e,a,t){"use strict";var r=t(2),n=t(6),l=t(0),m=t.n(l),o=t(160),c=t(159),i=t(158),s=t(161),u=t(45),g=t.n(u);function E(e){var a=e.to,t=e.href,l=e.label,o=e.prependBaseUrlToHref,i=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(s.a)(a),g=Object(s.a)(t,{forcePrependBaseUrl:!0});return m.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:o?g:t}:{to:u},i),l)}var d=function(e){var a=e.url,t=e.alt;return m.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(i.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,r=t||{},n=r.copyright,l=r.links,c=void 0===l?[]:l,u=r.logo,v=void 0===u?{}:u,f=Object(s.a)(v.src);return t?m.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===t.style})},m.a.createElement("div",{className:"container"},c&&c.length>0&&m.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return m.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?m.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?m.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?m.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):m.a.createElement("li",{key:e.href||e.to,className:"footer__item"},m.a.createElement(E,e))}))):null)}))),(v||n)&&m.a.createElement("div",{className:"text--center"},v&&v.src&&m.a.createElement("div",{className:"margin-bottom--sm"},v.href?m.a.createElement("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:g.a.footerLogoLink},m.a.createElement(d,{alt:v.alt,url:f})):m.a.createElement(d,{alt:v.alt,url:f})),m.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null}},167:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(160),m=t(157),o=t(165),c=t(159),i=t(171),s=t(161),u=t(46),g=t.n(u),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,d,v=e.children,f=e.frontMatter,_=e.metadata,p=e.truncated,h=e.isBlogPostPage,N=void 0!==h&&h,b=_.date,k=_.permalink,y=_.tags,w=_.readingTime,O=f.author,j=f.title,M=f.image,T=f.keywords,P=f.author_url||f.authorURL,B=f.author_title||f.authorTitle,I=f.author_image_url||f.authorImageURL,L=Object(s.a)(M,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,T&&T.length&&n.a.createElement("meta",{name:"keywords",content:T.join(",")}),M&&n.a.createElement("meta",{property:"og:image",content:L}),M&&n.a.createElement("meta",{property:"twitter:image",content:L}),M&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=b.substring(0,10).split("-"),r=t[0],u=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},N?j:n.a.createElement(c.a,{to:k},j)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:b,className:g.a.blogPostDate},u," ",d,", ",r," ",w&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},I&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:I,alt:O})),n.a.createElement("div",{className:"avatar__intro"},O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},O)),n.a.createElement("small",{className:"avatar__subtitle"},B)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:i.a},v)),(y.length>0||p)&&n.a.createElement("footer",{className:"row margin-vert--lg"},y.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),y.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(c.a,{to:_.permalink,"aria-label":"Read more about "+j},n.a.createElement("strong",null,"Read More"))))))}}}]);