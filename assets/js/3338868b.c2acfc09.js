(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8602],{7634:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=a(85893),r=a(11151),n=a(52063);const i={title:"Download A File Revisited",id:"8-download-a-file-revisited",slug:"/8-download-a-file-revisited",contentUrl:"tips/download-a-file-revisited/8-download-a-file-revisited",sidebar_label:"Download A File Revisited",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-08-20T00:00:00.000Z"),tags:["files","downloading"],category:["remote"]},s="How to Download a File Without a Browser",l={id:"download-a-file-revisited/8-download-a-file-revisited",title:"Download A File Revisited",description:"Intro",source:"@site/tips/8-download-a-file-revisited/main.mdx",sourceDirName:"8-download-a-file-revisited",slug:"/8-download-a-file-revisited",permalink:"/tips/8-download-a-file-revisited",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/8-download-a-file-revisited/main.mdx",tags:[{label:"files",permalink:"/tips/tags/files"},{label:"downloading",permalink:"/tips/tags/downloading"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1706088339,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Download A File Revisited",id:"8-download-a-file-revisited",slug:"/8-download-a-file-revisited",contentUrl:"tips/download-a-file-revisited/8-download-a-file-revisited",sidebar_label:"Download A File Revisited",text:"In a previous tip we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done. While the previous method works, it requires a custom configuration that is inconsistent from browser to browser.",number:8,hide_table_of_contents:!0,level:2,publish_date:"2015-08-20T00:00:00.000Z",tags:["files","downloading"],category:["remote"]},sidebar:"defaultSidebar",previous:{title:"Use A Page Object",permalink:"/tips/7-use-a-page-object"},next:{title:"Use A Base Page Object",permalink:"/tips/9-use-a-base-page-object"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-download-a-file-without-a-browser",children:"How to Download a File Without a Browser"}),"\n",(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsxs)(t.p,{children:["In a ",(0,o.jsx)(t.a,{href:"/tips/2-download-a-file",children:"previous tip"})," we went through how to download files with Selenium by configuring the browser to download\nthem locally and verifying their file size when done."]}),"\n",(0,o.jsx)(t.p,{children:"While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."}),"\n",(0,o.jsxs)(t.p,{children:["Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,o.jsx)(t.em,{children:"can"})," be downloaded,\nwhich we can do by using an HTTP client alongside Selenium in our test."]}),"\n",(0,o.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,o.jsxs)(t.p,{children:["Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,o.jsx)(t.em,{children:"can"})," be downloaded.\nAnd we can do that by using an HTTP client alongside Selenium in our test."]}),"\n",(0,o.jsxs)(t.p,{children:["With an HTTP library we can perform a header (or ",(0,o.jsx)(t.code,{children:"HEAD"}),") request for the file. Instead of downloading the file we'll\nreceive header information for the file which contains information like the content type and content length\n(amongst other things). With this information we can easily confirm the file is what we expect without onerous\nconfiguration, local disk usage, or lengthy download times (depending on the file size)."]}),"\n",(0,o.jsx)(t.p,{children:"Let's continue with an example."}),"\n","\n","\n",(0,o.jsx)(n.Z,{contentPath:"8-download-a-file-revisited",languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"Ruby",value:"ruby"}]}),"\n",(0,o.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,o.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,o.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},52063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var o=a(67294),r=a(36905),n=a(12466),i=a(16550),s=a(20469),l=a(91980),d=a(67392),u=a(50012);function c(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:r}}=e;return{value:t,label:a,attributes:o,default:r}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[d,c]=p({queryString:a,groupId:r}),[w,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,u.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),f=(()=>{const e=d??w;return m({value:e,tabValues:n})?e:null})();(0,s.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,n]),tabValues:n}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function _(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==o&&(d(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...n,className:(0,r.Z)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":o===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=w(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(_,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:a,className:o}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,r.Z)(k.tabItem,o),hidden:a,children:t})}const I=function(e){let{contentPath:t,languages:r}=e;const[n,i]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{const e=await Promise.all(r.map((async e=>{const r=(0,o.lazy)((()=>a(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:r}})));i(e)})()}),[t,r]),(0,v.jsx)("div",{children:n.length>0&&(0,v.jsx)(j,{children:n.map(((e,t)=>(0,v.jsx)(x,{value:e.label,label:e.label,children:(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(e.component,{})})},t)))})})}},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"},53726:(e,t,a)=>{var o={"./1-upload-a-file/_csharp.md":[82732,2732],"./1-upload-a-file/_java.md":[77771,7771],"./1-upload-a-file/_javascript.md":[26241,6241],"./1-upload-a-file/_python.md":[32074,2074],"./1-upload-a-file/_ruby.md":[97888,7888],"./10-retry-test-actions/_ruby.md":[13759,3759],"./11-build-an-interactive-prompt/_ruby.md":[15744,5744],"./12-opt-out-of-ab-tests/_csharp.md":[48392,8392],"./12-opt-out-of-ab-tests/_java.md":[78849,8849],"./12-opt-out-of-ab-tests/_javascript.md":[95707,5707],"./12-opt-out-of-ab-tests/_python.md":[12918,2918],"./12-opt-out-of-ab-tests/_ruby.md":[84278,4278],"./13-how-to-access-basic-auth/_csharp.md":[70230,230],"./13-how-to-access-basic-auth/_java.md":[66037,6037],"./13-how-to-access-basic-auth/_javascript.md":[93993,3993],"./13-how-to-access-basic-auth/_python.md":[32097,2097],"./13-how-to-access-basic-auth/_ruby.md":[83364,3364],"./14-interactive-prompts-revisited/_ruby.md":[75844,5844],"./15-download-secure-files/_ruby.md":[54541,7069],"./16-take-screenshot-on-failure/_csharp.md":[48471,3864],"./16-take-screenshot-on-failure/_java.md":[85337,5337],"./16-take-screenshot-on-failure/_javascript.md":[76077,6077],"./16-take-screenshot-on-failure/_python.md":[48641,8641],"./16-take-screenshot-on-failure/_ruby.md":[30784,784],"./17-retrieve-http-status-codes/_ruby.md":[88258,8258],"./19-data-driven-testing/_ruby.md":[26681,6681],"./2-download-a-file/_csharp.md":[20607,607],"./2-download-a-file/_java.md":[31021,1021],"./2-download-a-file/_javascript.md":[8296,8296],"./2-download-a-file/_python.md":[89873,9873],"./2-download-a-file/_ruby.md":[26194,6194],"./22-locator-strategy/_ruby.md":[6350,6350],"./23-dynamic-pages/_ruby.md":[11994,1994],"./24-rest-apis/_ruby.md":[45185,5185],"./25-how-to-work-with-tables/_csharp.md":[43985,3985],"./25-how-to-work-with-tables/_java.md":[8253,8253],"./25-how-to-work-with-tables/_javascript.md":[58833,8833],"./25-how-to-work-with-tables/_python.md":[68670,8670],"./25-how-to-work-with-tables/_ruby.md":[43978,3978],"./26-cloud/_ruby.md":[50439,6948],"./27-parallel/_ruby.md":[48154,8154],"./29-chrome-driver/_csharp.md":[90939,939],"./29-chrome-driver/_java.md":[15923,5923],"./29-chrome-driver/_python.md":[63128,3128],"./29-chrome-driver/_ruby.md":[49635,9635],"./3-work-with-frames/_csharp.md":[47623,7623],"./3-work-with-frames/_java.md":[929,929],"./3-work-with-frames/_javascript.md":[98925,8925],"./3-work-with-frames/_python.md":[4909,4909],"./3-work-with-frames/_ruby.md":[12683,2683],"./30-mobile/_ruby.md":[2272,2272],"./32-css-vs-xpath/_ruby.md":[51460,1460],"./33-css-vs-xpath-2/_ruby.md":[66713,6713],"./34-css-vs-xpath-3/_ruby.md":[23654,3654],"./38-headless/_ruby.md":[25171,5171],"./39-drag-and-drop/_ruby.md":[74806,4806],"./4-work-with-multiple-windows/_csharp.md":[84584,4584],"./4-work-with-multiple-windows/_java.md":[17636,7636],"./4-work-with-multiple-windows/_javascript.md":[65068,5068],"./4-work-with-multiple-windows/_python.md":[19518,9518],"./4-work-with-multiple-windows/_ruby.md":[66724,6724],"./40-disabled-element/_csharp.md":[27117,7117],"./40-disabled-element/_java.md":[55705,5705],"./40-disabled-element/_javascript.md":[46486,6486],"./40-disabled-element/_python.md":[20909,909],"./40-disabled-element/_ruby.md":[51979,1979],"./41-one-test-multiple-browsers/_ruby.md":[17551,7551],"./42-one-test-multiple-browsers-parallel/_ruby.md":[55847,5847],"./43-forgot-password/_ruby.md":[76787,6787],"./44-exception-handling/_ruby.md":[52742,2742],"./45-how-to-test-checkboxes/_csharp.md":[68186,8186],"./45-how-to-test-checkboxes/_java.md":[29815,9815],"./45-how-to-test-checkboxes/_javascript.md":[16842,6842],"./45-how-to-test-checkboxes/_python.md":[28226,8226],"./45-how-to-test-checkboxes/_ruby.md":[16924,6924],"./47-waiting/_ruby.md":[43523,3523],"./48-load-testing/_ruby.md":[8295,8295],"./49-performance-testing/_ruby.md":[97951,7951],"./5-select-from-a-dropdown/_csharp.md":[14593,4593],"./5-select-from-a-dropdown/_java.md":[15097,5097],"./5-select-from-a-dropdown/_javascript.md":[77583,8011],"./5-select-from-a-dropdown/_python.md":[62465,2465],"./5-select-from-a-dropdown/_ruby.md":[74724,4724],"./50-how-to-work-with-hovers/_csharp.md":[10966,966],"./50-how-to-work-with-hovers/_java.md":[31070,1070],"./50-how-to-work-with-hovers/_javascript.md":[98986,8986],"./50-how-to-work-with-hovers/_python.md":[2522,2522],"./50-how-to-work-with-hovers/_ruby.md":[65158,5158],"./51-how-to-work-with-javascript-alerts/_csharp.md":[68139,8139],"./51-how-to-work-with-javascript-alerts/_java.md":[64807,4807],"./51-how-to-work-with-javascript-alerts/_javascript.md":[73488,3488],"./51-how-to-work-with-javascript-alerts/_python.md":[7350,7350],"./51-how-to-work-with-javascript-alerts/_ruby.md":[27318,7318],"./52-grid/_java.md":[56656,6656],"./52-grid/_javascript.md":[18417,8417],"./52-grid/_python.md":[97526,7526],"./52-grid/_ruby.md":[47011,7011],"./53-growl/_csharp.md":[76608,6608],"./53-growl/_java.md":[93311,3311],"./53-growl/_javascript.md":[63835,3835],"./53-growl/_python.md":[21378,1378],"./53-growl/_ruby.md":[42581,2581],"./54-logging/_ruby.md":[34297,4297],"./55-wrapper/_ruby.md":[65756,5756],"./56-retry-failed-tests/_ruby.md":[19764,9764],"./57-junit-xml/_ruby.md":[47795,7795],"./58-tagging/_ruby.md":[81059,1059],"./60-list-tags/_ruby.md":[11966,1966],"./61-how-to-press-keyboard-keys/_csharp.md":[31750,1750],"./61-how-to-press-keyboard-keys/_java.md":[23233,3233],"./61-how-to-press-keyboard-keys/_javascript.md":[75732,5732],"./61-how-to-press-keyboard-keys/_python.md":[93449,3449],"./61-how-to-press-keyboard-keys/_ruby.md":[94931,4931],"./63-right-click/_csharp.md":[21385,8817],"./63-right-click/_java.md":[22414,2414],"./63-right-click/_javascript.md":[39764,280],"./63-right-click/_python.md":[42969,2969],"./63-right-click/_ruby.md":[56018,6018],"./64-limit-bandwidth/_ruby.md":[44015,4015],"./65-highlight-elements/_csharp.md":[17468,7468],"./65-highlight-elements/_java.md":[85457,5457],"./65-highlight-elements/_javascript.md":[30709,709],"./65-highlight-elements/_python.md":[51974,1974],"./65-highlight-elements/_ruby.md":[45206,5206],"./66-blacklist/_ruby.md":[64998,4998],"./67-broken-images/_ruby.md":[92098,2098],"./68-load-testing-revisited/_ruby.md":[22703,2703],"./69-safari/_java.md":[85388,5388],"./69-safari/_ruby.md":[77596,7596],"./7-use-a-page-object/_ruby.md":[88758,8758],"./72-headless-chrome/_ruby.md":[57138,7138],"./73-open-new-window/_java.md":[43447,3447],"./73-open-new-window/_ruby.md":[89565,9565],"./8-download-a-file-revisited/_csharp.md":[94088,4088],"./8-download-a-file-revisited/_java.md":[68442,8442],"./8-download-a-file-revisited/_python.md":[3794,3794],"./8-download-a-file-revisited/_ruby.md":[81170,1170],"./9-use-a-base-page-object/_ruby.md":[42555,2555]};function r(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return a.e(t[1]).then((()=>a(r)))}r.keys=()=>Object.keys(o),r.id=53726,e.exports=r},11151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s,a:()=>i});var o=a(67294);const r={},n=o.createContext(r);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);