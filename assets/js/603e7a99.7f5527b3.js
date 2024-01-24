(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4517],{59384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(85893),o=r(11151),s=r(52063);const i={title:"Interactive Prompts Revisited",id:"14-interactive-prompts-revisited",slug:"/14-interactive-prompts-revisited",contentUrl:"tips/interactive-prompts-revisited/14-interactive-prompts-revisited",sidebar_label:"Interactive Prompts Revisited",text:"In a previous tip we covered how a REPL can help you determine what code to write in your scripts by testing locators and actions through an interactive prompt. This is great for simple tasks, but its starts to falter when debugging more complex scripts.",hide_table_of_contents:!0,number:14,publish_date:new Date("2013-08-27T00:00:00.000Z"),tags:["repl","pry","debugging","guest post"],level:3,category:["troubleshooting"]},n="Interactive Prompts Revisited",l={id:"interactive-prompts-revisited/14-interactive-prompts-revisited",title:"Interactive Prompts Revisited",description:"NOTE: This is a guest post from Brian Goad of DigitalSmiths.",source:"@site/tips/14-interactive-prompts-revisited/main.mdx",sourceDirName:"14-interactive-prompts-revisited",slug:"/14-interactive-prompts-revisited",permalink:"/tips/14-interactive-prompts-revisited",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/14-interactive-prompts-revisited/main.mdx",tags:[{label:"repl",permalink:"/tips/tags/repl"},{label:"pry",permalink:"/tips/tags/pry"},{label:"debugging",permalink:"/tips/tags/debugging"},{label:"guest post",permalink:"/tips/tags/guest-post"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1706088339,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Interactive Prompts Revisited",id:"14-interactive-prompts-revisited",slug:"/14-interactive-prompts-revisited",contentUrl:"tips/interactive-prompts-revisited/14-interactive-prompts-revisited",sidebar_label:"Interactive Prompts Revisited",text:"In a previous tip we covered how a REPL can help you determine what code to write in your scripts by testing locators and actions through an interactive prompt. This is great for simple tasks, but its starts to falter when debugging more complex scripts.",hide_table_of_contents:!0,number:14,publish_date:"2013-08-27T00:00:00.000Z",tags:["repl","pry","debugging","guest post"],level:3,category:["troubleshooting"]},sidebar:"defaultSidebar",previous:{title:"Work With Basic Auth",permalink:"/tips/13-work-with-basic-auth"},next:{title:"Download Secure Files",permalink:"/tips/15-download-secure-files"}},d={},u=[{value:"Intro",id:"intro",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"interactive-prompts-revisited",children:"Interactive Prompts Revisited"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["NOTE: This is a guest post from Brian Goad of ",(0,a.jsx)(t.a,{href:"http://www.digitalsmiths.com/",children:"DigitalSmiths"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,a.jsx)(t.p,{children:"In a previous tip we covered how a REPL can help you determine what code to write in your scripts by testing locators\nand actions through an interactive prompt. This is great for simple tasks, but its starts to falter when debugging\nmore complex scripts."}),"\n",(0,a.jsx)(t.p,{children:"Often times you will find yourself puzzling over an error or failure occurring in the middle of your script. It is\nnot very efficient to have to run through each command in your script, line by line, to get to the context of the\nplace you are attempting to debug in a simple REPL. Usually, you have already setup some framework, boilerplate,\nand helper code to assist you in writing your script. This just adds on to the problem, as you have no easy way to\nview the objects or methods available to you while debugging in your script."}),"\n",(0,a.jsxs)(t.p,{children:["Sometimes you just need to be able to ",(0,a.jsx)(t.em,{children:"pry"})," into the code, jump in, open it up and explore the area in order to\nsolve the error you are experiencing."]}),"\n","\n","\n",(0,a.jsx)(s.Z,{contentPath:"14-interactive-prompts-revisited",languages:[{label:"Ruby",value:"ruby"}]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},52063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>I});var a=r(67294),o=r(36905),s=r(12466),i=r(16550),n=r(20469),l=r(91980),d=r(67392),u=r(50012);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,s=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,c]=h({queryString:r,groupId:o}),[b,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Nk)(r);return[o,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),w=(()=>{const e=d??b;return p({value:e,tabValues:s})?e:null})();(0,n.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,s]),tabValues:s}}var v=r(72389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(85893);function _(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:n}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),o=n[r].value;o!==a&&(d(t),i(o))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:n.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...s,className:(0,o.Z)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",w.tabList),children:[(0,y.jsx)(_,{...e,...t}),(0,y.jsx)(f,{...e,...t})]})}function k(e){const t=(0,v.Z)();return(0,y.jsx)(g,{...e,children:c(e.children)},String(t))}const j={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:r,className:a}=e;return(0,y.jsx)("div",{role:"tabpanel",className:(0,o.Z)(j.tabItem,a),hidden:r,children:t})}const I=function(e){let{contentPath:t,languages:o}=e;const[s,i]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{const e=await Promise.all(o.map((async e=>{const o=(0,a.lazy)((()=>r(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:o}})));i(e)})()}),[t,o]),(0,y.jsx)("div",{children:s.length>0&&(0,y.jsx)(k,{children:s.map(((e,t)=>(0,y.jsx)(x,{value:e.label,label:e.label,children:(0,y.jsx)(a.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading..."}),children:(0,y.jsx)(e.component,{})})},t)))})})}},53726:(e,t,r)=>{var a={"./1-upload-a-file/_csharp.md":[82732,2732],"./1-upload-a-file/_java.md":[77771,7771],"./1-upload-a-file/_javascript.md":[26241,6241],"./1-upload-a-file/_python.md":[32074,2074],"./1-upload-a-file/_ruby.md":[97888,7888],"./10-retry-test-actions/_ruby.md":[13759,3759],"./11-build-an-interactive-prompt/_ruby.md":[15744,5744],"./12-opt-out-of-ab-tests/_csharp.md":[48392,8392],"./12-opt-out-of-ab-tests/_java.md":[78849,8849],"./12-opt-out-of-ab-tests/_javascript.md":[95707,5707],"./12-opt-out-of-ab-tests/_python.md":[12918,2918],"./12-opt-out-of-ab-tests/_ruby.md":[84278,4278],"./13-how-to-access-basic-auth/_csharp.md":[70230,230],"./13-how-to-access-basic-auth/_java.md":[66037,6037],"./13-how-to-access-basic-auth/_javascript.md":[93993,3993],"./13-how-to-access-basic-auth/_python.md":[32097,2097],"./13-how-to-access-basic-auth/_ruby.md":[83364,3364],"./14-interactive-prompts-revisited/_ruby.md":[75844,5844],"./15-download-secure-files/_ruby.md":[54541,7069],"./16-take-screenshot-on-failure/_csharp.md":[48471,3864],"./16-take-screenshot-on-failure/_java.md":[85337,5337],"./16-take-screenshot-on-failure/_javascript.md":[76077,6077],"./16-take-screenshot-on-failure/_python.md":[48641,8641],"./16-take-screenshot-on-failure/_ruby.md":[30784,784],"./17-retrieve-http-status-codes/_ruby.md":[88258,8258],"./19-data-driven-testing/_ruby.md":[26681,6681],"./2-download-a-file/_csharp.md":[20607,607],"./2-download-a-file/_java.md":[31021,1021],"./2-download-a-file/_javascript.md":[8296,8296],"./2-download-a-file/_python.md":[89873,9873],"./2-download-a-file/_ruby.md":[26194,6194],"./22-locator-strategy/_ruby.md":[6350,6350],"./23-dynamic-pages/_ruby.md":[11994,1994],"./24-rest-apis/_ruby.md":[45185,5185],"./25-how-to-work-with-tables/_csharp.md":[43985,3985],"./25-how-to-work-with-tables/_java.md":[8253,8253],"./25-how-to-work-with-tables/_javascript.md":[58833,8833],"./25-how-to-work-with-tables/_python.md":[68670,8670],"./25-how-to-work-with-tables/_ruby.md":[43978,3978],"./26-cloud/_ruby.md":[50439,6948],"./27-parallel/_ruby.md":[48154,8154],"./29-chrome-driver/_csharp.md":[90939,939],"./29-chrome-driver/_java.md":[15923,5923],"./29-chrome-driver/_python.md":[63128,3128],"./29-chrome-driver/_ruby.md":[49635,9635],"./3-work-with-frames/_csharp.md":[47623,7623],"./3-work-with-frames/_java.md":[929,929],"./3-work-with-frames/_javascript.md":[98925,8925],"./3-work-with-frames/_python.md":[4909,4909],"./3-work-with-frames/_ruby.md":[12683,2683],"./30-mobile/_ruby.md":[2272,2272],"./32-css-vs-xpath/_ruby.md":[51460,1460],"./33-css-vs-xpath-2/_ruby.md":[66713,6713],"./34-css-vs-xpath-3/_ruby.md":[23654,3654],"./38-headless/_ruby.md":[25171,5171],"./39-drag-and-drop/_ruby.md":[74806,4806],"./4-work-with-multiple-windows/_csharp.md":[84584,4584],"./4-work-with-multiple-windows/_java.md":[17636,7636],"./4-work-with-multiple-windows/_javascript.md":[65068,5068],"./4-work-with-multiple-windows/_python.md":[19518,9518],"./4-work-with-multiple-windows/_ruby.md":[66724,6724],"./40-disabled-element/_csharp.md":[27117,7117],"./40-disabled-element/_java.md":[55705,5705],"./40-disabled-element/_javascript.md":[46486,6486],"./40-disabled-element/_python.md":[20909,909],"./40-disabled-element/_ruby.md":[51979,1979],"./41-one-test-multiple-browsers/_ruby.md":[17551,7551],"./42-one-test-multiple-browsers-parallel/_ruby.md":[55847,5847],"./43-forgot-password/_ruby.md":[76787,6787],"./44-exception-handling/_ruby.md":[52742,2742],"./45-how-to-test-checkboxes/_csharp.md":[68186,8186],"./45-how-to-test-checkboxes/_java.md":[29815,9815],"./45-how-to-test-checkboxes/_javascript.md":[16842,6842],"./45-how-to-test-checkboxes/_python.md":[28226,8226],"./45-how-to-test-checkboxes/_ruby.md":[16924,6924],"./47-waiting/_ruby.md":[43523,3523],"./48-load-testing/_ruby.md":[8295,8295],"./49-performance-testing/_ruby.md":[97951,7951],"./5-select-from-a-dropdown/_csharp.md":[14593,4593],"./5-select-from-a-dropdown/_java.md":[15097,5097],"./5-select-from-a-dropdown/_javascript.md":[77583,8011],"./5-select-from-a-dropdown/_python.md":[62465,2465],"./5-select-from-a-dropdown/_ruby.md":[74724,4724],"./50-how-to-work-with-hovers/_csharp.md":[10966,966],"./50-how-to-work-with-hovers/_java.md":[31070,1070],"./50-how-to-work-with-hovers/_javascript.md":[98986,8986],"./50-how-to-work-with-hovers/_python.md":[2522,2522],"./50-how-to-work-with-hovers/_ruby.md":[65158,5158],"./51-how-to-work-with-javascript-alerts/_csharp.md":[68139,8139],"./51-how-to-work-with-javascript-alerts/_java.md":[64807,4807],"./51-how-to-work-with-javascript-alerts/_javascript.md":[73488,3488],"./51-how-to-work-with-javascript-alerts/_python.md":[7350,7350],"./51-how-to-work-with-javascript-alerts/_ruby.md":[27318,7318],"./52-grid/_java.md":[56656,6656],"./52-grid/_javascript.md":[18417,8417],"./52-grid/_python.md":[97526,7526],"./52-grid/_ruby.md":[47011,7011],"./53-growl/_csharp.md":[76608,6608],"./53-growl/_java.md":[93311,3311],"./53-growl/_javascript.md":[63835,3835],"./53-growl/_python.md":[21378,1378],"./53-growl/_ruby.md":[42581,2581],"./54-logging/_ruby.md":[34297,4297],"./55-wrapper/_ruby.md":[65756,5756],"./56-retry-failed-tests/_ruby.md":[19764,9764],"./57-junit-xml/_ruby.md":[47795,7795],"./58-tagging/_ruby.md":[81059,1059],"./60-list-tags/_ruby.md":[11966,1966],"./61-how-to-press-keyboard-keys/_csharp.md":[31750,1750],"./61-how-to-press-keyboard-keys/_java.md":[23233,3233],"./61-how-to-press-keyboard-keys/_javascript.md":[75732,5732],"./61-how-to-press-keyboard-keys/_python.md":[93449,3449],"./61-how-to-press-keyboard-keys/_ruby.md":[94931,4931],"./63-right-click/_csharp.md":[21385,8817],"./63-right-click/_java.md":[22414,2414],"./63-right-click/_javascript.md":[39764,280],"./63-right-click/_python.md":[42969,2969],"./63-right-click/_ruby.md":[56018,6018],"./64-limit-bandwidth/_ruby.md":[44015,4015],"./65-highlight-elements/_csharp.md":[17468,7468],"./65-highlight-elements/_java.md":[85457,5457],"./65-highlight-elements/_javascript.md":[30709,709],"./65-highlight-elements/_python.md":[51974,1974],"./65-highlight-elements/_ruby.md":[45206,5206],"./66-blacklist/_ruby.md":[64998,4998],"./67-broken-images/_ruby.md":[92098,2098],"./68-load-testing-revisited/_ruby.md":[22703,2703],"./69-safari/_java.md":[85388,5388],"./69-safari/_ruby.md":[77596,7596],"./7-use-a-page-object/_ruby.md":[88758,8758],"./72-headless-chrome/_ruby.md":[57138,7138],"./73-open-new-window/_java.md":[43447,3447],"./73-open-new-window/_ruby.md":[89565,9565],"./8-download-a-file-revisited/_csharp.md":[94088,4088],"./8-download-a-file-revisited/_java.md":[68442,8442],"./8-download-a-file-revisited/_python.md":[3794,3794],"./8-download-a-file-revisited/_ruby.md":[81170,1170],"./9-use-a-base-page-object/_ruby.md":[42555,2555]};function o(e){if(!r.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return r.e(t[1]).then((()=>r(o)))}o.keys=()=>Object.keys(a),o.id=53726,e.exports=o},11151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n,a:()=>i});var a=r(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);