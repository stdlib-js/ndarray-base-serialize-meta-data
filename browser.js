// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(t){return"number"==typeof t}function r(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function i(t,n,e){var i=!1,o=n-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+r(o):r(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var n,r,u;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(r=t.arg,u=parseInt(r,10),!isFinite(u)){if(!e(r))throw new Error("invalid integer. Value: "+r);u=0}return u<0&&("u"===t.specifier||10!==n)&&(u=4294967295+u+1),u<0?(r=(-u).toString(n),t.precision&&(r=i(r,t.precision,t.padRight)),r="-"+r):(r=u.toString(n),u||t.precision?t.precision&&(r=i(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===n&&(t.alternate&&(r="0x"+r),r=t.specifier===a.call(t.specifier)?a.call(r):o.call(r)),8===n&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function f(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function v(t){var n,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((n=t.precision)>0&&(n-=1),r=i.toExponential(n)):r=i.toPrecision(t.precision),t.alternate||(r=p.call(r,w,"$1e"),r=p.call(r,m,"e"),r=p.call(r,b,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=p.call(r,g,"e+0$1"),r=p.call(r,y,"e-0$1"),t.alternate&&(r=p.call(r,h,"$1."),r=p.call(r,d,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===s.call(t.specifier)?s.call(r):l.call(r)}function _(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function j(t,n,e){var r=n-t.length;return r<0?t:t=e?t+_(r):_(r)+t}var A=String.fromCharCode,I=isNaN,x=Array.isArray;function E(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function S(t){var n,e,r,o,a,c,l,s,p;if(!x(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,s=0;s<t.length;s++)if(f(r=t[s]))c+=r;else{if(n=void 0!==r.precision,!(r=E(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+r+"`.");for(r.mapping&&(l=r.mapping),e=r.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[l],10),l+=1,I(r.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[l],10),l+=1,I(r.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[l],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=u(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!I(r.arg)){if((a=parseInt(r.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=I(a)?String(r.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=v(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=i(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=j(r.arg,r.width,r.padRight)),c+=r.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function B(t){var n,e,r,i;for(e=[],i=0,r=O.exec(t);r;)(n=t.slice(i,O.lastIndex-r[0].length)).length&&e.push(n),e.push(F(r)),i=O.lastIndex,r=O.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function V(t){return"string"==typeof t}function U(t){var n,e,r;if(!V(t))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=B(t),(e=new Array(arguments.length))[0]=n,r=1;r<e.length;r++)e[r]=arguments[r];return S.apply(null,e)}var k,T=Object.prototype,N=T.toString,P=T.__defineGetter__,L=T.__defineSetter__,D=T.__lookupGetter__,$=T.__lookupSetter__;k=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,e){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(D.call(t,n)||$.call(t,n)?(r=t.__proto__,t.__proto__=T,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(t,n,e.get),a&&L&&L.call(t,n,e.set),t};var C=k;function R(t,n,e){C(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function G(t){return"boolean"==typeof t}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Z(t,n){return null!=t&&X.call(t,n)}var z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof z?z.toStringTag:"",q=Y()?function(t){var n,e,r;if(null==t)return M.call(t);e=t[H],n=Z(t,H);try{t[H]=void 0}catch(n){return M.call(t)}return r=M.call(t),n?t[H]=e:delete t[H],r}:function(t){return M.call(t)},J=Boolean,K=Boolean.prototype.toString,Q=Y();function tt(t){return"object"==typeof t&&(t instanceof J||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function nt(t){return G(t)||tt(t)}function et(){return new Function("return this;")()}R(nt,"isPrimitive",G),R(nt,"isObject",tt);var rt="object"==typeof self?self:null,it="object"==typeof window?window:null,ot="object"==typeof globalThis?globalThis:null;function at(t){if(arguments.length){if(!G(t))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return et()}if(ot)return ot;if(rt)return rt;if(it)return it;throw new Error("unexpected error. Unable to resolve global object.")}var ut,ft=at(),ct="function"==typeof Uint8Array,lt="function"==typeof Uint8Array?Uint8Array:null,st="function"==typeof Uint8Array?Uint8Array:void 0;ut=function(){var t,n,e;if("function"!=typeof lt)return!1;try{n=new lt(n=[1,3.14,-3.14,256,257]),e=n,t=(ct&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?st:function(){throw new Error("not implemented")};var pt,gt=ut,yt="function"==typeof Uint16Array,ht="function"==typeof Uint16Array?Uint16Array:null,dt="function"==typeof Uint16Array?Uint16Array:void 0;pt=function(){var t,n,e;if("function"!=typeof ht)return!1;try{n=new ht(n=[1,3.14,-3.14,65536,65537]),e=n,t=(yt&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?dt:function(){throw new Error("not implemented")};var bt,mt={uint16:pt,uint8:gt};(bt=new mt.uint16(1))[0]=4660;var wt,vt=52===new mt.uint8(bt.buffer)[0],_t="function"==typeof ArrayBuffer,jt="function"==typeof Float64Array,At="function"==typeof Float64Array?Float64Array:null,It="function"==typeof Float64Array?Float64Array:void 0;wt=function(){var t,n,e;if("function"!=typeof At)return!1;try{n=new At([1,3.14,-3.14,NaN]),e=n,t=(jt&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?It:function(){throw new Error("not implemented")};var xt,Et=wt,St="function"==typeof ArrayBuffer?ArrayBuffer:null,Ot="function"==typeof ArrayBuffer?ArrayBuffer:void 0;xt=function(){var t,n,e,r;if("function"!=typeof St)return!1;try{e=new St(16),r=e,(t=(_t&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===q(r))&&"function"==typeof St.isView)&&((n=new Et(e))[0]=-3.14,n[1]=NaN,t=t&&St.isView(n)&&16===e.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t}()?Ot:function(){throw new Error("not implemented")};var Ft,Bt=xt,Vt="function"==typeof DataView,Ut="function"==typeof DataView?DataView:null,kt="function"==typeof DataView?DataView:void 0;Ft=function(){var t,n,e,r;if("function"!=typeof Ut)return!1;try{e=new Bt(24),n=new Ut(e,8),r=n,(t=(Vt&&r instanceof DataView||"[object DataView]"===q(r))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===e&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t}()?kt:function(){throw new Error("not implemented")};var Tt=Ft,Nt="function"==typeof BigInt?BigInt:void 0,Pt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function Lt(t){return Pt[t]||null}var Dt={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function $t(){var t;return 0===arguments.length?Dt.all.slice():(t=Dt[arguments[0]])?t.slice():[]}function Ct(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Rt(t,n,e){C(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Gt(t){return Object.keys(Object(t))}var Wt,Yt=void 0!==Object.keys;function Mt(t){return"[object Arguments]"===q(t)}Wt=function(){return Mt(arguments)}();var Xt=Wt;function Zt(t){return"string"==typeof t}var zt=String.prototype.valueOf,Ht=Y();function qt(t){return"object"==typeof t&&(t instanceof String||(Ht?function(t){try{return zt.call(t),!0}catch(t){return!1}}(t):"[object String]"===q(t)))}function Jt(t){return Zt(t)||qt(t)}function Kt(t){return"number"==typeof t}R(Jt,"isPrimitive",Zt),R(Jt,"isObject",qt);var Qt=Number,tn=Qt.prototype.toString,nn=Y();function en(t){return"object"==typeof t&&(t instanceof Qt||(nn?function(t){try{return tn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===q(t)))}function rn(t){return Kt(t)||en(t)}function on(t){return t!=t}function an(t){return Kt(t)&&on(t)}function un(t){return en(t)&&on(t.valueOf())}function fn(t){return an(t)||un(t)}R(rn,"isPrimitive",Kt),R(rn,"isObject",en),R(fn,"isPrimitive",an),R(fn,"isObject",un);var cn=Number.POSITIVE_INFINITY,ln=Qt.NEGATIVE_INFINITY,sn=Math.floor;function pn(t){return sn(t)===t}function gn(t){return t<cn&&t>ln&&pn(t)}function yn(t){return Kt(t)&&gn(t)}function hn(t){return en(t)&&gn(t.valueOf())}function dn(t){return yn(t)||hn(t)}R(dn,"isPrimitive",yn),R(dn,"isObject",hn);var bn=Object.prototype.propertyIsEnumerable,mn=!bn.call("beep","0");function wn(t,n){var e;return null!=t&&(!(e=bn.call(t,n))&&mn&&Jt(t)?!an(n=+n)&&yn(n)&&n>=0&&n<t.length:e)}var vn=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)},_n=Xt?Mt:function(t){return null!==t&&"object"==typeof t&&!vn(t)&&"number"==typeof t.length&&pn(t.length)&&t.length>=0&&t.length<=4294967295&&Z(t,"callee")&&!wn(t,"callee")},jn=Array.prototype.slice;function An(t){return null!==t&&"object"==typeof t}R(An,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!vn(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(An));var In=wn((function(){}),"prototype"),xn=!wn({toString:null},"toString");function En(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&pn(t.length)&&t.length>=0&&t.length<=9007199254740991}function Sn(t,n,e){var r,i;if(!En(t)&&!Zt(t))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!yn(e))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(fn(n)){for(;i<r;i++)if(fn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var On=/./,Fn=at(),Bn=Fn.document&&Fn.document.childNodes,Vn=Int8Array;function Un(){return/^\s*function\s*([^(]*)/i}var kn=/^\s*function\s*([^(]*)/i;function Tn(t){var n,e,r,i;if(("Object"===(e=q(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=kn.exec(r.toString()))return n[1]}return An(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}R(Un,"REGEXP",kn);var Nn="function"==typeof On||"object"==typeof Vn||"function"==typeof Bn?function(t){return Tn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"==(n=typeof t)?Tn(t).toLowerCase():n};function Pn(t){return t.constructor&&t.constructor.prototype===t}var Ln,Dn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],$n="undefined"==typeof window?void 0:window,Cn=function(){var t;if("undefined"===Nn($n))return!1;for(t in $n)try{-1===Sn(Dn,t)&&Z($n,t)&&null!==$n[t]&&"object"===Nn($n[t])&&Pn($n[t])}catch(t){return!0}return!1}(),Rn="undefined"!=typeof window,Gn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ln=Yt?function(){return 2!==(Gt(arguments)||"").length}(1,2)?function(t){return _n(t)?Gt(jn.call(t)):Gt(t)}:Gt:function(t){var n,e,r,i,o,a,u;if(i=[],_n(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!Z(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(0==(r="function"==typeof t)&&!An(t))return i;e=In&&r}for(o in t)e&&"prototype"===o||!Z(t,o)||i.push(String(o));if(xn)for(n=function(t){if(!1===Rn&&!Cn)return Pn(t);try{return Pn(t)}catch(t){return!1}}(t),u=0;u<Gn.length;u++)a=Gn[u],n&&"constructor"===a||!Z(t,a)||i.push(String(a));return i};var Wn=Ln;R($t,"enum",Ct),function(t,n){var e,r,i;for(e=Wn(n),i=0;i<e.length;i++)Rt(t,r=e[i],n[r])}($t,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Yn=["row-major","column-major"];function Mn(){return{"row-major":1,"column-major":2}}R((function(){return Yn.slice()}),"enum",Mn);var Xn=["throw","clamp","wrap"];function Zn(){return{throw:1,clamp:2,wrap:3}}function zn(t){return t.dtype}function Hn(t){var n,e,r;for(e=t.length,n=[],r=0;r<e;r++)n.push(t[r]);return n}function qn(t,n){var e=t.shape;return n?Hn(e):e}function Jn(t,n){return"column-major"===n?function(t){var n,e,r;for(n=[],e=1,r=0;r<t.length;r++)n.push(e),e*=t[r];return n}(t):function(t){var n,e,r,i;for(n=t.length,e=[],i=0;i<n;i++)e.push(0);for(r=1,i=n-1;i>=0;i--)e[i]=r,r*=t[i];return e}(t)}function Kn(t,n){var e,r,i;return"object"!=typeof(i=t.strides)||null===i?0===(r=t.shape).length?[0]:("string"!=typeof(e=t.order)&&(e="row-major"),Jn(r,e)):n?Hn(i):i}function Qn(t){var n,e,r;return"number"==typeof(r=t.offset)?r:0===(e=t.shape).length||"object"!=typeof(n=t.strides)||null===n?0:function(t,n){var e,r,i;for(r=t.length,e=0,i=0;i<r;i++)n[i]<0&&(e-=n[i]*(t[i]-1));return e}(e,n)}function te(t){return Math.abs(t)}R((function(){return Xn.slice()}),"enum",Zn),R(Jn,"assign",(function(t,n,e){return"column-major"===n?function(t,n){var e,r;for(e=1,r=0;r<t.length;r++)n[r]=e,e*=t[r];return n}(t,e):function(t,n){var e,r;for(e=1,r=t.length-1;r>=0;r--)n[r]=e,e*=t[r];return n}(t,e)}));var ne="row-major";function ee(t){var n,e;return"string"==typeof(e=t.order)?e:"object"!=typeof(n=t.strides)||null===n?ne:(e=function(t){var n,e,r,i,o,a;if(0===(e=t.length))return 0;for(n=!0,r=!0,i=te(t[0]),a=1;a<e;a++){if(o=te(t[a]),n&&o<i?n=!1:r&&o>i&&(r=!1),!r&&!n)return 0;i=o}return r&&n?3:r?1:2}(n),1===e||3===e?ne:2===e?"column-major":0===t.shape.length?ne:null)}var re={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ie={"row-major":1,"column-major":2},oe={throw:1,clamp:2,wrap:3},ae=new gt(8),ue=new Tt(ae.buffer);function fe(t,n,e,r){var i,o,a;if(0===t){for(a=0;a<ae.length;a++)n[r]=0,r+=e;return n}for(o=(4294967295&t)>>>0,i=sn(t/4294967296),vt?(ue.setUint32(0,o,vt),ue.setUint32(4,i,vt)):(ue.setUint32(0,i,vt),ue.setUint32(4,o,vt)),a=0;a<ae.length;a++)n[r]=ae[a],r+=e;return n}R((function(t){var n,e,r,i;return n=new gt(8),0===t||(i=(4294967295&t)>>>0,r=sn(t/4294967296),e=new Tt(n.buffer),vt?(e.setUint32(0,i,vt),e.setUint32(4,r,vt)):(e.setUint32(0,r,vt),e.setUint32(4,i,vt))),n}),"assign",fe);var ce={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},le={"row-major":1,"column-major":2},se={throw:1,clamp:2,wrap:3};return"function"==typeof ft.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ft.BigInt("1")&&"bigint"==typeof BigInt("1")?function(t){var n,e,r,i,o,a,u,f,c,l,s,p,g;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(r=zn(t),i=qn(t,!1),o=Kn(t,!1),s=i.length,f=t.mode||"throw",p=(a=t.submode||[f]).length,n=Lt(r),c=0,(u=new Tt(new Bt(33+16*s+p))).setInt8(c,vt?1:0),c+=1,u.setInt16(c,re[r],vt),c+=2,u.setBigInt64(c,Nt(s),vt),l=8*s,c+=8,g=0;g<s;g++)u.setBigInt64(c,Nt(i[g]),vt),u.setBigInt64(c+l,Nt(o[g]*n),vt),c+=8;for(c+=l,u.setBigInt64(c,Nt(Qn(t)*n),vt),c+=8,u.setInt8(c,ie[ee(t)]),c+=1,u.setInt8(c,oe[f]),c+=1,u.setBigInt64(c,Nt(p),vt),c+=8,g=0;g<p;g++)u.setInt8(c,oe[a[g]]),c+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),u.setInt32(c,e,vt),u}:function(t){var n,e,r,i,o,a,u,f,c,l,s,p,g,y;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(i=zn(t),o=qn(t,!1),a=Kn(t,!1),p=o.length,c=t.mode||"throw",g=(u=t.submode||[c]).length,n=Lt(i),f=new Tt(new Bt(33+16*p+g)),e=new gt(f.buffer),l=0,f.setInt8(l,vt?1:0),l+=1,f.setInt16(l,ce[i],vt),fe(p,e,1,l+=2),s=8*p,l+=8,y=0;y<p;y++)fe(o[y],e,1,l),fe(a[y]*n,e,1,l+s),l+=8;for(l+=s,fe(Qn(t)*n,e,1,l),l+=8,f.setInt8(l,le[ee(t)]),l+=1,f.setInt8(l,se[c]),fe(g,e,1,l+=1),l+=8,y=0;y<g;y++)f.setInt8(l,se[u[y]]),l+=1;return r=0,t.flags&&(r|=t.flags.READONLY?4:0),f.setInt32(l,r,vt),f}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).serialize=n();
//# sourceMappingURL=browser.js.map
