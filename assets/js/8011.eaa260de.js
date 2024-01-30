"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8011],{7583:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>s,toc:()=>a});var i=t(5893),o=t(1151);const s={},r=void 0,a=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"First let's pull in our requisite libraries, declare the test class, and wire up some simple setup and teardown methods."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// filename: spec/dropdown.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Dropdown", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now lets' wire up our test."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// filename: spec/dropdown.spec.js\n// ...\n  it("select the hard way", async function() {\n    await driver.get("http://the-internet.herokuapp.com/dropdown");\n    const options = await driver.findElements(By.css("#dropdown option"));\n    let selection;\n    for (const option in options) {\n      if ((await options[option].getText()) === "Option 1") {\n        await options[option].click();\n        break;\n      }\n    }\n    for (const option in options) {\n      if (await options[option].isSelected()) {\n        selection = await options[option].getText();\n        break;\n      }\n    }\n    assert(selection === "Option 1");\n  });\n// ...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After visiting ",(0,i.jsx)(n.a,{href:"http://the-internet.herokuapp.com/dropdown",children:"the example application"})," we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each ",(0,i.jsx)(n.code,{children:"option"}),") with ",(0,i.jsx)(n.code,{children:"findElements"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it."}),"\n",(0,i.jsx)(n.p,{children:"We finish the test by performing a check to see that our selection was made correctly. This is done by looping over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and then making an assertion against it."}),"\n",(0,i.jsx)(n.p,{children:"While this works, there is a more accessible way to do this."}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// filename: spec/dropdown.spec.js\n// ...\n  it("select the simpler way", async function() {\n    await driver.get("http://the-internet.herokuapp.com/dropdown");\n    await driver\n      .findElement(\n        By.xpath("//*[@id=\'dropdown\']/option[contains(text(),\'Option 1\')]")\n      )\n      .click();\n    const selection = await driver\n      .findElement(By.css(\'#dropdown option[selected="selected"]\'))\n      .getText();\n    assert(selection === "Option 1");\n  });\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Similar to the first example, we are selecting a dropdown list option by its text. Instead of first finding the dropdown list, we will employ a more robust locator (e.g., XPath) to find an element within the dropdown list that contains our target text -- and click it."}),"\n",(0,i.jsxs)(n.p,{children:["We then determine what has been selected in the dropdown list by using one more powerful locator (e.g., a CSS selector). This time, looking to see which option has the ",(0,i.jsx)(n.code,{children:"selected"})," attribute, and grabbing its text. We use this found text to assert that the correct item was chosen."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["If you save this file with either of these examples and run it (e.g., ",(0,i.jsx)(n.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Visit the example application"}),"\n",(0,i.jsx)(n.li,{children:"Find the dropdown list"}),"\n",(0,i.jsx)(n.li,{children:"Select the requested item from the dropdown list"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the selected option is the one you expect"}),"\n",(0,i.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In this tip, we've gone over using Selenium to select from a drop down using the drop down list, or XPath to find an element within the dropdown list."}),"\n",(0,i.jsx)(n.p,{children:"Hopefully this will help you when selecting items from a dropdown list."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);