"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"How To Test For Disabled Elements",slug:"40-disabled-element",number:40,publish_date:new Date("2015-11-11T00:00:00.000Z"),tags:["dropdown list","dropdown lists","disabled element"],level:2,category:"testing"},i=void 0,l={unversionedId:"non-updated-tips/disabled-element/java/readme",id:"non-updated-tips/disabled-element/java/readme",title:"How To Test For Disabled Elements",description:"The Problem",source:"@site/docs/non-updated-tips/40-disabled-element/java/readme.md",sourceDirName:"non-updated-tips/40-disabled-element/java",slug:"/non-updated-tips/disabled-element/java/40-disabled-element",permalink:"/docs/non-updated-tips/disabled-element/java/40-disabled-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/40-disabled-element/java/readme.md",tags:[{label:"dropdown list",permalink:"/docs/tags/dropdown-list"},{label:"dropdown lists",permalink:"/docs/tags/dropdown-lists"},{label:"disabled element",permalink:"/docs/tags/disabled-element"}],version:"current",frontMatter:{title:"How To Test For Disabled Elements",slug:"40-disabled-element",number:40,publish_date:"2015-11-11T00:00:00.000Z",tags:["dropdown list","dropdown lists","disabled element"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Test For Disabled Elements",permalink:"/docs/non-updated-tips/disabled-element/csharp/40-disabled-element"},next:{title:"How To Test For Disabled Elements",permalink:"/docs/non-updated-tips/disabled-element/javascript/40-disabled-element"}},s={},d=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"On occasion you may have the need to check if an element on a page is disabled or enabled. Sounds simple enough, but how do you do it? It's not a well documented function of Selenium. So doing a trivial action like this can quickly become a pain."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"If we look at ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebElement.html"},"the API documentation for Selenium's WebElement class")," we can see there is an available method called ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," that can help us accomplish what we want."),(0,r.kt)("p",null,"Let's take a look at how to use it."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"For this example we will use ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the dropdown list")," from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."),(0,r.kt)("p",null,"Let's start by importing our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: DisabledElements.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.support.ui.Select;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class DisabledElements {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now to wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: DisabledElements.java\n// ...\n    @Test\n    public void test() {\n        driver.get("http://the-internet.herokuapp.com/dropdown");\n        Select dropdown = new Select(driver.findElement(By.id("dropdown")));\n        assertThat(dropdown.getOptions().get(0).isEnabled(), is(false));\n    }\n\n}\n')),(0,r.kt)("p",null,"After visiting the page we find the dropdown list with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Select")," function and store it in a variable. We then put it to use in our assertion, scoping to the first value (",(0,r.kt)("inlineCode",{parentName:"p"},"dropdown.getOptions().get(0)"),") to check if it's enabled (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},".isEnabled()"),"). This will return a boolean result. If the element is disabled (e.g., not selectable) then Selenium will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". So that's what we use in our assertion (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"is(false)"),")."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Assert that the target element is not enabled"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"outro"},"Outro"),(0,r.kt)("p",null,"Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable."),(0,r.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0}}]);