// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-bigint-support@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/bigint-ctor@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@v0.2.2-esm/index.mjs";import{enum as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.3.0-esm/index.mjs";import{enum as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-orders@v0.2.2-esm/index.mjs";import{enum as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-index-modes@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-offset@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.2.2-esm/index.mjs";import{assign as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-int64-bytes@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";var b=i(),g=m(),_=a();var y=i(),c=m(),x=a();var u=t()?function(t){var i,m,a,p,f,y,c,x,u,I,w,B,A;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(a=o(t),p=j(t,!1),f=l(t,!1),w=p.length,x=t.mode||"throw",B=(y=t.submode||[x]).length,i=d(a),u=0,(c=new r(new e(33+16*w+B))).setInt8(u,s?1:0),u+=1,c.setInt16(u,b[a],s),u+=2,c.setBigInt64(u,n(w),s),I=8*w,u+=8,A=0;A<w;A++)c.setBigInt64(u,n(p[A]),s),c.setBigInt64(u+I,n(f[A]*i),s),u+=8;for(u+=I,c.setBigInt64(u,n(v(t)*i),s),u+=8,c.setInt8(u,g[h(t)]),u+=1,c.setInt8(u,_[x]),u+=1,c.setBigInt64(u,n(B),s),u+=8,A=0;A<B;A++)c.setInt8(u,_[y[A]]),u+=1;return m=0,t.flags&&(m|=t.flags.READONLY?4:0),c.setInt32(u,m,s),c}:function(t){var n,i,m,a,b,g,_,u,I,w,B,A,D,E;if(t.__array_meta_dataview__)return t.__array_meta_dataview__();for(a=o(t),b=j(t,!1),g=l(t,!1),A=b.length,I=t.mode||"throw",D=(_=t.submode||[I]).length,n=d(a),u=new r(new e(33+16*A+D)),i=new f(u.buffer),w=0,u.setInt8(w,s?1:0),w+=1,u.setInt16(w,y[a],s),p(A,i,1,w+=2),B=8*A,w+=8,E=0;E<A;E++)p(b[E],i,1,w),p(g[E]*n,i,1,w+B),w+=8;for(w+=B,p(v(t)*n,i,1,w),w+=8,u.setInt8(w,c[h(t)]),w+=1,u.setInt8(w,x[I]),p(D,i,1,w+=1),w+=8,E=0;E<D;E++)u.setInt8(w,x[_[E]]),w+=1;return m=0,t.flags&&(m|=t.flags.READONLY?4:0),u.setInt32(w,m,s),u};export{u as default};
//# sourceMappingURL=index.mjs.map