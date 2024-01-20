"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[47589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={hide_table_of_contents:!0,publish_date:new Date("2014-03-11T00:00:00.000Z"),last_update:{date:new Date("2023-03-20T00:00:00.000Z")},level:2,language:"ruby"},i=void 0,l={unversionedId:"one-test-multiple-browsers/ruby",id:"one-test-multiple-browsers/ruby",title:"ruby",description:"A Solution",source:"@site/tips/41-one-test-multiple-browsers/ruby.md",sourceDirName:"41-one-test-multiple-browsers",slug:"/one-test-multiple-browsers/ruby",permalink:"/tips/one-test-multiple-browsers/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/41-one-test-multiple-browsers/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1679270400,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{hide_table_of_contents:!0,publish_date:"2014-03-11T00:00:00.000Z",last_update:{date:"2023-03-20T00:00:00.000Z"},level:2,language:"ruby"}},s={},p=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"With the help of Sauce Labs, a collection, and a loop, we can easily specify a list of browsers and run a test\nagainst each of them."),(0,a.kt)("p",null,"Let's take a look at an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To start, we include our dependent libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"'selenium-webdriver'")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"'rspec-expectations'"),"\nto perform our assertion) and then wire up ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," methods."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," we are accepting two parameters -- ",(0,a.kt)("inlineCode",{parentName:"p"},"browser_name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"browser_version"),". We put these to use when\nspecifying the browser and operating system capabilities for Sauce Labs, which gets stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"caps")," variable.\nThis variable then gets passed in as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver")," incantation."),(0,a.kt)("p",null,"And in ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," we destroy the browser session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: example.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\n\ndef setup(browser_name, browser_version)\n  caps = Selenium::WebDriver::Remote::Capabilities.send(browser_name.to_sym)\n  caps.platform = 'Windows XP'\n  caps.version = browser_version.to_s\n\n  @driver = Selenium::WebDriver.for(\n    :remote,\n    url: \"https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_API_KEY']}@ondemand.saucelabs.com/wd/hub\",\n    desired_capabilities: caps)\nend\n\ndef teardown\n  @driver.quit\nend\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"url:")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@driver")," section above. It is concatenated from environment variables that are set at run\ntime; like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"SAUCE_USERNAME='your sauce username' SAUCE_API_KEY='your sauce api key' ruby example.rb\n")),(0,a.kt)("p",null,"Next we specify the browsers and versions we care about in a collection (e.g., a Hash), create a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method, and\nwire it up to loop over the collection -- running ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", test actions, and ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," for each browser in the\ncollection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"BROWSERS = { firefox: '27',\n             chrome: '32',\n             internet_explorer: '8' }\n\ndef run\n  BROWSERS.each_pair do |browser, browser_version|\n    setup(browser, browser_version)\n    yield\n    teardown\n  end\nend\n")),(0,a.kt)("p",null,"Once we have that, we wire up our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'https://the-internet.herokuapp.com'\n  expect(@driver.title).to eql('The Internet')\nend\n")),(0,a.kt)("p",null,"And when we run it, we should see three jobs appear in Sauce Labs."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load Firefox, load the page, assert the title is correct"),(0,a.kt)("li",{parentName:"ul"},"Load Chrome, load the page, assert the title is correct"),(0,a.kt)("li",{parentName:"ul"},"Load IE, load the page, assert the title is correct")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped make multi-browser testing more approachable to you."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's\nread by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at\nnumerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);