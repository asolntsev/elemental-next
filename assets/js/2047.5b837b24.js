"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2047],{4428:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,toc:()=>o});var s=n(74848),r=n(28453);const i={},a=void 0,o=[{value:"A brief primer on Good Test Writing",id:"a-brief-primer-on-good-test-writing",level:3},{value:"Atomic &amp; Autonomous Tests",id:"atomic--autonomous-tests",level:4},{value:"Grouping Tests",id:"grouping-tests",level:4},{value:"Being Descriptive",id:"being-descriptive",level:4},{value:"Test Runners",id:"test-runners",level:4},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"a-brief-primer-on-good-test-writing",children:"A brief primer on Good Test Writing"}),"\n",(0,s.jsx)(t.p,{children:"In order to write tests that work well in parallel there are some simple guidelines to follow:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Write atomic and autonomous tests"}),"\n",(0,s.jsx)(t.li,{children:"Group like tests together in small batches"}),"\n",(0,s.jsx)(t.li,{children:"Be descriptive"}),"\n",(0,s.jsx)(t.li,{children:"Use a Test Runner"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"atomic--autonomous-tests",children:"Atomic & Autonomous Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Each test needs to be concise (e.g. testing a single feature rather than multiple features) and be able to be run independently (e.g. sets up it's own data rather than relying on a previous test to do it). Doing this may require a mental shift, discipline, and more up front effort. But ",(0,s.jsx)(t.strong,{children:"it will make a dramatic impact on the quality, effectiveness, and maintainability of your tests"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"grouping-tests",children:"Grouping Tests"}),"\n",(0,s.jsx)(t.p,{children:"As your test suite grows you should have multiple test files, each containing a small grouping of tests broken out by functionality that they're exercising. This will go a long way towards organization and maintenance as your test suite grows -- as well as faster execution times (depending on your approach to parallelization)."}),"\n",(0,s.jsx)(t.h4,{id:"being-descriptive",children:"Being Descriptive"}),"\n",(0,s.jsx)(t.p,{children:"Each test file should be named appropriately, and each test within it should have an informative name (even if it may be a bit verbose). Also, each test (or grouping of tests) should be tagged for flexible execution later (e.g. on a Continuous Integration server)."}),"\n",(0,s.jsx)(t.p,{children:"This way you can run parts of your test suite as needed, and the results will be informative thanks to helpful naming."}),"\n",(0,s.jsx)(t.h4,{id:"test-runners",children:"Test Runners"}),"\n",(0,s.jsx)(t.p,{children:"At the heart of every testing framework is a test runner that does a lot of the heavy lifting (e.g. test group execution, easy global configuration for setup and teardown, reporting, etc.)."}),"\n",(0,s.jsx)(t.p,{children:"So rather than reinvent the wheel, you can use one of the many that already exists (there's more than one for every language). And with it, you can bolt on third party libraries to extend it's functionality if there's something missing -- like parallelization."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: For this example we will be using ",(0,s.jsx)(t.a,{href:"http://rspec.info/",children:"RSpec"})," as the Test Runner and ",(0,s.jsx)(t.a,{href:"https://github.com/grosser/parallel_tests",children:"parallel-tests"})," for parallelization."]})}),"\n",(0,s.jsxs)(t.p,{children:["In RSpec, test files are referred to as 'specs'. So for our initial spec I've used the test code\nfrom ",(0,s.jsx)(t.a,{href:"https://elementalselenium.com/docs/how-to-work-with-tables/25-tables",children:"a previous tip on working with Data Tables"}),".\nDon't get too distracted by what the test steps are doing, the organization and naming of things is more important\nfor this example."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# data_table_sorting_spec.rb\n\nrequire 'selenium-webdriver'\n\ndescribe 'Data Table Sorting' do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n  end\n\n  after(:each) do\n    @driver.quit\n  end\n\n  context 'Without Attributes' do\n\n    it 'in Ascending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_i }\n      (due_values == due_values.sort).should == true\n    end\n\n    it 'in Descending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_i }\n      (due_values == due_values.sort).should == false\n    end\n\n  end\n\n  context 'With Attributes' do\n\n    it 'in Ascending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table2 thead .dues').click\n      dues = @driver.find_elements(css: '#table2 tbody .dues')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_f }\n      (due_values == due_values.sort).should == true\n    end\n\n    it 'in Descending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table2 thead .dues').click\n      @driver.find_element(css: '#table2 thead .dues').click\n      dues = @driver.find_elements(css: '#table2 tbody .dues')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_f }\n      (due_values == due_values.sort).should == false\n    end\n\n  end\n\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["At the top of the file we include our dependent library (",(0,s.jsx)(t.code,{children:"selenium-webdriver"}),") and declare the name of our test group ('Sort Data Table') with a ",(0,s.jsx)(t.code,{children:"describe"})," statement. We then wire up our before and after actions which are responsible for setting up and tearing down an instance of Selenium for each test. Each of our tests are grouped into logical separations using ",(0,s.jsx)(t.code,{children:"context"})," blocks and defined within an ",(0,s.jsx)(t.code,{children:"it"})," block."]}),"\n",(0,s.jsxs)(t.p,{children:["If we run this (e.g. with the command ",(0,s.jsx)(t.code,{children:"rspec data_table_sorting_spec.rb"}),") it will fire up one browser at a time until each test is completed. And If we download, install, and run it through ",(0,s.jsx)(t.a,{href:"https://github.com/grosser/parallel_tests",children:"parallel_tests"})," (e.g. with the command ",(0,s.jsx)(t.code,{children:"paralell_rspec data_table_sorting_spec.rb"}),") -- the same thing would happen. Why? Because parallel_tests executes things at the file level rather than at the individual test level (this holds true even when running tests by tag)."]}),"\n",(0,s.jsx)(t.p,{children:"In order to take advantage of parallelization we will need to break these tests up into different files."}),"\n",(0,s.jsxs)(t.p,{children:["But before we do that we can simplify our test code by abstracting out our setup and teardown actions into a central place (known as a ",(0,s.jsx)(t.code,{children:"spec_helper"})," in the RSpec parlance)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# spec_helper.rb\n\nrequire 'selenium-webdriver'\n\nRSpec.configure do |config|\n\n  config.before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n  end\n\n  config.after(:each) do\n    @driver.quit\n  end\n\nend\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now that we have that we can create a new spec file and place some of our tests in it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# data_table_sorting_with_attributes_spec.rb\n\nrequire 'spec_helper'\n\ndescribe 'Sort Data Table' do\n\n  context 'With Attributes' do\n\n    it 'in Ascending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table2 thead .dues').click\n      dues = @driver.find_elements(css: '#table2 tbody .dues')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_f }\n      (due_values == due_values.sort).should == true\n    end\n\n    it 'in Descending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table2 thead .dues').click\n      @driver.find_element(css: '#table2 thead .dues').click\n      dues = @driver.find_elements(css: '#table2 tbody .dues')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_f }\n      (due_values == due_values.sort).should == false\n    end\n\n  end\n\nend\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Notice that the require statement has changed from ",(0,s.jsx)(t.code,{children:"selenium-webdriver"})," to ",(0,s.jsx)(t.code,{children:"spec_helper"}),". Since we abstracted things\nout into a spec_helper file we now need to require it in all of our specs -- and the dependent libraries\nfor our test suite live there instead."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:"# data_table_sorting_without_attributes_spec.rb\n\nrequire 'spec_helper'\n\ndescribe 'Sort Data Table' do\n\n  context 'Without Attributes' do\n\n    it 'in Ascending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_i }\n      (due_values == due_values.sort).should == true\n    end\n\n    it 'in Descending Order' do\n      @driver.get 'http://the-internet.herokuapp.com/tables'\n      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n      @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n      dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n      due_values = []\n      dues.each { |due| due_values << due.text.gsub(/\\$/,'').to_i }\n      (due_values == due_values.sort).should == false\n    end\n\n  end\n\nend\n"})}),"\n",(0,s.jsx)(t.p,{children:"To get this last file we could have renamed the original test file, or created it anew and deleted the original."}),"\n",(0,s.jsxs)(t.p,{children:["Notice that the ",(0,s.jsx)(t.code,{children:"describe"})," name is the same between test files (e.g. 'Sort Data Table'). In RSpec names\ndo not need to be unique, and these tests logically fit together, this is a welcome consistency."]}),"\n",(0,s.jsxs)(t.p,{children:["Now when we run our tests through parallel_tests we get concurrent test runs with two browsers firing at\nthe same time, yielding (in this case) roughly a 30% drop in execution times (e.g. 17 seconds down to 12 seconds).\nYou can easily up the number of processes being run as a command-line argument (e.g. ",(0,s.jsx)(t.code,{children:"-n 5"}),"). But this will only\nmake a difference as you have more specs given how parallel_tests groups and executes things."]}),"\n",(0,s.jsxs)(t.p,{children:["Now that we have a working example that runs concurrently, we can point it at a cloud offering like Sauce Labs,\nand have access to any browser we want. We just have to update our setup action in the ",(0,s.jsx)(t.code,{children:"spec_helper"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: This was covered in a previous tip. For a full write-up, go ",(0,s.jsx)(t.a,{href:"https://elementalselenium.com/docs/cloud/26-cloud",children:"here"}),"."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ruby",children:'# spec_helper.rb\n\nrequire \'selenium-webdriver\'\n\nRSpec.configure do |config|\n\n  config.before(:each) do\n    caps = Selenium::WebDriver::Remote::Capabilities.firefox\n    caps.browser_version = "115"\n    caps.platform_name = "Windows 11"\n    caps[:name] = self.example.metadata[:full_description]\n\n    @driver = Selenium::WebDriver.for(\n      :remote,\n      :url => "https://SAUCE_USERNAME:SAUCE_API_KEY@ondemand.saucelabs.com/wd/hub",\n      :capabilities => caps)\n  end\n\n  config.after(:each) do\n    @driver.quit\n  end\n\nend\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now when we run our tests with parallel_tests we can see the concurrent execution happening in Sauce Labs."}),"\n",(0,s.jsx)(t.p,{children:"Sauce Labs is built to handle your tests concurrently, so you should be able to turn the number of processes up with no sweat. You will just need to be cogniscent of how many parallel tests your account has access to (e.g. 3 for Sauce Open accounts)."}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Several browsers open in parallel"}),"\n",(0,s.jsx)(t.li,{children:"Each test runs in a different browser"}),"\n",(0,s.jsx)(t.li,{children:"All browsers close"}),"\n",(0,s.jsxs)(t.li,{children:["If Sauce Labs was used, then the test results (along with a video recording, screenshots, and other debugging information) are available on the ",(0,s.jsx)(t.a,{href:"https://docs.saucelabs.com/test-results/viewing-test-results/",children:"test results dashboard"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"Hopefully this tip has helped steer you on a path towards better test writing and parallelization."}),"\n",(0,s.jsx)(t.p,{children:"Stay tuned for future tips where we'll cover how to take full advantage of your test suite by wiring it into a Continuous Integration server and making the requisite changes to your test runner."}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);