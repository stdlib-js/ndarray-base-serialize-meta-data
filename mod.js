// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&u&&u.call(t,n,r.set),t};var c=n;function l(t,n,r){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function g(t,n){return null!=t&&b.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=s()?function(t){var n,r,e;if(null==t)return v.call(t);r=t[w],n=g(t,w);try{t[w]=void 0}catch(n){return v.call(t)}return e=v.call(t),n?t[w]=r:delete t[w],e}:function(t){return v.call(t)},d=Boolean.prototype.toString;var h=s();function _(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function j(t){return y(t)||_(t)}function A(){return new Function("return this;")()}l(j,"isPrimitive",y),l(j,"isObject",_);var I="object"==typeof self?self:null,O="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof S?S:null;function E(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(I)return I;if(O)return O;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}var U=E();var x="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var N,V="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var t,n,r;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),r=n,t=(x&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var P=N,T="function"==typeof Uint16Array;var D="function"==typeof Uint16Array?Uint16Array:null;var L,k="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var t,n,r;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,65536,65537]),r=n,t=(T&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,G={uint16:L,uint8:P};(Y=new G.uint16(1))[0]=4660;var C=52===new G.uint8(Y.buffer)[0],M="function"==typeof ArrayBuffer;var R="function"==typeof Float64Array;var X="function"==typeof Float64Array?Float64Array:null;var H,W="function"==typeof Float64Array?Float64Array:void 0;H=function(){var t,n,r;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),r=n,t=(R&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var q=H,z="function"==typeof ArrayBuffer?ArrayBuffer:null;var J,K="function"==typeof ArrayBuffer?ArrayBuffer:void 0;J=function(){var t,n,r,e;if("function"!=typeof z)return!1;try{r=new z(16),e=r,(t=(M&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===m(e))&&"function"==typeof z.isView)&&((n=new q(r))[0]=-3.14,n[1]=NaN,t=t&&z.isView(n)&&16===r.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t}()?K:function(){throw new Error("not implemented")};var Q=J,Z="function"==typeof DataView;var $="function"==typeof DataView?DataView:null;var tt,nt="function"==typeof DataView?DataView:void 0;tt=function(){var t,n,r,e;if("function"!=typeof $)return!1;try{r=new Q(24),n=new $(r,8),e=n,(t=(Z&&e instanceof DataView||"[object DataView]"===m(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===r&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t}()?nt:function(){throw new Error("not implemented")};var rt=tt,et="function"==typeof BigInt?BigInt:void 0,ot={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function it(t){return ot[t]||null}var ut=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function ft(){return ut.slice()}function at(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ct(t,n,r){c(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function lt(t){return Object.keys(Object(t))}var yt=void 0!==Object.keys;function pt(t){return"[object Arguments]"===m(t)}var st=function(){return pt(arguments)}();function vt(t){return"string"==typeof t}var bt=String.prototype.valueOf;var gt=s();function wt(t){return"object"==typeof t&&(t instanceof String||(gt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function mt(t){return vt(t)||wt(t)}function dt(t){return"number"==typeof t}l(mt,"isPrimitive",vt),l(mt,"isObject",wt);var ht=Number,_t=ht.prototype.toString;var jt=s();function At(t){return"object"==typeof t&&(t instanceof ht||(jt?function(t){try{return _t.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function It(t){return dt(t)||At(t)}function Ot(t){return t!=t}function St(t){return dt(t)&&Ot(t)}function Bt(t){return At(t)&&Ot(t.valueOf())}function Et(t){return St(t)||Bt(t)}l(It,"isPrimitive",dt),l(It,"isObject",At),l(Et,"isPrimitive",St),l(Et,"isObject",Bt);var Ut=Number.POSITIVE_INFINITY,xt=ht.NEGATIVE_INFINITY,Ft=Math.floor;function Nt(t){return Ft(t)===t}function Vt(t){return t<Ut&&t>xt&&Nt(t)}function Pt(t){return dt(t)&&Vt(t)}function Tt(t){return At(t)&&Vt(t.valueOf())}function Dt(t){return Pt(t)||Tt(t)}l(Dt,"isPrimitive",Pt),l(Dt,"isObject",Tt);var Lt=Object.prototype.propertyIsEnumerable;var kt=!Lt.call("beep","0");function Yt(t,n){var r;return null!=t&&(!(r=Lt.call(t,n))&&kt&&mt(t)?!St(n=+n)&&Pt(n)&&n>=0&&n<t.length:r)}var Gt=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var Ct=st?pt:function(t){return null!==t&&"object"==typeof t&&!Gt(t)&&"number"==typeof t.length&&Nt(t.length)&&t.length>=0&&t.length<=4294967295&&g(t,"callee")&&!Yt(t,"callee")},Mt=Array.prototype.slice;function Rt(t){return null!==t&&"object"==typeof t}l(Rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!Gt(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(Rt));var Xt=Yt((function(){}),"prototype"),Ht=!Yt({toString:null},"toString");function Wt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Nt(t.length)&&t.length>=0&&t.length<=9007199254740991}function qt(t,n,r){var e,o;if(!Wt(t)&&!vt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!Pt(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;o=r}else(o=e+r)<0&&(o=0)}else o=0;if(Et(n)){for(;o<e;o++)if(Et(t[o]))return o}else for(;o<e;o++)if(t[o]===n)return o;return-1}var zt=/./,Jt=E(),Kt=Jt.document&&Jt.document.childNodes,Qt=Int8Array;function Zt(){return/^\s*function\s*([^(]*)/i}var $t=/^\s*function\s*([^(]*)/i;function tn(t){var n,r,e,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=$t.exec(e.toString()))return n[1]}return Rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(Zt,"REGEXP",$t);var nn="function"==typeof zt||"object"==typeof Qt||"function"==typeof Kt?function(t){return tn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?tn(t).toLowerCase():n};function rn(t){return t.constructor&&t.constructor.prototype===t}var en=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],on="undefined"==typeof window?void 0:window;var un=function(){var t;if("undefined"===nn(on))return!1;for(t in on)try{-1===qt(en,t)&&g(on,t)&&null!==on[t]&&"object"===nn(on[t])&&rn(on[t])}catch(t){return!0}return!1}(),fn="undefined"!=typeof window;var an=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var cn=yt?function(){return 2!==(lt(arguments)||"").length}(1,2)?function(t){return Ct(t)?lt(Mt.call(t)):lt(t)}:lt:function(t){var n,r,e,o,i,u,f;if(o=[],Ct(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!g(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(e="function"==typeof t)&&!Rt(t))return o;r=Xt&&e}for(i in t)r&&"prototype"===i||!g(t,i)||o.push(String(i));if(Ht)for(n=function(t){if(!1===fn&&!un)return rn(t);try{return rn(t)}catch(t){return!1}}(t),f=0;f<an.length;f++)u=an[f],n&&"constructor"===u||!g(t,u)||o.push(String(u));return o};l(ft,"enum",at),function(t,n){var r,e,o;for(r=cn(n),o=0;o<r.length;o++)ct(t,e=r[o],n[e])}(ft,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var ln=["row-major","column-major"];function yn(){return{"row-major":1,"column-major":2}}l((function(){return ln.slice()}),"enum",yn);var pn=["throw","clamp","wrap"];function sn(){return{throw:1,clamp:2,wrap:3}}l((function(){return pn.slice()}),"enum",sn);var vn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},bn={"row-major":1,"column-major":2},gn={throw:1,clamp:2,wrap:3};var wn=new P(8),mn=new rt(wn.buffer);function dn(t,n,r,e){var o,i,u;if(0===t){for(u=0;u<wn.length;u++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,o=Ft(t/4294967296),C?(mn.setUint32(0,i,C),mn.setUint32(4,o,C)):(mn.setUint32(0,o,C),mn.setUint32(4,i,C)),u=0;u<wn.length;u++)n[e]=wn[u],e+=r;return n}l((function(t){var n,r,e,o;return n=new P(8),0===t||(o=(4294967295&t)>>>0,e=Ft(t/4294967296),r=new rt(n.buffer),C?(r.setUint32(0,o,C),r.setUint32(4,e,C)):(r.setUint32(0,e,C),r.setUint32(4,o,C))),n}),"assign",dn);var hn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},_n={"row-major":1,"column-major":2},jn={throw:1,clamp:2,wrap:3};var An="function"==typeof U.BigInt&&"function"==typeof BigInt&&"bigint"==typeof U.BigInt("1")&&"bigint"==typeof BigInt("1")?function(t){var n,r,e,o,i,u,f,a,c,l,y,p,s;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(e=t.dtype,o=t.shape,i=t.strides,y=o.length,a=t.mode||"throw",p=(u=t.submode||[a]).length,n=it(e),c=0,(f=new rt(new Q(33+16*y+p))).setInt8(c,C?1:0),c+=1,f.setInt16(c,vn[e],C),c+=2,f.setBigInt64(c,et(y),C),l=8*y,c+=8,s=0;s<y;s++)f.setBigInt64(c,et(o[s]),C),f.setBigInt64(c+l,et(i[s]*n),C),c+=8;for(c+=l,f.setBigInt64(c,et(t.offset*n),C),c+=8,f.setInt8(c,bn[t.order]),c+=1,f.setInt8(c,gn[a]),c+=1,f.setBigInt64(c,et(p),C),c+=8,s=0;s<p;s++)f.setInt8(c,gn[u[s]]),c+=1;return r=0,t.flags&&(r|=t.flags.READONLY?4:0),f.setInt32(c,r,C),f}:function(t){var n,r,e,o,i,u,f,a,c,l,y,p,s,v;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(o=t.dtype,i=t.shape,u=t.strides,p=i.length,c=t.mode||"throw",s=(f=t.submode||[c]).length,n=it(o),a=new rt(new Q(33+16*p+s)),r=new P(a.buffer),l=0,a.setInt8(l,C?1:0),l+=1,a.setInt16(l,hn[o],C),dn(p,r,1,l+=2),y=8*p,l+=8,v=0;v<p;v++)dn(i[v],r,1,l),dn(u[v]*n,r,1,l+y),l+=8;for(l+=y,dn(t.offset*n,r,1,l),l+=8,a.setInt8(l,_n[t.order]),l+=1,a.setInt8(l,jn[c]),dn(s,r,1,l+=1),l+=8,v=0;v<s;v++)a.setInt8(l,jn[f[v]]),l+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),a.setInt32(l,e,C),a};export{An as default};
//# sourceMappingURL=mod.js.map
