// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).serialize=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function r(t){return"number"==typeof t}function e(t){var n,r="";for(n=0;n<t;n++)r+="0";return r}function i(t,n,r){var i=!1,o=n-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+e(o):e(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var n,e,u;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,u=parseInt(e,10),!isFinite(u)){if(!r(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===t.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),t.precision&&(e=i(e,t.precision,t.padRight)),e="-"+e):(e=u.toString(n),u||t.precision?t.precision&&(e=i(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===a.call(t.specifier)?a.call(e):o.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var n,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((n=t.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(t.precision),t.alternate||(e=p.call(e,m,"$1e"),e=p.call(e,b,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=p.call(e,g,"e+0$1"),e=p.call(e,y,"e-0$1"),t.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,v,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===s.call(t.specifier)?s.call(e):l.call(e)}function _(t){var n,r="";for(n=0;n<t;n++)r+=" ";return r}function j(t,n,r){var e=n-t.length;return e<0?t:t=r?t+_(e):_(e)+t}var A=String.fromCharCode,I=isNaN,x=Array.isArray;function E(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function S(t){var n,r,e,o,a,c,l,s,p;if(!x(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,s=0;s<t.length;s++)if(f(e=t[s]))c+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),r=e.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=r.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,I(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,I(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!I(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=I(a)?String(e.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=j(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function B(t){var n,r,e,i;for(r=[],i=0,e=O.exec(t);e;)(n=t.slice(i,O.lastIndex-e[0].length)).length&&r.push(n),r.push(F(e)),i=O.lastIndex,e=O.exec(t);return(n=t.slice(i)).length&&r.push(n),r}function V(t){return"string"==typeof t}function U(t){var n,r,e;if(!V(t))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=B(t),(r=new Array(arguments.length))[0]=n,e=1;e<r.length;e++)r[e]=arguments[e];return S.apply(null,r)}var k,T=Object.prototype,N=T.toString,P=T.__defineGetter__,L=T.__defineSetter__,D=T.__lookupGetter__,$=T.__lookupSetter__;k=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,r){var e,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(D.call(t,n)||$.call(t,n)?(e=t.__proto__,t.__proto__=T,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(t,n,r.get),a&&L&&L.call(t,n,r.set),t};var C=k;function R(t,n,r){C(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function G(t){return"boolean"==typeof t}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Z(t,n){return null!=t&&X.call(t,n)}var z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof z?z.toStringTag:"";var q=Y()?function(t){var n,r,e;if(null==t)return M.call(t);r=t[H],n=Z(t,H);try{t[H]=void 0}catch(n){return M.call(t)}return e=M.call(t),n?t[H]=r:delete t[H],e}:function(t){return M.call(t)},J=Boolean,K=Boolean.prototype.toString;var Q=Y();function tt(t){return"object"==typeof t&&(t instanceof J||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function nt(t){return G(t)||tt(t)}function rt(){return new Function("return this;")()}R(nt,"isPrimitive",G),R(nt,"isObject",tt);var et="object"==typeof self?self:null,it="object"==typeof window?window:null,ot="object"==typeof global?global:null,at="object"==typeof globalThis?globalThis:null;function ut(t){if(arguments.length){if(!G(t))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return rt()}if(at)return at;if(et)return et;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}var ft=ut();var ct="function"==typeof Uint8Array;var lt="function"==typeof Uint8Array?Uint8Array:null;var st,pt="function"==typeof Uint8Array?Uint8Array:void 0;st=function(){var t,n,r;if("function"!=typeof lt)return!1;try{n=new lt(n=[1,3.14,-3.14,256,257]),r=n,t=(ct&&r instanceof Uint8Array||"[object Uint8Array]"===q(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?pt:function(){throw new Error("not implemented")};var gt=st,yt="function"==typeof Uint16Array;var ht="function"==typeof Uint16Array?Uint16Array:null;var vt,dt="function"==typeof Uint16Array?Uint16Array:void 0;vt=function(){var t,n,r;if("function"!=typeof ht)return!1;try{n=new ht(n=[1,3.14,-3.14,65536,65537]),r=n,t=(yt&&r instanceof Uint16Array||"[object Uint16Array]"===q(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?dt:function(){throw new Error("not implemented")};var bt,mt={uint16:vt,uint8:gt};(bt=new mt.uint16(1))[0]=4660;var wt=52===new mt.uint8(bt.buffer)[0],_t="function"==typeof ArrayBuffer;var jt="function"==typeof Float64Array;var At="function"==typeof Float64Array?Float64Array:null;var It,xt="function"==typeof Float64Array?Float64Array:void 0;It=function(){var t,n,r;if("function"!=typeof At)return!1;try{n=new At([1,3.14,-3.14,NaN]),r=n,t=(jt&&r instanceof Float64Array||"[object Float64Array]"===q(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?xt:function(){throw new Error("not implemented")};var Et=It,St="function"==typeof ArrayBuffer?ArrayBuffer:null;var Ot,Ft="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Ot=function(){var t,n,r,e;if("function"!=typeof St)return!1;try{r=new St(16),e=r,(t=(_t&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===q(e))&&"function"==typeof St.isView)&&((n=new Et(r))[0]=-3.14,n[1]=NaN,t=t&&St.isView(n)&&16===r.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t}()?Ft:function(){throw new Error("not implemented")};var Bt=Ot,Vt="function"==typeof DataView;var Ut="function"==typeof DataView?DataView:null;var kt,Tt="function"==typeof DataView?DataView:void 0;kt=function(){var t,n,r,e;if("function"!=typeof Ut)return!1;try{r=new Bt(24),n=new Ut(r,8),e=n,(t=(Vt&&e instanceof DataView||"[object DataView]"===q(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===r&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t}()?Tt:function(){throw new Error("not implemented")};var Nt=kt,Pt="function"==typeof BigInt?BigInt:void 0,Lt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function Dt(t){return Lt[t]||null}var $t={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Ct(){var t;return 0===arguments.length?$t.all.slice():(t=$t[arguments[0]])?t.slice():[]}function Rt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Gt(t,n,r){C(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Wt(t){return Object.keys(Object(t))}var Yt,Mt=void 0!==Object.keys;function Xt(t){return"[object Arguments]"===q(t)}Yt=function(){return Xt(arguments)}();var Zt=Yt;function zt(t){return"string"==typeof t}var Ht=String.prototype.valueOf;var qt=Y();function Jt(t){return"object"==typeof t&&(t instanceof String||(qt?function(t){try{return Ht.call(t),!0}catch(t){return!1}}(t):"[object String]"===q(t)))}function Kt(t){return zt(t)||Jt(t)}function Qt(t){return"number"==typeof t}R(Kt,"isPrimitive",zt),R(Kt,"isObject",Jt);var tn=Number,nn=tn.prototype.toString;var rn=Y();function en(t){return"object"==typeof t&&(t instanceof tn||(rn?function(t){try{return nn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===q(t)))}function on(t){return Qt(t)||en(t)}function an(t){return t!=t}function un(t){return Qt(t)&&an(t)}function fn(t){return en(t)&&an(t.valueOf())}function cn(t){return un(t)||fn(t)}R(on,"isPrimitive",Qt),R(on,"isObject",en),R(cn,"isPrimitive",un),R(cn,"isObject",fn);var ln=Number.POSITIVE_INFINITY,sn=tn.NEGATIVE_INFINITY,pn=Math.floor;function gn(t){return pn(t)===t}function yn(t){return t<ln&&t>sn&&gn(t)}function hn(t){return Qt(t)&&yn(t)}function vn(t){return en(t)&&yn(t.valueOf())}function dn(t){return hn(t)||vn(t)}R(dn,"isPrimitive",hn),R(dn,"isObject",vn);var bn=Object.prototype.propertyIsEnumerable;var mn=!bn.call("beep","0");function wn(t,n){var r;return null!=t&&(!(r=bn.call(t,n))&&mn&&Kt(t)?!un(n=+n)&&hn(n)&&n>=0&&n<t.length:r)}var _n=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)};var jn=Zt?Xt:function(t){return null!==t&&"object"==typeof t&&!_n(t)&&"number"==typeof t.length&&gn(t.length)&&t.length>=0&&t.length<=4294967295&&Z(t,"callee")&&!wn(t,"callee")},An=Array.prototype.slice;function In(t){return null!==t&&"object"==typeof t}R(In,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var r,e;if(!_n(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(In));var xn=wn((function(){}),"prototype"),En=!wn({toString:null},"toString");function Sn(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&gn(t.length)&&t.length>=0&&t.length<=9007199254740991}function On(t,n,r){var e,i;if(!Sn(t)&&!zt(t))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!hn(r))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=e)return-1;i=r}else(i=e+r)<0&&(i=0)}else i=0;if(cn(n)){for(;i<e;i++)if(cn(t[i]))return i}else for(;i<e;i++)if(t[i]===n)return i;return-1}var Fn=/./,Bn=ut(),Vn=Bn.document&&Bn.document.childNodes,Un=Int8Array;function kn(){return/^\s*function\s*([^(]*)/i}var Tn=/^\s*function\s*([^(]*)/i;function Nn(t){var n,r,e,i;if(("Object"===(r=q(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=Tn.exec(e.toString()))return n[1]}return In(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}R(kn,"REGEXP",Tn);var Pn="function"==typeof Fn||"object"==typeof Un||"function"==typeof Vn?function(t){return Nn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Nn(t).toLowerCase():n};function Ln(t){return t.constructor&&t.constructor.prototype===t}var Dn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],$n="undefined"==typeof window?void 0:window;var Cn=function(){var t;if("undefined"===Pn($n))return!1;for(t in $n)try{-1===On(Dn,t)&&Z($n,t)&&null!==$n[t]&&"object"===Pn($n[t])&&Ln($n[t])}catch(t){return!0}return!1}(),Rn="undefined"!=typeof window;var Gn,Wn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Gn=Mt?function(){return 2!==(Wt(arguments)||"").length}(1,2)?function(t){return jn(t)?Wt(An.call(t)):Wt(t)}:Wt:function(t){var n,r,e,i,o,a,u;if(i=[],jn(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!Z(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(e="function"==typeof t)&&!In(t))return i;r=xn&&e}for(o in t)r&&"prototype"===o||!Z(t,o)||i.push(String(o));if(En)for(n=function(t){if(!1===Rn&&!Cn)return Ln(t);try{return Ln(t)}catch(t){return!1}}(t),u=0;u<Wn.length;u++)a=Wn[u],n&&"constructor"===a||!Z(t,a)||i.push(String(a));return i};var Yn=Gn;R(Ct,"enum",Rt),function(t,n){var r,e,i;for(r=Yn(n),i=0;i<r.length;i++)Gt(t,e=r[i],n[e])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Mn=["row-major","column-major"];function Xn(){return{"row-major":1,"column-major":2}}R((function(){return Mn.slice()}),"enum",Xn);var Zn=["throw","clamp","wrap"];function zn(){return{throw:1,clamp:2,wrap:3}}function Hn(t){return t.dtype}function qn(t){var n,r,e;for(r=t.length,n=[],e=0;e<r;e++)n.push(t[e]);return n}function Jn(t,n){var r=t.shape;return n?qn(r):r}function Kn(t,n){return"column-major"===n?function(t){var n,r,e;for(n=[],r=1,e=0;e<t.length;e++)n.push(r),r*=t[e];return n}(t):function(t){var n,r,e,i;for(n=t.length,r=[],i=0;i<n;i++)r.push(0);for(e=1,i=n-1;i>=0;i--)r[i]=e,e*=t[i];return r}(t)}R((function(){return Zn.slice()}),"enum",zn),R(Kn,"assign",(function(t,n,r){return"column-major"===n?function(t,n){var r,e;for(r=1,e=0;e<t.length;e++)n[e]=r,r*=t[e];return n}(t,r):function(t,n){var r,e;for(r=1,e=t.length-1;e>=0;e--)n[e]=r,r*=t[e];return n}(t,r)}));function Qn(t,n){var r,e,i;return"object"!=typeof(i=t.strides)||null===i?0===(e=t.shape).length?[0]:("string"!=typeof(r=t.order)&&(r="row-major"),Kn(e,r)):n?qn(i):i}function tr(t){var n,r,e;return"number"==typeof(e=t.offset)?e:0===(r=t.shape).length||"object"!=typeof(n=t.strides)||null===n?0:function(t,n){var r,e,i;for(e=t.length,r=0,i=0;i<e;i++)n[i]<0&&(r-=n[i]*(t[i]-1));return r}(r,n)}function nr(t){return Math.abs(t)}var rr="row-major";function er(t){var n,r;return"string"==typeof(r=t.order)?r:"object"!=typeof(n=t.strides)||null===n?rr:(r=function(t){var n,r,e,i,o,a;if(0===(r=t.length))return 0;for(n=!0,e=!0,i=nr(t[0]),a=1;a<r;a++){if(o=nr(t[a]),n&&o<i?n=!1:e&&o>i&&(e=!1),!e&&!n)return 0;i=o}return e&&n?3:e?1:2}(n),1===r||3===r?rr:2===r?"column-major":0===t.shape.length?rr:null)}var ir={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},or={"row-major":1,"column-major":2},ar={throw:1,clamp:2,wrap:3};var ur=new gt(8),fr=new Nt(ur.buffer);function cr(t,n,r,e){var i,o,a;if(0===t){for(a=0;a<ur.length;a++)n[e]=0,e+=r;return n}for(o=(4294967295&t)>>>0,i=pn(t/4294967296),wt?(fr.setUint32(0,o,wt),fr.setUint32(4,i,wt)):(fr.setUint32(0,i,wt),fr.setUint32(4,o,wt)),a=0;a<ur.length;a++)n[e]=ur[a],e+=r;return n}R((function(t){var n,r,e,i;return n=new gt(8),0===t||(i=(4294967295&t)>>>0,e=pn(t/4294967296),r=new Nt(n.buffer),wt?(r.setUint32(0,i,wt),r.setUint32(4,e,wt)):(r.setUint32(0,e,wt),r.setUint32(4,i,wt))),n}),"assign",cr);var lr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},sr={"row-major":1,"column-major":2},pr={throw:1,clamp:2,wrap:3};return"function"==typeof ft.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ft.BigInt("1")&&"bigint"==typeof BigInt("1")?function(t){var n,r,e,i,o,a,u,f,c,l,s,p,g;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(e=Hn(t),i=Jn(t,!1),o=Qn(t,!1),s=i.length,f=t.mode||"throw",p=(a=t.submode||[f]).length,n=Dt(e),c=0,(u=new Nt(new Bt(33+16*s+p))).setInt8(c,wt?1:0),c+=1,u.setInt16(c,ir[e],wt),c+=2,u.setBigInt64(c,Pt(s),wt),l=8*s,c+=8,g=0;g<s;g++)u.setBigInt64(c,Pt(i[g]),wt),u.setBigInt64(c+l,Pt(o[g]*n),wt),c+=8;for(c+=l,u.setBigInt64(c,Pt(tr(t)*n),wt),c+=8,u.setInt8(c,or[er(t)]),c+=1,u.setInt8(c,ar[f]),c+=1,u.setBigInt64(c,Pt(p),wt),c+=8,g=0;g<p;g++)u.setInt8(c,ar[a[g]]),c+=1;return r=0,t.flags&&(r|=t.flags.READONLY?4:0),u.setInt32(c,r,wt),u}:function(t){var n,r,e,i,o,a,u,f,c,l,s,p,g,y;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(i=Hn(t),o=Jn(t,!1),a=Qn(t,!1),p=o.length,c=t.mode||"throw",g=(u=t.submode||[c]).length,n=Dt(i),f=new Nt(new Bt(33+16*p+g)),r=new gt(f.buffer),l=0,f.setInt8(l,wt?1:0),l+=1,f.setInt16(l,lr[i],wt),cr(p,r,1,l+=2),s=8*p,l+=8,y=0;y<p;y++)cr(o[y],r,1,l),cr(a[y]*n,r,1,l+s),l+=8;for(l+=s,cr(tr(t)*n,r,1,l),l+=8,f.setInt8(l,sr[er(t)]),l+=1,f.setInt8(l,pr[c]),cr(g,r,1,l+=1),l+=8,y=0;y<g;y++)f.setInt8(l,pr[u[y]]),l+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),f.setInt32(l,e,wt),f}}));
//# sourceMappingURL=index.js.map
