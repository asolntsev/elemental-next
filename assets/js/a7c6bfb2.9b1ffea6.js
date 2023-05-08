"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"53: Growl",id:"53-growl-csharp",contentUrl:"docs/growl/53-growl-csharp",sidebar_label:"Csharp",text:"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue.",number:53,hide_table_of_contents:!0,publish_date:new Date("2016-11-22T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["jquery","growl","growl notifications","jquery-growl"],level:2,category:["troubleshooting"],language:"csharp"},i="How to Add Growl Notifications to Your Tests",l={unversionedId:"growl/53-growl-csharp",id:"growl/53-growl-csharp",title:"53: Growl",description:"Intro",source:"@site/docs/53-growl/csharp.md",sourceDirName:"53-growl",slug:"/growl/53-growl-csharp",permalink:"/elemental-next/docs/growl/53-growl-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/53-growl/csharp.md",tags:[{label:"jquery",permalink:"/elemental-next/docs/tags/jquery"},{label:"growl",permalink:"/elemental-next/docs/tags/growl"},{label:"growl notifications",permalink:"/elemental-next/docs/tags/growl-notifications"},{label:"jquery-growl",permalink:"/elemental-next/docs/tags/jquery-growl"}],version:"current",frontMatter:{title:"53: Growl",id:"53-growl-csharp",contentUrl:"docs/growl/53-growl-csharp",sidebar_label:"Csharp",text:"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece all for the sake of trying to track down a transient issue.",number:53,hide_table_of_contents:!0,publish_date:"2016-11-22T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["jquery","growl","growl notifications","jquery-growl"],level:2,category:["troubleshooting"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/how-to-work-with-javascript-alerts/51-javascript-alerts-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/growl/java/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-add-growl-notifications-to-your-tests"},"How to Add Growl Notifications to Your Tests"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Good test reports are a fundamental component of successful test automation, but running down a test failure by looking at a test report can be a real pain sometimes. Oftentimes, you're left to decipher debug statements, or go through things piece by piece -- all for the sake of trying to track down a transient issue."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"By leveraging something like ",(0,o.kt)("a",{parentName:"p",href:"http://ksylvest.github.io/jquery-growl/"},"jQuery Growl")," you can output non-interactive debugging statements directly to the page you're testing."),(0,o.kt)("p",null,"With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs"),(0,o.kt)("p",null,"Let's step through an example of how to set this up."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to C#'s Thread.Sleep function (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Threading"),"), and start our class off with some setup and teardown methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Growl.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Threading;\n\npublic class Growl\n{\n    IWebDriver Driver;\n    IJavaScriptExecutor JSDriver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        JSDriver = (IJavaScriptExecutor) Driver;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,o.kt)("p",null,"Next we'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,o.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery"),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Growl.cs\n// ...\n    [Test]\n    public void GrowlNotificationExample()\n    {\n        Driver.Navigate().GoToUrl(\"http://the-internet.herokuapp.com\");\n\n        // check for jQuery, add it if it's not on the page\n        JSDriver.ExecuteScript(\"if (!window.jQuery) {\" +\n                               \"var jquery = document.createElement('script'); jquery.type = 'text/javascript';\" +\n                               \"jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';\" +\n                               \"document.getElementsByTagName('head')[0].appendChild(jquery);\" +\n                               \"}\");\n\n        // add jQuery Growl to the page\n        JSDriver.ExecuteScript(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\");\n\n        // add jQuery Growl Styles to the page\n        JSDriver.ExecuteScript(\"$('head').append(\\\"<link rel='stylesheet' \" +\n                               \"href='http://the-internet.herokuapp.com/css/jquery.growl.css' \" +\n                               \"type='text/css' />\\\");\");\n\n        // Adding 5 seconds of extra time\n        Thread.Sleep(5000);\n\n        // trigger a plain jQuery Growl notification to display on the page\n        JSDriver.ExecuteScript(\"$.growl({ title: 'GET', message: '/' });\");\n\n        // Adding 5 seconds of extra time to see 'GET' message\n        Thread.Sleep(5000);\n// ...\n")),(0,o.kt)("p",null,"If we wanted to see color-coded notifications we would use one of the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Growl.cs\n// ...\n        JSDriver.ExecuteScript(\"$.growl.error({ title: 'ERROR', message: 'your message goes here' });\");\n        JSDriver.ExecuteScript(\"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\");\n        JSDriver.ExecuteScript(\"$.growl.notice({ title: 'Warning!', message: 'your warning message goes here' });\");\n        Thread.Sleep(5000);\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread.Sleep(5000);")," is there for demonstration purposes. It will keep the Growl notifications on the page for 5 seconds so they're easier to see. However, if your test fails due to ",(0,o.kt)("inlineCode",{parentName:"p"},"growl"),", you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread.Sleep(5000);")," to add some more time to your test."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Growl.sln")," from the command-line) this is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browser opens"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Make sure jQuery is on the page, add it if it's not"),(0,o.kt)("li",{parentName:"ul"},"Add jQuery Growl and its styles to the page"),(0,o.kt)("li",{parentName:"ul"},"Display a set of notification messages in the top-right corner of the page with jQuery Growl"),(0,o.kt)("li",{parentName:"ul"},"Notification messages disappear after 5 seconds"),(0,o.kt)("li",{parentName:"ul"},"Browser closes")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In order to use this approach you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this, then that's the price you have to pay (unless you can get your team to add it to the application under test)."),(0,o.kt)("p",null,"I'd like to give a big thanks to Jon Austen (",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/austenjt"},"Twitter"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/djangofan"},"GitHub"),", ",(0,o.kt)("a",{parentName:"p",href:"http://jonausten.info/"},"Blog"),") for giving me the idea to use jQuery Growl with Selenium."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);