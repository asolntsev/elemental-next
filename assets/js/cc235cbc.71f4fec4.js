"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"25: How To Work With Tables",id:"25-tables-javascript",contentUrl:"docs/how-to-work-with-tables/25-tables-javascript",sidebar_label:"Javascript",text:"Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for.",number:25,hide_table_of_contents:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-03-24T00:00:00.000Z")},tags:["tables","sorting","css selectors","css pseudo-classes"],level:2,category:["troubleshooting","fundamentals"],language:"javascript"},s="How To Work With Tables",l={unversionedId:"how-to-work-with-tables/25-tables-javascript",id:"how-to-work-with-tables/25-tables-javascript",title:"25: How To Work With Tables",description:"Intro",source:"@site/docs/25-how-to-work-with-tables/javascript.mdx",sourceDirName:"25-how-to-work-with-tables",slug:"/how-to-work-with-tables/25-tables-javascript",permalink:"/elemental-next/docs/how-to-work-with-tables/25-tables-javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/25-how-to-work-with-tables/javascript.mdx",tags:[{label:"tables",permalink:"/elemental-next/docs/tags/tables"},{label:"sorting",permalink:"/elemental-next/docs/tags/sorting"},{label:"css selectors",permalink:"/elemental-next/docs/tags/css-selectors"},{label:"css pseudo-classes",permalink:"/elemental-next/docs/tags/css-pseudo-classes"}],version:"current",lastUpdatedBy:"Paloma Oliveira",lastUpdatedAt:1679616e3,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{title:"25: How To Work With Tables",id:"25-tables-javascript",contentUrl:"docs/how-to-work-with-tables/25-tables-javascript",sidebar_label:"Javascript",text:"Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for.",number:25,hide_table_of_contents:!0,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-03-24T00:00:00.000Z"},tags:["tables","sorting","css selectors","css pseudo-classes"],level:2,category:["troubleshooting","fundamentals"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/elemental-next/docs/how-to-work-with-tables/25-tables-java"},next:{title:"Python",permalink:"/elemental-next/docs/how-to-work-with-tables/25-tables-python"}},i={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-with-tables"},"How To Work With Tables"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Odds are at some point you've come across the use of tables in a web application to display data or information to a user, giving them the option to sort and manipulate it. Depending on your application it can be quite common and something you will want to write an automated test for."),(0,o.kt)("p",null,"When the table has no helpful, semantic markup (e.g. easy to use ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attributes) it quickly becomes more difficult to work with and write tests against it. And if you're able to pull something together, it will likely not work against older browsers."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"You can easily traverse a table through the use of ",(0,o.kt)("a",{parentName:"p",href:"http://www.w3schools.com/css/css_pseudo_classes.asp"},"CSS Pseudo-classes"),"."),(0,o.kt)("p",null,"But keep in mind that if you care about older browsers (e.g., Internet Explorer 8, et al), then this approach won't work on them. In those cases your best bet is to find a workable solution for the short term and get a front-end developer to update the table with helpful attributes."),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"a-quick-primer-on-tables-and-css-pseudo-classes"},(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("strong",{parentName:"em"},"A quick primer on Tables and CSS Pseudo-classes"))),(0,o.kt)("p",{parentName:"blockquote"},"Understanding the broad strokes of an HTML table's structure goes a long way in writing effective automation against it. So here's a quick primer."),(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"A table has:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"a header (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"<thead>"),")"),(0,o.kt)("li",{parentName:"ul"},"a body (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"<tbody>"),")."),(0,o.kt)("li",{parentName:"ul"},"rows (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"<tr>"),") -- horizontal slats of data"),(0,o.kt)("li",{parentName:"ul"},"columns -- vertical slats of data"))),(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"Columns are made up of cells, which are:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"a header (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"<th>"),")"),(0,o.kt)("li",{parentName:"ul"},"one or more standard cells (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"<td>")," -- which is short for ",(0,o.kt)("strong",{parentName:"li"},"table data"),")"))),(0,o.kt)("p",{parentName:"blockquote"},"CSS Pseudo-classes work by walking through the structure of an object and targeting a specific part of it based on a relative number (e.g. the ",(0,o.kt)("strong",{parentName:"p"},"third")," ",(0,o.kt)("inlineCode",{parentName:"p"},"<td>")," cell from a row in the table body). This works well with tables since we can grab all instances of a target (e.g. the third ",(0,o.kt)("inlineCode",{parentName:"p"},"<td>")," cell from each ",(0,o.kt)("inlineCode",{parentName:"p"},"<tr>")," in the table body) and use it in our test -- which would give us all of the data for the third column.")),(0,o.kt)("p",null,"Let's step through some examples for a common set of table functionality like sorting columns in ascending and descending order."),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: You can see the application under test ",(0,o.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/tables"},"here"),". It's an example from ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),". In the example there are 2 tables. We will start with the first table and then work with the second.")),(0,o.kt)("p",null,"We kick things off by pulling in our requisite libraries, declare our test class, and wire up some test setup and teardown methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Tables", function() {\n  let driver;\n\n  beforeEach(async function() {\n  this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,o.kt)("p",null,"Here is the markup from the first table example we're working with. Note that it does not have any ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attributes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,o.kt)("p",null,"There are 6 columns (",(0,o.kt)("inlineCode",{parentName:"p"},"Last Name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"First Name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Due"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Web Site"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Action"),"). Each one is sortable by clicking on the column header. The first click should sort them in ascending order, the second click in descending order."),(0,o.kt)("p",null,"There is a small sampling of data in the table to work with (4 rows worth). So we should be able to sort the data, grab it, and confirm that it sorted correctly. So lets do that in our first test with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Due")," column using a CSS pseudo Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("should sort number column in ascending order", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    const due_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(4)")\n    );\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort());\n  });\n// ...\n')),(0,o.kt)("p",null,"After loading the page we find and click the column heading that we want with a CSS pseudo-class (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"#table1 thead tr th:nth-of-type(4)"),"). This locator targets the 4th ",(0,o.kt)("inlineCode",{parentName:"p"},"<th>")," element in the table heading section (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"<thead>"),") (which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Due")," column heading)."),(0,o.kt)("p",null,"We then use another pseudo-class to find all ",(0,o.kt)("inlineCode",{parentName:"p"},"<td>")," elements within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Due")," column by looking for the 4th ",(0,o.kt)("inlineCode",{parentName:"p"},"<td>")," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,o.kt)("inlineCode",{parentName:"p"},".replace('$','')"),"), convert them to a number (",(0,o.kt)("inlineCode",{parentName:"p"},"Number()"),"), and store them all in a array called ",(0,o.kt)("inlineCode",{parentName:"p"},"dues"),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"Due")," column was sorted in ascending order and the test will pass."),(0,o.kt)("p",null,"If we wanted to test for descending order, we would need to click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Due")," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("should sort number column in descending order", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    const due_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(4)")\n    );\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort().reverse());\n  });\n// ...\n')),(0,o.kt)("p",null,"We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," column."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("should sort text column in ascending", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(3)"))\n      .click();\n    const email_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(3)")\n    );\n    let emails = [];\n    for (const entry in email_column) {\n      emails.push(await email_column[entry].getText());\n    }\n    assert(emails === emails.sort());\n  });\n// ...\n')),(0,o.kt)("p",null,"The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"But what about older browsers?"),(0,o.kt)("p",null,"If we run these against an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,o.kt)("inlineCode",{parentName:"p"},"Unable to find element"),". This is because older browsers don't support CSS Pseudo-classes."),(0,o.kt)("p",null,"You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,o.kt)("strong",{parentName:"p"},"current browsers")," and submit a request to your front-end developers to update the table markup with some semantic ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."),(0,o.kt)("p",null,"Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second example of ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tables"},"our application under test"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr> <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,o.kt)("p",null,"With these new attributes the locators in our sorting tests become a lot simpler and more expressive. Let's write a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Due")," ascending order test to demonstrate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/tables.spec.js\n// ...\n  it("sort number column in ascending order with helpful locators", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    driver.findElement(By.css("#table2 thead .dues")).click();\n    const due_column = await driver.findElements(By.css("#table2 tbody .dues"));\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort());\n  });\n});\n')),(0,o.kt)("p",null,"Not only will these selectors work in current ",(0,o.kt)("em",{parentName:"p"},"and")," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"When we save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browser opens"),(0,o.kt)("li",{parentName:"ul"},"Load the page"),(0,o.kt)("li",{parentName:"ul"},"Click the column heading"),(0,o.kt)("li",{parentName:"ul"},"Grab the values for the target column"),(0,o.kt)("li",{parentName:"ul"},"Assert that the column is sorted in the correct order (ascending or descending depending on the test)"),(0,o.kt)("li",{parentName:"ul"},"Close the browser")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,o.kt)("a",{parentName:"p",href:"/tips/18-what-to-test"},"tip 18"),"==",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"!! Internal link needs replacing !!")),"==."),(0,o.kt)("p",null,"For more info on CSS Pseudo-classes see ",(0,o.kt)("a",{parentName:"p",href:"https://saucelabs.com/resources/selenium/css-selectors"},"this write-up by Sauce Labs"),"==",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"!! Broken link needs replacing !!")),"==, and maybe ",(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos"},"the W3C spec CSS3")," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,o.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery"},"here"),"."),(0,o.kt)("p",null,"Happy Testing!"),(0,o.kt)("h2",{id:"about-the-author"},"About The Author"),(0,o.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,o.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);