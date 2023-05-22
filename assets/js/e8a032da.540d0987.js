"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(a),f=o,h=d["".concat(u,".").concat(f)]||d[f]||m[f]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=f;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={title:"1: How To Upload A File",id:"1-upload-a-file-ruby",contentUrl:"docs/how-to-upload-a-file/1-upload-a-file-ruby",sidebar_label:"Ruby",text:"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window.",hide_table_of_contents:!0,number:1,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-27T00:00:00.000Z")},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"ruby"},l="How to Upload a File",r={unversionedId:"how-to-upload-a-file/1-upload-a-file-ruby",id:"how-to-upload-a-file/1-upload-a-file-ruby",title:"1: How To Upload A File",description:"Intro",source:"@site/docs/1-how-to-upload-a-file/ruby.md",sourceDirName:"1-how-to-upload-a-file",slug:"/how-to-upload-a-file/1-upload-a-file-ruby",permalink:"/elemental-next/docs/how-to-upload-a-file/1-upload-a-file-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-how-to-upload-a-file/ruby.md",tags:[{label:"file",permalink:"/elemental-next/docs/tags/file"},{label:"upload",permalink:"/elemental-next/docs/tags/upload"},{label:"file upload",permalink:"/elemental-next/docs/tags/file-upload"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1677456e3,formattedLastUpdatedAt:"Feb 27, 2023",frontMatter:{title:"1: How To Upload A File",id:"1-upload-a-file-ruby",contentUrl:"docs/how-to-upload-a-file/1-upload-a-file-ruby",sidebar_label:"Ruby",text:"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window.",hide_table_of_contents:!0,number:1,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-27T00:00:00.000Z"},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/how-to-upload-a-file/1-upload-a-file-python"},next:{title:"Tutorial Intro",permalink:"/elemental-next/docs/intro"}},u={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-upload-a-file"},"How to Upload a File"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium."),(0,o.kt)("p",null,"In these cases people often look to a third-party tool to manipulate this window (e.g., ",(0,o.kt)("a",{parentName:"p",href:"http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/"},"AutoIt"),"). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) into the form and then submit the form."),(0,o.kt)("p",null,"Let's step through an example."),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: We are using ",(0,o.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/upload"},"a file upload example")," found on ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),".")),(0,o.kt)("p",null,"First let's include our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, and ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire-up some simple ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: upload.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"Now we're ready to write our file upload test."),(0,o.kt)("p",null,"==",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"!! Code snippet needs validation !!")),"=="),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  filename = 'some-file.txt'\n  file = File.join(Dir.pwd, filename)\n\n  @driver.get 'http://the-internet.herokuapp.com/upload'\n  @driver.find_element(id: 'file-upload').send_keys file\n  @driver.find_element(id: 'file-submit').click\n\n  uploaded_file = @driver.find_element(id: 'uploaded-files').text\n  expect(uploaded_file).to eql filename\nend\n")),(0,o.kt)("p",null,"After specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," we get the full path to the file (which we're doing with ",(0,o.kt)("inlineCode",{parentName:"p"},"File.join(Dir.pwd, filename)"),"). This approach assumes that the file is living in the same directory as the test script."),(0,o.kt)("p",null,"Next we visit the page with the upload form, input the ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," text (e.g., the full path to the file plus the filename with it's extension), and submit the form. After the file is uploaded the page will display the filename that it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect)."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby upload.rb")," from the command-line) this is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the browser"),(0,o.kt)("li",{parentName:"ul"},"Visit the upload form page"),(0,o.kt)("li",{parentName:"ul"},"Inject the file path into the form and submit it"),(0,o.kt)("li",{parentName:"ul"},"Page displays the uploaded filename"),(0,o.kt)("li",{parentName:"ul"},"Grab the text from the page and assert it's what we expect"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/DriverExtensions/UploadsFiles.html#file_detector%3D-instance_method"},(0,o.kt)("inlineCode",{parentName:"a"},"file_detector")),"."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);