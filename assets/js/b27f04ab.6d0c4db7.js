(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[7644],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8734:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],c={},p="CoreDataAdapterDelegate",l={unversionedId:"api/coredata/CoreDataAdapterDelegate",id:"api/coredata/CoreDataAdapterDelegate",isDocsHomePage:!1,title:"CoreDataAdapterDelegate",description:"An object implementing CoreDataAdapterDelegate is responsible for saving the target managed object context at the request of the QSCoreDataAdapter in order to persist any downloaded changes.",source:"@site/docs/api/coredata/CoreDataAdapterDelegate.md",sourceDirName:"api/coredata",slug:"/api/coredata/CoreDataAdapterDelegate",permalink:"/api/coredata/CoreDataAdapterDelegate",version:"current",frontMatter:{},sidebar:"API",previous:{title:"CoreDataAdapterConflictResolutionDelegate",permalink:"/api/coredata/CoreDataAdapterConflictResolutionDelegate"},next:{title:"CoreDataAdapterRecordProcessing",permalink:"/api/coredata/CoreDataAdapterRecordProcessing"}},d=[{value:"Requirements",id:"requirements",children:[{value:"coreDataAdapter(_:\u200brequestsContextSaveWithCompletion:\u200b)",id:"coredataadapter_requestscontextsavewithcompletion",children:[]},{value:"coreDataAdapter(_:\u200bdidImportChanges:\u200bcompletion:\u200b)",id:"coredataadapter_didimportchangescompletion",children:[]}]}],s={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coredataadapterdelegate"},"CoreDataAdapterDelegate"),(0,o.kt)("p",null,"An object implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreDataAdapterDelegate")," is responsible for saving the target managed object context at the request of the ",(0,o.kt)("inlineCode",{parentName:"p"},"QSCoreDataAdapter")," in order to persist any downloaded changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public protocol CoreDataAdapterDelegate \n")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"coredataadapter_requestscontextsavewithcompletion"},"coreDataAdapter(","_",":\u200brequestsContextSaveWithCompletion:\u200b)"),(0,o.kt)("p",null,"Asks the delegate to save the target managed object context before attempting to merge downloaded changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func coreDataAdapter(_ adapter: CoreDataAdapter, requestsContextSaveWithCompletion completion: (Error?)->())\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"adapter: The ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreDataAdapter")," requesting the delegate to save."),(0,o.kt)("li",{parentName:"ul"},"completion: Block to be called once the managed object context has been saved.")),(0,o.kt)("h3",{id:"coredataadapter_didimportchangescompletion"},"coreDataAdapter(","_",":\u200bdidImportChanges:\u200bcompletion:\u200b)"),(0,o.kt)("p",null,"Tells the delegate to merge downloaded changes into the managed object context. First, the ",(0,o.kt)("inlineCode",{parentName:"p"},"importContext")," must be saved by using ",(0,o.kt)("inlineCode",{parentName:"p"},"performBlock"),". Then, the target managed object context must be saved to persist those changes and the completion block must be called to finalize the synchronization process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func coreDataAdapter(_ adapter: CoreDataAdapter, didImportChanges importContext: NSManagedObjectContext, completion: (Error?)->())\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"adapter: The ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreDataAdapter")," that is providing the changes."),(0,o.kt)("li",{parentName:"ul"},"importContext: ",(0,o.kt)("inlineCode",{parentName:"li"},"NSManagedObjectContext")," containing all downloaded changes. This context has the target context as its parent context."),(0,o.kt)("li",{parentName:"ul"},"completion: Block to be called once contexts have been saved.")))}u.isMDXComponent=!0}}]);