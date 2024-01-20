"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[99378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={language:"javascript",level:1,hide_sidebar:!0,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")}},o=void 0,l={unversionedId:"how-to-work-with-javascript-alerts/javascript",id:"how-to-work-with-javascript-alerts/javascript",title:"javascript",description:"A Solution",source:"@site/tips/51-how-to-work-with-javascript-alerts/javascript.md",sourceDirName:"51-how-to-work-with-javascript-alerts",slug:"/how-to-work-with-javascript-alerts/javascript",permalink:"/tips/how-to-work-with-javascript-alerts/javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/51-how-to-work-with-javascript-alerts/javascript.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{language:"javascript",level:1,hide_sidebar:!0,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Our example application is available ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/javascript_alerts"},"here")," on ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has various JavaScript Alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel"),")."),(0,n.kt)("p",null,"First, we'll include our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/js-alerts.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("JS Alerts", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,n.kt)("p",null,"Now let's write our test."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/js-alerts.spec.js\n// ...\n  it("general use", async function() {\n    await driver.get("http://the-internet.herokuapp.com/javascript_alerts");\n    await driver.findElement(By.css("ul > li:nth-child(2) > button")).click();\n    const popup = await driver.switchTo().alert();\n    popup.accept();\n    const result = await driver.findElement(By.id("result")).getText();\n    assert(result == "You clicked: Ok");\n  });\n});\n')),(0,n.kt)("p",null,"A quick glance at the page's markup shows that there are no unique IDs on the buttons. In order to click on the second button (to trigger the JavaScript confirmation dialog) we need a locator which targets the second item in the unordered list."),(0,n.kt)("p",null,"After we click the button to trigger the JavaScript Alert we use Selenium's ",(0,n.kt)("inlineCode",{parentName:"p"},"switchTo().alert()")," to focus on the JavaScript pop-up and use ",(0,n.kt)("inlineCode",{parentName:"p"},".accept()")," to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ok")," (if we wanted to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel")," we would have used ",(0,n.kt)("inlineCode",{parentName:"p"},".dismiss()"),")."),(0,n.kt)("p",null,"After accepting the alert, our main browser window will automatically regain focus and the page will display the result that we chose. This text is what we use for our assertion, making sure that the words ",(0,n.kt)("inlineCode",{parentName:"p"},"You clicked: Ok")," are displayed on the page."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When we save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Load the page"),(0,n.kt)("li",{parentName:"ul"},"Click the second button on the page"),(0,n.kt)("li",{parentName:"ul"},"JavaScript Confirmation Alert appears"),(0,n.kt)("li",{parentName:"ul"},"Accept the JavaScript Confirmation Alert"),(0,n.kt)("li",{parentName:"ul"},"Assert that the result on the page is what we expect"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,n.kt)("inlineCode",{parentName:"p"},"switchTo().alert()"),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."),(0,n.kt)("p",null,"Happy Testing!"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},89417:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);