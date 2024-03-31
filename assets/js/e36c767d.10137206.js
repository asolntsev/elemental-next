(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[9320],{14608:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=a(74848),r=a(28453),o=a(54152);const n={title:"CSS vs. XPath 3",id:"34-css-vs-xpath-3",slug:"/34-css-vs-xpath-3",sidebar_label:"CSS vs. Xpath 3",description:"In the last tip I provided benchmarks that showed XPath and CSS performance across various browsers. Since then I've received feedback on some things that my test was missing -- most notably more browser coverage and testing against a larger and deeper page.",hide_table_of_contents:!0,number:34,publish_date:new Date("2014-01-21T00:00:00.000Z"),tags:["selectors","xpath","css","css selectors","locators","locator strategy"],level:2,category:["resources"]},l="CSS vs. XPath, Conclusion",i={id:"css-vs-xpath-3/34-css-vs-xpath-3",title:"CSS vs. XPath 3",description:"In the last tip I provided benchmarks that showed XPath and CSS performance across various browsers. Since then I've received feedback on some things that my test was missing -- most notably more browser coverage and testing against a larger and deeper page.",source:"@site/tips/34-css-vs-xpath-3/main.mdx",sourceDirName:"34-css-vs-xpath-3",slug:"/34-css-vs-xpath-3",permalink:"/tips/34-css-vs-xpath-3",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/34-css-vs-xpath-3/main.mdx",tags:[{label:"selectors",permalink:"/tips/tags/selectors"},{label:"xpath",permalink:"/tips/tags/xpath"},{label:"css",permalink:"/tips/tags/css"},{label:"css selectors",permalink:"/tips/tags/css-selectors"},{label:"locators",permalink:"/tips/tags/locators"},{label:"locator strategy",permalink:"/tips/tags/locator-strategy"}],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1711919504,formattedLastUpdatedAt:"Mar 31, 2024",frontMatter:{title:"CSS vs. XPath 3",id:"34-css-vs-xpath-3",slug:"/34-css-vs-xpath-3",sidebar_label:"CSS vs. Xpath 3",description:"In the last tip I provided benchmarks that showed XPath and CSS performance across various browsers. Since then I've received feedback on some things that my test was missing -- most notably more browser coverage and testing against a larger and deeper page.",hide_table_of_contents:!0,number:34,publish_date:"2014-01-21T00:00:00.000Z",tags:["selectors","xpath","css","css selectors","locators","locator strategy"],level:2,category:["resources"]},sidebar:"defaultSidebar",previous:{title:"CSS vs. Xpath 2",permalink:"/tips/33-css-vs-xpath-2"},next:{title:"Selenium Resources",permalink:"/tips/36-available-resources"}},d={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"css-vs-xpath-conclusion",children:"CSS vs. XPath, Conclusion"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: This is part 3 of 3. For the first installment, ",(0,s.jsx)(t.a,{href:"https://elementalselenium.com/docs/css-vs-xpath/32-css-vs-xpath",children:"go here"}),".\nFor the second installment, go ",(0,s.jsx)(t.a,{href:"https://elementalselenium.com/docs/css-vs-xpath-2/33-css-vs-xpath-2",children:"here"}),"."]})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"https://elementalselenium.com/docs/css-vs-xpath-2/33-css-vs-xpath-2",children:"the last tip"})," I provided benchmarks that\nshowed XPath and CSS performance across various browsers. Since then I've received feedback on some things that my\ntest was missing -- most notably more browser coverage (e.g., Internet Explorer 9 and 10) and testing against a\nlarger and deeper page."]}),"\n",(0,s.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,s.jsxs)(t.p,{children:["In order to make sure these benchmarks are as thorough as possible I've put together\n",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/large",children:"an example that demonstrates a large and deep page"}),", and retooled\n",(0,s.jsx)(t.a,{href:"https://github.com/diemol/selenium-benchmark/blob/master/lib/page-objects/large_dom.rb",children:"my test script"})," accordingly.\nOtherwise, everything is pretty much the same as last time (e.g., dual runs to weed out anomalies, 100 test executions\nfor time in seconds, etc.)."]}),"\n",(0,s.jsx)(t.p,{children:"Let's dig into the results."}),"\n","\n","\n",(0,s.jsx)(o.A,{languages:[{label:"Ruby",value:"ruby"}]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},62771:(e,t,a)=>{"use strict";a.d(t,{_:()=>l,u:()=>i});var s=a(96540),r=a(89532),o=a(74848);const n=s.createContext(null);function l(e){let{children:t,content:a}=e;const r=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,o.jsx)(n.Provider,{value:r,children:t})}function i(){const e=(0,s.useContext)(n);if(null===e)throw new r.dV("DocProvider");return e}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>I});var s=a(96540),r=a(34164),o=a(23104),n=a(56347),l=a(205),i=a(57485),d=a(31682),c=a(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:r}}=e;return{value:t,label:a,attributes:s,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,n.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function x(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[n,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[d,u]=p({queryString:a,groupId:r}),[x,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(a);return[r,(0,s.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=d??x;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:n,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(74848);function _(e){let{className:t,block:a,selectedValue:s,selectValue:n,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=l[a].value;r!==s&&(d(t),n(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:c,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,w.jsx)(_,{...e,...t}),(0,w.jsx)(f,{...e,...t})]})}function g(e){const t=(0,b.A)();return(0,w.jsx)(y,{...e,children:u(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:s}=e;return(0,w.jsx)("div",{role:"tabpanel",className:(0,r.A)(k.tabItem,s),hidden:a,children:t})}var S=a(62771);const I=function(e){let{languages:t}=e;const[r,o]=(0,s.useState)([]),n=(0,S.u)().frontMatter.id;return(0,s.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,s.lazy)((()=>a(36217)(`./${n}/_${e.value}.mdx`)));return{label:e.label,component:t}})));o(e)})()}),[t]),(0,w.jsx)("div",{children:r.length>0&&(0,w.jsx)(g,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,w.jsx)(j,{value:e.label,label:e.label,children:(0,w.jsx)(s.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(e.component,{})})},t)))})})}},36217:(e,t,a)=>{var s={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,1192],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,3998],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,3970],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,2047],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_selenide.mdx":[87099,1869,1432,7099],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,3715],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./4-work-with-multiple-windows/_selenide.mdx":[43848,1869,1432,3848],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./5-select-from-a-dropdown/_selenide.mdx":[76269,1869,1432,6269],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function r(e){if(!a.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(s),r.id=36217,e.exports=r},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>n,x:()=>l});var s=a(96540);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);