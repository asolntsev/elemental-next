"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7921],{533:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>o,frontMatter:()=>i,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const i={},r=void 0,l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],u={toc:l},p="wrapper";function o(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"example-1"},"Example 1"),(0,s.kt)("p",null,"Let's start by requiring our requisite libraries, declare our test class, and wire up some test setup and teardown methods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/basic-auth.spec.js\n// ...\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Basic Auth", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,s.kt)("p",null,"Now let's add our test code to the script."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/basic-auth-1.spec.js\n// ...\n  it("should visit basic auth secured page directly", async function() {\n    await driver.get(\n      "http://admin:admin@the-internet.herokuapp.com/basic_auth"\n    );\n    const page_message = await driver\n      .findElement(By.css(".example p"))\n      .getText();\n    assert(\n      page_message === "Congratulations! You must have the proper credentials."\n    );\n  });\n});\n')),(0,s.kt)("p",null,"In the test we're loading the page by passing in the username and password in the front of the URL (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"http://admin:admin@"),"). Once it loads we grab text from the page to make sure we ended up in the right place."),(0,s.kt)("h2",{id:"example-2"},"Example 2"),(0,s.kt)("p",null,"Alternatively, we could have accessed this page before the test (e.g., as part of the test setup). This would have cached the Basic Auth session in the browser, enabling us to visit the page again without having to specify credentials. This is particularly useful if you have numerous pages behind Basic Auth."),(0,s.kt)("p",null,"Here's what that script would look like."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/basic-auth.spec-2.js\n// ...\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n    await driver.get(\n      "http://admin:admin@the-internet.herokuapp.com/basic_auth"\n    );\n  });\n\n  // ...\n\n  it("should visit basic auth without credentials after visiting page with them", async function() {\n    await driver.get("http://the-internet.herokuapp.com/basic_auth");\n    const page_message = await driver\n      .findElement(By.css(".example p"))\n      .getText();\n    assert(\n      page_message === "Congratulations! You must have the proper credentials."\n    );\n  });\n});\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE: If your application serves both HTTP and HTTPS pages from behind Basic Auth then you will need to load one of ",(0,s.kt)("em",{parentName:"strong"},"each")," type before executing your test steps. Otherwise you will get authorization errors when switching between HTTP and HTTPS because the browser can't use Basic Auth credentials interchangeably (e.g. HTTP for HTTPS and vice versa).")),(0,s.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,s.kt)("p",null,"When you save these files and run them (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"mocha"),"), here is what will happen:"),(0,s.kt)("u",null,"basic-auth-1.spec.js"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the browser"),(0,s.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth"),(0,s.kt)("li",{parentName:"ul"},"Get the page text"),(0,s.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,s.kt)("li",{parentName:"ul"},"Close the browser")),(0,s.kt)("p",null,"And when you save the second example and run it (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"basic-auth-2.spec.js"),"), here is what will happen:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the browser"),(0,s.kt)("li",{parentName:"ul"},"Visit the page using Basic Auth as part of the test setup"),(0,s.kt)("li",{parentName:"ul"},"Visit the page without the Basic Auth credentials (successfully)"),(0,s.kt)("li",{parentName:"ul"},"Get the page text"),(0,s.kt)("li",{parentName:"ul"},"Assert that the text is what we expect"),(0,s.kt)("li",{parentName:"ul"},"Close the browser")),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"Hopefully these examples will help save you from getting any setbacks from Basic Auth when you come across it."),(0,s.kt)("p",null,"Happy Testing!"))}o.isMDXComponent=!0}}]);