"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[86206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={language:"javascript",level:2,hide_sidebar:!0,publish_date:new Date("2015-07-08T00:00:00.000Z"),last_update:{date:new Date("2023-03-09T00:00:00.000Z")}},o=void 0,s={unversionedId:"take-screenshot-on-failure/javascript",id:"take-screenshot-on-failure/javascript",title:"javascript",description:"A Solution",source:"@site/docs/16-take-screenshot-on-failure/javascript.md",sourceDirName:"16-take-screenshot-on-failure",slug:"/take-screenshot-on-failure/javascript",permalink:"/docs/take-screenshot-on-failure/javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/16-take-screenshot-on-failure/javascript.md",tags:[],version:"current",lastUpdatedBy:"Esther",lastUpdatedAt:167832e4,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{language:"javascript",level:2,hide_sidebar:!0,publish_date:"2015-07-08T00:00:00.000Z",last_update:{date:"2023-03-09T00:00:00.000Z"}}},l={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. This is something that is fairly quick to add to your tests, and allows you to review these error messages."),(0,r.kt)("p",null,"Here is an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by importing our requisite libraries and wire up some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/screenshot.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\nconst fs = require("fs");\nconst path = require("path");\n\ndescribe("Screenshot", function() {\n  let driver;\n\n  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    if (this.currentTest.state !== "passed") {\n      const testName = this.currentTest.fullTitle().replace(/\\s/g, "-");\n      const fileName = path.join(__dirname, `screenshot_${testName}.jpg`);\n      fs.writeFileSync(fileName, await driver.takeScreenshot(), "base64");\n    }\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach")," we check to see if the test was unsuccessful (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'this.currenTest.state !== "passed"'),"). If not, then the test has either failed or errored and we capture a screenshot through the help of Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},".takeScreenshot()")," function. To save it to disk, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"fs")," and its ",(0,r.kt)("inlineCode",{parentName:"p"},"writeFileSync")," function. It takes the full path to save to, the payload (e.g., the screenshot), and the encoding (which for the image is ",(0,r.kt)("inlineCode",{parentName:"p"},'"base64"'),")."),(0,r.kt)("p",null,"To make the filename unique we use the test name after cleaning it up (by replacing spaces with ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"). When this command executes it will save an image file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"screenshot_Screenshot-on-failure.jpg"),") to the local system in the current working directory."),(0,r.kt)("p",null,"Now to wire up a test which will fail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/screenshot.spec.js\n// ...\n  it("on failure", async function() {\n    await driver.get("http://the-internet.herokuapp.com");\n    assert(true === false);\n  });\n});\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the homepage of ",(0,r.kt)("a",{parentName:"li",href:"http://github.com/tourdedave/the-internet"},"the-internet")),(0,r.kt)("li",{parentName:"ul"},"Fail on the assertion"),(0,r.kt)("li",{parentName:"ul"},"Capture a screenshot in the current working directory"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);