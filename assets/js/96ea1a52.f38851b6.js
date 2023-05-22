"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),h=o,p=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const a={title:"29: Chrome Driver",id:"29-chrome-driver-python",contentUrl:"docs/chrome-driver/29-chrome-driver-python",sidebar_label:"Python",text:"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.",number:29,hide_table_of_contents:!0,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-03-09T00:00:00.000Z")},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"python"},i="How to Run Your Tests Locally Against Chrome",l={unversionedId:"chrome-driver/29-chrome-driver-python",id:"chrome-driver/29-chrome-driver-python",title:"29: Chrome Driver",description:"Intro",source:"@site/docs/29-chrome-driver/python.mdx",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/29-chrome-driver-python",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/29-chrome-driver/python.mdx",tags:[{label:"drivers",permalink:"/elemental-next/docs/tags/drivers"},{label:"chromedriver",permalink:"/elemental-next/docs/tags/chromedriver"},{label:"chrome",permalink:"/elemental-next/docs/tags/chrome"},{label:"different browsers",permalink:"/elemental-next/docs/tags/different-browsers"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:167832e4,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{title:"29: Chrome Driver",id:"29-chrome-driver-python",contentUrl:"docs/chrome-driver/29-chrome-driver-python",sidebar_label:"Python",text:"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started.",number:29,hide_table_of_contents:!0,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-03-09T00:00:00.000Z"},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-java"},next:{title:"Ruby",permalink:"/elemental-next/docs/chrome-driver/29-chrome-driver-ruby"}},s={},m=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-your-tests-locally-against-chrome"},"How to Run Your Tests Locally Against Chrome"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started. "),(0,o.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,o.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,o.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,o.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,o.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,o.kt)("p",null,"We'll start by pulling in our requisite libraries for interacting with the operating system (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"import os"),"), our testing framework (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"import unittest"),"), driving the browser with Selenium (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver"),"), declare our test class, and wire up some test ",(0,o.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.py\nimport os\nimport unittest\nfrom selenium import webdriver\n\n\nclass Chrome(unittest.TestCase):\n\n    def setUp(self):\n        chromedriver_path = os.getcwd() + '/vendor/chromedriver'\n        self.driver = webdriver.Chrome(chromedriver_path)\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,o.kt)("p",null,"Notice that in ",(0,o.kt)("inlineCode",{parentName:"p"},"setUp")," we are telling Selenium where the ChromeDriver exectuable is with ",(0,o.kt)("inlineCode",{parentName:"p"},"chromedriver_path")," before creating an instance of the browser and passing it in as an argument."),(0,o.kt)("p",null,"Now we're ready to add a simple test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.rb\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/upload')\n        assert driver.title == 'The Internet'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"python chrome.py"),") it will launch an instance of Chrome, visit the homepage of ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"python chrome.py")," from the command-line) here is what will happen."),(0,o.kt)("u",null,"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,o.kt)("li",{parentName:"ul"},"Chrome opens"),(0,o.kt)("li",{parentName:"ul"},"Test runs"),(0,o.kt)("li",{parentName:"ul"},"Chrome closes"),(0,o.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,o.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);