"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[37618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={language:"javascript",level:1,hide_sidebar:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},i=void 0,s={unversionedId:"how-to-test-checkboxes/javascript",id:"how-to-test-checkboxes/javascript",title:"javascript",description:"A Solution",source:"@site/docs/45-how-to-test-checkboxes/javascript.md",sourceDirName:"45-how-to-test-checkboxes",slug:"/how-to-test-checkboxes/javascript",permalink:"/docs/how-to-test-checkboxes/javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/45-how-to-test-checkboxes/javascript.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"javascript",level:1,hide_sidebar:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},l={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"There are two ways to approach this issue -- by seeing if an element has a ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," attribute (a.k.a. performing an attribute lookup), or by asking an element if it has been ",(0,r.kt)("em",{parentName:"p"},"selected"),"."),(0,r.kt)("p",null,"We're going to go through each of these approaches to see their pros and cons."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For reference, here is the markup from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/checkboxes"},"the page we will be testing against")," (an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="checkbox"> unchecked<br>\n  <input type="checkbox" checked=""> checked\n</form>\n')),(0,r.kt)("p",null,"Let's start by requiring our dependent libraries, declare our test class, and write up some test setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/checkboxes.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Checkboxes", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Before we begin writing a test to verify the state of the page, let's walk through both checkbox approaches to see what Selenium gives us."),(0,r.kt)("p",null,"To do that we'll want to grab all of the checkboxes on the page and iterate through them once using an attribute lookup and again asking if the element is selected. For each we'll output the return values we get from Selenium."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/checkboxes.spec.js\n// ...\n  it("should list values for different approaches", async function() {\n    await driver.get("http://the-internet.herokuapp.com/checkboxes");\n    const checkboxes = await driver.findElements(\n      By.css(\'input[type="checkbox"]\')\n    );\n\n    console.log("With .getAttribute(\'checked\')");\n    for (let checkbox in checkboxes)\n      console.log(await checkboxes[checkbox].getAttribute("checked"));\n\n    console.log("\\nWith .is_selected");\n    for (let checkbox in checkboxes)\n      console.log(await checkboxes[checkbox].isSelected());\n  });\n});\n// ...\n')),(0,r.kt)("p",null,"When we save our file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line), here is the output we'll see."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"With .attribute('checked')\nnull\ntrue\n\nWith .is_selected\nfalse\ntrue\n")),(0,r.kt)("p",null,"With the attribute lookup, depending on the state of the checkbox, we receive either a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," boolean value whereas with ",(0,r.kt)("inlineCode",{parentName:"p"},".isSelected")," we get a boolean value either way."),(0,r.kt)("p",null,"Let's see what these approaches look like when put to use in our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/checkboxes.spec.js\n// ...\n  it("should list values for different approaches", async function() {\n    // ...\n    assert(checkboxes[checkboxes.length - 1].getAttribute("checked"));\n    assert(checkboxes[checkboxes.length - 1].isSelected());\n    assert(checkboxes[0].getAttribute("checked"));\n    assert(checkboxes[0].isSelected());\n  });\n});\n// ...\n')),(0,r.kt)("p",null,"With either approach we can simply assert on the return value (even if it's a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," -- since in JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") and have things work as expected."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save and run the file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find all of the checkboxes on the page"),(0,r.kt)("li",{parentName:"ul"},"Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Attribute lookups are generally meant for pulling information out of the page for review however in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. ",(0,r.kt)("inlineCode",{parentName:"p"},"isSelected")," should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About the Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);