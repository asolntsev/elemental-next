(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8485],{25033:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(85893),n=a(11151),o=a(52063);const i={title:"Build An Interactive Prompt",id:"11-build-an-interactive-prompt",slug:"/11-build-an-interactive-prompt",sidebar_label:"Build An Interactive Prompt",text:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.",number:11,hide_table_of_contents:!0,level:2,publish_date:new Date("2013-08-06T00:00:00.000Z"),tags:["repl","debugging"],category:["troubleshooting"]},s="Building an Interactive Prompt",l={id:"build-an-interactive-prompt/11-build-an-interactive-prompt",title:"Build An Interactive Prompt",description:"Intro",source:"@site/tips/11-build-an-interactive-prompt/main.mdx",sourceDirName:"11-build-an-interactive-prompt",slug:"/11-build-an-interactive-prompt",permalink:"/tips/11-build-an-interactive-prompt",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/11-build-an-interactive-prompt/main.mdx",tags:[{label:"repl",permalink:"/tips/tags/repl"},{label:"debugging",permalink:"/tips/tags/debugging"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1707663476,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{title:"Build An Interactive Prompt",id:"11-build-an-interactive-prompt",slug:"/11-build-an-interactive-prompt",sidebar_label:"Build An Interactive Prompt",text:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate, it becomes challenging to work through it to completion.",number:11,hide_table_of_contents:!0,level:2,publish_date:"2013-08-06T00:00:00.000Z",tags:["repl","debugging"],category:["troubleshooting"]},sidebar:"defaultSidebar",previous:{title:"Retry Test Actions",permalink:"/tips/10-retry-test-actions"},next:{title:"Opt Out of AB Tests",permalink:"/tips/12-opt-out-of-ab-tests"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"building-an-interactive-prompt",children:"Building an Interactive Prompt"}),"\n",(0,r.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,r.jsx)(t.p,{children:"Working with Selenium straight in code has its advantages. However, if you run into a complicated scenario to automate,\nit becomes challenging to work through it to completion."}),"\n",(0,r.jsx)(t.p,{children:"The typical approach is to walk through the scenario manually and inspect its markup, identify the parts you want to\ninteract with, write up the test script, run it, and watch it. If it passes, then pat yourself on the back. If it\nfails, make some tweaks and run it again -- repeating until it passes."}),"\n",(0,r.jsx)(t.p,{children:"This is a real pain, and it's even more frustrating when debugging tests that fail intermittently."}),"\n",(0,r.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,r.jsx)(t.p,{children:"One way to simplify things, and make it easier for testers to transition from Selenium IDE, is to build an interactive\nprompt -- also known as a read-eval-print-loop (REPL)."}),"\n",(0,r.jsx)(t.p,{children:"Upon loading the prompt it will launch a browser and accept Selenium commands just the same as they are written in\ntest code. And if a command is issued that errors (or that it doesn't recognize) the prompt will provide that\ninformation and continue to function."}),"\n",(0,r.jsx)(t.p,{children:"This will enable us to continue through specific Selenium actions and locators to verify that they work before\nputting them into test code."}),"\n","\n","\n",(0,r.jsx)(o.Z,{contentPath:"11-build-an-interactive-prompt",languages:[{label:"Ruby",value:"ruby"}]}),"\n",(0,r.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,r.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,r.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},52063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var r=a(67294),n=a(36905),o=a(12466),i=a(16550),s=a(20469),l=a(91980),d=a(67392),u=a(50012);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,c]=p({queryString:a,groupId:n}),[b,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),w=(()=>{const e=d??b;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,o]),tabValues:o}}var x=a(72389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=s[a].value;n!==r&&(d(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...o,className:(0,n.Z)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,n.Z)("tabs-container",w.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(_,{...e,...t})]})}function y(e){const t=(0,x.Z)();return(0,f.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:r}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,n.Z)(k.tabItem,r),hidden:a,children:t})}const I=function(e){let{contentPath:t,languages:n}=e;const[o,i]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(n.map((async e=>{const n=(0,r.lazy)((()=>a(32515)(`./${t}/_${e.value}.mdx`)));return{label:e.label,component:n}})));i(e)})()}),[t,n]),(0,f.jsx)("div",{children:o.length>0&&(0,f.jsx)(y,{children:o.map(((e,t)=>(0,f.jsx)(j,{value:e.label,label:e.label,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},32515:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[81336,532,9286,1336],"./1-upload-a-file/_java.mdx":[51267,1267],"./1-upload-a-file/_javascript.mdx":[83910,532,9286,3910],"./1-upload-a-file/_python.mdx":[87785,532,9286,7785],"./1-upload-a-file/_ruby.mdx":[46948,532,9286,6948],"./10-retry-test-actions/_ruby.mdx":[47238,7238],"./11-build-an-interactive-prompt/_ruby.mdx":[86332,6332],"./12-opt-out-of-ab-tests/_csharp.mdx":[51909,1909],"./12-opt-out-of-ab-tests/_java.mdx":[303,303],"./12-opt-out-of-ab-tests/_javascript.mdx":[72545,2545],"./12-opt-out-of-ab-tests/_python.mdx":[35926,5926],"./12-opt-out-of-ab-tests/_ruby.mdx":[59355,7054],"./13-how-to-access-basic-auth/_csharp.mdx":[56189,6189],"./13-how-to-access-basic-auth/_java.mdx":[78885,8885],"./13-how-to-access-basic-auth/_javascript.mdx":[98046,8046],"./13-how-to-access-basic-auth/_python.mdx":[82879,2879],"./13-how-to-access-basic-auth/_ruby.mdx":[57696,7696],"./14-interactive-prompts-revisited/_ruby.mdx":[26490,6490],"./15-download-secure-files/_ruby.mdx":[20181,181],"./16-take-screenshot-on-failure/_csharp.mdx":[41612,1612],"./16-take-screenshot-on-failure/_java.mdx":[6660,6660],"./16-take-screenshot-on-failure/_javascript.mdx":[59783,9783],"./16-take-screenshot-on-failure/_python.mdx":[14271,4271],"./16-take-screenshot-on-failure/_ruby.mdx":[99283,9283],"./17-retrieve-http-status-codes/_ruby.mdx":[74501,4501],"./19-data-driven-testing/_ruby.mdx":[5870,5870],"./2-download-a-file/_csharp.mdx":[62046,2046],"./2-download-a-file/_java.mdx":[5789,5789],"./2-download-a-file/_javascript.mdx":[72856,2856],"./2-download-a-file/_python.mdx":[68401,8401],"./2-download-a-file/_ruby.mdx":[97085,7085],"./22-locator-strategy/_ruby.mdx":[88555,8555],"./23-dynamic-pages/_ruby.mdx":[42068,2068],"./24-rest-apis/_ruby.mdx":[16864,6864],"./25-how-to-work-with-tables/_csharp.mdx":[24335,4335],"./25-how-to-work-with-tables/_java.mdx":[60821,821],"./25-how-to-work-with-tables/_javascript.mdx":[28917,8917],"./25-how-to-work-with-tables/_python.mdx":[16062,6062],"./25-how-to-work-with-tables/_ruby.mdx":[19554,9554],"./26-cloud/_ruby.mdx":[73304,3304],"./27-parallel/_ruby.mdx":[28918,1685],"./29-chrome-driver/_csharp.mdx":[16716,6716],"./29-chrome-driver/_java.mdx":[60382,382],"./29-chrome-driver/_python.mdx":[32248,2248],"./29-chrome-driver/_ruby.mdx":[4860,4860],"./3-work-with-frames/_csharp.mdx":[62113,2113],"./3-work-with-frames/_java.mdx":[29966,9966],"./3-work-with-frames/_javascript.mdx":[24022,4022],"./3-work-with-frames/_python.mdx":[80940,940],"./3-work-with-frames/_ruby.mdx":[51205,1205],"./30-mobile/_ruby.mdx":[48808,8808],"./32-css-vs-xpath/_ruby.mdx":[39760,9760],"./33-css-vs-xpath-2/_ruby.mdx":[12061,2061],"./34-css-vs-xpath-3/_ruby.mdx":[44200,4200],"./38-headless/_ruby.mdx":[81010,1010],"./39-drag-and-drop/_ruby.mdx":[36393,6393],"./4-work-with-multiple-windows/_csharp.mdx":[94990,4990],"./4-work-with-multiple-windows/_java.mdx":[48910,8910],"./4-work-with-multiple-windows/_javascript.mdx":[58167,8167],"./4-work-with-multiple-windows/_python.mdx":[74493,6342],"./4-work-with-multiple-windows/_ruby.mdx":[50610,610],"./40-disabled-element/_csharp.mdx":[44881,4881],"./40-disabled-element/_java.mdx":[2893,2893],"./40-disabled-element/_javascript.mdx":[41687,1687],"./40-disabled-element/_python.mdx":[93311,3311],"./40-disabled-element/_ruby.mdx":[7352,7352],"./41-one-test-multiple-browsers/_ruby.mdx":[96651,6651],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[66449,6449],"./43-forgot-password/_ruby.mdx":[60579,579],"./44-exception-handling/_ruby.mdx":[64181,4181],"./45-how-to-test-checkboxes/_csharp.mdx":[17873,7873],"./45-how-to-test-checkboxes/_java.mdx":[53059,3059],"./45-how-to-test-checkboxes/_javascript.mdx":[2503,2503],"./45-how-to-test-checkboxes/_python.mdx":[67012,7012],"./45-how-to-test-checkboxes/_ruby.mdx":[21883,1883],"./47-waiting/_ruby.mdx":[19762,9762],"./48-load-testing/_ruby.mdx":[43553,3553],"./49-performance-testing/_ruby.mdx":[37023,7023],"./5-select-from-a-dropdown/_csharp.mdx":[12271,2271],"./5-select-from-a-dropdown/_java.mdx":[69566,9566],"./5-select-from-a-dropdown/_javascript.mdx":[70700,700],"./5-select-from-a-dropdown/_python.mdx":[37112,7112],"./5-select-from-a-dropdown/_ruby.mdx":[27820,7820],"./50-how-to-work-with-hovers/_csharp.mdx":[73102,3102],"./50-how-to-work-with-hovers/_java.mdx":[20866,866],"./50-how-to-work-with-hovers/_javascript.mdx":[31253,1253],"./50-how-to-work-with-hovers/_python.mdx":[27177,7177],"./50-how-to-work-with-hovers/_ruby.mdx":[56559,6559],"./51-how-to-work-with-javascript-alerts/_csharp.mdx":[78176,8176],"./51-how-to-work-with-javascript-alerts/_java.mdx":[91506,1506],"./51-how-to-work-with-javascript-alerts/_javascript.mdx":[26049,5194],"./51-how-to-work-with-javascript-alerts/_python.mdx":[73087,3087],"./51-how-to-work-with-javascript-alerts/_ruby.mdx":[6913,6913],"./52-grid/_java.mdx":[76471,6471],"./52-grid/_javascript.mdx":[64761,4761],"./52-grid/_python.mdx":[55454,5454],"./52-grid/_ruby.mdx":[59811,9811],"./53-growl/_csharp.mdx":[85762,5762],"./53-growl/_java.mdx":[66789,6789],"./53-growl/_javascript.mdx":[31447,1447],"./53-growl/_python.mdx":[71240,1240],"./53-growl/_ruby.mdx":[45299,5299],"./54-logging/_ruby.mdx":[24223,4223],"./55-wrapper/_ruby.mdx":[12748,7266],"./56-retry-failed-tests/_ruby.mdx":[56707,6707],"./57-junit-xml/_ruby.mdx":[19318,9318],"./58-tagging/_ruby.mdx":[75043,5043],"./60-list-tags/_ruby.mdx":[62354,2354],"./61-how-to-press-keyboard-keys/_csharp.mdx":[49625,9625],"./61-how-to-press-keyboard-keys/_java.mdx":[72079,2079],"./61-how-to-press-keyboard-keys/_javascript.mdx":[91248,1248],"./61-how-to-press-keyboard-keys/_python.mdx":[32349,2349],"./61-how-to-press-keyboard-keys/_ruby.mdx":[10949,949],"./63-right-click/_csharp.mdx":[99510,9510],"./63-right-click/_java.mdx":[44993,4993],"./63-right-click/_javascript.mdx":[69683,9683],"./63-right-click/_python.mdx":[42066,2066],"./63-right-click/_ruby.mdx":[17828,7828],"./64-limit-bandwidth/_ruby.mdx":[98399,8399],"./65-highlight-elements/_csharp.mdx":[88076,8076],"./65-highlight-elements/_java.mdx":[66872,6872],"./65-highlight-elements/_javascript.mdx":[91228,1228],"./65-highlight-elements/_python.mdx":[46034,6034],"./65-highlight-elements/_ruby.mdx":[99272,518],"./66-blacklist/_ruby.mdx":[78685,8685],"./67-broken-images/_ruby.mdx":[23671,3671],"./68-load-testing-revisited/_ruby.mdx":[21588,1588],"./69-safari/_java.mdx":[2263,2263],"./69-safari/_ruby.mdx":[22163,2163],"./7-use-a-page-object/_ruby.mdx":[30586,586],"./72-headless-chrome/_ruby.mdx":[94955,4955],"./73-open-new-window/_java.mdx":[62882,2882],"./73-open-new-window/_ruby.mdx":[20066,66],"./8-download-a-file-revisited/_csharp.mdx":[65065,5065],"./8-download-a-file-revisited/_java.mdx":[12062,2062],"./8-download-a-file-revisited/_python.mdx":[11190,1190],"./8-download-a-file-revisited/_ruby.mdx":[57369,7369],"./9-use-a-base-page-object/_ruby.mdx":[33955,3955]};function n(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(n)))}n.keys=()=>Object.keys(r),n.id=32515,e.exports=n},11151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s,a:()=>i});var r=a(67294);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);