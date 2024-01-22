"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6223],{56223:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const r={},l=void 0,o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],u={toc:o},p="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Run the following command on the terminal:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$  /usr/bin/safaridriver --enable")),(0,i.kt)("p",null,"After that, make sure it's enabled. To do that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"open ",(0,i.kt)("inlineCode",{parentName:"li"},"Safari")),(0,i.kt)("li",{parentName:"ol"},"go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Develop")),(0,i.kt)("li",{parentName:"ol"},"click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow Remote Automations"))),(0,i.kt)("p",null,"Now if we open up an interactive Ruby terminal (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"irb"),") and launch a Selenium instance, here's what we'd see."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> irb\nirb(main):001:0> require 'selenium-webdriver'\nirb(main):002:0> driver = Selenium::WebDriver.for :safari\n")),(0,i.kt)("p",null,"A successful communication between Safari and the Selenium Driver extension has occurred."),(0,i.kt)("p",null,"Now let's wire up a simple test so we can see that everything works as expect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: safari.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :safari\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.title).to eql 'The Internet'\nend\n")),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When you save the file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby safari.rb")," from the command-line), here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Safari opens"),(0,i.kt)("li",{parentName:"ul"},"The home page of ",(0,i.kt)("a",{parentName:"li",href:"http://github.com/tourdedave/the-internet"},"the-internet")," loads"),(0,i.kt)("li",{parentName:"ul"},"The title of the page is checked to make sure it's what we expect"),(0,i.kt)("li",{parentName:"ul"},"Safari closes")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Keep in mind that Safari can load without you realizing it (since it doesn't obtain focus when launching with Selenium). When that happens you'll need to switch to Safari in order to see what the test is doing."),(0,i.kt)("p",null,"And if you're running Safari on a remote node (or set of nodes), you'll need to install and enable the SafariDriver browser extension on each of them."),(0,i.kt)("p",null,"Happy Testing!"))}s.isMDXComponent=!0}}]);