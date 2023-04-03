"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Javascript",id:"63-right-click-javascript",slug:"javascript/",number:63,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-28T00:00:00.000Z")},tags:["right-click","context menu","action builder","context click"],level:2,category:["fundamentals"],language:"javascript"},l="How to Right-click",o={unversionedId:"updated-tips/right-click/63-right-click-javascript",id:"updated-tips/right-click/63-right-click-javascript",title:"Javascript",description:"Intro",source:"@site/docs/updated-tips/63-right-click/javascript.md",sourceDirName:"updated-tips/63-right-click",slug:"/updated-tips/right-click/javascript/",permalink:"/docs/updated-tips/right-click/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/63-right-click/javascript.md",tags:[{label:"right-click",permalink:"/docs/tags/right-click"},{label:"context menu",permalink:"/docs/tags/context-menu"},{label:"action builder",permalink:"/docs/tags/action-builder"},{label:"context click",permalink:"/docs/tags/context-click"}],version:"current",frontMatter:{title:"Javascript",id:"63-right-click-javascript",slug:"javascript/",number:63,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-28T00:00:00.000Z"},tags:["right-click","context menu","action builder","context click"],level:2,category:["fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/docs/updated-tips/right-click/csharp/"},next:{title:"Python",permalink:"/docs/updated-tips/right-click/python/"}},c={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-right-click"},"How to Right-click"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By leveraging Selenium's ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html"},"Actions")," we can issue a right-click command (a.k.a. a ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html#contextClick"},(0,r.kt)("inlineCode",{parentName:"a"},"contextClick")),")."),(0,r.kt)("p",null,"You could then select an option from the menu by traversing it with keyboard keys (if a system dialog) or through ",(0,r.kt)("inlineCode",{parentName:"p"},"findElement")," (if a rendered element). It depends on how the application under test has implemented it."),(0,r.kt)("p",null,"Let's try an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/right-click.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Right click", function() {\n  let driver;\n\n  beforeEach(async function() {\n  this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now we're ready to write our test."),(0,r.kt)("p",null,"We'll use an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will trigger a JavaScript alert when when we right-click on a specific area of the page (",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/context_menu"},"link"),"). It will say ",(0,r.kt)("inlineCode",{parentName:"p"},"You selected a context menu"),". We'll grab this text and use it to assert that the menu was actually triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/right-click.spec.js\n// ...\n  it("displays browser context menu", async function() {\n    await driver.get("http://the-internet.herokuapp.com/context_menu");\n    const menuArea = await driver.findElement(By.id("hot-spot"));\n    await driver\n      .actions({ bridge: true })\n      .contextClick(menuArea)\n      .perform();\n    const alertText = await driver\n      .switchTo()\n      .alert()\n      .getText();\n    assert(alertText === "You selected a context menu");\n  });\n});\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),") from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser and visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find and right-click the area which will render a custom context menu"),(0,r.kt)("li",{parentName:"ul"},"JavaScript alert appears"),(0,r.kt)("li",{parentName:"ul"},"Grab the text of the JavaScript alert"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text from the alert is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To learn more about context menus, you can read ",(0,r.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/building-html5-context-menus"},"this write-up from the Tree House blog"),"."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About the Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);