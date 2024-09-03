"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[38709,38344],{38344:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=i(74848),t=i(28453);const s={},l=void 0,d={id:"exception-handling/_ruby",title:"_ruby",description:"Example 1",source:"@site/tips/44-exception-handling/_ruby.mdx",sourceDirName:"44-exception-handling",slug:"/exception-handling/_ruby",permalink:"/tips/exception-handling/_ruby",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/44-exception-handling/_ruby.mdx",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1725359002e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How to Test Forgot Password",permalink:"/tips/43-forgot-password"},next:{title:"How To Handle Exceptions",permalink:"/tips/44-exception-handling"}},o={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["For this example we'll use ",(0,r.jsx)(n.a,{href:"http://the-internet.herokuapp.com/login",children:"a login example"})," from ",(0,r.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["First let's require our necessary libraries (e.g., ",(0,r.jsx)(n.code,{children:"selenium-webdriver"})," to control the browser and ",(0,r.jsx)(n.code,{children:"rspec/expectations"})," & ",(0,r.jsx)(n.code,{children:"RSpec::Matchers"})," for our assertions) and wire up some simple ",(0,r.jsx)(n.code,{children:"setup"}),", ",(0,r.jsx)(n.code,{children:"teardown"}),", and ",(0,r.jsx)(n.code,{children:"run"})," methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# filename: exception_handling.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"To demonstrate the problem, let's write a basic test to exercise the login page. After logging in, we'll check to see that the login form is no longer displayed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }\n  expect(@driver.find_element(id: 'login').displayed?).to eql false\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When we run this (e.g., ",(0,r.jsx)(n.code,{children:"ruby exception_handling.rb"})," from the command-line) our test will not pass. It will log in just fine, but it will error when performing the assertion -- returning the following exception:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'Unable to locate element: {"method":"id","selector":"login"} (Selenium::WebDriver::Error::NoSuchElementError)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the Python Selenium bindings they have a section of actions called ",(0,r.jsx)(n.a,{href:"https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html",children:"expected conditions"}),". One of them is designed specifically for this use case (called ",(0,r.jsx)(n.code,{children:"visibility_of_element_located"}),"). It checks to see if an element is displayed and returns ",(0,r.jsx)(n.code,{children:"false"})," if it's not (rather than throwing an exception)."]}),"\n",(0,r.jsxs)(n.p,{children:["Unfortunately the Ruby Selenium bindings do not come with this functionality built-in, and there are no plans to add it. So let's go through how to do it ourselves. For that we'll need a basic understanding of exceptions and how to rescue them (",(0,r.jsx)(n.a,{href:"https://skorks.com/2009/09/ruby-exceptions-and-exception-handling/",children:"here's a quick primer"}),") and the name of the exception we want to rescue. You can find a full list of the Selenium exceptions for Ruby ",(0,r.jsx)(n.a,{href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/Error.html",children:"here"}),". But we shouldn't need all of them since our previous test run told us the name of the exception."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Selenium::WebDriver::Error::NoSuchElementError"})," is the one we want. Let's put it to use by wrapping the last display check in our test with a ",(0,r.jsx)(n.code,{children:"rescue"})," block, making it return ",(0,r.jsx)(n.code,{children:"false"})," if it's triggered."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"run do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  begin\n    expect(@driver.find_element(id: 'login').displayed?).to eql false\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now if we run the test (e.g., ",(0,r.jsx)(n.code,{children:"ruby exception_handling.rb"})," from the command-line) it will pass. But this is far from a clean implementation. Let's clean things up a bit."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"def rescue_exceptions\n  begin\n    yield\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n\ndef is_displayed?(locator = {})\n  rescue_exceptions { @driver.find_element(locator).displayed? }\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  expect(is_displayed?(id: 'login')).to eql false\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By breaking apart our rescue block (into a ",(0,r.jsx)(n.code,{children:"rescue_exceptions"})," method) and our ",(0,r.jsx)(n.code,{children:"displayed?"})," check (into an ",(0,r.jsx)(n.code,{children:"is_displayed?"})," method) we're left with a cleaner (and reusable) implementation in our test code. And if you wanted to add another Selenium exception to the mix, then you would simply add a new ",(0,r.jsx)(n.code,{children:"rescue"})," statement along with the result you want in ",(0,r.jsx)(n.code,{children:"rescue_exceptions"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"def rescue_exceptions\n  begin\n    yield\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["NOTE: ",(0,r.jsx)(n.code,{children:"NoSuchElementError"})," and ",(0,r.jsx)(n.code,{children:"StaleElementReferenceError"})," are the two most common errors you'll run into when using Selenium."]})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["If your test is still failing, it might not have enough time to find the ",(0,r.jsx)(n.code,{children:"login"})," element. In this case, you will have to add a ",(0,r.jsx)(n.code,{children:"wait"})," to your test."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# exception-with-wait.rb\n\ndef wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Also add this line to your run code, just before the ",(0,r.jsx)(n.code,{children:"expect"})," line:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# exception-with-wait.rb\n\nwait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["The full script with ",(0,r.jsx)(n.code,{children:"wait"})," added will be as follows:"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"# exception-with-wait.rb\n\n# filename: exception_handling.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\ndef rescue_exceptions\n  begin\n    yield\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  rescue Selenium::WebDriver::Error::StaleElementReferenceError\n    false\n  end\nend\n\ndef is_displayed?(locator = {})\n  rescue_exceptions { @driver.find_element(locator).displayed? }\nend\n\ndef wait_for(seconds)\n  Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }\nend\n\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/login'\n  @driver.find_element(id: 'username').send_keys('tomsmith')\n  @driver.find_element(id: 'password').send_keys('SuperSecretPassword!')\n  @driver.find_element(id: 'login').submit\n  wait_for(10) { @driver.find_element(css: '.icon-2x').displayed? }\n  expect(is_displayed?(id: 'login')).to eql false\nend\n"})}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.p,{children:["If you save the file and run it (e.g, ",(0,r.jsx)(n.code,{children:"ruby exception_handling.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the browser"}),"\n",(0,r.jsx)(n.li,{children:"Visit the page"}),"\n",(0,r.jsx)(n.li,{children:"Log in"}),"\n",(0,r.jsx)(n.li,{children:"Check to see that the login form is NOT displayed"}),"\n",(0,r.jsxs)(n.li,{children:["Catch the exception from Selenium and return ",(0,r.jsx)(n.code,{children:"false"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:["Complete the assertion using the boolean response (e.g., ",(0,r.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Hopefully this tip has helped you learn how to work effectively with exceptions in Selenium."}),"\n",(0,r.jsx)(n.p,{children:"Happy Testing!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);