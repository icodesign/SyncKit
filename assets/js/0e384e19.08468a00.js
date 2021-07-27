(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[9671],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),f=l(n),y=o,d=f["".concat(u,".").concat(y)]||f[y]||p[y]||i;return n?r.createElement(d,c(c({ref:e},s),{},{components:n})):r.createElement(d,c({ref:e},s))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},426:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c=["components"],a={id:"intro",title:"Introduction",slug:"/"},u="SyncKit",l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Introduction",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",version:"current",frontMatter:{id:"intro",title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/installation"}},s=[{value:"Introduction",id:"introduction",children:[]}],p={toc:s};function f(t){var e=t.components,n=(0,o.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"synckit"},"SyncKit"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"SyncKit is a library for iOS and OS X that automates the process of synchronizing Core Data or Realm models using CloudKit."),(0,i.kt)("p",null,"SyncKit uses introspection to work with any model. It sits next to your Core Data or Realm stack, making it easy to opt in or out of synchronization without imposing any requirements on your model."))}f.isMDXComponent=!0}}]);