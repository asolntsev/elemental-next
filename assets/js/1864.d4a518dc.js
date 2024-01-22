"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1864],{11864:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}],l={toc:s},h="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For reference, here is the markup from ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/checkboxes"},"the page we will be testing against")," (an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="checkbox"> unchecked<br>\n  <input type="checkbox" checked=""> checked\n</form>\n')),(0,r.kt)("p",null,"Let's kick things off by requiring our dependent libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework and ",(0,r.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser), declare our test class, and wire up some test ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\n\nclass Checkboxes(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n\n# ...\n")),(0,r.kt)("p",null,"Before we dig into writing a test to verify the state of the page, let's walk through both checkbox approaches to see what Selenium gives us."),(0,r.kt)("p",null,"To do that we'll want to grab all of the checkboxes on the page and iterate through them. Once using an attribute lookup and again asking if the element is selected. For each we'll output the return values we get from Selenium."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        print(\"With .get_attribute('checked')\")\n        for checkbox in checkboxes:\n            print(checkbox.get_attribute('checked'))\n\n        print(\"\\nWith .is_selected\")\n        for checkbox in checkboxes:\n            print(checkbox.is_selected())\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("p",null,"When we save our file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python checkboxes.py")," from the command-line), here is the output we'll see."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"With .attribute('checked')\nNone\ntrue\n\nWith .is_selected\nFalse\nTrue\n")),(0,r.kt)("p",null,"With the attribute lookup, depending on the state of the checkbox, we receive either a ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," string value or a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," boolean value. Whereas with ",(0,r.kt)("inlineCode",{parentName:"p"},".is_selected")," we get a boolean value either way."),(0,r.kt)("p",null,"Let's see what these approaches look like when put to use in our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        assert checkboxes[-1].get_attribute('checked')\n        # or\n        assert checkboxes[-1].is_selected()\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("p",null,"With either approach we can simply assert on the return value (even if it's a string value of ",(0,r.kt)("inlineCode",{parentName:"p"},"'None"),"') and have things work as expected. We can confirm this by asserting on the checkbox which is not selected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: checkboxes.py\n# ...\n    def test_list_values_for_different_approaches(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/checkboxes')\n        checkboxes = driver.find_elements(By.CSS_SELECTOR, 'input[type=\"checkbox\"]')\n\n        assert checkboxes[0].get_attribute('checked')\n        # or\n        assert checkboxes[0].is_selected()\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionError")," will be raised for either assertion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"======================================================================\nFAIL: test_list_values_for_different_approaches (__main__.Checkboxes)\n----------------------------------------------------------------------\nTraceback (most recent call last):\n  File \"45-checkboxes/python/checkboxes.py\", line 31, in test_list_values_for_different_approaches\n    assert checkboxes[0].get_attribute('checked')\nAssertionError\n\n----------------------------------------------------------------------\nRan 1 test in 3.356s\n\nFAILED (failures=1)\n\nshell returned 1\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save and run the file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python checkboxes.py")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find all of the checkboxes on the page"),(0,r.kt)("li",{parentName:"ul"},"Assert that the last checkbox (the one that is supposed to be checked on initial page load) is checked"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Attribute lookups are generally meant for pulling information out of the page for review however in this case they lend themselves to seeing if a checkbox is checked. There is a method which was built for this use case that is more readable and has a predictable set of return values. ",(0,r.kt)("inlineCode",{parentName:"p"},"isSelected")," should be the thing you reach for, knowing that an attribute lookup is there as a solid backup if you find you need it."),(0,r.kt)("p",null,"Happy Testing!"))}c.isMDXComponent=!0}}]);