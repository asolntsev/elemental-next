"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const s={title:"How To Work With HTML Data Tables",slug:"25-tables",number:25,publish_date:new Date("2015-10-13T00:00:00.000Z"),tags:["tables","sorting","css selectors","css pseudo-classes"],level:2,category:"testing"},o=void 0,l={unversionedId:"non-updated-tips/tables/javascript/readme",id:"non-updated-tips/tables/javascript/readme",title:"How To Work With HTML Data Tables",description:"The Problem",source:"@site/docs/non-updated-tips/25-tables/javascript/readme.md",sourceDirName:"non-updated-tips/25-tables/javascript",slug:"/non-updated-tips/tables/javascript/25-tables",permalink:"/docs/non-updated-tips/tables/javascript/25-tables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/25-tables/javascript/readme.md",tags:[{label:"tables",permalink:"/docs/tags/tables"},{label:"sorting",permalink:"/docs/tags/sorting"},{label:"css selectors",permalink:"/docs/tags/css-selectors"},{label:"css pseudo-classes",permalink:"/docs/tags/css-pseudo-classes"}],version:"current",frontMatter:{title:"How To Work With HTML Data Tables",slug:"25-tables",number:25,publish_date:"2015-10-13T00:00:00.000Z",tags:["tables","sorting","css selectors","css pseudo-classes"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Work With HTML Data Tables",permalink:"/docs/non-updated-tips/tables/java/25-tables"},next:{title:"How To Run Your Tests Locally Against Chrome",permalink:"/docs/non-updated-tips/chrome-driver/csharp/29-chrome-driver"}},i={},d=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"A quick primer on Tables and CSS pseudo-classes",id:"a-quick-primer-on-tables-and-css-pseudo-classes",level:2},{value:"An Example",id:"an-example",level:2},{value:"But What About Better Locators?",id:"but-what-about-better-locators",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for."),(0,r.kt)("p",null,"But when the table has no helpful, semantic markup (e.g. easy to use ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," attributes) it quickly becomes more difficult to work with and write tests against it. And if you're able to pull something together, it will likely not work against older browsers."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"You can easily traverse a table through the use of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes"},"CSS pseudo-classes"),"."),(0,r.kt)("p",null,"But keep in mind that if you care about older browsers (e.g., Internet Explorer, et al), then this approach won't work on them. In those cases your best bet is to find a workable solution for the short term and get a front-end developer to update the table with helpful attributes."),(0,r.kt)("h2",{id:"a-quick-primer-on-tables-and-css-pseudo-classes"},"A quick primer on Tables and CSS pseudo-classes"),(0,r.kt)("p",null,"Understanding the broad strokes of an HTML table's structure goes a long way in writing effective automation against it. So here's a quick primer."),(0,r.kt)("p",null,"A table has..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a header (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"<thead>"),")"),(0,r.kt)("li",{parentName:"ul"},"a body (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"<tbody>"),")."),(0,r.kt)("li",{parentName:"ul"},"rows (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"<tr>"),") -- horizontal slats of data"),(0,r.kt)("li",{parentName:"ul"},"columns -- vertical slats of data")),(0,r.kt)("p",null,"Columns are made up of cells which are..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a header (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"<th>"),")"),(0,r.kt)("li",{parentName:"ul"},"one or more standard cells (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"<td>")," -- which is short for ",(0,r.kt)("strong",{parentName:"li"},"table data"),")")),(0,r.kt)("p",null,"CSS pseudo-classes work by walking through the structure of an object and targeting a specific part of it based on a relative number (e.g. the ",(0,r.kt)("strong",{parentName:"p"},"third")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," cell from a row in the table body). This works well with tables since we can grab all instances of a target (e.g. the third ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," cell from each ",(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," in the table body) and use it in our test -- which would give us all of the data for the third column."),(0,r.kt)("p",null,"Let's step through some examples for a common set of table functionality like sorting columns in ascending and descending order."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: You can see the application under test ",(0,r.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/tables"},"here"),". It's an example from ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),". In the example there are 2 tables. We will start with the first table and then work with the second.")),(0,r.kt)("p",null,"We kick things off by pulling in our requisite libraries, declare our test class, and wire up some test setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Tables", function() {\n  let driver;\n\n  beforeEach(async function() {\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Here is the markup from the first table example we're working with. Note that it does not have any ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,r.kt)("p",null,"There are 6 columns (",(0,r.kt)("inlineCode",{parentName:"p"},"Last Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"First Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Due"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Site"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"). Each one is sortable by clicking on the column header. The first click should sort them in ascending order, the second click in descending order."),(0,r.kt)("p",null,"There is a small sampling of data in the table to work with (4 rows worth). So we should be able to sort the data, grab it, and confirm that it sorted correctly. So lets do that in our first test with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column using a CSS pseudo Class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("should sort number column in ascending order", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    const due_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(4)")\n    );\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort());\n  });\n// ...\n')),(0,r.kt)("p",null,"After loading the page we find and click the column heading that we want with a CSS pseudo-class (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"#table1 thead tr th:nth-of-type(4)"),"). This locator targets the 4th ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," element in the table heading section (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead>"),") (which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column heading)."),(0,r.kt)("p",null,"We then use another pseudo-class to find all ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," elements within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column by looking for the 4th ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,r.kt)("inlineCode",{parentName:"p"},".replace('$','')"),"), convert them to a number (",(0,r.kt)("inlineCode",{parentName:"p"},"Number()"),"), and store them all in a array called ",(0,r.kt)("inlineCode",{parentName:"p"},"dues"),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column was sorted in ascending order and the test will pass."),(0,r.kt)("p",null,"If we wanted to test for descending order, we would need to click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("should sort number column in descending order", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    const due_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(4)")\n    );\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort().reverse());\n  });\n// ...\n')),(0,r.kt)("p",null,"We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("should sort text column in ascending", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(3)"))\n      .click();\n    const email_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(3)")\n    );\n    let emails = [];\n    for (const entry in email_column) {\n      emails.push(await email_column[entry].getText());\n    }\n    assert(emails === emails.sort());\n  });\n// ...\n')),(0,r.kt)("p",null,"The mechanism for this is the same as before, except that we don't need to clean the text up or convert it before performing our assertion."),(0,r.kt)("h2",{id:"but-what-about-better-locators"},"But What About Better Locators?"),(0,r.kt)("p",null,"Here is what the markup of our original table would look like with some helpful attributes added in. It's also the markup from the second table on ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tables"},"our application under test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr> <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,r.kt)("p",null,"With these new attributes the locators in our sorting tests become a lot simpler and more expressive. Let's write a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," ascending order test to demonstrate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("sort number column in ascending order with helpful locators", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    driver.findElement(By.css("#table2 thead .dues")).click();\n    const due_column = await driver.findElements(By.css("#table2 tbody .dues"));\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort());\n  });\n});\n')),(0,r.kt)("p",null,"Not only will these selectors work in current ",(0,r.kt)("em",{parentName:"p"},"and")," legacy browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browser opens"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Click the column heading"),(0,r.kt)("li",{parentName:"ul"},"Grab the values for the target column"),(0,r.kt)("li",{parentName:"ul"},"Assert that the column is sorted in the correct order (ascending or descending depending on the test)"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"outro"},"Outro"),(0,r.kt)("p",null,"Oftentimes you'll need to automate something which is lacking in reliable, semantic locators, but with CSS pseudo-classes you can cover a lot of ground in your tests by enabling a bit of CSS gymnastics."),(0,r.kt)("p",null,"But you can greatly simplify test automation efforts by adding some helpful attributes to key elements in the application under test."),(0,r.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);