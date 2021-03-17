(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(130)),c={id:"example",title:"Example app"},i={unversionedId:"example",id:"example",isDocsHomePage:!1,title:"Example app",description:"Example",source:"@site/docs/example.md",slug:"/example",permalink:"/SyncKit/example",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/SyncKit/installation"},next:{title:"SyncKit for Core Data",permalink:"/SyncKit/coredata"}},p=[{value:"Example",id:"example",children:[]},{value:"Other resources",id:"other-resources",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"There are example projects for Core Data, Realm and RealmSwift."),Object(o.b)("p",null,"To run the example project, clone the repo, and run ",Object(o.b)("inlineCode",{parentName:"p"},"pod install")," from the Example directory first.\nBecause the sample project uses CloudKit you will need to use your Apple Developer account to create an app identifier and iCloud container. Then enable CloudKit for the app by going to your target Capabilities page and make sure the right container is accessible by the app.\nIn AppDelegate.swift replace the sample container name with yours:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},'lazy var synchronizer = \n    CloudKitSynchronizer.privateSynchronizer(containerName: "your-iCloud-container-name",\n                           managedObjectContext: self.coreDataStack.managedObjectContext)\n\n')),Object(o.b)("p",null,"You should then be able to run the sample app. "),Object(o.b)("h2",{id:"other-resources"},"Other resources"),Object(o.b)("p",null,"Here's another ",Object(o.b)("a",{parentName:"p",href:"https://github.com/lejeko/synckit"},"Swift version")," of the Core Data example project, courtesy of LeJeko."),Object(o.b)("p",null,"There is also a ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rmpDCqZRjI0"},"video tutorial")," courtesy of ",Object(o.b)("a",{parentName:"p",href:"http://www.spotlessicode.com"},"http://www.spotlessicode.com"),"."))}u.isMDXComponent=!0}}]);