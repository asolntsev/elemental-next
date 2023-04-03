"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={title:"How To Automatically Retry Failed Tests",slug:"56-retry-failed-tests",number:56,publish_date:new Date("2014-06-24T00:00:00.000Z"),tags:["retry","failure retry","reliability"],level:3,category:"patterns"},l=void 0,i={unversionedId:"non-updated-tips/retry-failed-tests/readme",id:"non-updated-tips/retry-failed-tests/readme",title:"How To Automatically Retry Failed Tests",description:"The Problem",source:"@site/docs/non-updated-tips/56-retry-failed-tests/readme.md",sourceDirName:"non-updated-tips/56-retry-failed-tests",slug:"/non-updated-tips/retry-failed-tests/56-retry-failed-tests",permalink:"/docs/non-updated-tips/retry-failed-tests/56-retry-failed-tests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/56-retry-failed-tests/readme.md",tags:[{label:"retry",permalink:"/docs/tags/retry"},{label:"failure retry",permalink:"/docs/tags/failure-retry"},{label:"reliability",permalink:"/docs/tags/reliability"}],version:"current",frontMatter:{title:"How To Automatically Retry Failed Tests",slug:"56-retry-failed-tests",number:56,publish_date:"2014-06-24T00:00:00.000Z",tags:["retry","failure retry","reliability"],level:3,category:"patterns"},sidebar:"tutorialSidebar",previous:{title:"How To Access Selenium Logs In Real-time",permalink:"/docs/non-updated-tips/logging/54-logging"},next:{title:"How To Press Keyboard Keys",permalink:"/docs/non-updated-tips/keyboard-keys/java/61-keyboard-keys"}},o={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-problem"},"The Problem"),(0,n.kt)("p",null,"You want reliable tests. But no matter how hard you try, you're going to run into intermittent test failures. These can be frustrating time wasters that distract you and your team and begin to erode the trust placed in the automated tests. Once that begins, it's a slippery slope."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Rather than rerun your entire test suite to suss out transient failures -- you can log which tests fail, and retry just those a second time."),(0,n.kt)("p",null,"Let's dig in with an example."),(0,n.kt)("h2",{id:"an-example"},"An Example"),(0,n.kt)("p",null,"Let's assume we have a bunch of tests written in ",(0,n.kt)("a",{parentName:"p",href:"http://rspec.info/"},"RSpec"),", which would look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 spec\n    \u251c\u2500\u2500 11_spec.rb\n    \u251c\u2500\u2500 1_spec.rb\n    \u251c\u2500\u2500 2_spec.rb\n    \u251c\u2500\u2500 3_spec.rb\n    \u251c\u2500\u2500 4_spec.rb\n    \u251c\u2500\u2500 5_spec.rb\n    \u251c\u2500\u2500 6_spec.rb\n    \u251c\u2500\u2500 7_spec.rb\n    \u251c\u2500\u2500 8_spec.rb\n    \u251c\u2500\u2500 9_spec.rb\n    \u2514\u2500\u2500 this_spec.rb\n")),(0,n.kt)("p",null,"And let's assume that we will execute these tests in parallel (using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/grosser/parallel_tests"},"parallel_tests"),")."),(0,n.kt)("p",null,"Some of the tests will pass, and some of them will fail. In order to track which ones fail, we will want to keep a log. The simplest way to do this would be to output a list of failures to a file. That way the list of failures will persist after the suite of tests completes, so we can perform a retry action using the list of failures."),(0,n.kt)("p",null,"Thankfully RSpec comes with some of the plumbing to help accomplish this -- through the use of a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dchelimsky/rspec/wiki/Custom-Formatters"},"custom formatter"),"; specifically the ",(0,n.kt)("a",{parentName:"p",href:"http://rubydoc.info/gems/rspec-core/2.6.4/RSpec/Core/Formatters/BaseFormatter"},"base formatter"),"."),(0,n.kt)("p",null,"Let's create one."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'# filename: failure_catcher.rb\n\nrequire \'rspec/core/formatters/base_formatter\'\n\nclass FailureCatcher < RSpec::Core::Formatters::BaseFormatter\n\n  # create files called rspec_#.failures with a list of failed examples\n  def dump_failures\n    return if failed_examples.empty?\n    f = File.new("rspec#{ENV[\'TEST_ENV_NUMBER\']}.failures", "w+")\n    failed_examples.each do |example|\n      f.puts retry_command(example)\n    end\n    f.close\n  end\n\n  def retry_command(example)\n    example_name = example.full_description.gsub("\\"", "\\\\\\"")\n    "-e \\"#{example_name}\\""\n  end\n\nend\n')),(0,n.kt)("p",null,"In order to extend the base formatter we first need to require it, and then inherit from it when declaring our class (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"< RSpec::Core::Formatters::BaseFormatter"),")."),(0,n.kt)("p",null,"After that we have access to the helper method we want (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"dump_failures"),"). In ",(0,n.kt)("inlineCode",{parentName:"p"},"dump_failures")," we can access detailed information about each failed test through the ",(0,n.kt)("inlineCode",{parentName:"p"},"failed_examples")," accessor."),(0,n.kt)("p",null,"After checking to see if there are any failed examples, we create a new uniquely named file (leveraging the environment variable created by our parallel executor), iterate through all of the failed examples, and store a properly formatted retry execution command with the name of the failed test."),(0,n.kt)("p",null,"To use this formatter we'll need to specify it at run-time, and to leverage a retry action we'll need to wrap our run-time execution. Let's wire all of this up using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jimweirich/rake"},"Rake"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: Rakefile\n\ndef gather_failures\n  opts = \"\"\n  files = Dir.glob('*.failures')\n  files.each { |file| opts << File.read(file).gsub(/\\n/, ' ') }\n  all_failures = './all.failures'\n  File.write(all_failures, opts.rstrip)\n  return File.read all_failures\nend\n\ndef cleanup(files = '')\n  system(\"rm #{files}\") unless Dir.glob(\"#{files}\").empty?\nend\n\ndef launch(params = {})\n  if params[:test_options].include? '-e'\n    count = params[:test_options].split(/failed/).count - 1\n    puts \"Retrying #{count} failed tests!\"\n  end\n  system(\"parallel_rspec -n #{params[:processes] || 5} \\\n          --test-options '#{params[:test_options]}' spec\")\nend\n\ndef run(processes = 5)\n  launch(processes: processes,\n    test_options: '--require ./failure_catcher.rb \\\n    --format FailureCatcher')\nend\n\ndef rerun(processes = 5)\n  launch(processes: processes, test_options: gather_failures)\nend\n\ndesc \"parallel test execution with failure retries\"\ntask :run_tests, :number_of_processes do |t, args|\n  run args[:number_of_processes]\n  unless $?.success?\n    rerun args[:number_of_processes]\n    cleanup '*.failures'\n  end\nend\n")),(0,n.kt)("p",null,"There are five methods and one Rake task. The first two methods (",(0,n.kt)("inlineCode",{parentName:"p"},"gather_failures")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cleanup"),") are for rounding up a list of failed tests from the *.failure files and deleting them when we're finished. The next three methods (",(0,n.kt)("inlineCode",{parentName:"p"},"launch"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"run"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"rerun"),") are for executing the test suite and retrying just the failures."),(0,n.kt)("p",null,"The Rake task is where we tie everything together."),(0,n.kt)("p",null,"In it we make the number of concurrent processes configurable through the use of an optional run-time argument. We then call ",(0,n.kt)("inlineCode",{parentName:"p"},"run")," (passing in the argument) which executes the full suite. After the suite completes, we perform a check against the exit code to see if there were any failures. If there were, then we call ",(0,n.kt)("inlineCode",{parentName:"p"},"rerun")," (along with the argument for number of processes),  and then call ",(0,n.kt)("inlineCode",{parentName:"p"},"cleanup")," to remove the failure files."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tests execute in parallel"),(0,n.kt)("li",{parentName:"ul"},"A list of failed tests get stored in output files (one for each process)"),(0,n.kt)("li",{parentName:"ul"},"Failed tests get rerun"),(0,n.kt)("li",{parentName:"ul"},"Output files for failed tests get deleted")),(0,n.kt)("h2",{id:"outro"},"Outro"),(0,n.kt)("p",null,"Hat-tip to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dblock/rspec-rerun"},"rspec-rerun")," for the initial implementation, and to ",(0,n.kt)("a",{parentName:"p",href:"http://artsy.github.io/blog/2012/05/15/how-to-organize-over-3000-rspec-specs-and-retry-test-failures/"},"the write-up that led me there"),"."),(0,n.kt)("p",null,"I've made the code for this example available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/better-rspec-rerun"},"here"),". And if you're interested in a more targeted retry approach, check out ",(0,n.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/10-retry-test-actions"},"this previous tip"),"."),(0,n.kt)("p",null,"Happy Testing!"))}d.isMDXComponent=!0}}]);