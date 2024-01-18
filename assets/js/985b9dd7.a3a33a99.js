"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[89794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2014-02-25T00:00:00.000Z"),last_update:{date:new Date("2023-03-02T00:00:00.000Z")}},i=void 0,l={unversionedId:"drag-and-drop/ruby",id:"drag-and-drop/ruby",title:"ruby",description:"A Solution",source:"@site/docs/39-drag-and-drop/ruby.md",sourceDirName:"39-drag-and-drop",slug:"/drag-and-drop/ruby",permalink:"/docs/drag-and-drop/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/39-drag-and-drop/ruby.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1677715200,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2014-02-25T00:00:00.000Z",last_update:{date:"2023-03-02T00:00:00.000Z"}}},p={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:u},s="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"As a workaround, we can simulate dragging and dropping by executing JavaScript with Selenium. Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You can see a simple HTML5 drag and drop example ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/drag_and_drop"},"here on the-internet"),"."),(0,a.kt)("p",null,"First, let's borrow ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/rcorreia/2362544"},"the JavaScript made available by rcorreia on GitHub")," for this workaround and store it in a local file (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd.js"),")."),(0,a.kt)("p",null,"Now we can create a Selenium script to consume the JavaScript file, visit the page, execute the JavaScript, and perform an assertion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"After including our dependent libraries, we wire up our ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," actions. Now we're ready to write our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get \"http://the-internet.herokuapp.com/drag_and_drop\"\n\n  dnd_javascript = File.read(Dir.pwd + '/dnd.js')\n  @driver.execute_script(dnd_javascript+\"$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});\")\n\n  expect(@driver.find_element(id: 'column-a').text).to eql('B')\n  expect(@driver.find_element(id: 'column-b').text).to eql('A')\n\nend\n")),(0,a.kt)("p",null,"After loading the page we read in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd.js")," file and store it in a local variable. We then use Selenium to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd_javascript")," along with the function calls and elements we want to work with. After that, it's just a simple matter of grabbing text from the page and making an assertion against it."),(0,a.kt)("p",null,"Since there are only two elements to drag and drop on the page, they should have switched places. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"column-a")," should now contain the text 'B', and ",(0,a.kt)("inlineCode",{parentName:"p"},"column-b")," should contain the text 'A'."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you run the ruby file, here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Text in Column A and Column B will switches places"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you figure out how to wrangle HTML5 dragging and dropping while there is a known bug for it in Selenium."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);