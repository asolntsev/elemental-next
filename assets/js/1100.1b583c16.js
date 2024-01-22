"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1100],{71100:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l=[{value:"Example",id:"example",level:2},{value:"Part 1: Grid Setup",id:"part-1-grid-setup",level:3},{value:"Part 2: Test Setup",id:"part-2-test-setup",level:3},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],s={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"part-1-grid-setup"},"Part 1: Grid Setup"),(0,a.kt)("p",null,"Selenium Grid comes built into the Selenium Standalone Server. So to get started we'll need to download the latest version of it from the Selenium\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/releases"},"releases"),"."),(0,a.kt)("p",null,"Then we need to start the Hub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-<version>.jar hub\n...\n16:49:29.816 INFO [Hub.execute] - Started Selenium Hub\n...\n")),(0,a.kt)("p",null,"After that we can register Nodes to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> java -jar selenium-server-<version>.jar node --hub http://localhost:4444\n...\n16:51:47.726 INFO [NodeServer.execute] - Started Selenium Node\n...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This example only demonstrates a single node on the same machine as the hub. To span nodes across multiple machines you will need to place the standalone server on each machine and launch it with the same registration command (replacing ",(0,a.kt)("inlineCode",{parentName:"strong"},"http://localhost")," with the location of your hub, and specifying additional parameters as needed).")),(0,a.kt)("p",null,"Now that the grid is running we can view the available browsers by visiting our Grid's console at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4444/grid/console"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Grid Console",src:n(52504).Z,width:"823",height:"565"})),(0,a.kt)("p",null,"To refine the list of available browsers, we can specify an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver-implementation")," parameter when registering the Node.\nFor instance, if we wanted to only offer Safari on a node, we could specify it with ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver-implementation safari"),", which would look\nlike this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari\n")),(0,a.kt)("p",null,"We could also repeat this parameter again if we wanted to explicitly specify more than one browser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-<version>.jar node --hub http://localhost:4444 --driver-implementation safari --driver-implementation chrome\n")),(0,a.kt)("p",null,"There are numerous parameters that we can use at run time. You can see a full list at the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/configuration/cli_options/"},"Selenium Grid documentation"),"."),(0,a.kt)("h3",{id:"part-2-test-setup"},"Part 2: Test Setup"),(0,a.kt)("p",null,"Now let's wire up a simple test script to use our new Grid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/grid.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Grid", function() {\n  let driver;\n\n  beforeEach(async function() {\n    const url = "http://localhost:4444";\n    driver = await new Builder()\n      .usingServer(url)\n      .forBrowser("chrome")\n      .build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n\n  it("hello world", async function() {\n    await driver.get("http://the-internet.herokuapp.com/");\n    assert((await driver.getTitle()) === "The Internet");\n  });\n});\n')),(0,a.kt)("p",null,"Notice in ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach")," we're using a URL to connect to the Grid (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"usingServer(url)"),"). And we are telling the Grid which\nbrowser we want to use by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"forBrowser")," method."),(0,a.kt)("p",null,"You can see a full list of the available browser options at the ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/browsers/"},"Selenium documentation"),"."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to the Grid Hub"),(0,a.kt)("li",{parentName:"ul"},"Hub determines which Node has the necessary browser/platform combination"),(0,a.kt)("li",{parentName:"ul"},"Hub connects the test to the Node"),(0,a.kt)("li",{parentName:"ul"},"Browser opens on the Node"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Browser closes on the Node")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you're looking to set up Selenium Grid to work with Internet Explorer or Chrome, be sure to read up on how to set them up since there is\nadditional configuration required for each. And if you run into issues, be sure to check out the browser driver documentation for the\nbrowser you're working with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chromedriver.chromium.org/"},"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html"},"FirefoxDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/webkit/about_webdriver_for_safari"},"SafariDriver"))),(0,a.kt)("p",null,"Also, it's worth noting that while Selenium Grid is a great option for scaling your test infrastructure, it by itself will NOT give you\nparallelization. That is to say, it can handle as many connections as you throw at it (within reason), but you will still need to find a\nway to execute your tests in parallel."),(0,a.kt)("p",null,"Happy Testing!"))}p.isMDXComponent=!0},52504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grid-console-9bf5440f0883d8546a58533d06efed07.png"}}]);