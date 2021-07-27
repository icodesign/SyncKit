(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[9661],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,s=m["".concat(d,".").concat(f)]||m[f]||u[f]||o;return n?t.createElement(s,a(a({ref:r},p),{},{components:n})):t.createElement(s,a({ref:r},p))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5711:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={},d="DefaultRealmProvider",c={unversionedId:"api/realm/DefaultRealmProvider",id:"api/realm/DefaultRealmProvider",isDocsHomePage:!1,title:"DefaultRealmProvider",description:"` swift",source:"@site/docs/api/realm/DefaultRealmProvider.md",sourceDirName:"api/realm",slug:"/api/realm/DefaultRealmProvider",permalink:"/api/realm/DefaultRealmProvider",version:"current",frontMatter:{},sidebar:"API",previous:{title:"DefaultRealmAdapterProvider",permalink:"/api/realm/DefaultRealmAdapterProvider"},next:{title:"MultiRealmCollectionChange",permalink:"/api/realm/MultiRealmCollectionChange"}},p=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Initializers",id:"initializers",children:[{value:"<code>init(identifier:realmConfiguration:appGroup:)</code>",id:"initidentifierrealmconfigurationappgroup",children:[]},{value:"<code>init(identifier:realmConfiguration:appGroup:)</code>",id:"initidentifierrealmconfigurationappgroup-1",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>identifier</code>",id:"identifier",children:[]},{value:"<code>appGroup</code>",id:"appgroup",children:[]},{value:"<code>realmConfiguration</code>",id:"realmconfiguration",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)</code>",id:"cloudkitsynchronizer_modeladapterforrecordzoneid",children:[]},{value:"<code>cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)</code>",id:"cloudkitsynchronizer_zonewasdeletedwithzoneid",children:[]},{value:"<code>cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)</code>",id:"cloudkitsynchronizer_modeladapterforrecordzoneid-1",children:[]},{value:"<code>cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)</code>",id:"cloudkitsynchronizer_zonewasdeletedwithzoneid-1",children:[]}]}],u={toc:p};function m(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"defaultrealmprovider"},"DefaultRealmProvider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class DefaultRealmProvider: NSObject, AdapterProvider \n")),(0,o.kt)("h2",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../core/AdapterProvider"},(0,o.kt)("inlineCode",{parentName:"a"},"AdapterProvider")),", ",(0,o.kt)("a",{parentName:"p",href:"../core/AdapterProvider"},(0,o.kt)("inlineCode",{parentName:"a"},"AdapterProvider")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NSObject"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NSObject")),(0,o.kt)("h2",{id:"initializers"},"Initializers"),(0,o.kt)("h3",{id:"initidentifierrealmconfigurationappgroup"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(identifier:realmConfiguration:appGroup:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public init(identifier: String, realmConfiguration: RLMRealmConfiguration, appGroup: String?) \n")),(0,o.kt)("h3",{id:"initidentifierrealmconfigurationappgroup-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(identifier:realmConfiguration:appGroup:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public init(identifier: String, realmConfiguration: Realm.Configuration, appGroup: String?) \n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"identifier"},(0,o.kt)("inlineCode",{parentName:"h3"},"identifier")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let identifier: String\n")),(0,o.kt)("h3",{id:"appgroup"},(0,o.kt)("inlineCode",{parentName:"h3"},"appGroup")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let appGroup: String?\n")),(0,o.kt)("h3",{id:"realmconfiguration"},(0,o.kt)("inlineCode",{parentName:"h3"},"realmConfiguration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let realmConfiguration: RLMRealmConfiguration\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"cloudkitsynchronizer_modeladapterforrecordzoneid"},(0,o.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, modelAdapterForRecordZoneID recordZoneID: CKRecordZone.ID) -> ModelAdapter? \n")),(0,o.kt)("h3",{id:"cloudkitsynchronizer_zonewasdeletedwithzoneid"},(0,o.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, zoneWasDeletedWithZoneID recordZoneID: CKRecordZone.ID) \n")),(0,o.kt)("h3",{id:"cloudkitsynchronizer_modeladapterforrecordzoneid-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, modelAdapterForRecordZoneID recordZoneID: CKRecordZone.ID) -> ModelAdapter? \n")),(0,o.kt)("h3",{id:"cloudkitsynchronizer_zonewasdeletedwithzoneid-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, zoneWasDeletedWithZoneID recordZoneID: CKRecordZone.ID) \n")))}m.isMDXComponent=!0}}]);