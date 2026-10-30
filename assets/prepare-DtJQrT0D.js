const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-y1mzS16b.js","assets/jspdf.es.min-nH1-fphr.js","assets/rolldown-runtime-DAXXjFlN.js","assets/preload-helper-DzhVgCAV.js","assets/browser-DTmGLB4Z.js","assets/typeof-B5XbjTb1.js","assets/slicedToArray-BrxvgkWz.js"])))=>i.map(i=>d[i]);
import"./constants-uyIS2_5G.js";import{t as e}from"./preload-helper-DzhVgCAV.js";import{H as t,V as n,_ as r}from"./instances-CvMx6n0s.js";import{t as i}from"./groupBy-D2hoC06s.js";import{t as a}from"./uniq-CCSxxmT6.js";import{E as o,I as s,Q as c,S as l,Z as u,et as d,h as f}from"./text-measurement-DzH2JVU9.js";import{t as p}from"./isEqual-HbIDtiXw.js";import{t as m}from"./clamp-Dd1_o4QK.js";import{D as h,a as g,d as _,h as v,k as y,s as ee}from"./value-xsBX-zgv.js";import{t as b}from"./pick-BIfRzfj9.js";import{t as x}from"./isEmptyObject-BNJV2G7d.js";import{r as te,t as ne}from"./graph-CE1WPtAH.js";import{C as S,D as re,E as ie,F as ae,L as oe,M as se,N as C,P as ce,R as w,S as le,V as ue,W as de,b as fe,c as pe,g as me,i as he,j as T,l as ge,n as _e,q as E,r as ve,tt as ye,w as be}from"./dist-CmSuwkJf.js";import{C as xe,L as Se,U as Ce,V as we,_ as Te,b as Ee,f as De,g as Oe,kt as ke,p as Ae,v as je,w as Me,x as Ne}from"./generated-DjogKx5v.js";import{a as Pe,at as Fe,et as Ie,ft as Le,ht as Re,k as ze,lt as Be,nt as Ve,ot as He,p as Ue,xt as D}from"./copy-Tgd_6qFz.js";import{G as We,I as Ge,J as Ke,X as qe,Y as O,Z as Je,et as k,nt as A,o as Ye,ot as Xe,q as Ze,r as Qe,rt as $e,tt as j,w as et,z as tt}from"./shape-C36mhX6_.js";import{S as nt,b as rt,f as it,o as at,v as ot,y as st}from"./schema-CiCatHi5.js";import{c as ct,o as lt}from"./bindings-z_4mAqaE.js";import{E as ut,M as dt,N as ft,O as pt,g as mt,o as ht,r as gt,s as _t,t as M}from"./fields-MNlZAM4d.js";import{n as vt,o as N,r as yt,s as bt}from"./browser-DTmGLB4Z.js";import{i as xt}from"./images-BOoaVFWq.js";import{r as St}from"./kinds-DObli5nU.js";import{n as Ct}from"./lists-Cm_bWAnz.js";import{t as wt}from"./references-Cye4ZKkg.js";import{n as Tt}from"./variant-name-DikJwv7k.js";import{t as Et}from"./prepare-BkXLxKz7.js";import{t as Dt}from"./layout-BCnIDFmG.js";function Ot(e){let t={},n=Object.keys(e);for(let r=0;r<n.length;r++){let i=n[r],a=e[i];t[a]=i}return t}function kt(e,t){let n={},r=Object.keys(e);for(let i=0;i<r.length;i++){let a=r[i],o=e[a];n[t(o,a,e)]=o}return n}var At=w(T(),ge()),jt=ve(),Mt=E(),Nt=se({r:At,g:At,b:At,a:At});function Pt(e,t){let n=t.get(e);if(n)return n;let r=e>0?w(se({operator:oe(ht),operands:w(_e(Pt(e-1,t)),ie(1),be(3))}),he(e=>e.operands.length===v(e.operator),`Wrong number of operands`)):void 0,i=fe(e=>typeof e==`number`?At:typeof e==`boolean`?jt:typeof e==`string`?Mt:typeof e==`object`&&e&&`operator`in e&&r?r:typeof e==`object`&&e&&`aliasId`in e?g:Nt);return t.set(e,i),i}function Ft(e){try{let t=_(e.value);return t===void 0||t===e.type}catch{return!1}}var It=w(se({expression:le(`FORMULA`),type:oe([`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`]),value:Pt(64,new Map)}),he(Ft,`Formula operands do not fit their operators`));new Uint8Array([40,181,47,253]);function Lt(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}function Rt(){return globalThis.Bun?.zstdCompressSync}function zt(){return globalThis.Bun?.zstdDecompressSync}var Bt=e=>Rt()?.(e)??vt(e),Vt,Ht;function Ut(){return Ht??=e(async()=>{let{Zstd:e}=await import(`./dist-Dqz5LkMU.js`);return{Zstd:e}},[]).then(({Zstd:e})=>e.load()).then(e=>Vt=e).catch(e=>{throw Ht=void 0,e}),Ht}async function Wt(e=3){let t=await Ut();return n=>t.compress(n,e)}async function Gt(e=3){let t=Rt();return t?n=>t(n,{level:e}):Wt(e)}async function Kt(){return zt()||await Ut(),Xt}function qt(e){try{return yt(e)}catch{throw Error(`Failed to decompress fig-kiwi data`)}}function Jt(e){let t=zt();if(t){let n=t(e);return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}if(!Vt)throw Error(`Zstd is not loaded: await loadFigDataDecompressor() before reading`);return Vt.decompress(e)}function Yt(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}function Xt(e){return Lt(e)?Jt(e):qt(e)}async function Zt(e){return(await Kt())(e)}function Qt(e,t,n=101,r=Bt){let i=r(t),a=16+e.length+4+i.length,o=new Uint8Array(a),s=new DataView(o.buffer);o.set(new TextEncoder().encode(`fig-kiwi`),0),s.setUint32(8,n,!0);let c=12;return s.setUint32(c,e.length,!0),c+=4,o.set(e,c),c+=e.length,s.setUint32(c,i.length,!0),c+=4,o.set(i,c),o}var $t=new Int32Array(1),en=new Float32Array($t.buffer),tn=new TextDecoder,P=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}get offset(){return this._index}set offset(e){this._index=e}get bytes(){return this._data}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}skipByteArray(){let e=this.readVarUint();this._index+=e}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,$t[0]=r,en[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r=this.readByte();for(;r&128&&t<56;)e|=BigInt(r&127)<<t,t+=n,r=this.readByte();return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._index,t=this.findStringTerminator(e);return this._index=t+1,tn.decode(this._data.subarray(e,t))}skipString(){this._index=this.findStringTerminator(this._index)+1}findStringTerminator(e){let t=this._data,n=e;for(;n<t.length&&t[n]!==0;)n++;if(n>=t.length)throw Error(`Unterminated string in Kiwi message`);return n}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){if(!(e instanceof Uint8Array)&&!Array.isArray(e))throw TypeError(`Expected byte array`);this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;en[0]=e;let n=$t[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function F(e){return JSON.stringify(e)}function I(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}var L={BOOL:0,BYTE:1,INT:2,UINT:3,FLOAT:4,STRING:5,INT64:6,UINT64:7,ENUM:8,STRUCT:9,MESSAGE:10},nn=new Map([[`bool`,L.BOOL],[`byte`,L.BYTE],[`int`,L.INT],[`uint`,L.UINT],[`float`,L.FLOAT],[`string`,L.STRING],[`int64`,L.INT64],[`uint64`,L.UINT64]]),rn={ENUM:L.ENUM,STRUCT:L.STRUCT,MESSAGE:L.MESSAGE},an=Symbol(`header bytes`),on=Symbol(`header start`),sn=Symbol(`header whole decoder`);function cn(e){let t=Reflect.get(e,an),n=Reflect.get(e,on),r=Reflect.get(e,sn);if(!(t instanceof Uint8Array)||typeof n!=`number`||typeof r!=`function`)return;let i=new P(t);return i.offset=n,r(i)}function ln(e,t,n){Reflect.defineProperty(e,t,{value:n,enumerable:!1})}function un(){throw Error(`Attempted to parse invalid message`)}function dn(e,t){let n=new Map;for(let t of e.definitions)n.set(t.name,t);let r=new Map,i=e.definitions.map(e=>{let n=[],i=[],a=[],o=new Map;if(e.kind===`ENUM`)for(let t of e.fields)a[t.value]=t.name,o.set(t.name,t.value);let s=t?.[e.name],c={name:e.name,kind:e.kind,fields:n,byId:i,names:a,values:o,header:e.kind===`MESSAGE`&&s!==void 0};return r.set(e.name,c),c});return e.definitions.forEach((e,a)=>{if(e.kind===`ENUM`)return;let o=i[a],s=o.fields,c=o.byId,l=t?.[e.name];for(let t of e.fields){let e=fn(t,l,n,r);s.push(e),c[t.value]=e}}),i}function fn(e,t,n,r){let i=e.type;i===null&&I(`Invalid type null for field `+F(e.name),e.line,e.column);let a=nn.get(i),o=a===void 0?n.get(i):void 0;return a===void 0&&!o&&I(`Invalid type `+F(i)+` for field `+F(e.name),e.line,e.column),{name:e.name,id:e.value,isArray:e.isArray,isDeprecated:e.isDeprecated,type:a??rn[o.kind],definition:o?r.get(o.name)??null:null,kept:t===void 0||t.includes(e.name)}}function pn(e,t){let n=dn(e,t),r=new Map(n.map(e=>[e.name,e])),i=0,a=new WeakMap,o=e=>{let t=r.get(e);return t||I(`Invalid type `+F(e),0,0),t},s=(e,t)=>{switch(e.type){case L.BOOL:return!!t.readByte();case L.BYTE:return t.readByte();case L.INT:return t.readVarInt();case L.UINT:return t.readVarUint();case L.FLOAT:return t.readVarFloat();case L.STRING:return t.readString();case L.INT64:return t.readVarInt64();case L.UINT64:return t.readVarUint64();case L.ENUM:return e.definition.names[t.readVarUint()];default:return f(e.definition,t)}},c=(e,t)=>{if(!e.isArray)return s(e,t);if(e.type===L.BYTE)return t.readByteArray();let n=t.readVarUint(),r=Array.from({length:n});for(let i=0;i<n;i++)r[i]=s(e,t);return r},l=(e,t)=>{switch(e.type){case L.BOOL:case L.BYTE:t.readByte();return;case L.INT:case L.UINT:case L.ENUM:t.readVarUint();return;case L.FLOAT:t.readVarFloat();return;case L.STRING:t.skipString();return;case L.INT64:case L.UINT64:t.readVarUint64();return;case L.STRUCT:for(let n of e.definition.fields)u(n,t);return;default:{let n=e.definition.byId;for(let e=t.readVarUint();e!==0;e=t.readVarUint())u(n[e]??un(),t)}}},u=(e,t)=>{if(!e.isArray){l(e,t);return}if(e.type===L.BYTE){t.skipByteArray();return}for(let n=t.readVarUint();n>0;n--)l(e,t)},d=(e,t,n)=>{e.isDeprecated?u(e,t):n[e.name]=c(e,t)},f=(e,t)=>{let n={};if(e.kind===`STRUCT`){for(let r of e.fields)d(r,t,n);return n}let r=e.header&&i===0;r&&(ln(n,an,t.bytes),ln(n,on,t.offset),ln(n,sn,p(e)));let a=e.byId;for(let e=t.readVarUint();e!==0;e=t.readVarUint()){let i=a[e]??un();r&&!i.kept?u(i,t):d(i,t,n)}return n},p=e=>{let t=a.get(e);return t||(t=t=>{i++;try{return f(e,t)}finally{i--}},a.set(e,t)),t},m=(e,t,n)=>{switch(e.type){case L.BOOL:case L.BYTE:n.writeByte(t);return;case L.INT:n.writeVarInt(t);return;case L.UINT:n.writeVarUint(t);return;case L.FLOAT:n.writeVarFloat(t);return;case L.STRING:n.writeString(t);return;case L.INT64:n.writeVarInt64(t);return;case L.UINT64:n.writeVarUint64(t);return;case L.ENUM:{let r=e.definition,i=r.values.get(t);if(i===void 0)throw Error(`Invalid value `+JSON.stringify(t)+` for enum `+F(r.name));n.writeVarUint(i);return}default:g(e.definition,t,n)}},h=(e,t,n)=>{if(!e.isArray){m(e,t,n);return}if(e.type===L.BYTE){n.writeByteArray(t);return}let r=t;n.writeVarUint(r.length);for(let t of r)m(e,t,n)},g=(e,t,n)=>{let r=e.kind===`MESSAGE`;for(let i of e.fields){if(i.isDeprecated)continue;let e=t[i.name];if(e!=null)r&&n.writeVarUint(i.id),h(i,e,n);else if(!r)throw Error(`Missing required field `+F(i.name))}r&&n.writeVarUint(0)};return{definitions:n,definition:o,read:c,skip:u,write:h,decode:f,encode:g}}function mn(e,t){let n=pn(e,t),r={ByteBuffer:P,schema:n};for(let e of n.definitions){if(e.kind===`ENUM`){let t={};for(let[n,r]of e.values)t[n]=r,t[r]=n;r[e.name]=t;continue}r[`decode`+e.name]=t=>n.decode(e,t instanceof r.ByteBuffer?t:new r.ByteBuffer(t)),r[`encode`+e.name]=(t,i)=>{let a=i??new r.ByteBuffer;return n.encode(e,t,a),i?void 0:a.toUint8Array()}}return r}var hn=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],gn=[`ENUM`,`STRUCT`,`MESSAGE`];function _n(e){let t=e instanceof P?e:new P(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:gn[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:gn[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=hn.length)throw Error(`Invalid type `+i);n.type=hn[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function vn(e){let t=new P,n=e.definitions,r={};t.writeVarUint(n.length);for(let e=0;e<n.length;e++)r[n[e].name]=e;for(let e=0;e<n.length;e++){let i=n[e];t.writeString(i.name),t.writeByte(gn.indexOf(i.kind)),t.writeVarUint(i.fields.length);for(let e=0;e<i.fields.length;e++){let n=i.fields[e],a=hn.indexOf(n.type);t.writeString(n.name),t.writeVarInt(a===-1?r[n.type]:~a),t.writeByte(+!!n.isArray),t.writeVarUint(n.value)}}return t.toUint8Array()}var yn=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],bn=[`ByteBuffer`,`package`],xn=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,Sn=/^[A-Za-z_][A-Za-z0-9_]*$/,Cn=/^\/\/.*|\s+$/,wn=/^=$/,Tn=/^$/,En=/^;$/,Dn=/^-?\d+$/,On=/^\{$/,kn=/^\}$/,An=/^\[\]$/,jn=/^enum$/,Mn=/^struct$/,Nn=/^message$/,Pn=/^package$/,Fn=/^\[deprecated\]$/;function In(e){let t=e.split(xn),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?Cn.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&I(`Syntax error `+F(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Ln(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();I(`Expected `+r+` but found `+F(e.text),e.line,e.column)}}function i(){let e=t();I(`Unexpected token `+F(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(Pn)&&(o=t().text,r(Sn,`identifier`),r(En,`";"`));s<e.length&&!n(Tn);){let e=[],o;n(jn)?o=`ENUM`:n(Mn)?o=`STRUCT`:n(Nn)?o=`MESSAGE`:i();let s=t();for(r(Sn,`identifier`),r(On,`"{"`);!n(kn);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(Sn,`identifier`),a=n(An));let c=t();r(Sn,`identifier`);let l=null;o!==`STRUCT`&&(r(wn,`"="`),l=t(),r(Dn,`integer`),(l.text|0)+``!==l.text&&I(`Invalid integer `+F(l.text),l.line,l.column));let u=t();n(Fn)&&(o!==`MESSAGE`&&I(`Cannot deprecate this field`,u.line,u.column),s=!0),r(En,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Rn(e){let t=yn.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&I(`The type `+F(i.name)+` is defined twice`,i.line,i.column),bn.includes(i.name)&&I(`The type name `+F(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||I(`The type `+F(n.type)+` is not defined for field `+F(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&I(`The id for field `+F(t.name)+` is used twice`,t.line,t.column),t.value<=0&&I(`The id for field `+F(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&I(`Recursive nesting of `+F(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function zn(e){let t=Ln(In(e));return Rn(t),t}function Bn(e){for(let t of e.definitions)Vn(t),t.kind===`ENUM`&&Hn(t)}function Vn(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&I(`The field ${F(n.name)} is defined twice in ${F(e.name)}`,n.line,n.column),t.add(n.name)}function Hn(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&I(`The enum value ${n.value} is used twice in ${F(e.name)}`,n.line,n.column),t.add(n.value)}var Un=zn(`enum MessageType {
  JOIN_START = 0;
  NODE_CHANGES = 1;
  USER_CHANGES = 2;
  JOIN_END = 3;
  SIGNAL = 4;
  STYLE = 5;
  STYLE_SET = 6;
  JOIN_START_SKIP_RELOAD = 7;
  NOTIFY_SHOULD_UPGRADE = 8;
  UPGRADE_DONE = 9;
  UPGRADE_REFRESH = 10;
  SCENE_GRAPH_QUERY = 11;
  SCENE_GRAPH_REPLY = 12;
  DIFF = 13;
  CLIENT_BROADCAST = 14;
  JOIN_START_JOURNALED = 15;
  STREAM_START = 16;
  STREAM_END = 17;
  INTERACTIVE_SLIDE_CHANGE = 18;
  RECONNECT_SCENE_GRAPH_QUERY = 19;
  RECONNECT_SCENE_GRAPH_REPLY = 20;
  JOIN_END_INCREMENTAL_RECONNECT = 21;
  NODE_STATUS_CHANGE = 22;
  CLIENT_RENDERED = 23;
  BUZZ_APPROVAL_CHANGE = 24;
}

enum Axis {
  X = 0;
  Y = 1;
}

enum Access {
  READ_ONLY = 0;
  READ_WRITE = 1;
}

enum NodePhase {
  CREATED = 0;
  REMOVED = 1;
}

enum WindingRule {
  NONZERO = 0;
  ODD = 1;
}

enum NodeType {
  NONE = 0;
  DOCUMENT = 1;
  CANVAS = 2;
  GROUP = 3;
  FRAME = 4;
  BOOLEAN_OPERATION = 5;
  VECTOR = 6;
  STAR = 7;
  LINE = 8;
  ELLIPSE = 9;
  RECTANGLE = 10;
  REGULAR_POLYGON = 11;
  ROUNDED_RECTANGLE = 12;
  TEXT = 13;
  SLICE = 14;
  SYMBOL = 15;
  INSTANCE = 16;
  STICKY = 17;
  SHAPE_WITH_TEXT = 18;
  CONNECTOR = 19;
  CODE_BLOCK = 20;
  WIDGET = 21;
  STAMP = 22;
  MEDIA = 23;
  HIGHLIGHT = 24;
  SECTION = 25;
  SECTION_OVERLAY = 26;
  WASHI_TAPE = 27;
  VARIABLE = 28;
  TABLE = 29;
  TABLE_CELL = 30;
  VARIABLE_SET = 31;
  SLIDE = 32;
  ASSISTED_LAYOUT = 33;
  INTERACTIVE_SLIDE_ELEMENT = 34;
  VARIABLE_OVERRIDE = 35;
  MODULE = 36;
  SLIDE_GRID = 37;
  SLIDE_ROW = 38;
  RESPONSIVE_SET = 39;
  CODE_COMPONENT = 40;
  TEXT_PATH = 41;
  CODE_INSTANCE = 42;
  CODE_LIBRARY = 43;
  CODE_FILE = 44;
  CODE_LAYER = 45;
  BRUSH = 46;
  MANAGED_STRING = 47;
  TRANSFORM = 48;
  CMS_RICH_TEXT = 49;
  REPEATER = 50;
  JSX = 51;
  EMBEDDED_PROTOTYPE = 52;
  REACT_FIBER = 53;
  RESPONSIVE_NODE_SET = 54;
  WEBPAGE = 55;
  KEYFRAME = 56;
  KEYFRAME_TRACK = 57;
  ANIMATION_PRESET_INSTANCE = 58;
  CODE_EMBED = 59;
  BINARY_FILE = 60;
  SPEC_BLOCK = 61;
  TOOL_INSTANCE = 62;
  CUSTOM_EFFECT_INSTANCE = 63;
  NATIVE_CODE_LAYER_INSTANCE = 64;
}

enum ShapeWithTextType {
  SQUARE = 0;
  ELLIPSE = 1;
  DIAMOND = 2;
  TRIANGLE_UP = 3;
  TRIANGLE_DOWN = 4;
  ROUNDED_RECTANGLE = 5;
  PARALLELOGRAM_RIGHT = 6;
  PARALLELOGRAM_LEFT = 7;
  ENG_DATABASE = 8;
  ENG_QUEUE = 9;
  ENG_FILE = 10;
  ENG_FOLDER = 11;
  TRAPEZOID = 12;
  PREDEFINED_PROCESS = 13;
  SHIELD = 14;
  DOCUMENT_SINGLE = 15;
  DOCUMENT_MULTIPLE = 16;
  MANUAL_INPUT = 17;
  HEXAGON = 18;
  CHEVRON = 19;
  PENTAGON = 20;
  OCTAGON = 21;
  STAR = 22;
  PLUS = 23;
  ARROW_LEFT = 24;
  ARROW_RIGHT = 25;
  SUMMING_JUNCTION = 26;
  OR = 27;
  SPEECH_BUBBLE = 28;
  INTERNAL_STORAGE = 29;
}

enum BlendMode {
  PASS_THROUGH = 0;
  NORMAL = 1;
  DARKEN = 2;
  MULTIPLY = 3;
  LINEAR_BURN = 4;
  COLOR_BURN = 5;
  LIGHTEN = 6;
  SCREEN = 7;
  LINEAR_DODGE = 8;
  COLOR_DODGE = 9;
  OVERLAY = 10;
  SOFT_LIGHT = 11;
  HARD_LIGHT = 12;
  DIFFERENCE = 13;
  EXCLUSION = 14;
  HUE = 15;
  SATURATION = 16;
  COLOR = 17;
  LUMINOSITY = 18;
}

enum PaintType {
  SOLID = 0;
  GRADIENT_LINEAR = 1;
  GRADIENT_RADIAL = 2;
  GRADIENT_ANGULAR = 3;
  GRADIENT_DIAMOND = 4;
  IMAGE = 5;
  EMOJI = 6;
  VIDEO = 7;
  PATTERN = 8;
  NOISE = 9;
  CUSTOM = 10;
}

enum ImageScaleMode {
  STRETCH = 0;
  FIT = 1;
  FILL = 2;
  TILE = 3;
}

enum EffectType {
  INNER_SHADOW = 0;
  DROP_SHADOW = 1;
  FOREGROUND_BLUR = 2;
  BACKGROUND_BLUR = 3;
  REPEAT = 4;
  SYMMETRY = 5;
  GRAIN = 6;
  NOISE = 7;
  GLASS = 8;
  CUSTOM = 9;
}

enum TextCase {
  ORIGINAL = 0;
  UPPER = 1;
  LOWER = 2;
  TITLE = 3;
  SMALL_CAPS = 4;
  SMALL_CAPS_FORCED = 5;
}

enum TextDecoration {
  NONE = 0;
  UNDERLINE = 1;
  STRIKETHROUGH = 2;
}

enum TextDecorationStyle {
  SOLID = 0;
  DOTTED = 1;
  WAVY = 2;
}

enum LeadingTrim {
  NONE = 0;
  CAP_HEIGHT = 1;
}

enum NumberUnits {
  RAW = 0;
  PIXELS = 1;
  PERCENT = 2;
}

enum ConstraintType {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  STRETCH = 3;
  SCALE = 4;
  FIXED_MIN = 5;
  FIXED_MAX = 6;
}

enum StrokeAlign {
  CENTER = 0;
  INSIDE = 1;
  OUTSIDE = 2;
  OFFSET = 3;
}

enum StrokeCap {
  NONE = 0;
  ROUND = 1;
  SQUARE = 2;
  ARROW_LINES = 3;
  ARROW_EQUILATERAL = 4;
  DIAMOND_FILLED = 5;
  TRIANGLE_FILLED = 6;
  HIGHLIGHT = 7;
  WASHI_TAPE_1 = 8;
  WASHI_TAPE_2 = 9;
  WASHI_TAPE_3 = 10;
  WASHI_TAPE_4 = 11;
  WASHI_TAPE_5 = 12;
  WASHI_TAPE_6 = 13;
  CIRCLE_FILLED = 14;
  ERD_ZERO_OR_ONE = 15;
  ERD_EXACTLY_ONE = 16;
  ERD_ZERO_OR_MORE = 17;
  ERD_ONE_OR_MORE = 18;
  ERD_ONE = 19;
  ERD_MANY = 20;
}

enum StrokeJoin {
  MITER = 0;
  BEVEL = 1;
  ROUND = 2;
}

enum BooleanOperation {
  UNION = 0;
  INTERSECT = 1;
  SUBTRACT = 2;
  XOR = 3;
}

enum TextAlignHorizontal {
  LEFT = 0;
  CENTER = 1;
  RIGHT = 2;
  JUSTIFIED = 3;
}

enum TextAlignVertical {
  TOP = 0;
  CENTER = 1;
  BOTTOM = 2;
}

enum MouseCursor {
  DEFAULT = 0;
  CROSSHAIR = 1;
  EYEDROPPER = 2;
  HAND = 3;
  PAINT_BUCKET = 4;
  PEN = 5;
  PENCIL = 6;
  MARKER = 7;
  ERASER = 8;
  HIGHLIGHTER = 9;
  LASSO = 10;
}

enum VectorMirror {
  NONE = 0;
  ANGLE = 1;
  ANGLE_AND_LENGTH = 2;
}

enum DashMode {
  CLIP = 0;
  STRETCH = 1;
}

enum ImageType {
  PNG = 0;
  JPEG = 1;
  SVG = 2;
  PDF = 3;
  MP4 = 4;
  GIF = 5;
}

enum ExportConstraintType {
  CONTENT_SCALE = 0;
  CONTENT_WIDTH = 1;
  CONTENT_HEIGHT = 2;
}

enum LayoutGridType {
  MIN = 0;
  CENTER = 1;
  STRETCH = 2;
  MAX = 3;
}

enum LayoutGridPattern {
  STRIPES = 0;
  GRID = 1;
}

enum TextAutoResize {
  NONE = 0;
  WIDTH_AND_HEIGHT = 1;
  HEIGHT = 2;
}

enum TextTruncation {
  DISABLED = 0;
  ENDING = 1;
}

enum StyleSetType {
  PERSONAL = 0;
  TEAM = 1;
  CUSTOM = 2;
  FREQUENCY = 3;
  TEMPORARY = 4;
}

enum StyleSetContentType {
  SOLID = 0;
  GRADIENT = 1;
  IMAGE = 2;
}

enum StackMode {
  NONE = 0;
  HORIZONTAL = 1;
  VERTICAL = 2;
  GRID = 3;
}

enum StackAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  BASELINE = 3;
}

enum StackCounterAlign {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  STRETCH = 3;
  AUTO = 4;
  BASELINE = 5;
}

enum StackJustify {
  MIN = 0;
  CENTER = 1;
  MAX = 2;
  SPACE_EVENLY = 3;
  SPACE_BETWEEN = 4;
}

enum GridChildAlign {
  AUTO = 0;
  MIN = 1;
  CENTER = 2;
  MAX = 3;
}

enum GridAutoTracks {
  NONE = 0;
  ROWS = 1;
}

enum StackSize {
  FIXED = 0;
  RESIZE_TO_FIT = 1;
  RESIZE_TO_FIT_WITH_IMPLICIT_SIZE = 2;
}

enum StackPositioning {
  AUTO = 0;
  ABSOLUTE = 1;
}

enum StackWrap {
  NO_WRAP = 0;
  WRAP = 1;
}

enum StackCounterAlignContent {
  AUTO = 0;
  SPACE_BETWEEN = 1;
}

enum ConnectionType {
  NONE = 0;
  INTERNAL_NODE = 1;
  URL = 2;
  BACK = 3;
  CLOSE = 4;
  SET_VARIABLE = 5;
  UPDATE_MEDIA_RUNTIME = 6;
  CONDITIONAL = 7;
  SET_VARIABLE_MODE = 8;
  OBJECT_ANIMATION = 9;
  UPDATE_ANIMATION_TIMELINE_STATE = 10;
}

enum InteractionType {
  ON_CLICK = 0;
  AFTER_TIMEOUT = 1;
  MOUSE_IN = 2;
  MOUSE_OUT = 3;
  ON_HOVER = 4;
  MOUSE_DOWN = 5;
  MOUSE_UP = 6;
  ON_PRESS = 7;
  NONE = 8;
  DRAG = 9;
  ON_KEY_DOWN = 10;
  ON_VOICE = 11;
  ON_MEDIA_HIT = 12;
  ON_MEDIA_END = 13;
  MOUSE_ENTER = 14;
  MOUSE_LEAVE = 15;
}

enum TransitionType {
  INSTANT_TRANSITION = 0;
  DISSOLVE = 1;
  FADE = 2;
  SLIDE_FROM_LEFT = 3;
  SLIDE_FROM_RIGHT = 4;
  SLIDE_FROM_TOP = 5;
  SLIDE_FROM_BOTTOM = 6;
  PUSH_FROM_LEFT = 7;
  PUSH_FROM_RIGHT = 8;
  PUSH_FROM_TOP = 9;
  PUSH_FROM_BOTTOM = 10;
  MOVE_FROM_LEFT = 11;
  MOVE_FROM_RIGHT = 12;
  MOVE_FROM_TOP = 13;
  MOVE_FROM_BOTTOM = 14;
  SLIDE_OUT_TO_LEFT = 15;
  SLIDE_OUT_TO_RIGHT = 16;
  SLIDE_OUT_TO_TOP = 17;
  SLIDE_OUT_TO_BOTTOM = 18;
  MOVE_OUT_TO_LEFT = 19;
  MOVE_OUT_TO_RIGHT = 20;
  MOVE_OUT_TO_TOP = 21;
  MOVE_OUT_TO_BOTTOM = 22;
  MAGIC_MOVE = 23;
  SMART_ANIMATE = 24;
  SCROLL_ANIMATE = 25;
}

enum EasingType {
  IN_CUBIC = 0;
  OUT_CUBIC = 1;
  INOUT_CUBIC = 2;
  LINEAR = 3;
  IN_BACK_CUBIC = 4;
  OUT_BACK_CUBIC = 5;
  INOUT_BACK_CUBIC = 6;
  CUSTOM_CUBIC = 7;
  SPRING = 8;
  GENTLE_SPRING = 9;
  CUSTOM_SPRING = 10;
  SPRING_PRESET_ONE = 11;
  SPRING_PRESET_TWO = 12;
  SPRING_PRESET_THREE = 13;
  HOLD = 14;
}

enum ScrollDirection {
  NONE = 0;
  HORIZONTAL = 1;
  VERTICAL = 2;
  BOTH = 3;
}

enum ScrollContractedState {
  EXPANDED = 0;
  CONTRACTED = 1;
}

struct GUID {
  uint sessionID;
  uint localID;
}

struct Color {
  float r;
  float g;
  float b;
  float a;
}

struct Vector {
  float x;
  float y;
}

struct Rect {
  float x;
  float y;
  float w;
  float h;
}

struct ColorStop {
  Color color;
  float position;
}

message ColorStopVar {
  Color color = 1;
  VariableData colorVar = 2;
  float position = 3;
}

struct Matrix {
  float m00;
  float m01;
  float m02;
  float m10;
  float m11;
  float m12;
}

struct ParentIndex {
  GUID guid;
  string position;
}

struct Number {
  float value;
  NumberUnits units;
}

struct FontName {
  string family;
  string style;
  string postscript;
}

enum FontVariantNumericFigure {
  NORMAL = 0;
  LINING = 1;
  OLDSTYLE = 2;
}

enum FontVariantNumericSpacing {
  NORMAL = 0;
  PROPORTIONAL = 1;
  TABULAR = 2;
}

enum FontVariantNumericFraction {
  NORMAL = 0;
  DIAGONAL = 1;
  STACKED = 2;
}

enum FontVariantCaps {
  NORMAL = 0;
  SMALL = 1;
  ALL_SMALL = 2;
  PETITE = 3;
  ALL_PETITE = 4;
  UNICASE = 5;
  TITLING = 6;
}

enum FontVariantPosition {
  NORMAL = 0;
  SUB = 1;
  SUPER = 2;
}

enum FontStyle {
  NORMAL = 0;
  ITALIC = 1;
}

enum SemanticWeight {
  NORMAL = 0;
  BOLD = 1;
}

enum SemanticItalic {
  NORMAL = 0;
  ITALIC = 1;
}

enum CodeSnapshotState {
  INITIAL = 0;
  SNAPSHOTTING = 1;
  OK = 2;
  SNAPSHOT_ERROR = 3;
  LLM_IN_PROGRESS = 4;
}

enum SnapshotCaptureMode {
  FULL = 0;
  PARTIAL = 1;
}

message CodeSourceInfo {
  string originReferenceId = 1;
  GUID originNodeId = 2;
  GUID linkedSnapshotId = 3;
  SnapshotCaptureMode captureMode = 4;
  string sourceBlobRef = 5;
  string sourceElementId = 6;
}

enum CodeObjectType {
  WEB_LAYER = 0;
  WEB_INTERACTION = 1;
  NATIVE_LAYER = 2;
  ANIMATION_PRESET = 3;
  TOOL = 4;
  CUSTOM_EFFECT = 5;
  PLUGIN = 6;
  WEB_LAYER_GENERIC = 7;
  CUSTOM_FILL = 8;
}

message CustomToolArtifactRef {
  string customToolId = 1;
  string customToolVersion = 2;
  string publishedCustomToolId = 3;
  string publishedCustomToolVersionId = 4;
}

enum LockMode {
  NONE = 0;
  ALL = 1;
  BACKGROUND_ONLY = 2;
}

enum OpenTypeFeature {
  PCAP = 0;
  C2PC = 1;
  CASE = 2;
  CPSP = 3;
  TITL = 4;
  UNIC = 5;
  ZERO = 6;
  SINF = 7;
  ORDN = 8;
  AFRC = 9;
  DNOM = 10;
  NUMR = 11;
  LIGA = 12;
  CLIG = 13;
  DLIG = 14;
  HLIG = 15;
  RLIG = 16;
  AALT = 17;
  CALT = 18;
  RCLT = 19;
  SALT = 20;
  RVRN = 21;
  VERT = 22;
  SWSH = 23;
  CSWH = 24;
  NALT = 25;
  CCMP = 26;
  STCH = 27;
  HIST = 28;
  SIZE = 29;
  ORNM = 30;
  ITAL = 31;
  RAND = 32;
  DTLS = 33;
  FLAC = 34;
  MGRK = 35;
  SSTY = 36;
  KERN = 37;
  FWID = 38;
  HWID = 39;
  HALT = 40;
  TWID = 41;
  QWID = 42;
  PWID = 43;
  JUST = 44;
  LFBD = 45;
  OPBD = 46;
  RTBD = 47;
  PALT = 48;
  PKNA = 49;
  LTRA = 50;
  LTRM = 51;
  RTLA = 52;
  RTLM = 53;
  ABRV = 54;
  ABVM = 55;
  ABVS = 56;
  VALT = 57;
  VHAL = 58;
  BLWF = 59;
  BLWM = 60;
  BLWS = 61;
  AKHN = 62;
  CJCT = 63;
  CFAR = 64;
  CPCT = 65;
  CURS = 66;
  DIST = 67;
  EXPT = 68;
  FALT = 69;
  FINA = 70;
  FIN2 = 71;
  FIN3 = 72;
  HALF = 73;
  HALN = 74;
  HKNA = 75;
  HNGL = 76;
  HOJO = 77;
  INIT = 78;
  ISOL = 79;
  JP78 = 80;
  JP83 = 81;
  JP90 = 82;
  JP04 = 83;
  LJMO = 84;
  LOCL = 85;
  MARK = 86;
  MEDI = 87;
  MED2 = 88;
  MKMK = 89;
  NLCK = 90;
  NUKT = 91;
  PREF = 92;
  PRES = 93;
  VPAL = 94;
  PSTF = 95;
  PSTS = 96;
  RKRF = 97;
  RPHF = 98;
  RUBY = 99;
  SMPL = 100;
  TJMO = 101;
  TNAM = 102;
  TRAD = 103;
  VATU = 104;
  VJMO = 105;
  VKNA = 106;
  VKRN = 107;
  VRTR = 108;
  VRT2 = 109;
  SS01 = 110;
  SS02 = 111;
  SS03 = 112;
  SS04 = 113;
  SS05 = 114;
  SS06 = 115;
  SS07 = 116;
  SS08 = 117;
  SS09 = 118;
  SS10 = 119;
  SS11 = 120;
  SS12 = 121;
  SS13 = 122;
  SS14 = 123;
  SS15 = 124;
  SS16 = 125;
  SS17 = 126;
  SS18 = 127;
  SS19 = 128;
  SS20 = 129;
  CV01 = 130;
  CV02 = 131;
  CV03 = 132;
  CV04 = 133;
  CV05 = 134;
  CV06 = 135;
  CV07 = 136;
  CV08 = 137;
  CV09 = 138;
  CV10 = 139;
  CV11 = 140;
  CV12 = 141;
  CV13 = 142;
  CV14 = 143;
  CV15 = 144;
  CV16 = 145;
  CV17 = 146;
  CV18 = 147;
  CV19 = 148;
  CV20 = 149;
  CV21 = 150;
  CV22 = 151;
  CV23 = 152;
  CV24 = 153;
  CV25 = 154;
  CV26 = 155;
  CV27 = 156;
  CV28 = 157;
  CV29 = 158;
  CV30 = 159;
  CV31 = 160;
  CV32 = 161;
  CV33 = 162;
  CV34 = 163;
  CV35 = 164;
  CV36 = 165;
  CV37 = 166;
  CV38 = 167;
  CV39 = 168;
  CV40 = 169;
  CV41 = 170;
  CV42 = 171;
  CV43 = 172;
  CV44 = 173;
  CV45 = 174;
  CV46 = 175;
  CV47 = 176;
  CV48 = 177;
  CV49 = 178;
  CV50 = 179;
  CV51 = 180;
  CV52 = 181;
  CV53 = 182;
  CV54 = 183;
  CV55 = 184;
  CV56 = 185;
  CV57 = 186;
  CV58 = 187;
  CV59 = 188;
  CV60 = 189;
  CV61 = 190;
  CV62 = 191;
  CV63 = 192;
  CV64 = 193;
  CV65 = 194;
  CV66 = 195;
  CV67 = 196;
  CV68 = 197;
  CV69 = 198;
  CV70 = 199;
  CV71 = 200;
  CV72 = 201;
  CV73 = 202;
  CV74 = 203;
  CV75 = 204;
  CV76 = 205;
  CV77 = 206;
  CV78 = 207;
  CV79 = 208;
  CV80 = 209;
  CV81 = 210;
  CV82 = 211;
  CV83 = 212;
  CV84 = 213;
  CV85 = 214;
  CV86 = 215;
  CV87 = 216;
  CV88 = 217;
  CV89 = 218;
  CV90 = 219;
  CV91 = 220;
  CV92 = 221;
  CV93 = 222;
  CV94 = 223;
  CV95 = 224;
  CV96 = 225;
  CV97 = 226;
  CV98 = 227;
  CV99 = 228;
}

struct ExportConstraint {
  ExportConstraintType type;
  float value;
}

struct GUIDMapping {
  GUID from;
  GUID to;
}

struct Blob {
  byte[] bytes;
}

message Image {
  byte[] hash = 1;
  string name = 2;
  uint dataBlob = 3;
}

message Video {
  byte[] hash = 1;
  string s3Url = 2;
}

message PasteSource {
  string srcFile = 1;
  GUID srcNode = 2;
}

struct FilterColorAdjust {
  float tint;
  float shadows;
  float highlights;
  float detail;
  float exposure;
  float vignette;
  float temperature;
  float vibrance;
}

message PaintFilterMessage {
  float tint = 1;
  float shadows = 2;
  float highlights = 3;
  float detail = 4;
  float exposure = 5;
  float vignette = 6;
  float temperature = 7;
  float vibrance = 8;
  float contrast = 9;
  float brightness = 10;
}

message Paint {
  PaintType type = 1;
  Color color = 2;
  float opacity = 3;
  bool visible = 4;
  BlendMode blendMode = 5;
  ColorStop[] stops = 6;
  Matrix transform = 7;
  Image image = 8;
  Image imageThumbnail = 9;
  Image animatedImage = 16;
  uint animationFrame = 17;
  ImageScaleMode imageScaleMode = 10;
  bool imageShouldColorManage = 22;
  float rotation = 11;
  float scale = 12;
  FilterColorAdjust filterColorAdjust = 13;
  PaintFilterMessage paintFilter = 14;
  uint[] emojiCodePoints = 15;
  Video video = 18;
  uint originalImageWidth = 19;
  uint originalImageHeight = 20;
  VariableData opacityVar = 38;
  VariableData colorVar = 21;
  VariableData imageVar = 31;
  ColorStopVar[] stopsVar = 23;
  string thumbHashBase64 = 24;
  byte[] thumbHash = 25;
  GUID sourceNodeId = 26;
  float spacing = 27;
  Vector patternSpacing = 37;
  PatternTileType patternTileType = 28;
  PatternAlignment verticalAlignment = 29;
  PatternAlignment horizontalAlignment = 30;
  GUID id = 32;
  string altText = 33;
  NoiseType noiseType = 34;
  float density = 35;
  Vector noiseSize = 36;
  CodeComponentId customEffectId = 39;
  ComponentPropAssignment[] componentPropAssignments = 40;
}

enum NoiseType {
  MULTITONE = 0;
  MONOTONE = 1;
  DUOTONE = 2;
}

enum PatternTileType {
  RECTANGULAR = 0;
  HORIZONTAL_HEXAGONAL = 1;
  VERTICAL_HEXAGONAL = 2;
}

enum PatternAlignment {
  START = 0;
  CENTER = 1;
  END = 2;
}

message FontMetaData {
  FontName key = 1;
  float fontLineHeight = 2;
  byte[] fontDigest = 3;
  FontStyle fontStyle = 4;
  int fontWeight = 5;
}

message FontVariation {
  uint axisTag = 1;
  string axisName = 2;
  float value = 3;
}

message TextData {
  string characters = 1;
  uint[] characterStyleIDs = 2;
  NodeChange[] styleOverrideTable = 3;
  TextLineData[] lines = 12;
  uint layoutVersion = 8;
  FontName[] fallbackFonts = 10;
  float minContentHeight = 17;
  Vector layoutSize = 4;
  Baseline[] baselines = 5;
  Glyph[] glyphs = 6;
  Decoration[] decorations = 7;
  Blockquote[] blockquotes = 16;
  FontMetaData[] fontMetaData = 9;
  HyperlinkBox[] hyperlinkBoxes = 11;
  int truncationStartIndex = 13;
  float truncatedHeight = 14;
  float[] logicalIndexToCharacterOffsetMap = 15;
  MentionBox[] mentionBoxes = 18;
  DerivedTextLineData[] derivedLines = 19;
}

message DerivedTextData {
  Vector layoutSize = 1;
  Baseline[] baselines = 2;
  Glyph[] glyphs = 3;
  Decoration[] decorations = 4;
  Blockquote[] blockquotes = 5;
  FontMetaData[] fontMetaData = 6;
  HyperlinkBox[] hyperlinkBoxes = 7;
  int truncationStartIndex = 8;
  float truncatedHeight = 9;
  float[] logicalIndexToCharacterOffsetMap = 10;
  MentionBox[] mentionBoxes = 11;
  DerivedTextLineData[] derivedLines = 12;
}

message HyperlinkBox {
  Rect bounds = 1;
  string url = 2;
  GUID guid = 3;
  CMSItemPageTarget cmsTarget = 5;
  bool openInNewTab = 6;
  int hyperlinkID = 4;
}

message MentionBox {
  Rect bounds = 1;
  uint startIndex = 2;
  uint endIndex = 3;
  bool isValid = 4;
  uint mentionKey = 5;
}

message Baseline {
  Vector position = 1;
  float width = 2;
  float lineY = 3;
  float lineHeight = 4;
  float lineAscent = 7;
  float ignoreLeadingTrim = 8;
  uint firstCharacter = 5;
  uint endCharacter = 6;
}

message Glyph {
  uint commandsBlob = 1;
  Vector position = 2;
  uint styleID = 3;
  float fontSize = 4;
  uint firstCharacter = 5;
  float advance = 6;
  uint[] emojiCodePoints = 7;
  EmojiImageSet emojiImageSet = 8;
  float rotation = 9;
}

message Decoration {
  Rect[] rects = 1;
  uint styleID = 2;
}

message Blockquote {
  Rect verticalBar = 1;
  Rect quoteMarkBounds = 2;
  uint styleID = 3;
}

message VectorData {
  uint vectorNetworkBlob = 1;
  Vector normalizedSize = 2;
  NodeChange[] styleOverrideTable = 3;
}

message TextPathStart {
  float tValue = 1;
  bool forward = 2;
}

message GUIDPath {
  GUID[] guids = 1;
}

message SymbolData {
  GUID symbolID = 1;
  NodeChange[] symbolOverrides = 2;
  float uniformScaleFactor = 3;
}

message GUIDPathMapping {
  GUID id = 1;
  GUIDPath path = 2;
}

message DerivedBreakpointData {
  NodeChange[] overrides = 1;
}

message NodeGenerationData {
  NodeChange[] overrides = 1;
  bool useFineGrainedSyncing = 2;
  NodeChange[] diffOnlyRemovals = 3;
}

message DerivedImmutableFrameData {
  NodeChange[] overrides = 1;
  uint version = 2;
}

message JsxData {
  NodeChange[] overrides = 1;
}

message DerivedJsxData {
  NodeChange[] overrides = 1;
}

message AssetIdMap {
  AssetIdEntry[] entries = 1;
}

message AssetIdEntry {
  string assetKey = 1;
  AssetId assetId = 2;
}

message AssetRef {
  string key = 1;
  string version = 2;
}

message AssetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
  StateGroupId stateGroupId = 3;
  StyleId styleId = 4;
  SymbolId symbolId = 5;
  VariableID variableId = 6;
  VariableSetID variableSetId = 7;
}

message StateGroupId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message StyleId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message SymbolId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableOverrideId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message VariableSetID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ModuleId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ResponsiveSetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message WebpageId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ThemeID {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeLibraryId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeFileId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CodeComponentId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CanvasNodeId {
  GUID guid = 1;
  SymbolId symbolId = 2;
  StateGroupId stateGroupId = 3;
}

struct IndexRange {
  uint startIndex;
  uint endIndexExclusive;
}

struct CollaborativeTextOpID {
  uint sessionID;
  uint counterID;
}

enum CollaborativeTextOpType {
  INSERT = 0;
  DELETE = 1;
}

message CollaborativeTextStrippedOpRunWithIDs {
  CollaborativeTextOpID firstId = 1;
  uint runLength = 2;
  CollaborativeTextOpID[] parentIds = 3;
  CollaborativeTextOpID[] rebasedOnOpIds = 4;
}

message CollaborativeTextStrippedOpRunWithLoc {
  CollaborativeTextOpType type = 1;
  IndexRange range = 2;
  bool rangeShouldBeIteratedInReverse = 3;
  IndexRange contentBytesInBuffer = 4;
  IndexRange rebasedRange = 5;
}

message CollaborativeTextOpRun {
  CollaborativeTextOpID id = 1;
  CollaborativeTextOpID[] parentIds = 2;
  CollaborativeTextOpType type = 3;
  IndexRange range = 4;
  bool rangeShouldBeIteratedInReverse = 5;
  string content = 6;
  CollaborativeTextOpID[] rebasedOnOpIds = 7;
  IndexRange rebasedRange = 8;
}

message CollaborativePlainText {
  CollaborativeTextStrippedOpRunWithIDs[] historyOpsWithIds = 1;
  CollaborativeTextStrippedOpRunWithLoc[] historyOpsWithLoc = 2;
  byte[] historyStringContentBuffer = 3;
  CollaborativeTextOpRun[] changesToAppend = 4;
}

message CollaborativeTextSelection {
  GUID node = 1;
  uint field = 2;
  IndexRange selectedRange = 3;
  bool caretAtFront = 4;
  CollaborativeTextOpID[] textVersion = 5;
}

message ResponsiveTextStyleVariant {
  float minWidth = 1;
  NodeChange fields = 2;
  VariableData variableFontSize = 3;
  VariableData variableLineHeight = 4;
  VariableData variableLetterSpacing = 5;
  VariableData variableParagraphSpacing = 6;
  string name = 7;
}

enum FlappType {
  POLL = 0;
  EMBED = 1;
  FACEPILE = 2;
  ALIGNMENT = 3;
  YOUTUBE = 4;
}

message SlideThemeProps {
  string themeVersion = 1;
  VariableSetID variableSetId = 2;
  StyleId[] textStyleIds = 3;
  bool isTextColorManuallySelected = 4;
  bool isBorderColorManuallySelected = 5;
  AssetRef subscribedThemeRef = 6;
  uint schemaVersion = 7;
  bool isGeneratedFromDesign = 8;
}

message SlideThemeMap {
  SlideThemeMapEntry[] entries = 1;
}

message SlideThemeMapEntry {
  ThemeID themeId = 1;
  SlideThemeProps themeProps = 2;
}

message SharedSymbolReference {
  string fileKey = 1;
  GUID symbolID = 2;
  string versionHash = 3;
  GUIDPathMapping[] guidPathMappings = 4;
  byte[] bytes = 5;
  GUIDMapping[] libraryGUIDToSubscribingGUID = 6;
  string componentKey = 7;
  GUIDPathMapping[] unflatteningMappings = 8;
  bool isUnflattened = 9;
}

message SharedComponentMasterData {
  string componentKey = 1;
  GUIDPathMapping[] publishingGUIDPathToTeamLibraryGUID = 2;
  bool isUnflattened = 3;
}

message InstanceOverrideStash {
  GUIDPath overridePathOfSwappedInstance = 1;
  string componentKey = 2;
  NodeChange[] overrides = 3;
}

message InstanceOverrideStashV2 {
  GUIDPath overridePathOfSwappedInstance = 1;
  GUID localSymbolID = 2;
  NodeChange[] overrides = 3;
}

message ImportedCodeFileEntry {
  CodeFileId codeFileId = 1;
}

message ImportedCodeFiles {
  ImportedCodeFileEntry[] entries = 1;
}

enum BlurOpType {
  NORMAL = 0;
  PROGRESSIVE = 1;
}

enum RepeatType {
  LINEAR = 0;
  RADIAL = 1;
}

enum UnitType {
  PIXELS = 0;
  RELATIVE = 1;
}

enum RepeatOrder {
  FORWARD = 0;
  REVERSE = 1;
}

enum EffectAxis {
  X = 0;
  Y = 1;
  X_AND_Y = 2;
}

message Effect {
  EffectType type = 1;
  Vector offset = 3;
  float radius = 4;
  bool visible = 5;
  BlendMode blendMode = 6;
  float spread = 7;
  bool showShadowBehindNode = 8;
  VariableData radiusVar = 9;
  VariableData colorVar = 10;
  VariableData spreadVar = 11;
  VariableData xVar = 12;
  VariableData yVar = 13;
  uint count = 14;
  RepeatType repeatType = 15;
  EffectAxis axis = 16;
  UnitType unitType = 17;
  RepeatOrder order = 18;
  BlurOpType blurOpType = 19;
  Vector startOffset = 20;
  Vector endOffset = 28;
  float startRadius = 21;
  Color color = 2;
  Color secondaryColor = 24;
  Vector noiseSize = 22;
  uint seed = 29;
  bool clipToShape = 23;
  float density = 25;
  NoiseType noiseType = 26;
  float opacity = 27;
  float refractionRadius = 30;
  float specularAngle = 31;
  float specularIntensity = 32;
  float bevelSize = 33;
  float chromaticAberration = 34;
  float reflectionDistance = 35;
  float refractionIntensity = 36;
  VariableData refractionRadiusVar = 37;
  VariableData specularAngleVar = 38;
  VariableData specularIntensityVar = 39;
  VariableData chromaticAberrationVar = 40;
  VariableData splayVar = 41;
  VariableData refractionIntensityVar = 42;
  CodeComponentId customEffectId = 43;
  ComponentPropAssignment[] componentPropAssignments = 44;
  VariableData startRadiusVar = 45;
  VariableData startOffsetXVar = 46;
  VariableData startOffsetYVar = 47;
  VariableData endOffsetXVar = 48;
  VariableData endOffsetYVar = 49;
  VariableData noiseSizeXVar = 50;
  VariableData noiseSizeYVar = 51;
  VariableData densityVar = 52;
  VariableData effectOpacityVar = 53;
  VariableData secondaryColorVar = 54;
  GUID id = 55;
}

enum TransformModifierType {
  REPEAT = 0;
  SYMMETRY = 1;
  SKEW = 2;
}

message TransformModifier {
  TransformModifierType type = 1;
  Vector offset = 2;
  bool visible = 3;
  uint count = 4;
  RepeatType repeatType = 5;
  EffectAxis axis = 6;
  UnitType unitType = 7;
  RepeatOrder order = 8;
  float skewX = 9;
  float skewY = 10;
}

enum TransformSchemaType {
  NONE = 0;
  FIXED_ORDER = 1;
  FREEFORM = 2;
}

struct Matrix4f {
  float m00;
  float m01;
  float m02;
  float m03;
  float m10;
  float m11;
  float m12;
  float m13;
  float m20;
  float m21;
  float m22;
  float m23;
  float m30;
  float m31;
  float m32;
  float m33;
}

message FixedOrderTransform3d {
  float perspective = 1;
  float translateZ = 2;
  float rotateX = 3;
  float rotateY = 4;
  float rotateZ = 5;
}

enum TransformFnType {
  NONE = 0;
  MATRIX_3D = 1;
  PERSPECTIVE = 2;
  TRANSLATE_Z = 3;
  ROTATE_X = 4;
  ROTATE_Y = 5;
  ROTATE_Z = 6;
}

message TransformFnValue {
  Matrix4f matrix3d = 1;
  float perspective = 2;
  float rotateAngle = 3;
  float translateValue = 4;
}

message TransformFn {
  TransformFnType type = 1;
  TransformFnValue value = 2;
}

message TransformSchemaValue {
  FixedOrderTransform3d fixedOrderTransform3d = 1;
  TransformFn[] transformFunctions = 2;
}

message Transform3d {
  TransformSchemaType type = 1;
  TransformSchemaValue value = 2;
  bool backfaceHidden = 3;
}

struct NumberVector2D {
  Number x;
  Number y;
}

message Scene3d {
  float perspective = 1;
  NumberVector2D perspectiveOrigin = 2;
  bool preserve3d = 3;
}

message TransformOrigin {
  Number x = 1;
  Number y = 2;
}

message TransitionInfo {
  TransitionType type = 1;
  float duration = 2;
}

enum PrototypeDeviceType {
  NONE = 0;
  PRESET = 1;
  CUSTOM = 2;
  PRESENTATION = 3;
}

enum DeviceRotation {
  NONE = 0;
  CCW_90 = 1;
}

message PrototypeDevice {
  PrototypeDeviceType type = 1;
  Vector size = 2;
  string presetIdentifier = 3;
  DeviceRotation rotation = 4;
}

enum OverlayPositionType {
  CENTER = 0;
  TOP_LEFT = 1;
  TOP_CENTER = 2;
  TOP_RIGHT = 3;
  BOTTOM_LEFT = 4;
  BOTTOM_CENTER = 5;
  BOTTOM_RIGHT = 6;
  MANUAL = 7;
}

enum OverlayBackgroundInteraction {
  NONE = 0;
  CLOSE_ON_CLICK_OUTSIDE = 1;
}

enum OverlayBackgroundType {
  NONE = 0;
  SOLID_COLOR = 1;
}

message OverlayBackgroundAppearance {
  OverlayBackgroundType backgroundType = 1;
  Color backgroundColor = 2;
}

enum NavigationType {
  NAVIGATE = 0;
  OVERLAY = 1;
  SWAP = 2;
  SWAP_STATE = 3;
  SCROLL_TO = 4;
}

enum ExportColorProfile {
  DOCUMENT = 0;
  SRGB = 1;
  DISPLAY_P3_V4 = 2;
  CMYK = 3;
}

enum ExportBackgroundType {
  SOLID = 0;
  TRANSPARENT = 1;
  GRID = 2;
}

message ExportSettings {
  string suffix = 1;
  ImageType imageType = 2;
  ExportConstraint constraint = 3;
  bool svgDataName = 4;
  ExportSVGIDMode svgIDMode = 5;
  bool svgOutlineText = 6;
  bool contentsOnly = 7;
  bool svgForceStrokeMasks = 8;
  bool useAbsoluteBounds = 9;
  ExportColorProfile colorProfile = 10;
  float quality = 11;
  bool useBicubicSampler = 12;
  int frameRate = 13;
  int loopCount = 14;
  ExportBackgroundType backgroundType = 15;
}

enum ExportSVGIDMode {
  IF_NEEDED = 0;
  ALWAYS = 1;
}

message LayoutGrid {
  LayoutGridType type = 1;
  Axis axis = 2;
  bool visible = 3;
  int numSections = 4;
  float offset = 5;
  float sectionSize = 6;
  float gutterSize = 7;
  Color color = 8;
  LayoutGridPattern pattern = 9;
  VariableData numSectionsVar = 10;
  VariableData offsetVar = 11;
  VariableData sectionSizeVar = 12;
  VariableData gutterSizeVar = 13;
}

message Guide {
  Axis axis = 1;
  float offset = 2;
  GUID guid = 3;
}

message Path {
  WindingRule windingRule = 1;
  uint commandsBlob = 2;
  uint styleID = 3;
}

enum StyleType {
  NONE = 0;
  FILL = 1;
  STROKE = 2;
  TEXT = 3;
  EFFECT = 4;
  EXPORT = 5;
  GRID = 6;
  ANIMATION = 7;
}

enum BrushOrientation {
  FORWARD = 0;
  REVERSE = 1;
}

enum BrushType {
  STRETCH = 0;
  SCATTER = 1;
}

message DynamicStrokeSettings {
  float frequency = 1;
  float wiggle = 2;
  float smoothen = 3;
}

message ScatterStrokeSettings {
  float gap = 1;
  float wiggle = 2;
  float angularJitter = 3;
  float rotation = 4;
  float sizeJitter = 5;
}

message StretchStrokeSettings {
  BrushOrientation orientation = 1;
}

message StrokeData {
  Stroke[] strokes = 1;
  uint version = 2;
}

message Stroke {
  int strokeId = 1;
  float strokeWeight = 2;
  VariableData strokeWeightVar = 3;
  Paint[] strokePaint = 4;
  StyleId styleIdForStrokeFill = 5;
  StrokeAlign strokeAlign = 6;
  StrokeCap strokeCap = 7;
  Number strokeCapSize = 8;
  StrokeJoin strokeJoin = 9;
  float miterLimit = 10;
  float[] dashPattern = 11;
  OptionalVector pathTrim = 12;
  float strokeOffset = 13;
  bool isDeleted = 14;
}

message VariableWidthPoint {
  float position = 1;
  float ascent = 2;
  float descent = 3;
  int segmentId = 4;
}

message SharedStyleReference {
  string styleKey = 1;
  string versionHash = 2;
}

message SharedStyleMasterData {
  string styleKey = 1;
  string sortPosition = 2;
  string fileKey = 3;
}

enum ScrollBehavior {
  SCROLLS = 0;
  FIXED_WHEN_CHILD_OF_SCROLLING_FRAME = 1;
  STICKY_SCROLLS = 2;
}

message ArcData {
  float startingAngle = 1;
  float endingAngle = 2;
  float innerRadius = 3;
}

message SymbolLink {
  string uri = 1;
  string displayName = 2;
  string displayText = 3;
}

message PluginData {
  string pluginID = 1;
  string value = 2;
  string key = 3;
}

message PluginRelaunchData {
  string pluginID = 1;
  string message = 2;
  string command = 3;
  bool isDeleted = 4;
  CodeComponentId customToolId = 5;
}

message MultiplayerFieldVersion {
  uint counter = 1;
  uint sessionID = 2;
}

enum ConnectorMagnet {
  NONE = 0;
  AUTO = 1;
  TOP = 2;
  LEFT = 3;
  BOTTOM = 4;
  RIGHT = 5;
  CENTER = 6;
  AUTO_HORIZONTAL = 7;
  EDGE = 8;
  ABSOLUTE = 9;
}

message ConnectorEndpoint {
  GUID endpointNodeID = 1;
  Vector position = 2;
  ConnectorMagnet magnet = 3;
  Vector relativePosition = 4;
}

message ConnectorControlPoint {
  Vector position = 1;
  Vector axis = 2;
}

enum ConnectorTextSection {
  MIDDLE_TO_START = 0;
  MIDDLE_TO_END = 1;
}

enum ConnectorOffAxisOffset {
  NONE = 0;
  ABOVE = 1;
  BELOW = 2;
}

message ConnectorTextMidpoint {
  ConnectorTextSection section = 1;
  float offset = 2;
  ConnectorOffAxisOffset offAxisOffset = 3;
}

enum ConnectorLineStyle {
  ELBOWED = 0;
  STRAIGHT = 1;
  CURVED = 2;
}

enum ConnectorType {
  MANUAL = 0;
  DIAGRAM = 1;
}

enum AnnotationPropertyType {
  FILL = 0;
  STROKE = 1;
  WIDTH = 2;
  HEIGHT = 3;
  MIN_WIDTH = 4;
  MIN_HEIGHT = 5;
  MAX_WIDTH = 6;
  MAX_HEIGHT = 7;
  STROKE_WIDTH = 8;
  CORNER_RADIUS = 9;
  EFFECT = 10;
  TEXT_STYLE = 11;
  TEXT_ALIGN_HORIZONTAL = 12;
  FONT_FAMILY = 13;
  FONT_SIZE = 14;
  FONT_WEIGHT = 15;
  LINE_HEIGHT = 16;
  LETTER_SPACING = 17;
  STACK_SPACING = 18;
  STACK_PADDING = 19;
  STACK_MODE = 20;
  STACK_ALIGNMENT = 21;
  OPACITY = 22;
  COMPONENT = 23;
  FONT_STYLE = 24;
  GRID_ROW_GAP = 25;
  GRID_COLUMN_GAP = 26;
  GRID_ROW_COUNT = 27;
  GRID_COLUMN_COUNT = 28;
  GRID_ROW_ANCHOR_INDEX = 29;
  GRID_COLUMN_ANCHOR_INDEX = 30;
  GRID_ROW_SPAN = 31;
  GRID_COLUMN_SPAN = 32;
}

message AnnotationProperty {
  AnnotationPropertyType type = 1;
}

enum AnnotationCategoryPreset {
  NONE = 0;
  ACCESSIBILITY = 1;
  BEHAVIOR = 2;
  CONTENT = 3;
  DEVELOPMENT = 4;
  INTERACTION = 5;
}

enum AnnotationCategoryColor {
  YELLOW = 0;
  ORANGE = 1;
  RED = 2;
  PINK = 3;
  VIOLET = 4;
  BLUE = 5;
  TEAL = 6;
  GREEN = 7;
}

message AnnotationCategoryCustom {
  AnnotationCategoryColor color = 1;
  Color customColor = 2;
  string label = 3;
}

message AnnotationCategory {
  GUID id = 1;
  AnnotationCategoryPreset preset = 2;
  AnnotationCategoryCustom custom = 3;
}

message AnnotationCategories {
  uint version = 1;
  AnnotationCategory[] items = 2;
}

message Annotation {
  string label = 1;
  AnnotationProperty[] properties = 2;
  string labelV2 = 3;
  GUID categoryId = 4;
}

enum AnnotationMeasurementNodeSide {
  TOP = 0;
  BOTTOM = 1;
  LEFT = 2;
  RIGHT = 3;
}

message AnnotationMeasurement {
  GUID id = 1;
  GUID fromNode = 2;
  GUID toNode = 3;
  AnnotationMeasurementNodeSide fromNodeSide = 4;
  bool toSameSide = 5;
  float innerOffsetRelative = 6;
  float outerOffsetFixed = 7;
  GUIDPath toNodeStablePath = 8;
  string freeText = 9;
}

message LibraryMoveInfo {
  string oldKey = 1;
  string pasteFileKey = 2;
}

message LibraryMoveHistoryItem {
  GUID sourceNodeId = 1;
  string sourceComponentKey = 2;
}

message DeveloperRelatedLink {
  string nodeId = 1;
  string fileKey = 2;
  string linkName = 3;
  string linkUrl = 4;
}

message WidgetPointer {
  GUID nodeId = 1;
}

message EditInfo {
  string timestampIso8601 = 1;
  string userId = 2;
  uint lastEditedAt = 3;
  uint createdAt = 4;
}

enum EditorType {
  DESIGN = 0;
  WHITEBOARD = 1;
  SLIDES = 2;
  DEV_HANDOFF = 3;
  SITES = 4;
  COOPER = 5;
  ILLUSTRATION = 6;
  FIGMAKE = 7;
  FIGSPEC = 8;
}

enum MaskType {
  ALPHA = 0;
  OUTLINE = 1;
  LUMINANCE = 2;
}

enum ModuleType {
  NONE = 0;
  SINGLE_NODE = 1;
  MULTI_NODE = 2;
}

enum SectionStatus {
  NONE = 0;
  BUILD = 1;
  COMPLETED = 2;
}

message SectionStatusInfo {
  SectionStatus status = 1;
  uint lastUpdateUnixTimestamp = 2;
  string description = 3;
  string userId = 4;
  SectionStatus prevStatus = 5;
}

message BuzzApprovalRequestInfo {
  string requestId = 1;
  string requesterUserId = 2;
  uint requestedAt = 3;
  string[] reviewerUserIds = 4;
  string title = 5;
  string note = 6;
  GUID[] assetsInRequest = 7;
}

message BuzzApprovalRequests {
  BuzzApprovalRequestInfo[] requests = 1;
}

enum BuzzApprovalNodeStatus {
  NONE = 0;
  IN_REVIEW = 1;
  APPROVED = 2;
  CHANGES_REQUESTED = 3;
}

message BuzzApprovalNodeStatusInfo {
  BuzzApprovalNodeStatus currentStatus = 1;
  bool wasPreviouslyApproved = 2;
  uint[] approvalRevokedAtHistory = 3;
}

message CodeEmbedInfo {
  string url = 1;
  string srcUrl = 2;
  string title = 3;
  string thumbnailImageHash = 4;
  bool isPublishedSite = 5;
}

enum VariableTimingDisplayUnit {
  MILLISECONDS = 0;
  SECONDS = 1;
}

message NodeChange {
  GUID guid = 1;
  uint guidTag = 53;
  NodePhase phase = 2;
  uint phaseTag = 54;
  ParentIndex parentIndex = 3;
  uint parentIndexTag = 55;
  NodeType type = 4;
  uint typeTag = 56;
  string name = 5;
  uint nameTag = 57;
  bool isPublishable = 174;
  string description = 318;
  LibraryMoveInfo libraryMoveInfo = 256;
  LibraryMoveHistoryItem[] libraryMoveHistory = 281;
  string key = 319;
  AssetIdMap fileAssetIds = 383;
  uint styleID = 49;
  uint styleIDTag = 101;
  bool isFillStyle = 157;
  bool isStrokeStyle = 161;
  bool isOverrideOverTextStyle = 376;
  StyleType styleType = 163;
  string styleDescription = 191;
  string version = 171;
  string userFacingVersion = 399;
  string sortPosition = 320;
  SharedStyleMasterData ojansSuperSecretNodeField = 345;
  SharedStyleMasterData sevMoonlitLilyData = 348;
  bool isSoftDeletedStyle = 176;
  bool isNonUpdateable = 177;
  SharedStyleMasterData sharedStyleMasterData = 172;
  SharedStyleReference sharedStyleReference = 173;
  GUID inheritFillStyleID = 158;
  GUID inheritStrokeStyleID = 162;
  GUID inheritTextStyleID = 167;
  GUID inheritExportStyleID = 168;
  GUID inheritEffectStyleID = 169;
  GUID inheritGridStyleID = 170;
  GUID inheritFillStyleIDForStroke = 185;
  StyleId styleIdForFill = 332;
  StyleId styleIdForStrokeFill = 333;
  StyleId styleIdForText = 334;
  StyleId styleIdForEffect = 335;
  StyleId styleIdForGrid = 336;
  StyleAnimation[] styleAnimations = 580;
  Paint[] backgroundPaints = 193;
  GUID inheritFillStyleIDForBackground = 194;
  bool isStateGroup = 225;
  StateGroupPropertyValueOrder[] stateGroupPropertyValueOrders = 238;
  PartialPasteAnnotation partialPasteAnnotation = 581;
  SharedSymbolReference sharedSymbolReference = 122;
  bool isSymbolPublishable = 123;
  GUIDPathMapping[] sharedSymbolMappings = 124;
  string sharedSymbolVersion = 126;
  SharedComponentMasterData sharedComponentMasterData = 152;
  string symbolDescription = 144;
  GUIDPathMapping[] unflatteningMappings = 164;
  GUIDPathMapping[] forceUnflatteningMappings = 228;
  string publishFile = 214;
  string sourceLibraryKey = 395;
  GUID publishID = 215;
  string componentKey = 216;
  bool isC2 = 217;
  string publishedVersion = 218;
  string originComponentKey = 252;
  ComponentPropDef[] componentPropDefs = 266;
  ComponentPropRef[] componentPropRefs = 267;
  VariantPropSpec[] variantPropSpecs = 483;
  SymbolData symbolData = 113;
  uint symbolDataTag = 114;
  NodeChange[] derivedSymbolData = 125;
  bool nestedInstanceResizeEnabled = 394;
  GUID overriddenSymbolID = 143;
  ComponentPropAssignment[] componentPropAssignments = 268;
  bool propsAreBubbled = 305;
  InstanceOverrideStash[] overrideStash = 248;
  InstanceOverrideStashV2[] overrideStashV2 = 250;
  GUIDPath guidPath = 111;
  uint guidPathTag = 112;
  int overrideLevel = 321;
  ModuleType moduleType = 382;
  bool isSlot = 463;
  bool isSlotContent = 495;
  float fontSize = 21;
  uint fontSizeTag = 73;
  float paragraphIndent = 22;
  uint paragraphIndentTag = 74;
  float paragraphSpacing = 23;
  uint paragraphSpacingTag = 75;
  TextAlignHorizontal textAlignHorizontal = 32;
  uint textAlignHorizontalTag = 84;
  TextAlignVertical textAlignVertical = 33;
  uint textAlignVerticalTag = 85;
  TextCase textCase = 34;
  uint textCaseTag = 86;
  TextDecoration textDecoration = 35;
  uint textDecorationTag = 87;
  Number lineHeight = 40;
  uint lineHeightTag = 92;
  FontName fontName = 41;
  uint fontNameTag = 93;
  TextData textData = 42;
  uint textDataTag = 94;
  DerivedTextData derivedTextData = 359;
  bool fontVariantCommonLigatures = 127;
  bool fontVariantContextualLigatures = 128;
  bool fontVariantDiscretionaryLigatures = 129;
  bool fontVariantHistoricalLigatures = 130;
  bool fontVariantOrdinal = 131;
  bool fontVariantSlashedZero = 132;
  FontVariantNumericFigure fontVariantNumericFigure = 133;
  FontVariantNumericSpacing fontVariantNumericSpacing = 134;
  FontVariantNumericFraction fontVariantNumericFraction = 135;
  FontVariantCaps fontVariantCaps = 136;
  FontVariantPosition fontVariantPosition = 137;
  Number letterSpacing = 165;
  string fontVersion = 202;
  LeadingTrim leadingTrim = 322;
  bool hangingPunctuation = 337;
  bool hangingList = 339;
  bool fallbackGlyphs = 550;
  int maxLines = 351;
  ResponsiveTextStyleVariant[] responsiveTextStyleVariants = 417;
  SectionStatus sectionStatus = 352;
  SectionStatusInfo sectionStatusInfo = 355;
  uint textUserLayoutVersion = 203;
  uint textExplicitLayoutVersion = 396;
  OpenTypeFeature[] toggledOnOTFeatures = 205;
  OpenTypeFeature[] toggledOffOTFeatures = 206;
  Hyperlink hyperlink = 223;
  Mention mention = 340;
  FontVariation[] fontVariations = 260;
  uint textBidiVersion = 279;
  TextTruncation textTruncation = 280;
  bool hasHadRTLText = 292;
  EmojiImageSet emojiImageSet = 391;
  string slideThumbnailHash = 392;
  bool visible = 6;
  uint visibleTag = 58;
  bool locked = 7;
  uint lockedTag = 59;
  LockMode lockMode = 434;
  float opacity = 8;
  uint opacityTag = 60;
  BlendMode blendMode = 9;
  uint blendModeTag = 61;
  Vector size = 11;
  uint sizeTag = 63;
  Matrix transform = 12;
  uint transformTag = 64;
  float[] dashPattern = 13;
  uint dashPatternTag = 65;
  bool mask = 16;
  uint maskTag = 68;
  Vector rotationOrigin = 424;
  bool maskIsOutline = 18;
  uint maskIsOutlineTag = 70;
  MaskType maskType = 317;
  float backgroundOpacity = 19;
  uint backgroundOpacityTag = 71;
  float cornerRadius = 20;
  uint cornerRadiusTag = 72;
  float strokeWeight = 26;
  uint strokeWeightTag = 78;
  StrokeAlign strokeAlign = 29;
  uint strokeAlignTag = 81;
  StrokeCap strokeCap = 30;
  uint strokeCapTag = 82;
  Number strokeCapSize = 497;
  StrokeJoin strokeJoin = 31;
  uint strokeJoinTag = 83;
  Paint[] fillPaints = 38;
  uint fillPaintsTag = 90;
  Paint[] strokePaints = 39;
  uint strokePaintsTag = 91;
  Effect[] effects = 43;
  uint effectsTag = 95;
  Color backgroundColor = 50;
  uint backgroundColorTag = 102;
  Path[] fillGeometry = 51;
  uint fillGeometryTag = 103;
  Path[] strokeGeometry = 52;
  uint strokeGeometryTag = 104;
  Path[] offsetFillMaskGeometry = 564;
  Paint[] textDecorationFillPaints = 411;
  bool textDecorationSkipInk = 412;
  Number textUnderlineOffset = 413;
  Number textDecorationThickness = 415;
  TextDecorationStyle textDecorationStyle = 416;
  TransformModifier[] transformModifiers = 455;
  Transform3d transform3d = 570;
  StrokeData strokeData = 571;
  Scene3d scene3d = 572;
  TransformOrigin transformOrigin = 587;
  float rectangleTopLeftCornerRadius = 145;
  float rectangleTopRightCornerRadius = 146;
  float rectangleBottomLeftCornerRadius = 147;
  float rectangleBottomRightCornerRadius = 148;
  bool rectangleCornerRadiiIndependent = 149;
  bool rectangleCornerToolIndependent = 150;
  bool proportionsConstrained = 151;
  OptionalVector targetAspectRatio = 423;
  bool useAbsoluteBounds = 258;
  bool borderTopHidden = 287;
  bool borderBottomHidden = 288;
  bool borderLeftHidden = 289;
  bool borderRightHidden = 290;
  bool bordersTakeSpace = 294;
  float borderTopWeight = 295;
  float borderBottomWeight = 296;
  float borderLeftWeight = 297;
  float borderRightWeight = 298;
  bool borderStrokeWeightsIndependent = 299;
  ConstraintType horizontalConstraint = 28;
  uint horizontalConstraintTag = 80;
  StackMode stackMode = 105;
  uint stackModeTag = 106;
  float stackSpacing = 107;
  uint stackSpacingTag = 108;
  float stackPadding = 109;
  uint stackPaddingTag = 110;
  StackCounterAlign stackCounterAlign = 120;
  StackJustify stackJustify = 121;
  StackAlign stackAlign = 208;
  float stackHorizontalPadding = 209;
  float stackVerticalPadding = 210;
  StackSize stackWidth = 211;
  StackSize stackHeight = 212;
  StackSize stackPrimarySizing = 229;
  StackJustify stackPrimaryAlignItems = 230;
  StackAlign stackCounterAlignItems = 231;
  float stackChildPrimaryGrow = 232;
  float stackPaddingRight = 233;
  float stackPaddingBottom = 234;
  StackCounterAlign stackChildAlignSelf = 236;
  StackPositioning stackPositioning = 269;
  bool stackReverseZIndex = 271;
  StackWrap stackWrap = 323;
  float stackCounterSpacing = 324;
  OptionalVector minSize = 325;
  OptionalVector maxSize = 326;
  StackCounterAlignContent stackCounterAlignContent = 343;
  int[] sortedMovingChildIndices = 406;
  uint stackLayoutVersion = 574;
  GUIDPositionMap gridRows = 435;
  GUIDPositionMap gridColumns = 436;
  float gridRowGap = 437;
  float gridColumnGap = 438;
  GUID gridRowAnchor = 439;
  GUID gridColumnAnchor = 440;
  uint gridRowSpan = 441;
  uint gridColumnSpan = 442;
  GUIDGridTrackSizeMap gridColumnsSizing = 474;
  GUIDGridTrackSizeMap gridRowsSizing = 475;
  GridChildAlign gridChildVerticalAlign = 476;
  GridChildAlign gridChildHorizontalAlign = 477;
  GridAutoTracks gridAutoTracks = 555;
  bool gridReflowEnabled = 556;
  bool isSnakeGameBoard = 344;
  GUID transitionNodeID = 139;
  GUID prototypeStartNodeID = 140;
  Color prototypeBackgroundColor = 141;
  TransitionInfo transitionInfo = 153;
  TransitionType transitionType = 154;
  float transitionDuration = 155;
  EasingType easingType = 156;
  bool transitionPreserveScroll = 181;
  ConnectionType connectionType = 182;
  string connectionURL = 183;
  PrototypeDevice prototypeDevice = 184;
  InteractionType interactionType = 187;
  float transitionTimeout = 188;
  bool interactionMaintained = 189;
  float interactionDuration = 190;
  bool destinationIsOverlay = 192;
  bool transitionShouldSmartAnimate = 207;
  PrototypeInteraction[] prototypeInteractions = 226;
  PrototypeInteraction[] objectAnimations = 426;
  PrototypeStartingPoint prototypeStartingPoint = 249;
  PluginData[] pluginData = 204;
  PluginRelaunchData[] pluginRelaunchData = 219;
  ConnectorEndpoint connectorStart = 242;
  ConnectorEndpoint connectorEnd = 243;
  ConnectorLineStyle connectorLineStyle = 244;
  StrokeCap connectorStartCap = 245;
  StrokeCap connectorEndCap = 246;
  ConnectorControlPoint[] connectorControlPoints = 253;
  ConnectorControlPoint[] connectorBezierControlPoints = 479;
  ConnectorTextMidpoint connectorTextMidpoint = 255;
  ConnectorType connectorType = 373;
  int connectorVersion = 533;
  Annotation[] annotations = 369;
  AnnotationMeasurement[] measurements = 384;
  AnnotationCategories annotationCategories = 453;
  ShapeWithTextType shapeWithTextType = 241;
  float shapeUserHeight = 247;
  bool isStrokePaintDerived = 530;
  DerivedImmutableFrameData derivedImmutableFrameData = 254;
  MultiplayerFieldVersion derivedImmutableFrameDataVersion = 338;
  NodeGenerationData nodeGenerationData = 240;
  JsxData jsxData = 491;
  DerivedJsxData derivedJsxData = 492;
  string stableKey = 493;
  CodeBlockLanguage codeBlockLanguage = 259;
  CodeBlockTheme codeBlockTheme = 433;
  LinkPreviewData linkPreviewData = 278;
  bool shapeTruncates = 282;
  bool sectionContentsHidden = 283;
  VideoPlayback videoPlayback = 300;
  StampData stampData = 301;
  SectionPresetInfo sectionPresetInfo = 370;
  PlatformShapeDefinition platformShapeDefinition = 409;
  MultiplayerMap widgetSyncedState = 273;
  uint widgetSyncCursor = 274;
  WidgetDerivedSubtreeCursor widgetDerivedSubtreeCursor = 275;
  WidgetPointer widgetCachedAncestor = 276;
  WidgetInputBehavior widgetInputBehavior = 285;
  string widgetTooltip = 286;
  WidgetHoverStyle widgetHoverStyle = 291;
  bool isWidgetStickable = 293;
  bool shouldHideCursorsOnWidgetHover = 360;
  WidgetMetadata widgetMetadata = 262;
  WidgetEvent[] widgetEvents = 263;
  WidgetPropertyMenuItem[] widgetPropertyMenuItems = 265;
  WidgetInputTextNodeType widgetInputTextNodeType = 401;
  MultiplayerMap jsxProps = 489;
  TableRowColumnPositionMap tableRowPositions = 308;
  TableRowColumnPositionMap tableColumnPositions = 309;
  TableRowColumnSizeMap tableRowHeights = 310;
  TableRowColumnSizeMap tableColumnWidths = 311;
  TableMergedCellMap tableMergedCells = 538;
  MultiplayerMap interactiveSlideConfigData = 371;
  MultiplayerMap interactiveSlideParticipantData = 372;
  FlappType flappType = 402;
  bool isEmbeddedPrototype = 486;
  string slideSpeakerNotes = 389;
  bool isSkippedSlide = 410;
  MultiplayerMap presentationOutlines = 573;
  ThemeID themeID = 379;
  SlideThemeData slideThemeData = 381;
  SlideThemeMap slideThemeMap = 390;
  string slideTemplateFileKey = 393;
  SlideNumber slideNumber = 443;
  string slideNumberSeparator = 456;
  GUID diagramParentId = 363;
  GUID layoutRoot = 362;
  string layoutPosition = 364;
  DiagramLayoutRuleType diagramLayoutRuleType = 366;
  DiagramParentIndex diagramParentIndex = 367;
  DiagramLayoutPaused diagramLayoutPaused = 368;
  bool isPageDivider = 380;
  InternalEnumForTest internalEnumForTest = 251;
  InternalDataForTest internalDataForTest = 257;
  bool autoRename = 14;
  uint autoRenameTag = 66;
  bool backgroundEnabled = 15;
  uint backgroundEnabledTag = 67;
  bool exportContentsOnly = 17;
  uint exportContentsOnlyTag = 69;
  float miterLimit = 25;
  uint miterLimitTag = 77;
  float textTracking = 27;
  uint textTrackingTag = 79;
  ConstraintType verticalConstraint = 37;
  uint verticalConstraintTag = 89;
  ExportSettings[] exportSettings = 45;
  uint exportSettingsTag = 97;
  TextAutoResize textAutoResize = 46;
  uint textAutoResizeTag = 98;
  LayoutGrid[] layoutGrids = 47;
  uint layoutGridsTag = 99;
  bool frameMaskDisabled = 115;
  uint frameMaskDisabledTag = 116;
  bool resizeToFit = 117;
  uint resizeToFitTag = 118;
  BooleanOperation booleanOperation = 36;
  uint booleanOperationTag = 88;
  VectorMirror handleMirroring = 44;
  uint handleMirroringTag = 96;
  uint count = 10;
  uint countTag = 62;
  float starInnerScale = 24;
  uint starInnerScaleTag = 76;
  ArcData arcData = 195;
  VectorData vectorData = 48;
  uint vectorDataTag = 100;
  uint vectorOperationVersion = 425;
  TextPathStart textPathStart = 432;
  bool exportBackgroundDisabled = 119;
  Guide[] guides = 138;
  bool internalOnly = 142;
  ScrollDirection scrollDirection = 159;
  float cornerSmoothing = 160;
  Vector scrollOffset = 166;
  bool exportTextAsSVGText = 175;
  ScrollContractedState scrollContractedState = 178;
  Vector contractedSize = 179;
  string fixedChildrenDivider = 180;
  ScrollBehavior scrollBehavior = 186;
  int derivedSymbolDataLayoutVersion = 196;
  NavigationType navigationType = 197;
  OverlayPositionType overlayPositionType = 198;
  Vector overlayRelativePosition = 199;
  OverlayBackgroundInteraction overlayBackgroundInteraction = 200;
  OverlayBackgroundAppearance overlayBackgroundAppearance = 201;
  GUID overrideKey = 213;
  bool containerSupportsFillStrokeAndCorners = 220;
  StackSize stackCounterSizing = 221;
  bool containersSupportFillStrokeAndCorners = 222;
  KeyTrigger keyTrigger = 224;
  string voiceEventPhrase = 227;
  GUID[] ancestorPathBeforeDeletion = 235;
  SymbolLink[] symbolLinks = 237;
  TextListData textListData = 239;
  bool detachOpticalSizeFromFontSize = 261;
  float listSpacing = 264;
  EmbedData embedData = 270;
  RichMediaData richMediaData = 272;
  MultiplayerMap renderedSyncedState = 277;
  bool simplifyInstancePanels = 284;
  HTMLTag accessibleHTMLTag = 302;
  ARIARole ariaRole = 303;
  ARIAAttributesMap ariaAttributes = 357;
  string accessibleLabel = 304;
  bool isDecorativeImage = 490;
  VariableData variableData = 306;
  VariableDataMap variableConsumptionMap = 307;
  VariableModeBySetMap variableModeBySetMap = 316;
  VariableSetMode[] variableSetModes = 312;
  VariableSetID variableSetID = 313;
  VariableResolvedDataType variableResolvedType = 314;
  VariableDataValues variableDataValues = 315;
  string variableTokenName = 350;
  VariableTimingDisplayUnit timingDisplayUnit = 566;
  VariableScope[] variableScopes = 353;
  VariableDataMap parameterConsumptionMap = 445;
  CodeSyntaxMap codeSyntax = 358;
  PasteSource pasteSource = 388;
  EditorType pageType = 397;
  GUID strokeBrushGuid = 446;
  uint64 strokeSeed = 482;
  VariableWidthPoint[] variableWidthPoints = 447;
  DynamicStrokeSettings dynamicStrokeSettings = 448;
  ScatterStrokeSettings scatterStrokeSettings = 449;
  StretchStrokeSettings stretchStrokeSettings = 450;
  Matrix[] scatterBrushTransforms = 488;
  BrushType brushType = 452;
  OptionalVector pathTrim = 542;
  float strokeOffset = 554;
  VariableSetID backingVariableSetId = 377;
  VariableID overriddenVariableId = 464;
  VariableIdOrVariableOverrideId backingVariableId = 378;
  bool isCollectionExtendable = 385;
  string rootVariableKey = 386;
  InheritedVariablesData inheritedVariableIds = 517;
  HandoffStatusMap handoffStatusMap = 361;
  AgendaPositionMap agendaPositionMap = 327;
  AgendaMetadataMap agendaMetadataMap = 328;
  MigrationStatus migrationStatus = 329;
  bool isSoftDeleted = 330;
  EditInfo editInfo = 331;
  ColorProfile colorProfile = 341;
  SymbolId detachedSymbolId = 342;
  ChildReadingDirection childReadingDirection = 346;
  string readingIndex = 347;
  DocumentColorProfile documentColorProfile = 349;
  DeveloperRelatedLink[] developerRelatedLinks = 354;
  string slideActiveThemeLibKey = 356;
  EditScopeInfo editScopeInfo = 365;
  SemanticWeight semanticWeight = 374;
  SemanticItalic semanticItalic = 375;
  bool areSlidesManuallyIndented = 403;
  bool isResponsiveSet = 387;
  DerivedBreakpointData derivedBreakpointData = 500;
  GUID defaultResponsiveSetId = 398;
  bool isPrimaryBreakpoint = 458;
  GUID primaryResponsiveNodeId = 457;
  GUID multiEditGlueId = 462;
  float breakpointMinWidth = 501;
  bool isBreakpointInFocus = 522;
  ResponsiveSetSettings responsiveSetSettings = 400;
  NodeBehaviors behaviors = 404;
  string sourceCode = 414;
  CollaborativeTextOpID[] sourceCodeCollaborativeTextVersion = 534;
  CollaborativePlainText collaborativeSourceCode = 444;
  CodeLibraryId belongsToCodeLibraryId = 427;
  ImportedCodeFiles importedCodeFiles = 467;
  CanvasNodeId codeFileCanvasNodeId = 468;
  bool isEntrypointCodeFile = 498;
  string componentOrStateGroupKey = 502;
  uint componentOrStateGroupVersion = 503;
  string sourceCodeLibraryKey = 504;
  string[] sourceCodeLibraryKeys = 515;
  UsedMakeLibrary[] usedMakeLibraries = 524;
  string makeLibraryComponentId = 518;
  bool shouldHidePreviewForMakeKitCreation = 520;
  bool isMakeKit = 551;
  PrototypeDevice codePreviewSettings = 531;
  CodeExample[] codeExamples = 525;
  CodeFileId exportedFromCodeFileId = 428;
  string codeExportName = 430;
  string codeComponentDescription = 547;
  CodeComponentId backingCodeComponentId = 429;
  bool isMainCodeComponent = 487;
  CodeSnapshotState codeSnapshotState = 431;
  NodeChatMessage[] chatMessages = 451;
  NodeChatCompressionState chatCompressionState = 485;
  AIChatThread aiChatThread = 496;
  string codeChatMessagesKey = 484;
  CodeSnapshot codeSnapshot = 459;
  CodeSnapshotLayers codeSnapshotLayers = 589;
  uint codeSnapshotInvalidatedAt = 480;
  bool isCodeBehavior = 465;
  bool autoForkCode = 469;
  bool hasBeenManuallyRenamed = 470;
  bool codeCreatedFromDesign = 471;
  CanvasNodeId codeCreatedFromDesignNodeId = 481;
  ImageImportMap imageImports = 473;
  CodeObjectType codeObjectType = 516;
  string codeFilePath = 472;
  CodeBehaviorData codeBehaviorData = 478;
  uint codeLibraryFormat = 519;
  bool isCodePreviewPlayingOnCanvas = 527;
  CodeEmbedInfo codeEmbedInfo = 532;
  bool isEmbedCodeLayer = 546;
  CodeSourceInfo codeSourceInfo = 558;
  string mimeType = 536;
  byte[] blobRef = 537;
  CMSSelector cmsSelector = 419;
  CMSConsumptionMap cmsConsumptionMap = 420;
  CMSRichTextStyleMap cmsRichTextStyleMap = 460;
  SymbolId repeaterSymbolId = 539;
  RepeaterCmsOverrideData repeaterCmsOverrideData = 540;
  RepeaterSymbolOverrideData repeaterSymbolOverrideData = 549;
  RepeaterOverrideData repeaterOverrideData = 541;
  uint[] aiEditedNodeChangeFieldNumbers = 405;
  string aiEditScopeLabel = 408;
  FirstDraftData firstDraftData = 407;
  FirstDraftKitElementData firstDraftKitElementData = 418;
  CooperRevertData cooperRevertData = 421;
  CooperTemplateData cooperTemplateData = 461;
  BuzzApprovalRequests buzzApprovalRequests = 528;
  BuzzApprovalNodeStatusInfo buzzApprovalNodeStatusInfo = 529;
  HubFileAttribution hubFileAttribution = 422;
  ManagedStringData managedStringData = 454;
  ThumbnailInfo thumbnailInfo = 466;
  AiCanvasPrompt aiCanvasPrompt = 494;
  CanvasNodeId backingNodeId = 499;
  string pageStatus = 548;
  TRSSTransform2D motionTransform = 523;
  int64 timelinePosition = 506;
  KeyframeValueData keyframeValue = 507;
  VariableData keyframeValueRef = 586;
  InterpolationType interpolationType = 505;
  BezierHandles bezierHandles = 508;
  EasingData easingData = 535;
  KeyframeOperation keyframeOperation = 509;
  TimelinePositionType timelinePositionType = 510;
  bool isClip = 545;
  GUID clipId = 511;
  uint64 timelineDuration = 512;
  int64 timelineOffset = 513;
  bool timelineDisabled = 543;
  PlaybackStyle playbackStyle = 514;
  TimelineDefinitionsMap timelineDefinitions = 552;
  TimelineAssignmentsMap timelineAssignments = 553;
  AnimationPresets animationPresets = 521;
  StyleIdForAnimation[] styleIdsForAnimation = 582;
  AnimationPresetId backingAnimationPresetId = 583;
  Tools tools = 568;
  CustomEffects customEffects = 569;
  TransitionOverrideData transitionOverrides = 526;
  bool useLegacySmartAnimate = 544;
  SourceControlConfig sourceControlConfig = 557;
  SpecBlockType specBlockType = 559;
  CollaborativePlainText specBlockContent = 560;
  string specCodeBlockLanguage = 561;
  string specBlockTableAlignment = 562;
  int specBlockIndentLevel = 563;
  string specImageHash = 575;
  int specWidth = 576;
  int specHeight = 577;
  TableRowColumnSizeMap specBlockTableRowHeights = 578;
  TableRowColumnSizeMap specBlockTableColumnWidths = 579;
  string specEmbedUrl = 590;
  bool placeholder = 565;
  string placeholderClientLifecycleId = 584;
  int placeholderInvalidateAt = 585;
  bool disableJitDst = 567;
  CustomToolArtifactRef customToolArtifactRef = 588;
}

enum GitRepoRefProvider {
  UGIT = 0;
  GITHUB = 1;
  OTHER = 2;
}

message GitRepoRef {
  GitRepoRefProvider provider = 1;
  string gitRepo = 2;
  string gitRef = 3;
}

message SourceControlConfig {
  GitRepoRef origin = 1;
  GitRepoRef upstream = 2;
}

message CodeSnapshot {
  CodeSnapshotState state = 6;
  uint invalidatedAt = 7;
  Paint[] paints = 1;
  Vector offset = 2;
  Vector layoutSize = 3;
  Vector canvasSize = 5;
  uint devicePixelRatio = 4;
}

message CodeOutputLayer {
  NodeChange node = 1;
}

message CodeSnapshotLayers {
  CodeSnapshotState state = 1;
  uint invalidatedAt = 2;
  CodeOutputLayer[] layers = 3;
}

message CodeBehaviorData {
  string name = 1;
  string icon = 2;
  string[] nodeTypes = 3;
  string category = 4;
  uint apiVersion = 5;
}

message CodeExample {
  string exampleName = 1;
  string codeExportName = 2;
}

message UsedMakeLibrary {
  string makeLibraryId = 1;
}

message CookieBannerText {
  string bannerHeader = 1;
  string bannerDisclaimerExplicit = 2;
  string bannerDisclaimerImplicit = 3;
  string policyLabel = 4;
  string acceptText = 5;
  string acknowledgeText = 6;
  string manageText = 7;
  string rejectText = 8;
  string necessaryText = 9;
  string necessaryDescription = 10;
  string analyticsText = 11;
  string analyticsDescription = 12;
  string preferencesText = 13;
  string preferencesDescription = 14;
  string marketingText = 15;
  string marketingDescription = 16;
  string saveLabel = 17;
  string triggerLabel = 18;
}

message CookieBannerSettings {
  bool enabled = 1;
  CookieBannerComponentType componentType = 2;
  CookieXAlignment xAlignment = 3;
  CookieYAlignment yAlignment = 4;
  CookieXAlignment triggerXAlignment = 5;
  CookieYAlignment triggerYAlignment = 6;
  TriggerComponentType triggerComponentType = 7;
  string policyUrl = 8;
  CookieBannerText text = 9;
  GUID policyLink = 10;
  string locale = 11;
}

enum CookieBannerComponentType {
  BANNER = 0;
  MODAL = 1;
}

enum TriggerComponentType {
  BANNER = 0;
  TAG = 1;
}

enum CookieXAlignment {
  LEFT = 0;
  CENTER = 1;
  RIGHT = 2;
}

enum CookieYAlignment {
  TOP = 0;
  CENTER = 1;
  BOTTOM = 2;
}

message ResponsiveSetSettings {
  string title = 1;
  string description = 2;
  ResponsiveScalingMode scalingMode = 3;
  float scalingMinFontSize = 4;
  float scalingMaxFontSize = 5;
  float scalingMinLayoutWidth = 6;
  float scalingMaxLayoutWidth = 7;
  string lang = 8;
  string faviconHash = 9;
  string socialImageHash = 10;
  string googleAnalyticsID = 11;
  bool blockSearchIndexing = 12;
  string customCodeHeadStart = 13;
  string customCodeHeadEnd = 14;
  string customCodeBodyStart = 15;
  string customCodeBodyEnd = 16;
  GUID faviconID = 17;
  GUID socialImageID = 18;
  bool addBypassLinks = 19;
  bool ignoreReducedMotion = 20;
  CookieBannerSettings cookieBanner = 21;
}

enum ResponsiveScalingMode {
  REFLOW = 0;
  SCALE = 1;
}

message CMSSelector {
  string cmsCollectionId = 1;
  CMSFilterCritera filterCriteria = 2;
  CMSSelectorSort[] sorts = 3;
  uint limit = 4;
}

message CMSFilterCritera {
  CMSFilterCriteriaMatchType matchType = 1;
  CMSSelectorFilter[] filters = 2;
}

enum CMSFilterCriteriaMatchType {
  MATCH_ALL = 0;
  MATCH_ANY = 1;
}

message CMSSelectorFilter {
  string cmsFieldId = 1;
  CMSSelectorFilterOperator op = 2;
  string comparisonValue = 3;
}

enum CMSSelectorFilterOperator {
  EQUALS = 0;
}

message CMSSelectorSort {
  string cmsFieldId = 1;
  CMSFieldOrderBy orderBy = 2;
}

enum CMSFieldOrderBy {
  ASCENDING = 0;
  DESCENDING = 1;
}

message CMSConsumptionMap {
  CMSConsumptionMapEntry[] entries = 1;
}

message CMSConsumptionMapEntry {
  CMSConsumptionField consumptionField = 1;
  string cmsFieldId = 2;
}

enum CMSConsumptionField {
  MISSING = 0;
  TEXT_DATA = 1;
}

message CMSRichTextStyleMap {
  CMSRichTextStyleEntry[] entries = 1;
}

message CMSRichTextStyleEntry {
  CMSRichTextStyleClass styleClass = 1;
  CMSRichTextDescriptor textDescriptor = 2;
}

enum CMSRichTextStyleClass {
  HEADING1 = 0;
  HEADING2 = 1;
  HEADING3 = 2;
  HEADING4 = 3;
  HEADING5 = 4;
  HEADING6 = 5;
  PARAGRAPH = 6;
  LINK = 7;
  BLOCKQUOTE = 8;
}

message CMSRichTextDescriptor {
  StyleId textStyleId = 1;
  FontName[] fontNameVariants = 2;
}

message RepeaterCmsOverrideData {
  NodeChange[] overrides = 1;
}

message RepeaterOverrideData {
  NodeChange[] parentIndexOverrides = 1;
}

message RepeaterSymbolOverrideData {
  RepeaterPositionOverrides[] overridesByPosition = 1;
}

message RepeaterPositionOverrides {
  ParentIndex position = 1;
  NodeChange[] overrides = 2;
}

message InheritedVariablesData {
  InheritedVariableEntry[] variableIds = 1;
}

message InheritedVariableEntry {
  VariableID variableId = 1;
}

message HubFileAttribution {
  string hubFileId = 1;
  string hubFileName = 2;
}

message ManagedStringData {
  string key = 1;
  string context = 2;
  string locale = 3;
  ManagedStringNode content = 4;
  ManagedStringContentSchema contentSchema = 5;
}

enum ManagedStringContentSchema {
  V0 = 0;
}

enum ManagedStringNodeType {
  TEXT = 0;
  CONCATENATE = 1;
  PLURAL = 2;
  PLACEHOLDER = 3;
}

message ManagedStringNode {
  ManagedStringNodeType type = 1;
  ManagedStringTextNodeData textNodeData = 2;
  ManagedStringConcatenateAstNodeData concatenateNodeData = 3;
  ManagedStringPluralAstNodeData pluralNodeData = 4;
  ManagedStringPlaceholderAstNodeData placeholderNodeData = 5;
}

message ManagedStringTextNodeData {
  string value = 1;
}

message ManagedStringConcatenateAstNodeData {
  ManagedStringNode[] values = 1;
}

enum ManagedStringPluralType {
  ZERO = 0;
  ONE = 1;
  TWO = 2;
  FEW = 3;
  MANY = 4;
  OTHER = 5;
}

message ManagedStringPluralAstNodeData {
  string identifier = 1;
  ManagedStringPluralTypeMapEntry[] conditions = 2;
}

message ManagedStringPluralTypeMapEntry {
  ManagedStringPluralType key = 1;
  ManagedStringNode value = 2;
}

enum ManagedStringFormatType {
  TEXT = 0;
  DATE = 1;
  TIME = 2;
  NUMBER = 3;
}

message ManagedStringPlaceholderAstNodeData {
  string identifier = 1;
  ManagedStringFormatType formatType = 2;
  string formatPattern = 3;
}

message CooperRevertData {
  NodeChange originalValues = 1;
}

message VideoPlayback {
  bool autoplay = 1;
  bool mediaLoop = 2;
  bool muted = 3;
  bool showControls = 4;
  uint startTimeMs = 5;
  uint endTimeMs = 6;
}

enum MediaAction {
  PLAY = 0;
  PAUSE = 1;
  TOGGLE_PLAY_PAUSE = 2;
  MUTE = 3;
  UNMUTE = 4;
  TOGGLE_MUTE_UNMUTE = 5;
  SKIP_FORWARD = 6;
  SKIP_BACKWARD = 7;
  SKIP_TO = 8;
  SET_PLAYBACK_RATE = 9;
}

enum AnimationTimelineAction {
  PLAY = 0;
  PAUSE = 1;
  TOGGLE_PLAY_PAUSE = 2;
  SET_PLAYHEAD = 3;
}

message WidgetHoverStyle {
  Paint[] fillPaints = 1;
  Paint[] strokePaints = 2;
  float opacity = 3;
  bool areFillPaintsSet = 4;
  bool areStrokePaintsSet = 5;
  bool isOpacitySet = 6;
}

message WidgetDerivedSubtreeCursor {
  uint sessionID = 1;
  uint counter = 2;
}

message MultiplayerMap {
  MultiplayerMapEntry[] entries = 1;
}

message MultiplayerMapEntry {
  string key = 1;
  string value = 2;
}

message VariableDataMap {
  VariableDataMapEntry[] entries = 1;
}

message VariableDataMapEntry {
  uint nodeField = 1;
  VariableData variableData = 2;
  VariableField variableField = 3;
}

enum VariableField {
  MISSING = 0;
  CORNER_RADIUS = 1;
  PARAGRAPH_SPACING = 2;
  PARAGRAPH_INDENT = 3;
  STROKE_WEIGHT = 4;
  STACK_SPACING = 5;
  STACK_PADDING_LEFT = 6;
  STACK_PADDING_TOP = 7;
  STACK_PADDING_RIGHT = 8;
  STACK_PADDING_BOTTOM = 9;
  VISIBLE = 10;
  TEXT_DATA = 11;
  WIDTH = 12;
  HEIGHT = 13;
  RECTANGLE_TOP_LEFT_CORNER_RADIUS = 14;
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS = 15;
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS = 16;
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS = 17;
  BORDER_TOP_WEIGHT = 18;
  BORDER_BOTTOM_WEIGHT = 19;
  BORDER_LEFT_WEIGHT = 20;
  BORDER_RIGHT_WEIGHT = 21;
  VARIANT_PROPERTIES = 22;
  STACK_COUNTER_SPACING = 23;
  MIN_WIDTH = 24;
  MAX_WIDTH = 25;
  MIN_HEIGHT = 26;
  MAX_HEIGHT = 27;
  FONT_FAMILY = 28;
  FONT_STYLE = 29;
  FONT_VARIATIONS = 30;
  OPACITY = 31;
  FONT_SIZE = 32;
  LETTER_SPACING = 34;
  LINE_HEIGHT = 36;
  OVERRIDDEN_SYMBOL_ID = 37;
  HYPERLINK = 38;
  CMS_SERIALIZED_RICH_TEXT_DATA = 39;
  SLOT_CONTENT_ID = 40;
  GRID_ROW_GAP = 41;
  GRID_COLUMN_GAP = 42;
  X_POSITION = 43;
  Y_POSITION = 44;
  ROTATION = 45;
  MOTION_TRANSLATION_X = 46;
  MOTION_TRANSLATION_Y = 47;
  MOTION_ROTATION = 48;
  MOTION_SCALE_X = 49;
  MOTION_SCALE_Y = 50;
  MOTION_SHEAR = 51;
  SCROLL_OFFSET_X = 52;
  SCROLL_OFFSET_Y = 53;
  PATH_TRIM_START = 54;
  PATH_TRIM_END = 55;
  DISSOLVE_PROGRESS = 56;
  EASING_DATA = 57;
  MEDIA_CURRENT_TIME = 58;
  TRANSFORM_3D_PERSPECTIVE = 59;
  TRANSFORM_3D_TRANSLATION_Z = 60;
  TRANSFORM_3D_ROTATION_X = 61;
  TRANSFORM_3D_ROTATION_Y = 62;
  TRANSFORM_3D_ROTATION_Z = 63;
  POLYGON_COUNT = 64;
  ARC_DATA_STARTING_ANGLE = 65;
  ARC_DATA_ENDING_ANGLE = 66;
  ARC_DATA_INNER_RADIUS = 67;
}

message VariableModeBySetMap {
  VariableModeBySetMapEntry[] entries = 1;
}

message VariableModeBySetMapEntry {
  VariableSetID variableSetID = 1;
  GUID variableModeID = 2;
  VariableSetID variableSetExtensionID = 3;
}

message CodeSyntaxMap {
  CodeSyntaxMapEntry[] entries = 1;
}

message CodeSyntaxMapEntry {
  CodeSyntaxPlatform platform = 1;
  string value = 2;
}

message TableMergedCellMap {
  TableMergedCellMapEntry[] entries = 1;
}

message TableMergedCellMapEntry {
  GUID rowId = 1;
  GUID colId = 2;
  int rowSpan = 3;
  int colSpan = 4;
}

message TableRowColumnPositionMap {
  TableRowColumnPositionMapEntry[] entries = 1;
}

message TableRowColumnPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

message GUIDPositionMap {
  GUIDPositionMapEntry[] entries = 1;
}

message GUIDPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

message GUIDGridTrackSizeMap {
  GUIDGridTrackSizeMapEntry[] entries = 1;
}

message GUIDGridTrackSizeMapEntry {
  GUID id = 1;
  GridTrackSize trackSize = 2;
}

message ObjectAnimationList {
  ObjectAnimationListItem[] entries = 1;
}

message ObjectAnimationListItem {
  GUID targetNodeId = 1;
  PrototypeAction animation = 2;
}

message GridTrackSize {
  GridTrackSizingFunction minSizing = 1;
  GridTrackSizingFunction maxSizing = 2;
}

message GridTrackSizingFunction {
  GridTrackSizingType type = 1;
  float value = 2;
}

enum GridTrackSizingType {
  FLEX = 0;
  FIXED = 1;
  HUG = 2;
}

message TableRowColumnSizeMap {
  TableRowColumnSizeMapEntry[] entries = 1;
}

message TableRowColumnSizeMapEntry {
  GUID id = 1;
  float size = 2;
}

message AgendaPositionMap {
  AgendaPositionMapEntry[] entries = 1;
}

message AgendaPositionMapEntry {
  GUID id = 1;
  string position = 2;
}

enum AgendaItemType {
  NODE = 0;
  BLOCK = 1;
}

message AgendaMetadataMap {
  AgendaMetadataMapEntry[] entries = 1;
}

message AgendaMetadataMapEntry {
  GUID id = 1;
  AgendaMetadata data = 2;
}

message AgendaMetadata {
  string name = 1;
  AgendaItemType type = 2;
  GUID targetNodeID = 3;
  AgendaTimerInfo timerInfo = 4;
  AgendaVoteInfo voteInfo = 5;
  AgendaMusicInfo musicInfo = 6;
}

message AgendaTimerInfo {
  uint timerLength = 1;
}

message AgendaVoteInfo {
  uint voteCount = 1;
}

message AgendaMusicInfo {
  string songID = 1;
  uint startTimeMs = 2;
}

enum DiagramLayoutRuleType {
  NONE = 0;
  TREE = 1;
}

struct DiagramParentIndex {
  GUID guid;
  string position;
}

enum DiagramLayoutPaused {
  NO = 0;
  YES = 1;
}

message ComponentPropRef {
  uint nodeField = 1;
  GUID defID = 2;
  string zombieFallbackName = 3;
  ComponentPropNodeField componentPropNodeField = 4;
  bool isDeleted = 5;
}

enum ComponentPropNodeField {
  VISIBLE = 0;
  TEXT_DATA = 1;
  OVERRIDDEN_SYMBOL_ID = 2;
  INHERIT_FILL_STYLE_ID = 3;
  SLOT_CONTENT_ID = 4;
}

message ComponentPropAssignment {
  GUID defID = 1;
  ComponentPropValue value = 2;
  VariableData varValue = 3;
  DerivedTextData legacyDerivedTextData = 4;
}

message ComponentPropDef {
  GUID id = 1;
  string name = 2;
  ComponentPropValue initialValue = 3;
  string sortPosition = 4;
  GUID parentPropDefId = 5;
  ComponentPropType type = 6;
  bool isDeleted = 7;
  ComponentPropPreferredValues preferredValues = 8;
  VariableData varValue = 9;
  ParameterConfig parameterConfig = 10;
  string description = 11;
  SlotPropConfig slotPropConfig = 12;
  ColorArrayConfig colorArrayConfig = 13;
}

message ComponentPropValue {
  bool boolValue = 1;
  TextData textValue = 2;
  GUID guidValue = 3;
  float floatValue = 4;
  EasingData easingData = 5;
  Vector vectorValue = 6;
  Line lineValue = 7;
  Circle circleValue = 8;
  Rotation3D rotation3DValue = 9;
  CirclePoint circlePointValue = 10;
  Gradient gradientValue = 11;
  ColorPoint colorPointValue = 12;
}

message TimelineData {
  uint64 durationUs = 1;
  bool defaultTimeline = 2;
  GUID parentTimelineDefId = 3;
  PlaybackStyle playbackStyle = 4;
}

message TimelineDefinitionsMap {
  TimelineDefinitionsMapEntry[] entries = 1;
}

message TimelineDefinitionsMapEntry {
  GUID id = 1;
  TimelineData data = 2;
}

message TimelineAssignmentKey {
  GUID assignedTimelineId = 1;
  GUID containingTimelineId = 2;
}

message TimelineBindingData {
  int64 offsetUs = 1;
  bool disabled = 2;
}

message TimelineAssignmentsMap {
  TimelineAssignmentsMapEntry[] entries = 1;
}

message TimelineAssignmentsMapEntry {
  TimelineAssignmentKey key = 1;
  TimelineBindingData value = 2;
}

enum ComponentPropType {
  BOOL = 0;
  TEXT = 1;
  COLOR = 2;
  INSTANCE_SWAP = 3;
  VARIANT = 4;
  NUMBER = 5;
  IMAGE = 6;
  SLOT = 7;
  EASING = 8;
  COLOR_ARRAY = 9;
  VECTOR = 10;
  LINE = 11;
  CIRCLE = 12;
  ROTATION_3D = 13;
  CIRCLE_POINT = 14;
  GRADIENT = 15;
  COLOR_POINT = 16;
}

message ComponentPropPreferredValues {
  string[] stringValues = 1;
  InstanceSwapPreferredValue[] instanceSwapValues = 2;
}

message ParameterConfig {
  NumberPropConfig numberPropConfig = 1;
  ParameterConfigControl control = 2;
  SliderConfig sliderConfig = 3;
  VariableData label = 4;
  InputConfig inputConfig = 5;
  SelectConfig selectConfig = 6;
  PointConfig pointConfig = 7;
  LineConfig lineConfig = 8;
  PointRadiusConfig pointRadiusConfig = 9;
  Rotation3DConfig rotation3DConfig = 10;
  CirclePointConfig circlePointConfig = 11;
  ColorPointConfig colorPointConfig = 12;
  bool showDividerAbove = 13;
}

enum ParameterConfigControl {
  DEFAULT = 0;
  SLIDER = 1;
  INPUT = 2;
  SELECT = 3;
}

message InputConfig {
  VariableData unit = 1;
  VariableData min = 2;
  VariableData max = 3;
}

message SliderConfig {
  VariableData min = 1;
  VariableData max = 2;
  VariableData step = 3;
  VariableData unit = 4;
}

enum PointMode {
  CANVAS_AND_UI = 0;
  CANVAS = 1;
  UI = 2;
}

message PointConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Line {
  Vector a = 1;
  Vector b = 2;
}

message LineConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Circle {
  Vector center = 1;
  float radius = 2;
}

message PointRadiusConfig {
  PointMode mode = 1;
  NumberUnits positionUnit = 2;
  NumberUnits radiusUnit = 3;
  float minRadius = 4;
  float maxRadius = 5;
}

message Rotation3D {
  float x = 1;
  float y = 2;
  float z = 3;
  float translateZ = 4;
}

message Rotation3DConfig {
  PointMode mode = 1;
}

message CirclePoint {
  Vector center = 1;
  float radius = 2;
  float angle = 3;
}

message CirclePointConfig {
  PointMode mode = 1;
  NumberUnits positionUnit = 2;
  NumberUnits radiusUnit = 3;
  float minRadius = 4;
  float maxRadius = 5;
}

message ColorPoint {
  Vector point = 1;
  VariableData color = 2;
}

message ColorPointConfig {
  PointMode mode = 1;
  NumberUnits unit = 2;
}

message Gradient {
  GradientStop[] stops = 1;
}

message GradientStop {
  float position = 1;
  VariableData color = 2;
}

message SelectOption {
  VariableData value = 1;
  string label = 2;
}

message SelectConfig {
  SelectOption[] options = 1;
}

message ColorArrayConfig {
  uint minLength = 1;
  uint maxLength = 2;
}

message SlotPropConfig {
  bool stretchChildOnInsert = 1;
  bool displayByDefault = 2;
  uint minChildren = 3;
  uint maxChildren = 4;
  bool allowPreferredValuesOnly = 5;
}

message NumberPropConfig {
  ParameterConfigControl control = 1;
  VariableData min = 2;
  VariableData max = 3;
  VariableData step = 4;
}

message InstanceSwapPreferredValue {
  InstanceSwapPreferredValueType type = 1;
  string key = 2;
}

enum InstanceSwapPreferredValueType {
  COMPONENT = 0;
  STATE_GROUP = 1;
}

enum WidgetEvent {
  MOUSE_DOWN = 0;
  CLICK = 1;
  TEXT_EDIT_END = 2;
  ATTACHED_STICKABLES_CHANGED = 3;
  STUCK_STATUS_CHANGED = 4;
}

enum WidgetInputBehavior {
  WRAP = 0;
  TRUNCATE = 1;
  MULTILINE = 2;
}

message WidgetMetadata {
  string pluginID = 1;
  string pluginVersionID = 2;
  string widgetName = 3;
  bool isResizable = 4;
  bool isRotatable = 5;
}

enum WidgetPropertyMenuItemType {
  ACTION = 0;
  SEPARATOR = 1;
  COLOR = 2;
  DROPDOWN = 3;
  COLOR_SELECTOR = 4;
  TOGGLE = 5;
  LINK = 6;
}

message WidgetPropertyMenuSelectorOption {
  string option = 1;
  string tooltip = 2;
}

enum WidgetInputTextNodeType {
  WIDGET_CONTROLLED = 0;
  RICH_TEXT = 1;
}

message WidgetPropertyMenuItem {
  string propertyName = 1;
  string tooltip = 2;
  WidgetPropertyMenuItemType itemType = 3;
  string icon = 4;
  WidgetPropertyMenuSelectorOption[] options = 5;
  string selectedOption = 6;
  bool isToggled = 7;
  string href = 8;
  bool allowCustomColor = 9;
}

enum CodeBlockLanguage {
  TYPESCRIPT = 0;
  CPP = 1;
  RUBY = 2;
  CSS = 3;
  JAVASCRIPT = 4;
  HTML = 5;
  JSON = 6;
  GRAPHQL = 7;
  PYTHON = 8;
  GO = 9;
  SQL = 10;
  SWIFT = 11;
  KOTLIN = 12;
  RUST = 13;
  BASH = 14;
  PLAINTEXT = 15;
  MARKDOWN = 16;
}

enum CodeBlockTheme {
  FIGJAM_DARK = 0;
  DRACULA = 1;
  DUOTONE_SEA = 2;
  DUOTONE_SPACE = 3;
  DUOTONE_EARTH = 4;
  DUOTONE_FOREST = 5;
  DUOTONE_LIGHT = 6;
}

enum SpecBlockType {
  DEFAULT = 0;
  PARAGRAPH = 1;
  HEADING_1 = 2;
  HEADING_2 = 3;
  HEADING_3 = 4;
  HEADING_4 = 5;
  HEADING_5 = 6;
  HEADING_6 = 7;
  CODE_BLOCK = 8;
  BLOCK_QUOTE = 9;
  HORIZONTAL_RULE = 10;
  ORDERED_LIST_ITEM = 11;
  UNORDERED_LIST_ITEM = 12;
  DOCUMENT = 13;
  TABLE = 14;
  TABLE_ROW = 15;
  TABLE_CELL = 16;
  TODO_LIST_ITEM_UNCHECKED = 17;
  TODO_LIST_ITEM_CHECKED = 18;
  IMAGE = 19;
  EMBED = 20;
}

enum InternalEnumForTest {
  OLD = 1;
}

message InternalDataForTest {
  int testFieldA = 1;
}

message StateGroupPropertyValueOrder {
  string property = 1;
  string[] values = 2;
}

enum BackfillError {
  NONE = 0;
  TRANSIENT_RETRYING = 1;
  PERMANENTLY_FAILED = 2;
  PASTE_FAILED = 3;
}

message PartialPasteAnnotation {
  bool isPartial = 1;
  uint64 annotatedAt = 2;
  BackfillError errorState = 3;
}

message VariantPropSpec {
  GUID propDefId = 1;
  string value = 2;
}

message TextListData {
  int listID = 1;
  BulletType bulletType = 2;
  int indentationLevel = 3;
  int lineNumber = 4;
}

enum BulletType {
  ORDERED = 0;
  UNORDERED = 1;
  INDENT = 2;
  NO_LIST = 3;
}

message TextLineData {
  LineType lineType = 1;
  int styleId = 10;
  int indentationLevel = 2;
  SourceDirectionality sourceDirectionality = 9;
  Directionality directionality = 3;
  DirectionalityIntent directionalityIntent = 4;
  int downgradeStyleId = 5;
  int consistencyStyleId = 6;
  int listStartOffset = 7;
  bool isFirstLineOfList = 8;
}

message DerivedTextLineData {
  Directionality directionality = 1;
}

enum LineType {
  PLAIN = 0;
  ORDERED_LIST = 1;
  UNORDERED_LIST = 2;
  BLOCKQUOTE = 3;
  HEADER = 4;
}

enum SourceDirectionality {
  AUTO = 0;
  LTR = 1;
  RTL = 2;
}

enum Directionality {
  LTR = 0;
  RTL = 1;
}

enum DirectionalityIntent {
  IMPLICIT = 0;
  EXPLICIT = 1;
}

message PrototypeInteraction {
  GUID id = 1;
  PrototypeEvent event = 2;
  PrototypeAction[] actions = 3;
  bool isDeleted = 4;
  int stateManagementVersion = 5;
}

message PrototypeEvent {
  InteractionType interactionType = 1;
  bool interactionMaintained = 2;
  float interactionDuration = 3;
  KeyTrigger keyTrigger = 4;
  string voiceEventPhrase = 5;
  float transitionTimeout = 6;
  float mediaHitTime = 7;
}

message PrototypeVariableTarget {
  VariableID id = 1;
  NodeFieldAlias nodeFieldAlias = 2;
}

message ConditionalActions {
  PrototypeAction[] actions = 1;
  VariableData condition = 2;
}

message PrototypeAction {
  GUID transitionNodeID = 1;
  TransitionType transitionType = 2;
  float transitionDuration = 3;
  EasingType easingType = 4;
  float transitionTimeout = 5;
  bool transitionShouldSmartAnimate = 6;
  ConnectionType connectionType = 7;
  Vector overlayRelativePosition = 9;
  NavigationType navigationType = 10;
  bool transitionPreserveScroll = 11;
  float[] easingFunction = 12;
  Vector extraScrollOffset = 13;
  bool transitionResetScrollPosition = 25;
  bool transitionResetInteractiveComponents = 26;
  bool transitionOverridesEnabled = 42;
  string connectionURL = 8;
  bool openUrlInNewTab = 18;
  VariableData linkParam = 34;
  CMSItemPageTarget cmsTarget = 35;
  GUID targetVariableID = 14;
  VariableAnyValue targetVariableValue = 15;
  PrototypeVariableTarget targetVariable = 19;
  VariableData targetVariableData = 20;
  MediaAction mediaAction = 16;
  bool transitionResetVideoPosition = 17;
  float mediaSkipToTime = 21;
  float mediaSkipByAmount = 22;
  float mediaPlaybackRate = 36;
  VariableData[] conditions = 23;
  ConditionalActions[] conditionalActions = 24;
  VariableSetID targetVariableSetID = 27;
  GUID targetVariableModeID = 28;
  string targetVariableSetKey = 29;
  VariableSetID variableSetTargetExtensionId = 38;
  AnimationType animationType = 30;
  GUID animationTargetId = 31;
  AnimationPhase animationPhase = 32;
  AnimationState animationState = 33;
  bool simpleLink = 37;
  AnimationTimelineAction animationTimelineAction = 39;
  GUID animationTimelineDefId = 41;
  float animationSkipToTime = 40;
}

enum AnimationPhase {
  IN = 0;
  OUT = 1;
}

enum AnimationType {
  NONE = 0;
  FADE = 1;
  SLIDE_FROM_LEFT = 2;
  SLIDE_FROM_RIGHT = 3;
  SLIDE_FROM_TOP = 4;
  SLIDE_FROM_BOTTOM = 5;
}

message AnimationState {
  float opacity = 1;
  Matrix transform = 2;
}

message PrototypeStartingPoint {
  string name = 1;
  string description = 2;
  string position = 3;
}

enum TriggerDevice {
  KEYBOARD = 0;
  UNKNOWN_CONTROLLER = 1;
  XBOX_ONE = 2;
  PS4 = 3;
  SWITCH_PRO = 4;
}

message KeyTrigger {
  int[] keyCodes = 1;
  TriggerDevice triggerDevice = 2;
}

message Hyperlink {
  string url = 1;
  GUID guid = 2;
  CMSItemPageTarget cmsTarget = 4;
  bool openInNewTab = 3;
}

message CMSItemPageTarget {
  GUID nodeId = 1;
  string cmsItemId = 2;
  string fieldSchemaId = 3;
}

enum MentionSource {
  DEFAULT = 0;
  COPY_DUPLICATE = 1;
  SILENT_INSERT = 2;
}

message Mention {
  GUID id = 1;
  string mentionedUserId = 2;
  string mentionedByUserId = 3;
  string fileKey = 4;
  MentionSource source = 5;
  uint64 mentionedUserIdInt = 6;
  uint64 mentionedByUserIdInt = 7;
  string mentionedUserGroupId = 8;
}

message EmbedData {
  string url = 1;
  string srcUrl = 2;
  string title = 3;
  string thumbnailUrl = 4;
  float width = 5;
  float height = 6;
  string embedType = 7;
  string thumbnailImageHash = 8;
  string faviconImageHash = 9;
  string provider = 10;
  string originalText = 11;
  string description = 12;
  string embedVersionId = 13;
  bool isPublishedSite = 14;
}

message StampData {
  string userId = 1;
  string votingSessionId = 2;
  string stampedByUserId = 3;
}

message LinkPreviewData {
  string url = 1;
  string title = 2;
  string provider = 3;
  string description = 4;
  string thumbnailImageHash = 5;
  string faviconImageHash = 6;
  float thumbnailImageWidth = 7;
  float thumbnailImageHeight = 8;
}

message Viewport {
  Rect canvasSpaceBounds = 1;
  bool pixelPreview = 2;
  float pixelDensity = 3;
  GUID canvasGuid = 4;
}

message Mouse {
  MouseCursor cursor = 1;
  Vector canvasSpaceLocation = 2;
  Rect canvasSpaceSelectionBox = 3;
  GUID canvasGuid = 4;
  uint cursorHiddenReason = 5;
}

struct Click {
  uint id;
  Vector point;
}

struct ScrollPosition {
  GUID node;
  Vector scrollOffset;
}

struct TriggeredOverlay {
  GUID overlayGuid;
  GUID hotspotGuid;
  GUID swapGuid;
}

message TriggeredOverlayData {
  GUID overlayGuid = 1;
  GUID hotspotGuid = 2;
  GUID swapGuid = 3;
  GUID prototypeInteractionGuid = 4;
  GUIDPath hotspotBlueprintId = 5;
}

message TriggeredSetVariableActionData {
  GUID nodeForFindingTopmostScreenId = 1;
  string targetVariableId = 2;
  string targetVariableData = 3;
  string resolvedVariableModes = 4;
}

message TriggeredSetVariableModeActionData {
  GUID nodeForFindingTopmostScreenId = 1;
  string targetVariableSetKey = 2;
  string targetVariableModeId = 3;
  VariableSetID targetVariableSetId = 4;
}

message VideoStateChangeData {
  GUID targetNodeId = 1;
  bool isPlaying = 2;
  bool isPlayingSound = 3;
  uint[] currentTimes = 4;
  uint actionTakenTimestamp = 5;
}

message EmbeddedPrototypeData {
  GUID nodeId = 1;
  uint sessionId = 2;
}

message PresentedState {
  GUID baseScreenID = 1;
  TriggeredOverlayData[] overlays = 2;
}

enum TransitionDirection {
  FORWARD = 0;
  REVERSE = 1;
}

message TopLevelPlaybackChange {
  PresentedState oldState = 1;
  PresentedState newState = 2;
  GUIDPath hotspotBlueprintID = 3;
  GUID interactionID = 4;
  bool isHotspotInNewPresentedState = 5;
  TransitionDirection direction = 6;
  GUIDPath instanceStablePath = 7;
}

message InstanceStateChange {
  GUID stateID = 1;
  GUID interactionID = 2;
  GUIDPath hotspotStablePath = 3;
  GUIDPath instanceStablePath = 4;
  PlaybackChangePhase phase = 5;
}

message TextCursor {
  Rect selectionBox = 1;
  GUID canvasGuid = 2;
  GUID textNodeGuid = 3;
}

message TextSelection {
  Rect[] selectionBoxes = 1;
  GUID canvasGuid = 2;
  GUID textNodeGuid = 3;
  Vector textSelectionRange = 4;
  GUID textNodeOrContainingIfGuid = 5;
  GUID tableCellRowId = 6;
  GUID tableCellColId = 7;
}

enum PlaybackChangePhase {
  INITIATED = 0;
  ABORTED = 1;
  COMMITTED = 2;
}

message PlaybackChangeKeyframe {
  PlaybackChangePhase phase = 1;
  float progress = 2;
  float timestamp = 3;
}

message StateMapping {
  GUIDPath stablePath = 1;
  TopLevelPlaybackChange lastTopLevelChange = 2;
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 3;
  float timestamp = 4;
}

message ScrollMapping {
  GUIDPath blueprintID = 1;
  uint overlayIndex = 2;
  Vector scrollOffset = 3;
}

message PlaybackUpdate {
  TopLevelPlaybackChange lastTopLevelChange = 1;
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 2;
  ScrollMapping[] scrollMappings = 3;
  float timestamp = 4;
  Vector pointerLocation = 5;
  bool isTopLevelFrameChange = 6;
  StateMapping[] stateMappings = 7;
}

message ChatMessage {
  string text = 1;
  string previousText = 2;
}

message VoiceMetadata {
  string connectedCallId = 1;
}

message AprilFunCursor {
  string id = 1;
  bool trailEnabled = 2;
}

message AprilFunFigPal {
  string customization = 1;
  string name = 2;
}

enum Heartbeat {
  FOREGROUND = 0;
  BACKGROUND = 1;
}

enum SitesViewState {
  FILE = 0;
  CODE = 1;
  DAKOTA = 2;
  SETTINGS = 3;
  INSERT = 4;
  VARIABLES = 5;
}

enum DesignFullPageViewState {
  NONE = 0;
  DESIGN_SYSTEM = 1;
  VARIABLES = 2;
}

message AgentInfo {
  string name = 1;
  string logo = 2;
  string oauthClientId = 3;
}

message UserChange {
  uint sessionID = 1;
  string stableSessionID = 44;
  bool connected = 2;
  string name = 3;
  Color color = 4;
  string imageURL = 5;
  Viewport viewport = 6;
  Mouse mouse = 7;
  GUID[] selection = 8;
  uint[] observing = 9;
  string deviceName = 10;
  Click[] recentClicks = 11;
  ScrollPosition[] scrollPositions = 12;
  TriggeredOverlay[] triggeredOverlays = 13;
  string userID = 14;
  GUID lastTriggeredHotspot = 15;
  GUID lastTriggeredPrototypeInteractionID = 16;
  uint lastTriggeredObjectAnimationIndex = 38;
  TriggeredOverlayData[] triggeredOverlaysData = 17;
  PlaybackUpdate[] playbackUpdates = 18;
  ChatMessage chatMessage = 19;
  VoiceMetadata voiceMetadata = 20;
  bool canWrite = 21;
  bool highFiveStatus = 22;
  InstanceStateChange[] instanceStateChanges = 23;
  TextCursor textCursor = 24;
  TextSelection textSelection = 25;
  uint connectedAtTimeS = 26;
  bool focusOnTextCursor = 27;
  Heartbeat heartbeat = 28;
  TriggeredSetVariableActionData[] triggeredSetVariableActionData = 29;
  VideoStateChangeData[] videoStateChangeData = 30;
  string clientID = 31;
  GUID focusedSlideId = 32;
  TriggeredSetVariableModeActionData[] triggeredSetVariableModeActionData = 33;
  AprilFunCursor aprilFunCursor = 34;
  EmbeddedPrototypeData[] embeddedPrototypeData = 35;
  GUID activeSlidesEmbeddablePrototype = 36;
  GUID[] activeEmbeddedPrototypes = 43;
  GUID activeCodeComponentId = 37;
  AprilFunFigPal aprilFunFigPal = 39;
  CollaborativeTextSelection collaborativeTextSelection = 40;
  SitesViewState sitesViewState = 41;
  NodeChatExchange[] nodeChatExchanges = 42;
  DesignFullPageViewState designFullPageViewState = 45;
  AgentInfo agentInfo = 46;
}

message InteractiveSlideElementChange {
  string userID = 1;
  string anonymousUserID = 2;
  GUID nodeID = 3;
  string responseData = 4;
}

message NodeStatusChange {
  GUID[] nodeIds = 1;
  SectionStatusInfo statusInfo = 2;
}

message BuzzApprovalAssetEntry {
  GUID assetNodeId = 1;
  bool approved = 2;
}

message BuzzApprovalChange {
  BuzzApprovalAssetEntry[] assetEntries = 1;
  GUID canvasGridNodeId = 2;
  string requestId = 3;
}

enum SceneGraphQueryBehavior {
  DEFAULT = 0;
  CONTAINING_PAGE = 1;
  PLUGIN = 2;
}

enum SceneGraphQueryMode {
  ADD = 0;
  SET = 1;
}

message SceneGraphQuery {
  GUID startingNode = 1;
  uint depth = 2;
  SceneGraphQueryBehavior behavior = 3;
}

message NodeChangesMetadata {
  uint blobsFieldOffset = 1;
}

message CursorReaction {
  string imageUrl = 1;
}

message TimerInfo {
  bool isPaused = 1;
  uint timeRemainingMs = 2;
  uint totalTimeMs = 3;
  uint timerID = 4;
  string setBy = 5;
  uint songID = 6;
  uint lastReceivedSongTimestampMs = 7;
  string songUUID = 8;
}

message MusicInfo {
  bool isPaused = 1;
  uint messageID = 2;
  string songID = 3;
  uint lastReceivedSongTimestampMs = 4;
  bool isStopped = 5;
}

message PresenterNomination {
  uint sessionID = 1;
  bool isCancelled = 2;
}

message PresenterInfo {
  uint sessionID = 1;
  PresenterNomination nomination = 2;
  bool isReconnected = 3;
}

message ClientBroadcast {
  uint sessionID = 1;
  CursorReaction cursorReaction = 2;
  TimerInfo timer = 3;
  PresenterInfo presenter = 4;
  PresenterInfo prototypePresenter = 5;
  MusicInfo music = 6;
}

enum PasteAssetType {
  UNKNOWN = 0;
  VARIABLE = 1;
  STYLE_PROPERTIES = 2;
  STYLE_PROPERTIES_FILL = 3;
  STYLE_PROPERTIES_STROKE = 4;
  STYLE_PROPERTIES_EFFECT = 5;
}

message Message {
  MessageType type = 1;
  uint sessionID = 2;
  string stableSessionID = 42;
  uint ackID = 3;
  bool isRetransmission = 37;
  NodeChange[] nodeChanges = 4;
  UserChange[] userChanges = 5;
  InteractiveSlideElementChange interactiveSlideElementChange = 32;
  NodeStatusChange nodeStatusChange = 36;
  BuzzApprovalChange buzzApprovalChange = 44;
  Blob[] blobs = 6;
  uint blobBaseIndex = 30;
  string signalName = 7;
  Access access = 8;
  string styleSetName = 9;
  StyleSetType styleSetType = 10;
  StyleSetContentType styleSetContentType = 11;
  int pasteID = 12;
  Vector pasteOffset = 13;
  string pasteFileKey = 14;
  string signalPayload = 15;
  SceneGraphQuery[] sceneGraphQueries = 16;
  NodeChangesMetadata nodeChangesMetadata = 17;
  uint fileVersion = 18;
  bool pasteIsPartiallyOutsideEnclosingFrame = 19;
  GUID pastePageId = 20;
  bool isCut = 21;
  Message[] localUndoStack = 22;
  Message[] localRedoStack = 23;
  ClientBroadcast[] broadcasts = 24;
  uint reconnectSequenceNumber = 25;
  string pasteBranchSourceFileKey = 26;
  EditorType pasteEditorType = 27;
  string postSyncActions = 28;
  GUID[] publishedAssetGuids = 29;
  bool dirtyFromInitialLoad = 31;
  ClipboardSelectionRegion[] clipboardSelectionRegions = 33;
  EncodedOffsetsIndex encodedOffsetsIndex = 34;
  bool hasRepeatingContent = 35;
  uint64 sentTimestamp = 38;
  AnnotationCategory[] annotationCategories = 39;
  ClientRenderedMetadata clientRenderedMetadata = 40;
  PasteAssetType pasteAssetType = 41;
  ObjectAnimationList objectAnimations = 43;
  SceneGraphQueryMode sceneGraphQueryMode = 45;
}

message EncodedOffsetsIndex {
  uint nodeChangesFieldOffset = 1;
  uint nodeChangesFieldLength = 2;
  uint blobsFieldOffset = 3;
  GUIDAndEncodedOffset[] nodeChangeOffsets = 4;
}

struct GUIDAndEncodedOffset {
  GUID guid;
  uint offset;
}

message DiffChunk {
  uint[] nodeChanges = 1;
  NodePhase phase = 2;
  NodeChange displayNode = 3;
  GUID canvasId = 4;
  string canvasName = 5;
  bool canvasIsInternal = 6;
  uint[] chunksAffectingThisChunk = 7;
  NodeChange[] basisParentHierarchy = 8;
  NodeChange[] parentHierarchy = 9;
  GUID[] basisParentHierarchyGuids = 10;
  GUID[] parentHierarchyGuids = 11;
}

enum DiffType {
  BRANCHING = 0;
  NODE_CHANGES_ONLY = 1;
}

message DiffPayload {
  NodeChange[] nodeChanges = 1;
  Blob[] blobs = 2;
  DiffChunk[] diffChunks = 3;
  NodeChange[] diffBasis = 4;
  NodeChange[] basisParentNodeChanges = 5;
  NodeChange[] parentNodeChanges = 6;
  DiffType diffType = 7;
}

enum RichMediaType {
  ANIMATED_IMAGE = 0;
  VIDEO = 1;
}

message RichMediaData {
  string mediaHash = 1;
  RichMediaType richMediaType = 2;
}

enum VariableDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  ALIAS = 3;
  COLOR = 4;
  EXPRESSION = 5;
  MAP = 6;
  SYMBOL_ID = 7;
  FONT_STYLE = 8;
  TEXT_DATA = 9;
  INVALID = 10;
  NODE_FIELD_ALIAS = 11;
  CMS_ALIAS = 12;
  PROP_REF = 13;
  IMAGE = 14;
  MANAGED_STRING_ALIAS = 15;
  LINK = 16;
  JS_RUNTIME_ALIAS = 17;
  SLOT_CONTENT_ID = 18;
  DATE = 19;
  KEYFRAME_TRACK_ID = 20;
  KEYFRAME_TRACK_PARAMETER_DATA = 21;
  EASING = 22;
  TIMING = 23;
  VECTOR = 24;
  COLOR_ARRAY = 25;
  LINE = 26;
  CIRCLE = 27;
  ROTATION_3D = 28;
  CIRCLE_POINT = 29;
  GRADIENT = 30;
  COLOR_POINT = 31;
}

enum VariableResolvedDataType {
  BOOLEAN = 0;
  FLOAT = 1;
  STRING = 2;
  COLOR = 4;
  MAP = 5;
  SYMBOL_ID = 6;
  FONT_STYLE = 7;
  TEXT_DATA = 8;
  IMAGE = 9;
  LINK = 10;
  JS_RUNTIME_ALIAS = 11;
  SLOT_CONTENT_ID = 12;
  KEYFRAME_TRACK_ID = 13;
  KEYFRAME_TRACK_PARAMETER_DATA = 14;
  EASING = 15;
  TIMING = 16;
  VECTOR = 17;
  COLOR_ARRAY = 18;
  LINE = 19;
  CIRCLE = 20;
  ROTATION_3D = 21;
  CIRCLE_POINT = 22;
  GRADIENT = 23;
  COLOR_POINT = 24;
}

message VariableAnyValue {
  bool boolValue = 1;
  string textValue = 2;
  float floatValue = 3;
  VariableID alias = 4;
  Color colorValue = 5;
  Expression expressionValue = 6;
  VariableMap mapValue = 7;
  SymbolId symbolIdValue = 8;
  VariableFontStyle fontStyleValue = 9;
  TextData textDataValue = 10;
  NodeFieldAlias nodeFieldAliasValue = 11;
  CMSAlias cmsAliasValue = 12;
  PropRefValue propRefValue = 13;
  ImageParameterValue imageValue = 14;
  ManagedStringAlias managedStringAliasValue = 15;
  Hyperlink linkValue = 16;
  JsRuntimeAlias jsRuntimeAliasValue = 17;
  SlotContentId slotContentIdValue = 18;
  KeyframeTrackId keyframeTrackIdValue = 19;
  KeyframeTrackParameterValue keyframeTrackParameterValue = 20;
  EasingData easingValue = 21;
  Vector vectorValue = 22;
  ColorArray colorArrayValue = 23;
  Line lineValue = 24;
  Circle circleValue = 25;
  Rotation3D rotation3DValue = 26;
  CirclePoint circlePointValue = 27;
  Gradient gradientValue = 28;
  ColorPoint colorPointValue = 29;
}

enum ExpressionFunction {
  ADDITION = 0;
  SUBTRACTION = 1;
  RESOLVE_VARIANT = 2;
  MULTIPLY = 3;
  DIVIDE = 4;
  EQUALS = 5;
  NOT_EQUAL = 6;
  LESS_THAN = 7;
  LESS_THAN_OR_EQUAL = 8;
  GREATER_THAN = 9;
  GREATER_THAN_OR_EQUAL = 10;
  AND = 11;
  OR = 12;
  NOT = 13;
  STRINGIFY = 14;
  TERNARY = 15;
  VAR_MODE_LOOKUP = 16;
  NEGATE = 17;
  IS_TRUTHY = 18;
  KEYFRAME = 19;
  COMPOSE_COLOR = 20;
}

message Expression {
  ExpressionFunction expressionFunction = 1;
  VariableData[] expressionArguments = 2;
}

message VariableMapValue {
  string key = 1;
  VariableData value = 2;
  GUID guidKey = 3;
}

message VariableMap {
  VariableMapValue[] values = 1;
}

message ColorArray {
  VariableData[] colors = 1;
}

message VariableFontStyle {
  VariableData asString = 1;
  VariableData asFloat = 2;
  VariableData asVariations = 3;
}

message ImageParameterValue {
  Image image = 1;
  Image imageThumbnail = 2;
  Image animatedImage = 6;
  string altText = 3;
  uint originalImageHeight = 4;
  uint originalImageWidth = 5;
  uint animationFrame = 7;
}

message ThumbnailInfo {
  GUID nodeID = 1;
  string thumbnailVersion = 2;
}

message AiCanvasPrompt {
  string userPrompt = 1;
  string authorId = 2;
  GUID[] parentNodeIds = 3;
}

message NodeFieldAlias {
  GUIDPath stablePathToNode = 1;
  NodeFieldAliasType nodeField = 2;
  string indexOrKey = 3;
}

enum NodeFieldAliasType {
  MISSING = 0;
  COMPONENT_PROP_ASSIGNMENTS = 1;
}

message CMSAlias {
  string collectionId = 1;
  string itemId = 2;
  string fieldId = 3;
  VariableDataType type = 4;
}

message JsRuntimeAlias {
  string lookupKey = 1;
}

message PropRefValue {
  GUID defId = 1;
}

message ManagedStringId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ManagedStringPlaceholderMapEntry {
  string key = 1;
  string value = 2;
}

message SlotContentId {
  GUID guid = 1;
}

message ManagedStringAlias {
  ManagedStringId managedStringId = 1;
  ManagedStringPlaceholderMapEntry[] placeholderValues = 2;
}

message KeyframeTrackId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message AnimationPresetId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message ToolId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message CustomEffectId {
  GUID guid = 1;
  AssetRef assetRef = 2;
}

message TRSSTransform2D {
  Vector translation = 1;
  float rotation = 2;
  Vector scale = 3;
  float shearX = 4;
}

message VariableData {
  VariableAnyValue value = 1;
  VariableDataType dataType = 2;
  VariableResolvedDataType resolvedDataType = 3;
}

message VariableSetMode {
  GUID id = 1;
  string name = 2;
  string sortPosition = 3;
  VariableSetID parentVariableSetId = 4;
  GUID parentModeId = 5;
}

message VariableDataValues {
  VariableDataValuesEntry[] entries = 1;
}

message VariableDataValuesEntry {
  GUID modeID = 1;
  VariableData variableData = 2;
}

enum VariableScope {
  ALL_SCOPES = 0;
  TEXT_CONTENT = 1;
  CORNER_RADIUS = 2;
  WIDTH_HEIGHT = 3;
  GAP = 4;
  ALL_FILLS = 5;
  FRAME_FILL = 6;
  SHAPE_FILL = 7;
  TEXT_FILL = 8;
  STROKE = 9;
  STROKE_FLOAT = 10;
  EFFECT_FLOAT = 11;
  EFFECT_COLOR = 12;
  OPACITY = 13;
  FONT_STYLE = 14;
  FONT_FAMILY = 15;
  FONT_SIZE = 16;
  LINE_HEIGHT = 17;
  LETTER_SPACING = 18;
  PARAGRAPH_SPACING = 19;
  PARAGRAPH_INDENT = 20;
  FONT_VARIATIONS = 21;
  TRANSFORM = 22;
}

message KeyframeAnyValue {
  float floatValue = 1;
  Color colorValue = 2;
  TextData textDataValue = 3;
  Vector vectorValue = 4;
}

enum KeyframeValueType {
  FLOAT = 0;
  INVALID = 1;
  COLOR = 2;
  TEXT_DATA = 3;
  VECTOR = 4;
}

message KeyframeValueData {
  KeyframeAnyValue value = 1;
  KeyframeValueType valueType = 2;
}

enum KeyframeTrackParameterType {
  INVALID = 0;
  MANUAL = 1;
  ANIMATION_PRESET = 2;
}

message ManualKeyframeTrackParameter {
  KeyframeTrackId keyframeTrackId = 1;
  GUID timelineDefId = 2;
}

message AnimationPresetKeyframeTrackParameter {
  AnimationPresetId animationPresetId = 1;
  KeyframeTrackId keyframeTrackId = 2;
  GUID timelineDefId = 3;
}

message KeyframeTrackAnyParameter {
  ManualKeyframeTrackParameter manual = 1;
  AnimationPresetKeyframeTrackParameter animationPreset = 2;
  GUID animationStyleBindingId = 3;
}

message KeyframeTrackParameter {
  KeyframeTrackAnyParameter value = 1;
  KeyframeTrackParameterType type = 2;
}

message KeyframeTrackParameterValue {
  KeyframeTrackParameter[] parameters = 1;
}

message AnimationPresets {
  AnimationPresetData[] presets = 1;
}

message AnimationPresetData {
  AnimationPresetId animationPresetId = 1;
  GUID timelineDefId = 2;
}

message StyleAnimation {
  AnimationPresetId animationPresetId = 1;
}

message StyleIdForAnimation {
  GUID id = 1;
  GUID timelineDefId = 2;
  StyleId animationStyleId = 3;
  int64 timelineOffset = 4;
}

message Tools {
  ToolData[] tools = 1;
}

message ToolData {
  ToolId toolId = 1;
  CodeComponentId backingCodeComponentId = 2;
  ComponentPropAssignment[] componentPropAssignments = 3;
}

message CustomEffects {
  CustomEffectData[] customEffects = 1;
}

message CustomEffectData {
  CustomEffectId customEffectId = 1;
}

message SpringParams {
  float stiffness = 1;
  float damping = 2;
  float mass = 3;
}

message TransitionEasingAnyValue {
  SpringParams springEasing = 1;
  BezierHandles bezierEasing = 2;
}

message EasingData {
  EasingType easingType = 1;
  TransitionEasingAnyValue easingValue = 2;
}

message TransitionOverride {
  GUID id = 1;
  float duration = 2;
  VariableData durationVar = 3;
  float delay = 4;
  VariableData delayVar = 5;
  EasingData easing = 6;
  VariableData easingVar = 7;
  uint64 createdAtMs = 8;
  GUID[] interactionIDs = 9;
  bool disabled = 10;
}

message TransitionOverrideData {
  TransitionOverride[] all = 1;
  TransitionOverridePropMap propertyOverrides = 2;
}

enum TransitionOverrideProp {
  ALL = 0;
  OPACITY = 1;
  TRANSLATION = 2;
  ROTATION = 3;
  SCALE = 4;
}

enum TransitionOverrideBindingTopLevelField {
  MISSING = 0;
  PARAMETER_CONSUMPTION_MAP = 1;
  EFFECT_DATA = 2;
  FILL_PAINT_DATA = 3;
  STROKE_PAINT_DATA = 4;
}

message TransitionOverrideBindingLocation {
  TransitionOverrideBindingTopLevelField topLevelField = 1;
  int parameterFieldValue = 2;
  int index = 3;
  int effectParametrizedFieldValue = 4;
}

enum KeyframeBindingEffectParametrizedField {
  MISSING = 0;
  OFFSET_X = 1;
  OFFSET_Y = 2;
  RADIUS = 3;
  SPREAD = 4;
  COLOR = 5;
  REFRACTION_RADIUS = 6;
  SPECULAR_ANGLE = 7;
  SPECULAR_INTENSITY = 8;
  CHROMATIC_ABERRATION = 9;
  SPLAY = 10;
  REFRACTION_INTENSITY = 11;
  START_RADIUS = 12;
  START_OFFSET_X = 13;
  START_OFFSET_Y = 14;
  END_OFFSET_X = 15;
  END_OFFSET_Y = 16;
  NOISE_SIZE_X = 17;
  NOISE_SIZE_Y = 18;
  DENSITY = 19;
  EFFECT_OPACITY = 20;
  SECONDARY_COLOR = 21;
}

message NodeContentsKeyframeBindingLocation {
  TransitionOverrideBindingTopLevelField topLevelField = 1;
  VariableField parameterFieldValue = 2;
  int index = 3;
  KeyframeBindingEffectParametrizedField effectParametrizedFieldValue = 4;
}

message TransitionOverridePropMap {
  TransitionOverridePropMapEntry[] entries = 1;
}

message TransitionOverridePropMapEntry {
  TransitionOverrideProp prop = 1;
  TransitionOverride[] overrides = 2;
  TransitionOverrideBindingLocation bindingLocation = 3;
  NodeContentsKeyframeBindingLocation nodeContentsBindingLocation = 4;
}

enum CodeSyntaxPlatform {
  WEB = 0;
  ANDROID = 1;
  iOS = 2;
}

message OptionalVector {
  Vector value = 1;
}

enum HTMLTag {
  AUTO = 0;
  ARTICLE = 1;
  SECTION = 2;
  NAV = 3;
  ASIDE = 4;
  H1 = 5;
  H2 = 6;
  H3 = 7;
  H4 = 8;
  H5 = 9;
  H6 = 10;
  HGROUP = 11;
  HEADER = 12;
  FOOTER = 13;
  ADDRESS = 14;
  P = 15;
  HR = 16;
  PRE = 17;
  BLOCKQUOTE = 18;
  OL = 19;
  UL = 20;
  MENU = 21;
  LI = 22;
  DL = 23;
  DT = 24;
  DD = 25;
  FIGURE = 26;
  FIGCAPTION = 27;
  MAIN = 28;
  DIV = 29;
  A = 30;
  EM = 31;
  STRONG = 32;
  SMALL = 33;
  S = 34;
  CITE = 35;
  Q = 36;
  DFN = 37;
  ABBR = 38;
  RUBY = 39;
  RT = 40;
  RP = 41;
  DATA = 42;
  TIME = 43;
  CODE = 44;
  VAR = 45;
  SAMP = 46;
  KBD = 47;
  SUB = 48;
  SUP = 49;
  I = 50;
  B = 51;
  U = 52;
  MARK = 53;
  BDI = 54;
  BDO = 55;
  SPAN = 56;
  BR = 57;
  WBR = 58;
  PICTURE = 59;
  SOURCE = 60;
  IMG = 61;
  FORM = 62;
  LABEL = 63;
  INPUT = 64;
  BUTTON = 65;
  SELECT = 66;
  DATALIST = 67;
  OPTGROUP = 68;
  OPTION = 69;
  TEXTAREA = 70;
  OUTPUT = 71;
  PROGRESS = 72;
  METER = 73;
  FIELDSET = 74;
  LEGEND = 75;
  VIDEO = 76;
}

enum ARIARole {
  AUTO = 0;
  NONE = 52;
  APPLICATION = 30;
  BANNER = 67;
  COMPLEMENTARY = 68;
  CONTENTINFO = 69;
  FORM = 70;
  MAIN = 71;
  NAVIGATION = 72;
  REGION = 73;
  SEARCH = 74;
  SEPARATOR = 13;
  ARTICLE = 31;
  COLUMNHEADER = 35;
  DEFINITION = 36;
  DIRECTORY = 38;
  DOCUMENT = 39;
  GROUP = 44;
  HEADING = 45;
  IMG = 46;
  LIST = 48;
  LISTITEM = 49;
  MATH = 50;
  NOTE = 53;
  PRESENTATION = 55;
  ROW = 56;
  ROWGROUP = 57;
  ROWHEADER = 58;
  TABLE = 62;
  TOOLBAR = 65;
  BUTTON = 1;
  CHECKBOX = 2;
  GRIDCELL = 3;
  LINK = 4;
  MENUITEM = 5;
  MENUITEMCHECKBOX = 6;
  MENUITEMRADIO = 7;
  OPTION = 8;
  PROGRESSBAR = 9;
  RADIO = 10;
  SCROLLBAR = 11;
  SLIDER = 14;
  SPINBUTTON = 15;
  TAB = 17;
  TABPANEL = 18;
  TEXTBOX = 19;
  TREEITEM = 20;
  COMBOBOX = 21;
  GRID = 22;
  LISTBOX = 23;
  MENU = 24;
  MENUBAR = 25;
  RADIOGROUP = 26;
  TABLIST = 27;
  TREE = 28;
  TREEGRID = 29;
  TOOLTIP = 66;
  ALERT = 75;
  LOG = 76;
  MARQUEE = 77;
  STATUS = 78;
  TIMER = 79;
  ALERTDIALOG = 80;
  DIALOG = 81;
  SEARCHBOX = 12;
  SWITCH = 16;
  BLOCKQUOTE = 32;
  CAPTION = 33;
  CELL = 34;
  DELETION = 37;
  EMPHASIS = 40;
  FEED = 41;
  FIGURE = 42;
  GENERIC = 43;
  INSERTION = 47;
  METER = 51;
  PARAGRAPH = 54;
  STRONG = 59;
  SUBSCRIPT = 60;
  SUPERSCRIPT = 61;
  TERM = 63;
  TIME = 64;
  IMAGE = 82;
  HEADING_1 = 83;
  HEADING_2 = 84;
  HEADING_3 = 85;
  HEADING_4 = 86;
  HEADING_5 = 87;
  HEADING_6 = 88;
  HEADER = 89;
  FOOTER = 90;
  SIDEBAR = 91;
  SECTION = 92;
  MAINCONTENT = 93;
  TABLE_CELL = 94;
  WIDGET = 95;
}

message MigrationStatus {
  bool dsdCleanup = 1;
}

message NodeFieldMap {
  NodeFieldMapEntry[] entries = 1;
}

message NodeFieldMapEntry {
  GUID guid = 1;
  uint field = 2;
  uint lastModifiedSequenceNumber = 3;
}

enum ColorProfile {
  SRGB = 0;
  DISPLAY_P3 = 1;
}

enum DocumentColorProfile {
  LEGACY = 0;
  SRGB = 1;
  DISPLAY_P3 = 2;
}

enum ChildReadingDirection {
  NONE = 0;
  LEFT_TO_RIGHT = 1;
  RIGHT_TO_LEFT = 2;
}

message ARIAAttributeAnyValue {
  bool boolValue = 1;
  string stringValue = 2;
  float floatValue = 3;
  int intValue = 4;
  string[] stringArrayValue = 5;
}

enum ARIAAttributeDataType {
  BOOLEAN = 0;
  STRING = 1;
  FLOAT = 2;
  INT = 3;
  STRING_LIST = 4;
}

message ARIAAttributeData {
  ARIAAttributeDataType type = 1;
  ARIAAttributeAnyValue value = 2;
}

message ARIAAttributesMap {
  ARIAAttributesMapEntry[] entries = 1;
}

message ARIAAttributesMapEntry {
  string attribute = 1;
  ARIAAttributeData value = 2;
}

message HandoffStatusMapEntry {
  GUID guid = 1;
  SectionStatusInfo handoffStatus = 2;
}

message HandoffStatusMap {
  HandoffStatusMapEntry[] entries = 1;
}

message EditScopeInfo {
  EditScopeStack[] editScopeStacks = 1;
  EditScopeSnapshot[] snapshots = 2;
}

message EditScopeSnapshot {
  EditScopeStack[] frames = 1;
  uint[] nodeChangeFieldNumbers = 2;
}

message EditScopeStack {
  EditScope[] stack = 1;
}

message EditScope {
  EditScopeType type = 1;
  string label = 2;
  EditorType editorType = 3;
}

enum EditScopeType {
  INVALID = 0;
  TEST_SETUP = 1;
  USER = 2;
  PLUGIN = 3;
  SYSTEM = 4;
  REST_API = 5;
  ONBOARDING = 6;
  AUTOSAVE = 7;
  AI = 8;
}

enum SectionPresetState {
  INSERTED = 0;
  USER_EDITED = 1;
}

enum EmojiImageSet {
  APPLE = 0;
  NOTO = 1;
}

enum SelectionRegionFocusType {
  NONE = 0;
  PRIMARY = 1;
  SECONDARY = 2;
}

message SectionPresetInfo {
  uint64 shelfId = 1;
  uint64 templateId = 2;
  string templateName = 3;
  SectionPresetState state = 4;
}

message ClipboardSelectionRegion {
  GUID parent = 1;
  GUID[] nodes = 2;
  Vector enclosingFrameOffset = 3;
  bool pasteIsPartiallyOutsideEnclosingFrame = 4;
  SelectionRegionFocusType focusType = 5;
}

enum FirstDraftKitType {
  LOCAL = 0;
  LIBRARY = 1;
  NONE = 2;
}

message FirstDraftKit {
  string key = 1;
  FirstDraftKitType type = 2;
}

message FirstDraftData {
  string generationId = 1;
  FirstDraftKit kit = 2;
}

enum FirstDraftKitElementType {
  NONE = 0;
  BUILDING_BLOCK = 1;
  GROUPED_COMPONENT = 2;
}

message FirstDraftKitElementData {
  FirstDraftKitElementType type = 1;
}

enum PlatformShapeProperty {
  FILL = 0;
  STROKE = 1;
  TEXT = 2;
  STROKE_COLOR = 3;
}

enum PlatformShapeBehaviorType {
  SHAPE = 0;
  CONTAINER = 1;
  ADVANCED_CONTAINER = 2;
}

message PlatformShapePropertyMapEntry {
  PlatformShapeProperty property = 1;
  GUIDPath[] nodePaths = 2;
}

message PlatformShapeDefinition {
  PlatformShapePropertyMapEntry[] propertyMapEntries = 1;
  PlatformShapeBehaviorType behaviorType = 2;
  GUIDPath thumbnailNode = 3;
}

message NodeBehaviors {
  LinkBehavior link = 1;
  AppearBehavior appear = 2;
  HoverBehavior hover = 3;
  PressBehavior press = 4;
  FocusBehavior focus = 5;
  ScrollParallaxBehavior scrollParallax = 6;
  ScrollTransformBehavior scrollTransform = 7;
  CursorBehavior cursor = 8;
  MarqueeBehavior marquee = 9;
  CodeBehavior[] code = 10;
}

message BehaviorTransition {
  EasingType easingType = 1;
  float[] easingFunction = 2;
  float transitionDuration = 3;
  float delay = 4;
  VariableData transitionDurationVar = 5;
  VariableData delayVar = 6;
}

enum AppearBehaviorTrigger {
  PAGE_LOAD = 1;
  THIS_LAYER_IN_VIEW = 2;
  OTHER_LAYER_IN_VIEW = 3;
  SCROLL_DIRECTION = 4;
}

enum RelativeDirection {
  UP = 1;
  DOWN = 2;
  LEFT = 3;
  RIGHT = 4;
}

message AppearBehavior {
  AppearBehaviorTrigger trigger = 1;
  RelativeDirection direction = 2;
  GUID otherLayer = 3;
  BehaviorTransition enterTransition = 4;
  NodeChange enterState = 5;
  BehaviorTransition exitTransition = 6;
  NodeChange exitState = 7;
  bool playsOnce = 8;
  VariableData playsOnceVar = 9;
  bool isDeleted = 10;
}

message HoverBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message PressBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message FocusBehavior {
  BehaviorTransition transition = 1;
  NodeChange state = 2;
  bool isDeleted = 3;
}

message ScrollParallaxBehavior {
  ScrollDirection axis = 1;
  float speed = 2;
  bool relativeToPage = 3;
  VariableData speedVar = 4;
  bool isDeleted = 5;
}

enum ScrollTransformBehaviorTrigger {
  PAGE_HEIGHT = 1;
  THIS_LAYER_IN_VIEW = 2;
  OTHER_LAYER_IN_VIEW = 3;
}

message ScrollTransformBehavior {
  ScrollTransformBehaviorTrigger trigger = 1;
  GUID otherLayer = 2;
  BehaviorTransition transition = 3;
  NodeChange fromState = 4;
  NodeChange toState = 5;
  bool playsOnce = 6;
  bool playsOnceVar = 7;
  VariableData playsOnceVar2 = 8;
  bool isDeleted = 9;
}

message CursorBehavior {
  float hotspotX = 1;
  float hotspotY = 2;
  GUID cursorGuid = 3;
  bool isDeleted = 4;
}

message MarqueeBehavior {
  RelativeDirection direction = 1;
  float speed = 2;
  bool shouldLoopInfinitely = 3;
  VariableData speedVar = 4;
  VariableData shouldLoopInfinitelyVar = 5;
  VariableData pauseOnHover = 6;
  bool isDeleted = 7;
}

message CodeBehavior {
  CodeComponentId codeComponentId = 1;
  ComponentPropAssignment[] componentPropAssignments = 2;
  bool isDeleted = 3;
}

message ClientRenderedMetadata {
  string loadID = 1;
  string trackingSessionId = 2;
  uint trackingSessionSequenceId = 3;
  string reconnectID = 4;
}

enum LinkBehaviorType {
  URL = 1;
  PAGE = 2;
}

message LinkBehavior {
  LinkBehaviorType type = 1;
  string url = 2;
  GUID page = 3;
  bool openInNewWindow = 4;
}

message VariableIdOrVariableOverrideId {
  VariableID variableId = 1;
  VariableOverrideId variableOverrideId = 2;
}

struct IndexFontVariationAxis {
  string tag;
  string name;
  float min;
  float max;
  float defaultValue;
}

struct IndexFontVariationAxisValue {
  string tag;
  float value;
}

message IndexFontStyle {
  string name = 1;
  string postscript = 2;
  float weight = 3;
  bool italic = 4;
  float stretch = 5;
  IndexFontVariationAxisValue[] variationAxisValues = 6;
}

message IndexFontFile {
  string filename = 1;
  uint version = 2;
  string family = 3;
  IndexFontStyle[] styles = 4;
  IndexFontVariationAxis[] variationAxes = 5;
  bool useFontOpticalSize = 6;
}

struct IndexFamilyRename {
  string oldFamily;
  string newFamily;
}

struct IndexStyleRename {
  string oldStyle;
  string newStyle;
}

struct IndexFamilyStylesRename {
  string familyName;
  IndexStyleRename[] styleRenames;
}

struct IndexRenames {
  IndexFamilyRename[] family;
  IndexFamilyStylesRename[] style;
}

struct IndexEmojiSequence {
  uint[] codepoints;
}

struct IndexEmojis {
  uint revision;
  uint[] sizes;
  IndexEmojiSequence[] sequences;
}

message FontIndex {
  uint schemaVersion = 1;
  IndexFontFile[] files = 2;
  IndexRenames renames = 3;
  IndexEmojis emojis = 4;
}

message SlideThemeData {
  ThemeID themeID = 1;
  string version = 2;
}

enum SlideNumber {
  NONE = 0;
  SLIDE = 1;
  SECTION = 2;
  SUBSECTION = 3;
  TOTAL_WITHIN_DECK = 4;
  TOTAL_WITHIN_SECTION = 5;
}

enum NodeChatMessageType {
  USER_MESSAGE = 0;
  ASSISTANT_MESSAGE = 1;
  TOOL_MESSAGE = 2;
  SYSTEM_MESSAGE = 3;
}

message NodeChatMessage {
  GUID id = 1;
  NodeChatMessageType type = 2;
  string userId = 3;
  string textContent = 4;
  uint sentAt = 5;
  NodeChatToolCall[] toolCalls = 6;
  NodeChatToolResult[] toolResults = 7;
  uint64 sentAt64 = 8;
}

message NodeChatToolCall {
  string toolCallId = 1;
  string toolName = 2;
  string argsJson = 3;
}

message NodeChatToolResult {
  string toolCallId = 1;
  string toolName = 2;
  string resultJson = 3;
}

message NodeChatExchange {
  GUID node = 1;
  NodeChatMessage[] messages = 2;
  bool isTyping = 3;
  FileUpdate[] fileUpdates = 4;
}

message NodeChatCompressionState {
  uint startIndex = 1;
  string summary = 2;
}

message FileUpdate {
  string name = 1;
  string contents = 2;
  bool isDeleted = 3;
}

message AIChatContentPart {
  AIChatContentPartType type = 1;
  AIChatContentPartAnyValue value = 2;
}

enum AIChatContentPartType {
  INVALID = 0;
  TEXT = 1;
  SELECTED_NODE_IDS = 2;
}

message AIChatContentPartAnyValue {
  string textValue = 1;
  string[] selectedNodeIds = 2;
}

enum AIChatMessageRole {
  USER = 0;
  ASSISTANT = 1;
  TOOL = 2;
  SYSTEM = 3;
}

message AIChatMessage {
  uint createdAtMs = 1;
  AIChatMessageRole role = 2;
  AIChatContentPart[] content = 3;
  string clientId = 4;
  uint64 createdAtMs64 = 5;
}

message AIChatThread {
  AIChatMessage[] messages = 1;
}

enum CooperTemplateType {
  CUSTOM = 0;
  TWITTER_POST = 1;
  LINKEDIN_POST = 2;
  INSTA_POST_SQUARE = 3;
  INSTA_POST_PORTRAIT = 4;
  INSTA_STORY = 5;
  INSTA_AD = 6;
  FACEBOOK_POST = 7;
  FACEBOOK_COVER_PHOTO = 8;
  FACEBOOK_EVENT_COVER = 9;
  FACEBOOK_AD_PORTRAIT = 10;
  FACEBOOK_AD_SQUARE = 11;
  PINTEREST_AD_PIN = 12;
  TWITTER_BANNER = 13;
  LINKEDIN_POST_SQUARE = 15;
  LINKEDIN_POST_PORTRAIT = 16;
  LINKEDIN_POST_LANDSCAPE = 17;
  LINKEDIN_PROFILE_BANNER = 18;
  LINKEDIN_ARTICLE_BANNER = 19;
  LINKEDIN_AD_LANDSCAPE = 20;
  LINKEDIN_AD_SQUARE = 21;
  LINKEDIN_AD_VERTICAL = 22;
  YOUTUBE_THUMBNAIL = 23;
  YOUTUBE_BANNER = 24;
  YOUTUBE_AD = 25;
  TWITCH_BANNER = 26;
  GOOGLE_LEADERBOARD_AD = 27;
  GOOGLE_LARGE_AD = 28;
  GOOGLE_MED_AD = 29;
  GOOGLE_MOBILE_BANNER_AD = 30;
  GOOGLE_SKYSCRAPER_AD = 31;
  CARD_HORIZONTAL = 32;
  CARD_VERTICAL = 33;
  PRINT_US_LETTER = 34;
  POSTER = 35;
  BANNER_STANDARD = 36;
  BANNER_WIDE = 37;
  BANNER_ULTRAWIDE = 38;
  NAME_TAG_PORTRAIT = 39;
  NAME_TAG_LANDSCAPE = 40;
  INSTA_REEL_COVER = 41;
  ZOOM_BACKGROUND = 42;
  TIKTOK_POST = 43;
  INSTA_AD_PORTRAIT = 44;
  INSTA_POST_TALL_PORTRAIT = 45;
  TWITTER_POST_SQUARE = 46;
  FACEBOOK_POST_SQUARE = 47;
  FACEBOOK_POST_PORTRAIT = 48;
  FACEBOOK_STORY = 49;
  GOOGLE_SQUARE_AD = 50;
  GOOGLE_SMALL_SQUARE_AD = 51;
  GOOGLE_NARROW_SKYSCRAPER_AD = 52;
  GOOGLE_HALF_PAGE_AD = 53;
  GOOGLE_LARGE_LEADERBOARD_AD = 54;
  GOOGLE_BILLBOARD_AD = 55;
  GOOGLE_BANNER_LEADERBOARD_AD = 56;
  GOOGLE_TOP_BANNER_AD = 57;
  GOOGLE_MOBILE_LEADERBOARD_BANNER_AD = 58;
  GOOGLE_LARGE_MOBILE_BANNER_AD = 59;
  GOOGLE_MOBILE_INTERSTITIAL_AD = 60;
  GOOGLE_MOBILE_MED_RECTANGLE_AD = 61;
  PINTEREST_PIN_STANDARD = 62;
  PINTEREST_PIN_SQUARE = 63;
  PINTEREST_AD_SQUARE = 64;
  PRINT_A4 = 65;
}

message CooperTemplateData {
  CooperTemplateType type = 1;
}

message ImageImportMap {
  ImageImport[] imports = 1;
}

message ImageImport {
  string name = 1;
  Image image = 2;
}

enum InterpolationType {
  HOLD = 0;
  BEZIER = 1;
  SPRING = 2;
}

message BezierHandles {
  float p1x = 1;
  float p1y = 2;
  float p2x = 3;
  float p2y = 4;
}

enum KeyframeOperation {
  SET = 0;
  SCALE = 1;
  OFFSET = 2;
}

enum TimelinePositionType {
  ABSOLUTE = 0;
  RELATIVE = 1;
}

enum PlaybackStyle {
  ONCE = 0;
  LOOP = 1;
  BOOMERANG = 2;
}
`);Bn(Un);function Wn(e){if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.sessionID)&&Number.isFinite(t.localID)}function Gn(e,t){return e?`fig-guide:${e.sessionID}:${e.localID}`:`guide:${t}`}function Kn(e){if(!Array.isArray(e))return[];let t=[];for(let[n,r]of e.entries()){if(!r||typeof r!=`object`)continue;let e=r;if(typeof e.offset!=`number`||!Number.isFinite(e.offset))continue;let i=Wn(e.guid)?e.guid:void 0;e.axis===`X`?t.push({id:Gn(i,n),axis:`x`,position:e.offset,...i?{figGuid:i}:{}}):e.axis===`Y`&&t.push({id:Gn(i,n),axis:`y`,position:e.offset,...i?{figGuid:i}:{}})}return t}function qn(e){return e.map(e=>({axis:e.axis===`x`?`X`:`Y`,offset:e.position,...e.figGuid?{guid:e.figGuid}:{}}))}function Jn(e,t){let n=e.baselines??[];if(e.logicalIndexToCharacterOffsetMap?.length!==t.length+1||n.length!==1)return!1;let r=n[0].position.y;return(e.glyphs??[]).every(e=>(e.rotation??0)===0&&e.position.y===r)}function Yn(e){if(!e.emojiCodePoints?.length)return{};let t={emojiCodePoints:[...e.emojiCodePoints]};return e.emojiImageSet===`NOTO`&&(t.emojiImageSet=`NOTO`),t}function Xn(e,t,n){if(!e||Jn(e,n))return[];let r=[],i=e.truncationStartIndex??-1,a=e.glyphs??[];for(let e of i>=0?a.slice(0,i):a){let n=e.commandsBlob===void 0?void 0:t[e.commandsBlob];if(!n)return[];let i=e.advance*e.fontSize;r.push({commandsBlob:n,x:e.position.x,y:e.position.y,fontSize:e.fontSize,firstCharacter:e.firstCharacter,rotation:e.rotation,advance:Number.isFinite(i)?i:void 0,...Yn(e)})}return r}function Zn(e,t){let n=e.readVarUint();return t?.kind===`ENUM`?t.names[n]??null:null}function Qn(e,t,n){let r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=!1;for(let f=e.readVarUint();f!==0;f=e.readVarUint()){let p=n.byId[f];if(!p)throw Error(`Invalid field ${f} in Kiwi NodeChange`);switch(p.name){case`guid`:r=e.readVarUint(),i=e.readVarUint();break;case`parentIndex`:a=e.readVarUint(),o=e.readVarUint(),s=e.offset,e.skipString();break;case`phase`:c=Zn(e,p.definition);break;case`type`:l=Zn(e,p.definition);break;case`name`:l===`DOCUMENT`||l===`CANVAS`?u=e.readString():e.skipString();break;case`internalOnly`:d=!!e.readByte();break;default:t.skip(p,e)}}if(l!==`DOCUMENT`&&l!==`CANVAS`||r===null||i===null)return null;let f=null;if(s!==null){let t=e.offset;e.offset=s,f=e.readString(),e.offset=t}let p=a===null||o===null?null:`${a}:${o}`;return{sourceId:`${r}:${i}`,parentId:p,position:f,phase:c,type:l,name:u??`Page`,internalOnly:d}}function $n(e,t){let n=e.definition(`Message`),r=e.definition(`NodeChange`);if(n.kind!==`MESSAGE`||r.kind!==`MESSAGE`)return[];let i=new P(t),a=[];for(let t=i.readVarUint();t!==0;t=i.readVarUint()){let o=n.byId[t];if(!o)throw Error(`Invalid field ${t} in Kiwi Message`);if(o.name!==`nodeChanges`||!o.isArray){e.skip(o,i);continue}for(let t=i.readVarUint();t>0;t--){let t=Qn(i,e,r);t&&a.push(t)}break}let o=a.find(e=>e.type===`DOCUMENT`&&e.phase!==`REMOVED`)?.sourceId;return a.filter(e=>e.type===`CANVAS`&&e.phase!==`REMOVED`&&(!o||e.parentId===o)).sort((e,t)=>{let n=e.position??``,r=t.position??``;return n<r?-1:+(n>r)}).map(({sourceId:e,name:t,position:n,internalOnly:r})=>({sourceId:e,name:t,position:n,internalOnly:r}))}var er=new Set((Un.definitions.find(e=>e.name===`OpenTypeFeature`)?.fields??[]).map(e=>e.name)),tr=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],nr=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]],rr=Object.fromEntries(tr.map(([e,t])=>[t,e])),ir={LNUM:{field:`fontVariantNumericFigure`,value:`LINING`},ONUM:{field:`fontVariantNumericFigure`,value:`OLDSTYLE`},PNUM:{field:`fontVariantNumericSpacing`,value:`PROPORTIONAL`},TNUM:{field:`fontVariantNumericSpacing`,value:`TABULAR`},FRAC:{field:`fontVariantNumericFraction`,value:`DIAGONAL`},AFRC:{field:`fontVariantNumericFraction`,value:`STACKED`},SMCP:{field:`fontVariantCaps`,value:`SMALL`},PCAP:{field:`fontVariantCaps`,value:`PETITE`},C2SC:{field:`fontVariantCaps`,value:`ALL_SMALL`},C2PC:{field:`fontVariantCaps`,value:`ALL_PETITE`},UNIC:{field:`fontVariantCaps`,value:`UNICASE`},TITL:{field:`fontVariantCaps`,value:`TITLING`}};function ar(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function or(e){let t=[];for(let[n,r]of tr){let i=e[n];i!==void 0&&ar(t,r,i)}for(let[n,r]of nr){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)ar(t,e,!0);else i&&ar(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])ar(t,n,!0);for(let n of e.toggledOffOTFeatures??[])ar(t,n,!1);return t}function sr(e,t,n,r,i,a){let o=rr[t];if(o){e[o]=n;return}let s=ir[t];if(s){n?(e[s.field]=s.value,a.delete(s.field)):e[s.field]===void 0&&a.set(s.field,`NORMAL`);return}er.has(t)&&(n?r.push(t):i.push(t))}function cr(e,t){let n=[],r=[],i=new Map;for(let a of t)sr(e,a.tag.toUpperCase(),a.enabled,n,r,i);for(let t of i.keys())e[t]=`NORMAL`;n.length>0&&(e.toggledOnOTFeatures=n),r.length>0&&(e.toggledOffOTFeatures=r)}function lr(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function ur(e){if(e.length===4)return(e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3))>>>0}function dr(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?lr(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function fr(e,t,n){return t===0&&n===0?e:Ue(e,1,0,0,1,t,n)}function pr(e,t,n){let r=[...e.fillGeometry??[],...e.strokeGeometry??[]],i=r.length>0?ze(r):null,a=i?.x??0,o=i?.y??0,s=i?i.x+i.width:t,c=i?i.y+i.height:n;for(let t of e.derivedTextGlyphs??[]){let e=t.fontSize||0;a=Math.min(a,t.x-e*.25),o=Math.min(o,t.y-e),s=Math.max(s,t.x+e),c=Math.max(c,t.y+e*.35)}return{left:Math.max(0,-a+ +(a<0)),top:Math.max(0,-o+ +(o<0)),right:Math.max(0,s-t+ +(s>t)),bottom:Math.max(0,c-n+ +(c>n))}}function mr(e,t,n){e.strokeGeometry&&e.strokeGeometry.length>0&&(e.strokeGeometry=fr(e.strokeGeometry,t,n)),e.fillGeometry&&e.fillGeometry.length>0&&(e.fillGeometry=fr(e.fillGeometry,t,n)),e.derivedTextGlyphs?.length&&(e.derivedTextGlyphs=e.derivedTextGlyphs.map(e=>({...e,x:e.x+t,y:e.y+n})))}function hr(e,t){if(e.nodeType!==`TEXT`||!t)return;e.textPathData=t;let n=e.width??0,r=e.height??0;e.textPathBox={x:0,y:0,width:n,height:r};let i=pr(e,n,r);if(i.left===0&&i.top===0&&i.right===0&&i.bottom===0)return;let a=i.left,o=i.top;e.x=(e.x??0)-a,e.y=(e.y??0)-o,e.width=n+i.left+i.right,e.height=r+i.top+i.bottom,(a!==0||o!==0)&&(e.textPathBox={x:a,y:o,width:n,height:r},mr(e,a,o))}function gr(e){return Object.getPrototypeOf(e)===Object.prototype}function _r(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(e=>_r(e));if(!gr(e))return structuredClone(e);let t={};for(let n of Object.keys(e))t[n]=_r(e[n]);return t}function R(e){return _r(e)}var vr=64;function yr(e,t=0){if(t>vr)throw Error(`Variable expression exceeds maximum depth`);let n=e?.value;if(e?.dataType===`EXPRESSION`&&!n?.expressionValue)throw Error(`Missing variable expression value`);if(!n)return;if(n.alias)return{multiplier:1,reference:n.alias};if(typeof n.floatValue==`number`&&Number.isFinite(n.floatValue))return{multiplier:n.floatValue};let r=n.expressionValue;if(r){if(r.expressionFunction===`STRINGIFY`||r.expressionFunction===`IS_TRUTHY`)return br(r);if(r.expressionFunction!==`MULTIPLY`||!r.expressionArguments?.length)throw Error(`Unsupported variable expression ${r.expressionFunction}`);return xr(r.expressionArguments,t)}}function br(e){let t=e.expressionArguments??[],n=t.length===1?t[0].value?.alias:void 0,r=e.expressionFunction;if(!n)throw Error(`Variable expression ${r} must wrap one alias`);return{multiplier:1,reference:n}}function xr(e,t){let n={multiplier:1};for(let r of e){let e=yr(r,t+1);if(!e||n.reference&&e.reference)throw Error(`Variable expression is not a constant multiplied by one alias`);n.multiplier*=e.multiplier,e.reference&&(n.reference=e.reference)}if(!Number.isFinite(n.multiplier))throw Error(`Variable expression has a non-finite multiplier`);return n}function Sr(e,t,n=0){if(n>vr)throw Error(`Variable expression exceeds maximum depth`);e?.value?.alias&&t(e.value.alias);for(let r of e?.value?.expressionValue?.expressionArguments??[])Sr(r,t,n+1)}var Cr={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,text:`TEXT_DATA`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`},wr=Object.fromEntries(Object.entries(Cr).map(([e,t])=>[t,e])),Tr=.01;function Er(e){return e===`ALIAS`||e===`EXPRESSION`}function z(e){let t=e.parameterConsumptionMap,n=new Map,r=[];for(let i of[...e.variableConsumptionMap?.entries??[],...t?.entries??[]])i.variableField?n.set(i.variableField,i):r.push(i);return[...r,...n.values()]}function Dr(e,t){let n=z(t);if(n.length===0)return{};let r=[];for(let t of[...z(e),...n]){let e=t.variableField?r.findIndex(e=>e.variableField===t.variableField):-1;e<0?r.push(R(t)):r[e]=R(t)}return{parameterConsumptionMap:{entries:r}}}function Or(e,t,n,r,i=1,a=!1){let o=Cr[e];if(o)return Pr(o,t,n,r,i,a)}var kr={fontFamily:`FONT_FAMILY`,fontStyle:`FONT_STYLE`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,paragraphSpacing:`PARAGRAPH_SPACING`,paragraphIndent:`PARAGRAPH_INDENT`},Ar=Ot(kr);function jr(e,t,n){return Object.entries(e).flatMap(([e,r])=>{let i=kr[e];return!i||!r||!t.variables.has(r)?[]:[Pr(i,r,t,n)]})}function Mr(e){let t={};for(let n of z(e)){let e=n.variableField&&Ar[n.variableField],r=e?yr(n.variableData)?.reference?.guid:void 0;e&&r&&(t[e]=j(r))}return t}function Nr(e,t,n){let r=e.variables.get(t);return r?.key?{assetRef:{key:r.key,...r.version?{version:r.version}:{}}}:{guid:n?.get(t)??$e(t)}}function Pr(e,t,n,r,i=1,a=!1){if(!t)return{variableField:e};let o=n.variables.get(t);if(!o)throw Error(`Missing bound variable ${t}`);if(!Number.isFinite(i))throw Error(`Non-finite variable binding multiplier`);let s={dataType:`ALIAS`,resolvedDataType:o.type,value:{alias:Nr(n,t,r)}},c;return e===`VISIBLE`?c=`IS_TRUTHY`:e===`TEXT_DATA`&&o.type!==`STRING`&&(c=`STRINGIFY`),c?{variableField:e,variableData:{dataType:`EXPRESSION`,resolvedDataType:c===`IS_TRUTHY`?`BOOLEAN`:`STRING`,value:{expressionValue:{expressionFunction:c,expressionArguments:[s]}}}}:o.type!==`FLOAT`||!a&&i===1?{variableField:e,variableData:s}:{variableField:e,variableData:{dataType:`EXPRESSION`,resolvedDataType:`FLOAT`,value:{expressionValue:{expressionFunction:`MULTIPLY`,expressionArguments:[{dataType:`FLOAT`,resolvedDataType:`FLOAT`,value:{floatValue:i}},s]}}}}}function Fr(e,t){return e===`opacity`?Tr:e===`rotation`?1:t}function Ir(e,t,n,r,i){let a=Fr(e,n.componentScale),o=t.variableBindingScales[e]===void 0?1:t.variableBindingScales[e]/a;return Or(e,t.boundVariables[e],r,i,o)}function Lr(e,t,n){let r=new Set(Object.keys(e.boundVariables));for(let t of z(We(e))){if(!Er(t.variableData?.dataType))continue;let e=t.variableField&&wr[t.variableField];e&&r.add(e)}return[...r].flatMap(r=>{let i=(e.variableBindingScales[r]??1)/(r===`opacity`?Tr:1),a=Or(r,e.boundVariables[r],t,n,i,e.type===`INSTANCE`&&e.componentScale!==1);return a?[a]:[]})}function Rr(e){let t=e.variableField?wr[e.variableField]:void 0;if(!t)return;let n=yr(e.variableData);if(e.variableData?.value?.expressionValue&&!n?.reference)throw Error(`Variable expression must contain one alias`);let r=n?.reference?.guid;return r?{field:t,variableId:j(r),multiplier:n.multiplier}:void 0}function zr(e){let t={};for(let r of z(e)){let e=Rr(r);e&&n(e.field)&&(t[e.field]=e.multiplier*(e.field===`opacity`?Tr:1))}return t}function Br(e=1){return e===1?{}:Object.fromEntries(Object.entries(Vr(Cr,e)).filter(([,e])=>e!==1))}function Vr(e,t,r={}){let i={};for(let a of Object.keys(e))n(a)&&(i[a]=r[a]??Fr(a,t));return i}function Hr(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t*Tr))}:n(e)?{[e]:t}:void 0}var{boundVariables:Ur,exportSettings:Wr,librarySource:Gr,textPathBox:Kr}=M,qr={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function B(e,t){return t.decode(e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t.key)?.value)}function Jr(e){e.exportSettings.length!==0&&(!ut(e.pluginData,Wr)&&Array.isArray(Ze(e,`exportSettings`))||(e.pluginData=dt(e.pluginData,Wr,e.exportSettings)))}function Yr(e,t){e.textPathBox&&(e.pluginData=dt(e.pluginData,Kr,t?void 0:e.textPathBox))}function Xr(e){return B(e,Kr)??null}function Zr(e){let n=B(e,Ur)??{},r=n=>{let r=t(n)?.list;return r===`fills`?e.fillPaints!==void 0:r===`strokes`&&e.strokePaints!==void 0};n=Object.fromEntries(Object.entries(n).filter(([e])=>!r(e)));for(let t of z(e)){let e=Rr(t);if(e)n[e.field]=e.variableId;else if(t.variableField&&!Er(t.variableData?.dataType)){let e=wr[t.variableField];e&&(n=y(n,[e]))}}return e.fillPaints?.forEach((e,t)=>{let r=e.colorVar?.value?.alias?.guid;r&&(n[`fills/${t}/color`]=j(r))}),e.strokePaints?.forEach((e,t)=>{let r=e.colorVar?.value?.alias?.guid;r&&(n[`strokes/${t}/color`]=j(r))}),n}function Qr(e){return typeof e==`string`?qr[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function $r(e){if(!e||typeof e!=`object`||Array.isArray(e))return 1;let t=e.type;if(t!==`CONTENT_SCALE`&&t!==0)return 1;let n=e.value;return typeof n==`number`&&Number.isFinite(n)?mt(n):1}function ei(e){return B(e,Wr)||(e.exportSettings??[]).flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=Qr(e.imageType);return t?[{scale:$r(e.constraint),format:t}]:[]})}function ti(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function ni(e){return B(e,Gr)??null}function ri(e){e.pluginData=dt(e.pluginData,Gr,e.librarySource??void 0)}function ii(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function ai(e){return e.map(e=>({pluginID:e.pluginId,key:e.key,value:e.value}))}function oi(e){return e.map(e=>({pluginID:e.pluginId,command:e.command,message:e.message,isDeleted:e.isDeleted}))}var si={READY_FOR_DEV:`BUILD`,COMPLETED:`COMPLETED`},ci=se({status:pe(oe([`NONE`,`BUILD`,`COMPLETED`]),`NONE`)});function li(e){let t=de(ci,e.sectionStatusInfo),n=t.success?t.output.status:`NONE`;return n===`BUILD`?`READY_FOR_DEV`:n===`COMPLETED`?`COMPLETED`:null}function ui(e){let t=li(e),n=B(e,M.status)??null;return n!==null&&tt(n)===t?n:t?Ge[t]:null}function di(e,t){if(e.pluginData=dt(e.pluginData,M.status,e.status??void 0),Ze(e,`sectionStatusInfo`)!==void 0)return;let n=e.status?tt(e.status):null;n&&(t.sectionStatusInfo={status:si[n]})}var fi=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function pi(e,t,n){if(t?.guid)return e.get(j(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function mi(e,t,n){let r=pi(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints);let i=pi(e,t.styleIdForStrokeFill,n);i?.styleType===`FILL`&&i.fillPaints&&(t.strokePaints=i.fillPaints)}function hi(e,t,n){let r=pi(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=pi(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function gi(e,t,n){let r=pi(e,t.styleIdForText,n);if(!(r?.type!==`TEXT`||r.styleType!==`TEXT`))for(let e of fi)e===`textDecoration`?t.textDecoration=r.textDecoration:r[e]!==void 0&&Object.assign(t,{[e]:r[e]})}function _i(e,t,n){mi(e,t,n),hi(e,t,n),gi(e,t,n)}function V(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`||A(t)?null:j(t)}function vi(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}var yi={value:100,units:`PERCENT`};function bi(e){return e?.units===yi.units&&e.value===yi.value}function xi(e){return!e||bi(e)?null:e.units===`PIXELS`?He(e.value):e.units===`PERCENT`?Fe(e.value):e.units===`RAW`?Fe(e.value*100):null}function Si(e){return e?e.units===`PIXELS`?He(e.value):Fe(e.value):Ve}function Ci(e){return e?e.unit===`PIXELS`?{value:e.value,units:`PIXELS`}:{value:e.value/100,units:`RAW`}:{...yi}}function wi(e){return{value:e.value,units:e.unit}}var Ti=new Set([`ORIGINAL`,`UPPER`,`LOWER`,`TITLE`]);function Ei(e){if(!e||typeof e!=`object`)return;let t=e;if(typeof t.url==`string`&&t.url!==``)return{type:`URL`,value:t.url};if(t.guid&&!A(t.guid))return{type:`NODE`,value:j(t.guid)}}function Di(e,t,n){Ti.has(t.textCase)&&(e.textCase=t.textCase);let r=Ei(t.hyperlink);r&&(e.hyperlink=r);for(let[r,i]of[[`textStyleId`,`styleIdForText`],[`fillStyleId`,`styleIdForFill`]]){if(t[i]===void 0)continue;let a=V(t[i]);a!==V(n[i])&&(e[r]=a)}let i=Mr(t);x(i)||(e.boundVariables=i)}function Oi(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=vi(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=O(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function ki(e,t){let n={};e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=d(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=dr(e);r.length>0&&(n.fontVariations=r),e.detachOpticalSizeFromFontSize!==void 0&&(n.opticalSizeFromFontSize=!e.detachOpticalSizeFromFontSize);let i=or(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=Si(e.letterSpacing)),e.lineHeight&&(n.lineHeight=xi(e.lineHeight)),Oi(n,e),e.fillPaints){let t=O(e.fillPaints);t.length>0&&(n.fills=t)}return Di(n,e,t),n}function Ai(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0||e===0)continue;let i=ki(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function ji(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){let o=t.get(r);o&&n.push({start:i,length:a-i,style:o}),a<e.length&&(r=e[a],i=a)}return n}function Mi(e,t,n,r){for(let e of n.values())e.hyperlink??=r;return n.set(0,{hyperlink:r}),Array.from({length:t},(t,n)=>e[n]??0)}function Ni(e){let t=e.textData,n=Ei(e.hyperlink),r=t?.characters.length??0,i=Ai(t?.styleOverrideTable??[],e),a=n?Mi(t?.characterStyleIDs??[],r,i,n):t?.characterStyleIDs??[];return a.length===0||i.size===0?[]:ji(a,i)}var Pi={NONE:`PLAIN`,ORDERED:`ORDERED_LIST`,UNORDERED:`UNORDERED_LIST`};function Fi(e){return e.lineType===`ORDERED_LIST`?`ORDERED`:e.lineType===`UNORDERED_LIST`?`UNORDERED`:`NONE`}function Ii(e,t=[]){if(!e)return[];let n=new Map(t.map(e=>[e.styleID,e])),r=e.map(e=>{let t={listType:Fi(e),indentation:e.indentationLevel??0};t.listType!==`NONE`&&(t=rt(t,t.indentation));let r=e.styleId?n.get(e.styleId):void 0;for(let e of at){let n=r?.[e];n!==void 0&&(t=nt(t,e,n))}return t});return st(r,r.length)}function Li(e,t=1){let n=new Set(Ct(e.text,e.textParagraphs).filter(e=>e.startsList).map(e=>e.paragraph)),r=[],i=new Map,a=e=>{let n={};for(let t of at){let r=e[t];r!==void 0&&(n[t]=r)}if(x(n))return 0;let a=JSON.stringify(n),o=i.get(a);return o===void 0&&(o=t+r.length,i.set(a,o),r.push({styleID:o,...n})),o};return{lines:ot(e.text).map((t,r)=>{let i=it(e.textParagraphs,r);return{lineType:Pi[i.listType],styleId:a(i),indentationLevel:i.indentation,sourceDirectionality:`AUTO`,listStartOffset:0,isFirstLineOfList:n.has(r)}}),overrides:r}}function Ri(e,t){return zi(e,t).network}function zi(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e),o={x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`};a?.strokeCap&&(o.strokeCap=a.strokeCap),a?.strokeJoin&&(o.strokeJoin=a.strokeJoin),a?.cornerRadius!==void 0&&(o.cornerRadius=a.cornerRadius),c.push(o)}let l=[],u=[];for(let e=0;e<a;e++){u.push(n.getUint32(r,!0)),r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let d=[];for(let e=0;e<o;e++){let e=(n.getUint32(r,!0)&1)==1?`NONZERO`:`EVENODD`;r+=4;let t=n.getUint32(r,!0);r+=4;let i=[];for(let e=0;e<t;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;i.push(t)}d.push({windingRule:e,loops:i})}return{network:{vertices:c,segments:l,regions:d},segmentStyles:u}}function Bi(e){return[e.handleMirroring??`NONE`,e.strokeCap??``,e.strokeJoin??``,e.cornerRadius??``].join(`|`)}function Vi(e){let t=new Map,n=[],r=1;for(let i of e.vertices){let e=i.handleMirroring??`NONE`;if(e===`NONE`&&!i.strokeCap&&!i.strokeJoin&&i.cornerRadius===void 0)continue;let a=Bi(i);if(t.has(a))continue;t.set(a,r);let o={styleID:r};e!==`NONE`&&(o.handleMirroring=e),i.strokeCap&&(o.strokeCap=i.strokeCap),i.strokeJoin&&(o.strokeJoin=i.strokeJoin),i.cornerRadius!==void 0&&(o.cornerRadius=i.cornerRadius),n.push(o),r++}return{table:n,styleToId:t}}function Hi(e,t,n){let r=0;for(let t of e.regions){r+=8;for(let e of t.loops)r+=4+e.length*4}let i=new ArrayBuffer(12+e.vertices.length*12+e.segments.length*28+r),a=new DataView(i),o=0;a.setUint32(o,e.vertices.length,!0),o+=4,a.setUint32(o,e.segments.length,!0),o+=4,a.setUint32(o,e.regions.length,!0),o+=4;for(let n of e.vertices)a.setUint32(o,t?.get(Bi(n))??0,!0),o+=4,a.setFloat32(o,n.x,!0),o+=4,a.setFloat32(o,n.y,!0),o+=4;for(let t of e.segments)a.setUint32(o,0,!0),o+=4,a.setUint32(o,t.start,!0),o+=4,a.setFloat32(o,t.tangentStart.x,!0),o+=4,a.setFloat32(o,t.tangentStart.y,!0),o+=4,a.setUint32(o,t.end,!0),o+=4,a.setFloat32(o,t.tangentEnd.x,!0),o+=4,a.setFloat32(o,t.tangentEnd.y,!0),o+=4;for(let[t,r]of e.regions.entries()){let e=n?.[t]??0;a.setUint32(o,e<<1|(r.windingRule===`EVENODD`?0:1),!0),o+=4,a.setUint32(o,r.loops.length,!0),o+=4;for(let e of r.loops){a.setUint32(o,e.length,!0),o+=4;for(let t of e)a.setUint32(o,t,!0),o+=4}}return new Uint8Array(i)}var Ui=33554431;function Wi(e){let{segmentStyles:t}=zi(e),n=t.findIndex(e=>(e&Ui)===Ui);return Math.max(n,0)}function Gi(e){return e===`EVENODD`?`ODD`:`NONZERO`}function Ki(e){return e===`ODD`||e===`EVENODD`?`EVENODD`:`NONZERO`}function qi(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function Ji(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=Ri(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0,c=a&&a.x>0&&o>0?o/a.x:1,l=a&&a.y>0&&s>0?s/a.y:1;if(c!==1||l!==1){for(let e of i.vertices)e.x*=c,e.y*=l;for(let e of i.segments)e.tangentStart={x:e.tangentStart.x*c,y:e.tangentStart.y*l},e.tangentEnd={x:e.tangentEnd.x*c,y:e.tangentEnd.y*l}}return i}catch{return null}}function Yi(e){let t=new Map;for(let n of e??[])n.fillPaints&&n.fillPaints.length>0&&t.set(n.styleID,O(n.fillPaints));return t}function Xi(e){let t=e.vectorData;return Yi(t?.styleOverrideTable)}function Zi(e,t,n){if(!e||e.length===0)return[];let r=[];for(let i of e){if(i.commandsBlob===void 0||i.commandsBlob<0||i.commandsBlob>=t.length)continue;let e=t[i.commandsBlob];if(e.length===0)continue;let a=i.styleID?n?.get(i.styleID):void 0;r.push({windingRule:Ki(i.windingRule),commandsBlob:e,fills:a&&a.length>0?Pe(a):void 0})}return r}function Qi(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[j(n)]=j(r))}return t}var $i={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`,STICKY:`STICKY`,TEXT_PATH:`TEXT`};function ea(e){return e?$i[e]??`RECTANGLE`:`RECTANGLE`}function ta(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function na(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function ra(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;default:return`FIXED`}}function ia(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function aa(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function oa(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function sa(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function ca(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function la(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1,s=ea(e.type);if(e.transform&&s!==`DOCUMENT`&&s!==`VARIABLE`){let c=e.transform;c.m00*c.m11-c.m01*c.m10<0&&(o=!0),a=Math.atan2(c.m10,o?c.m11:c.m00)*(180/Math.PI);let l=ke({type:s,x:0,y:0,width:t,height:n,rotation:a,flipX:o,flipY:!1});r=c.m02-l[2],i=c.m12-l[5]}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function ua(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function da(e){let t={};return e.count!==void 0&&(t.pointCount=m(e.count,Xe.min,Xe.max)),e.starInnerScale!==void 0&&Number.isFinite(e.starInnerScale)&&(t.starInnerRadius=m(e.starInnerScale,0,1)),t}function fa(e){if(!e.lineHeight||bi(e.lineHeight))return null;let t=e.derivedTextData?.baselines?.[0];return e.lineHeight.units===`PIXELS`&&t!==void 0&&Number.isFinite(t.lineHeight)&&t.lineHeight<e.lineHeight.value&&!pa(e,t.firstCharacter,t.endCharacter)?He(t.lineHeight):xi(e.lineHeight)}function pa(e,t,n){let r=new Set((e.textData?.styleOverrideTable??[]).filter(e=>e.lineHeight).map(e=>e.styleID));return(e.textData?.characterStyleIDs??[]).slice(t,n).some(e=>e!==0&&r.has(e))}function ma(e){return{textDecoration:vi(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:O(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function ha(e){return{textParagraphs:Ii(e.textData?.lines,e.textData?.styleOverrideTable),listSpacing:e.listSpacing??0,paragraphSpacing:e.paragraphSpacing??0,paragraphIndent:e.paragraphIndent??0,hangingList:e.hangingList??!1}}function ga(e){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:0}function _a(e){return e.type===`SHAPE_WITH_TEXT`?{shapeWithTextType:St(e.shapeWithTextType)?e.shapeWithTextType:`SQUARE`,shapeUserHeight:ga(e.shapeUserHeight),shapeTruncates:e.shapeTruncates===!0}:{}}function va(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:d(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...ma(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:fa(e),letterSpacing:Si(e.letterSpacing),maxLines:e.maxLines??null,...ha(e),styleRuns:Ni(e),fontVariations:dr(e),opticalSizeFromFontSize:e.detachOpticalSizeFromFontSize!==!0,fontFeatures:or(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:B(e,M.textDirection)??`AUTO`,...ya(e,t)}}function ya(e,t){let n=e.derivedTextData?.layoutSize;return{derivedLayout:n?{width:n.x,height:n.y}:null,derivedTextHeight:ba(e),derivedTextGlyphs:Xn(e.derivedTextData,t,e.textData?.characters??``)}}function ba(e){let t=(e.derivedTextData?.baselines??[]).map(e=>(e.lineY??e.position.y-e.lineAscent)+e.lineHeight);return t.length>0?Math.max(...t):null}function xa(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function Sa(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(t===`NONE`||!i||!a)return;let{x:o,y:s,width:c,height:l}=la(e);return{x:o,y:s,width:c,height:l}}function Ca(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function wa(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function Ta(e){let t=e.targetAspectRatio?.value;return!t||!Number.isFinite(t.x)||!Number.isFinite(t.y)?null:{x:t.x,y:t.y}}function Ea(e){let t=na(e.stackMode),n=e.stackPrimarySizing===void 0&&(t===`HORIZONTAL`||t===`VERTICAL`)?`HUG`:ra(e.stackPrimarySizing),r=ra(e.stackCounterSizing),i=Sa(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...xa(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:ia(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:aa(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:oa(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:B(e,M.layoutDirection)??`AUTO`,...i?{derivedLayout:i}:{}}}function Da(e){return e.strokeCap??`NONE`}function Oa(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function ka(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function Aa(e){return Array.isArray(e)?structuredClone(e):[]}function ja(e,t){if(e.type!==`TEXT_PATH`)return null;let n=e.vectorData,r=n?.vectorNetworkBlob,i=n?.normalizedSize;if(typeof r!=`number`||!i||i.x<=0||i.y<=0)return null;let a=t[r],o=e.textPathStart;try{return{network:Ri(a,n.styleOverrideTable),normalizedSize:{x:i.x,y:i.y},tValue:o?.tValue??0,forward:o?.forward??!0,startSegment:Wi(a)}}catch{return null}}function Ma(e,t){let n=Ji(e,t),r=Da(e),i=Oa(e,n);return{vectorNetwork:n,fillGeometry:qi(Zi(e.fillGeometry,t,Xi(e)),n),strokeGeometry:Zi(e.strokeGeometry,t),arcData:ca(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function Na(e){let t=ea(e.type);return t===`FRAME`&&Ya(e)||B(e,M.nodeType)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}function Pa(e,t,n=`source`){let r=Na(e),i=Ma(e,t),a=ja(e,t),o={nodeType:r,name:e.name??r,source:n===`source`?Qa(e,t):Za(e),...la(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,internalOnly:e.internalOnly===!0||ka(e.styleType)!==null,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:ta(e),fills:O(e.fillPaints),strokes:Je(e.strokePaints,e.strokeWeight,e.strokeAlign,i.strokeCap,i.strokeJoin,e.dashPattern??[]),strokeWeight:e.strokeWeight??1,strokeAlign:qe(e.strokeAlign),effects:Ke(e.effects),layoutGrids:Aa(e.layoutGrids),guides:Kn(e.guides),fillStyleId:V(e.styleIdForFill),strokeStyleId:V(e.styleIdForStrokeFill),textStyleId:V(e.styleIdForText),effectStyleId:V(e.styleIdForEffect),gridStyleId:V(e.styleIdForGrid),sharedStyleType:ka(e.styleType),...ua(e),...da(e),...va(e,t),..._a(e),horizontalConstraint:sa(e.horizontalConstraint),verticalConstraint:sa(e.verticalConstraint),...Ea(e),...i,minWidth:Ca(e.minSize,`x`),maxWidth:wa(e.maxSize,`x`),minHeight:Ca(e.minSize,`y`),maxHeight:wa(e.maxSize,`y`),targetAspectRatio:Ta(e),isMask:e.mask??!1,maskType:e.maskType===`OUTLINE`?`VECTOR`:e.maskType??`ALPHA`,maskIsOutline:e.maskIsOutline??!1,expanded:!0,autoRename:e.autoRename??!0,boundVariables:Zr(e),variableAssignmentScales:Br(),variableBindingScales:zr(e),variableModes:Qi(e),exportSettings:ei(e),status:ui(e),pluginData:ti(e),librarySource:ni(e),pluginRelaunchData:ii(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:ro(e),componentPropertyDefinitions:r===`INSTANCE`?[]:Ra(e),componentPropertyReferences:za(e),componentPropertyAssignments:Va(e),componentPropertyValues:Ua(e),...Ja(e)};hr(o,a);let s=Xr(e);return s&&o.textPathBox&&(o.textPathBox={x:s.x+o.textPathBox.x,y:s.y+o.textPathBox.y,width:s.width,height:s.height}),o}var Fa={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`,SLOT:`SLOT`};function Ia(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?j(t.guidValue):``}function La(e){let t={allowPreferredValuesOnly:e.allowPreferredValuesOnly??!1,displayEmptyByDefault:e.displayByDefault??!1,stretchChildOnInsert:e.stretchChildOnInsert??!1};return e.minChildren!==void 0&&(t.minChildren=e.minChildren),e.maxChildren!==void 0&&(t.maxChildren=e.maxChildren),t}function Ra(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=Fa[e.type??``]??`VARIANT`,r={id:j(e.id),name:e.name,type:t,defaultValue:Ia(e.initialValue),variantOptions:t===`VARIANT`?e.preferredValues?.stringValues:void 0,preferredValues:t===`INSTANCE_SWAP`||t===`SLOT`?e.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0};e.description&&(r.description=e.description),t===`SLOT`&&e.slotPropConfig&&(r.slotSettings=La(e.slotPropConfig)),n.push(r)}return n}function za(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,4:`SLOT_CONTENT`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`,SLOT_CONTENT_ID:`SLOT_CONTENT`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:j(e.defID),field:t}]:[]})}function Ba(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return Ia(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?j(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function Va(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[j(e.defID),Ba(e)]]:[])):{}}function Ha(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:j(e.propDefId),value:e.value??``})):[]}function Ua(e){let t=Ha(e),n=new Map(Ra(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?Tt(r):{}}function Wa(e){if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.sessionID!=`number`||typeof t.localID!=`number`)return null;let n={sessionID:t.sessionID,localID:t.localID};return A(n)?null:j(n)}function Ga(e){return typeof e==`string`?e:null}function Ka(e){return typeof e==`string`?e:``}function qa(e){return typeof e==`boolean`&&e}function Ja(e){let t=e.symbolLinks??[];return{componentKey:Ga(e.componentKey),sourceLibraryKey:Ga(e.sourceLibraryKey),publishId:Wa(e.publishID),overrideKey:Wa(e.overrideKey),sharedSymbolVersion:Ga(e.sharedSymbolVersion),publishedVersion:Ga(e.publishedVersion),isPublishable:qa(e.isPublishable),isSymbolPublishable:qa(e.isSymbolPublishable),isExposedInstance:qa(e.propsAreBubbled),symbolDescription:Ka(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:Ha(e)}}function Ya(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function Xa(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function Za(e){let t=Ie();return t.fig.layout=Xa(e),t}function Qa(e,t){return{format:`fig`,id:e.guid?j(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...to(e,t),...no(e,t),layout:Xa(e)}}}function $a(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>$a(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=$a(i,t);return n}var eo=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.blendMode.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textAlignHorizontal.textAlignVertical.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.emojiImageSet.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.detachOpticalSizeFromFontSize.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function to(e,t){let n={};for(let r of eo){let i=e[r];i!==void 0&&(n[r]=$a(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function no(e,t){let n=e.symbolData;return{symbolOverrides:$a(n?.symbolOverrides??[],t),componentPropAssignments:$a(e.componentPropAssignments??[],t),derivedSymbolData:$a(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function ro(e){let t=e.symbolData;return t?.symbolID?j(t.symbolID):``}function io(e,t=!1){let n=u[Math.round(e/100)*100]??`Regular`;return t?`${n} Italic`:n}function ao(e){let t=ur(e.axis);return t===void 0?{axisName:e.axis,value:e.value}:{axisTag:t,axisName:e.axis,value:e.value}}function oo(e,t,n){t.textDecoration&&(e.textDecoration=t.textDecoration),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness!=null&&(e.textDecorationThickness={value:t.textDecorationThickness,units:`PIXELS`}),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset!=null&&(e.textUnderlineOffset={value:t.textUnderlineOffset,units:`PIXELS`}),t.textDecorationFills&&t.textDecorationFills.length>0&&(e.textDecorationFillPaints=t.textDecorationFills.map(n))}function so(e,t,n,r){let i={styleID:e},a=t.fontWeight??n.fontWeight,o=t.italic??n.italic;return i.fontName={family:c(t.fontFamily??n.fontFamily),style:io(a,o),postscript:``},t.fontSize!==void 0&&(i.fontSize=t.fontSize),t.fontVariations&&t.fontVariations.length>0&&(i.fontVariations=t.fontVariations.map(ao)),t.opticalSizeFromFontSize!==void 0&&(i.detachOpticalSizeFromFontSize=!t.opticalSizeFromFontSize),t.fontFeatures&&t.fontFeatures.length>0&&cr(i,t.fontFeatures),t.letterSpacing!==void 0&&(i.letterSpacing=wi(t.letterSpacing)),t.lineHeight!==void 0&&(i.lineHeight=Ci(t.lineHeight)),oo(i,t,r),t.textCase&&(i.textCase=t.textCase),t.fills&&t.fills.length>0&&(i.fillPaints=t.fills.map(r)),i}function co(e){let t=Array.from({length:e.text.length}).fill(0),n=new Map,r=1;for(let i of e.styleRuns){let e=JSON.stringify(i.style),a=n.get(e);a||(a={id:r++,style:i.style},n.set(e,a));for(let e=i.start;e<i.start+i.length&&e<t.length;e++)t[e]=a.id}return{charIds:t,styleMap:n}}function lo(e){return[...co(e).styleMap.values()]}function uo(e){return co(e).charIds}function fo(e,t){let{charIds:n,styleMap:r}=co(e),i=[...r.values()].map(({id:n,style:r})=>so(n,r,e,t)),a=Li(e,r.size+1),o=[...i,...a.overrides],s={characters:e.text,lines:a.lines};return e.styleRuns.length>0&&(s.characterStyleIDs=n),o.length>0&&(s.styleOverrideTable=o),s}function po(e){let t=new Map;for(let n of e.getAllNodes()){if(n.sharedStyleType===null||!n.source.id)continue;let e=We(n);typeof e.key==`string`&&t.set(n.source.id,{assetRef:{key:e.key,...typeof e.version==`string`?{version:e.version}:{}}})}return t}function mo(e,t){if(!e.styleNodeIds){let t=new Map;for(let n of e.graph.getAllNodes())n.sharedStyleType!==null&&n.source.id&&t.set(n.source.id,n.id);e.styleNodeIds=t}let n=e.styleNodeIds.get(t);return(n?e.nodeIdToGuid?.get(n):void 0)??e.nodeIdToGuid?.get(t)??$e(t)}function ho(e,t){return e.styleReferences??=po(e.graph),e.styleReferences.get(t)??{guid:mo(e,t)}}var go=2147483647;function _o(e){if(!/^\d+:\d+$/.test(e))return null;let t=$e(e);return t.sessionID<=go&&t.localID<=go?t:null}function vo(e,t){let n=new Set,r=t;for(;!n.has(r);){n.add(r);let t=e.graph.getNode(r);if(t?.type!==`INSTANCE`||!t.componentId)return r;r=t.componentId}return t}function yo(e,t,n){let r=e.graph.getNode(t);if(!r)return;let i=e.nodeIdToGuid?.get(t);if(i)return i;let a=!r.source.id||!e.recordOwners||e.recordOwners.get(r.source.id)===t,o=r.source.id&&a?_o(r.source.id):null;if(o&&e.assignedGuidValues){let r=`${o.sessionID}:${o.localID}`;if(e.assignedGuidValues.has(r)){let r={sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,r),e.assignedGuidValues.add(`${r.sessionID}:${r.localID}`),r}}let s=o??{sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,s),e.assignedGuidValues?.add(`${s.sessionID}:${s.localID}`),s}function bo(e,t,n){let r=e.propertyIdToGuid.get(t);if(r)return r;let i=_o(t);if(i)return i;let a={sessionID:1,localID:n.value++};return e.propertyIdToGuid.set(t,a),e.assignedGuidValues?.add(`${a.sessionID}:${a.localID}`),a}function xo(e,t,n){let r=e.graph.getNode(t);for(;r?.parentId;){if(r.parentId===n)return!0;r=e.graph.getNode(r.parentId)}return!1}function So(e,t,n,r){let i=t.boundVariables[r];if(!i){if(!n.colorVar)return n;let{colorVar:e,...t}=n;return t}return{...n,colorVar:{dataType:`ALIAS`,resolvedDataType:`COLOR`,value:{alias:Nr(e.graph,i,e.varIdToGuid)}}}}function Co(e,t){return t.fills.map((n,r)=>So(e,t,e.fillToKiwiPaint(n),`fills/${r}/color`))}function wo(e,t){return t.strokes.map((n,r)=>So(e,t,e.fillToKiwiPaint(n),`strokes/${r}/color`))}function To(e,t){return n=>{let r=e.graph.getNode(n);return(r?.overrideKey?_o(r.overrideKey):null)??yo(e,n,t)}}function Eo(e,t,n){let r=t=>e.nodeIdToGuid?.get(t)??$e(t),i=n.hyperlink;i&&(t.hyperlink=i.type===`URL`?{url:i.value}:{guid:r(i.value)}),n.textStyleId!==void 0&&(t.styleIdForText=n.textStyleId?ho(e,n.textStyleId):{guid:{...k}}),n.fillStyleId!==void 0&&(t.styleIdForFill=n.fillStyleId?ho(e,n.fillStyleId):{guid:{...k}});let a=jr(n.boundVariables??{},e.graph,e.varIdToGuid);a.length>0&&(t.parameterConsumptionMap={entries:a})}function Do(e,t,n){let r=n.styleOverrideTable;if(!r)return;let i=new Map(lo(t).map(({id:e,style:t})=>[e,t]));for(let t of r){let n=i.get(t.styleID);n&&Eo(e,t,n)}}function Oo(e,t,n){e.serializeTextProps(t,n,e.graph,e.fontDigestMap,e.blobs,e.glyphBlobMap),n.textData&&Do(e,t,n.textData)}var ko=4e7;function H(e){return{guids:[{sessionID:ko,localID:e}]}}function Ao(e){let t=e.guidPath?.guids;if(!(t?.length!==1||t[0].sessionID!==4e7))return t[0].localID}function jo(e){let t=new Map;for(let n of e?.overrides??[]){let e=Ao(n);e!==void 0&&t.set(e,n)}return t}function Mo(e){return jo(e.nodeGenerationData)}function No(e){return jo(e.derivedImmutableFrameData)}function Po(e,t,n){let{guidPath:r,...i}=R(t??{}),a={...i,type:e};return n?.size&&(a.size=R(n.size)),n?.transform&&(a.transform=R(n.transform)),n?.vectorData&&(a.vectorData=R(n.vectorData)),n?.derivedTextData&&(a.derivedTextData=R(n.derivedTextData)),a}function Fo(e){return{size:{x:e.width,y:e.height},transform:{m00:1,m01:0,m02:e.x,m10:0,m11:1,m12:e.y}}}function Io(e,t,n){let r={};Oo(e,n,r);let{derivedTextData:i,...a}=r,o={...a,guidPath:H(t),visible:n.visible,fillPaints:Co(e,n)},s={guidPath:H(t),...Fo(n)};return i&&(s.derivedTextData=i),{entry:o,derived:s}}function Lo(e,t){return e.text===``||(t.derivedTextData?.glyphs?.length??0)>0}var U={line:0,label:1,labelBackground:2},Ro=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`];function zo(e,t){return Array.isArray(e)?e.map(({position:e,axis:n})=>({position:{x:(e?.x??0)-t.x,y:(e?.y??0)-t.y},direction:n?.x?`HORIZONTAL`:`VERTICAL`})):[]}function Bo(e,t){let n=zo(e,t),r=n.at(0),i=n.at(1);return r&&i?[r.position,i.position]:null}function Vo(e,t){return e.map(({position:e,direction:n})=>({position:{x:e.x+t.x,y:e.y+t.y},axis:n===`HORIZONTAL`?{x:1,y:0}:{x:0,y:1}}))}var Ho=new Set([`MIDDLE_TO_START`,`MIDDLE_TO_END`]),Uo=new Set([`NONE`,`ABOVE`,`BELOW`]);function Wo(e){if(!e||typeof e!=`object`)return null;let{section:t,offset:n,offAxisOffset:r}=e;return!t||!Ho.has(t)||typeof n!=`number`?null:{section:t,offset:n,offAxis:r&&Uo.has(r)?r:`NONE`}}var Go=new Set([`NONE`,`AUTO`,`AUTO_HORIZONTAL`,`TOP`,`RIGHT`,`BOTTOM`,`LEFT`,`CENTER`,`EDGE`,`ABSOLUTE`]),Ko=new Set([`NONE`,`ROUND`,`SQUARE`,`ARROW_LINES`,`ARROW_EQUILATERAL`,`TRIANGLE_FILLED`,`DIAMOND_FILLED`,`CIRCLE_FILLED`]),qo=new Set([`ELBOWED`,`STRAIGHT`,`CURVED`]);function Jo(e){return e&&Go.has(e)?e:`NONE`}function Yo(e,t){return typeof e==`string`&&Ko.has(e)?e:t}function Xo(e){let t=e??{},n=t.endpointNodeID;return{sourceId:n&&!A(n)?j(n):null,magnet:Jo(t.magnet),position:{x:t.position?.x??0,y:t.position?.y??0}}}function Zo(e,t,n){let r=e.sourceId===null?null:n(e.sourceId)??null;return r||e.sourceId===null?{nodeId:r,magnet:e.magnet,position:e.position}:{nodeId:null,magnet:`NONE`,position:t??e.position}}function Qo(e,t,n,r){let i=we(e,t);e.updateNode(t.id,{connectorStart:Zo(Xo(n.connectorStart),i?.start,r),connectorEnd:Zo(Xo(n.connectorEnd),i?.end,r)})}function $o(e,t,n,r){let{nodeType:i,name:a,...o}=Pa(Po(e,t,n),r,`occurrence`);return o}function es(e,t,n,r){let i=Mo(n),a=No(n),{line:o,label:s,labelBackground:c}=U,l=n.connectorLineStyle;e.updateNode(t.id,{fills:[],strokes:[],connectorLineType:typeof l==`string`&&qo.has(l)?l:`ELBOWED`,connectorStartCap:Yo(n.connectorStartCap,`ROUND`),connectorEndCap:Yo(n.connectorEndCap,`ARROW_LINES`),connectorControlPoints:zo(n.connectorControlPoints,t),connectorCurveHandles:Bo(n.connectorBezierControlPoints,t),connectorLabelPosition:Wo(n.connectorTextMidpoint)});let u=i.get(s)?.textData?.characters??``,d=$o(`RECTANGLE`,i.get(c),a.get(c),r),f=$o(`TEXT`,i.get(s),a.get(s),r);Se(e,t,{line:$o(`VECTOR`,i.get(o),a.get(o),r),labelBackground:{...d,visible:u!==``},label:{...f,x:(f.x??0)+(d.x??0),y:(f.y??0)+(d.y??0),visible:u!==``}})}function ts(e,t,n){let r=t?.nodeId?e.nodeIdToGuid?.get(t.nodeId):void 0;return t&&(r||!t.nodeId)?{endpointNodeID:r??{...k},position:{...t.position},magnet:t.magnet}:{endpointNodeID:{...k},position:{...n??{x:0,y:0}},magnet:`NONE`}}function ns(e,t,n){let r=new Map(e.flatMap(e=>e.guid?[[j(e.guid),e]]:[]));for(let[e,i]of n){let a=t.getNode(e),o=r.get(j(i));if(!(a?.type!==`CONNECTOR`||o?.type!==`CONNECTOR`))for(let[e,t]of[[`connectorStart`,a.connectorStart],[`connectorEnd`,a.connectorEnd]]){let i=t?.nodeId?n.get(t.nodeId):void 0;!t||!i||!r.has(j(i))||(o[e]={endpointNodeID:{...i},position:{...t.position},magnet:t.magnet})}}}function rs(e,t,n){let r=b(n,Ro),i=Ce(e.graph,t);if(!i)return r;let a=we(e.graph,t);if(r.connectorStart=ts(e,t.connectorStart,a?.start),r.connectorEnd=ts(e,t.connectorEnd,a?.end),r.connectorLineStyle=t.connectorLineType,r.connectorStartCap=t.connectorStartCap,r.connectorEndCap=t.connectorEndCap,t.connectorControlPoints.length>0&&(r.connectorControlPoints=Vo(t.connectorControlPoints,t)),t.connectorCurveHandles&&(r.connectorBezierControlPoints=Vo(t.connectorCurveHandles.map(e=>({position:e,direction:`HORIZONTAL`})),t)),t.connectorLabelPosition){let{section:e,offset:n,offAxis:i}=t.connectorLabelPosition;r.connectorTextMidpoint={section:e,offset:n,offAxisOffset:i}}r.connectorType=`MANUAL`,r.connectorVersion=1;let{line:o,label:s,labelBackground:c}=i,l={guidPath:H(U.line),strokePaints:wo(e,o),strokeWeight:o.strokes[0]?.weight??o.strokeWeight,strokeCap:`ROUND`,cornerRadius:o.cornerRadius,dashPattern:[...o.dashPattern]},{entry:u,derived:d}=Io(e,U.label,s);r.nodeGenerationData={overrides:[l,u,{guidPath:H(U.labelBackground),visible:c.visible,fillPaints:Co(e,c),cornerRadius:c.cornerRadius}],useFineGrainedSyncing:!1,diffOnlyRemovals:[]};let f={};return e.serializeGeometry(o,f,e.blobs),d.transform={m00:1,m01:0,m02:s.x-c.x,m10:0,m11:1,m12:s.y-c.y},f.vectorData&&Lo(s,d)&&(r.derivedImmutableFrameData={overrides:[{guidPath:H(U.line),...Fo(o),vectorData:f.vectorData},d,{guidPath:H(U.labelBackground),...Fo(c)}],version:1}),r}var is={read:es,link:Qo,write:rs},as=33,os=126,ss=`O`,cs=94;function ls(e){let t=Math.floor(e/cs),n=String.fromCharCode(as+e%cs);return String.fromCharCode(os).repeat(t)+n}function W(e,t){if(e!==null&&t!==null&&e>=t)return null;let n=e??``,r=t??``,i=0;for(;i<n.length&&i<r.length&&n[i]===r[i];)i++;let a=i<n.length?n.charCodeAt(i):as-1,o=t!==null&&i<t.length?t.charCodeAt(i):127;if(o-a>1)return n.slice(0,i)+String.fromCharCode(Math.floor((a+o)/2));if(i<n.length)return n.slice(0,i+1)+(W(n.slice(i+1),null)??ss);let s=t?.slice(i+1)??``;return!t||s===``?null:t.slice(0,i+1)+(W(null,s)??``)}function us(e,t,n){for(let r=W(e,t);r!==null;r=W(r,t)){if(r+n<t)return r+n;if(!t.startsWith(r))return null}return null}function ds(e,t,n=``){let r=W(e,t);return r===null?(W(e,null)??ss)+n:n?t===null?r+n:us(e,t,n)??r:r}function fs(e,t){return W(e,t)!==null}function ps(e){let t=[],n=new Map;for(let r=0;r<e.length;r++){let i=e[r];if(!i)continue;let a=0,o=t.length;for(;a<o;){let n=a+o>>1;(e[t[n]]??``)<i?a=n+1:o=n}a===0&&r>0&&!fs(null,i)||(a>0&&n.set(r,t[a-1]),t[a]=r)}let r=new Set;for(let e=t.at(-1);e!==void 0;e=n.get(e))r.add(e);return r}function ms(e,t={}){let n=[],r=null,i=[],a=(e,n,r)=>{if(t.suffix){let e=ds(n,r,t.suffix());return r===null||e<r?e:null}let i=ls(e);return(n===null||i>n)&&(r===null||i<r)?i:W(n,r)},o=e=>{let t=[],n=r;for(let r of i){let i=a(r,n,e);if(i===null)return null;t.push(i),n=i}return t},s=ps(e);for(let t=0;t<e.length;t++){let a=e[t],c=a&&s.has(t)?o(a):null;a&&c?(i.forEach((e,t)=>n[e]=c[t]),n[t]=a,r=a,i=[]):i.push(t)}let c=o(null)??[];return i.forEach((e,t)=>n[e]=c[t]),n}function G(e){return e.symbolData}function K(e){return G(e)?.symbolOverrides??[]}function hs(e){return e.derivedSymbolData??[]}function gs(e){return G(e)?.uniformScaleFactor??1}function _s(e,t,n){t(e,n);for(let n of K(e))_s(n,t,n)}var vs=k;function ys(e){let t=e?.slotContentIdValue?.guid;if(t)return A(t)?void 0:t}var bs={background:0,label:1},xs=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`],Ss=[`textAutoResize`,`textTruncation`,`maxLines`],Cs=[`fillPaints`,`strokePaints`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`dashPattern`,`effects`,`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForEffect`];function ws(e,t){if(!e)return{};let{guidPath:n,...r}=R(e);return b(Pa({...r,type:`RECTANGLE`},t,`occurrence`),[`fills`,`strokes`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`dashPattern`,`cornerRadius`,`effects`,`fillStyleId`,`strokeStyleId`,`effectStyleId`])}function Ts(e,t,n){if(!e)return{};let{nodeType:r,name:i,...a}=Pa(Po(`TEXT`,e,t),n,`occurrence`);return{...a,...Ee}}function Es(e,t,n,r){let{background:i,label:a}=bs,o=Mo(n);e.updateNode(t.id,{...ws(o.get(i),r),shapeUserHeight:t.shapeUserHeight>0?t.shapeUserHeight:t.height,...xe(t.shapeWithTextType,t.width,t.height)});let s=No(n).get(a);Ne(e,t,Ts(o.get(a),s,r))}function Ds(e,t,n){let r=Me(e.graph,t);if(!r)return n;let i=b(n,xs);i.shapeWithTextType=t.shapeWithTextType,t.shapeUserHeight>0&&(i.shapeUserHeight=t.shapeUserHeight),t.shapeTruncates&&(i.shapeTruncates=!0);let a=bs,o={guidPath:H(a.background),...b(n,Cs),cornerRadius:t.cornerRadius},s=Io(e,a.label,r);return i.nodeGenerationData={overrides:[o,y(s.entry,Ss)],useFineGrainedSyncing:!1,diffOnlyRemovals:[]},Lo(r,s.derived)&&(i.derivedImmutableFrameData={overrides:[{guidPath:H(a.background),...Fo({...t,x:0,y:0})},s.derived],version:1}),i}var Os={read:Es,write:Ds},ks={background:0,body:1,author:2},As=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`effects`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`];function js(e,t,n){let{nodeType:r,name:i,...a}=Pa(Po(`TEXT`,e,t),n,`occurrence`);return{...a,...De}}function Ms(e,t,n,r){let i=Mo(n),a=No(n),{background:o,body:s,author:c}=ks,l=js(i.get(s),a.get(s),r),u=js(i.get(c),a.get(c),r),d=i.has(c)?Te({fontSize:u.fontSize??0}):1;e.updateNode(t.id,{fills:O(i.get(o)?.fillPaints),...Oe(d)}),Ae(e,t,{scale:d},{body:l,author:u})}function Ns(e,t,n){let r=je(e.graph,t);if(!r)return n;let i=b(n,As),a=Co(e,t),o=[{guidPath:H(ks.background),fillPaints:a,cornerRadius:0}],s=[{guidPath:H(ks.background),...Fo({...t,x:0,y:0})}],c=!0;for(let[t,n]of[[ks.body,r.body],[ks.author,r.author]]){let r=Io(e,t,n);o.push(r.entry),s.push(r.derived),c&&=Lo(n,r.derived)}return i.nodeGenerationData={overrides:o,useFineGrainedSyncing:!1,diffOnlyRemovals:[]},c&&(i.derivedImmutableFrameData={overrides:s,version:1}),i}var Ps={SHAPE_WITH_TEXT:Os,STICKY:{read:Ms,write:Ns},CONNECTOR:is};function Fs(e){return Ps[e]}var Is={guid:{...k}},Ls={name:{scene:[`name`],kind:`scalar`},opacity:{scene:[`opacity`],kind:`scalar`},fontSize:{scene:[`fontSize`],kind:`scalar`,length:!0},visible:{scene:[`visible`],kind:`visible`},variableModeBySetMap:{scene:[`variableModes`],kind:`node`,absent:{entries:[]}},textData:{scene:[`text`,`styleRuns`,`textParagraphs`],kind:`text`},styleIdForText:{scene:[`textStyleId`],kind:`text-style`},fillPaints:{scene:[`fills`],kind:`paint`},strokePaints:{scene:[`strokes`],kind:`paint`},size:{scene:[`width`,`height`],kind:`size`,length:!0},stackSpacing:{scene:[`itemSpacing`],kind:`layout-distance`,length:!0},stackCounterSpacing:{scene:[`counterAxisSpacing`],kind:`layout-distance`,length:!0},stackHorizontalPadding:{scene:[`paddingLeft`],kind:`layout-distance`,length:!0},stackVerticalPadding:{scene:[`paddingTop`],kind:`layout-distance`,length:!0},stackPaddingRight:{scene:[`paddingRight`],kind:`layout-distance`,length:!0},stackPaddingBottom:{scene:[`paddingBottom`],kind:`layout-distance`,length:!0},textAutoResize:{scene:[`textAutoResize`],kind:`layout-mode`},stackChildPrimaryGrow:{scene:[`layoutGrow`],kind:`layout-mode`},stackPrimarySizing:{scene:[`primaryAxisSizing`],kind:`layout-mode`},stackCounterSizing:{scene:[`counterAxisSizing`],kind:`layout-mode`},stackChildAlignSelf:{scene:[`layoutAlignSelf`],kind:`layout-mode`},cornerRadius:{scene:[`cornerRadius`],kind:`node`,length:!0,absent:0},rectangleTopLeftCornerRadius:{scene:[`topLeftRadius`],kind:`node`,length:!0,absent:0},rectangleTopRightCornerRadius:{scene:[`topRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomRightCornerRadius:{scene:[`bottomRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomLeftCornerRadius:{scene:[`bottomLeftRadius`],kind:`node`,length:!0,absent:0},rectangleCornerRadiiIndependent:{scene:[`independentCorners`],kind:`node`,absent:!1},cornerSmoothing:{scene:[`cornerSmoothing`],kind:`node`,absent:0},strokeWeight:{scene:[`strokeWeight`],kind:`node`,length:!0},strokeAlign:{scene:[`strokeAlign`],kind:`node`,absent:`CENTER`},borderTopWeight:{scene:[`borderTopWeight`],kind:`node`,length:!0},borderRightWeight:{scene:[`borderRightWeight`],kind:`node`,length:!0},borderBottomWeight:{scene:[`borderBottomWeight`],kind:`node`,length:!0},borderLeftWeight:{scene:[`borderLeftWeight`],kind:`node`,length:!0},borderStrokeWeightsIndependent:{scene:[`independentStrokeWeights`],kind:`node`,absent:!1},strokeCap:{scene:[`strokeCap`],kind:`node`,absent:`NONE`},strokeJoin:{scene:[`strokeJoin`],kind:`node`,absent:`MITER`},miterLimit:{scene:[`strokeMiterLimit`],kind:`node`},dashPattern:{scene:[`dashPattern`],kind:`node`,length:!0,absent:[]},blendMode:{scene:[`blendMode`],kind:`node`,absent:`PASS_THROUGH`},effects:{scene:[`effects`],kind:`node`,absent:[]},locked:{scene:[`locked`],kind:`node`,absent:!1},layoutGrids:{scene:[`layoutGrids`],kind:`node`,absent:[]},styleIdForFill:{scene:[`fillStyleId`],kind:`node`,absent:Is},styleIdForStrokeFill:{scene:[`strokeStyleId`],kind:`node`,absent:Is},styleIdForEffect:{scene:[`effectStyleId`],kind:`node`,absent:Is},stackPrimaryAlignItems:{scene:[`primaryAxisAlign`],kind:`node`},stackCounterAlignItems:{scene:[`counterAxisAlign`],kind:`node`},stackPositioning:{scene:[`layoutPositioning`],kind:`node`},fontName:{scene:[`fontFamily`,`fontWeight`,`italic`],kind:`node`},fontVariations:{scene:[`fontVariations`],kind:`node`,absent:[]},detachOpticalSizeFromFontSize:{scene:[`opticalSizeFromFontSize`],kind:`node`,absent:!1},lineHeight:{scene:[`lineHeight`],kind:`node`,absent:{value:100,units:`PERCENT`}},letterSpacing:{scene:[`letterSpacing`],kind:`node`},paragraphSpacing:{scene:[`paragraphSpacing`],kind:`node`,length:!0,absent:0},textCase:{scene:[`textCase`],kind:`node`,absent:`ORIGINAL`},textDecoration:{scene:[`textDecoration`],kind:`node`,absent:`NONE`},textAlignHorizontal:{scene:[`textAlignHorizontal`],kind:`node`},textAlignVertical:{scene:[`textAlignVertical`],kind:`node`},textTruncation:{scene:[`textTruncation`],kind:`node`,absent:`DISABLED`},maxLines:{scene:[`maxLines`],kind:`node`}},Rs=Object.entries(Ls),zs=new Map(Object.entries(i(Rs.flatMap(([e,t])=>t.scene.map(n=>({scene:n,raw:e,field:t}))),e=>e.scene)).map(([e,t])=>[e,t.map(({raw:e,field:t})=>({raw:e,field:t}))]));function Bs(e){return Rs.flatMap(([t,n])=>n.kind===e?[t]:[])}Bs(`scalar`);var Vs=Object.fromEntries(Bs(`layout-distance`).map(e=>[Ls[e].scene[0],e])),Hs=[`componentKey`,`sourceLibraryKey`,`publishID`,`publishedVersion`,`sharedSymbolVersion`,`isSymbolPublishable`,`variantPropSpecs`,`componentPropDefs`,`overrideKey`],Us={add:`ADDITION`,subtract:`SUBTRACTION`,multiply:`MULTIPLY`,divide:`DIVIDE`,negate:`NEGATE`,equal:`EQUALS`,notEqual:`NOT_EQUAL`,less:`LESS_THAN`,lessOrEqual:`LESS_THAN_OR_EQUAL`,greater:`GREATER_THAN`,greaterOrEqual:`GREATER_THAN_OR_EQUAL`,and:`AND`,or:`OR`,not:`NOT`,text:`STRINGIFY`,truthy:`IS_TRUTHY`,if:`TERNARY`},Ws=Ot(Us);function Gs(e){return Us[e]}function Ks(e){return e===void 0?void 0:Ws[e]}var{token:qs,modeConditions:Js,modeAttribute:Ys}=M;function Xs(e){return ft(e,[qs,Js,Ys])}function Zs(e){return x(e)?void 0:e}function Qs(e,t){return t!==void 0&&Math.fround(e)===Math.fround(t)}function $s(e,t){let n=B(e,qs)??{},r=Object.entries(n.expressions??{}).filter(([e,n])=>{if(!Object.hasOwn(t,e))return!1;let r=t[e];return typeof r!=`number`||Qs(r,n.resolved)});return{unit:n.unit,expressions:Zs(Object.fromEntries(r))}}function ec(e){return B(e,Js)??{}}function tc(e){return B(e,Ys)}function nc(e){return e.modeAttribute?pt(Ys,e.modeAttribute):void 0}function rc(e,t){let n={unit:e.unit,expressions:Zs(kt(e.expressions??{},(e,n)=>t(n)))};if(!(!n.unit&&!n.expressions))return pt(qs,n)}function ic(e,t){let n=e.modes.flatMap(e=>e.condition?[[t(e.modeId),e.condition]]:[]);return n.length>0?pt(Js,Object.fromEntries(n)):void 0}var ac=e=>_t.includes(e),oc=e=>gt.includes(e);function sc(e){let t=(e.codeSyntax?.entries??[]).flatMap(({platform:e,value:t})=>oc(e)&&t?[[e,t]]:[]);return t.length>0?Object.fromEntries(t):void 0}function cc(e){let t=e.variableScopes?.filter(ac),n=Xs(ti(e)),r={description:e.description??e.symbolDescription??``,hiddenFromPublishing:e.isPublishable===!1,scopes:t?.length?t:void 0,codeSyntax:sc(e),pluginData:n.length>0?n:void 0};return typeof e.key==`string`&&(r.key=e.key),typeof e.version==`string`&&(r.version=e.version),r}function lc(e,t){let n=Object.entries(e.codeSyntax??{}).flatMap(([e,t])=>t?[{platform:e,value:t}]:[]),r=rc(e,t),i={isPublishable:!e.hiddenFromPublishing,variableScopes:e.scopes?.length?e.scopes:[`ALL_SCOPES`],pluginData:dc([...Xs(e.pluginData??[]),...r?[r]:[]])};return e.description&&(i.description=e.description,i.symbolDescription=e.description),n.length>0&&(i.codeSyntax={entries:n}),i}function uc(e,t){let n=ic(e,t),r=nc(e);return dc([...Xs(e.pluginData??[]),...n?[n]:[],...r?[r]:[]])}function dc(e){return e?.length?ai(e):void 0}var fc=S({sessionID:w(T(),me(),re(0)),localID:w(T(),me(),re(0))}),pc=S({guid:C(fc),assetRef:C(S({key:E(),version:C(E())}))}),q=fe(()=>S({dataType:C(E()),resolvedDataType:C(E()),value:C(S({alias:C(pc),mapValue:C(S({values:C(_e(S({key:C(E()),guidKey:C(fc),value:C(q)})))})),colorArrayValue:C(S({colors:C(_e(q))})),fontStyleValue:C(S({asString:C(q),asFloat:C(q),asVariations:C(q)})),boolValue:C(ve()),floatValue:C(T()),textValue:C(E()),colorValue:C(S({r:T(),g:T(),b:T(),a:T()})),expressionValue:C(S({expressionFunction:E(),expressionArguments:C(_e(q))}))}))}));function mc(e,t,n=e=>e){let r=0,i=0,a=e=>{let o=e.value;if(!o)return;o.alias&&=t(o.alias,r++)??o.alias;let s=[...o.expressionValue?.expressionArguments??[],...o.colorArrayValue?.colors??[],o.fontStyleValue?.asString,o.fontStyleValue?.asFloat,o.fontStyleValue?.asVariations];for(let e of o.mapValue?.values??[])e.guidKey&&=n(e.guidKey,i++),s.push(e.value);for(let e of s)e&&a(e)};a(e)}function hc(e){let t=ce(q,structuredClone(e));if(t.dataType!==`EXPRESSION`||!t.value?.expressionValue)throw Error(`Invalid unsupported variable expression`);return t}function gc(e,t){let n=[],r=t.parentId?e.getNode(t.parentId):void 0;for(;r;)r.type===`INSTANCE`&&n.push(r),r=r.parentId?e.getNode(r.parentId):void 0;return t.type===`INSTANCE`&&n.unshift(t),n}function _c(e,t){let n=[];for(let r of gc(e,t)){let i=Le(r.instanceOverrides,r.id,t),a=i?e.getNode(i):void 0;a&&n.push(a)}return n}function vc(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of t.nodes.values()){let t=gc(e,n),i=new Set;for(let e of t){let t=e.id===n.id?e.instanceOverrides.self:e.instanceOverrides.descendants.get(n.id);for(let e of t?.keys()??[])i.add(e)}let a={};for(let t of _c(e,n))for(let e of r)!t.source.editedFields.includes(e)||i.has(e)||Object.assign(a,{[e]:structuredClone(t[e])});Object.keys(a).length&&e.updateNode(n.id,a)}})}function yc(e){return e.layoutScale??1}function bc(e){return Br(e.mainComponentId===null?1:yc(e))}function xc(e,t,n){for(let r of z(n)){if(r.variableData&&![`ALIAS`,`EXPRESSION`].includes(r.variableData.dataType??``))continue;let n=r.variableField&&wr[r.variableField];n&&(D(e.instanceOverrides,e.id,t.id,Be(n),t.boundVariables[n]??null),D(e.instanceOverrides,e.id,t.id,`boundVariables`))}}function Sc(e,t){Cc(e,t,gs(t))}function Cc(e,t,n=1){for(let r of z(t)){let t=r.variableField&&wr[r.variableField];if(!t)continue;e.variableBindingScales??={};let i=yr(r.variableData),a=i?.reference?i.multiplier:1,o=t===`opacity`?.01:1,s=r.variableData?.value?.expressionValue&&t!==`opacity`&&t!==`rotation`;e.variableBindingScales[t]=a*o/(s?n:1)}}function wc(e,t,n){let r=[],i=(e,a)=>{if(n(e)){r.push({match:e,top:a});return}if(!t.isInstance(e))for(let n of t.childrenOf(e))i(n,a)};for(let t of e)i(t,t);return r.length===1?{count:1,...r[0]}:{count:r.length}}function*Tc(e,t){yield e;for(let n of t(e))yield*Tc(n,t)}function J(e){return e.guid?j(e.guid):void 0}function Y(e){return e.parentIndex?.guid?j(e.parentIndex.guid):void 0}function Ec(e,t){let n=e.parentIndex?.position??``,r=t.parentIndex?.position??``;return n===r?0:n<r?-1:1}function Dc(e){let t=new Map,n=new Map;for(let r of e){let e=J(r);if(e===void 0)continue;if(t.has(e))throw Error(`Duplicate source node ${e}`);t.set(e,r);let i=Y(r);if(i===void 0)continue;let a=n.get(i);a?a.push(r):n.set(i,[r])}for(let e of n.values())e.sort(Ec);return{sources:t,children:n}}function X(e,t){return e?.sessionID===t.sessionID&&e.localID===t.localID}function Oc(e){if(!e||typeof e!=`object`||!(`sessionID`in e)||!(`localID`in e)||typeof e.sessionID!=`number`||typeof e.localID!=`number`)return;let t={sessionID:e.sessionID,localID:e.localID};return A(t)?void 0:t}function kc(e,t){return X(e.guid,t)||X(Oc(e.overrideKey),t)}function Ac({children:e}){return{childrenOf:t=>e.get(J(t)??``)??[],isInstance:e=>e.symbolData?.symbolID!==void 0}}function jc(e,t,n){let{count:r,match:i,top:a}=wc(e.children.get(t)??[],Ac(e),e=>kc(e,n));return{count:r,record:i,topChild:a}}function Mc(e,t,n){let r=j(t);for(let[t,i]of n.entries()){let a=e.sources.get(r);if(!a)return!1;if(t===0&&kc(a,i))continue;let{record:o}=jc(e,r,i);if(!o)return!1;if(t===n.length-1)return!0;if(!o.symbolData?.symbolID)return!1;r=j(o.symbolData.symbolID)}return!1}function Nc(e,t){let n=t,r=new Set;for(;!r.has(n);){r.add(n);let t=e.sources.get(n);if(t?.type!==`INSTANCE`||!t.symbolData?.symbolID)return n;n=j(t.symbolData.symbolID)}return n}function Pc(e){let t=e.value;if(t&&(t.boolValue!==void 0||t.textValue!==void 0||t.guidValue!==void 0||t.textDataValue!==void 0))return t;let n=e.varValue?.value;if(n?.symbolIdValue?.guid)return{guidValue:n.symbolIdValue.guid};if(n?.boolValue!==void 0)return{boolValue:n.boolValue};if(n?.textValue!==void 0)return{textValue:n.textValue};if(n?.textDataValue!==void 0)return{textDataValue:n.textDataValue};if(n?.slotContentIdValue)return{slotContentIdValue:n.slotContentIdValue}}function Fc(e,t,n){let r=structuredClone([...e]);for(let e of t){let t=Pc(e);if(!e.defID||!t)continue;let i={id:e.defID,value:structuredClone(t),origin:`assignment`,...n===void 0?{}:{rank:n}},a=r.findIndex(e=>X(e.id,i.id));if(a===-1){r.push(i);continue}let o=r[a];r[a]={...i,superseded:[...o.superseded??[],structuredClone(o.value)]}}return r}function Ic(e){return(e.componentPropDefs??[]).flatMap(e=>e.id&&e.initialValue?[{id:e.id,value:structuredClone(e.initialValue),origin:`default`}]:[])}function Lc(e,t,n){let r=R(e),i=e.componentPropRefs;for(let e of i??[]){if(!e.defID||e.isDeleted)continue;let i=t.find(t=>X(t.id,e.defID));if(!i)continue;let{value:a,origin:o}=i,s=e=>{n?.({definitionId:structuredClone(i.id),field:e,origin:o},i)};if(e.componentPropNodeField===`VISIBLE`&&a.boolValue!==void 0)r.visible=a.boolValue,s(`visible`);else if(e.componentPropNodeField===`TEXT_DATA`){let e=typeof a.textValue==`string`?a.textValue:a.textValue?.characters??a.textDataValue?.characters;e!==void 0&&(e!==r.textData?.characters&&(r.derivedTextData=void 0),r.textData={...r.textData,characters:e},s(`textData`))}else e.componentPropNodeField===`OVERRIDDEN_SYMBOL_ID`&&a.guidValue?(r.symbolData={...r.symbolData,symbolID:a.guidValue},s(`symbolData`)):e.componentPropNodeField===`SLOT_CONTENT_ID`&&a.slotContentIdValue&&s(`slotContent`)}return r}function Rc(e,t){let n=e.properties;t.derivedTextData&&(n.derivedTextData=structuredClone(t.derivedTextData)),t.fontSize!==void 0&&(n.fontSize=t.fontSize),t.lineHeight!==void 0&&(n.lineHeight=structuredClone(t.lineHeight)),t.letterSpacing!==void 0&&(n.letterSpacing=structuredClone(t.letterSpacing)),t.size&&(n.size=structuredClone(t.size),e.derivedSize=structuredClone(t.size)),t.transform&&(n.transform=structuredClone(t.transform));let{fillGeometry:r,strokeGeometry:i,vectorData:a}=t;r&&(n.fillGeometry=structuredClone(r)),i&&(n.strokeGeometry=structuredClone(i)),a&&(n.vectorData=structuredClone(a))}function zc(e,t){let n=[],r=[];e.type===`INSTANCE`&&e.symbolData?.symbolID&&e.variableModeBySetMap&&r.push({path:[e.symbolData.symbolID],props:{variableModeBySetMap:e.variableModeBySetMap}});for(let i of K(e)){let{guidPath:e,overriddenSymbolID:a,componentPropAssignments:o,...s}=i,c=e?.guids??[];if(!c.length)continue;let l=o??[];(a||l.length)&&n.push({owner:t,declaredPath:c,path:c,swap:a,assignments:l}),Object.keys(s).length&&r.push({path:c,props:s})}return{structural:n,claims:r}}var Bc={childrenOf:e=>e.children,isInstance:e=>e.mainComponentId!==null};function Vc(e){return Tc(e,e=>e.children)}var Hc=class extends Error{diagnostic;constructor(e,t){super(t),this.diagnostic=e,this.name=`InstancePathError`}},Uc=class extends Error{count;constructor(e,t){super(`Expected one instance-path target for ${j(t)}; found ${e}`),this.count=e,this.name=`SegmentError`}};function Wc(e,t,n,r){return new Hc({ownerId:e,mainComponentId:t,path:structuredClone(n),reason:r.count===0?`missing-target`:`ambiguous-target`},`Override declared by ${e}, path [${n.map(j).join(`, `)}]: ${r.message}`)}function Gc(e,t){let n=j(t),{count:r,match:i}=wc(e.children,Bc,e=>X(e.overrideKey,t)||e.sourceId===n);if(!i)throw new Uc(r,t);return i}function Kc(e,t){return X(e.properties.symbolData?.symbolID,t)||X(e.mainComponentOverrideKey,t)||X(e.sourceComponentOverrideKey,t)||X(e.sourceComponentId,t)}function qc(e,t){let n=e;for(let[r,i]of t.entries())r===0&&Kc(e,i)||(n=Gc(n,i));return n}function Jc(e,t,n){if(!t?.properties.size||!n.size)return;let r=gs(n);Xc(e,{x:t.properties.size.x*r,y:t.properties.size.y*r},n.size)}function Yc(e,t,n,r,i){let a=r-n;if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:t*i}}return i===`MAX`?{position:e+a,size:t}:i===`CENTER`?{position:e+a/2,size:t}:i===`STRETCH`?{position:e,size:Math.max(0,t+a)}:{position:e,size:t}}function Xc(e,t,n){if(t.x===n.x&&t.y===n.y)return;let r=e.properties.stackMode&&e.properties.stackMode!==`NONE`;for(let i of e.children){let e=i.properties;if(r&&e.stackPositioning!==`ABSOLUTE`||!e.size)continue;let a=e.transform??{m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},o=Yc(a.m02,e.size.x,t.x,n.x,e.horizontalConstraint),s=Yc(a.m12,e.size.y,t.y,n.y,e.verticalConstraint),c={x:o.size,y:s.size};Xc(i,e.size,c),e.size=c,e.transform={...a,m02:o.position,m12:s.position}}}var Zc=(e,t)=>({x:e.x*t,y:e.y*t});function Qc(e,t){e.fontSize!==void 0&&(e.fontSize*=t);for(let n of[`lineHeight`,`letterSpacing`]){let r=e[n];r?.units===`PIXELS`&&(e[n]={...r,value:r.value*t})}if(e.textData?.styleOverrideTable){e.textData=structuredClone(e.textData);for(let n of e.textData.styleOverrideTable??[])Qc(n,t)}if(!e.derivedTextData)return;let n=structuredClone(e.derivedTextData);n.layoutSize&&=Zc(n.layoutSize,t),n.truncatedHeight!==void 0&&(n.truncatedHeight*=t);for(let e of n.glyphs??[])e.position=Zc(e.position,t),e.fontSize*=t;for(let e of n.baselines??[])e.position=Zc(e.position,t),e.width*=t,e.lineHeight*=t,e.lineAscent*=t,e.lineY!==void 0&&(e.lineY*=t);e.derivedTextData=n}var $c=[`stackPadding`,...Object.values(Vs)],el=[`strokeWeight`,`cornerRadius`,`rectangleTopLeftCornerRadius`,`rectangleTopRightCornerRadius`,`rectangleBottomLeftCornerRadius`,`rectangleBottomRightCornerRadius`],tl=[`fontSize`,`lineHeight`,`letterSpacing`,`textData`,`derivedTextData`],nl=[...$c,...el,...tl,`dashPattern`,`effects`,`size`,`transform`];function rl(e,t){for(let n of el){let r=e[n];typeof r==`number`&&(e[n]=r*t)}e.dashPattern&&=e.dashPattern.map(e=>e*t),e.effects&&=e.effects.map(e=>({...e,offset:e.offset?{x:e.offset.x*t,y:e.offset.y*t}:e.offset,radius:typeof e.radius==`number`?e.radius*t:e.radius,spread:typeof e.spread==`number`?e.spread*t:e.spread}))}function il(e,t){let n=gs(t);if(!Number.isFinite(n)||n<=0)throw Error(`Invalid instance uniform scale`);if(n!==1){for(let t of Vc(e)){t.layoutScale=(t.layoutScale??1)*n;for(let e of Object.keys(t.variableBindingScales??{}))t.variableBindingScales&&e!==`opacity`&&e!==`rotation`&&(t.variableBindingScales[e]*=n);let e=t.properties;Qc(e,n),rl(e,n);for(let t of $c){let r=e[t];typeof r==`number`&&(e[t]=r*n)}e.size&&={x:e.size.x*n,y:e.size.y*n},e.transform&&={...e.transform,m02:e.transform.m02*n,m12:e.transform.m12*n},t.derivedSize&&={x:t.derivedSize.x*n,y:t.derivedSize.y*n}}for(let n of nl){let r=t[n];r!==void 0&&Object.assign(e.properties,{[n]:structuredClone(r)})}}}var al=[`fontSize`,`fontName`,`fontVariations`,`detachOpticalSizeFromFontSize`,`letterSpacing`,`lineHeight`,`textCase`,`textAlignHorizontal`,`textAlignVertical`,`textAutoResize`,`styleIdForText`,`fontVariantCommonLigatures`,`fontVariantContextualLigatures`];function ol(e,t){if(`derivedTextData`in t)return;let n=t.textData;(n!==void 0&&Object.entries(n).some(([t,n])=>!p(n,e.textData?.[t]))||al.some(n=>n in t&&!p(e[n],t[n])))&&(e.derivedTextData=void 0)}function sl(e){return{instance:(t,n={})=>cl(e,t,`INSTANCE`,n),component:(t,n={})=>cl(e,t,`SYMBOL`,n),page:(t,n={})=>cl(e,t,`CANVAS`,n)}}function cl(e,t,n,r){let{sources:i,children:a}=e,o=new Set,s=new WeakMap,c=new WeakMap,l=e=>{let t=i.get(e.sourceId);if(t?.type===`INSTANCE`)return e.properties.name;let n=t?.parentIndex?.guid,r=n?i.get(j(n)):void 0;return r?.isStateGroup===!0?r.name:e.properties.name},u=e=>{if(!e)return[];let t=Oc(i.get(j(e))?.overrideKey);return t?[e,t]:[e]},d=({boundary:t})=>t?.replaced.some(n=>Mc(e,n,t.path))??!1,f=(e,t)=>{if(t.count===0&&d(e))return;let n=Wc(e.owner.id,e.owner.mainComponentId,e.declaredPath,t);if(t.count!==0||!r.onUnresolvedAssignment)throw n;e.owner.unresolved.push({...n.diagnostic,assignments:structuredClone(e.assignments)})},p=(t,n)=>{let r=new Map;for(let i of n){let[n]=i.path,{count:a,topChild:o}=jc(e,t,n);if(!o?.guid){f(i,new Uc(a,n));continue}let s=j(o.guid),c=kc(o,n),l={...i,path:c?i.path.slice(1):i.path},u=r.get(s);u?u.push(l):r.set(s,[l])}return r},m=(e,t,n)=>{let r=e.symbolData?.symbolID;return t?[...r?[r]:[],...n].filter(e=>!X(e,t)):[]},h=(e,t,n,r,i)=>{let a=t.symbolData?.symbolID,o=m(e,a,n),s=[...u(e.symbolData?.symbolID),...u(a)],c=e=>s.some(t=>X(t,e)),l=[{assignments:t.componentPropAssignments??[],rank:i}],d=[],f=e=>{if(!a)throw Error(`Swap target is not an instance`);X(a,e)||o.push(a),a=e;for(let e of u(a))c(e)||s.push(e)};for(let e of r){let t=e.path.length===0||c(e.path[0]);if(!t||e.path.length>1){d.push(t?{...e,path:e.path.slice(1)}:e);continue}e.swap&&f(e.swap),e.assignments.length&&l.push({assignments:e.assignments,rank:e.owner.rank})}return{effective:a,replaced:o,groups:l,descendant:d}},g=(e,t,n,r)=>{let i=s.get(n),a=Object.fromEntries(Object.entries(r.props).filter(([e])=>{let n=i?.get(e);return n===void 0||n>=t}));Object.keys(a).length!==0&&(Cc(n,a),ol(n.properties,a),Object.assign(n.properties,R(a),Dr(n.properties,a)),`name`in a&&(n.hasOwnName=!0),e.propertyClaims.push({declaredBy:e.sourceId,path:structuredClone(r.path),properties:structuredClone(a)}))},_=(t,n)=>{let r=t;for(let[t,i]of n.entries()){let a=n.slice(t);if((c.get(r)??[]).some(t=>Mc(e,t,a)))return!0;if(!(t===0&&Kc(r,i)))try{r=Gc(r,i)}catch(e){if(!(e instanceof Uc))throw e;return!1}}return!1},v=(e,t)=>{try{return qc(e,t)}catch(n){if(!(n instanceof Uc))throw n;let i=Wc(e.sourceId,e.mainComponentId,t,n);if(i.diagnostic.reason===`missing-target`&&_(e,t))return;if(!r.onUnresolvedProperty)throw i;r.onUnresolvedProperty(i.diagnostic);return}},ee=(e,t)=>{if(!r.derivedBounds)return;let n=t.derivedSymbolData;for(let t of n??[]){let n=t.guidPath?.guids;if(!n?.length)continue;let r=v(e,n);!r||r===e||Rc(r,t)}},b=(e,t)=>{let n=[],a=new Map,o=[],s,c=Lc(e,t,(e,t)=>{if(n.push(e),t.origin===`assignment`&&t.rank!==void 0&&a.set(e.field,t.rank),e.field===`symbolData`)for(let e of t.superseded??[])e.guidValue&&o.push(e.guidValue);if(e.field===`slotContent`){let e=ys(t.value);s=e?j(e):void 0}});if(s&&!i.has(s)){if(!r.onMissingSlotContent)throw Error(`Missing slot content ${s}`);r.onMissingSlotContent({slotId:J(e)??``,slotContentId:s}),s=void 0}return{source:c,claims:n,bound:a,superseded:o,slotContent:s}},x=(e,t,n,a)=>{if(o.has(e))throw Error(`Cyclic component expansion at ${e}`);r.onProgress?.();let l=i.get(e);if(!l)throw Error(`Missing source node ${e}`);let u=b(l,t),{source:d}=u;o.add(e);try{let i={id:e,rank:a,mainComponentId:null,unresolved:[]},o=zc(d,i),f=[...o.structural,...n].sort((e,t)=>t.owner.rank-e.owner.rank),p=h(l,d,u.superseded,f,a),m;m=p.effective?te(i,{...p,effective:p.effective},a):u.slotContent?S(u.slotContent,p.descendant,a):ne(e,d,t,p.groups,p.descendant,a);let g=ae(e,l,d,p,m,u.claims);u.slotContent&&(g.slotContentId=u.slotContent),s.set(g,u.bound),m.base&&p.replaced.length&&c.set(g,p.replaced),Sc(g,d);let _=m.dangling?o.claims.filter(({path:e})=>e.length===1&&Kc(g,e[0])):o.claims;oe(g,m.base,d,_,a,!m.dangling);for(let e of i.unresolved)r.onUnresolvedAssignment?.({...e,mainComponentId:g.mainComponentId});return g}finally{o.delete(e)}},te=(t,{effective:n,replaced:a,groups:o,descendant:s},c)=>{let l=j(n);if(!i.has(l)){if(!r.onMissingComponent)throw Error(`Missing source node ${l}`);return r.onMissingComponent({ownerId:t.id,componentId:l}),{base:null,children:[],dangling:!0}}t.mainComponentId=Nc(e,l);let u=s.map(e=>a.length?{...e,boundary:{replaced:a,path:e.path}}:e),d=o.filter(e=>e.assignments.length).map(e=>({owner:{...t,rank:e.rank},declaredPath:[],path:[],assignments:e.assignments})),f=x(j(n),[],[...d,...u],c+1);return{base:f,children:f.children}},ne=(e,t,n,r,i,o)=>{let s=t.type===`SYMBOL`?r.reduce((e,t)=>Fc(e,t.assignments,t.rank),Ic(t)):n,c=p(e,i);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let t=j(e.guid);return x(t,s,c.get(t)??[],o+1)})}},S=(e,t,n)=>{let r=p(e,t);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let t=j(e.guid);return x(t,[],r.get(t)??[],n+1)})}},re=e=>{let t=ys(e.varValue?.value);return!!t&&!i.has(j(t))},ie=e=>e?{mainComponentId:e.mainComponentId??e.sourceId,mainComponentOverrideKey:e.mainComponentOverrideKey??e.overrideKey,propertyClaims:structuredClone(e.propertyClaims),variableBindingScales:{...e.variableBindingScales},hasOwnName:i.get(e.sourceId)?.type===`INSTANCE`&&e.hasOwnName}:{mainComponentId:null,mainComponentOverrideKey:void 0,propertyClaims:[],variableBindingScales:{},hasOwnName:!1},ae=(e,t,n,{effective:r,replaced:i,groups:a},{base:o,children:s},c)=>{let d=t.symbolData?.symbolID,[,f]=u(d),p=o&&r&&!X(d,r)&&n.type===`INSTANCE`?y(n,[`fillPaints`,`styleIdForFill`]):n,m={sourceId:e,sourceComponentId:d,sourceComponentOverrideKey:f,...ie(o),bindingClaims:c,overrideKey:Oc(n.overrideKey),properties:{...o&&y(o.properties,Hs),...p,...r&&n.symbolData?{symbolData:{...n.symbolData,symbolID:r}}:{},...Dr(o?.properties??{},n)},children:s};return n.type===`INSTANCE`&&(m.properties.componentPropAssignments=a.flatMap(e=>e.assignments).filter(e=>!re(e))),o&&i.length&&!m.hasOwnName&&(m.properties.name=o.defaultInstanceName??o.properties.name),m.defaultInstanceName=l(m),m},oe=(e,t,n,r,i,a)=>{for(let t of r){let n=v(e,t.path);n&&g(e,i,n,t)}il(e,n),Jc(e,t,n),n.type===`INSTANCE`&&n.size&&(e.properties.size=structuredClone(n.size),e.derivedSize=structuredClone(n.size)),a&&ee(e,n)};if(i.get(t)?.type!==n){let e={INSTANCE:`an instance`,SYMBOL:`a component`,CANVAS:`a page`}[n];throw Error(`Expected ${e} source`)}return x(t,[],[],0)}function ll(e,t){let n=Ie();return n.orderKey=e.properties.parentIndex?.position??null,n.fig.layout=t.source?.fig.layout??null,n.fig.uniformScaleFactor=G(e.properties)?.uniformScaleFactor??null,n}var ul=new Set([`childIds`,`source`,`instanceOverrides`]);function dl(e){return e instanceof Map||e instanceof Set?!0:typeof e!=`object`||!e||ArrayBuffer.isView(e)?!1:Object.values(e).some(dl)}function fl(e,t){for(let n of Object.keys(e)){if(ul.has(n))continue;let r=Reflect.get(e,n),i=Reflect.get(t,n);r===i||typeof r!=`object`||!r||dl(r)||!p(r,i)||Reflect.set(e,n,i)}let n=e.source.fig.layout,r=t.source.fig.layout;n&&n!==r&&p(n,r)&&(e.source.fig.layout=r)}function pl(e){if(e===`DOCUMENT`||e===`VARIABLE`)throw Error(`Cannot materialize ${e} as an instance descendant`)}function ml(e,t,n,r,i={}){let{blobs:a=[],sourceChildren:o=new Map,existingNodes:s=new Map,recordId:c}=i;if(!e.getNode(t))throw Error(`Missing materialization parent`);let l=new Map,u=t=>{if(l.has(t))throw Error(`Repeated or cyclic instance occurrence`);let n=Pa(t.properties,a,`occurrence`);n.nodeType===`TEXT`&&t.derivedSize&&(n.derivedLayout={width:t.derivedSize.x,height:t.derivedSize.y}),pl(n.nodeType);let i=s.get(t);if(i&&(e.getNode(i.id)!==i||i.type!==n.nodeType))throw Error(`Invalid preallocated occurrence ${t.sourceId}`);l.set(t,n);let c=o.get(t);if(c&&e.getNode(c)?.type!==n.nodeType)throw Error(`Invalid source child for ${t.sourceId}`);if(t.mainComponentId!==null){let n=r.get(t.mainComponentId);if(!n||e.getNode(n)?.type!==`COMPONENT`)throw Error(`Missing materialized component ${t.mainComponentId}`)}for(let e of t.children)u(e)};u(n);let d=new Map(s),f=(e,t,n)=>{if(n)for(let r of e.bindingClaims)r.origin===`assignment`&&r.field===`visible`&&D(n.instanceOverrides,n.id,t.id,`visible`,t.visible)},p=(t,n,r,i,a)=>{let o=a?void 0:c?.(t);return o?e.createNodeWithId(o,n,r,i):e.createNode(n,r,i)},m=(t,i,a)=>{let c=l.get(t);if(!c)throw Error(`Missing prepared occurrence`);let{nodeType:u,...h}=c;pl(u);let g=ll(t,c),_={...h,variableAssignmentScales:bc(t),componentScale:yc(t),variableBindingScales:Vr(h.boundVariables??{},t.layoutScale??1,t.variableBindingScales),componentId:t.mainComponentId===null?o.get(t)??null:r.get(t.mainComponentId),source:g},v=s.get(t);if(v&&v.parentId!==i)throw Error(`Preallocated occurrence has wrong parent ${t.sourceId}`);let y=v??p(t,u,i,_,a);v&&e.updateNode(v.id,_);let ee=e.getNode(o.get(t)??``);if(ee&&fl(y,ee),d.set(t,y),v&&t!==n&&y.type===`COMPONENT`)return y;f(t,y,a);let b=o.get(t);return a&&t.mainComponentId!==null&&b&&(D(a.instanceOverrides,a.id,y.id,`sourceComponentId`,b),e.getNode(b)?.componentId!==y.componentId&&D(a.instanceOverrides,a.id,y.id,`componentId`,y.componentId)),y.childIds=t.children.map(e=>m(e,y.id,y.type===`INSTANCE`?y:a).id),y},h=m(n,t);return _l(d),{root:h,nodes:d}}function hl(e,t,n){return e.kind===`text`?typeof t==`object`&&!!t&&`characters`in t:e.kind!==`text-style`||!!n.textStyleId}function gl(e,t,n,r){if(!Array.isArray(r))return;let i=!1;for(let[a,o]of r.entries()){if(!o.colorVar?.value?.alias)continue;let r=Be(`${n}/${a}/color`);D(e.instanceOverrides,e.id,t.id,r,t.boundVariables[`${n}/${a}/color`]??null),i=!0}i&&D(e.instanceOverrides,e.id,t.id,`boundVariables`)}function _l(e){for(let[t,n]of e)if(n.type===`INSTANCE`)for(let r of t.propertyClaims){let i=qc(t,r.path),a=e.get(i);if(!a)throw Error(`Unmaterialized property claim target`);for(let e of Object.keys(Ls)){if(!(e in r.properties))continue;let t=Ls[e];if(hl(t,r.properties[e],a)){for(let e of t.scene){let t=a[e];D(n.instanceOverrides,n.id,a.id,e,structuredClone(t))}t.kind===`paint`&&gl(n,a,t.scene[0],r.properties[e])}}xc(n,a,r.properties)}}function vl(e,t,n){if(e.mainComponentId!==null){let r=n.get(e.mainComponentId);if(!r)throw Error(`Missing component occurrence ${e.mainComponentId}`);let i=new Map(t.getChildren(r.materialized.root.id).map((e,t)=>[e.id,t])),a=new Map(r.occurrence.children.map(e=>[e.sourceId,e]));e.children=e.children.filter(e=>{let t=a.get(e.sourceId),n=t&&r.materialized.nodes.get(t);return!!n&&i.has(n.id)}).toSorted((e,t)=>{let n=a.get(e.sourceId),o=a.get(t.sourceId),s=n&&r.materialized.nodes.get(n),c=o&&r.materialized.nodes.get(o);return(s?i.get(s.id)??0:0)-(c?i.get(c.id)??0:0)})}for(let r of e.children)vl(r,t,n)}function*yl(e,t){let n=new Map;for(let e of t.children){if(n.has(e.sourceId))throw Error(`Ambiguous source child ${e.sourceId}`);n.set(e.sourceId,e)}for(let t of e.children){let e=n.get(t.sourceId);if(!e)throw Error(`Missing source child ${t.sourceId}`);yield[t,e]}}function bl(e,t,n){let r=[],i=(e,n,a,o)=>{for(let[s,c]of yl(e,n)){let e=t.nodes.get(s),n=o.get(c);if(!e||!n)throw Error(`Missing materialized correspondence for ${s.sourceId}`);r.push({owner:a,target:e,source:n}),!s.slotContentId&&s.mainComponentId===c.mainComponentId&&i(s,c,a,o)}};for(let r of Vc(e)){if(r.mainComponentId===null)continue;let e=n.get(r.mainComponentId),a=t.nodes.get(r);if(!e||!a)throw Error(`Missing component ${r.mainComponentId}`);i(r,e.occurrence,a,e.materialized.nodes)}for(let{owner:e,target:t,source:n}of r)D(e.instanceOverrides,e.id,t.id,`sourceComponentId`,n.id),t.type===`INSTANCE`&&t.componentId!==n.componentId&&D(e.instanceOverrides,e.id,t.id,`componentId`,t.componentId)}function xl(e,t){let n=new Map,r=(e,t,o)=>{for(let[s,c]of yl(e,t)){let e=o.get(c);if(!e)throw Error(`Unmaterialized source child ${c.sourceId}`);if(n.set(s,e.id),s.mainComponentId!==null)i(s);else if(s.slotContentId)for(let e of s.children)a(e);else r(s,c,o)}},i=e=>{if(e.mainComponentId===null)throw Error(`Expected instance occurrence`);let n=t.get(e.mainComponentId);if(!n)throw Error(`Missing component occurrence ${e.mainComponentId}`);r(e,n.occurrence,n.materialized.nodes)},a=e=>{if(e.mainComponentId!==null)i(e);else for(let t of e.children)a(t)};return a(e),n}function Sl(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function Cl(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}return i.length<2?null:{schemaDeflated:i[0],dataRaw:Xt(i[1]),version:n}}function wl(e){return typeof e==`object`&&!!e&&!Array.isArray(e)&&!(e instanceof Uint8Array)}function Tl(e,t,n){let r=Cl(e);if(!r)throw Error(`Invalid fig-kiwi container`);let i=mn(_n(new P(yt(r.schemaDeflated))),n);if(t)try{let e=$n(i.schema,r.dataRaw);e.length>0&&t(e)}catch(e){console.warn(`Failed to scan FIG page manifest; continuing with full decode:`,e)}if(!i.decodeMessage)throw Error(`The fig-kiwi schema has no Message`);let a=i.decodeMessage(r.dataRaw),o=a.nodeChanges;if(!Array.isArray(o)||o.length===0)throw Error(`No nodes found in .fig file`);let s=o;return Sl(s),{nodeChanges:s,blobs:(Array.isArray(a.blobs)?a.blobs:[]).map(e=>{let t=wl(e)?e.bytes:void 0;return t instanceof Uint8Array?t:new Uint8Array(Object.values(t??{}))}),figKiwiVersion:r.version,figSchemaDeflated:r.schemaDeflated}}var El=101010256,Dl=33639248,Ol=67324752,kl=22,Al=4*1024*1024,jl=8*1024*1024,Ml=16*1024*1024,Nl=`thumbnail.png`;function Pl(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Fl(e){let t=Pl(e);for(let n=e.byteLength-kl;n>=0;n--)if(t.getUint32(n,!0)===El)return n;return-1}function Il(e,t){return Number.isFinite(e)&&e&&e>0?e:t}function Ll(e){return xt(e)?.type===`image/png`}function Rl(e){let t=xt(e);return t?.type===`image/png`&&t.width>1&&t.height>1}function zl(e,t,n){let r=Pl(e),i=new TextDecoder;for(let a=0;a+46<=e.byteLength;){if(r.getUint32(a,!0)!==Dl)return null;let o=r.getUint16(a+10,!0),s=r.getUint32(a+20,!0),c=r.getUint32(a+24,!0),l=r.getUint16(a+28,!0),u=a+46+l+r.getUint16(a+30,!0)+r.getUint16(a+32,!0);if(u>e.byteLength)return null;if(i.decode(e.subarray(a+46,a+46+l))===Nl)return s>t||c>n?null:{method:o,compressedSize:s,outputSize:c,localOffset:r.getUint32(a+42,!0)};a=u}return null}async function Bl(e,t,n){let r=await e.read(t.localOffset,Math.min(e.size,t.localOffset+30));if(r.byteLength<30||Pl(r).getUint32(0,!0)!==Ol)return null;let i=Pl(r),a=t.localOffset+30+i.getUint16(26,!0)+i.getUint16(28,!0);if(a+t.compressedSize>e.size)return null;let o=await e.read(a,a+t.compressedSize);if(t.method===0)return o.byteLength===t.outputSize&&Rl(o)?o:null;if(t.method!==8)return null;let s=(()=>{try{return yt(o,{out:new Uint8Array(n+1)})}catch{return null}})();return s?.byteLength===t.outputSize&&Rl(s)?s:null}async function Vl(e,t={}){if(!Number.isSafeInteger(e.size)||e.size<kl)return null;let n=Il(t.maxTailBytes,Al),r=Il(t.maxCompressedBytes,jl),i=Il(t.maxOutputBytes,Ml),a=Math.min(e.size,65557),o=e.size-a,s=await e.read(o,e.size),c=Fl(s);if(c<0)return null;let l=Pl(s),u=l.getUint32(c+12,!0),d=l.getUint32(c+16,!0);if(u>n||d+u>e.size)return null;let f=zl(d>=o&&d+u<=e.size?s.subarray(d-o,d-o+u):await e.read(d,d+u),r,i);return f?Bl(e,f,i):null}function Hl(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function Ul(e){let t=e[`canvas.fig`]??e.canvas;if(t)return t;let n=null;for(let[t,r]of Object.entries(e))!r||Hl(t)||(!n||r.byteLength>n.byteLength)&&(n=r);return n}function Wl(e){return e===`canvas.fig`||e===`canvas`}function Gl(e,t,n){let r=Yt(e);if(!r)return null;let i=Tl(e,t,n),a=r.slice(2).find(Ll)??null;return{...i,images:[],thumbnailPNG:a,metaJSON:null}}function Kl(e,t,n){let r=new Uint8Array(e),i=Gl(r,t,n);if(i)return i;let a=Ul(N(r,{filter:({name:e})=>Wl(e)})),o,s;if(a)s=Tl(a,t,n),o=N(r,{filter:({name:e})=>!Wl(e)});else{if(o=N(r),a=Ul(o),!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(o).join(`, `)}`);s=Tl(a,t,n)}let c=o[`meta.json`],l=Object.entries(o).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...s,images:l,thumbnailPNG:o[`thumbnail.png`]??null,metaJSON:Object.hasOwn(o,`meta.json`)?new TextDecoder().decode(c):null}}function ql(e){let t=Cl(e);if(!t)throw Error(`Invalid fig-kiwi container`);return{schemaDeflated:t.schemaDeflated,dataRaw:t.dataRaw,figKiwiVersion:t.version}}function Jl(e){let t=new Uint8Array(e),n=Yt(t);if(n){let e=n.slice(2).find(Ll)??null;return{...ql(t),images:[],thumbnailPNG:e,metaJSON:null}}let r=Ul(N(t,{filter:({name:e})=>Wl(e)})),i=N(t,r?{filter:({name:e})=>!Wl(e)}:void 0),a=r??Ul(i);if(!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(i).join(`, `)}`);let o=Object.entries(i).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...ql(a),images:o,thumbnailPNG:i[`thumbnail.png`]??null,metaJSON:Object.hasOwn(i,`meta.json`)?new TextDecoder().decode(i[`meta.json`]):null}}function Yl(e){let{r:t,g:n,b:r,a:i}=e.backgroundColor,{x:a,y:o,width:s,height:c}=e.renderCoordinates,l={client_meta:{background_color:{r:Math.fround(t),g:Math.fround(n),b:Math.fround(r),a:Math.fround(i)},thumbnail_size:{width:e.thumbnailSize.width,height:e.thumbnailSize.height},render_coordinates:{x:a,y:o,width:s,height:c}},file_name:e.fileName,developer_related_links:[],exported_at:e.exportedAt.toISOString()};return JSON.stringify(l)}var Xl=w(E(),ae(),ue(E(),ye()));function Zl(e,t){if(Yt(e))return null;let n=N(e,{filter:({name:e})=>e===`meta.json`});if(!Object.hasOwn(n,`meta.json`))return null;let r=de(Xl,new TextDecoder().decode(n[`meta.json`]));if(!r.success||typeof r.output.file_name!=`string`)return null;if(r.output.file_name===t)return e;let i={};for(let[n,a]of Object.entries(N(e)))i[n]=n===`meta.json`?new TextEncoder().encode(JSON.stringify({...r.output,file_name:t})):[a,{level:0}];return bt(i)}function Ql(e){let t={"canvas.fig":[Qt(e.schemaDeflated,e.kiwiData,e.figKiwiVersion,e.compress),{level:0}],"thumbnail.png":[e.thumbnailPNG,{level:0}],"meta.json":new TextEncoder().encode(e.metaJSON)};for(let n of e.images??[])t[n.name]=[n.data,{level:0}];return bt(t)}function $l(e,t,n,r,i,a,o){return Ql({schemaDeflated:e,kiwiData:t,thumbnailPNG:n,metaJSON:r,images:i,figKiwiVersion:a,compress:o})}function eu(e){return(e??[]).map(j).join(`/`)}function tu(e,t){let n=new Set(t.removed.map(eu)),r=e.filter(e=>!n.has(eu(e.guidPath?.guids))),i=new Map(r.map((e,t)=>[eu(e.guidPath?.guids),t]));for(let e of t.entries){let t=eu(e.path),n=i.get(t),a={...n===void 0?{guidPath:{guids:e.path}}:r[n],...structuredClone(e.set)};for(let t of e.unset)Reflect.deleteProperty(a,t);n===void 0?(i.set(t,r.length),r.push(a)):r[n]=a}return r}function nu(e,t){let n={...e,...structuredClone(t.set)};for(let e of t.unset)Reflect.deleteProperty(n,e);let r=G(n);return t.symbolOverrides&&r&&(n.symbolData={...r,symbolOverrides:tu(r.symbolOverrides??[],t.symbolOverrides)}),t.derivedSymbolData&&(n.derivedSymbolData=tu(hs(n),t.derivedSymbolData)),n}var ru=new Set([`VARIABLE`,`VARIABLE_SET`]);function Z(e){return e?j(e):void 0}function iu(e){return`sessionID`in e&&`localID`in e&&typeof e.sessionID==`number`&&typeof e.localID==`number`}function au(e){let t=0,n=e=>{if(!(!e||typeof e!=`object`||ArrayBuffer.isView(e))){if(Array.isArray(e)){for(let t of e)n(t);return}iu(e)&&(e.sessionID===0||e.sessionID===1)&&(t=Math.max(t,e.localID));for(let t of Object.values(e))n(t)}};return n(e),t}function ou(e){return{recordIds:e.records.flatMap(e=>e.guid?[j(e.guid)]:[]),blobCount:e.blobCount,nextLocalId:au(e.records)+1,imageHashes:[...e.imageHashes],documentId:Z(e.records.find(e=>e.type===`DOCUMENT`)?.guid)??null}}function su(e){return{id:Z(e.guid),parent:Z(e.parentIndex?.guid),type:e.type,parentIndex:e.parentIndex,value:e}}var cu=e=>!!e.type&&ru.has(e.type);function lu(e,t,n){let r=new Map;for(let t of e){if(!t.id||!t.parent)continue;let e=r.get(t.parent)??[];e.push(t.id),r.set(t.parent,e)}let i=new Set,a=t.map(j);for(let e=a.pop();e!==void 0;e=a.pop())if(!(i.has(e)||n.has(e))){i.add(e);for(let t of r.get(e)??[])a.push(t)}return i}function uu(e,t){let n=[],r=new Set,i=new Map,a=n=>!!n&&!r.has(n)&&e.has(n)&&!t.has(n),o=e=>{if(a(e.parent)){i.set(e.parent,[...i.get(e.parent)??[],e]);return}if(n.push(e),!e.id)return;r.add(e.id);let t=i.get(e.id)??[];i.delete(e.id);for(let e of t)o(e)};return{emit:o,emitted:e=>r.has(e),finish(){for(let e of i.values())for(let t of e)n.push(t);return n}}}function du(e,t){let n=new Map;for(let r of e){let e=r.parentIndex?.position,i=cu(r)&&!(r.id&&t.has(r.id));!r.parent||!e||i||e>(n.get(r.parent)??``)&&n.set(r.parent,e)}return n}function fu(e,t){let n=du(e,t);for(let r of e){if(!cu(r)||r.value instanceof Uint8Array)continue;let e=r.value,i=r.id?t.get(r.id):void 0;if(i)e.parentIndex=structuredClone(i);else if(r.parent&&e.parentIndex){let t=ds(n.get(r.parent)??null,null);e.parentIndex={...e.parentIndex,position:t},n.set(r.parent,t)}}}function pu(e,t,n,r){let i=new Map((t.fields??[]).map(e=>[j(e.guid),e])),a=[...i].flatMap(([e,t])=>`parentIndex`in t.set?[e]:[]),o=lu(e,t.removed,new Set([...n.keys(),...a]));for(let t of e){if(!t.id||n.has(t.id)||o.has(t.id))continue;let e=i.get(t.id);e&&n.set(t.id,su(nu(r(t.value),e)))}return o}function mu(e,t,n){let r=new Map;for(let e of t.records){let t=su(e);t.id&&r.set(t.id,t)}let i=pu(e,t,r,n),a=new Set(e.flatMap(e=>e.id??[])),o=new Map,s=uu(r,a);for(let n of e){if(n.id&&i.has(n.id))continue;let e=n.id?r.get(n.id):void 0;if(t.replaceVariables&&cu(n)){n.id&&o.set(n.id,n.parentIndex),e&&s.emit(e);continue}s.emit(e??n)}for(let e of r.values())e.id&&!s.emitted(e.id)&&!a.has(e.id)&&s.emit(e);let c=s.finish();return t.replaceVariables&&fu(c,o),c}function hu(e,t,n,r){let{schema:i}=e,a={id:void 0,parent:void 0,type:void 0,parentIndex:void 0};for(let e=n.readVarUint();e!==0;e=n.readVarUint()){let o=t.byId[e];if(!o)throw Error(`Attempted to parse invalid message`);let s=o.isArray?``:o.name;if(s===`guid`)a.guid=i.read(o,n),a.id=Z(a.guid);else if(s===`parentIndex`){let e=i.read(o,n);a.parentIndex=e,a.parent=Z(e?.guid)}else s===`type`?a.type=o.definition?.names[n.readVarUint()]:s===`symbolData`&&r?a.symbolData=i.read(o,n):i.skip(o,n)}return a}function gu(e,t,n=!1){let{schema:r}=e,i=r.definition(`Message`).byId,a=new P(t),o={parts:[],records:[],blobs:[],hasBlobs:!1};for(;;){let s=a.offset,c=a.readVarUint();if(c===0)break;let l=i[c];if(!l)throw Error(`Attempted to parse invalid message`);let u=l.name===`nodeChanges`&&l.isArray,d=l.name===`blobs`&&l.isArray;if(!u&&!d){r.skip(l,a),o.parts.push({kind:`bytes`,bytes:t.subarray(s,a.offset)});continue}let f=l.definition;if(!f)throw Error(`Kiwi ${l.name} holds no messages`);let p=f.name,m={...l,isArray:!1};for(let i=a.readVarUint();i>0;i--){let i=a.offset;if(u){let r=hu(e,f,a,n);o.records.push({...r,value:t.subarray(i,a.offset)})}else r.skip(m,a),o.blobs.push(t.subarray(i,a.offset))}o.hasBlobs||=d,o.parts.push({kind:u?`records`:`blobs`,fieldId:c,type:p})}if(o.records.length===0)throw Error(`No nodes found in .fig file`);return o}function _u(e){return mn(_n(new P(yt(e))))}function vu(e){let t=new P;return t.writeVarUint(e),t.toUint8Array().slice()}function yu(e,t,n){let r=new P;return e.schema.encode(e.schema.definition(t),n,r),r.toUint8Array().slice()}function bu(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n}function xu(e,t,n){let r=_u(e),{schema:i}=r,a=gu(r,t),o=a.parts.find(e=>e.kind===`records`),s=mu(a.records,n,e=>{if(o?.kind!==`records`)throw Error(`The archive has no records`);return i.decode(i.definition(o.type),new P(e))}),c=e=>[...a.blobs,...n.blobs.map(t=>yu(r,e,{bytes:t}))],l=[],u=(e,t)=>{l.push(vu(e),vu(t.length));for(let e of t)l.push(e)};for(let e of a.parts)e.kind===`bytes`?l.push(e.bytes):e.kind===`blobs`?u(e.fieldId,c(e.type)):u(e.fieldId,s.map(t=>t.value instanceof Uint8Array?t.value:yu(r,e.type,t.value)));if(!a.hasBlobs&&n.blobs.length>0){let e=i.definition(`Message`).fields.find(e=>e.name===`blobs`);if(!e?.definition)throw Error(`The archive schema has no blobs`);u(e.id,c(e.definition.name))}return l.push(vu(0)),bu(l)}function Su(e,t,n,r){let i=Jl(e),a=xu(i.schemaDeflated,i.dataRaw,t),o=new Set(i.images.map(([e])=>e));return Ql({schemaDeflated:i.schemaDeflated,kiwiData:a,thumbnailPNG:n.thumbnailPNG,metaJSON:n.metaJSON,images:[...i.images.map(([e,t])=>({name:`images/${e}`,data:t})),...n.images.filter(e=>!o.has(e.name.replace(/^images\//,``)))],figKiwiVersion:i.figKiwiVersion,compress:r})}function Cu(e,t){let n=new Map,r=new Map,i=(e,t)=>{if(!e)return;let n=r.get(e)??[];n.push(t),r.set(e,n)};for(let t of e){let e=Z(t.guid);if(e&&(n.set(e,t),t.type===`INSTANCE`)){i(Z(G(t)?.symbolID),e);for(let n of K(t))i(Z(n.overriddenSymbolID),e)}}let a=(e,t)=>{let r=new Set;for(let i=n.get(e);i;){let e=Z(i.guid);if(!e||r.has(e))return;if(r.add(e),i.type===t)return e;let a=Z(i.parentIndex?.guid);i=a?n.get(a):void 0}},o=new Set,s=new Set,c=[...t];for(let e=c.pop();e!==void 0;e=c.pop())if(!s.has(e)){s.add(e);for(let t of r.get(e)??[]){let e=a(t,`CANVAS`);e&&o.add(e);let n=a(t,`SYMBOL`);n&&c.push(n)}}return[...o]}function wu(e,t){let n=Jl(e);return Cu(gu(_u(n.schemaDeflated),n.dataRaw,!0).records.map(e=>({guid:e.guid,parentIndex:e.parentIndex,type:e.type,symbolData:e.symbolData})),t)}function Tu(e,t,n,r=new Map){let i=new Map;for(let e of n)e.type===`INSTANCE`&&Re(e.instanceOverrides,(t,n)=>{if(n!==`width`&&n!==`height`)return;let r=t||e.id,a=i.get(r)??new Set;a.add(n),i.set(r,a)});for(let a of n){let n=Vr(a.boundVariables,r.get(a.id)??1,a.variableBindingScales);e.updateNode(a.id,{variableBindingScales:n});for(let r in a.boundVariables){if((r===`width`||r===`height`)&&t.has(a.id)||i.get(a.id)?.has(r))continue;let o=a.boundVariables[r],s=e.variables.get(o);if(!s)continue;let c=e.getNodeVariableModeId(a.id,s.collectionId),l=e.resolveVariable(o,c);if(typeof l!=`number`)continue;let u=Hr(r,r===`opacity`?l:l*(n[r]??1));u&&e.updateNode(a.id,u)}}}function Eu(e,t){for(let n of t){let t=lt(e,n);(t.fills||t.strokes)&&e.updateNode(n.id,t)}}function Du(e,t){for(let n of t){if(n.boundVariables.visible){let{visible:t}=ct(e,n);t!==void 0&&e.updateNode(n.id,{visible:t})}if(n.type!==`TEXT`)continue;let t=n.boundVariables.text;if(!t)continue;let r=h(e.resolveVariableForNode(n.id,t));r===void 0||r===n.text||e.updateNode(n.id,{text:r})}}function Ou(e){let t=[],n=(r,i)=>{let a=e.materialized.nodes.get(r);if(!a)throw Error(`Missing checkpoint occurrence`);t.push({path:i,nodeId:a.id,mainComponentId:r.mainComponentId});let o=new Set;for(let e of r.children){if(o.has(e.sourceId))throw Error(`Ambiguous checkpoint child ${e.sourceId}`);o.add(e.sourceId),n(e,[...i,e.sourceId])}};return n(e.occurrence,[]),{rootId:e.materialized.root.id,nodes:t}}function ku(e,t,n){let r=e.getNode(n.rootId);if(!r)throw Error(`Missing resumed component ${n.rootId}`);let i=new Map,a=(t,n)=>{i.set(n.join(`/`),t);for(let r of e.getChildren(t.id)){let e=r.source.id;e&&a(r,[...n,e])}};a(r,[]);let o=new Map;for(let r of n.nodes){let n=t;for(let e of r.path){let t=n.children.filter(t=>t.sourceId===e);if(t.length!==1)throw Error(`Invalid checkpoint source path ${e}`);n=t[0]}let a=e.getNode(r.nodeId)??i.get(r.path.join(`/`));if(a){if(o.has(n)||n.mainComponentId!==r.mainComponentId)throw Error(`Invalid checkpoint occurrence ${r.nodeId}`);o.set(n,a)}}let s=e=>{if(o.has(e))for(let t of e.children)s(t)};if(s(t),o.get(t)!==r)throw Error(`Invalid checkpoint root`);return{occurrence:t,materialized:{root:r,nodes:o}}}function Au(e,t,n,r){let i=r??new Map;if(!r)for(let t of e.getAllNodes())for(let e of t.componentPropertyDefinitions)i.set(e.id,e.type);for(let e of n){let n;e.componentPropertyDefinitions.forEach((r,a)=>{if(i.set(r.id,r.type),r.type!==`INSTANCE_SWAP`)return;let o=t.get(r.defaultValue);o&&(n??=[...e.componentPropertyDefinitions],n[a]={...r,defaultValue:o})}),n&&(e.componentPropertyDefinitions=n)}for(let e of n){let n;for(let r in e.componentPropertyAssignments){if(i.get(r)!==`INSTANCE_SWAP`)continue;let a=t.get(e.componentPropertyAssignments[r]);a&&(n??={...e.componentPropertyAssignments},n[r]=a)}n&&(e.componentPropertyAssignments=n)}}function ju(e,t){for(let n of t){if(n.type!==`COMPONENT`||!n.parentId||n.variantPropSpecs.length===0)continue;let t=e.getNode(n.parentId);if(t?.type!==`COMPONENT_SET`)continue;let r=new Map(t.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of n.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(n.id,{componentPropertyValues:i})}}function Mu(e,t,n){let{graph:r}=e,i=new Set(r.nodes.keys()),a=new Map,o=new Set([r.rootId,...r.getPages(!0).map(e=>e.id)]);for(let n of[...t.contentIds,...t.ancestorIds]){let t=e.sources.get(n);t&&o.add(t)}for(let e of o){let t=r.getNode(e);t&&a.set(t,structuredClone(t))}let s=new Map(e.sources),c=new Map(e.components),l=new Map(e.componentIds),u=new Set(e.savedSizeNodes),d=e.nextImportedId;r.withBufferedEvents(()=>{try{n()}catch(t){for(let[e,t]of r.nodes)i.has(e)||(t.componentId&&r.instanceIndex.get(t.componentId)?.delete(e),r.nodes.delete(e));for(let[e,t]of a)if(e.componentId&&r.instanceIndex.get(e.componentId)?.delete(e.id),Object.assign(e,t),e.type===`INSTANCE`&&e.componentId){let t=r.instanceIndex.get(e.componentId)??new Set;t.add(e.id),r.instanceIndex.set(e.componentId,t)}e.sources=s,e.components=c,e.componentIds=l,e.savedSizeNodes=u,e.nextImportedId=d;for(let[e,t]of r.instanceIndex)t.size||r.instanceIndex.delete(e);throw r.clearAbsPosCache(),t}})}function Nu(e,t){let n=e.getNode(e.rootId);if(!n||!t)return;n.source.format=`fig`,n.pluginData=t.pluginData?.map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))??[],n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight;let r=B(t,M.enabledLibraries);for(let t of r??[])e.enabledLibraries.set(t.libraryId,t)}var Pu=new Set([`VISIBLE`,`TEXT_DATA`,`OVERRIDDEN_SYMBOL_ID`,`SLOT_CONTENT_ID`]);function Fu(e){for(let t of e.componentPropDefs??[]){let e=t.varValue?.value;t.initialValue||!e||(t.initialValue=e.symbolIdValue?.guid?{guidValue:structuredClone(e.symbolIdValue.guid)}:structuredClone(e))}}function Iu(e){Fu(e);let t=e.parameterConsumptionMap,n=structuredClone(e.componentPropRefs??[]);for(let e of t?.entries??[]){let t=e.variableData?.value?.propRefValue?.defId;if(e.variableData?.dataType!==`PROP_REF`||!t||!e.variableField||!Pu.has(e.variableField))continue;let r={defID:structuredClone(t),componentPropNodeField:e.variableField},i=n.findIndex(t=>t.componentPropNodeField===e.variableField);i===-1?n.push(r):n[i]=r}n.length&&(e.componentPropRefs=n)}function Lu(e){let t=new Map;for(let n of e){if(!n.guid||typeof n.key!=`string`)continue;let e=t.get(n.key)??new Map,r=typeof n.version==`string`?n.version:``,i=j(n.guid);if(e.has(r)&&e.get(r)!==i)throw Error(`Ambiguous resource ${n.key} version ${r}`);e.set(r,i),t.set(n.key,e)}return e=>{if(e?.guid)return j(e.guid);let n=e?.assetRef;if(!n)return;let r=t.get(n.key);return n.version?r?.get(n.version):r?.has(``)?r.get(``):r?.size===1?r.values().next().value:void 0}}var Ru=[`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForText`,`styleIdForEffect`,`styleIdForGrid`];function zu(e,t,n){let r=new Set;return _s(e,e=>{for(let i of[e,...e.textData?.styleOverrideTable??[]])for(let e of Ru){let a=i[e];if(!a)continue;let o=a.guid?j(a.guid):t(a);o&&n.has(o)&&r.add(o)}}),r}function Bu(e,t,n){for(let r of K(e))n(r,[...t,...r.guidPath?.guids??[]]);for(let r of e.derivedSymbolData??[])n(r,[...t,...r.guidPath?.guids??[]])}function Vu(e){return(t,n,r)=>{let i=(t,i,a)=>{if(!t?.assetRef||t.guid)return;let o=e(t);if(!o){r?.({sourceId:n,field:i,key:t.assetRef.key,path:structuredClone(a)});return}t.guid=$e(o)},a=(e,t)=>{Iu(e);for(let n of z(e))Sr(n.variableData,e=>i(e,n.variableField??`unknown`,t));for(let[n,r]of[[`fillPaints`,e.fillPaints],[`strokePaints`,e.strokePaints]])for(let e of r??[])i(e.colorVar?.value?.alias,n,t);let n=e.variableModeBySetMap;for(let e of n?.entries??[])i(e.variableSetID,`variableModeBySetMap`,t);for(let n of Ru)i(e[n],n,t);for(let n of e.textData?.styleOverrideTable??[])a(n,t);Bu(e,t,a)};a(t,[])}}function Hu(e){let t=Vu(Lu(e));return(e,n)=>t(e,e.guid?j(e.guid):`unknown`,n)}function Uu(e,t){let n=Hu(e);return e.map(e=>{let r=structuredClone(e);return n(r,t),r})}function Wu(e,t,n,r=()=>!1){let i=n,a=new Map,o=e=>{if(e.mainComponentId===null){e.properties.type===`SYMBOL`&&a.set(e.sourceId,e);for(let t of e.children)o(t)}};for(let t of e)o(t);let s=[],c=new Set,l=new Set,u=e=>{let t=new Set,n=e;for(;n;){if(t.has(n))throw Error(`Cyclic source hierarchy at ${n}`);t.add(n);let e=i.get(n);if(!e)throw Error(`Missing source ancestor ${n}`);if(e.type===`CANVAS`)return n;n=Y(e)}throw Error(`Component ${e} has no source page`)},d=e=>{for(let t of Vc(e))t.mainComponentId!==null&&f(t.mainComponentId),t.properties.type===`SYMBOL`&&f(t.sourceId)},f=e=>{if(c.has(e))return;if(r(e)){c.add(e);return}if(l.has(e))throw Error(`Cyclic component dependency ${e}`);l.add(e);let n=i.get(e);if(!n?.parentIndex?.guid)throw Error(`Missing component parent ${e}`);let o=u(e),f=a.get(e)??t(e);for(let e of f.children)d(e);s.push({sourceId:e,parentSourceId:j(n.parentIndex.guid),pageSourceId:o,occurrence:f}),c.add(e),l.delete(e)};for(let t of e)d(t);return s}var Gu=class{source;decode;constructor(e,t){this.source=e,this.decode=t}get size(){return this.source.size}get(e){let t=this.source.get(e);return t===void 0?void 0:this.decode(t)}has(e){return this.source.has(e)}keys(){return this.source.keys()}*values(){for(let e of this.source.values())yield this.decode(e)}*entries(){for(let[e,t]of this.source)yield[e,this.decode(t)]}forEach(e){for(let[t,n]of this.entries())e(n,t,this)}[Symbol.iterator](){return this.entries()}};function Ku(e,t,n){let r=new Set,i=e=>{e&&r.add(j(e))},a=e=>{i(e.value?.guidValue),i(e.varValue?.value?.symbolIdValue?.guid)};return _s(e,(e,o)=>{i(G(e)?.symbolID),i(o?.overriddenSymbolID);for(let i of e.componentPropDefs??[])if(i.type===`INSTANCE_SWAP`&&a({value:i.initialValue,varValue:i.varValue}),i.type===`INSTANCE_SWAP`||i.type===`SLOT`)for(let e of i.preferredValues?.instanceSwapValues??[]){if(!e.key)continue;let i=t?.({assetRef:{key:e.key,version:e.version}});if(!i){if(!n)throw Error(`Unresolved preferred component ${e.key}`);n(e.key);continue}r.add(i)}for(let t of e.componentPropAssignments??[])a(t)}),r}function qu(e){let t=new Set;return _s(e,e=>{for(let n of e.componentPropAssignments??[]){let e=ys(n.varValue?.value);e&&t.add(j(e))}}),t}function Ju(e,t){if(t){for(let n of t)if(e.get(n)?.type!==`CANVAS`)throw Error(`Unknown page ${n}`)}}function Yu(e,t,n,r){for(let i of t){let t=new Set([i]),a=e.get(i),o=a?Y(a):void 0;for(;o!==void 0;){if(t.has(o))throw Error(`Cyclic source hierarchy at ${o}`);if(t.add(o),n.has(o))break;if(n.add(o),a=e.get(o),!a){r.add(o);break}o=Y(a)}}}function Xu(e,t,n,r=e=>e){let i=Lu(e),{sources:a,children:o}=n,s=new Set(a.keys()),c=new Set,l=new Set,u=new Set,d=new Set,f=new Set,p=new Set,m=new Set,h=new Set;Ju(a,t);let g=e.filter(e=>e.type===`CANVAS`&&(t?t.has(J(e)??``):e.internalOnly!==!0)).flatMap(e=>J(e)??[]);for(;g.length;){let e=g.pop();if(!e||c.has(e))continue;let t=a.get(e);if(!t){p.has(e)?f.add(e):m.has(e)?h.add(e):d.add(e);continue}c.add(e);let n=r(t),l=Ku(n,i,e=>u.add(e));for(let e of l)p.add(e);let _=qu(n);for(let e of _)m.add(e);g.push(...(o.get(e)??[]).flatMap(e=>J(e)??[]),...zu(n,i,s),...l,..._)}return Yu(a,c,l,d),{contentIds:c,ancestorIds:l,missingIds:d,missingComponentIds:f,missingSlotContentIds:h,externalPreferredKeys:u}}function Zu(e,t){let n=e.componentPropDefs;n&&(e.componentPropDefs=n.map(e=>{if(!e.parentPropDefId)return e;let n=j(e.parentPropDefId);for(let r of t){let t=(r.componentPropDefs??[]).filter(e=>e.id&&j(e.id)===n);if(t.length>1)throw Error(`Ambiguous parent property ${n}`);if(t.length===1)return{...structuredClone(t[0]),...e}}throw Error(`Missing parent property ${n}`)}))}function Qu(e,t){let n=t,r=new Set,i=new Set,a=e=>{if(i.has(e))return;if(r.has(e))throw Error(`Cyclic component-property ancestry`);r.add(e);let t=[],o=n.get(Y(e)??``),s=new Set([e]);for(;o;){if(s.has(o))throw Error(`Cyclic component-property ancestry`);s.add(o),a(o),t.push(o),o=n.get(Y(o)??``)}Zu(e,t),r.delete(e),i.add(e)};for(let t of e)a(t)}function $u(e,t){return cd(id(e),t)}var ed=[`guid`,`parentIndex`,`type`,`phase`,`name`,`internalOnly`,`key`,`version`,`styleType`,`overrideKey`];function td(e,t){let n=Kl(e,void 0,{NodeChange:ed});return{figKiwiVersion:n.figKiwiVersion,figSchemaDeflated:n.figSchemaDeflated,reader:cd(od(n.nodeChanges),t),blobs:n.blobs,images:n.images,records:n.nodeChanges}}function nd(e){let t=new Map;for(let n of e)if(n.guid&&typeof n.key==`string`){let e=j(n.guid);t.set(n.key,e),typeof n.version==`string`&&t.set(`${n.key}@${n.version}`,e)}return t}function rd(e){return e.type===`VARIABLE`||e.type===`VARIABLE_SET`}function id(e){let t=[],n=Uu(e.filter(e=>e.phase!==`REMOVED`),e=>t.push(e)),r=Dc(n);Qu(n,r.sources);let i=nd(n),a=e=>{_i(r.sources,e,i);for(let t of K(e))a(t)};for(let e of n)a(e);let o=e=>e;return{records:n,index:r,bindingDiagnostics:t,scope:()=>o,shared:o,interpreterIndex:()=>Dc(n.filter(e=>!rd(e)))}}function ad(e){let t=cn(e);if(!t)throw Error(`Record header has no archive bytes to read it whole`);return Sl([t]),t}function od(e){let t=e.filter(e=>e.phase!==`REMOVED`),n=Dc(t),r=Hu(t),i=nd(t),a=[];for(let e of t)r(ad(e),e=>a.push(e));let o=new Map,s=new Gu(n.sources,e=>e.styleType?u(e):e),c=new Set,l=(e,t)=>{if(c.has(e))throw Error(`Cyclic component-property ancestry`);c.add(e);try{let a=ad(e);r(a);let o=[];for(let r=n.sources.get(Y(e)??``);r;r=n.sources.get(Y(r)??``))o.push(t(r));Zu(a,o);let c=e=>{_i(s,e,i);for(let t of K(e))c(t)};return c(a),a}finally{c.delete(e)}},u=e=>{let t=o.get(e);return t||(t=l(e,u),o.set(e,t)),t};return{records:t,index:n,bindingDiagnostics:a,scope:()=>{let e=new Map,t=n=>{let r=o.get(n)??e.get(n);if(r)return r;let i=l(n,t);return e.set(n,i),i};return t},shared:u,interpreterIndex:()=>{let{sources:e,children:n}=Dc(t.filter(e=>!rd(e))),r=new WeakMap;return{sources:new Gu(e,u),children:new Gu(n,e=>{let t=r.get(e);return t||(t=e.map(u),r.set(e,t)),t})}}}}function sd(e){let t;return{records:e,get sourceInterpreter(){return t??=sl(e.interpreterIndex()),t}}}function cd(e,t){let n=`sourceInterpreter`in e?e:sd(e),{records:r,index:i,bindingDiagnostics:a}=n.records,o=r,s=n.records.scope(),c=o.filter(rd),l=Xu(o,t,i,s);if(l.missingIds.size)throw Error(`Missing reachable sources: ${[...l.missingIds].join(`, `)}`);let u=o.filter(e=>!rd(e)&&(e.type===`CANVAS`||e.guid&&(l.contentIds.has(j(e.guid))||l.ancestorIds.has(j(e.guid))))).map(s),d=n.sourceInterpreter,f=sl(Dc(u)),p=o.filter(e=>e.type===`CANVAS`).toSorted(Ec).map(e=>{if(!e.guid)throw Error(`Page has no GUID`);return{id:j(e.guid),name:e.name??``,position:e.parentIndex?.position??null,internalOnly:e.internalOnly===!0}}),m=new Set(p.map(e=>e.id)),h;return{selectPages(e){return cd(n,e)},get sourceRecords(){return structuredClone(o.map(s))},get recordIds(){return h??=new Set(o.flatMap(e=>e.guid?[j(e.guid)]:[])),h},get documentRecord(){let e=o.find(e=>e.type===`DOCUMENT`);return structuredClone(e&&s(e))},dependencyClosure:l,pages:p,get resources(){return structuredClone(c.map(s))},bindingDiagnostics:a,readPage(e,t={}){if(!m.has(e))throw Error(`Unknown page ${e}`);let n=f.page(e,t);return n.children=n.children.filter(e=>e.properties.isSlotContent!==!0),n},planComponents(e,t={},n){return Wu(e,e=>d.component(e,t),i.sources,n)},readComponent:d.component}}var Q=class extends Error{name=`UnsupportedExpressionError`};function ld(e,t,n=0){if(n>64)throw Error(`Variable expression is too deeply nested`);let{value:r,dataType:i,resolvedDataType:a}=e;if(!r)throw Error(`Missing variable value`);let o=i??a;if(o===`ALIAS`){let e=t(r.alias);if(!e)throw Error(`Unresolved variable alias`);return{aliasId:e}}if(o===`COLOR`&&r.colorValue)return structuredClone(r.colorValue);if(o===`BOOLEAN`&&r.boolValue!==void 0)return r.boolValue;if(o===`STRING`&&r.textValue!==void 0)return r.textValue;if(o===`FLOAT`&&r.floatValue!==void 0)return r.floatValue;if(o===`EXPRESSION`)return ud(e,t,n);throw Error(`Unsupported variable value ${o}`)}function ud(e,t,n){let r=e.value;if(!r)throw Error(`Missing expression`);if(r.expressionValue?.expressionFunction===`COMPOSE_COLOR`)return pd(e,t);let i=r.expressionValue,a=Ks(i?.expressionFunction);if(!a)throw i?.expressionFunction?new Q(`Unsupported variable expression ${i.expressionFunction}`):Error(`Missing variable expression function`);let o={operator:a,operands:(i?.expressionArguments??[]).map(e=>{if((e.dataType??e.resolvedDataType)===`ALIAS`&&!t(e.value?.alias))throw new Q(`${a} uses a variable this document lacks`);return fd(ld(e,t,n+1))})},s=de(oe([`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`]),e.resolvedDataType),c=de(It,{expression:`FORMULA`,type:s.success?s.output:dd(o),value:o});if(!c.success)throw new Q(`Invalid ${a} expression`);return c.output}function dd(e){try{return _(e)}catch{return}}function fd(e){if(typeof e!=`object`||!(`expression`in e))return e;if(e.expression===`FORMULA`)return e.value;throw new Q(`Unsupported nested ${e.expression} expression`)}function pd(e,t){let n=e.value?.expressionValue,r=n?.expressionArguments;if(n?.expressionFunction!==`COMPOSE_COLOR`||r?.length!==2)throw new Q(`Unsupported variable expression ${n?.expressionFunction}`);if(r.some(e=>e.dataType===`EXPRESSION`))throw new Q(`Unsupported nested color expression`);return ce(ee,{expression:`COMPOSE_COLOR`,color:ld(r[0],t),opacity:ld(r[1],t)})}function md(e,t,n,r){let i=e.variableDataValues?.entries??[];if(!i.length)throw Error(`Missing mode values`);let a={};for(let o of i){let i=j(o.modeID);if(!t.includes(i))throw Error(`Unknown mode`);let s;try{s=ld(o.variableData,n)}catch(t){if(!(t instanceof Q)||!r)throw t;let a=structuredClone(o.variableData),c=[],l=[];mc(a,e=>{c.push(n(e)??null)},e=>(l.push(j(e)),e)),s={expression:`UNSUPPORTED`,function:a.value?.expressionValue?.expressionFunction??``,value:{...a},references:c,modes:l},r({sourceId:e.guid?j(e.guid):``,modeId:i,reason:`unsupported-variable-expression`})}if(typeof s==`object`&&`expression`in s&&s.expression===`FORMULA`&&s.type!==e.variableResolvedType)throw Error(`Expression result type does not match ${e.variableResolvedType}`);a[i]=s}return a}function hd(e,t,n,r){let i=(e,t)=>{if(!n)throw Error(`Unsupported document resource ${e.type}: ${t}`);n(structuredClone(e))};for(let n of t){if(n.type!==`VARIABLE_SET`)continue;let t=n.variableSetModes??[];if(!n.guid||t.length===0){i(n,`missing collection identity or modes`);continue}let r=Xs(ti(n)),a=ec(n);e.addCollection({id:j(n.guid),name:n.name??`Variables`,modes:t.map(e=>{let t=j(e.id);return{modeId:t,name:e.name,condition:a[t],...e.sortPosition?{sortPosition:e.sortPosition}:{}}}),defaultModeId:j(t[0].id),variableIds:[],modeAttribute:tc(n),pluginData:r.length>0?r:void 0,key:typeof n.key==`string`?n.key:void 0,version:typeof n.version==`string`?n.version:void 0})}gd(e,t,i,r)}function gd(e,t,n,r){let i=Lu(t);for(let a of t){if(a.type!==`VARIABLE`)continue;let t=a.variableResolvedType,o=a.variableSetID?i(a.variableSetID):a.parentIndex?.guid&&j(a.parentIndex.guid),s=o&&e.variableCollections.get(o);if(!a.guid||!s||!o||t!==`COLOR`&&t!==`BOOLEAN`&&t!==`STRING`&&t!==`FLOAT`){n(a,`unresolved collection, identity or type`);continue}let c={};try{Object.assign(c,md(a,s.modes.map(e=>e.modeId),i,r))}catch(e){n(a,e instanceof Error?e.message:`Invalid mode value`);continue}let l=cc(a);e.addVariable({id:j(a.guid),name:a.name??`Variable`,type:t,collectionId:o,valuesByMode:c,...l,...$s(a,c)})}}function _d(e,t=[],n={}){return kd($u(e,n.pageIds),t,n)}function vd(e){let t=new Map(e.sources);for(let[n,r]of e.components){t.set(n,r.rootId);let e=[];for(let n of r.nodes){let r=n.path.at(-1);r&&(e.some(e=>e.length<n.path.length&&e.every((e,t)=>n.path[t]===e))||(t.set(r,n.nodeId),n.mainComponentId!==null&&e.push(n.path)))}}return t}function yd(e,t,n){let{graph:r,checkpoint:i}=e,a=new Map;for(let[e,o]of i.components)a.set(e,ku(r,t.readComponent(e,n),o));return{graph:r,nextImportedId:i.nextImportedId??Dd(r),recordIds:t.recordIds,components:a,sources:new Map(i.sources),componentIds:new Map(i.componentIds),savedSizeNodes:new Set(i.savedSizeNodeIds)}}function bd(e,t={},n){let r=td(e,new Set),i={...t,images:t.images??new Map(r.images)},a=n?yd(n,r.reader,i):kd(r.reader,r.blobs,i);a.graph.figKiwiVersion=r.figKiwiVersion,a.graph.figSchemaDeflated=r.figSchemaDeflated;let o=new Set(n?.checkpoint.loadedPageIds),s=xd(a.graph,n!==void 0),c;return{checkpoint(){return structuredClone({nextImportedId:a.nextImportedId,sources:[...a.sources],componentIds:[...a.componentIds],savedSizeNodeIds:[...a.savedSizeNodes],loadedPageIds:[...o],components:[...a.components].map(([e,t])=>[e,Ou(t)])})},graph:a.graph,graphPageId(e){return r.reader.pages.some(t=>t.id===e)?a.sources.get(e):void 0},pages:r.reader.pages,archiveRecordInfo(){return c??=ou({records:r.records,blobCount:r.blobs.length,imageHashes:r.images.map(([e])=>e)}),c},loadPage(e,t){if(o.has(e))return;let n=r.reader.selectPages(new Set([e]));Mu(a,n.dependencyClosure,()=>{kd(n,r.blobs,i,a,{edited:s.edited,onProgress:t}),o.add(e)})},get loadedPageIds(){return new Set(o)}}}function xd(e,t){let n=t;if(n)return{edited:n};let r=()=>!e.isApplyingImportedState&&!e.isApplyingDerivedLayout,i=()=>{r()&&(n=!0,a())},a=e.observeNodeChanges({before:i,created:i});return{get edited(){return n}}}function Sd(e){let t=new Map;for(let n of e.getAllNodes())for(let e of n.componentPropertyDefinitions)t.set(e.id,e.type);return t}function Cd(e){let t;do t=`0:${e.nextImportedId++}`;while(e.recordIds.has(t));return t}function wd(e,t){let n=!0,r=e,i={nextImportedId:1,recordIds:t},a=new ne(()=>{if(!n)return te();let e=r??Cd(i);return r=void 0,e});return n=!1,{graph:a,nextImportedId:i.nextImportedId}}function Td(e,t){let n=B(e,M.documentId);return n&&!t.has(n)?n:e.guid&&j(e.guid)}function Ed(e,t){let n=e.documentRecord,{recordIds:r}=e,i=wd(n&&Td(n,r),r),{graph:a}=i,o={graph:a,nextImportedId:i.nextImportedId,recordIds:r,sources:new Map,components:new Map,componentIds:new Map,savedSizeNodes:new Set};Nu(a,n);for(let[e,n]of t.images??[])a.images.set(e,n.slice());a.applyImportedStateDuring(()=>hd(a,e.resources,t.onUnsupportedResource,t.onUnsupportedVariableExpression),()=>Cd(o));for(let e of a.getPages())a.deleteNode(e.id);return o}function Dd(e){let t=3,n=[...e.nodes.keys(),...e.variables.keys(),...e.variableCollections.keys(),...[...e.variableCollections.values()].flatMap(e=>e.modes.map(e=>e.modeId))];for(let e of n)/^0:\d+$/.test(e)&&(t=Math.max(t,Number(e.slice(2))+1));return t}function Od(e,t){e.preserveSourceMetadataDuring(()=>{for(let[n,r]of t){let t=e.getNode(n);if(!t)continue;let i=new Set(_c(e,t).flatMap(e=>e.source.editedFields)),a={};t.width!==r.width&&!i.has(`width`)&&(a.width=r.width),t.height!==r.height&&!i.has(`height`)&&(a.height=r.height),Object.keys(a).length>0&&e.updateNode(n,a)}})}function kd(e,t,n,r,i={edited:!1}){for(let t of e.bindingDiagnostics){if(!n.onUnresolvedBinding)throw Error(`Unresolved binding ${t.sourceId}: ${t.field}`);n.onUnresolvedBinding(t)}let a=i.onProgress?{...n,onProgress:i.onProgress}:n,o=e.pages.map(t=>e.readPage(t.id,a)),s=r??Ed(e,n),c=e.planComponents(o,a,e=>s.components.has(e));return s.graph.applyImportedStateDuring(()=>Ad(o,c,t,s,i),()=>Cd(s))}function Ad(e,t,n,r,{edited:i,onProgress:a}){let{graph:o,sources:s,components:c,savedSizeNodes:l,componentIds:u}=r,d=new Set(o.nodes.keys()),f=new Map,p=new Map,m=e=>{for(let[t,n]of e)t.derivedSize&&(l.add(n.id),p.set(n.id,{width:n.width,height:n.height})),t.layoutScale!==void 0&&f.set(n.id,t.layoutScale)},h=({sourceId:e})=>o.isEntityIdTaken(e)?void 0:e,g=[],_=(e,t)=>{if(e.mainComponentId!==null)return;let r=s.get(e.sourceId);if(r){for(let t of e.children)_(t,r);return}let{nodeType:i,...a}=Pa(e.properties,n);if(i===`DOCUMENT`||i===`VARIABLE`)throw Error(`Unsupported scene type ${i}`);let c=h(e),l=c?o.createNodeWithId(c,i,t,a):o.createNode(i,t,a);s.set(e.sourceId,l.id),l.type===`COMPONENT`&&u.set(e.sourceId,l.id);let d=Fs(l.type);d?.read(o,l,e.properties,n),d?.link&&g.push({node:l,record:e.properties});for(let t of e.children)_(t,l.id)};for(let t of e)_(t,o.rootId);for(let e of t){if(a?.(),c.has(e.sourceId))continue;let t=s.get(e.parentSourceId);if(!t)throw Error(`Unmaterialized component parent ${e.parentSourceId}`);let r=new Map,i=e=>{let t=s.get(e.sourceId),n=t?o.getNode(t):void 0;n&&r.set(e,n),e.mainComponentId===null&&e.children.forEach(i)};i(e.occurrence);let l=ml(o,t,e.occurrence,u,{blobs:n,sourceChildren:xl(e.occurrence,c),existingNodes:r,recordId:h});m(l.nodes),bl(e.occurrence,l,c),c.set(e.sourceId,{occurrence:e.occurrence,materialized:l}),u.set(e.sourceId,l.root.id),s.set(e.sourceId,l.root.id)}let v=new Set,y=e=>{if(e.properties.type===`SYMBOL`)return;let t=s.get(e.sourceId);if(!t)throw Error(`Missing source container ${e.sourceId}`);let r=[];for(let l of e.children){if(i&&vl(l,o,c),l.mainComponentId!==null&&!s.has(l.sourceId)){a?.();let e=ml(o,t,l,u,{blobs:n,sourceChildren:xl(l,c),recordId:h});m(e.nodes),bl(l,e,c),i&&(vc(o,e),e.root.componentId&&v.add(e.root.id)),s.set(l.sourceId,e.root.id)}else l.mainComponentId===null&&l.properties.type!==`SYMBOL`&&y(l);let e=s.get(l.sourceId);if(!e)throw Error(`Missing assembled child ${l.sourceId}`);o.getNode(e)?.parentId===t&&r.push(e)}let l=o.getNode(t);l&&(l.childIds=[...r,...l.childIds.filter(e=>!r.includes(e))])};for(let t of e)y(t);for(let e of v)o.syncInstance(e);v.size>0&&Od(o,p);let ee=e=>s.get(e);for(let{node:e,record:t}of g)Fs(e.type)?.link?.(o,e,t,ee);for(let e of o.getAllNodes())d.has(e.id)||e.styleRuns.length===0||(e.styleRuns=wt(e.styleRuns,{variable:e=>e,style:e=>e,node:e=>s.get(e)??e}));let b=[...o.nodes.values()].filter(e=>!d.has(e.id));return r.definitionTypes??=Sd(o),Au(o,s,b,r.definitionTypes),o.preserveSourceMetadataDuring(()=>{ju(o,b),Tu(o,l,b,f),Eu(o,b),Du(o,b)}),r}var jd=new WeakMap;function Md(e,t){let n=jd.get(e);n||(n=new Set(e.map(e=>JSON.stringify(e))),jd.set(e,n));let r=JSON.stringify(t);n.has(r)||(n.add(r),e.push(t))}function Nd(e){return{derivedBounds:!0,onUnresolvedProperty:t=>Md(e,{kind:`property`,diagnostic:t}),onUnresolvedAssignment:t=>Md(e,{kind:`assignment`,diagnostic:t}),onUnresolvedBinding:t=>Md(e,{kind:`binding`,diagnostic:t}),onUnsupportedVariableExpression:t=>Md(e,{kind:`variable-expression`,diagnostic:t}),onMissingComponent:t=>Md(e,{kind:`component`,diagnostic:t}),onMissingSlotContent:t=>Md(e,{kind:`slot-content`,diagnostic:t})}}var $=new WeakMap;function Pd(e,t,n){$.set(e,{bytes:t,checkpoint:n,diagnostics:[]})}function Fd(e,t,n=[]){$.set(t.graph,{bytes:e,session:t,diagnostics:n})}function Id(e,t){let n=$.get(e);if(!n||n.complete)return!1;let r=n.session?.checkpoint()??n.checkpoint,i=r?.sources.find(([,e])=>e===t)?.[0];if(!i)return!1;let a=n.session;return a?a.pages.some(e=>e.id===i)&&!a.loadedPageIds.has(i):!r.loadedPageIds.includes(i)}function Ld(e){let t=$.get(e);return t?.session?.checkpoint()??t?.checkpoint}function Rd(e,t){return Id(e,t)?Gd(e,t):!1}function zd(e){let t=e.session;t?.pages.every(e=>t.loadedPageIds.has(e.id))&&(e.checkpoint=t.checkpoint(),e.session=void 0,e.bytes=void 0,e.complete=!0)}function Bd(e){let t=$.get(e),n=t?.session;if(!t||!n)return!1;let r=!1;for(let t of n.pages)!t.internalOnly||n.loadedPageIds.has(t.id)||(e.applyImportedStateDuring(()=>n.loadPage(t.id)),r=!0);return zd(t),r}function Vd(e){let t=$.get(e);if(!t||t.complete)return!1;let n=t.session;return!n||!n.pages.every(e=>n.loadedPageIds.has(e.id))}function Hd(e,t){let n=$.get(e);if(!n||n.complete)return!1;let r=n.session;if(r?.pages.every(e=>r.loadedPageIds.has(e.id)))return!1;let i=r?.checkpoint()??n.checkpoint;if(!i||!n.bytes)throw Error(`Missing reader checkpoint`);let a=bd(n.bytes,Nd(n.diagnostics),{graph:t,checkpoint:i});for(let e of a.pages)a.loadPage(e.id);return!0}function Ud(e,t){let n=$.get(e);n&&!n.session&&(n.checkpoint=t)}function Wd(e){$.delete(e)}function Gd(e,t){let n=$.get(e);if(!n)throw Error(`No reader recovery state`);if(n.complete)return!1;if(!n.session){if(!n.checkpoint||!n.bytes)throw Error(`Missing reader checkpoint`);n.session=bd(n.bytes,Nd(n.diagnostics),{graph:e,checkpoint:n.checkpoint})}let r=n.session.pages.find(e=>n.session?.graphPageId(e.id)===t);if(!r)throw Error(`Unknown graph page ${t}`);let i=n.session,a=!i.loadedPageIds.has(r.id);return e.applyImportedStateDuring(()=>i.loadPage(r.id)),zd(n),a}async function Kd(e,t){let n=t.flatMap(e=>e.nodeIds);return Et(e,n,await qd(e,n))}async function qd(t,n){let r=l(t,n).nodes.filter(e=>e.type===`TEXT`).map(o).filter(e=>s.test(e));if(r.length===0)return``;let{jsPDF:i}=await e(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-y1mzS16b.js`);return{jsPDF:e}},__vite__mapDeps([0,1,2,3,4,5,6])),c=new i;return a(r.flatMap(e=>Array.from(c.processArabic(e)))).join(``)}function Jd(e,t){let n=t?.length?t:e.getPages().map(e=>e.id);for(let t of n)Rd(e,t)}async function Yd(e,t){let n=await Kd(e,t);return e.applyDerivedLayoutDuring(()=>{for(let n of t)Dt(e,n.pageId)}),n}function Xd(e){return e.faces.map(e=>{let t=e.status===`available`?f.loadedData(e.family,e.style):null;if(t)return{family:e.family,style:e.style,data:t};let n=e.reason===`unsupported-format`?`unsupported font format`:`font file not available`;return{family:e.family,style:e.style,data:t,missing:n}})}async function Zd(e){let t=await Ye().catch(()=>null);return t?Qe(t,t=>e(e=>{if(o(e).length!==e.text.length)return null;let n=t(e);if(!n?.baselines.length)return null;let r=$d(n.glyphs),i=Qd(e,r);return n.baselines.map(e=>({start:e.firstCharacter,end:e.endCharacter,x:e.position.x,y:e.position.y,width:e.width,characters:r,fallbacks:i}))})):e(void 0)}function Qd(e,t){let n=o(e),r=new Map;for(let i of t.keys()){let t=et(e,n,i);!t||!t.fallback&&t.file===0||t.family===`OpenPencil Emoji Metrics`||r.set(i,{family:t.family,style:t.style,file:t.file})}return r}function $d(e){let t=new Map;for(let n of e){if(n.firstCharacter===void 0)continue;let e=n.x,r=n.x+n.advance,i=t.get(n.firstCharacter);t.set(n.firstCharacter,i?{left:Math.min(i.left,e),right:Math.max(i.right,r)}:{left:e,right:r})}return t}export{vo as $,uc as A,Gt as At,ds as B,eu as C,Un as Ct,Vl as D,P as Dt,Zl as E,mn as Et,Fs as F,Co as G,ns as H,vs as I,yo as J,wo as K,hs as L,Gs as M,Yt as Mt,Is as N,It as Nt,mc as O,Qt as Ot,zs as P,_o as Q,G as R,Su as S,Kn as St,Yl as T,vn as Tt,Oo as U,ms as V,So as W,To as X,bo as Y,xo as Z,Nd as _,Ir as _t,Zd as a,Vi as at,_d as b,Yn as bt,Bd as c,Ci as ct,Ld as d,ri as dt,uo as et,Gd as f,Yr as ft,Ud as g,Dr as gt,Wd as h,Lr as ht,Jd as i,Gi as it,lc as j,Kt as jt,hc as k,Zt as kt,Rd as l,di as lt,Fd as m,oi as mt,Kd as n,ao as nt,Vd as o,Hi as ot,Pd as p,ai as pt,ho as q,Yd as r,io as rt,Id as s,wi as st,Xd as t,fo as tt,Hd as u,Jr as ut,bd as v,Nr as vt,$l as w,_n as wt,wu as x,qn as xt,vd as y,cr as yt,ls as z};