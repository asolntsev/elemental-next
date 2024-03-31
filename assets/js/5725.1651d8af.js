"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[5725],{45725:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>l,frontMatter:()=>s,toc:()=>a});var r=t(74848),i=t(28453);const s={},o=void 0,a=[{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,r.jsxs)(n.p,{children:["A common utility most programmers in the Ruby community are familiar with is the Interactive Ruby Shell (IRB).\nThis is a REPL that comes with Ruby that enables you to send and receive Ruby commands. While this is useful,\nit leaves much to be desired, and ",(0,r.jsx)(n.a,{href:"https://www.ruby-toolbox.com/categories/irb_Alternatives",children:"an excellent alternative"})," is the ",(0,r.jsx)(n.a,{href:"http://pryrepl.org",children:"Pry gem"}),". It not only lets you execute\nRuby commands to test your input and output, but it also allows you to ",(0,r.jsx)(n.em,{children:"pry"})," inside your code and interact with it\nwhile running."]}),"\n",(0,r.jsx)(n.p,{children:"You can use the Pry gem to help you construct your scripts (like a simple REPL), but you can also use it as a\nhelpful debugging tool."}),"\n",(0,r.jsx)(n.p,{children:"To install Pry, you can either add it to your Gemfile like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"source 'https://rubygems.org'\n\ngem 'pry'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And then run ",(0,r.jsx)(n.code,{children:"bundle install"}),". Or, you can install it from the commandline with ",(0,r.jsx)(n.code,{children:"gem install pry"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here I will walk you through a real life example of how I recently used Pry to debug an issue in one of my test scripts."}),"\n",(0,r.jsx)(n.p,{children:"To give you some context, here is a simple example of some of my test code."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'include SiteCheckers\n\n@driver.get("http://www.mysite.com")\n\neverything_ready.should == true\n\n# ... other code that tests other aspects of the site\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We include a module of helpful methods for use in our scripts by including ",(0,r.jsx)(n.code,{children:"SiteCheckers"}),". We assume that the driver\nis already setup and our tests are using Rspec. And ",(0,r.jsx)(n.code,{children:"everything_ready"})," is a method mixed in from ",(0,r.jsx)(n.code,{children:"SiteCheckers"}),".\nIt dynamically checks the page to ensure that we are on the right one and that it is rendered correctly."]}),"\n",(0,r.jsx)(n.p,{children:"With this context in mind, here is the specific example I was working with recently:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'include SiteCheckers\ninclude FeatureItems\n\n@driver.get("http://www.mysite.com/some-feature")\neverything_ready.should == true\n\n# ... other code that tests other aspects of the feature\n'})}),"\n",(0,r.jsx)(n.p,{children:"Uh oh. When I ran this test, I got an error."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"RSpec::Expectations::ExpectationNotMetError: expected: true\n     got: nil (using ==)\n"})}),"\n",(0,r.jsx)(n.p,{children:"That is real funny, because when I looked at the code for this method, nothing should have caused it to return nil:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"module SiteCheckers\n\ndef everything_ready\n  # redacted code checks to ensure the page is rendered\n  # and raises error if there is an issue\n  true\nend\n\n# ... other helper methods defined here\n\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"So, what did I do to solve this issue? I used Pry to debug the error and discover my real issue!"}),"\n",(0,r.jsxs)(n.p,{children:["To initialize Pry in your code, you have to require the gem, and then place ",(0,r.jsx)(n.code,{children:"binding.pry"})," wherever you want\nexecution of your code to pause, so you can jump in and look around for yourself. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"require 'pry'\n\ninclude SiteCheckers\ninclude FeatureItems\n\n@driver.get(\"http://www.mysite.com/some-feature\")\n\n# With this, we jump right in before the error in the script\nbinding.pry\n\neverything_ready.should == true\n"})}),"\n",(0,r.jsx)(n.p,{children:"And when we run the test, we will get a prompt like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'Frame number: 0/1\n\nFrom: /home/bgoad/es-pry/pry_test.rb @ line 38 :\n\n    33:     include FeatureItems\n    34:\n    35:     @driver.get("http://www.mysite.com/some-feature")\n    36:\n    37:     # We\'ll jump right in before the error in the script\n => 38:     binding.pry\n    39:\n    40:     everything_ready.should == true\n\n[1] pry(main)>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Which means that we have jumped right into the context of our code at the spot where the rocket-arrow is pointing\n(binding.pry). From here, we can use Unix-like commands to explore our code inside the REPL prompt."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ls"})," will provide a list of Classes, Modules, methods, instance variables, and private variables available in this\ncontext. This is a great command to learn more about what is available to you at this point. Two other helpful\ncommands are ",(0,r.jsx)(n.code,{children:"cd"})," and ",(0,r.jsx)(n.code,{children:"help"}),". You can use ",(0,r.jsx)(n.code,{children:"cd"})," to change the context to inside an object, class or module. And\n",(0,r.jsx)(n.code,{children:"help"})," provides you with a quick access of commands available to Pry."]}),"\n",(0,r.jsx)(n.p,{children:"Browsing through these commands will allow you to discover other neat tricks you can do with Pry. You can also\nexecute any Ruby code you want from Pry's prompt."}),"\n",(0,r.jsxs)(n.p,{children:["Let's take a closer look at the ",(0,r.jsx)(n.code,{children:"everything_ready"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:"pry(main)> everything_ready\n=> nil\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Hmm, this method is not returning ",(0,r.jsx)(n.code,{children:"true"})," as we expect in the test."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's see if Pry can ",(0,r.jsx)(n.code,{children:"help"})," us. One such command available from Pry is ",(0,r.jsx)(n.code,{children:"show-method"}),", which will print out the\ncode of the method you pass it. Let's do that:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'pry(main)> show-method everything_ready\n\nFrom: pry_test.rb @ line 21:\nOwner: FeatureItems\nVisibility: public\nNumber of lines: 6\n\ndef everything_ready\n  super\n  if @driver.find_element(:css => "#modal_dialog").displayed?\n    @driver.find_element(:css => "#modal_dialog_close").click\n  end\nend\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Oh, look! I was expecting the #everything_ready method from SiteCheckers, but according to the Owner field from\nPry's output, we are overriding the method inside the ",(0,r.jsx)(n.code,{children:"FeatureItems"})," module in order to add some extra functionality\n(presumably, closing a modal if it is shown on the page)."]}),"\n",(0,r.jsxs)(n.p,{children:["The reason the method is not returning true is because the last line, which is what will be returned, does not\nresult in true. Instead, when an ",(0,r.jsx)(n.code,{children:"if..end"})," statement is executed, it always returns a nil. We can test this in Pry:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'pry(main)> if true\npry(main)*   puts "yay"\npry(main)* end\nyay\n=> nil\npry(main)> if false\npry(main)*   puts "boo"\npry(main)* end\n=> nil\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The rocket-arrows after the command we executed indicate the result of the command, which is nil. So, I need to\nupdate the overridden #everything_ready method to return the result of ",(0,r.jsx)(n.code,{children:"super"})," instead of the ",(0,r.jsx)(n.code,{children:"if..end"})," statement."]}),"\n",(0,r.jsxs)(n.p,{children:["What's really cool is that I can do so right inside of Pry using the ",(0,r.jsx)(n.code,{children:"edit"})," command! Typing ",(0,r.jsx)(n.code,{children:"edit everything_ready"}),"\nwill pop me inside the FeatureItems#everything_ready method using my favorite terminal editor. Here, I can make the\nupdates to my code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'def everything_ready\n  result = super\n  if @driver.find_element(:css => "#modal_dialog").displayed?\n    @driver.find_element(:css => "#modal_dialog_close").click\n  end\n  result\nend\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now I save and quit the editor. Once I am back in the Pry prompt, it reloads the file I edited and allows me to\ntry my code again."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",children:'Frame number: 0/1\n\nFrom: /home/bgoad/es-pry/pry_test.rb @ line 38 :\n\n    33:     include FeatureItems\n    34:\n    35:     @driver.get("http://www.mysite.com/some-feature")\n    36:\n    37:     # We\'ll jump right in before the error in the script\n => 38:     binding.pry\n    39:\n    40:     everything_ready.should == true\n\npry(main)> everything_ready.should == true\n=> true\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To exit out of Pry and let my test finish running, I simply type ",(0,r.jsx)(n.code,{children:"exit"}),". And now both tests succeed! Don't forget\nto remove the ",(0,r.jsx)(n.code,{children:"binding.pry"})," line from inside the test, or else Pry will start right back up again inside the code."]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Nice! I was able to use Pry to jump into my code right before a failure in my test, have a look around in the\nenvironment, debug why my code was failing, and make a quick fix. And I was finally able to verify that my fix was\nworking by running the command in my test again. Pry is pretty darn sweet!"}),"\n",(0,r.jsxs)(n.p,{children:["There are plenty of other uses for pry, this tip just scratches the surface. In fact,\n",(0,r.jsx)(n.a,{href:"https://github.com/pry/pry/wiki/Available-plugins",children:"the Pry community"})," includes several useful plugins to enhance\nyour Pry experience. Some of the most popular ones include pry-rescue (deposits you into Pry at the point and context\nof a failure or error in your code), pry-stack_explorer (enables you to travel up and down the stack), and pry-debug\n(includes actual debugger functionality like step and continue)."]}),"\n",(0,r.jsxs)(n.p,{children:["I encourage you to ",(0,r.jsx)(n.a,{href:"http://pryrepl.org",children:"take a look around the community"})," and see\n",(0,r.jsx)(n.a,{href:"https://github.com/pry/pry/wiki",children:"how Pry can make your construction and debugging of tests"})," so much more efficient. And not only that,\nyou'll also begin to learn why your code works in certain ways and how it is structured. Making you a much better\ntest automator and coder as a result."]}),"\n",(0,r.jsx)(n.p,{children:"Happy Prying!"}),"\n",(0,r.jsx)(n.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,r.jsxs)(n.p,{children:["You can follow Brian on Twitter at ",(0,r.jsx)(n.a,{href:"https://twitter.com/bbbco",children:"@bbbco"}),", and check out his testing blog ",(0,r.jsx)(n.a,{href:"http://swdandruby.wordpress.com/",children:"here"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);