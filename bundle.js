// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).serialize=r()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(t,r,n){var e,l,y,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,s="set"in n,l&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),s&&a&&a.call(t,r,n.set),t},y=e,s=l,v=n()?y:s,p=v;var b=function(t,r,n){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},g=b;var m=function(t){return"boolean"==typeof t};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return d&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var j=function(t){return _.call(t)},A=Object.prototype.hasOwnProperty;var I=function(t,r){return null!=t&&A.call(t,r)},O="function"==typeof Symbol?Symbol.toStringTag:"",E=I,S=O,B=h;var P=j,U=function(t){var r,n,e;if(null==t)return B.call(t);n=t[S],r=E(t,S);try{t[S]=void 0}catch(r){return B.call(t)}return e=B.call(t),r?t[S]=n:delete t[S],e},F=w()?U:P,N=Boolean.prototype.toString;var V=F,x=function(t){try{return N.call(t),!0}catch(t){return!1}},T=w();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(T?x(t):"[object Boolean]"===V(t)))},k=m,L=D;var Y=g,G=function(t){return k(t)||L(t)},M=D;Y(G,"isPrimitive",m),Y(G,"isObject",M);var R=G;var X=function(){return new Function("return this;")()},C="object"==typeof self?self:null,z="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},W="object"==typeof H?H:null;module.exports=W;var q=R.isPrimitive,J=X,K=C,Q=z,Z=t(Object.freeze({__proto__:null}));var $=function(t){if(arguments.length){if(!q(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},tt=$,rt=tt();var nt=function(){return"function"==typeof rt.BigInt&&"function"==typeof BigInt&&"bigint"==typeof rt.BigInt("1")&&"bigint"==typeof BigInt("1")},et=F,ot="function"==typeof Uint8Array;var it="function"==typeof Uint8Array?Uint8Array:null,ut=function(t){return ot&&t instanceof Uint8Array||"[object Uint8Array]"===et(t)},at=it;var ft=function(){var t,r;if("function"!=typeof at)return!1;try{r=new at(r=[1,3.14,-3.14,256,257]),t=ut(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var ct="function"==typeof Uint8Array?Uint8Array:void 0,lt=function(){throw new Error("not implemented")},yt=ft()?ct:lt,st=F,vt="function"==typeof Uint16Array;var pt="function"==typeof Uint16Array?Uint16Array:null,bt=function(t){return vt&&t instanceof Uint16Array||"[object Uint16Array]"===st(t)},gt=pt;var mt=function(){var t,r;if("function"!=typeof gt)return!1;try{r=new gt(r=[1,3.14,-3.14,65536,65537]),t=bt(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var dt,wt="function"==typeof Uint16Array?Uint16Array:void 0,ht=function(){throw new Error("not implemented")},_t={uint16:mt()?wt:ht,uint8:yt};(dt=new _t.uint16(1))[0]=4660;var jt=52===new _t.uint8(dt.buffer)[0],At=F,It="function"==typeof ArrayBuffer;var Ot=function(t){return It&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===At(t)},Et=F,St="function"==typeof Float64Array;var Bt="function"==typeof Float64Array?Float64Array:null,Pt=function(t){return St&&t instanceof Float64Array||"[object Float64Array]"===Et(t)},Ut=Bt;var Ft=function(){var t,r;if("function"!=typeof Ut)return!1;try{r=new Ut([1,3.14,-3.14,NaN]),t=Pt(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var Nt,Vt="function"==typeof Float64Array?Float64Array:void 0,xt=function(){throw new Error("not implemented")};Nt=Ft()?Vt:xt;var Tt="function"==typeof ArrayBuffer?ArrayBuffer:null,Dt=Ot,kt=Nt,Lt=Tt;var Yt=function(){var t,r,n;if("function"!=typeof Lt)return!1;try{n=new Lt(16),(t=Dt(n)&&"function"==typeof Lt.isView)&&((r=new kt(n))[0]=-3.14,r[1]=NaN,t=t&&Lt.isView(r)&&16===n.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var Gt="function"==typeof ArrayBuffer?ArrayBuffer:void 0,Mt=function(){throw new Error("not implemented")},Rt=Yt()?Gt:Mt,Xt=F,Ct="function"==typeof DataView;var zt="function"==typeof DataView?DataView:null,Ht=function(t){return Ct&&t instanceof DataView||"[object DataView]"===Xt(t)},Wt=Rt,qt=zt;var Jt=function(){var t,r,n;if("function"!=typeof qt)return!1;try{n=new Wt(24),r=new qt(n,8),(t=Ht(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===n&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var Kt="function"==typeof DataView?DataView:void 0,Qt=function(){throw new Error("not implemented")},Zt=Jt()?Kt:Qt,$t="function"==typeof BigInt?BigInt:void 0,tr={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var rr=function(t){return tr[t]||null},nr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var er=function(){return nr.slice()};var or=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},ir=v;var ur=function(t,r,n){ir(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})},ar=ur;var fr=function(t){return Object.keys(Object(t))},cr=fr;var lr=function(){return function(){return 2!==(cr(arguments)||"").length}(1,2)},yr=void 0!==Object.keys,sr=F;var vr,pr=function(t){return"[object Arguments]"===sr(t)},br=pr;vr=function(){return br(arguments)}();var gr=vr;var mr=function(t){return"string"==typeof t},dr=String.prototype.valueOf;var wr=F,hr=function(t){try{return dr.call(t),!0}catch(t){return!1}},_r=w();var jr=function(t){return"object"==typeof t&&(t instanceof String||(_r?hr(t):"[object String]"===wr(t)))},Ar=mr,Ir=jr;var Or=g,Er=function(t){return Ar(t)||Ir(t)},Sr=jr;Or(Er,"isPrimitive",mr),Or(Er,"isObject",Sr);var Br=Er;var Pr=function(t){return"number"==typeof t},Ur=Number,Fr=Ur.prototype.toString;var Nr=F,Vr=Ur,xr=function(t){try{return Fr.call(t),!0}catch(t){return!1}},Tr=w();var Dr=function(t){return"object"==typeof t&&(t instanceof Vr||(Tr?xr(t):"[object Number]"===Nr(t)))},kr=Pr,Lr=Dr;var Yr=g,Gr=function(t){return kr(t)||Lr(t)},Mr=Dr;Yr(Gr,"isPrimitive",Pr),Yr(Gr,"isObject",Mr);var Rr=Gr;var Xr=function(t){return t!=t},Cr=Rr.isPrimitive,zr=Xr;var Hr=function(t){return Cr(t)&&zr(t)},Wr=Rr.isObject,qr=Xr;var Jr=function(t){return Wr(t)&&qr(t.valueOf())},Kr=Hr,Qr=Jr;var Zr=g,$r=function(t){return Kr(t)||Qr(t)},tn=Jr;Zr($r,"isPrimitive",Hr),Zr($r,"isObject",tn);var rn=$r,nn=Number.POSITIVE_INFINITY,en=Ur.NEGATIVE_INFINITY,on=Math.floor,un=on;var an=function(t){return un(t)===t},fn=nn,cn=en,ln=an;var yn=function(t){return t<fn&&t>cn&&ln(t)},sn=Rr.isPrimitive,vn=yn;var pn=function(t){return sn(t)&&vn(t)},bn=Rr.isObject,gn=yn;var mn=function(t){return bn(t)&&gn(t.valueOf())},dn=pn,wn=mn;var hn=g,_n=function(t){return dn(t)||wn(t)},jn=mn;hn(_n,"isPrimitive",pn),hn(_n,"isObject",jn);var An,In=_n,On=Object.prototype.propertyIsEnumerable;An=!On.call("beep","0");var En=Br,Sn=rn.isPrimitive,Bn=In.isPrimitive,Pn=On,Un=An;var Fn=function(t,r){var n;return null!=t&&(!(n=Pn.call(t,r))&&Un&&En(t)?!Sn(r=+r)&&Bn(r)&&r>=0&&r<t.length:n)},Nn=Fn,Vn=F;var xn=Array.isArray?Array.isArray:function(t){return"[object Array]"===Vn(t)},Tn=I,Dn=Nn,kn=xn,Ln=an;var Yn=gr?pr:function(t){return null!==t&&"object"==typeof t&&!kn(t)&&"number"==typeof t.length&&Ln(t.length)&&t.length>=0&&t.length<=4294967295&&Tn(t,"callee")&&!Dn(t,"callee")},Gn=Yn,Mn=fr,Rn=Array.prototype.slice;var Xn=function(t){return Gn(t)?Mn(Rn.call(t)):Mn(t)},Cn=xn;var zn=function(t){return null!==t&&"object"==typeof t};g(zn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!Cn(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(zn));var Hn=zn;var Wn=Nn((function(){}),"prototype"),qn=!Nn({toString:null},"toString"),Jn=an;var Kn=rn,Qn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Jn(t.length)&&t.length>=0&&t.length<=9007199254740991},Zn=Br.isPrimitive,$n=In.isPrimitive;var te=function(t,r,n){var e,o;if(!Qn(t)&&!Zn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!$n(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(Kn(r)){for(;o<e;o++)if(Kn(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1},re=te,ne=/./,ee=tt(),oe=ee.document&&ee.document.childNodes,ie=Int8Array,ue=ne,ae=oe,fe=ie;var ce=function(){return"function"==typeof ue||"object"==typeof fe||"function"==typeof ae};var le=function(){return/^\s*function\s*([^(]*)/i},ye=le;g(ye,"REGEXP",le());var se=Hn;var ve=F,pe=ye.REGEXP,be=function(t){return se(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ge=function(t){var r,n,e;if(("Object"===(n=ve(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=pe.exec(e.toString()))return r[1]}return be(t)?"Buffer":n},me=ge;var de=ge;var we=function(t){var r;return null===t?"null":"object"===(r=typeof t)?me(t).toLowerCase():r},he=function(t){return de(t).toLowerCase()},_e=ce()?he:we;var je,Ae=function(t){return t.constructor&&t.constructor.prototype===t},Ie="undefined"==typeof window?void 0:window,Oe=I,Ee=re,Se=_e,Be=Ae,Pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ue=Ie;je=function(){var t;if("undefined"===Se(Ue))return!1;for(t in Ue)try{-1===Ee(Pe,t)&&Oe(Ue,t)&&null!==Ue[t]&&"object"===Se(Ue[t])&&Be(Ue[t])}catch(t){return!0}return!1}();var Fe="undefined"!=typeof window,Ne=je,Ve=Ae,xe=Fe;var Te=Hn,De=I,ke=Yn,Le=Wn,Ye=qn,Ge=function(t){if(!1===xe&&!Ne)return Ve(t);try{return Ve(t)}catch(t){return!1}},Me=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Re,Xe=fr,Ce=Xn,ze=function(t){var r,n,e,o,i,u,a;if(o=[],ke(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!De(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1===(e="function"==typeof t)&&!Te(t))return o;n=Le&&e}for(i in t)n&&"prototype"===i||!De(t,i)||o.push(String(i));if(Ye)for(r=Ge(t),a=0;a<Me.length;a++)u=Me[a],r&&"constructor"===u||!De(t,u)||o.push(String(u));return o};Re=yr?lr()?Ce:Xe:ze;var He=ar,We=Re;var qe=function(t,r){var n,e,o;for(n=We(r),o=0;o<n.length;o++)e=n[o],He(t,e,r[e]);return t},Je=er,Ke=or,Qe=qe;g(Je,"enum",Ke),Qe(Je,Ke());var Ze=Je,$e=["row-major","column-major"];var to=function(){return $e.slice()};g(to,"enum",(function(){return{"row-major":1,"column-major":2}}));var ro=to,no=["throw","clamp","wrap"];var eo=function(){return no.slice()};g(eo,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var oo=eo,io=jt,uo=Rt,ao=Zt,fo=$t,co=rr,lo=ro.enum,yo=oo.enum,so=(0,Ze.enum)(),vo=lo(),po=yo();var bo=function(t){var r,n,e,o,i,u,a,f,c,l,y,s,v;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(e=t.dtype,o=t.shape,i=t.strides,y=o.length,f=t.mode||"throw",s=(u=t.submode||[f]).length,r=co(e),c=0,(a=new ao(new uo(33+16*y+s))).setInt8(c,io?1:0),c+=1,a.setInt16(c,so[e],io),c+=2,a.setBigInt64(c,fo(y),io),l=8*y,c+=8,v=0;v<y;v++)a.setBigInt64(c,fo(o[v]),io),a.setBigInt64(c+l,fo(i[v]*r),io),c+=8;for(c+=l,a.setBigInt64(c,fo(t.offset*r),io),c+=8,a.setInt8(c,vo[t.order]),c+=1,a.setInt8(c,po[f]),c+=1,a.setBigInt64(c,fo(s),io),c+=8,v=0;v<s;v++)a.setInt8(c,po[u[v]]),c+=1;return n=0,t.flags&&(n|=t.flags.READONLY?4:0),a.setInt32(c,n,io),a},go=jt,mo=yt,wo=Zt,ho=on;var _o=function(t){var r,n,e,o;return r=new mo(8),0===t||(o=(4294967295&t)>>>0,e=ho(t/4294967296),n=new wo(r.buffer),go?(n.setUint32(0,o,go),n.setUint32(4,e,go)):(n.setUint32(0,e,go),n.setUint32(4,o,go))),r},jo=jt,Ao=Zt,Io=on,Oo=new yt(8),Eo=new Ao(Oo.buffer);var So=_o;g(So,"assign",(function(t,r,n,e){var o,i,u;if(0===t){for(u=0;u<Oo.length;u++)r[e]=0,e+=n;return r}for(i=(4294967295&t)>>>0,o=Io(t/4294967296),jo?(Eo.setUint32(0,i,jo),Eo.setUint32(4,o,jo)):(Eo.setUint32(0,o,jo),Eo.setUint32(4,i,jo)),u=0;u<Oo.length;u++)r[e]=Oo[u],e+=n;return r}));var Bo=jt,Po=So.assign,Uo=Rt,Fo=yt,No=Zt,Vo=rr,xo=ro.enum,To=oo.enum,Do=(0,Ze.enum)(),ko=xo(),Lo=To();var Yo=bo,Go=function(t){var r,n,e,o,i,u,a,f,c,l,y,s,v,p;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(o=t.dtype,i=t.shape,u=t.strides,s=i.length,c=t.mode||"throw",v=(a=t.submode||[c]).length,r=Vo(o),f=new No(new Uo(33+16*s+v)),n=new Fo(f.buffer),l=0,f.setInt8(l,Bo?1:0),l+=1,f.setInt16(l,Do[o],Bo),Po(s,n,1,l+=2),y=8*s,l+=8,p=0;p<s;p++)Po(i[p],n,1,l),Po(u[p]*r,n,1,l+y),l+=8;for(l+=y,Po(t.offset*r,n,1,l),l+=8,f.setInt8(l,ko[t.order]),l+=1,f.setInt8(l,Lo[c]),Po(v,n,1,l+=1),l+=8,p=0;p<v;p++)f.setInt8(l,Lo[a[p]]),l+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),f.setInt32(l,e,Bo),f};return nt()?Yo:Go}));
//# sourceMappingURL=bundle.js.map
