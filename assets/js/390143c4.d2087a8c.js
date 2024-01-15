"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4821],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={language:"ruby",level:2,hide_sidebar:!0,publish_date:new Date("2017-08-10T00:00:00.000Z"),last_update:{date:new Date("2023-03-15T00:00:00.000Z")}},i=void 0,o={unversionedId:"mobile-testing-pyramid/ruby",id:"mobile-testing-pyramid/ruby",title:"ruby",description:"A Solution",source:"@site/docs/71-mobile-testing-pyramid/ruby.md",sourceDirName:"71-mobile-testing-pyramid",slug:"/mobile-testing-pyramid/ruby",permalink:"/docs/mobile-testing-pyramid/ruby",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/71-mobile-testing-pyramid/ruby.md",tags:[],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1678838400,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{language:"ruby",level:2,hide_sidebar:!0,publish_date:"2017-08-10T00:00:00.000Z",last_update:{date:"2023-03-15T00:00:00.000Z"}}},s={},u=[{value:"A Solution",id:"a-solution",level:2},{value:"Desktop browsers: mobile testing on desktop browsers",id:"desktop-browsers-mobile-testing-on-desktop-browsers",level:3},{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Mobile simulators/emulators: closer to the actual mobile experience...",id:"mobile-simulatorsemulators-closer-to-the-actual-mobile-experience",level:3},{value:"Pros",id:"pros-1",level:4},{value:"Cons",id:"cons-1",level:4},{value:"Real devices: the real thing...",id:"real-devices-the-real-thing",level:3},{value:"Pros",id:"pros-2",level:4},{value:"Cons",id:"cons-2",level:4},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Mobile testing can be complex, and not only has to cover the UI aspects, but also compatibility of hardware, network connectivity, etc. A few examples of mobile testing challenges are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Layout issues"),(0,n.kt)("li",{parentName:"ul"},"Device incompatibility"),(0,n.kt)("li",{parentName:"ul"},"OS issues"),(0,n.kt)("li",{parentName:"ul"},"Network issues"),(0,n.kt)("li",{parentName:"ul"},"Authentication issues")),(0,n.kt)("p",null,"Based on my personal mobile testing experience, I came up with the ",(0,n.kt)("strong",{parentName:"p"},"Mobile Test Pyramid")," strategy. Of course, it was inspired by the test pyramid of Mike Cohn ('Succeeding with Agile', 2009). But this doesn't quite cover the detail that is needed for a good mobile testing strategy."),(0,n.kt)("p",null,"The mobile test pyramid has 3 levels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Real devices"),(0,n.kt)("li",{parentName:"ul"},"Mobile simulators & emulators"),(0,n.kt)("li",{parentName:"ul"},"Desktop browsers (using mobile simulation)")),(0,n.kt)("p",null,"Identical to the generic test pyramid, the broader the layer in the pyramid, the more tests you should have which cover a wider range of complexity."),(0,n.kt)("p",null,"Here are the focus areas for each layer, along with their pros and cons as I see them."),(0,n.kt)("h3",{id:"desktop-browsers-mobile-testing-on-desktop-browsers"},"Desktop browsers: mobile testing on desktop browsers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Focus area"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Functional system testing"),(0,n.kt)("td",{parentName:"tr",align:null},"Isolated browser tests performing full functional validations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Responsive design"),(0,n.kt)("td",{parentName:"tr",align:null},"Resizing browsers and toggling user agents")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cross-browser"),(0,n.kt)("td",{parentName:"tr",align:null},"Use equivalent desktop browsers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Overall visual layout"),(0,n.kt)("td",{parentName:"tr",align:null},"No extensive visual checks because the rendering is different than devices")))),(0,n.kt)("h4",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fast execution: Matter of milliseconds to launch a browser, also headless execution is possible."),(0,n.kt)("li",{parentName:"ul"},"Scalable: Easily set up 10+ browser instances per machine."),(0,n.kt)("li",{parentName:"ul"},"Cross platform: Ability to use browsers on different operating systems.")),(0,n.kt)("h4",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mobile simulation uses the desktop browser engine: Mobile simulation in desktop browsers is still using the desktop browser."),(0,n.kt)("li",{parentName:"ul"},"No native integration: No native keyboards, incoming calls, etc."),(0,n.kt)("li",{parentName:"ul"},"Just not a device... Incredibly fast, but still not a real device.")),(0,n.kt)("h3",{id:"mobile-simulatorsemulators-closer-to-the-actual-mobile-experience"},"Mobile simulators/emulators: closer to the actual mobile experience..."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE: Only applicable for iOS and Android.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Focus area"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Functional end-user flows"),(0,n.kt)("td",{parentName:"tr",align:null},"Click paths throughout the application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Native API integration"),(0,n.kt)("td",{parentName:"tr",align:null},"GPS injection, file attachments, incoming calls etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Visuals (vanilla only)"),(0,n.kt)("td",{parentName:"tr",align:null},"Use equivalent desktop browsers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Overall visual layout"),(0,n.kt)("td",{parentName:"tr",align:null},"Emulators are limited to vanilla versions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Touch interactions"),(0,n.kt)("td",{parentName:"tr",align:null},"Touch interactions such as swipe and tap comes closer to the user experience of a device than browser emulation")))),(0,n.kt)("h4",{id:"pros-1"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Easy to set up: Simulators/emulators are easy to set up, just download, install, and run."),(0,n.kt)("li",{parentName:"ul"},"Scalable: Virtualization means scalable and also running in parallel on one machine."),(0,n.kt)("li",{parentName:"ul"},"Native API integration: Ability to test native APIs such as incoming calls and GPS injection."),(0,n.kt)("li",{parentName:"ul"},"Simulators or Intel-based emulators are fast: Simulators are fast, because they only have to simulate the software part. Emulators based on the Intel architecture are fast."),(0,n.kt)("li",{parentName:"ul"},"Debugging possibilities: Easy to debug simulator/emulators, already hooked up to the machine to access logs.")),(0,n.kt)("h4",{id:"cons-1"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vanilla versions only: Manufacturer\u2019s skins are available, but the device behavior is still based on what comes stock."),(0,n.kt)("li",{parentName:"ul"},"No real resource usage: CPU/memory usage of machine in case of simulators. Emulators try to simulate the hardware."),(0,n.kt)("li",{parentName:"ul"},"No real interoperability: Connectivity with NFC, Bluetooth, network connections."),(0,n.kt)("li",{parentName:"ul"},"Slow ARM-based emulators: Emulators based on the ARM architecture are slow, which is the main architecture for Android devices."),(0,n.kt)("li",{parentName:"ul"},"Inaccurate color display in light/dark: Contrast/brightness inaccurate in light/dark environment.")),(0,n.kt)("h3",{id:"real-devices-the-real-thing"},"Real devices: the real thing..."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Focus area"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Usability"),(0,n.kt)("td",{parentName:"tr",align:null},"Validating usability such as actual click areas, touch actions and voice over")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Performance"),(0,n.kt)("td",{parentName:"tr",align:null},"CPU/memory usage, battery, network strengths")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Native API integration"),(0,n.kt)("td",{parentName:"tr",align:null},"Interruption (incoming calls, push notifications), resource fighting (camera, GPS), NFC, Bluetooth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Visuals"),(0,n.kt)("td",{parentName:"tr",align:null},"Focus on devices which are not available as simulators/emulators")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Manufacturer\u2019s sauce"),(0,n.kt)("td",{parentName:"tr",align:null},"Real OS from manufacturers, e.g. Samsung's TouchWiz and built-in browsers")))),(0,n.kt)("h4",{id:"pros-2"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Native APIs in real conditions: Ability to test native APIs not only with injections for automation, but also actual NFC touch for example."),(0,n.kt)("li",{parentName:"ul"},"Can be faster than emulators: Some real devices are just faster than emulators due to the simulation of hardware, especially compared to the ARM-based emulators."),(0,n.kt)("li",{parentName:"ul"},"Just the real thing... Actual network conditions, battery/CPU/memory usage, manufacturer\u2019s secret sauce on top of the OS.")),(0,n.kt)("h4",{id:"cons-2"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Costs: Real devices come with a price, usually you pay per device/cradle."),(0,n.kt)("li",{parentName:"ul"},"New device means procurement: A new device is usually not available on-the-fly, even with cloud solutions. E.g. when the new iPhone comes out, it's not available immediately to procure. In the meantime, the iOS simulator would already be available."),(0,n.kt)("li",{parentName:"ul"},"Development iOS build required for automation: iOS apps need to be signed with Development Distribution Certificate and Provisioning Profile for automation.")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"There are loads of trade-offs when it comes to mobile testing. But by learning to use all layers of the mobile testing pyramid to your advantage (leveraging desktop browsers, mobile simulators/emulators, and real devices together) you can gain the fast feedback that is required in modern CI/CD environments. It's just a matter of focusing on the right things in each layer for your context."),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"),(0,n.kt)("p",null,"Kwo Ding is a hands-on test automation architect/consultant with over 10 years of experience in software testing. His focus is on implementing test automation strategies and designing the test automation infrastructure at organizations. He specializes in web, mobile, and API test automation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kwo Ding profile picture",src:a(39769).Z+"#author-img",title:"a title",width:"287",height:"287"})))}p.isMDXComponent=!0},39769:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/kwo-ding-7d169191ad4e0240fa577b4e01d1c56d.jpeg"}}]);