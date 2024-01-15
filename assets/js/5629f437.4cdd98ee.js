"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[42334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2015-07-01T00:00:00.000Z"),last_update:{date:new Date("2023-03-15T00:00:00.000Z")}},o=void 0,l={unversionedId:"exception-handling/ruby",id:"exception-handling/ruby",title:"ruby",description:"A Solution",source:"@site/docs/44-exception-handling/ruby.md",sourceDirName:"44-exception-handling",slug:"/exception-handling/ruby",permalink:"/docs/exception-handling/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/44-exception-handling/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678838400,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2015-07-01T00:00:00.000Z",last_update:{date:"2023-03-15T00:00:00.000Z"}}},s={},d=[{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function c(e){let{components:n,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"By adding some simple exception handling we can catch Selenium's errors and make our tests more resilient."),(0,i.kt)("p",null,"Let's take a look at an example."),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"For this example we'll use ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/login"},"a login example")," from ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,i.kt)("p",null,"First let's require our necessary libraries (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to control the browser and ",(0,i.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions) and wire up some simple ",(0,i.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: exception_handling.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,i.kt)("p",null,"To demonstrate the problem, let's write a basic test to exercise the login page. After logging in, we'll check to see that the login form is no longer displayed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }\n  expect(@driver.find_element(id: 'login').displayed?).to eql false\nend\n")),(0,i.kt)("p",null,"When we run this (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby exception_handling.rb")," from the command-line) our test will not pass. It will log in just fine, but it will error when performing the assertion -- returning the following exception:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Unable to locate element: {"method":"id","selector":"login"} (Selenium::WebDriver::Error::NoSuchElementError)\n')),(0,i.kt)("p",null,"In the Python Selenium bindings they have a section of actions called ",(0,i.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html"},"expected conditions"),". One of them is designed specifically for this use case (called ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility_of_element_located"),"). It checks to see if an element is displayed and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if it's not (rather than throwing an exception)."),(0,i.kt)("p",null,"Unfortunately the Ruby Selenium bindings do not come with this functionality built-in, and there are no plans to add it. So let's go through how to do it ourselves. For that we'll need a basic understanding of exceptions and how to rescue them (",(0,i.kt)("a",{parentName:"p",href:"https://skorks.com/2009/09/ruby-exceptions-and-exception-handling/"},"here's a quick primer"),") and the name of the exception we want to rescue. You can find a full list of the Selenium exceptions for Ruby ",(0,i.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Error.html"},"here"),". But we shouldn't need all of them since our previous test run told us the name of the exception."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Selenium::WebDriver::Error::NoSuchElementError")," is the one we want. Let's put it to use by wrapping the last display check in our test with a ",(0,i.kt)("inlineCode",{parentName:"p"},"rescue")," block, making it return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if it's triggered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  begin\n    expect(@driver.find_element(id: 'login').displayed?).to eql false\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n")),(0,i.kt)("p",null,"Now if we run the test (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby exception_handling.rb")," from the command-line) it will pass. But this is far from a clean implementation. Let's clean things up a bit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"def rescue_exceptions\n  begin\n    yield\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n\ndef is_displayed?(locator = {})\n  rescue_exceptions { @driver.find_element(locator).displayed? }\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  expect(is_displayed?(id: 'login')).to eql false\nend\n")),(0,i.kt)("p",null,"By breaking apart our rescue block (into a ",(0,i.kt)("inlineCode",{parentName:"p"},"rescue_exceptions")," method) and our ",(0,i.kt)("inlineCode",{parentName:"p"},"displayed?")," check (into an ",(0,i.kt)("inlineCode",{parentName:"p"},"is_displayed?")," method) we're left with a cleaner (and reusable) implementation in our test code. And if you wanted to add another Selenium exception to the mix, then you would simply add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"rescue")," statement along with the result you want in ",(0,i.kt)("inlineCode",{parentName:"p"},"rescue_exceptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"def rescue_exceptions\n  begin\n    yield\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: ",(0,i.kt)("inlineCode",{parentName:"strong"},"NoSuchElementError")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"StaleElementReferenceError")," are the two most common errors you'll run into when using Selenium.")),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"If your test is still failing, it might not have enough time to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," element. In this case, you will have to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"wait")," to your test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# exception-with-wait.rb\n\ndef wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n")),(0,i.kt)("p",null,"Also add this line to your run code, just before the ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# exception-with-wait.rb\n\nwait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The full script with ",(0,i.kt)("inlineCode",{parentName:"strong"},"wait")," added will be as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# exception-with-wait.rb\n\n# filename: exception_handling.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\ndef rescue_exceptions\n  begin\n    yield\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n\ndef is_displayed?(locator = {})\n  rescue_exceptions { @driver.find_element(locator).displayed? }\nend\n\ndef wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }\n  expect(is_displayed?(id: 'login')).to eql false\nend\n")),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"If you save the file and run it (e.g, ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby exception_handling.rb")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the page"),(0,i.kt)("li",{parentName:"ul"},"Log in"),(0,i.kt)("li",{parentName:"ul"},"Check to see that the login form is NOT displayed"),(0,i.kt)("li",{parentName:"ul"},"Catch the exception from Selenium and return ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," instead"),(0,i.kt)("li",{parentName:"ul"},"Complete the assertion using the boolean response (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip has helped you learn how to work effectively with exceptions in Selenium."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dave Haeffner profile picture",src:t(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}c.isMDXComponent=!0},89417:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);