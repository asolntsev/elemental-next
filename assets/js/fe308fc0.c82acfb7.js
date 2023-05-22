"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=s,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={title:"24: REST APIs",id:"24-rest-apis-ruby",contentUrl:"docs/rest-apis/24-rest-apis-ruby",sidebar_label:"Ruby",text:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",number:24,hide_table_of_contents:!0,publish_date:"2013-11-5",last_update:{date:new Date("2023-03-09T00:00:00.000Z")},tags:["REST APIs","test setup","guest post"],level:2,category:["fundamentals"],language:"ruby"},o="Fast and Reliable Test Setup with REST APIs",i={unversionedId:"rest-apis/24-rest-apis-ruby",id:"rest-apis/24-rest-apis-ruby",title:"24: REST APIs",description:"Intro",source:"@site/docs/24-rest-apis/ruby.mdx",sourceDirName:"24-rest-apis",slug:"/rest-apis/24-rest-apis-ruby",permalink:"/elemental-next/docs/rest-apis/24-rest-apis-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/24-rest-apis/ruby.mdx",tags:[{label:"REST APIs",permalink:"/elemental-next/docs/tags/rest-ap-is"},{label:"test setup",permalink:"/elemental-next/docs/tags/test-setup"},{label:"guest post",permalink:"/elemental-next/docs/tags/guest-post"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:167832e4,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{title:"24: REST APIs",id:"24-rest-apis-ruby",contentUrl:"docs/rest-apis/24-rest-apis-ruby",sidebar_label:"Ruby",text:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",number:24,hide_table_of_contents:!0,publish_date:"2013-11-5",last_update:{date:"2023-03-09T00:00:00.000Z"},tags:["REST APIs","test setup","guest post"],level:2,category:["fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/dynamic-pages/23-dynamic-pages-ruby"},next:{title:"Csharp",permalink:"/elemental-next/docs/how-to-work-with-tables/25-tables-csharp"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Going beyond signups",id:"going-beyond-signups",level:2},{value:"Testing against REST only",id:"testing-against-rest-only",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fast-and-reliable-test-setup-with-rest-apis"},"Fast and Reliable Test Setup with REST APIs"),(0,s.kt)("h2",{id:"intro"},"Intro"),(0,s.kt)("p",null,"This is a guest post from Robert Schultheis, a Test Engineer at ",(0,s.kt)("a",{parentName:"p",href:"http://www.knewton.com/"},"Knewton")," who is doing great things with REST APIs in his testing practice"),(0,s.kt)("p",null,'When we list out the properties that make a test a "good test", some things that often come up are:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Precise.")," The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Independent.")," A test should not have it's outcome affected by any other test in the test suite."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Fast.")," This doesn't need much explanation. The quicker a test suite runs, the more useful it is.")),(0,s.kt)("p",null,"Of course there are many other properties that might be included in such a list, but I mention these specifically because they can be particularly challenging to achieve in a Selenium test suite. The reason for this is that Selenium tests often involve setups that may include a sign-up, a login, some navigation, form submission, or other interactions with a website. Only after doing those things are you ready to assert on some aspect of the website.  If you confine your tests to only being allowed to interact with the website, there is little that can be done to alleviate this issue."),(0,s.kt)("h2",{id:"a-solution"},"A Solution"),(0,s.kt)("p",null,"REST APIs are increasingly common in the backends of newer websites. If you are fortunate enough to have such an architecture in the site you are testing it may make sense to make use of those REST APIs in your Selenium test suite. By using calls to the REST APIs in the backend to perform parts of a test setup, and using Selenium to perform the assertion within the website normally, we can end up with tests that are faster, more focused, and more reliable."),(0,s.kt)("p",null,"REST APIs are based on the HTTP protocol, which is the same protocol that powers essentially the entire internet.  Nearly every modern programming language has libraries that can be used to make HTTP requests, thus we can add support for calling into REST APIs to virtually any test suite."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,'I decided to pick an example that is nearly ubiquitous: sign-up. When we make a new user for a test, we have a "clean slate" which allows us great control over how to shape that user for our test. We eliminate possible corruption of our test user\'s state from other tests. And if we make that user using a REST API call, we avoid the time penalty of having to fill out a sign-up form (not to mention having to find any emails involved in confirming an email address).'),(0,s.kt)("p",null,"Suppose our hypothetical website is backed by a REST API, and it documents a call to create a user as follows:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"POST http://api.myfakeapp.com/v1/create-user")),(0,s.kt)("p",null,"This call takes a JSON request body, and creates a user."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  'username':   'example-username',\n  'password':   'abcd1234',\n  'email':      'bob@example.com',\n  'first_name': 'bob',\n  'last_name':  'example'\n}\n")),(0,s.kt)("p",null,"That tells us we will have to send an ",(0,s.kt)("inlineCode",{parentName:"p"},"HTTP POST")," request to the URL ",(0,s.kt)("inlineCode",{parentName:"p"},"/v1/create-user"),", with a JSON object body that has valid values for all of the fields shown. If this all sounds scary, it might help to know that this is more-or-less what your browser does when you submit a form. In this case though, we are going to do it sans-browser."),(0,s.kt)("p",null,"The following module has a ",(0,s.kt)("inlineCode",{parentName:"p"},"create_test_user")," method which we will incorporate into our test setups. It contains some helpful inline comments that describe each of the actions being taken."),(0,s.kt)("p",null,"==",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"!! Code snippet needs validation !!")),"=="),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: rest_api_interface.rb\n\nrequire 'net/http'\nrequire 'json'\nrequire 'securerandom'\n\nmodule RestApiInterface\n\n  Headers = {\n    'content-type' => 'application/json',\n    'user-agent' => 'Rest Api Helper',\n  }\n\n  def post_to_api path, post_body_obj\n    json_body = JSON.generate(post_body_obj)\n    response = nil\n    Net::HTTP.start('api.myfakeapp.com') do |http|\n      response = http.post(path, json_body, Headers)\n    end\n    response\n  end\n\n  def create_test_user\n    # Step 1: Build the user parameters randomly\n    random_test_user = {\n      'username'   => random_string,\n      'password'   => random_string,\n      'email'      => \"#{random_string}@testing.com\",\n      'first_name' => 'test',\n      'last_name'  => 'user',\n    }\n\n    # Step 2: Execute the API call\n    response = post_to_api '/v0/oauth/create-profile', random_test_user\n\n    # Step 3: Ensure the api call returned a success code\n    if response.code != '200'\n      raise 'User creation failed'\n    end\n\n    # Final Step: Return the user object so we can use it\n    random_test_user\n  end\n\n  def random_string\n    # This is an easy way to get a good randomized string\n    SecureRandom.hex\n  end\nend\n\n")),(0,s.kt)("p",null,"With this we are now ready to make, and then use, test users from within our Selenium code."),(0,s.kt)("p",null,"==",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"!! Code snippet needs validation !!")),"=="),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rest_api_interface'\ninclude RestApiInterface\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  @user = create_test_user\nend\n\ndef login\n  @driver.get 'http://myfakeapp.com'\n  @driver.find_element(:css, 'input[name=\"username\"]').send_keys @user['username']\n  @driver.find_element(:css, 'input[name=\"password\"]').send_keys @user['password']\n  @driver.find_element(:css, 'button[name=\"login\"]').click\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  login\n  yield\n  teardown\nend\n")),(0,s.kt)("p",null,"With support code like the above, we are free to write code that can assume we are logged in with a clean user. Like the following (which will output the user that is logged in)."),(0,s.kt)("p",null,"==",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"!! Code snippet needs validation !!")),"=="),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  puts @driver.find_element(:css, '#user_id').text\nend\n")),(0,s.kt)("h2",{id:"going-beyond-signups"},"Going beyond signups"),(0,s.kt)("p",null,"This technique of mixing in REST API calls with your Selenium code is very powerful. Admittedly, the example given is easy to criticize. Signing up a fresh user for every test is probably not an appropriate strategy for many sites. Further, the example does not get around having to login. Once the mechanics of this kind of interaction are in place however, it becomes possible to setup many kind of resources and relationships between them using REST API calls."),(0,s.kt)("p",null,"I used to work for an organization that ran highly specialized markets, with several configuration options, as well as different kinds of users including buyers and sellers. I used this technique to build test markets through all permutations of configuration with test buyers and sellers. My Selenium tests would then simply visit the test markets as the test buyers and sellers and confirm the expected features were available.This allowed my tests to provide both a high level of coverage while staying fast, precise, and wholly self-contained."),(0,s.kt)("h2",{id:"testing-against-rest-only"},"Testing against REST only"),(0,s.kt)("p",null,'Once you\'ve gotten used to using REST APIs to create test data fast, there is a question that naturally pops up: "Why not just test against the REST API itself, without using Selenium?"'),(0,s.kt)("p",null,"Indeed, there are many great reasons to consider pure REST API tests to supplement a Selenium test suite. When compared to Selenium tests, pure REST API tests are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Extremely fast"),(0,s.kt)("li",{parentName:"ul"},"Extremely reliable"),(0,s.kt)("li",{parentName:"ul"},"Easier to build higher levels of test coverage"),(0,s.kt)("li",{parentName:"ul"},"Simpler execution architecture."),(0,s.kt)("li",{parentName:"ul"},"More encouraging of testable design in the application")),(0,s.kt)("p",null,"REST API tests are very appropriate for exercising the business logic that powers an application. Of course they leave a lot of important parts of the application untested including Javascript within the website, thus they should never be considered a complete Selenium replacement."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note: Given the ever increasing important of mobile applications, I believe special mention concerning the testing of a mobile application is important here. There are several Selenium like tools for mobile testing out there, but the landscape is still quite immature. Fortunately, the majority of most mobile applications are in fact backed by a REST API. Pure REST API testing should be considered an important component of any test plan for every mobile application!")),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"When considering how to make your Selenium suite have higher coverage, run faster, and be more reliable, it is often worth looking beyond Selenium for solutions to these common problems. REST APIs are becoming very common and provide a relatively easy means for creating test data which Selenium tests can make use of. REST APIs can in fact be a powerful way to test an application all by themselves."),(0,s.kt)("h2",{id:"about-the-author"},"About The Author"),(0,s.kt)("p",null,"Robert Schultheis is a Test Engineer for ",(0,s.kt)("a",{parentName:"p",href:"http://www.knewton.com/"},"Knewton"),", a company devoted to personalizing education for every student globally.  He gave ",(0,s.kt)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=WIMF7Nc1sbY"},"a talk")," with more details about using REST APIs for testing and beyond, and has also released a Ruby gem known as ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Knewton/grifter"},"Grifter")," which allows for the creation of DSLs for interacting with REST APIs easily."),(0,s.kt)("p",null,'Robert wishes to express his gratitude to Dave for allowing him a chance to author this guest post, and wishes "Happy Testing" to all Elemental Selenium readers.'))}h.isMDXComponent=!0}}]);