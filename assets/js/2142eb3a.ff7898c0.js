(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4543],{39479:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(85893),o=r(11151),s=r(52063);const n={title:"Select From A Dropdown",id:"5-select-from-a-dropdown",slug:"/5-select-from-a-dropdown",contentUrl:"tips/select-from-a-dropdown/5-select-from-a-dropdown",sidebar_label:"Select From A Dropdown",text:"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it.",number:5,hide_table_of_contents:!0,level:1,publish_date:new Date("2015-07-06T00:00:00.000Z"),tags:["dropdown","forms"],category:["fundamentals"]},i="How to Select from a Dropdown List",l={id:"select-from-a-dropdown/5-select-from-a-dropdown",title:"Select From A Dropdown",description:"Intro",source:"@site/tips/5-select-from-a-dropdown/main.mdx",sourceDirName:"5-select-from-a-dropdown",slug:"/5-select-from-a-dropdown",permalink:"/tips/5-select-from-a-dropdown",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/5-select-from-a-dropdown/main.mdx",tags:[{label:"dropdown",permalink:"/tips/tags/dropdown"},{label:"forms",permalink:"/tips/tags/forms"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1706088339,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Select From A Dropdown",id:"5-select-from-a-dropdown",slug:"/5-select-from-a-dropdown",contentUrl:"tips/select-from-a-dropdown/5-select-from-a-dropdown",sidebar_label:"Select From A Dropdown",text:"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might seem straightforward just grab the list by its element and select an item within it, based on the text you want there's a bit more skill to it.",number:5,hide_table_of_contents:!0,level:1,publish_date:"2015-07-06T00:00:00.000Z",tags:["dropdown","forms"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"Work With Multiple Windows",permalink:"/tips/4-work-with-multiple-windows"},next:{title:"Use A Page Object",permalink:"/tips/7-use-a-page-object"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={em:"em",h1:"h1",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-select-from-a-dropdown-list",children:"How to Select from a Dropdown List"}),"\n",(0,a.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,a.jsxs)(t.p,{children:["Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown\nmenu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list\nmight ",(0,a.jsx)(t.em,{children:"seem"})," straightforward -- just grab the list by its element and select an item within it, based on the\ntext you want -- there's a bit more skill to it."]}),"\n",(0,a.jsx)(t.p,{children:"Let's take a look at a couple of different approaches."}),"\n","\n","\n",(0,a.jsx)(s.Z,{contentPath:"5-select-from-a-dropdown",languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}]}),"\n",(0,a.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,a.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,a.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:r(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},52063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var a=r(67294),o=r(36905),s=r(12466),n=r(16550),i=r(20469),l=r(91980),d=r(67392),u=r(50012);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,n.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,s=m(e),[n,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,c]=p({queryString:r,groupId:o}),[b,w]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Nk)(r);return[o,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),f=(()=>{const e=d??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:n,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),w(e)}),[c,w,s]),tabValues:s}}var w=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=r(85893);function y(e){let{className:t,block:r,selectedValue:a,selectValue:n,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),o=i[r].value;o!==a&&(d(t),n(o))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...s,className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,_.jsx)(y,{...e,...t}),(0,_.jsx)(v,{...e,...t})]})}function j(e){const t=(0,w.Z)();return(0,_.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:r,className:a}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,o.Z)(k.tabItem,a),hidden:r,children:t})}const S=function(e){let{contentPath:t,languages:o}=e;const[s,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{const e=await Promise.all(o.map((async e=>{const o=(0,a.lazy)((()=>r(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:o}})));n(e)})()}),[t,o]),(0,_.jsx)("div",{children:s.length>0&&(0,_.jsx)(j,{children:s.map(((e,t)=>(0,_.jsx)(x,{value:e.label,label:e.label,children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},89417:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const a=r.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"},53726:(e,t,r)=>{var a={"./1-upload-a-file/_csharp.md":[82732,2732],"./1-upload-a-file/_java.md":[77771,7771],"./1-upload-a-file/_javascript.md":[26241,6241],"./1-upload-a-file/_python.md":[32074,2074],"./1-upload-a-file/_ruby.md":[97888,7888],"./10-retry-test-actions/_ruby.md":[13759,3759],"./11-build-an-interactive-prompt/_ruby.md":[15744,5744],"./12-opt-out-of-ab-tests/_csharp.md":[48392,8392],"./12-opt-out-of-ab-tests/_java.md":[78849,8849],"./12-opt-out-of-ab-tests/_javascript.md":[95707,5707],"./12-opt-out-of-ab-tests/_python.md":[12918,2918],"./12-opt-out-of-ab-tests/_ruby.md":[84278,4278],"./13-how-to-access-basic-auth/_csharp.md":[70230,230],"./13-how-to-access-basic-auth/_java.md":[66037,6037],"./13-how-to-access-basic-auth/_javascript.md":[93993,3993],"./13-how-to-access-basic-auth/_python.md":[32097,2097],"./13-how-to-access-basic-auth/_ruby.md":[83364,3364],"./14-interactive-prompts-revisited/_ruby.md":[75844,5844],"./15-download-secure-files/_ruby.md":[54541,7069],"./16-take-screenshot-on-failure/_csharp.md":[48471,3864],"./16-take-screenshot-on-failure/_java.md":[85337,5337],"./16-take-screenshot-on-failure/_javascript.md":[76077,6077],"./16-take-screenshot-on-failure/_python.md":[48641,8641],"./16-take-screenshot-on-failure/_ruby.md":[30784,784],"./17-retrieve-http-status-codes/_ruby.md":[88258,8258],"./19-data-driven-testing/_ruby.md":[26681,6681],"./2-download-a-file/_csharp.md":[20607,607],"./2-download-a-file/_java.md":[31021,1021],"./2-download-a-file/_javascript.md":[8296,8296],"./2-download-a-file/_python.md":[89873,9873],"./2-download-a-file/_ruby.md":[26194,6194],"./22-locator-strategy/_ruby.md":[6350,6350],"./23-dynamic-pages/_ruby.md":[11994,1994],"./24-rest-apis/_ruby.md":[45185,5185],"./25-how-to-work-with-tables/_csharp.md":[43985,3985],"./25-how-to-work-with-tables/_java.md":[8253,8253],"./25-how-to-work-with-tables/_javascript.md":[58833,8833],"./25-how-to-work-with-tables/_python.md":[68670,8670],"./25-how-to-work-with-tables/_ruby.md":[43978,3978],"./26-cloud/_ruby.md":[50439,6948],"./27-parallel/_ruby.md":[48154,8154],"./29-chrome-driver/_csharp.md":[90939,939],"./29-chrome-driver/_java.md":[15923,5923],"./29-chrome-driver/_python.md":[63128,3128],"./29-chrome-driver/_ruby.md":[49635,9635],"./3-work-with-frames/_csharp.md":[47623,7623],"./3-work-with-frames/_java.md":[929,929],"./3-work-with-frames/_javascript.md":[98925,8925],"./3-work-with-frames/_python.md":[4909,4909],"./3-work-with-frames/_ruby.md":[12683,2683],"./30-mobile/_ruby.md":[2272,2272],"./32-css-vs-xpath/_ruby.md":[51460,1460],"./33-css-vs-xpath-2/_ruby.md":[66713,6713],"./34-css-vs-xpath-3/_ruby.md":[23654,3654],"./38-headless/_ruby.md":[25171,5171],"./39-drag-and-drop/_ruby.md":[74806,4806],"./4-work-with-multiple-windows/_csharp.md":[84584,4584],"./4-work-with-multiple-windows/_java.md":[17636,7636],"./4-work-with-multiple-windows/_javascript.md":[65068,5068],"./4-work-with-multiple-windows/_python.md":[19518,9518],"./4-work-with-multiple-windows/_ruby.md":[66724,6724],"./40-disabled-element/_csharp.md":[27117,7117],"./40-disabled-element/_java.md":[55705,5705],"./40-disabled-element/_javascript.md":[46486,6486],"./40-disabled-element/_python.md":[20909,909],"./40-disabled-element/_ruby.md":[51979,1979],"./41-one-test-multiple-browsers/_ruby.md":[17551,7551],"./42-one-test-multiple-browsers-parallel/_ruby.md":[55847,5847],"./43-forgot-password/_ruby.md":[76787,6787],"./44-exception-handling/_ruby.md":[52742,2742],"./45-how-to-test-checkboxes/_csharp.md":[68186,8186],"./45-how-to-test-checkboxes/_java.md":[29815,9815],"./45-how-to-test-checkboxes/_javascript.md":[16842,6842],"./45-how-to-test-checkboxes/_python.md":[28226,8226],"./45-how-to-test-checkboxes/_ruby.md":[16924,6924],"./47-waiting/_ruby.md":[43523,3523],"./48-load-testing/_ruby.md":[8295,8295],"./49-performance-testing/_ruby.md":[97951,7951],"./5-select-from-a-dropdown/_csharp.md":[14593,4593],"./5-select-from-a-dropdown/_java.md":[15097,5097],"./5-select-from-a-dropdown/_javascript.md":[77583,8011],"./5-select-from-a-dropdown/_python.md":[62465,2465],"./5-select-from-a-dropdown/_ruby.md":[74724,4724],"./50-how-to-work-with-hovers/_csharp.md":[10966,966],"./50-how-to-work-with-hovers/_java.md":[31070,1070],"./50-how-to-work-with-hovers/_javascript.md":[98986,8986],"./50-how-to-work-with-hovers/_python.md":[2522,2522],"./50-how-to-work-with-hovers/_ruby.md":[65158,5158],"./51-how-to-work-with-javascript-alerts/_csharp.md":[68139,8139],"./51-how-to-work-with-javascript-alerts/_java.md":[64807,4807],"./51-how-to-work-with-javascript-alerts/_javascript.md":[73488,3488],"./51-how-to-work-with-javascript-alerts/_python.md":[7350,7350],"./51-how-to-work-with-javascript-alerts/_ruby.md":[27318,7318],"./52-grid/_java.md":[56656,6656],"./52-grid/_javascript.md":[18417,8417],"./52-grid/_python.md":[97526,7526],"./52-grid/_ruby.md":[47011,7011],"./53-growl/_csharp.md":[76608,6608],"./53-growl/_java.md":[93311,3311],"./53-growl/_javascript.md":[63835,3835],"./53-growl/_python.md":[21378,1378],"./53-growl/_ruby.md":[42581,2581],"./54-logging/_ruby.md":[34297,4297],"./55-wrapper/_ruby.md":[65756,5756],"./56-retry-failed-tests/_ruby.md":[19764,9764],"./57-junit-xml/_ruby.md":[47795,7795],"./58-tagging/_ruby.md":[81059,1059],"./60-list-tags/_ruby.md":[11966,1966],"./61-how-to-press-keyboard-keys/_csharp.md":[31750,1750],"./61-how-to-press-keyboard-keys/_java.md":[23233,3233],"./61-how-to-press-keyboard-keys/_javascript.md":[75732,5732],"./61-how-to-press-keyboard-keys/_python.md":[93449,3449],"./61-how-to-press-keyboard-keys/_ruby.md":[94931,4931],"./63-right-click/_csharp.md":[21385,8817],"./63-right-click/_java.md":[22414,2414],"./63-right-click/_javascript.md":[39764,280],"./63-right-click/_python.md":[42969,2969],"./63-right-click/_ruby.md":[56018,6018],"./64-limit-bandwidth/_ruby.md":[44015,4015],"./65-highlight-elements/_csharp.md":[17468,7468],"./65-highlight-elements/_java.md":[85457,5457],"./65-highlight-elements/_javascript.md":[30709,709],"./65-highlight-elements/_python.md":[51974,1974],"./65-highlight-elements/_ruby.md":[45206,5206],"./66-blacklist/_ruby.md":[64998,4998],"./67-broken-images/_ruby.md":[92098,2098],"./68-load-testing-revisited/_ruby.md":[22703,2703],"./69-safari/_java.md":[85388,5388],"./69-safari/_ruby.md":[77596,7596],"./7-use-a-page-object/_ruby.md":[88758,8758],"./72-headless-chrome/_ruby.md":[57138,7138],"./73-open-new-window/_java.md":[43447,3447],"./73-open-new-window/_ruby.md":[89565,9565],"./8-download-a-file-revisited/_csharp.md":[94088,4088],"./8-download-a-file-revisited/_java.md":[68442,8442],"./8-download-a-file-revisited/_python.md":[3794,3794],"./8-download-a-file-revisited/_ruby.md":[81170,1170],"./9-use-a-base-page-object/_ruby.md":[42555,2555]};function o(e){if(!r.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return r.e(t[1]).then((()=>r(o)))}o.keys=()=>Object.keys(a),o.id=53726,e.exports=o},11151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i,a:()=>n});var a=r(67294);const o={},s=a.createContext(o);function n(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);