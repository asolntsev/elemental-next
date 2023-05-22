"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={title:"69: Safari",id:"69-safari-ruby",contentUrl:"docs/safari/69-safari-ruby",sidebar_label:"Ruby",text:"Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.",number:69,hide_table_of_contents:!0,publish_date:new Date("2015-08-25T00:00:00.000Z"),last_update:{date:new Date("2023-03-13T00:00:00.000Z")},tags:["safari","drivers","safaridriver","different browsers"],level:1,category:["tools"],language:"ruby"},o="Safari Browser",l={unversionedId:"safari/69-safari-ruby",id:"safari/69-safari-ruby",title:"69: Safari",description:"Intro",source:"@site/docs/69-safari/ruby.mdx",sourceDirName:"69-safari",slug:"/safari/69-safari-ruby",permalink:"/elemental-next/docs/safari/69-safari-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/69-safari/ruby.mdx",tags:[{label:"safari",permalink:"/elemental-next/docs/tags/safari"},{label:"drivers",permalink:"/elemental-next/docs/tags/drivers"},{label:"safaridriver",permalink:"/elemental-next/docs/tags/safaridriver"},{label:"different browsers",permalink:"/elemental-next/docs/tags/different-browsers"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1678665600,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"69: Safari",id:"69-safari-ruby",contentUrl:"docs/safari/69-safari-ruby",sidebar_label:"Ruby",text:"Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension.",number:69,hide_table_of_contents:!0,publish_date:"2015-08-25T00:00:00.000Z",last_update:{date:"2023-03-13T00:00:00.000Z"},tags:["safari","drivers","safaridriver","different browsers"],level:1,category:["tools"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/safari/69-safari-java"},next:{title:"Ruby",permalink:"/elemental-next/docs/mobile-testing-pyramid/71-mobile-testing-pyramid"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"safari-browser"},"Safari Browser"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Since Selenium 2.45.0, in order to use SafariDriver, you need to manually install the SafariDriver browser extension."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Running your Selenium tests on a different browser tends to require additional setup, and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver")," is no exception."),(0,n.kt)("p",null,"The following example will go through how to do it and make sure it's working."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Run the following command on the terminal:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$  /usr/bin/safaridriver --enable")),(0,n.kt)("p",null,"After that, make sure it's enabled. To do that:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"open ",(0,n.kt)("inlineCode",{parentName:"li"},"Safari")),(0,n.kt)("li",{parentName:"ol"},"go to ",(0,n.kt)("inlineCode",{parentName:"li"},"Develop")),(0,n.kt)("li",{parentName:"ol"},"click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Allow Remote Automations"))),(0,n.kt)("p",null,"Now if we open up an interactive Ruby terminal (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"irb"),") and launch a Selenium instance, here's what we'd see."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"> irb\nirb(main):001:0> require 'selenium-webdriver'\nirb(main):002:0> driver = Selenium::WebDriver.for :safari\n")),(0,n.kt)("p",null,"A successful communication between Safari and the Selenium Driver extension has occurred."),(0,n.kt)("p",null,"Now let's wire up a simple test so we can see that everything works as expect."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: safari.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :safari\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.title).to eql 'The Internet'\nend\n")),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When you save the file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"ruby safari.rb")," from the command-line), here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Safari opens"),(0,n.kt)("li",{parentName:"ul"},"The home page of ",(0,n.kt)("a",{parentName:"li",href:"http://github.com/tourdedave/the-internet"},"the-internet")," loads"),(0,n.kt)("li",{parentName:"ul"},"The title of the page is checked to make sure it's what we expect"),(0,n.kt)("li",{parentName:"ul"},"Safari closes")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing."),(0,n.kt)("p",null,"And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);