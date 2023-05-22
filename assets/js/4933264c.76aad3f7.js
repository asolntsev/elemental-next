"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"9: Use A Base Page Object",id:"9-use-a-base-page-object-ruby",contentUrl:"docs/use-a-base-page-object/9-use-a-base-page-object-ruby",sidebar_label:"Ruby",text:"In a previous tip, we went through creating a simple Page Object to capture the behavior of a page we were interacting with. While this was a good start, it leaves a lot of room for improvement. One of the biggest issues is that there are common actions we will likely need across multiple Page Objects and, with our current approach, we would end up with duplicate code.",number:9,hide_table_of_contents:!0,publish_date:new Date("2013-07-23T00:00:00.000Z"),last_update:{date:new Date("2023-03-25T00:00:00.000Z")},tags:["page object","abstraction"],level:3,category:"tools",language:"ruby"},o="Using a Base Page Object",l={unversionedId:"use-a-base-page-object/9-use-a-base-page-object-ruby",id:"use-a-base-page-object/9-use-a-base-page-object-ruby",title:"9: Use A Base Page Object",description:"Intro",source:"@site/docs/9-use-a-base-page-object/ruby.md",sourceDirName:"9-use-a-base-page-object",slug:"/use-a-base-page-object/9-use-a-base-page-object-ruby",permalink:"/elemental-next/docs/use-a-base-page-object/9-use-a-base-page-object-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/9-use-a-base-page-object/ruby.md",tags:[{label:"page object",permalink:"/elemental-next/docs/tags/page-object"},{label:"abstraction",permalink:"/elemental-next/docs/tags/abstraction"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1679702400,formattedLastUpdatedAt:"Mar 25, 2023",frontMatter:{title:"9: Use A Base Page Object",id:"9-use-a-base-page-object-ruby",contentUrl:"docs/use-a-base-page-object/9-use-a-base-page-object-ruby",sidebar_label:"Ruby",text:"In a previous tip, we went through creating a simple Page Object to capture the behavior of a page we were interacting with. While this was a good start, it leaves a lot of room for improvement. One of the biggest issues is that there are common actions we will likely need across multiple Page Objects and, with our current approach, we would end up with duplicate code.",number:9,hide_table_of_contents:!0,publish_date:"2013-07-23T00:00:00.000Z",last_update:{date:"2023-03-25T00:00:00.000Z"},tags:["page object","abstraction"],level:3,category:"tools",language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/download-a-file-revisited/8-download-a-file-revisited-ruby"},next:{title:"Ruby",permalink:"/elemental-next/docs/retry-test-actions-ruby/10-retry-test-actions-ruby"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-a-base-page-object"},"Using a Base Page Object"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In a previous tip, we went through creating a simple Page Object to capture the behavior of a page we were interacting with. While this was a good start, it leaves a lot of room for improvement. One of the biggest issues is that there are common actions we will likely need across multiple Page Objects and, with our current approach, we would end up with duplicate code."),(0,r.kt)("p",null,"Another issue is that we are using Selenium actions directly in the Page Object, which could present some long-term impacts like, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the inability to drive your tests with a different driver"),(0,r.kt)("li",{parentName:"ul"},"test maintenance issues when Selenium actions change"),(0,r.kt)("li",{parentName:"ul"},"slower test writing due to the lack of a Domain Specific Language (DSL)")),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"With a Base Page Object (a.k.a. a facade layer) we can abstract all common actions into a central location and leverage them in any Page Object we see fit."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In this example we are going to take the code from our previous tip (",(0,r.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/7-use-a-page-object"},"Using a Page Object"),") and modify it to use a Base Page Object."),(0,r.kt)("p",null,"Previous tip's code to be modified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  ENV['base_url'] = 'http://the-internet.herokuapp.com/dynamic_loading/2'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nclass DynamicLoading\n\n  START_BUTTON = { css: '#start button' }\n  FINISH_BUTTON = { css: '#finish' }\n\n  attr_reader :driver\n\n  def initialize(driver)\n    @driver = driver\n    visit\n    verify_page\n  end\n\n  def visit\n    driver.get ENV['base_url']\n  end\n\n  def start\n    driver.find_element(START_BUTTON).click\n  end\n\n  def finish_present?\n    wait_for { @driver.find_element(FINISH_BUTTON).displayed? }\n  end\n\n  def finish_text\n    driver.find_element(FINISH_BUTTON).text\n  end\n\n  private\n\n    def verify_page\n      expect(driver.title).to eql('The Internet')\n    end\n\n    def wait_for(seconds=10)\n      Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\n    end\n\nend\n\nend\n\nrun do\n  dynamic_loading = DynamicLoading.new(@driver)\n  dynamic_loading.start\n  dynamic_loading.finish_present?\n  expect(dynamic_loading.finish_text).to eql('Hello World!')\nend\n")),(0,r.kt)("p",null,"Now let's modify this code to perform a Google search. First, we include our libraries and wire up our setup, teardown, and run actions as usual."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  ENV['base_url'] = 'http://www.google.com'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Next we create our Base Page Object. It's a simple Ruby class that our other Page Objects will inherit from."),(0,r.kt)("p",null,"At the top of it we set an ",(0,r.kt)("inlineCode",{parentName:"p"},"attr_reader")," to store the Selenium driver object that gets passed to it through the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," method. And the rest of the class is filled with a series of common Selenium actions that we pull from the GoogleSearch Page Object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Base\n\n  attr_reader :driver\n\n  def initialize(driver)\n    @driver = driver\n  end\n\n  def visit(url='/')\n    driver.get(ENV['base_url'] + url)\n  end\n\n  def find(locator)\n    driver.find_element locator\n  end\n\n  def clear(locator)\n    find(locator).clear\n  end\n\n  def type(locator, input)\n    find(locator).send_keys input\n  end\n\n  def click_on(locator)\n    find(locator).click\n  end\n\n  def displayed?(locator)\n    driver.find_element(locator).displayed?\n    true\n    rescue Selenium::WebDriver::Error::NoSuchElementError\n      false\n  end\n\n  def text_of(locator)\n    find(locator).text\n  end\n\n  def title\n    driver.title\n  end\n\n  def wait_for(seconds=5)\n    Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\n  end\n\nend\n")),(0,r.kt)("p",null,"With the Base class in hand we simply update the GoogleSearch Page Object to inherit from it (with ",(0,r.kt)("inlineCode",{parentName:"p"},"< Base")," after the class name) and wire it up and clean things up."),(0,r.kt)("p",null,"Since we have some actions we want to execute when we load the GoogleSearch object, we keep them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," method. But since we are inheriting from the Base class we need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"super")," before them. This is responsible for passing the driver object into the Base class and making all of its methods run smoothly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class GoogleSearch < Base\n\n  SEARCH_BOX        = { name: 'q' }\n  TOP_SEARCH_RESULT = { css: '#rso .g' }\n\n  def initialize(driver)\n    super(driver)\n    visit('/')\n    verify_page\n  end\n\n  def search_for(search_term)\n    type SEARCH_BOX, search_term\n    find(SEARCH_BOX).send_keys(:enter)\n  end\n\n  def search_result_present?(search_result)\n    wait_for { displayed?(TOP_SEARCH_RESULT) }\n    text_of(TOP_SEARCH_RESULT).include? search_result\n  end\n\n  private\n\n    def verify_page\n      expect(driver.title).to include ('Google')\n    end\n\nend\n")),(0,r.kt)("p",null,"Once that's done, we'll add our actual test script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run {\n  google = GoogleSearch.new(@driver)\n  google.search_for 'elemental selenium tips'\n  result = google.search_result_present? 'Elemental Selenium'\n  expect(result).to be == true\n}\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load Google"),(0,r.kt)("li",{parentName:"ul"},"Search for ",(0,r.kt)("em",{parentName:"li"},"elemental selenium tips")),(0,r.kt)("li",{parentName:"ul"},"Wait for the first search result to render"),(0,r.kt)("li",{parentName:"ul"},"Grab the text from it"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text we want is within it")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Now we are in a position to write more Page Objects that leverage common actions without duplication or any Selenium code directly in them."),(0,r.kt)("p",null,"Hopefully this tip has helped you find your way further down the rabbit hole of Page Objects (in a good way)."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}p.isMDXComponent=!0}}]);