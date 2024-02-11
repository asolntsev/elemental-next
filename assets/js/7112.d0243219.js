"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7112],{37112:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>a,frontMatter:()=>r,toc:()=>l});var i=n(85893),s=n(11151);const r={},o=void 0,l=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About the Author",id:"about-the-author",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(t.p,{children:["First let's pull in our requisite libraries, declare the test class, and wire up some simple ",(0,i.jsx)(t.code,{children:"setUp"})," and ",(0,i.jsx)(t.code,{children:"tearDown"})," methods."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: dropdown.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass DropDown(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now lets' wire up our test."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: dropdown.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/dropdown')\n        dropdown_list = driver.find_element(By.ID, 'dropdown')\n        options = dropdown_list.find_elements(By.TAG_NAME, 'option')\n        for opt in options:\n            if opt.text == 'Option 1':\n                opt.click()\n                break\n        for opt in options:\n            if opt.is_selected():\n                selected_option = opt.text\n                break\n        assert selected_option == 'Option 1', \"Selected option should be Option 1\"\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After visiting ",(0,i.jsx)(t.a,{href:"http://the-internet.herokuapp.com/dropdown",children:"the example application"})," we find the dropdown list by its ID and store it in a variable. We then find each clickable element in the dropdown list (e.g., each ",(0,i.jsx)(t.code,{children:"option"}),") with ",(0,i.jsx)(t.code,{children:"find_elements_by_tag_name"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Grabbing all of the options returns a collection that we iterate over and when the text matches what we want it will click on it."}),"\n",(0,i.jsx)(t.p,{children:"We finish the test by performing a check to see that our selection was made correctly. This is done by reiterating over the dropdown options collection one more time. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it."}),"\n",(0,i.jsx)(t.p,{children:"While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go."}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# filename: dropdown.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.support.select import Select as WebDriverSelect\n# ...\n\n    def test_example_2(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/dropdown')\n        dropdown = driver.find_element(By.ID, 'dropdown')\n        select_list = WebDriverSelect(dropdown)\n        select_list.select_by_visible_text('Option 1')\n        selected_option = select_list.first_selected_option.text\n        assert selected_option == 'Option 1', \"Selected option should be Option 1\"\n\nif __name__ == \"__main__\":\n    unittest.main()\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional check, we are leveraging a built-in helper function of Selenium, ",(0,i.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#module-selenium.webdriver.support.select",children:(0,i.jsx)(t.code,{children:"Select"})}),", and its ",(0,i.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#selenium.webdriver.support.select.Select.select_by_visible_text",children:(0,i.jsx)(t.code,{children:"select_by_visibile_text"})})," method to choose the item we want."]}),"\n",(0,i.jsxs)(t.p,{children:["We then ask the ",(0,i.jsx)(t.code,{children:"select_list"})," what option was selected by using the ",(0,i.jsx)(t.a,{href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html#selenium.webdriver.support.select.Select.first_selected_option",children:(0,i.jsx)(t.code,{children:"first_selected_option"})})," method. This returns a Selenium Element that we grab the text from, storing it in a variable (e.g., ",(0,i.jsx)(t.code,{children:"selected_option"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"Then we perform our assertion against this variable (just like in the previous example)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"NOTE: In addition to selecting by text, you can also select by value."})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"  select_list.select_by_value('1')\n"})}),"\n",(0,i.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(t.p,{children:["If you save this file with either of these examples and run it (e.g., ",(0,i.jsx)(t.code,{children:"python dropdown.py"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open the browser"}),"\n",(0,i.jsx)(t.li,{children:"Visit the example application"}),"\n",(0,i.jsx)(t.li,{children:"Find the dropdown list"}),"\n",(0,i.jsx)(t.li,{children:"Select the requested item from the dropdown list"}),"\n",(0,i.jsx)(t.li,{children:"Assert that the selected option is the one you expect"}),"\n",(0,i.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"In this tip, we've gone over using Selenium to select from a drop down using the drop down list, or XPath to find an element within the dropdown list."}),"\n",(0,i.jsx)(t.p,{children:"Hopefully this will help you when selecting items from a dropdown list."}),"\n",(0,i.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,i.jsx)(t.h2,{id:"about-the-author",children:"About the Author"}),"\n",(0,i.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."}),"\n",(0,i.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:n(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},89417:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"}}]);