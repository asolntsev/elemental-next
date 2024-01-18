"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[31978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=s,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={hide_table_of_contents:!0,publish_date:new Date("2014-01-07T00:00:00.000Z"),last_update:{date:new Date("2023-03-15T00:00:00.000Z")},category:"resources",language:"ruby"},o=void 0,i={unversionedId:"css-vs-xpath/ruby",id:"css-vs-xpath/ruby",title:"ruby",description:"A Solution",source:"@site/docs/32-css-vs-xpath/ruby.md",sourceDirName:"32-css-vs-xpath",slug:"/css-vs-xpath/ruby",permalink:"/docs/css-vs-xpath/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/32-css-vs-xpath/ruby.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1678838400,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{hide_table_of_contents:!0,publish_date:"2014-01-07T00:00:00.000Z",last_update:{date:"2023-03-15T00:00:00.000Z"},category:"resources",language:"ruby"}},l={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Finding Elements By ID and Class",id:"finding-elements-by-id-and-class",level:3},{value:"Finding Elements By Traversing",id:"finding-elements-by-traversing",level:3},{value:"What The Results Tell Us",id:"what-the-results-tell-us",level:2},{value:"Some Additional Food For Thought",id:"some-additional-food-for-thought",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"a-solution"},"A Solution"),(0,s.kt)("p",null,"Let's cut through the noise by running our own performance tests across all major browsers to see how CSS and\nXPath stack up and fall down. Then we will be able to determine a more helpful locator strategy."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"To test the differences between CSS and XPath, we will use two sets of tests. The first set will work with\nsimple attributes like ID and Class, and the other will traverse the DOM top down to work with nested elements."),(0,s.kt)("p",null,"Ideally, this would be run locally and the speed of each find element action would be measured and compared.\nBut for this we're going to use Sauce Labs and track the total test time for each run. While the prior is more\nprecise, the latter is more accurate since it demonstrates an end-to-end workflow."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE: For a more rigorous benchmark, check out\n",(0,s.kt)("a",{parentName:"strong",href:"https://elementalselenium.com/docs/xpath-vs-css-revisited/33-xpath-vs-css-revisited"},"Tip 33 -- CSS vs. XPath, Under a Microscope"),".")),(0,s.kt)("p",null,"For our example application we will use ",(0,s.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tables"},"a page with two HTML data tables"),".\nOne table is written without helpful attributes, and the other with them.\nThe test code used can be seen ",(0,s.kt)("a",{parentName:"p",href:"https://gist.github.com/tourdedave/8309313"},"here"),"."),(0,s.kt)("p",null,"Here are the results after running the suite three consecutive times and averaging them (each linkable to a job\nin Sauce Labs)."),(0,s.kt)("h3",{id:"finding-elements-by-id-and-class"},"Finding Elements By ID and Class"),(0,s.kt)("p",null,"Browser | CSS | XPath",(0,s.kt)("br",{parentName:"p"}),"\n","Internet Explorer 8 | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/99c76814cf9749ef83a0908af96f36e8"},"23 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/3052b7b1d04d4a6ca8e69a78e2c7143f"},"22 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Chrome 31           | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/57e12106969b4c27a888f34815eabade"},"17 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/aadb81d6c7e74485aa6b4cc8b5545306"},"16 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Firefox 26          | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/0195437ad34f41be9ccf50d2b354bca5"},"22 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/882bb654f1f247938d9283acd687c6a7"},"22 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Opera 12            | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/dc33e27d94ed4a6481375223bf836647"},"17 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/0f1187556f50476484c71e182151c70c"},"20 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Safari 5            | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/4bc307aec4d9467e85538d29ac9929d1"},"18 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/8bd1c7fbb2604429ba903f0a814ee9df"},"18 seconds"),"  "),(0,s.kt)("h3",{id:"finding-elements-by-traversing"},"Finding Elements By Traversing"),(0,s.kt)("p",null,"Browser | CSS | XPath",(0,s.kt)("br",{parentName:"p"}),"\n","Internet Explorer 8 | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/4caa9a370f234359afbd31bb86ae3089"},"not supported"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/8405a88ef187475d9ca191fb2adf5634"},"29 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Chrome 31           | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/cdae032631a34f87b75ca1daadbaf6cf"},"24 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/cae82a0567d845858c35602d34558f8c"},"26 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Firefox 26          | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/62192045bf2149e6bae5f1010b491810"},"27 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/50dc24e1e484489cbe8eaa8eb2cebbf1"},"27 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Opera 12            | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/399fbd76410d42ca9207ed829da93952"},"25 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/0f4bd7a9ab8c4bdcb5d0bef91043c41b"},"25 seconds"),(0,s.kt)("br",{parentName:"p"}),"\n","Safari 5            | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/9247cb6c27c9431b8f5d555ee00e22c3"},"23 seconds"),"  | ",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/tests/7cf2656786094645b9fcf2329f452c80"},"22 seconds"),"  "),(0,s.kt)("h2",{id:"what-the-results-tell-us"},"What The Results Tell Us"),(0,s.kt)("p",null,"The results help illustrate and illuminate a couple of things."),(0,s.kt)("p",null,"For starters there is no dramatic difference in performance between XPath and CSS. This is surprising since\nit is ",(0,s.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/13975595/why-one-should-prefer-using-css-over-xpath-in-ie/14139380#14139380"},"the main reason cited in favor of CSS"),".\nThere may be other functionality or page structures that demonstrates this speed gap (e.g. more dense and\ncomplex pages), but it's not readily apparent -- and I'm skeptical that it would make a substantial impact\n(e.g. the order of magnitude difference demonstrated by ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/santiycr"},"Santi")," in ",(0,s.kt)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=6vPu3TO6XZ4"},"a presentation at the SF Selenium Meetup back in 2011"),")."),(0,s.kt)("p",null,"Traversing the DOM in older browsers like Internet Explorer 8 does not work with CSS but is fine with XPath. And\nXPath can walk up the DOM (e.g. from child to parent), whereas CSS can only traverse down the DOM (e.g.\nfrom parent to child)."),(0,s.kt)("p",null,"Based on the data, XPath looks more favorable than it once was."),(0,s.kt)("h2",{id:"some-additional-food-for-thought"},"Some Additional Food For Thought"),(0,s.kt)("p",null,"Not being able to traverse the DOM with CSS in older browsers isn't necessarily a bad thing. To me it's more of an\nindicator that your page has poor design and could benefit from some helpful markup. I outline an approach\nin ",(0,s.kt)("a",{parentName:"p",href:"https://elementalselenium.com/docs/how-to-work-with-tables/25-tables"},"a previous tip"),' under the heading\n"But What About Older Browsers?".'),(0,s.kt)("p",null,"Some other arguments in favor of CSS are that they are more readable, brief, and concise. While I tend to agree,\nit is a subjective call. Sauce Labs has\n",(0,s.kt)("a",{parentName:"p",href:"https://saucelabs.com/resources/blog/selenium-tips-css-selectors"},"a good set of examples that demonstrate CSS and XPath side-by-side to accomplish both simple and advanced tasks"),".\nIt's worth a look for you to determine for yourself."),(0,s.kt)("p",null,"In ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/bjburton"},"Ben Burton"),"'s talk (",(0,s.kt)("a",{parentName:"p",href:"http://vimeo.com/44133409"},"Selenium WebDriver Best Practices"),") he posits that you\nshould use CSS because that's how applications are built. This makes the tests easier to write, talk about, and have\nothers help maintain. This is also a point that Santi makes in his presentation."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/adamgoucher"},"Adam Goucher"),"'s advice is to adopt a more hybrid approach -- focusing first on IDs, then CSS, and leveraging\nXPath only when you ",(0,s.kt)("strong",{parentName:"p"},"need")," it (e.g. walking up the DOM). He says he does this without hesitation because it's\nthe right tool for the task, and that XPath will always be more powerful for advanced locators."),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"So, which do you choose?"),(0,s.kt)("p",null,"It's a tough call to make. Especially now that we're armed with the knowledge that the choice is not as reliant\non performance as it once was. But the choice is not as permanent as\n",(0,s.kt)("a",{parentName:"p",href:"https://elementalselenium.com/docs/adding-a-language/21-choosing-a-language"},"choosing a programming language"),", and\nif you are using helpful abstraction (e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://elementalselenium.com/docs/use-a-page-object/7-use-a-page-object"},"Page Objects"),")\nthen leveraging a hybrid approach is simple to implement."),(0,s.kt)("p",null,"It's just a matter of finding what works for you and your team and not listening to all the hype."),(0,s.kt)("p",null,"Good luck and Happy Testing!"),(0,s.kt)("h2",{id:"about-the-author"},"About The Author"),(0,s.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."),(0,s.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);