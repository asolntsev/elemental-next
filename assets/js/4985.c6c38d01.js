"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4985],{64985:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={},r=void 0,l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],s={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"First let's require our libraries (",(0,i.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,i.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions, and ",(0,i.kt)("inlineCode",{parentName:"p"},"rest-client")," for our HTTP requests) and wire up some simple ",(0,i.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: secure_download.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\nrequire 'rest-client'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,i.kt)("p",null,"Next we'll write our test. In it we'll want to access a page of download links that is behind some form of authentication (Basic HTTP Authentication in this case)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'\n  cookie = @driver.manage.cookie_named 'rack.session'\n  link = @driver.find_element(css: '.example a').attribute('href')\n  response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }\n  expect(response.headers[:content_type]).to eql('application/octet-stream')\n  expect(response.headers[:content_length].to_i).to be > 0\nend\n")),(0,i.kt)("p",null,"Once the page loads, we grab the authentication session cookie from Selenium along with the URL for the first file listed. Then we fire up our HTTP library and perform a ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," request using both the download link and the session cookie. We then check the response headers to make sure the file is the correct type and that it's not empty."),(0,i.kt)("p",null,"If we run this script, it will pass. But, it's only limited to the first download link, and it assumes that the file will always be whatever we declared (in this case 'application/octet-stream')."),(0,i.kt)("p",null,"In the next example, let's update the script to remedy these issues."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Here, we will update our previous example code to make the script more robust, by adding a helper method just before our test code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"def content_type(file)\n  file = File.basename(file)\n  if file.include? '.txt'\n    'application/octet-stream'\n  elsif file.include? '.pdf'\n    'application/pdf'\n  else\n    raise 'Unknown file type'\n  end\nend\n")),(0,i.kt)("p",null,"With this new helper method added, we can tease out the filename from a given URL and return the correct content type. If the file type isn't recognized, then we'll stop the test and raise an exception."),(0,i.kt)("p",null,"Now we can update our test code to use this method in addition to grabbing all download links from the page and iterating through them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'\n  cookie = @driver.manage.cookie_named 'rack.session'\n  links = @driver.find_elements(css: '.example a')\n  links.map! { |link| link.attribute('href') }\n  links.each do |link|\n    response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }\n    expect(response.headers[:content_type]).to eql(content_type(link))\n    expect(response.headers[:content_length].to_i).to be > 0\n  end\nend\n")),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"find_elements")," (plural) we get ",(0,i.kt)("em",{parentName:"p"},"all")," of the download links (returned in an array). We then use ",(0,i.kt)("inlineCode",{parentName:"p"},"map!")," to update the array of download links to give us ",(0,i.kt)("em",{parentName:"p"},"just")," the URLs (instead of a collection of Selenium objects which contain URLs). After that, we're able to iterate over the array of URLs, performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," request and assertions for each one (but this time, we're using our new ",(0,i.kt)("inlineCode",{parentName:"p"},"content_type")," helper method)."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"If we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby secure_download.rb")," from the command-line), here is what will happen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browser opens"),(0,i.kt)("li",{parentName:"ul"},"The secure file downloads page loads"),(0,i.kt)("li",{parentName:"ul"},"The authenticated cookie information is retrieved"),(0,i.kt)("li",{parentName:"ul"},"All download URLs on the page are found"),(0,i.kt)("li",{parentName:"ul"},"HTTP library performs a HEAD request against the download link using the retrieved cookie information"),(0,i.kt)("li",{parentName:"ul"},"The response headers are checked to make sure the file is the correct type and not empty"),(0,i.kt)("li",{parentName:"ul"},"The previous two steps are repeated until all download links are verified"),(0,i.kt)("li",{parentName:"ul"},"Browser closes")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"From here, it's simple enough to add in additional content types and file types. And while this example demonstrates accessing files behind Basic HTTP Authentication it should also work with files behind form-based authentication."),(0,i.kt)("p",null,"Hopefully this helps save you some time, enabling you to build a more lean and fast set of download tests."),(0,i.kt)("p",null,"Happy Testing!"))}p.isMDXComponent=!0}}]);