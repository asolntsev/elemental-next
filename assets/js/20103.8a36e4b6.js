"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[20103],{20103:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>r,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={},o=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],d={toc:l},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's start off by pulling in our requisite libraries (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,a.kt)("inlineCode",{parentName:"p"},"rspec/expectations"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for assertions, ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," to help create a uniquely named temporary download directory, and ",(0,a.kt)("inlineCode",{parentName:"p"},"fileutils"),"\nto create & destroy the temp directory) and wiring up our ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: download_file.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\nrequire 'uuid'\nrequire 'fileutils'\n\ndef setup\n  @download_dir = File.join(Dir.pwd, UUID.new.generate)\n  FileUtils.mkdir_p @download_dir\n\n  # Firefox\n  options = Selenium::WebDriver::Options.firefox\n  options.add_preference('browser.download.dir', @download_dir)\n  options.add_preference('browser.download.folderList', 2)\n  options.add_preference('browser.helperApps.neverAsk.saveToDisk', 'images/jpeg, application/pdf, application/octet-stream')\n  options.add_preference('pdfjs.disabled', true)\n  @driver = Selenium::WebDriver.for :firefox, options: options\nend\n")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method is where the magic is happening in this example. In it we're creating a uniquely named\ntemp directory and storing the absolute path of it in an instance variable that we'll use throughout this file."),(0,a.kt)("p",null,"We're also setting a few browser preferences (for Firefox in this case) and plying it with the necessary configuration\nparameters to make it automatically download the file where we want. Here's a breakdown of each of them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.download.dir")," accepts a string. This is how we set the custom download path. It needs to be an absolute path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.download.folderList")," takes a number. It tells Firefox which download directory to use. ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," tells it to use a custom download path, wheras ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," would use the browser's default path, and ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," would place them on the Desktop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browser.helperApps.neverAsk.saveToDisk")," tells Firefox when not to prompt for a file download. It accepts a string of ",(0,a.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Internet_media_type"},"the file's MIME type"),". If you want to specify more than one, you do it with a comma-separated string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pdfjs.disabled")," is for when downloading PDFs. This overrides the sensible default in Firefox that previews PDFs in the browser. It accepts a boolean.")),(0,a.kt)("p",null,"These preferences are then passed into our instance of Selenium."),(0,a.kt)("p",null,"Now let's add some ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def teardown\n  @driver.quit\n  FileUtils.rm_rf @download_dir\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown")," we make sure to clean up the temp directory after closing the browser. Other than that, it's business as usual."),(0,a.kt)("p",null,"Now onto the test itself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/download'\n  download_link = @driver.find_element(css: '.example a')\n  download_link.click\n\n  files = Dir.glob(\"#{@download_dir}/*\")\n  expect(files.empty?).to eql false\n  expect(File.size(files.first)).to be > 0\nend\n")),(0,a.kt)("p",null,"After loading the page we find the first download link and click it. The click triggers an automatic download to the temp\ndirectory created in ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),". After that, we perform some rudimentary checks to make sure the directory isn't empty and\nthat the file isn't empty either."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby download_file.rb")," from the command-line) here is will happen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a uniquely named temp directory"),(0,a.kt)("li",{parentName:"ul"},"Load the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Find and click the first download link on the page"),(0,a.kt)("li",{parentName:"ul"},"Automatically download the file to the temp directory without prompting"),(0,a.kt)("li",{parentName:"ul"},"Check that the temp directory is not empty"),(0,a.kt)("li",{parentName:"ul"},"Check that the downloaded file is not empty"),(0,a.kt)("li",{parentName:"ul"},"Close the browser"),(0,a.kt)("li",{parentName:"ul"},"Delete the temp directory and it's contents")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A similar approach can be applied to some other browsers with varying configurations. But downloading files this way is\nnot sustainable or recommended. Mark Collin articulates this point well in his prominent write-up about it\n",(0,a.kt)("a",{parentName:"p",href:"http://ardesco.lazerycode.com/index.php/2012/07/how-to-download-files-with-selenium-and-why-you-shouldnt/"},"here"),"."),(0,a.kt)("p",null,"Happy Testing!"))}s.isMDXComponent=!0}}]);