(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{169:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),i=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),p=i(r),O=n,h=p["".concat(c,".").concat(O)]||p[O]||s[O]||a;return r?o.a.createElement(h,l(l({ref:t},b),{},{components:r})):o.a.createElement(h,l({ref:t},b))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=O;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},242:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/Protocol-Flow-f91c799a30ac082024f358be85f5bd55.png"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return i}));var n=r(2),o=r(6),a=(r(0),r(169)),c={title:"OAuth2.0 \uc644\ubcbd \uc815\ub9ac(1)",date:new Date("2019-11-06T05:45:48.000Z"),slug:"/2019-11-06/OAuth2-1",image:"https://oauth.net/images/oauth-2-sm.png",tags:["OAuth 2.0","authorization","security"],author:"yoonhoGo",author_url:"https://github.com/yoonhoGo",author_image_url:"https://avatars3.githubusercontent.com/u/6959851",author_title:"Information Security, Python, Node.js, Typescript, AWS, Serverless, Container(Docker, Kubernetes), GraphQL, OAuth2.0. @witherion"},l={permalink:"/blog/2019-11-06/OAuth2-1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-11-06 OAuth2.0 \uc644\ubcbd \uc815\ub9ac-1.md",source:"@site/blog/2019-11-06 OAuth2.0 \uc644\ubcbd \uc815\ub9ac-1.md",description:"Intro",date:"2019-11-06T05:45:48.000Z",tags:[{label:"OAuth 2.0",permalink:"/blog/tags/o-auth-2-0"},{label:"authorization",permalink:"/blog/tags/authorization"},{label:"security",permalink:"/blog/tags/security"}],title:"OAuth2.0 \uc644\ubcbd \uc815\ub9ac(1)",readingTime:3.34,truncated:!0,prevItem:{title:"\uace0\uc778\ubb3c \uac1c\ubc1c\uc790\ub294 Vim\uc744 \uc4f4\ub2e4 \uc774 \ub9d0\uc774\uc57c",permalink:"/blog/ausg/monsters-use-vim"},nextItem:{title:"\ubcc0\uc218\uc640 \uc0c1\uc218 - \uace0\ub7ad? \ub7ec\uc2a4\ud2b8\uac00 \uadf8\ub807\uac8c \uc88b\ub2e4\uba70?(2)",permalink:"/blog/go-rust-programming/basic-variables-constants"}},u=[{value:"Intro",id:"intro",children:[{value:"OpenID\uc640 OAuth",id:"openid\uc640-oauth",children:[]},{value:"OAuth 1.0 \uadf8\ub9ac\uace0 OAuth 2.0",id:"oauth-10-\uadf8\ub9ac\uace0-oauth-20",children:[]}]},{value:"\ub124\uac00\uc9c0 \uc5ed\ud560",id:"\ub124\uac00\uc9c0-\uc5ed\ud560",children:[{value:"Resource Owner(\uc790\uc6d0 \uc18c\uc720\uc790)",id:"resource-owner\uc790\uc6d0-\uc18c\uc720\uc790",children:[]},{value:"Resource Server(\uc790\uc6d0 \uc11c\ubc84)",id:"resource-server\uc790\uc6d0-\uc11c\ubc84",children:[]},{value:"Client(\ud074\ub77c\uc774\uc5b8\ud2b8)",id:"client\ud074\ub77c\uc774\uc5b8\ud2b8",children:[]},{value:"Authorization Server(\uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84)",id:"authorization-server\uad8c\ud55c-\ubd80\uc5ec-\uc11c\ubc84",children:[]}]},{value:"Protocol Flow",id:"protocol-flow",children:[]},{value:"Reference",id:"reference",children:[]}],b={rightToc:u};function i(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"intro"},"Intro"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"OAuth 2.0\uc740 \uc778\uc99d\uc744\uc704\ud55c \uc0b0\uc5c5 \ud45c\uc900 \ud504\ub85c\ud1a0\ucf5c\uc785\ub2c8\ub2e4. OAuth 2.0\uc740 2006 \ub144\uc5d0 \uc791\uc131\ub41c \uc6d0\ub798 OAuth \ud504\ub85c\ud1a0\ucf5c\uc5d0 \ub300\ud55c \uc791\uc5c5\ubcf4\ub2e4 \uc6b0\uc120\ud569\ub2c8\ub2e4. OAuth 2.0\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \uac1c\ubc1c\uc790\uc758 \ub2e8\uc21c\uc131\uc5d0 \uc911\uc810\uc744 \ub450\uba74\uc11c \uc6f9 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8, \ub370\uc2a4\ud06c\ud1b1 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8, \ud734\ub300 \uc804\ud654 \ubc0f \uac70\uc2e4 \uc7a5\uce58\uc5d0 \ub300\ud55c \ud2b9\uc815 \uad8c\ud55c \ubd80\uc5ec \ud750\ub984\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \uc0ac\uc591 \ubc0f \ud655\uc7a5\uc740 IETF OAuth Working Group \ub0b4\uc5d0\uc11c \uac1c\ubc1c\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4.",Object(a.b)("br",null),"-"," oauth.net\uc758 \uc18c\uac1c\uae00\uc5d0\uc11c")),Object(a.b)("p",null,"OAuth 2.0\uc740 ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc6749"}),"RFC\uc5d0\uc11c \uc81c\uc758\ub41c 6749\ubc88 \ubb38\uc11c"),"\uc785\ub2c8\ub2e4.\nOAuth 2.0\uc740 \uae30\uc874\uc758 1.0\ubc84\uc804\uc774 \uac00\uc9c4 \ubcf4\uc548 \ucde8\uc57d\uc810, \uc778\uc99d \ubc29\uc2dd \ub4f1\uc744 \uac1c\uc120\ud558\uc5ec \ub300\uccb4\ud558\uae30 \uc704\ud558\uc5ec \uc81c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,"\uc800\ub294 \uc774\uc804 \uc9c1\uc7a5\uc5d0\uc11c \uc778\uc99d \uacfc\uc815\uc744 \ub3c4\uc785\ud558\uba74\uc11c \uc5ec\ub7ec\uac00\uc9c0 \ubb38\uc81c\uc810\uc5d0 \ubd80\ub52a\ud614\uc2b5\ub2c8\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AWS Cognito/Auth0 \uac19\uc740 \uc11c\ub4dc\ud30c\ud2f0 \uc11c\ube44\uc2a4 \uc774\uc6a9\uae08\uc9c0(\ub2e4\uc591\ud55c \uc774\uc720\ub85c)"),Object(a.b)("li",{parentName:"ul"},"\uc790\uccb4\uc801\uc778 \uc18c\uc15c \ub85c\uadf8\uc778 \uad6c\uc870 \ud544\uc694"),Object(a.b)("li",{parentName:"ul"},"Serverless \ud658\uacbd\uc5d0\uc11c \uc138\uc158 \uc720\uc9c0"),Object(a.b)("li",{parentName:"ul"},"\uc548\uc804\ud558\uace0 \uac80\uc99d\ub41c \ub85c\uadf8\uc778/\uc138\uc158 \ud544\uc694"),Object(a.b)("li",{parentName:"ul"},"\uc81c3\uc790\uc5d0\uac8c \ud68c\uc0ac \uc11c\ube44\uc2a4 API \uc811\uadfc \uae30\ub2a5 \uad6c\ud604"),Object(a.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8-\uc0ac\uc774\ub4dc/\uc11c\ubc84-\uc0ac\uc774\ub4dc \ubcd1\ud589 \uc6b4\uc6a9")),Object(a.b)("p",null,"\uc624\ub79c\uc2dc\uac04 \uace0\ubbfc\ud558\uace0 \uac80\uc0c9\ud558\uba74\uc11c \uacf5\ubd80\ub97c \uac70\ub4ed\ud558\ub2e4\uac00 \uad6c\uae00, \ud398\uc774\uc2a4\ubd81, \ub124\uc774\ubc84 \uac19\uc740 \uc18c\uc15c\uc11c\ube44\uc2a4 \uc81c\uacf5 \uc5c5\uccb4\uc758 \ub85c\uadf8\uc778 \ubc29\uc2dd\uc744 \uacf5\ubd80\ud558\ub2e4\uac00 OAuth\ub77c\ub294 \uc778\uc99d \uacfc\uc815\uc744 \uc54c\uac8c\ub418\uc5c8\uace0 \ud6c4\uc5d0 \uc5ec\ub7ec \uace0\ub824\uc0ac\ud56d\uc744 \uace0\ubbfc\ud55c \ub05d\uc5d0 \uc774 \uc778\uc99d \ubc29\ubc95\uc744 \ub3c4\uc785\ud558\uae30\ub85c \uacb0\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(a.b)("h3",{id:"openid\uc640-oauth"},"OpenID\uc640 OAuth"),Object(a.b)("p",null,"\ub450 \ud504\ub85c\ud1a0\ucf5c \ubaa8\ub450 \uc778\uc99d\uc744 \uc704\ud55c \ud504\ub85c\ud1a0\ucf5c\uc784\uc740 \uacf5\ud1b5\uc801\uc778 \uc131\uc9c8\ub85c \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, OAuth\uc758 \uacbd\uc6b0 \uc778\uc99d\uacfc \ub354\ubd88\uc5b4 \ud5c8\uac00(\uc778\uac00)\uc758 \uae30\ub2a5\uc744 \ub0b4\ud3ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \uc81c3\uc790\uc758 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc778\uc99d(Authentication): \uc0ac\uc6a9\uc790\uac00 \uc801\ubc95\ud55c \uc0ac\uc6a9\uc790\uc778\uc9c0 \ud655\uc778. \uc989, \ub85c\uadf8\uc778"),Object(a.b)("li",{parentName:"ul"},"\uc778\uac00(Authorization): \uc0ac\uc6a9\uc790\uac00 \uc694\uccad\ud558\ub294 \uc791\uc5c5\uc5d0 \uc801\ubc95\ud55c \uad8c\ud55c\uc744 \uc8fc\ub294 \uac83. \uc989, \uad8c\ud55c \ud655\uc778")),Object(a.b)("p",null,"\uc608\ub97c\ub4e4\uba74..."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"\ub098"(\uc0ac\uc6a9\uc790)\ub294 "Google"(\ub9ac\uc18c\uc2a4)\uc758 \uc18c\uc15c \ub85c\uadf8\uc778\uc744 \ud1b5\ud574 "\uc1fc\ud551\ubab0"(\uc81c3\uc790\uc758 \uc11c\ube44\uc2a4)\uc5d0 \ub85c\uadf8\uc778\ud588\ub2e4. "\uc1fc\ud551\ubab0"\uc740 "\ub0b4"\uac00 \ud5c8\ub77d\ud55c "Google"\uc5d0\uc11c\uc758 "\ub0b4" \uc774\ub984, \uc774\uba54\uc77c, \uc804\ud654\ubc88\ud638\ub97c \uc77d\uc744 \uc218 \uc788\ub2e4.')),Object(a.b)("h3",{id:"oauth-10-\uadf8\ub9ac\uace0-oauth-20"},"OAuth 1.0 \uadf8\ub9ac\uace0 OAuth 2.0"),Object(a.b)("p",null,"OAuth 1.0\uacfc OAuth 2.0\uc740 \ubaa9\uc801\ub9cc \uac19\uc740 \uc644\uc804\ud788 \ub2e4\ub978 \ud504\ub85c\ud1a0\ucf5c\uc785\ub2c8\ub2e4. \uc11c\ub85c \ud638\ud658\ub3c4 \uc548\ub418\uba70, \ub3d9\uc2dc \uc6b4\uc601\ud560 \ud544\uc694\ub3c4 \uc5c6\uc73c\uba70, 2.0 \uc790\uccb4\uac00 1.0\uc744 \ub300\uccb4\ud558\uae30 \uc704\ud574\uc11c \ub098\uc628 \ud504\ub85c\ud1a0\ucf5c\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \uc774 \uae00\uc5d0\uc11c\ub294 OAuth 2.0\ub9cc\uc744 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(a.b)("h2",{id:"\ub124\uac00\uc9c0-\uc5ed\ud560"},"\ub124\uac00\uc9c0 \uc5ed\ud560"),Object(a.b)("p",null,"OAuth 2.0\uc5d0\uc11c\ub294 \ub124\uac00\uc9c0 \uc5ed\ud560\uc774 \ub4f1\uc7a5\ud569\ub2c8\ub2e4."),Object(a.b)("h3",{id:"resource-owner\uc790\uc6d0-\uc18c\uc720\uc790"},"Resource Owner(\uc790\uc6d0 \uc18c\uc720\uc790)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"resource owner:",Object(a.b)("br",null),"\nAn entity capable of granting access to a protected resource.\nWhen the resource owner is a person, it is referred to as an end-user.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uc790\uc6d0\uc758 \uc18c\uc720\uc790.")," \ubcf4\ud638\ub418\ub294 \uc790\uc6d0\uc5d0 \uac00\uc7a5 \ub192\uc740 \uc811\uadfc\uc774 \uac00\ub2a5\ud55c \uc2e4\uccb4\uc785\ub2c8\ub2e4. \uc0ac\ub78c\uc77c \uacbd\uc6b0, \ucd5c\uc885 \uc0ac\uc6a9\uc790\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4. ",Object(a.b)("em",{parentName:"p"},"\uc989, \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uc0ac\uc6a9\uc790")),Object(a.b)("h3",{id:"resource-server\uc790\uc6d0-\uc11c\ubc84"},"Resource Server(\uc790\uc6d0 \uc11c\ubc84)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"resource server:",Object(a.b)("br",null),"\nThe server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uc790\uc6d0 \uc11c\ubc84.")," \uc790\uc6d0\uc744 \ubcf4\ud638\ud558\ub294 \ud638\uc2a4\ud305 \uc911\uc778 \uc11c\ubc84\uc785\ub2c8\ub2e4. \uc11c\ubc84\ub294 \uc5d1\uc138\uc2a4 \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubcf4\ud638 \uc911\uc778 \uc790\uc6d0\uc5d0 \ub300\ud55c \uc694\uccad\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4. ",Object(a.b)("em",{parentName:"p"},"\uc608\ub97c \ub4e4\uc5b4, \uad6c\uae00, \ud398\uc774\uc2a4\ubd81 \uac19\uc740 \uc18c\uc15c \uc11c\ube44\uc2a4 \uc81c\uacf5\uc790")),Object(a.b)("h3",{id:"client\ud074\ub77c\uc774\uc5b8\ud2b8"},"Client(\ud074\ub77c\uc774\uc5b8\ud2b8)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"client:",Object(a.b)("br",null),'\nAn application making protected resource requests on behalf of the resource owner and with its authorization. The term "client" does not imply any particular implementation characteristics (e.g., whether the application executes on a server, a desktop, or other devices).')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uc790\uc6d0\uc758 \uc0ac\uc6a9\uc790."),' "\uc790\uc6d0 \uc18c\uc720\uc790"\ub97c \ub300\uc2e0\ud558\uc5ec \uc790\uc6d0 \uc18c\uc720\uc790\uc758 \uc778\uac00\ub85c \ubcf4\ud638\ub418\ub294 \uc790\uc6d0\uc5d0 \uc694\uccad\ud558\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158. "\ud074\ub77c\uc774\uc5b8\ud2b8"\ub77c\ub294 \uc6a9\uc5b4\ub294 \ud2b9\uc815 \uad6c\ud604 \ud2b9\uc131(\uc608\ucee8\ub370, \uc11c\ubc84, \ub370\uc2a4\ud06c\ud0d1, \ud639\uc740 \ub2e4\ub978 \uae30\uae30\ub4e4 \uc704\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158)\uc744 \uc758\ubbf8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ',Object(a.b)("em",{parentName:"p"},"\uc608\ub97c \ub4e4\uc5b4, \uc571, \uc1fc\ud551\ubab0, \uac8c\uc784 \ub4f1 \uc18c\uc15c \ub85c\uadf8\uc778 \uc774\uc6a9\uc790(\uc5c5\uccb4)")),Object(a.b)("h3",{id:"authorization-server\uad8c\ud55c-\ubd80\uc5ec-\uc11c\ubc84"},"Authorization Server(\uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"authorization server:",Object(a.b)("br",null),"\nThe server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84."),' "\uc790\uc6d0 \uc18c\uc720\uc790"\uc640 \uc131\uacf5\uc801\uc778 \uc778\uc99d\uacfc \uad8c\ud55c \ubd80\uc5ec\ub97c \ud68d\ub4dd \ud6c4\uc5d0 "\ud074\ub77c\uc774\uc5b8\ud2b8"\uc5d0\uac8c \uc5d1\uc138\uc2a4 \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\ub294 \uc11c\ubc84. ',Object(a.b)("em",{parentName:"p"},"\uc608\ub97c \ub4e4\uc5b4, \uad6c\uae00, \ud398\uc774\uc2a4\ubd81 \uac19\uc740 \uc18c\uc15c \uc11c\ube44\uc2a4 \uc81c\uacf5\uc790\uc758 \uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84")),Object(a.b)("p",null,'"Resource Server"(\uc790\uc6d0 \uc11c\ubc84)\uc640 "Authorization Server"(\uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84)\ub294 \uac19\uc740 \uc11c\ubc84\uc77c \uc218\ub3c4 \uc788\uace0 \ubcc4\uac1c\uc758 \uc11c\ubc84\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\uac83\uc740 \uac1c\ubc1c\uc790\uc758 \uc790\uc720\uc785\ub2c8\ub2e4. \uc0c1\ud669\uacfc \ud658\uacbd\uc5d0 \ub9de\ucdb0\uc11c \uad6c\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.'),Object(a.b)("h2",{id:"protocol-flow"},"Protocol Flow"),Object(a.b)("p",null,"\uc774\ud574\ud558\uae30 \uc27d\uac8c \uadf8\ub9bc\uc744 \uadf8\ub824\uc654\uc2b5\ub2c8\ub2e4.(\uc544\uc774\ud328\ub4dc \uc9f1\uc9f1)"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Protocol Flow",src:r(242).default})),Object(a.b)("p",null,"\ucc28\uadfc\ud788 \uc0b4\ud3b4\ubcf4\uc790"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc790\uc6d0 \uc18c\uc720\uc790\uc5d0\uac8c \ud5c8\uac00\ub97c \uc694\uccad\ud55c\ub2e4. \ud5c8\uac00\ub294 \uc790\uc6d0 \uc18c\uc720\uc790\uc5d0\uac8c \ubc14\ub85c \uc694\uccad\ud558\uac70\ub098 ",Object(a.b)("strong",{parentName:"li"},"\uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84\uac00 \uc911\uac1c\uc790\ub85c\uc11c \uac04\uc811\uc801(\ubc14\ub78c\uc9c1)"),"\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc790\uc6d0 \uc18c\uc720\uc790\uc758 \uc778\uac00\ub97c \ub098\ud0c0\ub0b4\ub294 \uad8c\ud55c \ubd80\uc5ec\ub97c \ubc1b\uc2b5\ub2c8\ub2e4. \uad8c\ud55c \ubd80\uc5ec \uc720\ud615\uc740 4\uac00\uc9c0 \ubc29\uc2dd \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 \ud655\uc7a5\ub41c \uc720\ud615\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad8c\ud55c \ubd80\uc5ec \uc720\ud615\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uacfc \uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84\uac00 \uc9c0\uc6d0\ud558\ub294 \ud0c0\uc785\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84\uc5d0\uac8c \uad8c\ud55c \ubd80\uc5ec \ud5c8\uac00\uc5d0 \ub530\ub77c \uc561\uc138\uc2a4 \ud1a0\ud070\uc744 \uc694\uccad\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uad8c\ud55c \ubd80\uc5ec \uc11c\ubc84\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc778\uc99d\ud558\uace0, \uad8c\ud55c \ubd80\uc5ec \ud5c8\uac00\ub97c \uac80\uc99d\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc798 \ub418\uc5c8\ub2e4\uba74, \uc561\uc138\uc2a4 \ud1a0\ud070\uc744 \ubc1c\ud589\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc790\uc6d0 \uc11c\ubc84\uc5d0\uac8c \ubcf4\ud638\ub41c \uc790\uc6d0\uc744 \uc694\uccad\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc561\uc138\uc2a4 \ud1a0\ud070\uc73c\ub85c \uc778\uc99d\ud569\ub2c8\ub2e4."),Object(a.b)("li",{parentName:"ol"},"\uc790\uc6d0 \uc11c\ubc84\ub294 \uc561\uc138\uc2a4 \ud1a0\ud070\uc744 \uac80\uc99d\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc798 \ub418\uc5c8\ub2e4\uba74, \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4.")),Object(a.b)("p",null,"2\ubd80\uc5d0\uc11c\ub294 \ub300\ud45c\uc801\uc778 4\uac00\uc9c0 Authorization Grant\uc758 \ud750\ub984\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6749"}),"RFC 6749 - The OAuth 2.0 Authorization Framework")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://oauth.net/2/"}),"OAuth 2.0 - OAuth"))))}i.isMDXComponent=!0}}]);