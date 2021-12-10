(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return m}));var o=a(2),n=a(7),i=(a(0),a(175)),b={title:"\ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30",date:new Date("2020-10-03T11:35:44.000Z"),slug:"/2020-10-03/http-cookie-break-mental",image:"https://kidsactivitiesblog--o--com.follycdn.com/wp-content/uploads/2009/12/broken-Chocolate-Chip-cookie.jpg",tags:["http","cookie","authorization"],description:"\ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uc628\uac16 \uc0bd\uc9c8 \ub05d\uc5d0 \uc5bb\uc740 \uc9c0\uc2dd\ub4e4\uc744 \ubaa8\uc544\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc7ac\ubbf8\ub85c \uc77d\uc5b4\uc8fc\uc138\uc694.",author:"yoonhoGo",author_url:"https://github.com/yoonhoGo",author_image_url:"https://avatars3.githubusercontent.com/u/6959851",author_title:"\uc2dc\uc791\ud560 \ub54c\ub9cc\ud574\ub3c4 \uac04\ub2e8\ud560 \uc904 \uc54c\uc558\uc9c0... \ub05d\ub0a0\ub54c \ud604\ud0c0\uac00 \uc62c\uc9c0 \ubab0\ub790\uc9c0..."},c={permalink:"/blog/2020-10-03/http-cookie-break-mental",editUrl:"https://github.com/yoonhoGo/yoonhogo.github.io/edit/documentation/blog/2020-10-03 \ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30.md",source:"@site/blog/2020-10-03 \ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30.md",description:"\ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uc628\uac16 \uc0bd\uc9c8 \ub05d\uc5d0 \uc5bb\uc740 \uc9c0\uc2dd\ub4e4\uc744 \ubaa8\uc544\ub450\uc5c8\uc2b5\ub2c8\ub2e4. \uc7ac\ubbf8\ub85c \uc77d\uc5b4\uc8fc\uc138\uc694.",date:"2020-10-03T11:35:44.000Z",tags:[{label:"http",permalink:"/blog/tags/http"},{label:"cookie",permalink:"/blog/tags/cookie"},{label:"authorization",permalink:"/blog/tags/authorization"}],title:"\ubcf8\uaca9 HTTP \ucfe0\ud0a4 \uc0bd\uc9c8\uae30",readingTime:5.035,truncated:!0,nextItem:{title:"HTTPS\ub97c \uc4f0\uba74 \ud328\uc2a4\uc6cc\ub4dc\ub97c \ud3c9\ubb38\uc73c\ub85c \ubcf4\ub0b4\ub3c4 \ub420\uae4c?",permalink:"/blog/2020-09-08/HTTPS-plain-text-safety"}},r=[{value:"intro.",id:"intro",children:[]},{value:"\ub098\ub9cc \ube7c\uace0 \ub2e4 \uc54c\ub358 \uae30\ubcf8 \uac1c\ub150",id:"\ub098\ub9cc-\ube7c\uace0-\ub2e4-\uc54c\ub358-\uae30\ubcf8-\uac1c\ub150",children:[{value:"\ucfe0\ud0a4(<del>\ub7f0</del>)\ub780?",id:"\ucfe0\ud0a4\ub7f0\ub780",children:[]}]},{value:"\ud83e\uddb8\u200d\u2642\ufe0f \uc6a9\uac10\ud55c \ucfe0\ud0a4\ub294 \uc624\ube10\uc744 \ubd80\uc218\ub7ac\ub354\ub2c8 \ub0b4 \uba38\ub9ac\ub97c \ubd80\uc218\uace0 \uc788\uc5c8\ub2e4",id:"\ud83e\uddb8\u2642\ufe0f-\uc6a9\uac10\ud55c-\ucfe0\ud0a4\ub294-\uc624\ube10\uc744-\ubd80\uc218\ub7ac\ub354\ub2c8-\ub0b4-\uba38\ub9ac\ub97c-\ubd80\uc218\uace0-\uc788\uc5c8\ub2e4",children:[{value:"\ud83e\udd8a \uad6c\ubbf8\ud638 \ucfe0\ud0a4\ub294 \uaf2c\ub9ac\uac00 \uc138\uac1c\ub9cc \ubcf4\uc778\ub2e4",id:"\ud83e\udd8a-\uad6c\ubbf8\ud638-\ucfe0\ud0a4\ub294-\uaf2c\ub9ac\uac00-\uc138\uac1c\ub9cc-\ubcf4\uc778\ub2e4",children:[]},{value:"\ud83e\udddf\u200d\u2642\ufe0f \uc880\ube44\ub9db \ucfe0\ud0a4\ub294 \uc65c \uc8fd\uc9c0 \uc54a\uc744\uae4c?",id:"\ud83e\udddf\u2642\ufe0f-\uc880\ube44\ub9db-\ucfe0\ud0a4\ub294-\uc65c-\uc8fd\uc9c0-\uc54a\uc744\uae4c",children:[]},{value:"\ud83e\uddd8\u200d\u2640\ufe0f \uc694\uac00\ub9db \ucfe0\ud0a4\ub294 \uc694\uac00\ub85c \ub9c8\uc74c\uc758 \uc218\ub828\uc744 \ud558\uace0 \ub098\ub294 CircleCI\ub85c \uc778\ub0b4\ub97c \uc218\ub828\ud55c\ub2e4",id:"\ud83e\uddd8\u2640\ufe0f-\uc694\uac00\ub9db-\ucfe0\ud0a4\ub294-\uc694\uac00\ub85c-\ub9c8\uc74c\uc758-\uc218\ub828\uc744-\ud558\uace0-\ub098\ub294-circleci\ub85c-\uc778\ub0b4\ub97c-\uc218\ub828\ud55c\ub2e4",children:[]},{value:"\ud83d\ude08 \uc545\ub9c8\ub9db \ucfe0\ud0a4\ub294 \uc545\ub9c8\ub85c \ubcc0\uc2e0\ud55c\ub2e4",id:"-\uc545\ub9c8\ub9db-\ucfe0\ud0a4\ub294-\uc545\ub9c8\ub85c-\ubcc0\uc2e0\ud55c\ub2e4",children:[]}]},{value:"\ud83c\udfc3\u200d\u2642\ufe0f \ucfe0\ud0a4\ub7f0\uc774 \ub05d\ub0a0 \ub54c\ub294 \uacb0\uad6d \ucfe0\ud0a4\uac00 \uc8fd\uc5c8\uc744\ub54c \ubfd0\uc774\ub2e4.",id:"\u2642\ufe0f-\ucfe0\ud0a4\ub7f0\uc774-\ub05d\ub0a0-\ub54c\ub294-\uacb0\uad6d-\ucfe0\ud0a4\uac00-\uc8fd\uc5c8\uc744\ub54c-\ubfd0\uc774\ub2e4",children:[]},{value:"\ud83e\uddd9\u200d\u2640\ufe0f \uacb0\ub860",id:"\ud83e\uddd9\u2640\ufe0f-\uacb0\ub860",children:[]}],l={rightToc:r};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("del",{parentName:"p"},"\ucfe0\ud0a4\uac00 \ub9c8\ub140\uc5d0\uac8c \uc7a1\ud600 \uc788\ub358 \uc774\uc720\uac00 \uc788\uc5c8\ub2e4.")),Object(i.b)("p",null,Object(i.b)("del",{parentName:"p"},"\uc624\ube10\ube0c\ub808\uc774\ud06c\uac00 \uc544\ub2c8\ub77c \uba58\ud0c8\ube0c\ub808\uc774\ud06c\uc600\ub2e4.")),Object(i.b)("p",null,Object(i.b)("del",{parentName:"p"},"\ucfe0\ud0a4\ub7f0\ub54c\ubd80\ud130 \uc778\uc131 \uc54c\uc544\ubd24\ub2e4.(\uc778\uc131 \ubb38\uc81c\uc788\uc5b4?)")),Object(i.b)("p",null,Object(i.b)("del",{parentName:"p"},"\uadf8\ub807\uac8c \ud0c8\ucd9c\uc744 \ub3c4\uc640\uc8fc\ub824\uace0 \ud588\ub294\ub370... \ucfe0\ud0a4 \ub10c \uac1c\uc778\uc8fc\uc758\uc57c")),Object(i.b)("h2",{id:"intro"},"intro."),Object(i.b)("p",null,"\uac70\uc9c4 2-3\uc8fc\uc5d0 \uac78\uce5c \ucfe0\ud0a4 \uc0bd\uc9c8\uae30\ub97c \ub179\uc5ec\ub0b8 \uae00\uc785\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ucfe0\ud0a4\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc5c4\uccad \uc560\ub97c \uba39\uc5c8\uc2b5\ub2c8\ub2e4. stack overflow\ub098 MDN\ub97c \uc77d\ub294 \uac83\ub9cc\uc73c\ub85c \uc54c\uae30 \uc5b4\ub824\uc6b4 \ub0b4\uc6a9\ub3c4 \uc77c\ubd80 \ud3ec\ud568\ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(i.b)("p",null,"\uc774 \uae00\uc744 \ud1b5\ud574\uc11c ",Object(i.b)("del",{parentName:"p"},"\uae30\ubcf8\uc801\uc778 \ucfe0\ud0a4\uc758 \uac1c\ub150\ub4e4\uacfc")," \uc81c\uac00 \uacaa\uc5c8\ub358 \ubb38\uc81c\uc758 \ud574\uacb0\ubc95\uc744 \uac19\uc774 \uae30\uc220\ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(i.b)("h2",{id:"\ub098\ub9cc-\ube7c\uace0-\ub2e4-\uc54c\ub358-\uae30\ubcf8-\uac1c\ub150"},"\ub098\ub9cc \ube7c\uace0 \ub2e4 \uc54c\ub358 \uae30\ubcf8 \uac1c\ub150"),Object(i.b)("h3",{id:"\ucfe0\ud0a4\ub7f0\ub780"},"\ucfe0\ud0a4(",Object(i.b)("del",{parentName:"h3"},"\ub7f0"),")\ub780?"),Object(i.b)("p",null,"\ucfe0\ud0a4\ub294 \uc8fc\ub85c \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc800\uc7a5\ub418\ub294 HTTP Protocol\uc758 \uae30\ub85d \uc815\ubcf4\uc785\ub2c8\ub2e4. \ucfe0\ud0a4\ub294 \uc6f9\uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud560\ub54c \ub2e4\uc591\ud558\uac8c \uc0ac\uc6a9\uc774 \ub418\ub294\ub370 \ucfe0\ud0a4\ub97c \uc81c\ub300\ub85c \uc774\ud574\ud558\uc9c0 \ubabb\ud558\uba74 \uc800\ucc98\ub7fc multi-domain services\uc744 \uc0ac\uc6a9\ud560\ub54c \uc544\uc8fc \uace8\ub54c\ub9ac\uac8c \ub429\ub2c8\ub2e4."),Object(i.b)("p",null,"\uae00\uc744 \ucc98\uc74c \uc4f8\ub54c\ub9cc \ud574\ub3c4 \ub514\ud14c\uc77c\ud558\uac8c \uc124\uba85\ud558\ub824\uace0 \ud588\uc73c\ub098, ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies"}),"MDN\uc5d0")," \uae30\ubcf8\uc801\uc778 \ub0b4\uc6a9\uc774 \uc798 \uc791\uc131 \ub418\uc5b4\uc788\uc5c8\uae30 \ub54c\ubb38\uc5d0 \uc774 \uae00\uc5d0\uc11c\ub294 \uc81c\uac00 \uacaa\uc5c8\ub358 \ubb38\uc81c\uc640 \ud574\uacb0 \ubc29\ubc95\uc5d0 \ub300\ud558\uc5ec \uae30\uc220\ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(i.b)("h2",{id:"\ud83e\uddb8\u2642\ufe0f-\uc6a9\uac10\ud55c-\ucfe0\ud0a4\ub294-\uc624\ube10\uc744-\ubd80\uc218\ub7ac\ub354\ub2c8-\ub0b4-\uba38\ub9ac\ub97c-\ubd80\uc218\uace0-\uc788\uc5c8\ub2e4"},"\ud83e\uddb8\u200d\u2642\ufe0f \uc6a9\uac10\ud55c \ucfe0\ud0a4\ub294 \uc624\ube10\uc744 \ubd80\uc218\ub7ac\ub354\ub2c8 \ub0b4 \uba38\ub9ac\ub97c \ubd80\uc218\uace0 \uc788\uc5c8\ub2e4"),Object(i.b)("p",null,"1\ub144\uc804 \ucf54\ub4dc\uc5d0 feature\ub97c \ucd94\uac00\ud574\uc57c\ud560 \uc77c\uc774 \uc0dd\uacbc\ub2e4. \uae30\uc874\uc5d0 \ub85c\uceec \ub85c\uadf8\uc778 \uc678\uc5d0 oauth2 provider\ub97c \ucd94\uac00\ud574\uc57c \ud588\uace0 passport\ub97c \ud1b5\ud574 \uc11c\ube44\uc2a4\ub97c \uc798 \ubd99\uc600\ub2e4. \uc0bd\uc9c8\uc774 \uc880 \uc788\uc5c8\uc9c0\ub9cc \uc774\uc815\ub3c4\uba74 \uc900\uc218\ud55c\ud3b8 \u201c\uc798 \ub05d\ub0ac\uad70\u201d \uc0dd\uac01\ud558\uba70 \ub85c\uadf8\uc544\uc6c3\uc744 \ud588\ub294\ub370 \uc774\uac8c \uc660\uac78 \ub85c\uadf8\uc544\uc6c3\uc774 \uc548\ub410\ub2e4. \uc0c8\ub85c\uace0\uce68\uc744 \ud574\ub3c4 \ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \uc548\uc0ac\ub77c\uc84c\ub2e4. \ub85c\uadf8\uc778\uc774 \ub418\uba74 \ub85c\uadf8\uc544\uc6c3\uc774 \ub418\ub294\uac74 \ub108\ubb34 \ub2f9\uc5f0\ud55c\ub370 \uc65c \uc548\ub410\uc744\uae4c?"),Object(i.b)("p",null,"\uc774\uc720\ub294 \ud1a0\ud070 \uc815\ubcf4\ub97c \ucfe0\ud0a4\uc5d0 \uc800\uc7a5\ud558\uace0 \uc788\ub294\ub370 \ub36e\uc5b4\uc4f0\uae30\uac00 \uc548\ub418\uace0 \uc788\uc5c8\ub2e4. \ubb54\uac00 \uc774\uc0c1\ud574\uc11c \uae30\uc874 \ub85c\uceec \ub85c\uadf8\uc778\uc5d0 \ud1a0\ud070 \ucfe0\ud0a4\ub97c \uc5b4\ub5bb\uac8c \uc138\ud305\ud558\ub294\uc9c0 \ucc3e\uc544\ubd24\ub2e4. \ub9d9\uc18c\uc0ac! \ud1a0\ud070\uc744 \ubc1c\uae09\ud558\ub294 \ub3c4\uba54\uc778\uc5d0 \ub85c\uadf8\uc778\ud558\uace0 \uc751\ub2f5\uc744 \ubc1b\uc544 Body\ub97c \ud1a0\ud070\uc73c\ub85c \ub123\uc5b4\uc8fc\ub294\uac78 \uba54\uc778 \ub3c4\uba54\uc778\uc758 Next API\uc5d0\uc11c \ucc98\ub9ac\ud558\uace0 \uc788\uc5c8\ub2e4. \ud83e\udd26\u200d\u2642\ufe0f"),Object(i.b)("h3",{id:"\ud83e\udd8a-\uad6c\ubbf8\ud638-\ucfe0\ud0a4\ub294-\uaf2c\ub9ac\uac00-\uc138\uac1c\ub9cc-\ubcf4\uc778\ub2e4"},"\ud83e\udd8a \uad6c\ubbf8\ud638 \ucfe0\ud0a4\ub294 \uaf2c\ub9ac\uac00 \uc138\uac1c\ub9cc \ubcf4\uc778\ub2e4"),Object(i.b)("p",null,"\uc774 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ub3c4\uba54\uc778\uc740 6\uac1c\ub2e4.",Object(i.b)("del",{parentName:"p"},"(\uadf8\ub798\uc11c \uc9c4\uc815\ud55c \ucfe0\ud0a4\uac00 \ubabb\ub410\ub098\ubcf4\ub2e4)(\uc6b0\ub9ac\uac00 \uc774\uacbc\ub2e4)")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"domain.com(\ud504\ub860\ud2b8 \uba54\uc778 \ub3c4\uba54\uc778)"),Object(i.b)("li",{parentName:"ul"},"token.domain.com(\ud1a0\ud070 \ubc1c\uae09 \ub3c4\uba54\uc778)"),Object(i.b)("li",{parentName:"ul"},"api.domain.com(API \ub3c4\uba54\uc778)"),Object(i.b)("li",{parentName:"ul"},"test.domain.com"),Object(i.b)("li",{parentName:"ul"},"token.test.domain.com"),Object(i.b)("li",{parentName:"ul"},"api.test.domain.com")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(\ub3c4\uba54\uc778 \uc774\ub984\uc740 \uc784\uc758\ub85c \uc9c0\uc5b4\ub0c8\ub2e4)")),Object(i.b)("p",null,"\uc774 \uc911 \ud1a0\ud070 \ucfe0\ud0a4\ub97c \ubcf4\uc720\ud558\ub294 \ub3c4\uba54\uc778\uc740 ",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),"\uc774\uace0 \ud1a0\ud070\uc744 \ubc1c\uae09\ud558\ub294 \ub3c4\uba54\uc778\uc740 ",Object(i.b)("inlineCode",{parentName:"p"},"token.domain.com"),"\uc774\ub2e4. \uadf8\ub9ac\uace0 ",Object(i.b)("inlineCode",{parentName:"p"},"api.domain.com"),"\uc740 \ud1a0\ud070\uc774 \uc0ac\uc6a9\ub418\ub294 \ub3c4\uba54\uc778\uc774\ub2e4."),Object(i.b)("p",null,"\ud14c\uc2a4\ud2b8 \ub3c4\uba54\uc778\uc758 \uacbd\uc6b0\ub294 \ud14c\uc2a4\ud2b8 \ub3c4\uba54\uc778\ub4e4\ub07c\ub9ac \ud1b5\uc2e0\ud558\uba70 \ud1a0\ud070 \uc548\uc5d0 aud claim\uc774 test \uc2a4\ud14c\uc774\uc9c0\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub2e4."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\ub85c\uceec \ud1a0\ud070\uc774 \ubc1c\uae09\ub418\ub294 \uacfc\uc815\uc744 \uba3c\uc800 \uc0b4\ud3b4\ubcf4\uc790\uba74")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://domain.com"}),"domain.com"),"\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778 \ud589\uc704\ub97c \uc2dc\uc791\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c ",Object(i.b)("inlineCode",{parentName:"li"},"username"),"\uacfc ",Object(i.b)("inlineCode",{parentName:"li"},"password"),"\ub97c \ubc1b\uc2b5\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\ub294 ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://domain.com/api/login%EC%9D%84"}),"domain.com/api/login"),"\uc5d0 POST method\ub85c ",Object(i.b)("inlineCode",{parentName:"li"},"username"),", ",Object(i.b)("inlineCode",{parentName:"li"},"password"),"\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://domain.com/api/login%EC%9D%80"}),"domain.com/api/login\uc740")," ",Object(i.b)("inlineCode",{parentName:"li"},"token.domain.com"),"\uc5d0 ",Object(i.b)("inlineCode",{parentName:"li"},"username"),"\uacfc ",Object(i.b)("inlineCode",{parentName:"li"},"password"),"\ub97c POST method\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"token.domain.com"),"\uc5d0\uc11c \uc778\uc99d \ucc98\ub9ac\uac00 \uc644\ub8cc\ub418\uba74 reponse\ub85c token \uc815\ubcf4\ub4e4\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://domain.com/api/login%EC%9D%80"}),"domain.com/api/login\uc740")," token \uc815\ubcf4\ub97c set-cookie\ub85c \uc751\ub2f5\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."))),Object(i.b)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\ub294 ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://domain.com/api/login%EC%97%90"}),"domain.com/api/login"),"\uc758 \uc751\ub2f5\uc73c\ub85c token \uc815\ubcf4\ub97c \ucfe0\ud0a4\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\ubc18\uba74, \uc0c8\ub85c\uc6b4 oauth2 \ub85c\uadf8\uc778 \ud1a0\ud070 \ubc1c\uae09 \uacfc\uc815\uc744 \uc0b4\ud3b4\ubcf4\uc790\uba74")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"oauth2.provider.com"),"\uc5d0\ub294 \uc774\ubbf8 ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://token.domain.com/oauth2/provider/callback%EC%9D%B4"}),"token.domain.com/oauth2/provider/callback\uc774")," \ub4f1\ub85d \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"domain.com"),"\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778 \ud589\uc704\ub97c \uc2dc\uc791\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\ub294 ",Object(i.b)("inlineCode",{parentName:"li"},"oauth2.provider.com"),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},"\ube0c\ub77c\uc6b0\uc800\ub294 ",Object(i.b)("inlineCode",{parentName:"li"},"oauth2.provider.com"),"\uc5d0\uc11c \ub85c\uadf8\uc778\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"oauth2.provider.com"),"\uc774 \uc778\uc99d\uc744 \uc644\ub8cc\ud558\uba74 ",Object(i.b)("inlineCode",{parentName:"li"},"token.domain.com/oauth2/provider/callback"),"\uc73c\ub85c redirect\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://token.domain.om/oauth2/callback%EC%9D%80"}),Object(i.b)("inlineCode",{parentName:"a"},"token.domain.om/oauth2/callback"),"\uc740")," ",Object(i.b)("inlineCode",{parentName:"li"},"oauth2.provider.com"),"\uc758 accesss_token, refresh_token\uc744 \ubc1b\uc544 \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://token.domain.com/oauth2/callback%EC%9D%80"}),Object(i.b)("inlineCode",{parentName:"a"},"token.domain.com/oauth2/callback"),"\uc740")," \uc0ac\uc6a9\uc790 \uc778\uc99d \ud6c4\uc5d0 \uc751\ub2f5\uc744 \uc90d\ub2c8\ub2e4.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"set-cookie Header\uc5d0 cookie domain attribute\ub97c d",Object(i.b)("inlineCode",{parentName:"li"},"omain.com"),"\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),Object(i.b)("li",{parentName:"ol"},"\uc751\ub2f5\uc740 ",Object(i.b)("inlineCode",{parentName:"li"},"domain.com"),"\uc73c\ub85c redirect\ud569\ub2c8\ub2e4.")))),Object(i.b)("h3",{id:"\ud83e\udddf\u2642\ufe0f-\uc880\ube44\ub9db-\ucfe0\ud0a4\ub294-\uc65c-\uc8fd\uc9c0-\uc54a\uc744\uae4c"},"\ud83e\udddf\u200d\u2642\ufe0f \uc880\ube44\ub9db \ucfe0\ud0a4\ub294 \uc65c \uc8fd\uc9c0 \uc54a\uc744\uae4c?"),Object(i.b)("p",null,"\uc704\uc758 \ud750\ub984\uc5d0\uc11c \ubcf4\uba74 ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://domain.com"}),"domain.com"),"\uc5d0\uc11c set-cookie\ub97c \ud55c token cookie\ub294 \ub530\ub85c domain \uc124\uc815\uc744 \uc548\ud574\uc92c\uae30 \ub54c\ubb38\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),"\uc73c\ub85c \ucfe0\ud0a4\uc5d0 \uc800\uc7a5\ub418\uc5c8\ub2e4. \uadf8\ub9ac\uace0 ",Object(i.b)("inlineCode",{parentName:"p"},"token.domain.com"),"\uc5d0\uc11c set-cookie\ub97c \ud55c token cookie\ub294 domain attribute\uc5d0 ",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),"\uc73c\ub85c \ub3c4\uba54\uc778\uc744 \uc815\ud574\uc8fc\uc5c8\ub2e4."),Object(i.b)("p",null,'\uc774\ucbe4\uc5d0\uc11c \ub0b4 \ub1cc\ud53c\uc15c\uc740 "\uc74c, ',Object(i.b)("inlineCode",{parentName:"p"},"domain.com")," \ucfe0\ud0a4\uac00 \uc6d0\ub798 \uc0ac\uc6a9\ub418\uace0 \uc788\uc5c8\uace0, ",Object(i.b)("inlineCode",{parentName:"p"},"token.domain.com"),"\uc5d0\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),' \ub3c4\uba54\uc778\uc73c\ub85c \ucfe0\ud0a4\ub97c \uc124\uc815\ud588\uc73c\ub2c8 \uc798 \ub418\uaca0\uc9c0? \ud750\ud750\ud76b" \uc774\ub7f0 \ud589\ubcf5\ud68c\ub85c\ub97c \ub9c8\uad6c \ub3cc\ub9ac\uace0 \uc788\uc5c8\ub2e4.'),Object(i.b)("p",null,"\uadf8\ub7f0\ub370 \uc774\uc0c1\ud558\uac8c\ub3c4 \uc5ec\uc804\ud788 \ub85c\uadf8\uc544\uc6c3\uc740 \uc548\ub418\uace0 \uc788\uc5c8\ub2e4. \ub098\ub294 \ubd84\uba85\ud788 \ub3c4\uba54\uc778\uc744 \uc124\uc815\ud574\uc92c\uace0 set-cookie ",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),"\uc73c\ub85c \ud574\uc92c\ub294\ub370 \uc65c \uc548\ub420\uae4c?"),Object(i.b)("h3",{id:"\ud83e\uddd8\u2640\ufe0f-\uc694\uac00\ub9db-\ucfe0\ud0a4\ub294-\uc694\uac00\ub85c-\ub9c8\uc74c\uc758-\uc218\ub828\uc744-\ud558\uace0-\ub098\ub294-circleci\ub85c-\uc778\ub0b4\ub97c-\uc218\ub828\ud55c\ub2e4"},"\ud83e\uddd8\u200d\u2640\ufe0f \uc694\uac00\ub9db \ucfe0\ud0a4\ub294 \uc694\uac00\ub85c \ub9c8\uc74c\uc758 \uc218\ub828\uc744 \ud558\uace0 \ub098\ub294 CircleCI\ub85c \uc778\ub0b4\ub97c \uc218\ub828\ud55c\ub2e4"),Object(i.b)("p",null,"\uba87\uac00\uc9c0 \uac00\uc815\uc744 \uc138\uc6e0\ub2e4."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\ub2e4\ub978 \ub3c4\uba54\uc778\uc5d0\uc11c \uc124\uc815\ud574\uc900 \ucfe0\ud0a4\ub294 \ub3c4\uba54\uc778\ubcc4\ub85c \uad00\ub9ac\ub41c\ub2e4. \uc989, \ub85c\uadf8\uc544\uc6c3 \ud560\ub54c \ucfe0\ud0a4\ub97c \uc0ad\uc81c\ud558\ub294 \uac83\ub3c4 ",Object(i.b)("inlineCode",{parentName:"p"},"token.domain.com"),"\uc5d0\uc11c \ud574\uc918\uc57c\ud55c\ub2e4.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"set-cookie attribute \uac12\uc5d0 \uc758\ud574 \uc0ac\uc6a9\ub418\ub294 \ucfe0\ud0a4\uac00 \ub2e4\ub974\ub2e4."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"sameSite \uc124\uc815\uc5d0 \uc758\ud574 \ub3c4\uba54\uc778\ubcc4\ub85c \uc800\uc7a5\ub418\ub294 \ucfe0\ud0a4\uac00 \ub2e4\ub974\ub2e4."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"\uc608\ub97c \ub4e4\uc5b4, sameSite\uac00 Lax\uc77c\ub54c \uc0ac\uc6a9\ub418\ub294 tokens\ub77c\ub294 \ucfe0\ud0a4\uc640 None\uc77c\ub54c \uc0ac\uc6a9\ub418\ub294 tokens\ub77c\ub294 \ucfe0\ud0a4\uac00 \ub2e4\ub974\ub2e4\ub358\uac00?"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"secure \uc124\uc815\uc5d0 \uc758\ud574 \ub3c4\uba54\uc778\ubcc4\ub85c \uc800\uc7a5\ub418\ub294 \ucfe0\ud0a4\uac00 \ub2e4\ub974\ub2e4."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"\uc608\ub97c \ub4e4\uc5b4, secure\uac00 true\uc778 tokens\ub294 https\ub85c \ubc14\ub85c \uc804\uc1a1\ub420 \uc218 \uc788\uace0, false\uc778 tokens\ub294 \ud55c\ubc88 \uc554\ud638\ud654 \ud574\uc11c \uc800\uc7a5\ud55c \ucfe0\ud0a4\ub77c\ub358\uac00?"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"express\uc5d0\uc11c cookie\ub97c \uc124\uc815\ud558\ub294 \ub2e4\ub978 \ubc29\ubc95\uc774 \uc788\ub2e4."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"set-cookie\ud560\ub54c overwrite \uc635\uc158\uc774 \uc788\ub2e4.(",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.npmjs.com/package/cookies"}),"cookies library"),")"),Object(i.b)("li",{parentName:"ol"},"cookieClear\ub97c \ud574\uc918\uc57c\ud55c\ub2e4.")))),Object(i.b)("p",null,"\ubb38\uc81c\ub294 \ub3c4\uba54\uc778\uc5d0\uc11c set-cookie\ub97c \ud655\uc778\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \ud68c\ub2f9 10\ubd84\uc774\uc0c1 \uac78\ub9ac\ub294 CircleCI \ubc30\ud3ec\ub97c \ud14c\uc2a4\ud2b8\ub9c8\ub2e4 \ub3cc\ub824\uc918\uc57c \ud588\ub2e4. \ud83e\udd2a \uacb0\uad6d \uc704\uc758 \ubaa8\ub4e0 \ubc29\ubc95(\uadf8 \uc774\uc0c1\uc758 \ub354 \ub9ce\uc740 \ubc29\ubc95)\uc744 \ub2e4 \ud14c\uc2a4\ud2b8 \ud574\ubd10\ub3c4 \uacb0\uad6d \ud574\ub2f5\uc774 \ub418\ub294 \uac83\uc740 \uc5c6\uc5c8\ub2e4."),Object(i.b)("h3",{id:"-\uc545\ub9c8\ub9db-\ucfe0\ud0a4\ub294-\uc545\ub9c8\ub85c-\ubcc0\uc2e0\ud55c\ub2e4"},"\ud83d\ude08 \uc545\ub9c8\ub9db \ucfe0\ud0a4\ub294 \uc545\ub9c8\ub85c \ubcc0\uc2e0\ud55c\ub2e4"),Object(i.b)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c, \uc774\uc720\ub294 \ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790\ub3c4\uad6c\ub85c \ud655\uc778\ud574\ubcf4\ub2c8 \ud328\ud0b7\uc774 \ub4e4\uc5b4\uc62c\ub54c\ub294 set-cookie\uc5d0 domain attribute\uac00 ",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),"\uc73c\ub85c \ub4e4\uc5b4\uc624\ub294\ub370 \uc800\uc7a5\ub420 \ub54c\ub294 ",Object(i.b)("inlineCode",{parentName:"p"},".domain.com"),"\uc73c\ub85c \uc800\uc7a5\ub418\uace0 \uc788\uc5c8\ub2e4. \ucc98\uc74c\uc5d0\ub294 \uc704\uc5d0\uc11c \uc598\uae30\ud55c sameSite\uac00 \uc798\ubabb \ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c ",Object(i.b)("inlineCode",{parentName:"p"},".domain.com"),"\uc73c\ub85c \uc800\uc7a5\ub418\ub294 \uc904 \uc54c\uace0 sameSite \uc124\uc815\uc744 \uac74\ub4dc\ub838\ub2e4. \uadf8\ub7ec\ub098 \uadf8\uac74 \ud574\uacb0\ubc29\ubc95\uc774 \uc544\ub2c8\uc5c8\ub2e4. \uae09\ud55c \ub9c8\uc74c\uc5d0 \uba54\uc778 \ub3c4\uba54\uc778\uc758 next api\uc5d0 \ub2e4\uc2dc \uc791\uc5c5\uc744 \ud560\uae4c \ud588\uc9c0\ub9cc \uadf8\ub7ec\uae30\uc5d4 \ub3c4\uba54\uc778 \uc5ed\ud560\uc774 \uc560\ub9e4\ud558\uace0 \uc791\uc5c5 \uacf5\uc218\uac00 \ucef8\ub2e4."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\uc628\uac16 \uc0bd\uc9c8\uc758 \uc2dc\ub3c4 \ub05d\uc5d0 \uacb0\uad6d \ucc3e\uc544\ub0b8 \ubc29\ubc95\uc740 cookie\ub97c \uc800\uc7a5\ud558\ub294 \ub85c\uceec \ub85c\uadf8\uc778\uacfc \ub85c\uadf8\uc544\uc6c3\uc758 domain attribute\ub97c ",Object(i.b)("inlineCode",{parentName:"strong"},".domain.com"),"\uc73c\ub85c \uc124\uc815\ud574\uc92c\ub2e4.")),Object(i.b)("h2",{id:"\u2642\ufe0f-\ucfe0\ud0a4\ub7f0\uc774-\ub05d\ub0a0-\ub54c\ub294-\uacb0\uad6d-\ucfe0\ud0a4\uac00-\uc8fd\uc5c8\uc744\ub54c-\ubfd0\uc774\ub2e4"},"\ud83c\udfc3\u200d\u2642\ufe0f \ucfe0\ud0a4\ub7f0\uc774 \ub05d\ub0a0 \ub54c\ub294 \uacb0\uad6d \ucfe0\ud0a4\uac00 \uc8fd\uc5c8\uc744\ub54c \ubfd0\uc774\ub2e4."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"\ubb54\uac00 \uae00\uc744 \uc4f0\ub2e4 3\uc8fc\uc758 \uadf8 \uc628\uac16 \uace0\uc0dd\uc774 \ud55c \uc904\ub85c \uc694\uc57d\ub41c \uac83 \uac19\uc544 \ud604\ud0c0\uac00 \uc628\ub2e4")," \ud83d\ude1e")),Object(i.b)("p",null,"\uc9c0\uae08 \ubb38\ub4dd \uc0dd\uac01\ud574\ubcf4\ub2c8 \uc65c \uc774\ub807\uac8c \uac04\ub2e8\ud55c \ubc29\ubc95\uc744 \uc65c \uadf8\ub807\uac8c \ud55c\ucc38\uc744 \ud5e4\uba54\uace0 \uc788\uc5c8\ub294\uc9c0... \uba38\ub9ac\uac00 \uba4d\uccad\ud558\uba74 \ubab8\uc774 \uace0\uc0dd\ud558\ub294 \uac83\uc774\uc5c8\ub2e4. \uc774\ubc88 \uc0bd\uc9c8\uc744 \ud1b5\ud574 \uc5bb\uc740 \uad50\ud6c8\uc744 \uc815\ub9ac\ud558\uba74 \uc544\ub798\ub85c \uc815\ub9ac \ud560 \uc218 \uc788\uaca0\ub2e4."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\uc544\ub798\uc758 \uac00\uc815 \uc911 \ud558\ub098\uc5d0\ub294 Cookie domain attribute\uc5d0 prefix\ub85c dot(.)\uc774 \ubd99\ub294 \uac83 \uac19\ub2e4.(chrome, firefox \uae30\uc900)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"domain attribute\ub97c \uc124\uc815\ud574\uc92c\uc744 \ub54c"),Object(i.b)("li",{parentName:"ul"},"subdomain\uc5d0\uc11c domain attribute\ub97c \uc124\uc815\ud574\uc92c\uc744 \ub54c"))),Object(i.b)("li",{parentName:"ol"},"domain attribute\uac00 \ub2e4\ub974\uba74 \ub3d9\uc77c\ud55c name\uc758 \ucfe0\ud0a4\uac00 \uc874\uc7ac\ud560 \uc218 \uc788\ub2e4.",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"domain.com\uc73c\ub85c tokens cookie\uc640 .domain.com\uc73c\ub85c tokens cookie\uac00 \uc788\ub2e4\uba74 \ub458\uc774 \uacf5\uc874 \ud560 \uc218 \uc788\uc73c\uba70, \uc6b0\uc120\uc21c\uc704\uc5d0 \ub530\ub77c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc0ac\uc6a9\ub41c\ub2e4."))),Object(i.b)("li",{parentName:"ol"},"2\uc640 \uac19\uc740 \uacbd\uc6b0\ub85c domain attribute\uac00 \ub2e4\ub974\uba74 cookie\uac00 \uc9c0\uc6cc\uc9c0\uc9c0 \uc54a\ub294\ub2e4.(overwrite)"),Object(i.b)("li",{parentName:"ol"},"\uc704\uc758 \uc774\uc720\ub85c \ud639\uc2dc \uc5ec\ub7ec \uc11c\ube0c\ub3c4\uba54\uc778\uc744 \uac16\ucd94\uace0 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, domain attribute\ub97c \uc0c1\uc2dc \ub123\uc5b4\uc8fc\ub294 \uac83\uc774 \uc88b\ub2e4."),Object(i.b)("li",{parentName:"ol"},"domain attribute\ub294 depth\uac00 \uae4a\uc740 subdomain\ub3c4 \uc778\uc2dd\ud55c\ub2e4.",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},".token.test.domain.com"),"\uc5d0\uc11c \ubc1c\uae09\ud55c .domain.com \ud1a0\ud070 \ucfe0\ud0a4\ub97c ",Object(i.b)("inlineCode",{parentName:"p"},".test.domain.com"),"\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."))),Object(i.b)("li",{parentName:"ol"},"Chrome(@^80)\uc758 \uacbd\uc6b0 sameSite\ub97c \uc9c0\uc815\ud574\uc8fc\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 ",Object(i.b)("inlineCode",{parentName:"li"},"sameSite=Lax"),"\uac00 \uae30\ubcf8 \uc124\uc815\uc774\ub2e4.(\uae30\uc874 ",Object(i.b)("inlineCode",{parentName:"li"},"sameSite=None"),")"),Object(i.b)("li",{parentName:"ol"},"Firefox\uc758 \uacbd\uc6b0 expires attribute\uac00 \ud604\uc7ac \uc2dc\uac04 \uc774\uc804\uc77c \uacbd\uc6b0 \ubb34\ud6a8\ub41c\ub2e4\ub294 \ucf58\uc194 \uba54\uc2dc\uc9c0\uac00 \uc788\uc73c\ub098 ",Object(i.b)("inlineCode",{parentName:"li"},"Set-Cookie")," \ud5e4\ub354 \uc790\uccb4\ub294 \uc801\uc6a9\ub418\uc5c8\ub2e4\uac00 expires\uc5d0 \ub530\ub77c \uc989\uac01 \uc0ad\uc81c\ub418\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4."),Object(i.b)("li",{parentName:"ol"},"Firefox\uc758 \uacbd\uc6b0 sameSite attribute(",Object(i.b)("inlineCode",{parentName:"li"},"sameStie=None"),")\uac00 secure attribute(",Object(i.b)("inlineCode",{parentName:"li"},"secure=false"),") \uc124\uc815 \uc5c6\uc774 \uc0ac\uc6a9\ub418\uba74 \uc544\ub798\uc758 \ucf58\uc194 warning\uc744 \ub098\ud0c0\ub0b8\ub2e4. \uace7 \uc720\ud6a8\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc870\uce58\ud55c\ub2e4\ub294 \uc758\ubbf8\ub85c \uc608\uc0c1\ub41c\ub2e4.",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"\ucfe0\ud0a4 \u201ctokens\u201d\ub294 \u201cSameSite\u201d \uc18d\uc131\uc774 \u201csecure\u201d \uc18d\uc131\uc774 \uc5c6\uc774 \u201cNone\u201d\uc774\ub098 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uac12\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uace7 \uac70\ubd80\ub429\ub2c8\ub2e4. \u201cSameSite\u201d \uc18d\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite%EB%A5%BC"}),"https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite\ub97c")," \uc77d\uc73c\uc138\uc694.")))),Object(i.b)("h2",{id:"\ud83e\uddd9\u2640\ufe0f-\uacb0\ub860"},"\ud83e\uddd9\u200d\u2640\ufe0f \uacb0\ub860"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("del",{parentName:"li"},"\ub9c8\ub140 \ub2e4\uc591\ud55c \ucfe0\ud0a4\ub97c \ub9cc\ub4e4\uace0 \ub2a5\ub825\ub3c4 \uc92c\ub294\ub370 \ucfe0\ud0a4\ub4e4\uc774 \uc81c\uba4b\ub300\ub85c \ud0c8\ucd9c\ud55c\uac8c \uc544\ub2d0\uae4c \uc2f6\ub2e4.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("del",{parentName:"li"},"\ucfe0\ud0a4\ub4e4\uc740 \ub2f9\ubd84\uac04 \uc624\ube10\uc5d0 \uc544\uc9c1 \uac07\ud600\uc788\uc744 \ud544\uc694\uac00 \uc788\ub2e4.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("del",{parentName:"li"},"\ucfe0\ud0a4\ub4e4\uc758 \ud0c8\ucd9c\uc744 \ub3c4\uc654\ub358 \ub0b4 \ud751\uc5ed\uc0ac\uac00 \uacb0\uad6d \ud0c8\ucd9c\ud558\uc9c0 \ubabb\ud55c\ucc44 \ub05d\ub098\uc11c \ub2e4\ud589\uc774\ub2e4.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("del",{parentName:"li"},"\ub370\ube0c\uc2dc\uc2a4\ud130\uc988\ub294 \uc774\ub7f0 \ubc30\uacbd \uc18d\uc5d0 \ub05d\ub098\uc9c0 \uc54a\ub294 \ub9f5\uc744 \ub9cc\ub4e4\uc5c8\uc744\uc9c0 \ubaa8\ub978\ub2e4.")),Object(i.b)("li",{parentName:"ul"},"\ucfe0\ud0a4\ub294 \uc798 \uc4f0\uba74 \uad49\uc7a5\ud788 \uc720\uc6a9\ud558\uace0 \ubcf4\uc548\uc801\uc778 \uc870\uce58\ub3c4 \ub9ce\uc774 \ub418\uc5b4\uc788\ub2e4. \ud558\uc9c0\ub9cc \uc81c\ub300\ub85c \ubaa8\ub974\uace0 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc624\ube10\uc774 \uc544\ub2c8\ub77c \ub0b4 \uba58\ud0c8\uc774 \ubc14\uc0ac\uc0ad \ud560 \uc218\ub3c4 \uc788\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ucfe0\ud0a4\ub294 \uc624\ub79c \uc2dc\uac04\ub3d9\uc548 \uc0ac\uc6a9\ub418\uba74\uc11c \uc870\uae08\uc529 \ubcf4\uc548\uc801 \uae30\uc220\uc774 \ub367\ubd99\uc5ec\uc9c0\uba74\uc11c \ubc1c\uc804\ud574\uc654\ub2e4. \uc624\ub798\ub41c \uae30\uc220\uc774\ub77c\uace0 \ud574\uc11c \uc595\ubcf4\uba74 \ud070\ucf54 \ub2e4\uce60\ubfd0\ub354\ub7ec \uacfc\uac70 \uc9c0\uc2dd\uc744 \uac00\uc9c0\uace0 \uc0ac\uc6a9\ud588\ub2e4\uac04 \uc11c\ube44\uc2a4\uac00 \ub9dd\uac00\uc9c0\uae30 \uc2ed\uc0c1\uc774\ub2e4."),Object(i.b)("li",{parentName:"ul"},"\ud639\uc5ec \ub0b4\uc6a9 \uc911 ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/yoonhoGo/yoonhoGo.github.io/edit/documentation/blog/2020-09-08%20HTTPS%EB%A5%BC%20%EC%93%B0%EB%A9%B4%20%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C%EB%A5%BC%20%ED%8F%89%EB%AC%B8%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EB%82%B4%EB%8F%84%20%EB%90%A0%EA%B9%8C.md"}),"\uc218\uc815 \ud560 \uc0ac\ud56d(PR)")," \uc788\uac70\ub098 ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/yoonhoGo/yoonhoGo.github.io/issues"}),"\uc9c8\ubb38\uc774(Issue)")," \uc788\uc73c\uc2dc\uba74 \ub9c1\ud06c \ucc38\uace0 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.")),Object(i.b)("script",{src:"https://utteranc.es/client.js",repo:"yoonhoGo/yoonhoGo.github.io","issue-term":"og:title",label:"blog-comment",theme:"github-light",crossorigin:"anonymous",async:!0}))}m.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),m=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,b=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,j=p["".concat(b,".").concat(d)]||p[d]||O[d]||i;return a?n.a.createElement(j,c(c({ref:t},l),{},{components:a})):n.a.createElement(j,c({ref:t},l))}));function j(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,b=new Array(i);b[0]=d;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:o,b[1]=c;for(var l=2;l<i;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);