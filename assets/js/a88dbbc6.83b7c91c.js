(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[9448],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8019:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],d={},c="AdapterProvider",l={unversionedId:"api/core/AdapterProvider",id:"api/core/AdapterProvider",isDocsHomePage:!1,title:"AdapterProvider",description:"An AdapterProvider gets requested for new model adapters when a CloudKitSynchronizer encounters a new CKRecordZone that does not already correspond to an existing model adapter.",source:"@site/docs/api/core/AdapterProvider.md",sourceDirName:"api/core",slug:"/api/core/AdapterProvider",permalink:"/api/core/AdapterProvider",version:"current",frontMatter:{},sidebar:"API",next:{title:"CloudKitDatabaseAdapter",permalink:"/api/core/CloudKitDatabaseAdapter"}},p=[{value:"Requirements",id:"requirements",children:[{value:"cloudKitSynchronizer(_:\u200bmodelAdapterForRecordZoneID:\u200b)",id:"cloudkitsynchronizer_modeladapterforrecordzoneid",children:[]},{value:"cloudKitSynchronizer(_:\u200bzoneWasDeletedWithZoneID:\u200b)",id:"cloudkitsynchronizer_zonewasdeletedwithzoneid",children:[]}]}],u={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adapterprovider"},"AdapterProvider"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"AdapterProvider")," gets requested for new model adapters when a ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," encounters a new ",(0,a.kt)("inlineCode",{parentName:"p"},"CKRecordZone")," that does not already correspond to an existing model adapter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public protocol AdapterProvider \n")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"cloudkitsynchronizer_modeladapterforrecordzoneid"},"cloudKitSynchronizer(","_",":\u200bmodelAdapterForRecordZoneID:\u200b)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," requests a new model adapter for the given record zone."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, modelAdapterForRecordZoneID zoneID: CKRecordZone.ID) -> ModelAdapter?\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"synchronizer: ",(0,a.kt)("inlineCode",{parentName:"li"},"QSCloudKitSynchronizer")," asking for the adapter."),(0,a.kt)("li",{parentName:"ul"},"zoneID: ",(0,a.kt)("inlineCode",{parentName:"li"},"CKRecordZoneID")," that the model adapter will be used for.")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ModelAdapter")," correctly configured to sync changes in the given record zone."),(0,a.kt)("h3",{id:"cloudkitsynchronizer_zonewasdeletedwithzoneid"},"cloudKitSynchronizer(","_",":\u200bzoneWasDeletedWithZoneID:\u200b)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," informs the provider that a record zone was deleted so it can clean up any associated data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, zoneWasDeletedWithZoneID zoneID: CKRecordZone.ID)\n")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"synchronizer: ",(0,a.kt)("inlineCode",{parentName:"li"},"QSCloudKitSynchronizer")," that found the deleted record zone."),(0,a.kt)("li",{parentName:"ul"},"zoneID: ",(0,a.kt)("inlineCode",{parentName:"li"},"CKRecordZoneID")," of the record zone that was deleted.")))}s.isMDXComponent=!0}}]);