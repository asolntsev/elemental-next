"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"65: Highlight Elements",id:"65-highlight-elements-ruby",contentUrl:"docs/highlight-elements/65-highlight-elements-ruby",sidebar_label:"Ruby",text:"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?",number:65,hide_table_of_contents:!0,publish_date:new Date("2014-09-11T00:00:00.000Z"),last_update:{date:new Date("2023-03-06T00:00:00.000Z")},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"ruby"},i="How to Visually Verify Your Locators",o={unversionedId:"highlight-elements/65-highlight-elements-ruby",id:"highlight-elements/65-highlight-elements-ruby",title:"65: Highlight Elements",description:"Intro",source:"@site/docs/65-highlight-elements/ruby.md",sourceDirName:"65-highlight-elements",slug:"/highlight-elements/65-highlight-elements-ruby",permalink:"/elemental-next/docs/highlight-elements/65-highlight-elements-ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/65-highlight-elements/ruby.md",tags:[{label:"guest post",permalink:"/elemental-next/docs/tags/guest-post"},{label:"highlight",permalink:"/elemental-next/docs/tags/highlight"},{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"locators",permalink:"/elemental-next/docs/tags/locators"}],version:"current",frontMatter:{title:"65: Highlight Elements",id:"65-highlight-elements-ruby",contentUrl:"docs/highlight-elements/65-highlight-elements-ruby",sidebar_label:"Ruby",text:"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?",number:65,hide_table_of_contents:!0,publish_date:"2014-09-11T00:00:00.000Z",last_update:{date:"2023-03-06T00:00:00.000Z"},tags:["guest post","highlight","javascript","locators"],level:2,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/elemental-next/docs/highlight-elements/python/"},next:{title:"Ruby",permalink:"/elemental-next/docs/blacklist/66-blacklist-ruby"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],h={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-visually-verify-your-locators"},"How to Visually Verify Your Locators"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is a pseudo guest post from Brian Goad. I've adapted one of his blog posts with his permission. You can see the original blog post ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/"},"here"),".")),(0,a.kt)("p",null,"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want."),(0,a.kt)("p",null,"Let's take a look at an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"For our initial setup let's pull in the ",(0,a.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," gem and wire up some simple ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: highlight.rb\n\nrequire 'selenium-webdriver'\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,a.kt)("p",null,"Now let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"highlight")," helper method that will accept a Selenium WebDriver ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," and a time to wait (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"duration"),") as arguments."),(0,a.kt)("p",null,"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a default (e.g., 3 seconds)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'def highlight(element, duration = 3)\n\n  # store original style so it can be reset later\n  original_style = element.attribute("style")\n\n  # style element with yellow border\n  @driver.execute_script(\n    "arguments[0].setAttribute(arguments[1], arguments[2])",\n    element,\n    "style",\n    "border: 2px solid red; border-style: dashed;")\n\n  # keep element highlighted for a spell and then revert\n  if duration > 0\n    sleep duration\n    @driver.execute_script(\n      "arguments[0].setAttribute(arguments[1], arguments[2])",\n      element,\n      "style",\n      original_style)\n  end\n\nend\n')),(0,a.kt)("p",null,"There are three things going on here."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We store the style of the element so we can revert it back when we're done"),(0,a.kt)("li",{parentName:"ol"},"We change the style of the element so it visually stands out (e.g., a red dashed border)"),(0,a.kt)("li",{parentName:"ol"},"We revert the style of the element back after 3 seconds")),(0,a.kt)("p",null,"We're accomplishing the style change through JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttribute")," function. And we're executing it with Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},"execute_script")," command."),(0,a.kt)("p",null,"Now to use this in our test is simple, we just prepend a ",(0,a.kt)("inlineCode",{parentName:"p"},"find_element")," action with the ",(0,a.kt)("inlineCode",{parentName:"p"},"highlight")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/large'\n  highlight @driver.find_element(id: 'sibling-2.3')\nend\n")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"If you were to save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby highlight.rb")," from the command-line), here is what you would see."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Load the page"),(0,a.kt)("li",{parentName:"ol"},"Find the element"),(0,a.kt)("li",{parentName:"ol"},"Change the styling of the element so it has a red dashed-line border"),(0,a.kt)("li",{parentName:"ol"},"Wait 3 seconds"),(0,a.kt)("li",{parentName:"ol"},"Revert the styling to remove the border")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"If you wanted to take this a step further, you could leverage this approach along with an interactive debugger. You can read more about how to do that ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/14-interactive-prompts-revisited"},"here in Brian's other guest post"),"==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,a.kt)("p",null,"Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/verifying-locators"},"here in this previous tip"),"==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"You can follow Brian on Twitter at ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"@bbbco"),"."))}d.isMDXComponent=!0}}]);