// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function r(t){return"number"==typeof t}function e(t){var n,r="";for(n=0;n<t;n++)r+="0";return r}function i(t,n,r){var i=!1,o=n-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+e(o):e(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var n,e,u;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,u=parseInt(e,10),!isFinite(u)){if(!r(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===t.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),t.precision&&(e=i(e,t.precision,t.padRight)),e="-"+e):(e=u.toString(n),u||t.precision?t.precision&&(e=i(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===a.call(t.specifier)?a.call(e):o.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,m=/(\..*[^0])0*e/;function b(t){var n,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":f(i)<1e-4?((n=t.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(t.precision),t.alternate||(e=s.call(e,m,"$1e"),e=s.call(e,d,"e"),e=s.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=s.call(e,p,"e+0$1"),e=s.call(e,g,"e-0$1"),t.alternate&&(e=s.call(e,y,"$1."),e=s.call(e,v,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===l.call(t.specifier)?l.call(e):c.call(e)}function w(t){var n,r="";for(n=0;n<t;n++)r+=" ";return r}var j=String.fromCharCode,_=Array.isArray;function A(t){return t!=t}function I(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function x(t){var n,r,e,o,a,f,c,l,s,p,g,y,v;if(!_(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(f="",c=1,l=0;l<t.length;l++)if(e=t[l],"string"==typeof e)f+=e;else{if(n=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),r=e.flags,s=0;s<r.length;s++)switch(o=r.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=r.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,g=e.width,y=e.padRight,v=void 0,(v=g-p.length)<0?p:p=y?p+w(v):w(v)+p)),f+=e.arg||"",c+=1}return f}var E=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function O(t){var n,r,e,i;for(r=[],i=0,e=E.exec(t);e;)(n=t.slice(i,E.lastIndex-e[0].length)).length&&r.push(n),r.push(S(e)),i=E.lastIndex,e=E.exec(t);return(n=t.slice(i)).length&&r.push(n),r}function F(t){var n,r;if("string"!=typeof t)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[O(t)],r=1;r<arguments.length;r++)n.push(arguments[r]);return x.apply(null,n)}var B,V=Object.prototype,U=V.toString,k=V.__defineGetter__,T=V.__defineSetter__,N=V.__lookupGetter__,P=V.__lookupSetter__;B=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,r){var e,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(N.call(t,n)||P.call(t,n)?(e=t.__proto__,t.__proto__=V,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&k&&k.call(t,n,r.get),a&&T&&T.call(t,n,r.set),t};var L=B;function $(t,n,r){L(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function D(t){return"boolean"==typeof t}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return C&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function Y(t,n){return null!=t&&W.call(t,n)}var z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof z?z.toStringTag:"";var X=R()?function(t){var n,r,e;if(null==t)return G.call(t);r=t[M],n=Y(t,M);try{t[M]=void 0}catch(n){return G.call(t)}return e=G.call(t),n?t[M]=r:delete t[M],e}:function(t){return G.call(t)},Z=Boolean,H=Boolean.prototype.toString;var q=R();function J(t){return"object"==typeof t&&(t instanceof Z||(q?function(t){try{return H.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===X(t)))}function K(t){return D(t)||J(t)}$(K,"isPrimitive",D),$(K,"isObject",J);var Q="object"==typeof self?self:null,tt="object"==typeof window?window:null,nt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},rt="object"==typeof nt?nt:null,et="object"==typeof globalThis?globalThis:null;function it(t){if(arguments.length){if(!D(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(et)return et;if(Q)return Q;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")}var ot=it();var at="function"==typeof Uint8Array;var ut="function"==typeof Uint8Array?Uint8Array:null;var ft,ct="function"==typeof Uint8Array?Uint8Array:void 0;ft=function(){var t,n,r;if("function"!=typeof ut)return!1;try{n=new ut(n=[1,3.14,-3.14,256,257]),r=n,t=(at&&r instanceof Uint8Array||"[object Uint8Array]"===X(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var lt=ft,st="function"==typeof Uint16Array;var pt="function"==typeof Uint16Array?Uint16Array:null;var gt,yt="function"==typeof Uint16Array?Uint16Array:void 0;gt=function(){var t,n,r;if("function"!=typeof pt)return!1;try{n=new pt(n=[1,3.14,-3.14,65536,65537]),r=n,t=(st&&r instanceof Uint16Array||"[object Uint16Array]"===X(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?yt:function(){throw new Error("not implemented")};var vt,ht={uint16:gt,uint8:lt};(vt=new ht.uint16(1))[0]=4660;var dt=52===new ht.uint8(vt.buffer)[0],mt="function"==typeof ArrayBuffer;var bt="function"==typeof Float64Array;var wt="function"==typeof Float64Array?Float64Array:null;var jt,_t="function"==typeof Float64Array?Float64Array:void 0;jt=function(){var t,n,r;if("function"!=typeof wt)return!1;try{n=new wt([1,3.14,-3.14,NaN]),r=n,t=(bt&&r instanceof Float64Array||"[object Float64Array]"===X(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?_t:function(){throw new Error("not implemented")};var At=jt,It="function"==typeof ArrayBuffer?ArrayBuffer:null;var xt,Et="function"==typeof ArrayBuffer?ArrayBuffer:void 0;xt=function(){var t,n,r,e;if("function"!=typeof It)return!1;try{r=new It(16),e=r,(t=(mt&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===X(e))&&"function"==typeof It.isView)&&((n=new At(r))[0]=-3.14,n[1]=NaN,t=t&&It.isView(n)&&16===r.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t}()?Et:function(){throw new Error("not implemented")};var St=xt,Ot="function"==typeof DataView;var Ft="function"==typeof DataView?DataView:null;var Bt,Vt="function"==typeof DataView?DataView:void 0;Bt=function(){var t,n,r,e;if("function"!=typeof Ft)return!1;try{r=new St(24),n=new Ft(r,8),e=n,(t=(Ot&&e instanceof DataView||"[object DataView]"===X(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===r&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t}()?Vt:function(){throw new Error("not implemented")};var Ut=Bt,kt="function"==typeof BigInt?BigInt:void 0,Tt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function Nt(t){return Tt[t]||null}var Pt={all:["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","bool","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],boolean:["bool"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]},Lt=/_and_generic$/;function $t(){var t,n,r,e,i;return 0===arguments.length?Pt.all.slice():(r=!1,t=arguments[0],Lt.test(t)&&(e=Lt,i="","all"!==(t=t.replace(e,i))&&(r=!0)),n=(n=Pt[t])?n.slice():[],r&&n.length>0&&n.push("generic"),n)}function Dt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ct(t,n,r){L(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Rt(t){return Object.keys(Object(t))}var Gt=void 0!==Object.keys;function Wt(t){return"[object Arguments]"===X(t)}var Yt=function(){return Wt(arguments)}();function zt(t){return"string"==typeof t}var Mt=String.prototype.valueOf;var Xt=R();function Zt(t){return"object"==typeof t&&(t instanceof String||(Xt?function(t){try{return Mt.call(t),!0}catch(t){return!1}}(t):"[object String]"===X(t)))}function Ht(t){return zt(t)||Zt(t)}function qt(t){return"number"==typeof t}$(Ht,"isPrimitive",zt),$(Ht,"isObject",Zt);var Jt=Number,Kt=Jt.prototype.toString;var Qt=R();function tn(t){return"object"==typeof t&&(t instanceof Jt||(Qt?function(t){try{return Kt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===X(t)))}function nn(t){return qt(t)||tn(t)}function rn(t){return t!=t}function en(t){return qt(t)&&rn(t)}function on(t){return tn(t)&&rn(t.valueOf())}function an(t){return en(t)||on(t)}$(nn,"isPrimitive",qt),$(nn,"isObject",tn),$(an,"isPrimitive",en),$(an,"isObject",on);var un=Number.POSITIVE_INFINITY,fn=Jt.NEGATIVE_INFINITY,cn=Math.floor;function ln(t){return cn(t)===t}function sn(t){return t<un&&t>fn&&ln(t)}function pn(t){return qt(t)&&sn(t)}function gn(t){return tn(t)&&sn(t.valueOf())}function yn(t){return pn(t)||gn(t)}$(yn,"isPrimitive",pn),$(yn,"isObject",gn);var vn=Object.prototype.propertyIsEnumerable;var hn=!vn.call("beep","0");function dn(t,n){var r;return null!=t&&(!(r=vn.call(t,n))&&hn&&Ht(t)?!en(n=+n)&&pn(n)&&n>=0&&n<t.length:r)}var mn=Array.isArray?Array.isArray:function(t){return"[object Array]"===X(t)};var bn=Yt?Wt:function(t){return null!==t&&"object"==typeof t&&!mn(t)&&"number"==typeof t.length&&ln(t.length)&&t.length>=0&&t.length<=4294967295&&Y(t,"callee")&&!dn(t,"callee")},wn=Array.prototype.slice;function jn(t){return null!==t&&"object"==typeof t}$(jn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var r,e;if(!mn(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(jn));var _n=dn((function(){}),"prototype"),An=!dn({toString:null},"toString"),In=9007199254740991;function xn(t,n,r){var e,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&ln(o.length)&&o.length>=0&&o.length<=In||zt(t)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!pn(r))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=e)return-1;i=r}else(i=e+r)<0&&(i=0)}else i=0;if(an(n)){for(;i<e;i++)if(an(t[i]))return i}else for(;i<e;i++)if(t[i]===n)return i;return-1}var En=/./,Sn=it(),On=Sn.document&&Sn.document.childNodes,Fn=Int8Array;function Bn(){return/^\s*function\s*([^(]*)/i}var Vn=/^\s*function\s*([^(]*)/i;function Un(t){var n,r,e,i;if(("Object"===(r=X(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=Vn.exec(e.toString()))return n[1]}return jn(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}$(Bn,"REGEXP",Vn);var kn="function"==typeof En||"object"==typeof Fn||"function"==typeof On?function(t){return Un(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Un(t).toLowerCase():n};function Tn(t){return t.constructor&&t.constructor.prototype===t}var Nn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pn="undefined"==typeof window?void 0:window;var Ln=function(){var t;if("undefined"===kn(Pn))return!1;for(t in Pn)try{-1===xn(Nn,t)&&Y(Pn,t)&&null!==Pn[t]&&"object"===kn(Pn[t])&&Tn(Pn[t])}catch(t){return!0}return!1}(),$n="undefined"!=typeof window;var Dn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Cn=Gt?function(){return 2!==(Rt(arguments)||"").length}(1,2)?function(t){return bn(t)?Rt(wn.call(t)):Rt(t)}:Rt:function(t){var n,r,e,i,o,a,u;if(i=[],bn(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!Y(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(e="function"==typeof t)&&!jn(t))return i;r=_n&&e}for(o in t)r&&"prototype"===o||!Y(t,o)||i.push(String(o));if(An)for(n=function(t){if(!1===$n&&!Ln)return Tn(t);try{return Tn(t)}catch(t){return!1}}(t),u=0;u<Dn.length;u++)a=Dn[u],n&&"constructor"===a||!Y(t,a)||i.push(String(a));return i};$($t,"enum",Dt),function(t,n){var r,e,i;for(r=Cn(n),i=0;i<r.length;i++)Ct(t,e=r[i],n[e])}($t,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Rn=["row-major","column-major"];var Gn=["row-major","column-major"];function Wn(){return{"row-major":101,"column-major":102}}$((function(){return Gn.slice()}),"enum",Wn);var Yn={"row-major":101,"column-major":102};function zn(){return{"row-major":Yn["row-major"],"column-major":Yn["column-major"]}}$((function(){return Rn.slice()}),"enum",zn);var Mn=["throw","normalize","clamp","wrap"];function Xn(){return{throw:1,clamp:2,wrap:3,normalize:4}}function Zn(t){return t.dtype}function Hn(t){var n,r,e;for(r=t.length,n=[],e=0;e<r;e++)n.push(t[e]);return n}function qn(t,n){var r=t.shape;return n?Hn(r):r}function Jn(t,n){return"column-major"===n?function(t){var n,r,e;for(n=[],r=1,e=0;e<t.length;e++)n.push(r),r*=t[e];return n}(t):function(t){var n,r,e,i;for(n=t.length,r=[],i=0;i<n;i++)r.push(0);for(e=1,i=n-1;i>=0;i--)r[i]=e,e*=t[i];return r}(t)}$((function(){return Mn.slice()}),"enum",Xn),$(Jn,"assign",(function(t,n,r){return"column-major"===n?function(t,n){var r,e;for(r=1,e=0;e<t.length;e++)n[e]=r,r*=t[e];return n}(t,r):function(t,n){var r,e;for(r=1,e=t.length-1;e>=0;e--)n[e]=r,r*=t[e];return n}(t,r)}));var Kn="row-major";function Qn(t,n){var r,e,i;return"object"!=typeof(i=t.strides)||null===i?0===(e=t.shape).length?[0]:("string"!=typeof(r=t.order)&&(r=Kn),Jn(e,r)):n?Hn(i):i}function tr(t){var n,r,e;return"number"==typeof(e=t.offset)?e:0===(r=t.shape).length||"object"!=typeof(n=t.strides)||null===n?0:function(t,n){var r,e,i;for(e=t.length,r=0,i=0;i<e;i++)n[i]<0&&(r-=n[i]*(t[i]-1));return r}(r,n)}function nr(t){return Math.abs(t)}var rr="row-major",er="column-major";function ir(t){var n,r;return"string"==typeof(r=t.order)?r:"object"!=typeof(n=t.strides)||null===n?rr:(r=function(t){var n,r,e,i,o,a;if(0===(r=t.length))return 0;for(n=!0,e=!0,i=nr(t[0]),a=1;a<r;a++){if(o=nr(t[a]),n&&o<i?n=!1:e&&o>i&&(e=!1),!e&&!n)return 0;i=o}return e&&n?3:e?1:2}(n),1===r||3===r?rr:2===r?er:0===t.shape.length?rr:null)}var or={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ar=zn(),ur={throw:1,clamp:2,wrap:3,normalize:4};var fr=4294967295,cr=4294967296,lr=new lt(8),sr=new Ut(lr.buffer);function pr(t,n,r,e){var i,o,a;if(0===t){for(a=0;a<lr.length;a++)n[e]=0,e+=r;return n}for(o=(t&fr)>>>0,i=cn(t/cr),dt?(sr.setUint32(0,o,dt),sr.setUint32(4,i,dt)):(sr.setUint32(0,i,dt),sr.setUint32(4,o,dt)),a=0;a<lr.length;a++)n[e]=lr[a],e+=r;return n}$((function(t){var n,r,e,i;return n=new lt(8),0===t||(i=(4294967295&t)>>>0,e=cn(t/4294967296),r=new Ut(n.buffer),dt?(r.setUint32(0,i,dt),r.setUint32(4,e,dt)):(r.setUint32(0,e,dt),r.setUint32(4,i,dt))),n}),"assign",pr);var gr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},yr=zn(),vr={throw:1,clamp:2,wrap:3,normalize:4};var hr="function"==typeof ot.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ot.BigInt("1")&&"bigint"==typeof BigInt("1")?function(t){var n,r,e,i,o,a,u,f,c,l,s,p,g;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(e=Zn(t),i=qn(t,!1),o=Qn(t,!1),s=i.length,f=t.mode||"throw",p=(a=t.submode||[f]).length,n=Nt(e),c=0,(u=new Ut(new St(33+16*s+p))).setInt8(c,dt?1:0),c+=1,u.setInt16(c,or[e],dt),c+=2,u.setBigInt64(c,kt(s),dt),l=8*s,c+=8,g=0;g<s;g++)u.setBigInt64(c,kt(i[g]),dt),u.setBigInt64(c+l,kt(o[g]*n),dt),c+=8;for(c+=l,u.setBigInt64(c,kt(tr(t)*n),dt),c+=8,u.setInt8(c,ar[ir(t)]),c+=1,u.setInt8(c,ur[f]),c+=1,u.setBigInt64(c,kt(p),dt),c+=8,g=0;g<p;g++)u.setInt8(c,ur[a[g]]),c+=1;return r=0,t.flags&&(r|=t.flags.READONLY?4:0),u.setInt32(c,r,dt),u}:function(t){var n,r,e,i,o,a,u,f,c,l,s,p,g,y;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(i=Zn(t),o=qn(t,!1),a=Qn(t,!1),p=o.length,c=t.mode||"throw",g=(u=t.submode||[c]).length,n=Nt(i),f=new Ut(new St(33+16*p+g)),r=new lt(f.buffer),l=0,f.setInt8(l,dt?1:0),l+=1,f.setInt16(l,gr[i],dt),pr(p,r,1,l+=2),s=8*p,l+=8,y=0;y<p;y++)pr(o[y],r,1,l),pr(a[y]*n,r,1,l+s),l+=8;for(l+=s,pr(tr(t)*n,r,1,l),l+=8,f.setInt8(l,yr[ir(t)]),l+=1,f.setInt8(l,vr[c]),pr(g,r,1,l+=1),l+=8,y=0;y<g;y++)f.setInt8(l,vr[u[y]]),l+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),f.setInt32(l,e,dt),f};export{hr as default};
//# sourceMappingURL=mod.js.map
