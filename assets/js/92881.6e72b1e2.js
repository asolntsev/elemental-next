"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[92881],{92881:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],s={toc:o},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"We'll first need to pull in our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/frames.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Frame Test", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000)\n    driver = await new Builder().forBrowser("firefox").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now onto our test. In it we'll step through ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/nested_frames"},"an example of nested frames")," which can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/frames.spec.js\n  it("nested_frames", async function() {\n    await driver.get("http://the-internet.herokuapp.com/nested_frames");\n    await driver\n      .switchTo()\n      .frame(await driver.findElement(By.name("frame-top")));\n    await driver\n      .switchTo()\n      .frame(await driver.findElement(By.name("frame-middle")));\n    let content = await driver.findElement(By.id("content")).getText();\n    assert.equal(content, "MIDDLE");\n  });\n// ...\n')),(0,r.kt)("p",null,"With Selenium's ",(0,r.kt)("inlineCode",{parentName:"p"},".switchTo().frame")," method we can easily switch to the frame we want. It accepts either a numbered index or WebElement (e.g., the result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"findElement"),")."),(0,r.kt)("p",null,"In order to get the text of the middle frame (e.g., a frame nested within another frame), we first need to switch to the parent frame (e.g., the top frame) ",(0,r.kt)("em",{parentName:"p"},"and then")," switch to the child frame (e.g., the middle frame). Once we've done that we're able to find the element we need, grab its text, and assert that it's what we expect."),(0,r.kt)("p",null,"While this example helps illustrate the point of frame switching, it's not very practical."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Here is a more likely example you'll run into -- working with a WYSIWYG (What You See Is What You Get) Editor like ",(0,r.kt)("a",{parentName:"p",href:"http://www.tinymce.com/"},"TinyMCE"),". You can see the page we're testing ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tinymce"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/frames.spec.js\n// ...\n  it("iframes", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tinymce");\n    await driver.switchTo().frame(await driver.findElement(By.id("mce_0_ifr")));\n    const editor = await driver.findElement(By.id("tinymce"));\n    let beforeText = await editor.getText();\n    await editor.clear();\n    await editor.sendKeys("Hello World!");\n    let afterText = await editor.getText();\n    assert.notEqual(afterText, beforeText);\n  });\n});\n')),(0,r.kt)("p",null,"Once the page loads we switch into the frame that contains TinyMCE and..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"grab the original text and store it"),(0,r.kt)("li",{parentName:"ul"},"clear and input new text"),(0,r.kt)("li",{parentName:"ul"},"grab the new text value"),(0,r.kt)("li",{parentName:"ul"},"assert that the original and new texts are not the same")),(0,r.kt)("p",null,"Keep in mind that if we need to access a part of the page outside of the frame we are currently in we'll need to switch to it. Thankfully Selenium has method that enables us to quickly jump back to the top level of the page -- ",(0,r.kt)("inlineCode",{parentName:"p"},"switchTo.defaultContent()"),"."),(0,r.kt)("p",null,"Here is what that looks like in practice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/frames.spec.js\n  it("iframes", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tinymce");\n    await driver.switchTo().defaultContent();\n    let txt = await driver.findElement(By.css("h3")).getText();\n    assert.equal(txt, "An iFrame containing the TinyMCE WYSIWYG Editor");\n  });\n});\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If we save the file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,r.kt)("u",null,"Example 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Switch to the nested frame"),(0,r.kt)("li",{parentName:"ul"},"Grab the text from the frame and assert that Selenium is in the correct place"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("u",null,"Example 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Switch to the frame that contains the TinyMCE editor"),(0,r.kt)("li",{parentName:"ul"},"Grab and clear the text in the editor"),(0,r.kt)("li",{parentName:"ul"},"Input and grab new text in the edtitor"),(0,r.kt)("li",{parentName:"ul"},"Assert that the original and new text entries don't match"),(0,r.kt)("li",{parentName:"ul"},"Switch to the top level of the page"),(0,r.kt)("li",{parentName:"ul"},"Grab the text from the top of the page and assert that it's not empty"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Now you can readily defeat frames when they cross your path."),(0,r.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0}}]);