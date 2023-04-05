"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),w=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=w(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=w(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var w=2;w<o;w++)a[w]=n[w];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>w});var i=n(7462),r=(n(7294),n(3905));const o={title:"CSharp",id:"4-work-with-multiple-windows-csharp",slug:"csharp/",number:4,publish_date:new Date("2015-08-21T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"csharp"},a="How to Work with Multiple Windows",l={unversionedId:"updated-tips/work-with-multiple-windows/4-work-with-multiple-windows-csharp",id:"updated-tips/work-with-multiple-windows/4-work-with-multiple-windows-csharp",title:"CSharp",description:"Intro",source:"@site/docs/updated-tips/4-work-with-multiple-windows/csharp.md",sourceDirName:"updated-tips/4-work-with-multiple-windows",slug:"/updated-tips/work-with-multiple-windows/csharp/",permalink:"/elemental-next/docs/updated-tips/work-with-multiple-windows/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/4-work-with-multiple-windows/csharp.md",tags:[{label:"windows",permalink:"/elemental-next/docs/tags/windows"},{label:"multiple windows",permalink:"/elemental-next/docs/tags/multiple-windows"},{label:"new window",permalink:"/elemental-next/docs/tags/new-window"}],version:"current",frontMatter:{title:"CSharp",id:"4-work-with-multiple-windows-csharp",slug:"csharp/",number:4,publish_date:"2015-08-21T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"},tags:["windows","multiple windows","new window"],level:2,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/work-with-frames/ruby/"},next:{title:"Java",permalink:"/elemental-next/docs/updated-tips/work-with-multiple-windows/java/"}},s={},w=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:w},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-work-with-multiple-windows"},"How to Work with Multiple Windows"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This tip will explain how to work with multiple windows in Selenium and switch between them."),(0,r.kt)("p",null,"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them."),(0,r.kt)("p",null,"On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for that you may find in some browsers and not others."),(0,r.kt)("p",null,"Let's step through a couple of examples to demonstrate."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to C# collections (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic"),"), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: MultipleWindows.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Collections.Generic;\n\npublic class MultipleWindows\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: MultipleWindows.cs\n// ...\n    [Test]\n    public void MultipleWindowsExample1()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/windows");\n        Driver.FindElement(By.CssSelector(".example a")).Click();\n        var Windows = Driver.WindowHandles;\n\n        Driver.SwitchTo().Window(Windows[0]);\n        Assert.That(Driver.Title != "New Window");\n\n        Driver.SwitchTo().Window(Windows[1]);\n        Assert.That(Driver.Title.Equals("New Window"));\n    }\n// ...\n')),(0,r.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the second one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,r.kt)("p",null,"While this may seem like a good approach it can present problems later because the order of the window handles is not consistent across all browsers. Some return it in the order opened, others ",(0,r.kt)("em",{parentName:"p"},"alphabetically"),"."),(0,r.kt)("p",null,"Here's a more resilient approach. One that will work across all browsers."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: MultipleWindows.cs\n// ...\n    [Test]\n    public void MultipleWindowsExample2()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/windows");\n        string FirstWindow = Driver.CurrentWindowHandle;\n        string SecondWindow = "";\n\n        Driver.FindElement(By.CssSelector(".example a")).Click();\n\n        var Windows = Driver.WindowHandles;\n        foreach(var Window in Windows)\n        {\n            if (Window != FirstWindow)\n                SecondWindow = Window;\n        }\n\n        Driver.SwitchTo().Window(FirstWindow);\n        Assert.That(Driver.Title != "New Window");\n\n        Driver.SwitchTo().Window(SecondWindow);\n        Assert.That(Driver.Title.Equals("New Window"));\n    }\n}\n')),(0,r.kt)("p",null,"After loading the page we store the window handle in a variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstWindow"),") and then proceed with clicking the new window link."),(0,r.kt)("p",null,"Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the one we've already stored). We store the new window result in another variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondWindow"),") and then switch between the windows, checking the page title each time to make sure the correct window is in focus."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\MultipleWindows.sln")," from the command-line) here is what will happen for either example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Click to open a new window"),(0,r.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,r.kt)("li",{parentName:"ul"},"Check the page title to make sure the correct window is in focus"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"I hope this was a helpful guide on how to work with and switch between multiple windows using Selenium."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip."),(0,r.kt)("p",null,"For more information about switching windows (and tabs) visit the official Selenium HQ ","[documentation page]"," (",(0,r.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/interactions/windows/"},"https://www.selenium.dev/documentation/webdriver/interactions/windows/"),")."),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);