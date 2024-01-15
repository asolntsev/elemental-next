"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[56363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={language:"java",level:1,hide_sidebar:!0,publish_date:new Date("2015-11-09T00:00:00.000Z"),last_update:{date:new Date("2023-04-03T00:00:00.000Z")}},o=void 0,l={unversionedId:"select-from-a-dropdown/java",id:"select-from-a-dropdown/java",title:"java",description:"Example 1",source:"@site/docs/5-select-from-a-dropdown/java.md",sourceDirName:"5-select-from-a-dropdown",slug:"/select-from-a-dropdown/java",permalink:"/docs/select-from-a-dropdown/java",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-select-from-a-dropdown/java.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:168048e4,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{language:"java",level:1,hide_sidebar:!0,publish_date:"2015-11-09T00:00:00.000Z",last_update:{date:"2023-04-03T00:00:00.000Z"}}},p={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Dropdown.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport org.openqa.selenium.support.ui.Select;\nimport org.openqa.selenium.WebElement;\nimport java.util.List;\nimport static org.hamcrest.CoreMatchers.is;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Dropdown {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Dropdown.java\n// ...\n    @Test\n    public void dropdownTest() {\n        driver.get("http://the-internet.herokuapp.com/dropdown");\n        WebElement dropdownList = driver.findElement(By.id("dropdown"));\n        List<WebElement> options = dropdownList.findElements(By.tagName("option"));\n        for (int i = 0; i < options.size(); i++) {\n            if (options.get(i).getText().equals("Option 1")) {\n                options.get(i).click();\n            }\n        }\n        String selectedOption = "";\n        for (int i = 0; i < options.size(); i++) {\n            if (options.get(i).isSelected()) {\n                selectedOption = options.get(i).getText();\n            }\n        }\n        assertThat(selectedOption, is("Option 1"));\n    }\n// ...\n')),(0,r.kt)("p",null,"After visiting ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the example application")," we find the dropdown list by it's ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),") with ",(0,r.kt)("inlineCode",{parentName:"p"},"findElements")," (note the plural)."),(0,r.kt)("p",null,"Grabbing all of the options with ",(0,r.kt)("inlineCode",{parentName:"p"},"findElements")," returns a collection that we iterate over. When the text matches what we want, we click on it."),(0,r.kt)("p",null,"We finish the test by performing a check to see that our selection was made correctly. This is done by iterating over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it."),(0,r.kt)("p",null,"While this works, there is a more accessible way to do this."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Dropdown.java\n// ...\n    @Test\n    public void dropdownTestRedux() {\n        driver.get("http://the-internet.herokuapp.com/dropdown");\n        Select selectList = new Select(driver.findElement(By.id("dropdown")));\n        selectList.selectByVisibleText("Option 1");\n        assertThat(selectList.getFirstSelectedOption().getText(), is(equalTo("Option 1")));\n    }\n\n}\n')),(0,r.kt)("p",null,"Similar to the first example, we are finding the dropdown list by it's ID. But instead of iterating over its option elements and clicking based on a conditional we are leveraging a built-in helper function of Selenium. With ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/Select.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Select"))," and it's ",(0,r.kt)("inlineCode",{parentName:"p"},"selectBy")," methods (e.g., ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/Select.html#selectByVisibleText-java.lang.String-"},(0,r.kt)("inlineCode",{parentName:"a"},"selectByVisibleText")),") we're able to easily choose the item we want."),(0,r.kt)("p",null,"We then ask the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectList")," what option was selected by using ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/Select.html#getFirstSelectedOption--"},(0,r.kt)("inlineCode",{parentName:"a"},"getFirstSelectedOption"))," and perform our assertion against it's text."),(0,r.kt)("p",null,"As an aside, in addition to selecting by text you can also select by value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        select.selectByValue("1");\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen for either example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the example application"),(0,r.kt)("li",{parentName:"ul"},"Find the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Select the specified item from the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Assert that the selected option is what you expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully this tip will help you breeze through selecting items from a dropdown list."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/elemental-selenium-tips"},"here"),"."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Hopefully this tip will help you breeze through selecting items from a dropdown list."),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}u.isMDXComponent=!0},89417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"}}]);