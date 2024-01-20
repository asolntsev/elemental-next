"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1140],{71140:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>p,frontMatter:()=>o,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const o={},s=void 0,i=[{value:"Example",id:"example",level:2},{value:"Another Browser",id:"another-browser",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],l={toc:i},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You'll need an account to use Sauce Labs. You can sign up for a\n",(0,r.kt)("a",{parentName:"p",href:"https://saucelabs.com/sign-up"},"free trial account (no credit-card required)"),"."),(0,r.kt)("p",null,"First we'll include our dependent libraries (to drive the browser and do assertions), and wire up some simple\n",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," methods. We recommend exporting your Sauce Labs ",(0,r.kt)("inlineCode",{parentName:"p"},"SAUCE_USERNAME")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"SAUCE_ACCESS_KEY")," as environment variables."),(0,r.kt)("p",null,"Here are instructions for setting environment variables on each Operating System:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x"},"macOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/58814/how-do-i-add-environment-variables"},"Linux"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: cloud.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  options = Selenium::WebDriver::Options.chrome\n  options.browser_version = '109'\n  options.platform_name = 'macOS 13'\n  sauce_options = {}\n  sauce_options[:name] = 'Elemental Selenium - Tip 26 - Hello!'\n  options.add_option('sauce:options', sauce_options)\n\n  url = \"https://#{ENV['SAUCE_USERNAME']}:#{ENV['SAUCE_ACCESS_KEY']}@ondemand.us-west-1.saucelabs.com:443/wd/hub\"\n  @driver = Selenium::WebDriver.for(:remote, :url => url, :capabilities => options)\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," method is where the magic is happening. We declare the browser options\nfor Chrome and store it in a variable for immediate reuse. We then set the browser version\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"options.browser_version = '109'"),", but you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," to use the most recent\nversion), specify the operating system we would like to use (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"options.platform_name = 'macOS 13'"),"),\nand set the test name (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"sauce_options[:name] = 'Elemental Selenium - Tip 26 - Hello!'"),")."),(0,r.kt)("p",null,"We then connect to Sauce Labs with Selenium WebDriver and feed in our browser options object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The URL contains the URI for the Sauce Labs cl service as well as our Sauce user and\naccess credentials. In this case, they are specified through environment variables. But you can\njust as easily hard-code your info here. We recommend exporting your Sauce Labs ",(0,r.kt)("inlineCode",{parentName:"p"},"SAUCE_USERNAME")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"SAUCE_ACCESS_KEY")," as environment variables."),(0,r.kt)("p",null,"Here are instructions for setting environment variables on each Operating System:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x"},"macOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/58814/how-do-i-add-environment-variables"},"Linux"))),(0,r.kt)("p",null,"Now we're ready to add a test to run in Sauce Labs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.title.include?('The Internet')).to eql true\nend\n")),(0,r.kt)("p",null,"If we save this and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby cloud.rb")," from the command-line) it will execute the test on\nan Chrome 109 browser instance running on macOS 13 (Ventura) in Sauce Labs."),(0,r.kt)("h2",{id:"another-browser"},"Another Browser"),(0,r.kt)("p",null,"If you want to change up the browser, you would just need to alter the options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"  # For Chrome 110\n  options = Selenium::WebDriver::Options.chrome\n  options.browser_version = '110'\n")),(0,r.kt)("p",null,"Or..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"  # For Safari 16\n  options = Selenium::WebDriver::Options.safari\n  options.browser_version = '16'\n")),(0,r.kt)("p",null,"Or..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"  # For Edge 109\n  options = Selenium::WebDriver::Options.edge\n  options.browser_version = '109'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You can find a full list of configuration options along with example code for all of Sauce supported\nlanguages at their ",(0,r.kt)("a",{parentName:"p",href:"https://saucelabs.com/products/platform-configurator#/"},"Platform Configurator"),"."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a specified browser in Sauce Labs"),(0,r.kt)("li",{parentName:"ul"},"Test runs"),(0,r.kt)("li",{parentName:"ul"},"Browser closes"),(0,r.kt)("li",{parentName:"ul"},"Test results (along with a video recording, screenshots, and other debugging information) are available on the\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.saucelabs.com/test-results/viewing-test-results/"},"test results dashboard"),".")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully this tip has helped you get your tests up and running against numerous browsers."),(0,r.kt)("p",null,"There are some other things to consider when using Sauce Labs (e.g., testing your secure apps through\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.saucelabs.com/secure-connections/sauce-connect/"},"Sauce Connect"),", setting the pass/fail status\nfor your tests, and dynamically setting the test name). You can find more information about these things\nin ",(0,r.kt)("a",{parentName:"p",href:"https://docs.saucelabs.com/"},"the Sauce Labs docs"),"."),(0,r.kt)("p",null,"Happy Testing!"))}p.isMDXComponent=!0}}]);