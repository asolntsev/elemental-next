"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,h=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"61: How To Press Keyboard Keys",id:"61-keyboard-keys-javascript",contentUrl:"docs/how-to-press-keyboard-keys/61-keyboard-keys-javascript",sidebar_label:"Javascript",text:"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?",number:61,hide_table_of_contents:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"javascript"},s="How to Press Keyboard Keys",i={unversionedId:"how-to-press-keyboard-keys/61-keyboard-keys-javascript",id:"how-to-press-keyboard-keys/61-keyboard-keys-javascript",title:"61: How To Press Keyboard Keys",description:"Intro",source:"@site/docs/61-how-to-press-keyboard-keys/javascript.mdx",sourceDirName:"61-how-to-press-keyboard-keys",slug:"/how-to-press-keyboard-keys/61-keyboard-keys-javascript",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/61-keyboard-keys-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/61-how-to-press-keyboard-keys/javascript.mdx",tags:[{label:"keyboard",permalink:"/elemental-next/docs/tags/keyboard"},{label:"keys",permalink:"/elemental-next/docs/tags/keys"},{label:"key presses",permalink:"/elemental-next/docs/tags/key-presses"},{label:"tab",permalink:"/elemental-next/docs/tags/tab"},{label:"enter",permalink:"/elemental-next/docs/tags/enter"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"61: How To Press Keyboard Keys",id:"61-keyboard-keys-javascript",contentUrl:"docs/how-to-press-keyboard-keys/61-keyboard-keys-javascript",sidebar_label:"Javascript",text:"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests. Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter. But how do you do it and where do you start?",number:61,hide_table_of_contents:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["keyboard","keys","key presses","tab","enter"],level:1,category:["fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/61-keyboard-keys-java"},next:{title:"Python",permalink:"/elemental-next/docs/how-to-press-keyboard-keys/61-keyboard-keys-python"}},l={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-press-keyboard-keys"},"How to Press Keyboard Keys"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"On occasion you'll come across functionality that requires the use of keyboard key presses in your tests."),(0,n.kt)("p",null,"Perhaps you'll need to tab to traverse from one portion of the page to another, back out of some kind of menu or overlay with the escape key, or even submit a form with Enter."),(0,n.kt)("p",null,"But how do you do it and where do you start?"),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"You can easily issue a key press by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"sendKeys")," command."),(0,n.kt)("p",null,"This can be done to a specific element or generically with Selenium's Action Builder (",(0,n.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html#sendKeys"},"link"),"). Either approach will send a key press. The latter will send it to the element that's currently in focus in the browser (so you don't have to specify a locator along with it), whereas the prior approach will send the key press directly to the element found."),(0,n.kt)("p",null,"Let's try out a couple of examples."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"First we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/keyboard-keys.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Keyboard Keys", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,n.kt)("p",null,"Now we can write up our test."),(0,n.kt)("p",null,"Let's use an example from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will display what key has been pressed (",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/key_presses"},"link"),"). We'll use the result text that gets displayed to perform our assertion."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/keyboard-keys.spec.js\n  it("send keys", async function() {\n    await driver.get("http://the-internet.herokuapp.com/key_presses");\n    await driver.findElement(By.id("target")).sendKeys(Key.SPACE);\n    assert(\n      (await driver.findElement(By.id("result")).getText()) ===\n        "You entered: SPACE"\n    );\n  });\n});\n')),(0,n.kt)("p",null,"After visiting the page we find an element that's both visible and interactable with the keyboard (e.g., the input element on the page) and send the space key to it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},".sendKeys(Key.SPACE"),"). Then we grab the resulting text (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"driver.findElement(By.id('result')).getText()"),") and assert that it says what we expect (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"'You entered: SPACE'"),")."),(0,n.kt)("p",null,"Alternatively, we can issue a key press without finding the element first by using the Action Builder."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/keyboard-keys.spec.js\n// ...\n  it("send keys", async function() {\n        await driver.get("http://the-internet.herokuapp.com/key_presses");\n    await driver\n      .actions({ bridge: true })\n      .sendKeys(Key.TAB)\n      .perform();\n    assert(\n      (await driver.findElement(By.id("result")).getText()) ==\n        "You entered: TAB"\n    );\n  });\n});\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE: In order for this approach to work in browsers other than Firefox, we need to specify ",(0,n.kt)("inlineCode",{parentName:"strong"},"{bridge: true}")," when calling ",(0,n.kt)("inlineCode",{parentName:"strong"},"driver.actions")," (e.g., ",(0,n.kt)("inlineCode",{parentName:"strong"},"driver.actions({ bridge: true })"),"). You can see ",(0,n.kt)("a",{parentName:"strong",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html"},"the documentation")," for further details.")),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When we save this file and run it (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Visit the page"),(0,n.kt)("li",{parentName:"ul"},"Find the element and send the space key to it"),(0,n.kt)("li",{parentName:"ul"},"Find the result text on the page and check that it's what we expect"),(0,n.kt)("li",{parentName:"ul"},"Send the tab key to the element that's currently in focus"),(0,n.kt)("li",{parentName:"ul"},"Find the result text on the page and check that it's what we expect"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"If you have a specific element that you want to issue key presses to, then finding the element first is the way to go. If you don't have a receiving element, or you need to string together multiple key presses, then the Action Builder is what you should use."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);