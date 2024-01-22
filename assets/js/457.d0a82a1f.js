"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[457],{60457:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],s={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,i.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,i.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,i.kt)("p",null,"Let's start by including our requisite classes for our test framework (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"using NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium"),", etc.), accessing C# methods to work with the local file system (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"using System.IO"),"), and start our class with some setup and teardown methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing System.IO;\n\npublic class Chrome\n{\n    IWebDriver Driver;\n    string VendorDirectory = Directory.GetParent(\n        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).\n            Parent.FullName + @"\\Vendor";\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new ChromeDriver(VendorDirectory);\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n')),(0,i.kt)("p",null,"Notice the field variable declaration for ",(0,i.kt)("inlineCode",{parentName:"p"},"VendorDirectory"),". With it we are effectively grabbing the full path of the project directory and appending the ",(0,i.kt)("inlineCode",{parentName:"p"},"Vendor")," directory to it. This is then put to use when creating an instance of Chrome (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"Driver = new ChromeDriver(VendorDirectory);"),")."),(0,i.kt)("p",null,"Now we're ready to add a test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\n// ...\n    [Test]\n    public void PageLoads()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(Driver.Title.Equals("The Internet"));\n    }\n}\n')),(0,i.kt)("p",null,"If we save this file and run the project (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln"),") it will launch an instance of Chrome, visit the homepage of ",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When you save this file and run the project (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln")," from the command-line) here is what will happen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,i.kt)("li",{parentName:"ul"},"Chrome opens"),(0,i.kt)("li",{parentName:"ul"},"Test runs"),(0,i.kt)("li",{parentName:"ul"},"Chrome closes"),(0,i.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,i.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,i.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);