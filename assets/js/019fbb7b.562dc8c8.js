"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[70395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2014-06-03T00:00:00.000Z"),last_update:{date:new Date("2023-03-25T00:00:00.000Z")}},i=void 0,l={unversionedId:"growl/ruby",id:"growl/ruby",title:"ruby",description:"A Solution",source:"@site/docs/53-growl/ruby.md",sourceDirName:"53-growl",slug:"/growl/ruby",permalink:"/docs/growl/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/53-growl/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1679702400,formattedLastUpdatedAt:"Mar 25, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2014-06-03T00:00:00.000Z",last_update:{date:"2023-03-25T00:00:00.000Z"}}},s={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging something like ",(0,a.kt)("a",{parentName:"p",href:"http://ksylvest.github.io/jquery-growl/"},"jQuery Growl")," you can output non-interactive debugging statements directly to the page you're testing."),(0,a.kt)("p",null,"With Growl way you can see helpful information and more-likely correlate it to the test actions that are being taken. This can a boon for your test runs when coupled with screenshots and/or video recordings of your test runs"),(0,a.kt)("p",null,"Let's step through an example of how to set this up."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First, we'll include our requisite libraries and wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: growl.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,a.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery"),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n\n  # Step 1: check for jQuery on the page, add it if needbe\n  @driver.execute_script(\n    \"if (!window.jQuery) {\n    var jquery = document.createElement('script');\n    jquery.type = 'text/javascript';\n    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';\n    document.getElementsByTagName('head')[0].appendChild(jquery);\n    }\")\n\n  # Step 2: use jQuery to add jquery-growl to the page\n  @driver.execute_script(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\")\n\n  # Step 3: use jQuery to add jquery-growl styles to the page\n  @driver.execute_script(\"$('head').append('<link rel=\\\"stylesheet\\\" href=\\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\\" type=\\\"text/css\\\" />');\")\n\n  sleep 5 # adding 5 seconds sleep\n\n  # Step 4: display a message with jquery-growl\n  @driver.execute_script(\"$.growl({ title: 'GET', message: '/' });\")\n\n  sleep 5 # to keep the browser active long enough to see the notifications\nend\n")),(0,a.kt)("p",null,"And if we wanted to see color-coded notifications, then we could use one of the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"  @driver.execute_script(\"$.growl.error({ title: 'ERROR', message: 'your error message goes here' });\")\n  @driver.execute_script(\"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\")\n  @driver.execute_script(\"$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });\")\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Add jQuery, jQuery Growl, and jQuery Growl notifications to the page"),(0,a.kt)("li",{parentName:"ul"},"Display a set of notification messages in the top-right corner of the page"),(0,a.kt)("li",{parentName:"ul"},"Notification messages disappear"),(0,a.kt)("li",{parentName:"ul"},"Browser closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test)."),(0,a.kt)("p",null,"In a future tip I'll step through how to access Selenium logging output so we can wire it up to these notifications."),(0,a.kt)("p",null,"I'd like to give a big thanks to Jon Austen (",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/austenjt"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djangofan"},"GitHub"),") for giving me the idea to use jQuery Growl with Selenium."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dave Haeffner profile picture",src:r(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}d.isMDXComponent=!0},89417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);