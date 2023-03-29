"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"How To Download a File",slug:"2-download-a-file",number:2,publish_date:new Date("2015-11-15T00:00:00.000Z"),tags:["files","downloading","file download"],level:2,category:"testing"},i=void 0,l={unversionedId:"non-updated-tips/download-a-file/java/readme",id:"non-updated-tips/download-a-file/java/readme",title:"How To Download a File",description:"The Problem",source:"@site/docs/non-updated-tips/2-download-a-file/java/readme.md",sourceDirName:"non-updated-tips/2-download-a-file/java",slug:"/non-updated-tips/download-a-file/java/2-download-a-file",permalink:"/docs/non-updated-tips/download-a-file/java/2-download-a-file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/2-download-a-file/java/readme.md",tags:[{label:"files",permalink:"/docs/tags/files"},{label:"downloading",permalink:"/docs/tags/downloading"},{label:"file download",permalink:"/docs/tags/file-download"}],version:"current",frontMatter:{title:"How To Download a File",slug:"2-download-a-file",number:2,publish_date:"2015-11-15T00:00:00.000Z",tags:["files","downloading","file download"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Download a File",permalink:"/docs/non-updated-tips/download-a-file/csharp/2-download-a-file"},next:{title:"How To Work with Frames",permalink:"/docs/non-updated-tips/work-with-frames/csharp/3-work-with-frames"}},s={},d=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"Just like with ",(0,a.kt)("a",{parentName:"p",href:"/tips/1-upload-a-file"},"uploading files")," we hit the same issue with downloading them. A dialog box just out of Selenium's reach."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"With some additional configuration when setting up Selenium we can easily side-step the dialog box. This is done by instructing the browser to download files to a specific location without being prompted."),(0,a.kt)("p",null,"After the file is downloaded we can then perform some simple checks to make sure the file is what we expect."),(0,a.kt)("p",null,"Let's dig in with an example."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"Let's start off by importing our requisite classes for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), matchers for assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc. ), handling local files (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"java.io.File"),"), and a means to create a uniquely named folder to place downloaded files in (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.UUID"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Download.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.firefox.FirefoxProfile;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\nimport java.io.File;\nimport java.util.UUID;\n")),(0,a.kt)("p",null,"Now to create a class and add our test's setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Download.java\n//...\npublic class Download {\n    WebDriver driver;\n    File folder;\n\n    @Before\n    public void setUp() throws Exception {\n        folder = new File(UUID.randomUUID().toString());\n        folder.mkdir();\n\n        FirefoxProfile profile = new FirefoxProfile();\n        profile.setPreference("browser.download.dir", folder.getAbsolutePath());\n        profile.setPreference("browser.download.folderList", 2);\n        profile.setPreference("browser.helperApps.neverAsk.saveToDisk",\n                "image/jpeg, application/pdf, application/octet-stream");\n        profile.setPreference("pdfjs.disabled", true);\n        driver = new FirefoxDriver(profile);\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n        for (File file: folder.listFiles()) {\n            file.delete();\n        }\n        folder.delete();\n    }\n')),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp()")," method is where the magic is happening in this example. In it we're creating a uniquely named temp directory, configuring a browser profile object (for Firefox in this case), and plying it with the necessary configuration parameters to make it automatically download the file where we want (e.g., the newly created temp directory)."),(0,a.kt)("p",null,"Here's a breakdown of each of the browser preferences being set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.download.dir")," accepts a string. This is how we set the custom download path. It needs to be an absolute path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.download.folderList")," takes a number. It tells Firefox which download directory to use. ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," tells it to use a custom download path, wheras ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," would use the browser's default path, and ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," would place them on the Desktop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.helperApps.neverAsk.saveToDisk")," tells Firefox when not to prompt for a file download. It accepts a string of ",(0,a.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Internet_media_type"},"the file's MIME type"),". If you want to specify more than one, you do it with a comma-separated string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pdfjs.disabled")," is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.")),(0,a.kt)("p",null,"This profile object is then passed into our instance of Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"driver = new FirefoxDriver(profile);"),")."),(0,a.kt)("p",null,"Now let's take care of our test's ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Download.java\n// ...\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n        for (File file: folder.listFiles()) {\n            file.delete();\n        }\n        folder.delete();\n    }\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown()")," we close the browser instance and then clean up the temp directory by deleting the files in the temp folder and then the temp folder."),(0,a.kt)("p",null,"Now to wire up our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Download.java\n// ...\n    @Test\n    public void download() throws Exception {\n        driver.get("http://the-internet.herokuapp.com/download");\n        driver.findElement(By.cssSelector(".example a")).click();\n        // Wait 2 seconds to download file\n        Thread.sleep(2000);\n        File[] listOfFiles = folder.listFiles();\n        // Make sure the directory is not empty\n        assertThat(listOfFiles.length, is(not(0)));\n        for (File file : listOfFiles) {\n            // Make sure the downloaded file(s) is(are) not empty\n            assertThat(file.length(), is(not((long) 0)));\n        }\n    }\n\n}\n')),(0,a.kt)("p",null,"After visiting the page we find the first download link and click it. The click triggers an automatic download to the temp directory created in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp()"),". We need to wait for the download to finish, so we add a brief sleep (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.sleep(2000);"),"). After the file downloads, we perform some rudimentary checks to make sure the temp directory isn't empty and then check the file (or files) that they aren't empty either."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a uniquely named temp directory in the present working directory"),(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find and click the first download link on the page"),(0,a.kt)("li",{parentName:"ul"},"Automatically download the file to the temp directory without prompting"),(0,a.kt)("li",{parentName:"ul"},"Check that the temp directory is not empty"),(0,a.kt)("li",{parentName:"ul"},"Check that the downloaded file is not empty"),(0,a.kt)("li",{parentName:"ul"},"Close the browser"),(0,a.kt)("li",{parentName:"ul"},"Delete the temp directory")),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is not sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it ",(0,a.kt)("a",{parentName:"p",href:"http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/"},"here"),". In a future tip I'll cover a more reliable, faster, and scalable browser agnostic approach to downloading files. Stay tuned."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/elemental-selenium-tips"},"here"),"."),(0,a.kt)("p",null,"Happy Testing!"))}c.isMDXComponent=!0}}]);