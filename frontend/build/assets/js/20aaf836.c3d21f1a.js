"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={title:"Java",id:"3-work-with-frames-java",slug:"java/",number:3,publish_date:new Date("2015-11-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["frames"],level:1,category:["fundamentals"],language:"java"},i="How to Work with Frames",s={unversionedId:"updated-tips/work-with-frames/3-work-with-frames-java",id:"updated-tips/work-with-frames/3-work-with-frames-java",title:"Java",description:"Intro",source:"@site/docs/updated-tips/3-work-with-frames/java.md",sourceDirName:"updated-tips/3-work-with-frames",slug:"/updated-tips/work-with-frames/java/",permalink:"/docs/updated-tips/work-with-frames/java/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/3-work-with-frames/java.md",tags:[{label:"frames",permalink:"/docs/tags/frames"}],version:"current",frontMatter:{title:"Java",id:"3-work-with-frames-java",slug:"java/",number:3,publish_date:"2015-11-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["frames"],level:1,category:["fundamentals"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/docs/updated-tips/work-with-frames/csharp/"},next:{title:"Javascript",permalink:"/docs/updated-tips/work-with-frames/javascript/"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-work-with-frames"},"How to Work with Frames"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"In this tip, you'll learn how to work with frames and write tests against them."),(0,n.kt)("p",null,"On occasion, we may encounter relics of the front-end world, such as frames. When writing tests against them, it's easy to make a mistake if we're not paying attention."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Rather than getting frustrated when authoring your tests, you can work with the elements in a frame by telling Selenium to switch to that frame first. Then the rest of your test should be more straightforward."),(0,n.kt)("p",null,"Let's explore further with some examples."),(0,n.kt)("h2",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"We'll first need to pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests."),(0,n.kt)("p",null,"==",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"!! Code examples still need to be added & validated!!")),"=="),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"==",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"!! Expected behavior still need to be added & validated!!")),"=="),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Now you can readily defeat frames when they cross your path."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About the Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);