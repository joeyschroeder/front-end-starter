(()=>{"use strict";var e,t,r,n={"./src/index.js":(e,t,r)=>{var n=r("./node_modules/react/index.js"),o=r("./node_modules/redux/es/redux.js"),l=r("./node_modules/redux-thunk/es/index.js"),a=r("./node_modules/redux-actions/es/createAction.js"),u=r("./node_modules/redux-actions/es/handleActions.js");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){var n;return n=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==i(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m="sample",p="".concat(m,"/UPDATE"),d="".concat(m,"/RESET"),y=(0,a.Z)(p),b=(0,a.Z)(d),v={sampleValue:0},h=(0,u.Z)(f(f({},d,(function(){return s({},v)})),p,(function(e){var t=e.sampleValue;return s(s({},e),{},{sampleValue:t+1})})),v),g=function(e){return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})[m]||{}}(e).sampleValue||v.sampleValue};function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t,r){var n;return n=function(e,t){if("object"!=E(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==E(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=r("./node_modules/react-dom/client.js"),S=r("./node_modules/prop-types/index.js"),P=r.n(S);const w={root:"lR1Og"};function x(e){var t=e.children;return n.createElement("div",{className:w.root},t)}x.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node])},x.defaultProps={children:null};const _={root:"Zggqh"};function T(e){var t=e.children;return n.createElement("div",{className:_.root},t)}T.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node])},T.defaultProps={children:null};var N=r("./node_modules/react-router-dom/dist/index.js");const k={root:"tDIVL"};function C(e){var t=e.children,r=e.onClick,o=e.to;return o?n.createElement(N.rU,{className:k.root,to:o},t):n.createElement("button",{className:k.root,type:"button",onClick:r},t)}C.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node]),onClick:P().func,to:P().string},C.defaultProps={children:null,onClick:null,to:""};var R=r("./node_modules/classnames/index.js"),D=r.n(R);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function V(e,t,r){var n;return n=function(e,t){if("object"!=A(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==A(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){var t=e.className,r=e.name,o=D()("fa","fa-fw",t,V({},"fa-".concat(r),r));return n.createElement("i",{className:o,"aria-hidden":"true"})}Z.propTypes={className:P().string,name:P().string},Z.defaultProps={className:"",name:"bell-o"};var U=r("./node_modules/react-router/dist/index.js"),M={SPLASH:"/",REDUX:"redux"};function L(){return n.createElement(x,null,n.createElement(T,null,n.createElement(C,{to:M.SPLASH},n.createElement(Z,{name:"home"})),n.createElement(C,{to:M.REDUX},n.createElement(Z,{name:"database"}))),n.createElement(U.j3,null))}var B=r("./node_modules/react-redux/es/index.js");const X={root:"hQSA5"};function H(e){var t=e.children,r=e.onClick;return n.createElement("button",{className:X.root,type:"button",onClick:r},t)}H.propTypes={children:P().oneOfType([P().arrayOf(P().node),P().node]),onClick:P().func},H.defaultProps={children:null,onClick:null};const I={root:"rZ8L2",centerContent:"Bjtnf"};function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function W(e,t,r){var n;return n=function(e,t){if("object"!=J(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==J(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e){var t=e.children,r=e.centerContent,o=e.className,l=D()("animated","fadeIn",o,I.root,W({},I.centerContent,r));return n.createElement("div",{className:l},t)}K.propTypes={centerContent:P().bool,children:P().oneOfType([P().arrayOf(P().node),P().node]),className:P().string},K.defaultProps={centerContent:!1,children:null,className:""};const q="u8VZZ";function z(e){var t=e.reset,r=e.update,o=e.value;return n.createElement(K,{className:q},n.createElement("h1",null,"REDUX"),n.createElement("p",null,"Redux is a predictable state container for JavaScript apps."),n.createElement("p",null,"This application includes ",n.createElement("strong",null,"React-Redux")," along with a sample reducer and action set following the"," ",n.createElement("a",{href:"https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c",target:"_blank",rel:"noopener noreferrer"},"Redux Duck Pattern"),"."),n.createElement("h2",null,"Redux Value:",o),n.createElement("p",null,"Click the following buttons to update and reset the value stored in the Redux store. Note that you can leave this page and return and the value will be saved."),n.createElement(H,{onClick:r},"Update"),n.createElement(H,{onClick:t},"Reset"))}z.propTypes={reset:P().func,update:P().func,value:P().number},z.defaultProps={reset:function(){},update:function(){},value:0};var F={update:y,reset:b},Q=(0,B.$j)((function(e){return{value:g(e)}}),F)(z);const Y={root:"gDppM",primary:"KM95l"};function $(){return n.createElement(K,{centerContent:!0,className:Y.root},n.createElement("div",{className:Y.primary},n.createElement("h1",null,n.createElement("strong",null,"Front-End")," Starter"),n.createElement("p",null,"This project is designed to get you up and running with your next front-end, JavaScript application faster than ever! This project includes ",n.createElement("strong",null,"React"),", ",n.createElement("strong",null,"Redux"),", and many other utilities for easily maintaining a front-end application.")))}const G=JSON.parse('{"u2":"front-end-starter"}');var ee="production"===r("./node_modules/process/browser.js").env.BABEL_ENV?G.u2:"";function te(e){var t=e.store;return n.createElement(B.zt,{store:t},n.createElement(N.VK,{basename:ee},n.createElement(U.Z5,null,n.createElement(U.AW,{path:"/",element:n.createElement(L,null)},n.createElement(U.AW,{path:M.SPLASH,element:n.createElement($,null)}),n.createElement(U.AW,{path:M.REDUX,element:n.createElement(Q,null)})))))}te.propTypes={store:P().object},te.defaultProps={store:null};var re=document.getElementById("app"),ne=(0,O.s)(re),oe=(0,o.MT)((0,o.UY)(j({},m,h)),(0,o.md)(l.Z));ne.render(n.createElement(te,{store:oe}))}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,l),r.exports}l.m=n,e=[],l.O=(t,r,n,o)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],u=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(u=!1,o<a&&(a=o));if(u){e.splice(s--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var u=2&n&&e;"object"==typeof u&&!~t.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(o,a),o},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,u,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in u)l.o(u,n)&&(l.m[n]=u[n]);if(i)var s=i(l)}for(t&&t(r);c<a.length;c++)o=a[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},r=self.webpackChunkfront_end_starter=self.webpackChunkfront_end_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=l.O(void 0,[736],(()=>l("./src/index.js")));a=l.O(a)})();