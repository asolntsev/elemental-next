"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"How To Download a File Without a Browser",slug:"8-download-a-file-revisited",number:8,publish_date:new Date("2015-11-10T00:00:00.000Z"),tags:["files","downloading"],level:2,category:"testing"},i=void 0,l={unversionedId:"non-updated-tips/download-a-file-revisited/java/readme",id:"non-updated-tips/download-a-file-revisited/java/readme",title:"How To Download a File Without a Browser",description:"The Problem",source:"@site/docs/non-updated-tips/8-download-a-file-revisited/java/readme.md",sourceDirName:"non-updated-tips/8-download-a-file-revisited/java",slug:"/non-updated-tips/download-a-file-revisited/java/8-download-a-file-revisited",permalink:"/docs/non-updated-tips/download-a-file-revisited/java/8-download-a-file-revisited",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/8-download-a-file-revisited/java/readme.md",tags:[{label:"files",permalink:"/docs/tags/files"},{label:"downloading",permalink:"/docs/tags/downloading"}],version:"current",frontMatter:{title:"How To Download a File Without a Browser",slug:"8-download-a-file-revisited",number:8,publish_date:"2015-11-10T00:00:00.000Z",tags:["files","downloading"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Download a File Without a Browser",permalink:"/docs/non-updated-tips/download-a-file-revisited/csharp/8-download-a-file-revisited"},next:{title:"How To Opt-out of A/B Tests",permalink:"/docs/non-updated-tips/opt-out-of-ab-tests/csharp/12-opt-out-of-ab-tests"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"In a ",(0,a.kt)("a",{parentName:"p",href:"/tips/2-download-a-file"},"previous tip")," we stepped through how to download files with Selenium by configuring the browser to download them locally and performing some checks."),(0,a.kt)("p",null,"While this works it requires a custom configuration that is not available in all browsers, and is inconsistent between the browsers that have it."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,a.kt)("em",{parentName:"p"},"can")," be downloaded. And we can do that by using an HTTP request alongside Selenium."),(0,a.kt)("p",null,"With an HTTP library we can perform a header (",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),") request for the file. Instead of downloading the file we'll receive the header information for the file which contains things like the content type and length. With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times."),(0,a.kt)("p",null,"Let's dig with an example."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"To start things off let's import our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.), and an HTTP library to handle our HEAD request (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.http.HttpResponse"),", etc.) and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: DownloadFileRevisited.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\nimport org.apache.http.HttpResponse;\nimport org.apache.http.client.HttpClient;\nimport org.apache.http.client.methods.HttpHead;\nimport org.apache.http.impl.client.HttpClientBuilder;\n\npublic class DownloadFileRevisited {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now we're ready to wire up our test."),(0,a.kt)("p",null,"It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD")," request with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: DownloadFileRevisited.java\n// ...\n    @Test\n    public void downloadFileRevisitedTest() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/download");\n        String link = driver.findElement(By.cssSelector(".example a:nth-of-type(1)")).getAttribute("href");\n\n        HttpClient httpClient = HttpClientBuilder.create().build();\n        HttpHead request = new HttpHead(link);\n        HttpResponse response = httpClient.execute(request);\n        String contentType = response.getFirstHeader("Content-Type").getValue();\n        int contentLength = Integer.parseInt(response.getFirstHeader("Content-Length").getValue());\n\n        assertThat(contentType, is("application/octet-stream"));\n        assertThat(contentLength, is(not(0)));\n    }\n\n}\n')),(0,a.kt)("p",null,"Once we receive the response we check it's header for the content type (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'response.getFirstHeader("Content-Type")'),") and content length (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},'response.getFirstHeader("Content-Length")'),") to make sure the file is the correct type and not empty."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean install")," from the command-line) here is what will will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Grab the URL of the first download link"),(0,a.kt)("li",{parentName:"ul"},"Perform a ",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD")," request against it with an HTTP library"),(0,a.kt)("li",{parentName:"ul"},"Store the response headers"),(0,a.kt)("li",{parentName:"ul"},"Check the response headers to see that the file type is correct"),(0,a.kt)("li",{parentName:"ul"},"Check the response headers to see that the file is not empty"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"Compared to the browser specific configuration with Selenium this is hands-down a leaner, faster, and more maintainable approach."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/elemental-selenium-tips"},"here"),"."),(0,a.kt)("p",null,"Happy Testing!"))}c.isMDXComponent=!0}}]);