(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[8718],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=i,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8096:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],l={},p="DefaultRealmSwiftAdapterProvider",c={unversionedId:"api/realmswift/DefaultRealmSwiftAdapterProvider",id:"api/realmswift/DefaultRealmSwiftAdapterProvider",isDocsHomePage:!1,title:"DefaultRealmSwiftAdapterProvider",description:"` swift",source:"@site/docs/api/realmswift/DefaultRealmSwiftAdapterProvider.md",sourceDirName:"api/realmswift",slug:"/api/realmswift/DefaultRealmSwiftAdapterProvider",permalink:"/api/realmswift/DefaultRealmSwiftAdapterProvider",version:"current",frontMatter:{},sidebar:"API",previous:{title:"DefaultRealmProvider",permalink:"/api/realmswift/DefaultRealmProvider"},next:{title:"MultiRealmCollectionChange",permalink:"/api/realmswift/MultiRealmCollectionChange"}},d=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Initializers",id:"initializers",children:[{value:"<code>init(targetConfiguration:zoneID:appGroup:)</code>",id:"inittargetconfigurationzoneidappgroup",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>adapter</code>",id:"adapter",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)</code>",id:"cloudkitsynchronizer_modeladapterforrecordzoneid",children:[]},{value:"<code>cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)</code>",id:"cloudkitsynchronizer_zonewasdeletedwithzoneid",children:[]},{value:"<code>realmPath(appGroup:)</code>",id:"realmpathappgroup",children:[]}]}],u={toc:d};function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defaultrealmswiftadapterprovider"},"DefaultRealmSwiftAdapterProvider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public class DefaultRealmSwiftAdapterProvider: NSObject, AdapterProvider \n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AdapterProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NSObject")),(0,a.kt)("h2",{id:"initializers"},"Initializers"),(0,a.kt)("h3",{id:"inittargetconfigurationzoneidappgroup"},(0,a.kt)("inlineCode",{parentName:"h3"},"init(targetConfiguration:zoneID:appGroup:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public init(targetConfiguration: Realm.Configuration, zoneID: CKRecordZone.ID, appGroup: String? = nil) \n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"adapter"},(0,a.kt)("inlineCode",{parentName:"h3"},"adapter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public private(set) var adapter: RealmSwiftAdapter!\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"cloudkitsynchronizer_modeladapterforrecordzoneid"},(0,a.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, modelAdapterForRecordZoneID recordZoneID: CKRecordZone.ID) -> ModelAdapter? \n")),(0,a.kt)("h3",{id:"cloudkitsynchronizer_zonewasdeletedwithzoneid"},(0,a.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, zoneWasDeletedWithZoneID recordZoneID: CKRecordZone.ID) \n")),(0,a.kt)("h3",{id:"realmpathappgroup"},(0,a.kt)("inlineCode",{parentName:"h3"},"realmPath(appGroup:)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public static func realmPath(appGroup: String?) -> String \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If using app groups, SyncKit offers the option to store its tracking database in the shared container so that it's"),(0,a.kt)("li",{parentName:"ul"},"accessible by SyncKit from any of the apps in the group. This method returns the path used in this case."),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"@param  appGroup   Identifier of an App Group this app belongs to."),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"@return File path, in the shared container, where SyncKit will store its tracking database.")))}s.isMDXComponent=!0}}]);