"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Ruby",id:"39-drag-and-drop-ruby",slug:"ruby/",number:39,publish_date:new Date("2014-02-25T00:00:00.000Z"),last_update:{date:new Date("2023-03-02T00:00:00.000Z")},tags:["drag and drop","DnD","javascript","bug"],level:2,category:["remote"],language:"ruby"},i="How to Test HTML5 Drag and Drop",l={unversionedId:"updated-tips/drag-and-drop/39-drag-and-drop-ruby",id:"updated-tips/drag-and-drop/39-drag-and-drop-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/39-drag-and-drop/ruby.md",sourceDirName:"updated-tips/39-drag-and-drop",slug:"/updated-tips/drag-and-drop/ruby/",permalink:"/docs/updated-tips/drag-and-drop/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/39-drag-and-drop/ruby.md",tags:[{label:"drag and drop",permalink:"/docs/tags/drag-and-drop"},{label:"DnD",permalink:"/docs/tags/dn-d"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"bug",permalink:"/docs/tags/bug"}],version:"current",frontMatter:{title:"Ruby",id:"39-drag-and-drop-ruby",slug:"ruby/",number:39,publish_date:"2014-02-25T00:00:00.000Z",last_update:{date:"2023-03-02T00:00:00.000Z"},tags:["drag and drop","DnD","javascript","bug"],level:2,category:["remote"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Accessing Previous Tips Archive",permalink:"/docs/updated-tips/archives/"},next:{title:"Javascript",permalink:"/docs/updated-tips/disabled-element/javascript/"}},d={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-test-html5-drag-and-drop"},"How to Test HTML5 Drag and Drop"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Exercising a page's drag-and-drop functionality used to be simple with ",(0,a.kt)("a",{parentName:"p",href:"http://selenium.googlecode.com/svn/trunk/docs/api/rb/Selenium/WebDriver/ActionBuilder.html"},"Selenium's Action Builder"),", but sadly, ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/issues/detail?id=6315"},"it won't work with HTML5 drag and drop"),"."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"As a workaround, we can simulate dragging and dropping by executing JavaScript with Selenium. Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You can see a simple HTML5 drag and drop example ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/drag_and_drop"},"here on the-internet"),"."),(0,a.kt)("p",null,"First, let's borrow ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/rcorreia/2362544"},"the JavaScript made available by rcorreia on GitHub")," for this workaround and store it in a local file (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd.js"),")."),(0,a.kt)("p",null,"Now we can create a Selenium script to consume the JavaScript file, visit the page, execute the JavaScript, and perform an assertion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"After including our dependent libraries, we wire up our ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," actions. Now we're ready to write our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get \"http://the-internet.herokuapp.com/drag_and_drop\"\n\n  dnd_javascript = File.read(Dir.pwd + '/dnd.js')\n  @driver.execute_script(dnd_javascript+\"$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});\")\n\n  expect(@driver.find_element(id: 'column-a').text).to eql('B')\n  expect(@driver.find_element(id: 'column-b').text).to eql('A')\n\nend\n")),(0,a.kt)("p",null,"After loading the page we read in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd.js")," file and store it in a local variable. We then use Selenium to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd_javascript")," along with the function calls and elements we want to work with. After that, it's just a simple matter of grabbing text from the page and making an assertion against it."),(0,a.kt)("p",null,"Since there are only two elements to drag and drop on the page, they should have switched places. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"column-a")," should now contain the text 'B', and ",(0,a.kt)("inlineCode",{parentName:"p"},"column-b")," should contain the text 'A'."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you run the ruby file, here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Text in Column A and Column B will switches places"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you figure out how to wrangle HTML5 dragging and dropping while there is a known bug for it in Selenium."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);