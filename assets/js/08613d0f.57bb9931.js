(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[83209],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,h=c["".concat(l,".").concat(p)]||c[p]||m[p]||o;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var r=a(87462),n=a(67294),o=a(86010),s=a(12466),i=a(16550),l=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=l??c;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==i&&(c(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(w,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function _(e){const t=(0,b.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},38169:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(67294),n=a(74866),o=a(85162);const s=function(e){let{contentPath:t,languages:s}=e;const[i,l]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(s.map((async e=>{const n=(0,r.lazy)((()=>a(53726)(`./${t}/_${e.value}.md`)));return{label:e.label,component:n}})));l(e)})()}),[t,s]),r.createElement("div",null,i.length>0&&r.createElement(n.Z,null,i.map(((e,t)=>r.createElement(o.Z,{key:t,value:e.label,label:e.label},r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(e.component,null)))))))}},37382:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(38169);const s={title:"Data Driven Testing",id:"19-data-driven-testing",contentUrl:"tips/data-driven-testing/19-data-driven-testing",sidebar_label:"Data Driven Testing",text:"There are times when you run across functionality you want to test repeatedly with various inputs to see how the system behaves. We're going to go over a way to do this that will take some of the burden out of the process.",number:19,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-07-14T00:00:00.000Z"),last_update:{date:new Date("2023-02-28T00:00:00.000Z")},tags:["data-driven testing","csv","authentication"],category:["remote"]},i="How to Create a Data-driven Test",l={unversionedId:"data-driven-testing/19-data-driven-testing",id:"data-driven-testing/19-data-driven-testing",title:"Data Driven Testing",description:"Intro",source:"@site/tips/19-data-driven-testing/main.mdx",sourceDirName:"19-data-driven-testing",slug:"/data-driven-testing/19-data-driven-testing",permalink:"/tips/data-driven-testing/19-data-driven-testing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/tips/19-data-driven-testing/main.mdx",tags:[{label:"data-driven testing",permalink:"/tips/tags/data-driven-testing"},{label:"csv",permalink:"/tips/tags/csv"},{label:"authentication",permalink:"/tips/tags/authentication"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"Data Driven Testing",id:"19-data-driven-testing",contentUrl:"tips/data-driven-testing/19-data-driven-testing",sidebar_label:"Data Driven Testing",text:"There are times when you run across functionality you want to test repeatedly with various inputs to see how the system behaves. We're going to go over a way to do this that will take some of the burden out of the process.",number:19,hide_table_of_contents:!0,level:2,publish_date:"2015-07-14T00:00:00.000Z",last_update:{date:"2023-02-28T00:00:00.000Z"},tags:["data-driven testing","csv","authentication"],category:["remote"]},sidebar:"docs",previous:{title:"How To Figure Out What to Test",permalink:"/tips/how-to-figure-out-what-to-test/18-what-to-test"},next:{title:"How To Download a File",permalink:"/tips/download-a-file/2-download-a-file"}},u={},d=[{label:"Ruby",value:"ruby"}],c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}],m={toc:c},p="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-create-a-data-driven-test"},"How to Create a Data-driven Test"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"There are times when you run across functionality you want to test repeatedly with various inputs to see how the\nsystem behaves. We're going to go over a way to do this that will take some of the burden out of the process."),(0,n.kt)("p",null,"Sometimes performing these tests are because you want to test the expected outcomes. Other times, because you\nwant to see if the system breaks in an odd way. But, wiring up all of these permutations into a set of automated\ntests can be burdensome and rife with copied code, which can make it hard to maintain over time."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Enter Data-driven Testing."),(0,n.kt)("p",null,"By storing your desired inputs and expected outcomes in a central repository of some kind (e.g. a comma separated\nfile, database, etc) you can easily wire up tests to use each of them instead of writing numerous tests and\nhard-coding these values directly in your test code."),(0,n.kt)(o.Z,{contentPath:"19-data-driven-testing",languages:d,mdxType:"DisplayTips"}),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."),(0,n.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})))}h.isMDXComponent=!0},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/dave-haeffner-4b48111a5789c5e16142754eb2f51920.jpeg"},53726:(e,t,a)=>{var r={"./1-how-to-upload-a-file/_csharp.md":[23625,23625],"./1-how-to-upload-a-file/_java.md":[41654,41654],"./1-how-to-upload-a-file/_javascript.md":[49506,49506],"./1-how-to-upload-a-file/_python.md":[12024,12024],"./1-how-to-upload-a-file/_ruby.md":[87043,87043],"./10-retry-test-actions/_ruby.md":[77658,77658],"./11-build-an-interactive-prompt/_ruby.md":[43605,43605],"./12-opt-out-of-ab-tests/_csharp.md":[91824,91824],"./12-opt-out-of-ab-tests/_java.md":[4992,4992],"./12-opt-out-of-ab-tests/_javascript.md":[43267,43267],"./12-opt-out-of-ab-tests/_python.md":[3531,3531],"./12-opt-out-of-ab-tests/_ruby.md":[65087,65087],"./13-how-to-access-basic-auth/_csharp.md":[67594,67594],"./13-how-to-access-basic-auth/_java.md":[60997,60997],"./13-how-to-access-basic-auth/_javascript.md":[533,533],"./13-how-to-access-basic-auth/_python.md":[64334,64334],"./13-how-to-access-basic-auth/_ruby.md":[91931,91931],"./14-interactive-prompts-revisited/_ruby.md":[59788,59788],"./15-download-secure-files/_ruby.md":[64985,64985],"./16-take-screenshot-on-failure/_csharp.md":[19074,19074],"./16-take-screenshot-on-failure/_java.md":[24319,24319],"./16-take-screenshot-on-failure/_javascript.md":[62824,62824],"./16-take-screenshot-on-failure/_python.md":[93544,93544],"./16-take-screenshot-on-failure/_ruby.md":[43994,43994],"./17-retrieve-http-status-codes/_ruby.md":[43396,43396],"./19-data-driven-testing/_ruby.md":[6977,6977],"./2-download-a-file/_csharp.md":[5837,5837],"./2-download-a-file/_java.md":[42994,42994],"./2-download-a-file/_javascript.md":[78037,78037],"./2-download-a-file/_python.md":[9123,9123],"./2-download-a-file/_ruby.md":[20103,20103],"./3-work-with-frames/_csharp.md":[86741,86741],"./3-work-with-frames/_java.md":[37871,37871],"./3-work-with-frames/_javascript.md":[92881,92881],"./3-work-with-frames/_python.md":[33912,33912],"./3-work-with-frames/_ruby.md":[19892,19892],"./4-work-with-multiple-windows/_csharp.md":[11245,11245],"./4-work-with-multiple-windows/_java.md":[9823,9823],"./4-work-with-multiple-windows/_javascript.md":[91096,91096],"./4-work-with-multiple-windows/_python.md":[96333,96333],"./4-work-with-multiple-windows/_ruby.md":[15017,15017],"./5-select-from-a-dropdown/_csharp.md":[54846,54846],"./5-select-from-a-dropdown/_java.md":[81217,81217],"./5-select-from-a-dropdown/_javascript.md":[22255,22255],"./5-select-from-a-dropdown/_python.md":[93288,93288],"./5-select-from-a-dropdown/_ruby.md":[964,964],"./7-use-a-page-object/_ruby.md":[19584,19584],"./8-download-a-file-revisited/_csharp.md":[77068,77068],"./8-download-a-file-revisited/_java.md":[10331,10331],"./8-download-a-file-revisited/_python.md":[23298,23298],"./8-download-a-file-revisited/_ruby.md":[10599,10599],"./9-use-a-base-page-object/_ruby.md":[96612,96612]};function n(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return a.e(t[1]).then((()=>a(n)))}n.keys=()=>Object.keys(r),n.id=53726,e.exports=n}}]);