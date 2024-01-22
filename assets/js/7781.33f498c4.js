"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7781],{67781:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],p={toc:l},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First we'll need to download BrowserMob Proxy from ",(0,o.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"here"),"."),(0,o.kt)("p",null,"Then we can wire up our test script to pull in our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and it's matchers for our assertion, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb"},(0,o.kt)("inlineCode",{parentName:"a"},"browsermob/proxy"))," to control the proxy server)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: bandwidth_limit.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n")),(0,o.kt)("p",null,"Now let's configure the proxy server and bind it to a Selenium browser profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.1.0-beta-3/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  profile\nend\n")),(0,o.kt)("p",null,"Now we can create ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\n  @driver.manage.timeouts.page_load = 300 # seconds\n  @proxy.limit(upstream_kbps: 20, downstream_kbps: 30)\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," we set the default timeout for Selenium to 5 minutes (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"300")," seconds) and specify an upload limit of ",(0,o.kt)("inlineCode",{parentName:"p"},"20")," kilobits per second and a download limit of ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," kilobits per second (which is similar to a dial-up connection)."),(0,o.kt)("p",null,"Now let's write our test. A simple page load and copy assertion will suffice (to make sure the page actually loaded)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.find_element(class: 'heading').text).to eql('Welcome to the Internet')\nend\n")),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"If you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby bandwidth_limit.rb")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Proxy server starts"),(0,o.kt)("li",{parentName:"ul"},"Proxy server session created"),(0,o.kt)("li",{parentName:"ul"},"Browser opens (connecting to the proxy server session with a large default timeout)"),(0,o.kt)("li",{parentName:"ul"},"Proxy bandwidth constraints applied"),(0,o.kt)("li",{parentName:"ul"},"Visit the page (which loads slowly)"),(0,o.kt)("li",{parentName:"ul"},"Page eventually loads"),(0,o.kt)("li",{parentName:"ul"},"Grab the text from the page heading"),(0,o.kt)("li",{parentName:"ul"},"Perform an assertion against the text to make sure it loaded"),(0,o.kt)("li",{parentName:"ul"},"Browser closes"),(0,o.kt)("li",{parentName:"ul"},"Proxy session closes")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"It may not be clear in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb"},(0,o.kt)("inlineCode",{parentName:"a"},"browsermob-proxy-rb"))," what options and functionality are available since the library is light on documentation. But the code is easy to read and has good comments. It's worth looking at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb/blob/master/lib/browsermob/proxy/client.rb"},"the client class")," to see what's available."),(0,o.kt)("p",null,"Alternatively, you can BrowserMob Proxy through it's Rest API. You can find out more about that on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lightbody/browsermob-proxy#rest-api"},"the BrowserMob Proxy GitHub page"),"."),(0,o.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);