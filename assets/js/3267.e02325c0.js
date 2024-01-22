"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3267],{43267:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>r,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={},o=void 0,s=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],p={toc:s},l="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(l,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Our example page is from ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet")," and can be seen ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/abtest"},"here"),". There are three different versions of the page that are available. On each page the heading text will vary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Control: ",(0,i.kt)("inlineCode",{parentName:"li"},"A/B Test Control")),(0,i.kt)("li",{parentName:"ul"},"Variation 1: ",(0,i.kt)("inlineCode",{parentName:"li"},"A/B Test Variation 1")),(0,i.kt)("li",{parentName:"ul"},"Opt-out: ",(0,i.kt)("inlineCode",{parentName:"li"},"No A/B Test"))),(0,i.kt)("p",null,"Let's start by loading our requisite libraries, declare our test class, and wire up some setup and teardown methods for our tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/abOptOut.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("A/B opt-out", function() {\n  let driver;\n\n  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,i.kt)("p",null,"Now let's wire up our first test to step through loading the split testing page and verifying that the text changes after we forge an opt-out cookie."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/abOptOut.spec.js\n// ...\n  it("with cookie after visiting page", async function() {\n    await driver.get("http://the-internet.herokuapp.com/abtest");\n    let headingText = await driver.findElement(By.css("h3")).getText();\n    if (headingText.startsWith("A/B Test")) {\n      await driver\n        .manage()\n        .addCookie({ name: "optimizelyOptOut", value: "true" });\n      await driver.navigate().refresh();\n      headingText = await driver.findElement(By.css("h3")).getText();\n    }\n    assert.equal(headingText, "No A/B Test");\n  });\n// ...\n')),(0,i.kt)("p",null,"After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it matches what we expect. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again."),(0,i.kt)("p",null,"We could also load the opt-out cookie before navigating to this page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/abOptOut.spec.js\n  it("with cookie before visiting page", async function() {\n    await driver.get("http://the-internet.herokuapp.com");\n    await driver\n      .manage()\n      .addCookie({ name: "optimizelyOptOut", value: "true" });\n    await driver.get("http://the-internet.herokuapp.com/abtest");\n    assert.equal(\n      await driver.findElement(By.css("h3")).getText(),\n      "No A/B Test"\n    );\n  });\n// ...\n')),(0,i.kt)("p",null,"Here we are navigating to the main page of the site first and then adding the opt-out cookie. After that we navigate to the split test page and then perform our check. Alternatively, we could opt out without forging a cookie. Instead we just need to append an opt out parameter to the URL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/abOptOut.spec.js\n// ...\n  it("with opt out URL", async function() {\n    await driver.get(\n      "http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true"\n    );\n    await driver\n      .switchTo()\n      .alert()\n      .dismiss();\n    assert.equal(\n      await driver.findElement(By.css("h3")).getText(),\n      "No A/B Test"\n    );\n  });\n});\n')),(0,i.kt)("p",null,"By appending ",(0,i.kt)("inlineCode",{parentName:"p"},"?optimizely_opt_out=true")," we achieve the same outcome as before. Keep in mind that this approach triggers a JavaScript alert, so we have to switch to and dismiss it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"driver.switchTo().alert().dismiss()"),") before performing our check."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen with either of the tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Opt-out of the split tests (either by cookie or appended URL)"),(0,i.kt)("li",{parentName:"ul"},"Visit the split testing page"),(0,i.kt)("li",{parentName:"ul"},"Grab the header text"),(0,i.kt)("li",{parentName:"ul"},"Confirm that the session is opted out of the split test"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this tip, we learned about split testing and learned about some standard opt-out mechanisms built into A/B testing platforms."),(0,i.kt)("p",null,"Happy Testing!"))}h.isMDXComponent=!0}}]);