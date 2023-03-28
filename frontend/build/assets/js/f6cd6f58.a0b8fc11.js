"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"How To Access Basic Auth",slug:"13-work-with-basic-auth",number:13,publish_date:new Date("2016-06-12T00:00:00.000Z"),tags:["authentication"],level:1,category:"testing"},o=void 0,s={unversionedId:"non-updated-tips/work-with-basic-auth/csharp/readme",id:"non-updated-tips/work-with-basic-auth/csharp/readme",title:"How To Access Basic Auth",description:"The Problem",source:"@site/docs/non-updated-tips/13-work-with-basic-auth/csharp/readme.md",sourceDirName:"non-updated-tips/13-work-with-basic-auth/csharp",slug:"/non-updated-tips/work-with-basic-auth/csharp/13-work-with-basic-auth",permalink:"/docs/non-updated-tips/work-with-basic-auth/csharp/13-work-with-basic-auth",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/13-work-with-basic-auth/csharp/readme.md",tags:[{label:"authentication",permalink:"/docs/tags/authentication"}],version:"current",frontMatter:{title:"How To Access Basic Auth",slug:"13-work-with-basic-auth",number:13,publish_date:"2016-06-12T00:00:00.000Z",tags:["authentication"],level:1,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Opt-out of A/B Tests",permalink:"/docs/non-updated-tips/opt-out-of-ab-tests/java/12-opt-out-of-ab-tests"},next:{title:"How To Access Basic Auth",permalink:"/docs/non-updated-tips/work-with-basic-auth/java/13-work-with-basic-auth"}},l={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"Sometimes you'll work with applications that are secured behind ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic HTTP Authentication")," (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page. Otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless."),(0,r.kt)("p",null,"Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header. But now the cool kid way to do it it was something like ",(0,r.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy"),". Some people are solving this with browser specific configurations too."),(0,r.kt)("p",null,"But all of this feels heavy. Instead, let's look at a simple approach that is browser agnostic and quick to setup."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By specifying the username and password ",(0,r.kt)("em",{parentName:"p"},"in the URL")," when visiting a page with Selenium we can side-step the system level dialog box from Basic Auth and avoid the need to set up a proxy server. This approach will work for both HTTP and HTTPS pages."),(0,r.kt)("p",null,"Let's take a look at an example."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"First we'll include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: BasicAuth1.cs \nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class BasicAuth1\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now to add our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: BasicAuth1.cs\n    [Test]\n    public void ConnectToBasicAuthByURL()\n    {\n        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;\n        Assert.That(PageMessage.Contains("Congratulations!"));\n    }\n}\n// ...\n')),(0,r.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,r.kt)("p",null,"Alternatively we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,r.kt)("p",null,"Here's what that would look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: BasicAuth2.cs \nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\nclass BasicAuth2\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n        Driver.Navigate().GoToUrl("http://admin:admin@the-internet.herokuapp.com/basic_auth");\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n\n    [Test]\n    public void AccessBasicAuthPageAfterAuthentication()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/basic_auth");\n        string PageMessage = Driver.FindElement(By.CssSelector("p")).Text;\n        Assert.That(PageMessage.Contains("Congratulations!"));\n    }\n\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save the first example and run it here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("p",null,"And when you save the second example and run it here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth in the setup"),(0,r.kt)("li",{parentName:"ul"},"Navigate to the Basic Auth page (without providing credentials)"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"outro"},"Outro"),(0,r.kt)("p",null,"Hopefully this tip will help save you from getting tripped by Basic Auth when you come across it.\nHappy Testing!"))}h.isMDXComponent=!0}}]);