(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(7),a=(n(0),n(175)),i={title:"\ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30",date:new Date("2020-10-03T11:35:44.000Z"),slug:"/2020-10-03/http-cookie-break-mental",image:"../static/img/blog/2020-09-08/https-blog.png",tags:["http","cookie","authorization"],description:"\ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uc628\uac16 \uc0bd\uc9c8 \ub05d\uc5d0 \uc5bb\uc740 \uc9c0\uc2dd\ub4e4\uc744 \ubaa8\uc544\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc7ac\ubbf8\ub85c \uc77d\uc5b4\uc8fc\uc138\uc694.",author:"yoonhoGo",author_url:"https://github.com/yoonhoGo",author_image_url:"https://avatars3.githubusercontent.com/u/6959851",author_title:"\uc2dc\uc791\ud560 \ub54c\ub9cc\ud574\ub3c4 \uac04\ub2e8\ud560 \uc904 \uc54c\uc558\uc9c0... \ub05d\ub0a0\ub54c \ud604\ud0c0\uac00 \uc62c\uc9c0 \ubab0\ub790\uc9c0..."},c={permalink:"/blog/2020-10-03/http-cookie-break-mental",editUrl:"https://github.com/yoonhoGo/yoonhogo.github.io/edit/documentation/website/blog/blog/2020-10-03 \ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30.md",source:"@site/blog/2020-10-03 \ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30.md",description:"\ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uc628\uac16 \uc0bd\uc9c8 \ub05d\uc5d0 \uc5bb\uc740 \uc9c0\uc2dd\ub4e4\uc744 \ubaa8\uc544\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc7ac\ubbf8\ub85c \uc77d\uc5b4\uc8fc\uc138\uc694.",date:"2020-10-03T11:35:44.000Z",tags:[{label:"http",permalink:"/blog/tags/http"},{label:"cookie",permalink:"/blog/tags/cookie"},{label:"authorization",permalink:"/blog/tags/authorization"}],title:"\ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30",readingTime:4.985,truncated:!0,nextItem:{title:"HTTPS\ub97c \uc4f0\uba74 \ud328\uc2a4\uc6cc\ub4dc\ub97c \ud3c9\ubb38\uc73c\ub85c \ubcf4\ub0b4\ub3c4 \ub420\uae4c?",permalink:"/blog/2020-09-08/HTTPS-plain-text-safety"}},l=[{value:"intro.",id:"intro",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("del",{parentName:"p"},"\ucfe0\ud0a4\uac00 \ub9c8\ub140\uc5d0\uac8c \uc7a1\ud600 \uc788\ub358 \uc774\uc720\uac00 \uc788\uc5c8\ub2e4.")),Object(a.b)("p",null,Object(a.b)("del",{parentName:"p"},"\uc624\ube10\ube0c\ub808\uc774\ud06c\uac00 \uc544\ub2c8\ub77c \uba58\ud0c8\ube0c\ub808\uc774\ud06c\uc600\ub2e4.")),Object(a.b)("p",null,Object(a.b)("del",{parentName:"p"},"\ucfe0\ud0a4\ub7f0\ub54c\ubd80\ud130 \uc778\uc131 \uc54c\uc544\ubd24\ub2e4.(\uc778\uc131 \ubb38\uc81c\uc788\uc5b4?)")),Object(a.b)("p",null,Object(a.b)("del",{parentName:"p"},"\uadf8\ub807\uac8c \ud0c8\ucd9c\uc744 \ub3c4\uc640\uc8fc\ub824\uace0 \ud588\ub294\ub370... \ucfe0\ud0a4 \ub10c \uac1c\uc778\uc8fc\uc758\uc57c")),Object(a.b)("h2",{id:"intro"},"intro."),Object(a.b)("p",null,"\uac70\uc9c4 2-3\uc8fc\uc5d0 \uac78\uce5c \ucfe0\ud0a4 \uc0bd\uc9c8\uae30\ub97c \ub179\uc5ec\ub0b8 \uae00\uc785\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc5c4\uccad \uc560\ub97c \uba39\uc5c8\uc2b5\ub2c8\ub2e4. stack overflow\ub098 MDN\ub97c \uc77d\ub294 \uac83\ub9cc\uc73c\ub85c \uc54c\uae30 \uc5b4\ub824\uc6b4 \ub0b4\uc6a9\ub3c4 \uc77c\ubd80 \ud3ec\ud568\ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc774 \uae00\uc744 \ud1b5\ud574\uc11c ",Object(a.b)("del",{parentName:"p"},"\uae30\ubcf8\uc801\uc778 \ucfe0\ud0a4\uc758 \uac1c\ub150\ub4e4\uacfc")," \uc81c\uac00 \uacaa\uc5c8\ub358 \ubb38\uc81c\uc758 \ud574\uacb0\ubc95\uc744 \uac19\uc774 \uae30\uc220\ud558\uaca0\uc2b5\ub2c8\ub2e4."))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,f=b["".concat(i,".").concat(s)]||b[s]||m[s]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);