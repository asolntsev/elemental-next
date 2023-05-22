"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=h(n),c=r,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const i={title:"65: Highlight Elements",id:"65-highlight-elements-java",contentUrl:"docs/highlight-elements/65-highlight-elements-java",sidebar_label:"Java",text:"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?",number:65,hide_table_of_contents:!0,publish_date:new Date("2015-11-11T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"java"},o="How to Visually Verify Your Locators",l={unversionedId:"highlight-elements/65-highlight-elements-java",id:"highlight-elements/65-highlight-elements-java",title:"65: Highlight Elements",description:"Intro",source:"@site/docs/65-highlight-elements/java.md",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/65-highlight-elements-java",permalink:"/elemental-next/docs/highlight-elements/65-highlight-elements-java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/65-highlight-elements/java.md",tags:[{label:"guest post",permalink:"/elemental-next/docs/tags/guest-post"},{label:"highlight",permalink:"/elemental-next/docs/tags/highlight"},{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"locators",permalink:"/elemental-next/docs/tags/locators"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{title:"65: Highlight Elements",id:"65-highlight-elements-java",contentUrl:"docs/highlight-elements/65-highlight-elements-java",sidebar_label:"Java",text:"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?",number:65,hide_table_of_contents:!0,publish_date:"2015-11-11T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"java"},sidebar:"tutorialSidebar",previous:{title:"Csharp",permalink:"/elemental-next/docs/highlight-elements/65-highlight-elements-csharp"},next:{title:"Javascript",permalink:"/elemental-next/docs/highlight-elements/65-highlight-elements-javascript"}},s={},h=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:h},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-visually-verify-your-locators"},"How to Visually Verify Your Locators"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a pseudo guest post from Brian Goad. I've adapted one of his blog posts with his permission. You can see the original blog post ",(0,r.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/"},"here"),".")),(0,r.kt)("p",null,"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want."),(0,r.kt)("p",null,"Let's take a look at an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: HighlightElement.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxDriver;\n\npublic class HighlightElement {\n    WebDriver driver;\n    JavascriptExecutor js;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n        js = (JavascriptExecutor) driver;\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"highlightElement")," helper method that will accept a Selenium WebDriver ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," and a time to wait (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"duration"),") as arguments."),(0,r.kt)("p",null,"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: HighlightElement.java\n// ...\n    private void highlightElement(WebElement element, int duration) throws InterruptedException {\n        String original_style = element.getAttribute("style");\n\n        js.executeScript(\n                "arguments[0].setAttribute(arguments[1], arguments[2])",\n                element,\n                "style",\n                "border: 2px solid red; border-style: dashed;");\n\n        if (duration > 0) {\n            Thread.sleep(duration * 1000);\n            js.executeScript(\n                    "arguments[0].setAttribute(arguments[1], arguments[2])",\n                    element,\n                    "style",\n                    original_style);\n        }\n    }\n')),(0,r.kt)("p",null,"There are three things going on here."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We store the style of the element so we can revert it back when we're done"),(0,r.kt)("li",{parentName:"ul"},"We change the style of the element so it visually stands out (e.g., a red dashed border)"),(0,r.kt)("li",{parentName:"ul"},"We revert the style of the element back after 3 seconds (or longer if specified)")),(0,r.kt)("p",null,"We're accomplishing the style change through JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"setAttribute")," function. And we're executing it with Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},"executeScript")," command."),(0,r.kt)("p",null,"To use this in our test is simple, we just need to find an element and then pass it to ",(0,r.kt)("inlineCode",{parentName:"p"},"highlightElement"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: HighlightElement.java\n// ...\n    @Test\n    public void highlightElementTest() throws InterruptedException {\n        driver.get("http://the-internet.herokuapp.com/large");\n        WebElement element = driver.findElement(By.id("sibling-2.3"));\n        highlightElement(element, 3);\n    }\n\n}\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Find the element to highlight"),(0,r.kt)("li",{parentName:"ul"},"Change the styling of the element so it has a red dashed-line border"),(0,r.kt)("li",{parentName:"ul"},"Wait 3 seconds"),(0,r.kt)("li",{parentName:"ul"},"Revert the styling of the element back (removing the red border)"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger. You can read more about how to do that ",(0,r.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/14-interactive-prompts-revisited"},"here in Brian's other guest post"),"==",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,r.kt)("p",null,"Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that ",(0,r.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/verifying-locators"},"here in this previous tip"),"==",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);