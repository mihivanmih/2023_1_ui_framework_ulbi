!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t={606:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".my-button {\r\n    padding: 10px 5px;\r\n    color: black;\r\n    border: 1px solid black;\r\n    background: transparent;\r\n}\r\n\r\n\r\n.big-btn {\r\n    font-size: 30px;\r\n    padding: 20px;\r\n}",""]);const s=i},849:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".my-input {\r\n    border: 4px solid teal;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.big-input {\r\n    font-size: 30px;\r\n    padding: 20px;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},844:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(379),o=r.n(n),a=r(795),i=r.n(a),s=r(569),c=r.n(s),l=r(565),u=r.n(l),p=r(216),d=r.n(p),f=r(589),v=r.n(f),y=r(606),b={};b.styleTagTransform=v(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),o()(y.Z,b);const m=y.Z&&y.Z.locals?y.Z.locals:void 0},872:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(379),o=r.n(n),a=r(795),i=r.n(a),s=r(569),c=r.n(s),l=r(565),u=r.n(l),p=r(216),d=r.n(p),f=r(589),v=r.n(f),y=r(849),b={};b.styleTagTransform=v(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),o()(y.Z,b);const m=y.Z&&y.Z.locals?y.Z.locals:void 0},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},519:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(r(156));r(844),t.default=e=>{var{children:t,color:r,big:o}=e,i=n(e,["children","color","big"]);const s=["my-button"];return o&&s.push("big-btn"),a.default.createElement("button",Object.assign({},i,{style:{color:r},className:s.join(" ")}),t)}},633:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(r(156));r(872),t.default=e=>{var{big:t,placeholder:r,label:o}=e,i=n(e,["big","placeholder","label"]);const s=["my-input"];return t&&s.push("big-input"),a.default.createElement("label",null,o,a.default.createElement("input",Object.assign({placeholder:r},i,{className:s.join(" ")})))}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyInput=t.MyButton=void 0;const o=n(r(519));t.MyButton=o.default;const a=n(r(633));t.MyInput=a.default},156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(607)})()));