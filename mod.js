// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(t,r,n){var e,l,y,v;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),v&&a&&a.call(t,r,n.set),t},y=e,v=l,s=n()?y:v,p=s;var b=function(t,r,n){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},g=b;var m=function(t){return"boolean"==typeof t};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var d=function(){return w&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var j=function(t){return _.call(t)},A=Object.prototype.hasOwnProperty;var I=function(t,r){return null!=t&&A.call(t,r)},O="function"==typeof Symbol?Symbol.toStringTag:"",E=I,S=O,B=h;var P=j,U=function(t){var r,n,e;if(null==t)return B.call(t);n=t[S],r=E(t,S);try{t[S]=void 0}catch(r){return B.call(t)}return e=B.call(t),r?t[S]=n:delete t[S],e},F=d()?U:P,N=Boolean.prototype.toString;var V=F,x=function(t){try{return N.call(t),!0}catch(t){return!1}},T=d();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(T?x(t):"[object Boolean]"===V(t)))},k=m,L=D;var Y=g,G=function(t){return k(t)||L(t)},M=D;Y(G,"isPrimitive",m),Y(G,"isObject",M);var R="object"==typeof self?self:null,X="object"==typeof window?window:null,C=G.isPrimitive,H=function(){return new Function("return this;")()},W=R,z=X,q=t(Object.freeze({__proto__:null}));var J=function(t){if(arguments.length){if(!C(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return H()}if(W)return W;if(z)return z;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")},K=J,Q=K();var Z=function(){return"function"==typeof Q.BigInt&&"function"==typeof BigInt&&"bigint"==typeof Q.BigInt("1")&&"bigint"==typeof BigInt("1")},$=F,tt="function"==typeof Uint8Array;var rt="function"==typeof Uint8Array?Uint8Array:null,nt=function(t){return tt&&t instanceof Uint8Array||"[object Uint8Array]"===$(t)},et=rt;var ot=function(){var t,r;if("function"!=typeof et)return!1;try{r=new et(r=[1,3.14,-3.14,256,257]),t=nt(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var it="function"==typeof Uint8Array?Uint8Array:void 0,ut=function(){throw new Error("not implemented")},at=ot()?it:ut,ft=F,ct="function"==typeof Uint16Array;var lt="function"==typeof Uint16Array?Uint16Array:null,yt=function(t){return ct&&t instanceof Uint16Array||"[object Uint16Array]"===ft(t)},vt=lt;var st=function(){var t,r;if("function"!=typeof vt)return!1;try{r=new vt(r=[1,3.14,-3.14,65536,65537]),t=yt(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var pt,bt="function"==typeof Uint16Array?Uint16Array:void 0,gt=function(){throw new Error("not implemented")},mt={uint16:st()?bt:gt,uint8:at};(pt=new mt.uint16(1))[0]=4660;var wt=52===new mt.uint8(pt.buffer)[0],dt=F,ht="function"==typeof ArrayBuffer;var _t=function(t){return ht&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===dt(t)},jt=F,At="function"==typeof Float64Array;var It="function"==typeof Float64Array?Float64Array:null,Ot=function(t){return At&&t instanceof Float64Array||"[object Float64Array]"===jt(t)},Et=It;var St=function(){var t,r;if("function"!=typeof Et)return!1;try{r=new Et([1,3.14,-3.14,NaN]),t=Ot(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var Bt,Pt="function"==typeof Float64Array?Float64Array:void 0,Ut=function(){throw new Error("not implemented")};Bt=St()?Pt:Ut;var Ft="function"==typeof ArrayBuffer?ArrayBuffer:null,Nt=_t,Vt=Bt,xt=Ft;var Tt=function(){var t,r,n;if("function"!=typeof xt)return!1;try{n=new xt(16),(t=Nt(n)&&"function"==typeof xt.isView)&&((r=new Vt(n))[0]=-3.14,r[1]=NaN,t=t&&xt.isView(r)&&16===n.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var Dt="function"==typeof ArrayBuffer?ArrayBuffer:void 0,kt=function(){throw new Error("not implemented")},Lt=Tt()?Dt:kt,Yt=F,Gt="function"==typeof DataView;var Mt="function"==typeof DataView?DataView:null,Rt=function(t){return Gt&&t instanceof DataView||"[object DataView]"===Yt(t)},Xt=Lt,Ct=Mt;var Ht=function(){var t,r,n;if("function"!=typeof Ct)return!1;try{n=new Xt(24),r=new Ct(n,8),(t=Rt(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===n&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var Wt="function"==typeof DataView?DataView:void 0,zt=function(){throw new Error("not implemented")},qt=Ht()?Wt:zt,Jt="function"==typeof BigInt?BigInt:void 0,Kt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var Qt=function(t){return Kt[t]||null},Zt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var $t=function(){return Zt.slice()};var tr=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},rr=s;var nr=function(t,r,n){rr(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})},er=nr;var or=function(t){return Object.keys(Object(t))},ir=or;var ur=function(){return function(){return 2!==(ir(arguments)||"").length}(1,2)},ar=void 0!==Object.keys,fr=F;var cr=function(t){return"[object Arguments]"===fr(t)},lr=cr;var yr=function(){return lr(arguments)}();var vr=function(t){return"string"==typeof t},sr=String.prototype.valueOf;var pr=F,br=function(t){try{return sr.call(t),!0}catch(t){return!1}},gr=d();var mr=function(t){return"object"==typeof t&&(t instanceof String||(gr?br(t):"[object String]"===pr(t)))},wr=vr,dr=mr;var hr=g,_r=function(t){return wr(t)||dr(t)},jr=mr;hr(_r,"isPrimitive",vr),hr(_r,"isObject",jr);var Ar=_r;var Ir=function(t){return"number"==typeof t},Or=Number,Er=Or.prototype.toString;var Sr=F,Br=Or,Pr=function(t){try{return Er.call(t),!0}catch(t){return!1}},Ur=d();var Fr=function(t){return"object"==typeof t&&(t instanceof Br||(Ur?Pr(t):"[object Number]"===Sr(t)))},Nr=Ir,Vr=Fr;var xr=g,Tr=function(t){return Nr(t)||Vr(t)},Dr=Fr;xr(Tr,"isPrimitive",Ir),xr(Tr,"isObject",Dr);var kr=Tr;var Lr=function(t){return t!=t},Yr=kr.isPrimitive,Gr=Lr;var Mr=function(t){return Yr(t)&&Gr(t)},Rr=kr.isObject,Xr=Lr;var Cr=function(t){return Rr(t)&&Xr(t.valueOf())},Hr=Mr,Wr=Cr;var zr=g,qr=function(t){return Hr(t)||Wr(t)},Jr=Cr;zr(qr,"isPrimitive",Mr),zr(qr,"isObject",Jr);var Kr=qr,Qr=Number.POSITIVE_INFINITY,Zr=Or.NEGATIVE_INFINITY,$r=Math.floor,tn=$r;var rn=function(t){return tn(t)===t},nn=Qr,en=Zr,on=rn;var un=function(t){return t<nn&&t>en&&on(t)},an=kr.isPrimitive,fn=un;var cn=function(t){return an(t)&&fn(t)},ln=kr.isObject,yn=un;var vn=function(t){return ln(t)&&yn(t.valueOf())},sn=cn,pn=vn;var bn=g,gn=function(t){return sn(t)||pn(t)},mn=vn;bn(gn,"isPrimitive",cn),bn(gn,"isObject",mn);var wn,dn=gn,hn=Object.prototype.propertyIsEnumerable;wn=!hn.call("beep","0");var _n=Ar,jn=Kr.isPrimitive,An=dn.isPrimitive,In=hn,On=wn;var En=function(t,r){var n;return null!=t&&(!(n=In.call(t,r))&&On&&_n(t)?!jn(r=+r)&&An(r)&&r>=0&&r<t.length:n)},Sn=En,Bn=F;var Pn=Array.isArray?Array.isArray:function(t){return"[object Array]"===Bn(t)},Un=I,Fn=Sn,Nn=Pn,Vn=rn;var xn=yr?cr:function(t){return null!==t&&"object"==typeof t&&!Nn(t)&&"number"==typeof t.length&&Vn(t.length)&&t.length>=0&&t.length<=4294967295&&Un(t,"callee")&&!Fn(t,"callee")},Tn=xn,Dn=or,kn=Array.prototype.slice;var Ln=function(t){return Tn(t)?Dn(kn.call(t)):Dn(t)},Yn=Pn;var Gn=function(t){return null!==t&&"object"==typeof t};g(Gn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!Yn(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(Gn));var Mn=Gn;var Rn=Sn((function(){}),"prototype"),Xn=!Sn({toString:null},"toString"),Cn=rn;var Hn=Kr,Wn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Cn(t.length)&&t.length>=0&&t.length<=9007199254740991},zn=Ar.isPrimitive,qn=dn.isPrimitive;var Jn=function(t,r,n){var e,o;if(!Wn(t)&&!zn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!qn(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(Hn(r)){for(;o<e;o++)if(Hn(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1},Kn=/./,Qn=K(),Zn=Qn.document&&Qn.document.childNodes,$n=Int8Array,te=Kn,re=Zn,ne=$n;var ee=function(){return"function"==typeof te||"object"==typeof ne||"function"==typeof re};var oe=function(){return/^\s*function\s*([^(]*)/i},ie=oe;g(ie,"REGEXP",oe());var ue=Mn;var ae=F,fe=ie.REGEXP,ce=function(t){return ue(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var le=function(t){var r,n,e;if(("Object"===(n=ae(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=fe.exec(e.toString()))return r[1]}return ce(t)?"Buffer":n},ye=le;var ve=le;var se=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ye(t).toLowerCase():r},pe=function(t){return ve(t).toLowerCase()},be=ee()?pe:se;var ge,me=function(t){return t.constructor&&t.constructor.prototype===t},we="undefined"==typeof window?void 0:window,de=I,he=Jn,_e=be,je=me,Ae=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ie=we;ge=function(){var t;if("undefined"===_e(Ie))return!1;for(t in Ie)try{-1===he(Ae,t)&&de(Ie,t)&&null!==Ie[t]&&"object"===_e(Ie[t])&&je(Ie[t])}catch(t){return!0}return!1}();var Oe="undefined"!=typeof window,Ee=ge,Se=me,Be=Oe;var Pe=Mn,Ue=I,Fe=xn,Ne=Rn,Ve=Xn,xe=function(t){if(!1===Be&&!Ee)return Se(t);try{return Se(t)}catch(t){return!1}},Te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var De,ke=or,Le=Ln,Ye=function(t){var r,n,e,o,i,u,a;if(o=[],Fe(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!Ue(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1===(e="function"==typeof t)&&!Pe(t))return o;n=Ne&&e}for(i in t)n&&"prototype"===i||!Ue(t,i)||o.push(String(i));if(Ve)for(r=xe(t),a=0;a<Te.length;a++)u=Te[a],r&&"constructor"===u||!Ue(t,u)||o.push(String(u));return o};De=ar?ur()?Le:ke:Ye;var Ge=er,Me=De;var Re=function(t,r){var n,e,o;for(n=Me(r),o=0;o<n.length;o++)e=n[o],Ge(t,e,r[e]);return t},Xe=$t,Ce=tr,He=Re;g(Xe,"enum",Ce),He(Xe,Ce());var We=Xe,ze=["row-major","column-major"];var qe=function(){return ze.slice()};g(qe,"enum",(function(){return{"row-major":1,"column-major":2}}));var Je=qe,Ke=["throw","clamp","wrap"];var Qe=function(){return Ke.slice()};g(Qe,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Ze=Qe,$e=wt,to=Lt,ro=qt,no=Jt,eo=Qt,oo=Je.enum,io=Ze.enum,uo=(0,We.enum)(),ao=oo(),fo=io();var co=function(t){var r,n,e,o,i,u,a,f,c,l,y,v,s;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(e=t.dtype,o=t.shape,i=t.strides,y=o.length,f=t.mode||"throw",v=(u=t.submode||[f]).length,r=eo(e),c=0,(a=new ro(new to(33+16*y+v))).setInt8(c,$e?1:0),c+=1,a.setInt16(c,uo[e],$e),c+=2,a.setBigInt64(c,no(y),$e),l=8*y,c+=8,s=0;s<y;s++)a.setBigInt64(c,no(o[s]),$e),a.setBigInt64(c+l,no(i[s]*r),$e),c+=8;for(c+=l,a.setBigInt64(c,no(t.offset*r),$e),c+=8,a.setInt8(c,ao[t.order]),c+=1,a.setInt8(c,fo[f]),c+=1,a.setBigInt64(c,no(v),$e),c+=8,s=0;s<v;s++)a.setInt8(c,fo[u[s]]),c+=1;return n=0,t.flags&&(n|=t.flags.READONLY?4:0),a.setInt32(c,n,$e),a},lo=wt,yo=at,vo=qt,so=$r;var po=function(t){var r,n,e,o;return r=new yo(8),0===t||(o=(4294967295&t)>>>0,e=so(t/4294967296),n=new vo(r.buffer),lo?(n.setUint32(0,o,lo),n.setUint32(4,e,lo)):(n.setUint32(0,e,lo),n.setUint32(4,o,lo))),r},bo=wt,go=qt,mo=$r,wo=new at(8),ho=new go(wo.buffer);var _o=po;g(_o,"assign",(function(t,r,n,e){var o,i,u;if(0===t){for(u=0;u<wo.length;u++)r[e]=0,e+=n;return r}for(i=(4294967295&t)>>>0,o=mo(t/4294967296),bo?(ho.setUint32(0,i,bo),ho.setUint32(4,o,bo)):(ho.setUint32(0,o,bo),ho.setUint32(4,i,bo)),u=0;u<wo.length;u++)r[e]=wo[u],e+=n;return r}));var jo=wt,Ao=_o.assign,Io=Lt,Oo=at,Eo=qt,So=Qt,Bo=Je.enum,Po=Ze.enum,Uo=(0,We.enum)(),Fo=Bo(),No=Po();var Vo=co,xo=function(t){var r,n,e,o,i,u,a,f,c,l,y,v,s,p;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(o=t.dtype,i=t.shape,u=t.strides,v=i.length,c=t.mode||"throw",s=(a=t.submode||[c]).length,r=So(o),f=new Eo(new Io(33+16*v+s)),n=new Oo(f.buffer),l=0,f.setInt8(l,jo?1:0),l+=1,f.setInt16(l,Uo[o],jo),Ao(v,n,1,l+=2),y=8*v,l+=8,p=0;p<v;p++)Ao(i[p],n,1,l),Ao(u[p]*r,n,1,l+y),l+=8;for(l+=y,Ao(t.offset*r,n,1,l),l+=8,f.setInt8(l,Fo[t.order]),l+=1,f.setInt8(l,No[c]),Ao(s,n,1,l+=1),l+=8,p=0;p<s;p++)f.setInt8(l,No[a[p]]),l+=1;return e=0,t.flags&&(e|=t.flags.READONLY?4:0),f.setInt32(l,e,jo),f},To=Z()?Vo:xo;export{To as default};
//# sourceMappingURL=mod.js.map
