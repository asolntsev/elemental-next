(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2130],{3492:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=a(5893),r=a(1151),o=a(2063);const n={title:"REST APIs",id:"24-rest-apis",slug:"/24-rest-apis",sidebar_label:"REST APIs",text:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",number:24,hide_table_of_contents:!0,level:2,publish_date:"2013-11-5",tags:["REST APIs","test setup","guest post"],category:["fundamentals"]},i="Fast and Reliable Test Setup with REST APIs",l={id:"rest-apis/24-rest-apis",title:"REST APIs",description:"Intro",source:"@site/tips/24-rest-apis/main.mdx",sourceDirName:"24-rest-apis",slug:"/24-rest-apis",permalink:"/tips/24-rest-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/24-rest-apis/main.mdx",tags:[{label:"REST APIs",permalink:"/tips/tags/rest-ap-is"},{label:"test setup",permalink:"/tips/tags/test-setup"},{label:"guest post",permalink:"/tips/tags/guest-post"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1706617054,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{title:"REST APIs",id:"24-rest-apis",slug:"/24-rest-apis",sidebar_label:"REST APIs",text:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",number:24,hide_table_of_contents:!0,level:2,publish_date:"2013-11-5",tags:["REST APIs","test setup","guest post"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"Dynamic Pages",permalink:"/tips/23-dynamic-pages"},next:{title:"How To Work With Tables",permalink:"/tips/25-tables"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"fast-and-reliable-test-setup-with-rest-apis",children:"Fast and Reliable Test Setup with REST APIs"}),"\n",(0,s.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsxs)(t.p,{children:["This is a guest post from Robert Schultheis, a Test Engineer at ",(0,s.jsx)(t.a,{href:"http://www.knewton.com/",children:"Knewton"})," who is doing great things with REST\nAPIs in his testing practice"]}),"\n",(0,s.jsx)(t.p,{children:'When we list out the properties that make a test a "good test", some things that often come up are:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Precise."})," The test should test one thing, and one thing only. A bug in some part of the application that is\nunrelated to the test should not cause the test to fail."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Independent."})," A test should not have it's outcome affected by any other test in the test suite."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fast."})," This doesn't need much explanation. The quicker a test suite runs, the more useful it is."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Of course there are many other properties that might be included in such a list, but I mention these specifically\nbecause they can be particularly challenging to achieve in a Selenium test suite. The reason for this is that Selenium\ntests often involve setups that may include a sign-up, a login, some navigation, form submission, or other\ninteractions with a website. Only after doing those things are you ready to assert on some aspect of the website.\nIf you confine your tests to only being allowed to interact with the website, there is little that can be done to\nalleviate this issue."}),"\n",(0,s.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,s.jsx)(t.p,{children:"REST APIs are increasingly common in the backends of newer websites. If you are fortunate enough to have such an\narchitecture in the site you are testing it may make sense to make use of those REST APIs in your Selenium test suite.\nBy using calls to the REST APIs in the backend to perform parts of a test setup, and using Selenium to perform the\nassertion within the website normally, we can end up with tests that are faster, more focused, and more reliable."}),"\n",(0,s.jsx)(t.p,{children:"REST APIs are based on the HTTP protocol, which is the same protocol that powers essentially the entire internet.\nNearly every modern programming language has libraries that can be used to make HTTP requests, thus we can add\nsupport for calling into REST APIs to virtually any test suite."}),"\n","\n","\n",(0,s.jsx)(o.Z,{contentPath:"24-rest-apis",languages:[{label:"Ruby",value:"ruby"}]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>T});var s=a(7294),r=a(6905),o=a(2466),n=a(6550),i=a(469),l=a(1980),d=a(7392),u=a(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:r}}=e;return{value:t,label:a,attributes:s,default:r}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,n.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[n,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[d,h]=p({queryString:a,groupId:r}),[b,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,s.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=d??b;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:n,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),w(e)}),[h,w,o]),tabValues:o}}var w=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=a(5893);function y(e){let{className:t,block:a,selectedValue:s,selectValue:n,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==s&&(d(t),n(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...o,className:(0,r.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,_.jsx)(y,{...e,...t}),(0,_.jsx)(g,{...e,...t})]})}function k(e){const t=(0,w.Z)();return(0,_.jsx)(v,{...e,children:h(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:a,className:s}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,r.Z)(j.tabItem,s),hidden:a,children:t})}const T=function(e){let{contentPath:t,languages:r}=e;const[o,n]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{const e=await Promise.all(r.map((async e=>{const r=(0,s.lazy)((()=>a(3726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:r}})));n(e)})()}),[t,r]),(0,_.jsx)("div",{children:o.length>0&&(0,_.jsx)(k,{children:o.map(((e,t)=>(0,_.jsx)(x,{value:e.label,label:e.label,children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},3726:(e,t,a)=>{var s={"./1-upload-a-file/_csharp.md":[2732,2732],"./1-upload-a-file/_java.md":[7771,7771],"./1-upload-a-file/_javascript.md":[6241,6241],"./1-upload-a-file/_python.md":[2074,2074],"./1-upload-a-file/_ruby.md":[7888,7888],"./10-retry-test-actions/_ruby.md":[3759,3759],"./11-build-an-interactive-prompt/_ruby.md":[5744,5744],"./12-opt-out-of-ab-tests/_csharp.md":[8392,8392],"./12-opt-out-of-ab-tests/_java.md":[8849,8849],"./12-opt-out-of-ab-tests/_javascript.md":[5707,5707],"./12-opt-out-of-ab-tests/_python.md":[2918,2918],"./12-opt-out-of-ab-tests/_ruby.md":[4278,4278],"./13-how-to-access-basic-auth/_csharp.md":[230,230],"./13-how-to-access-basic-auth/_java.md":[6037,6037],"./13-how-to-access-basic-auth/_javascript.md":[3993,3993],"./13-how-to-access-basic-auth/_python.md":[2097,2097],"./13-how-to-access-basic-auth/_ruby.md":[3364,3364],"./14-interactive-prompts-revisited/_ruby.md":[5844,5844],"./15-download-secure-files/_ruby.md":[7069,7069],"./16-take-screenshot-on-failure/_csharp.md":[8471,3864],"./16-take-screenshot-on-failure/_java.md":[5337,5337],"./16-take-screenshot-on-failure/_javascript.md":[6077,6077],"./16-take-screenshot-on-failure/_python.md":[8641,8641],"./16-take-screenshot-on-failure/_ruby.md":[784,784],"./17-retrieve-http-status-codes/_ruby.md":[8258,8258],"./19-data-driven-testing/_ruby.md":[6681,6681],"./2-download-a-file/_csharp.md":[607,607],"./2-download-a-file/_java.md":[1021,1021],"./2-download-a-file/_javascript.md":[8296,8296],"./2-download-a-file/_python.md":[9873,9873],"./2-download-a-file/_ruby.md":[6194,6194],"./22-locator-strategy/_ruby.md":[6350,6350],"./23-dynamic-pages/_ruby.md":[1994,1994],"./24-rest-apis/_ruby.md":[5185,5185],"./25-how-to-work-with-tables/_csharp.md":[3985,3985],"./25-how-to-work-with-tables/_java.md":[8253,8253],"./25-how-to-work-with-tables/_javascript.md":[8833,8833],"./25-how-to-work-with-tables/_python.md":[8670,8670],"./25-how-to-work-with-tables/_ruby.md":[3978,3978],"./26-cloud/_ruby.md":[439,6948],"./27-parallel/_ruby.md":[8154,8154],"./29-chrome-driver/_csharp.md":[939,939],"./29-chrome-driver/_java.md":[5923,5923],"./29-chrome-driver/_python.md":[3128,3128],"./29-chrome-driver/_ruby.md":[9635,9635],"./3-work-with-frames/_csharp.md":[7623,7623],"./3-work-with-frames/_java.md":[929,929],"./3-work-with-frames/_javascript.md":[8925,8925],"./3-work-with-frames/_python.md":[4909,4909],"./3-work-with-frames/_ruby.md":[2683,2683],"./30-mobile/_ruby.md":[2272,2272],"./32-css-vs-xpath/_ruby.md":[1460,1460],"./33-css-vs-xpath-2/_ruby.md":[6713,6713],"./34-css-vs-xpath-3/_ruby.md":[3654,3654],"./38-headless/_ruby.md":[5171,5171],"./39-drag-and-drop/_ruby.md":[4806,4806],"./4-work-with-multiple-windows/_csharp.md":[4584,4584],"./4-work-with-multiple-windows/_java.md":[7636,7636],"./4-work-with-multiple-windows/_javascript.md":[3138,5068],"./4-work-with-multiple-windows/_python.md":[9518,9518],"./4-work-with-multiple-windows/_ruby.md":[6724,6724],"./40-disabled-element/_csharp.md":[7117,4960],"./40-disabled-element/_java.md":[5705,5705],"./40-disabled-element/_javascript.md":[6486,6486],"./40-disabled-element/_python.md":[909,909],"./40-disabled-element/_ruby.md":[1979,1979],"./41-one-test-multiple-browsers/_ruby.md":[7551,7551],"./42-one-test-multiple-browsers-parallel/_ruby.md":[5847,5847],"./43-forgot-password/_ruby.md":[6787,6787],"./44-exception-handling/_ruby.md":[2742,2742],"./45-how-to-test-checkboxes/_csharp.md":[8186,8186],"./45-how-to-test-checkboxes/_java.md":[9815,9815],"./45-how-to-test-checkboxes/_javascript.md":[6842,6842],"./45-how-to-test-checkboxes/_python.md":[8226,8226],"./45-how-to-test-checkboxes/_ruby.md":[6924,6924],"./47-waiting/_ruby.md":[3523,3523],"./48-load-testing/_ruby.md":[8295,8295],"./49-performance-testing/_ruby.md":[7951,7951],"./5-select-from-a-dropdown/_csharp.md":[4593,4593],"./5-select-from-a-dropdown/_java.md":[5097,5097],"./5-select-from-a-dropdown/_javascript.md":[7583,8011],"./5-select-from-a-dropdown/_python.md":[2465,2465],"./5-select-from-a-dropdown/_ruby.md":[4724,4724],"./50-how-to-work-with-hovers/_csharp.md":[966,966],"./50-how-to-work-with-hovers/_java.md":[1070,1070],"./50-how-to-work-with-hovers/_javascript.md":[8986,8986],"./50-how-to-work-with-hovers/_python.md":[2522,2522],"./50-how-to-work-with-hovers/_ruby.md":[5158,5158],"./51-how-to-work-with-javascript-alerts/_csharp.md":[8139,8139],"./51-how-to-work-with-javascript-alerts/_java.md":[4807,4807],"./51-how-to-work-with-javascript-alerts/_javascript.md":[3488,3488],"./51-how-to-work-with-javascript-alerts/_python.md":[7350,7350],"./51-how-to-work-with-javascript-alerts/_ruby.md":[7318,7318],"./52-grid/_java.md":[6656,6656],"./52-grid/_javascript.md":[8417,8417],"./52-grid/_python.md":[7526,7526],"./52-grid/_ruby.md":[7011,7011],"./53-growl/_csharp.md":[6608,6608],"./53-growl/_java.md":[3311,3311],"./53-growl/_javascript.md":[3835,3835],"./53-growl/_python.md":[1378,1378],"./53-growl/_ruby.md":[2581,2581],"./54-logging/_ruby.md":[4297,4297],"./55-wrapper/_ruby.md":[5756,5756],"./56-retry-failed-tests/_ruby.md":[9764,6292],"./57-junit-xml/_ruby.md":[7795,7795],"./58-tagging/_ruby.md":[1059,1059],"./60-list-tags/_ruby.md":[1966,1966],"./61-how-to-press-keyboard-keys/_csharp.md":[1750,1750],"./61-how-to-press-keyboard-keys/_java.md":[3233,3233],"./61-how-to-press-keyboard-keys/_javascript.md":[5732,5732],"./61-how-to-press-keyboard-keys/_python.md":[3449,3449],"./61-how-to-press-keyboard-keys/_ruby.md":[4931,4931],"./63-right-click/_csharp.md":[1385,8817],"./63-right-click/_java.md":[2414,2414],"./63-right-click/_javascript.md":[280,9764],"./63-right-click/_python.md":[2969,2969],"./63-right-click/_ruby.md":[6018,6018],"./64-limit-bandwidth/_ruby.md":[4015,4015],"./65-highlight-elements/_csharp.md":[7468,7468],"./65-highlight-elements/_java.md":[5457,5457],"./65-highlight-elements/_javascript.md":[709,709],"./65-highlight-elements/_python.md":[1974,1974],"./65-highlight-elements/_ruby.md":[5206,5206],"./66-blacklist/_ruby.md":[4998,4998],"./67-broken-images/_ruby.md":[2098,2098],"./68-load-testing-revisited/_ruby.md":[332,2703],"./69-safari/_java.md":[5388,5388],"./69-safari/_ruby.md":[7596,7596],"./7-use-a-page-object/_ruby.md":[8758,8758],"./72-headless-chrome/_ruby.md":[7138,7138],"./73-open-new-window/_java.md":[3447,3447],"./73-open-new-window/_ruby.md":[9565,9565],"./8-download-a-file-revisited/_csharp.md":[4088,7117],"./8-download-a-file-revisited/_java.md":[8442,8442],"./8-download-a-file-revisited/_python.md":[3794,3794],"./8-download-a-file-revisited/_ruby.md":[1170,1170],"./9-use-a-base-page-object/_ruby.md":[2555,2555]};function r(e){if(!a.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],r=t[0];return a.e(t[1]).then((()=>a(r)))}r.keys=()=>Object.keys(s),r.id=3726,e.exports=r},1151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,a:()=>n});var s=a(7294);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);