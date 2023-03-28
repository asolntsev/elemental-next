"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"How To Test For Disabled Elements",slug:"40-disabled-element",number:40,publish_date:new Date("2016-11-18T00:00:00.000Z"),tags:["dropdown list","dropdown lists","disabled element"],level:2,category:"testing"},o=void 0,i={unversionedId:"non-updated-tips/disabled-element/python/readme",id:"non-updated-tips/disabled-element/python/readme",title:"How To Test For Disabled Elements",description:"The Problem",source:"@site/docs/non-updated-tips/40-disabled-element/python/readme.md",sourceDirName:"non-updated-tips/40-disabled-element/python",slug:"/non-updated-tips/disabled-element/python/40-disabled-element",permalink:"/docs/non-updated-tips/disabled-element/python/40-disabled-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/40-disabled-element/python/readme.md",tags:[{label:"dropdown list",permalink:"/docs/tags/dropdown-list"},{label:"dropdown lists",permalink:"/docs/tags/dropdown-lists"},{label:"disabled element",permalink:"/docs/tags/disabled-element"}],version:"current",frontMatter:{title:"How To Test For Disabled Elements",slug:"40-disabled-element",number:40,publish_date:"2016-11-18T00:00:00.000Z",tags:["dropdown list","dropdown lists","disabled element"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Test For Disabled Elements",permalink:"/docs/non-updated-tips/disabled-element/javascript/40-disabled-element"},next:{title:"How To Test Checkboxes",permalink:"/docs/non-updated-tips/checkboxes/csharp/45-checkboxes"}},s={},d=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"On occasion you may have the need to check if an element on a page is disabled or enabled. Sounds simple enough, but how do you do it? It's not a well known function of Selenium. So doing a trivial action like this can quickly become a pain."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"If we look at ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_remote/selenium.webdriver.remote.webelement.html"},"the API documentation for Selenium's Element class")," we can see there is an available method called ",(0,r.kt)("inlineCode",{parentName:"p"},"is_enabled")," that can help us accomplish what we want."),(0,r.kt)("p",null,"Let's take a look at how to use it."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"For this example we will use ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"a dropdown list")," from ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.\nFirst let's require our dependent libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,r.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: disabled_elements.py\nimport unittest\nfrom selenium import webdriver\n\n\nclass DisabledElements(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: disabled_elements.py\n# ...\n    def test_dropdown(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/dropdown')\n        dropdown_list = driver.find_elements_by_tag_name('option')\n        assert dropdown_list[0].is_enabled() is False\n\nif __name__ == \"__main__\":\n    unittest.main()\n\n")),(0,r.kt)("p",null,"After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This returns a list of elements, so we use the first one (which is the one with the text of ",(0,r.kt)("inlineCode",{parentName:"p"},"'Please select an option'"),")."),(0,r.kt)("p",null,"Once we have the element we want we see if it's enabled (with ",(0,r.kt)("inlineCode",{parentName:"p"},".is_enabled"),") and assert based on the response."),(0,r.kt)("p",null,"And since we grabbed all of the dropdown list options, we can easily test the opposite case by checking the second or third option in the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"        assert dropdown_list[1].is_enabled() is True\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python disabled_elements.py")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab all dropdown list elements"),(0,r.kt)("li",{parentName:"ul"},"Assert that the first element in the list is not enabled"),(0,r.kt)("li",{parentName:"ul"},"Assert that the second element in the list is enabled"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"outro"},"Outro"),(0,r.kt)("p",null,"Hopefully this tip has helped make the simple task of seeing if an element is enabled or disabled more approachable."),(0,r.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);