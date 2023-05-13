"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={title:"40: Disabled Element",id:"40-disabled-element-java",contentUrl:"docs/disabled-element/40-disabled-element-java",sidebar_label:"Java",text:"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.",number:40,hide_table_of_contents:!0,publish_date:new Date("2015-07-06T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"java"},r="How to Test For Disabled Elements",o={unversionedId:"disabled-element/40-disabled-element-java",id:"disabled-element/40-disabled-element-java",title:"40: Disabled Element",description:"Intro",source:"@site/docs/40-disabled-element/java.md",sourceDirName:"40-disabled-element",slug:"/disabled-element/40-disabled-element-java",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/40-disabled-element/java.md",tags:[{label:"dropdown list",permalink:"/elemental-next/docs/tags/dropdown-list"},{label:"dropdown lists",permalink:"/elemental-next/docs/tags/dropdown-lists"},{label:"disabled element",permalink:"/elemental-next/docs/tags/disabled-element"}],version:"current",frontMatter:{title:"40: Disabled Element",id:"40-disabled-element-java",contentUrl:"docs/disabled-element/40-disabled-element-java",sidebar_label:"Java",text:"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain.",number:40,hide_table_of_contents:!0,publish_date:"2015-07-06T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/disabled-element/40-disabled-element-javascript"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-test-for-disabled-elements"},"How to Test For Disabled Elements"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"If we look at ",(0,i.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebElement.html"},"the API documentation for Selenium's IWebElement Interface")," we can see there is an available method called ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," that can help us accomplish what we want."),(0,i.kt)("p",null,"Let's take a look at how to use it."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For this example we will use ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the dropdown list")," from ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."),(0,i.kt)("p",null,"Let's start by importing our requisite classes (for annotations (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// filename: DisabledElements.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.support.ui.Select;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class DisabledElements {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,i.kt)("p",null,"Now to wire up our test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// filename: DisabledElements.java\n// ...\n    @Test\n    public void test() {\n        driver.get("http://the-internet.herokuapp.com/dropdown");\n        Select dropdown = new Select(driver.findElement(By.id("dropdown")));\n        assertThat(dropdown.getOptions().get(0).isEnabled(), is(false));\n    }\n\n}\n')),(0,i.kt)("p",null,"After visiting the page we find the dropdown list with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select")," function and store it in a variable. We then put it to use in our assertion, scoping to the first value (",(0,i.kt)("inlineCode",{parentName:"p"},"dropdown.getOptions().get(0)"),") to check if it's enabled (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".isEnabled()"),"). This will return a boolean result. If the element is disabled (e.g., not selectable) then Selenium will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". So that's what we use in our assertion (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"is(false)"),")."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When you save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the page"),(0,i.kt)("li",{parentName:"ul"},"Grab the dropdown list"),(0,i.kt)("li",{parentName:"ul"},"Assert that the target element is not enabled"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);