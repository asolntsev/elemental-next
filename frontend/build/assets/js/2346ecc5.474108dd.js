"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={title:"How To Use Selenium Grid",slug:"52-grid",number:52,publish_date:new Date("2016-06-13T00:00:00.000Z"),tags:["grid","selenium grid","cross browser"],level:2,category:"infrastructure"},o=void 0,l={unversionedId:"non-updated-tips/grid/csharp/readme",id:"non-updated-tips/grid/csharp/readme",title:"How To Use Selenium Grid",description:"The Problem",source:"@site/docs/non-updated-tips/52-grid/csharp/readme.md",sourceDirName:"non-updated-tips/52-grid/csharp",slug:"/non-updated-tips/grid/csharp/52-grid",permalink:"/docs/non-updated-tips/grid/csharp/52-grid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/52-grid/csharp/readme.md",tags:[{label:"grid",permalink:"/docs/tags/grid"},{label:"selenium grid",permalink:"/docs/tags/selenium-grid"},{label:"cross browser",permalink:"/docs/tags/cross-browser"}],version:"current",frontMatter:{title:"How To Use Selenium Grid",slug:"52-grid",number:52,publish_date:"2016-06-13T00:00:00.000Z",tags:["grid","selenium grid","cross browser"],level:2,category:"infrastructure"},sidebar:"tutorialSidebar",previous:{title:"How To Work With JavaScript Alerts",permalink:"/docs/non-updated-tips/javascript-alerts/java/51-javascript-alerts"},next:{title:"How To Use Selenium Grid",permalink:"/docs/non-updated-tips/grid/java/52-grid"}},s={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"A brief Selenium Grid primer",id:"a-brief-selenium-grid-primer",level:2},{value:"An Example",id:"an-example",level:2},{value:"Part 1: Grid Setup",id:"part-1-grid-setup",level:3},{value:"Part 2: Test Setup",id:"part-2-test-setup",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-problem"},"The Problem"),(0,i.kt)("p",null,"If you're looking to run your tests on different browser and operating system combinations but you're unable to justify using a third-party solution like ",(0,i.kt)("a",{parentName:"p",href:"https://saucelabs.com/"},"Sauce Labs")," or ",(0,i.kt)("a",{parentName:"p",href:"http://www.browserstack.com/"},"Browser Stack")," then what do you do?"),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/Grid2"},"Selenium Grid")," you can stand up a simple infrastructure of various browsers on different operating systems to not only distribute test load, but also give you a diversity of browsers to work with."),(0,i.kt)("h2",{id:"a-brief-selenium-grid-primer"},"A brief Selenium Grid primer"),(0,i.kt)("p",null,"Selenium Grid is part of ",(0,i.kt)("a",{parentName:"p",href:"http://www.seleniumhq.org/"},"the Selenium project"),". It lets you distribute test execution across several machines. You can connect to it with Selenium Remote by specifying the browser, browser version, and operating system you want. You specify these values through Selenium's Remote ",(0,i.kt)("inlineCode",{parentName:"p"},"Capabilities"),"."),(0,i.kt)("p",null,'There are two main elements to Selenium Grid -- a hub, and nodes. First you need to stand up a hub. Then you can connect (or "register") nodes to that hub. Nodes are where your tests will run, and the hub is responsible for making sure your tests end up on the right one (e.g., the machine with the operating system and browser you specified in your test).'),(0,i.kt)("p",null,"Let's step through an example."),(0,i.kt)("h2",{id:"an-example"},"An Example"),(0,i.kt)("h3",{id:"part-1-grid-setup"},"Part 1: Grid Setup"),(0,i.kt)("p",null,"Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from ",(0,i.kt)("a",{parentName:"p",href:"http://selenium-release.storage.googleapis.com/index.html"},"here"),"."),(0,i.kt)("p",null,"Then we need to start the hub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-standalone.jar -role hub\n19:05:12.718 INFO - Launching Selenium Grid hub\n...\n")),(0,i.kt)("p",null,"After that we can register nodes to it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-standalone.jar -role node -hub http://localhost:4444/grid/register\n19:05:57.880 INFO - Launching a Selenium Grid node\n...\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing ",(0,i.kt)("inlineCode",{parentName:"strong"},"http://localhost")," with the location of your hub, and specifying additional parameters as needed).")),(0,i.kt)("p",null,"Now that the grid is running we can view the available browsers by visiting our Grid's console at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4444/grid/console"),"."),(0,i.kt)("img",{src:"/img/grid-console.png"}),(0,i.kt)("p",null,"To refine the list of available browsers, we can specify an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"-browser")," parameter when registering the node. For instance, if we wanted to only offer Safari on a node, we could specify it with ",(0,i.kt)("inlineCode",{parentName:"p"},"-browser browserName=safari"),", which would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-standalone.jar -role node -browser browserName=safari -hub http://localhost:4444/grid/register\n")),(0,i.kt)("p",null,"We could also repeat this parameter again if we wanted to explicitly specify more than one browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-standalone.jar -role node -browser browserName=safari -browser browserName=chrome -browser browserName=firefox -hub http://localhost:4444/grid/register\n")),(0,i.kt)("p",null,"There are numerous parameters that we can use at run time. You can see a full list ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/Grid2#optional-parameters"},"here"),"."),(0,i.kt)("h3",{id:"part-2-test-setup"},"Part 2: Test Setup"),(0,i.kt)("p",null,"Now let's wire up a simple test to use our new Grid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Grid.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Remote;\nusing System;\n\npublic class Grid\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        DesiredCapabilities Capabilities = new DesiredCapabilities();\n        Capabilities.SetCapability(CapabilityType.BrowserName, "firefox");\n        string GridURL = "http://localhost:4444/wd/hub";\n        Driver = new RemoteWebDriver(new Uri(GridURL), Capabilities);\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n\n    [Test]\n    public void BrowserLaunchesOnGrid()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(Driver.Title.Equals("The Internet"));\n    }\n}\n')),(0,i.kt)("p",null,"Notice in this configuration we're using Selenium Remote (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"new RemoteWebDriver()"),") to connect to the grid. And we are telling the grid which browser we want to use with ",(0,i.kt)("inlineCode",{parentName:"p"},"DesiredCapabilities")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'DesiredCapabilities.SetCapability(CapabilityType.BrowserName, "firefox");'),")."),(0,i.kt)("p",null,"You can see a full list of the available Selenium ",(0,i.kt)("inlineCode",{parentName:"p"},"Capabilities")," options ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities"},"here"),"."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"After standing up your own grid, when you save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Grid.sln")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect to the Grid Hub"),(0,i.kt)("li",{parentName:"ul"},"Hub determines which node has the necessary browser/platform combination"),(0,i.kt)("li",{parentName:"ul"},"Hub connects the test to the node"),(0,i.kt)("li",{parentName:"ul"},"Browser opens on the node"),(0,i.kt)("li",{parentName:"ul"},"Test runs"),(0,i.kt)("li",{parentName:"ul"},"Browser closes on the node")),(0,i.kt)("h2",{id:"outro"},"Outro"),(0,i.kt)("p",null,"If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is additional configuration required for each. And if you run into issues be sure to check out the browser driver documentation for the browser you're working with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver"},"ChromeDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver"},"FirefoxDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"},"InternetExplorerDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver"))),(0,i.kt)("p",null,"Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you parallelization. It can handle as many connections as you throw at it (within reason), but you will still need to find a way to execute your tests in parallel."),(0,i.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0}}]);