"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[441],{20441:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>o,frontMatter:()=>s,toc:()=>a});var r=t(74848),i=t(28453);const s={},l=void 0,a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Let's start by importing our requisite classes for our test framework (e.g., ",(0,r.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,r.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), and start our class off with some setup and teardown methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"// filename: RightClick.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Interactions;\n\npublic class RightClick\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we're ready to write our test."}),"\n",(0,r.jsxs)(n.p,{children:["Let's use an example from ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"})," that will render a custom context menu when we right-click on a specific area of the page (",(0,r.jsx)(n.a,{href:"http://the-internet.herokuapp.com/context_menu",children:"link"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Clicking the context menu item will trigger a JavaScript alert which will say ",(0,r.jsx)(n.code,{children:"You selected a context menu"}),". We'll grab this text and use it to assert that the menu was actually triggered."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'// filename: RightClick.cs\n// ...\n    [Test]\n    public void RightClickExample()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/context_menu");\n        IWebElement MenuArea = Driver.FindElement(By.Id("hot-spot"));\n        Actions Builder = new Actions(Driver);\n        Builder.ContextClick(MenuArea)\n            .SendKeys(Keys.ArrowDown)\n            .SendKeys(Keys.ArrowDown)\n            .SendKeys(Keys.ArrowDown)\n            .SendKeys(Keys.ArrowDown)\n            .SendKeys(Keys.ArrowDown)\n            .SendKeys(Keys.Enter)\n            .Perform();\n        IAlert Alert = Driver.SwitchTo().Alert();\n        Assert.That(Alert.Text.Equals("You selected a context menu"));\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(n.p,{children:["When you save this file and run it (e.g., ",(0,r.jsx)(n.code,{children:"nunit3-console.exe .\\RightClick.sln"})," from the command-line) here is what will happen."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the browser"}),"\n",(0,r.jsx)(n.li,{children:"Visit the page"}),"\n",(0,r.jsx)(n.li,{children:"Find and right-click the area of the page that renders a custom context menu"}),"\n",(0,r.jsx)(n.li,{children:"Navigate to the context menu option with keyboard keys and select it"}),"\n",(0,r.jsx)(n.li,{children:"JavaScript alert appears"}),"\n",(0,r.jsx)(n.li,{children:"Grab the text of the JavaScript alert"}),"\n",(0,r.jsx)(n.li,{children:"Assert that the text from the alert is what we expect"}),"\n",(0,r.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about context menus, you can read ",(0,r.jsx)(n.a,{href:"http://blog.teamtreehouse.com/building-html5-context-menus",children:"this write-up from the Tree House blog"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Happy Testing!"})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);