"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2899],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,m=c["".concat(u,".").concat(d)]||c[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"Ruby",id:"13-work-with-basic-auth-ruby",slug:"ruby/",number:13,publish_date:new Date("2015-10-14T00:00:00.000Z"),last_update:{date:new Date("2023-02-22T00:00:00.000Z")},tags:["authentication"],level:1,category:["troubleshooting"],language:"ruby"},o="How to Access Basic Auth",s={unversionedId:"updated-tips/how-to-access-basic-auth/13-work-with-basic-auth-ruby",id:"updated-tips/how-to-access-basic-auth/13-work-with-basic-auth-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/13-how-to-access-basic-auth/ruby.md",sourceDirName:"updated-tips/13-how-to-access-basic-auth",slug:"/updated-tips/how-to-access-basic-auth/ruby/",permalink:"/docs/updated-tips/how-to-access-basic-auth/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/13-how-to-access-basic-auth/ruby.md",tags:[{label:"authentication",permalink:"/docs/tags/authentication"}],version:"current",frontMatter:{title:"Ruby",id:"13-work-with-basic-auth-ruby",slug:"ruby/",number:13,publish_date:"2015-10-14T00:00:00.000Z",last_update:{date:"2023-02-22T00:00:00.000Z"},tags:["authentication"],level:1,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/updated-tips/how-to-access-basic-auth/python/"},next:{title:"Ruby",permalink:"/docs/updated-tips/download-secure-files/ruby/"}},u={},l=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:l},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-access-basic-auth"},"How to Access Basic Auth"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In this guide, you will learn how to pass credentials to a site when requesting a page that is secured behind Basic HTTP Authentication."),(0,r.kt)("p",null,"Sometimes you'll work with applications that are secured behind ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic HTTP Authentication")," (a.k.a. Basic Auth). In order to access them you'll need to pass credentials to the site when requesting a page otherwise you'll get a system level pop-up prompting you for a username and password -- rendering Selenium helpless."),(0,r.kt)("p",null,"Before Selenium 2 we were able to accomplish this by injecting credentials into a custom header, but now a popular way to do it is using something like ",(0,r.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy"),". Some people are also solving this issue with browser specific configurations but those methods feel a little heavy and complicated."),(0,r.kt)("p",null,"Instead, let's use a more straightforward approach that is browser agnostic and quick to setup."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By specifying the username and password ",(0,r.kt)("em",{parentName:"p"},"in the URL")," when visiting a page with Selenium, we can a side-step the system level dialog box and avoid setting up a proxy server. This approach will work for both HTTP or HTTPS pages."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"Let's start by requiring our requisite libraries (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser and ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," to handle our assertions) and implementing some helper methods (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),") to handle our test configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: basic_auth.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Now let's add our test code to the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'\n  page_message = @driver.find_element(css: '.example p').text\n  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'\nend\n")),(0,r.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Alternatively, we could have accessed this page as part of the test setup (after creating an instance of Selenium). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,r.kt)("p",null,"Here's what that script would look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: basic_auth_setup.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/basic_auth'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/basic_auth'\n  page_message = @driver.find_element(css: '.example p').text\n  expect(page_message).to eql 'Congratulations! You must have the proper credentials.'\nend\n")),(0,r.kt)("p",null,"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of each type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).__"),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save the first example and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby basic_auth.rb"),"), here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("p",null,"And when you save the second example and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby basic_auth_setup.rb"),"), here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth in the setup"),(0,r.kt)("li",{parentName:"ul"},"Navigate to the Basic Auth page (without providing credentials)"),(0,r.kt)("li",{parentName:"ul"},"Get the page text"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text is what we expect")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);