"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=h(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var h=2;h<i;h++)l[h]=n[h];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=n(7462),a=(n(7294),n(3905));const i={title:"65: Highlight Elements",id:"65-highlight-elements-csharp",contentUrl:"docs/highlight-elements/65-highlight-elements-csharp",sidebar_label:"Ruby",text:"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?",number:65,hide_table_of_contents:!0,publish_date:new Date("2014-09-11T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"csharp"},l="How to Visually Verify Your Locators",o={unversionedId:"highlight-elements/65-highlight-elements-csharp",id:"highlight-elements/65-highlight-elements-csharp",title:"65: Highlight Elements",description:"Intro",source:"@site/docs/65-highlight-elements/csharp.md",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/65-highlight-elements-csharp",permalink:"/elemental-next/docs/highlight-elements/65-highlight-elements-csharp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/65-highlight-elements/csharp.md",tags:[{label:"guest post",permalink:"/elemental-next/docs/tags/guest-post"},{label:"highlight",permalink:"/elemental-next/docs/tags/highlight"},{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"locators",permalink:"/elemental-next/docs/tags/locators"}],version:"current",frontMatter:{title:"65: Highlight Elements",id:"65-highlight-elements-csharp",contentUrl:"docs/highlight-elements/65-highlight-elements-csharp",sidebar_label:"Ruby",text:"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?",number:65,hide_table_of_contents:!0,publish_date:"2014-09-11T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/limit-bandwidth/64-limit-bandwidth-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/highlight-elements/java/"}},s={},h=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:h},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-visually-verify-your-locators"},"How to Visually Verify Your Locators"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is a pseudo guest post from Brian Goad. I've adapted one of his blog posts with his permission. You can see the original blog post ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/"},"here"),".")),(0,a.kt)("p",null,"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want."),(0,a.kt)("p",null,"Let's take a look at an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to C# collections (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic"),"), and start our class off with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: HighlightElements.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Threading;\n\npublic class HighlightElements\n{\n    IWebDriver Driver;\n    IJavaScriptExecutor JSDriver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        JSDriver = (IJavaScriptExecutor) Driver;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"HighlightElement")," helper method that will accept a Selenium WebDriver ",(0,a.kt)("inlineCode",{parentName:"p"},"IWebElement")," and a time to wait (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"Duration"),") as parameters."),(0,a.kt)("p",null,"By setting a duration we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: HighlightElements.cs\n// ...\n    private void HighlightElement(IWebElement Element, int Duration = 3)\n    {\n        string OriginalStyle = Element.GetAttribute("style");\n\n        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",\n                               Element,\n                               "style",\n                               "border: 2px solid red; border-style: dashed;");\n\n        Thread.Sleep(Duration * 1000);\n        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",\n                               Element,\n                               "style",\n                               OriginalStyle);\n    }\n// ...\n')),(0,a.kt)("p",null,"There are three things going on here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We store the style of the element so we can revert it back when we're done"),(0,a.kt)("li",{parentName:"ul"},"We change the style of the element so it visually stands out (e.g., a red dashed border)"),(0,a.kt)("li",{parentName:"ul"},"We revert the style of the element back after 3 seconds (or longer if specified)")),(0,a.kt)("p",null,"We're accomplishing the style change through JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttribute")," function. And we're executing it with Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecuteScript")," command."),(0,a.kt)("p",null,"Now to use this in our test is a simple matter to finding an element and passing it to ",(0,a.kt)("inlineCode",{parentName:"p"},"HighlightElement"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: HighlightElements.cs\n// ...\n    [Test]\n    public void HighlightElementExample()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/large");\n        IWebElement TargetElement = Driver.FindElement(By.Id("sibling-2.3"));\n        HighlightElement(TargetElement);\n    }\n\n}\n')),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\HighlightElements.sln")," from the command-line) here is what will happen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element to highlight"),(0,a.kt)("li",{parentName:"ul"},"Change the styling of the element so it has a red dashed-line border"),(0,a.kt)("li",{parentName:"ul"},"Wait 3 seconds"),(0,a.kt)("li",{parentName:"ul"},"Revert the styling of the element back (removing the red border)"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger. You can read more about how to do that ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/14-interactive-prompts-revisited"},"here in Brian's other guest post"),"==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,a.kt)("p",null,"Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/verifying-locators"},"here in this previous tip"),"==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"You can follow Brian on Twitter at ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"@bbbco"),"."))}c.isMDXComponent=!0}}]);