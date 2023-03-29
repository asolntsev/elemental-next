"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"How To Select From a Dropdown List",slug:"5-select-from-a-dropdown",number:5,publish_date:new Date("2016-06-13T00:00:00.000Z"),tags:["dropdown","forms"],level:1,category:"testing"},a=void 0,l={unversionedId:"non-updated-tips/select-from-a-dropdown/csharp/readme",id:"non-updated-tips/select-from-a-dropdown/csharp/readme",title:"How To Select From a Dropdown List",description:"The Problem",source:"@site/docs/non-updated-tips/5-select-from-a-dropdown/csharp/readme.md",sourceDirName:"non-updated-tips/5-select-from-a-dropdown/csharp",slug:"/non-updated-tips/select-from-a-dropdown/csharp/5-select-from-a-dropdown",permalink:"/docs/non-updated-tips/select-from-a-dropdown/csharp/5-select-from-a-dropdown",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/5-select-from-a-dropdown/csharp/readme.md",tags:[{label:"dropdown",permalink:"/docs/tags/dropdown"},{label:"forms",permalink:"/docs/tags/forms"}],version:"current",frontMatter:{title:"How To Select From a Dropdown List",slug:"5-select-from-a-dropdown",number:5,publish_date:"2016-06-13T00:00:00.000Z",tags:["dropdown","forms"],level:1,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Work with Multiple Windows",permalink:"/docs/non-updated-tips/work-with-multiple-windows/java/4-work-with-multiple-windows"},next:{title:"How To Select From a Dropdown List",permalink:"/docs/non-updated-tips/select-from-a-dropdown/java/5-select-from-a-dropdown"}},p={},s=[{value:"The Problem",id:"the-problem",level:2},{value:"An Example",id:"an-example",level:2},{value:"Another Example",id:"another-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"Selecting from a dropdown list ",(0,r.kt)("em",{parentName:"p"},"seems")," like one of those simple things. Just grab the list by its element and select an item within it based on the text you want."),(0,r.kt)("p",null,"While it sounds pretty straightforward, there is a bit more finesse to it."),(0,r.kt)("p",null,"Let's take a look at a couple of different approaches."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to C# collections (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic"),"), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Dropdown.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Support.UI;\nusing System.Collections.Generic;\n\npublic class Dropdown\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Dropdown.cs\n// ...\n    [Test]\n    public void SelectFromDropdownTheHardWay()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");\n        IWebElement Dropdown = Driver.FindElement(By.Id("dropdown"));\n        IReadOnlyCollection<IWebElement> DropdownOptions = Dropdown.FindElements(By.TagName("option"));\n        foreach(IWebElement Option in DropdownOptions)\n        {\n            if(Option.Text.Equals("Option 1"))\n                Option.Click();\n        }\n        string SelectedOption = "";\n        foreach (IWebElement Option in DropdownOptions)\n        {\n            if (Option.Selected)\n                SelectedOption = Option.Text;\n        }\n        Assert.That(SelectedOption.Equals("Option 1"));\n    }\n// ...\n')),(0,r.kt)("p",null,"After visiting ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the example application")," we find the dropdown list by its ID and store it in a variable. We then find each element in the dropdown list (e.g., each element with an ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," tag) with ",(0,r.kt)("inlineCode",{parentName:"p"},"FindElements")," (note the plural)."),(0,r.kt)("p",null,"Grabbing all of the options with ",(0,r.kt)("inlineCode",{parentName:"p"},"FindElements")," returns a collection that we iterate over. When the text matches what we want (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"Option 1"'),") we click on it."),(0,r.kt)("p",null,"We finish the test by performing a check to see that our selection was made correctly. This is done by iterating over the dropdown options collection once more. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it."),(0,r.kt)("p",null,"While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go."),(0,r.kt)("h2",{id:"another-example"},"Another Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Dropdown.cs\n// ...\n    [Test]\n    public void SelectFromDropdownTheEasyWay()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");\n        SelectElement Dropdown = new SelectElement(Driver.FindElement(By.Id("dropdown")));\n        Dropdown.SelectByText("Option 1");\n        Assert.That(Dropdown.SelectedOption.Text.Equals("Option 1"));\n    }\n\n}\n')),(0,r.kt)("p",null,"Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional we are leveraging a built-in helper function of Selenium. With ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Support_UI_SelectElement.htm"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectElement"))," and its ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectBy")," methods (e.g., ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Support_UI_SelectElement_SelectByText.htm"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectByText")),") we're able to easily choose the item we want."),(0,r.kt)("p",null,"We then perform our assertion against the text of the currently selected option (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'Dropdown.SelectedOption.Text.Equals("Option 1")'),")."),(0,r.kt)("p",null,"As an aside, in addition to selecting by text you can also select by value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'        Dropdown.SelectByValue("1");\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Dropdown.sln")," from the command-line) here is what will happen for either example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the example application"),(0,r.kt)("li",{parentName:"ul"},"Find the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Select the specified item from the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Assert that the selected option is what you expect "),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"outro"},"Outro"),(0,r.kt)("p",null,"Hopefully this tip will help you breeze through selecting items from a dropdown list."),(0,r.kt)("p",null,"Thanks to Jonathan Taylor for contributing the initial C# code for this tip!"),(0,r.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0}}]);