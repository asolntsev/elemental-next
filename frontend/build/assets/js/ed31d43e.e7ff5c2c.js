"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Interactive Prompts Revisited",slug:"14-interactive-prompts-revisited",number:14,publish_date:new Date("2013-08-27T00:00:00.000Z"),tags:["repl","pry","debugging","guest post"],level:3,category:"tools"},o=void 0,s={unversionedId:"non-updated-tips/interactive-prompts-revisited/readme",id:"non-updated-tips/interactive-prompts-revisited/readme",title:"Interactive Prompts Revisited",description:"NOTE: This is a guest post chocked full of knowledge from Brian Goad of Digitalsmiths. You can follow him on Twitter at @bbbco and check out his testing blog here.",source:"@site/docs/non-updated-tips/14-interactive-prompts-revisited/readme.md",sourceDirName:"non-updated-tips/14-interactive-prompts-revisited",slug:"/non-updated-tips/interactive-prompts-revisited/14-interactive-prompts-revisited",permalink:"/docs/non-updated-tips/interactive-prompts-revisited/14-interactive-prompts-revisited",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/14-interactive-prompts-revisited/readme.md",tags:[{label:"repl",permalink:"/docs/tags/repl"},{label:"pry",permalink:"/docs/tags/pry"},{label:"debugging",permalink:"/docs/tags/debugging"},{label:"guest post",permalink:"/docs/tags/guest-post"}],version:"current",frontMatter:{title:"Interactive Prompts Revisited",slug:"14-interactive-prompts-revisited",number:14,publish_date:"2013-08-27T00:00:00.000Z",tags:["repl","pry","debugging","guest post"],level:3,category:"tools"},sidebar:"tutorialSidebar",previous:{title:"How To Access Basic Auth",permalink:"/docs/non-updated-tips/work-with-basic-auth/java/13-work-with-basic-auth"},next:{title:"How To Take A Screenshot on Failure",permalink:"/docs/non-updated-tips/take-screenshot-on-failure/csharp/16-take-screenshot-on-failure"}},l={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NOTE: This is a guest post chocked full of knowledge from Brian Goad of ",(0,a.kt)("a",{parentName:"p",href:"http://www.digitalsmiths.com/"},"Digitalsmiths"),". You can follow him on Twitter at ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"@bbbco")," and check out his testing blog ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/"},"here"),"."),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/11-build-an-interactive-prompt"},"Tip 11")," we covered how a REPL can help you determine what code to write in your scripts by testing locators and actions through an interactive prompt. This is great for simple tasks, but its starts to falter when debugging more complex scripts."),(0,a.kt)("p",null,"Often times you will find yourself puzzling over an error or failure occuring in the middle of your script. It is not very efficient to have to run through each command in your script, line by line, to get to the context of the place you are attempting to debug in a simple REPL. Usually, you have already setup some framework, boilerplate, and helper code to assist you in writing your script. This just adds on to the problem, as you have no easy way to view the objects or methods available to you while debugging in your script."),(0,a.kt)("p",null,"Sometimes you just need to be able to ",(0,a.kt)("em",{parentName:"p"},"pry")," into the code, jump in, open it up and explore the area in order to solve the error you are experiencing."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"A common utility most programmers in the Ruby community are familiar with is the Interactive Ruby Shell (IRB). This is a REPL that comes with Ruby that enables you to send and receive Ruby commands. While this is useful, it leaves much to be desired, and ",(0,a.kt)("a",{parentName:"p",href:"https://www.ruby-toolbox.com/categories/irb_Alternatives"},"an excellent alternative")," is the ",(0,a.kt)("a",{parentName:"p",href:"http://pryrepl.org"},"Pry gem"),". It not only lets you execute Ruby commands to test your input and output, but it also allows you to ",(0,a.kt)("em",{parentName:"p"},"pry")," inside your code and interact with it while running."),(0,a.kt)("p",null,"You can use the Pry gem to help you construct your scripts (like a simple REPL), but you can also use it as a helpful debugging tool."),(0,a.kt)("p",null,"To install Pry, you can either add it to your Gemfile like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"source 'https://rubygems.org'\n\ngem 'pry'\n")),(0,a.kt)("p",null,"And then run ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle install"),". Or, you can install it from the commandline with ",(0,a.kt)("inlineCode",{parentName:"p"},"gem install pry"),"."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"Here I will walk you through a real life example of how I recently used Pry to debug an issue in one of my test scripts."),(0,a.kt)("p",null,"To give you some context, here is a simple example of some of my test code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'include SiteCheckers\n\n@driver.get("http://www.mysite.com")\n\neverything_ready.should == true\n\n# ... other code that tests other aspects of the site\n')),(0,a.kt)("p",null,"We include a module of helpful methods for use in our scripts by including ",(0,a.kt)("inlineCode",{parentName:"p"},"SiteCheckers"),". We assume that the driver is already setup and our tests are using Rspec. And ",(0,a.kt)("inlineCode",{parentName:"p"},"everything_ready")," is a method mixed in from ",(0,a.kt)("inlineCode",{parentName:"p"},"SiteCheckers"),". It dynamically checks the page to ensure that we are on the right one and that it is rendered correctly."),(0,a.kt)("p",null,"With this context in mind, here is the specific example I was working with recently:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'include SiteCheckers\ninclude FeatureItems\n\n@driver.get("http://www.mysite.com/some-feature")\neverything_ready.should == true\n\n# ... other code that tests other aspects of the feature\n')),(0,a.kt)("p",null,"Uh oh. When I ran this test, I got an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"RSpec::Expectations::ExpectationNotMetError: expected: true\n     got: nil (using ==)\n")),(0,a.kt)("p",null,"That is real funny, because when I looked at the code for this method, nothing should have caused it to return nil:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"module SiteCheckers\n\ndef everything_ready\n  # redacted code checks to ensure the page is rendered\n  # and raises error if there is an issue\n  true\nend\n\n# ... other helper methods defined here\n\nend\n")),(0,a.kt)("p",null,"So, what did I do to solve this issue? I used Pry to debug the error and discover my real issue!"),(0,a.kt)("p",null,"To initialize Pry in your code, you have to require the gem, and then place ",(0,a.kt)("inlineCode",{parentName:"p"},"binding.pry")," wherever you want execution of your code to pause so you can jump in and look around for yourself. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'pry'\n\ninclude SiteCheckers\ninclude FeatureItems\n\n@driver.get(\"http://www.mysite.com/some-feature\")\n\n# With this, we jump right in before the error in the script\nbinding.pry\n\neverything_ready.should == true\n")),(0,a.kt)("p",null,"And when we run the test, we will get a prompt like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'Frame number: 0/1\n\nFrom: /home/bgoad/es-pry/pry_test.rb @ line 38 :\n\n    33:     include FeatureItems\n    34:\n    35:     @driver.get("http://www.mysite.com/some-feature")\n    36:\n    37:     # We\'ll jump right in before the error in the script\n => 38:     binding.pry\n    39:\n    40:     everything_ready.should == true\n\n[1] pry(main)>\n')),(0,a.kt)("p",null,"Which means that we have jumped right into the context of our code at the spot where the rocket-arrow is pointing (binding.pry). From here, we can use Unix-like commands to explore our code inside the REPL prompt."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ls")," will provide a list of Classes, Modules, methods, instance variables, and private variables available in this context. This is a great command to learn more about what is available to you at this point. Two other helpful commands are ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"help"),". You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to change the context to inside an object, class or module. And ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," provides you with a quick access of commands available to Pry."),(0,a.kt)("p",null,"Browsing through these commands will allow you to discover other neat tricks you can do with Pry. You can also execute any Ruby code you want from Pry's prompt."),(0,a.kt)("p",null,"Let's take a closer look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"everything_ready")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"pry(main)> everything_ready\n=> nil\n")),(0,a.kt)("p",null,"Hmm, this method is not returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as we expect in the test."),(0,a.kt)("p",null,"Let's see if Pry can ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," us. One such command available from Pry is ",(0,a.kt)("inlineCode",{parentName:"p"},"show-method"),", which will print out the code of the method you pass it. Let's do that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'pry(main)> show-method everything_ready\n\nFrom: pry_test.rb @ line 21:\nOwner: FeatureItems\nVisibility: public\nNumber of lines: 6\n\ndef everything_ready\n  super\n  if @driver.find_element(:css => "#modal_dialog").displayed?\n    @driver.find_element(:css => "#modal_dialog_close").click\n  end\nend\n')),(0,a.kt)("p",null,"Oh, look! I was expecting the #everything_ready method from SiteCheckers, but according to the Owner field from Pry's output, we are overriding the method inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"FeatureItems")," module in order to add some extra functionality (presumably, closing a modal if it is shown on the page)."),(0,a.kt)("p",null,"The reason the method is not returning true is because the last line, which is what will be returned, does not result in true. Instead, when an ",(0,a.kt)("inlineCode",{parentName:"p"},"if..end")," statement is executed, it always returns a nil. We can test this in Pry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'pry(main)> if true\npry(main)*   puts "yay"\npry(main)* end\nyay\n=> nil\npry(main)> if false\npry(main)*   puts "boo"\npry(main)* end\n=> nil\n')),(0,a.kt)("p",null,"The rocket-arrows after the command we executed indicate the result of the command, which is nil. So, I need to update the overridden #everything_ready method to return the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"if..end")," statement."),(0,a.kt)("p",null,"What's really cool is that I can do so right inside of Pry using the ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," command! Typing ",(0,a.kt)("inlineCode",{parentName:"p"},"edit everything_ready")," will pop me inside the FeatureItems#everything_ready method using my favorite terminal editor. Here, I can make the updates to my code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'def everything_ready\n  result = super\n  if @driver.find_element(:css => "#modal_dialog").displayed?\n    @driver.find_element(:css => "#modal_dialog_close").click\n  end\n  result\nend\n')),(0,a.kt)("p",null,"Now I save and quit the editor. Once I am back in the Pry prompt, it reloads the file I edited and allows me to try my code again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'Frame number: 0/1\n\nFrom: /home/bgoad/es-pry/pry_test.rb @ line 38 :\n\n    33:     include FeatureItems\n    34:\n    35:     @driver.get("http://www.mysite.com/some-feature")\n    36:\n    37:     # We\'ll jump right in before the error in the script\n => 38:     binding.pry\n    39:\n    40:     everything_ready.should == true\n\npry(main)> everything_ready.should == true\n=> true\n')),(0,a.kt)("p",null,"To exit out of Pry and let my test finish running, I simply type ",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),". And now both tests succeed! Don't forget to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding.pry")," line from inside the test, or else Pry will start right back up again inside the code."),(0,a.kt)("p",null,"##Outro"),(0,a.kt)("p",null,"Nice! I was able to use Pry to jump into my code right before a failure in my test, have a look around in the environment, debug why my code was failing, and make a quick fix. And I was finally able to verify that my fix was working by running the command in my test again. Pry is pretty darn sweet!"),(0,a.kt)("p",null,"There are plenty of other uses for pry, this tip just scratches the surface. In fact, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pry/pry/wiki/Available-plugins"},"the Pry comnmunity")," includes several useful plugins to enhance your Pry experience. Some of the most popular ones include pry-rescue (deposits you into Pry at the point and context of a failure or error in your code), pry-stack_explorer (enables you to travel up and down the stack), and pry-debug (includes actual debugger funtionality like step and continue)."),(0,a.kt)("p",null,"I encourage you to ",(0,a.kt)("a",{parentName:"p",href:"http://pryrepl.org"},"take a look around the community")," and see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pry/pry/wiki"},"how Pry can make your construction and debugging of tests")," so much more efficient. And not only that, you'll also begin to learn why your code works in certain ways and how it is structured. Making you a much better test automator and coder as a result."),(0,a.kt)("p",null,"Happy Prying!"))}c.isMDXComponent=!0}}]);