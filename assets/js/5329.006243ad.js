"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[5329],{75329:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>l,frontMatter:()=>r,toc:()=>o});var s=t(74848),i=t(28453);const r={},c=void 0,o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For reference, here is the markup from ",(0,s.jsx)(n.a,{href:"http://the-internet.herokuapp.com/checkboxes",children:"the page we'll be testing against"})," (from ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<form>\n  <input type="checkbox" /> unchecked<br />\n  <input type="checkbox" checked="" /> checked\n</form>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["First let's include our requisite classes for our test framework (e.g., ",(0,s.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,s.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), access to common C# functions (e.g., ",(0,s.jsx)(n.code,{children:"System"}),", etc.) and start our class off with some setup and teardown methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// filename: Checkboxes.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System;\nusing System.Collections.Generic;\n\npublic class Checkboxes\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Before we write any tests let's walk through both checkbox approaches to see what Selenium gives us."}),"\n",(0,s.jsx)(n.p,{children:"To do that we'll want to grab all the checkboxes on the page and iterate through them. Once using an attribute lookup, and again asking if the element is selected. Each time outputting the return value we get from Selenium."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// filename: Checkboxes.cs\n// ...\n[Test]\n    public void CheckboxDiscovery()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IReadOnlyCollection<IWebElement> Checkboxes = Driver.FindElements(By.CssSelector("input[type=\\"checkbox\\"]"));\n\n        Console.Write("With .attribute(\'checked\')");\n        foreach(IWebElement Checkbox in Checkboxes)\n        {\n            Console.WriteLine(Checkbox.GetAttribute("checked"));\n        }\n\n        Console.WriteLine("With .selected?");\n        foreach(IWebElement Checkbox in Checkboxes)\n        {\n            Console.WriteLine(Checkbox.Selected);\n        }\n    }\n// ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When we save our file and run it (e.g., ",(0,s.jsx)(n.code,{children:"nunit3-console.exe .\\Checkboxes.sln"})," from the command-line), here is the output we'll see:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"With .attribute('checked')\ntrue\nWith .selected?\nFalse\nTrue\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With the attribute lookup, depending on the state of the checkbox, we receive either a nothing or a string with the value ",(0,s.jsx)(n.code,{children:'"true"'}),". Whereas with ",(0,s.jsx)(n.code,{children:".selected?"})," we get a boolean (",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"}),") response."]}),"\n",(0,s.jsx)(n.p,{children:"Let's see what these approaches look like when put to use in a test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// filename: Checkboxes.cs\n// ...\n    [Test]\n    public void GetCheckBoxStatusByAttribute()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));\n        Assert.That(Checkbox.GetAttribute("checked").Equals("true"));\n    }\n// ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["With an attribute lookup we check against the return value (which is a string). In this case we're seeing if the return value is ",(0,s.jsx)(n.code,{children:'"true"'}),". Let's see what the other approach looks like."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// filename: Checkboxes.cs\n// ...\n    [Test]\n    public void GetCheckBoxesStatusByQuery()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/checkboxes");\n        IWebElement Checkbox = Driver.FindElement(By.CssSelector("form input:nth-of-type(2)"));\n        Assert.That(Checkbox.Selected);\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this case, when referencing the return value it's a simple matter of checking against a boolean value."}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When you save and run the test file (e.g., ",(0,s.jsx)(n.code,{children:"nunit3-console.exe .\\Checkboxes.sln"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page"}),"\n",(0,s.jsx)(n.li,{children:"Find all the checkboxes on the page"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the second checkbox (the one that is supposed to be checked on initial page load) is checked"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Attribute lookups are meant for pulling information out of the page for review. While they work in this circumstance you're better off using a selected lookup. But the approach you choose will depend on how the checkboxes you're testing are constructed."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);