"use strict";(self.webpackChunkyoonhogo_github_io=self.webpackChunkyoonhogo_github_io||[]).push([[8610],{3074:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(3366),n=a(7294),l=a(6010),s=a(8566),i=a(3699),o="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",h=a(7325);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,i=e.children,o=(0,r.Z)(e,E),m=t&&t.items.length>0;return n.createElement(s.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},3866:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),n=a(3699),l=a(3074),s=a(6007),i=a(7325),o=a(9623);function m(e){var t,a=e.metadata,m=e.items,c=e.sidebar,u=a.allTagsPath,g=a.name,d=a.count,h=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(d),tagName:g});return r.createElement(l.Z,{title:p,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(n.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},34:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(7325),l=a(7462),s=a(3366),i=a(6010),o="iconEdit_dcUD",m=["className"];var c=function(e){var t=e.className,a=(0,s.Z)(e,m);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(9623);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6363:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(3699),s="tag_hD8n",i="tagRegular_D6E_",o="tagWithCount_i0QQ";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(s,(t={},t[i]=!c,t[o]=c,t))},m,c&&r.createElement("span",null,c))}},5907:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(7325),s=a(6363),i="tags_XVD_",o="tag_JSN8";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(s.Z,{name:t,permalink:a}))}))))}},6007:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(6010),l=a(4137),s=a(7325),i=a(3699),o=a(9524),m=a(9623),c=a(3905),u=a(7649),g=a(34),d="blogPostTitle_uMeh",h="blogPostData_Vfxe",p="blogPostDetailsFull_enUA",E=a(5907),f="image_o0gy";var b=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:f,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},v="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var s;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?N:v),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}var P=a(9962);var k=function(e){var t,a,f,b=(f=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,o.C)().withBaseUrl,_=(0,P.Z)(),N=e.children,k=e.frontMatter,y=e.assets,T=e.metadata,w=e.truncated,C=e.isBlogPostPage,M=void 0!==C&&C,I=T.date,A=T.formattedDate,L=T.permalink,R=T.tags,U=T.readingTime,D=T.title,B=T.editUrl,F=T.authors,x=function(e){return r.createElement("a",{href:"https://hits.seeyoufarm.com"},r.createElement("img",{src:"https://hits.seeyoufarm.com/api/count/incr/badge.svg?url="+e+"%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"}))}(_.siteConfig.url+L),O=function(e){var t=(0,m.If)().isDarkTheme?"github-dark":"github-light",a=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(e){var r,n,l=a.current.querySelector("iframe.utterances-frame");l?(n={type:"set-theme",theme:t},l.contentWindow.postMessage(n,"https://utteranc.es")):((r=document.createElement("script")).src="https://utteranc.es/client.js",r.setAttribute("repo","yoonhoGo/yoonhoGo.github.io"),r.setAttribute("issue-term","pathname"),r.setAttribute("label","comment"),r.setAttribute("theme",t),r.crossOrigin="anonymous",r.async=!0,a.current.appendChild(r))}}),[t]),a}(e.isBlogPostPage),S=null!=(t=y.image)?t:k.image,q=!M&&w,z=R.length>0,Q=M?"h1":"h2";return r.createElement(r.Fragment,null,r.createElement("article",{className:M?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(Q,{className:d,itemProp:"headline"},M?D:r.createElement(i.Z,{itemProp:"url",to:L},D)),r.createElement("div",{className:(0,n.Z)(h,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},A),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",b(U)),r.createElement(r.Fragment,null," \xb7 ",x)),r.createElement(Z,{authors:F,assets:y})),S&&r.createElement("meta",{itemProp:"image",content:v(S,{absolute:!0})}),r.createElement("div",{id:M?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:u.Z},N)),(z||w)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=M,a))},z&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":q})},r.createElement(E.Z,{tags:R})),M&&B&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:B})),q&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":z})},r.createElement(i.Z,{to:T.permalink,"aria-label":"Read more about "+D},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))),e.isBlogPostPage&&r.createElement("div",{ref:O}))}}}]);