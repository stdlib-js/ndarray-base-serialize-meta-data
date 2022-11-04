// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).serialize=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,f=r.__lookupGetter__,a=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=c):t[n]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,e.get),p&&u&&u.call(t,n,e.set),t};var c=n;function l(t,n,e){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function g(t,n){return null!=t&&b.call(t,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(t){var n,e,r;if(null==t)return v.call(t);e=t[m],n=g(t,m);try{t[m]=void 0}catch(n){return v.call(t)}return r=v.call(t),n?t[m]=e:delete t[m],r}:function(t){return v.call(t)},d=Boolean.prototype.toString;var h=s();function _(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function j(t){return y(t)||_(t)}function A(){return new Function("return this;")()}l(j,"isPrimitive",y),l(j,"isObject",_);var I="object"==typeof self?self:null,O="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof S?S:null;function E(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(I)return I;if(O)return O;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}var U=E();var x="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var N,V="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var t,n,e;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),e=n,t=(x&&e instanceof Uint8Array||"[object Uint8Array]"===w(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var T=N,P="function"==typeof Uint16Array;var D="function"==typeof Uint16Array?Uint16Array:null;var L,k="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var t,n,e;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,65536,65537]),e=n,t=(P&&e instanceof Uint16Array||"[object Uint16Array]"===w(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,G={uint16:L,uint8:T};(Y=new G.uint16(1))[0]=4660;var C=52===new G.uint8(Y.buffer)[0],M="function"==typeof ArrayBuffer;var R="function"==typeof Float64Array;var X="function"==typeof Float64Array?Float64Array:null;var H,W="function"==typeof Float64Array?Float64Array:void 0;H=function(){var t,n,e;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),e=n,t=(R&&e instanceof Float64Array||"[object Float64Array]"===w(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var z=H,q="function"==typeof ArrayBuffer?ArrayBuffer:null;var J,K="function"==typeof ArrayBuffer?ArrayBuffer:void 0;J=function(){var t,n,e,r;if("function"!=typeof q)return!1;try{e=new q(16),r=e,(t=(M&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===w(r))&&"function"==typeof q.isView)&&((n=new z(e))[0]=-3.14,n[1]=NaN,t=t&&q.isView(n)&&16===e.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t}()?K:function(){throw new Error("not implemented")};var Q=J,Z="function"==typeof DataView;var $="function"==typeof DataView?DataView:null;var tt,nt="function"==typeof DataView?DataView:void 0;tt=function(){var t,n,e,r;if("function"!=typeof $)return!1;try{e=new Q(24),n=new $(e,8),r=n,(t=(Z&&r instanceof DataView||"[object DataView]"===w(r))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===e&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t}()?nt:function(){throw new Error("not implemented")};var et=tt,rt="function"==typeof BigInt?BigInt:void 0,ot={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function it(t){return ot[t]||null}var ut=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function ft(){return ut.slice()}function at(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ct(t,n,e){c(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function lt(t){return Object.keys(Object(t))}var yt,pt=void 0!==Object.keys;function st(t){return"[object Arguments]"===w(t)}yt=function(){return st(arguments)}();var vt=yt;function bt(t){return"string"==typeof t}var gt=String.prototype.valueOf;var mt=s();function wt(t){return"object"==typeof t&&(t instanceof String||(mt?function(t){try{return gt.call(t),!0}catch(t){return!1}}(t):"[object String]"===w(t)))}function dt(t){return bt(t)||wt(t)}function ht(t){return"number"==typeof t}l(dt,"isPrimitive",bt),l(dt,"isObject",wt);var _t=Number,jt=_t.prototype.toString;var At=s();function It(t){return"object"==typeof t&&(t instanceof _t||(At?function(t){try{return jt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function Ot(t){return ht(t)||It(t)}function St(t){return t!=t}function Bt(t){return ht(t)&&St(t)}function Et(t){return It(t)&&St(t.valueOf())}function Ut(t){return Bt(t)||Et(t)}l(Ot,"isPrimitive",ht),l(Ot,"isObject",It),l(Ut,"isPrimitive",Bt),l(Ut,"isObject",Et);var xt=Number.POSITIVE_INFINITY,Ft=_t.NEGATIVE_INFINITY,Nt=Math.floor;function Vt(t){return Nt(t)===t}function Tt(t){return t<xt&&t>Ft&&Vt(t)}function Pt(t){return ht(t)&&Tt(t)}function Dt(t){return It(t)&&Tt(t.valueOf())}function Lt(t){return Pt(t)||Dt(t)}l(Lt,"isPrimitive",Pt),l(Lt,"isObject",Dt);var kt=Object.prototype.propertyIsEnumerable;var Yt=!kt.call("beep","0");function Gt(t,n){var e;return null!=t&&(!(e=kt.call(t,n))&&Yt&&dt(t)?!Bt(n=+n)&&Pt(n)&&n>=0&&n<t.length:e)}var Ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};var Mt=vt?st:function(t){return null!==t&&"object"==typeof t&&!Ct(t)&&"number"==typeof t.length&&Vt(t.length)&&t.length>=0&&t.length<=4294967295&&g(t,"callee")&&!Gt(t,"callee")},Rt=Array.prototype.slice;function Xt(t){return null!==t&&"object"==typeof t}l(Xt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Ct(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Xt));var Ht=Gt((function(){}),"prototype"),Wt=!Gt({toString:null},"toString");function zt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Vt(t.length)&&t.length>=0&&t.length<=9007199254740991}function qt(t,n,e){var r,o;if(!zt(t)&&!bt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Pt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(Ut(n)){for(;o<r;o++)if(Ut(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var Jt=/./,Kt=E(),Qt=Kt.document&&Kt.document.childNodes,Zt=Int8Array;function $t(){return/^\s*function\s*([^(]*)/i}var tn=/^\s*function\s*([^(]*)/i;function nn(t){var n,e,r,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=tn.exec(r.toString()))return n[1]}return Xt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l($t,"REGEXP",tn);var en="function"==typeof Jt||"object"==typeof Zt||"function"==typeof Qt?function(t){return nn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?nn(t).toLowerCase():n};function rn(t){return t.constructor&&t.constructor.prototype===t}var on=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],un="undefined"==typeof window?void 0:window;var fn=function(){var t;if("undefined"===en(un))return!1;for(t in un)try{-1===qt(on,t)&&g(un,t)&&null!==un[t]&&"object"===en(un[t])&&rn(un[t])}catch(t){return!0}return!1}(),an="undefined"!=typeof window;var cn,ln=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];cn=pt?function(){return 2!==(lt(arguments)||"").length}(1,2)?function(t){return Mt(t)?lt(Rt.call(t)):lt(t)}:lt:function(t){var n,e,r,o,i,u,f;if(o=[],Mt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!g(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!Xt(t))return o;e=Ht&&r}for(i in t)e&&"prototype"===i||!g(t,i)||o.push(String(i));if(Wt)for(n=function(t){if(!1===an&&!fn)return rn(t);try{return rn(t)}catch(t){return!1}}(t),f=0;f<ln.length;f++)u=ln[f],n&&"constructor"===u||!g(t,u)||o.push(String(u));return o};var yn=cn;l(ft,"enum",at),function(t,n){var e,r,o;for(e=yn(n),o=0;o<e.length;o++)ct(t,r=e[o],n[r])}(ft,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var pn=["row-major","column-major"];function sn(){return{"row-major":1,"column-major":2}}l((function(){return pn.slice()}),"enum",sn);var vn=["throw","clamp","wrap"];function bn(){return{throw:1,clamp:2,wrap:3}}l((function(){return vn.slice()}),"enum",bn);var gn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},mn={"row-major":1,"column-major":2},wn={throw:1,clamp:2,wrap:3};var dn=new T(8),hn=new et(dn.buffer);function _n(t,n,e,r){var o,i,u;if(0===t){for(u=0;u<dn.length;u++)n[r]=0,r+=e;return n}for(i=(4294967295&t)>>>0,o=Nt(t/4294967296),C?(hn.setUint32(0,i,C),hn.setUint32(4,o,C)):(hn.setUint32(0,o,C),hn.setUint32(4,i,C)),u=0;u<dn.length;u++)n[r]=dn[u],r+=e;return n}l((function(t){var n,e,r,o;return n=new T(8),0===t||(o=(4294967295&t)>>>0,r=Nt(t/4294967296),e=new et(n.buffer),C?(e.setUint32(0,o,C),e.setUint32(4,r,C)):(e.setUint32(0,r,C),e.setUint32(4,o,C))),n}),"assign",_n);var jn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},An={"row-major":1,"column-major":2},In={throw:1,clamp:2,wrap:3};return"function"==typeof U.BigInt&&"function"==typeof BigInt&&"bigint"==typeof U.BigInt("1")&&"bigint"==typeof BigInt("1")?function(t){var n,e,r,o,i,u,f,a,c,l,y,p,s;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(r=t.dtype,o=t.shape,i=t.strides,y=o.length,a=t.mode||"throw",p=(u=t.submode||[a]).length,n=it(r),c=0,(f=new et(new Q(33+16*y+p))).setInt8(c,C?1:0),c+=1,f.setInt16(c,gn[r],C),c+=2,f.setBigInt64(c,rt(y),C),l=8*y,c+=8,s=0;s<y;s++)f.setBigInt64(c,rt(o[s]),C),f.setBigInt64(c+l,rt(i[s]*n),C),c+=8;for(c+=l,f.setBigInt64(c,rt(t.offset*n),C),c+=8,f.setInt8(c,mn[t.order]),c+=1,f.setInt8(c,wn[a]),c+=1,f.setBigInt64(c,rt(p),C),c+=8,s=0;s<p;s++)f.setInt8(c,wn[u[s]]),c+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),f.setInt32(c,e,C),f}:function(t){var n,e,r,o,i,u,f,a,c,l,y,p,s,v;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(o=t.dtype,i=t.shape,u=t.strides,p=i.length,c=t.mode||"throw",s=(f=t.submode||[c]).length,n=it(o),a=new et(new Q(33+16*p+s)),e=new T(a.buffer),l=0,a.setInt8(l,C?1:0),l+=1,a.setInt16(l,jn[o],C),_n(p,e,1,l+=2),y=8*p,l+=8,v=0;v<p;v++)_n(i[v],e,1,l),_n(u[v]*n,e,1,l+y),l+=8;for(l+=y,_n(t.offset*n,e,1,l),l+=8,a.setInt8(l,An[t.order]),l+=1,a.setInt8(l,In[c]),_n(s,e,1,l+=1),l+=8,v=0;v<s;v++)a.setInt8(l,In[f[v]]),l+=1;return r=0,t.flags&&(r|=t.flags.READONLY?4:0),a.setInt32(l,r,C),a}}));
//# sourceMappingURL=index.js.map
