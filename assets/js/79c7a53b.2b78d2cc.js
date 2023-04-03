"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),w=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=w(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=w(n),c=a,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var w=2;w<r;w++)o[w]=n[w];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>w});var i=n(7462),a=(n(7294),n(3905));const r={title:"Javascript",id:"4-work-with-multiple-windows-javascript",slug:"javascript/",number:4,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"javascript"},o="How to Work with Multiple Windows",l={unversionedId:"updated-tips/work-with-multiple-windows/4-work-with-multiple-windows-javascript",id:"updated-tips/work-with-multiple-windows/4-work-with-multiple-windows-javascript",title:"Javascript",description:"Intro",source:"@site/docs/updated-tips/4-work-with-multiple-windows/javascript.md",sourceDirName:"updated-tips/4-work-with-multiple-windows",slug:"/updated-tips/work-with-multiple-windows/javascript/",permalink:"/docs/updated-tips/work-with-multiple-windows/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/4-work-with-multiple-windows/javascript.md",tags:[{label:"windows",permalink:"/docs/tags/windows"},{label:"multiple windows",permalink:"/docs/tags/multiple-windows"},{label:"new window",permalink:"/docs/tags/new-window"}],version:"current",frontMatter:{title:"Javascript",id:"4-work-with-multiple-windows-javascript",slug:"javascript/",number:4,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/docs/updated-tips/work-with-multiple-windows/csharp/"},next:{title:"Python",permalink:"/docs/updated-tips/work-with-multiple-windows/python/"}},s={},w=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:w},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-work-with-multiple-windows"},"How to Work with Multiple Windows"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"This tip will explain how to work with multiple windows in Selenium and switch between them."),(0,a.kt)("p",null,"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them."),(0,a.kt)("p",null,"On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others."),(0,a.kt)("p",null,"Let's step through a couple of examples to demonstrate."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"First we'll need to pull in our requisite libraries, declare our test class, and wire up some test setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/multiple-windows.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Multiple Windows", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,a.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," found on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/multiple-windows.spec.js\n// ...\n  it("non-deterministic switching", async function() {\n    await driver.get("http://the-internet.herokuapp.com/windows");\n    await driver.findElement(By.css(".example a")).click();\n    const windowHandles = await driver.getAllWindowHandles();\n    await driver.switchTo().window(windowHandles[0]);\n    assert((await driver.getTitle()) !== "New Window");\n    await driver.switchTo().window(windowHandles[windowHandles.length - 1]);\n    assert((await driver.getTitle()) === "New Window");\n  });\n// ...\n')),(0,a.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the last one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,a.kt)("p",null,"While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return in the order opened, others alphabetically."),(0,a.kt)("p",null,"Here's a more resilient approach that will work across all browsers."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/multiple-windows.spec.js\n// ...\n  it("browser agnostic switching", async function() {\n    await driver.get("http://the-internet.herokuapp.com/windows");\n    const windowHandlesBefore = await driver.getAllWindowHandles();\n    await driver.findElement(By.css(".example a")).click();\n    const windowHandlesAfter = await driver.getAllWindowHandles();\n    const newWindow = windowHandlesAfter.find(\n      handle => !windowHandlesBefore.includes(handle)\n    );\n    await driver.switchTo().window(windowHandlesBefore[0]);\n    assert((await driver.getTitle()) !== "New Window");\n    await driver.switchTo().window(newWindow);\n    assert((await driver.getTitle()) === "New Window");\n  });\n});\n')),(0,a.kt)("p",null,"After loading the page we store the window handles in a variable (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"windowHandlesBefore"),") and then proceed with clicking the new window link."),(0,a.kt)("p",null,"Now that we have two windows open we grab all of the window handles again (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"windowHandlesAfter"),") and search through them to find the new window handle (e.g., the handle that's in the new window handle collection but not the initial one). We store the result in another variable (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"newWindow"),") and then switch between the windows each time checking the page title to make sure the correct window is in focus."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find the window handle for the current window"),(0,a.kt)("li",{parentName:"ul"},"Click a link that opens a new window"),(0,a.kt)("li",{parentName:"ul"},"Find the window handle out of all available window handles"),(0,a.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,a.kt)("li",{parentName:"ul"},"Assert that the correct window is in focus"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium."),(0,a.kt)("p",null,"For more information about switching windows (and tabs) visit the official Selenium HQ ","[documentation page]"," (",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/interactions/windows/"},"https://www.selenium.dev/documentation/webdriver/interactions/windows/"),")."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip."))}u.isMDXComponent=!0}}]);