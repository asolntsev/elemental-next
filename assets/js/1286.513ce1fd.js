"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1286],{51286:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={},o=void 0,l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],i={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: You can see the application under test ",(0,r.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/tables"},"here"),". It's an example from ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),". In the example there are 2 tables. We will start with the first table and then work with the second.")),(0,r.kt)("p",null,"We kick things off by requiring our dependent libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webriver")," to drive the browser and ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and its matchers to handle our assertions) and wiring up some ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: table_sort.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Here is the markup from the first table example we're working with. Note that it does not have any ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,r.kt)("p",null,"There are 6 columns (",(0,r.kt)("inlineCode",{parentName:"p"},"Last Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"First Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Due"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Site"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),"). Each one is sortable by clicking on the column header. The first click will sort them in ascending order, the second click in descending order."),(0,r.kt)("p",null,"There is a small sampling of data in the table to work with (4 rows worth), so we should be able to sort the data, grab it, and confirm that it sorted correctly. So let's do that in our first test with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column using a CSS Pseudo Class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n\n  dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort\nend\n")),(0,r.kt)("p",null,"After loading the page we find and click the column heading that we want with a CSS Pseudo-class (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"#table1 thead tr th:nth-of-type(4)"),"). This locator targets the 4th ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," element in the table heading section (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead>"),") (which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column heading)."),(0,r.kt)("p",null,"We then use another pseudo-class to find all ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," elements within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column by looking for the 4th ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,r.kt)("inlineCode",{parentName:"p"},".delete($)"),"), convert them to a number (",(0,r.kt)("inlineCode",{parentName:"p"},".to_f"),"), and store them all in a collection called ",(0,r.kt)("inlineCode",{parentName:"p"},"due_values"),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," column was sorted in ascending order and the test will pass."),(0,r.kt)("p",null,"If we wanted to test for descending order, we would need to click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(4)').click\n\n  dues = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(4)')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort.reverse\nend\n")),(0,r.kt)("p",null,"We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table1 thead tr th:nth-of-type(3)').click\n\n  emails = @driver.find_elements(css: '#table1 tbody tr td:nth-of-type(3)')\n  email_values = emails.map { |email| email.text }\n\n  expect(email_values).to eql email_values.sort\nend\n")),(0,r.kt)("p",null,"The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"But what about older browsers?"),(0,r.kt)("p",null,"If we run these against an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,r.kt)("inlineCode",{parentName:"p"},"Unable to find element"),". This is because older browsers don't support CSS Pseudo-classes."),(0,r.kt)("p",null,"You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,r.kt)("strong",{parentName:"p"},"current browsers")," and submit a request to your front-end developers to update the table markup with some semantic ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."),(0,r.kt)("p",null,"Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second example of ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/tables"},"our application under test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n")),(0,r.kt)("p",null,"With these selectors our sorting tests become a lot simpler and more expressive. Let's take our previous ",(0,r.kt)("inlineCode",{parentName:"p"},"Due")," ascending test and update it to demonstrate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# ...\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/tables'\n\n  @driver.find_element(css: '#table2 thead .dues').click\n\n  dues = @driver.find_elements(css: '#table2 tbody .dues')\n  due_values = dues.map { |due| due.text.delete('$').to_f }\n\n  expect(due_values).to eql due_values.sort\nend\n")),(0,r.kt)("p",null,"Not only will these selectors work in current ",(0,r.kt)("em",{parentName:"p"},"and")," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby table_sort.rb")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Load the page"),(0,r.kt)("li",{parentName:"ul"},"Click the column heading"),(0,r.kt)("li",{parentName:"ul"},"Grab the values for that column"),(0,r.kt)("li",{parentName:"ul"},"Assert that the columns are sorted in the correct order (ascending or descending)"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/what-to-test/18-what-to-test"},"tip 18"),"."),(0,r.kt)("p",null,"For more info on CSS Pseudo-classes see ",(0,r.kt)("a",{parentName:"p",href:"https://saucelabs.com/resources/selenium/css-selectors"},"this write-up by Sauce Labs"),", and maybe ",(0,r.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos"},"the W3C spec CSS3")," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,r.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery"},"here"),"."),(0,r.kt)("p",null,"Happy Testing!"))}p.isMDXComponent=!0}}]);