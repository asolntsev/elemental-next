"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[218,18665],{18665:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(74848),i=t(28453);const o={},s=void 0,a={id:"chrome-driver/_java",title:"_java",description:"Example",source:"@site/tips/29-chrome-driver/_java.mdx",sourceDirName:"29-chrome-driver",slug:"/chrome-driver/_java",permalink:"/tips/chrome-driver/_java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/29-chrome-driver/_java.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1725359002e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"_csharp",permalink:"/tips/chrome-driver/_csharp"},next:{title:"_python",permalink:"/tips/chrome-driver/_python"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,n.jsx)(r.a,{href:"http://chromedriver.storage.googleapis.com/index.html",children:"here"}),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Add it to the System PATH"}),"\n",(0,n.jsx)(r.li,{children:"Specify it in the Selenium setup"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["We'll start by importing our requisite classes (for annotations (e.g., ",(0,n.jsx)(r.code,{children:"org.junit.After"}),", etc.), driving the browser with Selenium (e.g., ",(0,n.jsx)(r.code,{children:"org.openqa.selenium.WebDriver"}),", etc.), and matchers for our assertions (e.g., ",(0,n.jsx)(r.code,{children:"org.hamcrest.CoreMatchers"}),", etc.)) and start our class with some setup and teardown methods."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'// filename: ChromeDriverExample.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\n\npublic class ChromeDriverExample {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        System.setProperty("web-driver.chrome.driver",\n                System.getProperty("user.dir") + "/../../vendor/chrome-driver-2.15/chromedriver_mac32");\n        driver = new ChromeDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Notice that in ",(0,n.jsx)(r.code,{children:"setUp"})," we are telling Selenium where the ChromeDriver exectuable is with ",(0,n.jsx)(r.code,{children:'setProperty("webdriver.chrome.driver"'})," before creating an instance of the browser. And by using ",(0,n.jsx)(r.code,{children:'System.getProperty("user.dir")'})," we are able to reference the ChromeDriver binary within our project."]}),"\n",(0,n.jsx)(r.p,{children:"Now we're ready to add a test."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'// filename: ChromeDriverExample.java\n// ...\n    @Test\n    public void chromeDriverTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        assertThat(driver.getTitle(), is(equalTo("The Internet")));\n    }\n\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["If we save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"mvn clean test"}),") it will launch an instance of Chrome, visit the homepage of ",(0,n.jsx)(r.a,{href:"http://the-internet.herokuapp.com/",children:"the-internet"}),", and assert that the page title loaded."]}),"\n",(0,n.jsx)(r.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,n.jsxs)(r.p,{children:["When you save this file and run it (e.g., ",(0,n.jsx)(r.code,{children:"mvn clean test"})," from the command-line) here is what will happen."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"ChromeDriver starts"}),"\n",(0,n.jsx)(r.li,{children:"Chrome opens"}),"\n",(0,n.jsx)(r.li,{children:"Test runs"}),"\n",(0,n.jsx)(r.li,{children:"Chrome closes"}),"\n",(0,n.jsx)(r.li,{children:"ChromeDriver stops"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(r.p,{children:["Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,n.jsx)(r.a,{href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference",children:"Selenium Quick Reference page for Installing Browser Drivers"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const i={},o=n.createContext(i);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);