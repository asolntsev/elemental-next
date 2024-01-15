"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[17029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={level:2,language:"java",hide_sidebar:!0,publish_date:new Date("2015-11-11T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")}},o=void 0,l={unversionedId:"right-click/java",id:"right-click/java",title:"java",description:"A Solution",source:"@site/docs/63-right-click/java.md",sourceDirName:"63-right-click",slug:"/right-click/java",permalink:"/docs/right-click/java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/63-right-click/java.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{level:2,language:"java",hide_sidebar:!0,publish_date:"2015-11-11T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"}}},s={},c=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By leveraging ",(0,r.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html"},"Selenium's Action Builder")," we can issue a right-click command (a.k.a. a ",(0,r.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#contextClick()"},(0,r.kt)("inlineCode",{parentName:"a"},"contextClick")),")."),(0,r.kt)("p",null,"We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's ",(0,r.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#sendKeys(java.lang.CharSequence...)"},(0,r.kt)("inlineCode",{parentName:"a"},"sendKeys"))," command."),(0,r.kt)("p",null,"Let's continue with an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by importing our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: RightClick.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.*;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.interactions.Actions;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class RightClick {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now we're ready to write our test."),(0,r.kt)("p",null,"Let's use an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will render a custom context menu when we right-click on a specific area of the page (",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/context_menu"},"link"),").\nClicking the context menu item will trigger a JavaScript alert which will say ",(0,r.kt)("inlineCode",{parentName:"p"},"You selected a context menu"),". We'll grab this text and use it to assert that the menu was actually triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: RightClick.java\n// ...\n    @Test\n    public void rightClickTest() throws InterruptedException {\n        driver.get("http://the-internet.herokuapp.com/context_menu");\n        WebElement menu = driver.findElement(By.id("hot-spot"));\n        Actions action = new Actions(driver);\n        action.contextClick(menu)\n                .sendKeys(Keys.ARROW_DOWN)\n                .sendKeys(Keys.ARROW_DOWN)\n                .sendKeys(Keys.ARROW_DOWN)\n                .sendKeys(Keys.ENTER)\n                .perform();\n        Alert alert = driver.switchTo().alert();\n        assertThat(alert.getText(), is(equalTo("You selected a context menu")));\n    }\n\n}\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find and right-click the area of the page that renders a custom context menu"),(0,r.kt)("li",{parentName:"ul"},"Navigate to the context menu option with keyboard keys"),(0,r.kt)("li",{parentName:"ul"},"JavaScript alert appears"),(0,r.kt)("li",{parentName:"ul"},"Grab the text of the JavaScript alert"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text from the alert is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To learn more about context menus, you can read ",(0,r.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/building-html5-context-menus"},"this write-up from the Tree House blog"),"."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}m.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);