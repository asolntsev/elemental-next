"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[71206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(c,l(l({ref:t},h),{},{components:n})):r.createElement(c,l({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={language:"python",level:2,hide_sidebar:!0,publish_date:new Date("2016-11-23T00:00:00.000Z"),last_update:{date:new Date("2023-03-15T00:00:00.000Z")}},l=void 0,o={unversionedId:"highlight-elements/python",id:"highlight-elements/python",title:"python",description:"A Solution",source:"@site/docs/65-highlight-elements/python.md",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/python",permalink:"/docs/highlight-elements/python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/65-highlight-elements/python.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678838400,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{language:"python",level:2,hide_sidebar:!0,publish_date:"2016-11-23T00:00:00.000Z",last_update:{date:"2023-03-15T00:00:00.000Z"}}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],h={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want."),(0,a.kt)("p",null,"Let's take a look at an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"For our initial setup let's pull in our requisite libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework, ",(0,a.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"import time")," to add a delay in our script so we're able to see the notification messages), declare our test class, and wire up some test ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: highlight_elements.py\nimport unittest\nfrom selenium import webdriver\nimport time\nfrom selenium.webdriver.common.by import By\n\nclass HighlightElements(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,a.kt)("p",null,"Now let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"highlight")," helper method that will accept a Selenium WebDriver ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," and a time to wait (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"duration"),") as arguments."),(0,a.kt)("p",null,"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a default value for it (e.g., 3 seconds)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# filename: highlight_elements.py\n# ...\n    def highlight(self, element, duration=3):\n        driver = self.driver\n\n        # Store original style so it can be reset later\n        original_style = element.get_attribute("style")\n\n        # Style element with dashed red border\n        driver.execute_script(\n            "arguments[0].setAttribute(arguments[1], arguments[2])",\n            element,\n            "style",\n            "border: 2px solid red; border-style: dashed;")\n\n        # Keep element highlighted for a spell and then revert\n        if (duration > 0):\n            time.sleep(duration)\n            driver.execute_script(\n                "arguments[0].setAttribute(arguments[1], arguments[2])",\n                element,\n                "style",\n                original_style)\n\n# ...\n')),(0,a.kt)("p",null,"There are three things going on here."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We store the style of the element so we can revert it back when we're done"),(0,a.kt)("li",{parentName:"ol"},"We change the style of the element so it visually stands out (e.g., a red dashed border)"),(0,a.kt)("li",{parentName:"ol"},"We revert the style of the element back after 3 seconds")),(0,a.kt)("p",null,"We're accomplishing the style change through JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttribute")," function. And we're executing it with Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},"execute_script")," command."),(0,a.kt)("p",null,"Now to use this in our test is simple, we just prepend a ",(0,a.kt)("inlineCode",{parentName:"p"},"find_element")," command with a call to the ",(0,a.kt)("inlineCode",{parentName:"p"},"highlight")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: highlight_element.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/large')\n        self.highlight(driver.find_element(By.ID,'sibling-2.3'))\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python highlight_elements.py")," from the command-line) here is what will happen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element"),(0,a.kt)("li",{parentName:"ul"},"Change the styling of the element so it has a red dashed-line border"),(0,a.kt)("li",{parentName:"ul"},"Wait 3 seconds"),(0,a.kt)("li",{parentName:"ul"},"Revert the styling to remove the border"),(0,a.kt)("li",{parentName:"ul"},"Browser closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger."),(0,a.kt)("p",null,"Alternatively, you could verify your locators by using a browser plugin like FireFinder."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/"},"here"),".  You can follow him on Twitter at ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"@bbbco")," and check out his testing blog ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Brian D. Goad profile picture",src:n(93330).Z+"#author-img",title:"a title",width:"400",height:"400"})))}d.isMDXComponent=!0},93330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/brian-goad-f109f0435f7d26dd999383b3b4ba1994.jpeg"}}]);