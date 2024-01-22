"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4394],{84394:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],l={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First, we'll include our requisite libraries and wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: growl.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now for our test. We'll need to visit the page we want to display notifications on and do some work with JavaScript to load ",(0,a.kt)("a",{parentName:"p",href:"http://jquery.com/"},"jQuery"),", jQuery Growl, and styles for jQuery Growl. After that we can issue commands to jQuery Growl to make notification messages display on the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n\n  # Step 1: check for jQuery on the page, add it if needbe\n  @driver.execute_script(\n    \"if (!window.jQuery) {\n    var jquery = document.createElement('script');\n    jquery.type = 'text/javascript';\n    jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';\n    document.getElementsByTagName('head')[0].appendChild(jquery);\n    }\")\n\n  # Step 2: use jQuery to add jquery-growl to the page\n  @driver.execute_script(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\")\n\n  # Step 3: use jQuery to add jquery-growl styles to the page\n  @driver.execute_script(\"$('head').append('<link rel=\\\"stylesheet\\\" href=\\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\\" type=\\\"text/css\\\" />');\")\n\n  sleep 5 # adding 5 seconds sleep\n\n  # Step 4: display a message with jquery-growl\n  @driver.execute_script(\"$.growl({ title: 'GET', message: '/' });\")\n\n  sleep 5 # to keep the browser active long enough to see the notifications\nend\n")),(0,a.kt)("p",null,"And if we wanted to see color-coded notifications, then we could use one of the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"  @driver.execute_script(\"$.growl.error({ title: 'ERROR', message: 'your error message goes here' });\")\n  @driver.execute_script(\"$.growl.notice({ title: 'Notice', message: 'your notice message goes here' });\")\n  @driver.execute_script(\"$.growl.warning({ title: 'Warning!', message: 'your warning message goes here' });\")\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser opens"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Add jQuery, jQuery Growl, and jQuery Growl notifications to the page"),(0,a.kt)("li",{parentName:"ul"},"Display a set of notification messages in the top-right corner of the page"),(0,a.kt)("li",{parentName:"ul"},"Notification messages disappear"),(0,a.kt)("li",{parentName:"ul"},"Browser closes")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In order to use this approach, you will need to load jQuery Growl on every page you want to display output to -- which can be a bit of overhead. But if you want rich messaging like this then that's the price you have to pay (unless you can get your team to add it to the application under test)."),(0,a.kt)("p",null,"In a future tip I'll step through how to access Selenium logging output so we can wire it up to these notifications."),(0,a.kt)("p",null,"I'd like to give a big thanks to Jon Austen (",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/austenjt"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djangofan"},"GitHub"),") for giving me the idea to use jQuery Growl with Selenium."),(0,a.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);