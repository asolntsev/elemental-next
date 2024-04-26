"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[1559],{76363:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=o(74848),s=o(28453);const i={title:"How To Figure Out What to Test",id:"18-what-to-test",slug:"/18-what-to-test",sidebar_label:"How To Figure Out What to Test",description:"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?",number:18,hide_table_of_contents:!0,publish_date:new Date("2015-10-13T00:00:00.000Z"),tags:["test strategy"],level:1,category:["fundamentals"]},a="How to Figure Out What to Test",r={id:"how-to-figure-out-what-to-test/18-what-to-test",title:"How To Figure Out What to Test",description:"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?",source:"@site/tips/18-how-to-figure-out-what-to-test/main.mdx",sourceDirName:"18-how-to-figure-out-what-to-test",slug:"/18-what-to-test",permalink:"/tips/18-what-to-test",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/18-how-to-figure-out-what-to-test/main.mdx",tags:[{label:"test strategy",permalink:"/tips/tags/test-strategy"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1714078257e3,frontMatter:{title:"How To Figure Out What to Test",id:"18-what-to-test",slug:"/18-what-to-test",sidebar_label:"How To Figure Out What to Test",description:"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already started, how do you know you're on the right track? And how do you avoid testing everything in every browser without missing important issues?",number:18,hide_table_of_contents:!0,publish_date:"2015-10-13T00:00:00.000Z",tags:["test strategy"],level:1,category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"Retrieve HTTP Status Codes",permalink:"/tips/17-retrieve-http-status-codes"},next:{title:"Data Driven Testing",permalink:"/tips/19-data-driven-testing"}},u={},h=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"What To Do With The Answers",id:"what-to-do-with-the-answers",level:2},{value:"Question 1 - Money/Value",id:"question-1---moneyvalue",level:3},{value:"Question 2 - Usage Data",id:"question-2---usage-data",level:3},{value:"Question 3 - Browsers",id:"question-3---browsers",level:3},{value:"Question 4 - Risky Bits",id:"question-4---risky-bits",level:3},{value:"Now You Are Ready",id:"now-you-are-ready",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}];function l(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-figure-out-what-to-test",children:"How to Figure Out What to Test"}),"\n",(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(t.p,{children:"There is a lot to figure out when it comes to automated web testing, but where do you start? If you've already\nstarted, how do you know you're on the right track? And how do you avoid testing everything in every browser\nwithout missing important issues?"}),"\n",(0,n.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,n.jsx)(t.p,{children:"A great way to increase your chances of automated web testing success is to map out a testing strategy. The best\nway to do this is to answer these four questions:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"How does your business make money?"}),"\n",(0,n.jsx)(t.li,{children:"How do your users use your application?"}),"\n",(0,n.jsx)(t.li,{children:"What browsers are your users using?"}),"\n",(0,n.jsx)(t.li,{children:"What things have broken in the application before?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["NOTE: for organizations that don't deal ",(0,n.jsx)(t.em,{children:"directly"})," in dollars and cents (e.g. non-profits, federal agencies,\netc.) you should focus on how the application generates value for the end user."]})}),"\n",(0,n.jsx)(t.p,{children:"After answering these questions you'll have a better understanding of the critical functionality and relevant\nbrowsers for the application you're testing. This will help you focus your test automation efforts on the things\nthat matter most."}),"\n",(0,n.jsx)(t.p,{children:"You'll want to keep track of these items somehow -- the recommended approach is to use a prioritized backlog."}),"\n",(0,n.jsx)(t.h2,{id:"what-to-do-with-the-answers",children:"What To Do With The Answers"}),"\n",(0,n.jsx)(t.h3,{id:"question-1---moneyvalue",children:"Question 1 - Money/Value"}),"\n",(0,n.jsx)(t.p,{children:"Every company's application makes money (or generates value) through a core set of functionality -- a.k.a. a\n'funnel'. Your answers to this question will help you determine what functionality makes up the funnel. This will\nbe your highest priority for test automation."}),"\n",(0,n.jsx)(t.h3,{id:"question-2---usage-data",children:"Question 2 - Usage Data"}),"\n",(0,n.jsx)(t.p,{children:"There can be a big difference between how you think your application is used  and how your users actually use it.\nOdds are your application offers a robust set of functionality that grows well beyond the core functionality of\nthe funnel."}),"\n",(0,n.jsx)(t.p,{children:"Your answers to this question will help you determine what features are highly used and lightly used. Add the\nhighly used items onto your automation backlog based on order of use below the answers to question 1."}),"\n",(0,n.jsx)(t.h3,{id:"question-3---browsers",children:"Question 3 - Browsers"}),"\n",(0,n.jsx)(t.p,{children:"Now that you know what functionality is business critical and widely adopted by your users, you need to determine\nwhat browsers to focus your automated web testing efforts on. Your usage data will tell you this as well. It will\nhelp you determine which browsers you can reasonably avoid testing in (e.g. based on non-existent or low usage numbers)."}),"\n",(0,n.jsx)(t.p,{children:"Note the top 2 browsers (or 3 depending on your numbers), but focus on the top 1 for now. This is the browser you\nwill start writing your automated tests in."}),"\n",(0,n.jsx)(t.h3,{id:"question-4---risky-bits",children:"Question 4 - Risky Bits"}),"\n",(0,n.jsx)(t.p,{children:"To round out the strategy it is best to think about what things have broken in the application before. You might be\nable to glean some of this information from a defect tracker but the best information is often in the minds of your\ncolleagues. Ask around and see what they say."}),"\n",(0,n.jsx)(t.p,{children:"What you come up with will likely read like a laundry list of browser specific issues or functionality that has been\nflaky or forgotten about in the past. Be sure to check this list against your automation backlog. If you've come\nacross something that's not already in the backlog, add it and put it at the bottom. If it is there, make a note\nin the backlog item that this has been an issue in the past. If the issue has happened numerous times and has the\npotential to occur again, move the item up in the backlog priority."}),"\n",(0,n.jsx)(t.p,{children:"If issues keep cropping up that are related to a specific browser, compare this browser to your short list from\nquestion #3. If it's a browser that's not in your list, but it's a small pocket of high value users, track it on\nthe backlog but put it at the bottom."}),"\n",(0,n.jsx)(t.h2,{id:"now-you-are-ready",children:"Now You Are Ready"}),"\n",(0,n.jsx)(t.p,{children:"Having answered these questions you should now have a prioritized backlog of critical functionality that's backed\nup by usage data, a short list of browsers to focus on, and an understanding of the risky parts of your application.\nWith it, you can make sure you are on the right track with your test automation (regardless if you're just getting\nstarted with test automation or already have a mature test automation practice)."}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Hopefully this strategy will help you focus your testing efforts, avoid wasting time, and increase your confidence\nin the approach you are taking."}),"\n",(0,n.jsx)(t.p,{children:"This strategy works best for applications with existing functionality and does not speak directly to testing new\nfunctionality that's being actively developed. That's not to say that the two could not co-exist. It largely depends\non your available resources and pace of development but in order to reach high quality at speed, you first have\nto go slow."}),"\n",(0,n.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,n.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,n.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:o(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},59278:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);