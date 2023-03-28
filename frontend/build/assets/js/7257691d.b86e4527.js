"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,c=u["".concat(l,".").concat(m)]||u[m]||w[m]||r;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>w,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"Ruby",id:"73-open-new-window-ruby",slug:"ruby/",number:73,publish_date:new Date("2023-02-17T00:00:00.000Z"),last_update:{date:new Date("2023-03-21T00:00:00.000Z")},tags:["new window","new tab","selenium 4","no keystrokes needed"],level:1,category:"testing",language:"ruby"},i="Open a New Window or Tab",s={unversionedId:"updated-tips/open-new-window/73-open-new-window-ruby",id:"updated-tips/open-new-window/73-open-new-window-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/73-open-new-window/ruby.md",sourceDirName:"updated-tips/73-open-new-window",slug:"/updated-tips/open-new-window/ruby/",permalink:"/docs/updated-tips/open-new-window/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/73-open-new-window/ruby.md",tags:[{label:"new window",permalink:"/docs/tags/new-window"},{label:"new tab",permalink:"/docs/tags/new-tab"},{label:"selenium 4",permalink:"/docs/tags/selenium-4"},{label:"no keystrokes needed",permalink:"/docs/tags/no-keystrokes-needed"}],version:"current",frontMatter:{title:"Ruby",id:"73-open-new-window-ruby",slug:"ruby/",number:73,publish_date:"2023-02-17T00:00:00.000Z",last_update:{date:"2023-03-21T00:00:00.000Z"},tags:["new window","new tab","selenium 4","no keystrokes needed"],level:1,category:"testing",language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/updated-tips/open-new-window/java/"}},l={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"<em>Click on any of the code snippets in the table for more information and script demos.</em>",id:"click-on-any-of-the-code-snippets-in-the-table-for-more-information-and-script-demos",level:5},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function w(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"open-a-new-window-or-tab"},"Open a New Window or Tab"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Nearly everyone, at some point during their normal flow of work on the computer, has had to open a new window or tab. In fact, many of us often end up with several tabs open. It makes sense that this should be tested using Selenium."),(0,o.kt)("p",null,"Previously, you may have sent keystrokes to open a new tab or window with a send keys method and ",(0,o.kt)("inlineCode",{parentName:"p"},"Command t")," (MacOS) or ",(0,o.kt)("inlineCode",{parentName:"p"},"Control n")," (Windows). However, this doesn\u2019t translate well across different operating systems and browser versions."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"With the release of Selenium 4 comes the ",(0,o.kt)("inlineCode",{parentName:"p"},"new_window")," command which allows you to create a new window or new tab (without needing a keyboard input), then select that tab, and navigate to a website:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Language")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"New Window")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"New Tab")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Java")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-java/blob/docs-1.2/selenium-examples/src/test/java/com/saucedemo/selenium/se4newfeatures/NewWindowTest.java#L13"},(0,o.kt)("inlineCode",{parentName:"a"},"driver.switchTo().newWindow(WindowType.WINDOW);"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-java/blob/docs-1.2/selenium-examples/src/test/java/com/saucedemo/selenium/se4newfeatures/NewWindowTest.java#L21"},(0,o.kt)("inlineCode",{parentName:"a"},"driver.switchTo().newWindow(WindowType.TAB);")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Python")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_new_window.py#L5"},(0,o.kt)("inlineCode",{parentName:"a"},"driver.switch_to.new_window('window')"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_new_window.py#L12"},(0,o.kt)("inlineCode",{parentName:"a"},"driver.switch_to.new_window('tab')")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Ruby")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/new_window_spec.rb#L7"},(0,o.kt)("inlineCode",{parentName:"a"},"@driver.switch_to.new_window(:window)"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/new_window_spec.rb#L13"},(0,o.kt)("inlineCode",{parentName:"a"},"@driver.switch_to.new_window(:tab)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"C#")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/NewWindow.cs#L39"},(0,o.kt)("inlineCode",{parentName:"a"},"Driver.SwitchTo().NewWindow(WindowType.Window);"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/NewWindow.cs#L48"},(0,o.kt)("inlineCode",{parentName:"a"},"Driver.SwitchTo().NewWindow(WindowType.Tab);")))))),(0,o.kt)("h5",{id:"click-on-any-of-the-code-snippets-in-the-table-for-more-information-and-script-demos"},(0,o.kt)("em",{parentName:"h5"},"Click on any of the code snippets in the table for more information and script demos.")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To open a new window, you call the driver you instantiated with a method that allows you to switch to a new window or tab."),(0,o.kt)("p",null,"After using the new window (or tab) method, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"driver.get")," method to navigate to a website or URL. See the examples in the table of the previous section to see how this would be implemented."),(0,o.kt)("p",null,"Now you can add any other actions or assertions you\u2019d like to do on the page. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ruby")," example below, you can see how a test and multiple windows are created and handled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'#filename new-window.rb\n\nrequire \'selenium-webdriver\'\nrequire \'rspec/expectations\'\n\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get("https://the-internet.herokuapp.com")\n  @driver.switch_to.new_window(:window)\n  @driver.manage.window.position = Selenium::WebDriver::Point.new(100, 400)\n  @driver.get("https://the-internet.herokuapp.com/typos")\n\n  windows_count = @driver.window_handles.length\n  if windows_count == 2\n    puts "Test passed: Found 2 windows open"\n  else\n    raise "Expected 2 windows, but found #{windows_count}"\nend\nend\n')),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"If you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ruby")," example referenced above (",(0,o.kt)("inlineCode",{parentName:"p"},"ruby new-window.rb"),"), this test will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Firefox browser"),(0,o.kt)("li",{parentName:"ul"},"Navigate to the-internet website"),(0,o.kt)("li",{parentName:"ul"},"Open a New Window and move it to a different position on the screen"),(0,o.kt)("li",{parentName:"ul"},"Navigate to the Typos page on the-internet website"),(0,o.kt)("li",{parentName:"ul"},"Check the number of windows open"),(0,o.kt)("li",{parentName:"ul"},"Close all browsers")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"There are many possible use cases for this new way of opening and focusing on new browser tabs and windows across OS and browser combinations."),(0,o.kt)("p",null,"From testing the way a user can interact with two windows side-by-side, to testing performance and behavior of multiple windows, this new command makes it simpler to test on multiple web pages."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"This tip is brought to you by contributors at ",(0,o.kt)("a",{parentName:"p",href:"https://saucelabs.com/"},"Sauce Labs"),'. To learn more about "website and mobile testing at every stage of development", ',(0,o.kt)("a",{parentName:"p",href:"https://saucelabs.com/"},"click here"),"."))}w.isMDXComponent=!0}}]);