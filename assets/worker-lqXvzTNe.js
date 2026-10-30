(function(){var e=Object.defineProperty,t=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},r=Uint8Array,i=Uint16Array,a=Int32Array,o=new r([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new r([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),c=new r([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),l=function(e,t){for(var n=new i(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var o=new a(n[30]),r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)o[s]=s-n[r]<<5|r;return{b:n,r:o}},u=l(o,2),d=u.b,f=u.r;d[28]=258,f[258]=28;for(var p=l(s,0),m=p.b,h=p.r,g=new i(32768),_=0;_<32768;++_){var v=(_&43690)>>1|(_&21845)<<1;v=(v&52428)>>2|(v&13107)<<2,v=(v&61680)>>4|(v&3855)<<4,g[_]=((v&65280)>>8|(v&255)<<8)>>1}for(var y=(function(e,t,n){for(var r=e.length,a=0,o=new i(t);a<r;++a)e[a]&&++o[e[a]-1];var s=new i(t);for(a=1;a<t;++a)s[a]=s[a-1]+o[a-1]<<1;var c;if(n){c=new i(1<<t);var l=15-t;for(a=0;a<r;++a)if(e[a])for(var u=a<<4|e[a],d=t-e[a],f=s[e[a]-1]++<<d,p=f|(1<<d)-1;f<=p;++f)c[g[f]>>l]=u}else for(c=new i(r),a=0;a<r;++a)e[a]&&(c[a]=g[s[e[a]-1]++]>>15-e[a]);return c}),b=new r(288),_=0;_<144;++_)b[_]=8;for(var _=144;_<256;++_)b[_]=9;for(var _=256;_<280;++_)b[_]=7;for(var _=280;_<288;++_)b[_]=8;for(var x=new r(32),_=0;_<32;++_)x[_]=5;var S=y(b,9,0),C=y(b,9,1),w=y(x,5,0),ee=y(x,5,1),te=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},T=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},E=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},ne=function(e){return(e+7)/8|0},D=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new r(e.subarray(t,n))},O=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],k=function(e,t,n){var r=Error(t||O[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,k),!n)throw r;return r},A=function(e,t,n,i){var a=e.length,l=i?i.length:0;if(!a||t.f&&!t.l)return n||new r(0);var u=!n,f=u||t.i!=2,p=t.i;u&&(n=new r(a*3));var h=function(e){var t=n.length;if(e>t){var i=new r(Math.max(t*2,e));i.set(n),n=i}},g=t.f||0,_=t.p||0,v=t.b||0,b=t.l,x=t.d,S=t.m,w=t.n,O=a*8;do{if(!b){g=T(e,_,1);var A=T(e,_+1,3);if(_+=3,!A){var j=ne(_)+4,M=e[j-4]|e[j-3]<<8,N=j+M;if(N>a){p&&k(0);break}f&&h(v+M),n.set(e.subarray(j,N),v),t.b=v+=M,t.p=_=N*8,t.f=g;continue}else if(A==1)b=C,x=ee,S=9,w=5;else if(A==2){var re=T(e,_,31)+257,ie=T(e,_+10,15)+4,ae=re+T(e,_+5,31)+1;_+=14;for(var oe=new r(ae),se=new r(19),ce=0;ce<ie;++ce)se[c[ce]]=T(e,_+ce*3,7);_+=ie*3;for(var P=te(se),le=(1<<P)-1,F=y(se,P,1),ce=0;ce<ae;){var ue=F[T(e,_,le)];_+=ue&15;var j=ue>>4;if(j<16)oe[ce++]=j;else{var de=0,fe=0;for(j==16?(fe=3+T(e,_,3),_+=2,de=oe[ce-1]):j==17?(fe=3+T(e,_,7),_+=3):j==18&&(fe=11+T(e,_,127),_+=7);fe--;)oe[ce++]=de}}var I=oe.subarray(0,re),pe=oe.subarray(re);S=te(I),w=te(pe),b=y(I,S,1),x=y(pe,w,1)}else k(1);if(_>O){p&&k(0);break}}f&&h(v+131072);for(var me=(1<<S)-1,L=(1<<w)-1,he=_;;he=_){var de=b[E(e,_)&me],R=de>>4;if(_+=de&15,_>O){p&&k(0);break}if(de||k(2),R<256)n[v++]=R;else if(R==256){he=_,b=null;break}else{var ge=R-254;if(R>264){var ce=R-257,z=o[ce];ge=T(e,_,(1<<z)-1)+d[ce],_+=z}var _e=x[E(e,_)&L],ve=_e>>4;_e||k(3),_+=_e&15;var pe=m[ve];if(ve>3){var z=s[ve];pe+=E(e,_)&(1<<z)-1,_+=z}if(_>O){p&&k(0);break}f&&h(v+131072);var ye=v+ge;if(v<pe){var be=l-pe,xe=Math.min(pe,ye);for(be+v<0&&k(3);v<xe;++v)n[v]=i[be+v]}for(;v<ye;++v)n[v]=n[v-pe]}}t.l=b,t.p=he,t.b=v,t.f=g,b&&(g=1,t.m=S,t.d=x,t.n=w)}while(!g);return v!=n.length&&u?D(n,0,v):n.subarray(0,v)},j=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},M=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},N=function(e,t){for(var n=[],a=0;a<e.length;++a)e[a]&&n.push({s:a,f:e[a]});var o=n.length,s=n.slice();if(!o)return{t:P,l:0};if(o==1){var c=new r(n[0].s+1);return c[n[0].s]=1,{t:c,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var l=n[0],u=n[1],d=0,f=1,p=2;for(n[0]={s:-1,f:l.f+u.f,l,r:u};f!=o-1;)l=n[n[d].f<n[p].f?d++:p++],u=n[d!=f&&n[d].f<n[p].f?d++:p++],n[f++]={s:-1,f:l.f+u.f,l,r:u};for(var m=s[0].s,a=1;a<o;++a)s[a].s>m&&(m=s[a].s);var h=new i(m+1),g=re(n[f-1],h,0);if(g>t){var a=0,_=0,v=g-t,y=1<<v;for(s.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});a<o;++a){var b=s[a].s;if(h[b]>t)_+=y-(1<<g-h[b]),h[b]=t;else break}for(_>>=v;_>0;){var x=s[a].s;h[x]<t?_-=1<<t-h[x]++-1:++a}for(;a>=0&&_;--a){var S=s[a].s;h[S]==t&&(--h[S],++_)}g=t}return{t:new r(h),l:g}},re=function(e,t,n){return e.s==-1?Math.max(re(e.l,t,n+1),re(e.r,t,n+1)):t[e.s]=n},ie=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new i(++t),r=0,a=e[0],o=1,s=function(e){n[r++]=e},c=1;c<=t;++c)if(e[c]==a&&c!=t)++o;else{if(!a&&o>2){for(;o>138;o-=138)s(32754);o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(a),--o;o>6;o-=6)s(8304);o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(a);o=1,a=e[c]}return{c:n.subarray(0,r),n:t}},ae=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},oe=function(e,t,n){var r=n.length,i=ne(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},se=function(e,t,n,r,a,l,u,d,f,p,m){j(t,m++,n),++a[256];for(var h=N(a,15),g=h.t,_=h.l,v=N(l,15),C=v.t,ee=v.l,te=ie(g),T=te.c,E=te.n,ne=ie(C),D=ne.c,O=ne.n,k=new i(19),A=0;A<T.length;++A)++k[T[A]&31];for(var A=0;A<D.length;++A)++k[D[A]&31];for(var re=N(k,7),se=re.t,ce=re.l,P=19;P>4&&!se[c[P-1]];--P);var le=p+5<<3,F=ae(a,b)+ae(l,x)+u,ue=ae(a,g)+ae(l,C)+u+14+3*P+ae(k,se)+2*k[16]+3*k[17]+7*k[18];if(f>=0&&le<=F&&le<=ue)return oe(t,m,e.subarray(f,f+p));var de,fe,I,pe;if(j(t,m,1+(ue<F)),m+=2,ue<F){de=y(g,_,0),fe=g,I=y(C,ee,0),pe=C;var me=y(se,ce,0);j(t,m,E-257),j(t,m+5,O-1),j(t,m+10,P-4),m+=14;for(var A=0;A<P;++A)j(t,m+3*A,se[c[A]]);m+=3*P;for(var L=[T,D],he=0;he<2;++he)for(var R=L[he],A=0;A<R.length;++A){var ge=R[A]&31;j(t,m,me[ge]),m+=se[ge],ge>15&&(j(t,m,R[A]>>5&127),m+=R[A]>>12)}}else de=S,fe=b,I=w,pe=x;for(var A=0;A<d;++A){var z=r[A];if(z>255){var ge=z>>18&31;M(t,m,de[ge+257]),m+=fe[ge+257],ge>7&&(j(t,m,z>>23&31),m+=o[ge]);var _e=z&31;M(t,m,I[_e]),m+=pe[_e],_e>3&&(M(t,m,z>>5&8191),m+=s[_e])}else M(t,m,de[z]),m+=fe[z]}return M(t,m,de[256]),m+fe[256]},ce=new a([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),P=new r(0),le=function(e,t,n,c,l,u){var d=u.z||e.length,p=new r(c+d+5*(1+Math.ceil(d/7e3))+l),m=p.subarray(c,p.length-l),g=u.l,_=(u.r||0)&7;if(t){_&&(m[0]=u.r>>3);for(var v=ce[t-1],y=v>>13,b=v&8191,x=(1<<n)-1,S=u.p||new i(32768),C=u.h||new i(x+1),w=Math.ceil(n/3),ee=2*w,te=function(t){return(e[t]^e[t+1]<<w^e[t+2]<<ee)&x},T=new a(25e3),E=new i(288),O=new i(32),k=0,A=0,j=u.i||0,M=0,N=u.w||0,re=0;j+2<d;++j){var ie=te(j),ae=j&32767,P=C[ie];if(S[ae]=P,C[ie]=ae,N<=j){var le=d-j;if((k>7e3||M>24576)&&(le>423||!g)){_=se(e,m,0,T,E,O,A,M,re,j-re,_),M=k=A=0,re=j;for(var F=0;F<286;++F)E[F]=0;for(var F=0;F<30;++F)O[F]=0}var ue=2,de=0,fe=b,I=ae-P&32767;if(le>2&&ie==te(j-I))for(var pe=Math.min(y,le)-1,me=Math.min(32767,j),L=Math.min(258,le);I<=me&&--fe&&ae!=P;){if(e[j+ue]==e[j+ue-I]){for(var he=0;he<L&&e[j+he]==e[j+he-I];++he);if(he>ue){if(ue=he,de=I,he>pe)break;for(var R=Math.min(I,he-2),ge=0,F=0;F<R;++F){var z=j-I+F&32767,_e=z-S[z]&32767;_e>ge&&(ge=_e,P=z)}}}ae=P,P=S[ae],I+=ae-P&32767}if(de){T[M++]=268435456|f[ue]<<18|h[de];var ve=f[ue]&31,ye=h[de]&31;A+=o[ve]+s[ye],++E[257+ve],++O[ye],N=j+ue,++k}else T[M++]=e[j],++E[e[j]]}}for(j=Math.max(j,N);j<d;++j)T[M++]=e[j],++E[e[j]];_=se(e,m,g,T,E,O,A,M,re,j-re,_),g||(u.r=_&7|m[_/8|0]<<3,_-=7,u.h=C,u.p=S,u.i=j,u.w=N)}else{for(var j=u.w||0;j<d+g;j+=65535){var be=j+65535;be>=d&&(m[_/8|0]=g,be=d),_=oe(m,_+1,e.subarray(j,be))}u.i=d}return D(p,0,c+ne(_)+l)},F=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),ue=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=F[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},de=function(e,t,n,i,a){if(!a&&(a={l:1},t.dictionary)){var o=t.dictionary.subarray(-32768),s=new r(o.length+e.length);s.set(o),s.set(e,o.length),e=s,a.w=o.length}return le(e,t.level==null?6:t.level,t.mem==null?a.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,i,a)},fe=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},I=function(e,t){return e[t]|e[t+1]<<8},pe=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},me=function(e,t){return pe(e,t)+pe(e,t+4)*4294967296},L=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function he(e,t){return de(e,t||{},0,0)}function R(e,t){return A(e,{i:2},t&&t.out,t&&t.dictionary)}var ge=function(e,t,n,i){for(var a in e){var o=e[a],s=t+a,c=i;Array.isArray(o)&&(c=fe(i,o[1]),o=o[0]),ArrayBuffer.isView(o)?n[s]=[o,c]:(n[s+=`/`]=[new r(0),c],ge(o,s,n,i))}},z=typeof TextEncoder<`u`&&new TextEncoder,_e=typeof TextDecoder<`u`&&new TextDecoder;try{_e.decode(P,{stream:!0})}catch{}var ve=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:D(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function ye(e,t){if(t){for(var n=new r(e.length),i=0;i<e.length;++i)n[i]=e.charCodeAt(i);return n}if(z)return z.encode(e);for(var a=e.length,o=new r(e.length+(e.length>>1)),s=0,c=function(e){o[s++]=e},i=0;i<a;++i){if(s+5>o.length){var l=new r(s+8+(a-i<<1));l.set(o),o=l}var u=e.charCodeAt(i);u<128||t?c(u):u<2048?(c(192|u>>6),c(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++i)&1023,c(240|u>>18),c(128|u>>12&63),c(128|u>>6&63),c(128|u&63)):(c(224|u>>12),c(128|u>>6&63),c(128|u&63))}return D(o,0,s)}function be(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(_e)return _e.decode(e);else{var i=ve(e),a=i.s,n=i.r;return n.length&&k(8),a}}var xe=function(e,t){return t+30+I(e,t+26)+I(e,t+28)},Se=function(e,t,n){var r=I(e,t+28),i=I(e,t+30),a=be(e.subarray(t+46,t+46+r),!(I(e,t+8)&2048)),o=t+46+r,s=Ce(e,o,i,n,pe(e,t+20),pe(e,t+24),pe(e,t+42)),c=s[0],l=s[1],u=s[2];return[I(e,t+10),c,l,a,o+i+I(e,t+32),u]},Ce=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+I(e,t+2))if(I(e,t)==1)return[s?me(e,t+4+8*c):i,c?me(e,t+4):a,l?me(e,t+4+8*(c+s)):o,1];r<2&&k(13)}return[i,a,o,0]},we=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&k(9),t+=r+4}return t},Te=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=we(l);L(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&k(10),L(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(L(e,t,n.crc),L(e,t+4,a<0?-a-2:a),L(e,t+8,n.size)),L(e,t+12,c),L(e,t+14,d),t+=16,o!=null&&(L(e,t,u),L(e,t+6,n.attrs),L(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;L(e,t,+m),L(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},Ee=function(e,t,n,r,i){L(e,t,101010256),L(e,t+8,n),L(e,t+10,n),L(e,t+12,r),L(e,t+16,i)};function De(e,t){t||={};var n={},i=[];ge(e,``,n,t);var a=0,o=0;for(var s in n){var c=n[s],l=c[0],u=c[1],d=u.level==0?0:8,f=ye(s),p=f.length,m=u.comment,h=m&&ye(m),g=h&&h.length,_=we(u.extra);p>65535&&k(11);var v=d?he(l,u):l,y=v.length,b=ue();b.p(l),i.push(fe(u,{size:l.length,crc:b.d(),c:v,f,m:h,u:p!=s.length||h&&m.length!=g,o:a,compression:d})),a+=30+p+_+y,o+=76+2*(p+_)+(g||0)+y}for(var x=new r(o+22),S=a,C=o-a,w=0;w<i.length;++w){var f=i[w];Te(x,f.o,f,f.f,f.u,f.c.length);var ee=30+f.f.length+we(f.extra);x.set(f.c,f.o+ee),Te(x,a,f,f.f,f.u,f.c.length,f.o,f.m),a+=16+ee+(f.m?f.m.length:0)}return Ee(x,a,i.length,C,S),x}function Oe(e,t){for(var n={},i=e.length-22;pe(e,i)!=101010256;--i)(!i||e.length-i>65558)&&k(13);var a=I(e,i+8);if(!a)return{};var o=pe(e,i+16),s=pe(e,i-20)==117853008;if(s){var c=pe(e,i-12);s=pe(e,c)==101075792,s&&(a=pe(e,c+32),o=pe(e,c+48))}for(var l=t&&t.filter,u=0;u<a;++u){var d=Se(e,o,s),f=d[0],p=d[1],m=d[2],h=d[3],g=d[4],_=d[5],v=xe(e,_);o=g,(!l||l({name:h,size:p,originalSize:m,compression:f}))&&(f?f==8?n[h]=R(e.subarray(v,v+p),{out:new r(m)}):k(14,`unknown compression type `+f):n[h]=D(e,v,v+p))}return n}new Uint8Array([40,181,47,253]);function ke(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}var Ae=n({Zstd:()=>vt});function je(e,t){for(var n=[],r=+!t,i=0,a=0;e.length;){var o=Ye(e,r||t);if(typeof o==`object`){for(r?(t=null,o.w.length==o.u&&(n.push(t=o.w),a+=o.u)):(n.push(t),o.e=0);!o.l;){var s=lt(e,o,t);s||Ke(5),t?o.e=o.y:(n.push(s),a+=s.length,We(o.w,0,s.length),o.w.set(s,o.w.length-s.length))}i=o.b+o.c*4}else i=o;e=e.subarray(i)}return ut(n,a)}async function Me(e={}){var t=e,n=(e,t)=>{throw t},r,i,a=console.log.bind(console),o=console.error.bind(console),s,c=!1,l,u=e=>e.startsWith(`file://`),d=!1;function f(){return En.buffer}function p(){if(!ee?.buffer?.resizable){var e=f();ee=new Int8Array(e),_e=new Int16Array(e),t.HEAPU8=j=new Uint8Array(e),ve=new Uint16Array(e),ye=new Int32Array(e),N=new Uint32Array(e),Tt=new Float32Array(e),Et=new Float64Array(e),be=new BigInt64Array(e),xe=new BigUint64Array(e)}}function m(){d=!0,jn.A()}function h(e){throw e=`Aborted(${e})`,o(e),c=!0,e+=`. Build with -sASSERTIONS for more info.`,d&&yn(),new WebAssembly.RuntimeError(e)}var g;let _=()=>``;function v(e){if(e==g&&s)return new Uint8Array(s);if(i)return i(e);throw`both async and sync fetching of the wasm failed`}async function y(e){if(!s)try{var t=await r(e);return new Uint8Array(t)}catch{}return v(e)}async function b(e,t){try{var n=await y(e);return await WebAssembly.instantiate(n,t)}catch(e){o(`failed to asynchronously prepare wasm: ${e}`),h(e)}}async function x(e,t,n){if(!e&&!u(t))try{var r=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(r,n)}catch(e){o(`wasm streaming compile failed: ${e}`),o(`falling back to ArrayBuffer instantiation`)}return b(t,n)}function S(){return{a:kn}}async function C(){function e(e){return jn=e.exports,On(jn),p(),jn}function t(t){return e(t.instance)}var n=S();return g??=_(),t(await x(s,g,n))}class w{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var ee,te=()=>Tn,T=e=>{var t=e.getArg(te(),0);return Cn(t)},E=()=>Sn(),ne=e=>bn(e),D=e=>xn(e),O=globalThis.TextDecoder&&new TextDecoder,k=(e,t,n,r)=>{var i=t+n;if(r)return i;for(;e[t]&&!(t>=i);)++t;return t},A=(e,t=0,n,r)=>{var i=k(e,t,n,r);if(i-t>16&&e.buffer&&O)return O.decode(e.subarray(t,i));for(var a=``;t<i;){var o=e[t++];if(!(o&128)){a+=String.fromCharCode(o);continue}var s=e[t++]&63;if((o&224)==192){a+=String.fromCharCode((o&31)<<6|s);continue}var c=e[t++]&63;if(o=(o&240)==224?(o&15)<<12|s<<6|c:(o&7)<<18|s<<12|c<<6|e[t++]&63,o<65536)a+=String.fromCharCode(o);else{var l=o-65536;a+=String.fromCharCode(55296|l>>10,56320|l&1023)}}return a},j,M=(e,t,n)=>e?A(j,e,t,n):``,N,re=e=>{var t=E(),n=D(4),r=D(4);wn(e,n,r);var i=N[n>>2],a=N[r>>2],o=M(i);_n(i);var s;return a&&(s=M(a),_n(a)),ne(t),[o,s]},ie=e=>re(T(e)),ae=e=>{var t=new WebAssembly.Exception(te(),[e],{traceStack:!0});throw t.message=ie(t),t},oe=()=>h(``),se={},ce=e=>{for(;e.length;){var t=e.pop();e.pop()(t)}};function P(e){return this.fromWireType(N[e>>2])}var le={},F={},ue={};class de extends Error{constructor(e){super(e),this.name=`InternalError`}}var fe=e=>{throw new de(e)},I=(e,t,n)=>{e.forEach(e=>ue[e]=t);function r(t){var r=n(t);r.length!==e.length&&fe(`Mismatched type converter count`);for(var i=0;i<e.length;++i)z(e[i],r[i])}var i=Array(t.length),a=[],o=0;for(let[e,n]of t.entries())F.hasOwnProperty(n)?i[e]=F[n]:(a.push(n),le.hasOwnProperty(n)||(le[n]=[]),le[n].push(()=>{i[e]=F[n],++o,o===a.length&&r(i)}));a.length===0&&r(i)},pe=(e,t)=>j.fill(0,e,e+t),me=e=>{var t=se[e];delete se[e];var n=t.rawConstructor,r=t.rawDestructor,i=t.valueSize,a=t.isTrivial,o=t.fields,s=o.map(e=>e.getterReturnType).concat(o.map(e=>e.setterArgumentType));I([e],s,e=>{var s={};for(var[c,l]of o.entries()){let t=e[c],n=l.getter,r=l.getterContext,i=e[c+o.length],a=l.setter,d=l.setterContext;var u=i.destructorFunction===null&&!i.argStackAlloc?(e,t)=>a(d,e,i.toWireType(null,t)):(e,t)=>{var n=[];a(d,e,i.toWireType(n,t)),ce(n)};s[l.fieldName]={read:e=>t.fromWireType(n(r,e)),write:u,optional:t.optional}}return[{name:t.name,fromWireType:e=>{var t={};for(var n in s)t[n]=s[n].read(e);return r(e),t},toWireType:(e,t)=>{for(var o in s)if(!(o in t)&&!s[o].optional)throw TypeError(`Missing field: "${o}"`);var c;for(o in a&&!e?(c=D(i),pe(c,i)):(c=n(),e&&e.push(r,c)),s)s[o].write(c,t[o]);return c},readValueFromPointer:P,destructorFunction:a?null:r,argStackAlloc:a}]})},L=e=>{for(var t=``;;){var n=j[e++];if(!n)return t;t+=String.fromCharCode(n)}};class he extends Error{constructor(e){super(e),this.name=`BindingError`}}var R=e=>{throw new he(e)};function ge(e,t,n={}){var r=t.name;if(e||R(`type "${r}" must have a positive integer typeid pointer`),F.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;R(`Cannot register type '${r}' twice`)}if(F[e]=t,delete ue[e],le.hasOwnProperty(e)){var i=le[e];delete le[e],i.forEach(e=>e())}}function z(e,t,n={}){return ge(e,t,n)}var _e,ve,ye,be,xe,Se=(e,t,n)=>{switch(t){case 1:return n?e=>ee[e]:e=>j[e];case 2:return n?e=>_e[e>>1]:e=>ve[e>>1];case 4:return n?e=>ye[e>>2]:e=>N[e>>2];case 8:return n?e=>be[e>>3]:e=>xe[e>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}},Ce=(e,t,n,r,i)=>{t=L(t);let a=r===0n,o=e=>e;if(a){let e=n*8;o=t=>BigInt.asUintN(e,t),i=o(i)}z(e,{name:t,fromWireType:o,toWireType:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),readValueFromPointer:Se(t,n,!a),destructorFunction:null})},we=(e,t,n,r)=>{t=L(t),z(e,{name:t,fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},readValueFromPointer:function(e){return this.fromWireType(j[e])},destructorFunction:null})},Te=e=>({count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}),Ee=e=>{function t(e){return e.$$.ptrType.registeredClass.name}R(t(e)+` instance already deleted`)},De=!1,Oe=e=>{},ke=e=>{e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)},Ae=e=>{--e.count.value,e.count.value===0&&ke(e)},je=e=>globalThis.FinalizationRegistry?(De=new FinalizationRegistry(e=>{Ae(e.$$)}),je=e=>{var t=e.$$;if(t.smartPtr){var n={$$:t};De.register(e,n,e)}return e},Oe=e=>De.unregister(e),je(e)):(je=e=>e,e),Me=[],Ne=()=>{for(;Me.length;){var e=Me.pop();e.$$.deleteScheduled=!1,e.delete()}},Pe,Fe=()=>{let e=Ie.prototype;Object.assign(e,{isAliasOf(e){if(!(this instanceof Ie)||!(e instanceof Ie))return!1;var t=this.$$.ptrType.registeredClass,n=this.$$.ptr;e.$$=e.$$;for(var r=e.$$.ptrType.registeredClass,i=e.$$.ptr;t.baseClass;)n=t.upcast(n),t=t.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return t===r&&n===i},clone(){if(this.$$.ptr||Ee(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=je(Object.create(Object.getPrototypeOf(this),{$$:{value:Te(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},delete(){this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&R(`Object already scheduled for deletion`),Oe(this),Ae(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&R(`Object already scheduled for deletion`),Me.push(this),Me.length===1&&Pe&&Pe(Ne),this.$$.deleteScheduled=!0,this}});let t=Symbol.dispose;t&&(e[t]=e.delete)};function Ie(){}var Le=(e,t)=>Object.defineProperty(t,"name",{value:e}),Re={},B=(e,t,n)=>{if(e[t].overloadTable===void 0){var r=e[t];e[t]=function(...r){return e[t].overloadTable.hasOwnProperty(r.length)||R(`Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].overloadTable})!`),e[t].overloadTable[r.length].apply(this,r)},e[t].overloadTable=[],e[t].overloadTable[r.argCount]=r}},ze=(e,n,r)=>{t.hasOwnProperty(e)?((r===void 0||t[e].overloadTable!==void 0&&t[e].overloadTable[r]!==void 0)&&R(`Cannot register public name '${e}' twice`),B(t,e,e),t[e].overloadTable.hasOwnProperty(r)&&R(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`),t[e].overloadTable[r]=n):(t[e]=n,t[e].argCount=r)},Be=48,Ve=57,He=e=>{e=e.replace(/[^a-zA-Z0-9_]/g,`$`);var t=e.charCodeAt(0);return t>=Be&&t<=Ve?`_${e}`:e};function Ue(e,t,n,r,i,a,o,s){this.name=e,this.constructor=t,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=a,this.upcast=o,this.downcast=s,this.pureVirtualFunctions=[]}var We=(e,t,n)=>{for(;t!==n;)t.upcast||R(`Expected null or instance of ${n.name}, got an instance of ${t.name}`),e=t.upcast(e),t=t.baseClass;return e},Ge=e=>{if(e===null)return`null`;var t=typeof e;return t===`object`||t===`array`||t===`function`?e.toString():``+e};function Ke(e,t){if(t===null)return this.isReference&&R(`null is not a valid ${this.name}`),0;t.$$||R(`Cannot pass "${Ge(t)}" as a ${this.name}`),t.$$.ptr||R(`Cannot pass deleted object as a pointer of type ${this.name}`);var n=t.$$.ptrType.registeredClass;return We(t.$$.ptr,n,this.registeredClass)}function qe(e,t){var n;if(t===null)return this.isReference&&R(`null is not a valid ${this.name}`),this.isSmartPointer?(n=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,n),n):0;(!t||!t.$$)&&R(`Cannot pass "${Ge(t)}" as a ${this.name}`),t.$$.ptr||R(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&t.$$.ptrType.isConst&&R(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);var r=t.$$.ptrType.registeredClass;if(n=We(t.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(t.$$.smartPtr===void 0&&R(`Passing raw pointer to smart pointer is illegal`),this.sharingPolicy){case 0:t.$$.smartPtrType===this?n=t.$$.smartPtr:R(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:n=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)n=t.$$.smartPtr;else{var i=t.clone();n=this.rawShare(n,St.toHandle(()=>i.delete())),e!==null&&e.push(this.rawDestructor,n)}break;default:R(`Unsupported sharing policy`)}return n}function Je(e,t){if(t===null)return this.isReference&&R(`null is not a valid ${this.name}`),0;t.$$||R(`Cannot pass "${Ge(t)}" as a ${this.name}`),t.$$.ptr||R(`Cannot pass deleted object as a pointer of type ${this.name}`),t.$$.ptrType.isConst&&R(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);var n=t.$$.ptrType.registeredClass;return We(t.$$.ptr,n,this.registeredClass)}var Ye=(e,t,n)=>{if(t===n)return e;if(n.baseClass===void 0)return null;var r=Ye(e,t,n.baseClass);return r===null?null:n.downcast(r)},Xe={},Ze=(e,t)=>{for(t===void 0&&R(`ptr should not be undefined`);e.baseClass;)t=e.upcast(t),e=e.baseClass;return t},Qe=(e,t)=>(t=Ze(e,t),Xe[t]),$e=(e,t)=>((!t.ptrType||!t.ptr)&&fe(`makeClassHandle requires ptr and ptrType`),!!t.smartPtrType!=!!t.smartPtr&&fe(`Both smartPtrType and smartPtr must be specified`),t.count={value:1},je(Object.create(e,{$$:{value:t,writable:!0}})));function et(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var n=Qe(this.registeredClass,t);if(n!==void 0){if(n.$$.count.value===0)return n.$$.ptr=t,n.$$.smartPtr=e,n.clone();var r=n.clone();return this.destructor(e),r}function i(){return this.isSmartPointer?$e(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):$e(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var a=Re[this.registeredClass.getActualType(t)];if(!a)return i.call(this);var o=this.isConst?a.constPointerType:a.pointerType,s=Ye(t,this.registeredClass,o.registeredClass);return s===null?i.call(this):this.isSmartPointer?$e(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:e}):$e(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}var tt=()=>{Object.assign(nt.prototype,{getPointee(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e},destructor(e){this.rawDestructor?.(e)},readValueFromPointer:P,fromWireType:et})};function nt(e,t,n,r,i,a,o,s,c,l,u){this.name=e,this.registeredClass=t,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=a,this.sharingPolicy=o,this.rawGetPointee=s,this.rawConstructor=c,this.rawShare=l,this.rawDestructor=u,!i&&t.baseClass===void 0?r?(this.toWireType=Ke,this.destructorFunction=null):(this.toWireType=Je,this.destructorFunction=null):this.toWireType=qe}var rt=(e,n,r)=>{t.hasOwnProperty(e)||fe(`Replacing nonexistent public symbol`),t[e].overloadTable!==void 0&&r!==void 0?t[e].overloadTable[r]=n:(t[e]=n,t[e].argCount=r)},it=e=>Dn.get(e),at=(e,t,n=!1)=>{e=L(e);function r(){return it(t)}var i=r();return typeof i!=`function`&&R(`unknown function pointer with signature ${e}: ${t}`),i};class ot extends Error{}var st=e=>{var t=hn(e),n=L(t);return _n(t),n},ct=(e,t)=>{var n=[],r={};function i(e){if(!r[e]&&!F[e]){if(ue[e]){ue[e].forEach(i);return}n.push(e),r[e]=!0}}throw t.forEach(i),new ot(`${e}: `+n.map(st).join([`, `]))},lt=(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{u=L(u),a=at(i,a),s&&=at(o,s),l&&=at(c,l),f=at(d,f);var p=He(u);ze(p,function(){ct(`Cannot construct ${u} due to unbound types`,[r])}),I([e,t,n],r?[r]:[],t=>{t=t[0];var n,i;r?(n=t.registeredClass,i=n.instancePrototype):i=Ie.prototype;var o=Le(u,function(...e){if(Object.getPrototypeOf(this)!==c)throw new he(`Use 'new' to construct ${u}`);if(d.constructor_body===void 0)throw new he(`${u} has no accessible constructor`);var t=d.constructor_body[e.length];if(t===void 0)throw new he(`Tried to invoke ctor of ${u} with invalid number of parameters (${e.length}) - expected (${Object.keys(d.constructor_body).toString()}) parameters instead!`);return t.apply(this,e)}),c=Object.create(i,{constructor:{value:o}});o.prototype=c;var d=new Ue(u,o,c,f,n,a,s,l);d.baseClass&&(d.baseClass.__derivedClasses??=[],d.baseClass.__derivedClasses.push(d));var m=new nt(u,d,!0,!1,!1),h=new nt(u+`*`,d,!1,!1,!1),g=new nt(u+` const*`,d,!1,!0,!1);return Re[e]={pointerType:h,constPointerType:g},rt(p,o),[m,h,g]})};function ut(e){for(var t=1;t<e.length;++t)if(e[t]!==null&&e[t].destructorFunction===void 0)return!0;return!1}function dt(e){for(var t=1;t<e.length;++t)if(e[t]!==null&&e[t].argStackAlloc)return!0;return!1}function ft(e,t,n,r,i,a){var o=t.length;o<2&&R(`argTypes array size mismatch! Must at least get return value and receiver (this) types!`);var s=t[1]!==null&&n!==null,c=ut(t),l=dt(t),u=l&&!a&&!c;l&&!u&&(c=!0);var d=!t[0].isVoid,f=o-2,p=Array(f),m=[],h=[];return Le(e,function(...e){h.length=0;var n;u&&(n=E());var a,o;try{m.length=s?2:1,m[0]=i,s&&(a=t[1].toWireType(h,this),m[1]=a);for(var l=0;l<f;++l){var g=t[l+2];p[l]=g.toWireType(u&&g.argStackAlloc?null:h,e[l]),m.push(p[l])}o=r(...m)}finally{u&&ne(n)}function _(e){if(c)ce(h);else for(var n=s?1:2;n<t.length;n++){var r=n===1?a:p[n-2];t[n].destructorFunction!==null&&t[n].destructorFunction(r)}if(d)return t[0].fromWireType(e)}return _(o)})}var pt=(e,t)=>{for(var n=[],r=0;r<e;r++)n.push(N[t+r*4>>2]);return n},mt=e=>{e=e.trim();let t=e.indexOf(`(`);return t===-1?e:e.slice(0,t)},ht=(e,t,n,r,i,a,o,s,c)=>{var l=pt(n,r);t=L(t),t=mt(t),a=at(i,a,s),I([],[e],e=>{e=e[0];var r=`${e.name}.${t}`;function i(){ct(`Cannot call ${r} due to unbound types`,l)}t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]);var c=e.registeredClass.constructor;return c[t]===void 0?(i.argCount=n-1,c[t]=i):(B(c,t,r),c[t].overloadTable[n-1]=i),I([],l,i=>{var l=ft(r,[i[0],null].concat(i.slice(1)),null,a,o,s);if(c[t].overloadTable===void 0?(l.argCount=n-1,c[t]=l):c[t].overloadTable[n-1]=l,e.registeredClass.__derivedClasses)for(let n of e.registeredClass.__derivedClasses)n.constructor.hasOwnProperty(t)||(n.constructor[t]=l);return[]}),[]})},gt=(e,t,n,r,i,a)=>{var o=pt(t,n);i=at(r,i),I([],[e],e=>{e=e[0];var n=`constructor ${e.name}`;if(e.registeredClass.constructor_body===void 0&&(e.registeredClass.constructor_body=[]),e.registeredClass.constructor_body[t-1]!==void 0)throw new he(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.registeredClass.constructor_body[t-1]=()=>{ct(`Cannot construct ${e.name} due to unbound types`,o)},I([],o,r=>(r.splice(1,0,null),e.registeredClass.constructor_body[t-1]=ft(n,r,null,i,a),[])),[]})},_t=(e,t,n,r,i,a,o,s,c,l)=>{var u=pt(n,r);t=L(t),t=mt(t),a=at(i,a,c),I([],[e],e=>{e=e[0];var r=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]),s&&e.registeredClass.pureVirtualFunctions.push(t);function i(){ct(`Cannot call ${r} due to unbound types`,u)}var l=e.registeredClass.instancePrototype,d=l[t];return d===void 0||d.overloadTable===void 0&&d.className!==e.name&&d.argCount===n-2?(i.argCount=n-2,i.className=e.name,l[t]=i):(B(l,t,r),l[t].overloadTable[n-2]=i),I([],u,i=>{var s=ft(r,i,e,a,o,c);return l[t].overloadTable===void 0?(s.argCount=n-2,l[t]=s):l[t].overloadTable[n-2]=s,[]}),[]})},vt=[],yt=[0,1,,1,null,1,!0,1,!1,1],bt=[],xt=e=>{if(e>9&&--yt[e+1]===0){var t=yt[e];yt[e]=void 0;var n=bt[e];n&&(bt[e]=void 0,n(t)),vt.push(e)}},St={toValue:e=>(e||R(`Cannot use deleted val. handle = ${e}`),yt[e]),toHandle:e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let t=vt.pop()||yt.length;return yt[t]=e,yt[t+1]=1,t}}}},Ct={name:`emscripten::val`,fromWireType:e=>{var t=St.toValue(e);return xt(e),t},toWireType:(e,t)=>St.toHandle(t),readValueFromPointer:P,destructorFunction:null},wt=e=>z(e,Ct),Tt,Et,Dt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(Tt[e>>2])};case 8:return function(e){return this.fromWireType(Et[e>>3])};default:throw TypeError(`invalid float width (${t}): ${e}`)}},Ot=(e,t,n)=>{t=L(t),z(e,{name:t,fromWireType:e=>e,toWireType:(e,t)=>t,readValueFromPointer:Dt(t,n),destructorFunction:null})},kt=(e,t,n,r,i)=>{t=L(t);let a=r===0,o=e=>e;if(a){var s=32-8*n;o=e=>e<<s>>>s,i=o(i)}z(e,{name:t,fromWireType:o,toWireType:(e,t)=>t,readValueFromPointer:Se(t,n,r!==0),destructorFunction:null})},At=(e,t,n)=>{var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];function i(e){var t=N[e>>2],n=N[e+4>>2];return new r(ee.buffer,n,t)}n=L(n),z(e,{name:n,fromWireType:i,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},jt=(e,t,n,r)=>{if(!(r>0))return 0;for(var i=n,a=n+r-1,o=0;o<e.length;++o){var s=e.codePointAt(o);if(s<=127){if(n>=a)break;t[n++]=s}else if(s<=2047){if(n+1>=a)break;t[n++]=192|s>>6,t[n++]=128|s&63}else if(s<=65535){if(n+2>=a)break;t[n++]=224|s>>12,t[n++]=128|s>>6&63,t[n++]=128|s&63}else{if(n+3>=a)break;t[n++]=240|s>>18,t[n++]=128|s>>12&63,t[n++]=128|s>>6&63,t[n++]=128|s&63,o++}}return t[n]=0,n-i},Mt=(e,t,n)=>jt(e,j,t,n),Nt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r<=127?t++:r<=2047?t+=2:r>=55296&&r<=57343?(t+=4,++n):t+=3}return t},Pt=(e,t)=>{t=L(t);var n=!0;z(e,{name:t,fromWireType(e){var t=N[e>>2],r=e+4,i;if(n)i=M(r,t,!0);else{i=``;for(var a=0;a<t;++a)i+=String.fromCharCode(j[r+a])}return _n(e),i},toWireType(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r,i=typeof t==`string`;i||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1||R(`Cannot pass non-string to std::string`),r=n&&i?Nt(t):t.length;var a=gn(4+r+1),o=a+4;if(N[a>>2]=r,i)if(n)Mt(t,o,r+1);else for(var s=0;s<r;++s){var c=t.charCodeAt(s);c>255&&(_n(a),R(`String has UTF-16 code units that do not fit in 8 bits`)),j[o+s]=c}else j.set(t,o);return e!==null&&e.push(_n,a),a},readValueFromPointer:P,destructorFunction(e){_n(e)}})},Ft=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,It=(e,t,n)=>{var r=e>>1,i=k(ve,r,t/2,n);if(i-r>16&&Ft)return Ft.decode(ve.subarray(r,i));for(var a=``,o=r;o<i;++o){var s=ve[o];a+=String.fromCharCode(s)}return a},Lt=(e,t,n=2147483647)=>{if(n<2)return 0;n-=2;for(var r=t,i=n<e.length*2?n/2:e.length,a=0;a<i;++a){var o=e.charCodeAt(a);_e[t>>1]=o,t+=2}return _e[t>>1]=0,t-r},Rt=e=>e.length*2,zt=(e,t,n)=>{for(var r=``,i=e>>2,a=0;!(a>=t/4);a++){var o=N[i+a];if(!o&&!n)break;r+=String.fromCodePoint(o)}return r},Bt=(e,t,n=2147483647)=>{if(n<4)return 0;for(var r=t,i=r+n-4,a=0;a<e.length;++a){var o=e.codePointAt(a);if(o>65535&&a++,ye[t>>2]=o,t+=4,t+4>i)break}return ye[t>>2]=0,t-r},Vt=e=>{for(var t=0,n=0;n<e.length;++n)e.codePointAt(n)>65535&&n++,t+=4;return t},Ht=(e,t,n)=>{n=L(n);var r,i,a;t===2?(r=It,i=Lt,a=Rt):(r=zt,i=Bt,a=Vt),z(e,{name:n,fromWireType:e=>{var n=N[e>>2],i=r(e+4,n*t,!0);return _n(e),i},toWireType:(e,r)=>{typeof r!=`string`&&R(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=gn(4+o+t);return N[s>>2]=o/t,i(r,s+4,o+t),e!==null&&e.push(_n,s),s},readValueFromPointer:P,destructorFunction(e){_n(e)}})},Ut=(e,t,n,r,i,a,o,s)=>{se[e]={name:L(t),rawConstructor:at(n,r),rawDestructor:at(i,a),valueSize:o,isTrivial:!!s,fields:[]}},Wt=(e,t,n,r,i,a,o,s,c,l)=>{se[e].fields.push({fieldName:L(t),getterReturnType:n,getter:at(r,i),getterContext:a,setterArgumentType:o,setter:at(s,c),setterContext:l})},Gt=(e,t)=>{t=L(t),z(e,{isVoid:!0,name:t,fromWireType:()=>{},toWireType:(e,t)=>{}})},Kt=()=>{},qt={},Jt=e=>{if(e instanceof w||e==`unwind`)return l;n(1,e)},Yt=()=>!0,Xt=e=>{l=e,Yt()||(c=!0),n(e,new w(e))},Zt=(e,t)=>{l=e,Xt(e)},Qt=()=>{if(!Yt())try{Zt(l)}catch(e){Jt(e)}},$t=e=>{if(!c)try{return e()}catch(e){Jt(e)}finally{Qt()}},en=()=>performance.now(),tn=(e,t)=>(qt[e]&&(clearTimeout(qt[e].id),delete qt[e]),t&&(qt[e]={id:setTimeout(()=>{delete qt[e],$t(()=>vn(e,en()))},t),timeout_ms:t}),0),nn=()=>2147483648,rn=(e,t)=>Math.ceil(e/t)*t,an=e=>{var t=(e-En.buffer.byteLength+65535)/65536|0;try{return En.grow(t),p(),1}catch{}},on=e=>{var t=j.length;e>>>=0;var n=nn();if(e>n)return!1;for(var r=1;r<=4;r*=2){var i=t*(1+.2/r);if(i=Math.min(i,e+100663296),an(Math.min(n,rn(Math.max(e,i),65536))))return!0}return!1},sn=e=>52,cn=9007199254740992,ln=-9007199254740992,un=e=>e<ln||e>cn?NaN:Number(e);function dn(e,t,n,r){return t=un(t),70}var fn=[null,[],[]],pn=(e,t)=>{var n=fn[e];!t||t===10?((e===1?a:o)(A(n)),n.length=0):n.push(t)},mn=(e,t,n,r)=>{for(var i=0,a=0;a<n;a++){var o=N[t>>2],s=N[t+4>>2];t+=8;for(var c=0;c<s;c++)pn(e,j[o+c]);i+=s}return N[r>>2]=i,0};Fe(),tt(),t.wasmBinary&&(s=t.wasmBinary),t.UTF8ToString=M,t.stringToUTF8=Mt,t.lengthBytesUTF8=Nt;var hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn;function On(e){hn=e.B,gn=t._malloc=e.C,_n=t._free=e.D,vn=e.F,yn=e.G,bn=e.H,xn=e.I,Sn=e.J,Cn=e.K,wn=e.L,En=e.z,Dn=e.E,Tn=e.M}var kn={t:ae,x:oe,g:me,i:Ce,l:we,o:lt,b:ht,n:gt,d:_t,y:wt,h:Ot,c:kt,a:At,k:Pt,f:Ht,j:Ut,e:Wt,m:Gt,w:Kt,p:tn,u:on,s:sn,q:dn,r:mn,v:Xt};async function An(){!c&&m()}var jn;return jn=await C(),await An(),t}function Ne(e){let t=new Uint8Array(170065),n=0,r=0,i=0,a=-1;for(let o=0,s=e.length;o<s;o++){let s=e.charCodeAt(o);if(s>127)continue;let c=ft[s];if(!(c<0))if(a<0)a=c;else{a+=c*91,r|=a<<i,i+=(a&8191)>88?13:14;do t[n++]=r,r>>>=8,i-=8;while(i>7);a=-1}}return a>=0&&(t[n++]=(r|a<<i)&255),t}function Pe(){return mt??=je(Ne(pt)),dt({wasmBinary:mt,locateFile:()=>``})}function Fe(){mt=void 0}function Ie(e,t){if(!Number.isInteger(e)||e<0||e>_t)throw Error(`${t} length ${e} is outside the WASM32-safe range`)}function Le(e){if(e.length===0)return new Uint8Array;if(e.length===1)return e[0];let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}var Re,B,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt=t((()=>{Re=ArrayBuffer,B=Uint8Array,ze=Uint16Array,Be=Int16Array,Ve=Int32Array,He=function(e,t,n){if(B.prototype.slice)return B.prototype.slice.call(e,t,n);(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new B(n-t);return r.set(e.subarray(t,n)),r},Ue=function(e,t,n,r){if(B.prototype.fill)return B.prototype.fill.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;++n)e[n]=t;return e},We=function(e,t,n,r){if(B.prototype.copyWithin)return B.prototype.copyWithin.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;)e[t++]=e[n++]},Ge=[`invalid zstd data`,`window size too large (>2046MB)`,`invalid block type`,`FSE accuracy too high`,`match distance too far back`,`unexpected EOF`],Ke=function(e,t,n){var r=Error(t||Ge[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Ke),!n)throw r;return r},qe=function(e,t,n){for(var r=0,i=0;r<n;++r)i|=e[t++]<<(r<<3);return i},Je=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Ye=function(e,t){var n=e[0]|e[1]<<8|e[2]<<16;if(n==3126568&&e[3]==253){var r=e[4],i=r>>5&1,a=r>>2&1,o=r&3,s=r>>6;r&8&&Ke(0);var c=6-i,l=o==3?4:o,u=qe(e,c,l);c+=l;var d=s?1<<s:i,f=qe(e,c,d)+(s==1&&256),p=f;if(!i){var m=1<<10+(e[5]>>3);p=m+(m>>3)*(e[5]&7)}p>2145386496&&Ke(1);var h=new B((t==1?f||p:t?0:p)+12);return h[0]=1,h[4]=4,h[8]=8,{b:c+d,y:0,l:0,d:u,w:t&&t!=1?t:h.subarray(12),e:p,o:new Ve(h.buffer,0,3),u:f,c:a,m:Math.min(131072,p)}}else if((n>>4|e[3]<<20)==25481893)return Je(e,4)+8;Ke(0)},Xe=function(e){for(var t=0;1<<t<=e;++t);return t-1},Ze=function(e,t,n){var r=(t<<3)+4,i=(e[t]&15)+5;i>n&&Ke(3);for(var a=1<<i,o=a,s=-1,c=-1,l=-1,u=a,d=new Re(512+(a<<2)),f=new Be(d,0,256),p=new ze(d,0,256),m=new ze(d,512,a),h=512+(a<<1),g=new B(d,h,a),_=new B(d,h+a);s<255&&o>0;){var v=Xe(o+1),y=r>>3,b=(1<<v+1)-1,x=(e[y]|e[y+1]<<8|e[y+2]<<16)>>(r&7)&b,S=(1<<v)-1,C=b-o-1,w=x&S;if(w<C?(r+=v,x=w):(r+=v+1,x>S&&(x-=C)),f[++s]=--x,x==-1?(o+=x,g[--u]=s):o-=x,!x)do{var ee=r>>3;c=(e[ee]|e[ee+1]<<8)>>(r&7)&3,r+=2,s+=c}while(c==3)}(s>255||o)&&Ke(0);for(var te=0,T=(a>>1)+(a>>3)+3,E=a-1,ne=0;ne<=s;++ne){var D=f[ne];if(D<1){p[ne]=-D;continue}for(l=0;l<D;++l){g[te]=ne;do te=te+T&E;while(te>=u)}}for(te&&Ke(0),l=0;l<a;++l){var O=p[g[l]]++;m[l]=(O<<(_[l]=i-Xe(O)))-a}return[r+7>>3,{b:i,s:g,n:_,t:m}]},Qe=function(e,t){var n=0,r=-1,i=new B(292),a=e[t],o=i.subarray(0,256),s=i.subarray(256,268),c=new ze(i.buffer,268);if(a<128){var l=Ze(e,t+1,6),u=l[0],d=l[1];t+=a;var f=u<<3,p=e[t];p||Ke(0);for(var m=0,h=0,g=d.b,_=g,v=(++t<<3)-8+Xe(p);v-=g,!(v<f);){var y=v>>3;if(m+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<g)-1,o[++r]=d.s[m],v-=_,v<f)break;y=v>>3,h+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<_)-1,o[++r]=d.s[h],g=d.n[m],m=d.t[m],_=d.n[h],h=d.t[h]}++r>255&&Ke(0)}else{for(r=a-127;n<r;n+=2){var b=e[++t];o[n]=b>>4,o[n+1]=b&15}++t}var x=0;for(n=0;n<r;++n){var S=o[n];S>11&&Ke(0),x+=S&&1<<S-1}var C=Xe(x)+1,w=1<<C,ee=w-x;for(ee&ee-1&&Ke(0),o[r++]=Xe(ee)+1,n=0;n<r;++n){var S=o[n];++s[o[n]=S&&C+1-S]}var te=new B(w<<1),T=te.subarray(0,w),E=te.subarray(w);for(c[C]=0,n=C;n>0;--n){var ne=c[n];Ue(E,n,ne,c[n-1]=ne+s[n]*(1<<C-n))}for(c[0]!=w&&Ke(0),n=0;n<r;++n){var D=o[n];if(D){var O=c[D];Ue(T,n,O,c[D]=O+(1<<C-D))}}return[t,{n:E,b:C,s:T}]},$e=Ze(new B([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],et=Ze(new B([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],tt=Ze(new B([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],nt=function(e,t){for(var n=e.length,r=new Ve(n),i=0;i<n;++i)r[i]=t,t+=1<<e[i];return r},rt=new B(new Ve([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),it=nt(rt,0),at=new B(new Ve([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),ot=nt(at,3),st=function(e,t,n){var r=e.length,i=t.length,a=e[r-1],o=(1<<n.b)-1,s=-n.b;a||Ke(0);for(var c=0,l=n.b,u=(r<<3)-8+Xe(a)-l,d=-1;u>s&&d<i;){var f=u>>3,p=(e[f]|e[f+1]<<8|e[f+2]<<16)>>(u&7);c=(c<<l|p)&o,t[++d]=n.s[c],u-=l=n.n[c]}(u!=s||d+1!=i)&&Ke(0)},ct=function(e,t,n){var r=6,i=t.length+3>>2,a=i<<1,o=i+a;st(e.subarray(r,r+=e[0]|e[1]<<8),t.subarray(0,i),n),st(e.subarray(r,r+=e[2]|e[3]<<8),t.subarray(i,a),n),st(e.subarray(r,r+=e[4]|e[5]<<8),t.subarray(a,o),n),st(e.subarray(r),t.subarray(o),n)},lt=function(e,t,n){var r,i=t.b,a=e[i],o=a>>1&3;t.l=a&1;var s=a>>3|e[i+1]<<5|e[i+2]<<13,c=(i+=3)+s;if(o==1)return i>=e.length?void 0:(t.b=i+1,n?(Ue(n,e[i],t.y,t.y+=s),n):Ue(new B(s),e[i]));if(!(c>e.length)){if(o==0)return t.b=c,n?(n.set(e.subarray(i,c),t.y),t.y+=s,n):He(e,i,c);if(o==2){var l=e[i],u=l&3,d=l>>2&3,f=l>>4,p=0,m=0;u<2?d&1?f|=e[++i]<<4|(d&2&&e[++i]<<12):f=l>>3:(m=d,d<2?(f|=(e[++i]&63)<<4,p=e[i]>>6|e[++i]<<2):d==2?(f|=e[++i]<<4|(e[++i]&3)<<12,p=e[i]>>2|e[++i]<<6):(f|=e[++i]<<4|(e[++i]&63)<<12,p=e[i]>>6|e[++i]<<2|e[++i]<<10)),++i;var h=n?n.subarray(t.y,t.y+t.m):new B(t.m),g=h.length-f;if(u==0)h.set(e.subarray(i,i+=f),g);else if(u==1)Ue(h,e[i++],g);else{var _=t.h;if(u==2){var v=Qe(e,i);p+=i-(i=v[0]),t.h=_=v[1]}else _||Ke(0);(m?ct:st)(e.subarray(i,i+=p),h.subarray(g),_)}var y=e[i++];if(y){y==255?y=(e[i++]|e[i++]<<8)+32512:y>127&&(y=y-128<<8|e[i++]);var b=e[i++];b&3&&Ke(0);for(var x=[et,tt,$e],S=2;S>-1;--S){var C=b>>(S<<1)+2&3;if(C==1){var w=new B([0,0,e[i++]]);x[S]={s:w.subarray(2,3),n:w.subarray(0,1),t:new ze(w.buffer,0,1),b:0}}else C==2?(r=Ze(e,i,9-(S&1)),i=r[0],x[S]=r[1]):C==3&&(t.t||Ke(0),x[S]=t.t[S])}var ee=t.t=x,te=ee[0],T=ee[1],E=ee[2],ne=e[c-1];ne||Ke(0);var D=(c<<3)-8+Xe(ne)-E.b,O=D>>3,k=0,A=(e[O]|e[O+1]<<8)>>(D&7)&(1<<E.b)-1;O=(D-=T.b)>>3;var j=(e[O]|e[O+1]<<8)>>(D&7)&(1<<T.b)-1;O=(D-=te.b)>>3;var M=(e[O]|e[O+1]<<8)>>(D&7)&(1<<te.b)-1;for(++y;--y;){var N=E.s[A],re=E.n[A],ie=te.s[M],ae=te.n[M],oe=T.s[j],se=T.n[j];O=(D-=oe)>>3;var ce=1<<oe,P=ce+((e[O]|e[O+1]<<8|e[O+2]<<16|e[O+3]<<24)>>>(D&7)&ce-1);O=(D-=at[ie])>>3;var le=ot[ie]+((e[O]|e[O+1]<<8|e[O+2]<<16)>>(D&7)&(1<<at[ie])-1);O=(D-=rt[N])>>3;var F=it[N]+((e[O]|e[O+1]<<8|e[O+2]<<16)>>(D&7)&(1<<rt[N])-1);if(O=(D-=re)>>3,A=E.t[A]+((e[O]|e[O+1]<<8)>>(D&7)&(1<<re)-1),O=(D-=ae)>>3,M=te.t[M]+((e[O]|e[O+1]<<8)>>(D&7)&(1<<ae)-1),O=(D-=se)>>3,j=T.t[j]+((e[O]|e[O+1]<<8)>>(D&7)&(1<<se)-1),P>3)t.o[2]=t.o[1],t.o[1]=t.o[0],t.o[0]=P-=3;else{var ue=P-(F!=0);ue?(P=ue==3?t.o[0]-1:t.o[ue],ue>1&&(t.o[2]=t.o[1]),t.o[1]=t.o[0],t.o[0]=P):P=t.o[0]}for(var S=0;S<F;++S)h[k+S]=h[g+S];k+=F,g+=F;var de=k-P;if(de<0){var fe=-de,I=t.e+de;fe>le&&(fe=le);for(var S=0;S<fe;++S)h[k+S]=t.w[I+S];k+=fe,le-=fe,de=0}for(var S=0;S<le;++S)h[k+S]=h[de+S];k+=le}if(k!=g)for(;g<h.length;)h[k++]=h[g++];else k=h.length;n?t.y+=k:h=He(h,0,k)}else if(n){if(t.y+=f,g)for(var S=0;S<f;++S)h[S]=h[g+S]}else g&&(h=He(h,g));return t.b=c,h}Ke(2)}},ut=function(e,t){if(e.length==1)return e[0];for(var n=new B(t),r=0,i=0;r<e.length;++r){var a=e[r];n.set(a,i),i+=a.length}return n},dt=Me,ft=new Int8Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,90,63,64,65,66,-1,67,68,69,70,71,-1,72,73,52,53,54,55,56,57,58,59,60,61,74,75,76,77,78,79,80,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,81,-1,82,83,84,85,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,86,87,88,89,-1]),pt='v7#a#AUMS?4}raR[&M`)5x"o`R!z3J/ys[8,}E9~a{J*qKM@+TeExF17)CDAGO9y50!}vD%b^ji:c6J6s]7&u~?`UxkB8T?/m+9LqjT_zOKB<n1h,0^F_2=I|Q$YZ0ys^j$>3MBH+*SH9S]{G+K6a{JVW,F5+_O;Fk]Ot2"QSC%1e]xfp*WH2C$LW7!calC8JrXE$cI9U9$S87xIOlPuUX]mJ+^PCR:Yl@`v8E3m1:FB#:2%Fk^tl(wIW=G]m(5F9XjR8D1O{Po[F(rk,}O.ay:RED@6ly`+W=7{cl`Y,&.VC$"Ph&p0P?f@wqo6D>T%r}p,nahMrW$</]6.>&x>Z&@#*Kb_?qqN5e+Z5|&xX~W`A1q#0*15o)k[<mr+aN^RCk7W/kmg6,KH4nZ7M9M#g]io2BBS7Kn0Op>T>7aob_8#9O$%q^oe5SUlI}W_iFeb41o6`}QStQ&Z|)t+.jf![v"zeT+tN]oG73S%KaC;SEkR?i)l[_2]:crkXc`KHx|.yyvB~&X|A|^Z/1Y^{~tcfgIpe}&E.X*rN;Cz7J2av0G#+CGbh{K9R,oP,m%ySIz4l^+LMO7.L;U29QU9&iX,vfY2*DyVQzsr0#I5*zsr,#ZqZ71y<I5R<Ia8Eg]ODspMZe/g?lCs2E$Y3STe2vD7@5VMv:3<][0%Y2/_J!TlI{Xr1]_y/Gcuu@o"e#g8#=Q>0i3&[ZwVo}u6~$%7IbPM?P9aYiflPH!x+KWB{3i@JTV%%LQ1Z38XBF,=$o6[2cD2jC{XM@;[clW&"^&6]cF!om@jevOgHlAOlRzqr,$E9dqcK|V)r,o&.h<9Zcyg~.`J9|~bYe#|,ZB&1L9d`{y.AncB6UT1&nSdV?[3j9m.^a^de8apzgLow"UXT;bUXRiCm5{9lbORfv/p7P(j;cn.fK*@"OioE3v[GLS%NlF$U<o+Uv<=d]x=s=[5Rb2ghT=>Lo9PMRhk};`^@pH$pb_:X+LL$wll.G(Nr6Ae4<"AH9W1+@8Fl0=q<!,?/Ndb43E)sQbQp#O83tN4yt1%#XBZAR}<v*E+H1O11jg"9Qgfr<~LBj^Y40dl&X#qB8G~/I+I0^M7g$Zg=_%341NI$*7leu__}]VHBw!!sm=2$%AiQeX9Ant3NQAY.UAIk{RGXGlG<yJ*Hxh{|Bdl`!nHOTYt,&/&+5[o1R0eAsPwj{@{wK+*H:2T~oOfIlwO7;SDlBJtT?wK%@BjWbLmIY(j=+i*XB$&/Z]Z_M|Qn0afwvpcC50d^0=jHw}{Z{DW71goadrtl}IU5vLZ.Ul5s)lU.Hg/ZfnX"naS+.:#E`7V:7mP"7~t~A.OJLbQ}`>hAxp63/b7@x"}E76Iy7#5=7k?E()89XyJ]Nw}33{G6?SV}NpXcS<MiLILR`!yqC](33$x^<v9zh{B=SclIFcbaT(<1!{!??OP+gk7F~^s2&+&#e#x7Sx7y97v.Da/qgsw>U)E"<)ER!uJ3.fl<Y~$RR?CyYzzNxpz64!QVuE/`Y%eLwmwn^rk3o_gV;xf=#.{dG=}lJ|aR)P%;sAR5WwsACJWv(N;zFMm8:IkEf!f=3`[<_>oy+mUi4qVLU6I&J>L)q{*Lm}i?%G[ip`:FYqG[x)1"niTb%!J"n&^)m_Y55|xxT(<vin6N67wXndJ|ysh6@z.jvn_W]5Y7V:HLT^>,)xUf{g1AiUm/=Hyg6dIByO1!ELVqD+{(i%MMHKYG5%Fa7$Ezc~I>dsBH5%FwG0(]6`3zy@HY0U,p7u6Jz<V@)Wc^vJDV9;,FX,+.bEEh?m=4Y0WvGmA{e"A)w$lM8GR`nl}n`=7Ri.vajvjT,Udedo;Y7a2cPR:InwwX<;xqaZX6J=rW2eh_m~*sUKr_!:XAndj$3j%i8If:/)Q4Z&{*g]0{ix<wc&.I^LNu7(y]2Bw^#bU2Tao|a}VZO|Ubk7W(q20%.Mm#f;4Q]2o_gdHS~{lf6/cWz7WIG7%?ANV_:(/m+,9cju^/mUN*y]_6_qJ^{{e6fr^GT][|n6>/ixUc_N6VMprz}3S}JcTg}f=P#z6s&G4f7>ZF%fg;>O79cX:.Ya/VR^^[{^%BGw(!>iFy8#lXX5s_@1Z~g`7CK5p9d9_f7aPz{;@DTJ=|r=u(DT~Ea3moqNLlQFw(4<<EBR7Pkh@:8Zsad,l.*t3?:l#mVH8r@rkqHG#_g:@ioPf#MFk`n_^P|wE*{!N{VS~k{5;VRcT,^hUcFll&{NeRJt^F6!QPer^TyAp2}b@eGEb#gGpjTZ:Rs}8E=#pvSD}W1twSJI}}Rf,rEJ:B*wMHb==zwWsZ9)5/I/Lt}:8|Oo*p,4>K8L:asH#n3y3o!s?92TWL(Mx@0Zv]8{.Py$:K2k(7H5jh1/==@@#!G={K|jhC;T_K|!g,^C~F29Q{Hco){dIS~P&WGp7pp2:mIb59fJlw<<CS~Gt1%[0l(*V!:D3eq$|BVg;0aCf~uUl*(,QC1D}>Myg6lE{^KprY;?(,@7#3Yacve$l]WW&!&2B!/EUI29ju0~fvtW^K9x^sQ5&`Sns:]9^W.:In7r(a?el}BpeX:^1_SM_D9ZTL$v%Pv({"HyzHXH&ux##8|06>X;m~jxl/2NIf*y4l(.M0^HUHNd8a}/kDL7py45,wl+Pci1kFP=Wq$_|&gU$tIUJz4J|LoR)?cd_F8alt+j6aZ8E.Xpcjkj~cm_jz4mIXXq59#q3S%q6!|tamgyF7>M$/RAXX:TuMot}<O&@w+V$wgRH#j{1c=i1WbH.92e,2gc0Zr_7$0c;9$?!;s+Pg_r2Fgs[3mI}w,naf!Pw_^FUm7(ad`aWMIgJPYC[3j`tZ^6@(chCP]d:6SRP=cf~LuEpF`;pf9Q;c=v&il_V{muo_^8#gV"g!{`ouL5ac{_{FUJi2cq^IlZ|@X/cf@9z=c,+NY!,m(8Qj.E|S[4}YZjRv~%|B#)e/9u1faE|faU|*@"Ly0R|;fhP#{=kFPKtw?`s3g7Qv,p6</d9wKCkxH{4G$!G{p^qZ:DuP(NrYslHLe7:1KY>0hK.*t<}kWWsaKky]}wyD%,CprV<:+$>:^><||wk*Eg>IXoP6]GL<]NGfTW/PzN7J?om,kV*E~e#J5,GN{c/[v:ft/?vzU7k]XaLXll54[7f(__?<VEr"6eF5Sc?{H9r"$n;8rk&xNqU7kv)Obe|ei<Pe|ZB;W!HXlq)Ob[Vedl5;V;WU/:u:f4_}D_3PFXlR*ng&</_~wS2._32RJy/awoaR=qC7r`Z5`:V}M3^]KJKM@ku?$;TI?jQ9f;_OBg^h|z,5`_K5Ku:3v?$g|?zme!r!U"6KF6#k?0N!r&."6~E5Sj?%{9rC."6=E6#h?C(:VLm"6qxcJ._gr=V=TW+jCtTW+fC>gM@Dv3EXl@(Cxw=]>t*ubZ|P;u:Mw:f,_^i=VGlu:Gwd2+_K=<V+l"69E6#f?;Y?V%k"6xE5Se?ST?V8j"6lE6#c?;Yj#t?Hkj#A5"Fdw1J~bjIXlzXGHGobXKLF1~*)$R?evi#V?,0ig`>nB!L5`o.&Tyn;tpG;(3;_35Hwe9J?J1_jaIb*T}4TCzMM@7*v.![;4avKftn@t)FNOzfS9!k=4hC!LyOc.t5ig">:uAKbtl5sP,job[>S)BEug:]9fynEu7IKWUs`EvnHu7I`*}Y+$G)hEBSr3`Ewn4)5EnlQg#<xni55CGT}_qy4J9=n;[28nVu@JUsFxk==k|4:v@K[r?zk=p/[X4F7W%/t5jgq/nu=KK{~*,$S)yF:s(XTQznouyLLD3e,TX){F~vya]2N?FDxS)IFkS25nW*DIuT9JQ+3K_>ZD5a,jz9gy6k<?TC/SZd@2O?PDebk.x9m#94iZ[GpJ?{,Te)3G31i:$<g/#B0Z`Z$m1nV*{HOT]i}e~>J5JEa9nst)hpR)mYaa"]yueFA&CT,hQV{ioQKfJtc^{u+%l!a?:%GevFS:aB|^G<6_EF60U~m_[P>M:GOw8KtMkgJ#_SP]atL:G#P28(s"JU[YMX{^3`n%$!u8SK8@%=K477HSypOnA60pAPN>AevCn>Ea|{C@|i!*$l}[.uu#nsS>|g,je$W$C9=wnF)q&%@#gCpG%S]ZD*$6*{#Bn;d*C<=GQ],&sOEa?5maFl3GM9hpoeeo/Z}StO{euq0IaRM@ASIh,}<Wy7tADHIy3m"1:1@lQnQU2<OW$jQ^SUw3+gK^niF9kb*e*2)ZpLD^XSiVS=buqy]/oys.z>aI$B.narKmj932*mL%fhWJi35usz:%jy,Qc2Y}R)F?6H!of9mp]zSWB[:3_yNng%%C~<}E5ihe.UV(DyBo]x^5<zj^^=eUAF+Lk$mT/$H5S9Y/m_"h.j1k|t9_"hw*5r*$lW>eGe;RnP;3)D>ehd8OlhH>4c>G%9~*kD>eCqw?"(e<(rtIFg8y3rtILZ~FpBnP0M)F%9Ag0F%9=p.Klh*0<e%9d57vaCa.f55H,_s09IOZ(i&+ZjzK`w5Hn<wigAv+v1VA0XgRcy959MgxD1QfgA=k2K(![DyWTJ4fjK,![Dh5x#eM7Z1H{#,%tMTPA&jeF*Z!9IOZs5E39IOZ!#R</YYPHtbRC&_V]97H/W@X>Moz?3.gT4Z_g%Y=w,.2&^@Bnf/TBbH.B>K(p?/?/iC>q7(oBqtz],5TK@YNKa_#|R{nze:Z>Ma9,K!j%;)_Aqcs,2H_^%C`D#8nMbwkL(+F/CsZl>p_Pku5P50#U]oya7%y)C0Yw~uwH9+(k%qb(x[0`{RS@8]iKL/zeYXV4]^?{a!dy=kpS+)ewg:(!U:Eo=b_vfvJ26E=@{~=C9R}os.J3(bHw(>kJG__wX2lcBGgf0WBG@R@WU.]j9^OpegTHAx=KTitg(Ll@a$5?uDLPBbyfbe+_;~XIbO<UEd>NHZcN6b];nUhP;flP.h>y:6SZK:hduYpnf[#b]f(e2oviz6kQ%A>L2q^U~{ei6Yg@Guza7owDhvb~;B>dC@#5:b*]YyfVp)B7(!#fd*H!d7,b%()IpHg]n=2Mz3pUtW~IMvfMo=}MCr18k`hIpfVOF>E+{2t]B61b;8f"ZvfL]ukb6kf=+r]aUB7=PF{ANG)3&*k0vaw0!"[^%DgZM!pQCvp"|7648D942M{NeQeszAVP;@j.ZaUc<J1:h2Z%Lpg({]QlsmHOa`Q)e?y)kz"F4>5HhUeI#&B+S~12Gsr}NXr:ZCWeky*/Y{e_bbpV}R%7fZ?a,*+GE$=qpLw~ne{PZ7g~u]3uKpxA>#nf9;{q]Pxg]uw=M@aiztuD10d?kSt#v&fWVc?DPg{1.+KK?9ccda3RCD<"r0@}oyLgc[$y@O<x5JkT^=n"gLhQeMkC86ov*)N#}xfay_L$1S[O{S[I$oV!aO$Q:fYObw=Y:AZIj9v"X2>0}<^dTH6ib1c;@;~xgDrP44VW%X1Ir"Qg9F|#cwN|[H%&e9#Hgnx9`g,lzf@FU]yQ$ej#`A&uxUSZQX*Trg]2>[;HSbYo?r]b1cp[XE;z;DST50.4U)pUW~OB2ks@3Y^c6ujs:,0pNkpe%r!W@dB)O+KwrHjOzc=tQM:Ab!;A&5:D.ddj{G2PemSCbv0gD.H`:Jw]S75)]4|xf4c=ME]0NgxqN";gkr*aCyhhDigK;t=jZEK)t*R@C,NnB=4nw%/?BRI~LA{*I(W?Xqn>&9J9v<:26:%M)Ep/kjz_e&(Gt8}9Z?D"%)_8;?S5m{qe"RCZK^5hZ#{k.@j2sPb"81+~B*i$yal+s_g<Yj$sEbdTSf8ao8j2gbl/2<ckG_U_R%W>|~IjC>l;IC8b]ebLkxoJkV8q2SJ.@TIOlA;ttRsw7B;LzVjTv{CpC1XD}jdB8L:}WAR<z_8*P>dr!j*YmZ.B8fwB8*Pr29nAe[0*IRsHGeIq7)S1imli}>MYZ26$SX55R>+}T1EM:W^)wfK%k26$SKXD}YO#iIZZGLo7:26BsOxdHaT8SCXW0q4/BrO|WwDWc*R[z3nMM,xmGuc>tFHH3}<E8aoBztS0BLw8u1Bsq1%@lZ<Dpro8Xl(=L1C&4F@a~4:(hyrguQ#Pu]7C":l];%f0`nLi1L50#@On5uc1#J(3Q(E~gFCk(QM1#x7QS^<U8wqedtePozbS@]Y8e9]oS[!ZLg{0#XypH[wh7l"le1RZHufk]kf:^_dVsg0z7ygUVE_3j{K)]Xyt}#v*?z;bdPVX3s0M6"P>hMN:@YLvEnQixTgTkse$/c8n:Kewh{A[Byi0(h.TvB)TrRpP</gqMPeBFuIxE`m)snfTqP$$7Na+33(eqd{x07H!w7H.&m?cm+gPW3ypfZjo/8n|SX:qwvxirPh$etSy].<`S87jdV9;[.<mpN,*?}7T~J7kfUVtt+ctmN5GU(}=BvO90]r{b4Tzetv4E5r2f?hGPV,eT8Ed,E2FH<gOtJ5gXW<O{qJV9sV9;<cDB@Qj7=9muz:4R#i/u}<pNYB?Uz_&:<ODF<gL}rpQ(^C!K7x$;U$@l3Jc7"Zf^$,=xf2%;7O!5lF~;as}]WY3VrPG=(nKDnXl@`P=h]g"pO7XZ]mGR7:j{/7=D=4ljARLl4R3X(5VDgX:%>h&;g4>c}mWec4<fwf@C<gc4|O#E@Ql9nS*q)MQ1Dbhq^#Hg8fuN/Mg]Ph"8JtMN&uveDS6;jy.RCbuH/c2vsx@<z~0SV&.)R+/)%:S"&g%$3%o8HGteStnHtEs&^ws%igJkX(%qvh{A^O5;rke?U]9a/!$>y+iD1%m/2;T>/RY>CH:lvy+iXvU7R`Z7og7),:m7EYeaZs.T{#d2>Oq7isuL6K0~+IW2]B,Si_mQfoUt2;GSHP|yZvjYAWV@Ljc65:aIRcLo"1D#0v#Yb:uf@*!b/R.#gpDlH;O@Xv>**8p>(I/}V@Q:Vj?7ZJg0<+36D]5`:VIkUV@g.2<zPUw5Imj[yndYw``;ESv8T_WJCPFoQe^aWh:~dH@7dgPM^<Y_$,TI8EC`[dm7d9awWI%p]lZR9XjRF;65g|ZE3mwS4<$na@&.Nrc@p`1;[3$%_YC>{lb6`sk9s?_Wr5)0N8Wm{O~)WO;#:?b]xfqw:7+5<<a<QUl%mmh&fhx<cyb{t4e3^4%>!Cw5@WZ^B_mJdc!hm%^`aKE;c<1JuR|EKd*B)mGw^#dC!9a.O~R,PqduH.]/H(]Q"E(&:{ct[UU,3XfcmjQI3avk?D;qgu~{(ofaG%eAd&ekH#y2$;WtM=E1Z2&5"^gO!.)SJzqrMH!MEhzxxi=|z+4Y=#0)jWy)/E|Q3T`mL{FoAgm%vB@NSB?UQ#O1hP@jF`o/WFW00Gg]e26;?(!>6f$t*$z%01a.i6f#sEXP(!%(hZ{/&vSuH,UBnNpF@nPu?&,8Uk62iXe8aUn!u1~MpTCDjiI;fM=*xLE(%PR9_H}Wmlbd|0]o!n*V]mTg6,#+Ac3}(@iwECENQy+GVvx_.ak58Cd5?CGB#[)JBQ&{.%tr#*PtmU?hwimSk0/gq/fXiqAT5xGX!`WFH"[YG#aMZsWZ7bB)V%cL;Nekf6;6QtZxpY1x;5T@WB7}3hP;{Q*7A[!m(dl+eXbQYO!1#<6ONe_GYbRFynAgIlH[pXbQA:Gd[/qKlf9z^DRP5:5,Wdb7f=j#.Xq5j.{[|<x_)zJ]Hvn/OsC+t07[=AVU(j|!IY3ylGjWU:S5J|+PP5a7cbSBQ?6WMorP%kAiPlD#8G*h%%`oCg{EtM+]!EmV;WfL!ff1TuNJ8UtK,l$w`h@<T^[qi>~KFre$w)HUd%d."tJA"%@L5;IsG"87Ru.g9^j$FY~<NKi2NIO0tCC!hba9]gd8laS<9,7x5:PgPor<F5;cL)+(*&.BVV&cz3K~(,vx3~w%#V9#O%*g43!KAgr"uxO)Rt!dhZRy,Fn0b$sAvSbQ#dtD:Gi7+=#n<OezknX`%@{OTqSnl$:.>lD0M6sveP!e9;Wdh#[Rk(5Sd!e=S<Z<<3]Q9nOd$EN>PWJ)*pAKzBT.$k?GS!6[dp%`G5^=L]}s"U4)#&g53h+*^Jv$c!0p_FxvV^ifvt5tRszEHskQ<v2wZ(wj^#][N5F=!:l0%6s1D;TB@W;O^<w#>_ddpI=$o:A@,C=$t3lC7c@;r]X#P#]*0a*SUlB`tTaTy?gf3%eYt__#(eLw^#bUo>(t>V<Naodtb21{<:yCOY9K~`!!CtBX^%O`jY_pm5K_`]Aq~6b:0${]:3c_o!Yh2pW^}g>MNQipcNx]`%Y3o9pcTTc[|fir9;LZH)</Q_(ekry&B>c_nGyj}A=WM6v$wRmoLg%<g>.ra+`!p%{0_[5pJ:ZY[Md8*ZA{~/}5Kp,yL.,=P:LTP:*;"p!=kKhKPQ1OIT=*ikbQg[dzqry&:TV]5{Fv~^16,fT,:Rap/g;onn(+Fk8v058$k08Z>#aTt6n^l!<7V=1]U|},qQT.&xH8?NT$rkr^t%`{#N{V#&)Vjl!z?_u3W3<3zoG>B_vFel?YDeD&*on}R{97n^=9e14H5eJq@H(S=64>:+NP^Eu.9xi5#JUJ"2U,@loq^1}GnEMd>5Q.gM*wXFy:3$qzvJ91UJ<]!pUm2g&GX8Hyf6&e*llM11FL~DML}`4^@Hz>C2b$BCm94zD>qNseysNZ>|:/bZ&{;k/7G#xdh{mH47/52cPQ.gIG":a9u1nQ+*t}mI1X(@exp,O|8#]482C~M71%[0$(@I/E/,JNblw.43^[4pe1my3tWRfv+i$iVpVuWRLN1]lE(DMZf]_[u~sW^R:g=j=Izm@j@<9uI;5f}I9QN8#=b_2&9d%A46@+Esy2lHC_|IE(QrTC,h#d^/kzg!u1n1nB5=94MLQzasZ&I56=={z]$T[+br0h}0+~:Fm;(Ycb%AH9Z.<a_{&vTrgkYx#/Au<,Qe35A2d^$>cl>sSMCpf=d|>_RTKkm{An$>7;c:*KV}R|y0<w]@Xx2$)&*eWl)5f?k]Nl,:#yvim#;H*4%$gfaC?/<m;y=O<.?$l*<E3q/w!JT`1HiT26b:%Z/w%21.Yn>M1&3wVH+7fxqL1wAOi][<3z(g@k.$KTyfgKFwvq//rzS(#>D>QC>|0=k@#Zq%tV7;a;D6?_#GuZ*N.&%:)K&Z85fO&kt;<62/xxh%o2M{Vp!.C/!*2T>t/FGY,5Nb<10OL5g7Alx/"o85uqg8Al!ZC8mY5Jz1<}P]ryTIyZ&w[5A15%$8UiCzQog.hKHhC8*x4wIU|+9z+5eO]/Q0mZCMWERen%18q>0=:GCN|pTT4ZkV.mCS#Roi=diQ+MswJf343lB,(}c%}Tv}~[U_X}Auv{DuS!g;>CxL52jyNm>4^dOShRHX!.3a7!<gk&]kfC!%h{*I{NxCxLU1d>Loewb05pd6Y!n06=;:c1faS93]fMi,vyGFjKV;xevg"f&qYIt8D(f<+=@3{MrK&%J]F~nlK4^Lz_cX8RT2_fk*>g6H,E;evSt6.(f8zr9cz92q#I:b]/qG:>utE&ii/LfY+_fxTww<bOR8p$CMjY&l0Sb2h,FNqO{ZdX@+`dhx.[JX74Q5E.Oo!OIa7aAN1@ffMrd{t0"2v?9c6t~$XJnJAZO?|2P^rU5U1$Duz/vHF+m$b5J%X29%ZY8z}ka7G!9jFP`N*^EV]I}yi..dzTg1*}BskQbs"Qly0hc4V2*U1w7Ju]%QEr55p)=&XaPNDCN#*8y4Z(eYP!ly^5px6K/]v,#yD9J?//XxbD%Y=L3+02vZ^a[${.H{S+RZ$fHJE3J@$s1{dJ2.4o"8AS^CA1[a*epq[I1O=fmRApg16ab0_5L%&>F_wa%Z@Z.*:H_dxCln+O~LcymRV?,H`:JwVhK;sg,y*LB5;4)uw2Lpy4H&TYkzkO~`EM_7&yC3ShnPozTNRa.!k>b@]e[u=f?:9XeQnc.;d.02vM/gX5r+r#m+],}@tH/Y8eP&sg(+Roa,do&oBz0%:af9jQ(9ML$c!%V+6Q{4SkZPnqky@zD5^a!?Dj16bVPk,EuNl@z0zGb,pj5U@yYi}OlS`6>7<tL0D#}p/Sm`HaNk1VZ{UZ9&)`3j>g&d:U3XW@Y7|ns;}(i;kN4+&7i@$Nhcg5ZXtb:U?1hRp%Xzbu)}]Yn9sHmx:;x&{l)vn0+_+=`!sxuqh`b]+};^)v}UA>q~}y+,z@()t+)v8o^;WEF5k2hsE#^oyLDKxe7:aOX8D(2g{K].Ke~dvVApEZY%L@BNS#0D,XtYhy%$Y3w%2/**e`0q;wO[}`)yv4!v!UmX"AHj!/VVH`HZdzVe?=DrSohq}g/xCyZvZ[k]i5XZ!=z*G<!MrW9ROflu<OS_"WiQfs:OxU2Nj,1RkEuQ0y3w2dtL{p1Np=|RkE5j;XG6S2gbF{0<)SEkITqJOuo:QX2<@vd2`[A_FK6h"f6||,lPlSgp78tH6p$G`7ZeR?x%kcB&U@zrs3Ml9w%;sykSR+=O+raer$CSxHS5qS7%,cWh/gtbxNU/?(5%Y[4>XyskMFDSvrn7ll)w^#g]9bBJ4dPV3XrB!d1#sqVf:HFEVvB_&We#N{d%a/>]7ScdH|nlD2v"aKUD_^syKlFXz+}70w/^QJ]+Ctp59<RSqt^J1y%R>[GSYb!IMil9fGkH]Z!05L6,9s{d;#GvJKbQM$D$aCSFeM9ylQT.dQb$A$IVCZnmL`W13a[+Tb|q0hb=bF|>5$$>vOo{J|y+=|AW::~M_^u$fU^G/kolX}|pf3OF"&j?O)`TS!xbL{3]$}GoxM[n3^tv>X3Vb33)D_Aq:"6B{:iFG9}T1}:zdHmVMo^^Yhb2Np[_jv02R1_Swo_QOym"R=REn:&vH4Z}i[d(GpMaI;L.o{5wkVENz!K8Ae,[9S>#,Z8?6Gb@#zK3As=6Gm/O4eU1G)(v>K3S^SCkoS#JI&#5ea3=I?^_s8^0SFt0NKQx~d*7lf&V@Fue>x@2N8I;4C{^57`[;ak7)26w9~j7og0L65j.4;cKz+5Uw1Tu?Rb{ngy5&_zH3|4JV<6(^DtJ:upmz9g~|iGjc42JZcJO.!Bi7Q2>=3}OZcm?,?hNGNTg[h4<H):k8A<?s]OpnE!bZ.!pe%:o:5W5hZ{n8LE1t65$MAtPB;0;>6~YB>{iKE<*s<`wWSbdkN!Gp<5m0rZ9QvkLgSgRj[I)BJg`Ul~F3_.]OP!exg#M#{OR3ELFMg[iSr+5XSZB:byvS4vVPX}txHTGrS.uO1JaC5D#[B~<)OSk8xCMy4K/5(W$lC=%Dg(.FA]T#+b{7_IqoTx84.(@EqdLy4uI#j%afM5&/F4>D5PKC4ApgXziV6Bt.Or0O^/YJV<hr<e)9,,F<rmZUEZ4%(c+s8*OYw)&=Vh+fD0WV=ETy4$C(niA2XDzdHtu]ZY"SYtHCt(53##*&1xjl9%pFM;bA|oONHiZ]N@a*qU7]O,~vKgg"7oziZR3qJjt;RwvK1kG>+t;WMG>~e.0wHsZf7eqAy^V}UjUV(7G%?Cins1.OE92iT(=3jal^^2wN!_l3QphD1j&C`^Qm]]!pJprJw>R&B>y_dKa"hF85^8w_&_.AioJgo4EnF#jDP8lD`^J@0nA:OKP@Hu0bmWyr5p*=A>H;O&,R5HG=7`&_#jtqXi4W@I@xr$>jDLbWm1}mo@Z"/F5](P#?C>]#vYM,b`9#Z9e1vB2n?1SD.1=O:7$a}n0/}Q[I%CiR5S19?j>(6/5#[$K=sC2UlFPZZN$M@.2*zV8Tz2rF(W/DlOeUS?O30E][NuS2>j+U,<)]1h7E?Z:iYc>>)~j!#65~OwzOWAu<:26pHgxC4}k;lBO*s;2|n(2tEYa6Hv&xc5g5_K.;3txSuJ"c;i!;RalW#^fETZ<,dm9j*NmtxgPmQsbSy*2]6ASZal.jFV1L?twUH4TW7"dEpygMu7)a|gYGU7M%*qRqSyrA!/}I_erqvv`O:8V[b3??K,g$MqLOuEs~RYpBk$+3)vV.cZMU1kp|OBLXaJz.NV=sc"fni7i+Ff]?z#Y{Xa`B?xz5:JCw?C1NagY|f1,,YpzD]C.z9s|xgH.Fn1Fy*S6k5(NSeq<XavVK]N|}P@;)aN29`<RfouhE3I6[&_L[Cu6jYjQa5oL6;>OLV^V}eQXPaD]r<4pvMQ:PoaGF6H^bV)|JJdNvx`6#zd{YS%3p@]6Ege]{5+@a;y/?n1aAJ`{CO7Z+:LM~cV{G26`628**`"2J>BMH.WGM3m$u)S.E4r@MSw[J{DH!rEsBkc{N%_&A2_77|xfYo;(=sS8[v;9ux7QPxl*+NQM3Vb6[Z+ZR?FgDGq95RBs&G`LGzw%]oS8f[>?:N2vZ&y.bh`?Z146cR7qoqW29o(]}1<;IAs!=r[*)Z+3r.jSh{AL(&"!K6a:8Ln?Poc?$_1npzBNHFC1Kf=w[)lHLeV7cR}n?;?LuNSAS,,gSq932``~C27Kr<JbZC+#|K~n>O:tuf49%|CK]OU]"ouLS1<D1bBJM_bTHl$]EI@HoFjb^x<5Y<CB*s#vuWs*:Xo?gzf@HU83+):]c=~@_z:m7+ye)19#nJPAPM"8b]4r6f.mYuAS"{=/`5Y<c%.^B.lX:|0]0H|>jK+Me5"fT%qcajuoD{C^OUP]xLQ05j|[263,,]Y$llR<bF+>%d$u~Sw?_]9io{ki]S3%6k}GfYy99vr94zX@dBY4&_DH_xyDkyQV.gmqdVaM]oxPScwq1:*KMUYndY|qf5NH3/4:rC%5ADb%w7=t`R%Rx7.T+BHY@o37vI<Oq>*gGosiD(B&WFZ4b~vx<TB~1U^h]M1jwtNg&kEq:#g5s6^G4XDm}P46~jsI%D8l5jZzq7:=A_&Qr2]Id%V_cmC3Nk_St%Yg4&bCn{NeXL3y):]m3j[B=Gi5(VjpBB5UZ(@iuv@B!fu5&cf.?{<<{Q6,<<+*5lvag2ufcxF{G=$=lD[02I3t#]8cE/Ok^^vkvfOkc@Fpgf9$j+=gl8r<`a{Qan]%CMclYQV(=7FU0#d|V2;]m,+@IOO9|6cRidT7A/+K]kI6z/t%H:{ad7DeV92oD4,f1o|G;]Qp{b[$b%J|2o?#*8#&jkR;?m#M)vk2VJY{P6IAE:wftVH`X~^~K$15fl3oQgN+2oVZg=Q/N)T_#ZM"[edCY${g2(O:C*xc=q!G6}$m+^,L9&A9hLun}JY!cOgw]4cvMVg]X[4m#T3(X%I5{.FBu/emGPggj>tK1]0e|ss&3/qA!@>g@q;)W|bnWdYT3]pf:Ax42W^:hE#{!:0#rNx2ary`QV$(;RM?zVU0/Y{l8=8qyB4:wgEY8q8=$]D#%C&{/[#:f]z@n"mphGbVg]Pp_xAGuZjM8ZmZ%7:g!b4il,hD!lBmG,*#ATHSq%+.KaEMe8Y7<gWT(8Aev]iw>OYz+Y%7AeJUupFH|G/Y_OV?DGwZ*t.xo,=#sv1#:d9Si)$jEryi?:&x_<a2k>nN|a{c]50C96=]J^rbbmG6T8;NG6O_a7pG(%dN^KF+M8fc@n[ztH^c93_4`z=y73A8h37?(NfYO5rRO[VTw<_{#XWd<7=ZIN&8Qajf|(C:$j2`4PuEyj[<au[o>d?fAPB;^G5wSzFTh+Wz6|;6ia^(DKYpPO0pFSG,7!c,02$(%8hdIXIUQ]xLc&so*Psv|E"3:j!v&IVDEa,TDyYMW0=llHH2}T]#;q5O5;*Yf*qqi*HEpz%ZRT:ke]ppui~7m0mk}5oceY<!u&tOfw>MdMDGsNPp*b6BVk[ZNO{y2Sc{izr0lq5R)a}Q?+ge1z[z%8l*XEaD2wF,DGK)lNmfM,#[;[8S&0VfoDy.?e<!20nqkMA+M#".zcGNDdGNUa{cxzpGV*CV?_t%(zs4&u;*#{uOXy%_SieD"2qGt0l`M<@06o}8Y_lr{pD@/jp*Vp*eIXI%r6Ru7R~b0N"f1!^%_OMx$v&IjZX2Rb^M_7MoO$T5BNpp?!5Rhs=?uocp%|NTbm]W]CnIo7^c3Nr6:uG04nb3Z`K26[b693O_>*y*.N[:muqSuv8SMrYq@7x|W[U;~+clrcjQ+*`aXO"(vVp?1l<aP`nx2SEehM#gbm@gEnQZy9JM<Q@_JRvh_pVo7w9Y<;*64~$oeQf%d[OU:,Yzd%#dxVOy#2Ro;IRu@2Bz{r7ZnF9WL|mQce1Zk>U,xu&QxzMf48VE9Ss?XLiJfie5|(_tT_np1#4JIMpu|)SE.&mb.a+6omW.NN.nGx(UH$}!"NTl2LD)12h2=GqhZWpt)[;[NP0[1tAwwSj#rHof&=lA1>zFNI!#V1]wB_AqB&B>u9.^BDfK?M3+jz^an9nGEN1MU,)w>_B#2.)v"w%Kmn_V_5}K"[T_!vh7K9{rHl=XB^PyZMxIvyUw[Dwb[z}M*+RoF3*N{Ztzj@IUwb6oPY=AUD2@f,d0D3=}r.+^3bwvIeJNn*2HolI80HYDIa(FGkseBX"F5o2cs7v.h]6`5wAh*GeC1oHpkD,y*LAM?kPTe&x81BGv[^WG^nO0[5{cpzf5TDAZ`dfY9wpLna?teV<1iV0ZY,nxiQ1c_SZ@t#Vz:g`2DbmL1w"o9@9HvmC03iB8Y{j8Hp,GT2]bk?[ZBG{cy<PXeoDcZm>4d`E4}VC2X,if{O!2jUtOe<F0VT_5)+&fBJ)TZM+F2SYXCV0zvx5SjmDNfQ?5o)KMw+dYQYjJV0s7GM^crlRP"dG*%jmJ>Zgfv]L,tHSZTCc,Y3sSM,K|D#<5_ZDhW0r:@/:ryZd*jy;d,&*+9EUowz74yc.!y2ec5SoOt0:2MNHUR8^*lPC;iMi<e2>4P`hcj!1H,GvOyVNh00},/WP7Ix<feoR]GZWY9jG,7o7+Lb^V".+uBfi+^VHxL#h(Cr26B4[&2c>V%Lqd#+H|bXh@JM4TP?F5N`nld.4:RPi0ie?YycZzS?_MMbCQDbWKYHtQ]tSwa>LbO6KK=TTg&Z)v5z>):bPVAMc%D06&41Z@0=fHBqCydNZ:)G4ktZnlvlMMvCxLz=dH(GOp+F83BjV="y^;@0syNdeS5eb&f.yrT_,&a|"M1Z;rskdUdO$24M;10l=<5l5_fp8zN]/}_mNb7Ixv!N|1fyYnQ#{I1P=7My1M[zP}"9wZo9TIBp%efHy2GJUV1lQ1XOv7T`k>2q%w7gkV)88g%`srP>Br0o42<njNL/G5VbsMJ&6T^W$79xT_&9iG7dlXMyvb*xo@^Fw7y/aaK@Olt]np!*jP6wiQN0~["o@7Y]&iO&m.9;,g*+/g+j4zSW+VO_wz%Z{0a%,:X,Q{e::OgJ0>>u~Dc7JdU,>yAiw!f7esN]?+o?E|^R@uiWSKaub/lUyC!=o75:/3Qpi]}7FdP:+ZDWB8A6[5Kd*Zbai@~ooz^cQ:T4XHs70ZFk^^P{2qcY;MelV,F&>q<dOKCNwz/xMY6ojTUTFi&i9Nce#2@tCv6`C[CMJ!W+I<iT/S*SEMGKOub%fH@?1%6k]zEIcT22r..MEZ>M6R1,4+)x]!u&Z[_4Gwf#u@n8H2n*vV:KP$q"4ddq+IQgh%"2L#8ahhV@.+l+[>&VyT/F%o9cUV*2,1hJ"dWx*?fupF;Vb|L?pu.FRX&C^K7r0_V)[C2LiupF;V4T7.^SAYakWon*4qWe]O&vdqo]Y1u@Z0MhMpFk{^90RDX:I0UP>^3ccH.ONbJ&Txdr06P_)?{dza]J*slX^OmXiG$7b3LbBlxwI@qFDf#!$DA,DD$i1N=Y!O!J"5`c?vg@#9=?0zTs6|Q>@+DIu60n=ZOKtCLYpMW*FNa!B#.r=]w+!N{/pujQr>S+b:`Nwz~b:c,B09_,~N3[?DQzj)QhZ7QIl1c}k>[+/:v0Y@jxlI@]?&vIQ0~])LU4Bm&/FNa!iwz;N.:doFm+"=*M&FJrhj(rzN"UP{B]X1r4swDzUf6`]KnHaJratX^xXr0zIyLa;5Z[BTpbd.Ak3h=+j;gb)4iO{y8UM,`c*t1)qmcwH#v+02MTGUCV0zXHaVDaINP?co6YawMYMaYz5u*Nxs+V5J<Ew8=?<IaRVi1ZEzvZvOPoCwA8_c[z:u"w[5.MeFX6cYMI{ZYnM6.YvPoHw]gz~7LNNM~k4q;MuUoc>dCdPhC8L`sSwbH!`GYW)Fx+(zMfiJ>ZOPJ>2HU`uZ6|ZE>|(e41@wYaAS:rtyAkM%7KnqwXA;CVj88LA7ij$MIeQ0]1wY^V5oKJaEL.)ga#8s8fqLp[BByJacbzqmAqB!>McXkv6L$+(wFf$?zzD]ae8L3+}:uL`W`Zo{$38IOboQ:t!?Gv:J52[l=]:@?g7Jd:Y8`_ni#2lJ3"/Wg.clznXx%c[SGkL!Ec#2dOHa4ZXIRP.yOMvaNT}l(d36C8$2os?MZM8Z$xGi4>Ak2|vyx*wu`AkX"BWcnfWf1>H#l0sHx<!CNEZ`dJ"@kLW:y*^PptI37ob,YnJj1|Paf94>`l|"<fjXCvd/h*K9IxKR"oBvX7"W2>VXk>uLq:W!YXku<Os!?(.*c#?(e!?(f!?(.h&t!i&t6(nBjm3S*29yuo?5wLDlzZ@kl%II7|&ZKcge9gm8"7D#}{R51/f3Ec#47ZVY&w!g,ork1j_Ct4CS+rHra{7de&uS6t,G:O7%Z_8I4jiYc7#U<Oy%jll%L,xY,?Fpads6Awj37dh;Ob7|I}"t5NrNS/sM;R[wu/UT,Zg54R2Y?)Y8/5Okrd!d8eed>5/I/LSXU9cc,%+zw6Xux[]{b2c2_PGtSnz)R1u=1FBb4F4+~+VChl<6r._IdN(@j;Cb2Z4R3XqwMq8n*ony;BszaRtWkMJ4(^mSa+;j;%FYvm9vpm919)C2=VJ<!V%7e3W3ZZ@Z{LaL875bq7P@3SQn)K8+}6rXBGg~PyUChlx7og(0}DbdgJx4SsA8W_efO6V8_WJ2a@ES5HOfeR9Lz=YXqc29N<#Z],M8GPwSA}FU^>c:)4elq+kEaN5z&5FDehx1fFCJU0!WV6hY7TmbN>fkXu4Lv**0tV[nsM*}Y2L#evb}:|^Ju^g`6{*vXF:[u2}ee:YLkt%Q/vvt~9u8nLeCj!alVNN"sY41Z;UUkE.){Fi#y:"iODbS>H2kPTK7P=sJ;l|.$EvWY4+8=Yk;s5!WNy(LB~%)O~{4#F(c|gvL}N+{S`G=HqX7{14(NYedVtp^)/}:OsZC(i>2YE^y/I{0.18S!!5FPN@!>S?fw6*nIn{e:|$y+_k8}0|9Go%UD]E:LbZpIR=Q&>E1bc)5v/_gC28U6b=}2iO*F#p9c318F4j5m^$UU9%0NPHyHZ81:BX2y]T%WBh7.pufzpB&ibK]L2*2zK<6z/"J.YKBT:]<CS{wyyxM<,!uye"H={DiUzzJ_X}<h|@YYva_P8MnAEkmTvTT[.Y:vhmr;Y&PB<36~3XeUFfY%chuh!,U*{M$Y~dbQdeR?VH5EqkQ&5I5Nkh`TC>OkD2.fPAs.R92,_ojM.~Rh_9ve?_]2lm.`,A)CJNiNxk!_j.IW6N1lV6nQoMH!w/72>08Zuf*i*HZm~222aFdMfH2RzDl0]mH_7F(tL37Rry&dK4|gS5+<=[r}1(74p3q3_JNF,D/!elNh0VXCSSG0IAAz$AAuI7nyi,uTS]%td@QouXpm03P4P7nEKdEc*eO=i{C[QpB.I|)~RGXCt$TI%J1y}.Ons,iCJ.=$u+;WB2pd{t:`IC>XVPzB&NLn~st.F(]p{s2"_TtM<0D1Y1jlnbi9"&2[_|XcpIpdr)5AR$|Z[holZ?K99F$W_f3:[d#d&){=]C7$/10^]j#kgBimOU%X>(J`=b*:L~G:wQuyY}m}*d1k+pidnl<4H5,Ug1adku4D&>Oyp!r)2Og}F2aQ!qQPIDsBB8;3hWrR$sZFaS6ia_I9Zqc=R>)9`|m8Fu+e,Z;]dxm<?;4vG%w5X~75Q]OXJsZ5+&9uO~X+MYBE3[g.[4;>[+>{Hok(r`KGe"V!</S#G]y0QU<F^:YYmVqf8(GLx%t6h:t_C$+"Q*vO:I<SBK#E]9p^"``Pb9B&MNE0{+%bzX=X;g0TiD_??g}~]x)+~*mnxB`&OVN^D|;#^1?w(y{tshQqwT{FZ8(4</t1`aU.w7}Is"`*P)DHFdx_3trZ<I{2#noOCO[qB>qs##9oL5K2Q]YG:Q@.66?k0>v=9d;mX,F@JRo2Q]YSQ?Qy(Mf/M_kJan)Wi5+~K{JJ)]Y"o$nHh)X@}*qNM9&@FI+Z4sUHzk!QBZxtgdxYI6ZUo"gxJoMgFEhnGrFLxb^mMCPRD9]dqo*TIU#IBVvV|l}^mi[.5"[m0FQT+X3^/kn)u0.f[O,Z;"F;^=4Ht:8nh|eU:?uJ4A~%i6f;&6Jh9w.B*K~!C}CZcl8x0]uG0K!9POB*v%u6B=$17R_?rKEjf"ieC)QRt1c(~jcAZ#kT=eqe4otatG^p*%Xk3dt]es.u9:[`)!*?[]h>lCa!y}{K^uKe4C(foGY9IU!1%"nYO:dt#Wy<BsrQ;pN,>+C|$P;@$$to#w}0P:+aEMTLPrj;YV0ZAZd6m74`F2mGsVR/wZye(J;+myHrMY*`vkQ]?_VNDO1v$a`$vP4pb2NuAIo<wZ63p^3{J:}J"S=2,K|t]Td<A`8eU$T0K`JhSyzvel`WMna"814K?uN*PFH5i)+?/U&"Z8P;T}3N?Y1&3S0p:NtL~}Dn[%4f}Rxzl%QqEL?x}:BG+_T=o{.c}f<YQr6/:V](?D}cnY,~:z?7kpF.y%2Vt&#<TnGg8#CPF./U)uQoM489G8&2f)x6],OF&?j!Pz]FM#)__W:hib)%42)J+IUvimEi~XaNc)>&k#lNQHhv!;$C$sLR$qh6s>zw1j%c%OLpNNWU:_eYa"[0*?{6JjUePYTId&I1`$qps`O5#C]weHbeI~WPk1BW!BD3Zb*a8rPME@)R3y3knW.$6ene_uwX{4|$%./6Y("d*[FOPEV%sdK{H$y;W8L.@nqg1j}oFZDa^fE5)RI>"dZ:?yd*@#3gtoVNoihgM%9EO=^!*aQ_(40A]%R5]W%q_mqE_xX0:}1m>Ak}K0z`v+Fh/*_s:7yB#9^3Ss%H=9}=YX@VDlzYrnifZEdw;tTXscuV&v|`F+P_MM`n5?>#KNg./k}NqIxA)b6CS}+TKeN3#.mZd|wrGU]f`IfH)Jvy$<Dh+a8":JV(Eg@xZqD7M%U7HmM4^q4XNZICCU<1!D1TL)?a;B+_?oG5hr!D]QKF)my<Re!w98#QjOeKP^/L{OYHv_1~Qy@&VB*[?_}L!@jPR*}~m6yP0H`gyCj/9n[a8oUq?k0h0:r4tPqvh?=g*NF|i!?l,M:ei$r80vS5rV+5;zu"7Q)42d92<!>B)kL#!of+(S^V?FJ91U@y(yMB!c)dZ5H<P6XC>y&a+M2~u(10kC25~G4wBf?775YR5s9>|(*ov8Yh5A)G]PYj~y&[|t3U97pX{>%~yX$fA8pj2nN8GLdJk^2u1UrV<<!:50wfT(hUr&j&?l<sjsG=s=M#f:O$fP/DpWGcoE8mc!CFu=P?U>|EBVCdwX]6e]b"ut9uT^hWSoT#q^n!{t@65i4EP^<f)i~6#1+|97}e>u^J2%>#kA;Q.v(Zr>_?ktw7.UI[_YcY4Y:bq^qBPtcN/<|"h5PsdpVRzQMSYY_895,HOawIv3%ef^Ll2o0IJgq~I*U=/.M6kq.?MdasibqTzCZdX&+cSjOvKou:6FNGG;^3KW/HrCS(3z<To.VJ@]AVeYC>?44*$K}~4z)`Xw!mL()|4^<EgiW/2k$#t|`l2SP@r^RryTJFTRwcW&8x5`=#3tAj||Jx2f|{"D/lw2ZtxrKNKl;aAyYzv;4hj2"M{*[x#2t+p[uKPZkb89Y*C1GzWqKqjXHwp<!$)Sc^6J&KZg$X>wU4q3yxoEeo!,7MdSP/1Y*_,JMt`zcsofcXksv#NSJx}ZhDp)kYc_Pj=f%tHk"N;t.`dL?4bT=<xe|0K.0m92w+2HN/u&pze*ILGES&VO;d?A@^oH[;Fi*}pZzY@pWKm[13_yn{>A44K*~r|LDHgD4@C4qq@)U+>S8PtN(7MMF/}<_H!Kvqh$ox8b)6MZ~Z;4n7H1TBS,LBq1?#+&UYDeCEvw.iuleoOhwFu2i6n|YRf$yx1tX(h@k~s^:*[:|V@JgrBQLa]X,?F]n%|v2ZQc~ZWIq%S7E*dZI5jl"&6da<rS%]:_{0W}4MO*}E!i6L5s8?oB_+aM<uu4i5"%O`iZIxrCjqb~sj^<CE5_6W3#<rWAy"^M,E%a|ECk9Gs$<;k>:}{q*[n~DorHZs@!C+R!m3Kphn_pWpBSw"7fms;`v%5`}Y0XmQ;lky2oc3uTWl:A~a{EHJHF64ml$)Mt%OuFYv]XkPPg4!{L2+t,P";6EZ~<6N..iJAy,)?r;R/]gy$;n3_u2Jmb?G:bFU:KfKW(6mMDEvD}dF/?$F3nS89G<f*et8$L(`J+;&R#7!gUT,R$TqQn]`Z9z/[?UbBX1%3XUt}*{/?#QzQ}K]kUbjBjh=nWBd{i*]m!+QVGx4V9/EvKg[N!@*$pJAM:7dE6vnj6}FWV7S8ScKqEgYCJi:jc1nq&cIr!4:3.@mC[mrEV$Uc5+Y{WQk.[uKJ9y0&G>xZ_C_7ZhRRIo?`7yPSB^"kT|6~]@`/;w7j^93R#4utHQR$fEJ<hJX:_CXR,~kzS8S@QV(B(oz]NS)NIYA)"a*7_7>)8sWtc3SK4dI#Fu}NHp|F{=Haq?UUiJaZ&[YsGn9JmjZ=B8p;AoQI)NZ#YobDfRaeJ_wuFfMp2;l)&bEkFXnvB9c/]sD=b:vzW|W!&6KO^8n3tUoM[f2>OnrVV`#dq7*"hP,T#|NH|R&1K_ow[E8f`)@:S"X^T=rZU.O^^f&C};J|{Xju*vxgMK!OC80v>hv8I6FS=DbeZ6f*E"4818p#;hF^}9}G(P`HrSCn^Pu!/uaejKG;^*^XOx"vW2O*bag?9>RuF8#T`cFABY,*V?.?QOe67;9ODx$IBg;2UKgqJXmu03Wl@B%#sgR8@j$Tn+5sGu&S`N;kOqe8S*x8b1*1x@>b0vPt7yh>T)QA1G_"Qk,Oci/SRk/WNKlvXgpm^LGD3R>F+P?bD^=Y4m~e1ao/F;v%1.5k=dX@`D;[&qGJOg=/=dR&+#wfknN!3ldwXxoL^6nnN[T%#L~{xGIHV"dlDU~&,<+AO<=/Rx`X3s+LvdQ.)ZYrwoFmIcg3kohL1+XHDm7d0!2?j`76A[M)0lm3u(!UqaJ0XfoW_,4je]&ufZIW>Vl)]2Q#Y>aOrZehg0);J;<C%4bh|w]@Ab98&Uhh>|KHF:?,M7q`*T3+Pdb?KbRX.c~@)2=YY5;Pj/Kbtkzd)C{jjA}p>/]<Zt=ACc>+]rGP+}$k(aRmhS,>,BJY5yFWLO*iO%PVZx!hUezDZ?9btLP~fgRi<l;B.kTt9P~V(pX`AZ:=Y4V$bf>DAz0<`F_B`B3ZjSiMK3QMDDyI1],XTOoyQ>4bh[sM+z67:4V5k?vX4ceo2K_B5HaR#fA}{EOz{}w][ogQZ!,WAaC,ziq3n/Khtwb,k)pOF2B|_|gx:C$xmMZAn?^H&7HLle7D=Tk)wT;z"vUD*FGd{e{jh98TnDh8n#lXOK:UZYO1Oogc`+SdG&51k[Yzz@tjGZ_4,r,fPi^M6jt#*^bZX~~BrO>y/U4iQP($,+ytv^QE?Kah"q>5ORDQehFPmV!EDv0u#ZEki/nd30pU3Qg}g)pG:$MZy:miMKNpTQKL&Nh/FRI#/47U<w4pvNWAKoAr,LW5OMi!e4[C<RFMpa`kAYn<`.FhU6uOC;u{h6;ZKMf^W_,A8,R(8)91@AO6t;S6~/1trm0sP[%=7XALe~KvJe_4..v{*ba)2QPJ9(r*DZK;;4kIQWjF|OH}meu?xz8vR~6E^j*I=Bn/^oY9uz,2pn0VT3oGCH,UI5~N^obc%vyE33uY@fsr=T3n97bF"=$Z;AXgMud)z}R|[3H(!(m,Y08AX60zmm^}Y/XKl9SFZr6,k4JvmY,Wo8=j5RHe~RE.0c?U`^!2(jK;weK|nZVB>Dy5hxt^=?heFRp3^kAG|t~N)SFQHmb:!rMbp>b@G{RhfR?:x;6IWmOKh><W(+NR=Gs[s>ZKG5fZY/Uj:^^(=Z`u?(J.sYj+OcpMJBD*MLfIOhEY%qy0~BTr!~jj~)WWfItUBgA[UM{93QveUE=mK=W/+8U,rCnz>ORbN!CgmHqsxPA6)@XTq@QdjS:ET_vIt.WaVoE2R3vQ+@k,0sc[_G/k<mZo<W~RY/}|c$CbO?nN/x7b8iGCLQ3c(Ja,f!`j1H)zSw#(]]uoMg9Ns"h/!dZOKb{%XJOd2,;NyBj{0c"O&|+T;x1zn!d)j:g#yn7w:/fs9cDaS&}1fw0+3i!y}"EhYv}5QU&F!Cit@W.c_E)F47nhf$Wdc:0Q9{6{P!D.Vt|y~i29ta?^e|ne]ZD>Wt#glCxePVTh;;&lj}7+qqhlT83#@+x9~h5{|LPjZnvs*I)$)^&H;I&S#T4;gfx)6YhC6#(t/w!h5O}:6!gSm@QFzPI!4:K@|PhVOC,QA[$mNl,Z~z,G*qmn;ymu$Cmfn;<(:*_DIi4;GA+"l8]"0hop}]"mPPHig)eK;Qc1Aut*_Et&!<#O?SUey/5;2(`$#X`<FvCxXgC)UQ)1;@LH{EP4{E!@S+BzIK5:Pv{Rr0NWg+q~8dIlhhxDgPGUKe/h[~@A6iu49Yu{5?EijcJM*uNBvw}eQ__41w1re}T#oC<Xmdw$0_Ac<grYBCvu0GZq@}+_$FKWS{5"nM>7.e|URwEwv8Om3m7IOAei3aea"OFX8i$$K9`L9d7xI5[jK$i>Aca@@6C~:jW<_*Ko/XW+uRnFE0B^H.?,;[}`[umU+&4c2G>d<qOKE5xax(dr}j}n%</M_~hcdSMRGUbr<v07de#NB^|kUM`.0piY1,P/,;_O}bLT&F@a/Miq&i{&T8a7x^`M2[CPz}Aeuhm;vu#NR0@iT89?[8Luk3hIM8+Ku&Dz*qe)sRw,^TIc_ym+5zDP!@,Qb9pH6JtwT`?2Z3S26;K?m:.oCeC!tPHB1QP8oy]6r|@$L$O[G/{>[~J$r=^V*g&/Ys>J"+u9)qe$A~*w=EI0#l?H9Ixl5hQNEY!j8xQsKi@ajsbe{S5NP1OkD"#gRnr$XKO7>7/$GX*E<eh)cAhjL7$um`s}SB3o!e_pGlm]0z^H:CaIBp)nT:9$y:@k=zP:oG^eec?Ch@tIgXYi/,3tyfzFnoSfJ;Pd>jvmCo0;k#j0pW]X5yxePSy$6wnjgciwUrUE%[nD1.1%VB$w%BYi|GI:VOju#+Ge7=E<n##fHNC1/BqU_PU[12+Z}IT=jHao|{o*}?QP1Y&ck]gW8[I]IAgUM[}MWaY(%A0@9@or99O.$1++1k<mx[bYWpN*2@K#CN^OY:7F`0MxhE?uXh^@$54+}Z90+o:$&<E?K&d=S|*C>NKR;fGa?5KJ!2H$"DHv/<d+w@iNU=MD?kj^sVanYD]x]cT;b1:T2Pc13"fcd#r1tgv7C)?D6h:`%,0Zd^QlZ|C,j+iG7T}SHML"~tq+,iaWQfzn/TttvZkGo#&wjL0MpSX;"q/$+K94Ew|_vP(7RIgfrDsJ(q,1e+9M5yMk/jv{*VMKN"3=jADB+x[i.=zR[*;:hT7C<1/Gkq><SQ[{ii!jdZ*~(rio!YtzQ%sW(Mbxr.Gp((h(z;Vp#m[I"ZZ_0fiC){ID@reLA/~eKT.F.b1Kcn<m^f$u9#$wP):5tyxxJM%*bRao~Eb#NPD*Z),"{1QM6];VDarKae/^DH!$cVn8Qm0$_%#D~K%tw|}Z@f;K<p"x_|Ko^@/~ABSCE*zGdUn$~}HyI9v<x1PCb4m/V62iV[+&:e*#}++Td>KECkIZ(B:JoXj~~W5!%#wZgv`?;FxLnc$x;+ho$][(s8m);X?I<SIBjC/6@r5}HP%D}cGsJis1]jv+{lH7U=oW6J%(M)J3nX5LI@VU:Uknf>";kb&+/G(0!<cH.2HD?u&$#UXvFG?v+]3AwFoF>p+Iaz`#6gL`<#L?=Uw3foN0rz^*FHkcW|P"4w,@f/n=jXb}f"Q7zAE3e90ca9nv0cu#oMfhzkY)g&ni.E>?vGk<j%TfjOZB7Wf+u(ny]NJlUlj^VIJGHVt!=P<5keg#bgW6w8{kJv:^7qBl`[A:(RNSY}Sj2"r2{R/OjwK(^RX1Nf*r3s?Zv:49NLY.Xvwo0x)gpjR%1f$NfF0SB.uH=k4d?demFp.Qvb_iguU1(Yq?1p4KqK^JJnN"Ay)>GNC=PCb:0{n{1aE)ma}r:4;c9e"L]kpd_c9WM`f_<Gef$NJE07C+trs%N#(f&h#e[g[VOEgytR+hl;@z<`nAHb@{**Eq|Ix[:?KSN#!E86MWc.&uV1Nrx3?Fzw|2L,/IjvmBgehK<vQ_}&3P,2~Tx1pC[7!Vqu0B`^L|;slxQ?&VD:.9f.}fF:HIC`eC4G41h*7!2m:_cFM3j:bX|z*FP*^XL1:/hF4,|<:eVaY*1/jyBL]De|zQnTneovDPrGnk4p<p*p~E9}Z!r{/l<{0h+T+&VfOo$De9<TxZ4zb7a>{X<(uDGMW6tx]n`0g[<wsISp/or^=y.dHG?W]dQSY_nO,h=>$(Asu?lz1EPz)$0n&3JiA)_yegku>4*PBf<x8M~::D6*BW68j&oS?&u2YH:>6+1MA(*_{YI3uoMLM;R{o/LBU%jce>gGav%=)UC>*bi/L|DueU!fu:Z9u&qYh=S0zZY4!/eOO&k)qFd&_Cy>Q]Yo?:3F0/tIqDap;cb$$!TTk33B%#:l{Q>!~equ#_z{p}VC9yJ:O8jRo<op}/}V@jRB)bD(LyNIu/IFd<vK?SGReR%!?MXxvj9/d&nZt_UsIesvVb~Y*lG;:fm*w(.r5n0~Z!YDdihzW,BL<GGlX/_I1X[F!KYP"uO__dh$ZUKf5%t,E,;0YH.gYq=MfH>_<aj{jGn@gHXy"oU07oO%$}!aRg{jU3v8uz&hk]wy:q1T!g;q"K2{XB06Bq_JS$?qUHB|Qg&aA>BemK?~V[sHb@7S7ja8w(#EdF{0Ooh}:2i/Wu#,0@A0kTJ,+]]P]R9Jks6Uxiw;1g`l#i+`]vZ49>Ps_o%KccX!.V|uS!P.UC=)5;8qoEESTUjJ%nltYo]RZ;:hQBVyKUwAKL~&}2m?&i`u/xvZCrB9OEHsdh^LWc/8jo]x$V<d847WlGda&%y_iS!l[Z%daq(?NCy*]d!aUr.Extr9.wq#hfJ~?aR?;l7[wAb]jt8&FCxf@QK97Zv_`.4t8,s@k60+s%YgZ^okzq/[P%H}xZBL;S6QC7)d9b"83a;dio+LxTr`9Umd%C_/U8:4%6c*OsMS;Y7o32)yY~FvkM;jfT(.UJ(Vb/HRN)sFnL*a(%CV4_M+6&Oq43_#+;3kq,G9/:Gd8@Tz1H[hCM]j6czT{u:k3lExaBG"|mKn,m9=+NBgkF+KJk&H464of2*#@=fL<*j!S9eO#2mU"v,V.3ALO:I.>qOY+c=Y$ORfLkI>+*U}l";2x>B.7B:]{OiT`9a&aBT|Djd4#q?([[U>]j;mbRurZKkB``I;n{X;!xD3r3LCSU9]B%U^/RbG9Ls9o$?wpq~HauoW1{m&#Z`Wf4LpJ<+AZ=9F%JA%bwYFt,Ky[O:MY4aBz{n2G}<:Ey&{eLu4,U9]7<V!z^X4/)@6PH$Qe7}yF1pB]/kV)aM+WB]k]RP|&TT+0C][9tqUmEl4I^U^czvS/=*)4ZgC(/+xr].+us^zn,b;H[rIm4Z_cm}H"Y`B14nD!)wxm;d4v[,Bz)UW%Bn}>{v8f(dJ4D&Gp`GsA:BOr1Ls:n=[u%"c/gviO4b;:ql*.=lkH<6ydo}6.ih?msQLJ4lC(#AHGsZ`OK={eKvDr@@w7+*wKuUb38g^?`Ng"$Zn11K8/ht5}?0.c<$gP:)eS03{rza$0NFRRe3I$2Szy5s4]c9m<Nc)r^3U0cZ"f:);Pw8cO|),[LGh;jZ~$wxO@HvIF*kH@JH*&E=%{z2a?4)`4o+ez[d?`{r1ZP"y[I;*pjP3/<[wa)a3B<l_2;*ep4qIfWYba+^qv/ST<^._lgvj|y3v"Tb25S]]]46LN9%V]f5:cQ=1G~)2@UCwXCa9yU(Y61nVnTVicLJ^Zf,ruN|}3[|z9`"b|HxZg%qEa}}gKK&Q_yJdA2VhgG~y,Aoy`i`j}NZ7ar1mlJt{H6b33]g7Q@X@?TtmwYw2yMzrlBv|YLL&(4Wxv^:Sl9d}@xIOFrbWioZh&>Y#k&*=,cg*hT`]|_(NaG?eC/+<uyx_).CKgw6=F}]V89l5sF:]$5<mQLUmdZHO;),jH!/l?>aoX{.}f#NvXQkDHZtSz)|}.x@4npQ]YM9%E~549yd}Hr0#ZD6iWJ(:fTOUwSqsDW<3+9pizeZ3wnoBiTVxh]~eSC*hg=}9o"YW(cR7U/*6_GZHOyWY?vFAm{LHCF+YhvV5OF"sLI~]M,Ia=Ct]+plvjWC9q7o3"ZXw<)Q@%XjF}i1l_UAHshCmxRl/7c5uk?{+jL%QxgFN))7<O&Y~GwZ~naas[V^AY$^Vvdhm@hFe}ZLd0?1@4ozN0B!W$ZDiSf9(GIqCxvQ`LtfS*{ZjNiW"&9,.1{R{vY!Gk"|%epb;#@Gf%uQW7JyoTvhrP.ag*+4&y%S<?^_nW0Fb.?W@j6eZ>dWdd=C`:$pWGns?E}~!n{8PTB1R|MNw^fwWF6%v_M<y.1;;EAT`Xxr*|7nw3^{[w"{i^u:2o~kikHY`HyWu2O@hsmX5G@TU7_^v[Hg}8r.{FA>?q`Qi7JN*/IoH,$#mtCK+yD/5)Y"/7~U[M(DgzqNy|0gGc:S&"L&yJ}_Z*456_s4#U<^K@B#^t&snXe=8:JUzfY%}I8d6dd;/X,alx(.5S:D.,lAkM@3It8SmYU<su"T0h7Wre8=S0:lP*D{T=CertQFy(]8XOOAbv^Gouk1K/T:;%e|Vo&hdn[xp(XX$!F_(Y|WxJP;Brhu+,zR^{wOq3?[Y((LRgvL)$<9%:DRM,J$Vp!u|i47"yz"$fp~9T|K.N!|o)*J%$_4;_#CvurIzuk;<H,;*h*1cQGfxU{La/J]2A#(g@K[#IRyRc<)CQZyHE2_fV={:DO$,@K[!=gsx9jP(CKtB`vhaRx>MVKED&:?3dwauZs48wF95b[$<<d[X,V+qz,^OwbDPAd:nO(GIq;8D6w4@,8{NS*{|Qap5V[1+7ob7Q9jz5c3{`t6nbFapAI@A+2,1Yd(dc%(^:+rNDi3;3w4~UBBLB3D@A}R.djzDE$03(B]IMsJ*2TE,Afw9lq[^Jg]WDy~L[WNl81=cWaiV8GyMbW_0N};yjyjXq%K_>yNsm97,A6c`K2ww!@0yjt~r_Dz+J*`k2K(_,izNQppB%TVNC{qLL`gYNL9CMgo0S)N:fI:Z^OD_7y~(V=2$tTWYhBh*PN1Ou4HQ?lL$r[,<AMn"3o=DPE1i+iLrjFAs_fq&)V8:|$W_[sM[?zkC+t~L_PRA:,jvIlvXsGnm&qcpFCxT<A{cQBnu"ts.N1nzTTE!MkXFYy8BCYKt@.fMb!9?jP_WTTI#<dH5liu^6wiRm.B<ri4$BI7h$XmGTX<b}sza+7:%mo/#$n%6Wqq$H0m=b$I,$JH2E+hCE^qGtF~fvg0zc+jNDJmKqH+x@:YisB=kgn?wO[4GhTk!<pa?T<:g}rFS$mh4DA4a1B^@,Q`4E*Q7L7D|OUpS*:xvsS`K(ML.]6*hMf4{:Z1HPL|;k&n?$.?cOCbh|>B2.OCVAvImGDcE;iUL<35AQ.cU$E{&_hWWjEs10)SDo/vw_<UDATv`MBVp=HY=O{~t<.X]<CUm$/q=?Hj&4)R=FnN3KQKkuf&}#wUOHMtBv#geFPucq_i&8E(]f%M5G>]pEJ,w`xPShFZvQ0a"UaZD#12upXXat>vRHE4U]PV|"4KXi_>.?untde(](t@N7[T/5Z^~uz7;K&tl/Q@;IUq;|>iuCB9/|OE@e$Gsf~S^x8n,p]c,lqb^I;J5"V6::#%HU/8K3|~l2wOZ!2wI1&q]o;<+b/!B#Y=qL/3!$de{}P7|>au24a7i5+R$q9BdM>qj(Ro42QuftmQI}$ybLN3wkSbLtFnu,;%?_SN`"]/uQR^x4m|S[zez?zmL_z@roAB:bYT6IN3iC"vJyDP`9]E*{w?,fhgPwNM,@c0YvB^%yp+77Lex$}""%wEv8zBi3waa/WB.>nIMC+6Y9N1e|]ZB4KX%$4]1G&tBI[vCvO38y.jpo&6t)u^B)!Y$Zne`JRWZ]@@}cURG[4/$gLm_<=WQbVzDhl3No5/Rw&F_6w#HUPP5%H8XOM9j8XT5waaouHWO>~Q3#3EBTB&@5kk9XaS#>sZLE}C0p0O:Y0H6PBZ~#a3[&f$M?99A6h7VL]]qyN]Nt?"|~3X2A!>JoQ],.QYXwg?oyhgD>(alztxY1I~lt2YsU,2F:hmnD,Z%p`1I?FC+)B42#bE!FQ1)$xKBnxEWYV6%[h7NyDh=HORw"e9]/<!rE$8YgnIOEL*)hU`&|]c2V^19Rsi{,4Z+M/#YVh6(9ibTeoi:U%<,*h,+*@Ik8LA#Ct+NgERg%yQ}St]c]NIl@$ia0O<Xi213k.Ws[bJ`e&TAYeC0D|6DJ)LK;e]P6*GdeRBb.y"mqm1HD677m$UGYBhcr+1c;mJ=am+wv+j=K:MS:VxW3c:o@jLa(6k"XhC=oJBm7af3]G2!,s<*`wILCi6E:<kGQCF$)8IQj0WLg]>v(d7DZIW7f1k$r^#i22hRX3;zG:;zi8bb!)NC,P*/x5VwC=y5n[_8p?]8GzIDN?<(aFf><,Ps*MrMB[eb$T(!Z1L7~E"(K6/F.+goKT=B,{VX3S3Y8/}JJ=+X,h|eDi!.yiM{DL8Ud"%<fQl|X0>j7}05[?lbI%`BoJ8#X^O`#?|L#>m:S^qYDw|s=FCG0BNrcAVsZYt%m!z<H]mb5r:)N1c^z`Ur7E8%g2GY{@e&W~`)bi$Bl1,5RW6>0XY2).{1vF/)t`@&x^8vAI"wBl.2ss~"uMaZV^2xya2`8q>]A^(MJu?Re[IDRsM]Pq)WuL{e,>903x$NnUz8n>@!tOBXArT%(8_>]g2$c0v6mX#Ze!kq}`+pI[Q&w+G*t[K9I%3M~.nNtsKvl4$FTNiGj~ul{L:JJIh)bUX0cM3SY7L^q@>Gp+B_CsQNHW`YO_&3GeKDU(wU#euUX5f]"j)expTDP&.;?rZ@p!;u1o)Zd45j7O.m"tU?{/cm~nX4!&au"88dH{08xzD]7b4.&${qF;P>XOew*kqO1U&xyb!9mFzO1Qh/Lw5.>;r`U&rJ(wBH=x3YQCqUKuIL+H&=Uh%$.wk{>bBTP{8kgG1S"Ez8i4w&8E~RG5)~UHY9bAx9CRW~%Ybviw^H_?N1i?OFG@{F%0XG/]h*PZyUB=Si=uVF%Y2Y[fHCr0+h4Nmia|=:Uf~M{|=YdN(zoNq:Uv+GHV`)#jqZOIn;s/iRV5A1A!viiV9(JN2oRXuX0uDa"(lrF[M63_@/5=mEkt?U@z5<lnr90^khn/aKFfKI62F,sKVMP]cW!t27)^uns1"*`0i3L#f7Ff(6|ZXR=D(m/)/V6)SFSK?xx15Bsm7L>tSh04vxblX2TRT`IZ#*pJ,]JQNlH[f<?^_0rj/`Ri:n#D`#%11U=M:>Ze((GxX,S5~^/dvTM#ib2WOYIxKG]N1TROIORUVUI$J^]/wg#!>gVPYW}x8%uPIe[(^>mRc8o_j)a2ExjOf/,ZTis4~.ClJ0}K+Z2@*T{,B|y}X1(~j29jqz!R;8%r(^`,~If1X!Rk=zFfhO&YjcdGQen;?ZBD!v`7B*_cB`LprH*[6`%5=u_~//MTtDk9g@VHQq4/$H=D%i#)MnkJ]@c:GT3iKJ*PIWk^(FuZ%rjO?y*{<,:GXRk+/#A.L][(/fwM+JROB|D<.XMOYozuWtqvaX4]x2/5YuVNa*(d*f(r6*(g>mF(,s[VTT5xcAZ[/`CMV.Y_<ybyn1{Nm&WvZ$wt7J1`oQ#q2`}O1MR{.qsTgfIq<yivSf{Tjyue;0!S;q1{{lT2!4mstC"$a{p|g]|yEHLulluM=He{OGzj:[IHBF!XvY.WRqe=7cqj(o<J|z6e3p&0[{p|{}vc!c3m<TG6un3MCrpM>#U"i:%:SWLD(b}``&d*t1~4uNc?f+lw2fw`S{6vCQh5"_/ai+Pm|Fqcm^JEJ+<hLx<W~KAP!W,T796/<(&wD/fzeG|O3=}DD;d!z(XChmPh5RNTGdrQl$6vW5,2B"hp0c%@<Rm`s?_dOoi$:ED_9s`:2C`^Udgt7C_JNm1w%3[Q6T]Qo$wtA[{Wh]iHWh}@p%XJQuaG^X7e~]5O,twJAXV2u.z]hB`gYBr2.D5/_+vf#wL(Zef0$&!T%G5B/;!=2n,@_L"));7dIV&SMz;Pn49okg]>c@9[b>$P4cPp7rK=,2T64u3C*Zs"xWy"u,2d2;?/G`cZ!E2O|G&E?^8d_suN*?WF$Rjya;Qa7+RYRq8}^hF0KaNTM8u5:WLXx#CvkDh]EG~jA%QT,r=qyV*:|44.TC`qqoDPMu>mUksyyr;t8E;=L,Tvi*Cer~,5S0Ln[y/i>L@:Q[Ifk278HxHhovtjI$MHpbn0l0;e2d+8#NOJ/BNejZme|rmly&SOsd9%*+)d^g{K/~%!rdABm=ZEg>9}}vv5,5m!^"W8FRLRp4Ad7{{wA,.5O*PBqKzHF$_U13KQpShv^6B#e19jnW1yOSV0yG8S;([G2CT$9Wv^^5My,+%eZ25#$skFv2U&wyxFTYyPw;IaYeyXmkM;?oYMTy)&/xXpqS`me.i?A4.aYgP_e@p5e.|tkF^@{x0gH}81Xhux17fmUP!RE9)/vHIjBtkD2Z~naZy#jOXU4I3ewVcRheLrf~`~n2hx!/aJgXQlgvBbsGRAtm>/XFH2jU?$:/i?6O+O"5&!>&bLrdW>.KFCfrf,+T5{JU"A*2E0vOjTXQKdu{74}Xri?0_~K6q_"g5>6MNdN~K8=YJ{B1_p=IQNy/DyOAm6DBj)i7m62U6a7XAKsI/lS&)KSo{z)c=8Wa>N15(>pU[}L?IAwC<~8.(fU6nLD{ynCyF#G)fwxl]n_EMm5E}/q%U2Au^}p>"q]Z=V|1HP)@=>Fj^#O$7eF@iAZ4FuihmRZS>tmH,K"&"Top;]6v`*:440=r2{M&;b+:gNP.Qdh6P2e4_HCW|{vPx*B@lQ6QQ`Ec+^EK5Q,}P<#fl%P<lukTG7G=&<<g0Gz+~3E2Ic19$$7a]9B3FdlGC/GmL#9wd7kMx5R6JL~+osae!Y,WAz2NnsiZ!<3?{ObCy")Jc!^>ccHp_PdG/(8U&>,Y.^W%_`[T5#sc5as!>;/Nv:`v(5LR@!RZ"|/,ooUhd(H$6>T5f/#k5_U=&Oda0Grl~1g.iS:ojg"CuZ=+rcJ;8rEWqR_Wx4SLk~c7"FB>k*$8cy9bL)]T!>?Gt[$Rkbp0xL@g`Q`pLa1h@`:nYJCTs8GKo~aNm_5=e|&1_Pgq*tgO/rzLR]/#T[Z)l4O$_h%E]:,pscBF3kTUUp7L[aED==5SUl$*Ox[o*pD`ue9[p)>s,4N+HSNFSr&/EBnDwIXuZ8)o7;>Qu*&xKG@QK$Xjrq0.Ak0!%DiX~3PIdyfj[2jkid_aB/Me8#C&j{.<vjVF(^|,HTS1ayv0#xKqRLq0%|zmBrZ~r$"bN~cN5L*T7{zu2mE?$2nr<xN$4`v3F5;9b4e]Q}Tn[2VUSH0FOlE2"!?^uf!l*n:&j]uWl;pOhL&:RlF`%mm4u/pPI<:*DOHrVSsx6I^f=d#KACO~8DPv<AqmC*SI5Ye9tz&7No/>g@DnC6*0no,!Y7]Qakb2y/1`B4|p}5QL9[>WU4JUD=nI22^X)IybVML9K,tFJwpQFYpl57]~Y<|M[D%{a@}ct<M^~/t97GQS*ZB44D,X~SlExNrzp)RfE.$nj@SjQu8;:=2h4?KI.?{;ak<proK(,@+tbaf28NoY[!z}a;}a`Bma{B1t$N&VcN$wM/6e2B!}nB#WH:E33)cP&>9c!Sa&nt@t/kwT?LQd:F;.Dk%W960k}$3bQ:|Mz`~TZ2=A,LWPy`U^V6xFUBQ2CXL.D{y7ax:6ly$rxIX0|W?mCT)rcYjlwM&8V;tNI7qzJFkanG+MdG+"A5WxRfJ6vH3f7a|^TTVoEF3L5uNi}EA?K[I}y3pwulp3QoN2J)F<!~i}Bm>nDq2OCQXeq!OzU0ubiR5}eowBoHI1:@0=%dl?YgkUR]?fptA.eN:Om?BQzIj242<t[1*wp^k?x^(;5<?^){<T/$UIIaiJAW[9l!YUO0JH@KdGc<@$#S}Vpp:UN:)Q*`_fgYOd_rHr]!,99{!C<xMQXqzd1l!{e.,kyJ:G|I?$wmw8*J}%a@%0sPFTi$t]%DVAfb=ZL:U`3p8ibRW^VCVSSJ)IRvDgv9w<Jr$ld}S~+&U!]vVOeO:<dr5VRv%:]fS%vpPa(d{>=8^Lks5b$%o.UHaW`|}eqhiD@KpT;"04Bp.Tv/to9e=n_pTU1|!M$KF>rLoq@`[2Gip131JV[z/mVZ)%~+h{fpSJ2&,3cC#s^hZx"6YsL$P)k^U0kOyGWpqq63,Z!Sl`rwZ1yXpO;EL9S/,mSx(acFOro=UXGYLB|fOkHCd/37&YBr!E{QDt{vfD!Uo2t}TMfVr^jVvZVl}{yc}yf|WWVWYnz:IQp<2[+fhZ0B0KW~/$&aRrvI]c_gNYL4K]#b0.)^6B<XIT^@W;H?>sx9lAK;k~g.s5XwLms6t15HOQ(YwBCTaug~AufTyZ~7Gd{k%#8tSgc$?cg`5t>CY5~g5uQV4*O4E8nS)3G{^kbff?Ow?84$zI=z36:L5s]9?[b:=^y8IZSvW]N>SmW5n!L"rYV7bZa}QlU==;cF8b:+^k?A`*XYMix+&)`_rWS}j!.S/a5p!f`unx%?*,JsQB,Yn@^DmM*%.riex??v`Tx+4]k%TQJ,sr2^,W6:upy8DYvfo"R`%RX@;?$+SmY2K#z_I>I[&X7Kqb`)ivoHsr.#0D3IQKGbiKBPJ(/z|9^Gl:QtsW>Svy`8Rv2$Q/{3&!&ML}I>Wh?*F4>YBEXT4pY9D$=SyK#j{{Vf8y)4,h>vb5$z9Y0;9Q/#[w*C2sJX=a5?K;C;4O]t)XkqxX|7L[{tRu:iXHJiDuUy!;h]]6xsMIClBR0GEDjsl;.UIQmX$!Stdz&CC8^X(LtFC#Z9XRR;8UC5*f!s7lxF<hSX@46MJ2hu`jGNN0l|WhA2aBVf%>1+PS#<?./=;aU.&CUTM!E2LqB]HSJm%wYUC$lc^=lU@ZnHj8{4n3)<eSQP#/[eXLQvIu8%9FPPQ5^P&ZuvVLs%xFg<f~t`d]vv:X!WCG!>jfp)!rm:]:HR(<L@#|+QwWL9P;F(<[F3:dA9;Nf,(gGWcAUb#Ra^BWy.!$;3R]o91WEgIEqdFnFd2|vD:U,eYr?"k;MxL1N?264+SnG(nOIQZStW!R$,)eWqkn:2/6D/,)DR2O(8FOZ|W|1F@r%Wg6mt5}DD%QvXd"wi4X=/8hW6gh]t`@(>EVzq.x71FZ*%s>3}>Q)(Hp~6m29fjPiRgedO/>{31DK8iP`@7W:QQ/@e(`AuSa{eI7Ln[p"Fuj%Gk_E=r^Bu/~!0tO&mqdnrkKS}^e;K4pufygah&Job)HpQjXbuR&SsNP!M.}wc3s3%y2$as>1U{E#1Z{7M>D^bbB!X~/|:l0>W2U}.05@_{"@:cdHEQTXUo^$vrIzM2/?>FZ!gY$)O4*bUq<^h~_yX|<1;)Qdl=(>F#(I@*qzC8`{WVaGB{vPw?^PlC{0S1{q@VW,){Gd+P=|P`GKHRTENwd,gWZcYrX|fGl,ciXvv.2YMOD"]>iK,6.%[3uJl?7!K=UE4bP"_Gr6:/^^d*K3fxJ7)sJ%~%n{%Ycx32ZXxhhVZx7X3@+ZE7=cFX{.[Ub%97#a5TnV#{G7jt4JkzaM4|F]?p*c[3%0d=h0s3_{<I$.oyvYe*OJ/c&QZXN{SD<`Z|N4d{z&/+#O)VCg$f|j)S($p))<v2JjL7}#)uy0#V57i7ba{:;XoaZ>I6%>_K0hpqGdtBIUl>}%;<IkTA5gt6kz05rZKMb@0]Z5wQOlRf.mwP*u=4ULBG#d,VxLEmf(p$zg7>6Xrq2oz&aN)&y,`c|T2E;mFDe}k8/12dQs?}?{LdxwNr%M|[nsw%M,d=sSjdKx|k;lf#vr@qwG#/(zsSgG~D`snX:AE{~zT}h{2#^Jy+1f:h=9C$s!guz#R>N.z8>4$s/#EEtq:?{.;E)rHail+}9k`nQ{|L.9?rq.h"(6WdGf5N{_lUxtoq+v>~w7!KJH,ffc&gqd51Gz!~dl:/QGzx^u0}DuSDlw57=!hsfzH3;p8<_W<}W}/EBv_Mt?P4JKqBXX(JI?Ivs:T5XyFDBqU%aB2^a<4ew~oO>$g++SneuH,sz2_^(k2aeDqs@2>x<f"p|{Bd4ls~odMsUHQ[0^CYOUWVnGzXYW)qjQy=650P`6F"*XeqSwTM&S`_NFGbSSi.?1xUf=:a_UMr9jK@[:6$Dgq/*Sr$G%g~*Z7tscXbDW44t)jqrFps`E4V:/6gR>ogxBrwMY%WapJHs]Q_EMIIIsamP,:%q4L}4d*XFDP?ugOcRQT]20|ma5.J#EdUG_coT"Io,(Sd:"b]&^oMAxD%w1Z#XIzCIN.UhINUT!25?KN[~PfG6TgsGHu@1%G6%k;y;f84dtGr_&yHXb6Tk=<BnKg^]HxN*Ieq6K4Q`tqs%cKmc,jMU9~OjWwbra<g38M_`O/j1h5;jMfM8R*3JYaA0$LG|:h7Ud>1|YO=DZHTdG{>ed#|>WOg}8CXJ|C|ExB$C.>E<jsIlLOaNRbE?J]CoN1n7oLyX>I~("MQ~{kbaWsFyQEy0FO,UyNx[|6(2v,(lGgZpB6W[m+tU`Mi@G6bpW,)Hf0a=gRt(:Jni.7:n+0"tBWdJ"vn`)ho/d(|EF{]YL6f<$t@M&Ze{N:Yi[eZ*U$oS2|~K&k#{{L"zcZa|m)CuAfsc?f,wWL{0yBg@1c&0z5y8D"vj/u/u]eqCV[TDFvcro{+N+OTtTMR$QHP8T50+X_ACZbx`zahBxV,}hM,gB"!.4V1B:%D_p!8]xR_]Bd&~}o@|A3?1whum^4/=Hw;FsZ%[?>$NBZ>x0VjeGD`bd`1N("!GVF]EI{4?!0O%~v/g+W]T"IXx>|&KbHv+4%B6?^bC,D_IZ{kR@~~|*`X}zSenIU}&/Q~knV133VhZk^ml%Zj&O58_Q<c!{RoP!e5pJQc11@OgTFI@#ro5&ler1E)FlYWN/Kn(MCm,*5Vr$o%>Nf&)OdR~;!{o>lCfd?8DPGm%2{;zOc1yul0s.u;fJXG$5D0:oPgL@^!.aZ(ck!FK]ab1:WsFx9mf8zov(48~ghck&hU(!wmEQRVVH@n/++4cVHK5iB}Z"Zl?}j,f8R=4[B=}E%{0)jI3)c9LGfEc^uDVQ54}kNy=0Bz!f!A{`6?RQ980kj6$iiG7,meLr6C85x+I#sc7.q&hB9h_aI=QEt>QaOX~ciHA`~u@/|;x(/.2S>IdoYZN>=HcamQ,;?$1(Gjn(5gqC4H4lyy(tf~W>LJM;rEm1JOqS[dMwr%2)>l4g3dX6XbKp)568[M~APPivWsi8nJ#t6J8zk9}oD%j!v8DVGSa<B7ZZ?FM/BP//zE@v0Q$^v|b@5k!}96q5E7S,2R}z6zuON9HYgzLM0?gUo58llUQ*?n>8[.t;6,GwUIm>lG@8<^o}mm>t(9$^/JD6NquQ_NQJqKSC$*[wu|]LA9%bp}lOF.>Q%B%fo?0p{t,r*v]a4On(i5V{)qfl;89:fDKr:Fs!NWJ35W!Mt"^.F>jPi0B0,YH5exhTA~2|[%KSDh=7n5Eu8Jf@kq1/Y{2T{8lr{HEe?26A8i3}CC3a[p3DB]]v!ea:Ke1xOkWcpv{3jjAFr=EmpPi$dhyU=dz`4H37=_mJE};hwc?geu1?C#v,#=!8q.,D*3Ck1(!vsUNmBiaig05ht^(9o7t$QM!=)1z^3Y`nm?5{x]3ioc.u5`{6onxvd$k=[(PWz^c0E(R8YA5r=P[`Hq//iwhZv|k)_Sf8W?Xbp?a7i8!#;G28>.(M.Xm%X=v)1M&%oS<[LEpa}l,SJ|wCZ6;m*$$&Y_S31;C"na@P/iyY#H.%N+1O[MbJ]yh;Y48evo#/6@y7d=Yei0Mk.,)_WzQ]lRRuHRKv.a19VRC#0M?P0r/3.f)Oi=LWDsD8JN&2*`v7@EtfC$f((ueFd&KU3IOH^2=_Oodogrd_J/:pgBLIKd[6v5ER]$,fb^H}Ge$%oiQl+so+<U="16>IfWM+)Q3IK9`0Fsjc^pVb~dZY/]gQp6Yp5j.I[w4#Pv&Qg_0~<RCmrw/C+Je=5dZ7ded_Mb=T+e3Eu5?tgC3V;(er23unBHpm9rRm{S]j+aq2H@!?Uk|l_u/wkk{3d.]Lx$7xG?g$Hv]8.XeY#*@S%KWbUl3?:Gn=kL#4(p=*58wMwGDl|A?W]q$cmqU;KTUq:Oj5RZ+uXlGYaL~Df_(+I{(Oiuqk9HjVBB!<*iXexN<XWoQW^^6C2,6FIG3Qe<0W#}x2aq2oN&#aQ$1L}X9{f&Lqba!ST{/Qw#/zTr2E.jZpFErvn*xClNw?N2GwhI*LT:"hSDOuS|VF:1fXW~}Vr<U6hQ5IK#H8D`Ar+LTy?(k>)%4kt+>OZ(7Vea1$pRr&f5;+Wi+u+KGWYNbMwLwSH>J!Jj:6b{V?:_6L}Df5Lc]S&C*IclNgy3maY2u`wXpD^nEI!_nAmMc!/Pp,_nth~!y2m7ykE[T]$K5CyPLbASi~@*EQQj.Pmr$(^pdVGCcDZ1~DTH7*CMp[2o:2_Jpnxk|nmvP:F4joIwTtMEOH*BE2uGyyyDv+0a2wA.8NKTy!bCO(Z@:837=tgn8:^L5bK!E1#9ieM_;ryuJZ}3XLoPJqVC9C%;.b+/ghTcIrytwh&Kh@CH,M4vea3ZTC`u|WVO7c^8oWSdG.1KKf`bf`~B9Wp%7"?ItIf2oC}nC$@$i}|XSQU:*{{AQ1Us$;Gx?Y)Yuet5|!>00y)DfvOvf=Z`:4U;er0+aQ{V26[t4(?2a59I.FHY/94"t[D{YIl2_mQfz)aY{}t4i:Y(/4]m9E(K@pu^F:#Y8Z(rRI6@:w9lEt73lIB]Gij2lQ5lE3b6mcq!,6F$eWHyqZc#I+00Non7RSqjn(h5FggxHhx%NHY@VUzHDtBIww5@iqJ)Z~r+tQKI,Yu9wa.>pndaU@g[@MY|<NSfpLSHOvO`SsC/;_T?^%FImGUd"{S&h>jkD=4h9*P<R>is.*AsHJZ!YaGh=mxk|3RbqF&H!=A?iTd4W#YZvZ7q6~QsQ?c;5]J)%xP:F|&|k=RC&1RoXR{)S@wxIg[P0zQVXXD^yO?g#9f3aI$77<:u`NJ5)scVJ|BoEgG?/ggLrsPvx#<kIso1EX54TC.3kX.j"*r">6F7vCz:.>4.&gxT{MBOfHGs5_$I8rgiGwTX&R)&]n;_4sb~oEo)U)mm]uye52!xZF@tCB{qMy|"y)J()nOutA8a>:N;d*uQXWhb`E:OHxph]XHu`<?Z;;CWn~/Xd)TtYrue/np[|#dXUc[&u{&40tdDQ(b#Yj~8bWpZ(ku]R;5Lx0xq?QI16rJHSj7>c.wktV)s4)acSaIb;5QCfC#yb292cUM^n23nlV1oY+K3,`mqG(F)n=Zyl;bUpY#Elz&34u>c/5KdW}Kt+L|Czn>!(5Kehcl;%Ljp7G.4]:RiL~fE%y3~<Mp(zhwb`5^kKogLB:.R~np&%{>[3q9ho]Z*p>F$qZz+`W)hrZz8zL)_ut?u<1QD^t:Q^<C0M.t1)^%uegbtNf*/[pBV=+GUH~/:j~8=+x1V9A<$vD5*U4qL+SU]*$qO`dyD4i,7enhq<c?Aw|SP>Hn(dK9i!W!yUbiNRsgfyP3&#QyTe@Fwybuw:%<#8.]C@4{ML&Hhe:!iY3@g0b1^l>d%@/R41UrW*rBLY>&XE`K1U.g;JDR$;%s"k^*29@QA;:%=ai;s9lPyu;|o|W)`j673lAhh&c/3Up4V{L$Fn0$Dai,=?AXph*eR%Sf3g$4EZXVc}!hioh9`eYQrT:l^Le3m4(KOfhwsxmU1_J|>0C^Ai*nM`cC@3BCAM`(KT643r~QS`m:1(^(QK_;vC];QhT%zqex[[(N"Ufu%,rpQ1#YgC3,Yr2PP47=gF+%JmA1&L^dJ+Oufyk#6&JjMm{iwV92tqX]?CC2G/LXLeJaQRc|l9>ax;#Y06kCAF;9uHLe<f8b3cBrXS)9#pxJW1)p/wm8X8<+Uw4]$PsOld/S2E.sQK76!w(ct+/Xxy2LY0`r]UN[v`xYBQbNmddfV{zUh&0"N>DlJKy(M#1bx!)pH..^,6B|i9k99H~7+8lf&8.`{OC;>Fo5=mU:?<~^a[`=:<,6gJzl/p"4gvn9l$f9M>=@;;,#3UlzKUF2XuYCg8d8k9@PqXhpU%U]Fl.NRJDE`oN8lptQrzdq<*9/+I=bPPORQfi#)%JmL>7/:fW&Ur/5q4oQRy1;HeyUY_TjdTD1,6A/qDepBo~)U]s};Du[V3x;I^{|8H`|7PCri;>F>HQ3@~F1^%+n1vmY0$kYOYqXIswa7^L{[j1ts^26_YQ]6&wpT]Pr"dar"d$%(u9B7^cTI{>c?G/,+)nlagya+2_DLY6^Q:CPJsloM`8y,61HB1oK]<;6W3:eee4]$UyU9gu>6oA~c1)SY9p{?^tVY1&LSUH6wMNqN65Z!D[}!HvRxT]6o&a5LnI;RI3[hwdf`(:DF[<8%FY@{2NX6QU%sdD@[7!Uz$J+of#K&zW@aR]=gP=1v6o:ZN9KKOyRWwYpr:/mNhj`nV7{I(i0O<_??4V_~g_Ms~`5~^{26g"dw5=&:6[m=DK9/)~oC/hXd30kj@#KApHqTU~UKpz$G[|X5D0etH7^Kp$eZz27].&b*58(._$o>aXp:j,w1PD<aw0X`Wm,&7WSuQJPUp~T^8/g%=(@$cux7@`FNJqH2L?n3z>BE<S_}TK<Ee.*(){owJx!k3jxqGJ8>}e6k,`KYBLmVOzpqCA=N>YW,0Ap1M#3HM]OPFWwl,}P}NC~Vr]^Zr%J&.d^c._nsM8z_.CDPw&q:4oy=om_K>Yy@Q5Q7^Jo*0R?#:NIm,wWXcwhL?y_1^T{SJ5CmrtqF&*EGLa?);N>9w/F@7o8?Vf5i4U]=1794]^z)Y*9x,S}38{b+T<XEtb|=1=ejn9vUB1xWm?`)+D(TvrY*/sC1TX`R)RolEc5ZKRpdK86*5Px1Z{aJEJ0`%?R;t:7:9.1SK|k>v(T2b#Y(9HMc@zA<s]ePq)eXy2BkqX^:_+)B.M@h.JhF.u."52?XV8R`52?tbJZ%o{_{MmB?9H[VnML3S)Y@J&(5(/b&uCMbH8Y`,qym[|!p/tpwkh105$I5#MLHk(vNG^Z^NmcohMJj9pFv5ZKJZsOIN&xG|0Me0%<>C!tu0FP]@Sx^L&}riJFst:Wk+y!+h&CuXH?rbOC2LG|7U29m#m]!Xq_tD*J104rL+aZn>uW.1i]P$!<N|I"%}a.|7}MH!HD5tft";`kyK(v1/;1p"2rI"i0>N=:2jQ5<:?6j:e05#Q{d,2UmK~@4(YZ*6bd|gm94]Qz873Zuuolbw]Cz"I>)UXD6)Ytj+ZNI+6u=GLsEEGult!F*a5FbBiVjqSw5LB.KjRzPY,B{a[xG0]>ix[B{IOQBT.Hoj_SCWuI)UyL|n5U9z?mr3c^lFcDD(zsjtL~eWt1gslg+k(z<KGu}IEX~W1uVHI300kv/|lNkv+5hDUIHd+w!Btj3tXXmH}3#X^?./ln~w+ff?X/iJ0{TXDXtpI7:CQ!7WLLmu?"(W2LCm18"!?{qSLP%90ttAheXw._AV>EMp`3x:`8@QN_H*JV>IZwM[@Z{j|,n=K"#!6F?rX#>Ze?uvypA]CB]l(h!@tJ4gIS<doN|xaiKl%ANIv0+n<E11Rtmn#zqG>jWX$~[EpO.;P)d*XFsOrF$|}1|hja>j:tC*.4(Ga3_S}9ZKXmu2+L0"1l?;!WIW%9leY@%FAo[{2A8SaM3Z@Vtjf(Djmgu)1H14TKtL55&B7N8k5E>[~hw+#z*%:_$2a`Rz8+GR&FW)ktOG5DwOrD0;g[Y0*d=Z{}~<lqY;4YM*^f.NH@~(h>0Xm)d*G8N3/L8/zqmR`5zFyuu^4kEDKx"&#zY]5/RBPGdXaq|+}Jx/qy1u|f:b55qz<DwpJ8hQ`5T1DgWDD=35xN$z~X_$ka`5u/2kBQe!0)D76bstS>}nJ.y1nHz+5qmd#~e0y1>C4LquR$m6rV2jH<Jh@+!(a0Bu%&^.>PR],slomj2Nl@},M&?Cdd=DI)zpTS|$h,bq!J;?e42uSJ9T:u?P!_QuI>3BkCXh=Z^5RxHtrcIRjSY.yXN,Hwb?HM*RuGpzx1YNGR;!W{&v!uRoEn.3|jH>%nU:_HGE"N,CAd_Jx/7bV)&axXj)tV)4^ovbKi+OVlNcDNYK<b{vQJPdAReR|*l/+uV&gtjNr{^>1EU%UjIRF<sba2`H~t!gZ~?zN%ffgwUI~/d:SrIX%Fo?<%q&zgc5]tb3K}5{Dl$q,,{,Yn~/wh2j"35pj6]kroW||`aQAb|]KN,bH]N`5XvJx3|HBuzgusz05?9Fk"|F}8!=iSAQ.GXy+Qx/#nU:MwR1+UQK1GbQ8=J*Y&^(TPlO,*>xf`@*;aqrA:(+.6f8@b{)vV~qqM+s7G~UU&kwVIe2%71:a.!d:7@=mEnlpdf8mTt,LihN%k"eu~2KF#8c%/,cy(m7&<69YD.Xm/ZGBs5E.UJb5[6%$cRtt^A9:pKn7Cx)4a,,3M^7[_i!nqZ{P!WNP>:ghP8(+S]=z{y/_?i5A^&;P&N}52c0Kx>*GP_[)J}0$BNhw5V%gIX^tNx43*;6]T|i6>]ZEn3?C<%.yUC$1PPHk;Pec^RM#3FDW,DGTJ1CX#=!M;eos;Lr>xbdKpKg}l?:ikU;;6ak%U{tfDB?L<Jg3Px?Q?R_;M9[GYP<|b)c+UH9az58Or~UXpp9NzPHO/1xROg$tJE_*RmQmDmr)x!t"EDxHV;b{xfYxKlSgUpNQ|uR_M6+^%XYtxnSZR1,!K~@K*YQ1qDz&,jt8pR#lKiV(qaff4XVVM:G$JdJ+Bmq%"TO_sM)X.W%X(YQs@/YJ;*BA_*J3?:?toupI>@K2D(j]15}2dIOqG)}U@z"SOm)l)xei)|xvfVy6)=CK+;_;XU2UtL1vGEzdcF`k8Gi}tGe5EO|0M53f.2t.i@|$yXQcMWH}3vb/Tgv^VMI+){VDiJ_(Hwsrv4/,}y)ssxteIB%Pm;p(`Wycz^>V!+3J)LOf6ICHa1MV@knjzUKUKIlz);bS)af|xB7xx@_22{2"M&J=+$G$2gVIqgR0E|802,T#e+;#!Ly!jc5Xq6rkT!E[:!.#{%>FuXq~u>tbxvYqMncUlKT^UUl&;5$wqMejOH^Jf3$,U4GoCH.v%vTN<W@84otl[%fdv/60D4_#1=c:4!.B:W;UZDFSMuMcNQLY`?`#J]*qU^*zpiMCGvOc^C/@{WVj?{)4ha1(@Vjgsvy#Xm`lQgLp],dtM8;}D/u^buUKjfFi1Zf>dW5#ySSuFv{H/]=yUXaI]U&Cd@dOF2#iYL<C{iv<c&89h}Fy]p)iSSKs}Xr/l(;1HReG;Qzysn2<Kcd|YZK&eyl]Gd6O_L~t,a,mSc$ou|J@i*QKTGTWy0x3a%4AX({p^"AG8!/hhv#c[Axd#P7wX:4O[m3bp@e7`qsH`L`OJq[N4?m8wgmhg$.ML0sdWJP/,nEId|3[wS&j?eX)K(rG](:Tb;GU@y4w]c}8L@VZg8/R>~Dq.P0Dd_`>Zs~Hag6j?#^0)|1Jj1rJo8~J*9[<n8b"kzqQ>T8;/,d"%h!ZmD4Yaki|//)+4Gw2g&eF+|CU*Vq90iJ#NiY:I+H4Hv57rv:vu^,PGL@R_AHVrT+_U+sa{`5`Kqx.}JXw:v+zU]Kt`yV"7]D8mPG#*IwRwxg!r8"kRZ,TvB:g~y^aKfpkY{Z#_.6A8,cQV=TY<$.w6hpg}ZMQzU1@=PP|{KMD1A|*LcVDBah}kIheH@##`P3ZZ|7*cs<Uo#5j$TJ}I#(_uat:C&esh.SKtQ!oGkQ)yL7;ZcsOC1%I)!%Ut^"nSV2`#`6;,!3VjE2%BgD#[2+._#eq7_r]`jKm|T%+Gh/fG3}x5.|ED&0<!k&z.N.Z%+IGl@q5V,j%iWmkaO|k<PT}9:=i@Yr,pDQ],<]J9lo<s`mjb|&fOn`J[Cgd!+/|Ftk=rO^]PX}3GxTHu^go)"qj.,UY0cx?P9)2?:6;}zA}/rjjc69/;=eavvTo=FKM@U|i@NF^bRnif0_OF0oZ3kumd%moi0261ROP`o61/d=/;Rf+}X`i<i1.BeH@d+T%p$Y$ru50;5QH.Yuo]8nLn0;rNo{Dp,%mouj_mQaSTFW%qZ#4R(`q}EIy`.6!]XBCZd1^|u&D<Z:tvT5n@jeu*#{Q;o;2SXP^TxGtdH50iv<7FE`dfI?(^lxr[zrR,djS^7b5<|!<6QUk7pRl|tvA*"o;aF],c*d%sVb63dK&xloOq/}%KlFRH6[gy"La3[rC`;6o&c&2%VijiF{Vr8U.s3F@1h2Syi?)SZK%rGvr/@P0E@CGFIa$%hcQI1DP[c3#@CZh#iviuoq86T%IQx;y|kwsh)M*?i3a;OUS$T%(`Y,[sixd)FPKe`@5KiO=Rx*[4K~(*J8>_?XmTU%660Ri|75t&;jzwc5CL4*1yo9057gu#ASBr%J8:"pq~87.mm^BWo)P_a|gP{fHZRqW&cIqn,gE}3x(:Ht|D_VnVl7l{154yh]4HJ6u?Sv~u5Pwio3sY0fq3T;"lV*h0G[*/VyS;i%n$=aWrVgXxM)4G{w%kCd?kG~MrqNbC<AUMW}I+)<5l>e>fU![qPX>^16F2YOMyM{&wkxY07(Lg1?G9G/StF`&6V4|Mqh3pL}>Zw/jb>|8,>%e*x#"Lfk6J1V27kLbDj5j&qi~D^BJXR7&>|ILm)@>F893&prgau{x[A?2#H:Xhx&+K}`[xy#<s4z]]LH=%%hN.r>4M7*bL!f6CFXun{9=c3XW|0flqyVl7gqq<$R/<B}%l^!j^cuw*ql78l]8v/6r;g5X&sYtF"UI;sGRarf(3jtj`oFTZz8K;q4K,4%j>ynXbG`VxcId!0*Krmo#j>]7<grG::%:62gG!}<1GeDE*o8qq+cWghm,6[H4boPJK1Y|gN9a*}W>f*7.1lN@qQ3|Id/~&Y2`&X+BYe6oM"J9I^:P%>Ps8^9X/{0{tL~<_nK{;J$Q1oY|b`.CJ$zM))`YV7bH]L_<@l@,<gQ,$gZfS0I#%LB<E_%Uv#"VXFW6ah0}&=y#O^gv=eh(]qDyVXHo{wCw2Ds{L[qe[;uyRBaVOg#Y0nKdu1=C^)|D<<`G@o&nX/!I87[}HkWUMXr9dJOf#FVAzL09fxXVf+$9DX]%S`p%JD4W;8|G~S4<hLUo]?mWWRqmBno{8%Q[xxO*jzJX<b&x$>,=EN@nMFnm;vi,z<5f3jhE{mQ*+,8r)<:{?n<C:TI{Y<?QH`n;fRW^Gen6K~i[,orOF<=6+I6L3JBs2=GruVX%sw1(DvI9r%7YBM^*a%r40Z6>exo5$~KwFFH{Lj`|4.v=LvRMSzHVuvXQ3kX~w?Nd+fiTJlt2tJ|uYmRYq:ra1sFO{p13Xx)E)wc5KURsgiNaB*?/.xwtM<iyu2RbFNC%IHRrj&0!|+99DZStm.G0S_!!_J0$5fD#["@.4V@`!VR2Z`&/fh2bv;4Xb/Gh/jXC^kye5Tc"2PPOv`0aiQE<{^?LuPwb<wmR(xmJU3DVD7IcRnGaENRrjw2%d}wQ^>oAEPC*dnZbkL?h.}V%D!fu]:Xc?t1oU.B8dw4ZtjNd0}|+`!./,B=TD9Y4)a,JO_2UEM`aiKa"G|L(U(F;3j0XbzQGH*6zIh#wIAu$Vc?vPO?G|H_c1f3=ghXQ4J&S!JT(`Q+d;/grj9e!RN_o9r$U!.!qyw1R{Gjmj]$Vh5<bKk*hsW}rdSMY7Fy4[m9c9<aP}N6/@]rUYQ)[`7ds;!qaG14bQ;;KjbK]A2p%0iYahgeN63xY{9,;5;7q]{}?!J8;U;HfYHJi43a)b{(4S*oZ2*xexCs#W.Ry02:Hp[=v|*R:a^/cgyjpFl5>rm&<,p3Qcsh8#a&!I`Y!<VE~u0+)a2)e?7+ASPR=0+6y7[&.!{beLzrEt&k5>@)ffjN*)~TY*7,iNoz2}Zm~#?5UVwqRK!<pzS?1ovFRU.ZXvC0;f%ZL*TD[jJ>.(kSE!QyK+TD#5fYHbu6EXd@jhg?U)LT~^[`yi]R+|O5!j*r6alj862g%}<6ew`:Rx/OT&s>5$^Q8!pb.3q#Sl)8EGBS+Kw9z*wr@:OF_bV*o&syMebU8FWZJG7DHB}jnkGDkwv5jc)BB24TNP&DM?yr#QD.opwR5>3E#Xku&PF="@2v|=?C^U%E&,(9L8>jvQJ>EeG(#<RrAj(gBY_vBd:R/VkE:?$}vTsE*t4873SHjj19o_56.|PP/w/gw&l)Vj)M2Yp5[8ixk.#_Z)s<T71r&dU.P7)9{He/Xq/2H.cBd)`9:4,z6#6v+KCr#z=*6N}czb*<6;|IVo|/~TF5K*?7[hx_X^H+vq.X]rfmQao|OZ.E|n=ZyYWD:r3t%,NBsZ/hH>KYv_$CPYkV|waqusxCijB}FI{h?`[uziq%<3|.;qEMbD1o}/$UGoLBcp1J%yWJyEYrLPbNx,5K=Z[BqGC)&+I&BMrDB{Dx9[G_N>DIN2f+v,:f/!+Gjan7|Q/$37VieciN;]=b*O_M~NcHRo_Q@7&auMziXq/2pZ2Z=}m#p:K&c#0nw2RYwZEh9zqhy9bvG`:K7Q7QX</6A[q%nl"c,Q[xC.xsRYR$JjNPXJs5B,C*U5i;)z)Nf](P<@cK/aE@{R#n!?7|%|w#+SuyaXVUjZ7Ol*t4_OSoxC}9B)+SfhneW^y.#5A<MgQ3Tb*igm:p=Y87e9h?@#pg[qQznwQ;HbL!eE)]Kj>@>?XGQ>#IMJg|d|G6is{R7rso^LMQup3Xb|iUc[n,$I3G/aC27}L@GGExh@#I>?B+W+kRa<w`.LK,JG=G,!a+N`:ruTM,G^+Vp#|TSShaRHCe%D]HdSjqhuP@$`LnN>C1q;5`@jY]BV@E!<,<Pv#W1}:r@XFW_MQ!=><D*"6knRWu~W_24)FH{Z?VPp.w2/biqL2y6$#<Lg#4KPM_H4Ma!LhxPGOowN)y(u*vk=2D<]ky^3$n{qu[0q,2M1kOXj@V_!grBT=;kwLZ];tgO:V^nTHlr$X1MGL?ZHEvD6iKZ}DM0e;!}rpqr$BnmqHS];A=TzC[`KaP2_%6a1,"V/nKiSX&vH~Fh9L*)9%w`uLK#zeqxJ<6x&`:xRb:`G{Ec|=sSTED(|h?*/m^x`HWy,GYr<XO6{gJ3w(s>&(DVdyF7VHiCr7BVum7]Pfll<7_dqYpn<a*HbqcUqd?(Q|>j"_Z!}_Jkjf7>TRl>/P>MxwTp?Sch<pr^U;X/#|KHr{{@/vpXcPW_XUVN>W$0(Uh#Y86wG#"@1+nyy7B#W%IILFEgd:kvOGRB5o_GEnb`Y6GvG7aq$MV59n4fsKU^%_.x$;GdXVY@Mz}bf1^QCf]}}$Hb]L[1p/fPd;jV/`i[8YYH@<uxkD+WQF}n2@a:f>9BeN)gb7h8xVc!eGb4,Alnqyrx]<Y17r4vKu=7W$;,UmDr%zlk)Q[Bpmd:za/}hS2]Sf5sY{FL{>LC5dCmZ]j./&1~IoR}RX1dC<lHbx!no^]h;l?m4S`}qOt_*]?>Fu,n<oS+GoWnw{Pc9GIu*sy8!{iF`&i?0#]wfs2"A6F~6t;"$Ph{?wCk2}kco[;=H!wRZkxwE/m=$dw/B}99!a8Z7BYCu%&QY@0&,;`O^d:rHtwvbAeP%@fhonRZh"VQOG<@b^!hdLbBUMMf!9W.gwVFEWwxOb5Qij9hOSM]@~w9/6G<?PZA%JmsQ2j%i*$T/(%8rgQ4m_4Ve6gZv}zuxrq|62%`p$z%XCYwsw?K5WnI.j~Qaw<uS)+$$F5Wjt24S2j*zf5TbJX#Y?tOJm8wD[+fqiNAT|qIhvTJT>I2pi[vJS+|j2rYXB#VkuG#GVQ3E.mM)@6MFTZUXh88%VhP#T8gcZd"kUhnmU/7&oCJReqG5gqrJ^ETi[Tv_q0c9W8q{U6:##.|c0f=Z`^iSiK_]6/h9*[A5{g3vO_GJAR$;:5R7H6~.doVPYrh*&@A)~t/qbJm7T;7aMiTBFfRCnr2.)a>EU?SB=xiq5k`4#YM:jh[$T%IK5m4QT<_mk/8XPl(=ETnHS5(6]]F&I6RzeA)x>jv<,e)8v[d>SgdO)j8#`A:{C@T~o,{%)J^o>:VrXrL(]<5^QzeiLy];W1{<"HrP!wEQ89VMUQUFjs4lBIS=EF1^WP?0WjEv}]iik?5FIKo4k,:*]|K<!p=9/ixiB)kV&,1e.]pReH6/o&FV31;)FL0p5b`K;Wz;B@p&#xo9O:TKF{HBx9mf&F3(r<(n!tz!.eBtCt]zd!$gXLAAgo[ggg_]ahqXXP};"*/;=!3]<7.]OF4aDW;ghX(~PP]D$z/[dy]lq&aOb;juni0;N@l0h0bC=QD.yJq/^I67`!Uf=!2=z*@rIMc~W{7@/+%j>;d}&Ix`.87U7oK97@P|H_8vWa"9loj;>kB/2e:l/@"2W@l5/Y4xTJ0;8;1,;YDJq93=>HOIh9P<|r/0e,`g>o3.oY/%49M!vg}]@!FQ>F9y~$_(x,GF!oS%=;5pFN?Bj;]=D<jg/m"9S%"!0U#%h/DeQUaN*5mEXOc,&hPN?~!"x#t@lco2Q1cV.X]HO/Hz"F:N4)7FlEY7Tv^vvD~,X"mo,u4uUOENB%<tK/Bk#<%gcN`#JPO2ck&N6z:t^4[BuZmaY14`@D"3IZ8>cFhQZKN[Dn"6!={&mP>Pg{Ie;z{2YR^,cieONH/,t;u6*yYvB}!BOuQ,k@vC7cl979CQJ]Kn&jH?eFaum1nC6^cKYS|j#W!PDZ`8IcU"x$UJEiR."J:eDP:u_T4O1x*V!!<qlosc<aOv&%>go9&;?]np!%>gQS>gT4ugLkl`vx>DG10^&8K#4!RRN=KED$ls`SH0^teiNR)4&Ljli*:@6cI<}F.a=C|8XHD$s;42%)8)Vv1)}WIK<0SJO!6JH=?!5/m+Yuq/who)@LquBFsczQv]t,(Fd+,t#j+0hlgot&KkJ6kQY*}Vr?%PR!YLj%iJkxU.Q1x{Q+3Dza<e?6JGyReJ~6_22MJ3$p~{M!H89|7dNl!.;lhztAy_26TEK#31bC@xG#D;+S|8x<|8j;9cSrJ+l`K9BLieP}99f[I*c3;K@zPh%a(]xpk/C#ehJS`$z;N:0zB8;!6,/#+n%;rd~,jN|{8]#Jb1zpg9hoc<@*GeugybrUg1?Uk/&j?!sxl`RfRw[o$jC$B/@TSZ~4065CAv+4%!I{KUSNei`hx8%S]CY#^1%dseY)%w_f:9znXb!r4L}_hDXGV{bu&"{qU/i`[nz{V3e4(U:P7k,6cyA5j4Dicn$@U5DYCnof%Vop_;CY@yrgJKO&T,yg"[g2=)U1~mrL7b./;qnM$EBZXyfd6%k7da}CQyl{Bw;i`,:rN9d5ecx>i^2+c<Z=Yxi|~FK"8SGL1172jEDafM|)P&R)&>Fj7phx9cGnER[n<|20T@b:l`kq90,%%fR_d2S&W%.1n|@;TmwQqG*`1)xNYFC8iUP88:%jafO7.DjU&|rz5txUZArc;poYHb;ruFcc^B/<A?x_T2fH7^_rvOYg``PJ04k,c#U&x./"::G|pOjb)F?5<?f^|SoC<Kh:p*dyodl~.O?U>ZN~x1KgZx}KGR*LWEDQBYr|~FWM2iX1x1CGbuhq$b;9|+GJ[i"2UTPYr|6:eZE$x1r|uunGAMk68:;C>PWwwIPYetK3AssGHu<Th?SyP?Uq6k1?`gbB1D!9JLj+S>B6{l>NA]5sI6c6Dm>O$cY7AZMiAY@7?U"IvOX]z.G?9@l_+$KV6<gb`5METUmyFeZWgbZ=2=Sqo[2]xq@ZY>qliUrW|gO9Lnh]$2*%_a^ljF:[#od"(cOIv<#y89{I7kzkBR<n7(}*t+,j<t2zHN#Na=oq+/,2t+$I;|gEIzi)`d;3?gshwNrG)3K;WFbtDiR^S:B*+?A`)G(3C^7_GwN&L>>L=N:_Wj?XjZqR4f>t_q0{?|b+ib62hN;q=MS+UBGR&=2ci#5KWEvavT!9rfCkWWi|+a%;u1e]#dd]`6*LuL)a35!r".JRMHLO[cZ=SD+TJ`:.sz3GH>*b+auEN@!B3a%mCLnRhg&asC%Y{?Dey(OiMQV;kjBDg/Y(KVQ82ZOylm~#ozx+jSX]NI}FY)/V7]BVkbhN.3fN"kM{#Jvp3[BMV7w~A#?{%Iao{Lg5+J5NZIpDmrGu)/NZUzN9MNsId5)SWr*;sJfMdAxg/LzNCY]GaNG|HtY7B&Se@8o,R8T])}5{H7,PT,o%h{*3}VJ2*3.qX]L&Usx,<Co$4!v?4OmC+LMV}L,DDM"LlEpCrPj(3A@gFL9:9(^?<<d02Y4v&[9:{,;0l&:Hd!/Sm[n6[Brt>y]Q<E?tiOtOY,Qe$j`r1t>c*kwP@ntE&If6Ht"y2T.o(/XB1p*&1QP}/Q"g|]JO{rY7H_>SnQ9A8^>g}Q$uebe,_qxQ`5+s#}7FZ/,fbhXStlMbxf5cK;vogv~fm9bkv`p!h,VX|G(Z@>*:y.6oL}<6Wph[QUL)[|ojq[j%`2hS$=?$V~AE<{;/_K5|jDmrH2P{B.Sv(AMm2&+.Z[_2I3E.ss4:.,B.Hv6i2%Bdu2Qwxg!4[!mG^lf;?vvRO&X>+ETq"rbj%Fbu&0su"5LS5y4_TZM`G|oR9Xx(WwrF&1r&c&lU1EX^.Bbb,v#<?6=)@ls0~/s_O`+neW!+i(N&#+(rJ*Twy=kE0RB[MjI?c9_$K`cj.Of#6P#*4I/"KH=i=Z0tjcq+XeYE+LCfiN)D(ZrZjN;:6vXB`$bCvCrt`qVZ.WL@"JEo1BRDpj.Ry`NvxQvvs"+)A?%EwvQ?mF>Q|EHXz"HuB}czF66YUH8c:MUyhF+bLpyo7iO&(Q[r*&[1"};bUpJZbQfx=Z>/n6y*4%KR;TEn+)">`.aebl(7!t<tV^)9o]Y)kVs[Y1t_>.&~W"~|%oej9V#=R+UZrQYKavQz.XcN?e21,6ASW<YdtuQ8o{ku.k%KMy;4`u5Z+aU&(sj?4^,bGS?f:#aW)xhX/2S3M<Xk5VkGm?KZH2xUC4s[V^}o~)hRW1i#0LL^l;`io878{TM}5^Nny*:^i>n9Jcz8&]qFylzUFlc^xWWr#l*&6XTEI(ZKPT^W[&M~;BvqP)x]U1T>x<WeMQcu@~ko~ajXGD]+:.04~#nN6`H>1LC>E3xCwK#X4W?dxd_PKc(kEMV*&,QJ)+uS|H>?E*)JeSYT.LOcURW>m7_CM?Qx5|(*j5D7xx}O}t!7)w`rlH[VIE<{~39*$YaN"tX2Y)"+Jx>1,i@uy1KO;d9Ba/qM|u6G<{uwE3bMOo$y9:=eM|&Tz_bi=rY0Fix403p>$3TIMZa1lO#N.;F|z`dcX}g;<aDF]TL{K.Tl#?R_:Qh]R[*c<:js4:(erM)7]zx5._[;JsZGf#T1C;iirVZb).7p7v&sy21vFVHBk>$^g8PVo3c^hF*I+J=D<6/kTSv4?&_(,nhdVN{JlF5zVd!^)@XAijt,W;qt_/"PR@<LfHl[yqPDlYF>@}}xa=32_:ws7t.[H/ZW:kYM"E)c43ApnP]hq?vr(Wa?e]<)Q4!RF@2`jBmwX(b[My|n0k|b3z(5.rA:uT2iE<`dlNR0Jh23E>{WR*;6PVK2S]YWY{i5b39#xj;0+%jX~@wjsOH/"N/gmQbY%XQ:](1{cE?DYJ6U>BG)f9,TiFGps&f#)d.I:Iu~}j,|@1tR3XGa>.B2zMhtErsfijwuK5Jd9:ks.lPjBl7qE%evd|rNr<.7gIX?5o+ICv|HV?*c$w_Vd#9bxsJ&)9y?,UIazIrI&FJNFCf`tLJQ(HI;k#m(wIc:,5x<I+,M@s2jkhZxGfa|]eGRp[dG?`DxO)u/I.&,y_M>]}.LY+C+w78vrfWG!+|xF`S&e*gyfF[q4Bd=zq4$@J?HzB^*4%SnX@5Q?He@L+MQETT;L&l[w/rL3HV?n4+Vq]%yY/?(1xb.G>6/D|OB4H&.AE>KfrQ|0S=BM3I^hd.Va45]~:Lt%tkW/RK(ibzRs4*)@g>O&6Dn!X1KhS7,%t`jnRuY4hWZTgFjS,Ae_TX]4])k?!i!iZ#ql?#^$<q{1EkvQ&Sny?8I.6&u>Z=BPJwEu=wRdS9taCi,g]`l0Z:5^toFS+uXv|;h)KCQEQ~R2#ppC0kVO&`n#N+J]"+eP0DPM~M&=|8)s=Uo7X9U@v0,1bAc@6oY9pBQ&YoBVD@v&QW#peB8AeB8AeB8h%,3s9@en1iZVg`q]5Y0B(V3nY;q17%[yT,eAeB8$dJ@U#p5VS|.V2`NH1@34b9!{b|@fMK#1,d}?X<Y|B#ewTIGK;F*rVB#JI45n/!3HEG+TbIX{?{q?lN9~fw$@l"_ch>Z9|?]g!xMh7O:bhN<3C19lKj^qfJ*7[HxZ<@j`W_.3j{a;@Bgis>IT<|_7nRPW51]dinu+Pq#+8q+tr,@g(z9MOj!k!AP"t!7%*v0Q?N$Fnk(nfnfcqW#|?1!ZhBS#_^8(S!e*Fn~OPof1#E*@[Xu)/~C{Y5yD+B@@qL>M_I>X(wT}GnOaRK$53dlFK(wB]@(I{cQr*$[0(#r.,7XG`QzYz3gWVEn[Sz*"D<__(T?,Sz*OfRm`x%^e4>SrTeY)3t!!k&OXphU{MV.?O(ZLI$I=b%#0C"$&6sD3w6B2YC?ny?EC]*JaovcTBb9cO@YX)+?U7XdzF^zpggz)aSIb<>Z3UpqI+*y/[/x;y"hl|"O`5l8JYPpYeP,79Uml7q$Qpv*ffl9H32_bqhu}ff+(7Vyp]2U*qH`Hhpv9X,4"ZZ>m=IO~(t^18/reGS|"_kTS|J;r,8M/Pi,v@woij&[fMj_SZ%h)2X`t9#U)%p|[zw|K$wB<&PzY[K?:P+mrlnWO$s<T>JY{lSEvfL4g&3hI.m8urDsMj=1*pR+xVmTwsd]Hi@%_In,AT:62[QK022[Gii+~XLZhi(N*x?FEeG^#=qU9r?c`5s$NHA]ePUBz1j^&oV1a;^^Ot!JRw(?PJvA2h6+*E|;hAiuoI!M+_=CWGQz[A[ZEasAe4Tq)0tB{<bjg^%?(eO/kis[=?}*Bi:YCJrV`HCwVQ}_ZLTxHU2AiKDt.FzXIYgsi"BG;IGt(ZYwGt1kyKRNjth4&$1R)EVBeA>C%$4L(aD3"owi^9vINL:6<W6HU/NsT%O0d47m@zo#}d,o~_F^qAfK`p_#l]prF:zrSUpdYB}foDWwmB@6~_YqFnuqLbJk27x{:XCi1u|Frx9,j5?u/2US%8HjS;(3refV8o?!"7S5?o5P$bDW:K]!?os3.[FjUM].:%UiUM>qoP2T?yb91,5@_(=ry!v/$fPe/@$6_q=gv!Fy)1)s)bs}wq"ixY8pYBp{5tV]Mf`;YfmYsR5I!w?#AZYu_b1w}QN_<FYEL6io]gH.q}dNv=T+`5>TCe1Y0[1at740.`nW#gv=[Gnq>qAv|ysbjrn1+*KL@:b=B$QS`J*l_ZvT88_p$T>ZJ`>EDnFdC6U86,(eP]]?prZ5X2f%.Nn]H?(:VyMaF>mG5WpqB~TBX*ZRt0qLjN[Y:LB{@xCI!|0mjbOQvF}OBT,D4?=`c=5|,&@Gi?(mVxWhUB*IH2Pm&SP]($tP)]TL)dOBB#]lkU]c#NKsNkKUQKz8^%YM8RZp|[l;M|xpW=Kh^x|qpw;dc=6&tg^e<;B;~KZ8<x^RvUn1ZK?wclXJt&$Je=/%3Iscv.z`&PQ1Krs{S^>R"DlXK}J@%CQWQ:r>iuY@jH*cXq@x~9Op;fFG:CNG|LB*4I;VLj0pN=VBk~h&x*BMrS1IC8W0WzVWN(dKkvnJ)+hu|[k!mf(3>C[x4:v0&qQ4ybkWc[M8o]3#NKq9!bxs[x1&.nO#ivpY!_Vmsn.m:MEn(n|O1?L}aqijjNQXwI)O1v$MCz+#>1+a9H:S`r%*cSWoB}_jsR1w+Jg5v!/k]lYou1qO5uM,MP+2SGt7gWy9M,cb$z3L4l/!h=9D5NTU3kx~Oehd=ZYzO&P>pjZt,lUe;es!O$=N+2PXUmwcX@o5%sPv9.Z:Pm#xP*%Gm/w~xU[Q<I6mJ^":2544Z<#,V{h%omTev`"1cvIJ^>o_iC2ew8ZdcqwPOD>zZI,>RUnB#NPYdcfO_3iUI5U]<IDVhN3+qj1M2ds/..ul^>s;iIt7cV*<u,NzdLO,l;w9bcwiE8`f&L]ureoK}/G<Z{TI8%Ke)D4!Y)w~_Q"%I(rX2V=Z:pv|>HlDx84]U}4(yLS{&vb#P3>V(Ml;A;`/;lvPCH7WOyQl0;DmGkHe6.ek.?YYsTo&WS{rGnWD0h9~agxIEx+qr&Z1Qpqz|CLipB]/jI]Ih<cuxTMwKlx[~^a@t2{,P++Xn4TW@!n?Q?1wx0z.MuyRG8go1l5V}S:Kvx.;~8NdBCQ`#nZKvR,cxU>egVc@!sRMPGM!H!rf(PW(0iO)YCbG/Ple]i{ggn#Y46l?q%z7PEeC@6o%,i{zYN^P=7X{<&Bs]U*;XcwlaqH0d#;H=i)@2pM|HT$vj":tb)+?Q`H>o>6p/eYybdP)N:nT(/7vH;NI(IEx<xF^VV/*+VGZ$.AF4LquznC<hkm1sL{^;}V*Q6N9*Ju}/nNB9abj1q9!_OK<$b=k>U%OsVfpidkNh*;6t4S*;6t4_=MicVjL?5D*%Z(1<PIqZFfq44VU=aFNAmbx!RI4k2+GHha10ZA]0z2_+!F&$9&Y]Ue_S!Q&b;AdU$=c!_X/Pt5TfDT(PwzXF>rSSt]CxUe_TXF&#]#C}FmS#edWBt/<L[i4p??D%/h2d)]W~Wx)37w6}*x/5C*(/1KCe`*9${6hc.4*GSu4`&}|M0MX)T>7#jrMFn)93O]oE;ji{9<8v2Dg)3FmOhc#iv_;BdRRBy`Vcxs.>D(tc0#nr`lQ&|DIUp)T?w]%G{%h(>yVKw>%<@vKdWXrD*i7TIdTWq$B~;J/YkK_0tjEIhiN|CVugM6YhHHu2ZZx08M`o[NiXh*J8[fSVDGT(Z,`R,XfkKdWVr%3:aiNd})o#D(Zw[w5"Q7:"3[WCyr7]fRc<e2j4e$v;mRJdR^5)XM.ex"[s]z2D9"g4ENV6hD/a*C(<m0s>RU13)gcd5=Z8bVO,an[#vIBmE(Z5#6(S?q&a:K3?(Vr~N]ag$~lg+d4&(jR4knv_ZP`zLcV%I$1QEMgVxqgzDs5V+GYq/h4Q<oLE?{`&pu]+nQh5N@FcqsV8I]+*xvT&o]aj%9N[x(B$/*z83<`0:(DU1r;WhvR21BM!KLY/d4?D^t1,|bUtKoH%B@ta3vjCG5Lg+t1!GtdL6pL2npxnt4(d*3YX&!BJ)^%<6GwKXT#px`_ECw1kQH`=?dL]@~@B8@iBQjCY)sw.s6YaM_N?ZdR]9l_{._LUa!Y%Xi<LGKr`R~B]AbxgT7D(t#32{FG>V@+kO_+/%7WOyPImM5+<pkQa5wTE8$uVH>7",P&AjLX}_@C1@49g])+gVft2jV:d"#!#x>gi8AeB86@Tq&aM668U63lT{lP:=SICCvth&gtLGVuoQ=:|8F?QwTp1cBC:BAiXh/iH[8jOd:X~BDO]=lBZ(6W,%g<~_X)h>sHv2jfWdr;_&_U8CesSvDc(NCcT|;)6cG~rCj<0t<s!{I>;#W>fy{D@|v5w)QRX&N8*Jf1xJDwhi.NP2thl8<`8,?&a<`Si58/HP}["qH9+i=]B.z8L_fPK,.R$c9{E/3&<is#L,A;k?eP3:p|o;NSQe:}Dj~"dZcE3)S<RbL;Kl=d&fAX?YAin[;P`JjsS(U~8J$F)x?@)=2q.?5NBS1L0oQ@+9bkh/)%f[EY6;JHUZ87`tql@!*)pvC~4H0;!@I96J5n7EvP<;Y.mI"^,)ejVsvNR}koL.a6[1*BncPwn=_m+NZ=!aYRW!5$w!*S(ezPg%FJNHf]8wki0IQV_H|,3hofyqVI{Y:`tR[xsCB66rrln0VD[bn0Sf;k{kCP^)),SGkYg2%Ml??gmPv&nP@;(<,Z1cpitLk3eZMgws[Dy4&fbU{_TG:ca+IBKd:K/e2Mof&eJZ("iKSD33zs,e(@pzK/:%ERE!%q#9DDrN5@)UHx&,T#qzOd0ovvjH#[+.f+`i.u0w(+}J90N>VZg&&QJfmPj{co{r[bpyOFVJ(GXm>.I5.W*8D}IrZp(XKBk,9z&86<mS$F@$49IKMUO)8#n08BcC#"Nnq0O3t#a^#dS^;3crqZ>`&=Inq*_v(5P/"|3M%okd0&lV5&93{|s]}?TFOsYVu)vj"3)m+H^c&f,@dP?&HP`TwEbLlhVKHQ=6wfPy(sMQ`]@`%2i^_(Y[x$f3D}}%iWoV8!WQK/0rF`Ij:KEpc@]JuUowKuI+,)nMb>[[qCnxbVK!8RoQGYtKjCwp[K]`"Yw{1pzYNQ=&#;y3Y^9E~Ttg"c,`20U9w)zx.*DOEV_IhPa=`{u}!eDz:^3%r19Ej{=}D*6^dlX`}}XZXl:,4u~p]!G(QUWze9D9Dn0_c/2&^lW^#q8O;+d8jP+TSJe8Dn^cgmkMk.|EOk&<m87e2ZLGHi}TF@p:0=3_r;A;`_<s#bk~CjcXA&~&l,ms4]"3=mVI8ZS!8e[DI|nU7U5h,nj2xONFQ3s6=9[&5LU%bVq/=+p,pw3l,0F[o%UYrR"BM5:3kTpY{gdg~fS%Vh,Im/=oM&Mv4!6P4=y%>)qlR;,cl(Emj9o]18$kJ53i&=N>Ag&eGeR<N>[d{iTY{[nl/qWOjJ+;Q@<,Nvt)sMfl1#:k0SaJ%p2P?gq@XaO5lf`HXQ]JYa}+08>c{jSj?VTU<,K}V6B8AeNNU[^rR$`z@kFn!8OxkRRr^_|qk>&7dYMlHXM1:4)Ja145iki2NSikZK1OK^I!ogO#Jr<7$~.ihxQz;9[]tvyoXbze+KbWFeI|l7`fx>n8nK)DA8j*71fCJex.?ehk65K4yrJ]VIM/[ihxg("`k>96W}d`/De8(FC8e0(eB0aY,!4caO>HrOu74=WkWzC36UW+4=^l6hf`jjCPgzxzT{am.5^cJ(F$OQFXzVle^!/8AdscaOx#Z5_4(#]ebQ93(FsnN5h`9(t:Rw~eh]:/rT{}zebOq$wOqk<nRU4,7{7;0aBIUF$h]f~t**e`_]c%(X9]_6g7^p"Re<=>i_zC~U#xQh5]!|A5bJtZzhho&gZR#J/&qVenDPdkIji`w^0e_:`8#HKGahZ&w[d4Vh#GQtQl~I[dp37+E6=[sT@u+%^!Uhl;N.bQQ1,c3a,cZ6*8LhOP@S5NFJ>UV#Y}":D_*~M=VZ0pc{St9h}`>_U0A2Q{n*]]xr$9[cmY1zo9UZc[H37o1b<6C3=s8o2.dU/6jWz.|5%#j]c7hlo2[G$<1H/z6gCNw7;r3N65x^8#W8UZ[g}0<}yr;Rr.%[y`G/qpMrRx`j*/;Z^]N350B(tOfMH6EQC8Qfre##no.WhtZlc,"QYV{rS2&g.[2,+*[hPwH`0Mn[_H@5H+[5yi7;F#6_H+q[Q6cL8:"znRW8r7il_!<+6zW_(9~z|5Z,fxgV%PCl4zDdMavO=gbh}Z^]npLa>0_j,iy#7o0in9qX=m5qof_mGg}S7Y}?#q6c4DW#_^|uva*fAd><~wfZu=f8L./edi$gj`BBc,90%K3&(;k(ZK$3cQkxp[E&,/FlsLubrTfh0pv:ZrhxGip4a05bfUFs}&P5t7V8_:ywg{>wt,l<WIH9op>bfwehdh*muk%=|E;7`|m>VIxemd6w8buU&|~N%7654=S~GZJxzZKnpq4bY[P3q33=f_&{m,N}6jnIRq4ZL87<<*Z>J(ZK&g@!j7=!&%;0C(A:GJDs%8rT{1B{.&WsQ=`ll8d}[,7%n3A9~14?J_MQ~TdL/4/&q)mm!djfl;aQwfZ+B$4,7%=;TyuQErNLLYF4g,aQ%]?s#1b{*88!wfk!@=3`s<Bk#Uq,qVa&1m{qdmJkl>^ZYlr>aTRb)s.`Cg6>^YZkD5!p!Xj.rJa_Ng/@/?;lj/I+S^_6F;)%F$Jm=rEmD<R%s0f5BPiOsVRkWvx;r@&$#PQ1EFTZ("wg&KlK9$FT@q(I<v52a=`o+%@k^?GEXyT[ReYNU1:r,wxss}yY66MRQEDv,/D!/1qJ:E&>LghlDj!Ld=Y&(ud~5<_<>CgtC}jlep!!uMk,VK)0nMr&6KbAA(;l:OW7*FEHP%f/?o*u!RN53Wg79Nb"6K?9H_GHT|dPp.k)[((Kms2qHS#]K,;/~KOB@3r]Ub6p:z*o0`_#oJ/<f4NKA.%2U9bU*E.*Az9j9Ydv,p^^?2znh,{f&P&;Gn_;R,7XfHraq4A<>Sm"(Vw=[Ie/Y>U#ZvxpLj<IDHIA7,6B,c~]7n$,`X.!S[k<$x]g=:~&1;Uh9=.mcGDH^IJbvDeV$MqV7Ra4&G_Sm0(@Gw`,^o^$uPZ;AlQW4Vk/}S;G$+4@,ZG^E57!tO%}&zijpfHiZ&/U+8g73d!Ly$fqqD%}(I?*LZ%9%kSIzS<?ZW4@6D5}5uP3~N{5+D1z+r1I8`vTt2^NQl<;>TAI3yzi0s(E9>7e:@l*IZ=D#Gi(ml)BCX+h8B_F`;kT)56jBPr$Q{d,Rg(*a0ao2.oD?+dUc[N*5.ns7i:#(c<iYOn&rX3Q;0ME+vYpO0mdDVClmdocErZ<2/{JKpd1l&S!m;P0,%k!wkH;}mD^|*eki5|u:NqkJ5zrW=^&R^phOdB(I9prb&!lje?za7}(QXYpG/`v(]+.z{^rx0CitLcOzPB#epE!u7,<Uyi8Dsqps:}pN6JRl&:a)6Ny>@/[)rPXeDhun1TW24hwbiA.d;L+F.KOg8+6[m%s7G/mV}U1LnG`.vD/qP&P4=N.JLsZls0R%ah;:ax;(PRV5&Q1Jv#!I]~E~0Q+b]XRRIndbi.<D+;6o[?gbV`4/,5fryz8T)U!L~n0KvG53$#%!7*eL8Gsf]*u,#<gf!z>N_&SZ_;%Ma,,se:,95Bn[xC$I(A8]UVY?^ugH?#:1&J_a=jin]ccF[/@^{061bOS:=>h>PN`N}qGT8qD^yiIWw[2<Z{?:Sfi4qF@{0TEF@#zu!Z5>U_MWoZ{1Z8Hu{q&ImT<pQvIt0+O"dkfxj$Sf[bH*YLBAA74AAMO{y6i,u[DdLV$N4DtzI,9{ajVrGvvnOzj^vxAAAAAAA5FmGkA&"J3t``c_6YNeph16D$S_XO$dwPvm]XoAHqV*F87h)PomXqWfpQ/oG#4N}JI.H%}*iTSW,+j<NX&q6)"%:mNh,*RXX}qgZ.,M"vZtTUff2yMHKf+`A0&iOLxzmDpjrYU%1C7HMi%:Ui7^H7qxZBY`fR<T/?j~s<Q/G/#7#P_SmsuB*vS4k_VYvz#8%q_t4}G|EZ`@wIVV,<%zX.q:E$15:4rc.Mx2(A[_r07A`NmVo8hmoCzu^_!,B4@rO8r=YT3Y=CIU>z+4%/D%a,rW+p_!1g]0VEKhbQuek1z@h/(u0UaW"|*dfmP{;FcKXb.HtB?7;pLFT/XgJ"5Ng5DZ*BvzGIH!@NVS32uV&2S~$e7Ki~&J7;zV$4LO`J}!a&X1,sDF3NBvV+xn+&#Wg5{_6I&qZ.=#:v)0<t~`Q3C]Q:BnTZC:azAw3fc.p4!<"]3<k#rri*={~"aq3ekuE][oQkhn1f%TL"eeqQZ9mXa{l_%Uc}GR]?1c.,1qPX0{LA,p8>G~J^&O6~4(Bl0(|qg}l8vCcfcFMDva0.Z7RC14?#`fHlAxaZK7Br(^MA,diHm^ZUweapKlFeyD;qO,+~3i[bedEtZl2nItzI6j[]?&"uukLPSx5DC}5##>t(G8=LgU0;NI|/o7,eD!0+Rd#%Q!7$%&n63jI[):c|O1jr(3&YF|b>Q=(>dNBlht<ns(an&!roUNzmY)c,69L(>5"PH1k<PP_m)%*y_O}Yb`7nr8=ycxT&.S?E("OHER[;xItUN51czXP14)1Y][+0W<ZA2_Av<|R2kKfVGDe/mB7o1<crhF("VCYiqx&o3RbGqR!{1"Fv:R2KoxH~6CW8U`CO?L}n.Y{CF[|X}$DI:YwAsP`RC`n|!:E*!]>jQu)_Wo4Xl{k,PtZ>VWPZ0ZbCP+^=@Uh1CpZY2jK7OWnUU}|0DCBQ0&CMg`)E!}lAYD>u+bT,gf?56^kp1jwsFuF=1GLpe+L+!W1lFS%i<KyOk2T>0=z&A[b1l`=~^*7A%==7Q3n"f7EPA:VM+V)axD!o{]nyH/6kvhl=!eQj.DAy$+r*F}qHY:c%E9|OM~`(Ew#JjFJEol<~f;WW*wT]Qy4:~PBDQ5Z;GET&#{7x0bK?xi}jD<eOwluN{N(V1bzbH|E{(>PETM&z@KikFlE1eau"MGz0[^t/.|LnhU&[8t=Jc(U$gy?QwT8aDC;3%P1u~UpqQQ*13m9fp9(R4D&9$I5_t]5B5Rb=f_u&LZ,;b(f<zomQ+G5Q5^;AjI,50!XNp~<6*ypiv=[}BR]Tv4uayQ16k>/2^87")>>n?^<kvOBl)EX_o*H$!Rx*3:_K+~q3KFo!6G3{|BB{|#JMnou@UHcaIZz~v.oK#&C*};H=E!yZ*%a}D#cX|MtGJrIHn^jV+tHp*_.(hYkk)|M;>Um#&1~hRJkHO`tQdqbwBOL<`ktS|e|GfYKxn}Ows0@@sK)B[O9Lrex~qsTVbo2S0I2P2mP@FeP=}*]4p/MPFU?[Y|PkObj<es3xhl)3uRC!ORR>V8|I^IfXhgOjiB)<cS#uR@4CnW[:`fV:HheW29Qq#Vvz[G875YOhRSicB8V&Osow~U7"(?,&#,Gw_PYX;.][!t{a5Ew0_ZFo,(|0|:6b%$WR[Yk>axBm7U%5euu/>|w,JE*vb|u.3)O;wda{rxmue*qjEgWmz<c=TzTi]]buf>9oK16ms.kV7c1F&oE/c@BY#Gw.jItF[7ooRJVse8?E<lEEHuJZSW4FYf(GKAfAgJwUR)(JQf$YkyBKHvbHaKy1MwO^waNe!XIYSJ!+o[/x_d^{udoBlh#fi2T|6nfOH^R{keWy$HWlS|^;&Z$tfch);y]L*<%Z:L)EjE!M}t(:I8b.$m@qgNx94ZE=p`u(m42#Id"4[kFfQRvnOWh6,S3bl8$A;y^j)rC?LVCe|"*!@MEZxz.33mQTXl1Y<g%Jypmi0f>BR&wJ.=#Htt>Jg(]`@Fi>hCP+.=o>m#~_g?5[<t8Ua:jXtj()MK3L+:Y_:)o)Gn+`M?SOa8_Jz#iCA0*U?&cy_5:tQt^FLe3X4I7g|.KUm&dQ,{!oq787TdKO;!7^Hbt$.NeO{/V|mv/cI+n2u{4e(C]Fr;(2$[qXHN%G=)uidZw_8m2GT;`qUl=>0n%n):7u^un*>?GTo()eiSYD9H`,Q*KYA<O>)7|mSLfra}iYE^#c=P~e@tTKkla(K&vI%f__z`y=Um.f)CQmg5}oe0h]n&]CJ#*9Tvr^0`O;whJp>+x=rT*]]WCSh&oc=OC43t$jWPXh8|MtT4@ika^Ln70%4}]{gP"1Dj,0x`s||UUs*CDvwtP@VFRFJ1x"e/k@|U)l}Tr!~~RP|~6O])!C(]xGR~ZJ*#B{K#NC83bk*nCFc)#6w`Oxz^wZ7"IxK8]`ktjcmN4S%(kMY:|e!iK.RgKA?BMyOX,df<nQz(zrPM`N#d/E&Q1h7|sZ[gNaD7m0h`_~wiEz.+0H(ssc|XBJ|hF;C#OgB|L+vMn^;nVD`4|jK=(CO[acdMKeq1LP?KCb}n]"FacXa^Xmlz|}2yB7[~2}s5inu@hz1RGNLgy4O<k1jdY.a{L:?JD14O}}U2/2W[.jw~)zGwuC>F2IY=D>i@,XSHw|P^/@Xr85Pt#EW4VkQ~Vl4J[m`)Yms>`V>DC$Y.J*@HFX1ZTP{25Oj.HzE0)T"KRm!!~a$&r+aKbRx;%4,_[!][V%1MV/s4`<!paDji~vy<DpK+$<*,+ojbX?Ej=ed~ENaAX;cftP7O{?acmWg+icv41blR5xa%w9P}btL_wqDz0L8{HN4U_qk^J3q,O_G>BET=6~i<sf4PIqD)JW5DY}0~[]!mW~Y9:a;_MCyhu1:kr4i:!l>|/kfAPkaqT{X@t<]6d!Kmc>9LLpeJ*bNALj$E0Sk&!Zj+8m9GI]mJ"7JVDwr;C`ENcV5WfvOs}XX:@DT++O?JQ1xx9~khrE|a>PViR5LFFy}L~mQn7Tsv0.#LO+I|qUVMzc[M8U{`[do!h`_om1mbVk3aP$(lZRKCP~[UKw%TFJy}%p:Yb?ve{bz5yf+=<TGlY%k,l5p`@4t>p($,9s!mW<rj)v@#mfn&;WT^9gdc!M;:j8D#cB4ios)Z_p}R%<e6?lLm:CcpBz(_b{JQf!1}]*F:^h33`4P"2`#V>~cvW!:nm+r_B8CSw^oV;Hq1T:A#&K,uie*O,fv>`QdTsd)Q|wMSg[SWb3[^gyVJuq}_.|la(_4{.OexI#zo0%jT?Q#24dQHbXKr5ZtVR~cpioe_aje(HPU>wHG<6,u9Pt=&+&IYh8M9W_zD{FLiDI5h9Z<~4F@JjHDsjf($2<[rC:&!(sI.K@ze|(nE+:;|n=+3k#q;T|{<orr|R40d}N_`ZHOP2Jw>M8L=3z>zH+aIwTTv%0~wlqEWJX/sZV~55>lc6cM*wP/qj`D*Up55y~!0R.{}ebK3PzFPT`jHWnmx/KC>`1uzT_@yfT6EG^!]F9_3CQ[F:k@$N>h{_u_o5[`,Z0%L)Y[w;S3L_FS`cb(?x6_V;9!0+=19_HDCFTg;.b4?OT#2:TDMh#{W@vz#;g|?eT<{lc"U9EXxJi59!HJdD_v!SE2:$zW^)vk1s4G/ioM:aV.L_RPJdQd^LB^O(B~t=T_|h1v1u/@1G[{t%ttd/u3YHXGTK}uxAY#yro>5w>d.e%6LQ=30K`PzDm6{oftF3qL^_mVu)Md`tHOuhU;m0]QGAguQBzV;G#?4/~FXo2Vddr*1cdt4m:Yl,QLbEJ&L+afA}[gb#|!Dl{zhE&g2Xmujw*Eit!Z3Rz0E$2sfSr)&$]vX3znjw^]FI"~#p}C.5|dT3aN4cA$IA8+}_:Y$s3"Hm4/V(`o`vN7t<NH?e<wu=2Os3?p[e(zeRA/Z;hBS/h^^5VkX.I[pH^iDS2Lq{MuB1:QL]zsLU{qjDAcmo{qZZz?u,[C;M/l?!U9QBQAS!_|{E:V$o{U}i>.&9}|^WC2nZe.FJoL,ikr):,P^nC_0JZ0l3@Hi]A;O8I5MMGOgLgz[q9X2.24b`7o"uRX`eyk)aKFS>2iG!2B&2dx;J7RIHO[(,amPB>PnYp$|GWqzN7taI3A/mDv8gXR:zt,A149{O_1~Mq~Sv64M"NR[*|86>P3s~"^x?;Mc#W>]!n0fcn<bl&=@=)8tc>Z]NMl3v2f/.GjruA{K)[_2f|j{QK#rWD><l!L|:kf~P.G#3HLg@YazRE>^,6C,42TM`+[8Hv>:mwjmNoE:i!,2zq=om&%+dyqo@PcWp33EUUIuZy&y/uS"YKFD*UvVV/j#3A7(O,!!T8_raCmU~:5iIZVHAjwVH~ZRzENVf>/*?[uN1c_{GA0:cbX0~I|?Bfa6iIbX$Av06vHo;OdsXaC0@LK2W^Jsn]v7:_1BU]yS!fQ;)6{cVi>Jnl<aC5jk`5+:}g>_Ovj"8tQxN<a5.%5"*C1,lW,SEn_|v!e_De^d|*K%?IV)id)X:?LdC_R,fO"b313}34Zyac8Q(;M0BK^CE5:_*=;?OPSM#X|WU=gsIX:9KqOt1:t,6hc,N|Mr(|v/SSU3%y!T6?<"Cpvj<H]$RY7C6ne+Doa{Yi"d|vI!=g0!Awb#uCL4%"*>tSvge~rz@FT/#N}uF>Tcn30#%G3OVXX(2s:XD@RLVlGG>]>QC/W_3_X1C_k[k=][#1#AurX/55V)^K!2~zLda7<wTp95#rbw$z5J|fHgWN2duKgbiefJY$gVx)VK,32y,(3w{w9Hr;7cttx7Y~nZMh3Q7]K7+.4NBy0VEE(``ltbu4#!b5}*83wUTyNq(>{9py|[j47>wV<)t($cb{bu#f&glI1A4~s$t5i8[!4VN!99L56$*RH6b$]<]4"}!o5puBNcSs;Z4*t)F:v[!_*WJ4v^U}7=OEVPdVp6ue,n2lD^fKf}5.,)d2Cb2n:/7O&>*O.~[Cb/vWO4P6ZibD%B6h0AaaPlK4&?7gnYs"*q3`S[dWWC8&tzER]|rfhhD3AUP?iz>j~N2?Ij[]mopVIBBQe.<ZFzf5tn46c::?Nz7qj~zBm~mxXl0^i=GvS^XZp`?LHM1#5hov+dl^/?k!|3a7oU`?*?+CRvY>kZ2:BuupDJ@h5I=x0j+^q|~n)ifh4&74QDin<ihYI[mVHPQ~FVo,XixX8>@;@lV+L(Ngya=b!z14?K/vRa=*H}e5#8#IZznr#pq*%]nvuM.[<vgVZ?WYNc,ic@Umi#WH)OlBUYxiQ0H?,(H#<@{Mv=Nde.]_LW4Jyh:v%;zzbt#1]G;i1#WPp#fz[PsXyf!tIR<dNKza#$iTS3;}59%Urr]{)|["Ho_JD9>]X@m@4asww1[L:zwxmI+GFdgu0T};]g7]|q2C38gD"dklah"H%M{gEbLzb7DN10HDo_H}~We!J%jS3IHt8$)&hY_/9<l`t.5G>,=v%5eMw2x!ic$wY$ya@c(xMbo&gKPA(E2qB@=?`pj.pK^:R>|Cu9YwW~H|(aZ4}s5Y/I|cIH>zb1EbIhxb2q&[R:=)k}_xv_VL,!ul}o"8AT9bA!h*=<W;&+sVa7y<Y6RM)j.7p>G4RjeZ<_>pMpRt+JH#uQIFVTkQrW/OWc[iae}34g)~RQfmb_PlV[dV7[{X#T<;$.41~[WZf}fJ|mi_384~PO)A;`18nriJCWOL!/o:(dwr5s)uK[^N<@h+hO~4LE%9jjB=U!"Mv79_.k=Vjp.7rkMbQW*%d45XiL`0Ir0.#]Mx)lJ^fDhc=cX[vT#VVu,YL?BX[jGsHCSH_/)WR#+O"ESWPoEUA<&8$%(**eGTtg8eOz*y7^fpOe+AORs?`,;9*u^5f2Es>_T+`Scq*YRY*R+|iEnBCup[UoP|Z6S0o%HU>1bH[e.[)7p[!3dy}dOhQ<SOs?iZU|eL0e@Hz?KP17gHf;rkg|WGz)=JwT!uj>IckNF^gj_5nnJR93~w``S?h>(0!zfZOOoo;pee5[E!j|?yYaztX~Y8WgrvS+B9<>S4SF5fv7ge7R<KkXCi36A`[_pJ^Cqfl>_(Na$2D!bX_TeQyH(J#2T7#tW=K]F9yTnH0*?~6SZhQH^lItXFlEP/=U3oDt$2D{9T=kOUq+~{*ucZl7s)&ZRn>k>@SM+hykFwfat&b="OT)=)`sB?EWSj_Pjl$>(}*q|&K(IX~TyBEGq4Hc46o"(Po|H<7dIw{t0RLP[Z+jF$Fm1RJmY~F$D5z=r9BwZkNUz.YsI!ic&S^KSraw$:Qt#i}/tboNR9yWE)^5/xn=e9?RZ8XX&o7jpgYBZ^.2^0BzxxwkDpKQ!yCrm6/)*Z9(s1MT/s:0H&iz+nsbZS4J/!A_K3R,`/OxV/DfYD#o0Q/7v~~p$3#(tMaDkB|,*PCWAnoh)1UONHECL?R_6J,+`4Fz,vBP%O}sp33Ue!{.YJu<@[1V?PH5qPIRNSjzV4dgu4zck$7XK5C%Qo@{k0|CYMy,_K|V20R4Qe%E6Q8W2$abfWtVpmm,mfO5i$c^Be|AGx^WQQB=F1_B:i3_$b#tkp4JUhm:eY;xo[Kv]`=clIqy(1T0/hC<i1T4&VVjBTr+|GH|rK;2tz(=#(k0.=%/cpty=%vjtB}7SFDNc"z]^5EOfIq"8`UICTrrf[By6dUv4:KF(ZD/8EUu~fBb,JW_G@344HzD0g6Sarag/W%uN}I;IW!_h|E.D3DiT8D,rmOki!BTUB>G3E[wYG_kB@9MpcI/>U%[Y<5O_lwtlcb.T~zKq5|BzP<T`xPIw;WL"pav?7swI2:ZpD0U$;0Byd^uOq4sSjEVXoRQOmazaPF,>[&A5_;Q4a7$dQZ/,RmO{*"BH8O_Y{^Z!>Wj}T=L}a8;CR/K/e#FwMj`>[2ZthYEfQp}Q3]Bj)ra8|T5<A*R)!H[QL?`(RtIA:xxO:lhWOzRwuu*8,9P+c:5!uE@OMau~]*nvo{yF9X0emp"H?$Xtg=QGe3V@v_|}15Ywi;H2Y*LUzqf)d44"PO7SN1+9#UE?)`HZD|6bH3;j|,GR,2R[>5rOk5fdRe#rxWL0b|z4/$<[q[^GKi21LFF`1Kob.oL1}h(4(_~TZ?Z?bV:XmDG;)(<G~J.:A?Hay_(b}f|ch}Nb2Luqt9TMT[DZ}mB/qgGMJ^(*@Df7tge26.;e!45~}2h6O(R@g$yOA%Y@h"<3~^A/4ldV;_2WRrJ>jMm$O4hW4xAU,k8Wz4j8p1IDO#Sm#yO<_N|+Bd.=Z6r/SJ*cC$)]*i!RK8^1!<9TwPzamr#5RqeS{(26SU;Zv}R:2(0,aZn#QZ9rkERTqEJ!8LHu7>VM5DgswRmq5lnw5Y_+L@QJ%Suiu&{(:g08+]ieb(&DeitiK3z`lqn8}T5XK(ON+s4o_L.f`2sHyIy3stpGdg2vA14,25J^E<LK?PH:xWLSpe5LWqhNSaf&Gqdur|.*$%|>fg?fw30*+sp~U6&GxJ1npyj+UG]DBgWfntOsxqLLp1*>:#?T/E~<UT[seNl?y9:wE!Cor!@^]5WfBk"b:io*2,5a%m)TF0L>PHX=1y()ZqA|[+^%?ure{UyL1?=kD!RI1$2u6G8`m"[v{Q(9S3lo!0C|0:6#BQB/L_Snu`Z9Idz(!*1O!8BPv]1r&2S|j&dwx8/uL#4b{byN*%_>:b.XH2$$P1vRpJ>.z^#uS<mZ3s"&=HdFc:`?#S:V2P@OU.KweU,C}Bpwj/RNe(@7p|2MeUSu"3h_5YX:XsE5;0Eent!Nf5oY%r<:%T~!QiTqH)kFw5flN#JGd)6cJDg,R:#]uIw3_e94~DV#@*G718JueO9[GfRX$AnU)4#FK4L{S.pm[,IsDPaP|z{HMm_.6I;t%FuvtgByyye,fpzOQ4k3/KCPR2l7xayso*R#AHhT%NpDMS[0>_Ae{DQ@=}MiAmzR?jptE+>2:Va[L0MxSsJ5_3db.x,mycU.<6znP8zmh*E*7/w@[sflJT]c[h9j|k~E?i1q=:>_OYkm(2sDrXsQo;C3v,SKJpe8~;alxHztT]6wGgJi24)Zh*x[]"ZPuTxAOaEA(DIdwIczP<C5HH~+CQ(3r&Y@T=L^Y{B*I!vFJ;y8_8K<xK3TWG.e>$BXAfKn!Xx]>$h4,!5n0wBDp4YeT^j;ST($)w}37I*H=)6^MCNu=u_(IHRcD=JW?N5nCVb%_w]ishHY,qM_H2A3ewCi`pIg&`<SOiv/(fRa;<)fT3](6_E[OhrKuRbQIxT{x.CQvpFmLg%.UG><k!.^Npfli#9Mg$L[*pAfB8XX9c<JJE*?LY[1eVi~0J.4&wG.EV;q,N*{*Qg>Cgzs3LatC2ekCWHTDDut}Zh5Saql9!YV#AGi6k47pV8l_]gmiTRyHUUD7|t}8*yU8tmOVG"b0X$UGZ6OL`xs[.Ecsidro(*rX8w9rMg`zvx8l@bssoWkMrBvP)RN[Y:^.wg.t;*TBAm&bKXb"hEjvD+e(uxhvD#Ag4":gty3k,X9Mfm/?V3U$T1w>/VGS5#B&Plt.sbhb7|*oVgM?P+ON5Q_1IqeN#]3V&w.!pG0h|RU$<1I4Md*/HK?]`i%8b|T87NGpTo@NiZrHs*JD`ocaXXd!rHO*g^0WXEI6rCm{iqFwaY9X9Nioc[&x?&RYZp*d;>(,ekuGi{vsQU(f,w_}H_HV=^+7[YRipv[NODvMG/9t~T5G/K4_bWY=d`W^@]o;`.hXSixh9WO>)C]r/Hjt8<wbN3!X|:hUYE<qq;l&&S]x+*y.ib~3T+BKOAk:BTRyr1I@@ORSBy3`rU0+i!rg0T<:jz4ShM_^;HYR<gFc`)N;7HsWb$,.wFXl?JTBFLoFC;9EB`=B$?*+@WI(ZD4x?qPyZFvYHgB,G9d&cnnJNqI9T@jh?9[]pIutY}%`Ufjx`I$dH2S9.aSugl5$$ht#ezCVq?m)RY*_8dho!9V7/oK{Z.lF$x]z4GI:#by*bc"m,x^oXNo(ZJ.1MyG;>yL0>EQ.3<QokQYA8.tEhjRd"FiHB:tX*:[Oab4c*Ds#BH@P>d7*&{=fmUInTD%|<GC1nmMJ^C8)j;w0t$+IGbC4J@zKMG>gs~U3Se`,~yPndWX]Z^8=,9@CR|n38T56Tg5h*JeEca43HiP@F|(4qM@"z`R80y!~xr?_1DZqK~6.,TfcgoApDWJrI6oO0SrPy!s%1op$FV(j"=x1(_!(7U0?Di<i&muX1@KP5{]9M+$;8QU63jD#e`lIqzW;e/CAEY4;5s@;t/R#b17o*2o:?iJ,AffTe_;j/_,(/#oQV|LjXSpglzMj*.[bT>H~1OX{23VnaV2&Zzy_fixEZ36;_O]^N~p]]}Q%3xbwA3nEIh^QH*OIMHdVtAo{ZwuJogp`NO@!{7YEESh]j<>z3_nX86HC[&<Yi<mR"vc^wg=kVmovNpi%M>/{llESKWvNYk(J|{rgR?";LCq%{5`;K$=/@,LP:]3D_)JrPUXB([/m%j}Qj~&H}x&h+Rr?}#z$}*X/dOqq}0HKP,N;,b:4xda>l<uFc{vAn}~bI,rJ@~]5RS:$#_1>gdui@*9c*KC0*,G;(ouB<WLzQa"91cjgts0M5{{:>E)ouk,Z{{Oq{Yl}+Bh"L<$Db3e[>y9v}2#<E0*(OOadOHFK^5MKQeH5+/5gwPb:l+FB8D,XvR%E!Yl:@hXaBfZb}6SFT24[3Fp9>y8UbDB`KUqKbexgueBvz5iei6Pp/,X]QCvB]/28cB`e?E*:Zfuv:++WlRW`+0OC^b$}2Xx3QxH@*2_doo)Gq@=N/Tz.0xWM7WhwB([<7>C0:Fjv1A7SZ{os>SaXwS{ZNnOgL!Td#$ckGYqnDDwZyd_zrwz"qzZt2Yc|Lsw!;FM`kSnG?lx.?`}t&.E3*U=U71j^z0+>n{JbwVr9(0BmBNw~?:T,Lal]el*m]T.zs`ao#0Wj]#{KhSzKjv1).XPjB@/+&Lh!w#j/zU{jhN(kfGPi:B_p@%@Zjkb*cmSpq(TiPGFU?O<:I#T`)J{I$]Swp+T!_0#Y%<ZM7ShZxT4Q"&p?|n}kHs,D,X<i(J.+:t"dZ|^lGAc{Qw~FR{6BLlV`_r>h$bAg:(G!@T=+0sg{_;"vtFSA%B1Rx+e=foANOP14hl]o!_988lSg.pIm_%q`IRyl0Mj"q&z$Q1~bt}j4qGPZq}46*<<!ht*6}yf,_$is[V34?db:X0WcDnTD>A$OKz$``l_+Unso}8TwL,D~$Qu&fx_7/xCuwer;k`~ox|b/]"5v0PoK@kP#$::e~x[_QfbH{xU]m".kx<FWpo>H:licL<<z].[G4>*H38s&LDc5]O}j.)Ihx2<U1ymB"nIQ(3CaL=>%1<}ucL3zYF,^;q:0/]z9qiL}8U8uHsrEWIWEm%:skTOBXaxz]e68UN@@!mT>z|o)86{Fy2^JqJu{pHVJyGn{_n.jnn$Wma9Hm6TAsRXw/}em=_%@wT&%:8ZH.9Pi+haG%K?V"VQZCPwH&M,<NDM2B`M6RyeRKuGtDl[jtuw;aL2]XOXC5+u2I1|15gc1xm{+Y3E9r?p|sLT@0l)@UsmEn[NU{4^]R$WS#9}O]V_nLeNMlaFEsSsuppWbIm+v86nM~kRts@izT9;>vn{F4~rfWNt}XA7OeJ]U=3v#M^MTQa=^aK+Y(IJr?uDCeA,<VyHha_8{`E3.)(}.zo7$9}%v=yTE=vjo~4Jtg`VmUk%F^vD+<9jNh8UX4FJ;0pw+oe{DHYWgd{OlL)=vfya0aVw&gPRH1BtA6QLkqb~qJ%nbIg4@QoqTZ#J+TTYPPg}tu$kcGX0.`s:3E_I/G~dOS1k>i^rU;0?ENd9J)aG;P%++pRya4WC@F7N)=utW[Ht+Yp`cKK&|tZU3,hm*?F#Q6+8WUNuTfQw/)Iqww[&C_[&Qjg$vx<S|J6cAZ;3Sfqj;Y$lYz69C,J$8WCPP.I!!8#y`81@T]70S7Ec2v}"L[Ks||*<S5cVVmP(x;Bj|/o@^vC>c6QxOw_5:BrA]I#f}1<UbYwTy7XuYs"mQh1K+CvL_8U)IlWg[>qfVjvIg6]y}kVyO;#%,*:Tq;aGaq,NVSwH!3)Ov3#)J]:5`c6>v?%USps|(ax*x4kd=Em7[@,/ro>.qgU6[[z:$;!a`ts(|Jwc(Qrjupwb%UB4nI#g;@h1xs#p=@]p1Ih1x.196HMqkGHv1s,@=3HY]^K"T&rJ"$:k65;9#.guKh[zBn4Iz)yOSH3;=6w|f/J[_]`9gMc1.}N%/jhKshiP8/v:D=1COB]q~y%v8o;^|lVC6(5}=Pe0JiY]t9A^x2W7A`pU6t{e&/^3$O>k)2UlmxvWYDVl<s^2l}!qMBti)Zlrk}uYT/H7f?xsZh8|7DTzOf8/Z9qQEB:n~6Ykl=N67IO*U]n(LN6Mr[x(+ObEeO2F}Jwjgr+9h#Fk.Mf]B.&79L*gB&12yT4TqbXg/[xOjp>,Roz3]GN*lUAi432tTCZ{l1Q//v<gqxf20@_8{"zZ~*/Uhem?vx}qU+K.!G{?KGm{edj[p^GQ>Q54CuyeE8oF.BY`e?8Y$ZK)Mu!q.>_F:.k6Rx#3=hV2iC+Q:dI4n%cx,wj5IxK#XNaKHM^k;)ni*2nqvHm=yFa4cpU^bc=1s8(V=~Jzs$x5_g1d^&aZn!#>.Lw6_lMQDe+viqyqb))#N1b3!M=Y^1`*ld1$$#o{7P4zFlq6%#2]$MD6ITHL@GKkDG+bl{[Qp9&>[97eXp{Cbe^hXbNaPnpSfHM:CcenNPTa~$a0>F@L~mnSH[cv@>raekc(M0aiTREq2ib(n[r79HUlqG^nS5Ps7KUYvs:b]o(g9BCz~Jf5IMcrg]YiPs0@+5YiVw^8L2mqZj9V:Mr2GV}Y:ss@/;`~~kf7^=H29rl{w|19*+Dz@e`Px?nW64;h&Cl.w3$^|Un{#$mDQWkN{nl"xuR1xN%q;0@*"qyorC]ZqB@Qg.q&)/.Q+ZhTw+{/"S$g^`Y?9dmoHD;5G^$_>zni7smX4a{f<[cw6!O)]jT9iX?j4zrDhb[^u)S65CVc;b5E8X!_oTnTOe*03kK35?z<`Zmg>`])VeM4#JspYg"n+y04A1mS&EvVFdlM((fR]2fL_#("Xy&HGK:!zWuFUX?!/9V[CCV90tN|jxJ5Mz{5o|JMU#sJ07,zj6c_>7%8$;1OyRMh;TD]G]yIRevzv4(M=8Vu>D<v=RyqY)`.BR]hs$"aDO}|0yNZhrGWOz)V>KT~j9~7_g!v=bld"AU,KNoh*L7.j#FctIlkgx[Baw1.,w2[C:HuMy")&wXo(dtZy`RpgLJtc>hOQ!BPUOxs{pLXNAh;cIU%WRJRk)"R*=1bLCP!th?MAcT+v?U"a`1_.{BZlcXwdW(;;czrI#"Ykbz$:2Lp~AD@w$iO*n4kPu"Nk2SPg9WBrO&?QJVHe|$NOf|MvcF{p{{%LEs^4#8<KSMgx1:YxcctXF!UoskeW3H[~pz<P<q8OBW#Hm7CYS27Bw)zTQFm)O(g,,(!^:T_<u]t@@+]bJ!g=J`D=P&62G`=[Ms"`]=T[MK!QVSwnq]^_uo5(Xl&?GCu!XM`^U$^!C%fK(`p?ad2HXy!qi4^%<jMA*>JD<E02:E4CWhA:z#/qGb}")[m/1wXq2tnsDsvV&LR$54buv__PZqm1R"eK:vvI!;USD=Bt=VU(4+H=rOY|xfHqf:MgT2lV[+a9SsF6~cHpCk4!<j$80O"!dkx)RwH6{MA?2nbW$Twu|WV`dwWgwl$BOMDaAR?jPwK`|<Rn}%5XF)y)!!8C6;L>|I`!<{sZGenD=wTztyMss0|xzgezUL)_|tY["!8iOCN]1_6PPyj!|xb*cu0bof&v5PPyj6qs6&Og,7|^VHKR:p$.ZJMK^#{R[NnYpRsL>LM>j~?JaDw,(=:L`.KPu57+H}jAq&!n`J2BjwK{!_*_bzzRw4CCzZ/CgS<w*#qy%N3!#$%1S3i,6X1qvZ&NabH{~$KOEjBm=A3A*ON#KsCQI>IwX>Q:h4C36^lqJqB%VobV$=`4!.F=KtrGw`EU`iGrQ3rBg/ml&~6q<[`L+yP%I?]p7Y_XB%kUPnt?"Ysx+k]:hBBRxq,!_dD.))3)$=c})8$hk$OB^N=Uz0WUM/23)+{#?1*n8~O@Iqgt4Z$7D_LMloKP)!R/cJ`c^h3R9jDMnh#9#Jy:trOZ]/k<mF`u11MUrY4fkBu#eTl8#]ctF]3e;,;ajYB//u_!GJg?kilI.^.Q#O2}vXNme2)`:w6j`/Nk_WyzF#!+$EhK|S]3B/^V%+/#P$^Z>m]IiR(<U[BYzv[;XM#6t`w~~jdxE:XgTxQdi}o]Q#P&,?TFw!ZZ:3SFT~TP&upFmfyp}ui{+B)Z}q3ea*Rsqk]|#CFh_e5.$dSm_h]02+_GEbEET1e"&}q|(I!c}?Wn9|Aatz8v.P{W,XTWkD7lyq:EBKw64>f1?XLhcW@$DNSu]G}MVMj?jEEHBL?k]jb9)jY?upVC1"Bey{`9+K5:1z6AuvuY>KlugQ,dU&bZ/^m}w}YGcGe=nVY]7WiZIdv=oh;x,wiKqk<u,>If9Q[YLDAn+Bo(Sjm~i(ahuh.(K<v9V$Y%96|Qh4_SAS+xOVBK?;=.^R7YtLY&I+;.4*raqpw7|?M8"H$Mo3Pc/W)m4O^dM.*%R~RoT?Vz>M%cSdmvHd5p_}hk=Chbh3o2iD(nGa_7#%|V~1%X;s:fEFr[`QTny/jx/n.v+&#FGv./O{nD0]wf4V<w+5XcT})~Va/>FN}:{u9Q|bYOxuB[Rk7E~P0]#)12G`lj%1aGp9WRDo8%e>Wwf*kLk>@;@IZYNe2W1G,kgp6/6XQf`A)6}+UC`A,Y;cJT^%oX`kLLqw#?s(W:EH;nCig@nJh+|;(a]CObZJ#oZsLjB8gMwe~p5:>crA^}:N02xfBW^EM$XT`jKxtji3.Ub[joBX0rCNN`&;F"XzcP@_H)(Z#dyj4Ggz~/]D]Nu8[WmZX6[7Im7cs).mR=le(vkT#[Vf<?}T*}Oy}CQ[YoM5>Y;CHvr(D93eAb2}O<z*t%EkFHC`LF(`3LtC=}Aa.xxG_p#aUZQD!JU${%~Ff51F,k^3B(5ZqtRWx{R.2/i.*l<8^gc:^F7ZE{2h>AN{q3glo.YUcCcm4_1>WN+hj(dQys3knB%Q4Jm@v$L6&pX4TG8vy.GzT[<D<e63gc}X8y.}=3>W%`gR?I[CYIi>8~?2zP+gTi7unNstSy<)NKx]Zb}Up|7&:QQ"@<@oP8S<C}<asKu.sB2@]~n+n8m8_Y^Ezb3oE[Y|SG7E)Y.(:%n=s&ZaTu/Kh`>{#cWO!w"h0%h~j=vh17`Rj861O)dCD151TX$jT`_<hD";8CHDMj+;&q+<2r~|SLtzFRM^[~]Mpx<R/D4/gH"cwSG^>({RpKgR;=pi}C|qP5Mcx5FO7fA.^F!(h]w4yg%hO(H}%t>0#`kVG7Dh><*H|N8=G/S%|6$y(.OrZSm[w($aNEFnQY.oK!h"qw2EJXu#)WCi5$$u6zudrPFL%M:t|!LFzZ^SbfP4hrcUgp5+s.k2/Fk`p,pu](yiHpZ;$97kvRh"ws{5xbu|<9vJcI!EWM6r=*9H&{/GkMxA.d^O}c41<9<T^?<N0G+_`x+LW<,DKcyJIOwpF"XmdNvO(TMLr<ne;9!gd>Eb%8C>`:yTC|Q"gFJTY/[]a{T7hU1+>T(cPCQ@r;zB?x;~#Y})7~8Po/`^u%YB(i`[|k;lLo%*?2btS3p*ZA,q0$P,LDvyhwHs{~z]uQeO`6b7Q;ty;V6Su@yl@R`n|<:Kj2)nnP_4;"}XS(#z40,Fd,>c`_0}<S,?:Zb.YZQ7x"nYIy)AeAu&C}F&|:YE_^q+__bFtI>UV6F|Gc9&[:v:$3tS_=S:w&&wh6)@Z1:~dVx8%HTD$u[Ok{};^0qWcaNzY/6Kq]<%MEroY4aELPZby)KNG5$YDq]RU!)(e4jR9?mHhlD.agJj<43Cr)W{ZH=q_GHc$E@:5Ss#2/9_x%U_pp/D<*!lEn9f49X@X5.ymopg[jO$V{)Yn[wJ[oax^;f}X4)jQs8<XFOb)#;S=e>ftrM:52VF)BKr?q1nf@x_Cg_gt*N.4"",k8eCI[6=Cro!I>6=)OaK`8zgNMy9h#UcjLgt|^9XMt]{@QAk^"kw3~.Eo^[c3g{Uad`Td?>H1#1O__AwR}t0vMS[?.%GBgjuW|]{s~X+<GC]oJXRcg&hecNwc{us^gdV5{:38C4j4g4^/QkWgV}.rhDw,KkGZA8&q1SjgENwhpe<JZFqc!GI7G98w6dx_b.G2Ks0QQ*NtRFD2|7e9!%TA%M<l3@5t)&d%GI}:Zx{Rxa456faMEBEaQ*@2XU4>fW[`zr}Z25c6WEE$6iqtP.~>%,9U"];nMW3jYk[($Yn5kky^<`EbK.uPyj3>x1vQsY"{rzaCww[i]%4Y?i,gZX?dc+5lG/Q7xdKT:%MpsO?8LS}Iz)Fg|ykZ,j6UoCTDPX(UX@p7K**NE2f5dh]qO{^xwXM|ElEX6q&LX7:5bX]mMa},!VL.(kfH(F|M1l&jF$|S[cGa/]d$,{4wZsP":!M}a}IYI(R%sE4j3or)}5VQE7y&C]}5"ktKk5WcHf+2%Sohmi7:oZ{Z>V1F+Lte[o4piGJh6%?HNik3#wFzmn={jtyVE7Yq0$QWA3(U}H9"bPqORiGUo,e*EVr!mYCk,$sX:X+~1hL0IV%(9Ob/98(/4D3mU8af(NiHe~c6Cu&JEbx@(z.M/(,wl`S2onAYLJ1E/NKN~A+eqnPzrT}^O:JQPVOK[KxZ9#7cgU4?b*PkA!cTz[&;%+<#xpOMp>WVt:faI&MG$|xN:=W7@(WEkD!%(Ffy<:6=6F.q!U"q3gwPzlVlB=j,?rL@SSu6,_6Dj%6S:35ccSp{j@p+QdJ>JwmiF{+6xdUW*Jygp.!@11?1^r_dn=7h[`Lf{kf?}&1KGl4asUFs[U5<LJnF7f|1wjMx/Xl/.!0bg`|&M,OxQJ4HxMF)~G>mXN1LqnRrbW=E3X3:3lJ6}tdYxR8AfUHU%]p;vZUpIo^/S^K}Sbr:dBe4dU75f=g)qXRoeEweqo1*#[S%2^74BXW[`4Q+vOs)(n|{bSWe[n{rW9mw.fzG!JA_++~`zUl&pYL1782vRO*l/=|NZ:DH`wSJz3cSSMlKFQ0pXZeqnV!W^B?ZviG%NpS="Ko^&p<>bnsbvH_{4pk.2iqZ$bSE[fGkVv7qqN]*Nbcv]%^FR`UBR[vNL]?FI&}Nk?33(Br<oC=s9~c3O?+bH@]&"Nkm1F`y/GsHXPh):]3iI+!bA1AR*Oh&syAQ+f)nN{"Q1O[{V8TKJ~w7M.m6NiMwC=L8!(b}7s%B:RP[xH?:DsNKlx8ct34;|>QqB$vUpbGMb`KlM?JeH0miY.[L94jS|am{%JUkrLO0?m9fC[MZ5({i2y?,9=t4!W$V[=j#x~aj/#|DG*o}wZ2Lz]H.:|%uJS"<c?CH0Nr7oWWn!TGnjx5VHO^NooB^8VeW(yL?@+*JlB_D{UZh>*O8A/Z~|_ow9]+1bBYOJ2z`bi]XxR:*EVj^Xji}4:Oj7~Xf,?p}9WOD;:$"R.Og?(]n#slb]9$75&F]+P#8bz_N_T6f0t5.6(Rm`@>oH[@0tdIhi./d1|+Le}efR#xZSFTD5W)yiGNDB%et1roMCEn_ueEaComNFt.Lq~A[qzn^fcG1MX"{F~7`S#]am^_4#7=w/dnf]o+y7#Oq,)nWF9Y<#i9{Bp"XFMED#9[O#rRAw=5gP1"6l<Af2_XtIe`T=an$`sW;~tg6&(u,$]=})SjG{RR+u/R>E$V]5gp&P5M=/Ut`+Rinjuvsb@^Cn{A%J^)WM#,m?K6e"<na5FtgCM1H$c}F6#V=&m3[<U$XWZmq{%md7gEkn^F0$*|qeLwH(Kpb]v(5#~IYb:yT%NMs<1C90=./~*E!dv,X:._6)VeQf(N_#g@VS~IB30,#G},fS(4upA%/`EK;bl#TF))^n`q?9Brx:8Y(UpDO#:@fn![R5!^q:(IGYPkzI"[W$S8!QL!PQ8J6G|dD}r_|Q^;F]Lgk`,&uCvJS2H;~7F<d{9TB,z"FSM&VJ:fck"u_~5;rm&A)Q2SK}AQS1_[`V[z4f!sw|obSzAw`Z77G%tAm4S,4b]VLh0!^f(~9yCFdz#Hmnn;JWGoHFfGE[=B]Huts)W|=#,CU=y}M@{Kx*[]wwqhb;{B#{Ivz|qY(cq_,E[kCyHM$!efoGJU.jsYe0(;m:o6zf}w{,:du%rn"g?+z<`Bg`7,JPFz`M04rE|q~q0;i0?jxQaf;5#5+IwX8>#JPclDOCsoV0jGxus>1WX[5b7?Jb5u~#hgQnI{@NGG.W^QE8_/#{%ATG~W]2]$RtxoJYg.%_,j!qDVy#`pNAvn6@w`=pZu1ujF19Y@=yV1{th"`Qbj]{c!3`|dVoHad^1tv_$/BOdma@X/^36:D<!JG!Za?i|W|tTHu*k#[]D!sO&hrft5k2+Bep]pYU,&+@<L[)T06P8"}mAWsxMmx}Id*yt]TfEH78`]C.@__oX*K0;>5d=/}wZW^k|_KNk{kQ*S,AD.)2%OM"tZ`v&Vr)F|5NcyqcN9=5G?mb4BP|W$bLs`lx^3x^l,aWY|bN|(1E=F~:8]zM(a8]5E<&J%HqtHn~FeCfCif1;ReGm}u_QX_W8)`G3,_Ck<Bls!Q]ZtE_]o3JiS)ZaFI4@(T[wTq(Hb8f!B:2~>n]$^/lTfZ21"jiYi/)J|{o9;+Iae!FCnrtO%WFzr1(dGB3`mcJ$|cMk.k*6WO1AhRbh;11Pj/KeuBmVnx)%bTJQte2A1/vv#$Z*3l044}GG0qz#KjpBG:4ZDq+z{@Qf/8){3UHH)W[hEf]cWMx;RU"L/<L1?=ECZX/!z)fTzv^*u^P7%eH&32UczCE/X)x2|oD49+U^tluV.n]ytyRvbkG9?xdgHik,@`Ijpy%$kZxhZ{^sRX*5Nlxul!BU5=o8G+Py4X9mFh9e4`o2h{)Wwzb75U9GQ@cvuei$w]iuNbAJ&zE$jxH7{,j.^qxTGtmq6Hfv<wn~iF1^yHO(,:>xlv9xZ$$@P#`ax%,b@*Ys&hR.JE3MsWTR{Bp5]Cn)E8~2,HjX*}0<QcVteLO%IYrY]Fp9zPg.J]`#aaHm$+VAJUfPi&eqfDD!z#KS)zS=_/t/#M*T$+F_$DaYv}SCy@ZMC:[^VvH1kmVeZq8f#d2nlVK~3FudnrEjX[sg8Xd#3KRkHa<RI_E&i2J.Ra5_"`R#v2,vu;{F/;gx&X})+l0s3]p~Z4rYl8GN{[c7vO?wx*tIkK`}=o(g/`~#z.Y|Jl?ETI/{#G9$lBh&:Exm8~SRm.!|5>e:haz|`mqJTT&|R>iS>w.Jk3iEBNFU8Qo{aQw$k&Zpwy.:=Qy%K7fK7Tq1zB:rCfjk?3R`oe(i1R&3Tj!uzdT6Xg#K7d;yptwYyJ(&TlXLz?R(6V%LPD{=1^)cdnqo_$Qc;KTW/:`_fK%H#`aD4kOJos&T]g><eWlxV_=h^3<Wz3UU98FLCx{GYPi;fdx&Td*Uj49_s~Vcq*)BY8!?8*.L$#d8]cc+NgpXO,g_B[VgBvyI;_fVB9<]_)4LvV3Y2m34uoT>Tao=e;5M?D{ZKE6HKdsI6>q(7vts5xt}&O$DE]LH?NK>BRcMp99DA?f]@3NXyG+B%J5Z,^JtuGUM0Q|J{m[x9rYG^8.N9C+<kt2018%Fs_roMboi.v[PzFw.!/AI@;DeYa=/EoOg=agFL8,?Wem.ev]8wU=Bo/e`0agIP3SxlA>t<?SRFE1m#,~+l<G0xPM^yQwE4xqOrjmW*mav"(29;8JdpyX=#cwQcXL/P2&y8qz6/amHuEE4T<5v#3vr@gHvf&T<H_.GyJj&+%vEE~9T]M7!7a.Oq+?_x5r6fDuCOX9Z%G_D)4QS%W6m;45UoP?+!n8POO+M%9V44DJ~{eAl/wvHm0_|w3BYxLzdXL;C_XG~{pmURSm}4{<o6Ihv4o@*FDNz7k,dXm6&&~kuS=WjcvcNQQg871NY0iId1(|y54..Xi#.7f^V^`=nsvMYT$`C2aHtCd$Sbye(HCeE@#yR!"ziM+Zkcr"[|+eW~9^^U1d*xicU.$+oI9mxu$acHM;5n&.g&h.!TiW9B%KX{Zb|0whOkiKzIb<tg$LYN=gmTIdt2YbD,0[DMLgp$0;}+M^{r;fOo;x(1}$tS1;Ob!I4*oS]z[TxKD0nFE&7Tf$pvC9)Pob5Ard(><qy{dmwn_x3[Vj?o6G|>0$=/SAsT,Ia7DxOpZUt#e%6SDrc7"K!y>G[#c|>~:";7Po$>3Vrs_myPbzIr6j=wEL#FDv43lBp*&.},jMS!5LTkdsDiMu},?zcx+9x%;e+/TD:KN>MnetM.=$vF~k83#b|T>;H?7~33htAa6b8"7UPkx0)7CsHQukJXxKj0&z7tfW?&I1<rOK3OU[Ft=sICPgNE`f@q..chOKbKx/@;yi)AEC)kQ#`HF[8q5zhu[;{#*0L|J@>,2>E!}s}U;$Sbhb8Rim@:Y2t@ey;]IkcrpFaFuWxhY(opNbJ3#5&n(|b,0=$MVq{:J?x~|mjH&OAi5nN1]DoD|YoV9Hhs@%o`*G.$o32kl)yIZ:aW[Z`4lSbRZ%:<dM0%IOGm!zMsV$m<Ey#kjle~TN+@vU=s?@1OOVU#FjA2EbJ=9yULSeKGwwa+)OjKt]TpQ0Jh>Xpq)[{5bKCt]q5P+je<MEH2cf"lO#=32;uc!o#@k:&VD/VTZ)e,;a;YvLdK|I^v6F*l|"rA<L~Qanf4Jx(BGA2=+fuxI=(YBs*uB:|$A~zED.tQ!Npaos3X6qXkIb3N(UM8kX3DB"Rx"f.)jY#$0XaFCuOcakVRR6C:KzNruI>@MpNUoz#EZGK?JNq?w+g+v9uwIY7UY87&ea|k2O|&^z3.T+I=>cd>5WE<Bq]ws^A>"Q/Ahvs?hVX`JLwau*tLsPoC.@=hJb:PX9`9$^ow(+sP1LBvO((dv}nG.z.<L)W%QQA+F"!=?"lL9*&()#a<**Jy}]IvrS|rnES7s#68bxX}JjAsO>!7&.fRR+fHGt%SCXM[@HlgT9szImye>t+.Kh6&sa,D%6w/Ydw6IxnGUrp6v+IXL6Ct7so5dPdis(xdmYtax:ZQ;d)~L%f~#9YG+!h&LH*lQQP2lp#L:;3Q,^/hY;[Wk!LJG<Ph!G*Lz7ym#Yl,,ny=D&/ogZ^WNuWrf*^_9q2>1ucgv(H,R_9jNt2Xm#QGlfH.KEQcVURfE_.9HvW,H|wSWy*6!WBw][xs7Rnc8WumaON^[muzX$Cq$}%mn<PH6kC9kovo3^)hj.ua.T4{Z[up|/Kwt!HyE<KAO<tOi}:[RB2`^=yzqn+cw4PWFu~Ts{!"?bNkG!q;$}(3wj|H7wweoZ`tx&u8{U=O[eOz["H0ikR$FpLb#:`7L4UuR&6$Xpb/?8h,GpUJC8%h2]Mr=PM.C7M.r^Ym}LF1LIjiR<olbr(R.36<F;#}[ME82;.5PZIPY3Le3l]%796PaDR%[U~%On}NW)`VSy2@D=Ux6Pe9?UBL[(AGE]3/^}SZbxr%#iBY>+#gM::^}o~=Yg~D`k{?4ZEhBg6cjfQ}qLPrmi~Qzi*%pT(Oo(yk@abogx]c;rt%c0gI~](C|l?z?IZLKe`q&>WjJ_E+c/$o4P:!e`qRvx4Zt}n5o2OUE9%nB#f60KJr3#Po&A[MeOIsm.Ts=x&o2^<+hzfw6gyk%.v6?tnWmH:Oct]DoG`NunnGlO4,|lw+FTt;@2INn_0Rr7${j?bE#dSsDN;&=e)Y2lDk{3{cOdwj*HhB2TxPa@s4TIEP@Qqqaiz^Vv,CIt_PafE36M}<Nw3jUx=}(0qy4;($a@=C&|22|VUf(NQ_ODrN{s__E5ykLB#sd{J]_mTX*B0^VG}+EXnrYn/^(9pqbB<sa%<gb2|LgRltfS+^RNBNV*v&$OV$}Jetz=#iT29ol1>V5|WYs(S)@iT:fOS}G"%mS%i],OtSh!QNvB58n.m7HMm0PACmOnxabgbKo($[V,hA.|uy?4IAXo=|rxsuWk}O&$[9<KyM~npx)hJ`hiKQoo=Lsa+M_Ut|WxZF`s;Z/SZpR6u:~~tgy*{{:y(IV5M3!^D6lLN_0c(S%$scQsSo_82Z?T:h,"w`LlO*9d,ixd1mIP3mO(WNs8Pv3"fXA4/%e?]P=x5$s=`.y4)%T]bK,}e.j@{PVB$|/R6+qVcF!xR5r&u1i^O*|sIcd,CZ&i?24XnE_uE7n@qcQ}XMkuZ(s~D5if|?90}tJoq15UU9Of&en_/We#c^6UY4cM/1;^4pN>B.{@;k;4%H+R:{CRK7MTv?+{6{7F=<TJ32sT0?F,MVsI9QgQ9jDE_p_Agm!5,.*Pkp.St:k53mEwI}O`ca5|C`6[S03;iXCi8^hgCiQfy*FmS_*VX2sBk+8_BPg+S[,fV|n(?qCR9rW3p"m~4P2~4mjntj{uY<we[,+B}h]^J>C(ST+sH~HJfv}mw)}S{h5_sSVfDOLmUxAoHrG(z1vWen>6N=mZyWU?s!NG_+nM>d(I+8y.wOuanTA7E"D8KF?J[Z9vklnN)V980WjoX@OV)1c|ft~S2:xamEWSNyQ@CfFI$m;#{[{Q/AA~P,E1J@e!/"s3CAD/I!6y4#PyR4cPk:z8%+;o]6B[CF;p9Kxa@Zc)vF,i`4^Wi]eXeozLyhi4z|m#%kFXpAcCQt!N5RtG.q{g!|N/^[||.Ib{`}`VJ7*j$EFw0umb:J%B(gI.y1evpLUY)(Km?%JSkT1?0/Yoo*|}&vDK`cxrE7&8:N!fW~i;:ka}BnsR,,Jx(Bst<?V`R^HmXaj,KG!BzGt+B27n8f`%gJ*>W=kJBYpftWjrEN9{6|DB~Q{WxD*vXui`MLW^%s%CJ@|Ac,z5.^7IJGWdu"LgOnDgyOh*E~9_GeNZ!KtRKWpUtf0`b"o7C(?cS}}^?l?LVRfKyf%?EAgFV6:&hF^WQL;F%&Xzk{{<6z%z*6"qKnA,*+!cG9,~?k"P;Y]9$@p1f?x"+puG6to;{j>6(,RItq>7+1W&4q]UR9HVs7pVo:uXcJidB^=nYr]qh:a,D1Xo/`_C&k+"JU+YzBr]~F]<DTX1QHoypnq]t3hpJMyBCd>1K=myknd"[o1fLS]Be?>Ac*dnd8aW7LWi+;jIg>Z@:5DU[@KevL,@gw~:E6N8fxM46[Kz`m74N/wv]N1,^{H31W+f^[mkIB,1y?W00@xmn!Oz4{^iTovx|@$/pBLQWI{SKBoua3ax_x=aKBB=?j+{WV}s*Kb8H5Uo9k@O!4t<ivi>7K^}OTRu4j2{gK)TW?lEEZ|S2{X8gKOK:;CrB]pSy|Qn)jxop}07{:3L~Kb|/P$K{O)<)#kBza:2v.nv$ho1tiV>[ZUv?,[EVS%6eg7$jzN>`liW9;%T1:kEO4[9&U:=As9g:i<#VffN3`<e1fkl@f+z%w@q&RuWJ2}uopSDq,B#=tkq{6$m4>gY|Z>KyprB}F}C6S3Rx>)"<m7U.[fWtZs[&Hg|H(fuC(v`5Q1?&t;R>dj%46v9f/[9IG],!oo9$7<*,.6/ZqWPkxO=Q`sh?AI54*XZdwaKf~}kl5cZ32Z1z:vLgZ0b.y>@j<:*lbv_.1rE?|ycj]f/I4h$iG?D=e8emJJ2`jQ2`^M(.Ehk:MjT@<|Cm7L~hSaW8D:MW5C6Ez`k20j*go$5iQDqg"nZ2xBV@=?Py?Cz|V(ff!{$n[CPCQe?k0{pt.Fm0aSyWtQgnX3R/xIsr/Lr+Hq]9?EU5/uI%n7ASm~XP6.4/ii[li=&:0N*t7<3=xerI>:/!k8ZcYXTKr,wKw<##qa!>p2.IiU]d,B;(VTDyl6WMa;NoVcn;U)!k|Z(T/9tH;u!EGhK2e)VJ./p)I11qDmOsYPG5XU"#y.)xpIE3ev7w[&E:9#{X}E6CzXV5o""ekf:OK%h0Fp_Z?Q{QP?1B?yf"cPPH]wpXEEbp3u=jkijG#miHf4*~4#6glBlnZ?Nx?6wQ6w~Q2>m%YPuV&`adB=#T6FM%ZJ{k:`u}w.W@W%fhS8=>c#v*=&&!j~N4{;7.5m,Uu"mc|r1H.786eEz)]Oa00m^]~;m)yG>w@E{OfQ)h>?Q]IWMNAU|X)XG${fVjx.){?(v)FCP)@coeeYf;*`[6C%f.(uFakW]q^ADc7z|4^&S6zHVc!pw}I<?msIp!EQ$4nBDp_}Z*MF9g}G^9PHt#uHd8K$I%HL}@/NX_=*1VuB#r(zWlB5tc"_aL@0Jr5jJ=i"Q6EU$b%c7Mh<8{Ekq`"wixz#xrwm#n|nI2,:sMN3Sivj>s9>aG}D0LGVri7OEM)v1:7`]f?HwGda|DCn$?590=Ue;&CnX9,M00{EX5CGYh>Jby,zdAwXyVe,WWA6!dQ)/F5e0YhGG1S*Boov>LaGYA!A{96~vtE?VhS/c%uAMYA,;&VPVb&IWb?l9lsPcg2D}[BD&6]^Fad3pSGn40(V*[|Sdrf4"z0k.P?$T,I8/OVx~U7z[#zc8c*=mk_`ya;@|%4SF|Fzara6#m8GwT+^JIZj0rMcPMZ?_m*vZV:RwEGs*R{*mb%`>)DG#~q6exl,V(i.EKxiLN$l?YTWTvI3|2WHm#i<y/9yza86%vP0cjwQ5}5R=sr,bKsVrIo5[Oy%xVw)SpS,?>=NNBO2>Kk!a^!1"[~+tEYqaH^k,?%kmSBuEA{S>UOUlL*UtEO/:h%G9uRQH?1,M$dz>gnLS*SJl?RCnP>Q~h!~Qw^aW6A?XK,3:O^$oUkuWu;"R)cGU>gwS7~GB.6?{W/:DjfIJ:LZ>0,c|`E5@w$[pC2)YV8W^oqE>O@A.Bon(dlc!(h7&4sd]ekfeooWgpFUrsOItniH8e;xd4_YTuc}<UkK!Zd*b;^QW:kn89M$`LdHfZLs9#N4+cC?[j[fbFB=v?{W1?SI2XLpy[y3YbDL%;Q9M;r[.q/DoGj3:aBPfn;"`eC}df<7d[v83epYlvCPC1%C"]R4#oOcvV!ofy;!aeua}Z}bW[f5bb+4^(l|FP?~=MXjCw:3otjSdUR:7+=IZBpm+xVZr6?_}2+A2yF]1%q!#(,}GNbhEqxiVYr;j$!]MON5_qRXF1bq<_0^p{_*j3xG095}{lmOLsdUMU@5$o/`b_fk(j(g^/^b^6a}?|c*|hX!iZ+89tir4_e>35Rd123w?V&jm%TSiybY`[<DeofeC.wuR*{Rb:@[9"6WIBD1#K;D>gVh%g8i/e^=fe3K+OaC~67NzQ{ZiC?b%dBbW<h9TE_mLt+/8f2JDB5%_y>d|e!2D:C6uI~itLZy#B;!GNKGR9LXKmAi]u:5GHjnyF!Y6Ysaf~Z=LGGDtU<RkTxR2@J/J6F]VF&JykI#bM@cB9Mp!Z~"zC5XW:m`zRTd}pj,cv1G4$QIfys,0!EA/upLCBF5U53bxCe?n^Lhf)sfVKPjNorYlSFC(8MHu<D86c,h>)AuF1fH3(td$Nk(&To<*XzeLCr)9bBo"mdFu&jF:!b<1Nb#gK*P6n<,9}I;tOf?q{.gzK9MzoUFO`iSa!?zXojgKwz|yw2oFK,~hvIN[R]eT*2sz/_7;C8Nn@xGH0U$iKabdo0OHg;?M]=iUkMRv<pH;SN<8br,i]*S|*9<W<c(7A%oEy%[R"0i9vj0%JK3P7.R4r5ME=J(@(14V2}Wfd$Q3$hT3?c8i#!.u}|9^q~vv/G3,?Pk9k1XA<@x8%,2yX*Wv9@mFjKG"AqDFAI.8BD,Hn?7Jie@B7ZZ1Un9C6g?jR2q9zxJFR[=~E<,)GF==G(J9IvI;7[V7A__22LXy4KEqq5$:x`=R=io2.;)}!z+NV5F}{.7fF+2EPp(HB.)$9*!+JRbN3vLg7k0HtzmE@[`<kw5qxW"8W()evnw|Wws%q,Za<ue;2&j+!%`_6H|2PiG@)}VJV!.A(A>B`1y]qx_BP(x)Nm=u2{?1n+HK,jh$7.qgK1U6XM2`Ckpx/.mxT&}=Q63<AdbK.*Mpg,3>k_$3wT|Em*K^v3=[t#&dK#v)55)`g#Q&HYtHxy|ybn>7hE$DgR$vbU$4Wnf#IYJ53.3Hd8HPk/.$dsb)&Jm7=KJUTREfFn/5&e"4#7nW:b0r1MfK#iGMe"7{z,>)A$/4R:K*(NsRgTWI2nJm7!^rLQeD!C[}zg#N*)EIjkMMzljzwUrTU6)RQ8]pub<2uVTdSv?M61N}IB[<I:0&~u^7S.hAx~AA/&v@0QIa(G"yF"J*yRwml0@mq#yf::oqoq#60m=)Ii~6DS@6jG>S=:afq6@0cMisOC~0#JF>B2m_3:r>(Rl4?.t~S94[T<^h8Gkl`+~Z{fU]KGE_mN|4,;89GX8rQG]Hw,(1zL4j3L!sH,ux"D(.byP)Tw0%9Yn`t~7rcKb{FE%PDJzGOA!ZnQWN5>&@d#t_K~0ziCJl,l&wCF>$)#IeO+phNr`:CNc<$e|R>Pdkz?dDHH&KX3!]Fj!IJy+$IsOH6uKG.AMH6S*N?(fm)Cc~`lv`/08?xzyEh4mWKma@PF"*C/&L8?+;W+V"GDfp6PD0eEZY<aLi4&U)gEW?T!c8x`fF@>}w3NqgXOiJqe0h3?Qc_cPP`xSlc[YboK5_1gNhgVi?_Mz9UlzYIyLNMQAhhYlMGVPac22I($E&}n&zMR<l6h85`T"(Zv%6>kT8ZXY,J!(n3a.YzPoP]Xu6PY&y0uK6FWZU$YR?ZN<oJJJ9<~)VX,NV~<W#5m#dqeD#XYJyKmLe(]znL4c_J:<gf8%avU8RhRZA?w:!Zp0GrD.!`^@>g&>bO<Rs4K.B;lL/;3+vD{xo7C)1`y$w5_lQ0D[[K4k}<7P&e3:Y<^<HYa0WH)V+WqVdTCA+jEd&_4lh<6y&x6:7{*8"OQ/.{.94<^3jlW1Ttgtte"TJgAfi=Q>QwA3G2;JL+O7hKrN.=>4>nX$7j<funvSlNF2WZ"_=|fE%UOmtu+HykcJ+E$pt^m46u4F@t>}BvyggW?#P`2y.#7d5sRx.P>eRIqw.*)(pRzMeCT~_*FSW2Em:rbC//:qP^kqSl+1*vi3@h.j*i$%XrLz=Ea[~`Uw!&y8+{_RXn7XMHi{NO{|P.E7Sq=}|0e?MUtyz03[7R25s&OLNqb<T(Y05Ti@Jt~M;YZGBw|TEgAi(dL}y<weu2D$;{}k^<j%j8xZ6kHJvc[ofz`g,O9&Eu@NqRUS=oT?p}q3z^J&>.}(ROq)QR"73]c@h81r12Np?e!Y!`Rvuc"4aT!*"+yj@.qf5}SGiV/3(vSn~LnvLmL&:3!5CxNTJ~,FjXEpfnM,#;x52=>"Z9G`/yv3V8}AI#44*kM.otOL91bY(8CF^Z>h$^&:dCn_3K!KP.9a>Ut#!m@3c@keRl&BlP<D#yzsFaFti]xi[#*l}B&bteAhB({E|v5tg,IQK];>)&/1{}]<3kU[Tb/k&>u7FiODU&v~12y<)Y"A:`H%+Dc_%`u@z0]iXnOt<`Pm;IH~ad@%F]Y&t]cx*qEV:?~,Xt[405e8B5&*CJ]C2Yg|CGTY>}*ig)f`![76A~o/htfP&1QNZ6&jb&v(4,`#4BKIJ11W*/ZNpe{2Ac{,PU+~bPAIvbpIU(2#c#:oV0a|x[]q!LZC[F1=^DNq{t*kXDtsJ0d2pDjj]n$FUxE}wiF,q(zz)0sz3%4IAEfo?N{"rW8Q|zc,}A?bzb#vE:|4rw1Jp9{](Qm833>Q=XD[JsFC"fh{eb&5zb/EOt@8BrDZ<;D(6tH`ze5m);k%!Yugu//r:y^Ylg0[OKUalyf+i:9qMT^=dT++wB+~jh=%"o#a]Ux=~fy$T^{pP[d7wp1}Xkt64vYntA5;cRIWNm$`]=6n8ewc1YLO?eZ^4{]#yJEIJ|SQ!{VQ91)DK(FFo=Y^XKOPw]a9vQdk1*DLB~T4IoefxU9`@ERy[Lhip2>I?aM[~EVWy,2_;8uRthH@GUtuvwYNlTw/0"A<LTaJ|8LQZx4yVyU:@U;<vSh+$Lr4ZY+,9QE_2I2Wme[X^d"C!q_%J=7Z%=|I*A6Yk;p$=ncfVaU9?AA~E{y=XfAKDbKB^cJ6tw.]iJ~fz^tPIKm9V>Pr7/3sUO1*UF?xP;P/WhdN9N6b4.lS+*[@|q";vvlF.Ey%xbGs*3xIN|.hzs,o=rmoH96[pVXbE!~T>%*mpU#0HP:U/dY3FJzvV3=03<&Z&I@o<eAm*K6Jgz1N3fVOP#5g2<{ycT_k0>sS3.{dGrRzFA[&&/:Wee0)T4Z+HfT65W~*qx9mX@?D5X;_koKdSqzdQPL51VYMHKoH)O`J!NzIr<_0W=8m_?NGhTr1{[L)ulFV$;cB!OUTe2(1@=i>+8B,/EQEm#RV)~+VurrCEV?;|W:D_i0:TnyazG=C5[RfTU^kK`&?+Dy1xrcVxew=lg6EHx[;f<S;?r1:)M|4@P>>^O<eu!E5CQsVT4ARgYo%}1#M3/q1r;/YZD_*xH*!|8vwF#L+RHg4;g,OGcc?YCC8MpOB0leW%OLG9]PV_O%0N0F#G|NneutXuX3W^Mf%$#uMY3(=}4CdEC}W)aK*+`"Pq4a6sP&ji[Ix)<djoM%B)u.:$r)#`2V.l%s]&?jedrmU00RY7bCcQHxaLuC0_.*%~:lX5mZk__jA.>uNzuZdO.8mHKRu[*mPaZDQ;s^N+2nT5NQogzhA(*<kWok:Y*f9I?!>o.m]K<6Nisa|;Y4}"rfpKp}[f@~JqL2qoDCe8|cq05q9=FS`#uQl;[eMtcf4nmK%Y%7dsYUOYcCr8l<wno!},V61ALv<`rc:HLDZU4{y<inh5VGZCV(0VJ007#]VO$GHH@Ojs=wTN5I5_`gHGc2h}r3ioMv`e,qNki$/SN1~A.$;0Jk~y7Xo#pvoX<z*,N`%NbCtpIZFBtx,c@Lf*"p9[LSd[;{{s/bVQo|gIy;1[tAe:_h%9lu3i9DlGB4l#yDB77Wtdcr~1cJ{uu$$vTHJe(Z3us[XcwZp4sJO;!GH6$,x(`44hCl6mBI:aRh?BW|o%VE+ucTGXbzdSi=>rZu^tX{Jhfr7[&N^hx4.+XYW3Bk<&XHw+$p]!tag"jsb=/<Jhc0<qs[3T=$.VFMq_Hi`B^rRM7Zn{K;hnjA&t:ei`E_@gLr/%1%YZkOF`Hq*a5EY3;~r(,[ohKjISDhLz8K0o,NV`gbv2&%8gj?NgT}U(whI+Tl~|P&#9D!"sf1wRBL%c."KP~r5`>vgD`>]/V:9B9NhNva`E^u5/f.dQ,!jo<{IX4fX<R{V@&|]im=@vtsgDkV!A1+=sC9w0&U9E*Rp1$),#&w_W_(,,Z`#7hXONRU|B*yvknapL^]vWHXVgHCZrxcxd<?{dcF>A1vj.)Y;`Z6mH)B|44,af1Wa**GWwvYJKq|+xW{$q#;}/A~Aw8_k<;Ag9#$2)[Q$!|K&BY;^l_V$nXF?AWY;kBMB3TA#6Q~viM%|@x}nZNj~pLw^ulhEdc%YT/h~DBCwvNPsd~01$yB3d1S6Lmg*7S@$W}RwKik]NV{{+N~h*Ym^GF_`@xHA$T3{g~I?Mg.]MIdT>qg3bElsoUDdIF.3173HO]#We*()|_[!]{1J!|n/y=VKX8[x~|D0zdG_i.`zp"}Tc5UGB2@1o|yxPqI|`rVM)2=;[ZkuzW^`|MU=ir!]a>f=cNU"VQGxRsvY(,>@vUss*=$ej[B=)T>eQc~8*#1kK4h{OYNaoveaEO0Sc=~t,C}!t911l5SC,6}Fizm5"Pk*[(zYh`zal%]%L.^5JJ]?biP2uWvspGt15@4Ed1np,Vq_*Q2o>N(Fa5;SYay|"a"w(eJUNb*6Pq*^?oc}7])`&O,l4|L~]saTa%]s>1,W(hXiNhxu`<E2T/AyJf?@mxY~%E:2N6XqG}cnG;V?:nbT!ZES}ukM&{4o/2,Z8wvox~2P5toi4(uoD/Ql!J9N/1TRaX&j;(pC3{Dy&BamQ+Bjh*pOhwL(qmG~U.8#pR.H|o%;:Mvrv>BPiJ1`?xRw#MAaf!b0>U?VmcZFqK__N:LG/LNv@@4kG]uqgL6cOI;b]0"%Z)PLJZ"e.+#QXH=<}dnf+mFLP[m9*?c[KK(q}#?K6pHY|SNJ}tC>zPG/"A.Vt$ZhMB~jm,Ru!i4/_<_[!+Cko]q6)Dh,oPD<FxP92fY4u(),@{a#8/zw9OdkR.nI]1i"&Pc/!N9@iF@n_(nU38>lw!wixw5j#oB=XlfPf44<2:F_rpl8zHS`@Lhl:R3wU2N)m~p)n>U;h:aD8TYHosg.+puFwd[c@rDSE+k~`n`k!Vo;XM1lOr.]aG.H"xpx"D@NeMR8cSxlJ7pm!CaxB;I:jrW6T_:*u689I)Mqj4AwIf>o9RcAsx5#s=N0}ITr^OjNKpOh^!bjPd!7m5w4tPi?@%)2TLndjFIWsrdpij`N@PLW,`U|&ifw&U3%E*1i<u+`Tct_rO]:&iaNtUZ*tlYH=R;E&La=x}@06a?e5FS^q6&aY<mHAhobOqP*Edu7*m!bT*d}sPaRJLrOfyA{Hp}/epy~vf5#<B"=qh#Z[MUvVfn=egE%U>;O:I3?vmU8Pup7u[Qi7S,j[#i/5gG,?0GGJUrL#7sZAzh[k<z"q%g;Z5N/kT$pBHd~b1}A9hr*}U4*>cx^OrnK`y4o8Ll;OgH:*e"Idwj+?8Vl_wdAUo#P%zn$c|/Q^6U%GNHa__{&mCs?ID42Kc?M/ve^!9RDT[/!x5/&/byV1BX1x:6_`7>@wcsp|"_B038vAl>jcJ|>ys8PBz3noS_?!9p&W"Bd]M^0Rmbv+B>W*jD,P(dVi^C22H5]d>"f~aB1M|2Ye($dr|eI9KahF~eSmKbWU,0[,WHqbtr];uN!&h4e0]RC:SSjAZuj`/b@r&p&bG9"~dA!03x;<pqV4EF>9Wzv:QJy:?XczR<B@iP?ELMQd27Z7YEz,SXXy;(pFPDc@rfkggf8C(E,i#fGlSbRAj;)?gO~ykfCQ1*}S?`~kBixe,}2>+d$zC:[|i3:q7,qk<{Bs|)P"R?V,8!xHq2c+M4TrJc/XSLBf,.UEXX[Me9vF0A)X4cbr_r$bWur0%Pi24|#2krKlW!IE)C(}MVt|xVOum{J2@pT_w!2N7zuRjmgz3$b.6hCA0XBW,e_UFqH#Q^Ce)jh]E%MQg[Bk{%~wyTCKCy!M=rd3qjvT^!>_(sgsZ&gnrWj0BrEj/eacjV=G$PoBp*d$:8!9zF[!C|uBnFFaSq/S;4wR>[(P|xRED++b]kBJ<AGDZheICNsb?%=Qxw#S8:xg.$Ia<7?$AJ***O]M4nrm,LR5L(5`u?.0_Vo/=/Ux6o_gv[h1/V{2q#3yJc%;rYGd^KnuEm+:I:_(q_TXSjO8Fp|QVEv`E=}8E@I_ToSps2j]/[QGsFXz@5tzamfI(jKO+Pt.I*xxYf:XVh5I78;rz(w1sYufm3lY#mM0dDj>uuDRV<62INaY_+z$HA!qi<FecIQF_F<WYax036[i@&^<gq!fzv9EkP$5a*fo!RB&YJs9X[V)EuHo/1~kUld/vpd]YzsePc.K9Cx7DY$[d#?7]`oaCdR>ZRe:)W>HXUhaie(@,j7>^3vga;kp}rTj2Bntw7)N~6B2!){R`[yE>;JzA%JoK}%uB&]`V&Hia7h4kIIqu7|540/#n,4s*k[E:P4O4Ux4aAU%x1rv50RBCPBNgTL;QF^RFv</3>s{vL8BKVW[dxUGV9kU#aiG4#1QZTD`j<=5d!6StuGY_q9oq&RvW:.9y_=dBDn}hk!QqWwc#ZTXGFeeA;@l(90${F}PU4TgSGN3w*7rW{N7wnw|Wgp;4B8U1cIYH!EnTs&h/JUFoj5FGQ`xO1;1dzNq_FIhtx*?h.V|*QN[DJt8T,m":B(Pcug9]TeL!~0g(Hj~bWfNWzMkUIgw=Q{|,vf+#xrrsOA#<jv[;MZ}]_?FIZU`I;zmy!8.#L+e!1_mxFQ[D)(?.__+D@_e:pwgh+l@Vy|9susG9cq/#q/:~c1;khrD9Ha?%KzSe^P+SIl&P)+Gf23&9<LOw8D0mp^IlG<W29lOv.$lQ8,,W?d;Qx$H9*(6+<Oi!)V[]8^.JM+]^Rdp=s?U354LP6lfrMJ9K,^6~1Pw{(|eT4e}a=&$d9{M>.Ux=Y9T(uZ$F@5m>=QQG8[bprJiKqr6Vf6P!i&3#93^|w#lvtb)IWG[&Jqg6}EYB7C?8~c~I4>R)%3MDA<Vm6rYb";#n/)csPSU:c4$AjYtU4Otpj9)N?R!qDz}95ZdF$n%/A+O*mjM:|eXGdq&rKC<GTc:h);redV)t*y&mW.&O^.5y1Yx~~r>~{fM=&xOmVX2{k>prk~>CzcZw.`ustp{VQ|Uh=CiW~a4]z!"0q!rlj3z*c2neoj?3YD*{|DCR$|^1[h_ghH^@m[=Rd0(`bit"!fR{{[)3Nk75c%t?r}h,Y6<P`y{l](tO4;9b7i:lNHrr250>qrRAWlA<3|n<0nc^8&|7Jwx#AjV30{5pt6kg;U<0nplD$jn9^qufE`#e@%;qm.k~AAn]%.>jL`yvH_)8D!8%;yQb<IGubp^kM44J:VIjgFOsxkIXxS*&i2)JE}k?s0vs,dJ|r$/LV0F&V}@xxFv/Smyp+L"}hhy&6WAY}VpT9rqJN8u~EbEb#qPflY=%`0VG=ffX{yv4u:B&j6=84<Hhd&Lo0^%N6CXMZKgZHoPqy9:rl"+EX;E,vXr>dAvIxdEt*aD"m?NDvT[8%;#]wuwk6%Ce*LOTI~)OVh}/#bc3#wECoIu_d7SbN&h?z[.3f6l"}*Q[}HFY`KHmG8@xs{p&)k+mZ4l$;dZCHBY[.uo(~p!Qg>EDsV%qW&Qhky]c<1;d6Zh})@nm;m]b;8!WZz~`I=aL:F"qz_A:%GP@MbkKT9IIzv$d2x$OR8*o;o|W#t__nuyN9U8xaI7Xig<vQj:"LVz69^+X2a"41Xh*)kQmi):iT^g]]VB:7ba.,Gxc;6:=xUvRrz&xUT1kXnK:aI%U{;;OxdX$o2.3/au3/frd0{3%:`gu$Ur;bl>)40t5X=2y7#qV!aXCF#x!vW4f"kZ2m[_^8#QZYe*K)G:.S8+~=fwGk2"<^v49"Mq2M{T{}n5FKZ0hq$=)SCiVWC6@Z<H7DnjSeh)fWftAsaX7W30u%}h8*oM|/@gv)q4t5D^|@Pc/[U/K&q7mSk7#Ue62eD393W!#$M}<*,IYKtSgUpzoc#`l7W$U$M5D~<&K@:cV.Le0r~RN]W3u^.>YlU+4zoF0EU9w)$@q)Zc8Ls3l~a4:3)%{4krE1;zzeD*b8o<:42eD1;Qws4fKEfp&y/Jp(yT$bdQvNu5%PIDhUEH?FMe9LQld.(azfjhu{zjr=/]Ryq=UfI@^57xRrzdw53=&LL,;F:ZL/HxN*9%$4&7ty"R*H,J[IXuXs[pfps!K7~9[}CbumYa]{}_ye3L7Q&jV~yr4xQ{P`9=3T.}D3S|#RT%NhEtZ~!!_a8yFAVRZ1e8yF:G%e0@C@=V$3vy]<%A[dXa4RuYNjjLdo<QD|SQK(Nwvo9L9pLDsWH~57^%%7L&8{#Py_XO~Vk@`yCyl"P}ermCZ%*Ybb7%i:h29u$HD1%fX;=0HxN%BCMzD0/ry1g<(uAvcG+Cf]08Neov4}U2AL4jE<w!`wzwH2>l/L9(YRC@!chNk|meh[a`FkiwI8"zncL)Ir<rewGb/P00uZmuktu9z}poxzxpz,C@$@4s%.q(YPiIR^>ZMx};@*4"w|/1~~P3Z&3Gt4Gg.?soQOB;seDuQCXPY<ot_L[$|/(!fEQ`=QddGZl~c[NB:Dqh=Dw?{ui8@bitH_1fQCQ*o5cfm>ZH8blXplPMeC&R)zYt;h/=Wo.dea8rP;ZS;>GXb<@lBS`J7MVR9|L"GFE.)=>"t[[ck4>zdN=t1:1xQH!^3u7Z;3)eqDu"KA?7WNzEMjGb8BVvQrH>3sFGQ}Ot*5h#KV[{X/ti?&gww4w)wE;+1E@CBq$7dh&sF(]zd<P+gXyu%A>7~m:0Bxz^GqF;XP?7*@=!8cNG_9*,kcRm:|V$Gy`EuA50VqFXNl|K&5q_K2h`Xm>v?k*#0GO34Q$4(}B}VE_7Vk0>$SVi4/j:Vj)#i[GnU3]_04wHDK?FC"V0EX>V*{G3]NDa1XqY`=VvB?VK_sI@!?Di&IxB>h,R;I&IX8f`:SU3b&!6Gk]$q!F~AMC*yW3C?83rDRpj##1R#MQD(~C6W2+NJ>{4Njt*`M.[SoVALZY.)=>wH?3d]`1v$N[YgwWG2N[d+%E<@aWG_hhz`X*7R#,eCp3:WO#@{B~VL+e3b4NrUPqfII++:VQ0IlD&QHmWEa&sul?K@/E3;09f4kQX3Trbz$K;zrwkZG)x@HTreQ]6BT]U?)[xCQ$d`kcB_2&NHb4dDMqaEO_?JV.CxA&]<tT%T::AwurwHr;RUr$8dY=yc~h`a5P~1AY>_K=r0t*_OAGmR.#X+hSZ|pRMCe9Orsr&%(MZ|pRBVx|?O2)6&UK)gWj>`jXkJ&JaIt!{vuu#wlQb7m9S;+ChiSi=`}9,m/PaO<7Ae*wU^?FI?M76{rIyc">!?&%hNQ~^vs+$M*NdJU+X@w?`81iLk`4qqhi>La?l=`dhyN54Kn8av0Y"%#Kl$nl/wmRM>J<8XfMZR5N63(3>eEWvRLz5P`hXN~pNQa<Kdk*w&t[gse<s.h3h{Mh#J.*[/Hm&$r.z88RNL=!wu3}v+c!OtXrE.+I|9N>Im^l^d;zR&DBpv`]{O$G;,&wb*%G&ZuKm[<(3?*IUn6Kli"6fV74`#2HDw|!XRv2*1M0=%aWoUBT:RBT6dCmq}u/1_JgQP<g8GPlB}nZ6W~o=p?|nrvb~NS.I7L`P%[xeX}9V:O{Let^ixKyULG[9cLT{<eG^ZOo=[yS*o;VN)v/"aD`LLA)m?|BMZC/AiO?.[MO53BiUtSaL{}F_3H5$j0Du[~44z;MYOZ|bbg]5%o8RO4Kvu*!Z?IwiG/)CsQ@.XrETZ%++SmWE@^i~h.[}fB#+IY|n,:bap[Y$Nrd*;0T1D8O|`56dc|bC{$i4,=n1&m[iJ3FryZ)LUz"fM:c|Q"MXl~9+o%DAO4Z*@Hzi`AiOIe:8wOV[D:BeHhU/;B<+qvg;OP7mw,]s4u2kc{6h8Ch)3WMMa`cUhN]~M}h0Mmg|boVZr?XXa{mw_=W?oGRD%S:.NUh|bkj4,+MuqD1G8%7w[5kR3Xb"LR:DIdd{yxzHjAm%r*?39efU7W0w:nn&fCK&n.7N[,>1l#>d[VZqWPBVF~K>~MEqK_W3B;irDg5[>y(]Kz6V`{YQ:]M5RR;;g!Y2lJ[!nDJ~wdvp@;[pdq^~w+}DItd3W5Ti7qap]a.6:q<T7^P"n^M5Ro{I|#/pw(tp;tJK7_^K9}i9Fi`kK#mBrT.eLb:Z>(!MNATA#l92Vo6`!79T`bNtd4,@cZU6/:;>:/*Kcszl",c3u4(Nw/JP!mLw[:tmy"P&$/O9{s:d3AV<YAeRp0Z!*I/>(A]LDAaPd9bDJQy{o)u{oeULS}_;bzBf0KJaceF:5whV87Ipt&k/00d!9"q2YF*V7R]m+M*ychVb>fc#&}[ktE`^B[xr:%hbc:=la9H_Uw)L)7r{Emwag!@b{^B|MyD0C[<qzKzmatDYRoL.IvG0Lu|Q<~[iy+weS)=j)u2^BXYA(^5VbIZ<rrVO9hVscU<H,Cj/[t2><l7#=c1&*8F+VUp&^k|qOpOjznpU)&my(1j]YvqJUn##EQfA?)vyJ^gIf)%N&7]%/l#+aAq7c1Q|iwJRY+DEVLy98*<@#cRj`Z_Q7do|7UT;e*3|7v{T>F}Zx840dCRABPV{8:]f2:X#^k0tI]1&!&?I[][VWkrr;C##C[<|M_3Tr"MCEU*,cy5VKw|RF~KF87[6c#p?q?K73*OPu35vlF{Es|/3HTYw*DjF~UcT5/DfI8,0*c8_O%(vqg)"nm`]Z~NU#n?6SH1})hw&zgSp;fl7q45bhlUg]/k%y{]z+:A@$vV@$ZR.1Xb"ty%wq*.2d#]0yk#^3/%u2mYrzkg)R;a&GRyvN9p?qAb66U1(aBT%UzzMyP;}Mje~LtdS`[y=hjq@w3v/UJud2fw%#9U:G9+<@F)+gjEgpBVs2DDN+bIa)E`MCty|b5iXb,tl#4N|]m:`#"jzwd@YD|MzObx7uy%R,(9u2>gb!*<hU9N_UiY2_ITeYh8*M5zz#Ka~N8,"W({o:nQaP%^x=n>o}jW2tuzQuZd>!DNuZBYR`0H.Di9*[!)!Y(U7zi8_|YDj$0c5dAM74}IAw*BWCAMhe/$LT<4u@u%7t6mQYHM3BMuFkFmD,%XO:EqN]~aDfN1d[s.RZ+|>Y"qE@E#tPwMwU(R_a)+Tdp%}yp0HZ$QN&575&$p!QOB?cjJaG1tL[P]dc`dV~GZrUB5W3S?uP{IXC=pmDf^*P?NRLZ_;c*.[ctQNCZ_"wyWmdgeu_a96K">oxPz|bVH)iN;L*|dPwQ7=KC?PJ9CvqI&L"]5?]y4($r%#7#Y56;40SPRVf@Fa(FLrLp_Mp`fiuc]c7E?XcI5^:|^N35U[UvRIGuh)WpJ7Z=})Fj!)X%@d}[wdY"5"81,#5LLGCp[+58ZY1lYCm9,kMJ|R*xR48~D$B:B/IJEAA,q~/lx8F0,qQ#Y=t93*fhH5_f9MhiFT7YPW+2WKlAkLNvq][V8Y(Ir>.9A^/,e|MZ7N74r,Zx_G+DzS0LY!_Gl,{A8(`q9DJ=k9,r[Q+bJUeL4h0un:VO*6R)kq!>f4;/[99)32FFT|!e_A{Dh8#k%_47..S_0f?5]caa5kQ"63%u2:i6Qg96l99MsVNk7?8;:C{iQ&/jV2b2y56nQe:t&>ki]u~!h6vyU3,#K9[/fd[<ox0f%;kcRdk$b.o&!u|uM(o?LazS[$T8OS;TBm5@bpU!FXOA;e@AmpDq<p8Q{G1uo%cVo*a<FI+TTc%D`b%A;vTb.]HaYfA!1%AQwV$v9hh0uI&b`~OZ%4T[nbcXCt(lR|B>;BhTKy3e<!/wW(FMqPIOUu+ugY5M&6l>C.P}p*)StBgmu&XVp>N,Cq?9<~I$y)B*W_K)eR2QExk&LIhwcvuI)^&gJxzdn(Qb.#b9cRCG[CeclykDJWO$k~FytP5P~i&"u<jE2M3b67m[nZdN!8#T.r0+*j*D5VK(+sP][FZKtEEqU}+e~,7Pc};/ysDuALV5U7tK`qyRHFsK5W3+WMt/px57IkEg^FZ#Y(BX>,[G+F5OG.[G+08E0?IctRupTNo]KP$H7YiFZBS?D@)(Of7Nas6Oa{c"+pfw7h*;r,7+CxG5D7d,RMaCYIt12+Hyqv_EgXgv6PcSEH_dMV|]KCX0r6PpSy&Gh]KR}Vh_KEI^Hlh/x}w2_wpEAE7LLxn8)LkW4wy)m_J*;rJ_>=e0DhQ=R)bV<F)1vZ6zlAL"Fr%TN6hzJS*Wv[C!/U^uUc!}:`)F@(GkHC_juHzE<)qr,UXB0}lEm<6Pm|p*aR>12lc$F&P5zru>E_2Uvh]@5{JkUmoNL@<sfr7R>X6j/qymBrSGyVjaWS:5ITYo["u<N?Cg<;]aC8)t2i#|:z17CzR2:Zq;:/>cE#To$muyOtlD?VWcH8_QUG!K.%1C3q9IjEKv$c6+cbx>t;!hNDD7w:w*57XYLNtrf(v$h?MJwH@RLPycqn_&Pt_<>p<$B4Lm&,Yrt_YIn{x%[w}G8_NgCC)ng>Ix}/5mEiQg>tZ6@lu9,TXLGtDFDr@V|YgwpweO/v$TbvT9~X?Sq8r3^|bMQ#Nmq:E=?)<u9a|VB=[JaL`F5+r`_sJ&Tp2,t`OmZK2)xZFr/TKxt`ERRp@L1PQ)LrSh7$iE8g!rLsy`ulqdlKLm|&z($i*bRIFraic9s:;X"_7CSPwvS]T^ESguH:#GkqK,,rm1;[%N.Qk4x&eF|:_4x)iehFZ>b0$+JvMm7nt[|6S*[R2.MKrZ|JN}OA_j=>7wAI3Uvxog?DUXFOs{O"f3;CTr?Qw&&]S;jfI;J/O^E^^17FP9X9*=6i^BVMQ66_J^VG=c"4@)<;W}<lod7x^WuGPPX3Af[JL@fnq)>G,n/Y1w*ugdTS)~2XRb4j%XO;$<h;(B}n=x/g&f2I+Y/%%Jrfigu>0,:hCfzbv/aP&y7hK5F"}"8~DWD8^*._=accFv<5Nj#r$PeYf>u[S7s0Ul>bcK~i5r:9fflxjIbJRlz2E]5%&KLv4{ne%KTxs";o9@VgiNLAQm3m33I}R4+KrAdQ~qpl0AOFsvS.xM~oukD_qu_ztG?;g"{uEua(WH!ssUXw_KyiXs3EZWZ_[&PL2i%qj+sczVsgHQ]/yG}>H}Za0olu^@]sa^],)Zw.j]=KgaL$=/jnhgqr5BPQ8ul>mL{8lY+?B8I]0*.h<hy<KL3dET>akODOTJNC/L)0_&E|&e|vfYbQ)BG4Qa]l`_daju#0SX>UsR+NQC0!0+K[+K>CP`?3QA#+20f=0IY?,,/eN(%$FFT0fh&HR#qxI}jRXgSw#5@d~$(f)NedL5U)&PvPu%;2UTlO<g<Fiq#:`DJ3]:`TJM^4[HSR;M${YVK6NYD8ojh]T$5=%boo?2dy$9DIGuwKt*B@d]9f!w{E&Qv7RIb(zV/<muQ$Y{W>"E`xB{Y+C0u(%xVK)Dlq9e9c9i%4&%RO/,zTDo?MNj&>g!d{cqd)f0z>L)StS)8t3N!;zr6!a9P~N7aZK|)BmA(?{n#o7(jubgk^<`hpS+G$>E$;eg`xsW>lP.Z/]@/:+cHeUOaHeiQMK7I^iJ6#giT5|Z^F8"{,7geo,^*u0F8AeB8Ae<eEPg1~eA&:%*wc;$jpQ4F}Hr[[=(AlJ&zt4+12+qz6/X1QN3QH<;jj2&PXmV,{cZ,2@~5Kuu5tZeMA|ZR3xhj;VP"G8KAW=MQI<W&6h^<N9ibH`z$_:5:C&9Y|(KO~N2&r.Y9,$[+b`yRL.B0dh5|*=H02.MIrMM@}WJgRb`IR{/jaGgzjpcaYp9>Fhr:u:y$c4A(3/H}np/X!0Q3=FX7K4cBs0]f>F.GLg=3.yF9[bouxjSb>_/bkyc70coU_;Q]B;Pw9Z?H8.SJ`+AL7YFcodxHO#k%}y8p{=~="$H8Vb,;:|a[{MEmCd^_8T"$mJ+w0|fpbhb2r,567J@;*B<qtP|Io#GDw<?Ooqe9tU$2H,FUZB$YFPf3db7mfdp{IX/ox56b"=V8I35bSfN8t&YhR>t_/JTlFVAT$vUOI__iGKjB1!_+82<dleN&jCA>C_qr"N>#A;@jOlq)t[W*8[!%,DdK"`j`[tEmmW[#L6VK4#(!iv&I4_bz&pWhq^rN$|i|pvd6._e_oF^uuf*2?^}qA`*o%qahb8<[=!)s6Ymru/bUjkO66%t|Up#&)nW5@;m<&o_]&`xru$Mx"<6oT[ws>P3l@yl5/#"{)&?{%x.[>;xl^W:<:;hEb<#C_}(2*:#g$d/q7_y~TrTrQPn#%Pn#48?G@|k&~,l*VQGfEj7_<!MhIfg]W8F~S^`Xf>vrfsA%;6`DJ$(<RFUr]kq%fh5<7NG@{dq<j])jHu%#cdjtz53)~w@]k8[<s,5/@yVN$Yr9Ood`Xld#`pW+fLOU~%Tzm8SrH/ih|"h,L=bFm8;oEZ@pcF[LBkl`(:0zH5eg+9//>)4EB:=5EnB87`TLY/Anu+%Ku`L&IWcp/q4]Y3)iu[/qWI:#cK)[:)NgR$+)ej%&]kN&DF$/]&3l#g7{zhjiDJDe#@xShQ%ck/Iv}kih.yAe{&l*o8R8@umY0pVI)&M@mo)oxhI;,ZQr?e7q)jB[$!@]PfXhZYO5,2N2w#S8Ta~g$(imzUZ8c*$K=q|bPy3S9rF,O~r,H2t=07g68nt_n5,[lQAe2ls|2Wj9[wxG+6AL*&}owdX):<k>_UO1ihn%`nUP_Q69]!!,tO8x3=m8=r[p!@sQu9&8z*^Rux*Le.V{TPZy7lA<D^|0D<D^c<DeX}I<of)*=YFHj!sqRZ"Gz)di3X|jh[tZ+t6r;9[fx/=VK*70F5e|RJ]f{:]yu9V^{6@!LQxGk3hU>6_rN,sb(yev{TLs=&G+O$4_iJUCrlSwqmB5,40p>M1*o7|q}3oUl<FIuXzq9%G50Q/$lhx_iO6L.`11.3KBb3fK.v.UnH_3*BjS:]eJFZM`K29UTz,5J8_%v,jLo#pH"N>?#[5+"#(Yn0b3u4/2uU."W6Cz1ZU[z{kGL;"wyG_3a@j"+W6k),O@A/:fW<kfHtDFO8@;+``sKe)8_S)zjx/.v`587C;|?DBjsgMvqy.[~kMA(;Yx3:/V@L8a`BUR@DQY@VWoiQ;Hut/p"!)om2u=EF9Q=hB(^]1pbGI~#q!XA,cV%Iw|S!)2^*Xth#)i0%J?./<Y:Lz@X.e!=^8rNT>P/|a&epm:b%A;A~(&.oX^Mhej#&WXE~ko/`Wm|9)Pb1%Yuz<_i@NhvZZ}3Bg8crnXUV=nY|;Kp]xXV8I2{lJgQJizho,<.<zv+K4n]6xVw]&e@[b1LJsfAJ<qeffdceQJ@|Q^cdjsef66Z/G`04V/}^i5AxmFy[8lA/k5}DhjHkWOs5$y.U2t254e|bb1GrAucJB_Fd"AeM;Xqno@`H:Y^fuA.]R5X83WeVns~<UtAU`&e8sQ4x:6v`c,do@V:*/]b?slz;}Vf>$O4HMj2zhzyu.]tM=m/o_`]@o!D]g!"$e`78S8x@O%GaN<D*bo<}GG!D:5w@|WIj.u"Cs466UgE],*Xn_N+`IS"5A1Rb|:B{JgFaog"cd.UTh=tbL_:m%*tgWQTWIn[R7j%*wDi6/Z!,]bnMh/w3BAeTs/nA;X`GjnqJ,uA@&=LF)C_kdS^R<~C}S;YoUh<`=LcJws)~Uh3[qks3Eya}hhO_)}53@*?!jd=;`8{{y]u2eK!]BTR}mKYbmQ5!Q)hfrE/Gqj~MeHIJBo@*N8ETjnyBqj9AxlNsLID<!]k!)iIpBYH!cMgghJLR;zVgW#g;xa,0o,g{`Fs8"07@KG}fs,RMGZ@:1{4U}O7:$8L[1ckp!P&lGIVgB6tV&qd:Oo6M[6!,N9!vXK]M48R+dew[jd,`M3p;}H,UQeQKf7TRlD8Y7v_>>+@P5x>g"rt%$}oWN%C8xdl8Z5>Ds0[S{b867@5h2[$pW2D5I3Yyuz2hsp8_+~N4M52hE~V5?fCIxOB~K@sU~NZ(WIB,:;F[f8b"Dw}*?iM1?o88YK&,|8{AAK?w=Y3r,6q&}3I.4$5$*`82x$U4.1x$)@&)5}xRkXBt,@sF[%_<,3:oU1c<j.1;.7c<GP9U+z"%3GiA2!![?~xl%|/6~mI_ll:2td`?8|S+Thl;pdkM43LKS,,#)EJ;|?yqKM)4Qx/6da&=6=>zAl)VS1d<usMQ{bL9NS~oWzR,hv!)}M66x`g&Kw}gDtOrj%kC9J2e$[#gX@$X;t.Su|c9f1<`ZLH7]fjnB%9nq{G""g0cv?mMR(6g&0hS(,)*e`s~vJ&Q~Y+>SlHP5&2Prr![Y)^=eXX!7Tx~7@(4l+^`6Pxbz]EEIp_;i3n,Bmo{PfP<>]agXPQ]1f*ll5F2*;lRAmo{S!)i@*~EQ]ECM8F$7mv2gK[9)i.*/0n+u=!dGDX<jvc6ZEIp3S_.+g=+VvxMa]Bc;A*#:A*#.9+fa4Quuh`+)6LxH;f`i9O8I,^o^+YhW`tvoJmy%H_4r52D7+qrDHgf1c@:|ON0)~JxeLs7!3YM)Xt,{rW0u]3)LXyle1|6D`nWMR!7e0!,GT30!,|Qu:v3!QGb14K8i3t?&:NF<V2%Iya|e]s2h7UhI#k%x2D,8H{IZc`7ah5,~./gQ1{3(o(g*rS0@x(V@/eQFWjJ4,o*o+jI.3R*=kM`J@M;tC@]UTA<WH^/WX"wd5$N#V0[)6kyr%"3h$6X*P|1)Y3.h/ZfT1QS/a9!K)Xm>m$JcRm:c%~zb[l#8o<PeZ3W;/)5)5UtRrpM3bsX|&bd%C2Q12hbtq<2N,=]hhR3%,2QrZ`mP01N*&)o`T2br263L@.j8c/g6s17AIojbdYr9l@JlrrJ<a5T$/{F>W89Y:8`!1iZddWTb%A;J)x5C(PmuU`#`E!74pwtf.Bk)`[rx5C(^6:nZrJjt20iU^{>g)UJ>%9nyQMB)UVRC6@<U+W_fN[Y6f]58a>Mu:@x>s~a|#^MQ5Lq3l8UP5@i,yD*KAVgh8H:(Ka]0T=8vZp{Kx^9t_vA]ma1SHR2(I>tol9)bs|Ov$/G/[ckE&9y^Ma);_3)G50Q,T#p&tQ^#DViFHA0/G][wwcGCz%"O)$n;VoomY,wctb%5K,`ne45j&b%o^mcQ,w?LTt}}mBna2@liKj:FV)O/Py|iRzR{Yg144dnPOJ"LC4A"hPZ7!u2h31WbKP6x5X>|K(<UkZF69YqzMh1,2x}oq>7(8:GuD@6#|&&`ZAw6>(o1s.c8{rv"@P2)@(oo>?]d83]h"7}KStFL+@`yz4/RakYspT`FR}m)[IN}/Ra?5"=TN=X;@~}jj^`xG2/5~0EWo0(<U_4j05Z*OMH_;Spmhbv[>%<WFE7QcM4,[ei9u@`mHx)&k7U5hpL~|UDA:@gPJ0y]opIJF+X~+~}3B]4!zj3V^HfWW3/w?ss;"B}UD}/YbvcjDp/<Znz$aXxokjYYqk=9pa5!zMM.vqu)3Eb$[=OyYA!PTXjCmlJzFh4{|QD9XD$AYdJ$gn/sZII.vCmG[Cs`|%wvth#KjPSmK<[(M}w[Xr1Z%jM{Q#<pE.v/hts/t/k0>2qdj=%L{hG^5~yBN_;df98?xg^Pv[XhzLLHR}|qdx)ssbXd/{n@`oJDvX="}1B2/L~1B|[=O~5m7QI#?3(ss`t&r~}h*V7Xzu0k/$dUEAqX5m7QISo`|%wTwsQvha#I[6c%UAM!:>gWW}Wg#LI0ynZIb"t75"YV#fN.z*4m7<EGc#!WW}We#HD@#,iH&{H0y5(ayl#^3L{qzWw_<i%8#F#3Dy[4:H(UXk%^:FQp/C8r$mKj/<Z[vFjusFM[`(W5hsSe[I4sL0UfI/K:fq>`P4ab)1U04|L}tj866!|%`OH~_z*lD8Y;c8PLLXt(tWWUi>`+H[t|J^:Y<tFKxbf2.dU24QlGU=T"aFBct|EQC9B&(`x&y@VC`v=Tn!2u2!>`ETn3^:C"m|bMd1MEmHB#nI4;74K|&dy,(<)~"vrkgJ>8(rCA/+a{V$B)vL&.lb3tsvo1kX(J6_`vkm{:]5ae]|M4$4:q4%}*2uv6r<^(khn5N}S<g3r~}~f[9~}tz(AeQ2DEU5hEz=(a|fq;"PE_RT"avY+k58#H[yCW*m?^!kch!jyEx2](,$Xo,+G{jI7Y7pM:gC,]:MLIw5r_]zgZ6,V6diRW9_J<LP3:L#|ssV+4v}%Z}B~yMrU,/@Dx5VK][/V9~cwJN`gQCla=p2m:VuRLy%3>GXFdOBV`r?Dl?/yL5?&7H_t;)WZB?Uq$IuK|VB*6K]yi$uU$b:jZVU/$`^3Y},&>4Dh4C?dTCO9#/B~{I"/ahFFU;jhb7u:5G<@;.kk}KD1GuH,QBD(/K*FPq!FY(gx1r|3XFpr9<"=j,A!dy[ox5JOew.gY(R>R.PWMtyoV]!;j^e_0T8)ijih=TJwfWgjX2gj]oJ5B[*I?PYy51%YC_;V|G[X@@:p6D20rhdahC1T>@JKN{eH}/$:>R|h!p"GSD:klz=_QVU3iM)H+1!OqQ"z@lpaT:j93On>Ox#`h^$_h9^].NU2.l[t#dV,,o.qVI`e2l:BA7O;trZch9h31}fPurCLs#HEGy{N<B>E0`B>C_d7|q8[|Ew>][y6oy7d*vmNVv:cUws&a~([K)8B,;c4cvExN&+%j6u9v1rh(Dc%zTHQ!_m}=[:5"4bU6/0uLnpfmK%+rS%+~oU>E=y:b>oI_7t2xN(euB<[1sh)/kwl)tIg_;sI>%WMeuF;[aYI(eE*gcp%)EVi3k~FkuFY8P@!.1hN(e()9[0sg)XO<Pend)=%GMSuN^YN*?lSb(^W#plQyXr}cDf5J8HmX(egvpr9|*wZ#p36v4V}cDTls]xG5/20iZG+vdu8r,=H34W~@u;k!%wWDjVe9Mp8U67[IN9X"76%Fg5hKRT2#xM^([CP5ZD8C`W[_dnY_`uHYYD8`b"M@VY{o+ss{tkelv])!s,Dq/Kf`Z<l:<Ej?w{|[w"k(xRE)[yPwYf8;[yPt*u#g/4br}:IzF@hG[N|j^)u])TdzD.v/0Z%(Ve[:6)%/D.v"x6O`vss}ASJN69M.v=oqQtDf[h^+d}%Lgxr:<G*R?UE~2i+qhEs(X~UT87n|b?T66*(|b]U1I_+K[2k^]soeUOZ]STE<r_blSTLN{ACTYSvo^[r!V}kl~h|g4Gqq<U:Iez2aS~)C]x{D4_tupE[K~E7M,CnGZ/%VgEJVggG$=oWY=`wOMTr2iTmZ2u)aKH6;3&r21TCUg0#~qe54O4;Y1GvJzpkbEMAEqYaDM5{Jr^!ic@=R;Mi5NNEO{b)n"Uf2rU2,~.UT9;g~HW8Ax:ZCnO[ei"6<B<My:D&YCCT`cH<{,pLx)G>~Nc*rfa_|0g{SU9:Zg;Fo9#9N:$h1vI&Q<~uoraVv6]%W}94SgV{{!{8#A~K9|EQ>`G/H0K[,T9,LBj{P%;08u}f}/k2y641mNq!ivi=l0uH4@|VphYGz~;/g38Vx1&EI|P%z!+8~krjxf.Oi(z72((Cp$F5/yj[>)9;w9wI!Q.|uy=/1ctf#5v0!,L[#i{6cbGd%dj2DNu1{3`te%1Lpo~C,DwC:XEfe)S:4O5GpUO*|PV8s)G>ZV0DU2aZ~8%4w7ZhOaPhb9[5CaQa{c,REd*]40g2+k5<>:ssYNr]`i{Z]WsTVLF7teJh[2x_3J65Z>d}Yrrq0IWk4[KsW|7de4sT%dU7h#h(4]"L;9W,[`8_ZG*7Ska3SY|6(+/61QR0^3evBdxPH.P*9{Gc5Gt{g7)%>g/K[hAsL{XzX),g=u:yM&qj52Z1cD|IjQQn!Sa=UM&)%jUg7,vCQQ%jfIFJPAO7)m;.h[OH:Gp8GVBTX>nJ_3CAa/A=*4EhF$>]WzyO+B5Sj$*TDWffrD#T^d/uwmSWh,BGB,[c<!d8:/Ddr02j:T7rM&VH*ofb|b}nRuy^9#<K^3r*kOg~+O52oG"j;I.C/t6q/Dgn~N_.[|,B;ynh/ZK^jI%?XcxFyDB,r}6CQzkaS3DDt}V*?7:D?:pk5xAq}B&*1ynRS]mp&%>gBiullMoF{v)E1=[v@wsNOv/FVXXD!t/F+wV_ybf*Km[&i@G@pw2_OtR37D]EgQ]E>Q%v6B$;B}0^wH~TMH+F"K;V%Q1JjyB8AeCJh&j~>.~kA8,Z"$=4UStT]l2q[?ZJcp#&<=Kr)J#=Mr=.9q+IhFIfHSrZuk{m>z0Ogf]!j&:t_5ID3L$Eq4|5WD">J;sU~[~?OX0g1JRacaL8#@z5XxSppxs;sqP_48%H2|Qz~ihxlErI,($Ua4s{VJ073<#_$;g3*z2p2ls|J6Z(GN6T9X"6DVASUR6+0l[&7%d"YGxv7v]lK}3@H3F9FSG9Ah+N,>Ifq"(!`Xc=}f@vj=|b|m~M^3.Q)FLE=|}Cqj*onl2$"qg:^iuxj.J9nMz92x<**40.{Z@=G1(oQpS8/UNT>^5T}s$KR3Exy(T|Lr,sk2:HK7Y6s[6>PC5N:^c:(X(g}1W+&q|bY8D1gm=_lQpn%Gu`l_{Jq&5oK+[,l{W8,K12+#9nk]A%,o}y"pP_*oO3*2J~cjXk}%b(w#:jDrf|f>Z~}%WfVYTnGlXv~k;;%VV^y)6,qfdhcn59T|N1|8"wK[|52V`{+iU7Nj5rE]gCI=1:;?2V.>sl$.3U2v:JjJp^aY<tcJ)|Ya5r)&G8_2UpY=T>cDBY;(5H],8m:qA1StWxymtK:V9@46dx|nb%T.Gh0~z;.Ph8OK({@jsFeIO?j%y_AL#EuJ/V[ovp=6gE%*({z5{K^3FjSJUgx&7[&W!DX(1}4eXb>W0gbe$[asb|+q(_VR5Nh9M9IZ>Q8FW^Tldl2bV<rIn)%2*4x]pTL:O6sD:`}{B1NB(V8[mo8/4cgKL9Yoy^lP8gs[hr>kE:4=m#/Wky:`<on<LD$xT=u6My%3Zdt{;b!Y4%JWZ$pZ]Sqgtyl,]9N0~zbG4b1!&ae_jSMn".auNig@2p~^=0`=X!u&=odV:eaJ2sj^/?$wDu.Co6yK*Bitj^[v9/4i[ZDEz]>kDbO^2u:A2pG/sZ:jT3Q:^t^|uC~N?^|,uB%Ug1O^jIT57LCpldgG>gC.jIE`1`JFadg9)%dN3QfIfQrpejv%Y}x^H(nfC_y@Ll{}o{N=]zv/ak!&}3ocX})oU2>6jf}21pC`k=uR?KQlae:p4uaR8F:sW}QVcEY]{ZH!bqGGY]WxN?mXV+rZ_%(oOMo9:V.zrpo%{oagOyG}oDP47Imp9,q.>W7/rP,PZ9#<NpX3{@kUdj;o/E6*O.T.qF}/nwF}raoL6>DTf]oQ`7&KTzZ^s9KriS!byR1_N7=!yvz!2bD*>N*<m`Yc#pKS95Jo1xLro]fOcDRV9{lXG:]MHno(Tisp29Edk@gF(Fb(@qfQ/g#+?|V^tjl7|?[#r2VH8O7uV^L3V!M.Hdg88z"}4:2j#L"kNU1ma<m3VDV1=uIj#c71OOS#_q0I/0no$oheaD/$([lL{P#VQ*!cizi5G)2SHKHFoNj%pq%,iUHGq#<X*pNF:jtYq/%V_HUS"b,X",rI_tsz:7wh,vTx|!;:oJE4Y^t~bSLT<1lXy#~35q;*N0$8wnE:zsf8)=j4~GQ0sbaK];tSXV|](P@$eY0;:&I&:HHfKluJ02Pml4^!QVDD)VEc]hh2{Rv([a`BC}JvA?u#)r.Q_3k>SfDNu:jI&?RE3qCXC]yr=FVXaqyWH]Kq],DqL)0Io(<v"=Grp>B_[<)S4)&aj`Xv7y)@[E}Zc[2K9!`Euwi4pe!oP5++M,cFO16%RH]Z<jWH1waY~cb7?^kmjfWH1waY~caOl#;LQ3%4sX)z+xD!Z>0W2&7tuKn.IrU!gRUaj;k^Ej(?9I9HGE!*;,%7?]eBa=m.1s$or:%I6/p:z]uSZrrLZUu7#OCokOlV2c4:yG.tv[Qbhl2.il2.F2l6Es2.{Z~c1N4%mOaw`wrf*wBe/;I~Ae^eh8$OWh[ohyDQAh|YGa!=FyiXh&u6D>%zO{?eJR;(mc+:`d$z~HvI(OjG3n[1{EJZ)S%/0$i+s,sUg3@ZQp;+}B5bpmo2Pf%htLcwT]<0^13?7oq%!0zq>8sLhteGK}Q}W/Le9RQ/0f&:z.O04do?1V7eAXQ3i3(WX?IO}3t,E#F0Pp|_!VI7P%>bSV/U+a;u40Nf{IEdwDBYe5}nV<?Xv[w6$#29;8`dF#1b]rz%S[clox;oBLi4Qfbk3[&)`)B*3)JXv!:f7{*O2P~pASe.;XspZ<8;bD0;>F@]3E%O/^$kAYLI#K)zWQ,Z:OywDmH/3)d>/SpW&e1yoPY_TgM&SpMyoPxs9U:^s3,c~|&[w%tOPT%OIa=FVpo0opp4uJGXTja6#SG4Mr0P&Lp.%;c:8_O%xLZ0<VL.W8O0:@5d%8Q.q$Tb>0z.[Tt7/w^dU,|(B9heF8YdepTU~d]1bOiJz0]C<Da5L3yrOw#X?qxq^|}|#3G#6Y^{||n,3Lqu/F[j0_7i/CywW)Q)S@s&tTPHsiXvk}BlMk,qI?5Ql>br11F4f#[,gC46]`"%QrO9Ar8:S+:7}i~aF^Qqw9(@>gn9?07o2..jq9o<63P@u[ju0fG(44mimGtD7Q|rl93K}y9AWnc2vRrji8(nwwre[/1$6qEGDhUavObioe0NeRU+i(UZL{_ije%{[|Ndrrj[b5[o;GT4.J)e>SL53)cJKxdo.;;uE]S{BqU5lvo]>PQEE]?qapo/ad!rS`EQk%Km3XzQI?&dUhN>&3F$=]nO7916/#GMeh3m=8Irhxs9q;=?dci3V(|R4b@/=!UDFs<;KrgXip^%g9cj.GJ{X%!&}NhEgxIo^BO&Rh68Ky|2pwt%0&2t]x28K874kdMavOr>)5lo=)t"IGc9<DrHL{&=;i$7?o?[(9"GB6_6)IyJ"@u[n[@TLF+(#Eubqw,jH#8CaykeDA8x|020d^cWBr&cPl;.Xrc;4:w7J2=rp>8`0;prrZB$>Kbkn[&)C=mcw?97rJoVNQV_bjd=!N$~wkE/uh^V.S{a/CGQ}pD<meY~Ph,0^Dxa_^Ak/Jt{JJ4V4hvebk0&!nwQoJGs09Ms~ok8>*tM[9iP^<ms{=N>PpS~eIjn=^mM3S.S"$n8(1f(W?z@uy%&|6bvDe:`7g+4&fIK)i>j/)ypEg#qXb?~m25Nwru<H5p{@,a&!Rph#fHnENFMko+y)aJ^6N25ueWZa4>UNc,i!VMz^0$xs/>*{T2CmdCvh|8P@SLNQr<$DmeBkQeR.,O`@MG$Q!n)?=/>$R?&auL84|tvJ[Ov6?g[I@#p%Q_C:jJK%h!II{H~+O2ZW<L6q{7,An:3Q+<}xj9_+ZvOLuKaSrU8<z4VP3(905+xMh>cH/?a~^RJ9ZIhuUgzv^nl29`{+mt5nsoSM&~6r4b8~.QT}VZ]9=?WYN0g"<21||[qge8VQ#xli!a>1,AQ[Y?`XDylv(unWS%HpmeFTX0xy^<e|[`nfjGMC~_{GKj5T&?[s%*?h/:qml7I/6_{~Rz%Al32yRkX@qNL`bD`r*tXg&S&/0Zvp0aO:W9Qk/=@Co1lw(=ofw~C[9!QY9o*)&Mw^EJ+O.S6V{jFKd&4VhIH#[.G#65G/^b=o5frzA.n+N|R#g4S?nVr4SC7d.rr3{/@D^/~>:w"DBj`tUKj*/A{QYbfO23,fy1)#Y7dbQU6iGE:0V`2Ov"_lL];ci(UJ(GDmc3m{m^f+NYeQx`=~A"}OOrVmaM6%JnPSI<&ki[[!i#ePBx)y+EFp:ej|W=K;H}9UPm8x@WYmoowG]W6*9}8/w&5zlm5({8M6u@[PiHH~C0ERdxWGJUyJKmNPH`b}ky{ZB%oEa`Ps5uI1/5vHG)Of[Gt"t|?$4!%GY`K2xnN]bV<vu:X<6GtM&M`&FMHuKdPDH^t:X|B7iu_rZBzEaBVEg2O[B6vIE5Bv_s++(ZjH>cf"eAEXFxI^DC)]LJu6/Xq)57(6[G>QDq%>GXFGJJFkB6v4Es@Ju:XgC,/4b:}*0b|W:l/4b~+*j,Im{8EA3NhdF7yHO0^>>kf#5N,?0AmxboNK}!;Jd:i8,,~#Ob}{ym*z.<3g`N#7&z[!/U6h=u2oW97),7Xi5P{$E3oL3^ChsqV6{#<cdR?Q!^U*{hkgl15v0O8J8h,}6g0?3c7r.!zB8$xAO1w"oE`}c20L0WyxLLshn,g|bo92$nU>6c|6Op@aYLCi([nY{P3bI6h]<ZUL2G.(;Us&%>gl9&;?]npgH},+HpTYd,jwfB?Wc7q_4]<UFq/5vhU0jfy+SQP7aR,vO3QvO2Zr9Oo~?Fw5A8*7pt^gk;UPB,y0]WmwogPK$"}WH:GN9RuIzw&MZ39Iq4Eu^4DuLs;l0}<+5/801Cmu8tT_MfqZcWJ;ZJ>{F~_g:/pYYLQ0EFOY|L7.U3<|GP*5IfGAaNvN<P/Lq5,0@}R6gX<26[cRmSExp:)yp:)yp^vc^gknggk;U97s,(.7px*&kcXi}u9f:^U1i>N<$|$*+"h=PFj3C9!<p;BR^YE/Kx$G@nnu_#!RSlgGR@?Ixo&$nAT1<GqR#m36Zx$m32WHD4g[xA>w]S_b.Anw[7JA&<^?fsLn2!D!<.T`4;ZV)fRKb?l}`m+Mhjh&.ub0f%_KRKKak]+MSfSo#!vQS:E:#&;(7IhxzH6*^ZR&|LMcP,655`}$_>(#E:jpk9Ub|XB3lA`^rB.6^oG`_r*"l7,BWK|j50@&PO>Cq?EiGDK)XC9^4TWz/r*|ut],!5tN$*ll5<=pLLUw@Q3*<kNvO$xE6qmy&sxno|zC^nSC<=@HLFvTY6a9zdOv&806eSOB.*:f]6*}Y=BH3@u,ix8|`~f*bBqu;N_i:S4sN7ra[r>Cy~fHT)8YqK#%oc%Nq8FIa5]8b4V,Y5JVixMY>Eqq}?EyR4I@>OWs[G`S3A4)9O}b`*!jo;zi4"%*o$VhLKgQX`_C2{*0[b1Y`H:e!w[reL:d}`w9&6<{*l+KhCWs5e~!%C{G82ptMZs1~!gbcc%S0>l:;me>SZ!K|l7B8qYq~2lrXAVn&FP{`(`@bTL?&hRG#2u%&rpYFt$.su40.7N,9P0x@P~;PzIU5H,BOX/j]|_r5s%6^(=i5>[J4MkO28`N3/exkxk2Vn3@9dUwt]kabJi$rcMfqc[P3z]P3XgD/(@qeA;+jlRLh$["}R;}4z&S;mUVl%[+?L)_`G[_gk/HC}3&,F0dUc[+6a6>:Bq&=5WT3Y+c:B=R}^;PtWKnp&%=9}p#.p&Lz@qma.{40`}Im&Jal,6iUuvoj[=AWeD.$Wqyxn=7IF^?,xrcM"{FH0gisvC~/^5_$"[?^=$k%"{P/VwD`sNrofrUrJ8}m@f6>x,X51CVcXv>*L.m[2+K2?JtY7?;V*@5bOQ+*Wn#,8VdV_NrCxbO<m)!3YH(z(5`!qab`Fh8Kkyk#6>=n]2#.[G<hdv:;:H.X8:~5_W[GYUtO:Wvo"cq;VgcO=Hel1bz`cS`W#o"cL)`,{Z.fafx~L&C]^k4,_`~Tbw,agKfNup!z^Di9{j:,<+NU<ZkP9%Z#Q%SQcxu2(bSwVov&l]?R.&|ll|jT%KY)f*nM15[!n69g4)J_0":YdM;2IDnUGz"En#B>AA;ub0KV9o97lE|#k#!x"2PE@$]Ea;ow){p9ANUHcN3!DymNx]A<$I";[,@lr,I=U*j.mnv3Ui5:B?u2Kq~,eluKmS}b/c!=~<q/)&=Oa2oiMR00I55W(_MM_U/p[BN{R#HnJaz57rb=nGvI2/<K}|An^`I/BNe:ohX&7rp>^yVd|r6XI!.^tcClLWg<e3CQ7{D8VHk5gHB8*=sIOwXG<t>h]KPDRH3^T,`M(3+UzA2<7!,q2q;zkger1n3]w/ofIRv%%n_L"d|r*lQ4g"fBs}|V>]u/XY#.ukP@G@xjILV=kHkjX%,Z=mT|2yj(<N*1G+@oAY>b&CY7sQ4@r.P"g95|!n<;pp;eHeJ["ZoN4;DWP^:%`(OnoQlOVO.KjF~2Tau2CK2`if8?2EG7KO(O*@3m;#_4e;cbh8%og93i9KCk9/.fxU!_s;x>qy>;&)v<9aT_u`1R/&7QQ3w;"S}ai]6X5&fh^M6eSvQJ;qe/mh2l{$8)g4yDC*aY,Or02$V==*gd>3<*DcD7E<&];p7^WeFQu~S_XsOYshjs/RDWpyvx:z+}V&h>$=U*GTT+@f*b>4)!0#s#vu,v`XYW3/*(YG8*C4>^$ddVDn4e8imd<#28DNkDPVtjNLbO`{^NzQ0l?!=!,#~$I,df0z<Geq_@zPiNxtQtyWnu]S+~${fx`_.;?8KG8OytfhAZ]s!?J?&rtN"BQy*bZIEVL>qq#O?@p>Y(0I1)n_/nUDj5,Gh0Ff.mkL[v!N8_K&Y0`mU(G~0,yR``u2)J7mnvC*29yrz$4<shRwC8@NChAPoTMvxiH*|hqI&C/t.B^UD*?e}[ytz_83"+<kd(tC2$/Z^#)7(oJJZ)qwUiw/|kxR@kc3n,y8>I3}4p4k$0U>~8HdkqaJ8xT.}X1lA5A~<G85%76^An!g?V_])#$oG,+i<x{I6,KYBWz[oFN6p)QT"[.JUK|6,#4b@3Uhb8_[Hq4[{_P^cdiX)/<.R&i?([g/b{lBeU6M`+a#.6%Pj.>gJ:QmdvbiGJeKR:3Q4#>7aw%|V#h;ulovIBstJ`LjkB&;*VkPnT^RMg+S#OPRWJ}S1VJajyP%,Q9djetSSe"8W8q{%g!dtS!a[S{b=3Wv!pUru*9/D|Bx]Ue7"mUT%B*f8ySS&>V@20oNS["%UhM?Vu1u@M5MFatq}{N?UTsZ=2qd|^"MMi(j.D+Q`vU@l*&,6uA3&,3BW6zEY(Lz9_,0Ablzno*9W{>.^|zC1v=B@|)r5cBnq@B.hw<("%2l=Fc<<oWYExf%;W*}TTUF#)ZCwsoMyZGT9G2uRJYb!14/0MM@ap<;pm)Ghq~$}V{r8m~%n}A_)={78+/@c85g9piT!d%904cN#iy8M8$x3I4V^*zQyD)PgT%1,CZp=0B8"VoS+IXd?0o,E]o9r$A)=6ZfnQ&]rdaGZ@iaHGe*yT6};HWX&;!?OZbbrr}&fVSMi;t=xGG]ZfxcaOO0lx}Cr<^u&_LLo$F,u9pueU.m=oHH%LjjrL,cKvd(1)mX>0by9P$["T,EyRfWhz6=k5i/)332$=%@AqFXR%%OS&|%,F&87j*zXn<kI]y)49|b>Tg`QRKT{j2g4L:Jb<Wz[,}!Dzjxz{*@v,C9PjKXjLRfiezPSvI6Fuu?f^GTx|Tt5igj/@h!u6#r+NPJk_"$K;~?2$9?lk*^0,g3xD9R.8trvh0#^^pw%=0#Y</8O47e5e?^ESVYx*R;l`$x$}6Alp0}"$zl$_"nk~AX]8,PY)8;{?2UPhy,!Qhtn(iV|]LWVe1fi!Mi[!RzIm.Y#eopV4q^uEhQ74Z6vd?:OPKQ~{JV`riG3G&`JQi;;0z/;+LTldxficLHdX++0cb73b|!As)i)8fl`q*vAn.L7u,#}z2Qc:5j;.&Z4@X,#ceDi]z!PdKN3L1Uyr^xx$ZbAps2qr/o[WG%hyMi~%KbfxXo5_eLYqEZA0KL^5{XDh{hEw+IANt3JLH>,[?ybn*R1y6aKwXow5QThnW&2cXJpuU!3[(W&HBe(WU[rt^|B8iY4j!kOaQf`oB7%%z9RtKs4[D8h"pP<!~Su8hFBSW0sV@Kl],vEz".&Vc!fPgM?0v#R,KkZ(0fz0U!}cz1M9T.1H@NT0lubaPfra[go7U[{.O;gBQ~y&~Eg_@DqxJn}p])"oCkiGv/@3Kd1.KfzN_#Twgc5|R*oe`;.eAY[5aQrO=iqGyj}=,7:20@yP0vtf1gLd~(7VEK+5u3G:rMO^s/exvp+f8Hm0>z9{^O^0.v93m*}S2w53[Mwp$5,2P[7/+X)5~qn#D2"FshASjxXompw6~VdGiH#x@`?e:g}R"_Vh1@/j%atbKQ7w".MsoeF]9bKdV`pw{n6X;.Hl4Hds9o,44]!QA8|8@&|%%*=YS4FgR;??nYM810Gvu]ZwrEIZnWeDpWV3UyO$C=BTpsF$ZbsFTyio4N?pC^n8Whg8X>XSC9Zs5dXr{P@]9)?%%B2%WhsSbe6D9wcb4W=^cLbk,[%8g4`!8qXP1wgvFH4J+:[1i4RReeHs},6@#P9cj;v1qrU,ALxP@]w#j!l11:RMBS`9v>rH?]&gy_gvH.b(5S.u]L8}F&_h*Zpc$v.WCWb?6[hNA0gB*a5*$($ndz/hzv?"}LXYOJC|Ttq{[VH?x_(u>TZ+0d#.qFy.g"ty]]DnMQ?um?&grr!qXmr9^0jM<@#jqa>cQ%u09`)?UMfUJJ&C0Bsq=XqKJUEURX?:VY!1:#vKTh&05<6y=uai?<6Z}H>txyO7%9y/%BQ|+kcUU5}?Drj2[q{A*A(CvCnD34ZP*JSU_U&u?$L?.VTFhuf7qyLd{udt&[c|,WB3G0#[AnG(R}U^I7Z;DY1^vytJ[a&G}V|?lDwy*nwjdJsZWR<6$P2vgH#U6do:NA;`_:(Vc7g%MRbx`##L"jTJs$R3%4!t=k^=D!]=%jFss28S[DA&J}e1tst%5j6%b>(d1v9.8Cf0Yn%P?_,F"I+pkVXY^j.|d8pGEKCil&/Gj:>%E(CI];1_YuXJ#o"k[kLs7C++O}q$}bz4z0$#&PnC^?/eoE=o3?COC[m*Cs4]&8Db^:GXv44m8bi,Ybd<^ttdK.?.d^rc&]^c{|+UtdDSEWO(Syt}KCcTy|xv<qBVD!2j&sr2O.LNWQf8KQh)H[[)[2(jSv)#k0WrDc3g)d.[REy/7fa;TYiH2=UFBDep*G.|1=_Da.q5INbxn344gJ*9I]re=Y?(j^/vntPGvUbthbi7R;{W1{:_&uZ^hr}Z5bu[6~hNi[|QY(sUu`,B:GWgeb5J"54%Ji8[yog5jK/29JwXz46@Q5zofU5b%wT/eQV5@Z}U@T^DWM(Fa57@rVQV=gH8~I<7P,?K"N}~*bHfWhkPcRoY#@hqJF+WTN?5G:t)b1dtRh}_r5oadOQ0cboNH[5[qTI2,bR.u]n(=6MfklWgDpkV@va[kS;z(/,oA}>0_vC}A(1UmwZk#["a_26%C{W3zJ=I<6]^6VO{eeBm}V)J.sQa)77po4~2q9PNfe`Ss~}b/!Y(pc@nwPi;<pL*pbUN9eEQZmj<L5u2P~>N%>)!h[}LUl!15UlY{9^3UA3_YD!eB8^M+?%wA)LUV?T24i07^mKdwNJ3%4]Rx4fHD=[=OTGK.)NSx4>K7wG06XdU,EZc{I%rgYU#s5A:QbV1NkYo?^C<W3DN5mbH/H8{8F>`WkQS|,~!afR^`pJOcdduli;.nlZeA>)E#e|;00TB95X.f0L9A7MnuK[B#&%Z/L~8bdgi_r>!.3l64]<Zyu8aeMe56@#q;eB8}{[f0?T2/?o<E#nfV^[fZGL.|:@`K@O]R{LvH!N0GlKUDXy2yw"GyU.UlFf5(*]?7T:#~hFU1JFP%l}(Ko6StNi81}HfU*([ciLeVw$!g>GD#<jI|/`b~g<#jJ+y`=/]O85@V3EmU7:W|fld)WU}y}MQ&%#i`p0VUFG0PZ_olVdB}:s_ZN>$XbzUooWBngg)!JzKvmt]_^t+$aCQ`R%q9=b?Q59(zve|(DVBKU$FqnU&Z6n7m:10%(I0hNhRiNR*(Gza^1u2zxay*{>HfQcXH)D,9CJ{FB&z.y~N4aun9BLIy#9%oZ"G(jzCvn9B^w@M;G31Wu_7}Pr*q$[/F`^5:O][!6I:5.4BJ{,1{O"?ytQq)y]%,>bI6E2$wcVw|pivm`hw.3.[4]A:hL.pA`#BJ+(<X"odu[~r{uS8wrdTg,AlN[ixQxoL>z%NKF/dnF_6#vDT/cmMCS1Ina70NBqf$`bC1h9LFPuOr<[9@b`;(saVpVPX3QIj&oc%/!|jw<39@pl&Q)vVbN~N1sa3SXHYy(w&Hk.Vca~4^V!Y2"c<(b8Bv@e_^U!!X|Q<bzWqo={o]k4BqjU&|>!?O9g*4*XbpyKl~a!$0C@dGZE~LpXb:#`3YiPl`v0fW`!V3Q2n%q:3X|aOInDSEqV&XHXN~NGmpGeNDlM+<gwpbk4By8>YfI,sd{k>2f#jS]*JfsOXBT*cV5bG:Eu2Sk%5cOejR>_(w&T}5EY~xlq9LIk?%rD1An0$w2z|"=$6CXvFm:F1qt&U8j%!h,t3X{8hOjC4ZY,!*9f3t5:8e]vNh{kwAKp9rBiWda*Sv[#;c!oVNYDccq[:**;99xR&7>US<NxLp2M[>X][c*Dlr?CIiJY$h1A:=~{m5bD`M4x4R3^bWE+K|krdx_=^*c}V0__.poN?l<m,k)LlUY#HA3`JO`r#Aed8AeB8Ae*w#ivHf<26`(<cE8z]jET8NHsrU9AeB8@7AejeWgnPPH<eA8AdJe_rulwegXc:uzV7`cy]U.FN~50cb7/z8StOI<1*"W/z]wiG*M,[iYnpQr_DUNJeah*UoPYa6@|5mdH#Pd!.yb"VGdMayF[sEsk22H1wDNLNZ73lNRXck428UI`pW,fK%sXmlBG,ZohKA2KNgyqp{t&"&",7ht(l&8nBXZhtRPs00f%P?0`wc**/3)G!wedd/X^WRYo:IB|m_o.Y(iUL}QoL!W$gE;gx`_@#t;`1to]BH:,T_]~Y/Rbt,7)4AkASSjwh:rhFrdh|Z!:>S/`gUfL/1T5Wt{O^^k{=^o@V]`/Yo**+VZ^8&q"W8[Y0B.AkYC4L8}>ib|J@B.p~Io`j>knUr)LQ<&!g.#C&>`h1ZPL."0@~i=si|(~:EL]0o,%jtVKY$+3~Dg@f7{Ta=`sJzww&4KEr*/AL$/)#I[X9/ou*Q^@b`YPwr:T+~Rn,("XftTm..y>lONvbu,s+OMwq3!g>q&FH^q?vafw8:03.".GX(P(}"Gk%~KNbZs@"4e38^:p|:4u2won`F?5JL"k8%@@0uq9wGGAolySd91lHyl&gAW9r@CDDO0j:|wE6t[E@6xl|Sl4&I<KYR$x/?g&05rnp&%>g/L,_DW._^%;iGyQM`!HUX%xvk_OM&i/"|RS!hi%&Cn]ZF3$WJQ6P/EQ>W`V3t#:t_7d`c7nP&,RBA<<bk7_15KYVwqq:{,,UG`A0;K*!L@ITpy5KYV*KYVwqmiU+*qky&[NTJ7?d/#jV^s)YDQ]pS3HI"gcTB.AkYV!/7I?q$0y&":>pbD*J"GDwkp&%jV9{Pr4BU*AM/Vcr*Q:V&`79cM4R$q0h!NXlhJ~_$!Q+z`%dfe=}!E:ahE<dj2^1bi~O5bAen[Ic}V~i66f[lCXbPy^3aA<dfe`d6#3Z?MvOS3kYI{qS!X`j|#,6JIYgVG+d!g<;q}Pp|bdi#6B>T.b9BJXuXoaV"[HN,nZy.fwlV;"DANSbI[>*(:M#SI:)LT57H1B&beji7_gL99}!uMnh>V8I!#|Qa@:tuzBC|IS3qqB_Nd4fG(?do]0"4@`n#&rx"fk;{=:LO&lv5l~$%v]WKEK6`tH:@I2N:1C.bjgA*hVHC"mu|E+MxZ^(2u%jBL@A6Cm`F,<b/B&t5D%I2X)AAAAAAAAAAAC:NE<;KrxT8UQ:A29)hi#RTp!8cnr6UcEewee@G`tC:@s?q{soN5.H#ZIecRBR!S3tyy7Tk=sDh4nS5d5dnint_$Q^%6mP=r*`".Xu.DU[:mj@5Y~B:3tnW4Dx@G2!96_5t#33lapvi+egCp=FO*:}s`U+N+Ic;g>5Y,+/QQbqQ6D?E#Ph)Hbu])BC>_;Kmecr%n|+&<SZ#M447(xe*W[[vmNJ)@9,}6!D}H.[%=#osv@nNW{LPkD7)`e2$^,+b?jA20:J>MZv+/:zYorEA%uvtt<NGG%x@tyJu;1D3#Jy&ySy`?#5#vvi1@R:?`JjeUO?TjG""^PNB,OTqYike0W;5xk:$O}v;:|R8H`?^h6GVzEoHOEyVnX%*ZE)^#aHUZMCVsN<kva&j8%&f~gkY+=PvWC7k0DftOlh]%<_Yk7bEjmD3<(XMbJ6G^T<%8BROomu61`GZ,4["iFj;)Zlz|p{a<3C9o.H2~9WL[k!jg=(P[t[]?+EjTv?g7q#FwCUMUOT8%hB}34YkNYgLRlM}Z>"^O2(IiKBIF`upz`%5{N`0NV3/G/.WiLokZt.cnM[u&Tv4B$WiS}d*Gm3U,M8&qkSeK%Baq0@+>9zt*4M{`tmU@ZU}p=7R(?g{*=+/*8bP$}^O_0Q{Xw3$(8qbvmV)IdcD|zyUW^hZg|Yq3uf7#m9%zdO29yZ!|Tbp<uet!M~&8VR.>)8"3BtCj]7DrDtxr<,paAZr5W5a~Nv:Rf|0D.k|<Jjj+u32LPQ4bEXWG1tge<>.cMo9;OFoYI0+BrV#HxyZiqU:@`rEQNm{d7FajR7%CXssfbWh{Lf55I2(+Q`]%BT1w:H6jeBi$oQYa@?;^h3HE[FOiE,9R6H:kDfYu$^m]1@<Uu),x]DfT0jt$F7WWX)LW2QPvzkRQ];X*&)]uLIpcIIWaa9^Nn)9p{"aZlsqO0u7?*kL_pS~02+DJ4;H]d)|Q2qmx5p21:HySZzs4Xa0i&((rIL5R@6[hD]U0.|6lk{%[:gsdHM+Zy`z`4@e2Zo,,O]rU8C%2>2DDilRC$X7P)RvD;gJtQ5#M0y&`xjUE*|YfL!S,|+26lJJU+.:sE@le/WL2k~JOX,mivBrEqceo.#nGK#?,H:EXlc9R)!)Wz<#44~g:>[{I4)MB<%Ke|NN_Mth?7tCwl])w5kS?a]#~M=i6!=U)|aoU!]*^E",SH"pLW_qJ>gq_q.,2G;&eUf$CGJe{o.@QyLWbQN`T1>MM&Y5C6"EeZHGBRbLe<OfUI^b`[xZtm*}!Tu)#m4p)3N<H<;C)EuM}S~s2.~^[2}M|GFTsPn/eV.QI&8Hq4Va)j,%z5M!oBXUsX`_poDK@ap=%[DgFj#_$/5{2H0nKL2eDrKP/tJtE7VoCQ6RI{"??]hSD24M&S1i`hFxrMWlEAZ%?kiqit6qD/m+k~g^ZV#wMY3#r<OT>aicCzL1C3PFem"5BU:`:DvKGRtJ{=o2K#wm+wOR`<#^nAB3dOD15LtWIo_U#?z,ElWRSv%evD{~$*%d^`VI82J{1x1B[waMIT1y%8aIiEB/OF.Xvh4d:qTD;&.?F6q[Fv,l6c<8js.MjTC2%;s~IiB[%d1(<JL]c$n;}g}5iT$GMBm1FF/j7SsyW/u9=35NXKjpG&R.jp703.rL]qCAw?TiE+TxgizXm"7r@sFol+ud?ecIJMm@9?~iS1[:zEvg.^Dw,Tn]l#765@6#UT?ZOi!0XZ~;yG.89kwxzn_u?,GMn44seMls"z=hEt_*H``0:M8t.+n5l}6pTRASk7|}c+yhf[>Oc(@$O|/b!?^@A>;4Fj{BFC&$(Oeop:u_=!W5A_[rWNK=5[0H`/JU}46>I;pU()Iv~+8YYhqrv9xdiknh)`l_7v2S_aREto)njvF}W}Ym_d#iJ!!%lDJNTW$QdzsG)h15(="a/eN1Lyu}[,O7G1w*4(WeqL!k8ai#~VbK:V`{V&HYTzPW59=vhJB3:_k!GZD{Z*CU*ie0LWaUBnI0j)WI+/DMsjFA)7z>lOv#W}IW,2nNXy68t^3U$e((9PH~D{3STEY~ccnwMiQ8Jav*qNGB,~`8;;^$_J/L`4q@k6]{Q*=vMT@+y`?)uLU9.]G6Yk%2`~JXhc)$H)60clK{Eh4_k@|MXknh}x+?48rljQe8F?v60Ur*U`lI_7RUu|36%mPR=:iHlh;D5%|Rf/{]PppR[#?mzn2r{^WyVTMcwSjb3Mx`)1V_NpClq],euKwaQ?*RH)>+zx>r5s6WEzIYuD/5[tTh>y1_5Bm9&m21k]Xp1Iyf^Dt.h#N>OKJ1C^:2SiAU4c&[C|b>JnF?l!rI&p9YZ}<FcyU5s&Qrl04M302[s(Nt%z)4M@}x]7*Vw;PvO/vJ+vREX^HHg*Wu:=*b^F4fGVmMcy6tp>ZA]x8;PD~Bn(LU.TWSC@#M5K8}.Sy:|RWBx+<xiFbnEjPV7{C|&#Duzp.4l8I$Wq#$D@3b!I18t^Z10K:[0G7PFIR_!FrWN9&jT%pmu)8{$t#/YxBL)Rw0{iJ04TvkP>k?&)L_(VhOpNu**VNO@tIT^V64!^"j)Tu,N0JfNt1A6|:a64)qU%e#btJ+w?3[9SURO;t2N7(4_`$2Qy?I$=)#t7o8:JtprH<`PLTA)i~,|Ljbfl%P!Prk]8x[(;eoNh;6P?DfYv/w&8tsea]+X0iR`m+z)q0Q9&k;2I,(|ERs:Mo6y_TqM#~q`3]9(sZ[x#}Y/F8f)R/t67ym3a(;m7SIWzxZHXf}#I:wb>t`!oS9u}6e2`82Y%C"VtU</txS#lx$i4{AF@kF(6T4Bu}"IINe?>28UT81&LF{aY=P*j$5&PyCEN5Y#ia3KYpn!U^5dL3gvzUcYx!X;05CNlX"()<SVZzYR1lAK]y+ezadW0z%ge*[Uxs238ccvBI/qVSgsRc{dvE!~D3Ltj}#4_zH^5p2OT/yD6x|;0b|OOGB+q$MQ*!F`/JT9jTwx|LT85?F%|4E71_+*b8tXm;G6HpBFb)`$8@g_1xQ=oz47$G&O56[QP`2M7%%B%[z)UC^=&_o}deD/<iB?Q#"8NDfJy%c,$3>18ZS!x?pFu7kSbO(BI9m*R]h2:E>P([GiCx%1uMF;TD|>X!<Wyd,,QQ@JOEhTpT=:V^8E+YmNp5y{EDSM+OFW*8ms{mlQ~r6zxXn/7/oo9*aE]%QI4:{w]KJz:8S)T*taK6Y0|SXb#28}#fn1N)_wZ!arqgn(a3*]X3VoveSF3KbE}4rXFVwAV,rnmy^{]UiHXLYa]>wrxUDDAF=B()?q:hG!/TWikelip~)u{c>2^JMcSq&#tMH~uKqXkz,X(e7l#+W.5HDO!"XzLa^LSRcx0?qCQP}c[B*jg?ZKx?lR//Zq}{#p!p`YKO1>I#YQoTyiqGr5f6*3rs~A)4s%P@&iR}&Axd5HcVd!/uAGrUV9f4l~))cY|JCQt.w(n@2|%bMPGf}2qCG1;UH"4(_r#j!>}Fc`qu2:xdwu7%Lp(0SlhrerXY">bAvu>I$UYML^WmNwipNKJ12/($Ct),;90)LLL=2O<WE2Z@xfmq4:9V.%tqv?YCkh#C4^~WlvwY6)"tLHW[Sb[Hg)eA+sD4uz]lC@pY2*KSVs%u@{0J2nlyYSq?A{P{/8"8h9f01wJ4Jy#r,|&02&:K#oYI4m$VDDhT,R:Y}z_cW.XC6eRR%*UR!aJ3Fi&KeicDabTHZmSlCPc1/Q098izknJUgmW$P5.%$23]p=ze<4Y%G4jIJ1b7tiN/d!l%GxZvx}f@<+*)!/daYcS;!|c(2GR92^Ip1$~u6=Ft.pdmUB]o#uMkjVuQj6UkE("LhqAeb`LIStfX!kK5OgcZD}&M+1!tg2k+_H{,ooah[DM4[vaHb)KJ!ZKWkFwY&P8FDVcTK8mD,[1F:9?3Y$E&!_,Nd.1)QnTVoNPi,884#]AQO/h)!?w,nWg@Qmn.K?nr.^$``6lOiu]{nJh8$,N+a/Q~,3=UIO"XVwy_*6pOTvHk{kAa!e#RAw0MY;1Ruk"vJ@xD";LH@Ab%w{yJSHG`g]D):^<w>@f2~5Jh8g)M&@mc[`vh+@v=%;:uj=hzu^6*g7SdDe>VW&DOM_^Xh_<Ey^2=W>nf@5QQ!qO?}iv<&)}1zn2(4]yWnR,3RgJk.r4jyPORD|:kdt:x,N,<O$X$V4*|tr&LFv?YoK9b?yq];uo`|,PQU~$VvN$%6+B&u*.o3:Ta7dddXIdXum]th^Tg}NM?+($~QXs)uj+bMN;Kgfb?^@j~t_~o5&Y1HEd*YNVN,%rd{h|84OEFY~}i"E&ge,t[KWeE5=eP2(YJ}Tt.Oah0uH.U%Ag7w}^KL`)Am*%_QzR[}u7H?b409qLiS[r7s*GpI)O$&o666A7:i1Zk^L$/q"f!16vvRoV}WJg=I)%(}8r!gFX}{Pu>,z=~62nfX)x0$osuyTbF!k4btxRbY_DI+QLGf*A|y/O(Z}q[#S_!pgI.~t%VoU$3vr`%53C6P^#fJzX*}Dm44069V@h"@*aLT7r#U2d?}|sz?9+5,WK$+/}9,EPwW(_WK!(38M=.N:1zBeS)4{,w)85oLCmG%FoZgtK|*.s#XYSX"sS)&?%(M7`j8N%Y:_E=J7@=vZIf/AH2XZb6*2Ff<O8(<$L,c!3KU&0ofB<S3UHg]w|#mm_8`d77$mGk>c|vL%8;5kd=$lCXrnl;k#jaLTjN8YXQ.p;E^&V[T1|33xT!d^x{FuBAtN3;5oqBOq%IaJh>xPiLjBq1wZTMi%bYuQz6FNKPG=4(3eTk4lIu,"llG#0YbN5o6^<!OAg5<1d0_4C}{ylOGa.*RPXER$O_1NpUQV?@tyWoPn#|uImYsT9ASWGa{Jk0m.vi!4jHz7u?dsse(:aLHPljJ(Z((7K;;T?jn|zA(3H2/SS,._Vy:pSeGSG)N*nTU+<Y#Ewa!d.x^cEWq:m{dpe@=S^Vx45d<}#OgaWjr[f$+W69i}vCtA/2%J|Tq>`#5wRp&|OhlnlOtJp;ABA^?NU].+zZ_J_/pFO@3%~N=pPGYA@UFRg~}sI#{wwk;OaZ^2g<iKKNSiF}Lw5A<0>(xmFm2!f72)w{L))u7x1jDGO*H7mYYHuI)AVh7QnPLLf/>;rj=mHA$]G_m@2|L6V#_LY}Z%4_m.CE(8B.}s=>wW4yosc@&&@ygLNJbtD.%FNIFcRV<6GH:FA"8!Z]qQDqvDN7kb4,uy8|>)$6},c*itan@Q8aq*o=Mw*S(ZZ3A464iZ;j2|wjxL?7q@pO;VB96oLAmR6o>S">jK!llVrI$pFli@`F1DoB<#_iIa2O!&I/KRt"b_?ob&HS=uhFpRxT&{eLNUpZ>~@L,^x_k`;A]KGP?Tc9/gnoc=wUpL3Qhp&7ESmn!r/?F(LJP!CfN#)fTfx)(qD1@TcGpfOFCY0nsUDZoqT4<wGcWpdy}}@7<Q7R2ok7NT_[7@uz.mSmQg;Zf#+?c[5YGXKnUMQN}"JF+cfvee1!KtQ0i_j/p[V9U|.@1~12<1by.WGY8Fa9V4@C~8Rd<x5~_Do6sb*;:3c$eb%s@+dOYj"2iQdcHlainLV.i0|nZx1:a{Q1U3OWlAJl3&W|9gEmB2yVNC]5!gfcy*Y"a.OHjZShL*H1z{DS57_FW}Yw.w{mbDv1$yn[EuKwtUlM|NYxNwHQ<!BE,y5|dn%,L?#wv%=r_aOfW9kAY&UCPB;P*;jSne*2$+LNX#|HMFS!!bO.+:VDg~_20*.<f;9_D`/5gu#4@vY8B!%wWDplpz+aj!l$Dc|[~$JvWhHZl,/vjl"is,{vxa]+S]WJbiv<h33z,etEj*{@.;LVvTk:O=xSJ&he!DZZT#e~.O!6(7!|T>CN%i8)6ktmRh``WWkST84vDs+(AQRmZ).1+SbQn,~gwpeBj)n+k%Y)D%D5.%Ib:w}N3$hM1&_DU72zWA!oS/dWr==Qv0I|W?x$Bq9ELF,t&^&uX>Z*A%2^f@Tu6`]r+r;U8"&>6883"Ap!x|cHBJ7lf)%kY?cd78gFkA>DF#v6Jw~|,~zE7!$#vMvY:!0tRea|iyRPihZR.&/!@_w=ax*C&:2/O%iFh7,ol&;|k:g4jC%{{u$H[T[:xudQdRYG"T_R5w;&Ipx2`Wkmn/[zxqff6(iQP5]0E28u0N}3b9as6<{~t4~To%(+pQ<a{wJ`Ez,<bX=LqO!$Z4yE<9`eqbLa!=X&2_,d,/!BeUR(z:z%N+1UuI2BD?RS$~_?S/e|HQ[KEA@),OR{ag*?0z=WRm}^q];c$|>G0|y~zFQ31.hqVgx]3T7DbAS|a1=;XuCK,|hmR+%a>xP+FfL>2yV8V7Tnj5@W3g>,#dOl$cF"$YFo},22A[LzP0bV#e/ZcHG+`[xLa@UWBvV90X@8SK4.vsWM%i}o+[Y9Tp$R^ukLvMl;!5iJ`KT"aD/p,W.$NLYwVFrS#:f?{/s9K0Ie[>3D]^N}:"^B.TW3C,&64a?7`L&n<`._NDy5/<D6;"w::cn1K`yC,R5GU"b`,Rx[+!pgG2y0Orp)jl=;hV>#}O1WALg$&"l|K9>QH[4WZ28&D%.gNbIaZhs@L4;N@6&}{vFfI~SYY}QHODjtG;|o@9z@She3>d$"KgWL<!>`640fZ>{R|]TKP*NWv%,%iR(.9&aJ,wYucx/0Bx[O{QF&<5xU{)1q22}=U/o>R$nT$E:@4Y&rR:!#V1dL~<]Qb{yQr|GiXY:Eldk4MI@#oT2Md1=|_X*D)@9QNrGz@RtqYR+&c$t^Zb7{v)5rH/Q=[5nd@TTzS9?=,cp9N?@TTDKzQ3,+yJ+~up|Z!qF;[J1Hb@6U@It#6<&X%_w/)lFbyd1*9N7#go7WW#3PW}/_p}kCv,I&?(sbB{ssfcFast|v}Pg^,/Hl>L"=SSJ0jvlQ|TU{Sp?s?tF2t}+"_f`t*1AAHym!I)daJs^WAeMCMnU*a"2aw_(]7|:L+s=KG2bxUjUBl0~g?3#Al]g>+4)obVoa8wJ"^@EGoY{[9%Z..MYv:pJ{2/3d]#yD8xQT{7HyvX+ZX2Dh98@0U.BS38v*|^6w#Ox&0K:hhp%i(W}M_s__?L@4GMzHU9|8>fbNMW.1IB_Vc:RqD#6$WBY:!BxDV#^;p<*h9*PL=_Whst}mVz0lZ*v#~__e,AV+y1wx6Pm?LzahfgwIm82YQY`#lU<:$:{kAB5dpLL3AE$1!I<Etqi]1rhsKqf>L$bS_Ela9p0_OVx<ffk|Zh#f/!E37.h:|=IKbIyu`OTXDOW49%>h+_LdaWvgIUJWc4mk@MtD,d8k|C)NHkdp/jSiNkw{k9<+q:3VHypEM(XfKBih$[z?zL5}c5<,4J8!lVdu*V%R=sVvSS!{$&BcC3SMB~FmWYFHZO{iwO:OuN5X18IiMQ?=qljUxT;>MeZAt3%G9.uzVFs{!WUx5~BUaVeAuKC.nv^>KxgDb&;`,*Xnz]!2u0GtyO#5x,z;|](HV6o?SdB2>rp9*"Ge9zG@dY_^Tl;7mA"]AYbB?DG>Y8IIZDf.du57bjI?1tomt6!^/k3s*cM2f1ItEm{f(5QVKN!2VX0=gwuYo?&(1Fyp1%W387lk)fzG^|Qo%9By+X;X&sVl?Jp(IQ#7H|..yF^bS=e|FA"%_i"Z5*p%_s&#ZTPSQvY@dW$>Gp(Q0rQqV|&!#G/jl5y5VJpbaSUJQneI+hCOFQFP&#RYUN<FA:KMbVlE&6IR$R$e*cVG~cc:]j;:wNiPE<ngO/4:_,@5OCMAyZS_jlKMnTdx0x$iyF+@feKaFvm}"#,fel7pm2:=&G^}%>0s`0IgRyI;]tx#o9d_ST3JkN;d?1RrAH7|JtE"To$.r)DYwaFHQsE52yQ9/93ES$j(}&UMUi$]TXszj_6KeMfTGWvyiK$f:WzQRM$tus>3XCr)bq_w#:)/P@YFD|:QoVpK0:[Sw4l815M$FzK68Lek=aFp^,sf|?5ZXXt;?hP^imxw"Iqj`#axww)A/EcPx#My[b)baaYW`|k!$S67hf4/x]^V[PaljxYam+gV"o]2FQT|zoc~@F4V>PQLxew28e##RGZ/D5ZHYE+D:{$(xzB,ceqR4KT(NcLm=h@^Er>:)3LR.Ul;OPED$s_MX/23?Vk!%Yxrl^K]kt,TaQ3toAE|kh=3wd/;%`ibmblKSzO19>4[7HEdw*%[{Xa4#fM02Zi`)u@L>WMr^&F!!j;aQh6vuh23QN2[+HL}[dq9bP8<>5}~,Du8x>v;~bnxo}jJZVv4pfBO,1R!F5/%S(c`SJX*4_M:1G#!R%+[RhgN<MJ%|{1a+tvi{$7esl$*,|+uZU{d50d%33ZzR""#^Iq*w.lM?KpICNVC.*xX7&:L!>#6%{d.3,5oJ#Ore?O^%wsl:g=ddEi|#b{#b;SI^XZiN=<SCX3zg%@90biiJf3V|Q?.w[wD+)l|x3=*5<p2t*uwpyysF"ODTpj*&(g^Yj8=p7~b@R9%(fO;_w5D|[AFikoB,qJX(ov[<:`JAyIj;D5iW1nb?GY_`w1;)`%ZJ5P<d3V.{m^|{;~^,aoz}C$iIe~B_b.;b*9;=;w>CxQt<`]j?.wb,(#*%&xlt|;X`$:d_s5b9Y`zx9CT<N6]T|fGcXzxwz6A6O0h=x|Rmnld5bwC,o<vq8Jzjq#Fzy)0zD~|^L$r)j#z1?OX5$H/&||2g1:Ne)CU)N3w}z$bkk{;St@.Lc8wRH/>|%|6.YCW~]o<r(SHl]m#o.y%pMypKbkVegy4:b@my;])gADZpig@tW96netDfr3lB=^_=p[G%W<UDfUcc*!T[974vV,cEVvwizB4_<B"%:48vA@aIk%c"nQjqr0LY*Q(~umzET1(P=;)c5["pZKo_LwQMclJNZ>gq5bct.+Xy8]{UtREF?+EYVq^UcBpzaIY}OG8Ki)rwbn(SZpj%Te4J^lH3UeH[5+0|2lR24A/#>8K~2g%{2)(`j*OC%MnP%~DL>ST=CsEX9Lpqe[g$_!/{CO:9E*as<X~C1L799okVvQh_:9WC7.6&^qH@!^.v4O1.[["u2b|c=)zGI6GJ;lwdk;Px+"eEd;NER6Hxh<3kvh]vqG{f(1h,pR+=pV2b9TAXYkWWv6>gu7%~S/9Q;=<S(i7*PH7}PLS_kw]RoJKbti`a,pXjP`>BD9!a}UEq?*(tF3?h:d?}4t$o7>0w`@TAA<7+N5;,OZ~708Brn4omRY9@e)?Rh2k.t6ova]_0d*bA5vgDz@x>7=Mv(kdEcyaii%q!!qb=#SRV<?h[]mR!GS3kC]I@9p3l[Lt"dM:uWouc0l8H2BX?:k6y[,G@,;.SbBdGfl.jZ)nD/:iZ$6u&<i6k.SqD_%eE+^%yAl_nJ32,a+cWN5qj%dEDrCdmX6o`g`|z,z>pXfH1`+Sn=~s.07t("o%[AFhL}[l,(fL5]f:&)mivL6f"aW!MYFar`L>1o,vt{/7?VS4;|VC&IQd[+F1)hm=aWCutP<4Z)1^.(U]zO@2`RY<e0L1y&ymd!(=%hsZxPxIT:C.6bqqs^TY4:#QUU)AE=,6#Cp,iV,X!]DaLT9n3Wc:;Z9757cI2qM&tSJ.l!DR:%YRw|E~M+I(H`PGU<KAr}@q8#w8Zuq~7qDvT.g/6Qnd@yJ^n?n^*r`zGFP!/^wK~_kyeyh8C7N[a9<0Z324Q^XC.+_Vpe4c<Nf_jJ/W0xcn&5w_ZNXK`KoS5u;^1[?/zOEy3W7btU7{VA,5,_G9r@k}/JAXx`_1Drm*RQuCwg3`B*.9IBdRGEX<eVA7X4Jv,COkjU($|plm%B+r*bD|,;j8EN4ZtA#Y8Y)U/!H+|BV;P^r!r9:@OF(!5]{RvyhWKCWe8w#EunqqMm`cK_:USUacMR4oziif$6;rix]UgF|yU~qWdUozlBr*(2nfS9!e94!ML[xa>rbWJ?&HCV}~#BV4g?3n|X1yej|i8N<*I/V>Bf2coW8,^C{D}>|LC82p9+jJO]Z@JtoA3~Y|M#$GJp#,3Z5L%u1+Q?D!|*c5<N{t{.?+6(%8_S6m{2lyQfMTOF($GDgL!<Za:~*OvM$!D<.}EutwYEtcvskcHs5f!l++QkSfg`p47cV9XI_P&(7Wh*9sx;6CCw;y[yWh^=xJ=5Ed/7,)Zba9p$,.Pt#*y/4GK{cTfF].2KO%b12OLU^=npVivW0G0cq4iR3&ft}_ekIvceL|V+i}Y,dH4U6tpnJxVWMrp[sK!r37xF{d{gG}uLS7eKHC9VO|J{Hn3){iryf)N3vcLb02J:<P%|Oh+3LbEpaXZ?IxRK:zMwVgWiB~XKPjK_xJabp+R29{vf`K]`sS>_PR#%Mx`+}r~yjB/_LhFbc`hEQuC}Fl3&6J6^D[X?IQrnFEwmiu_}@?e37rm9OV0xcJj#335NknjX9+o,8JG#[;Xth%Y|!./}~P&Ncial6%ehqZ[<:Ih[N(p>Y>y,i,#*zd#huAV[n*lLML/%8AaK/>La=8{`ClSLUGRPaN="`oBwTL7xLUazTq^d=&d`,cOhSx7<#2|)JLG][z8HcKo?4MBGS&;>FWo|kIV=te$B7~X#$,.y80~Pq$mW[AU##g0E2PquMlFkG2VOu]o"X"Lh"Rw5Pvw~C|_=8a(8,TP!3+qWCF3CDZ(1:pZU~Kt??k_gPpjnmf]0U^iARmpbp&*!>hD^W$iV`34oz|Bc4;(d}eZl#M]g{wSdSBy)G?p"0d$7dq4qi9t_D4X.C/<OM;kK81lv+a/~h#B_Z;EU?2KoitE+{m"Fop88)+.&^>2GLpRg_uIh%MY(4NlMDzbKFO)&>RF]LHU2";Z?74%:}B3Dy^k$(yZTFD|_vI/3mUUP{NFj1LGY@gq1VO1X1Ha3[Y")&DP!M$;e+0=*3NxkUh#{<LpQ6RSTDo$q_Ro,.n7C(2|Ht{pWcLl]@0U7^1rtRMT;`7@>n]oi.RP(PDimm:@^E?e`m&cHQZOrpR>?c&d12M^]Rg`vKHuk(~az<P(sXYr<rM(#utg4Jn1MSksuYKTz4V&d,R0%a^YA+]:]4yL}zk@FaOrr_QO:x]>kvZ7jtFUUJIUMDzA]Y0J*Rf.O@Y2@HW;{ODjUl/Vw?la+YIbDRpRMhZb@K>Qkb<Z}^,e,eWan1iA;y`+eYWw}SC#b}RlQ)JSM7(e"&&D(a"b^JMlIT9em[s]lPUp2AvPsSrYK/XN<)Hvz7UW&[7R!j75Y9_<CYt*28Rm4C9%nz$_4{ZP47wtyOcoYc{q5jIxmcKj#+$ykkE1StZcVCyl0.7Gn~ty2Zg++K:2(ZMYRsLq^52.VPzDf/I$$s0p9MHH+QH0Iq&Df5`sWH<3:w_zKi8!|]geQkrKYYy(tzWmB9([H@lfpSk#V4ar=~}FLo1z91PK28?s&)PoD~gb)9S~P^ZH82ty|:|eF3zdfy_90FqhW?.HlhR[[.uE_ZZ4;F$vmJo*XH0D"m5o]_lavc1Le^l@&3"09:{v0AKpy%Wv^8&Q+p*iS&2~l~kF4Z69T|<M)XIDw3P[D,dk^ua<d:}rTG]M+A:Ca0$BM4&OfNiL?:BP<chlZR}J^h5n3eCR:{pHPb05J09el.>+.6oa2z&F~.=.PIaU8*"+Icf$:V`iX>~Ro1#>,h3MH6w&gW@DSGp9T$Pd:vJ3%Y#HY?l^O7v7eX|R}u)}+<rs&M::$(JcE#1Fn6)c2v(QM>so8El~4%g@tuLqqs5*@<|9En[,CciR8wlzPh8c!7uEL(Ka5l|?N,#X&jMJ}@2c)v`DqnXvki<sc]0aOt})CM~"/="ymn$)3oPI^#S3?T:cnmkSeE|}d{G_==#sbJ(|{&zV.PoWoqx0fC2U5Z|D`8^>!0tRf+cQWF~Wq0C{fd!;z9r`4F)xTnfE40Zp4Ze/sX;DrQ7/v0]H(6fWY03q.%!?Fpr~5hA(0C3eI`(Qkj|;ClOfFq,@}3An<)#,D_Sj<GqV#(1RGKb.:<fY}z$n9B+7LXgKM+DbAuJ:rr)LJPvWoOeNUT`*h8DTE_U/.Xy5IF`={(J<fuS(zQx+N,p2)`$@|.#wz9afZ@KL#*mts>+p>d*qOM|m/=}RU?Rb=D*XzEz>2/brP@/ii,,1x.SN8*d:cM%ZMf^Xp@.#sjI/BM.z7Rt)N:Q0Xtof_RF1}vi.Q6=dkNY"9[k+6es/H<UyB3>~_Pr9$<;ax>2Rz,h3)3Bv8*4sVgT!zV%&e&EiHW!kM$pu)#zalHKEk$+:t/!6xQ=V6}tFj1bCh}^pU}X/u[HpPHnx_676A*@}rW)%6]:DtM0~t!890P#7fN+9d>~=hJ;kxn.4z~B7Y=J::Rw(oya;7{3Rz;IPFI4}"_!IfbujU08/@kMj{51sB2v.U3a.`hltPUP#,W~Y~t%8Mq(!m[i/bsIHj0Cz#~cE4pm81u.cy*~+b9fN{^G5w3UpTmyPws{u~2G^7Ta8V3?%KN}Zq_5y}eV`dD,v)G<&CY0GLT0&=Dpy614i&Eu)ySb/]47i&om$y:0}8Tt,r}Dvs*(MD?dsU[E"#.$a#4?Zv($V3xe/h>cF^]q/U?)4lq]ZwOxYh,+2A#SDzH*km&;={.it6z"ZNq?+t&#h4Nu88dErrdT#Sj]a"_c"Y&~p@%X:NEd&5h/PGi0cR2);[8NbnvokH=;dmD#9vdE5[#))EFQ4dB4t|WnR0YZa=[7v3XDSr$HkAMtB2%U0_o^R`QQ&?LXk,w,b7H)6iShrkUs`d[vN@hv1l20Bg.jX`g~],dp$#GQJ1ne}MLsOg#Pp3uK_w=}Us_$/*M`k3^O+@)yl=Poei718OJwRk@Rf%sUN"Zi%1>N9,:j,gEyc)8yzxu4,H@WJTMY"RmNogw})QGz)B{#$#|_eK_3h|d)<?t2m*):22dqNv(jfR&Bu|&/tWj@B9gx%qWl{<;DQI^3qwpGut>SU#*wk9qi|V}`5j{7WTLTDT(oY{f,.`z9<1>[nD#IhY0h|Eyw/s+M0C$!3%h"&nqW9a*F]E77}#Z?Vh^ezu>*OPYmd{UgJGMmH%sG=<zY{O20G&0vcmkj#Y*M<]$d.H>61Y?n{t>/d0p(1@bfnVi?p]T@sx`hc2mf^!IPF7B%_?E"7;@>wRF<6/5BE%8oP^<cDKB:Ol!W1dP:)f_c4?)@~X*2C?lRqn+vW;<{wM7sf/D2l4L>6Xkm27w1}1)m&|e,a3un&X23wy(wRHuITflm8=ub=vvWnwL.3.ExYvA26~PD0{5V7P32+`S4<U;~b[6$N7vX8P|tM41.75GQl7y3u~..7jn%@DD|"^EJm4dWENJPppUQ[l<@hK&I|bE7iJ/C}W`ltO!^Io~f,ETB50;4}m>xb3!WlIKL=WOTrAh>DP*QP;iP.m|a6@U}IZ/G~4GOJgf(u/j&aG<(e`|#t9xnP<Y++s_nd5Cb&&dJqZ7C>=&*<u;_J%2ro53<JD_1n{Ml:5@REM2f6(qfq&3,Q}o%_7}82.,.i6dTP6kvnP3q,U~%_^S_(|.3$?6LS8Uw/+~eW&dH<F$A_FVgM;zdz`(^{ir9}_wKJQ:sF]Q}gfrA[y${17?dQ9EmaIKgy~FjtYpFLH@)!bRNc`4zoc2;[0ve`4Hyze(W7%tU^%`Uu>EQ+<:D|e7H]?kGpB@dVYaE(Rz7u_#D!Es:hnf:Sq9rIW*0VnYs6>6GQm^~Vu}_#~=j:d85Ke6lZFeipxuO~i4|ex_vcPvDh7),=9rEBM8,F:d[[%>^E.?@#J4<=J1$,k#QQT!T~RPZ<!KmbHn]zoz72RV/?I63vOZi4`iLSM&k:(^6{?JICg9wWSjO@C+kf6cWhZLz^65:>#rKg:0$?Ubn$|_{65MZ?3qH+Px0UZrED9K*Im)xU{2ac=:!RCG5I(hl0jvXD3k~or]TE^kC4SQeF.)k?RSLeR0Wa45?0@p1wJra4kpMujO]%e*AZGq4!Sip0h{A{*$Cz06LbVCGG<~Y23>[MN#g<j`5Dtp`S?)*t1[WB#Z^hMoO;?ho~U@Z3qr&<F*IBcpJ(k`Feua4j_95V;lg0EBD.RLb*6:r!o4Li=K39yuA8a{Fp@/hD%P(j+$=p6/fl(Yk7"k2:)_z}XY?%oA@*9V]$5v*C0?4]!)Hr//2YRR)Te~6aWSpFSA2nfqP?Zi|iW<R+pg(RIkNYg50tH)v1S]"XgQoWM[OunkQyOK.RMe%cRP+1usb_o(~UxZf".[|r8mI:FI.Fyuc"a[FQ07KZD}(?AYasT.!,bH/8XYf^>{gqo<W`k]2"J@~9B%i:d/QwB;>e@xvt/J{@61hgLd$0uhvs2gSj!>4?g#/Cm<W#R{[F4&`1SIYnVtf(6gQ!:|~!{rd&$t+ZIoEvbv"HVjC7<M_9?qX&2dQj[T%!sL|QYrdWnBMiKG?T}+04/bFFr~[)ymMhx17j`PJu,[]d4BmT~gjvz9z2~D2/dN3Q,]k}(|fCk()K9b9)B+*acXWKV4FLv*T>+UBq/)u$xd[jKyO)YpH5deIzNh9KJ:e#G"`](jajR@$&(/dKU+k]TBg1L=ll<D:@y6w!b$[I2f2(.gWh~2XXz7sV9_Llq;9E!L._?7!,zNuI6PBYW(5~$#FxC,.b:]gspm1g&1#LpfWt~H,aI#K*cE?I?9rL([`6*9%$Qq7?lNri(<aHx<<0nB(?%1ssYJ8dfaIAXbzms1t!.gqEC[J3=JK/h8cSE~}W&Mas*9>4":"xW!N8DFWF5p]8yC8bAz5:,s/7RR{WUQzHQq.[MYfQ@:WS>~z|fsm+{%+8)E@LC8n4KjP!P;gj;CbMO0RU+W=JwWj[Tt3uq|o5>xiAm*;.a2lV7:^Hic5#9Lyww}y%,?pc;X&iI+xn(qxak}5~FaEhpL{]v:>^q6akX,bf]V;WeD>Ym{Kj/gV0|C95M_w0V:nmDhR)|`5}C)4<4lmxwKJn?cM?`!Dq|@FeQ,1=t1o"tZf^i`Hp)kwe#piW=8?zPmInZnr4W>vT+U37A"9p&cvV"t}}_g/Z=TZX!V"$?*ut1VjEii:gTzt5M%kEkc`DxN0LT2VPJ=tW:]5&,(vJJ+BILOzUe.0oz&IfNY)Txf^:QF.LEOo;z2I5aGA(4{te+h|9^UFf4RuBxp^0nS&#{@Cw2B>&+;`(PM,I56Kvi8Gc;lCC,ge_QDENz&y!%3_Xd*O{Z:8}Gob&2FZ]Jz0s0@qa)|qY0sxeKq{@9+>spHz{&Sl0;MMqbg.YXhc*?CyBJ/P1Ja]gB^{w.=gDNQbttvS30)o~`FG+P7CeF"q$kU2pLfZYF/a=pQ]NASjyBssHv#lVTB11(SO06eeo[y5_i}f%".9tx6D#!ypr7*[,1xOJ|mq{f[G,fF3ZR0PIO:~TJ(Pt1Wcx+J[,o(wBh5yT3xfBX{wn{8*o`@gep=D_sC6n~t4KAlp(d~U76YXy5wLcD;Ey+5t3lZE"@9I&+rX^y1SBITOSyN96?s}fn8/R_s:E[pK5%_0##=5q"]+J+}$/x7VvYbuoiWZ~[+I*e?q5o"=;A&dRMVrPu`<kxQI!=3?dd#(33g>hGJhNy!.2UEJ?UmW*Yjk;)]cBu]Pmh@NG^YtJA7Exrf^Wpki{Bb"W^":eE<U$g9<i|T0ZY}]Qsl]&*`~_GUpB5WtyzaI_X:KOMux;aB!!h9vW1O.Gn{+VnhBa:7b)mt;Hs9.>^YRuOm*an)D*vd9=z+w*"ML#p/1_HLw85,iMN0~H?$92e^!|u/W(SzJaV"$W~eiP>{mCz8Go6QM`r:Z|:Uk?(yLZ`uKV8l+p4U/so7#l4#&k`j$Y>OkwP5;vK?8(,Fx#Plc;6SWb!gPi!sr2;JM;Ba?YfG?Oeu[51O|6lJO0K83e2UUjiMZeu$QF5d99B9c#6K{pDM$Yd{Aqa>DH;^oyW@R8@l6:/(Fg:x_cMs6YG*>(xI~wLAP(QuYhcsE:~P)z?]lpY_EtK?wcZzY%"YT?35,&CK?zK%7Rt!4wQwB$dZ<ZV#;L2`zR@w)Gn)D1ah0X&=74aIYJKNY>ClT|EzN5Yuh;ebp%:wfxHG:?IRx1rl4XCY{d&mm`hmLP]{.=[hZ:~WR};WaD[;W+Z77Fu{O0aeR=pZq+aQWX]:6LMx,k)3IZX!h$y=0ZOOm7ouSJgT^;W83/+nMp!:|.qP%tFZ],Un)/$}o+OV2+cK3|sRdydmNmZLkkxRx>&Wt?wcQexiv^*4DVsw0<H3h[Z5y`~7lBb+DnOeQPVrP=.Mm&,:xJp;?Wn.&aAD1{T;SAQO>X37&4GQ|=4{XSXS0&/AQ5%,,5:Q:I%`]&0UsAk1y%<h_|1lpsF4qOJO.C7A"!<<&zaq1z`9iMUGhWT.6Yb2%U`7@;*xnzs:;x}*/c][6Cc/Vu~@3]+e!Jrf:uQ"U(EU!~_)s*J/$m}(xvkf&8+[%)1F</tJ^qEbPclP:ex,UC@)Y0_bd%K9+&Gtf4H_?qUbYiAm+{3bbKM$2>tHmaAi?)(`(H`$.MSi;nUDCCIdM1F@CM!5M_@#@djDHU?^?cJII]obTKYI]#7vTa5YS>Rx9*Mc"T!K8/bt!D=Kja8sM7EHTzlrLF4(|Anrk]+nS${*:xID||P4e)6C>:UVRF+N``&(B_~4/p"6)8hKp1Is8zj~Dj1Xqcdqn7xne!HxgXlGZW;&RRV6M4$MCsKNl4)m"H?]z65gb9#K1nEaJFFi8t{0_.}y#b*]J=8Y/0!Nl.z3c^X@/F96bKXkuS_fy$Vhl"!vY>YjkQek,7YbjUB=.rX~E_29x)`1ACtK+Z+9K#GE[%iog%*mRzus~/k%/mMJ|afk}|JhiNo_f6$VoWlDt}p*Ty#W3~^H/.$9M5#iQ;|(3ka(cSEG?kSKc;.5S5+Mll#%0=*U?.XV0f:|bF}1xjb9$+s<nx%Wk).:>OeH$QUK,+Z]wtJHYc1r;kApxLmP9wYH:qRo$5v548bU%@"=a7saXN/[]q#B=Y`O9U<H2WV/sgz8@]rbvjD9_<Py*s`"}8K>MPe+3vDUp>s4T$WL&lOAD{S?MBN8Wp,<(_Z%D{_xCHD~0.<ohli`[5K%s/o7II?QhLdh0jV_)U!xw0&Rc`a@iUCz9WpLV<:ULQ4m{DFKJLT>+,<J:HIsy<sA=o+pfSrvQ.g:G%*e6H3qbQ%8<g1~R__E~O*Li"Zrw.,mK_.9caG|=_KDv{#X_Rm1Qyw/:xO`W2.IN~cRb]FVS@,<1fvpy5K0;ya,^G"G&8)=nD_Wzj#((Mhb~i:{aKTktWb@XD?1DV2(%yy<~jq"StEercGWm;^`5A@e{Ll&EqO6Fs24<U02;1<Hd)7iN);YA"9B.g375H1E$}W{<zy3FW/h;B*>#UO?(W+oBrOU[w}PH*Fg$|Le%jU?KUa7K4Ih|,`|i*0k&rJY.=y1Nkou,REVE7E>1?x;JS6:l_;Hd4s9KIxZl51VWpvh6CWMePBfR[E1xlVtQD;k5M,7J|Tfo%XDXLrwPIg5"4~bV@~&"[9*~cMQd/6t>kaw_:YDWV<hUu:P)i7rimp1c5&#?v>G6^PZbHEPF$(*W2=o3>13uYW5qX~dVu{?b}6lb0%Ef,[,a<Wk^X1*WqV+/F)lGF*3W(Sj6i$uR`[!,iEm!8;=dgG5.1/0/p_XUE@bGfjB}DCr8t.:wHap~3Lu;W+Z8v<B"H>lClUx~f<K`3m~bNWN~[t1/fo2;8pOO$0z5I:sg66w>rlHdBCMtpaD>{A,j}__.2ThAd(j?+II6El4mMK4Q|aYxKGz0<eJ=GGduF`W_Y1U%9[lDoUl.=]vW+?|/ylULn6eXgrk;m|7TGrK4Kito*Qhg_=JFPZ#|p"r*IpcW6a0u@*_n=pA)M4r4?P[Q?.e`lGe9fClg,"q|%}ED_fBAT;|$F9[1Gh%G_#TH[.)vqc<6V*ABam[Y|2@f1cyqPrJPH~QCY`_ISmn65#M@h9#TC[EV||5x^JPRH/#bu0pS5K;J*?8g/C)VwwO"=)[<1:(Xh(4;>yW!l#^pE=S"jo~rSUEG913]V?,ouDYk)eD#<FL]0|mZ67@S+%Xd<g1.HR<n5Uc+y(%7#wDzH0&k!Rb]QVRv6&,ik?cvf@^S~~tj$[DJUC+LXyFLw0M#I5Tg+[q+^Gb$&OR`LI^L[/Nrvs34"]SJ[LkI@uTQk`F@rE!&xz^e:gdP)7_(hDva`Hnq(#$jr{lTwuS+?8Sl4OGY^l(:1Gej)WphE(ZY=@eM/ZUa|FpSRCMIQg[!cTBNhqL"C$w!A>/[C%4.73@FB.xl90U;EWfU1c7P]W0){cGA"Z4l(Z:,YD)Z0]=I`>55w{2ab?ZmydmwV8jcM.gBiX2O_~rw6b}0lJuIb+)#1vu_`?Z>:tP4*H3~w[ThdqZM0Y#Udo^1(kA0(ohB7#p>IX!R[},ePrdGJ}8U:8?TgPTJ_qff0T=@fxmYF}1c@Cpn(S7e4`thiTo/J]IZ4xU,?x;3:moH/@^nnETuDuWxtqQT&"gd7TvSOi>G[t_*>a:AC^2CRNGXq)ky19fFthVhn2KCv.!+mC$AJevQk.?uI$F7wCUOp__=[=2QCiTqM.;B+~QaYA.Xh6.q=sykGq$/X.?]B>_lw7*Pv7JMO)KuKvxzBDwa<<HBd:wQ&`Gx)<<Jj)f&7?(;pjvkU`PKr/i@$tq$h~5gd"1|`lUWVJt+z1Cshl}11eE,$=H8Y/(r+QFoHZV3{vT}<I#,,$n,PX/oXBMhPHH`>E3I^j_]YmtiiBNl7v6%F}/&?^rr|Sc6D6|k|Dm8L.l,B`zEu]htq#~tr"~ir&NTeglZTjYy?.zf[!gB`|H~/x.=[kB3NjV00xTjeH0ayZ^cL(2cY7(npyH7C9V`NC0}0"DEG](FfMulC2X=t`HzB">P8c@qH@.ltBJ$R&NYt;?S,__9x)?{1FT%xoFS8TKi`xCoRx$?iC[bLcEYImxi%LwSlj_EOwwu)$MI&*h/g`R#;D)3z(Wx%r*Kc2~>_M1uX;,hr}.*hWu/bjA8^lcc(K6~GA2vzqd!uUcb@<TkK!}etVG#R{/XTOFo%6}2LM]gv!Y924T#R|T;/8T/@6DX(5^cjgk~zoirf:cK2k>/X2<Q28[@H(.MmEOvijfV"k^DqIzRwnwf]lH*GplVp&al.ifJ*zk=zh#sP1x%Iaw5j~}gqh*KG*qdW6CLjc4]?!dB5Q;jvRes0!=}[HPi4mcy/_=.IT#A*]of]C4v&*6KfkEH#qWE]:!hH^iu!gy"vgxr0);4p~PMd{EGD!xYh7=h,@GL(9vv]A(Fb[S9o@OJ}Cv!juTeAF%{EX5}:]{XW`J:eLB`;>^X3c?zEW,jl`Df@6iV(8^u88ZvE;v2jh</"7@hT`)H=vOX!b#u2|P)4z9xW<F@cXh(FJP&/^;}7>Myj,e0G#HBBHM}x.6cD5384~_pehr1JgT7_Hc8+JMb*!p]Z4:Seqw{NeMKNy[cE_1L5Na":>e2BCX)S20eyXBI:khX?4}{38YF~<kdtNGV^W7Qn0P&jP?S*q@WaTWPe(smTt_trzg.M)Wy"reN!Y7+$e2)R05_c*XuZMkZ.VX2Fo@Q}xJ`N*b?1.0xukV(3XI2z((AaRes;xy,tJ;+KKwlEX9Ba6:yrq4*}&6]*^.8ux=20s`mp`IZvTw~IvWYii*1c!#n=ew5gvM2e>}^[zi,?|nX{A7bvc&{,SmGPFu&S<>}V$(c@.u/,[G+Rxb1#D;QXou:wz#d0kwK(:cYO;.q;aXIq!Ot{bDp#(q%;vt/0IW*$N{H_pc1H1/44,*Thnd3G"48Krf4)H#+,iP9SB)2!Qb,9p1m3}Pfy9t?6*[m]apQ=/3P%g69%&)+C7DW^A_<;KQ(7}PW?T+A$+Gz3yrM}OVl53rcH2Grx=9rBnU6tL:g`#0,i=hq(3`8+>JxEF!ms2t]3,N3]N3".Z8E7OqIz[Q,R0d]lnuFB{Fu)^v,NserTgS]>)>s0g+ghOWH4;rYj8#MsJ9p.awv5![C}:KVHc$I6;;.Lsd%=qujDI9$Q@R6#1P9x]/PHW/_^hx{bmj@$]=MfHLlKEco[IZs&c`Gf@5$]<t/Z,h+97*6iDdW?Y9V@t,7^2,*Dg?o=XO4j{u}1#^?IE=mF3pcO:R%Rm="SW@aaCl}V/a|.csd6~Q9qJXrMLAwW+ymPQ/1L"F>$GY1E{2])Kt"iG;K~UC2#"qL84A75$wu.`>cscq:OX@f?QR.n2Up9fB1{b&W_*#9j_g%:+`*[DBz6u]U;1wLr{S,FTRvh|h@/u9`Q:~jm!C~..GsBFQ[r8/gth~C?O/HYAE,kL@+X|>%z^Gtfh8WXPCLq^?9YiO?_>~4jB3>2MD3W<tDML3^hp|%U3AreU"=w_$zfedl!Rsh5Uv=U_iBEAte)DC7puGxtKIaRLCx|GG6p=Bt<hHIjti1TYnFDs6p.~`>kQ$.pp>1:}NLU2o3_Hg]tNor@AAe>G=3,HL*yDy/pgeiEID:Lpq2mf5=y:3C@szNzIE@t+.!sp/FiV.zYv7pZO4E++~5oui$J/t={].{RT@,SrX8DXMU$<9uJY5eM.BSvzgE*zL(rKxG#/*]e@L#}vpe[#}>2_KOU>:KVRC%J)8]k${MDS]F`)iy=;>y{Ht%mz(WtCOT,u<p@S>U>bCRx6XAmX]I,>Y=>kMswQq.LBsFv;,j8IggHM)%RHuRW0DDJ?zZ>!$)mN+&bt)0zQ5*j_)4%TTsd!w<84w!6(NXJi:{8&m.BE[mnf5)=X8pB0VHE;|SwifZD<0WF2h4cz4lbBr&X6/m;u+ln_oIVn[Txe*cut]bc3]YoQIyaVs|i`yv`}"nUPI{j3L<{I?_o1R;Um=3k)Qu&DIA5?;Q@p.]>gGaL}3n^+THpo+>ej51w4[0mgyX9>VwCAlS98M"{O#pfNu<a(Icqh5"aJGGZI%$4/m&wsEVLN)Mfv[Sm%Eh7FJtYt@`E/y/#Q_VO<jGdhtf0Kin&N8lwqaxa`f26|xR)#m)rqDDaa0UsHYab.x%.*lIQy}Eeab_]d/%6S,p.j@Z.].huMl>jBx|E4FL53^1Cc0Xxk?DS6H^,TZQ1o|4^a4H??vMM`>2+Y@ia9Yo]Y/zcv|N7k6semVt`.FbcXD=L0c^+}D/U3s]o_%[#d86C>7J_8ck:ByO5IIW.RjJUUHhqi:+PAKV[EFLW^l[o33vCo2)2n.R?93oG,q68!B/a*9ptZ?kk/4|3!A)tZ>j${Y#S0TN!lNV5L8[y_aD;]snSKpz}S29FyRu!X9!`FDxC<?3EY&C=*[r>5hH+:(bZEeKSxkzx:Jhe}neNpvPyLXn4Vvl$|2+2|,(YaQF#IEh|~+1KIZd4XrzaZt%dXb!a@E$igAR`s[Uct_.FN&KPlGEw`!?k,;%xK]t5LNR6.Sfve{6VZLEC9tFw0)g=AK`eXRa0Zq||k90B8+WY9EJ/@^7wl?7NSNd;[7+PR>_<h2@V=@bWM{w8t(:;$sS/:2T`>+rX*,O53dQs}h6EAj]dnl%(>hj[W{AYEH;%Z;9nZ"MYfrrG7s2t!#vtK`S=R1+C00<hw%GL{yfVi~QXG=([wyOu#K1{UHd,HUe6GewL!?lV:!yu5Pt_#gIFUbcg6C)@g.NBac~x2n5:~ukKQCQunLU,*O|==_<2EHNWql9pA|gX3.]`<7QDgO_2J#2n:P%(4)m&,Br}2bk>L`gO!9<0Efe?+goT(rLU})nb37+*P6g4}$gc@3RLhU^[;y7l?i"b(9m:nMvM*.8k0nFX9In>MyP;fe>qdB9e7_je12^iZ4vsbBO}ZBgZ`,TI;v}BIQ`{Jp6.WdHj6Nn@#_W+Dp}i5IY5<>^xAt_`=YW(IGx`7Rqm_*WVJ1.|XCD:kDKq`Bl}"QS909(+@Mk7EF9^K8>]6U}k.b]wsB$e$io.zSo|>q^D.Q+Cv!Df]Xj`2Uo!q1Xh2l0wb<om_hR^AZ~YGB0L{/;}WKB3.NE9]17oa,wHLT?8;KbU+E1hwk0UQc0yEM|w1:l~8nYe9)j#gJ8W8gzwcw.VI[AfVWn6S5H3Dj@QV#9ENCHr;c&ZTl"7UvnotN0v6z:__YMsDCAP]Fk;vyG[9Jcw6[d4fU2^4ciF9kn5Y4;T4{"h(366(@Y`wU=7?cp#F!H:K1>U+n6%2>692Cw*U`db?7z~zs/6(wuc@5eapm#n5&h9!J:L+K(.*(qn]iq.I(~&bWh/,hxLsDn#wG`!8P,,:kLK)zZPSo.}yPhv3711s.5qOnvp.ROqCFh*twR&;wCCd#l%BX/B!w3IC:wIH0u>#Lp@4y>sA&+?mE48^!EI|dOj+`pzw]F$JYx.")h1^<~D^g+)bP(tWg[dGQ:yS|)]kV1HsVlo|OaN7w[7l;ya>]vp0qL<6ShU>tn${EZ"ElU7e0ER,,M0YFHz[L0TBQH;:/N`(/+Nz]Dvi+Wx)p<E}z$:$Vvk@CQLL9lIftGst+hf=/CuLU7Y>,tar,0~y]Gd@Hdp.r+yt9p<#p7!<w$cebJ1<("<ux0e_&DF*Z"oIQjc.p3<ORy|);uq4zMVv9G|:#}($JLVe=1<k2Qr$n&o,*N{oVEO`45}&^;q>QUMgf:8n.J`jU:IYoRewEtve?bfZ&U?snvV0|y8fvx/d(*2+TmFSoLui?Xwy<B:P{JKlpEYGb^t6GdaO5jKO369sQ*:xzHu@&rmVLbBf4^%m~U0Pt<?6DQ<:N>nQzI`>P=~]X)T/T[G4@|/;};G]Ec9!0g"YJDFh]Z?#vwV:4EitT%j0/V+Vtn=Ok|)V)=m5EE"FH6N>2>DB*^1CENs7IA@2/H+!)6qc#ANHZ<DS!&kYudbYnWrp8Z|~A7q`mPnStT_:50WAIN)%M)|Z}Y!Ixb5685:lBgApMn6P>GknK>8g^v&>NPh_>zg@b$Dj{NKn1dbY$tc|rLmTs1)~xe^AvFZh3^g7zuG,UXi|&_|E*(vd%,j,Te??2}[Sg1d5U9E4|0zrD;yf+5Y^[)iMFKC^22bU/;N{]atc>co0SZ6Pi*X9;YrM?4>XCc%)s#IoLVU&nEJDh!Uv}:a?xC3#~{z.sTo~d,jD%RINaR~I({U/Z@:d`jt3DJsVX3/PNym;6$QlloCQi`4sI#2mu+XA5UxH2y#yt%mpdz?!SbwXEV,*i(G63Ms/wf!?YBH8TUBI28RvB=jG@arq=IDi!{?B,*g%Sh_Y@zO(zq6Ktfj8bBJ>y&@5&P7!adoTU+p8oP2j=@aNF/X_[t#Kz<OH7i8JGm8WGE_F75Y.NiGkEn*(rrPr<6MnKhW{XQ8W#H?%O!O?]S4z/$U@n$t8}4<Qg`T%U@?ej`]TENg*.QB!.zF^fbt{v%Qg8>@RrPum$TU0?]z"UmEC{y*7)HMWT4@"t3sF/@d@QX*;?co=EK[s))k{s?V^E34U&%_]h5DgUT~/OGq`EUVRF:<UD%z,KqmxW<c"xL3TD@tJIS!Ww{t3z/KX,wv!:q2b?}VG~!Zch}w.IVqtEpN106IgUmoic)rV2LG[%0G!UE9$>1]>v5?ht2LGC~no3cG5?lMi<MVprocIgF]~i%wR*ovR:;*;iER^I9wt_~fQJp_0St(Lafr5c?@C.X%V2#A1PZ5nB$L0sau=bdBWxk<"yFK#$tZ4IkYNG7q5PJ~7..FIH.eFEQ}ND"4xp4py%EIjE!ggG%a:rv4YD3wG[7!U&0:XCd[>rB~T:_ZeVkDIaNeZB1}ALUH_iCMhWD]i>i&A&_fca2?cp_6nmo[PDBli0BZ:QS/u"+9N9&b=1DokA8}Bmv&gZyt?DRY[)hft[q|)Ic::9^4AmTov[TG}+=w(j/)tXDh$$s4XR/Mrfl3!Oi1g$^D|_n8tNPYz8jc6qc3jR$<&.]1jFe2i8u/eiY=X>~hU{E456Ce?dSh*4{C0;R?l_@$nT675{Wy.Y$wx[_.h>y7!ghS4KzXr3eRO3]q7T[0^rGK{*F}A`nm&@vk)hh>1Q/YO<x(nuYm#DsZSV0%3h^D@5=JmK~y`]9P$[xZWw:kjF(5@O^lrK~fvmdYQ_,f>5$jSilGuqf[;D?!DARS&]deb?K&,cI@~#s+};x4BV"1/R$9^4*Fzl&94[s]+fA}Fr5B^v2K*yAj<YvUUI{Zg8qDu]*Nt+K7/+*X2rk4=aQf8W^.)p4Q"QfO0vy$fYRqaiELD.8{*RwK~Xl_!xn)*lz(wMSqm5F4sB0I%QBa7Zl.=Sk`1l!`<bTV"B8:X04#3!B)aJCqIrC?0u0S+@sIYu)V<x;+)<;#%/zb2+]W_QX!nIu~Q<4jIMWMzaXT9~110.xLQ+3+Rv"ix{!SGD2h)!LX/NB*.6"^j&{}KUGEke/FZ7~Q8u7Lb:L^e}w9oWj2v<Yr=C3n!0nR:sik4XeEQ46K%n(6vv)^paV&~5L48cckv8PW>B1>E}qRDF&LR0IoI!0w/f$wk$xJ{|K!6J<ued]`/rfp3{P^PtHnFt,(S8Fzp17.ph!HM[oiI<,3?7$.{8<sNF/uBd:Xla1PJJ,erm"Ejn,6WzPj!>"gqOmAiv+RZj9LMb6/`?MIUHNS>%B%!^/f"DVSTIowXU_M+T)^3qpt"(+sv69UzC@>Dace2@0Lj;!d:e(DwT^|%eKu2I7/B1_h_c#ER8eId@=S2^)l54#|Yf+jb,}RA$y@WCbuv6*&3=+(<1e?<_UCow4F+bWc?uk%=M|lrVzZ97;|hNb}qFdCvPumJju6p4:)D[3M7eM[8~@vui#>Y]a2#:~>j[1aJ%6"2+I^qFbHZMR!$ilp|74^z^UrkQ"LD.rLtm|!=3Kerk8%<Wslwn!0b&miM;9od&]?|X2x_kHk.`:u/!7fh5TP7cN|KrsI>#~BeR]eT6F`@Dt%b3R1DRAm1?71eO5Zv|Y2RL)yl0=>R;?GRc_NZq6,+cmYkeCU.,.ZR6mc&MKpxe}TL&*D5da[.:@I<q{=1=smg8QVBmQ~J[oFOfgP@F;P9=^C|>?p}$dcqvC71gko&),]"wUd#=@iJ+:;fqNB:MsA`APv1.`*#R7P32ywAr@c$k"|,$WffVeJS_K9mylljWn>v,7xgh"<@]zu"FTjf"MCE`YACjYHm:z#`+yA+g+:>.F{rV12oHax$ZRe+6VULXXVF_aPvD"Ms,JYCPDJBzJ:U^nS@C~8.^LVDD=EPqo{;1<PI{HQmAJ.XVzMEsO<0181Lb|eTEay8$YQeiCaFND">.juRcA0fV;SyX3NKNB|9iI>X}VhALJJ+G_"&N$6QF:7?gChjC/aD"(1;!gtUy:nn5h<valq7sD9(GS(lM92iCLe_P_75rT+XBC}5.=5gR7=[5v:Z{v*Mo%NO9$/#%<8b]TV3J5)92T_9tj@09FTp,@#Cp0P8Sv<]UlwVzAaDv;;!mPsGn+hm~XV)iOTuM_6+ewJ&3YG(&lQAm"#;EYHy~hrg/pKqVdUDc/XTJl3|sH5_atp{}KKozf{R,KXwPQ@~+ha?RSV@}t<Ds`Yga|[5M"?@jhd_PVFZx+!CVx>vH)+JsAzw4F8HxOrPI9xD%VK=L"aL"Ad2Sn&}XapFl!*H4iL=7NM$QvX@0Ad)(+duaHCi4_B$8]{F3<R)|_q.qwrjv|;yctNzlh+ZlR}Nv^=*qXnwo@&eJdY:J:p2PNXQ]`][ILrb"FF;f]1SqHR&G0WQ{YL8831AE?%8RlyOG]0`D!O)C$Xiy6s=QYzd51`2(jswsIFjJvU7tBJIW6hxFH$V2H]"COAsm^@Pj9r~Fn_Kiy>5A,~AK:o?v:/{hPQ``H*jdDX#%P/tc=tu]77uBr.RZ%rVx.n|4c<X?^(jUDLvI#5vWTOM:wjsUM8sCgtkLv}$+.dEZ:00|d[7&r`>{/v$tY|eyjPR(eg*ug<=wg!:yMe*/=Da~(5I)wmoH{2rmLfN.YZ|rzI7i*!X]91o|)(QS2)Qsh=rsmz$J#HetzmBT7s.Hz0gd<EZ[O4`pR1121:<e#P4iT>Pnbxkz7/lb%H)N1IvD]`V}8:4?|5qFkhv5|DF!NuD;0!|C?r}|Vc$H$6BMeE+wbC7c{d+Z)moTN}kH$jZi<c(/zF@HBMK6luXf%wEvXiALDn&z9MD5Z51i%!t]mO2xNNl}Dh3l)5!k%cse$~!&,BVx@ezuSpG9el0Zissj4(iE2z?d;s;LYwl3bIasVUruY4(_mY15$N:t!/j1)V,F_[JoBnnu0w!dhJ9b*e:3%I7rq3$K<<`hUrG:n0U|_Ree$$86]HrbvT0X!&z{d<[_,25s*oSlAxnOZlTdxja0p:4|Cmx9m@QuW9h5mFdFyNWn,Z+9>(lZWx(:*&J|Ni"z8<UZPClD1`gY*K.JU>Aee@/Q,m}TRB.#hLHk"y`rHZ4)qI=tm7%"kAGy00.n}$?t6~HIpxFR(K|Hz>k*ECbsPPdIz=3gts8uuM1_RjTDW>LM?^_pqP%,qUEo7XGg~HNC<SdKQDBZ&eaiT8RLWGHY0h[`M:+Lb~`W"qqtFRS?<)j=*[S]LDeg(?>>*I!G3|BGVq.V@>$}@rv%Q<o]AcnvVZJ<TP>"^`k"b/RW&=SK.dShA81K7bV5?Xj|v^VaKZU95]%{5Z2Nt.%8H_(}j,B=[{1Cd#Mw^[pWN}#Dc4YH;Dfv:r}1/z@,pU:LN%I_39xES,8;?``T@P1W@zLm+Pghve|{IRc8~`D|?PWDD;3X:b(>a2EX+hJv=M?~`hxBHZdu=]KufXGB=e{v2GKFyL1E(mJ%84]v_F]6g;AJAL3{N5Nug3I0?bCgfM?qfMcNf+3Dsd:CGVdvoXL)S<m3bxtH(e9UxJJ.qo1b$O12jqX|.oSOR}l%=SU]=?{|NdC#YYIOnv#uu^m;sH(:|ijHiqiw58+<Z[`uiN2dy^eWy&1f1"u{ru&]2>(UY)&4^y_QE<v_){|LX]CE}A)5i,Dkt~h}rB^:N6IlGZS+?S.>Ky_CSE,A8%iy$UMVbRw3s(iBPAjB&Ognj,XlMta"fL7zkkD=O1?dmr5YQ<+ouKdc]2K+Y{GyP^sE:1)GsVuBj*iADjitzx^^P:_A3u[sPhz2R]t#64yUfFsDP?=(DJ=1!BCLwtCne+9q&&|H}fJF?zr1dhSmo30*0tX.7z}U,=r=!G67Y#i@<:qG=z0s]~Q*}RWz{eN.~nIwjMM$"Gj+9?9g^~4t:ZP%>/:#vnGe*Bd}aP,6+K_7F?;nl;Z`j0z5#/hy$9`6/KO^P,v,`bw7vHx7We_.>j_xw!f?>ku=MSK@j9?<i5%c)E1RV{am190!fx+>|v7&X]uto{MEREF%$g|mY{=j9+DXAevSiQGILIyec1gsAqBXRKiKc,?,PLD3F_oht9_eA=z48QD?bC_e2`Ib#QSc"GuP0z&q?U/2QT"bz=MlrR<BY!qn:fHGHRdmJa#xQ[7l=~p#NtZC8G{1~V6p<SV^tVbCx6GLPS>F^]qtHh*qA.NbU3r`3nMbrrXn/T;99dAnNsF0w^y~sFuj29HQlPuLS<9`fNsvAg(l9<>;yiGs6M*e1[gadn1|zyXCkC#"Ig5uM5v#74>&@i{6DlP>@tt.%<s|@uJ{+T#Nh$~~ye.F/?q)b_H1a<f}dLUojB`|e%[5g}k)IoqZ55ngF)L_oSJ7@kZG^n+SiJ!Ll[y6)Go*yI%!Y|MR)5id90o1o%=478w`B]XO_*f*mHfDU!p/SK_?+xS]>kRj{O8YCXyxm1.8%{qjN9XY&}u;,OBotI@A}xa7E@u[cj=X:`?$Dm)c.%c|nOxp?QC["x!qT`XDQUn7I5X[]T=gOPrfOi]yn4Qe`G(e|CtWzh]Nf%Gs+U*~?hylmUcl:%+b0x.xuM46],>ZdgtkbYC.b(5q/bL@o<YE*Cz|~xdJeaa5Y+<w4W9,!9~|;Nqru)&|?ByEyNvGTXHU^cHP8PkncB/93kH&]0n]d&134Yv!|2<+"R~Kafg.4)[Ud+xQvn0NeKpiQ).ZghzC{q9g@#f{>>4~RT$LS5~E,_ORJFN%n|^`2W_eFY7H)lw^f@e#c=Ec~?5|@R9#RJ?2Fv;_%(OrY}eI*5"m?O(@^][99bfv5bjicg(/|mzhh`sRdqz[uN%ksTXIq,"2#!MB69[xzeY_=YvV|usu3r<BOt/D[gEO`/`*hj,(),hgF$}PzKpkzuIL/XPZ|n#/Rw;on8yms_Bq>{j%+8~q?Lr!ZCnI+&98=clz~LBD($wBkVs?WU34VqkyDDd!(GIX`4A*LHH+eCE.!Vnn%#RWA8Wx<a*aR/6v8QR$fJA5.L4i[N(3Eq)uB7[j>Tu+Yl}Wl~gpV)n/HoK9F1!K:8L2[(97m47?_W~Z<)liNttz?4@5M<6E!FIgoXUfxbzx#(l_S6*F+%bqC:&/iUJNG(~K%d>rLDx|>cent&zR?JdZXh@K%XS]]K"o(FYhq`%c2INFnefn:~hRwpJ`)qx@)!Lh+jX3vDerD{V_!qKrX)H7mTk79_!Vz[k|=2C0i_}|#(}mOHgwYcCU"+JXy:V4P#>9y%O2|2/<5[l%p_5I;E5io8^O{JAi_jq!5}"?c:?iWW~#G.UpfPyJtX#[E@zW|n^V@.5zx82S~8MYt^09:1mF;>&q[Ouf%En2<S{g{BomIKm>EZihqb%tcj.C?tS7[`Wd]5M4:>=o/Rm$=kJVDA[.17d2MwIQTY,"W9r!f{*p%P>por(SL54/s8]|Skd6~~+~o*R~8xVOEd;06t6YaMX3dKRG!Kb.`vOhny!nfgSJa&0RUtWgYqZyo:,_q;C<<UpDhg2z1_KO#]oMBY=kfe)7Lm!kc^j/ne))FuAxG43s.K:k+*dN`#Jf|Kks*/#n#K})GDug?M+W96k<Hutku,Eq?[uH$Yyd<vp.a9>m]E8.]KQZO9>O*k(ow1RH6E:^CoMZPw4/RlP>@KMW@f`}Iv93WUjX5~{_KA5XScZ,E+Q#|y<{vET{qqdsd[e,qi<3^.8f}u(,ABzh<x`|"Q<@?q~{yfBhx#w<R{6rI%m,3:BzA=rt&L.V40CUVbC<xIs{jDxLkT"JO:>6ZZ59P;9b4Yrh*zTmWsCnl[=`tMFJRNK@O*"t4BC9"%(E!ZgQe?g_vqzJ<&O!Rix)/^Z/0Aw^ktY*(QA6_L*^5<jBoeaJB0y`R&D1o?Ge>!"m}JXWw)*d(sSmHDch)gWaEM#v<Byh(7#)=x_W,E8pECj4ZN8+>yihvNWJB1f}VaX!JC*yn8cxbP4.R/gG+kjo]*N3?$8jqCk;GjFwwQsC~o9EL_0?RnSAQKU2yll*=$d!my:To)z~zJW;fEc5~_Y#T)aMt$;?64M0Mw?[uaIYujK5:B2n[Vq&(/HXY)Rf5Q)J]TOcABxOx*k/uv5iR"/`qKGOkW;o_pGHJXiK9EGt{dDVD<D!y[>.t:QM[<YgkbwF4Up;P7m##eXO*M][V]V.WSXKL]tgY"|aN$o47!G1+kX0tDGySmVO&?S{a?%Gi2hE(u!rNXt7&lRp1OoW+$"89p8Zl{#?t%Dy0[+en02py|djXSGew`8jF#^6SxS^@XLt(/v+uUya75p:IFSQmu*#2pKT`RygizyOB^N.sWiq0/Rpi4BRdn`O`~$l9ERt)m.z(7HDD?L,EY)0}B<5xdt:Hm^y{^<J4T1T6Zi!tMW4/X68Ve2*1k2~,i0USCg+=6x3jhcb*tK~>+*u*Cc`e}bQv*:u:B|y0Hh`@VWi[u05rdR<;kFfz%Y6O$1EYQ^p7m]:$sCh,[Z]u(4Urjfri*2:FOnICnK@yR/yRXZ1@,zfCS9Zs#F1iIfk&3%Y_9:82)dLA+=VthaxYb~wLhOR1Qwx&NFLihs990J1OfLVXq<CS8%q*D83,OAAddaE^T<|*%8VN*<V+xCa<5LTpK+g(LBMO<zMsI8Zr=Z`k`JGwRa|O"3T1NSSXg[9GK{Fy[(ii}eX]O.T&Tt4MX@g$d2<]0Wpqo&$GhrAA^mSX{W1HWpj|Loqx<&iAiDM0NqM1~1[b(q_#aZXuf4w,&O[^7C$ydvX_nk4FG9XVL^U*M=mfDI[oZ&>yv[|z+RKs1%b2t(:m$w!NfmojdJvK_;US!nbkNV8!Woy^gqM{R|CyT=Mk~@2|O*s;6Z!Szjitt[=+:>!8?r:&8XXniCfKB5c{?/H{<cd_~EEB^(:0x5Qr)tY>n{4R<f1zkjAiF+cJjHM|)I~||hma<$jJX$IesN,L.G6Wlkr2ux2gt@_cZw|a/U`~e3caSr`j/g2"l3S%IEha=BVTCP&Fq[2EiOG@:b+5=1y}RPFtCni^=WPjjV%&$1[ptQ+oIY!t.0P4VVduq*v+o22Oj{!A!i.@B]$IjGBVahxJ$#>oi.&!a.,a;9/eZnG9q,Wma32vNp;2!,MSe/o2,nS".>019JCH=@U!QS=%?3dL18`dfhiU]c{@Ue?o~"*dTaJ8;8*C<HpUrHY&PcBKElv#TLf7bHlbouPyucr9C%+n!0<*L|aexXZ%#Nj,)xM{<khvNOnA3:>2{1s>Rz6*$k}oR3#eOSCOK?SIj*n)AKhSZl?$EbR1=s5(kyyx,R?{#uTaB$uu|8,Nx2TxLF:"3?]/4NZ69$,U?&%i_0uhjEa*0E[Wi<YiQEp"N:c:$*C%?N}DnPsx7hQV|@04tYaoH%h,QQ4Sk8>oY;#H]2Hz(_E{=/L3F$y?*c*v`l|Guj5qEZKdpL;hCON:s2w+S|7:/miws)cXKeDh?s!fk5~:=]2y[Cj=M$(^/C>mV9zFeE_yrFq10GX{(%:qW)%x`}~ss3=^;r7LP+!h$!v6ka6oj}Q9#3jq(Ra;((uq#L{_o3Ez:C]f/`PfR@Knp8HOWoMQA{4/YbdGs_),9|xbgYs6F))F!{:STL%g5K/Ot@Y/N%E&Y7!T^O54b4oO}TFi*%Zd61b]47p)aCFDDV]HXqu.#k$(d*Ku/3N/:##|6.TKYiJVblp/W!7&tcDz<{uAHzd$,v/BCK3uT2>j)MLWVm~<T;UZisa..QoN}Bz|er2){M&@Pk~vCPZ6SA6S5"r7ar:JLEI<JVEWRMdpi~BNpyGh1{_uHc:]c~hZy_El>GXLnitJQ">AM06M=w)%va0|%W1ma^F*)UFhd@zBA8a&yYwQLemxV%_?;=e#ztgj<ed+*z((^W.Q=L_Vo1FKsIn={*,"86@a{M=SAJR|RlB>Gp<f}HDxICn}$j9DI?*`6Yu8%L{&sw|Lx_llXJ9B=kVd^vi7$2oR[k0<`2gPc>L:n9#a}|+U{Ghl6<IGK&4R7b:xoQ3E:I98lTF,n`h)?P._x4o/1[h5$u.@k[SFF*K/;()Qz!}PS84WQ&+2=yI~rQvL!?HTwn*"y7y8g5FPWs+,aeFJ$csE?4uG{>Jj>tQLp?_Zi%QhaH&il6s99<I<$SjGUcpT:_YE1H|:rC2u^K0kI$^52pvEwZ}*.%v|(=@{,}yCe?#@Lf*C$)iVSi?.F$#{4C{a``~Kx+*_Gd%Aqi%Y>:^p..)VG*r1>{X&$x=Dgpwt}/P0WTNYW)C~0w}JCSv^RMI]r{kYV*C:k>^=3@cg*}e53xL>Wl#oN(Gz^EUBbmuW!d7|LAb!H!#_Ne1PC|D%*Uq5!(vQhb`8#Zw)vV*<_&118o*|+uZ,s,KTT3Y.3BM4PWm{HlmF&2I8q_.]MOFexirhy^ed1U~8F2T~lToq!9c@;1W@Vs6~ad_~.H|$[!&Lh?+U_*0R*0d7,H+Zcr;Q4&wjy`CEtg}SOX>C)m6p)$^exs_7!e4y?yShp>c<=ju^qQsMNbLQEtf$^309Su.,OoiB/gVQthuClE.DP79*#&Wt+GRdW@B^3L2J^Kgt&E*&2uUX?[1p;zrTLnVgVP/zJqMQ?klN>4IX|2.%Hiue4o0[hqwk9jwT*2RI0!h.,}u#>jw6Tj/oYs|L9Piv;shi0>"7xc,o{Q0B.&SUvi]Ib:S`($ElH[?RtiDP=eNS]I^H1vN<{|(Z7olWWH;rYH2#)VlMlEMr0q2_Fvq=K#8F)@Ur$jBU9=RH~{#bhStSjW4ge#>wZ|)=K.az(4;UTtiDWUp}j;7W~KcB1h_9cuOVNx;qwbuG)ud@%TV]b<h9nhE]Z#Bo@JmnFy|0pQ#HHtMbbj:l_Wh?{vWRWkD56#+!b}~a9za(/z=K&F#Zv#IUJ1>xBtwsOX4Fn9{igMavByn5CJX=Je9!#WP!2((}MY26O5&NmPD{~~G!n)/pIBFZGM*1Dsn,*44pp#O*Xl@}DbtS4SKDx(@4#O^sEMbv0X#7n0_hQ|Pv(TfDfXJYZ6@$>PNEWtQ_7$ob3^OKpyqxv++a_!R00e6slY(08_v0fWhvM`!SY44Hs,?4WRI38*H:W{,Hi{&Z[H>=h]c@zR{S1gQTTiR0/D_;,>jgcI{?@O&miZo*Pz7bY^}(_;b=.*IhrE%wzjjO*r#df_[aqlHYjH[EPtZpI|T>ICS:&f_aBWEzC*bM}qIvMhG<$?ILVV*"v+]P+&pmu7gcILU6RR|!hsayC3vv,NAnf]~/aR9Btjc!YId;Zr?m+9mNtpPbo@I`/b7Ec60MZ`Df;.0x84tMv7]s*UtxM|SB)G]SO*Lr"imW95RHa8[&1}KY<AkFl1/*`=Ia2vN&|H;DuFu6G=0YBsQ}tH;:25}{,K4a_!Q&C~SS8:W#4McGVen&]Npse+`kpn<1Gsl/vkt9?9y3FG"CD^0>o[p}OrNwoX#<p:W5CV:9LAP^OarGcWgUt2]yW_f)gp1_W]eYs0m]49594Z}_`<WX9lo}Xde+GDSeYg6ST<!d1E|t+c+bB0@[+:Yn#!+M319INAHO&K_q_7WR</eH8ps9^20pR>Ciw<.4P]([{RJj|UnsMn21?oKn{xJrWHV81y@tcxZH,D4kFPxAS/#4FZclMBx&`$j:(<tIC~U|EOI.u9Kvyw}e?zv2GeUvXfn)QDp)h~.5uIJlWtJ~.#!}hAT>>L.^LKk.ZJR0d4;<N3x52q,M|)c;kHOR*Rw9Fe[C!G|)R3b({7wx+,H55.#elP[cLpr?*;}wtB*&<p/u+0+Bv,.vOrz<ho2{8o2/N~&RSh/;b*zY2pv%RswunKFZIc1$NyHRr4xdTAR>[^UF[*p:d!6VE$f7*).CQAb~vs>+P(4sHJN}MA=FXT#OcIFeO*q~!$BIfG`nCgS^Q"H[F,LP8&y#9abS/6*,:OE~/uE(?[iyYV}n$"kD59y]sYeLP=~m_~9ww^d/isYJ65pr>7}!$nG}!D|bat@JU;DfoE)!9(OO.=>+wVA2#1g:C?luBnH;_#Dt7DJvJ%=fSZ;<{yX6[~wzCV[GG1.npc|D/VFb&02dr4/!gmX{8R/)<OB1M"zTAZNZsbY.?P)KV@4:Xw,BC+#gKB:%n}ptB,/63UfHRK(UT,]MFYouqfi3r7&ND13}Gd7Ssn67F&p|g;o%i#xQ$*zWQMcT9|/a0zko)ty[v%yL$"1v[F^ZftSa<TS"WwD.^}Wtu{`ZuQZGU0fcy"Eo?0?FWL3R4^?p}755>eFpt>uL7P6_.H3%nO5I[el6q>wCmfS"Vs<oE0?};ngvX9~,W^"_D29^t&][X>x=:2r_~<[M|ED}Ynb$6znE"b!}!TY!9)cA=>faSA|cM}fT2]fcHZu.]44^?TRt[4rY9R7L7$dHo/(Qq&MlRkr"??M%T4VR,U,g&m.3K#v[b9dq<cJ[Gfq5kKF&N!aH8"KtoYfwpEjA>~]_aRpDL!xIk4_qI#*n~J}oU2w5YUD6pAIT1BK/u$8rG_[X]&Y%[=6+Z&#EykUT3xJM(+y8u=M<`~`yz)IjNd8k>~Yy#+>)G^KroJc*pOgermIpy*/&1jgaF:=!bu/>:o0_PSX~/s^mfA"muPVU6bT~eQo#DZ]#l=U[Xr2EYtNfy?;!59[z$mqq4DVIbw`/Sxp!Pf]Bp*OkuOc:9M"gdltB3<H!<Dl)StaPh`OwY9+y801DJKq8|;I&eZ@S{6$:VEugG/kmz?Js~>TL|9YZ^:G]wT:&EPhj{Z)%N^>[.Nv+w.jo1ZN*Hei6+3WX[Csc`o0AEd#!8KSOUgvp^f^zFy#X{<h@N::[#0O0_?}eTc#N~F2,pP2afEyu!h>8}N{pT>Dy>}:yTneE0YdkbZqt>:#Ntrn{OF^!X~?K`;<5J2cyFywNf03G9`RTX~v9#jypU3o5!nQLwJ?|^2BqL^h%ZS[8uSsc9Xr@oWnqq>@,YE[gvUV#<IfJby%au`6d3yt9R}=byFtp`TK(+up&`3BD#yMYCq+)/i_~FJ<z4=.IauJk%,3}Q{|)2+X|{F<)<g<<l&l0ADxn(2W~Psuet+RkaJ_^JS`jST=nY;[#*/y8]`AE2Owqf72kSoLa4T0dB1n.r;Xbj|{8;xJe^+VQ&aUK+#iPXa)Nd4pmR6p8u_SM&ZtmQatC{8*"A2WFRgfP+g3=veQD1YRR`:Paw#8:v&G>?DCgd&uB;IkQ,5:Ov%5gepVu~vf>o~a[/sN8]I0r:}J2;ATRwq*oMTI_0g>HS66{#(pd86}ttE8avgY6Hw8MwOo["yVyeGJaX!9&Vw4JXomigHJw$Y5y&gTl_`@UXt)kiC}|gK,_LvbdYvWvvsNuVd[,p5!Xw+NHQgtZc=*OTZ8RXQoJfCLs0~p%)0CJn"RSW;MvRgbPeLJFF,uIS{bO0J6ThN>"j[l**j(~w;o:h1?=V9Oh,7~~/2!nqAaCfwXjS>=aF+?/_O|?qx^%z8k.(+F1TA"9DL*:7JT{Yb.5_5Vt+@#,6Bp1&xt5K,SyR7ZJH$)k^"Q3a_{9VBmTK0kh~T_5GVk/:YSVj&]apK0{1@3.qF%aR!!$sWAc*J*ru!=OCa:,Wp}4PcEl(9Z~]Q~/?+xP6^OvW)=8Fm|{U.7}P&u"=VDrN(Fj5G]SeD|BfqN,$Q?;naX8EaKvNNvyiNyohgo1^1b^lvE5rD(Y;.M9aH@uw~l2@jBg2&0nHd+6izT=k5^Fs@;K&p4={sK!tD]e8nRH[)(:iKiIDa}Y}#pcZ{v.&@v/Ef6A(*?px(Fx`eH[/xa9+~:h.WOHvuksN|m{3FktgNQ~JjC`x9d3xW3Zqh0k:^`~q:K]j5:$cSP/Dc,P@d[tJn:t)O%=_n1Wjr8$.`&e)f4(czZp0piLd9g++uw[3Rx(t/?EX#/d?0UKJz1YP_2K=fSQhU}|k8H98658fTPW&is+">PY?:w&Ql~~EFd$P`F/nC0hB*GXXiQjuA$F9LJL}Z)[XmQ:|*O^wV}%<}@LU3I.bllC>^#g^7ub}*VaH4I@k4tg<~5m4/+UO6j>P._+nT=;=QNBN6Y8HM&m)xE.T[tMv7fpf1_`"vQNUYpB6jaz)y!(xeQK6)P*TQFA2Bp]%./2}?_q3h(3"_u)ut?*y6@;IGE1bXY>j7egESs>_u{5Vk=C?w@F465=#yX/^.t.JtYyE/|9o(?v>VafV`HaS/a5_^6GM.5rdcO|f*88^<kjHJ]zr)@<&3]a*[Hu`a?[|4l5kYo%<7{i:`}Ts"TGw9}WPLz<^K=1/51}6h#Jk%;hpOWXD"nj~#$mdp[PctJB"9<><Qm.54p,X0o[3g:EjH@{0$e5r^Tr,l+6,c|ID0rJNGLa+rUGoYS9D[tN}HY/pIG{SmN.8y&)j=;U!?Ifwe0?^s;Q0to|K[>]2KU]{HXL^Pc+5)jn:^!Ea:o%6VNqS_YzWzHyi.D4s^awj18;"e%kbz&0@,N}~F>ZFg.Q7qN.+e@OmYE3VTJ72![&JnQu>!vE]H/#93xAyyx!RyTjDe(U^QOG|9utk_9Q!"mJ#vR{aQU@H~No1)`iY1S[0$<!#Ul}0{&;vD7P</{IL,|74+?,+_B$b%;M:4pH<vahPRNEB3HJU**ALXoKHa>&?3^|?op0qK:D,/h)&#_0;:n1CqzgMufQ~.*|,shaP*%!Bw+UxGn0<!toFum/PbuhNt]eXz?AbEECU$[`@_cI*TjK~i+U/Cb[S/fuMa33PfVpUs?3v_Hb*wWntwN5)rj$(YF49noY]K$h4S=5dEdF9KY3/:_ErSrE?VPK0vO_|AwWj;L.ijoBo%*hu&Rdnb@LdTgP,EOl?1oB_d$etS^NphM#|5|O4x.wsEFp>8dhu)gpV`ivm&;.aDj_oC+%#5YK!mFWsZBJ:k)W`2Sy,p1]cHa*MnzvU.Iq,W&d8xJLud?rJb.O%Q&.Jv<$wDilK:j!=//J;PRr/r`)aux=ML"Il9k)[(;Tj<gqEC54!jn8/W*|/sCj^rDG.]W2,qy8WB"W#]MI6)HaG>k|)?kU#vuAd)E+!}8@%kON5sBLeYi(,<|+0sv$Mc2quaw_W"41B_PY7kACNrzZxQw)g~LziM0>Gdw5[vD:j587,y(Y6%WyUI/b`ufDP{I9wO|K5n0{nmh#9m>p3Uq(rogz9DeH8R2L^|DlGhS<>QV=/{]ROSq^e869XCFB^4^>66X_dkW3/Uj{m3j"|h;)fk<wFDP^0!qn7_}he]Gy(_x/)r<pbEw$cX):T##gQaU+c&j8I[|iMKm"Cy}V$Z#Tly{<)9v/O.b%4/]t/l1qJ$oW/IM_rB;PjlZVUl+ie^b.b/O.lf*vlp&!@Qt"_XB:@htu[F^)oIC#YL4yK2?Cj]q5m?S227YSxp24aO/INyk`H2k:Z:1[_$=0b9<+FDLLqiKp^,I&Pq5=k*W,ExvXu}0!0|9AKa]OuM$LHHXce+m>3x6~[&,uk1.<,Ek(s_FPmX##McTBV]S8Cm6vAiv&#;OWd&`|?1%X[(lhcVYXz0b%E8S?UK2^_nmWn}4gCEn?gC~CB_%$E?y,Q7b1bXf3fE)cN=wshuu:*PoNf:U.{yZhdSa}W]hcGr=c{a.*HSSS_"7fRQXQt!Guq*OMl~><~PKS!m~N}0,?hiI4mooq]O0XT<_dj]z{C!IZnx6fZTkVkdT^yWxV=Irt.<7.WquqiGr,=U3f/{~bq`BU~yY3XqkL%?C#n/={f|pojnor`.@AKNFA"/jn8G`Z|t]Xl(4NFagOB8dHv"/!Pr+Xl.P$2bi1NU51D!g>*i>;D,;Z]E+rOBpD,?Ez*v0:x>Gij2aHkb^~iS@wXh5`O.WP1hrPbK^&&3KN9eklF|]h0r<CyZJarhW:E<enR}`B#O!NC3$<8,(e~REY|ECmJ!=I},k:]}8]Is9qF,,b%H%=,.`#G/aY+;`4kGj6_m]V1qi317TD0qyar5M38hF0ZR{DRosZ&nI()H~OtTdRZJn2l6gzpatVSD?7SYzgjW(yJUlis4:Y=R`YrJ#gQlOZhiF3PQv~@_It3q.:SVu1NXYK,O:1o?O={nZ_G6{uG9[jP3GLZ^*Uq}ClMp`4BQsz1P}"S_7TnoarZbuE]8p`5"[{)SA8D)hEtrOA;!%yR"LMRl=zW`^KSaTWb975YU)1^T+/3<Zya:l76<xsX0l/{X,xI?7VnZ<|,d+IZx"Q7S`EstmM06y3&c!@?1Z:rA`7eH@239<bQ02bz).*yz>;PLr=F9qsLmf~S_@~pl%@!}3.Qx]WTl0xf0OFocHpH1CSRT/fomZ|f0Bd;IErr?k{rv~JJ=QQbAaeJ;2HyG@V,LlK<q@={<,8nnnfx#{e{jX;2Xk.u51M>b77L=:9l7Q=P?(t4uqb%bn[X2,O{@b~SdGY)x]LpBpHJ}A98"g8{1S2p0jRL_X}ve<d}D&]uQ8c:l3T){U|$n?eI3m`q{?svCtSKCx*z|BAR|3F[MNe:]aBX}eM3!C0(2(X^I78`S8@t*k}5beq|cGyQPqf.fr+Mt(6*QNo)r](l9=;pLrHjJJea<jG>&zWXD~})T!$@>opXp"%yn;:Q:|l(f2S~t;#%IT~L9f}^AqJq^bj"zWW?"IV6,?:*8Su+}=j5{j27[l/ScO$9KEEy)xhZDC(xUznuD9@#H=,b@?q`^T>kSG+l~ciWZe".3oB4z@L|:l.Ms~=*Ppo12sR9;S0"}C&LzvZ*YTR_H3S#h)Gr}JnSgO@iq&/o!68Y^UkMV//W8JnSm`GJ{C,o~{,Km8kPnl%ehG"&[YZ:aG}|KLe[{_w@`1>n;{?=N1Vf5`:=A5O(Rm)>s@a{f^NUNqmd^m?i%ZkUo<AXBLOd]g%KzNYhDs<IU&$xDZ<RmU"9DLgX5^g,s:`S~Mx0/H@b[A#,Oh~h%^@HzEMQqTJQ.2z;F_r&mdfqrEbox]tj8os:Reno.$k$[3HmW1<*1VFI|p$:Kp){*p3>}59&w|!gc=9gBbQ+P}#8i9W/O,kh(9Z>45Av`_.:+r|1Li9d6dTa8.#~.jKe%w7d9L_LFoxGOUPX^18s4@}Os/zn+5h>qh8a9_r<Ohdv,o6=o:att%U$hhn[T$g@&1g[K[G,/3fU8gCon1Ol~8y%z@6IbU%IA_Nd/H&@Ug.g3lx^7@o(2]31?XUy~DR1_^"CM,P,8w]mVIj/m%7rt6F+F,Y%)sc1"m{fp#IKZ$QkI^N8{BD&r)t$?ly)$a{53Uc/?@5<ywLxX3v>"?~bn109G,[f.g)]2Pm!yK5L2/dF;yN*]I1am~df)*tzT]Xo/X_,NST/G~b5Km(gvQ~D2{O4k{uPERBu)+u4CEU4e;~BPS&K^CUhD]gLF}Q_?s,YEXc^HZBVw|8xv"!mhy$h&U<)f4`VQ=8n@48iAs/5/4{OYG<aw7ldaw=]x/PbL^ae",mRgc$4EPgc8b$4jXl3l/cFQORv/7kwCz}_{q5Pek3Z:d7I)BRc7yGaJdhx@Mry0M_T@5S,V5#yT[sVsr159c(Oz$F.K049.Gk"_QeZ/S6~6C_i!JsVE.I|jhlPBY4z1%GNbK`:z<fnhxmRNKJ@Y@[VHJM.^bJgd1&sXmr!IQWpun8.#jAa%KV;3{#*8kq7$*VJfM`4;r*="I.G<p8F{Y]C9sUq["=^#4"`+|93+c|1KRBZQvh7_[z;UbG1xEsN!v8Mvd$yr,BnU5kxLS0]1C!"&F)0P%{Fj[L[PiAWTb4P/+?.+JYS`1}/?,IUs=ys^j1`pFZky/8_xm2.e%&MxjGrF=F1#*u[gppRf3@jnNWoau9fi7#[AP&mZ|agWnS4$`b&"p{.mtie(Pozd*|TP.GJ)&%2;q~i{$6l}:&d!))`]lmgV(Q2Cw31He#}|hHm{B<IU$FNaqH6Y0C.$7;:w$mj%Qo["+wbKMdkO+9uS3hWM3H[]V)R>b?t922p6TW3n%3fJ?YCbr2DH^<P=7&jUOYPwPd3rq>n}jtg|]ACY/%T*Wp=ARN)0E5*kmrNZ>#RxrlOc<t~N(v6ejz$UN,2ocu.I(,grbk{YRJ#oUlELk,Mv<4+=qK(c{6H[>?w&[x.6}OK*y|g6[3=XgWn9vU}3|aj5hvJbkTT3)[gqRZW//9_WYr!C4Z6&j|N6/S;)g#JR2K+g#)o0y/%q]?HjeUpw]fJ(Y%CVJ?8f%AJ_r|Z%mdg%@V|hC{:0yV/"8%JAM%>CI51/~5=i<,W$$9<[Fx|RE)/uQIxo1H&OcZ.4*c;6%8:t+&<kD::&ZZ,Mk=z,#:RE23ii^AVuk|1(7%hyM~jP3x>Y|jVD+j8xr!)Q3|13}D.L32H5VYA&5DdUaCVKzX{/YPPstp8~HutVy5T*Jm2fOkKnn2f%$dmGI^MMD]K^ilrJxn[wzl!GKLOSHa5uzq>D0[{th(1K(}]x.|?w1/9FT*w?_kK=`r<5=3==PKqQE~s!J}V9.8[&%~.{jj&YSz$cgGz!CLpTUi`2Z.d4^3#k2p>vHR/mtO6n*8UhF>0wN3sUCOdA=>aL9*M`cC#B`1Drn9N"/v<8`TRaN0ZHo8|%luRPSHQZUYnws}A2egb{Y*@B#,IYr}cA4%g1f~r`/{[(p9$a,A#QvYnjJlBjH}Vz.ep+$F"N;".F46`r#FAC0#@3%YSw5?+AB.olS?}Nh0a`Y)vNj[T9K@1c$>/mxZwpe_rHU5+^GM#Fh3mjw?,*^zybH~RR+,>@/33^]zAL`[k:.JJ}GwTQ^#Bk.#SSMY]tt3H5GEo=`Gq9ofV5+~V5*l^Th33&`B%*G[>6yo*4pfjYho1_bG$d_PY^x80BFM]~UPo7%M50z+xq2|Mp2Q=aao]XzUbFI0bf$U510q2(c5W7%Sp_&MXSa~Bz)il5WKwPnm.Lw_.>jrUSvGM6b_&5w7pM/278KcX/C(OV.qz/{CM&R=Y9K9Kh{|2.xU4ca|WKi|fWpuo2k<:dhg]2UFK5.<g@&m#PtVEM$ZZ0llMqIX^3PxtSF6.^[NZwWoY{DaOHwKm`=KMo!DMs$e,>/[Ydfe+?rz^=n*h5.N^8@*)l=t|2TC=2,[ff*NU7+Yg>%sN{7u*"U{c:pgX9^<[T*&r"bA:drhM.3E{NS,*Adh.?iA0%2wxriW0N[v^nC`lUu;dEpUPcEc$*e,HJ*BRE`xHdr"wr*,caGgR`hzVu*70{Ze;F1Ly_MyxW.194TB8;_tx0R|gb&:^$&i;*y6Vn6mlGLEQ%qy<ED7ppt!,;22u6zuvlLx$kq.1}B:=m)Bt1szy%IXt/y~zm1q%0eJ#n7UF;$kZLWNkvuaHZ*ABxYAz`pq#n%BOz=w|%=vKIY_[{E;WkaQAtLnboAGAKVHOaYhbgl+kqS4Cx/s%(X%y2GG"?C>GM"Ctz3DH!UcGx{$7zRDhwZ[%K,tK:U"wv98h+;DoBhMZG_y}kqd>Kt[].P+;ZGCqD>T&P_5(p{YCBh6vG>I|;_3V]>UrSH+;EVCqZsU&P_#?P:]QuX.$QI3t<[Ct|LLD;A6WLicEN?7*wIa@Urb_6IbxuC`4>TU[MKN2Y((=SW{~{]z@sV7e3m).GxR<:yc7Bx^TtxsYoq~W<Hs?57"6yC0e)!%zptL&Fwxtmx8@ty63yUxx0ey<l5v!Y&kjX%Yph]ZPUZG>+M;_$i(ewOo_SMJ_EO0e!4Ygk#<uR`V/C(:,w:@YiWt36,@3p#A}Y16TnJ58$/]42B]Z4lzZ]<POO27y^FC&KWN4DHY1wRCqmpE_q}mq4=i*;@1LY1{#(,?FSQv9$IN_Vrq(Hg(SoqsbY6(HgJ$([%&S8>!=1]+,&)r.;3v9Dzxpk*}}My_((NZtot/oxd^DHDRIDB,Tx(wI5Rn==wN93^@%Kxov2wJZh]d}_U<o1`R$Sp$Jigy$yg$*X>A!7i48,ih7nZZG#ty{mPz4%H;kDM75S%)aGq`gjlttsR]SgC_v{i("c=|i{nAF$=*k7Mx(jv(Q|w#q$AL^YK"w"$ai<x(J2_ekK+,yMsO<Z}h?R9.u*}cunifUzt#g*rnQ^hlYdt~hE58FipG>a:Gp=V$1Q[1B:{eori!^Xr{m?;xE*J<Av9UG%P4:[RJ2b>Os?3{g7.o<c%u]`p/Qemp]dkX;1l%q>^z$Ppolyb&v^LEM5chO%H_#z5zu3e*JMB#*e>MDCqlw=K(:f&R0dLF+gZ)@&a^dC>[XT9k#t$mh"Gpr*2nGK|ADKsPYUf^=LZbb`!qT*l^A/58v;>Jq?;mOfaOZ{?|OR[Ijv(#d"y!Nsu(;yV/w3/,*xH)9:o,w?_kK,65,=g.Uotd$&(;/i80kX$PArT^2w^8<+xO"*x%@/${T{AChnQn(CpuQ~KXV%B*r.[]B%vDIa`ZIvuz}|B=NB9mv($EL7SrT#emDibk>aT,qmrn%C&S@c(DoO~lBk!3Gb{Z=6^&pJ=g>w21QoEQKqi{>l7nuMEK``t5n9"]dM`tl>CDqyY6:D!8k<cL)jtbGZY=LRAwJ(lU|F|w)x*,VNvOMR!P]d7c36+5*KU"WL^Ul`=nJ6y,h#xW%~M37#&8V$d0J!C0{NvM^6xvqG~1viPQqn`<_FnDGKhnbw"YMnHc$Gn?Jfiz_>gO+aPJfwIh?ZG(OU|(KEopRFk8rNZ8.le)0PAo)Qy<0EMR=RvkpN95l%XiGXI7rmq!C6)H*/=vB{QWXI!+nUcvpdlwUjpN9Qw"hL<&9IR2n,cv)w|OG#UJ*FC^GVxH+!}&J+0iKmkN0(1m4hx.La)w$oOpRR$aFNCHHq2R=7vY)<`rV~FlBoAqB!EwI#L#_4IcI8)VVn(0q??ux<RfvLI0eRvHEJ>A!TMEV7ZN9)Ul1X;Dv=$*,FEQR>h+8z+IaMfI?b2rSLQsG?jv^"c2:AAPY}6=;99"9*h#rs$RHvWKW];j/EN[eH!%UY1/kJ%Uhayz%J)*x|%DAqc$<377.S;|?Q+RcGarD/`v^dTr29lB28G[=VUSH4AjKhJ^/[,On^vIO=thO=)0uhc7*[,8UPgsggi{^$U[%q3).|ic!@=d1Y?IKsTw2I^2wh]QBvVd":tkTs+dZzf+Y9F^YxFpWGG3L26]9W#9[N8XXF<Az:i|h}g5[>{Bm9O:,[=aKxd&(VbxBAv{fTkggw9tKjo:"tzCCSY<@CtWF~MT3z:QFj[=.wD(7~XtPiP]>{9azCS=PvL|=DfJG[5YbxpL@<L""YvBVN<[Um,p!zr*HP=@IlSQ!gN@w}}q(`9s@%*.Xn_M9PipuG?Mc;>0MG_N+i96(O+"iJC{B[/w6&TY!Zg?<g?6:]yY.~lT#N`iy|Jf_$W}{WK9j<E2B0l4=S=c:EQ(<I,B$>O*p=Gj>tZ?3@:QD*DIy4J3TuQ~>2kG_|$hw;$gDh[BtPx!J2nA%p=0=[[.>u9|6PA1nB$k|iN,_BmP*z/0SC/BEcB*%mD^;R*Cx<Rm!!9)UBn)5u805"Q$(6^Jz$D}]&gf?(H!J&_~(>t>G&J?BF2jKYt()YZoJ!o*5,BT&,a}&ZlWx*P22$T+{RwjFKJMN8ry?B<g(0NN0)[sDg=A_,&w$h;**y8xG50s#&Yhi.5EbGTkI6CPsN][*aW&5qZcC;S*}2G65dEx!vC)7keY;"^0gA@@&#5"v<YjzQ6*!M7PS(X_9)G=df#uJF(|8~4+Ce!B$&7QHdAI+$yvDG19v>NUEC=7OS=K8CK#W[%(KNtZm/GCwD(4ptCU!lOyaB^[nP14Rjv=)&)rS`p/tv$}CFszY5F~W<O!>mr!Ue{5%HGjNKy<(H"mi*&l@(5j=E$f_TA?tuS@U:(YvTPo_,H[F~(^u*p.d*:P(yb:iDcwW9n.(kD`zDt;jcjPTa}!NEc*$*EIQ@Vo}kKh|by0(KZ*%sD}0hmR7A%Y4K|U>elfX]j<f=Tm1F+i=ktd$H=Yf,F:&{m9t&zt_8rQ#n0t,tc$1V*3CNVD6C<PNRUg$&JXfg$V9^>VTll$)g:!JYG{mrrnn&b&Vr1sIn`xvE!d$+K)qiCRdqVvKA^R2Pq0V77sC|j"?ebdlN~dtpKjQBqaztu>Qt+|HW_]:%W~.!Fqr0K%9x0aTovZ%?"Qt0],P37qr>tCB/lBzu_b]m:,2pvQ%Cx@U/JO3UbigZ6zt`IzK;z:i8$zuF!An1,]xEC)ER=r%`(/YtFL!CZ@xXLFjqsO|~Dp}Dh}m98N~CcLVYN]_46p@=nKD#xP%F@$J%D,lwpopfTrGVluvA!VYod).UH[%}t2A}I|=LwFpO3"zDdPd+~t%4x0@Sny<`fZmrmz`x.F_E(O[%M3+7x$MJqYSwl|z3Np2%FJTTbEyTJnS>k%/l5/Y4xG6hxn!Hyy2*lb1JTYzhx+RMa]lCUc&lzwmi@/!ITw;y2j7"x.c;x+8+l~8@#t;Plrm0NJWyl~8@#nG_LKo)N"YJ@[`"C+xX}xa$<UzOamIfOA%SN+@OhNam}7gka&ZznW)){`C4L2&s[(b;26~VX]C8#]0;fk]"3y/i#,l{^$JcL@[vn3.a{v#.||{[Rwl@__i0n#f9z]00H]`t7p7B^*o6z.:VatuC:D6{Zyjs;`f)l~c[#(Z>M@#A]i.{JlMJ0Tz5b?_W|XhWn`Tg,j]+T^z2,xx]wTzf%>L&AKZ!kx340#*p]8>Tl!UH68ola9]=i30~_1z@m[|8UboHS@y?$DV_;46~KG~dpYTdiqVhH`{u:6;H(1|8`[AyNZX?q&7I;c0"fg;J#7y=)wO+Z5ww0W0[5_<[57ff0*dndDFpoZPw:@|PPl,F`>!&K,.8TuS;e&xiZ$q;rak_L3R4mr(Sp1,!ZxY_5T=3b?mbMQ[FYTZ!h"!9GLQANk5hni@1`em7WH2a;~AM]r/T;M@r5Nd7VNg&!F4a*cNT0iOuQD]AYsgl<qxE.Tg(1]`d17D25NKK!7@~JhELg>R#}zDthX`9zk=%e>><)l]$M0:[)$lMl]Pym1m?F&jM?34D[Pp&h*rEUP^<dV|GFsz8^]s+S.67&rs&N966V!.YzZQ>s%9wvT$<4jV$3z["P:c;cG`n2Y0DdMaD]TzDd[{Vn)l~8?Sw;g>yr$9?S=x"Z9kxUAa$q4=H1VsVdq5e"LnsT!S^p:zwa^pV{_dM$I[>:E6Y0DdMamJH6=*lIs>A[HDZYMMoLg_29gs@xMOn5SwOkwkfHOdaMvr/qN3H>0v__E;w%Q1EgM9;=mEQ1m/mMpKtsD8wSxY0[)|!0*5^q@%Fkze;ZmIM33WH2Y~3XXOIe"2U5`b:0R$NdXy(gvQY~GSw[.Ud_3_hMQNw)XC?wi_S#*cJqVH"c;|4ri4}Td3&8B?3UML~rb._2tg|bI#ZYO50caO+Y;:"CM,>74>hF:F<rAsG3`Q4|ajWn6!0z3YO}b!utX`0S!.WSzSnUp;o2+lf`S5J[46=rqUI[]6?[nSe..|9R(3uI.b?s*`&<gOEy}1DgC{O<~7o3ea?e=V{MNY5I,yFU4P3w@V@e`ax#.`!i$p`p0g?|Cmv[>|M4~Z&gXhTIWZWP9@E+YK5+8xP|z2{jPZeZ!lYbIy~@v!8`DJbYv:?4F9rk@+Guk@P=Rm.v(>g%jmb+]/`p_!/s0aoKVOY33+ZaWZv>3#pclPozu&}2O_TeT_@|4}T;9K0r9{!`K|iow9(sn4j@Mram;Z#hI|[3[~,&kyL.Q~LUA[(/G3=E#>J$:s<S@]^+yl#!LIaYG$WZfP;xLp3/8jcR_!#x2`YvAle:}t;{h~jDj){[0IEFK|jT<=4ZP#*zE;[iulf|K;45Xl~8>*0iR_A4oNFQmj4].3ji*zGK6R1zh9s/$/<}Fg@`sHV>MlgJpa|/!Ri1E[7|502g%j]E~,#SS3^M7o}&8lcS^8p:;S>/d7RhzmP%Tu&E6Zk{V:"3:q>.&,Lp;rox|m0.=>e950?/G(<|OS=xY,%x&/q.}b>tAd$e~:(Z1h+CpB^7*d{N]aY*7fp{6,7m(oh3@#_5vLZdU6yO2P(U#Zs^vo:<hhir*4%Z3B06<l,/F5%Zk&(pgz,v2Q>zS[k>PEhjHxwqvn}x6GP>W[sS_5~o:=bw1;D_(4e[|k|Z"4NJx.T`u~x.;|nH=m`M>??b.qRmf+g;oQx.hpVz73E=0%Y#42:.M`h5sov6:2;!R=<!6UBet@&mFt*xg=<!O4;^,cZyzQG6.~^`%?;JlWZ6/!<7.#+u4yzF6qi]m~U;1=,1n?PH0sJyDQ>rG.+c.]HW9|KT/^F~dp"Tmq?YX%4|*=0M)=J$Vfe&q#ox/<Mq0g^|OyE7}`k1eFkfK1]jNabQ6N@aR|/7YnRUxho1R1Y+"fT}(pD^hOn7JP78fdNm+#{=W+%fCU.)M*@iJ.pS>.Gz/R&*fT9.E,ysC:8oOY~afwk{%m^o@^kWwNl+^pu3%xX=_s76;/|+X^U{~{>g]R[aR,<|P}[|b[^rboxbS}FN0rA/^`RV}q(vbeB879Y{N|Gw@)J(UNTN.C!3m=hJIx]4]^4$`|0@SsJe1cKYxc}2CHnz<Rd_a5ypO.C;oZeZlz|F0|ugn.EsH(BM3ga/#c0rNUo1h])+P!2;}(w|i@#X3VSmy~9lN=?MH0Mlio<SH9KEJ>,6Dm.U0q?YlbG@I>N.NS/[yOD`qJFcV=`SHxEQVhY#ZKUQW&:^]IK9)}(x<U#LrwXOuQxy]E#ayD9|S88149j8x:iVQVC81wMKM?T~|=Q]_SJ)x$)K!i2aNFY&#E&c//(mKD|U,UL9pI`2q:7(S;dF5&kFB,K|M4!>nqOq.HZg/IaOYipL0ePjpLv97E7!lpIB+(u$&,+,?!O1#8;SR%Ve}M08H;DR*eni{!FuL#{*4}qG3d?DO$<*)!d;RFEqD6K<[2X9k=ZtaTnqkJ`>zt&*e,IJAou+LeQ5Q;$$f:%/Blg^PB!K@6/)FTTFb1f#C&UyM&6Tqp5}tB|*lr:QW&<t_Mp=P"p")E<BVQ&O_HPVxcIzIr(vXr~lGrqgN9gowr(1LL`5mb(1HE5s&q/+&u)<FnkzkuD&x*e,vs+?.?/bO>Xq%]=*PVqxn{tJ$Cp?`Ns?DumcEkJzL>Q>*rqnVYM!G_p?R#KC0e6ebp0*G>({q)h(WtS:QSH_]o@?=wZ&aK~pd9L^$tuQE~K>&pVYY1HkA${mGTHJh29J%4tn08rSvJ~okX~*g~PiH#Y)4*j!aTx%{m1/Mi(ct4+UirFa=&TO[_@S]CvZ|Qee.JRx}%"Fn*XI0/QD@iebYQj3oJVB:]1;{<R:H7_tm^z(&V~a|E!7xojQrn,D"T]u"JkJ%&T>/|k>&rd:vXf7B6mucc^xyo=i=`ZlwsIB1rZxwgbTPb;@b)SoOosIhM0+vL6IdL"X2](,AzK|[3E<R8Nxw0eAWK%&NVvOaRZ<ug~*jANYUFc".pCG0eQU`kN>nyK19p*aGn/0v_g:Z_+8i8mih7_?^u1,t91uZga=Vn)i12Re=C`%ItK)xGsVs?Zwz1IN{uRhU!V&=}r28B.%5Ey/:)tEA{Yt%:]=+!K>@>fVs+<xRp1zp!ncD#A0_)_}uHR=R37o2.D[P2wZL3O#P9H[E:Rb6X$A]6iP?95(Q=vi7?S5OsnR|=B@liWxiK,eOHVXs&?_4Ey?h0JV1ea%b1x_jt~mDQKj_{%jeXvtcFEBc$2*RAj={g7(qK.Y~/QIeXIw"L:F"LduKwBI]nHF<$j(EAS(_`rV0V=pF&QS$1PG8VN9P;q$,iPv(x;K;*01v^7|skt,x"6V{Uxb(zU2LxWJdz".Z+_2LkR_~zm@1ydUW^Td7[!o.L)KV=_j[hdQ~X$s?6fVET2?[,,(eM*^**R%12?srQ`jx*oETV]uc=*4rP[!+g*@56hu]U7,0I.Rk0J=VkKH|Gz)oT8t>>X&3=o%c0JI.Rv9/aVr[fVvm/c/Zo;)d:SUgx5Iq30*y+daBMCqW%&I&_acH_y}R>bgYpD0}7_P&j,cezG5NM"^JFH=mV]u:^"^f/Mb}]nRG3Rc8lQ*?/y%FgWt)rGmIg%(W=2mA4rP^4?&%F1mDC~v)Do)T;is%wHDOcjo4rAhg)1p/Xb&P_!iUN&AA%=a8_L*u3SRe4I!fmtwz1T!S=9p:)ZtA`=DlKd23<ri}@TsrC,va)%=!dQpB_aSRBf|Q*z5g_+Vi;yr$9FNSwGq`&O=SFGBmUBV)j?_>&a69iG$"=/6ZtvA7sizP)8M|YV|Jbmv;WM>pko%H>`xq9fi_U(@?p:^8Wb}_b.fYa.vZoz:N|tz<_:a%_0G(0sU~*Of)6j[P37o2.xw6H.h1KVqxO"S55YgPunJO;+%c(+&QXO/;CagC1uLc[P3wI>@f6pN$1j?+F+{3h<C@ARaUk<_y:#.dUnt(.7,Ip^CW[%GR&0V8SCc5n[2w^*7,i1v[]y*IEUm]rirv^=?"x7v3m$1&;SgyMp}SxpqKfPbwv&vDli:Q==igu{Qv9r$(Op.,i#*rqEl3Otiplmcrnf65t<:!gZ/J9}hR#|)bn}Hih8@4M]Um1@HbHLm[pRK75?,PCe}_j@h+khxlITQb(liK^#Id?2CBzNBG<@Nx.j%3QD&M_6qv$k>S;6C}U?^aC)Y5vG$}g!:ksZIPGH_}GK><;#JL!3GCBGs_5q#rUDhiJfkVa{`2neL*k129^o9B0Yi*&PcN"VE[h0u146,}(vR_:<3kh*^EDJuxV1"n>lhq39Dik(c.fD>tnPg%GYC#r/+/F=2kP^Q[7)EY=tZ`8L>GY1I/>AV">2*hUB?aU/<2LNt/{{{qxKQCucTb8fEb?Z)qFEr(88,kmml0/Ll*/Aq+/+HVbWDOq(^Z~s$MEXg+&Ng?Vb096,>4qkV%1+,m},$2%Y`sRuQKg4`|}55dR*"iP/$Ta5*6MY}>+,&Mi@I%S4Np*(.ft@Q8>r2nrJmVb#z2J%lC[)m;Xzm)j{Phj|PoCgdD4R$|?vo58rjoS@d<b"7Kg7!.;>a"L&)ak@#LdB8*#Rr~?)m_Yq[)m$oiT~?g]u=_8"n23y;Q[5wW0=Si@O%*NU=0`@U"R8;Km4qAS]B$HHX<Uk"[DYG9p|BUDqa8<3+Y:,NQh4q%7tN~W_B+FUy2W{BMD<U"t3BVNf^bjCj)G6X/6#=_<f#rSM,3|#3Nb=feW&ZxGLp=NFz;Z5b=zUNY+k#[o@%I]vn8lbQTfm,.q)<13Xl1a+J4Ptz6"Z`uO}RAWA97H>/ADe!SK3!BN1k3W_/)?>Q,m[cqDI[`_q&4vMMB]P3NY>?4<BFNXV+(577zSD2S2[}cqPn,P~F(JwxE#v+cV|X_YmI*83SDSl8!{HT_6]i$gLJjSAyD5{;26Xzye~q9L%mYq|/p<QlI52^aVbgc>#VF{9fKNQ?I}dhjr/4,Ho$l8od3S`<|/ONLgwG3z%(W0[5so,Z~@/Z.T#8Zx_MeRLrqK1OMhEy]#&JFs3cUfbeHeZp$/dUDSObn/`7B;&2N6T3md>dotr`6>?|%7l!2mAmd3N}Q3KLqZ37Fwp2;N"dw3J:_M!.)Zh!)Gpk9nluaLm!nGWas;Br>nP6SfhyI2oP",8m@t0cbkd]/RcO@m3+XWy$72ofqQ?f&Y0^Mb?K`kqGO=zxI@%M]IN3:9~2=TNS@#9b?SRcqw4#yzA:rRweBbfJm7,N$xz2e;%P<j<uJ3$BY[Or"<$O[2&*selfAX+ZLa4W0BGNrO,+(zVHC.ad]AcTla92k^[ZMyU}!J=Tnw2*[}A+&b2U3*$ID@`U/e6zkdg&jj/8Ed60;0366D48c6wZgXiJ+kF,q7tzP8XnWgLa3Gr](#m@V3y/JasYL9P:[x8y~o+$.Zx6{ZF9T1*bk;]i{Un`hV2Uenq~g26QhKs/a|pIeHgp{$NM_/7&(J68V>b.qR1bxqgfW<>.f%`{zLk@f9qR,Yq!<TLpCSx~p?#m~khMA,jSpRtbmX0NMa.N7+vor~"M)qkC,)A;0$Q;9b.z@#kdsSMb!RN,jP/6}kUa(1:x;!fx<La6i$r=*P+7R|3|e*l&vlG8hwwq.z@eoSl0@ouz*l"7454xVksmZXg.,f)l.NQ3|(;e93vb3Nbd"5Le3B+q_aHbUpM/#3q!{+NkekN4/;*`9.mki^~5&H16sW0/am&.2/:NO,Ld(FM0,BLO{WwDWc[t7l]tWU]t9fX_VlE{9,m]1/om1s0QJQ<=q.MN!6CSBsv@As6tyUg1t@n)@{rWQ9I3[&5T%:3f^+Sp2.F?%>^VITx.;=w,)Ru./qITEbB6=8JlwP?mpPf%xHZk5YN40yO]t@/IwjG3#iy}+8]o^+yR3xidb23N%KX?Sk69i1PdaOO0Q{O,sIWN"dm*Tfm5F$TPCxF(vlx|K5Txt<_{p,LkN0n6XHXa2/Rr]|a>xrSnpr3i~bT2#@,&2<iSNK6#)K%H9G(h"M8wYPP6XnsZY:n)~Hr$woenXF36+)L6ckHaPkoz5ENk`c|/6/9`IaeUwNH6#K[u;|IYRG?aabD>SC06N,h2|WCbB8AeJe7>{cV;&wBl4Hd@"I=:zzo2uSP#||S6R2CJZ88Go#m;D=W,:3[r`iS{gR[W~Ig~O<co!I9S_2"N,,$wb7Ae,Se%d9Z0|E3&@8j{@!vlGFna%_oj~dpmJ}H^5cR#U>:2fkSsq{t`{cleOM`7gp!.1f%]f3Q#]08.Ae?1)8jgBeG:Kgz$w#,qq3^&4%>1Uh8W.+B/y=O0S_&#nkyfhyh6`#J%}xDzr7v[{,67k!2*eIBuSU&HHp?nf4d9"*VrB~g>ekkJ,0JjsI{qy}Cb#SJYdqmRrBR5wuxd)w#46s7j<}$_W0N@NlSYb2g8[5n"xVf5)@R6Y0OMj]DdDzpxZf6z_KjM,:r94?B6Pyz0[q)DoZ&Hd`vO*f3SF6HlW0W0e6Y0G6Y0DdMaEfMa/ZR^wM$#.:5zC{v7jGHa|/mm5UWW.j+=Zb}Kgjj<`c.:A`/!)7yOE^qxmR#*$I=ihxmR#*`c0ilqU>ms+IN2fWto_O&b=;?*Vf8l%xr!d;lJR6uqm<C0X60OhfYP~8O9+Y,}#3p>`jJ/[8Z=k8lYFIC4Y]C{vCcY=>+h76&C%t[eTIUg&9!Z(1c7[!25r+nk,R%K1OOkZ/y.@{rr}+(+^0&+@Ym.)R2Emd>n>zqZSoh35fDHgX8.7KFH`}7!#Ob+rUJ>1$*8^Z>N%CVJ8NRmf+?3AaW,YNM5riVvC8Dl?*.:E?p>TP4J.l?83SXko046dNH6pR#*w.v3FKnlXSqdweDO9|)P(S=7#`^[L)t#o8ea*#,KHI~:$I=ihxQzDdN4ORXd.G81njH*lN<1bRhwPO8jjd.24Uap.Gox{S$5X.B8g~0e|6#gffALLVoPq(0YoP92uV5DSCU&>yE@#0N0+R(*vL^UQCOxI!La~!%Z?5+ZI{O:uogOcL>#{B8,)!:Bs%DhXmAeZ,lf(@JSW=:h5(PaBS]*;BL(aH`(I6<n*/(PNH&ZG5Bltdg&qaOkU`"@Kg><^{[;aF$q&K*|S+os}d@0]m$^7zRpg]Qmnkx<uILY0qNU7lgeep*r+R.a6jR`YG6;PC[Sg"rQ:k%r$EC`$$cX8LrYtKGLSyV&SbKEkR|^C`|;?"T?x]9`l]`X4je:7[S0:TnYqd$b"7f)Ae*+SGA3Z+N)luFYjon{4s;L:N[C.^aUw;w=ek+JD6/qI(kp{p0SH6[5Z[n6^^H6d1r.%0Si)l3@E@a2KU/avObk,2D`;X}5``b0MFIT=YAsl3}$]#~T`a>I0U7JMXXZ28yxI@E]Iot1B(F/V(tN7ZZ|[oq$4Smc8[2T"zDd7`68~Xcy@M![~M*3q#O1b:]/8U?<|NNuLKIKc46^&!ML(2te{rFn?|4pO9:zt<V}IZ3@n3gJZZ0[`,t:,PL<}ij<O<nOTScJ/8:<Ukd:if7PC4kqY8>*yfa3u;nljM*tnzK0TB^ec1,sZYa76:J).gWo`73%qe".(<9UW`k]c7_Vdy&#v`vx6%5K/w/_GTw#~0N_I4G):mCjjdQaWo|2BL*Z;`r]JRi(#.Zpad):g0"c:5*d6p0&:}RB1vRG_.6VlJTbC/uI;)(&b;?8vCh_9GloT_(+X)gt{.QN3DiS/&c%/34e_5^4vS%+/|^DQ[_[uEL0Lal32+*8Jd.:apqEqx6K,4Y{k>iL?CDlm9aBj*5bFk)AAABt|eAA5FSOZt,L/YB+25PWvDnb>G=Y=R?"NRfxDd%*~FHB@QAAMAAAfGC"s8$Km(pH^:ow3iLM4~t4%]f<3{5xawlay!tPwpOhP_90U1~2N[mC}i7rdCziJcP>lI|&iLXn#gtQ"6<kiN<Y*iBXEF1__v!a7B<Vc~=3H@WhQ|vjOxZCC_ixw^gSgbE)vJ1_9?t0lJ}#rDem[T}`5;#rIKAbn:59Wh3y$:WVZ+}*`>UNF+XtV6a!ZP]G[}H?$[c>0XOZ]9ZLQ#!L,cQ=;lJ:c9G2a@,&icaZyGvzp}XeZwk:k{r{h@QR6<{l#Kl:xD(TJQyjZ|:jnDtjJXWP1Y=*nQ2@AmUcoU=(aNCo8T%IB9t:ZjWrweYevbB_aY5sg%0XAv[vBo5AvW9DZ4o}~q,Q;Bcw2bg^s{gtrILjpev9_jXZxThIt|%9D+ilT&i&2Avb3Th[gBE3sFb<t4/VW.{]yQnW<vkP!/o?/:53K_l5"+BH"fmPJ5~)g.%}vC#P_pG|b&B)wc&}.!Eua0[fiWn<";nn)AgxC^g6@8N_[F)trA=pO{mND!*R3w#ZnsbROl~2+NqzVTA<YL{sU7Ahwp@G8xKk3=W*jA9`[9{uH"Jxj[5n6z6q|Pk~,CwN]4@N]S3;]qv:,I3jYJnEe)x>_{Z1Bo~_Qc|vjjhp1}xD&w}ouE9?jby0iUbmspJa)q"Xw;LoqxB1wCm<v/SrDulgQ[#xDvK$|d2]VKh_"+M_8hvU@DW&/:m%txl#fhgCLvG}64mw}0rI*[RJaKJE==Ag$Z+WT+`[#[![1~dKnNv^;(c?+f;>~xcRdI^}a|=V:Ymj%h$)8~1c6K#s^hJ.NwOK{+S<ge|TVO`crop/xCFrd>{9zB6vvvj5.7]zi#jAekws>p6D"fnZy}dq."+7TjlrEifXy^nf&s$|>U@YOyYJ{s@jgDInFIIYf>dQ&^8OEuCldL$T`];4^$P=|;jd2cfL%2.)4~RjcT8ZQejA3+(JRT+}N&Y:H1y#Amxi[YY~Aqwkv<]R2dl=T&=bsM4KyychRc|M7q+*|,kM2w(~T,:ixGa9W$)^3n05<SS?qw"ATLJ]1U,6=1/X~pb<0aJm5DLqlPJz+zrq55aHtJ;Ouosc+C@NxnrZ"zCS9Y4MuP8<c;LhKgMe#nI<t63{SRexS$NlMV>@HW#[bQ6aH//qQV+c9OuYOuMo9w=n3r%jgg8_:X3J14oH[J2be=2d_ka?Jdxwydg``XPsT8ee"0HF5l]wo%rYjrq&g#UfYN)+v3jm/"W)$o3JAZRgWR=^5N+$*r|J;q6vi.<=G>jEW$J+G/(Rnv[Ay^]DO,T#K0VkBLv/I=Jo8[5L|759%o4C,r[66Vw0{))VDzwk|3,GBq1TXPTv#s{pAO}&#HN?T{J~4z0m{?eTazu)G&5.f%{x?WdM9ywWwQt3~7;wNUa5Fy$]NR1r99]3a#9k!]v##@a+P=b#{?2ek&a2ufpY~_bpha>Q5|rRXZY|o~Z<dKxu+VaNXP&_@~tHL!/ia.G<.%P|q7,usv,QhYZBAM*Ex?ZB.4fa718kxpyG.cTX7ys#0AH~V+~84w^jH{MvUKIj^MZ>k*(R{>HnoyV4ZH8jq5|Xe78emB"@7g!>)!GZmv+yhP?6XB]!$nDMo7P6IPFBa]?Rpgk{X7Uykx^a7)0<_m_s,C|fupR!w_Dcv2tl7HN%[1HuFl/t>vk:;nW<GG=:y0T1_X5vxihg/22B!HilCPC]Z_lvZQ!y/oJ)=$/`Tv+ovCm=GS#3VMF7ydZA&_liUj[v5yww+^cTAU!TV(rjt)paZ@E_q7M5eD4y+E<OuWp(rUaY];kv!gw]&,"D+ao^axy%3Q^~6/znV+6T=d<PuX5raD+`_JPq|iQEW<1fHj&0NKkQ7X*JA7fNsFLmnv#KGU_q>wMgV,_~v/DF`KgS<58YX,!5tqq>p6XHS<CB5zW)?61*%n6h<;)C@H".9Vu6m=`$vVhxrd3)0B+PS`!FLQ}_syI(p90^dj_5A(:jP7xS1L;HPJ@jPjra2?tYXoTZ<xaR0oO4xdh5ceRMQO]8:gs;(]KeoK1][KdHg~O/v69H;[5VY[unx;j=}c,[$KPy!#p(}oU]Y71>twsOgY^{zTHdHERIx=2e/1ssK{,y=7fS?}6YK}N{%+Cei9w2Ky8I{Xy3YV>)3JT{VpnF}GeoIU&)3@tX/c)w0LnEdYYt<Kr>=V`Y5v}YntUfhd)ua(E|ia&[@ZWpUdnH*"Yd4jn]jC8$13TJ^G&DlxIeCRO{L;+ByD8BY6>Z`<+cHg15btY8MxK44>)^Y8fG&9&yM2]Vc,?5`<9XOkf=nA]`V&sfglWtC6Z;hR,zp@HE2"NFfZZrEgfqe7F?E33SVXZy}a/VD<M`c*jO7BMMZ9emuG)Qtb=#qC~uhV}0^a1HRut*%s&TMLjzTy^@Oa=vGq^#8V,;@Wg^Wu4D),f9Tf#jw:#UBr:>KJzVVn8$x$gw3sEk|G&Gwt6g~aeW$KP6iaFNDL7n(*=b2seW6^Iy8@74jaAB=%pI!w`,`G}0=iNL&KP:fi!O;B5mQEUh%h7s^<Q&`faP&LUEd!6!CF/`aobWSJ4QBJ1;$W/)"{:rF|0a]?i^R%mc`MKSb}]q8zmL:}!mqjoj~nKpm9WWGX}XOe!Hx#:ZDIED,CP4"w^t,{VaoloH3mDY2p+76P<|Ch5c9dJ,)F.~#ROu_yCyx=6i?6AZh;9]vamD,9+|#Zp^t<W5b>nS]6zj1,y7>U!DG)_}H?Hh(KN^s9V5p=^RME[bZy+t}4nxmwLId#Q4$4huTgrL!o$|+Mju}E#aPwA*3v#8TW2Kf}42"G~`&`8Li0c+aKrs1eIuWTM;|@%hIdHc!d6k,gsk&h0NxkfpI=]F*TA=$!#++B;[Uc<mr`_:tS,PQ2OI_f5~V1>q6.nxWIQfd|HX@hFiSI!3+VsWKQWx!;61=L?XQG7!2<*QA,OnlSZ1Aot!gc|vjj!&b==y@gH_2+!A?k@.@^5fFv7if&`@LIr.ejA%9/WMl9SN9(p9wn5)S&&6ZOWCp{g7wR5!Ja3s/N}Gw0q|Qx,<}[tG4bjUIZQvN<xVbYwIdhrFJkvrpL"g0PzrC^v{Q[_&mh=vg5d1?xtL}+RN[|1T/f#O>s$wQI$>De@|hb[m<L%+E]?WsYnz{UA;qLyV^I&xDfqvYi4QI;M!Tl]>nuN6&7,^"4]DrF4wJ(K[<`P0r&%(X]}dCzfXk3vZ^d($KZL`sT9"fU;[yxq>ph`jsxh#*Oai|1=4yaaG>d~9zH&S5FyCcJ6UNLM[j%f0_cOSF~`DUKJ8PBMnjbIy:6UU_Q~$!P#cDcA!!=Y;IE82^q!wCNIDPNXqp^$xE:7@/J&m#dvTD>o3jybj<p!Hr,9Oc/DdC>cQi@(H(nrD&LjCC]/C:]oiZ|7qI2X1)3/%z>f4E4f8O+axTk&9:JlLWfh9."eNxd6TP3*=j2>Uz:sg6w~wg|!3SD(}k;0LT+bEj}Pd:[Ib[.M2Y0=^`RbUdoJOsgGh,a,}a_)gqaUR+D%G+*zB`}~xq/f*3DreQ(p}EHh0WE>~)W_lq1/NxSp=66WBGSV!6&Pia38^3i9srqz>j&*R?w~>A#.RYy^qE&h(j+|tmWt=8<L(}"60[<_9IN|5B?UV$.=Z![}L.`_*>B^VdG+*V,sbwak[Dh:t?gaP%Kt:D!)$q=R<FS)%?}3d1&;mTTQd6^pCK?NeZeEq/uG:8ro.m=&dB8^I$`Y5<s3q_k#9`*)JxMTp:="V&+vo$n@CCXcvb:O0ecZEP;2&T^W)+@[SCfIub;7Fm>E&SNI}[iLk!vM|v|1G7@/j:POjNKdslSyc3gy"d|^>PWzL,sQNFRzm:*6O>9N@lP<?6"CUDqr|UdxO8xo?+bPlX11`83;IW@e<%X37E=xRV;ITeg!jp,0?0NL0?u]o?9y}m:uCn>P_|R[}!5xr6A~pJ4#BS5}`V*m<lM:#7H)=j/$&tFN@w7D!m#jE]"T:;5W,maQ2<(9MvP`j&f!dX1jG%tG[fYGu8c+`#^;0et`1G`%{]8t%dMbcdGml!I;8gfGG*"HJ8IOkX>3XQk~{][/Vs=XmDfck=M?~<P"FZgw/!S!=(;zK+%<YI5w/nz.iw@}=qOe=}<)zPvaqx5+Zn*TJ}TAE!JF+K]9g,EIU9:/%Ssf<;ywD*i(~[9iJt3s&Ce9kq+C5p:O`BP>ci4(=<_Zr69L4g9l)YRDQ2jHiUtn^&J{RVFZZ~@te?6t<le[B:h{C`K%)ugtmVE+._KUHJ>!z>O2STRNHzP@:)|iWFlqs`*)N`ZY""SH>gil=[)7kL(aPK0fOq&Wu]sqt6N6f(RWZ<_Vo^VaW:l^Kl@=i8"T3PqqaL^;[SPVHT8lRRI[Hv2y$.,{DhzQeL5u*)&>jSZ!XD_Gh:_Zyystew^yj)I|Citm1,d+NP)j+$UV.S})3k28.&h?APqS2+<%ih]Omx#Z/@NP;)8oCZ.zm"[]#n|6IK>XEJs1at.V[8YI$Qn]qm&/TfEt0<p0?{LdC>mdzEc(AG=`7NBr_9%/IRa/k__[hFGW^_Yb$;Y8dpxOr*$H)MX1osJ)`=DhJ>VX:EPkbxh]Y1^f0Q.9<K~>3s@)>Y[~NcjX$Alq9vHZK]ZaHO<pVX*_U0F?dzlM1@mQ.[;^bX:P{11>y8KzBnVMJY`tV$NHs7`9)/IfE!_!0"[V`:tB$Uw*Ga:c#LQg5{$8|:FKz2wIqf0XXuhi;:7>sm$`0Y8h3cz53)0AEXefT#MmSq9LFMU[?yByZZNn9C@1NjGHF^7$q?wFL8)bVQ6sUa*8S{$2[paBNttMIKF|t@Idbsh(Df;f}P+R]x:hTHju4T&d]>,)[UxLPkD(@r8fx_*r}/go53@klb]L3_qk8C@g~jo^,<8q#._2!cZrUq+bwiV<{BV9lLypthy]Cx*q~b6A/$n[d=bjUiSk$Xz<f7Uep0,sSdZi+:E0v~:(r`qp>>Di*rdSYJe,?;]sy^e]G>#{`/5/k(5ElP${%4=(o]oFrh<G@CG768Xv=Hwl}Lkt%Eh<:@73*Ed=J7GHP$X]WCI0),yKqnFKxkHmHFc|hd(sx^$B)@b7{pO(i,Re0aq._3bkZ"eW4H"v]n>Anwy[=FcA(:=+U5/8:Ph<IJm*ee9~VXniC/$~e+pnn8IW%+[$x47L}jb@6*~iF)!=R9?W<`Xd`^&gd#Vj[Y!r1hRJe[sa73b[5c&g[EjLpAN8v!L7v{bCugf?n,oI`hOd!m3<Kw=+BJog~/4<JHC9=oKrwY#Szk*>AoQxL!1u]munm;:xIvWg!V8nq_koJ0.0J84~qH](:l8W5:Q[3nc4eD&AjM*|4CXr"wWU<{:].u:b]25Qn;w=+|3T{NNrQ2IN>{*7TJQNNY9o%;WY{<xxtels.5z_}/$7|}><t!iC~Y6%Pw,BRAlr@B`@$0<>E}m8+[Ps7GWV)[5x]=T0kbAtC*<f~snZ(j[XBA%YG"sE[GWnt^eo<E0k4Uw^${/Vw6?ccFq"">KDiyo*_b]6"W3%bIE}L*kw/!UI,IYi`oBX6r"(E?fs#W=ry)SKG9~,fJXB}@imx"STNJh8FPk7wx2c|uaf<[4>S[?$5M#P/2eL2t33GWkB!G12O=Xq#qTrA9qqnxD~9%O63g5%f+se9p7aC0IaJk[|GHQ.vTdYS~WCBO4,.[~/Y9[n6}=l}~`qnzFqX5[/NPJ)*N8=P#!Hn7#(m&^]fsuS=VB~.juQd+Tr6Ufn^Lt3!}K5:1y[!~s^d+2CwfBj*<_9G`c#!i>B&z~P>V>QfI5l0[Do"BdLvqP.v))<Fo^>MjC3B4]KRpw^>%Le{{|_/r:y3,4x!05vwZ]XMrkXVez<t4z)FP@C]RcL?2>@;T6iIR<Ap0wE&/[vi?}R?Vd!w(Ue~yTE?:[B,[t!B#0%7h^<cNw}~Y/J)V#afs_2zDG}XsPtR&<Pf6vzisTUjjc{:uQVMy3gTw}b6Qr{_.^4${90@NEcnnBpFFYW)K=qLc&(+9,Y>~Y)ZL=l]!zliF<0.we`KFv(v8.,qR#)~7G3GbGHh2{B=RQu~Phl9bW6|Oz|b;T#]hKK4UWk&YPB^C<3^9{)O{(m2))@HA5X]K3/Rt?$nWOb3I9`~lt.mDq~S^@5}i"l7f$?HL9Hrx4RI=%c8Toh~UkN}|Bu6;DUCt_o(m*G*[#w+nWn[hi/U}8tFZ{U^D)#fWQ?QMQlj00!r>r,`j4!iA#=)Stv,%N#2.&Y?_oTm%2UEMOc)5F<Zf7MN5[8d>0WCEk/QFYwD+{P%z|:ZzoV<2G!~rHkj2`0qxRXBv+g^V6ujn(;HpZ`L{D;IJ.n#S;b5g;BNrKPzs8no`]B"XhuO@*68@Qlo*lq>]a*:jYN,.s/!O!w1o2wi=gz"p=Z+K^%xuxS>^vS/=?@o!R@M@IB_<!W^0/O|3TamEF_bZ:cfGS1r[Z8v)H#5KeTjV6P1>(mEyHw`0Lt7<+;JY>Nw~Ef5u;+ih:.a40Wn)RP_8tQiqcW3?t,5bGIu!3E/s.{sS5LY~&.IRi0EQ3%wis(QU8Z*#U$EQCgfu{:r*Uc8aio.Wo"FcLdIw#%|G*R^=[o*T##iimQt9kPX4}Ps]1p,,^"JwzhdoI/<R^rG(0Uow>8)DOU|8W=fpbwL?:h13I*Mssu5@9h>>GxpQ|XE2Knf{Loz{r`YyZ+C]iy@~`f)ktR1R+HNbT"/3c?~L|;R2|]y?99q~|ePP_n^^KA8Q}"DhHTW;vjPSrXfd1f)u6<@y_Aa]+fzdwC9V`W|VQ:!(ldQKy)!5!u/P79~c6Yhgo?<V<.OjuDXTUN?0n/jj_Ys`<h)&[[fsgl2D4PCK|}.u(/nez`UE,l?C4NM[2".Wp4qWi;D!:z{N$6zQ_;puC~+twZYDoEv=n_@HaVK~tM&5CnScd;3=_|am=m?L85l[vy_h%M.d8%.53bJ;VBJ/<ueL.uSGc{Q6;QfM7rT|Tzf?0MdL/kjnIXJtnz`518yLHgfw&5i)99zwg".x#j)gP@p^Jm72]:*,qc1#5,j{]^bD&K#"+IRBa+&Jo~gSb,cN(P0,lL]PLL?xhR^S2bF4h^;e5]dE7VsR=3SiTywYH)q{+c*FL~XyNG!4sk_}rRt?Lv;k`19k1@J5~{Ct^Mj{^1aN~s@N3OiWGeVX!cYv/hLvIBY3[A%%|W:vySDd&(O:TZp{RnaXj@ki$Nb}z<S)y0Fw<:p"`Xp7=[bLP39P^*H(!/]kZ}YAr?}__h5K="gqgUBV|{/ISYJU8r6&n>cW{*!47#kSp:!iiJQNiDEz;R`3~IvrP]>.r,cRM{+7XUNvTP}Ov!9Vjx*f?M.i_s&S47]taVx70:/}rnT1rpo9En]@oq2O6]#`[t%5#J7%5}[U.vOZe/mxDa674oDO9e2FV6Xz!TuyaLyq<I9j8N_}Fg_|iSFsX$]IyIi"d<.p_iU,OYm8=+ETD%$JgXmY14>0Gf</PHJm<w#0t^9"^|e2rIVT|P446oFJp`xIVWog1[RUNbn*=_Ob&M.<W]/p{KY]<oOm?To*:tIhHkU~EkOqr$<mB!rSTZt$!vHOaqZjkPc2Hu_zE+8)f)Q:)qP*G)j5xoH4^}]J>$0A01?C`^ql@f{;OJK[2INRlZ]%jz1VWarJybz^}sY^E83v.}j`nySz9qg&Q>z<^8XR$LcMo"vCVC:aF,[z[buqou.^@6;>quP{IQM=J_YbxA$Bt${kzE8}U0vh4yo*b:u?5k,|Nk5;})fp9!Oy#lr2qu:I6c?,e|UlS)k1?.~)=``z+U)"3im>v[PIOgJdS)c|<H?B$p%RCE)1|nNrk6;[wH?oRay]#d_4|uTO_[0?G@qrtqv1c#7&RWmQTrfH#/?y?Gd:?sQM?/E8`&5"a`<~`*~a!|^+$yZHw08,t4({`m5"4po|7P;8|jFJZ3.wNE`>[neU3u(Ss#D"`PJQ/G/Y_Sm"+PbIlbXhp=j(hu=D"VS"[e[=w_y7ShzcI~xv|BEN|nt(G*Nt_R</Z+>A/hlq~("QS:fF>A^{.ePbZbr+6FSbFknsVt,5=/9Q%ceG4I|S>N<n[N;gin8EVkylR/b#&W1(QoR,DaTB.EB|(#BzF3+OXx1k^+4?j}EE8<B+B9sSI+g5$:>Uaa.iu`s86HOSk8)9F0xjgK|eZ2hb|,}r5k0zd$41sJny6G/:sLwBN5eNK^$Fo.hB@Hq@]r[(@x&aC/rMm[90#Pim1x%j+aU=Mo/&kRfsRn~L*e.R<sO?c=l$#}oz1lgJz2.^Ig7D5C)C#E}Yo!p_+ExY&0;gJNhH"Yciu50R,oQd6|I"&(0yK6fz%Ra:c19jtfLx#et^)K,p>/VYa8daTv7hT[g$Kd,X(Tg}1oj68s`H7m@hu:?d>O3``#P<^m3NsrN7/e2JH~)6Hx3*S|W79U_ZVw%oU&oE@":8c$C/|^eq}(t`rX6>}&<4V^J+Ho~qV6L:i^dMVyC.(s3}zi9%z2OC;kGTXLd34z`*<Jh2N~)f1d7*6,wm(kNSMlfL4;HKMSF`pckalFW+{c.%Q;8EtS[P#?RyD+nI)rIKr~>XD;Iv#tD).=h%A&mQC;"E]Vh>/ibf>x}TfB2OxQk<|"3gb.Pk3$@%C9iO[.6QQ~2+[nC(QxdxE2jR7&}i%ll26avc)&<mGve;"l)<IXC@wK~lR/4(W${i,)YMZ;>O$cLjM5G!/.zA78eHtBr_ny]XiLoAn~CQoTW,Y?.q9$OTdId:ADK&IJwRSLFNOOulr,VE/iX/B!x5+AS[}HJ3jRlm<Tx`M)1u!5OIve4?>I:kO`gbP,7V26FQLdkoP9)jDHt&HEn*}2BFS}=YSf$c2z5GJ}bYEtl:tBS=lnqMp{W9Vn>Am]?_M~}GLIV$/,ZR~!V?SxYpWP7[EzRO`(/jX$X=x)Xt_Yh;Q7CG!*:N2u!g~1)q|r$9m|W(vKBr&i#lOg?M6/Ti3"`Ph%)`}W}cjyEg0?Z3=iIIBtJLx0WI#[wVWR!z38c"hlugYX;ZTsX:}gx=DD2Sl35xQ3o6ji,$MZOJ<W2EB^d.P6x/)KPZY9AC"U`UH&pIC|P6fN#|b.Z:lbFD>CyS/*IncR2]5aqfg}QSo0.{)Zv]n}vLP@Wd^ddqi{.F*xL7^1kJg/MGN7Bou49!kdK40f(&HXOaC.<B3Vq%VYX@HKr6@EfY@lc[qeY*2lL^iC:jEJL&VI.M/tDzAd&!buxsA]6b,h@Y%I;g)G0e$jbaV^kH#jbBc98r9yq`;WI0dI]Uj.+:[khnA]b4E3ziYU_8|=i")0>lMfAH3K9eE?5NuDW/=hpapyN`z{7=,"e8ADq^;3,ET>muq5VwmfDc"kw:~MpCT!harPs~FoIP+iTI&rwSm42e*c"f`>WAwsSMHntIA5K6hBgL!u`$N`=iMN{VOG^8H%F:LfUa/w)N+L`[dGt~[TF[X=[/XI9}zkV"4}$I8b?7iVl5!.JSbKz?jALysX!|~u8aOvro!uKZoKlrEM23JjS+1&[7nS~w:NJ31Zw.g]k*ppnc,G{JuyPARDry<7~crJsToTEN:|+D[O`"=Gw!R7Np0^o`_K_%pvkYZ*3>o7mh)4=cH!ZW5.MX)9T7f3QZ+(qty;(gL;OpLFtMol!6=<t$"Apnc2[HTZz<oRI$JH<Fr@7a[~j[pR@0O)3r"g&KNH7xJEPrNSv`+<_{$,U#^tY"cINm_Yu"_OE:<s0Ma${zIvi34kTc6xoaMCcU[6T|T8HP3@E"^2HuoF^X+.|c]Nz2U*^Mc8Y^||g5199!.(E,dm|sBpe%4N0j^?~"f{_,zWEhyQ+cS/8?O!I?m+H;>0/H&mwW]{u:+vxwFh$QWcjJtLA!VAOp8PX.(=vp@VbYOG@|1v+OSIg6"Y)Rz`P_U+Z~+!<|Ik&,7S|k&^1N?I:k%p!/aUY+=hle+>A)CQ%#QR6`:ov*TD;Gpg_U{_W<.1:+W"~~yKZhifUl=6pFtaJSN^yjlM607"~BG9):FBSU9)>6X26%x%B~toki3}.h$Q?$<i:b8FKj~"Fp8wDT"iuJtgf^sI/CV%n6D`$NSJ!=?+vdxqs(g$,[C,e+TeEkT~}%z=HYnioz#gOvCF^=L22t36z7[.MtU:S$/j?uj/{<}U+G)%Mo!R/<Vz`~OhxX0SMP43pL#h0RG99a])]kv[WvF9U|(C)?hxu~$3mOlUUMV=R4cIZgY<G>&lk3Q<!T[X6WJ*s&c5chuZ(OkQazrscn;NJ@}+9,{xR05iO{`P=IU@y4g0|y~z,WOVyv&sY%&y[)O2JQISNN{v0:;,k7xL+}4P4o1Rs*Wx.y.r#K#w=9+V>p=?bCVn98+{}"{vkzd"6KF|7hTej><u1??P;BCWMQ~#ZJy(oR=3u.&2F=9$Vl<L[cl|NG>9s"B0<3Er2WFiB#1~,WKYj*~Ab%g0O3b`Ju1iCk3Bf4P2q3^^bjm#c)w5z|!o~6!]xa8JKwZv3_`h^U!7|zYM=+@+QMgv$*q<FC7*Jg#*zUjq(k$"3rw(ak0m?LLqg]Ss7+0m/f&]mdt#,J8<]_I{WM84i3>~QC@(HYPAKR8C<)XA.Rj6|})Lt)BJO8)6([*>D^&)}GOQx6)f<|,t?t57DJ`[n>WOJhl"C>0uH?x+X_[E>e%lE)yrY5i!yja})$`2r~4K^F.RaVlD%1%j:RKjyChR]L=Rkej4<Pk[fzK#JtG?4"Tm9Crs&dErPN:]YG6pz(RRYw4hg}&tshl#T[c3eBu&dD#7J;4AfX!_eBb),=^qqmz4P`C~m@2DZM`spa@4[1MH1^w43[wP^Qti3hh}80ON!%0uE[ssZ!J8ZoX7>g+$+3Tcf?;~BhEO_r57(kG;V5+EgJ_NN;?fpyIrYNy&elD.oHC]x@&]uy@8DO@06{&NjW}[{C]N{mp3"6YUbDV"E~apYbl$Lw2bbJfx#3tk+qPjB1.8#!k)=u)d+U>WAh_]B{~]B/jh.>QkcXXGq4KBw[?H+"{L=@[g*$]9{z<ACoS?HSlMfhik=bNs=v{c0IKj6PY>ta7|b(ilccQF*6aQD|vOT68%WLC807En;o6q,cE]93dsQm6S+cr5?w%+1{l:I^3/N1ec*5IE=Z~*IlZOvsey$/AO]tz;9w.4V<rB~?5bSkYw4L)86!b5>|izLLv,:;WKX+1vJ95Vo`]:ztzL$HH>oL)FE~(oamh38)zqo}g5@4>m4RBfAf>X*SV6L`n&Yy92(Ot49or[;I#(VLl]J~6m6+$/A7xfzNyc|d>nE[}*,f3@$b{NdfvF&I8#v>T*=mU(+G*JfXj;jo8OkbY7X+?v|wBBP>I*`BbOL0r_:If.3WUXg7m$+La4R4VpVAqa{WSW%8N<mfzmu7F0Z]/+1Am>vXq&G3T&I8L1B_225w9n6qO*EPi3smK5X`E)6r&@LXUiOOKQmclYon;%P<6T@eoL,yF3B4`tM}En_A{@H*lo7#r`!IIum(Bhz3)?I#T&G^<&m8#oRkZC<0YIZ)HN6;6NvA=,X}b1m~$,Ea~iTR;g$1w".^Sqrn7o$pN4^e&`b`V02XQK39JqbjZX:va;tlqT]aF}Gd80C:JY0Qj7^b^SF?F./o^^NOr|`rG9y;Ty*oB3NDa8hY/i&x3U``q02xkvz;.|^jc6yV`wtKa~7MEt^ePhva9h)]PG0gl_%jRHc*hAJ*LW{_OhUyw4aL[w#c7lOP~}w~Kyu,gJkD?MkvM`UkM:F2^PB#iorble6#]p}vgXZ+q>c5gt>.>7As^sU_DkzTDI>V1UdEvI8Iw1fhut11#b2!6%nfx1&pkNdbaq}=o_i1mbKnW{PQ6.6o?3yQ$S.:t2Tm6odfMbLd/+6bDjg8+bYsJt89V<rCeJ?80unA1>W`2N^yryp85zSSr[I*6>4rqIXa!l89pA7OT7F*[=HwOR!b,V}KvT%Db&J~A~E$&6:dIzd+D(W}qb|$@7i,uF7<bb&3bDbZ<+WIn8^tq}?(<>tCgvJ>Ut^pglLn5WVCf``(SY=mIiz/h2]B^D/:P{;PN;15e^Nix[cwocT<o/7)2UrWgqTr~J_t5jqm1A5ZR`c:NFiBUDvoT5@qG9tnbatif&O3[31j$VBRP^[}Gv0w}{c}Dd9[[=V}cOj%X@n]HkLILQi&CDXT7s{F0Ny#*n/nl3nv%sxAKBK_i^(6bpxu08FEG4+dVEU6=~q.z[s7RG)1];)X8g5%p$GPdQPZHr8G|83z#1C>D1%u8)@"IpS8JUe<)T]?yPF3[qJv(Z[k&Lp[M#Zd5i~%sX&dBlGj4T@Jn#zI:ve0cq:;O0jpARuiFzDYXVwp#:EDbJoi,:P2)<j4y};m}bqrk;?^rJcj~Qt%){d$5;?>+8@a~ZZasec;Ez*yIVB+&M!qnkV3hg/G+P}(b:a~bH)U]m.`m78qNTE[;#|Dbf~oYC,OTh]UTS@h:ep&TNBe7}[1?{)w9*9L$=SIdRQ*2]Ooz7>dz8<_oTx*i]+WZ@2hGTDGa?6Q15}oV^mxnn>FC"b8!I%oG?bz5iEio:`?bnKHf[H]_?OR.>/Ya`tJx@#0TAuI+ALsF9tbg&?k,~bPy^6wmoQ2MtIpzZ[_sk;_f[kZyWD1>>pX??;OwL/=>,qnV+HT[0/zli?.jtSX!6T|YzB:F>t|]+05NTw6t;5(]+^3R`=niUsjQjQUjOg4Y8Kc4d!)vuai4qKCnY7h>hZhf}(gu"A35#<:g4{`<8YU@V6|x6G)3Ppu2h<hZM:Lw^]b*6zyjFGjI78:Ja%OIZ_gI,T*m(S(BlMh{LOqqn~G&#a7nZIe|D0iMiAl3$a4663BC<&<.Ap0,9bWINxAYj?Iz&XJY?)CtEROom4aE}ZqW]PPeyvG9OT0+K3[NRt5[rTbdmX|heT0/|.3El>$B~@,TOx35rXyYTw_7.k<DGHR^(*xCe*%VfIa?U0tcvNkHAf@U^.lL0nFyzb8T%w~V(4.~=kWm2OE]4:O$ZE]M0WlTF6{qm6A?"V2by5M;yM~4ID5V/Y(ut3t:bH"0eP%kJy)Z@!Nb"xQ<P|9_NXY~Zegx(C1{Tg2~x%T|C~ofZ??ad>G;5s:J+Db$qRs"!nu}/L^v]tUGn*aZ"TN6xp}U&/T~dZ,J8Hw0t6vjqP&S<Cp>[cnO+UYNzP6/);w]pY!pd`;s2fXRBSOBn?Y>%fm933<=Xn95H$o5Y<Xm/J+}vVPQ%!.]Pv*k0$vKr+P9jJSj)%!BL/Kja5{iU>WP"`^&8F0H}_b`A/K4lt&=#2H0+s44/;URRz8jtl9*16)[Rl;#J@Fb{K<koVW8"hu`o=Zoh:NuUnz=wH]r)Pp`Z;TzZRb:wm3U$R^HhF3,F$96rS=+?{]5"h09lf5;Ol4CKmWZlu[e%ZIG@G;D{,YzZa:UGPZ(V]b#t9N$)h{v8f<E/blLfzmYy;jGD^~`LeQtv2Xt6%ss^rG56/HbASRv}Ki.B[.XX"rC|D,Sg3UHv)12$Y87!8sOdE?vG72NA&u2jEU&C*{K5"9oAVX+9IQEC<g<{balEWpt&?*%aOe@Ap?}W*wE#71@[]=wd5=c4JX:Xg!l?HW;jnd_QC7.QG[U4H@,7O"gtk&p9k2kDB!g!^u*)dwm@8^V^P;D;ndIY7tB)}VE0o~Lig6D!+?4`EIS:&3IcA%/frp3qzzNnm~Lp?lvUc(DC"pDaKi({[CR}3#p!^"~U75U2*+"eQzk1hxUmHc2d9+)^IFUX#?$7Qbk=ER7%j.N]2Xxn>9Px6o;doBEUpRH?n+_f|{Bd5n0Wbz1.?1uL:!G"U5>^uhEo:Op"7Jh<19vb.`|Xc@C,bdZUh`+B6>].>2PIzJGV(wux6;h^a3x`|>sy6uZ{yh/OMe!:ht]qDf3p}c))S[gRafaJ^I3#6V`P|L5AmzJ(=E02#cvy,5Uc28&pL2w9QRmDR<CD&3RVBOKBost?vYz}Sh6D@r%Z$f0q"PQ_1[L0obj<9pp2~v%J0VvK,y{R$":N$j:m@Jl3l)yNBX!!5(y8<,l*`D<2kL(Tgr92|ic(M74=3XzA*CK+7($cXt<1vF){o{^QI;<pJo?U#;3NDG<tfcHx*c{e+|~Rl=F|UY^Tevpjf>o/0n7Jd(7xodJV:i7>bYY}Wz9siNOyr@X(kS#sYJ4]7ZD~t7P:GOwG5FG^O/|eU{|_n>#s^PO8rC>RG13FmLX;2{bXfh5&k0i_/`OuG5UjMU8/gMdr|HYDTq0hll:4{%F]>f,p;;3l}9KeM&ug?_KxUVFpfp"33w<^azEduQh8nNdjJ!6U>Cu*%<#a2BEX#_.DNC&;6n}kVrDsipPF4%T3,@,v{UMvr]gw_,;qpL1MzLJ,H>#Wa48]e?Kla~*wT5W)Jrvf7f5xfpe7+Qld?)Se#z9qcBEGUl$[7#jp^!rvG[9h%vdINdt@FVhEE7%ixA;X!BXYoZ?k,`w4#F`fydj_,>#"(P|W{DjZt|3W@+kbQ>C^+]vB_zcfXboYwl}1gJaYc[L,J#rmKq#?ag&)Y.$z#2yOyWee{7#8/FJu:{[{;+^9B]DH8_~_*PG@]9Mb1A>5P*s1ABShw:wT:c9P`3LtFD[DK1;DPHPxmD|nYBwRoS/!F#]NR|m?n`C{|*^,_12MlWG&WLj+,Y1d}1xV7Q;QtqQ*@#T(^lL_Z+(]6z8CJe}oL]db^(p=R<n:>lkgAB<0#^"jiORn*kCKB<gIh28x%g5B)a>B&^t>6NfjbCi4<MKNO8796qs^xK<{*F2_dHS;{Cmq2Aw?03Rt[2i=0JG;N{{|VkZdWf+7`a%)>Bj1fw,~cQ0=|/M/s?nb5C}WUuUwu+sWePS(xm6gC?k2EmlF.#8*VnF{=}OrNqZm}@Ft)/;>k2s)o*`Rn0^gsp.VFj._B0meGSQx/I_(W&^DDN_vnQwe:A|Aa2nr(8Xs.T)N@y]c>EjW0:=|cbv~6xp4.f4Y+i+/70Z|YT$L}`$JFb4NExp6h!GZXn/a(WKD;#d&vMK$=9rvpAnafHNT3[D,JayOnC;hEq`R`)a>9iyxjjdeTvK4Q:lO8A<?j~,s`;S?(??Zv1:N~1c!+|iC`Xd5l8FCrYuC?[QI~~^fK0my]"[SSvaBeY.S.#V}<?j,R,v<ZKTe$bADBgP]0G`a4N2u(A#=DezkL78@c.UtZKE_17xS2.,0FzBf#dn$a}"nM,108b7OKV{,_Q.iGBC;kHS~aPs]CyL=HNDR$nPU2mn?EaoYPx>4t~W+av&,)~$r}>{Nqi]28&oE/~YGT}G>rc>Clq$f}LfY"nb7EKiW78j,w7>_=b,!qG"Iloi++N5lNfST[<D[]uFI.nr+5GCuE%wlB4bFmmR=[!DdN@]1pRG;41o*Vw4*.Xz<^6hZy`4LS|8wqnS#zxRMX#>&PDO#72YvYLG0BB(i6aEH3!Jzh_`sA)/l]?/$<xoO%a1ws`M?Hlt8?bt.}Dc>+l=BT`h;svJLy>CzvPm=/:(Y}qbxXK,rji3LXe@O:t@54,0?en$Napo!B6@EGp7VM<wP%C#&NWD)LrX=mE8+2!>52q4vd=FZ}N+,{VcA`ux5t^:"y=V%G>oZX/WR*d1rB0jXroD!My7[ykeTVw{QKeT;LzgHAo?*DF>3NPmrTx)D.GL4&:uF2xIjmJ[0z/<`V|ELfkmh)e#~dY0uX_;nNG7sjB%GoQtwMzoTOCyDU+~P9B=~Xffd~"iP<ND/J_&$8T~_SWd%3Fz**A?@5wbEJVtygh~YAc@}I$h6ON?Wn;;V0].}_%!8zK~p!UUx#0Euc<M|Fthl<LMn7TY4VOH&xs)Dnv&%I5`{zUGX}Ht=$_JZ7]Vs`s.qAh@|b_RXa0Sx%^H><|iF~643G91EVa|{.Xd4cqZ2tzB%Q!<H?V4*}V4ide)U<em2U"Z]f(=1z6l?4%4zd4T:n~h7K0NBwB$2DwWaNaE2k?)Iu$"CzAT|NCw%hhlb;kq^$T8j]EPWmAdkAbf8scJoyKEF55kez(&QM&e:PmKB:="*Lv0;V|a(eLml9}Fb{huFG*n|5DZ[N}Wq_s,JM@rIxitUGq9~dU1MdF9ktKttT{eQ%jROX:{q:F<7pU1q?%"tK"v3eYWUl?Ef{c|a:v)[TQj^g,ZM|IS_2i?v$)~N.{sTIMz1Y?5lGX!JQvCA*tNf?K$E$B>s>9zKPM`#O_(v+!y5m)AL`xXzgmryXU/r1IZoIFvMvFU~RFx9*^+"I;]BtFln}Zf[eL?WMsFhD{Gx*KB3!.lsC$%$Yt/:i&cUEdLWlm7uaK6nxo=|G|i16YMH&8T~lR}noZLCH<4syXvKG{a2`/AzJf#qx8z6>rfwLz*4uXJ+5dr$imc/M"(qH6UYw3>k^|LaUT3n4#mi$%YlUJFTyXn(!@{$%@N>Qn"Wu3RGC1,bb:>!m|RX5k^~vNO6>0E3"P^BT5<4!<)OgFzB<Fy[V#.>47q47)yZ;H[e>ma%2&UkM+_3w_uMuM5C#PS/N2+_o/..B&50q)suze9>SMY5c?;EbX?d)D~Fd4i9]4d)IJ/br4ClDX<B&"q)w>WSx@G.qA[wGc}9]mLQhHUa#=_4O!ap(I;@&i@HqPH(,s5l!3z~tn>AkK#?9Z}bD.jV<&IsE683S_ca#pf;lvkU,HCo4?qP^$L[~;#*,Z%vxm9@I8Q<XR+b1?^&/ix6%NayK?9"n"=J~n`iL*Dk1|9hZk!SOs=@d"49gFloF:[?Sq~#_]v/a(.X}?{zE3)iJ}?{tMUB!&dwq^/JNvII(n3_kYS<H"aRJ#?KLykjT>kSf02wc/Zr$5Mq~OQhq{H59Alov_lvj|FN|*49i2.G@;;cjx8[%gtZmD}CKgheMs(uXp>9Q[pw=eKMNs}9C)$B4eaVSuw]e8TE>EGvqD:zFb2o,.x`{g<!P#d*<p67y`%]wRMTN:t_$y+mdX}XnJnhmm(KDLP|z<=,31*r&k6x1.%p%GQjJwwffI50^B=(#>K[D^mY]vwQCt~ewTB<55EXn+skg}`[Ebxp2ih"}npIhb<O?wj^Ydam9am(a)Om]cdl9uv%Z:<q<j18U<pZ]=if|"Jh/|_%JK4B1[y&~Fp|k"S}!+I#XbtI:88R"zMT`xT(eNYH>6kpl|7Z:X]Q$?[xeM8Z1oVYV>urN|.4sLDYl0|}6)}"}Q&}4~9Yqv29CpVpMS=6Hxz63$M``>=ErTeMu}m.xcxX=2|GrZ9s(;9*`jb2UHg_cv{[L~r_AUYY`VK|Jq.~gbnuqQfdB/H6kI0}P"|l<`}nSFa0>u9M}lE=pmMHCO@@Q>9,[+b)dR]"%NhP^K{j<jIp6=7IJ2WKRX]MUX6q?R@7xINxV_z$Tc@_;fr/KlJXZXKWnd3=VyqNT;/O`Ic2Hq%U|M?7z]BkGR[idLDT@SB5MwmePc+<<C#e!{.aJX9lL^ER|GpMYM:*5vy)rHe=GUL"%P^1/%5m|/fmCJ5`U_OTVf":*@dEJZ5_]`p6]8/tv{3.7a=/XDP79_svh.0kx$}MN(Pu2pRb|Roo*$a6ysA~9E"k%g~$vCYStR|S2I1]0idMz|WcyX6.`^<Mepn]}i*RZ[MLw7!4p)HR47BEtZn2{}9N7<[4ha#Aem5eMkfX,6SZe#(J]Yr")0%m)!WyE;BF.6LFyCutnYLiH%2cSY,IB>z]wLt{Pj=(cdH,v11PJ@.(YTDJriq9nUeno#["LU7MjyemXk:#1V0zq<Jbbi#S?]GOvbne`}UD!VT4_48*pZ#/uh%b*l;?!P`trF0Mw([MYF"T0uVuQx=|:jYq$d.S!vlmcwJs(%6S7v(tc9sk3Q"1%)]?EK8viJs7;Eg}BLArzm,f7D_6SXg0{%k83)l![u!]xBx]NU_*J{,*i6PFS.44`k_Y!]+kGFfIBBWbn:J{vO/d#Z*sfp,vqBQ/C*08.~qWmnNa@`$(}@fd=zUR3Kq;eDIA$DI{BHfJBC"<X4pw~gt{D=<k/EuWl!@".UC.XRl7uaAR3[7k.t%}Z;,ALUf!tMDiV`j`7G>XDpB2Vh[lvC(Wf`sC?(k<y_Fk%lFFLc_4f:6Pk*I2swc)HGNtxBuAarq77.Q1Ds%>71F0~a^zf)V,7QsR3Gy]B;hTX4A7@YPr^c|3a7+XM6yLONG|o,aWokW9#&/BFW|ChuC]~AoC_`P^x@tKgm?mRiw6|`PV|NuP$(]t*P:J[;)TIz+Hf!WzZ?Jp.vtnW!h7,us$%Nd"0;DAMfD%,Xap>!6*6CfFCG{[7rHS6#^$O#C?MRQ:!OHR<D!@yR|1(o2:qQ8QLGbvd)6a^m3UQ!dxw~8pNcE4QrYhNaynFR:^RA@sI&F9xkFR<"{Sz%(r9dB8GeZ>&>CRC4fzQI}+KFB%p7V>s16.+]hvRnr65m=tX)B?u(&8c|o+vQ{7e|6L%<K}y2^)hR*`r_Ww[;HE{pC9s`Ik<wX_D@}z=20pqr9V&)LS%j2?H:@:o+z/vc1nuhDj&&N=nQ1&p1I(Xcp?r3NR_6GE.B1];#lXs(K)|Mkf^QHS!O2X/M[:[d!X&&`DtJ7|3U4QZW_HUWjQ@{U`Ixw$P|9q<gwSt},Ty|93cgw}3nPe<U)=wRU^+K_{X%i|Q#.lG|3J6Z>XuIAcjYl50)ItZZ=._zzkSiIM1VJlzg1_YGz#P?yQ`pY5#u9JWjt{@I:uv3H^B6WQ0K_$n<k`o.QYPD*T8.KOIK5%z.hCEbyIT]`CpF5a!=|V;V<MPMO~sf.F.]B`Sg0q^t"mB$#12azrooX[J{L[Li$b5[Hv?F?k3/2^neT@Z_gxe9Ckq=*t8Rw]T,DRn%zl|&sBLyxs)crUyP>[vKd8MT{nG%[0EFaMho,4B`BD$d|vcFmK@I:)I2lip/f6mE{Ql0Lp0gfi+X+vV@_<d7nxr"KyJo)~q!yK?:GAg2Y&GWJ~_nf{OTSLj>8Tye;J!a>Rx4Y7>wsd%*6(%plCbv$`>.35&[2xR#jlbLMf{AF&z"hllM=?7.pnN^kQpyJ]0!8@>FIYc$86NP3o2Qqu(v`:oR=Xd))?xozfodJ??H3U$9ldrup,N_V1)SBh&&QoE`(>?HJY2X7k*Lk@dL6&zHVv:Whv<l]^5/Rh=njEiWCY3gaLkPr[M7.tL"+p5h.O^Gq4EfH;7kSR<0mZx.7Fs+W2vL]01A8~FP@h@alO1hg`+EEvjz"56mCO$AF~@(Sx$6ujUg_&n;GlNHQa/7rw:/h_6K6O{mD7xV1d9E)7mX]Ijo`Ze7dnXEWLG#?mt:bc<?:^2pU?.urz;CZ@t:XgW.JJ77|&T/l3:Mdo=v3_vovTM>=xOToQq)V.&2SJ;n%Ozlr69`r|oP_H`sK?dmCh58g5>fTQEEs,7t$;JF;NrT4{b4KA`UL)Og~c5PhSTLGnr8AsQ4PM+8^ThrH?8I)56=3Ty5)p>OW^]7?}oGMp>&nn4MK*6Wu;xd&6Vlq!:@=%l&jty=I0bF=yw[6+OiBmNv?COrN?Sx$3H/]PoKKfdIXO$Mw"?RCgQU6ej[,R$R+kR$2(quROYAz0.m>Np*6M|/%mx7`:E>ttP!.$&0_cm_a/IdW:wo7QdaaSEq@g|pHrufy,O:gvl|>u4PGM@GA>kN5/1s(RbY_.=TXgYavKkh(L>uEv1fnkNC"{5J?V"GDVmy{9h{;FpHnblRq209F4CV3g8~}Zze+3m[:]VB6m|4?&uI;.ac]dSH>^6qXh#:v0_A2EXU6XG2L9c59L*(83X2!VM<TCsd5yUnenIA;d,J]TO"E"#")MFvB:*H6E)d,@%{%8+)m5Fh!Q@;&%fKnC}KAyab@0Si"zsy2(BM(,dr/IIhpxYu%2e:#bA9w[sE`8*~>e`B,PdiligNIkc8fq*Ku`[$1)xMq;hAl.iZbm{E#oe?{%&C;|x:(Jk=j.?Kif@X!*@#bW)Dt+@E?aqfK8[CJQY$8jjJMHqdy2fG:FRsRkmr=.0b)_Dudj5.w:Fd)JQ.bO8v.z%{q!#?xKauPJXn,y5=bP#jQT6W/g=$;f&(ZM=iI{262L.TT*Bnq?_>;t}]hE{.jQN1Bytt_>=C(r>O:o(,/awfTnQdD5}V@{I6y8)B,Znx8i$|bs*z{{t8X8H[NV^1fDx*{}lZW3t)m2bGHm?lEbPueI}m$P^>bNIgx$j%|XwV.D|OKi$i@br$741KglV/l9+1m/VGCw,zxEf]x8u8SV)UIGe@DqwFRhMbEZGYDb;Ne|erH%j!EWy0`ey/)X|$qm2~a_0y}Mt$W{P]4i{}(k;&U"Q=e*$A$0~96fI9<=U8ukiM=]u)q4$!Svxqls]({gKZ_8I5m23F3):U"&OpB=3q67FiD(XL7.$qVMa+FKj@aB9y4BO+ea*D<A=T:FyEZ[Cnoxga_c]k`*`yFtG6<9F1V.;qbdRuI?gT*pW);}.2dSMvw5R!uc%{av(x3AAhn00"5F05Q!b.Ri:OG[h=d@XqUb3Ca=ks8n>8qRPaY>>iz,HqivXc!xX0&:C^f&2:36Dlk!I!g38>+~3^0p+CrC,}~bkiI5zI*ZyN3dzTgDA?(Anu*=K1!V/7:6F9FBV"l6{m{v]UeIyyb5F`n"M0rPKS%i(/LTyLi~M,;sDkaa8B,WWT|N`d88W[6tf%Im!y4X:8e2I5tcO`VV,S()y"06<5smXR?uk&,?OOO)h^X|(#JHc,P50]H2x4]<x1!o6Q4QHr=#)ZM0UTSEj]*"<$LIzzoA2O;],Bwa:|g{oB(2XYSD9vBvSta8kpEMhGj_fC%mBHDJ+qwHcH9K0oXMrZl~s"kS/^bL1?rh5E[xDIlIz$cXf}t^Ws3L5uwwY>e"Y4A4pVtA%260Lh/gL0`SYg9*$C/*%1)+C6|:B}/n{6{5+W9l^<p,63`N0{ctDo}uz6EZC$,|W`*lsz["ZQt_EOsYaVYv?E$tC`tx`=15Z0.58)vTv&FvgGU_M$p5yfOM<h%Ii}iwr(MooUk1i>+5ou.>nb}MBO6ft<.LoY{Btb$1LjXi@:/PW=%Cj1VP:J,IK8{;.F&A2pnsrL?Li!*,?:#dhg*a,boKvl|p`:^V)?F3|OF"sVg?01[!iV,S/d`>skQ]C=Gz^97x"#*GMl%cFuODYy!z0CaN+*>{97Xk+{psf~tb,4ktpF)X7Oy+0c[J:ji8<~Rm3`_kWMQeI1oYbQPfo8e3i+EyM$1}4~;H(UKNIda]=VidQ+bl%iJUE}%/^r7,~G*f,Z%~JV_tFj]xR5fyTFdr+Mi[lk/J~a!}Z&fycSM>DirkfIR/X/`}qq^6dHos[T>v&!9On%aTT_gsLF7,lxrZEo7m[+/fa[u!>C&&udqmQ#):LugYQ4xKQjEoEIhS050?=i}*_;,4yh}G$rznGU{R%3E#po~ac=A#=W1N*PfVGGi}}CsH?7kn,fHM@A)`bZ.kqx=EHP8}nSz}+_q5~kh3yl^|b6>M^_u!Lt@c7P`.|mTH#GZQ]b:tU;Tn|@y#IeQ,w_v5N1I|?y|Qc2ylkD#ie}?vnd?k*lg`:trBFf2f?)?(RCN{MBH[O2$~azt5|R{f!hi/$N$o9|Imph3XeGW5@Y4vE?l}m7:V~u"b`2#4@+pckkG^OI%C}o$("iuB]@{+J2V*hiizXo0tdMr5C#R%&Sky~:bo{JfMU2tXXVrfDX4>&nf}a<#k#<`{|Ofw.jUG%VOgoapKbQC!kgnZ85=nadMJ5RXQt{b!0}.oo7xJDHPo],65fKDbVO,,uv.Jz6U&VBEr1kuey_=]RJMHE)R:H+DcMEccDRUx{mX;P|PY=<H0SjM@~:N.r[Xz1gXPoyG)|8)N~}D}mK+SMJMXG=8kVxLcvx~<8/ulHtI=x1FT(01dWIZ)s&?K{m$Sp;Px{[DnYlp=~$~8:EnAk#=h@8];.bLxRCHR(hM!:?Bw{K}6*aFJ5AG=vZo:0r;L?Z]F1LK~GffdTH)YIK=CBbNQlnw>QaB/9hbvA1o*L?J*:[@>Tnvu@aE;x%i<@$CV%yqBJ0&!t%.xT](y1ee.z)$%!i4yDOAU5&6B//850q#!0Zx>"ZQLdv60&bSQe<{X)9dNrKuBQkw_9#$!/BIMjYd9CzkH!2.%MP?a;VrKi[}=k<y:LOhn2/6@Duxh^Q/}e7mWK*^e6lX7wkh]Qrg1r;nG}u@1BK|am^`+xe:aG2eE8.XC3h&G`&,/uTn,R@$@*CGFNK@_`_G<n;{u|$O)%gOQNp$gRbG(.#v6.^T5(I=x^U6ir*@A5QfFDEIn2U[Q/+#D8aQ*Li;S{~l.cm*^;BPQZRx!2C!!_m897n{~7rHvo*ji!Ss>1ibC877,DD=W@Guu#7gJ]$[=A[RVh}$k92c@6MdH1_`D].8,Zm~S.w65N@ia1(^HLl:[>C>zI4C?~DdG`LXo^|yBKk{]9[*Pktnsk/LD.HTtiL"+!my^_C<RfuG=o+fW)`aLlwo"bW`vHRpa)k<dbsOlSN=QGMxEN3)@!DRm#[+Ny+qqQ?iSKY@w!7F&YoTva~.5lnz/kTIYn^C^fIn!_XbpfEtzw,$aSP&n3IJ1M^e]U"]._Kj.uR,}Th>M4:Ry&)?Znum"=D{f/DEYt#^ToCoiW^u:e8Beovt#pS.whRhZIk?2)s^^_Ja@*Zi7s/n/g$bUH}Jo<|TKe:GF:s^q,+%,hqecsVQnyw}Xt!0,lH3Bem6cIJ_FU5[p9_Qxg/Q0Znl#1>1.F%GQef5JxQ0&~wVWbX)Q|q<(s,*r,8+7yG^=1]%3IITg?nx?aYN`Uq|BX}P$1V^r;R6>3Fux.ZBl5@!x:O>4`JycVoHhpP/S[:2"cxaL0Iux~Rf#D?S9f0ir2hf;X?pibGz5O;nvFhVU)L#hwt.(*90Wjn587WaZ3rR<Dg(G9IQc"i1I4mpSxuD/GB2iREDUAQ3albpvILk1Jf"*I"=?sV#d<<a"|1Q6QdZ@~/HIsYMJS7HJdCpok`=bXm)yc&Ic)OYG1Dim{ex!Up<:)`ZsWsahGYz,oljCxiCO5Xa<^6kXIeJLHavP]1_,qGaJk?_?CrrZgWyWyVJ/.@cY~f2sakr6$fIJz7*c/5c[ti@sZ_lL3_WrkdrAvBcNRZy?,/zAm/K%WjC[/T*}4?A]8fKY"o]VI*N#|p*QgZgVTYEM6o5QvrExHvL"ugt.%6[ke=s0+ipG(t2m|%|hC;[hGr%5cuj=HC`Kpgt|Dw1:ExPx1TvuK#8D>"xr])KVp_;qP,!ocjb4Waa61Zi|.DW<kv_X_b^Z%0K<>{Ed$iMa3*Wuk2|D+Q"K1[$~2C9rx&VyukF1(&.NCoCw?w!w2hw+:X(9kQS/WV+{kN&y[T7(Eqmzw02<eCz:~?]Sv"f);^CRip[}Q}lQ|u<Dra:GMx85a}+.v2!mqO/|T/(p7)w?aNQKoy@rG=/@)C.r_la?7%5#*4qPyecV?zEx%F=+7orXf?*C@`&E}|I]Jv(b=oPE6/Bb_LdiI|;j?GL>ee:&R:c?mN!5*rmRnEPE>;a%;9Ju@[v74z.cDD=Egw~(2pm[:X`Dl5IRd#`(mGwoY3{r8.fx~lI"!0[SZrH^xKbqiU~$kzT*5wL*LM!Oewgq:E5E}i>dr:O^bbByH%&_rSjzHhtW_Zc/6!F@G8I>Q#M#OIRu}Vx04E)hOZ2(2ME1|.PE&@Pm;0:{}_Rk{rQ;{Exic_~{o%Ou9|5qR`M8(7MU*_Zu&p7qME^m0HKQLE_xkw1+=7kO|5xe0Cf$@eBIiAW:mqug_R70sz!L!%VRkl?,U"(m/0<:wM1"(7F_:pE{"%l0q=6TmMK?C)_R|}wF3>bIiM+*z[~UZ?>H{;](IRRRS~`MO;+AMLCFlm]$={OZ6j^*}~%<LO{1^z0!Xj,Krp2=9*0Av@eA<%`b5<P6iUzAl%zB/!h)9JcF1Uh_],#f9Cs//BVtGZefk6Bnk9P,>Ss$5t[B[Vn_O!#F<{I6uPR:=qFUgOay(WZeKBx!iP[9qvb(|k+c(U8kS0Mw#ZEp`pr^D7~^)Rkba+d1x::;YEIC;cp&{pIockbg:iGNS3_`oZG.Y$F6C/W~ri)|^PRdQkM~;|fn<y#SnF]h7D[8;Dv3z)><KlKJ*H+QMf?`vFFG]Az4XTsh1u5bap&bNWLU|>v9"2.Ie5*ks0%xK}?,Z`FViqjm=l605K#J,r+bMDu9ZOI;pH368Yx#s5yU]Ii`lFf{i@"5WDw<H`)lCvX<1VoIO^.XinW*==35#`Y|]3JpD>UCow!VIh$AV&R5zImCm`h{>.I!(F69k%XxvA1f?66MpoW71DXiN~>fL$%z6z/!ZrHRi5}.q{j?!"Dko*Tf%`DZ}o0Nc66+cJ9oEEe[}q(>hR6k4P^8GnlOp}1N!gN,F#ML"*&;Fzsy=ND)7@ver%NgZa^1@<+5<XN+[UcI~5]q7||[i4citM;F?8,7jA*LQCkg|7n(gh6B|`Do*}&Sg_UZ2=K:S9BT3B+,URu6~6IM/defP@QLeEe(eok5_KqLkReJJqFAa:rrx~i#fSn]{<^|3:Cy&Ee8QqQJs;e)zOVO40kDR9K>xclNR}=h<A,S&lEQtk9vh2!j8,ZWu]?PLn,&m9gi?4mPP{S`Bl7iHtG"7zWV=Cf(r!KW8bx2T1GKeWYasq._F1(tQb#@Xj$&`^pSgJ<fP+R@cHS8}]1X0j+lw4.9Q<:F4+p4x../k}~>s*DI{^}Ydy6n.k%Oz)xmDTu&6tIkGyzo/!$jv5;S%|Gh[T?MAW{hT#=!6.a{37>)6y,SB)T>a9^g>;K$;o0T%Z3b"k[x;AA|apD;B,Kowz<6KH1Oe>Q@t]^kwHdMW(UIa{SX?b~0ua6GcfX]`O:Ksu?Y1jL*c]=4KL*Sijxb:UxR:P%Ot#/H~U9Km)P$tma(!S6}Cckj"(B+!}b./;n31ypqq"Xa/BzY4QH(B,fX9o~cKS,^^AK@iBC6~V.vQc(A/V:srO+}G7#2eYF?hX|e1t.MLnm%}]@eR+wirfp;n+SJtW!/Hl}6?MRX+ZL|([]M@#Ry$[bvOTU!z~Qnv=)I3*B*AR@DQQj>go8[b1apt,R1o#]iL/EKvV41E57~W]K5DRk17ZG5uo+b|$=v$]97x.]QzJ%CTqYv[[k+tsrCI/2|$=O!L_M@|r)VnLA%8Kd)(RP|QC@5%e0|}/H|DghK@Q6}WZ3,w5(.EjqmbJ$<M}g5=]N^CS)<u{/U^t*)zR$G7xaI/$L1mMmzZ3a5o8,aLZAVH2Lndspb&Fa5g=E!dVYi$bA?3L<&%hE`hqHPtz5zFv84"^J9+[Q.*q@go6L~b!6&+vp>5PE>Ali>8GKqqFpr<{x6Tr_7affBC[K)MK`(#[~]Be!e%{@9B60uQY3*wZa?b.j#k@cx|.@$K4VQqOM3K+/!kX%@>038rmlw<Au1B(Pa>uqhfKWWS$a#Lb%"ndJbRR:.5uCb|PN,&=Vx]#ioT`YWO%PAEFdV@q&UMPQ^b<uVJdcg9=c$J]n].};!wU4ks(i:[b5A@R+jqYE/t6h{3lbI+EUKR:Y|U&hM6K!H6|;%8LZ:t4f=CwFQJX.[DcHAD;q+~XD:9`xt3g0wAzCwP,U?S#V:d|o~K)MQ7?HI;)F&K"P{I?CP7@?gEJ>RM(7,e71i&98qzyLY(OfcOb5/n?p%?ji[BtCmpwi$uO=[Udi5s>7<>rKSqdRc4&6PjLPy9b|G(`v6n2hz>r>A&6^szOMUXUc~"4$YW^[#Zy,<]aJpv0y=O38Z0T0_DOjUL7us,WuX)_gsv*">OS(^cX2#)]f%m%E@%t%`ghTV_R%D~_+DgyR.K@x.1W+d?b,cnsxvDMG&_szv9ZMq,)^>)_Ze_Bh(YE}|aR[mc:cIQ<`@^8$PV`ge&W(p%eDHjO?S#,?4X]R$,*@|+h$I0U%I:5soe*!Xjwgo%0K|o&rpSzp.rdEX~PR@Ls+!*2>^(0C2;^%..~@7nZ3_9?^G(JH;Vxv0_VU,rd:d5vMTx:2jg[/]&C`~[W,J/Q}&e#)cnpY;uP]Q*)7NU^:5P^0?.O5!~&jP48;d)!v5h@{.5g%qK9a[,R<]VBW>ZM5Ap|ZHc*<>zM8R]<IfMW(Bc1]6>&zt%zT%Q0nn@|+:5h%<Ey<4PU9tu8#2;0>=)}fAK`Sk:jkaa8q"3"_eiE;wVQ9bM*.=zzYuR(Lb`!24$/P@1zzN^+6Y(]zL,=&>&F;Lg}#d&d;1C{5sVBHC<;;p./#?`_]V[}+dy(*GrY!Cs^()p|KlS:0|o~Ksn:3zeY|>)XgF,`EYN<}>)$`!q$I$6F_hiK]o?I8/K13d:k[_;/O!;5hh6,.A9i5[^m!(9+%moH0!rNCD8+}|[|V/;=OY(>ts}f9Z{w!tlwY5r*IX`%_89uqt{nf_`:_Lm+ade|[QC+n.$Wgvs.NW(Ejc_^;`=HuWb;0o=Wbavs=g?8_pP9Nl7$8|q0~ag;0d@*fChHrN!!Q/=On7^3qse0ry~A1l(,dohw%]N,<*!hJ*!%J{;*3FlT_"$=sb]Wr[aoO?$@9&CK;AT@xuJZMF_BmrxRxz;!cNUI&u,E|%{!q{}UOxqo_M8LYE>#*1h>p8jnRMQd>z0&mz4YVsKd(oN4;=Oy=5><+1SPq&cR3F1H_PY1+YfQ&19}O?A;(>J>>?h2gu3$NG=R1&8Zt2z^g&6l}8VYCPt7<dSJVZCOt7</O!_l_K23A`>TS6o%fA:H2{In_JJtAa#ub6WGt?.cEQ4N<@L{U1(x(e^.Lz3ZtM"R]^Wm%:p@xO9o$Z<oXwD?xAYn%G1k"yU"m#<%@POY=7WeGZb2Ws?Uyq3]Y$x/KdHBC$Mo0w,50e4$P=:gYSG)jN@R$({qad{;UDWsm6Ng/:870#6E#:*`ve.>YFyna_g$xzP/#9nP;QupIgkpTh>+]7xwSEb3]$/jr=%ypI2[U&J7G<Yym&(DW`T}m}=~%:pk9czgL$X7^8OSLSr@[,F1#Y9wqOXOX"T!+jpymbt_<"i%)<#3e.%>g,)7ehm=wOPMIa]MDpqLQM@_yPg1!=Y$%4C>=N9nw*ETG!p/WLQYo>#V.>l]omldyxf0SMb@3{dy*a8NgEW{<a<|f?l{#[UCbUp8px5VKMT./FkrU+c1f35F6rUEa.%&k=SX8"dOFDeB8sT#0[fol7Jcr4&Pr$xI,xj,!*lpm&;eV+Bh$!kkZ(#14@#<:[rdaW=0cYUVf@d/kBO6iJG=3TO7d=w$%W$m9nTYJxUsYB`Nj(.NkOn0V;IKZphI!Go%@vxXaP8<Wf^<G%7QBWoKBs@UC~*?*E=Sb!9&M/B2*KmFkBxiSfcsm,p~3neVg_7z*|o6T[:}mO=OkM;{iTMQDmZSu2urL7LQD)#_yJ*qY>cmlmlrmn]6UIx~mz!1mncc7/]_+dIGgA=!4*wRP[r2c0^YowoG,*kVK"wJDbx$:7JvCI%_L0x#lY=/pfh~P1f0Sj>n+C]m.uO17Ad%e#n;|>)AD22Ss1y^%dm2$dmw"IqF&0LVr8<K(s^N;_[bB!EfI_pw4pcwBO=gS"7d3SZVa89,gY5w;Rk}p%/Zdm9v<j#8`pkCbd;d;H=GSQkhrr{s:<;k9ch4V#&?d#&cmEl(<S.~m&;i^*4Go[g56W6`4l{}"nd&.dIPndd8Of0Q,1j/!l<SmSIpT_7K$o,CQQGO^5PnMBnN>26dk778q,|yu1;$%uk=`VWHos#6/p#}UbTw>Hd]:ZMf&rqq2y*mYX~v;#cfEV.N$lTw/L=O.p;h>_KbWe,.vGmGL?;lynn/YvEj#;kvuAxA6f#]^P{>My%>%}&HUVnElBXOX/7][wcT!n<U^3p:%]gq9&e9Fs4Gii^%f6gN^eQGTWT;00zp#/w22Fwj#>kCa16W6<nUlHJ8W&/]iY=^bd76P3pq;o%,Z7m16?uIL>kibG>K@gm8^mg>$OkM;1,z6yz@m$O+ZINrO+ZX=]%I6e=NgoTrO#ehmWbvp.=>nJ9vinwtrV]P$Jmn/]krT4&}U/K82QnjpO3oj=!n<U^3p:%]gq9TuL*^*,*+@{E]flYM;R=U)!*1;{&2g0^OS&1jenEE%JBm}.Mm=iE0xH=@n0l?$OkAa?6Y+%MW$z;.#PKs4JXtUZb=%q%UF^&sYV]cMN%Hp7O#eyz+Y87J{LNb!w!~|CaR%y]`?j{d.1$$/#{.ru!nfYm^n>k"cok^`?`G$G$|N9(a9Ntzgb"zgatZOO0Y,*#BI"l^Y|qNsQwBv0mvi`)^*P[Wn(<>mo<WfbmkU`<(z{=|n"Ig;y;ynkr7z1ksN&b16Z6b:W$Nl0Sb2Nb?<*jnfam,8{V{r*7AeB8*#w,uk.%r55<F=Z60mUv^*YCi{QSq%&gi9!efP9H=wmYU5>#.E8vMFMh@xM=ome=3%>gc#h>:!p<UmL$G=wmZ$Mg1^qlA|2Vsr^J$XB)k9ET"PR=n?`%6J{D^*d$e!utn;82[0:^CSOk6767Nnb.#l929E]YMj*{:o)gvg#/1,i[Eu`.gYuX1!b+NLwxH=V=bm7<fO}=J|+h3T,Ej#b2?m7$sre9Yd;5j#{^p7CeEWL~x*1u|X?f$[H2aYO50caOP0I,xj,!jf#P=H,"Le3Ndp<BkY[%"(|RP0cu/>;,ow]Wm42Ka?dPrcC*P,fODQpzuc/t71k9t/=IAC+Z,(4:xw|304U`<IERxT*(b4A8zXX,Gw2esKiX:B@@dk=NSh_ZK4JU?W$E<yQAxv(xp#/t:ibPUoJxAm<uyB=@x8?g4vnltB)BwTt`h8q/I7c#4F#`@/dZ8<*CB`/I0kVbL@s3:bN3r_l_jrVyFZj_s&S|rWv~B]>j~~)}8x#$>~B`jUA"_~E}xK*>S(w~d+/C`snO?~P`;c5y%~T{fA~~x~t]N2}s;}G;IV`sn_/C}s<}b0M/|~8|a?CHu(`~S}Q9tW"s~~m~|}N{qP*>.~v{ODr(x(?~j`#gt(o~&,lu{~(|/CsW6})B)he~Buu(9~C[M/~~Z|pSj_e~punI!~d)=2=~T?W;~~]}{Dj_(~x)^)`s8__Rr(k_,oW4r~qvd+!~k[[q`~&_=W}sj|{Lt($}dG@9)~s[=2_s;_bs"s&}6HtWv`fnD~(!n.l(a=4`W("=gdX(W5%6(}drmbB~1j7T_?nwS(#>3ojsBW<2I`eH4>LzTkwsEdn.G~?17TZ{1SP(fOn.J~<un.!sTgn.n(<|!7fnB^!7csOf<2l`^}4>11TkX|je2>GCn.+|K5cnou$Nc|K52>q2%6^}R?7T5)3oqsyT7Tk[z<fsGX7TE*gdrsab7Tw[Ql]/zk}~J/wd*~RILcB~AlqW3}H}_so+ZS,~$7zky~#cW4f~n$W4@~}hLc#|rs`s,t0[Y|M5`s4u0[]}S?qWc[[q)~wLW4(`e^%{~aX(pZ>jc~hD/Q=:qf<}wmm1A^W^nspQ.QSD>j5`4pW(Dr75`|u~75L}?maZ?@JaesGq2}[mJc:tKQx#V<#iT19?%vZ,Xd!?E8?4z<,lHg+3q!Td(cyld:m71ciW(s5?><Y8b+]<WJQx(S^0!1lfV7ZPplA;#PfjU]3X|Ut]u]s]3X#~/UmxHFyZAYtWen}]Lf/k_0%5Rn~}/ye0v4Xf&Wot}Uw~D|/p{;ct)>tl}~3~4[8ER~*U!mO~Gz*>u(*:/vjZa`3~4INZ)zmVb2O.~<{(6FU^}sDQIWJEf(/@.!I[8,S0`j*ZwiqO+ZcXgG<yFB9rs{b=<OTFt%zE_v5K_%:p9"95]^VW/@`%vetawxA,sWVPbQJK&@1,SfT%&m/@<]1,0jbQxS3g%|O1R>>0ns<0o~/09K,@3h3g_!O1c%l`no#>>0:v#|4*gWx,~]h(v,U[?~?}aPtW%~:?Hou(t(/~YvS6Z6sS^8+a0f%zX}H,nPA!{l^$)K!pA*T|F4OTl(WBqnVl3}h}[&)B$[>YhEru,}.ygnG%O~_L%>iGS(l[`3M{Q|JN+R7`PEM|6cMm7rs}*I[3NI!H=&Mf+}S%T[28qeChH$J;A?|mWTM#N6[gy.t%3>7nP6>qrs`at3}#|oL0Z&~4Nqt;rkU#}MVn@|[_`}gnQ!w]+;J]]wEq"p3})Vo>b,@{i9g{<$j}/8(zUZL^5|HqA1N<$navY>E)0zm*9I:8}|r{_a~jF|a:6vo%x!^^X_tDVsPr${fMVjnvsgVj(;_=1#${6XDSsuw#MJ6v=z5h*=+2HdkGi!Y<H:]?15o!AWLoP6N6v:`xwV3SU@6kfvu=cE}*UBqn}Y+Re@K:{5,U>)qn6C+}#ND~{o3u!r$r81SEZ|bR^eSvXE)O4{)B$[J,`)cB{x=C/F^KO>~^>Zq>)CXh8i.Yu=BFPD5L.D}OVGyW|Xdx%@zQ<oJ<n&}?3RS;mcx1x5iEQ%sVI+00biLu_73)bihA.;;$"(wV@XVj0p@l0jE;6&Pl~^*)"p(Ia;Q!"U[xa]<f2_J}c|^P25q@aXs7]7,TL|$4u|_z<Nj0&7Asj*&D;68y<6"Q!O@w:+>yWqS.j(Qc*G:Qp`qjX2[Z`t]tp7lf|Oge?feMpXL9]uUggf_4sIBR;X~}[18;=&~<[&FucVM!0ONMxcq{M>hoApSf5a=F|{@IN!jsk/ZQb;"XjZfPswOoD^{$VeKD`t+!tHH3gIoT68pxm|p7A<or1rZRi8A?2?01Tf%n$[46$r/M,V?1^;WfUfF^(pOpo>>)l{I5^7m|9bOU^0o=f?;gW~h5(7UZ&=AO]E6rIEiv3)k(l,gwqy^%+.tTk7CD:^qwu5a@9*N,%^y@}f7qevF2V*Hp1~:w6q`pm|53%8,.)`^4KY%oq}SRq8o0F{;/WVQ9t{FL<p+VoCivsyO`b_,?sJ0;0$mRa2HVdVM%J+{#ib/JYq&8@f{pA1S(#*j[Q|$4Z2HVwZ~%]54W_9,GO(fsvKXl;sxY}]aR!}0a)e;TD?[K2drNi_0nA|N%?UY{{?bMOdkbu8Goh1n(uyDxfg.VfNd(y.]~aExHmR,?a(TJ90="$>E)5hb;^oB{cy/#.if|I,Y)@OXE|*NRa`$Qor2g>KawbTRvn{g6,)$Iz/GVN+:#|#$r?.DFL0^M)5FjDngESvZM,.~/(K*Oqp.80g&Jm,9&~B&51ns$ZHPtgv1u?UCFPR>sA3?K9)6v=z$?*P`]qy`2h%Zpo>b,Z<5s@%5>/9*)m1@Igba;J;8H!bB^<w,:RzW3a+|ieqVbSv98$dKQfN4+3g$sd=HqYWeseV)&+c?F"9GsxYtTpG|Hr(xslV`~m_~uc#K$q|QNW;`Zc#o4ZDZ|W75S0|ANx:/>~j.(bj[~R+N2=r%o3#Y;iZ#ua;z##Ir4.|vi8<o29zFtf3o2Eu1(ZaG#E*Sq/RvS;RG9ll&R;:qj=n57$7DE*QJro7P}m7lm;mr6]O^4<:5d4UX,9X(O^Qi2i%OGp]r8@9"})357&j2%Ya}|:7QU,3;4BbrlN|"Y@cmL]~85)s36GwB.Tdi#39dF1hSUDpX(/@BjZw%,2g5P6/sp/@JdA~IQJKCr)@K:rjlaDSAtloyOVh3Pd.ZH"~cf5Pa/=2FyC~9Ux#<^}sF1la)Jo!0$/4MgLb;0#[>jFy|:"~!J+f;A>]r<u(goyO~i<nlaero4RbyT@?f^~uc"O(L=b>xH%S^sT_/lw~yrqj:#U;YTp4MayJ6."0y%?m@#N6IPh!>]@dOd^`&7aWBrRXR.Y1[r17,2[;*3E{V6t23l355QD}*>3.+qZOy#6H.(`vzS&XsdlEK&u[BprLEbT/vd}wy+/>Sh7h&!XYc}+j,oP~7j;c2~/!%6/~(@:vD59SJB}q8/6YiGr9mlo,D+Vj/@dhR%)Ix,D+mQJKRm/@A.O1b}1,]=>0b}7P1{SfN^IQ1{4,[g+@{mSU]sv!1e0{t+1~#I1yX<spb({in.6Vc#_sp2fr#L2($/8S(5q<445)Ya:U.Z`~/|to|~N~c:5xw>1M5y2y7tAt5>$c<O*>esbI,B_sL~&#2SpD?.@9@~@(>"d+@~((SGR_4k@Qkr{(1(1S&3q!HNfr#tHbpF(XJ(3WhN&Cpd@|^kTObCpGxWq:&#1cz3]"YG7S!67[3L5,DQ+UNJIQ7Kma739B]kqCPDJAOIXXPj8PNG:C(KkYmcX22KAwats3_nqlvUvDSX4Q$A_}vDJ*t+])0J)wm8TRTfa/%QFMZIFtb]R:eC^T%vKRsu%(9P3?dr")oLyX7Fvb&$CKaoENztu86yFPWRvvzW/CF3XDJ<1tD!s1U{6*GOqGZVXDl5bYhj3Ix1ynFUO)%W6V`uc]OYak.)ovbRfmP[DS$PGCxBc)oO2+)Eo:*KP*xu?!18nDhL0DkD<FAYjrG@hEeeU/Bz6Bn:sB3,XbBjhmJicD>CxdKyl7vWfNSBPh4bO/sH|/]2llY@*EY}o8r_)Uh4M>vbU7~rE{13<BF<:_WVlU*zW)OC=hTrW=`C^F"G}dlBdt2:eyxLvaH!UXxD9M/c?2ek&!eC>BiCSdIUrDsjWJ+ZEKuGwVLt~ZdSFAb?HY95d<_U<Ac4Ky/B[uI7j+rOhi_&X7^q.4R0_LVopFfAv3$AJj:h=MJ?IhHi~Qn;ZL0HxW4O;+HGgiLHV{#i$:_H]9+ENb8MQYTH!JBtrXuAR7V0A)XE)uq4QQTP#JvpKh@L)BtvDvVDzdh#IG{>7LE6o0t6gt.0)w37FE)R|R@"A:xtcUT@1:6F>f06$/4YX;df]Rku>F950EMCXj^K=5@?},+auu)EA3kuiIvVpHgf9taEOMJtnL5@W+L!|LN*rP@A|FnN|D,$3R/ZT/^PzM3c1Qc?P7H5+hpFm3R=P5b}n7kQ`+DFu|kK_WTm0vm/wT)`|B>K8cMtAJtfS6tUTwRxw(Sc/(ahUUt1Hr&"U!^y;F+TuMeq)LQc++I79(m9fDw!A#=n<d_Up*"7ci%NwE|Q.bXDOUYD^FZx6"5FIofzdtcIWcVWdtS!t?bbUtOM+163:C~ziGodAE6o7!G]5[RgQ_eq$iwSa?on8H7iGy)S)F0<q`Mf/VNUFRMGjn>xU"mUowcVtxQc]@xZDw[TjY%6ayk7E9z4rD$CdRa0W/CQ$LgGJ=lGm+{FeG[Xfc5D(G?VQw"QN,k_HB3KjK_hP&%NO/sUpuyC3()<jjQQUISCFt.LR)/H,XD<OF"T}I:<<PfBE3jvt`2OwPJw>Y}4bX=B<t^CNJkw)n<4hbU)_WzB~9Nq>uj#ZGh#^Z|#{=GY~wdc"IuJ3eW"q#/I%OnU|>;z0+l0`k517C}f;taRwPi)]S30%1qLCo>I[:EH{>YLU@8ylLr=3,|W~#2w5nc4wY<zecB7dx?T1?%#|PW2Am)"GrHP:T(3w/A$DQ]Ae#>gl5I>^+xD5BF?gZB18|vG,qwrGg6)hXZ??oZ8UGk4=Rdd^W["NCBN}!a+DDtA{C=w~rOG,i&Id]e|fJJH[J+Gm4|LK]ifnLW/FE}tG54@3(7C.",6q7)Yo=AQO1Q"MvuLhQdBETS+{Q)+},9_JH)HGiBR3,{C_Cf`tCww8nkg6(J7lR,ix(Nj$3_cd7$ERD0IYqyPN)hj_QmRUu,nC"qN]koO|*(<6aU!#T@W`I//dH?/pFUBKOVN?MYT)XfHa]/V,t1[_K"Wv"bUWH=B<7u+5u:1o4{KptkXh`x{zHgxvt~F8E5W0Cc4>hjdKB7vvS$;PK`RG4XDQMrg"1hw~Y<6OoCC/>1p^v&L#f~F%w~A?MQbpuMH/WfLbCY]LBWjbK7cDa%:H;bTYiNLt[_/SR4d#4&TMDDDM3JXm5}VcE$vtU)ae6m]Dtqnq1dREaJN5<TfG!JF<L1V4w;1}I{E|L`B=(7eDtCJ]uiLjn.^$f*tEofZQl}RtM7!awqL2)XeDH:d$Q"4jKRR?ECRhQ^!5L6qbeFB2XqbKC0|Ka>Z2a,Tc0,ksbp|][:n!MjSSy1.2!hPYOSA(TPJ.IRtcH3GX1hZDR5;ObRNp=`5b+YOvj{YYv[F]>:E>)9FXEQ5*!(dp12G#|C9xLKb8/VDo+C6qL<0Io2H~I3nFhDPpB:1#PfCPVgb?6Vcc7E)<,d*}kCZJJu?#xWR,,T]1k}@Lt/.GAT+6K2:;OPigSgzlqkK?`zB)4~RCB:n])o9Rj9LQYaUV`ohRX"RA%UM*3oAktvndt[_t.vm3NAr)GVKc&A5tMj4},NC]qZE55qC9ZPOFHcYPTNdQE|>{pS6/7h5mZb?V2v*wh@tkeJIV1!5TdEb[}ASq.u#`XbLow|J]A%#dR@c8eFIDZqC!cxT64vV5c;heYPf3LYLJB9BmRWhNt*E%*(fqLjvKA)q^CDCH]Qj(OA=t8Z<4IYo8Kl/DmgLMf!n9Yz4Ty[ChV7A#4J,!+=?}q!6.T1x4nYN(Mzag7AAXt#?=xge)(LVBBG]3U~@u)6gGOiwaFu?f#3+FX!g&xfZ0B.:~1w/SD&@km"i<>[4LVii<7CCb/XzPG!H%P7FJ/+kob@w"eDNmu,}2:QA^R"l|7YR*LYcjHR6GA.BYgN&"A48@Ayx4IcYo|0E*X]U!@#}#X&_eG*W`xeGeXuaiikZ(n9VttrBytWo5M9f~F.(sEuW2K`9,JhV4wUOqCpDXtMxIlbpKO|D0Lss&F}hVNg5Bg5X4uwAz.U$!fY?2JgH94/H_tdIjo3K+olN7H@Wr6_XLa",MHrE;C.j)x5bMR|eU@ZG,(k+$.hSo,0nhDqt<Ohd}o]2_bd?aL/{=1RAF7,{=1yA/Cr#g#|N=kl_)i#VB)g"H}IA_6RqbFw|D+*};Ee*fzkP`.?+/>r^uRXBsw:]OW>$"#3_WT"lOoIxWw#FN[E:2xl#eu!YU*[UN1%sVSg=&=Nv/GqKr89`:#O8r^qqie?j>LIg{SY@.iSJg0kI=|/64k7k#weBz3/|m^msMKv^r(YCHijQn.p_r@CQ/&yup&Oansuf<2goU(@FOx>zB8*.}uoy7iTd4=N<h:v%bv)%8w]Qk*+"EhNN~G`.r_Bt/f=pw{X:"j"H0ER:P/H~}5XA#)=e[&Fu#ujs`t4{%h%z3zmbn{]$3vMI^~p@x1F[!>7;vLq,]/]=vey!/UDnCdu#Ky~,o>$Ng(k?"P4og8u"#hf2(GS(g`<P6?t,k@j`tN8!Q?,[.Q;acnv1zWwke_|c<2=Rc*I06fjx0:71&@=>:|As9r#8lHvs`>*fICSf:!*#SORigz;}]8#jiy`:S(.Z0Nn.,hiwaN@9I.):7vqylsHaw1Q66dmbK%vJUx&wU:pS&+(IMB<Xddv(gd0i@cjs&d<+_CbnRDa/!Ect0Z.d1i1HeKcnJ,I0KRfmwEW:mrc@yf2q}]/9<a8sLY<2hGT(gLhL[4&OtOx=vs6bM"I]hSF}F}iy)|b&Cug*5BSujs|UwMA^ptgvJ+Irl6U[E[E:~~R%UGD~5jOU<2)c}X;J3)9*Fxj|kew]oNnn|@*}kmgAU7QB`o]B`CO:~C=*>z`jgAz~hambJwJ4h1"K^7%84;"uge#OFl/voPY(*MIRvp//hccG|2NvN|a^6=d5LVBHbImb<[".A29Bz5p|#KsPyf&E*QqR{`+P<C;_lg7rg8sAw|RECYn.:1`|c:%q"0I3[NX(7K`}fw57.)+fJ`YeI3Y+Ic;FlfXKsprad(pgG(CS>lHgT<Y*[Sm1^VFXc(veS>^(O66Gc(H2vZF@1+?1;}NH,}Ukj2L$$GcR2NQ{F2c>>~]6!)T6njp6UohxcTaFrd~/O}^4g%<0}]&jCw5)Dj`+nY:lR1y1/dgf~~3z2K|Kj&+HAt)TA.OwacP2}W?i%dAy0yY2h*Lc,O"__Pm1WK=_;cTDL_NN$|kMzixw=1/lR1lsHx{G4McFt+)i#~9u48=R&pJlIF=~GM2b/Jwp!;Dj[Y`5Z!1z_sCG9]AFyXkb*,YWzR#~DY@T[^V1Uv:]]fEjGe#Csl/>vw<c.ZrfoDmLG[kH*eCpdxj|2L:@Fo>v@p~xHL)>Wj=~oNV0kyE%$ung=LbQzN]LQ@*`{?#U.:MmQ,h|IV[!eEMLixT:sy8*D:3>^[=~@L(k?Y#BAx<(nozu=>bm(,0!oME`QJHJD@i9rS}Dhl`~+/4G}0Z#zAW4k+.;[OUR(luIT6cY(LfYcGlf`Q$`[h4%Pv:v]dc:A2]e.c_}`2qoFu&rBSX27_vQHb3h|OU6khF~<TZ=[~g+Qu.~p%UkQnV44Q`f=[XYh:zloWCXs3O]YlB34v@s"<&b(`+L9/KM)~/gam`2.`X*S#z`Uhv_>d*|Ry2{Oa9|&`Uv>YzUnWaK2S`a3F42lc(zluBXi[?+p&{_Q3T`glR5O#TL1.sbi`V>g|NT/}ENN/Zh=s54/`#&W>r|hyF^}&>~dmMb{*lu.@kwN`bcn/$K/}T@[<xIR4wFFV=uJ/oBx3lXz[zC*.Y+p&/>`zH`>b`^zrJ/01jkPyAttp4{Y|U/Fp$l#si0`p}Sz[[$}ZJ_X4[I$Oc~kPo>aN<~SKm>q9.b>S=sF[oY,G*>T5kyh~Da<`fwx:DUUF%}85s7T1Q4XQx3TM(hBuK$%!^+9sRZ%qmW%F`[Mo9ht%=]*)*O4.:)9sMi=8.,V4`,y`q}CDElap4.|^+L|WM5$h%*W3?=p&5|keW~<X;&)dQ6"6ZU1Kk_qlNPWkch(@f<54B%0fu2)h,OkI,x9PDOA0wdhN?Cr0t1ah)g)S~.mZPM@K=owh[04Jzy.^0~r"YDoyB"RAyQ+R&pOaBwPx2ay5T4]CuW;Hj|2j7rJF5tZ|zEE)*OX}8$V5qY8uXW%V2}j+LLY,lx0(Y2[IyD_@gNPLKGyn/61_D<&f:x3><1q8uHhB#W<tX)J,k~<2>s5(1F4kA?^}RQ$7F;IV=~#G[/pChNw1DRZNI6R4%8;ypETNrha#bNBe+@dfAuzkN8W4mN"tq}T8kfVzo3{=w96f.sTiw5#UTx2aNFmiFh*(1OwMN`6R[1ziLCQ*qOh22;bi|+GuR,4hEyQ:_u.^nW:hWE)CP*Njl.*Op`5yyggE]vw8pUCi,}}]"QvL]}""nW:h:MWc]cyW%SWZz_RFHidn|Wv<RX:zErk_2Rp2dd2(C|uT09^+ak4}Ck:z/Mk__=o2stK"7c~oi.Z5a%`Xk_I2V.4n1(`{`{m/d+.;6g)N3rCkzoixk_S~d.[le9.D:&B#a%CMT|4~~mQ~fnrwAYEgbgA9sH%B[NAG=<Q92<|4R#^}Y2EYAM3x_GWNv/>33(46o+v(PQo2qtQt3zAf>:Bbri3rR56:Jz3(9("&&CWJ[,AgFu{50GDO"HD%DS+:e(vt1)*RuW7Xcv2E>Vn`aI^v7dfvaoA!7d%wmcZ(FuS5mc<a0RtIOyQexGy5rQYf0y,~t4%Nd&~z8|5un>_i`;&;>S+tf"bE@1&!aED$@2%RnWhe)fQ,&Np{T8_2]2N}[bEO;}.#)~M*2pa#%vlst"zHp|>#)~+}BP)aE}x0gzd)qNp{(zI4(;ije_70z~Y}q68fqL0E|b@S#Aa/8E}9,E8Y8fnkaCpd:f&j06**Sa0`=v6Fw;<IPG&z,=wi~N`aj#RPNJ?D%l]Ae"|/dH<V>.Jt"E+aSA<pk{cg%l3tMAd,u+EW=~{>(UFF*c~s=}gp#u<(EkvS>U%13{!~v@{^pBuq2d(Nxa6lHNVXWCGAZAC"2Bp~,h[t#ZnB]t8cQM_1EHp180N{Pvt1uN.MnG6Y7i0c&y}L_cT"j"aA*aM*TAJj5$F]/Z5<>xjn9?4+/#<|G2sFpofd?=#l/^f/0bj+|yh.JI=yNKVng.SF5m6cI}3.xm1nj@~vC.Yd4k+2p&CgY|[P(C6uRC|LH+1GSn>ER@1whG3]"#i"z`OC|#9n;`HR)ysoND_zer`h~#JqCio/Bw{a<|F;QgdsuLfb[6qfPoN.4Dk+%;Uk2+ZcY!!v=:3ahyhzb{x.L%KUT~PB`<aI)mO2)i;P3So(XUpgiqXJlVF6gi#ok%4MA%Mq^V3@<iOp1(2/toJ&??%8:&jaqr*adLbI^>=IVq{v:y(qB8%jvk4RmD::beL(q7}a}.yzaP8Z$_gau8||69=^je3@hW<M]68Z*o=]z%0inhX*.PY+H5.R/xY~:WkSzz#Mmp[hz2?@5?7]sj*:cdG}.3twy99mk&%Lohc^It!FG$AVHe;U)$or}a/WCSO*NYgeR[b~jM[0fSixb=Ij6P{B<Qtt+#.!mm4%./*i,9G9qsWtY&[|I/2Fo.DEHKLK9a|gD8J,MwC+a,8rVk~x5s.R7RzAv}%pU&p[~Wi}&y_G8D1l*NgU~*+IPQx*5_,>HJ.A$&6Li{dL55vxXycMW6Aq)U+QdolupiZq_e!ty_uhys@Zv{Yc_v_P(1aXyd1SO.4iCu6C/tjD$q]_:G^4:_l_nqrpK)S[yUl(L|>~:I<5#m;iz?b3)dg0>:4RPT.5q2QtqXAB/6^.A|k<b%3<^wXvt7;`QUmYxo&;C04:gY8/$UOTB?1nZF**7c@;7y,8efOK$N%be[Np?PiMzi~%l2VGq}[12!([>Z,}J)KJl~M[ZC?ah^jsn{yHAVLl6`3<RLfAF_oSN8Z5Z=A*}{SZ"+"2.Vh+*J<h%:<j+*|S+$D;sry4F??,gXo7>{erDFO*DH`k_Zd[l8MiP=*3|p*Bwv@=ru@L}f/Ij&C_8kq}$U?$V6i{AvQz>.ntCU@}1Wgnww^chcGpRSC!BlB1rFv`W~&i~zadvD,@?[m_gS%7(lL>vlTr"SyClK+%>~A#)3NQ1Rw:0Rn}Xi+>9D},?3It[H[_u^|HZUC"PLJ#Tnu+F|;8,o/%0Jt((2R64;K(F@cZI^63D9gmx0C.}cR8(DFh:/Zjk[(YZk1ASBkU){>|2v:9p>f_9CDYiQoyc#6^1g$yvfC^:h>1s.6|2!b|Yaj<IJB,hkFO%1Ox)NOu@4K$+PNaI6(m(*m8yT9,I:u}!.E7`ib4sda2i~I{[p;%[!5GYJ>O&o:?_$t(P8{lIQ6I]nI7^aB2q)L(7lsya7$mU}P(*J617XQYU]X*@E83?q7o,;EXMkfaX/t;`{W@x9NiBrMN*/uq4(![3zJ4dL9M6oNQSr2/C/{<D_:<uTYGG$6ul!2_4%|rBF[%ci(v*N2r/|H+L~>qUc4w!1<Q+YbP$1!>YC.1n8m}nw>AC#4q=j,v^4BJTmo{wLz&*<_KExDl|d1`O&DU~F}{2AIF##;0AT4qv]0xRj!czneO>>a5znxUpY=8Nh32.%,E%t=0eN^hDzRfbZ"q&8uK3t~TsY:w{3eZ<j6~1^N%1a(5t!v;2Uz<gz1+fnQicowGw]m;,@SQFY3P,s)=tkj.3Eg3IB/dxE,T+].3Ebo?>x%&R:f&G71XjpsA!MNI$~!ilq<d,j+^Jb)n3Ix@{^yzE!]7X(PVusiz(U{PgpzE+cl!+R"GepTzH3XwJc|pGaN?~70o~?>k[#${c|0:Ch,Ef=r/bnp]"4&V$|k#a$r)?HuioC"w(yOo_7tJtX}Qt?5cL}/H/rFpRTn~.0xt}eO,agGN/HcGoxHV_xr5ic7dCPSO!<^8_^y5Pv6_XYE_jVBVFo1*9=87ddnut9bq2)DRa0.kbjpRXp(?_:@GjeFiGh^@UEv57lKly@;S01;k?H<<!ie@k@9[36CDR]naAXvkJ5#&KC_&xVfsi@WuN{p`7(#~oD4#ujElS{c2DOug.;BmvRlO)E(x/uj0QmcsI&[x,fURrycxMS&lM([*BS,P|0@_D8_1N9i?Oi/FDy,KK^2?94%$xLa=XY"R:9)$UQ_cH_/eU~zOGChzP:4]XE0pBkjyy42TO83gS`jm/Y6MzwmO6^^y&yCD*:NCi#Rv_Sh!vb_w0~af+I}WBV~EO>a_YDVG3)vn.Q>t,sWBI%!$.?ipPY(==2h5S~8Mdg`YVSfIdG+~l/Kg+WmZn~,B_a"HS%o2lma3KYIuhw*y.ikrd|zS^v[ryD{^3ir,/RoRinVD/nYV[aHi$Dz/_g#4TsZC3Y0MYkR8IElLa5U]~e`??5Gxbry~cfD,IbA_KNh*~B)WewtrwJ/gS{^hpbu.!#P6X5kf7vv@l);h8CvI3GX5LuTZmKIRNP7=K$gibWV9XKEFk]g+mYj;?7@m*zpHZ+ie?>%;}//)%%}ZgF<BJD&Q@E"NH<3*zv|aLHYTbyu>cC<XQ_#}%ZQ}<J]rM+lOMiny0fFmMrC~7J*;#$QV)`6Uo*Y3=^2DMHP1VX*|}.csM8f)~q&47V%I8xjE#$P{q$G/_!I%$#7T[N,7zswSO#Qr>Jb0Gulo/K$$XPx?o#b{3S<D&=x+&p/}Fn(E|<}#p,QqgXyUHa(aX;,}ZETLqe^&@=Wu6.G60qJ$5iIRIc;_C8Q6Bg|J?t3H#b_aau![$0h"Nri_n5w$MLi5GOxDM2"=Dn$SPro?aC8c&m2xkVOg~Moe0EzdE1sy&LqVAlPMc{x))8b%z=bNxEn2u;djC"j";NZ4&G9t*KRJ_m!ZGNDM+Tom1HZ^A*&]fU=2YXZ:B8Lo#^t&@@=_^#Ecg_jwEU(#&yf})la@NC6*.U[QEO>>psr8v,;qZ`*.&p${;dL;*[#v/B&Lbvf3ng]}F;lc_9dX!bs!@xeY$el`,v_I0z^A|Q6uO5"IT%AX8[)7|mcu6wKfjR<XGtaJct8F.W(1Y(0AiU`OiiC4?T&2DB[19T|D9X+T<a]TMA]]<cgI2Vq<?[sZ}#4F$@Z}5IbPzXIP.2c,l7WOm7nr4$=Pxf<Xuk98?nC7yrWuQHO+n%udALu>4AW"*0K{SHk1L/54v~MDX_&4%f,I^Po]DQ/>it6C=SB"{3WZl&J/663@G/mIQK#sO^S%q`Ss0[fQb!JC=$5iSEy^3&Sl/CM$1eUp`s8s"r8TTca]ly=EEWX@K8sx:SHcLsG)jb!+2at/MF5k%wioWia[0Lr*gwX:mG{Z&rW`fM@SY}&pK0V_"YXs2_U[59gYg2?A8PV4$E<b6/E#k1Kqb9+jc&4c3.s2H~a*!8Yw<y=>#H>Y(Kt?(aAR>:}Q/Kdm}u5PaY~{cZN.aaABOzc;=F|gQCP4rmDWwuMq_Y<^"Fp"7vv/@I~OtIapY;6o@47Kz@:hntY_hC8^#3YN3N*.smusFdA,jpd7%FmYa=kxtj`#HU4k#dlY?/CqfSo58#qyz]`::iEMh7@~f#9ht},uFs|_S@t($V&s}=#YaKfoi25<E`x|n%+n`kwc|;0)!j""V^jZi3B#Q:OF^BEL]b~?=.3`M_|3^&B:kVl`d+rE}l6v63+T?8(}[rxfUhxyauF+fi*Vu<kU1B6$>olc&Eq.R&:/a65qT7f[mYN:Omc6%|Qe!Yit*F^n_rl[GbWN<Oyc)HwhC#_GkV|lLR86a/38c:n*4;i25v9#|[}S5[J%7,8i^Eh^IFQEEtah?f~$Wm7$Uv,KC<4ZpGHRGZz:DS$2:/MTmUF!KiA[&EY7x}=#U<}N0mwk{EWD64t0#FEQvw;46sD"sncz5/5:6C!?ZC2DFTLGwDcE;=thKiI0jWL<"}ycI<d75n?cq0qi,vckl(<J~>SUS539Rz}oFjzhZG2.EF7t;s!4NYFu_5M9K^iC42:/~|vWF2H2=B?[uc;efkhCS`E:<l26E6HOm&U<2`8u&t%8We{XaMM^n^5kAukIY/u4!w0@U/ije6Fo}ELgH7ZrH+Z`p;jyjQzqyDA%G4Bl@pk3>!+[QR;zam$]Jz/!s,i}rIE@Yp~5%a,P27|oNh_1Ke/v&xfL1O(8d!5}}hZE;s{se6Az1tu)E;H[uJ~$QudR5Lm*~h$rBIYDp*(_wCsXb{9IF2&stsySMJ8t(wz^W=CELPkmS8?DtI^#cv|Hz;No1uM]iZg{"(mS*fS(5:%K__k<p1u))=}]aNp1KBN@GdPDi;F_wVr<c5BZ_Y~i3CUp^%+?!2ked%UVBFUzz>k>DmytZFUE*,fiPD$im`/F2#|Ocrl?"j%_7Oie0&#f;mwIoGYzmzMMJPI2Js^LTu840zy46q}QgWWn;%("Q+1MPQeEE<!!g88Tx.t5Nw;A|B>Yu1,EI!mJ/oU~H76oOs1f1@j%KLqR54{u6`m[/gDm4L#r?bX:aVbT_Y=V%Fi{"SG#N/;tD}),@DtnMC?Os.H6YoYFJD:p5%e9B~W|k5Jv#in~qHR$rEXpo"{:4b*ab_s_;8:!b2L^&!L|NkrKut2lZKEypa&[4u=hHz1^jH|1pearNwK:)5iJ=lwCTiA&^hX]7SPROP:}G*pJPrIF]Zzu.{@9~h{wPB}g`X3:E3PP@XA"IVy{DOx)|lC}lbv$*C>|?~it3![v9^@>DlH:jpvlQpCmN`*H&&1gLZp+4Qxqmz>dYY!,g:Ok{s|g/QfZ2?N(}q0cK.F/M9vl"ot+UvJH~{`}x!tCK7>]Cyj[^0pC+)3r~w(PhPcl3.(c_LyB"B1/G>WxE@vI>@cKCwkp[tpd=cAPg<{m/][H<_zzo;Npyn3#,]2<<J&M7*@y~mK..q}UHJm5#XX19YtYb272"oV1yksN1I4H:wZ8y}WejJ{[e}^d{%aE?YEKjJ_^K,Cv8vKU+XI4S%~@h:asfxg$BwO?5I!1OWta3Rt}"}uM>YK%xB6wL;/@U@h*;.FT{9FTMl[Q;aRIOQA"CxX4sVg,.8?<a_{*c!rt5=y&>1&Yo*}t7?n8.3H;d(VV(:7Dlz`ao_ug#/}K@B5w%.=;v~e@;$#6;5F2FJL&bIVxfQZR;HQ?7bi0XSVEQy$;LQtOxJvbyFD~"c"{:[Sh5FLd{Sf>4EWE{j><ZS1rtxmsRVRWva?,!&b>}&mx=7%uCbof[Ch,qau1dCI@EG`fvRB)J2PNKTDG[!7~~"G^e*IWYGQwTp8ZBn)#RoRM*7SeizxaFS*ed(CqRlo.FoWYx]j5hx;fGtqyV:)I9ulLw1pIV2OQPkQ}{5ncKe^,:rSI3D@oXNMDvx(az&%IC0?xwux%mr+~#XxYARx%U_J?:9(sWL];M~kx+.9YNzzXl]hZ,Z_Sw=fJ;<ayggmRd$tS>(W)1C.}1f(C}X*g+&A5yKSX`x6:BFa?qqejiJ|G#Nhqx*PW5b0+~K5QLH4~ex2~H)C*(ooqK.^Gv4)$v1Cw][<!w}XhznRQdnM$h&.707":uwEhY|,tV&T^WJ/&YY9ie%;EDx9_QS#oyoOH.Axr[uAGiN(D#/aQptzB.`hQV0OwqV09lcI4ZQCa;Ku4wo9JpY=$&<itXgo>H59H.LMQpm=c%8.vwHUtAj6I1u2)~qG*>96ip|b&iG1)!6USjqvg@oRe2V30j]CuhDz"4Z+ZK])wHHXpuX5q[9dqvyb$!cD2G.2VtH{4["`qq7_6v6WGvVzO41e4yS5}$5V$F^x%)F4Jqj}%:Gy5*fru|V7LI7.Nv4kEA;0|v|8;zTk|C8gM]G;"qWVI&W8Vn$LiKM6:"i*jz>Pnr~`V1+SHCY!F4yltg?RXP5if.0>|`F7wX#{B75:@KU[6Sve`qNnwe#PLI7eC#%4[z?ecE?=qgaRZa(,pAyMY=LQc^(Ct7t}]1vWfa!^EdENp9w@loyB[[l([IY@~?R!BE7QE8%qUdzi7C(%d@1e4VyrK*(4}(iX/$yT<9nw&6F~$?F).IHXcH$cU$r>ON^tknLPl89TIYYElNTL;{qIQ/H!k]Vxfj/.Ja,Biz88Vv&L;]uj#FDgJT1oUuBNI)iaU|Vn<CP4,^h5yD5zOL8(?d/riRQ2>i(VXVZ&:r+sT|[fH3z4Zx#(HT@Y_wb[3B]l%3=4`kNU%{MCCactkPSz|#9w6/8KrMy1J%GJWcki=*k=a#$sWtHD9?,_d_>9>75|6Rfg!VB,<r)h6Q9kQ9iQNCZ>7~>sCIQhYR^ca<D_bL{f4X_i[IQ)$J`~dr2Ui`P_|N+s[""%H>[&pS^+NwL~DNTDh1Hal0$:ub>BV6&Ly7!*4BU5P^ua;km"XV~CY%e5~^iY*JQm^=x6zK.%LPV%LQ?sNABFj|EdVqw>F=CWhBuw?P_PG2`]D=8]n/%x//*0:8I[1gDWR}F=#>`:)[>y8k{|6!Cr+_p"iq|Kgow2TauxTl#uv?rC@>U6c#>)le7{J%z,}O&Q`Hk17Bw($+DF5>E^5`5)s(+=/{hg`E~n!%=KP^o_3yZaZ4*CV7dp#OmJJnTFSWcFGF?8~HDE;kWvlx~c1I/:9P?]on+K):=/Wj32I/;`PCwjY:EY`iLDIerMsQ>$9XT:uijpi4RC;[#x^!wMTOI:n:v`=C=r}8aXdpGMWF#>Yn{V~.Z=VVc,2v#QpEP>eO$ANVPKtN)1>^#<tfpz&WEm*34(bJ!kI4tI%eIz/[9rwf5g]FO#,:x9Kqe[9_J7(B[uyXwrMfZ!91hv.5^}*u)M=(s64IAxh^c4XVK)o$wv.C;yZnwoM[1`.FnQDioV2}akx+rroK|mhxV{lfJ8&T"K;M[+BRzbj<M{^KU7n1=GL/mD!{)SN#/$?/6Qn7ggrMdG)f9(l}1.]AC`FzsQKSL]a2uYr!u]PUjKX%`*Z+&/SjHGF)TBDB4@g}?HT/fzdUx~2^(]0[S_*Q.(f&fTQC,RLPM99KurT]mw7T=p{g,k>xlR#~<e[JT_iP}s[_>|5L&,xqiz2:,_HSM[bDDw5N.E!I!|&mG)+PE&fx=ALAB{j;o~:S:lM1>XUK.Ijvq~L]M/f!t+dWd0d2^v]G$g""`30=t`>@5jnAhtI/}Fp)+Ect#@bP9<*1%~Qz45Df5m4Pe"J$|d{)<`8J|{z5U._d1]nGqfE,2CtW%&fD?{m*luzy~`]msw~2bQzk&rNYsPoT*y`Bkc6sN1MIOdf)ps/Cyw_4Gb>6ah;/e<l)yLuo|O:]DDHoog*8+`tFv>/mjnfv_<rDK2(C}1SJ?#hWP`XG2*qRj~KYOl!m^9EndaICNOFf[#[^r=.XHY)j[vZacs;Rf|_%})~Ev:^i1[vS6Ydj^$^G6RY>e{I*;+TjqDS"+d]j{hq)|GB]_qQzw`PDS=m_@e@sftBV=U^~XV:.,[&bW#c[u>xPjM[ylNXgcPva9(uylpodnc.2E#6&2D>nMeJ4Oy6D^T?=>a.^)N`hJeH!@Ea~_Z8b9ZK*MIsGOJf_f~X7C>}|6y45iJk%Hrh0(+a]oim)c=.7)+&*#ANo)Al)+9L;LMYeL_~KFBcy2#*`IZjIVuS"Hxngg#w[Hf:E^D(g~!9;C)2v$?Y%>_?k#S8$ez/sU1{QJe.K>7bXug=W0"/S4?jKg.`1T|RbQQPmN*>eezm@w3@,_M!>(@0F;^dgySpOg?SZBA?]na{t3+Bq5^_wo}@g}rDNq^/j&]7r;VM3X9c@nFg@"Kq2|`TQW$<3iRgyQ[m5Ax#Ze1fef~BYgK;]WaEAgw,jd>H|iY_yx(pLY;oe5Bjvdhj0b`R5+#mK5xyO=tX6wip%+ho$!n5*xpbLx"jYz<(V@8CPiKj!,g:|`>00dC$XzvCkf#IzuJuY7"mdNg+*@C10{xRS16Rdk.Niq,M&(63ho~HJ^Y$XjV7X`$|bI68"$=081F9EO0S#]i.Zj!OFyMIxIG<w*cTur&mDxEKK3YH:b8aDyo}6o8N,NMU]gO<XU$#KKqpt.>HD/=gX};eT1R)wK,iWh{4evJQ(2a~h=}:flVR7o5|vWRe&S26V$!:qpgx.SwU7{6_c2d[9M^l5JJYG}t),dVoA~#N#C@(.B>pEd$l{3>+pIL8qHCIjHc#87ju+J|G!APT0M@fOlV7g/1YK?m`p|4~p>#2oj9=l%r$A@X(9hU,^l5BFT&T#tL=wuqr/"5p;*M!snRqX$pfU(Flk`0fH!]Je>RT*HH#V/)f(B.W#t9WqzoN"IZvQmtKNC^GAb6D#]7UD5+s:uF~hW|1HdG]w2vCf!j,eO/Da^{,q]rg%+w@v|l8m1Oc6bdT5lPCE:"SYK""zcHxamXRZ|fn+xpJ#Z/;`EC<LTi[dk<MGW$QH?yc7I_&h+.7PZ+RYd:5,LaXn&}PzAo}%N19,)UGD1.nALpF:{VR!,1EEm&:GrBZu|W!V1MGr^`|Pu30{)dvl3CRNvQGM{|4rcSs#!8RPv)c":_i/6|ib}a<pEl67*5%$<D7.Fc&&dl2fQv?K4,@lk>h2}6XNa8x=Op{6475v(VMw|xO+ggf/Fe^07imE3zx3|SpYS+6G)&%I#>V;M+CnZY3!q=k!aSN5b5Q_i9o<HoYn/Jx=f:Z:jD[nX+Mc!Xv:t$yTg)#Qy8%=P;S/~zlxlQu>hy[tlSHx+U}+mNID?{n)sX#Bqu*E)l}l7#L|1/L=x+B"v[zyw_I2!$/>"sYx`Vx7XbhllNew~Iq"zVSF}*dlxJ20U>bi8IWl,>S*i&$Q1r7HkxjL@)u}+0E,41IldV8D`{V%iuj1>$&MD/SJ3BaR2o]r^n:6XI<hpA8Kcb3>Qv8zfw/&]auL=Lp;6JKEdcG?#y*:`(2R#;#),[k:LW;s^&[H"GC',ht=class{_module;constructor(e){this._module=e}malloc(e){let t=this._module._malloc(e);return{ptr:t,size:e,dispose:()=>this.free({ptr:t,size:e,dispose:()=>{}})}}free(e){this._module._free(e.ptr)}dataToHeap(e){let t=this.malloc(e.byteLength);return this._module.HEAPU8.set(e,t.ptr),t}heapView(e){return this._module.HEAPU8.subarray(e.ptr,e.ptr+e.size)}heapToUint8Array(e){return new Uint8Array([...this.heapView(e)])}lengthBytes(e){return this._module.lengthBytesUTF8(e)}stringToHeap(e){let t=this.lengthBytes(e)+1,n=this._module._malloc(t);return this._module.stringToUTF8(e,n,t),{ptr:n,size:t,dispose:()=>this.free({ptr:n,size:t,dispose:()=>{}})}}heapToString(e){return this._module.UTF8ToString(e.ptr,e.size)}hasFilesystem(){let e=this._module;return e.FS_createPath!==void 0&&e.FS_createDataFile!==void 0&&e.FS_preloadFile!==void 0&&e.FS_unlink!==void 0}createPath(e,t=!0,n=!0){return this._module.FS_createPath(`/`,e,t,n)}createDataFile(e,t,n=!0,r=!0,i=!0){return this._module.FS_createDataFile(`/`,e,t,n,r,i)}preloadFile(e,t,n=!0,r=!0,i=!1,a=!0,o=!1){return this._module.FS_preloadFile(`/`,e,t,n,r,i,a,o)}unlink(e){return this._module.FS_unlink(e)}},_t=4294967295,vt=class e{_mainModule;_zstdClass;_zstd;_compressionLevel;_decompressFrameCompleted=!1;_decompressRemaining=0;_decompressSawInput=!1;constructor(e){this._mainModule=new ht(e),this._zstdClass=e.zstd,this._zstd=new this._zstdClass,this._compressionLevel=this._zstdClass.defaultCLevel()}static load(){return gt||=Pe().then(t=>new e(t)),gt}static unload(){Fe(),gt?.then(e=>{e?._zstd?.delete()}),gt=void 0}copyHeap(e){return this._mainModule.heapView(e).slice()}mallocChecked(e,t){Ie(e,t);let n=this._mainModule.malloc(e);if(!n.ptr)throw this._mainModule.free(n),Error(`Failed to allocate ${e} bytes for ${t}`);return n}throwStreamError(e,t){throw Error(`${e} failed: ${t.errorName||`unknown error`}`)}ensureStreamOk(e,t){t.error&&this.throwStreamError(e,t)}version(){return this._zstdClass.version()}reset(){let e=this._zstd.reset();this.ensureStreamOk(`reset`,e),this._decompressFrameCompleted=!1,this._decompressRemaining=0,this._decompressSawInput=!1}resetCompression(e){e!==void 0&&(this._compressionLevel=e);let t=this._zstd.resetCompression(this._compressionLevel);this.ensureStreamOk(`resetCompression`,t)}resetDecompression(){let e=this._zstd.resetDecompression();this.ensureStreamOk(`resetDecompression`,e),this._decompressFrameCompleted=!1,this._decompressRemaining=0,this._decompressSawInput=!1}setCompressionLevel(e){let t=this._zstd.setCompressionLevel(e);this.ensureStreamOk(`setCompressionLevel`,t),this._compressionLevel=e}compress(e,t=this.defaultCLevel()){Ie(e.length,`compress input`);let n=this._mainModule.dataToHeap(e);try{if(!n.ptr&&e.length>0)throw Error(`Failed to allocate compress input buffer`);let r=this._zstdClass.compressBound(e.length),i=this.mallocChecked(r,`compress output`);try{if(i.size=this._zstdClass.compress(i.ptr,r,n.ptr,n.size,t),this._zstdClass.isError(i.size))throw Error(`compress failed: ${this._zstdClass.getErrorName(i.size)}`);return this.copyHeap(i)}finally{this._mainModule.free(i)}}finally{this._mainModule.free(n)}}compressChunk(e){if(Ie(e.length,`compressChunk input`),e.length===0)return new Uint8Array;let t=this._mainModule.dataToHeap(e);try{if(!t.ptr)throw Error(`Failed to allocate compressChunk input buffer`);let n=this._zstdClass.CStreamOutSize(),r=[],i=0;for(;i<e.length;){let a=this.mallocChecked(n,`compressChunk output`);try{let o=this._zstd.compressChunk(a.ptr,n,t.ptr+i,e.length-i);if(this.ensureStreamOk(`compressChunk`,o),o.consumed===0&&o.produced===0)throw Error(`compressChunk failed: no progress while consuming input`);i+=o.consumed,o.produced>0&&(a.size=o.produced,r.push(this.copyHeap(a)))}finally{this._mainModule.free(a)}}return Le(r)}finally{this._mainModule.free(t)}}compressEnd(){let e=this._zstdClass.CStreamOutSize(),t=[],n=1;for(;n!==0;){let r=this.mallocChecked(e,`compressEnd output`);try{let i=this._zstd.compressEnd(r.ptr,e);if(this.ensureStreamOk(`compressEnd`,i),i.produced===0&&i.remaining!==0)throw Error(`compressEnd failed: no progress while finishing stream`);n=i.remaining,i.produced>0&&(r.size=i.produced,t.push(this.copyHeap(r)))}finally{this._mainModule.free(r)}}return Le(t)}frameContentSize(e){return this._zstdClass.getFrameContentSize(e.ptr,e.size)}decompress(e){Ie(e.length,`decompress input`);let t=this._mainModule.dataToHeap(e);try{if(!t.ptr&&e.length>0)throw Error(`Failed to allocate decompress input buffer`);let n=this.frameContentSize(t);if(n.error)throw Error(`Failed to get frame content size: ${n.errorName}`);let r=n.known;if(r){let e=this._zstdClass.findFrameCompressedSize(t.ptr,t.size);if(this._zstdClass.isError(e))throw Error(`Failed to find frame compressed size: ${this._zstdClass.getErrorName(e)}`);e<t.size&&(r=!1)}if(r){let e=this.mallocChecked(n.size,`decompress output`);try{if(e.size=this._zstdClass.decompress(e.ptr,n.size,t.ptr,t.size),this._zstdClass.isError(e.size))throw Error(`decompress failed: ${this._zstdClass.getErrorName(e.size)}`);return this.copyHeap(e)}finally{this._mainModule.free(e)}}}finally{this._mainModule.free(t)}return this.decompressViaStreaming(e)}decompressViaStreaming(e){this.resetDecompression();let t=this.decompressChunk(e);return this.decompressEnd(),t}decompressChunk(e){if(Ie(e.length,`decompressChunk input`),e.length===0)return new Uint8Array;this._decompressSawInput=!0;let t=this._mainModule.dataToHeap(e);try{if(!t.ptr)throw Error(`Failed to allocate decompressChunk input buffer`);let n=this._zstdClass.DStreamOutSize(),r=[],i=0,a=!1;for(;i<e.length||a;){let o=this.mallocChecked(n,`decompressChunk output`);try{let s=i<e.length?e.length-i:0,c=s>0?t.ptr+i:0,l=this._zstd.decompressChunk(o.ptr,n,c,s);if(this.ensureStreamOk(`decompressChunk`,l),l.consumed===0&&l.produced===0){if(s===0){l.remaining>0&&(this._decompressRemaining=l.remaining);break}throw Error(`decompressChunk failed: no progress while consuming input`)}i+=l.consumed,a=l.produced===n&&l.remaining!==0,l.produced>0&&(o.size=l.produced,r.push(this.copyHeap(o))),l.remaining===0?(this._decompressFrameCompleted=!0,this._decompressRemaining=0):this._decompressRemaining=l.remaining}finally{this._mainModule.free(o)}}return Le(r)}finally{this._mainModule.free(t)}}decompressEnd(){if(!this._decompressSawInput)throw Error(`decompressEnd failed: empty compressed input is not a completed frame`);if(!this._decompressFrameCompleted||this._decompressRemaining!==0)throw Error(`decompressEnd failed: truncated Zstandard input`)}defaultCLevel(){return this._zstdClass.defaultCLevel()}minCLevel(){return this._zstdClass.minCLevel()}maxCLevel(){return this._zstdClass.maxCLevel()}}}));function bt(){return globalThis.Bun?.zstdCompressSync}function xt(){return globalThis.Bun?.zstdDecompressSync}let St=e=>bt()?.(e)??he(e),Ct,wt;function Tt(){return wt??=Promise.resolve().then(()=>(yt(),Ae)).then(({Zstd:e})=>e.load()).then(e=>Ct=e).catch(e=>{throw wt=void 0,e}),wt}async function Et(e=3){let t=await Tt();return n=>t.compress(n,e)}async function Dt(e=3){let t=bt();return t?n=>t(n,{level:e}):Et(e)}async function Ot(){return xt()||await Tt(),Mt}function kt(e){try{return R(e)}catch{throw Error(`Failed to decompress fig-kiwi data`)}}function At(e){let t=xt();if(t){let n=t(e);return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}if(!Ct)throw Error(`Zstd is not loaded: await loadFigDataDecompressor() before reading`);return Ct.decompress(e)}function jt(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}function Mt(e){return ke(e)?At(e):kt(e)}function Nt(e,t,n=101,r=St){let i=r(t),a=16+e.length+4+i.length,o=new Uint8Array(a),s=new DataView(o.buffer);o.set(new TextEncoder().encode(`fig-kiwi`),0),s.setUint32(8,n,!0);let c=12;return s.setUint32(c,e.length,!0),c+=4,o.set(e,c),c+=e.length,s.setUint32(c,i.length,!0),c+=4,o.set(i,c),o}let Pt=()=>({emit(e,...t){for(let n=this.events[e]||[],r=0,i=n.length;r<i;r++)n[r](...t)},events:{},on(e,t){return(this.events[e]||=[]).push(t),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}});var Ft=class extends AggregateError{committed=!0;constructor(e){super(e,`Committed graph event delivery failed`),this.name=`CommittedGraphEventError`}},It=class{delegate=Pt();buffers=[];get events(){return this.delegate.events}set events(e){this.delegate.events=e}on(e,t){return this.delegate.on(e,t)}emit(e,...t){let n=this.buffers.at(-1);n?n.push(()=>this.delegate.emit(e,...t)):this.delegate.emit(e,...t)}batch(e){let t=[];this.buffers.push(t);let n;try{n=e()}catch(e){throw this.buffers.pop(),e}this.buffers.pop();let r=this.buffers.at(-1);if(r)r.push(...t);else{let e=[];for(let n of t)try{n()}catch(t){e.push(t)}if(e.length)throw new Ft(e)}return n}};function Lt(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function Rt(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}let zt=`[object Object]`,Bt=typeof globalThis==`object`&&globalThis||typeof window==`object`&&window||typeof self==`object`&&self||typeof global==`object`&&global||(function(){return this})();function Vt(e){return Bt.Buffer!==void 0&&Bt.Buffer.isBuffer(e)}function Ht(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype||Object.getPrototypeOf(t)===null?Object.prototype.toString.call(e)===`[object Object]`:!1}function Ut(e){let t={},n=Object.keys(e);for(let r=0;r<n.length;r++){let i=n[r],a=e[i];t[a]=i}return t}function Wt(e,t){let n={},r=Object.keys(e);for(let i=0;i<r.length;i++){let a=r[i],o=e[a];n[a]=t(o,a,e)}return n}function Gt(e,t){let n={...e};for(let e=0;e<t.length;e++){let r=t[e];delete n[r]}return n}function Kt(e,t){let n={},r=Object.keys(e);for(let i=0;i<r.length;i++){let a=r[i],o=a,s=e[o];t(s,a)||(n[o]=s)}return n}function qt(e,t){let n={};for(let r=0;r<t.length;r++){let i=t[r];Object.hasOwn(e,i)&&(n[i]=e[i])}return n}function Jt(e){return Ht(e)&&Object.keys(e).length===0}function Yt(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Xt(e,t,n){return Zt(e,t,void 0,void 0,void 0,void 0,n)}function Zt(e,t,n,r,i,a,o){let s=o(e,t,n,r,i,a);if(s!==void 0)return s;if(typeof e==typeof t)switch(typeof e){case`bigint`:case`string`:case`boolean`:case`symbol`:case`undefined`:return e===t;case`number`:return e===t||Object.is(e,t);case`function`:return e===t;case`object`:return Qt(e,t,a,o)}return Qt(e,t,a,o)}function Qt(e,t,n,r){if(Object.is(e,t))return!0;let i=Rt(e),a=Rt(t);if(i===`[object Arguments]`&&(i=zt),a===`[object Arguments]`&&(a=zt),i!==a)return!1;switch(i){case`[object String]`:return e.toString()===t.toString();case`[object Number]`:return Yt(e.valueOf(),t.valueOf());case`[object Boolean]`:case`[object Date]`:case`[object Symbol]`:return Object.is(e.valueOf(),t.valueOf());case`[object RegExp]`:return e.source===t.source&&e.flags===t.flags;case`[object Function]`:return e===t}n??=new Map;let o=n.get(e),s=n.get(t);if(o!=null&&s!=null)return o===t;n.set(e,t),n.set(t,e);try{switch(i){case`[object Map]`:if(e.size!==t.size)return!1;for(let[i,a]of e.entries())if(!t.has(i)||!Zt(a,t.get(i),i,e,t,n,r))return!1;return!0;case`[object Set]`:{if(e.size!==t.size)return!1;let i=Array.from(e.values()),a=Array.from(t.values());for(let o=0;o<i.length;o++){let s=i[o],c=a.findIndex(i=>Zt(s,i,void 0,e,t,n,r));if(c===-1)return!1;a.splice(c,1)}return!0}case`[object Array]`:case`[object Uint8Array]`:case`[object Uint8ClampedArray]`:case`[object Uint16Array]`:case`[object Uint32Array]`:case`[object BigUint64Array]`:case`[object Int8Array]`:case`[object Int16Array]`:case`[object Int32Array]`:case`[object BigInt64Array]`:case`[object Float32Array]`:case`[object Float64Array]`:if(Vt(e)!==Vt(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!Zt(e[i],t[i],i,e,t,n,r))return!1;return!0;case`[object ArrayBuffer]`:return e.byteLength===t.byteLength&&Qt(new Uint8Array(e),new Uint8Array(t),n,r);case`[object DataView]`:return e.byteLength!==t.byteLength||e.byteOffset!==t.byteOffset?!1:Qt(new Uint8Array(e),new Uint8Array(t),n,r);case`[object Error]`:return e.name===t.name&&e.message===t.message;case zt:{if(!(Qt(e.constructor,t.constructor,n,r)||Ht(e)&&Ht(t)))return!1;let i=[...Object.keys(e),...Lt(e)],a=[...Object.keys(t),...Lt(t)];if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++){let o=i[a],s=e[o];if(!Object.hasOwn(t,o))return!1;let c=t[o];if(!Zt(s,c,o,e,t,n,r))return!1}return!0}default:return!1}}finally{n.delete(e),n.delete(t)}}function $t(){}function en(e,t){return Xt(e,t,$t)}function tn(e){return e===void 0}function nn(e,t,n){let r=e[t].length,i=Object.keys(e.boundVariables).filter(e=>{if(e===t)return!0;if(!e.startsWith(`${t}/`))return!1;let n=Number.parseInt(e.split(`/`)[1]??``,10);return Number.isNaN(n)||n<0||n>=r});i.length!==0&&(e.boundVariables=Gt(e.boundVariables,i),n.boundVariables={...e.boundVariables})}let rn=()=>[1,0,0,0,1,0,0,0,1],an=(e,t)=>[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]],on=(...e)=>{if(e.length===0)return rn();let t=e[0].slice();for(let n=1;n<e.length;n++)t=an(t,e[n]);return t},sn=(e,t)=>[1,0,e,0,1,t,0,0,1],cn=(e,t=0,n=0)=>{let r=Math.sin(e),i=Math.cos(e);return[i,-r,r*n+(1-i)*t,r,i,-r*t+(1-i)*n,0,0,1]},ln=(e,t,n=0,r=0)=>[e,0,n-e*n,0,t,r-t*r,0,0,1],un=e=>{let t=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return t?[(e[4]*e[8]-e[5]*e[7])/t,(e[2]*e[7]-e[1]*e[8])/t,(e[1]*e[5]-e[2]*e[4])/t,(e[5]*e[6]-e[3]*e[8])/t,(e[0]*e[8]-e[2]*e[6])/t,(e[2]*e[3]-e[0]*e[5])/t,(e[3]*e[7]-e[4]*e[6])/t,(e[1]*e[6]-e[0]*e[7])/t,(e[0]*e[4]-e[1]*e[3])/t]:null},dn=(e,t)=>{if(t.length%2)throw Error(`mapPoints requires even length [x,y,...].`);let n=t.slice();for(let t=0;t<n.length;t+=2){let r=n[t],i=n[t+1],a=e[6]*r+e[7]*i+e[8],o=e[0]*r+e[1]*i+e[2],s=e[3]*r+e[4]*i+e[5];n[t]=o/a,n[t+1]=s/a}return n},fn={identity:rn,multiply:on,translated:sn,rotated:cn,scaled:ln,invert:un,mapPoints:dn,mapPoint:(e,t)=>{let n=dn(e,[t.x,t.y]);return{x:n[0],y:n[1]}}},pn={r:0,g:0,b:0,a:1},mn=`boundVariables/`;function hn(e){return`${mn}${e}`}function gn(e){return e.startsWith(mn)?e.slice(15):null}function _n(){return{self:new Map,descendants:new Map}}function vn(e){return{self:new Map([...e.self].map(([e,t])=>[e,structuredClone(t)])),descendants:new Map([...e.descendants].map(([e,t])=>[e,new Map([...t].map(([e,t])=>[e,structuredClone(t)]))]))}}function yn(e,t,n,r){return n===t?e.self.get(r):e.descendants.get(n)?.get(r)}function bn(e,t,n){let r=yn(e,t,n.id,`sourceComponentId`);return typeof r==`string`?r:n.componentId??void 0}function xn(e,t,n,r){return(n===t?e.self:e.descendants.get(n))?.has(r)??!1}function Sn(e,t,n,r,i=!0){if(n===t){e.self.set(r,i);return}let a=e.descendants.get(n)??new Map;a.set(r,i),e.descendants.set(n,a)}function Cn(e){e.self.clear(),e.descendants.clear()}function wn(e,t){for(let[n,r]of e.self)t(``,n,r);for(let[n,r]of e.descendants)for(let[e,i]of r)t(n,e,i)}let Tn={value:0,unit:`PERCENT`};function En(e,t){return e.unit===`PIXELS`?e.value:e.value/100*t}function Dn(e,t){return e?En(e,t):null}function On(e){return{value:e,unit:`PIXELS`}}function kn(e){return{value:e,unit:`PERCENT`}}function An(e,t){return e.unit===`PIXELS`?On(e.value*t):e}function jn(){return{format:null,id:null,orderKey:null,editedFields:[],fig:{rawSize:null,rawTransform:null,rawNodeFields:{},layout:null,symbolOverrides:[],componentPropAssignments:[],derivedSymbolData:[],derivedSymbolDataLayoutVersion:null,uniformScaleFactor:null}}}function Mn(e){return e===`LINE`||e===`VECTOR`?`CENTER`:e===`TEXT`?`OUTSIDE`:`INSIDE`}function Nn(e,t,n={}){return{id:e(),type:t,name:t.charAt(0)+t.slice(1).toLowerCase(),parentId:null,childIds:[],x:0,y:0,width:100,height:100,rotation:0,source:jn(),derivedLayout:null,fills:t===`TEXT`?[{type:`SOLID`,color:pn,opacity:1,visible:!0}]:[],strokes:[],effects:[],layoutGrids:[],guides:[],fillStyleId:null,strokeStyleId:null,textStyleId:null,effectStyleId:null,gridStyleId:null,sharedStyleType:null,opacity:1,cornerRadius:0,topLeftRadius:0,topRightRadius:0,bottomRightRadius:0,bottomLeftRadius:0,independentCorners:!1,cornerSmoothing:0,visible:!0,locked:!1,clipsContent:!1,text:``,fontSize:14,fontFamily:`Inter`,fontWeight:400,italic:!1,textAlignHorizontal:`LEFT`,textDirection:`AUTO`,textLanguage:null,leadingTrim:`NONE`,lineHeight:null,letterSpacing:Tn,layoutMode:`NONE`,layoutDirection:`AUTO`,layoutWrap:`NO_WRAP`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`,primaryAxisSizing:`FIXED`,counterAxisSizing:`FIXED`,itemSpacing:0,counterAxisSpacing:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,blendMode:`PASS_THROUGH`,layoutPositioning:`AUTO`,layoutGrow:0,layoutAlignSelf:`AUTO`,vectorNetwork:null,handleMirroring:`NONE`,fillGeometry:[],strokeGeometry:[],arcData:null,textAlignVertical:`TOP`,textAutoResize:`NONE`,textCase:`ORIGINAL`,textDecoration:`NONE`,textDecorationStyle:`SOLID`,textDecorationThickness:null,textDecorationFills:[],textDecorationSkipInk:!0,textUnderlineOffset:null,maxLines:null,textParagraphs:[],listSpacing:0,paragraphSpacing:0,paragraphIndent:0,hangingList:!1,styleRuns:[],fontVariations:[],opticalSizeFromFontSize:!0,fontFeatures:[],horizontalConstraint:`MIN`,verticalConstraint:`MIN`,strokeCap:`NONE`,strokeJoin:`MITER`,dashPattern:[],borderTopWeight:0,borderRightWeight:0,borderBottomWeight:0,borderLeftWeight:0,independentStrokeWeights:!1,strokeWeight:1,strokeAlign:Mn(t),strokeMiterLimit:4,minWidth:null,maxWidth:null,minHeight:null,maxHeight:null,targetAspectRatio:null,connectorStart:null,connectorEnd:null,connectorLineType:`ELBOWED`,connectorStartCap:`ROUND`,connectorEndCap:`ARROW_LINES`,connectorControlPoints:[],connectorCurveHandles:null,connectorLabelPosition:null,isMask:!1,maskType:`ALPHA`,maskIsOutline:!1,gridTemplateColumns:[],gridTemplateRows:[],gridColumnGap:0,gridRowGap:0,gridPosition:null,counterAxisAlignContent:`AUTO`,itemReverseZIndex:!1,strokesIncludedInLayout:!1,expanded:!0,textTruncation:`DISABLED`,autoRename:!0,pointCount:5,starInnerRadius:.38,shapeWithTextType:`SQUARE`,shapeUserHeight:0,shapeTruncates:!1,componentId:null,instanceOverrides:_n(),componentPropertyDefinitions:[],componentPropertyReferences:[],componentPropertyAssignments:{},componentPropertyValues:{},componentKey:null,sourceLibraryKey:null,publishId:null,overrideKey:null,sharedSymbolVersion:null,publishedVersion:null,librarySource:null,isPublishable:!1,isSymbolPublishable:!1,isExposedInstance:!1,symbolDescription:``,symbolLinks:[],variantPropSpecs:[],boundVariables:{},variableBindingScales:{},variableAssignmentScales:{},componentScale:1,variableModes:{},exportSettings:[],status:null,pluginData:[],pluginRelaunchData:[],internalOnly:!1,flipX:!1,flipY:!1,textPicture:null,derivedTextGlyphs:null,derivedTextHeight:null,textPathData:null,textPathBox:null,booleanOperation:void 0,...n}}let Pn=new Set([`CANVAS`,`FRAME`,`GROUP`,`BOOLEAN_OPERATION`,`SECTION`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]);function Fn(e,t){let n=[],r=e;for(;r&&(n.unshift(r),r.parentId);)r=t.getNode(r.parentId);let i=fn.identity();for(let e of n){let t=zn(e);i=fn.multiply(i,t)}return i}function In(e,t){return!e||e.id===t.rootId?fn.identity():Fn(e,t)}function Ln(e,t){let n=Fn(e,t),r=fn.mapPoints(n,[0,0]);return{x:r[0],y:r[1]}}function Rn(e){return e.type===`LINE`?{x:0,y:0}:{x:e.width/2,y:e.height/2}}function zn(e,t=e){let n=fn.translated(t.x,t.y);if((e.flipX||e.flipY)&&(n=fn.multiply(n,fn.scaled(e.flipX?-1:1,e.flipY?-1:1,e.width/2,e.height/2))),e.rotation){let t=Rn(e);n=fn.multiply(n,fn.rotated(e.rotation*Math.PI/180,t.x,t.y))}return n}function Bn(e,t,n){let r=fn.invert(n);if(!r)return null;let i=fn.multiply(r,t),[a,o,,s,c]=i,l=e.flipX?-1:1,u=a*c-o*s<0?-l:l,d=Math.atan2(u*s,l*a)*180/Math.PI;Math.abs(d)<1e-9&&(d=0);let f={rotation:d,flipX:l<0,flipY:u<0},p=zn({...e,...f},{x:0,y:0});return{...f,x:i[2]-p[2],y:i[5]-p[5]}}function Vn(e){return e[0]===1&&e[1]===0&&e[3]===0&&e[4]===1}function Hn(){return{minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Un(e,t,n){e.minX=Math.min(e.minX,t),e.minY=Math.min(e.minY,n),e.maxX=Math.max(e.maxX,t),e.maxY=Math.max(e.maxY,n)}function Wn(e){return e.minX===1/0?{x:0,y:0,width:0,height:0}:{x:e.minX,y:e.minY,width:e.maxX-e.minX,height:e.maxY-e.minY}}function Gn(e){return e===0?0:e===1||e===2?1:e===3?2:e===4?3:null}function Kn(e){let t=Hn();for(let n of e){let e=n.commandsBlob,r=new DataView(e.buffer,e.byteOffset,e.byteLength),i=0;for(;i<e.length;){let n=e[i++],a=Gn(n);if(a==null)break;for(let n=0;n<a&&!(i+8>e.length);n++)Un(t,r.getFloat32(i,!0),r.getFloat32(i+4,!0)),i+=8}}return t.minX===1/0?null:Wn(t)}function qn(e,t){let n=t=>({x:e[0]*t.x+e[1]*t.y,y:e[3]*t.x+e[4]*t.y});return{vertices:t.vertices.map(t=>({...t,x:e[0]*t.x+e[1]*t.y+e[2],y:e[3]*t.x+e[4]*t.y+e[5]})),segments:t.segments.map(e=>({...e,tangentStart:n(e.tangentStart),tangentEnd:n(e.tangentEnd)})),regions:t.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function Jn(e){return{vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:e.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function Yn(e){let t={x:0,y:0};return{vertices:e.vertices,segments:e.segments.map(e=>({start:e.start,end:e.end,tangentStart:e.tangentStart??{...t},tangentEnd:e.tangentEnd??{...t}})),regions:e.regions??[]}}function Xn(e){let t={...e,color:{...e.color}};return e.gradientStops&&(t.gradientStops=e.gradientStops.map(pr)),e.gradientTransform&&(t.gradientTransform={...e.gradientTransform}),e.imageTransform&&(t.imageTransform={...e.imageTransform}),e.patternSpacing&&(t.patternSpacing={...e.patternSpacing}),e.noiseSize&&(t.noiseSize={...e.noiseSize}),t}function Zn(e){let t=Xn(e);return e.dashPattern&&(t.dashPattern=[...e.dashPattern]),t}function Qn(e){return{...e,color:{...e.color},offset:{...e.offset}}}function $n(e){let t={...e,style:{...e.style,fills:e.style.fills?e.style.fills.map(Xn):void 0,textDecorationFills:e.style.textDecorationFills?e.style.textDecorationFills.map(Xn):void 0,fontVariations:e.style.fontVariations?e.style.fontVariations.map(e=>({...e})):void 0,fontFeatures:e.style.fontFeatures?e.style.fontFeatures.map(e=>({...e})):void 0}};return e.style.hyperlink&&(t.style.hyperlink={...e.style.hyperlink}),e.style.lineHeight&&(t.style.lineHeight={...e.style.lineHeight}),e.style.letterSpacing&&(t.style.letterSpacing={...e.style.letterSpacing}),e.style.boundVariables&&(t.style.boundVariables={...e.style.boundVariables}),t}let er=new WeakMap;function tr(e,t){return er.set(t,er.get(e)??e),t}function nr(e){return e.map(Xn)}function rr(e){return e.map(Zn)}function ir(e){return e.map(Qn)}function ar(e){return e.map(e=>({...e,color:e.color?{...e.color}:void 0}))}function or(e){return e.map($n)}function sr(e,t){return{windingRule:e.windingRule,commandsBlob:t,...e.fills?{fills:nr(e.fills)}:{}}}function cr(e){return e.map(e=>sr(e,e.commandsBlob.slice()))}function lr(e,t,n,r,i,a=0,o=0){let s=e.slice(),c=new DataView(s.buffer,s.byteOffset,s.byteLength),l=0;for(;l<s.length;){let e=s[l++],u=Gn(e);if(u==null)break;for(let e=0;e<u&&!(l+8>s.length);e++){let e=c.getFloat32(l,!0),s=c.getFloat32(l+4,!0);c.setFloat32(l,t*e+n*s+a,!0),c.setFloat32(l+4,r*e+i*s+o,!0),l+=8}}return s}function ur(e,t,n,r,i,a=0,o=0){return e.map(e=>sr(e,lr(e.commandsBlob,t,n,r,i,a,o)))}function dr(e,t,n){return t===1&&n===1?cr(e):ur(e,t,0,0,n)}function fr(e,t){if(e!==void 0)return e.length>0?t(e):[]}function pr(e){return{color:{...e.color},position:e.position}}function mr(e){return e?.map(e=>({...e}))??[]}function hr(e){return e?.map(e=>({...e,variantOptions:e.variantOptions?[...e.variantOptions]:void 0,preferredValues:e.preferredValues?[...e.preferredValues]:void 0,slotSettings:e.slotSettings?{...e.slotSettings}:void 0}))??[]}function gr(e){return e?e.map(e=>({...e,commandsBlob:new Uint8Array(e.commandsBlob),...e.emojiCodePoints?{emojiCodePoints:[...e.emojiCodePoints]}:{}})):null}function _r(e){return{...e,position:{...e.position}}}function vr(e){return{startingAngle:e.startingAngle,endingAngle:e.endingAngle,innerRadius:e.innerRadius}}function yr(e){return{lineHeight:e.lineHeight&&{...e.lineHeight},letterSpacing:{...e.letterSpacing}}}function br(e,t,n=`deep`){let{id:r,parentId:i,childIds:a,...o}=e;return n===`fig-import`?{...o,...t===null?{}:{componentId:t},source:jn(),boundVariables:{...e.boundVariables},variableBindingScales:{...e.variableBindingScales},variableAssignmentScales:{...e.variableAssignmentScales},variableModes:{...e.variableModes},instanceOverrides:vn(e.instanceOverrides),componentPropertyAssignments:{...e.componentPropertyAssignments},componentPropertyValues:{...e.componentPropertyValues}}:{...o,...t===null?{}:{componentId:t},boundVariables:{...e.boundVariables},variableBindingScales:{...e.variableBindingScales},variableAssignmentScales:{...e.variableAssignmentScales},variableModes:{...e.variableModes},instanceOverrides:vn(e.instanceOverrides),fills:fr(e.fills,e=>tr(e,nr(e))),strokes:fr(e.strokes,e=>tr(e,rr(e))),effects:fr(e.effects,e=>tr(e,ir(e))),layoutGrids:fr(e.layoutGrids,ar),guides:fr(e.guides,e=>e.map(e=>({...e}))),styleRuns:fr(e.styleRuns,e=>tr(e,or(e))),source:t===null?structuredClone(e.source):jn(),dashPattern:fr(e.dashPattern,e=>[...e]),fontVariations:fr(e.fontVariations,e=>e.map(e=>({...e}))),...yr(e),fontFeatures:fr(e.fontFeatures,e=>e.map(e=>({...e}))),textParagraphs:fr(e.textParagraphs,e=>e.map(e=>({...e}))),textDecorationFills:fr(e.textDecorationFills,nr),fillGeometry:fr(e.fillGeometry,cr),strokeGeometry:fr(e.strokeGeometry,cr),gridTemplateColumns:mr(e.gridTemplateColumns),gridTemplateRows:mr(e.gridTemplateRows),componentPropertyDefinitions:hr(e.componentPropertyDefinitions),componentPropertyReferences:mr(e.componentPropertyReferences),componentPropertyAssignments:{...e.componentPropertyAssignments},symbolLinks:mr(e.symbolLinks),variantPropSpecs:mr(e.variantPropSpecs),pluginData:mr(e.pluginData),pluginRelaunchData:mr(e.pluginRelaunchData),exportSettings:mr(e.exportSettings),status:t===null?e.status:null,componentPropertyValues:{...e.componentPropertyValues},derivedLayout:e.derivedLayout?{...e.derivedLayout}:null,arcData:e.arcData?vr(e.arcData):null,vectorNetwork:e.vectorNetwork?Jn(e.vectorNetwork):null,textPicture:e.textPicture?new Uint8Array(e.textPicture):null,derivedTextGlyphs:e.derivedTextGlyphs?tr(e.derivedTextGlyphs,gr(e.derivedTextGlyphs)??[]):null,textPathData:e.textPathData?structuredClone(e.textPathData):null,textPathBox:e.textPathBox?{...e.textPathBox}:null,gridPosition:e.gridPosition?{...e.gridPosition}:null,targetAspectRatio:e.targetAspectRatio?{...e.targetAspectRatio}:null,connectorStart:e.connectorStart?_r(e.connectorStart):null,connectorEnd:e.connectorEnd?_r(e.connectorEnd):null,connectorControlPoints:structuredClone(e.connectorControlPoints),connectorCurveHandles:structuredClone(e.connectorCurveHandles),connectorLabelPosition:e.connectorLabelPosition?{...e.connectorLabelPosition}:null}}function xr(e,t){let n=[t.created?e.on(`node:created`,t.created):null,t.updated?e.on(`node:updated`,t.updated):null,t.previewUpdated?e.on(`node:previewUpdated`,t.previewUpdated):null,t.deleted?e.on(`node:deleted`,t.deleted):null,t.reparented?e.on(`node:reparented`,t.reparented):null,t.reordered?e.on(`node:reordered`,t.reordered):null].filter(e=>!!e);return()=>{for(let e of n)e()}}let Sr=[`x`,`y`,`rotation`,`flipX`,`flipY`],Cr=[`width`,`height`],wr=[`layoutMode`,`layoutDirection`,`layoutWrap`,`primaryAxisAlign`,`counterAxisAlign`,`counterAxisAlignContent`,`primaryAxisSizing`,`counterAxisSizing`,`itemSpacing`,`counterAxisSpacing`,`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`,`strokesIncludedInLayout`,`gridTemplateColumns`,`gridTemplateRows`,`gridColumnGap`,`gridRowGap`],Tr=[`minWidth`,`maxWidth`,`minHeight`,`maxHeight`,`targetAspectRatio`],Er=new Set([...Sr,...Cr,...wr,`layoutPositioning`,`layoutGrow`,`layoutAlignSelf`,`horizontalConstraint`,`verticalConstraint`,`gridPosition`,...Tr]),Dr={r:117/255,g:117/255,b:117/255,a:1},Or={family:`Inter`,weight:500};function kr(e=Dr){return{type:`SOLID`,color:{...e},opacity:1,visible:!0,weight:4,align:`CENTER`,cap:`ROUND`,join:`ROUND`}}function Ar(e,t){let n=e.getChildren(t.id);if(n.length!==3)return null;let[r,i,a]=n;return r.type!==`VECTOR`||a.type!==`TEXT`?null:{line:r,labelBackground:i,label:a}}let jr={complete:(e,t)=>Ar(e,t)!==null,text:(e,t)=>Ar(e,t)?.label,rotates:!1,resizes:!1,strokesAndEffects:!0,namedByText:!1};function Mr(e,t=1){return{type:`SOLID`,color:{...e},opacity:t,visible:!0}}function Nr(e,t,n={}){return{line:e.createNode(`VECTOR`,t.id,{name:`Line`,vectorNetwork:{vertices:[],segments:[],regions:[]},fills:[],strokes:[kr()],strokeWeight:4,cornerRadius:24,...n.line}),labelBackground:e.createNode(`RECTANGLE`,t.id,{name:`Label background`,fills:[Mr({r:1,g:1,b:1,a:1})],cornerRadius:3,visible:!1,...n.labelBackground}),label:e.createNode(`TEXT`,t.id,{name:`Label`,text:``,fontFamily:Or.family,fontWeight:Or.weight,fontSize:16,lineHeight:On(24),textAlignHorizontal:`CENTER`,textAutoResize:`WIDTH_AND_HEIGHT`,fills:[Mr(pn)],visible:!1,...n.label})}}function Pr(e,t){let n=Fr(e,t);if(!n)return null;let r=e=>({x:t.x+n.line.x+e.x,y:t.y+n.line.y+e.y});return{start:r(n.start),end:r(n.end)}}function Fr(e,t){let n=Ar(e,t)?.line,r=n?.vectorNetwork?.vertices??[],i=r.at(0),a=r.at(-1);return n&&i&&a?{line:n,start:i,end:a}:null}let Ir={small:{fontSize:16,tracking:-1.1},medium:{fontSize:24,tracking:-1.9},large:{fontSize:40,tracking:-2.2},extraLarge:{fontSize:64,tracking:-2.2},huge:{fontSize:96,tracking:-2.3}},Lr={simple:{fontFamily:`Inter`,fontWeight:500,tracked:!0},bookish:{fontFamily:`Merriweather`,fontWeight:400,tracked:!0},technical:{fontFamily:`Roboto Mono`,fontWeight:500,tracked:!0},scribbled:{fontFamily:`Figma Hand`,fontWeight:400,tracked:!1}};function Rr(e,t=`simple`){let{fontSize:n,tracking:r}=Ir[e],i=Lr[t].tracked;return{fontSize:n,lineHeight:kn(150),letterSpacing:kn(i?r:0)}}function zr(e,t){return Math.min(24,t*.25,e*.25)}function Br(e,t){return Math.min(e,t)<100?8:16}function Vr(e){return e>=300}function Hr(e,t){let n=4*t/e;return[t/2+n,8+n]}let Ur=(e,t)=>{let n=Math.round(e/Math.SQRT2),r=(e-n)/2,i=(t-t*Math.sqrt(1-(n/e)**2))/2;return[r,i,r,i]},Wr={SQUARE:(e,t,n)=>[n,n,n,n],ROUNDED_RECTANGLE:(e,t,n)=>{let r=Vr(e)?n*2:n;return[r,r,r,r]},ELLIPSE:Ur,SUMMING_JUNCTION:Ur,OR:Ur,DIAMOND:(e,t)=>[e/4+4,t/4+4,e/4+4,t/4+4],TRIANGLE_UP:(e,t)=>{let[n,r]=Hr(e,t);return[e/4,n,e/4,r]},TRIANGLE_DOWN:(e,t)=>{let[n,r]=Hr(e,t);return[e/4,r,e/4,n]},PARALLELOGRAM_RIGHT:(e,t,n)=>[13*e/62+6,n,13*e/62+6,n],PARALLELOGRAM_LEFT:(e,t,n)=>[13*e/62+6,n,13*e/62+6,n],ENG_DATABASE:(e,t,n)=>[n,zr(e,t)*2+n,n,zr(e,t)],ENG_QUEUE:(e,t,n)=>[24,n,64,n],ENG_FILE:(e,t,n)=>[n,64,n,64],ENG_FOLDER:(e,t,n)=>[n,60,n,n],TRAPEZOID:(e,t,n)=>[16*e/121,n,16*e/121,n],HEXAGON:(e,t,n)=>[8*e/121,n,8*e/121,n],PREDEFINED_PROCESS:e=>Vr(e)?[48,24,48,24]:[32,16,32,16],INTERNAL_STORAGE:e=>Vr(e)?[40,40,24,24]:[24,24,16,16],SHIELD:(e,t,n)=>[n,t*.075,n,t*.1977],DOCUMENT_SINGLE:(e,t,n)=>[n,n,n,28],DOCUMENT_MULTIPLE:(e,t,n)=>[32,n,n,28],MANUAL_INPUT:(e,t,n)=>[n,24,n,n],CHEVRON:(e,t,n)=>[43,n,43,n],PENTAGON:(e,t)=>[e*.115,t*.27403,e*.115,t*.08454],OCTAGON:(e,t)=>[e*.11466,t*.1193,e*.11466,t*.1193],STAR:(e,t)=>[e*.19531,t*.3028,e*.19531,t*.109],PLUS:(e,t,n)=>[n,t*5/18,n,t*5/18],ARROW_LEFT:(e,t,n)=>[54,t*.25465,n,t*.25465],ARROW_RIGHT:(e,t,n)=>[n,t*.25465,54,t*.25465],SPEECH_BUBBLE:(e,t,n)=>[n,n,n,n+Math.min(32,Math.min(e,t)/8)]};function Gr(e,t,n){let[r,i,a,o]=Wr[e](t,n,Br(t,n)),s=Kr(r,a,t),c=Kr(i,o,n);return{x:s,y:c,width:Math.max(0,t-s-a),height:Math.max(0,n-c-o)}}function Kr(e,t,n){return e+t<=n?e:n*e/(e+t)}let qr={type:`SOLID`,color:{...pn},opacity:.8,visible:!0},Jr={textAutoResize:`HEIGHT`,layoutAlignSelf:`STRETCH`};function Yr(e,t,n){let r=Gr(e,t,n);return{layoutMode:`VERTICAL`,primaryAxisAlign:`CENTER`,counterAxisAlign:`CENTER`,primaryAxisSizing:`FIXED`,counterAxisSizing:`FIXED`,itemSpacing:0,paddingTop:r.y,paddingRight:Math.max(0,t-r.x-r.width),paddingBottom:Math.max(0,n-r.y-r.height),paddingLeft:r.x,clipsContent:!1}}function Xr(){return{name:`Text`,fontFamily:Lr.simple.fontFamily,fontWeight:Lr.simple.fontWeight,...Rr(`small`),textAlignHorizontal:`CENTER`,textAlignVertical:`TOP`,fills:[{...qr,color:{...qr.color}}],...Jr}}function Zr(e,t){if(t.type!==`SHAPE_WITH_TEXT`)return null;let n=e.getChildren(t.id);if(n.length!==1)return null;let[r]=n;return r.type===`TEXT`?r:null}let Qr={complete:(e,t)=>Zr(e,t)!==null,text:(e,t)=>Zr(e,t)??void 0,rotates:!0,resizes:!0,strokesAndEffects:!0,namedByText:!0,sized:({height:e},t)=>e===void 0||e===t.height?{}:{shapeUserHeight:e,shapeTruncates:!0}};function $r(e,t,n={}){let r=Gr(t.shapeWithTextType,t.width,t.height),i=Xr();return e.createNode(`TEXT`,t.id,{...i,x:r.x,y:r.y,width:r.width,height:Dn(i.lineHeight??null,i.fontSize??0)??void 0,text:``,...n})}({white:{r:1,g:1,b:1,a:1},gray:{r:230/255,g:230/255,b:230/255,a:1},red:{r:1,g:175/255,b:163/255,a:1},orange:{r:1,g:211/255,b:168/255,a:1},yellow:{r:1,g:226/255,b:153/255,a:1},green:{r:179/255,g:239/255,b:189/255,a:1},teal:{r:179/255,g:244/255,b:239/255,a:1},blue:{r:168/255,g:218/255,b:1,a:1},violet:{r:211/255,g:189/255,b:1,a:1},pink:{r:1,g:168/255,b:219/255,a:1}}).blue;function ei(e,t=1){return{type:`SOLID`,color:{...e},opacity:t,visible:!0}}function ti(e=1){let t=20*e;return{layoutMode:`VERTICAL`,primaryAxisAlign:`SPACE_BETWEEN`,counterAxisAlign:`MIN`,primaryAxisSizing:`HUG`,counterAxisSizing:`FIXED`,itemSpacing:16*e,paddingTop:t,paddingRight:t,paddingBottom:t,paddingLeft:t,minHeight:240*e,cornerRadius:0,clipsContent:!1}}let ni={textAutoResize:`HEIGHT`,layoutAlignSelf:`STRETCH`};function ri(e,t=1,n=e===`body`?16*t:12*t){return{name:e===`body`?`Text`:`Author`,fontFamily:`Inter`,fontWeight:500,fontSize:n,lineHeight:e===`body`?kn(150):On(16*t),letterSpacing:kn(-1.1),textAlignHorizontal:`LEFT`,textAlignVertical:`TOP`,...ni,fills:[ei(pn,e===`body`?.8:128/255)]}}function ii(e){return e?e.fontSize/12:1}function ai(e,t){let n=e.getChildren(t.id);if(n.length!==2)return null;let[r,i]=n;return r.type!==`TEXT`||i.type!==`TEXT`?null:{body:r,author:i}}let oi={complete:(e,t)=>ai(e,t)!==null,text:(e,t)=>ai(e,t)?.body,rotates:!1,resizes:!1,strokesAndEffects:!1,namedByText:!0};function si(e,t,n={},r={}){let i=n.scale??1,a=t.width-40*i,o=ri(`body`,i),s=ri(`author`,i);return{body:e.createNode(`TEXT`,t.id,{...o,width:a,height:Dn(o.lineHeight??null,o.fontSize??0)??void 0,text:n.text??``,...r.body}),author:e.createNode(`TEXT`,t.id,{...s,width:a,height:Dn(s.lineHeight??null,s.fontSize??0)??void 0,text:n.author??``,visible:n.authorVisible??!0,...r.author})}}let ci={SHAPE_WITH_TEXT:Qr,STICKY:oi,CONNECTOR:jr},li=new Set(Object.keys(ci));function ui(e){return di(e)?ci[e.type]:void 0}function di(e){return li.has(e.type)}function fi(e,t){let n=ui(e);return!n?.sized||t.width===void 0&&t.height===void 0?t:{...n.sized(t,e),...t}}function pi(e){let{handleFrom:t,handleTo:n}=e;return t.x===0&&t.y===0&&n.x===0&&n.y===0}function mi(e){let{from:t,to:n}=e;return[{x:t.x+e.handleFrom.x,y:t.y+e.handleFrom.y},{x:n.x+e.handleTo.x,y:n.y+e.handleTo.y}]}function hi(e,t){let{from:n,to:r}=e;if(pi(e))return{x:n.x+(r.x-n.x)*t,y:n.y+(r.y-n.y)*t};let[i,a]=mi(e),o=1-t;return{x:o*o*o*n.x+3*o*o*t*i.x+3*o*t*t*a.x+t*t*t*r.x,y:o*o*o*n.y+3*o*o*t*i.y+3*o*t*t*a.y+t*t*t*r.y}}function gi(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i,o=a===0?0:Math.max(0,Math.min(1,((e.x-t.x)*r+(e.y-t.y)*i)/a));return Math.hypot(e.x-(t.x+o*r),e.y-(t.y+o*i))}function _i(e,t,n,r,i=0){let a=Ar(e,t)?.line,o=a?.vectorNetwork;if(!a||!o)return!1;let s=fn.invert(Fn(a,e));if(!s)return!1;let[c,l]=fn.mapPoints(s,[n,r]),u={x:c,y:l},d=(a.strokes[0]?.weight??a.strokeWeight)/2+4+i;return o.segments.some(e=>{let t={from:o.vertices[e.start],to:o.vertices[e.end],handleFrom:e.tangentStart,handleTo:e.tangentEnd};if(pi(t))return gi(u,t.from,t.to)<=d;let n=t.from;for(let e=1;e<=24;e++){let r=hi(t,e/24);if(gi(u,n,r)<=d)return!0;n=r}return!1})}let vi=new Set([`CANVAS`,`FRAME`,`GROUP`,`SECTION`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]),yi=new Set([`COMPONENT`,`INSTANCE`]);function bi(e){return e.fills.some(e=>e.visible)||e.strokes.some(e=>e.visible)}function xi(e,t){let n=t.parentId?e.nodes.get(t.parentId):void 0;return n?.type===`CANVAS`||n?.type===`SECTION`}function Si(e,t){return t.type===`FRAME`&&t.layoutMode!==`NONE`&&xi(e,t)}function Ci(e,t,n){let r=n.get(e.id);if(r!==void 0)return r;let i=e.parentId?t.getNode(e.parentId):void 0,a=e.rotation!==0||e.flipX||e.flipY||(i?Ci(i,t,n):!1);return n.set(e.id,a),a}function wi(e,t,n,r,i,a=0){if(!Ci(n,r,i)){let i=r.getAbsolutePosition(n.id);return e>=i.x-a&&e<=i.x+n.width+a&&t>=i.y-a&&t<=i.y+n.height+a}let o=Fn(n,r),s=fn.invert(o);if(!s)return!1;let[c,l]=fn.mapPoints(s,[e,t]);return c>=-a&&c<=n.width+a&&l>=-a&&l<=n.height+a}function Ti(e,t,n,r,i,a,o,s){return wi(t,n,r,e,o)&&(Di(e,t,n,i,a,o,s)||bi(r))?r:null}function Ei(e,t,n,r,i,a,o,s){if(r.type===`GROUP`){if(!wi(t,n,r,e,o,s))return null;let c=Di(e,t,n,i,a,o,s);return c?a?c:r:wi(t,n,r,e,o)?r:null}let c=Di(e,t,n,i,a,o,s);return c?r.locked?r:c:wi(t,n,r,e,o)&&(bi(r)||Si(e,r))?r:null}function Di(e,t,n,r,i=!1,a=new Map,o=0){let s=e.nodes.get(r);if(!s||s.clipsContent&&!wi(t,n,s,e,a))return null;for(let r=s.childIds.length-1;r>=0;r--){let c=s.childIds[r],l=e.nodes.get(c);if(!(!l||l.internalOnly||!l.visible)){if(vi.has(l.type)){if(yi.has(l.type)&&!i){let r=Ti(e,t,n,l,c,i,a,o);if(r)return r;continue}let r=Ei(e,t,n,l,c,i,a,o);if(r)return r;continue}if(l.type===`CONNECTOR`){if(_i(e,l,t,n,o))return l;continue}if(wi(t,n,l,e,a,o))return l}}return null}function Oi(e,t,n,r){return Di(e,t,n,r??e.rootId,!1)}function ki(e,t,n,r,i=0){return Di(e,t,n,r??e.rootId,!0,new Map,i)}function Ai(e,t){return t.type===`COMPONENT_SET`?!0:t.childIds.length===0?!1:t.type===`SECTION`||t.type===`FRAME`&&xi(e,t)}function ji(e,t,n,r){let i=new Map;for(let a=t.childIds.length-1;a>=0;a--){let o=e.nodes.get(t.childIds[a]);if(!(!o||o.internalOnly||!o.visible||o.type!==`FRAME`)&&!(Ai(e,o)&&!Si(e,o))&&wi(n,r,o,e,i))return o}return null}function Mi(e,t,n){let r=new Set;for(let i of t){let t=e.nodes.get(i);t&&t.childIds.length>0&&t.type!==`GROUP`&&t.type!==`BOOLEAN_OPERATION`&&r.add(i);let a=t?.parentId;for(;a&&a!==n&&!r.has(a);)r.add(a),a=e.nodes.get(a)?.parentId}return r}function Ni(e,t,n,r,i,a=0){let o=Di(e,t,n,r,!0,new Map,a);if(!o){let i=e.nodes.get(r);return i?ji(e,i,t,n):null}let s=[];for(let t=o;t&&t.id!==r;)s.unshift(t),t=t.parentId?e.nodes.get(t.parentId):void 0;let c=Mi(e,i,r);for(let t of s)if(t.locked||!c.has(t.id)&&!Ai(e,t))return t;let l=s.at(-1);return l?ji(e,l,t,n)||(Si(e,l)||c.has(l.id)&&!Ai(e,l)?l:null):null}function Pi(e,t){let n=e.nodes.get(t);return n!==void 0&&Ai(e,n)}function Fi(e,t,n,r){let i=Di(e,t,n,r,!0);for(let t=i??void 0;t&&t.id!==r;){if(!Ai(e,t)||Si(e,t))return null;t=t.parentId?e.nodes.get(t.parentId):void 0}return i}function Ii(e,t,n,r){let i=e.nodes.get(t);return i!==void 0&&wi(n,r,i,e,new Map)}let Li=new Set([`FRAME`,`SECTION`,`COMPONENT`,`INSTANCE`]),Ri=new Set([`FRAME`,`SECTION`,`INSTANCE`]);function zi(e){let{componentSetIds:t}=e;return t?{takes:e=>Ri.has(e.type)||e.type===`COMPONENT_SET`&&t.has(e.id),passThrough:new Set([`GROUP`])}:{takes:e=>Li.has(e.type),passThrough:new Set([`GROUP`,`COMPONENT_SET`])}}function Bi(e,t,n,r,i,a,o){if(r.type!==`CANVAS`&&r.clipsContent&&!wi(t,n,r,e,o))return null;for(let s=r.childIds.length-1;s>=0;s--){let c=r.childIds[s];if(i.has(c))continue;let l=e.nodes.get(c);if(!l||l.internalOnly||!l.visible||l.locked)continue;let u=a.takes(l);if(!u&&!a.passThrough.has(l.type))continue;let d=Bi(e,t,n,l,i,a,o);if(d)return d;if(u&&wi(t,n,l,e,o))return l}return null}function Vi(e,t,n,r,i,a={}){let o=e.nodes.get(i??e.rootId);return o?Bi(e,t,n,o,r,zi(a),new Map):null}function Hi(e){if(!Number.isInteger(e)||e<=0)throw RangeError(`length must be a positive integer`);let t=4294967296,n=t-t%e,r=new Uint32Array(1);do crypto.getRandomValues(r);while(r[0]>=n);return r[0]%e}function Ui(){return 2+Hi(2147483646)}let Wi=Ui(),Gi=1;function Ki(){return`${Wi}:${Gi++}`}let qi=new Set(`opacity.width.height.minWidth.maxWidth.minHeight.maxHeight.x.y.rotation.cornerRadius.topLeftRadius.topRightRadius.bottomLeftRadius.bottomRightRadius.strokeWeight.borderTopWeight.borderBottomWeight.borderLeftWeight.borderRightWeight.fontSize.letterSpacing.lineHeight.paddingLeft.paddingRight.paddingTop.paddingBottom.itemSpacing.counterAxisSpacing.gridRowGap.gridColumnGap`.split(`.`));function Ji(e){return qi.has(e)}let Yi=new Set([`text`,`fontFamily`]),Xi=[`STRING`,`FLOAT`],Zi=new Set([`visible`]),Qi=[`BOOLEAN`,`STRING`],$i=/^(fills|strokes)\/(\d+)\/color$/;function ea(e){if(!e.endsWith(`/color`))return null;let t=$i.exec(e);return t?{list:t[1]===`fills`?`fills`:`strokes`,index:Number(t[2])}:null}function ta(e,t){let n=new Set,r=t.componentId?e.getNode(t.componentId):void 0;for(;r?.type===`INSTANCE`&&r.componentId&&!n.has(r.id);)n.add(r.id),r=e.getNode(r.componentId);return r?.type===`COMPONENT`?r:void 0}function na(e,t){let n=e.instanceOverrides.self;if(t===`fills`||t===`fillStyleId`)return n.has(t)||n.has(`fills`);let r=gn(t);return r!==null&&ea(r)?.list===`fills`&&(n.has(t)||n.has(`boundVariables`)||n.has(`fills`))}function ra(e,t,n){if(t.type!==`INSTANCE`||n.type!==`INSTANCE`)return t;let r=ta(e,t),i=ta(e,n);if(!r||!i||r.id===i.id)return t;let a=(e,t)=>Object.fromEntries([...Object.entries(e).filter(([e])=>!e.startsWith(`fills/`)),...Object.entries(t).filter(([e])=>e.startsWith(`fills/`))]);return{...t,fills:i.fills,fillStyleId:i.fillStyleId,boundVariables:a(t.boundVariables,i.boundVariables),variableBindingScales:a(t.variableBindingScales,i.variableBindingScales)}}function ia(e){return e.componentPropertyReferences.find(e=>e.field===`SLOT_CONTENT`)?.propertyId}function aa(e,t,n=ia(t)){if(!n)return!1;let r=t.parentId?e.nodes.get(t.parentId):void 0;for(;r&&r.type!==`INSTANCE`;)r=r.parentId?e.nodes.get(r.parentId):void 0;return!!r&&Object.hasOwn(r.componentPropertyAssignments,n)}function oa(e,t,n){let r=ta(e,t);return[r,r?.parentId?e.nodes.get(r.parentId):void 0].flatMap(e=>e?.componentPropertyDefinitions??[]).find(e=>e.id===n&&e.type===`SLOT`)?.name}function sa(e,t){let n=[],r=t=>{for(let i of t.childIds){let t=e.nodes.get(i);t&&(ia(t)?n.push(t):t.type!==`INSTANCE`&&r(t))}};return r(t),n}function ca(e,t){let n=[],r=t=>{for(let i of t.childIds){let t=e.nodes.get(i);!t||ia(t)||(t.type===`INSTANCE`?n.push(t):r(t))}};return r(t),n}function la(e,t,n){let r=t;for(let t of n)r&&=ca(e,r).find(e=>e.name===t);return r}function ua(e,t){let n={slots:[],propertyIds:[]},r=(i,a)=>{for(let t of ca(e,i))r(t,[...a,t.name]);for(let r of sa(e,i)){let o=ia(r);if(!o||!Object.hasOwn(i.componentPropertyAssignments,o))continue;i.id===t.id&&n.propertyIds.push(o);let s=oa(e,i,o),c=[...a,s].join(`\0`);if(!s||n.slots.some(e=>[...e.path,e.name].join(`\0`)===c))continue;let l=[...r.childIds];for(let n of l)e.insertChildAt(n,t.id,t.childIds.length);n.slots.push({path:a,name:s,content:l})}};return r(t,[]),n}function da(e,t,n){if(!(n.slots.length===0&&n.propertyIds.length===0)){e.updateNode(t.id,{componentPropertyAssignments:Object.fromEntries(Object.entries(t.componentPropertyAssignments).filter(([e])=>!n.propertyIds.includes(e)))});for(let r of n.slots){let n=la(e,t,r.path),i=n&&sa(e,n).find(t=>{let i=ia(t);return!!i&&oa(e,n,i)===r.name}),a=i&&ia(i);if(!n||!i||!a||Object.hasOwn(n.componentPropertyAssignments,a)){for(let t of r.content)e.deleteNode(t);continue}for(let t of Array.from(i.childIds))e.deleteNode(t);for(let[t,n]of r.content.entries())e.insertChildAt(n,i.id,t);e.updateNode(n.id,{componentPropertyAssignments:{...n.componentPropertyAssignments,[a]:``}})}}}let fa=[`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`letterSpacing`,`styleRuns`,`fontVariations`,`opticalSizeFromFontSize`,`fontFeatures`,`textParagraphs`,`listSpacing`,`paragraphSpacing`,`paragraphIndent`,`hangingList`],pa=[...fa,`lineHeight`,`textCase`,`textDirection`,`textAlignHorizontal`,`textAlignVertical`],ma=[`width`,`height`,`textAutoResize`,`maxLines`],ha=[`fontFamily`,`fontSize`,`fontWeight`,`italic`,`lineHeight`,`letterSpacing`,`paragraphSpacing`,`paragraphIndent`,`textAlignHorizontal`,`textAlignVertical`,`textCase`,`textDecoration`,`textDecorationStyle`,`textDecorationThickness`,`textUnderlineOffset`,`textDecorationFills`,`textDecorationSkipInk`,`fontFeatures`,`fontVariations`,`opticalSizeFromFontSize`];function ga(e){return e===`VERTICAL`?`VERTICAL`:`HORIZONTAL`}function _a(e,t){if(!(!e||e.layoutMode===`NONE`||t.layoutPositioning===`ABSOLUTE`))return e}function va(e,t){return t.parentId?e.getNode(t.parentId):void 0}function ya(e,t,n){return e.layoutMode===`NONE`?!1:n===ga(e.layoutMode)?t.layoutGrow>0:t.layoutAlignSelf===`STRETCH`||t.layoutAlignSelf===`AUTO`&&e.layoutMode!==`GRID`&&e.counterAxisAlign===`STRETCH`}function ba(e,t){if(e.layoutMode!==`NONE`)return t===ga(e.layoutMode)?`primaryAxisSizing`:`counterAxisSizing`}function xa(e,t){return e===`WIDTH_AND_HEIGHT`||t===`VERTICAL`&&e===`HEIGHT`}function Sa(e,t){if(e.type===`TEXT`)return xa(e.textAutoResize,t);let n=ba(e,t);return n!==void 0&&e[n]===`HUG`}function Ca(e,t,n){return wa(va(e,t),t,n)}function wa(e,t,n){let r=_a(e,t);return r&&ya(r,t,n)?`FILL`:Sa(t,n)&&(r||t.layoutMode!==`NONE`)?`HUG`:`FIXED`}function Ta(e){let t=e.targetAspectRatio;return!t||!(t.x>0)||!(t.y>0)||e.type===`TEXT`&&e.textAutoResize!==`NONE`?null:t.x/t.y}let Ea=new Set([`STRETCH`,`SCALE`]);function Da(e,t,n){return n===`MAX`?{position:e.position+e.size-t,size:t}:n===`CENTER`?{position:e.position+(e.size-t)/2,size:t}:{position:e.position,size:t}}function Oa(e,t,n,r){let i=Da({position:e.x,size:e.width},t.width,n),a=Da({position:e.y,size:e.height},t.height,r);return{x:i.position,y:a.position,width:i.size,height:a.size}}function ka(e,t,n,r,i){let a=Ea.has(n);return i===null||a===Ea.has(r)?{x:e,y:t}:a?{x:e,y:Da(t,e.size/i,r)}:{x:Da(e,t.size*i,n),y:t}}function Aa(e,t,n,r,i){let a=Math.round(r)-Math.round(n);if(i===`MAX`)return{position:e+a,size:t};if(i===`CENTER`)return{position:e+Math.round(r/2)-Math.round(n/2),size:t};if(i===`STRETCH`)return{position:e,size:Math.abs(t+a)};if(i===`SCALE`&&n>0){let i=r/n;return{position:Math.round(e*i*128)/128,size:t*i}}return{position:e,size:t}}function ja(e,t,n,r,i,a=null){let o=ka(Aa(e.x,e.width,t.width,n.width,r),Aa(e.y,e.height,t.height,n.height,i),r,i,a);return{x:o.x.position,y:o.y.position,width:o.x.size,height:o.y.size}}let Ma=new Set(fa);function Na(e,t,n,r){let i={...t,...r};if(i.type===`TEXT`){if(pa.every(e=>en(i[e],n[e])))return{width:!1,height:!1};let e=i.textAutoResize;return{width:e===`WIDTH_AND_HEIGHT`,height:e===`WIDTH_AND_HEIGHT`||e===`HEIGHT`}}let a=t=>{let n=Ca(e,i,t);return n===`FILL`||n===`HUG`&&i.layoutMode!==`NONE`};return{width:a(`HORIZONTAL`),height:a(`VERTICAL`)}}function Pa(e,t,n,r,i){let a=Na(e,n,r,t);if(a.width&&Reflect.deleteProperty(t,`width`),a.height&&Reflect.deleteProperty(t,`height`),!i)return;let o={...n,...t},s=Oa(i.placed,o,o.horizontalConstraint,o.verticalConstraint);i.x&&o.width!==i.placed.width&&(t.x=s.x),i.y&&o.height!==i.placed.height&&(t.y=s.y)}function Fa(e,t){t.type!==`TEXT`||!t.derivedLayout||Object.keys(e).some(e=>Ma.has(e))&&(e.derivedLayout=null)}function Ia(e,t){return{instanceId:e,overrides:t,matched:new Set,leftovers:new Set}}function La(e,t){return bn(t.overrides,t.instanceId,e)}function Ra(e,t,n){if(t.type===`INSTANCE`||xn(n.overrides,n.instanceId,t.id,`componentId`))return!1;let r=t.componentId?e.nodes.get(t.componentId):void 0;return!r||!aa(e,t,ia(r))}function za(e,t){if(t.copies)return t.copies;let n=new Map,r=i=>{for(let a of i.childIds){let i=e.nodes.get(a);if(!i)continue;let o=La(i,t);o&&n.set(o,[...n.get(o)??[],i]),Ra(e,i,t)&&r(i)}},i=e.nodes.get(t.instanceId);return i&&r(i),t.copies=n,n}function Ba(e,t,n,r){return za(e,t).get(n)?.find(n=>!t.matched.has(n.id)&&e.nodes.has(n.id)&&n.id!==r&&!e.isDescendant(r,n.id))}function Va(e,t,n){let r=za(e,t);return r.size!==0&&(e.nodes.get(n)?.childIds??[]).some(n=>r.get(n)?.some(e=>!t.matched.has(e.id))||Va(e,t,n))}let Ha=new WeakMap;function Ua(e){let t=Ha.get(e);return t||(t={byInstance:new Map,removals:[]},Ha.set(e,t)),t}function Wa(e,t){if(t.keys.length===0)return;let n=Ua(e);for(n.removals.push(t);n.removals.length>200;){let e=n.removals.shift();for(let[t,r]of e?.keys??[]){let i=n.byInstance.get(t);!i||i.get(r)?.removals!==e||(i.delete(r),i.size===0&&n.byInstance.delete(t))}}}let Ga=new WeakMap;function Ka(e,t){let n=Ga.get(e);if(n)return t(n);let r={keys:[]};Ga.set(e,r);try{return t(r)}finally{Ga.delete(e),Wa(e,r)}}function qa(e,t,n,r){let i=Ua(e),a=i.byInstance.get(t.instanceId),o=a?.get(n);if(!a||!o)return;a.delete(n),a.size===0&&i.byInstance.delete(t.instanceId);let s=o.nodes.at(0);if(!(!s||o.nodes.some(t=>e.nodes.has(t.id)))){for(let t of o.nodes){let{id:n,type:i,parentId:a,childIds:o,...c}=structuredClone(t);e.createNodeWithId(n,i,n===s.id?r:a,c)}for(let[e,n]of o.overrides)t.overrides.descendants.set(e,new Map(n));return e.nodes.get(s.id)}}function Ja(e,t,n){let r=Ua(e);for(let i of t.leftovers){let a=e.nodes.get(i),o=a?La(a,t):void 0;if(!a||!o||t.matched.has(i))continue;let s=[],c=t=>{s.push(structuredClone(t));for(let n of t.childIds){let t=e.nodes.get(n);t&&c(t)}};c(a);let l=new Map;for(let e of s){let n=t.overrides.descendants.get(e.id);n&&l.set(e.id,new Map(n)),t.overrides.descendants.delete(e.id)}let u=r.byInstance.get(t.instanceId);u||(u=new Map,r.byInstance.set(t.instanceId,u)),u.set(o,{nodes:s,overrides:l,removals:n}),n.keys.push([t.instanceId,o]),e.deleteNode(i)}t.leftovers.clear()}function Ya(e,t){let n=new Set;return e.closest(t,t=>{if(t.type===`COMPONENT`&&n.add(t.id),t.type===`INSTANCE`){let r=ta(e,t);r&&n.add(r.id)}return!1}),n}function Xa(e,t,n){let r=Ya(e,n);if(r.size===0)return!1;let i=new Set;function a(t){if(r.has(t))return!0;if(i.has(t))return!1;i.add(t);let n=e.getNode(t);return n?n.type===`INSTANCE`&&n.componentId&&a(n.componentId)?!0:n.childIds.some(a):!1}return a(t)}function Za(e,t,n){return e.getNode(t)?.type===`COMPONENT`&&!Xa(e,t,n)}function Qa(e,t){let n=new Set(t);return e.filter(e=>!n.has(e))}function $a(e,t){let n={};for(let r=0;r<e.length;r++){let i=e[r],a=t(i,r,e);Object.hasOwn(n,a)||(n[a]=[]),n[a].push(i)}return n}function eo(e,t){let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i];t(a,i,e)?n.push(a):r.push(a)}return[n,r]}let to=[`fills`,`strokes`,`effects`,`opacity`,`blendMode`],no=[`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`strokeMiterLimit`,`dashPattern`,`independentStrokeWeights`,`borderTopWeight`,`borderRightWeight`,`borderBottomWeight`,`borderLeftWeight`],ro=[`cornerRadius`,`topLeftRadius`,`topRightRadius`,`bottomRightRadius`,`bottomLeftRadius`,`independentCorners`,`cornerSmoothing`],io=Object.values({fill:`fillStyleId`,stroke:`strokeStyleId`,text:`textStyleId`,effect:`effectStyleId`,grid:`gridStyleId`}),ao=new Set([`fontFamily`,`fontWeight`,`italic`,`fontSize`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`,`fontFeatures`]);function oo(e,t){let n={...t};return`fills`in t&&!(`fillStyleId`in t)&&e.fillStyleId&&(n.fillStyleId=null),`strokes`in t&&!(`strokeStyleId`in t)&&e.strokeStyleId&&(n.strokeStyleId=null),`effects`in t&&!(`effectStyleId`in t)&&e.effectStyleId&&(n.effectStyleId=null),`layoutGrids`in t&&!(`gridStyleId`in t)&&e.gridStyleId&&(n.gridStyleId=null),Object.keys(t).some(e=>ao.has(e))&&!(`textStyleId`in t)&&e.textStyleId&&(n.textStyleId=null),n}let so=[`name`,`text`,...ha,`textDirection`,`textAutoResize`,`textTruncation`,`maxLines`,`leadingTrim`,`listSpacing`,`hangingList`,`styleRuns`,`textParagraphs`],co={fillStyleId:`fills`,styleRuns:`text`,textParagraphs:`text`},lo=[...Sr,`horizontalConstraint`,`verticalConstraint`,`layoutPositioning`,`counterAxisAlignContent`,`isMask`,`maskType`,`arcData`,`pointCount`,`starInnerRadius`,`shapeWithTextType`,`shapeUserHeight`,`shapeTruncates`],uo=Qa([...Cr,...Tr,...to,...no,...ro,...wr,`itemReverseZIndex`,`gridPosition`,`clipsContent`,`layoutGrids`,`boundVariables`,`variableModes`,...io],lo),fo=[`layoutGrow`,`layoutAlignSelf`,`locked`],po=[...uo,...so,...fo,`visible`,...lo];Object.freeze({listType:`NONE`,indentation:0});let mo=[`listSpacing`,`paragraphSpacing`,`paragraphIndent`];function ho(e){return mo.some(t=>e[t]!==void 0)}function go(e,t,n){let{[t]:r,...i}=e;return n===void 0?i:{...i,[t]:n}}function _o(e,t){let n=e.slice(0,t).map(e=>({...e}));for(;n.length>0;){let e=n[n.length-1];if(e.listType!==`NONE`||e.indentation!==0||ho(e))break;n.pop()}return n}function vo(e,t){return e.listType===`NONE`?{...e,indentation:Math.max(0,Math.min(5,Math.round(t)))}:{...e,indentation:yo(t)}}function yo(e){return Math.max(1,Math.min(5,Math.round(e)))}function bo(e,t){return e==null?null:e*t}function xo(e,t){return e.map(e=>({...structuredClone(e),weight:e.weight*t,dashPattern:e.dashPattern?.map(e=>e*t)}))}function So(e,t){return e.map(e=>({...structuredClone(e),offset:{x:e.offset.x*t,y:e.offset.y*t},radius:e.radius*t,spread:e.spread*t}))}function Co(e,t){return e.map(e=>({...structuredClone(e),scale:e.scale==null?void 0:e.scale*t,spacing:e.spacing==null?void 0:e.spacing*t,patternSpacing:e.patternSpacing?{x:e.patternSpacing.x*t,y:e.patternSpacing.y*t}:void 0,noiseSize:e.noiseSize?{x:e.noiseSize.x*t,y:e.noiseSize.y*t}:void 0}))}function wo(e,t){return e.map(e=>({...structuredClone(e),style:{...structuredClone(e.style),fontSize:e.style.fontSize==null?void 0:e.style.fontSize*t,letterSpacing:e.style.letterSpacing&&An(e.style.letterSpacing,t),lineHeight:e.style.lineHeight&&An(e.style.lineHeight,t),textDecorationThickness:bo(e.style.textDecorationThickness??null,t),textUnderlineOffset:bo(e.style.textUnderlineOffset??null,t)}}))}function To(e,t){return e.map(e=>{let n={...e};for(let r of mo){let i=e[r];i!==void 0&&(n[r]=i*t)}return n})}function Eo(e,t){return e.map(e=>({...structuredClone(e),offset:e.offset==null?void 0:e.offset*t,sectionSize:e.sectionSize==null?void 0:e.sectionSize*t,gutterSize:e.gutterSize==null?void 0:e.gutterSize*t}))}function Do(e,t){return e.map(e=>({...e,value:e.sizing===`FIXED`?e.value*t:e.value}))}function Oo(e,t){if(!e.vectorNetwork)return null;let n=Jn(e.vectorNetwork);for(let e of n.vertices)e.x*=t,e.y*=t;for(let e of n.segments)e.tangentStart.x*=t,e.tangentStart.y*=t,e.tangentEnd.x*=t,e.tangentEnd.y*=t;return n}function ko(e,t,n){return{x:n?e.x*t:e.x,y:n?e.y*t:e.y,width:e.width*t,height:e.height*t,minWidth:bo(e.minWidth,t),maxWidth:bo(e.maxWidth,t),minHeight:bo(e.minHeight,t),maxHeight:bo(e.maxHeight,t),cornerRadius:e.cornerRadius*t,topLeftRadius:e.topLeftRadius*t,topRightRadius:e.topRightRadius*t,bottomRightRadius:e.bottomRightRadius*t,bottomLeftRadius:e.bottomLeftRadius*t,fontSize:e.fontSize*t,letterSpacing:An(e.letterSpacing,t),lineHeight:e.lineHeight&&An(e.lineHeight,t),textDecorationThickness:bo(e.textDecorationThickness,t),textUnderlineOffset:bo(e.textUnderlineOffset,t),styleRuns:wo(e.styleRuns,t),listSpacing:e.listSpacing*t,paragraphSpacing:e.paragraphSpacing*t,paragraphIndent:e.paragraphIndent*t,textParagraphs:To(e.textParagraphs,t),itemSpacing:e.itemSpacing*t,counterAxisSpacing:e.counterAxisSpacing*t,paddingTop:e.paddingTop*t,paddingRight:e.paddingRight*t,paddingBottom:e.paddingBottom*t,paddingLeft:e.paddingLeft*t,gridColumnGap:e.gridColumnGap*t,gridRowGap:e.gridRowGap*t,gridTemplateColumns:Do(e.gridTemplateColumns,t),gridTemplateRows:Do(e.gridTemplateRows,t),strokes:xo(e.strokes,t),strokeWeight:e.strokeWeight*t,dashPattern:e.dashPattern.map(e=>e*t),borderTopWeight:e.borderTopWeight*t,borderRightWeight:e.borderRightWeight*t,borderBottomWeight:e.borderBottomWeight*t,borderLeftWeight:e.borderLeftWeight*t,strokeMiterLimit:e.strokeMiterLimit,effects:So(e.effects,t),fills:Co(e.fills,t),layoutGrids:Eo(e.layoutGrids,t),vectorNetwork:Oo(e,t),fillGeometry:dr(e.fillGeometry,t,t),strokeGeometry:dr(e.strokeGeometry,t,t)}}function Ao(e,t){let n={...e.variableBindingScales},r={...e.variableAssignmentScales};for(let i of qi)i===`opacity`||i===`rotation`||(i in e.boundVariables&&(n[i]=(n[i]??1)*t),e.type===`INSTANCE`&&(r[i]=(r[i]??1)*t));return{variableBindingScales:n,variableAssignmentScales:r}}let jo={VISIBLE:`visible`,TEXT:`text`,INSTANCE_SWAP:`componentId`};function Mo(e,t,n){let r=t.componentId?e.nodes.get(t.componentId):void 0;for(let t=0;r?.type===`INSTANCE`&&t<16;t++)r=r.componentId?e.nodes.get(r.componentId):void 0;let i=r?.parentId?e.nodes.get(r.parentId):void 0,a=i?.type===`COMPONENT_SET`?i:void 0;return[r,a].flatMap(e=>e?.componentPropertyDefinitions??[]).some(e=>e.id===n)}function No(e,t,n){let r=t.parentId?e.nodes.get(t.parentId):void 0;for(;r;){if(r.type===`INSTANCE`){if(Object.hasOwn(r.componentPropertyAssignments,n))return r.componentPropertyAssignments[n];if(Mo(e,r,n))return}r=r.parentId?e.nodes.get(r.parentId):void 0}}function Po(e,t,n){return No(e,t,n)!==void 0}function Fo(e,t){for(let n of t.componentPropertyReferences){let r=jo[n.field];if(!r)continue;let i=No(e,t,n.propertyId);i!==void 0&&(r===`visible`?e.updateNode(t.id,{visible:i===`true`}):r===`text`?e.updateNode(t.id,{text:i}):r===`componentId`&&t.type===`INSTANCE`&&e.nodes.has(i)&&e.swapInstanceComponent(t.id,i))}for(let n of e.getChildren(t.id))Fo(e,n)}function Io(e,t,n){let r=new Set;for(let i of n.componentPropertyReferences){let n=jo[i.field];n&&Po(e,t,i.propertyId)&&r.add(n)}return r}function Lo(e,t,n){let r={};for(let i of n.componentPropertyReferences){let n=No(e,t,i.propertyId);n!==void 0&&(i.field===`TEXT`&&t.type===`TEXT`?r.text=n:i.field===`VISIBLE`&&(r.visible=n===`true`))}return r}let Ro=new Set([`x`,`y`,`width`,`height`]);function zo(e,t,n,r){let i={width:t.width*r,height:t.height*r};if(i.width===n.width&&i.height===n.height)return e;let a=ja(e,i,n,e.horizontalConstraint,e.verticalConstraint,Ta(e));return{...e,...a}}let Bo=[`strokes`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`strokeMiterLimit`,`dashPattern`],Vo=(e,t)=>Math.abs(e-t)<=.001;function Ho(e,t){if(!e||!t)return e===t;if(e.vertices.length!==t.vertices.length||e.segments.length!==t.segments.length)return!1;let n=e.vertices.every((e,n)=>{let{x:r,y:i,...a}=e,{x:o,y:s,...c}=t.vertices[n];return Vo(r,o)&&Vo(i,s)&&en(a,c)}),r=e.segments.every((e,n)=>{let r=t.segments[n];return e.start===r.start&&e.end===r.end&&Vo(e.tangentStart.x,r.tangentStart.x)&&Vo(e.tangentStart.y,r.tangentStart.y)&&Vo(e.tangentEnd.x,r.tangentEnd.x)&&Vo(e.tangentEnd.y,r.tangentEnd.y)});return n&&r&&en(e.regions,t.regions)}function Uo(e,t,n){if(n.type!==`VECTOR`)return;let r=e.width??t.width,i=e.height??t.height,a=n.width>0?r/n.width:1,o=n.height>0?i/n.height:1,s=a!==1||o!==1,c=n.vectorNetwork?(e=>s?qn([a,0,0,0,o,0,0,0,1],e):Jn(e))(n.vectorNetwork):null;if(Ho(t.vectorNetwork,c))return;let l=e=>s?dr(e,a,o):cr(e),u=Bo.every(r=>en(e[r]??t[r],n[r]));e.vectorNetwork=c,e.fillGeometry=l(n.fillGeometry),e.strokeGeometry=u?l(n.strokeGeometry):[]}function Wo(e,t,n){e[t]=n}function Go(e,t,n){if(n===`fills`)Wo(e,n,nr(t.fills));else if(n===`strokes`)Wo(e,n,rr(t.strokes));else if(n===`effects`)Wo(e,n,ir(t.effects));else if(n===`styleRuns`)Wo(e,n,or(t.styleRuns));else if(n===`boundVariables`)Wo(e,n,{...t.boundVariables}),Wo(e,`variableBindingScales`,{...t.variableBindingScales});else if(n===`variableModes`)Wo(e,n,{...t.variableModes});else if(n===`gridPosition`)Wo(e,n,t.gridPosition?{...t.gridPosition}:null);else if(n===`targetAspectRatio`)Wo(e,n,t.targetAspectRatio?{...t.targetAspectRatio}:null);else{let r=t[n];Wo(e,n,Array.isArray(r)?structuredClone(r):r)}}function Ko(e){let t=new Set;for(let n of e){let e=[...n].some(e=>gn(e)!==null);for(let r of n)(r!==`boundVariables`||!e)&&t.add(r)}return e=>t.has(e)}function qo(e,t,n,r){if(r(`boundVariables`))return;let i={...t.boundVariables},a={...t.variableBindingScales};for(let n of new Set([...Object.keys(t.boundVariables),...Object.keys(e.boundVariables),...Object.keys(e.variableBindingScales)]))r(hn(n))&&(Object.hasOwn(e.boundVariables,n)?i[n]=e.boundVariables[n]:Reflect.deleteProperty(i,n),e.variableBindingScales[n]===void 0?Reflect.deleteProperty(a,n):a[n]=e.variableBindingScales[n]);n.boundVariables=i,n.variableBindingScales=a}function Jo(e,t,n){return n(t)||t in e.boundVariables&&(n(`boundVariables`)||n(hn(t)))}function Yo(e,t){let n=t/e.componentScale;if(!Number.isFinite(n)||n<=0)throw Error(`Invalid component coordinate scale`);return n===1?e:{...e,...ko(e,n,!0),...Ao(e,n)}}function Xo(e,t,n,{compParent:r,instParent:i,factor:a,skip:o}){let s=i.layoutMode!==`NONE`&&n.layoutPositioning!==`ABSOLUTE`,c=s?n:zo(n,r,i,a);for(let r of po){if(r===`boundVariables`||s&&(r===`x`||r===`y`)||o(r))continue;let i=co[r];if(i&&o(i))continue;let a=Ro.has(r)?c:n;en(t[r],a[r])||Go(e,a,r)}return e.fills&&(e.fillStyleId=o(`fillStyleId`)?t.fillStyleId:n.fillStyleId),Uo(e,t,n),Fa(e,t),{placed:c,x:!s&&!o(`x`),y:!s&&!o(`y`)}}function Zo(e,t,n){let r=Object.fromEntries(Object.entries(n).filter(([e,n])=>!en(t[e],n)));r.fills&&n.fillStyleId!==void 0&&(r.fillStyleId=n.fillStyleId),Object.keys(r).length&&e.updateNode(t.id,r)}function Qo(e,t,n,r,i=`deep`){let a=t.componentScale*r.componentScale/n.componentScale;return e.createNode(t.type,r.id,{...br(Yo(t,a),t.id,i),componentScale:a})}function $o(e,t,n,r=`deep`){if(t===n||e.isDescendant(n,t))return;let i=e.nodes.get(t),a=e.nodes.get(n);if(!(!i||!a))for(let t of i.childIds){let n=e.nodes.get(t);if(!n)continue;let o=Qo(e,n,i,a,r);n.childIds.length>0&&$o(e,t,o.id,r)}}function es(e,t){let n=[],r=t.parentId?e.nodes.get(t.parentId):void 0;for(;r;)r.type===`INSTANCE`&&n.push(new Set(r.instanceOverrides.descendants.get(t.id)?.keys())),r=r.parentId?e.nodes.get(r.parentId):void 0;return n}function ts(e,t,n){let r=es(e,t);r.push(new Set(n.descendants.get(t.id)?.keys()));let i=Ko(r);return e=>i(e)||na(t,e)}function ns(e,t,n,r){n.type===`INSTANCE`?Sn(e,t,n.id,`sourceComponentId`,r):n.componentId=r}function rs(e,t,n,r,i,a,o){let s=new Map,c=new Map,l=new Map;for(let n of t.childIds){if(a.has(n))continue;let t=e.nodes.get(n);t&&l.set(t.type,(l.get(t.type)??0)+1)}for(let t of n.childIds){let n=e.nodes.get(t);if(!n||o.has(n.id))continue;c.set(n.type,(c.get(n.type)??0)+1);let r=s.get(n.type);r||(r=new Map,s.set(n.type,r));let i=r.get(n.name);i?i.push(n):r.set(n.name,[n])}for(let n of t.childIds){if(a.has(n))continue;let t=e.nodes.get(n);if(!t)continue;let u=s.get(t.type),d=c.get(t.type)??0;if(d>(l.get(t.type)??0))continue;let f=u?.get(t.name)?.shift();f&&(c.set(t.type,d-1),a.set(n,f),o.add(f.id),ns(i,r,f,n))}}function is(e,t,n,r,i){let a=new Map;for(let e=0;e<r.length;e++)a.set(r[e],e);let o=new Map;for(let s=0;s<t.childIds.length;s++){let c=t.childIds[s],l=e.nodes.get(c),u=l&&bn(i,n,l),d=u?a.get(u):void 0;o.set(c,d??r.length+s)}t.childIds.toSorted((e,t)=>(o.get(e)??0)-(o.get(t)??0)).forEach((r,i)=>{t.childIds[i]!==r&&e.insertChildAt(r,n,i)})}function as(e,t,n){return t===n||e.isDescendant(n,t)}function os(e,t,n,r,i,a,o){for(let s of t.childIds){let t=e.nodes.get(s);if(!t)continue;let c=bn(r,n,t);c&&i.has(c)&&(a.set(c,t),o.add(t.id))}}function ss(e,t,n,r,i,a){for(let e of r.values())a.matched.add(e.id);for(let o of t.childIds){if(r.has(o))continue;let s=Ba(e,a,o,n.id)??qa(e,a,o,n.id);if(s){e.insertChildAt(s.id,n.id,n.childIds.length),r.set(o,s),i.add(s.id),a.matched.add(s.id);continue}let c=e.nodes.get(o);if(!c)continue;let l=Qo(e,c,t,n);c.childIds.length>0&&!Va(e,a,o)&&$o(e,o,l.id),Fo(e,l),r.set(o,l),i.add(l.id),a.matched.add(l.id)}for(let e of n.childIds)i.has(e)||a.leftovers.add(e)}function cs(e,t,n,r,i=Ia(n,r)){if(as(e,t,n))return;let a=e.nodes.get(t),o=e.nodes.get(n);if(!a||!o)return;let s=new Map,c=new Set;os(e,o,n,r,new Set(a.childIds),s,c),rs(e,a,o,n,r,s,c),ss(e,a,o,s,c,i);for(let t of a.childIds){let c=e.nodes.get(t),l=s.get(t);if(!c||!l)continue;let u=ts(e,l,r),d=Io(e,l,c),f=c.componentScale*o.componentScale/a.componentScale,p=Yo(ra(e,c,l),f),m={componentScale:f,componentPropertyReferences:structuredClone(c.componentPropertyReferences)};qo(l,p,m,u);let h=Xo(m,l,p,{compParent:a,instParent:o,factor:f/c.componentScale,skip:e=>d.has(e)||Jo(l,e,u)});Object.assign(m,Lo(e,l,c)),Pa(e,m,l,p,h),Zo(e,l,m),c.childIds.length>0&&!xn(r,n,l.id,`componentId`)&&!aa(e,l,ia(c))&&cs(e,t,l.id,r,i)}is(e,o,n,a.childIds,r)}function ls(e){let t={};for(let n of uo)Go(t,e,n);return t}function us(e,t,n,r={}){let i=e.nodes.get(t);if(i?.type!==`COMPONENT`||!Za(e,t,n))return null;let a={...ls(i),name:i.name},o=e.createNode(`INSTANCE`,n,{...a,...r,componentId:t});return $o(e,i.id,o.id),o}function ds(e,t,n,r=`deep`){let i=e.nodes.get(t),a=e.nodes.get(n);!i||!a||i.type!==`INSTANCE`||$o(e,n,t,r)}function fs(e,t,n){let r=t.parentId?Ss(e,t.parentId):void 0;r&&(typeof yn(r.instanceOverrides,r.id,t.id,`sourceComponentId`)!=`string`&&t.componentId&&Sn(r.instanceOverrides,r.id,t.id,`sourceComponentId`,t.componentId),Sn(r.instanceOverrides,r.id,t.id,`componentId`,n),e.updateNode(r.id,{instanceOverrides:r.instanceOverrides}))}function ps(e,t,n,{keepName:r=!1}={}){let i=e.nodes.get(t),a=e.nodes.get(n);if(!i||a?.type!==`COMPONENT`||i.type!==`INSTANCE`||i.parentId&&!Za(e,n,i.parentId))return;let o=i.componentId?e.nodes.get(i.componentId):void 0;fs(e,i,n);let s={componentId:n},c=Yo(a,i.componentScale);for(let e of uo)xn(i.instanceOverrides,i.id,i.id,e)||Go(s,c,e);!r&&(!o||i.name===o.name)&&(s.name=a.name);let l=Array.from(i.childIds),u=ua(e,i);for(let t of l)e.deleteNode(t);e.updateNode(t,s),$o(e,n,t),da(e,i,u)}let ms=new WeakMap;function hs(e,t){vs(e,t,xs(e,t))}function gs(e,t){Ka(e,()=>{for(let n of t)hs(e,n)})}function _s(e,t){let n=e.nodes.get(t);n?.type!==`INSTANCE`||!n.componentId||vs(e,n.componentId,[n])}function vs(e,t,n){let r=e.nodes.get(t);if(r?.type!==`COMPONENT`)return;let i=ms.get(e);if(i||(i=new Set,ms.set(e,i)),!i.has(t)){i.add(t);try{Ka(e,t=>{for(let i of n){let n=es(e,i);n.push(new Set(i.instanceOverrides.self.keys()));let a=Ko(n),o=Yo(r,i.componentScale),s={};qo(i,o,s,a);for(let e of uo)e!==`boundVariables`&&(Jo(i,e,a)||Go(s,o,e));Pa(e,s,i,o),Zo(e,i,s);let c=Ia(i.id,i.instanceOverrides);cs(e,r.id,i.id,i.instanceOverrides,c),Ja(e,c,t)}})}finally{i.delete(t)}}}function ys(e,t){let n=e.nodes.get(t);n?.type===`INSTANCE`&&(n.componentId&&e.instanceIndex.get(n.componentId)?.delete(t),n.type=`FRAME`,n.componentId=null,Cn(n.instanceOverrides))}function bs(e,t){let n=e.nodes.get(t);if(n?.componentId)return e.nodes.get(n.componentId)}function xs(e,t){let n=e.instanceIndex.get(t);if(!n)return[];let r=[];for(let t of n){let n=e.nodes.get(t);n&&r.push(n)}return r}function Ss(e,t){let n=e.nodes.get(t);for(;n;){if(n.type===`INSTANCE`)return n;n=n.parentId?e.nodes.get(n.parentId):void 0}}function Cs(e,t,n){let r=Ss(e,t);return r?xn(r.instanceOverrides,r.id,t,n):!1}let ws=new Set([...Sr,...Cr]);var Ts=class{layers=new Map;record(e,t,n){let r=this.layers.get(e.id);r||(r={before:{},changed:new Set,edited:new Set},this.layers.set(e.id,r));for(let i of Object.keys(t))Object.hasOwn(r.before,i)||Object.assign(r.before,{[i]:e[i]}),Object.is(e[i],t[i])||r.changed.add(i),n&&ws.has(i)&&r.edited.add(i)}*updates(e){for(let[t,{before:n,changed:r,edited:i}]of this.layers){let a=e(t);if(!a)continue;let o={};for(let e of Object.keys(n))r.has(e)&&Object.is(a[e],n[e])||Object.assign(o,{[e]:a[e]});let s=Object.keys(o);s.length>0&&(yield[a,o,s.filter(e=>i.has(e))])}}};let Es=new Set([...pa,`textDecoration`,`fills`,`width`,`height`]),Ds=new Set(pa);function Os(e,t){let n={},r=Object.keys(t).filter(n=>!en(e[n],t[n]));e.textPicture&&r.some(e=>Es.has(e))&&(n.textPicture=null);let i=r.some(e=>Ds.has(e))||ma.some(e=>r.includes(e));return i&&!(`derivedLayout`in t)&&(n.derivedLayout=null),e.derivedTextGlyphs&&i&&!t.derivedTextGlyphs&&(e.textPathData&&r.every(e=>e===`width`||e===`height`)||(n.derivedTextGlyphs=null,n.textPathData=null)),n}function ks(e,t){Object.assign(e,Os(e,t))}let As=new Set(`x.y.width.height.rotation.flipX.flipY.parentId.childIds.layoutMode.layoutDirection.layoutWrap.primaryAxisSizing.counterAxisSizing.itemSpacing.counterAxisSpacing.paddingTop.paddingRight.paddingBottom.paddingLeft.layoutGrow.layoutAlignSelf.layoutPositioning.minWidth.maxWidth.minHeight.maxHeight.visible.text.fontSize.lineHeight.letterSpacing.styleRuns.textAutoResize`.split(`.`));function js(e,t,n,r){let i=e.nodes.get(t);if(!i||(n=Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),Object.keys(n).every(e=>i[e]===n[e])))return null;Object.keys(n).some(e=>As.has(e))&&e.clearAbsPosCache();let a=n;return i.type===`TEXT`&&(a={...Os(i,n),...n}),n.vectorNetwork&&(a={...a,vectorNetwork:Yn(n.vectorNetwork)}),r?.(i,a),e.positionPreviewVersion++,Object.assign(i,a),a}function Ms(e,t){if(t.length===0)return;let n=new Set(e.source.editedFields);for(let e of t)n.add(e);e.source.editedFields=[...n]}function Ns(e){if(typeof e==`string`)return e;if(typeof e==`boolean`)return String(e);if(typeof e==`number`&&Number.isFinite(e))return Ps(e)}function Ps(e){let t=Math.fround(e);if(Math.abs(t)<1e-6)return`0`;if(Number.isInteger(t))return String(Math.min(2147483647,Math.max(-2147483648,t)));let n=Math.abs(t)*100,r=Math.floor(n),i=n-r===.5?r+r%2:Math.round(n);return`${t<0?`-`:``}${Math.floor(i/100)}.${String(i%100).padStart(2,`0`)}`}let Fs=new Set([`false`,`no`,`off`]);function Is(e){if(typeof e==`boolean`)return e;if(typeof e==`number`)return e!==0;if(typeof e==`string`)return e!==``&&!Fs.has(e.trim().toLowerCase())}let Ls={lang:void 0,message:void 0,abortEarly:void 0,abortPipeEarly:void 0};function Rs(e){return e?{lang:e?.lang??void 0,message:e?.message,abortEarly:e?.abortEarly??void 0,abortPipeEarly:e?.abortPipeEarly??void 0}:Ls}function zs(e){let t=typeof e;return t===`string`?`"${e}"`:t===`number`||t===`bigint`||t===`boolean`?`${e}`:t===`object`||t===`function`?(e&&Object.getPrototypeOf(e)?.constructor?.name)??`null`:t}function Bs(e,t,n,r,i){let a=i&&`input`in i?i.input:n.value,o=i?.expected??e.expects??null,s=i?.received??zs(a),c={kind:e.kind,type:e.type,input:a,expected:o,received:s,message:`Invalid ${t}: ${o?`Expected ${o} but r`:`R`}eceived ${s}`,requirement:e.requirement,path:i?.path,issues:i?.issues,lang:r.lang,abortEarly:r.abortEarly,abortPipeEarly:r.abortPipeEarly},l=e.kind===`schema`,u=i?.message??e.message??(e.reference,c.lang,void 0)??(l?(c.lang,void 0):null)??r.message??(c.lang,void 0);u!==void 0&&(c.message=typeof u==`function`?u(c):u),l&&(n.typed=!1),n.issues?n.issues.push(c):n.issues=[c]}function Vs(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Hs(e,t){return Object.prototype.hasOwnProperty.call(e,t)&&t!==`__proto__`&&t!==`prototype`&&t!==`constructor`}function Us(e,t){let n=[...new Set(e)];return n.length>1?`(${n.join(` ${t} `)})`:n[0]??`never`}function Ws(e){return e[`~standard`]={version:1,vendor:`valibot`,validate:t=>e[`~run`]({value:t},Rs())},e}var Gs=class extends Error{constructor(e){super(e[0].message),this.name=`ValiError`,this.issues=e}};function Ks(e,t){return{kind:`validation`,type:`check`,reference:Ks,async:!1,expects:null,requirement:e,message:t,"~run"(e,t){return e.typed&&!this.requirement(e.value)&&Bs(this,`input`,e,t),e}}}function qs(e){return{kind:`validation`,type:`finite`,reference:qs,async:!1,expects:null,requirement:Number.isFinite,message:e,"~run"(e,t){return e.typed&&!this.requirement(e.value)&&Bs(this,`finite`,e,t),e}}}function Js(e){return{kind:`validation`,type:`integer`,reference:Js,async:!1,expects:null,requirement:Number.isInteger,message:e,"~run"(e,t){return e.typed&&!this.requirement(e.value)&&Bs(this,`integer`,e,t),e}}}function Ys(e,t){return{kind:`validation`,type:`max_length`,reference:Ys,async:!1,expects:`<=${e}`,requirement:e,message:t,"~run"(e,t){return e.typed&&e.value.length>this.requirement&&Bs(this,`length`,e,t,{received:`${e.value.length}`}),e}}}function Xs(e,t){return{kind:`validation`,type:`max_value`,reference:Xs,async:!1,expects:`<=${e instanceof Date?e.toJSON():zs(e)}`,requirement:e,message:t,"~run"(e,t){return e.typed&&!(e.value<=this.requirement)&&Bs(this,`value`,e,t,{received:e.value instanceof Date?e.value.toJSON():zs(e.value)}),e}}}function Zs(e,t){return{kind:`validation`,type:`min_length`,reference:Zs,async:!1,expects:`>=${e}`,requirement:e,message:t,"~run"(e,t){return e.typed&&e.value.length<this.requirement&&Bs(this,`length`,e,t,{received:`${e.value.length}`}),e}}}function Qs(e,t){return{kind:`validation`,type:`min_value`,reference:Qs,async:!1,expects:`>=${e instanceof Date?e.toJSON():zs(e)}`,requirement:e,message:t,"~run"(e,t){return e.typed&&!(e.value>=this.requirement)&&Bs(this,`value`,e,t,{received:e.value instanceof Date?e.value.toJSON():zs(e.value)}),e}}}function $s(e){return{kind:`validation`,type:`non_empty`,reference:$s,async:!1,expects:`!0`,message:e,"~run"(e,t){return e.typed&&e.value.length===0&&Bs(this,`length`,e,t,{received:`0`}),e}}}function ec(e,t){return{kind:`transformation`,type:`parse_json`,reference:ec,config:e,message:t,async:!1,"~run"(e,t){try{e.value=JSON.parse(e.value,this.config?.reviver)}catch(n){if(n instanceof Error)Bs(this,`JSON`,e,t,{received:`"${n.message}"`}),e.typed=!1;else throw n}return e}}}function tc(e,t){return{kind:`validation`,type:`regex`,reference:tc,async:!1,expects:`${e}`,requirement:e,message:t,"~run"(e,t){return e.typed&&!this.requirement.test(e.value)&&Bs(this,`format`,e,t),e}}}function nc(e){return{kind:`transformation`,type:`transform`,reference:nc,async:!1,operation:e,"~run"(e){return e.value=this.operation(e.value),e}}}function rc(){return{kind:`transformation`,type:`trim`,reference:rc,async:!1,"~run"(e){return e.value=e.value.trim(),e}}}function ic(e,t,n){return typeof e.fallback==`function`?e.fallback(t,n):e.fallback}function ac(e,t){return Ws({...e,fallback:t,"~run"(t,n){let r=e[`~run`](t,n);return r.issues?{typed:!0,value:ic(this,r,n)}:r}})}function oc(e,t,n){return typeof e.default==`function`?e.default(t,n):e.default}function sc(e,t){return Ws({kind:`schema`,type:`array`,reference:sc,expects:`Array`,async:!1,item:e,message:t,"~run"(e,t){let n=e.value;if(Array.isArray(n)){e.typed=!0,e.value=[];for(let r=0;r<n.length;r++){let i=n[r],a=this.item[`~run`]({value:i},t);if(a.issues){let o={type:`array`,origin:`value`,input:n,key:r,value:i};for(let t of a.issues)t.path?t.path.unshift(o):t.path=[o],e.issues?.push(t);if(e.issues||=a.issues,t.abortEarly){e.typed=!1;break}}a.typed||(e.typed=!1),e.value.push(a.value)}}else Bs(this,`type`,e,t);return e}})}function cc(e){return Ws({kind:`schema`,type:`boolean`,reference:cc,expects:`boolean`,async:!1,message:e,"~run"(e,t){return typeof e.value==`boolean`?e.typed=!0:Bs(this,`type`,e,t),e}})}function lc(e,t){return Ws({kind:`schema`,type:`custom`,reference:lc,expects:`unknown`,async:!1,check:e,message:t,"~run"(e,t){return this.check(e.value)?e.typed=!0:Bs(this,`type`,e,t),e}})}function uc(e){return Ws({kind:`schema`,type:`lazy`,reference:uc,expects:`unknown`,async:!1,getter:e,"~run"(e,t){return this.getter(e.value)[`~run`](e,t)}})}function dc(e,t){return Ws({kind:`schema`,type:`literal`,reference:dc,expects:zs(e),async:!1,literal:e,message:t,"~run"(e,t){return Vs(e.value,this.literal)?e.typed=!0:Bs(this,`type`,e,t),e}})}function fc(e,t){return Ws({kind:`schema`,type:`loose_object`,reference:fc,expects:`Object`,async:!1,entries:e,message:t,"~run"(e,t){let n=e.value;if(n&&typeof n==`object`){e.typed=!0,e.value={};for(let r in this.entries){let i=this.entries[r];if(r in n||(i.type===`exact_optional`||i.type===`optional`||i.type===`nullish`)&&i.default!==void 0){let a=r in n?n[r]:oc(i),o=i[`~run`]({value:a},t);if(o.issues){let i={type:`object`,origin:`value`,input:n,key:r,value:a};for(let t of o.issues)t.path?t.path.unshift(i):t.path=[i],e.issues?.push(t);if(e.issues||=o.issues,t.abortEarly){e.typed=!1;break}}o.typed||(e.typed=!1),e.value[r]=o.value}else if(i.fallback!==void 0)e.value[r]=ic(i);else if(i.type!==`exact_optional`&&i.type!==`optional`&&i.type!==`nullish`&&(Bs(this,`key`,e,t,{input:void 0,expected:`"${r}"`,path:[{type:`object`,origin:`key`,input:n,key:r,value:n[r]}]}),t.abortEarly))break}if(!e.issues||!t.abortEarly)for(let t in n)Hs(n,t)&&!Object.prototype.hasOwnProperty.call(this.entries,t)&&(e.value[t]=n[t])}else Bs(this,`type`,e,t);return e}})}function pc(e,t){return Ws({kind:`schema`,type:`nullable`,reference:pc,expects:`(${e.expects} | null)`,async:!1,wrapped:e,default:t,"~run"(e,t){return e.value===null&&(this.default!==void 0&&(e.value=oc(this,e,t)),e.value===null)?(e.typed=!0,e):this.wrapped[`~run`](e,t)}})}function V(e){return Ws({kind:`schema`,type:`number`,reference:V,expects:`number`,async:!1,message:e,"~run"(e,t){return typeof e.value==`number`&&!isNaN(e.value)?e.typed=!0:Bs(this,`type`,e,t),e}})}function H(e,t){return Ws({kind:`schema`,type:`object`,reference:H,expects:`Object`,async:!1,entries:e,message:t,"~run"(e,t){let n=e.value;if(n&&typeof n==`object`){e.typed=!0,e.value={};for(let r in this.entries){let i=this.entries[r];if(r in n||(i.type===`exact_optional`||i.type===`optional`||i.type===`nullish`)&&i.default!==void 0){let a=r in n?n[r]:oc(i),o=i[`~run`]({value:a},t);if(o.issues){let i={type:`object`,origin:`value`,input:n,key:r,value:a};for(let t of o.issues)t.path?t.path.unshift(i):t.path=[i],e.issues?.push(t);if(e.issues||=o.issues,t.abortEarly){e.typed=!1;break}}o.typed||(e.typed=!1),e.value[r]=o.value}else if(i.fallback!==void 0)e.value[r]=ic(i);else if(i.type!==`exact_optional`&&i.type!==`optional`&&i.type!==`nullish`&&(Bs(this,`key`,e,t,{input:void 0,expected:`"${r}"`,path:[{type:`object`,origin:`key`,input:n,key:r,value:n[r]}]}),t.abortEarly))break}}else Bs(this,`type`,e,t);return e}})}function U(e,t){return Ws({kind:`schema`,type:`optional`,reference:U,expects:`(${e.expects} | undefined)`,async:!1,wrapped:e,default:t,"~run"(e,t){return e.value===void 0&&(this.default!==void 0&&(e.value=oc(this,e,t)),e.value===void 0)?(e.typed=!0,e):this.wrapped[`~run`](e,t)}})}function mc(e,t){return Ws({kind:`schema`,type:`picklist`,reference:mc,expects:Us(e.map(zs),`|`),async:!1,options:e,message:t,"~run"(e,t){return this.options.includes(e.value)?e.typed=!0:Bs(this,`type`,e,t),e}})}function hc(e,t,n){return Ws({kind:`schema`,type:`record`,reference:hc,expects:`Object`,async:!1,key:e,value:t,message:n,"~run"(e,t){let n=e.value;if(n&&typeof n==`object`){e.typed=!0,e.value={};for(let r in n)if(Hs(n,r)){let i=n[r],a=this.key[`~run`]({value:r},t);if(a.issues){let o={type:`object`,origin:`key`,input:n,key:r,value:i};for(let t of a.issues)t.path=[o],e.issues?.push(t);if(e.issues||=a.issues,t.abortEarly){e.typed=!1;break}}let o=this.value[`~run`]({value:i},t);if(o.issues){let a={type:`object`,origin:`value`,input:n,key:r,value:i};for(let t of o.issues)t.path?t.path.unshift(a):t.path=[a],e.issues?.push(t);if(e.issues||=o.issues,t.abortEarly){e.typed=!1;break}}(!a.typed||!o.typed)&&(e.typed=!1),a.typed&&(e.value[a.value]=o.value)}}else Bs(this,`type`,e,t);return e}})}function W(e){return Ws({kind:`schema`,type:`string`,reference:W,expects:`string`,async:!1,message:e,"~run"(e,t){return typeof e.value==`string`?e.typed=!0:Bs(this,`type`,e,t),e}})}function gc(e){let t;if(e)for(let n of e)if(t)for(let e of n.issues)t.push(e);else t=n.issues;return t}function _c(e,t){return Ws({kind:`schema`,type:`union`,reference:_c,expects:Us(e.map(e=>e.expects),`|`),async:!1,options:e,message:t,"~run"(e,t){let n,r,i;for(let a of this.options){let o=a[`~run`]({value:e.value},t);if(o.typed)if(o.issues)r?r.push(o):r=[o];else{n=o;break}else i?i.push(o):i=[o]}if(n)return n;if(r){if(r.length===1)return r[0];Bs(this,`type`,e,t,{issues:gc(r)}),e.typed=!0}else if(i?.length===1)return i[0];else Bs(this,`type`,e,t,{issues:gc(i)});return e}})}function vc(){return Ws({kind:`schema`,type:`unknown`,reference:vc,expects:`unknown`,async:!1,"~run"(e){return e.typed=!0,e}})}function yc(e,t,n){let r=e[`~run`]({value:t},Rs(n));if(r.issues)throw new Gs(r.issues);return r.value}function G(...e){return Ws({...e[0],pipe:e,"~run"(t,n){for(let r of e)if(r.kind!==`metadata`){if(t.issues&&(r.kind===`schema`||r.kind===`transformation`)){t.typed=!1;break}(!t.issues||!n.abortEarly&&!n.abortPipeEarly)&&(t=r[`~run`](t,n))}return t}})}function bc(e,t,n){let r=e[`~run`]({value:t},Rs(n));return{typed:r.typed,success:!r.issues,output:r.value,issues:r.issues}}var xc=class extends Error{name=`VariableFormulaError`};function Sc(e){return typeof e==`object`&&`operator`in e}function Cc(e){return typeof e==`object`&&`aliasId`in e}function wc(e,t,n=0){if(n>64)throw new xc(`Formula is too deeply nested`);return Sc(e)?t.operation(e,e.operands.map(e=>wc(e,t,n+1))):Cc(e)?t.reference(e.aliasId):t.literal(e)}let Tc=[`FLOAT`,`FLOAT`],Ec=[`FLOAT`,`BOOLEAN`,`STRING`],Dc={add:{spellings:[`+`],arity:2,precedence:5,associative:!0,overloads:[{operands:Tc,result:`FLOAT`},{operands:[`STRING`,`STRING`],result:`STRING`},...[`FLOAT`,`BOOLEAN`].flatMap(e=>[{operands:[`STRING`,e],result:`STRING`},{operands:[e,`STRING`],result:`STRING`}])],needs:`adds numbers or joins text`,apply:([e,t])=>typeof e==`number`&&typeof t==`number`?e+t:`${Ns(e)??``}${Ns(t)??``}`},subtract:Oc(`-`,5,(e,t)=>e-t),multiply:{...Oc(`*`,6,(e,t)=>e*t),associative:!0},divide:Oc(`/`,6,(e,t)=>{if(t===0)throw new xc(`Cannot divide by zero`);return e/t}),negate:{spellings:[`-`],arity:1,precedence:7,overloads:[{operands:[`FLOAT`],result:`FLOAT`}],needs:`needs numbers`,apply:([e])=>-Number(e)},equal:Ac(`==`,(e,t)=>e===t),notEqual:Ac(`!=`,(e,t)=>e!==t),less:kc(`<`,(e,t)=>e<t),lessOrEqual:kc(`<=`,(e,t)=>e<=t),greater:kc(`>`,(e,t)=>e>t),greaterOrEqual:kc(`>=`,(e,t)=>e>=t),and:jc([`and`,`&&`],2,(e,t)=>e&&t),or:jc([`or`,`||`],1,(e,t)=>e||t),not:{spellings:[`not`,`!`],arity:1,precedence:7,overloads:[{operands:[`BOOLEAN`],result:`BOOLEAN`}],needs:`needs true or false`,apply:([e])=>e!==!0},text:{spellings:[`text`],call:!0,arity:1,overloads:Ec.map(e=>({operands:[e],result:`STRING`})),needs:`needs a number, text, or true or false`,apply:([e])=>Ns(e)??``},truthy:{spellings:[`truthy`],call:!0,arity:1,overloads:Ec.map(e=>({operands:[e],result:`BOOLEAN`})),needs:`needs a number, text, or true or false`,apply:([e])=>Is(e)??!1},if:{spellings:[`if`],call:!0,arity:3,overloads:[`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`].map(e=>({operands:[`BOOLEAN`,e,e],result:e})),needs:`needs true or false, then two values of the same type`,apply:([e,t,n])=>e===!0?t:n}};function Oc(e,t,n){return{spellings:[e],arity:2,precedence:t,overloads:[{operands:Tc,result:`FLOAT`}],needs:`needs numbers`,apply:([e,t])=>n(Number(e),Number(t))}}function kc(e,t){return{spellings:[e],arity:2,precedence:4,nonAssociative:!0,overloads:[{operands:Tc,result:`BOOLEAN`}],needs:`needs numbers`,apply:([e,n])=>t(Number(e),Number(n))}}function Ac(e,t){return{spellings:[e],arity:2,precedence:3,nonAssociative:!0,overloads:Ec.map(e=>({operands:[e,e],result:`BOOLEAN`})),needs:`compares two numbers, two texts, or two true or false values`,apply:([e,n])=>t(e,n)}}function jc(e,t,n){return{spellings:e,arity:2,precedence:t,associative:!0,overloads:[{operands:[`BOOLEAN`,`BOOLEAN`],result:`BOOLEAN`}],needs:`needs true or false`,apply:([e,t])=>n(e===!0,t===!0)}}let Mc=Object.keys(Dc);function Nc(e){return new Map(Mc.filter(t=>e(Dc[t])).flatMap(e=>Dc[e].spellings.map(t=>[t,e])))}let Pc=Nc(({arity:e,call:t})=>e===2&&!t),Fc=Nc(({arity:e,call:t})=>e===1&&!t);Nc(({call:e})=>e===!0),new Set([...Pc.keys(),...Fc.keys()].filter(e=>/^\p{L}+$/u.test(e)));function Ic(e){return Object.hasOwn(Dc,e)}function Lc(e){return Dc[e].arity}function Rc(e){return Dc[e].spellings[0]}function zc(e){return Dc[e].call===!0}new Set(Mc.flatMap(e=>{let{nonAssociative:t,precedence:n}=Dc[e];return t&&n!==void 0?[n]:[]}));function Bc(e){return Dc[e].overloads}function Vc(e){let{call:t,needs:n}=Dc[e],r=Rc(e);return{name:t?`${r}()`:r,needs:n}}function Hc(e,t){return Dc[e].apply(t)}function Uc(e,t){let n=[];if(t.length!==Lc(e))return n;for(let{operands:r,result:i}of Bc(e)){let e=!0;for(let n=0;e&&n<r.length;n++)e=t[n]===void 0||t[n]===r[n];e&&!n.includes(i)&&n.push(i)}return n}function Wc(e,t){for(let n of Bc(e)){let{operands:e}=n,r=e.length===t.length;for(let n=0;r&&n<e.length;n++)r=e[n]===t[n];if(r)return n}}function Gc(e,t){let n=Wc(e,t);if(n)return n.result;let r=Lc(e),{name:i,needs:a}=Vc(e);throw t.length===r?new xc(`${i} ${a}`):zc(e)?new xc(`${i} takes ${r} ${r===1?`value`:`values`}`):new xc(`Wrong number of operands for ${e}`)}function Kc(e){let t={...e};return[`r`,`g`,`b`,`a`].every(e=>Number.isFinite(t[e]))}function qc(e){if(typeof e==`number`)return`FLOAT`;if(typeof e==`boolean`)return`BOOLEAN`;if(typeof e==`string`)return`STRING`;if(Kc(e))return`COLOR`;throw new xc(`Formulas use numbers, text, true or false, and colors`)}function Jc(e,t=()=>void 0){return wc(e,{literal:qc,reference:t,operation:({operator:e},t)=>{if(t.every(e=>e!==void 0))return Gc(e,t);let n=Uc(e,t);return n.length||Gc(e,t.map(e=>e??`FLOAT`)),n.length===1?n[0]:void 0}})}function Yc(e){if(typeof e!=`number`)qc(e);else if(!Number.isFinite(e))throw new xc(`Formula result must be finite`);return e}function Xc(e,t){return wc(e,{literal:Yc,reference:e=>{let n=t(e);if(n===void 0)throw new xc(`Cannot resolve variable ${e}`);return Yc(n)},operation:({operator:e},t)=>{if(!Ic(e))throw new xc(`Unknown formula operator ${String(e)}`);return Gc(e,t.map(qc)),Yc(Hc(e,t))}})}let Zc=G(V(),qs()),Qc=H({r:Zc,g:Zc,b:Zc,a:Zc}),$c=H({aliasId:W()}),el=H({expression:dc(`COMPOSE_COLOR`),color:_c([$c,Qc]),opacity:_c([$c,Zc])});function tl(e){return typeof e==`object`&&`expression`in e&&e.expression===`UNSUPPORTED`}function nl(e,t){if(tl(e))return;if(typeof e!=`object`)return e;if(`aliasId`in e)return t(e.aliasId);if(!(`expression`in e))return e;if(e.expression===`FORMULA`){let n=Xc(e.value,t);if(qc(n)!==e.type)throw new xc(`Wrong formula result type`);return n}let n=yc(el,e),r=`aliasId`in n.color?t(n.color.aliasId):n.color,i=typeof n.opacity==`object`?t(n.opacity.aliasId):n.opacity;if(!(!r||typeof r!=`object`||!Object.values(r).every(Number.isFinite)||typeof i!=`number`||!Number.isFinite(i)))return{...r,a:Math.min(1,Math.max(0,i/100))}}function rl(e,t){let n=t,r=t;for(;r&&!(r.type===`COMPONENT`||r.type===`COMPONENT_SET`);)r.type===`INSTANCE`&&(n=r),r=r.parentId?e.getNode(r.parentId):void 0;return n}function il(e,t,n){if(!Ji(n))return;let r=rl(e,t);t.variableBindingScales={...t.variableBindingScales,[n]:r.variableAssignmentScales[n]??1}}function al(e,t,n=`active`){let r={},i=r=>{let i=t.boundVariables[r];if(!(!i||Cs(e,t.id,r)))return e.resolveVariableForNode(t.id,i,n)},a=t.type===`TEXT`?Ns(i(`text`)):void 0;a!==void 0&&a!==t.text&&(r.text=a);let o=Is(i(`visible`));return o!==void 0&&o!==t.visible&&(r.visible=o),r}function ol(e,t){e.color={...t,a:1},e.opacity=t.a}function sl(e,t,n=`active`){let r={};for(let i in t.boundVariables){if(!i.endsWith(`/color`))continue;let a=ea(i);if(!a)continue;let o=e.resolveColorVariableForNode(t.id,t.boundVariables[i],n),{index:s}=a;if(o)if(a.list===`fills`){if(!t.fills[s])continue;r.fills??=nr(t.fills),ol(r.fills[s],o)}else{if(!t.strokes[s])continue;r.strokes??=rr(t.strokes),ol(r.strokes[s],o)}}return r}function cl(e,t){return e.activeMode.get(t)||(e.variableCollections.get(t)?.defaultModeId??``)}function ll(e,t,n,r=`active`){let i=e.nodes.get(t);for(;i;){let t=i.variableModes[n];if(t)return t;i=i.parentId?e.nodes.get(i.parentId):void 0}return r==="default"?e.variableCollections.get(n)?.defaultModeId??``:cl(e,n)}function ul(e,t,n,r){let i=e.variables.get(t);return hl(e,t,t=>n&&i?.collectionId===t?n:cl(e,t),r)}var dl=class extends xc{code;variableId;name=`VariableResolutionError`;constructor(e,t,n){super(n),this.code=e,this.variableId=t}};let fl={FLOAT:`number`,BOOLEAN:`boolean`,STRING:`string`,COLOR:`object`};function pl(e,t,n,r=new Set,i,a){let o=i?.get(t);if(o!==void 0)return o;if(r.has(t))throw new dl(`cycle`,t,`Circular variable reference`);if(r.size>=64)throw new dl(`depth`,t,`Too many linked variables`);let s=e.variables.get(t);if(!s)throw new dl(`missing-variable`,t,`Missing variable: ${t}`);let c=a?.get(t)??vl(e,s,n(s.collectionId));if(c===void 0)throw new dl(`missing-value`,t,`Missing value: ${s.name}`);return ml(e,s,c,n,r,i,a)}function ml(e,t,n,r,i,a,o){let s=t.id;i.add(s);try{let c=nl(n,t=>pl(e,t,r,i,a,o));if(c===void 0||typeof c!==fl[t.type])throw new dl(`type`,s,`Wrong result type: ${t.name}`);if(typeof c==`number`&&!Number.isFinite(c))throw new dl(`non-finite`,s,`Non-finite value: ${t.name}`);return a?.set(s,c),c}finally{i.delete(s)}}function hl(e,t,n,r,i){let a=i?.get(t);if(a!==void 0)return a;let o=e.variables.get(t);if(!o)return;let s=t;for(let a=r?.size??0;a<64;a++){let a=s===t?o:e.variables.get(s);if(!a||r?.has(s))return;let c=vl(e,a,n(a.collectionId));if(typeof c==`object`&&`aliasId`in c){s=c.aliasId;continue}return _l(typeof c==`object`&&`expression`in c?gl(e,a,c,n,r,i):c,o.type)}}function gl(e,t,n,r,i,a){try{return ml(e,t,n,r,i??new Set,a??new Map)}catch{return}}function _l(e,t){if(!(e===void 0||typeof e!==fl[t])&&!(typeof e==`object`&&!(`r`in e)))return typeof e==`number`&&!Number.isFinite(e)?void 0:e}function vl(e,t,n){let r=t.valuesByMode;if(Object.hasOwn(r,n))return r[n];let i=e.variableCollections.get(t.collectionId)?.defaultModeId??``;return Object.hasOwn(r,i)?r[i]:Object.values(r).at(0)}function yl(e,t){let n=ul(e,t);if(n&&typeof n==`object`&&`r`in n)return n}function bl(e,t){let n=ul(e,t);return typeof n==`number`?n:void 0}function xl(e,t,n,r=`active`){let i=Cl(e,t,n,r);if(i&&typeof i==`object`&&`r`in i)return i}function Sl(e,t,n,r=`active`){let i=Cl(e,t,n,r);return typeof i==`number`?i:void 0}function Cl(e,t,n,r=`active`){return hl(e,n,n=>ll(e,t,n,r))}function wl(e,t,n,r=`active`){let i=Cl(e,t,n,r);return typeof i==`string`?i:void 0}let Tl=(e,t)=>{if(typeof e==`number`){if(t===3)return{mode:`rgb`,r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:`rgb`,r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:`rgb`,r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:`rgb`,r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dl=e=>Tl(El[e.toLowerCase()],6),Ol=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,kl=e=>{let t;return(t=e.match(Ol))?Tl(parseInt(t[1],16),t[1].length):void 0},Al=`([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`,jl=`${Al}%`,Ml=`(?:${Al}%|${Al})`,Nl=`(?:${Al}%|${Al}|none)`,Pl=`(?:${Al}(deg|grad|rad|turn)|${Al})`,Fl=`\\s*,\\s*`;RegExp(`^`+Nl+`$`);let Il=RegExp(`^rgba?\\(\\s*${Al}${Fl}${Al}${Fl}${Al}\\s*(?:,\\s*${Ml}\\s*)?\\)$`),Ll=RegExp(`^rgba?\\(\\s*${jl}${Fl}${jl}${Fl}${jl}\\s*(?:,\\s*${Ml}\\s*)?\\)$`),Rl=e=>{let t={mode:`rgb`},n;if(n=e.match(Il))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(Ll))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]===void 0?n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))):t.alpha=Math.max(0,Math.min(1,n[4]/100)),t},zl=(e,t)=>e===void 0?void 0:typeof e==`object`?e.mode===void 0?t?{...e,mode:t}:void 0:e:su(e),Bl=(e=`rgb`)=>t=>(t=zl(t,e))===void 0?void 0:t.mode===e?t:Vl[t.mode][e]?Vl[t.mode][e](t):e===`rgb`?Vl[t.mode].rgb(t):Vl.rgb[e](Vl[t.mode].rgb(t)),Vl={},Hl={},Ul=[],Wl={},Gl=e=>e,K=e=>(Vl[e.mode]={...Vl[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{Vl[t]||(Vl[t]={}),Vl[t][e.mode]=e.fromMode[t]}),e.ranges||={},e.difference||={},e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]==`function`&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=Gl)}),Hl[e.mode]=e,(e.parse||[]).forEach(t=>{ql(t,e.mode)}),Bl(e.mode)),Kl=e=>Hl[e],ql=(e,t)=>{if(typeof e==`string`){if(!t)throw Error(`'mode' required when 'parser' is a string`);Wl[e]=t}else typeof e==`function`&&Ul.indexOf(e)<0&&Ul.push(e)},Jl=/[^\x00-\x7F]|[a-zA-Z_]/,Yl=/[^\x00-\x7F]|[-\w]/,q={Function:`function`,Ident:`ident`,Number:`number`,Percentage:`percentage`,ParenClose:`)`,None:`none`,Hue:`hue`,Alpha:`alpha`},J=0;function Xl(e){let t=e[J],n=e[J+1];return t===`-`||t===`+`?/\d/.test(n)||n===`.`&&/\d/.test(e[J+2]):t===`.`?/\d/.test(n):/\d/.test(t)}function Zl(e){if(J>=e.length)return!1;let t=e[J];if(Jl.test(t))return!0;if(t===`-`){if(e.length-J<2)return!1;let t=e[J+1];return!!(t===`-`||Jl.test(t))}return!1}let Ql={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function $l(e){let t=``;if((e[J]===`-`||e[J]===`+`)&&(t+=e[J++]),t+=eu(e),e[J]===`.`&&/\d/.test(e[J+1])&&(t+=e[J++]+eu(e)),(e[J]===`e`||e[J]===`E`)&&((e[J+1]===`-`||e[J+1]===`+`)&&/\d/.test(e[J+2])?t+=e[J++]+e[J++]+eu(e):/\d/.test(e[J+1])&&(t+=e[J++]+eu(e))),Zl(e)){let n=tu(e);return n===`deg`||n===`rad`||n===`turn`||n===`grad`?{type:q.Hue,value:t*Ql[n]}:void 0}return e[J]===`%`?(J++,{type:q.Percentage,value:+t}):{type:q.Number,value:+t}}function eu(e){let t=``;for(;/\d/.test(e[J]);)t+=e[J++];return t}function tu(e){let t=``;for(;J<e.length&&Yl.test(e[J]);)t+=e[J++];return t}function nu(e){let t=tu(e);return e[J]===`(`?(J++,{type:q.Function,value:t}):t===`none`?{type:q.None,value:void 0}:{type:q.Ident,value:t}}function ru(e=``){let t=e.trim(),n=[],r;for(J=0;J<t.length;){if(r=t[J++],r===`
`||r===`	`||r===` `){for(;J<t.length&&(t[J]===`
`||t[J]===`	`||t[J]===` `);)J++;continue}if(r===`,`)return;if(r===`)`){n.push({type:q.ParenClose});continue}if(r===`+`){if(J--,Xl(t)){n.push($l(t));continue}return}if(r===`-`){if(J--,Xl(t)){n.push($l(t));continue}if(Zl(t)){n.push({type:q.Ident,value:tu(t)});continue}return}if(r===`.`){if(J--,Xl(t)){n.push($l(t));continue}return}if(r===`/`){for(;J<t.length&&(t[J]===`
`||t[J]===`	`||t[J]===` `);)J++;let e;if(Xl(t)&&(e=$l(t),e.type!==q.Hue)){n.push({type:q.Alpha,value:e});continue}if(Zl(t)&&tu(t)===`none`){n.push({type:q.Alpha,value:{type:q.None,value:void 0}});continue}return}if(/\d/.test(r)){J--,n.push($l(t));continue}if(Jl.test(r)){J--,n.push(nu(t));continue}return}return n}function iu(e){e._i=0;let t=e[e._i++];if(!t||t.type!==q.Function||t.value!==`color`||(t=e[e._i++],t.type!==q.Ident))return;let n=Wl[t.value];if(!n)return;let r={mode:n},i=au(e,!1);if(!i)return;let a=Kl(n).channels;for(let e=0,t,n;e<a.length;e++)t=i[e],n=a[e],t.type!==q.None&&(r[n]=t.type===q.Number?t.value:t.value/100,n===`alpha`&&(r[n]=Math.max(0,Math.min(1,r[n]))));return r}function au(e,t){let n=[],r;for(;e._i<e.length;){if(r=e[e._i++],r.type===q.None||r.type===q.Number||r.type===q.Alpha||r.type===q.Percentage||t&&r.type===q.Hue){n.push(r);continue}if(r.type===q.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==q.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:q.None,value:void 0}),n.every(e=>e.type!==q.Alpha)?n:void 0}}function ou(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==q.Function)return;let r=au(e,t);if(r)return r.unshift(n.value),r}let su=e=>{if(typeof e!=`string`)return;let t=ru(e),n=t?ou(t,!0):void 0,r,i=0,a=Ul.length;for(;i<a;)if((r=Ul[i++](e,n))!==void 0)return r;return t?iu(t):void 0};function cu(e,t){if(!t||t[0]!==`rgb`&&t[0]!==`rgba`)return;let n={mode:`rgb`},[,r,i,a,o]=t;if(!(r.type===q.Hue||i.type===q.Hue||a.type===q.Hue))return r.type!==q.None&&(n.r=r.type===q.Number?r.value/255:r.value/100),i.type!==q.None&&(n.g=i.type===q.Number?i.value/255:i.value/100),a.type!==q.None&&(n.b=a.type===q.Number?a.value/255:a.value/100),o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let lu=e=>e===`transparent`?{mode:`rgb`,r:0,g:0,b:0,alpha:0}:void 0,uu=(e,t,n)=>e+n*(t-e),du=e=>{let t=[];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];r===void 0&&i===void 0?t.push(void 0):r!==void 0&&i!==void 0?t.push([r,i]):t.push(r===void 0?[i,i]:[r,r])}return t},Y=(e=>t=>{let n=du(t);return t=>{let r=t*n.length,i=t>=1?n.length-1:Math.max(Math.floor(r),0),a=n[i];return a===void 0?void 0:e(a[0],a[1],r-i)}})(uu),fu=e=>{let t=!1,n=e.map(e=>e===void 0?1:(t=!0,e));return t?n:e},pu={mode:`rgb`,channels:[`r`,`g`,`b`,`alpha`],parse:[cu,kl,Rl,Dl,lu,`srgb`],serialize:`srgb`,interpolate:{r:Y,g:Y,b:Y,alpha:{use:Y,fixup:fu}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},mu=(e=0)=>Math.abs(e)**(563/256)*Math.sign(e),hu=e=>{let t=mu(e.r),n=mu(e.g),r=mu(e.b),i={mode:`xyz65`,x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*r,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*r,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},gu=e=>Math.abs(e)**(256/563)*Math.sign(e),_u=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`a98`,r:gu(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:gu(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:gu(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return r!==void 0&&(i.alpha=r),i},vu=(e=0)=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*((t+.055)/1.055)**2.4},yu=({r:e,g:t,b:n,alpha:r})=>{let i={mode:`lrgb`,r:vu(e),g:vu(t),b:vu(n)};return r!==void 0&&(i.alpha=r),i},bu=e=>{let{r:t,g:n,b:r,alpha:i}=yu(e),a={mode:`xyz65`,x:.4123907992659593*t+.357584339383878*n+.1804807884018343*r,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*r,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*r};return i!==void 0&&(a.alpha=i),a},xu=(e=0)=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*t**(1/2.4)-.055):e*12.92},Su=({r:e,g:t,b:n,alpha:r},i=`rgb`)=>{let a={mode:i,r:xu(e),g:xu(t),b:xu(n)};return r!==void 0&&(a.alpha=r),a},Cu=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Su({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return r!==void 0&&(i.alpha=r),i},wu={...pu,mode:`a98`,parse:[`a98-rgb`],serialize:`a98-rgb`,fromMode:{rgb:e=>_u(bu(e)),xyz65:_u},toMode:{rgb:e=>Cu(hu(e)),xyz65:hu}},Tu=e=>(e%=360)<0?e+360:e,Eu=(e,t)=>e.map((n,r,i)=>{if(n===void 0)return n;let a=Tu(n);return r===0||e[r-1]===void 0?a:t(a-Tu(i[r-1]))}).reduce((e,t)=>!e.length||t===void 0||e[e.length-1]===void 0?(e.push(t),e):(e.push(t+e[e.length-1]),e),[]),Du=e=>Eu(e,e=>Math.abs(e)<=180?e:e-360*Math.sign(e)),Ou=[-.14861,1.78277,-.29227,-.90649,1.97294,0],ku=Math.PI/180,Au=180/Math.PI,ju=Ou[3]*Ou[4],Mu=Ou[1]*Ou[4],Nu=Ou[1]*Ou[2]-Ou[0]*Ou[3],Pu=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(Nu*n+e*ju-t*Mu)/(Nu+ju-Mu),a=n-i,o=(Ou[4]*(t-i)-Ou[2]*a)/Ou[3],s={mode:`cubehelix`,l:i,s:i===0||i===1?void 0:Math.sqrt(a*a+o*o)/(Ou[4]*i*(1-i))};return s.s&&(s.h=Math.atan2(o,a)*Au-120),r!==void 0&&(s.alpha=r),s},Fu=({h:e,s:t,l:n,alpha:r})=>{let i={mode:`rgb`};e=(e===void 0?0:e+120)*ku,n===void 0&&(n=0);let a=t===void 0?0:t*n*(1-n),o=Math.cos(e),s=Math.sin(e);return i.r=n+a*(Ou[0]*o+Ou[1]*s),i.g=n+a*(Ou[2]*o+Ou[3]*s),i.b=n+a*(Ou[4]*o+Ou[5]*s),r!==void 0&&(i.alpha=r),i},Iu=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=Tu(e.h),r=Tu(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},Lu=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=Tu(e.h),r=Tu(t.h);return Math.abs(r-n)>180?n-(r-360*Math.sign(r-n)):r-n},Ru=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=Tu(e.h),r=Tu(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},zu=(e=`rgb`,t=[1,1,1,0])=>{let n=Kl(e),r=n.channels,i=n.difference,a=Bl(e);return(e,n)=>{let o=a(e),s=a(n);return Math.sqrt(r.reduce((e,n,r)=>{let a=i[n]?i[n](o,s):o[n]-s[n];return e+(t[r]||0)*(isNaN(a)?0:a)**2},0))}},Bu=e=>{let t=e.reduce((e,t)=>{if(t!==void 0){let n=t*Math.PI/180;e.sin+=Math.sin(n),e.cos+=Math.cos(n)}return e},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},Vu={mode:`cubehelix`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--cubehelix`],serialize:`--cubehelix`,ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:Pu},toMode:{rgb:Fu},interpolate:{h:{use:Y,fixup:Du},s:Y,l:Y,alpha:{use:Y,fixup:fu}},difference:{h:Iu},average:{h:Bu}},Hu=({l:e,a:t,b:n,alpha:r},i=`lch`)=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),o={mode:i,l:e,c:a};return a&&(o.h=Tu(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(o.alpha=r),o},Uu=({l:e,c:t,h:n,alpha:r},i=`lab`)=>{n===void 0&&(n=0);let a={mode:i,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(a.alpha=r),a},Wu=29**3/3**3,Gu=6**3/29**3,Ku={X:.3457/.3585,Y:1,Z:.2958/.3585},qu={X:.3127/.329,Y:1,Z:.3583/.329},Ju=e=>e**3>Gu?e**3:(116*e-16)/Wu,Yu=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz65`,x:Ju(a)*qu.X,y:Ju(i)*qu.Y,z:Ju(o)*qu.Z};return r!==void 0&&(s.alpha=r),s},Xu=e=>Cu(Yu(e)),Zu=e=>e>Gu?Math.cbrt(e):(Wu*e+16)/116,Qu=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Zu(e/qu.X),a=Zu(t/qu.Y),o=Zu(n/qu.Z),s={mode:`lab65`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},$u=e=>{let t=Qu(bu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},ed=26/180*Math.PI,td=Math.cos(ed),nd=Math.sin(ed),rd=100/Math.log(139/100),id=({l:e,c:t,h:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`lab65`,l:(Math.exp(e*1/rd)-1)/.0039},a=(Math.exp(.0435*t*1*1)-1)/.075,o=a*Math.cos(n/180*Math.PI-ed),s=a*Math.sin(n/180*Math.PI-ed);return i.a=o*td-s/.83*nd,i.b=o*nd+s/.83*td,r!==void 0&&(i.alpha=r),i},ad=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=t*td+n*nd,a=.83*(n*td-t*nd),o=Math.sqrt(i*i+a*a),s={mode:`dlch`,l:rd/1*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*1*1)};return s.c&&(s.h=Tu((Math.atan2(a,i)+ed)/Math.PI*180)),r!==void 0&&(s.alpha=r),s},od=e=>id(Hu(e,`dlch`)),sd=e=>Uu(ad(e),`dlab`),cd={mode:`dlab`,parse:[`--din99o-lab`],serialize:`--din99o-lab`,toMode:{lab65:od,rgb:e=>Xu(od(e))},fromMode:{lab65:sd,rgb:e=>sd($u(e))},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:Y,a:Y,b:Y,alpha:{use:Y,fixup:fu}}},ld={mode:`dlch`,parse:[`--din99o-lch`],serialize:`--din99o-lch`,toMode:{lab65:id,dlab:e=>Uu(e,`dlab`),rgb:e=>Xu(id(e))},fromMode:{lab65:ad,dlab:e=>Hu(e,`dlch`),rgb:e=>ad($u(e))},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:Y,c:Y,h:{use:Y,fixup:Du},alpha:{use:Y,fixup:fu}},difference:{h:Ru},average:{h:Bu}};function ud({h:e,s:t,i:n,alpha:r}){e=Tu(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1-t)};break;case 1:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1+t*(3/(2-i)-1)),b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n*(1+t*(3/(2-i)-1)),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:a={r:n*(1-t),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1+t*(3/(2-i)-1))};break;case 4:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3/(2-i)-1))};break;case 5:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function dd({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsi`,s:e+t+n===0?0:1-3*a/(e+t+n),i:(e+t+n)/3};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}let fd={mode:`hsi`,toMode:{rgb:ud},parse:[`--hsi`],serialize:`--hsi`,fromMode:{rgb:dd},channels:[`h`,`s`,`i`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Y,fixup:Du},s:Y,i:Y,alpha:{use:Y,fixup:fu}},difference:{h:Iu},average:{h:Bu}};function pd({h:e,s:t,l:n,alpha:r}){e=Tu(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=n+t*(n<.5?n:1-n),a=i-(i-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:i,g:a,b:2*n-i};break;case 1:o={r:a,g:i,b:2*n-i};break;case 2:o={r:2*n-i,g:i,b:a};break;case 3:o={r:2*n-i,g:a,b:i};break;case 4:o={r:a,g:2*n-i,b:i};break;case 5:o={r:i,g:2*n-i,b:a};break;default:o={r:2*n-i,g:2*n-i,b:2*n-i}}return o.mode=`rgb`,r!==void 0&&(o.alpha=r),o}function md({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsl`,s:i===a?0:(i-a)/(1-Math.abs(i+a-1)),l:.5*(i+a)};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}let hd=(e,t)=>{switch(t){case`deg`:return+e;case`rad`:return e/Math.PI*180;case`grad`:return e/10*9;case`turn`:return e*360}},gd=RegExp(`^hsla?\\(\\s*${Pl}${Fl}${jl}${Fl}${jl}\\s*(?:,\\s*${Ml}\\s*)?\\)$`),_d=e=>{let t=e.match(gd);if(!t)return;let n={mode:`hsl`};return t[3]===void 0?t[1]!==void 0&&t[2]!==void 0&&(n.h=hd(t[1],t[2])):n.h=+t[3],t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]===void 0?t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))):n.alpha=Math.max(0,Math.min(1,t[6]/100)),n};function vd(e,t){if(!t||t[0]!==`hsl`&&t[0]!==`hsla`)return;let n={mode:`hsl`},[,r,i,a,o]=t;if(r.type!==q.None){if(r.type===q.Percentage)return;n.h=r.value}if(i.type!==q.None){if(i.type===q.Hue)return;n.s=i.value/100}if(a.type!==q.None){if(a.type===q.Hue)return;n.l=a.value/100}return o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let yd={mode:`hsl`,toMode:{rgb:pd},fromMode:{rgb:md},channels:[`h`,`s`,`l`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[vd,_d],serialize:e=>`hsl(${e.h===void 0?`none`:e.h} ${e.s===void 0?`none`:e.s*100+`%`} ${e.l===void 0?`none`:e.l*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Y,fixup:Du},s:Y,l:Y,alpha:{use:Y,fixup:fu}},difference:{h:Iu},average:{h:Bu}};function bd({h:e,s:t,v:n,alpha:r}){e=Tu(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n,g:n*(1-t*i),b:n*(1-t)};break;case 1:a={r:n*(1-t*i),g:n,b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n,b:n*(1-t*i)};break;case 3:a={r:n*(1-t),g:n*(1-t*i),b:n};break;case 4:a={r:n*(1-t*i),g:n*(1-t),b:n};break;case 5:a={r:n,g:n*(1-t),b:n*(1-t*i)};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function xd({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsv`,s:i===0?0:1-a/i,v:i};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}let Sd={mode:`hsv`,toMode:{rgb:bd},parse:[`--hsv`],serialize:`--hsv`,fromMode:{rgb:xd},channels:[`h`,`s`,`v`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Y,fixup:Du},s:Y,v:Y,alpha:{use:Y,fixup:fu}},difference:{h:Iu},average:{h:Bu}};function Cd({h:e,w:t,b:n,alpha:r}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let e=t+n;t/=e,n/=e}return bd({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:r})}function wd(e){let t=xd(e);if(t===void 0)return;let n=t.s===void 0?0:t.s,r=t.v===void 0?0:t.v,i={mode:`hwb`,w:(1-n)*r,b:1-r};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function Td(e,t){if(!t||t[0]!==`hwb`)return;let n={mode:`hwb`},[,r,i,a,o]=t;if(r.type!==q.None){if(r.type===q.Percentage)return;n.h=r.value}if(i.type!==q.None){if(i.type===q.Hue)return;n.w=i.value/100}if(a.type!==q.None){if(a.type===q.Hue)return;n.b=a.value/100}return o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let Ed={mode:`hwb`,toMode:{rgb:Cd},fromMode:{rgb:wd},channels:[`h`,`w`,`b`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[Td],serialize:e=>`hwb(${e.h===void 0?`none`:e.h} ${e.w===void 0?`none`:e.w*100+`%`} ${e.b===void 0?`none`:e.b*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Y,fixup:Du},w:Y,b:Y,alpha:{use:Y,fixup:fu}},difference:{h:Lu},average:{h:Bu}},Dd=.1593017578125,Od=78.84375,kd=.8359375,Ad=18.8515625,jd=18.6875;function Md(e){if(e<0)return 0;let t=e**(1/Od);return 1e4*(Math.max(0,t-kd)/(Ad-jd*t))**(1/Dd)}function Nd(e){if(e<0)return 0;let t=(e/1e4)**Dd;return((kd+Ad*t)/(1+jd*t))**Od}let Pd=e=>Math.max(e/203,0),Fd=({i:e,t,p:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Md(e+.008609037037932761*t+.11102962500302593*n),a=Md(e-.00860903703793275*t-.11102962500302599*n),o=Md(e+.5600313357106791*t-.32062717498731885*n),s={mode:`xyz65`,x:Pd(2.070152218389422*i-1.3263473389671556*a+.2066510476294051*o),y:Pd(.3647385209748074*i+.680566024947227*a-.0453045459220346*o),z:Pd(-.049747207535812*i-.0492609666966138*a+1.1880659249923042*o)};return r!==void 0&&(s.alpha=r),s},Id=(e=0)=>Math.max(e*203,0),Ld=({x:e,y:t,z:n,alpha:r})=>{let i=Id(e),a=Id(t),o=Id(n),s=Nd(.3592832590121217*i+.6976051147779502*a-.0358915932320289*o),c=Nd(-.1920808463704995*i+1.1004767970374323*a+.0753748658519118*o),l=Nd(.0070797844607477*i+.0748396662186366*a+.8433265453898765*o),u={mode:`itp`,i:.5*s+.5*c,t:1.61376953125*s-3.323486328125*c+1.709716796875*l,p:4.378173828125*s-4.24560546875*c-.132568359375*l};return r!==void 0&&(u.alpha=r),u},Rd={mode:`itp`,channels:[`i`,`t`,`p`,`alpha`],parse:[`--ictcp`],serialize:`--ictcp`,toMode:{xyz65:Fd,rgb:e=>Cu(Fd(e))},fromMode:{xyz65:Ld,rgb:e=>Ld(bu(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:Y,t:Y,p:Y,alpha:{use:Y,fixup:fu}}},zd=e=>{if(e<0)return 0;let t=(e/1e4)**Dd;return((kd+Ad*t)/(1+jd*t))**134.03437499999998},Bd=(e=0)=>Math.max(e*203,0),Vd=({x:e,y:t,z:n,alpha:r})=>{e=Bd(e),t=Bd(t),n=Bd(n);let i=1.15*e-.15*n,a=.66*t+.34*e,o=zd(.41478972*i+.579999*a+.014648*n),s=zd(-.20151*i+1.120649*a+.0531008*n),c=zd(-.0166008*i+.2648*a+.6684799*n),l=(o+s)/2,u={mode:`jab`,j:.44*l/(1-.56*l)-16295499532821565e-27,a:3.524*o-4.066708*s+.542708*c,b:.199076*o+1.096799*s-1.295875*c};return r!==void 0&&(u.alpha=r),u},Hd=16295499532821565e-27,Ud=e=>{if(e<0)return 0;let t=e**(1/134.03437499999998);return 1e4*((kd-t)/(jd*t-Ad))**(1/Dd)},Wd=e=>e/203,Gd=({j:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+Hd)/(.44+.56*(e+Hd)),a=Ud(i+.13860504*t+.058047316*n),o=Ud(i-.13860504*t-.058047316*n),s=Ud(i-.096019242*t-.8118919*n),c={mode:`xyz65`,x:Wd(1.661373024652174*a-.914523081304348*o+.23136208173913045*s),y:Wd(-.3250758611844533*a+1.571847026732543*o-.21825383453227928*s),z:Wd(-.090982811*a-.31272829*o+1.5227666*s)};return r!==void 0&&(c.alpha=r),c},Kd=e=>{let t=Vd(bu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},qd=e=>Cu(Gd(e)),Jd={mode:`jab`,channels:[`j`,`a`,`b`,`alpha`],parse:[`--jzazbz`],serialize:`--jzazbz`,fromMode:{rgb:Kd,xyz65:Vd},toMode:{rgb:qd,xyz65:Gd},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:Y,a:Y,b:Y,alpha:{use:Y,fixup:fu}}},Yd=({j:e,a:t,b:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`jch`,j:e,c:i};return i&&(a.h=Tu(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},Xd=({j:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`jab`,j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},Zd={mode:`jch`,parse:[`--jzczhz`],serialize:`--jzczhz`,toMode:{jab:Xd,rgb:e=>qd(Xd(e))},fromMode:{rgb:e=>Yd(Kd(e)),jab:Yd},channels:[`j`,`c`,`h`,`alpha`],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:Y,fixup:Du},c:Y,j:Y,alpha:{use:Y,fixup:fu}},difference:{h:Ru},average:{h:Bu}},Qd=29**3/3**3,$d=6**3/29**3,ef=e=>e**3>$d?e**3:(116*e-16)/Qd,tf=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz50`,x:ef(a)*Ku.X,y:ef(i)*Ku.Y,z:ef(o)*Ku.Z};return r!==void 0&&(s.alpha=r),s},nf=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Su({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return r!==void 0&&(i.alpha=r),i},rf=e=>nf(tf(e)),af=e=>{let{r:t,g:n,b:r,alpha:i}=yu(e),a={mode:`xyz50`,x:.436065742824811*t+.3851514688337912*n+.14307845442264197*r,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*r,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*r};return i!==void 0&&(a.alpha=i),a},of=e=>e>$d?Math.cbrt(e):(Qd*e+16)/116,sf=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=of(e/Ku.X),a=of(t/Ku.Y),o=of(n/Ku.Z),s={mode:`lab`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},cf=e=>{let t=sf(af(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function lf(e,t){if(!t||t[0]!==`lab`)return;let n={mode:`lab`},[,r,i,a,o]=t;if(!(r.type===q.Hue||i.type===q.Hue||a.type===q.Hue))return r.type!==q.None&&(n.l=Math.min(Math.max(0,r.value),100)),i.type!==q.None&&(n.a=i.type===q.Number?i.value:i.value*125/100),a.type!==q.None&&(n.b=a.type===q.Number?a.value:a.value*125/100),o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let uf={mode:`lab`,toMode:{xyz50:tf,rgb:rf},fromMode:{xyz50:sf,rgb:cf},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[lf],serialize:e=>`lab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{l:Y,a:Y,b:Y,alpha:{use:Y,fixup:fu}}},df={...uf,mode:`lab65`,parse:[`--lab-d65`],serialize:`--lab-d65`,toMode:{xyz65:Yu,rgb:Xu},fromMode:{xyz65:Qu,rgb:$u},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function ff(e,t){if(!t||t[0]!==`lch`)return;let n={mode:`lch`},[,r,i,a,o]=t;if(r.type!==q.None){if(r.type===q.Hue)return;n.l=Math.min(Math.max(0,r.value),100)}if(i.type!==q.None&&(n.c=Math.max(0,i.type===q.Number?i.value:i.value*150/100)),a.type!==q.None){if(a.type===q.Percentage)return;n.h=a.value}return o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let pf={mode:`lch`,toMode:{lab:Uu,rgb:e=>rf(Uu(e))},fromMode:{rgb:e=>Hu(cf(e)),lab:Hu},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[ff],serialize:e=>`lch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Y,fixup:Du},c:Y,l:Y,alpha:{use:Y,fixup:fu}},difference:{h:Ru},average:{h:Bu}},mf={...pf,mode:`lch65`,parse:[`--lch-d65`],serialize:`--lch-d65`,toMode:{lab65:e=>Uu(e,`lab65`),rgb:e=>Xu(Uu(e,`lab65`))},fromMode:{rgb:e=>Hu($u(e),`lch65`),lab65:e=>Hu(e,`lch65`)},ranges:{l:[0,100],c:[0,150],h:[0,360]}},hf=({l:e,u:t,v:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`lchuv`,l:e,c:i};return i&&(a.h=Tu(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},gf=({l:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`luv`,l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},_f=(e,t,n)=>4*e/(e+15*t+3*n),vf=(e,t,n)=>9*t/(e+15*t+3*n),yf=_f(Ku.X,Ku.Y,Ku.Z),bf=vf(Ku.X,Ku.Y,Ku.Z),xf=e=>e<=$d?Qd*e:116*Math.cbrt(e)-16,Sf=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=xf(t/Ku.Y),a=_f(e,t,n),o=vf(e,t,n);!isFinite(a)||!isFinite(o)?i=a=o=0:(a=13*i*(a-yf),o=13*i*(o-bf));let s={mode:`luv`,l:i,u:a,v:o};return r!==void 0&&(s.alpha=r),s},Cf=(e,t,n)=>4*e/(e+15*t+3*n),wf=(e,t,n)=>9*t/(e+15*t+3*n),Tf=Cf(Ku.X,Ku.Y,Ku.Z),Ef=wf(Ku.X,Ku.Y,Ku.Z),Df=({l:e,u:t,v:n,alpha:r})=>{if(e===void 0&&(e=0),e===0)return{mode:`xyz50`,x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let i=t/(13*e)+Tf,a=n/(13*e)+Ef,o=Ku.Y*(e<=8?e/Qd:((e+16)/116)**3),s={mode:`xyz50`,x:9*i*o/(4*a),y:o,z:o*(12-3*i-20*a)/(4*a)};return r!==void 0&&(s.alpha=r),s},Of={mode:`lchuv`,toMode:{luv:gf,rgb:e=>nf(Df(gf(e)))},fromMode:{rgb:e=>hf(Sf(af(e))),luv:hf},channels:[`l`,`c`,`h`,`alpha`],parse:[`--lchuv`],serialize:`--lchuv`,ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:Y,fixup:Du},c:Y,l:Y,alpha:{use:Y,fixup:fu}},difference:{h:Ru},average:{h:Bu}},kf={...pu,mode:`lrgb`,toMode:{rgb:Su},fromMode:{rgb:yu},parse:[`srgb-linear`],serialize:`srgb-linear`},Af={mode:`luv`,toMode:{xyz50:Df,rgb:e=>nf(Df(e))},fromMode:{xyz50:Sf,rgb:e=>Sf(af(e))},channels:[`l`,`u`,`v`,`alpha`],parse:[`--luv`],serialize:`--luv`,ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:Y,u:Y,v:Y,alpha:{use:Y,fixup:fu}}},jf=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),a=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),s={mode:`oklab`,l:.210454268309314*i+.7936177747023054*a-.0040720430116193*o,a:1.9779985324311684*i-2.42859224204858*a+.450593709617411*o,b:.0259040424655478*i+.7827717124575296*a-.8086757549230774*o};return r!==void 0&&(s.alpha=r),s},Mf=e=>{let t=jf(yu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Nf=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+.3963377773761749*t+.2158037573099136*n)**3,a=(e-.1055613458156586*t-.0638541728258133*n)**3,o=(e-.0894841775298119*t-1.2914855480194092*n)**3,s={mode:`lrgb`,r:4.076741636075957*i-3.3077115392580616*a+.2309699031821044*o,g:-1.2684379732850317*i+2.6097573492876887*a-.3413193760026573*o,b:-.0041960761386756*i-.7034186179359362*a+1.7076146940746117*o};return r!==void 0&&(s.alpha=r),s},Pf=e=>Su(Nf(e));function Ff(e){let t=.206,n=1.206/1.03;return .5*(n*e-t+Math.sqrt((n*e-t)*(n*e-t)+4*.03*n*e))}function If(e){return(e*e+.206*e)/(1.206/1.03*(e+.03))}function Lf(e,t){let n,r,i,a,o,s,c,l;-1.88170328*e-.80936493*t>1?(n=1.19086277,r=1.76576728,i=.59662641,a=.75515197,o=.56771245,s=4.0767416621,c=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,r=-.45954404,i=.08285427,a=.1254107,o=.14503204,s=-1.2684380046,c=2.6097574011,l=-.3413193965):(n=1.35733652,r=-.00915799,i=-1.1513021,a=-.50559606,o=.00692167,s=-.0041960863,c=-.7034186147,l=1.707614701);let u=n+r*e+i*t+a*e*e+o*e*t,d=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t;{let e=1+u*d,t=1+u*f,n=1+u*p,r=e*e*e,i=t*t*t,a=n*n*n,o=3*d*e*e,m=3*f*t*t,h=3*p*n*n,g=6*d*d*e,_=6*f*f*t,v=6*p*p*n,y=s*r+c*i+l*a,b=s*o+c*m+l*h,x=s*g+c*_+l*v;u-=y*b/(b*b-.5*y*x)}return u}function Rf(e,t){let n=Lf(e,t),r=Nf({l:1,a:n*e,b:n*t}),i=Math.cbrt(1/Math.max(r.r,r.g,r.b));return[i,i*n]}function zf(e,t,n,r,i,a=null){a||=Rf(e,t);let o;if((n-i)*a[1]-(a[0]-i)*r<=0)o=a[1]*i/(r*a[0]+a[1]*(i-n));else{o=a[1]*(i-1)/(r*(a[0]-1)+a[1]*(i-n));{let a=n-i,s=r,c=.3963377774*e+.2158037573*t,l=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t,d=a+s*c,f=a+s*l,p=a+s*u;{let e=i*(1-o)+o*n,t=o*r,a=e+t*c,s=e+t*l,m=e+t*u,h=a*a*a,g=s*s*s,_=m*m*m,v=3*d*a*a,y=3*f*s*s,b=3*p*m*m,x=6*d*d*a,S=6*f*f*s,C=6*p*p*m,w=4.0767416621*h-3.3077115913*g+.2309699292*_-1,ee=4.0767416621*v-3.3077115913*y+.2309699292*b,te=4.0767416621*x-3.3077115913*S+.2309699292*C,T=ee/(ee*ee-.5*w*te),E=-w*T,ne=-1.2684380046*h+2.6097574011*g-.3413193965*_-1,D=-1.2684380046*v+2.6097574011*y-.3413193965*b,O=-1.2684380046*x+2.6097574011*S-.3413193965*C,k=D/(D*D-.5*ne*O),A=-ne*k,j=-.0041960863*h-.7034186147*g+1.707614701*_-1,M=-.0041960863*v-.7034186147*y+1.707614701*b,N=-.0041960863*x-.7034186147*S+1.707614701*C,re=M/(M*M-.5*j*N),ie=-j*re;E=T>=0?E:1e6,A=k>=0?A:1e6,ie=re>=0?ie:1e6,o+=Math.min(E,Math.min(A,ie))}}}return o}function Bf(e,t,n=null){n||=Rf(e,t);let r=n[0],i=n[1];return[i/r,i/(1-r)]}function Vf(e,t,n){let r=Rf(t,n),i=zf(t,n,e,1,e,r),a=Bf(t,n,r),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),s=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),c=i/Math.min(e*a[0],(1-e)*a[1]),l=e*o,u=(1-e)*s,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(u*u*u*u))));return l=e*.4,u=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(u*u))),d,i]}function Hf(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i={mode:`okhsl`,l:Ff(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let a=Math.sqrt(n*n+r*r);if(!a)return i.s=0,i;let[o,s,c]=Vf(t,n/a,r/a),l;if(a<s){let e=.8*o,t=1-e/s;l=(a-0)/(e+t*(a-0))*.8}else{let e=s,t=.2*s*s*1.25*1.25/o,n=1-t/(c-s);l=.8+.2*((a-e)/(t+n*(a-e)))}return l&&(i.s=l,i.h=Tu(Math.atan2(r,n)*180/Math.PI)),i}function Uf(e){let t=e.h===void 0?0:e.h,n=e.s===void 0?0:e.s,r=e.l===void 0?0:e.l,i={mode:`oklab`,l:If(r)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!n||r===1)return i.a=i.b=0,i;let a=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[s,c,l]=Vf(i.l,a,o),u,d,f,p;n<.8?(u=1.25*n,d=0,f=.8*s,p=1-f/c):(u=5*(n-.8),d=c,f=.2*c*c*1.25*1.25/s,p=1-f/(l-c));let m=d+u*f/(1-p*u);return i.a=m*a,i.b=m*o,i}let Wf={...yd,mode:`okhsl`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--okhsl`],serialize:`--okhsl`,fromMode:{oklab:Hf,rgb:e=>Hf(Mf(e))},toMode:{oklab:Uf,rgb:e=>Pf(Uf(e))}};function Gf(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i=Math.sqrt(n*n+r*r),a=i?n/i:1,o=i?r/i:1,[s,c]=Bf(a,o),l=.5,u=1-l/s,d=c/(i+t*c),f=d*t,p=d*i,m=If(f),h=p*m/f,g=Nf({l:m,a:a*h,b:o*h}),_=Math.cbrt(1/Math.max(g.r,g.g,g.b,0));t/=_,i=i/_*Ff(t)/t,t=Ff(t);let v={mode:`okhsv`,s:i?(l+c)*p/(c*l+c*u*p):0,v:t?t/f:0};return v.s&&(v.h=Tu(Math.atan2(r,n)*180/Math.PI)),e.alpha!==void 0&&(v.alpha=e.alpha),v}function Kf(e){let t={mode:`oklab`};e.alpha!==void 0&&(t.alpha=e.alpha);let n=e.h===void 0?0:e.h,r=e.s===void 0?0:e.s,i=e.v===void 0?0:e.v,a=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[s,c]=Bf(a,o),l=.5,u=1-l/s,d=1-r*l/(l+c-c*u*r),f=r*c*l/(l+c-c*u*r),p=If(d),m=f*p/d,h=Nf({l:p,a:a*m,b:o*m}),g=Math.cbrt(1/Math.max(h.r,h.g,h.b,0)),_=If(i*d),v=f*_/d;return t.l=_*g,t.a=v*a*g,t.b=v*o*g,t}let qf={...Sd,mode:`okhsv`,channels:[`h`,`s`,`v`,`alpha`],parse:[`--okhsv`],serialize:`--okhsv`,fromMode:{oklab:Gf,rgb:e=>Gf(Mf(e))},toMode:{oklab:Kf,rgb:e=>Pf(Kf(e))}};function Jf(e,t){if(!t||t[0]!==`oklab`)return;let n={mode:`oklab`},[,r,i,a,o]=t;if(!(r.type===q.Hue||i.type===q.Hue||a.type===q.Hue))return r.type!==q.None&&(n.l=Math.min(Math.max(0,r.type===q.Number?r.value:r.value/100),1)),i.type!==q.None&&(n.a=i.type===q.Number?i.value:i.value*.4/100),a.type!==q.None&&(n.b=a.type===q.Number?a.value:a.value*.4/100),o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let Yf={...uf,mode:`oklab`,toMode:{lrgb:Nf,rgb:Pf},fromMode:{lrgb:jf,rgb:Mf},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[Jf],serialize:e=>`oklab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`};function Xf(e,t){if(!t||t[0]!==`oklch`)return;let n={mode:`oklch`},[,r,i,a,o]=t;if(r.type!==q.None){if(r.type===q.Hue)return;n.l=Math.min(Math.max(0,r.type===q.Number?r.value:r.value/100),1)}if(i.type!==q.None&&(n.c=Math.max(0,i.type===q.Number?i.value:i.value*.4/100)),a.type!==q.None){if(a.type===q.Percentage)return;n.h=a.value}return o.type!==q.None&&(n.alpha=Math.min(1,Math.max(0,o.type===q.Number?o.value:o.value/100))),n}let Zf={...pf,mode:`oklch`,toMode:{oklab:e=>Uu(e,`oklab`),rgb:e=>Pf(Uu(e,`oklab`))},fromMode:{rgb:e=>Hu(Mf(e),`oklch`),oklab:e=>Hu(e,`oklch`)},parse:[Xf],serialize:e=>`oklch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Qf=e=>{let{r:t,g:n,b:r,alpha:i}=yu(e),a={mode:`xyz65`,x:.486570948648216*t+.265667693169093*n+.1982172852343625*r,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*r,z:0*t+.0451133818589026*n+1.043944368900976*r};return i!==void 0&&(a.alpha=i),a},$f=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Su({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},`p3`);return r!==void 0&&(i.alpha=r),i},ep={...pu,mode:`p3`,parse:[`display-p3`],serialize:`display-p3`,fromMode:{rgb:e=>$f(bu(e)),xyz65:$f},toMode:{rgb:e=>Cu(Qf(e)),xyz65:Qf}},tp=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*t**(1/1.8):16*e},np=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`prophoto`,r:tp(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:tp(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:tp(e*0+t*0+1.2119675456389452*n)};return r!==void 0&&(i.alpha=r),i},rp=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*t**1.8:e/16},ip=e=>{let t=rp(e.r),n=rp(e.g),r=rp(e.b),i={mode:`xyz50`,x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*r,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*r,z:0*t+0*n+.8251046025104602*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},ap={...pu,mode:`prophoto`,parse:[`prophoto-rgb`],serialize:`prophoto-rgb`,fromMode:{xyz50:np,rgb:e=>np(af(e))},toMode:{xyz50:ip,rgb:e=>nf(ip(e))}},op=1.09929682680944,sp=e=>{let t=Math.abs(e);return t>.018053968510807?(Math.sign(e)||1)*(op*t**.45-(op-1)):4.5*e},cp=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rec2020`,r:sp(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:sp(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:sp(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return r!==void 0&&(i.alpha=r),i},lp=1.09929682680944,up=(e=0)=>{let t=Math.abs(e);return t<.018053968510807*4.5?e/4.5:(Math.sign(e)||1)*((t+lp-1)/lp)**(1/.45)},dp=e=>{let t=up(e.r),n=up(e.g),r=up(e.b),i={mode:`xyz65`,x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*r,y:.262700212011267*t+.6779980715188708*n+.059301716469862*r,z:0*t+.0280726930490874*n+1.0609850577107909*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},fp={...pu,mode:`rec2020`,fromMode:{xyz65:cp,rgb:e=>cp(bu(e))},toMode:{xyz65:dp,rgb:e=>Cu(dp(e))},parse:[`rec2020`],serialize:`rec2020`},pp=.0037930732552754493,mp=Math.cbrt(pp),hp=e=>Math.cbrt(e)-mp,gp=e=>{let{r:t,g:n,b:r,alpha:i}=yu(e),a=hp(.3*t+.622*n+.078*r+pp),o=hp(.23*t+.692*n+.078*r+pp),s=hp(.2434226892454782*t+.2047674442449682*n+.5518098665095535*r+pp),c={mode:`xyb`,x:(a-o)/2,y:(a+o)/2,b:s-(a+o)/2};return i!==void 0&&(c.alpha=i),c},_p=e=>(e+mp)**3,vp={mode:`xyb`,channels:[`x`,`y`,`b`,`alpha`],parse:[`--xyb`],serialize:`--xyb`,toMode:{rgb:({x:e,y:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=_p(e+t)-pp,a=_p(t-e)-pp,o=_p(n+t)-pp,s=Su({r:11.031566904639861*i-9.866943908131562*a-.16462299650829934*o,g:-3.2541473810744237*i+4.418770377582723*a-.16462299650829934*o,b:-3.6588512867136815*i+2.7129230459360922*a+1.9459282407775895*o});return r!==void 0&&(s.alpha=r),s}},fromMode:{rgb:gp},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:Y,y:Y,b:Y,alpha:{use:Y,fixup:fu}}},yp={mode:`xyz50`,parse:[`xyz-d50`],serialize:`xyz-d50`,toMode:{rgb:nf,lab:sf},fromMode:{rgb:af,lab:tf},channels:[`x`,`y`,`z`,`alpha`],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:Y,y:Y,z:Y,alpha:{use:Y,fixup:fu}}},bp={mode:`xyz65`,toMode:{rgb:Cu,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz50`,x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*r,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*r,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*r};return i!==void 0&&(a.alpha=i),a}},fromMode:{rgb:bu,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz65`,x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*r,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*r,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*r};return i!==void 0&&(a.alpha=i),a}},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:[`x`,`y`,`z`,`alpha`],parse:[`xyz`,`xyz-d65`],serialize:`xyz-d65`,interpolate:{x:Y,y:Y,z:Y,alpha:{use:Y,fixup:fu}}},xp={mode:`yiq`,toMode:{rgb:({y:e,i:t,q:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rgb`,r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return r!==void 0&&(i.alpha=r),i}},fromMode:{rgb:({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`yiq`,y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return r!==void 0&&(i.alpha=r),i}},channels:[`y`,`i`,`q`,`alpha`],parse:[`--yiq`],serialize:`--yiq`,ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:Y,i:Y,q:Y,alpha:{use:Y,fixup:fu}}};K(wu),K(Vu),K(cd),K(ld),K(fd),K(yd),K(Sd),K(Ed),K(Rd),K(Jd),K(Zd),K(uf),K(df),K(pf),K(mf),K(Of),K(kf),K(Af),K(Wf),K(qf),K(Yf),K(Zf),K(ep),K(ap),K(fp),K(pu),K(vp),K(yp),K(bp),K(xp);function Sp(e,t,n){let r=G(W(),ec(),n);return{key:e,role:t,decode(e){let t=bc(r,e);return t.success?t.output:void 0},encode:e=>JSON.stringify(e)}}function Cp(e,t,n){let r=mc(n);return{key:e,role:t,decode(e){let t=bc(r,e);return t.success?t.output:void 0},encode:e=>e}}function wp(e,t){return e.pluginId===`open-pencil`&&e.key===t.key}function Tp(e,t){return e.filter(e=>!t.some(t=>wp(e,t)))}let Ep=[`button`,`textField`,`textarea`,`numberField`,`toggle`,`switch`,`checkbox`,`radio`,`radioGroup`,`toggleGroup`,`slider`,`progress`,`tabs`,`collapsible`,`accordion`],Dp=H({propertyId:W(),on:U(W()),off:U(W())});function Op(e){return e.max>e.min&&e.step>0}let kp=G(H({min:G(V(),qs()),max:G(V(),qs()),step:G(V(),qs()),default:G(V(),qs())}),Ks(e=>Op(e),`A number value needs max above min and a positive step`)),Ap={rest:U(W()),hover:U(W()),pressed:U(W()),focus:U(W()),disabled:U(W())},jp=H({propertyId:W(),...Ap}),Mp=H({kind:mc(Ep),booleans:hc(W(),Dp),texts:U(hc(W(),H({propertyId:W()})),{}),numbers:hc(W(),kp),parts:hc(W(),W()),states:U(jp)});({...Ap});let Np={author:ac(W(),``),authorColor:ac(U(H({r:V(),g:V(),b:V(),a:V()})),void 0),text:ac(W(),``),createdAt:ac(W(),``),deleted:U(cc())},Pp=H({id:W(),...Np}),Fp=H({id:W(),pageId:W(),pageName:U(W()),nodeId:U(pc(W())),nodeName:U(pc(W())),offsetX:U(V()),offsetY:U(V()),x:ac(V(),0),y:ac(V(),0),...Np,updatedAt:ac(W(),``),resolved:ac(cc(),!1),resolvedAt:U(pc(W())),replies:ac(sc(Pp),[])}),Ip=G(sc(vc()),nc(e=>e.flatMap(e=>{let t=bc(Fp,e);if(!t.success)return[];let n=t.output;return[{...n,updatedAt:n.updatedAt||n.createdAt}]}))),Lp=[`png`,`jpg`,`webp`,`svg`,`pdf`,`pptx`,`drawio`];function Rp(e){return Lp.some(t=>t===e)}function zp(e){return Math.min(1024,Math.max(.01,e))}let Bp=[`fast`,`smaller`,`smallest`],Vp=H({name:G(W(),tc(/^[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:[-_.][a-z0-9]+)*$/)),glyph:U(W()),options:U(hc(W(),_c([V(),W()])))}),Hp=G(sc(mc([`fill`,`stroke`])),Zs(1)),Up=H({type:G(W(),$s(),Ys(100)),id:U(W()),props:U(hc(W(),vc())),children:U(sc(uc(()=>Up)))}),Wp=H({image:G(W(),$s()),preset:H({components:G(sc(Up),Zs(1)),structureVersion:U(V())}),frame:U(H({width:G(V(),qs(),Qs(0)),height:G(V(),qs(),Qs(0)),preset:G(W(),$s())}))}),Gp=G(H({preset:U(W()),states:G(sc(H({id:G(W(),$s()),name:G(W(),rc(),$s(),Ys(100)),color:H({r:G(V(),Qs(0),Xs(1)),g:G(V(),Qs(0),Xs(1)),b:G(V(),Qs(0),Xs(1)),a:G(V(),Qs(0),Xs(1))})})),Zs(1))}),Ks(({states:e})=>new Set(e.map(e=>e.id)).size===e.length,`Status ids must be unique`)),Kp=G(W(),$s()),qp=[`add`,`subtract`,`multiply`,`divide`,`negate`,`equal`,`notEqual`,`less`,`lessOrEqual`,`greater`,`greaterOrEqual`,`and`,`or`,`not`,`text`,`truthy`,`if`],Jp=[`ALL_SCOPES`,`TEXT_CONTENT`,`CORNER_RADIUS`,`WIDTH_HEIGHT`,`GAP`,`ALL_FILLS`,`FRAME_FILL`,`SHAPE_FILL`,`TEXT_FILL`,`STROKE`,`STROKE_FLOAT`,`EFFECT_FLOAT`,`EFFECT_COLOR`,`OPACITY`,`FONT_STYLE`,`FONT_FAMILY`,`FONT_SIZE`,`LINE_HEIGHT`,`LETTER_SPACING`,`PARAGRAPH_SPACING`,`PARAGRAPH_INDENT`,`FONT_VARIATIONS`,`TRANSFORM`],Yp=[`WEB`,`ANDROID`,`iOS`],Xp=[`none`,`px`,`rem`,`%`,`ms`,`s`,`deg`],Zp=/^[A-Za-z_][\w-]*$/,Qp=[`AUTO`,`LTR`,`RTL`],$p=G(H({x:V(),y:V(),width:V(),height:V()}),Ks(({x:e,y:t,width:n,height:r})=>Number.isFinite(e+t+n+r)&&n>0&&r>0)),em=G(lc(e=>typeof e==`object`&&!!e&&!Array.isArray(e)),nc(e=>Object.fromEntries(Object.entries(e).filter(e=>typeof e[1]==`string`)))),tm=sc(G(H({scale:G(V(),qs()),format:lc(Rp)}),nc(({scale:e,format:t})=>({scale:zp(e),format:t})))),nm=G(H({identity:H({libraryId:W(),assetKey:W(),revisionId:W()}),sourceNodeId:U(vc()),readOnly:U(vc())}),nc(({identity:e,sourceNodeId:t,readOnly:n})=>({identity:e,sourceNodeId:typeof t==`string`?t:null,readOnly:n===!0}))),rm=H({libraryId:W(),revisionId:W(),enabled:U(vc())}),im=G(sc(vc()),nc(e=>e.flatMap(e=>{let t=bc(rm,e);if(!t.success)return[];let{libraryId:n,revisionId:r,enabled:i}=t.output;return[{libraryId:n,revisionId:r,enabled:i===!0}]}))),am=G(W(),rc(),$s(),Ys(1e3)),om=H({unit:U(mc(Xp)),expressions:U(hc(W(),H({css:am,resolved:U(G(V(),qs()))})))}),sm=H({version:dc(1),kind:mc([`fill`,`stroke`]),index:V(),color:H({h:V(),c:V(),l:V(),a:ac(U(V()),void 0)})}),cm=H({libraryId:W(),revisionId:W(),name:W(),catalogSource:U(W())}),lm={textDirection:Cp(`textDirection`,`format`,Qp),layoutDirection:Cp(`layoutDirection`,`format`,Qp),nodeType:Cp(`nodeType`,`format`,[`COMPONENT_SET`]),boundVariables:Sp(`boundVariables`,`format`,em),exportSettings:Sp(`exportSettings`,`format`,tm),textPathBox:Sp(`textPathBox`,`format`,$p),librarySource:Sp(`librarySource`,`bookkeeping`,nm),documentId:Sp(`documentId`,`bookkeeping`,G(W(),$s(),Ys(64))),enabledLibraries:Sp(`enabledLibraries`,`bookkeeping`,im),sourceLibraryPublication:Sp(`sourceLibraryPublication`,`bookkeeping`,cm),comments:Sp(`comments`,`bookkeeping`,Ip),statuses:Sp(`statuses`,`bookkeeping`,Gp),figCompression:Cp(`figCompression`,`bookkeeping`,Bp),status:Sp(`status`,`format`,Kp),token:Sp(`token`,`format`,om),modeConditions:Sp(`modeConditions`,`format`,hc(W(),am)),modeAttribute:Sp(`modeAttribute`,`format`,G(W(),rc(),Ys(100),tc(Zp))),okhcl:Sp(`okhcl`,`content`,sm),behaviour:Sp(`behaviour`,`content`,Mp),icon:Sp(`icon`,`content`,Vp),iconTint:Sp(`iconTint`,`content`,Hp),shader:Sp(`shader`,`content`,Wp)};Object.values(lm).filter(e=>e.role!==`content`);let um=Bl(`rgb`);function dm(e){let t=su(e);if(!t)return null;let n=um(t);return{r:n.r,g:n.g,b:n.b,a:t.alpha??1}}function fm(e){return dm(e)??{...pn}}zu(`rgb`);let pm=G(V(),qs()),mm=cc(),hm=W(),gm=H({r:pm,g:pm,b:pm,a:pm});function _m(e,t){let n=t.get(e);if(n)return n;let r=e>0?G(H({operator:mc(qp),operands:G(sc(_m(e-1,t)),Zs(1),Ys(3))}),Ks(e=>e.operands.length===Lc(e.operator),`Wrong number of operands`)):void 0,i=uc(e=>typeof e==`number`?pm:typeof e==`boolean`?mm:typeof e==`string`?hm:typeof e==`object`&&e&&`operator`in e&&r?r:typeof e==`object`&&e&&`aliasId`in e?$c:gm);return t.set(e,i),i}function vm(e){try{let t=Jc(e.value);return t===void 0||t===e.type}catch{return!1}}let ym=G(H({expression:dc(`FORMULA`),type:mc([`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`]),value:_m(64,new Map)}),Ks(vm,`Formula operands do not fit their operators`));function bm(e,t){e.variables.set(t.id,t);let n=e.variableCollections.get(t.collectionId);n&&!n.variableIds.includes(t.id)&&n.variableIds.push(t.id)}function xm(e,t){let n=e.variables.get(t);if(!n)return;e.variables.delete(t);let r=e.variableCollections.get(n.collectionId);r&&(r.variableIds=r.variableIds.filter(e=>e!==t));for(let n of e.nodes.values())Object.values(n.boundVariables).includes(t)&&(e.willChangeNode(n),n.boundVariables=Kt(n.boundVariables,e=>e===t),n.variableBindingScales=Kt(n.variableBindingScales,(e,t)=>!(t in n.boundVariables)),e.emitter.emit(`node:updated`,n.id,{boundVariables:{...n.boundVariables},variableBindingScales:{...n.variableBindingScales}}),Rm(e,n.id))}function Sm(e,t){e.variableCollections.set(t.id,t),e.activeMode.has(t.id)||e.activeMode.set(t.id,t.defaultModeId)}function Cm(e,t){return t===void 0?e===`COLOR`?{...pn}:e===`FLOAT`?0:e!==`BOOLEAN`&&``:t}function wm(e,t,n,r,i,a){let o=e.variableCollections.get(i);if(!o)throw Error(`Collection "${i}" not found`);let s=t(),c=Cm(r,a),l={};for(let e of o.modes)l[e.modeId]=structuredClone(c);let u={id:s,name:n,type:r,collectionId:i,valuesByMode:l,description:``,hiddenFromPublishing:!1};return bm(e,u),u}function Tm(e,t,n){let r=t(),i=t(),a={id:r,name:n,modes:[{modeId:i,name:`Mode 1`}],defaultModeId:i,variableIds:[]};return Sm(e,a),a}function Em(e,t){let n=e.variableCollections.get(t);if(n)for(let t of Array.from(n.variableIds))xm(e,t);e.variableCollections.delete(t),e.activeMode.delete(t)}function Dm(e,t,n){e.activeMode.set(t,n)}function Om(e,t,n,r,i){let a=e.variableCollections.get(t);if(!a)return;a.modes.push({modeId:n,name:r});let o=i??a.defaultModeId;for(let t of a.variableIds){let r=e.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(r.valuesByMode[o]??Object.values(r.valuesByMode)[0]))}}function km(e,t,n,r,i){if(!e.variableCollections.has(n))return;let a=t();return Om(e,n,a,r,i),a}function Am(e,t,n){let r=e.variableCollections.get(t);if(!(!r||r.modes.length<=1)){r.modes=r.modes.filter(e=>e.modeId!==n),r.defaultModeId===n&&(r.defaultModeId=r.modes[0].modeId);for(let t of r.variableIds){let r=e.variables.get(t);r&&(r.valuesByMode=Gt(r.valuesByMode,[n]))}e.activeMode.get(t)===n&&e.activeMode.set(t,r.defaultModeId)}}function jm(e,t,n,r){let i=e.variableCollections.get(t);if(!i)return;let a=i.modes.find(e=>e.modeId===n);a&&(a.name=r)}function Mm(e,t,n){let r=e.variableCollections.get(t);r&&r.modes.some(e=>e.modeId===n)&&(r.defaultModeId=n,r.modes=Nm(r))}function Nm(e){let[t,n]=eo(e.modes,t=>t.modeId===e.defaultModeId);return[...t,...n]}function Pm(e,t){let n=e.variableCollections.get(t);return n?n.variableIds.map(t=>e.variables.get(t)).filter(e=>e!==void 0):[]}function Fm(e,t){return[...e.variables.values()].filter(e=>e.type===t)}function Im(e,t,n,r){let i=e.nodes.get(t);if(!i)return;let a=e.variables.get(r);if(!a)throw Error(`Variable "${r}" not found`);let o=ea(n);if(o){if(a.type!==`COLOR`)throw Error(`Cannot bind ${a.type} variable to color field "${n}"`);let e=i[o.list].length;if(o.index>=e)throw Error(`Index ${o.index} out of range for ${o.list} (length ${e})`);o.list in i.boundVariables&&(i.boundVariables=Gt(i.boundVariables,[o.list]))}if(Ji(n)&&a.type!==`FLOAT`)throw Error(`Cannot bind ${a.type} variable to scalar field "${n}"`);let s=n===`text`?Xi:[`STRING`];if(Yi.has(n)&&!s.includes(a.type))throw Error(`Cannot bind ${a.type} variable to string field "${n}"`);if(Zi.has(n)&&!Qi.some(e=>e===a.type))throw Error(`Cannot bind ${a.type} variable to boolean field "${n}"`);if(!(Ji(n)||Yi.has(n)||Zi.has(n)||o!==null))throw Error(`Unknown binding field "${n}"`);e.willChangeNode(i),i.boundVariables={...i.boundVariables,[n]:r},il(e,i,n),Rm(e,t,n),e.emitter.emit(`node:updated`,t,{boundVariables:{...i.boundVariables},variableBindingScales:{...i.variableBindingScales}})}function Lm(e,t,n){let r=e.nodes.get(t);r&&n in r.boundVariables&&(e.willChangeNode(r),r.boundVariables=Gt(r.boundVariables,[n]),r.variableBindingScales=Gt(r.variableBindingScales,[n]),Rm(e,t,n),e.emitter.emit(`node:updated`,t,{boundVariables:{...r.boundVariables},variableBindingScales:{...r.variableBindingScales}}))}function Rm(e,t,n){let r=e.nodes.get(t);if(!r)return;let i=rl(e,r);if(i.type!==`INSTANCE`)return;let a=Ss(e,t);a&&Sn(a.instanceOverrides,a.id,t,`boundVariables`),Sn(i.instanceOverrides,i.id,t,`boundVariables`),n&&Sn(i.instanceOverrides,i.id,t,hn(n),r.boundVariables[n]??null)}var zm=class{idGenerator;nodes=new Map;images=new Map;variables=new Map;variableCollections=new Map;activeMode=new Map;rootId;figKiwiVersion=null;figSchemaDeflated=null;documentColorSpace=`srgb`;enabledLibraries=new Map;emitter=new It;absPosCache=new Map;scopeDepths={preview:0,sourceMetadata:0,importedState:0,layout:0,derivedLayout:0};previewObservers=[];changeObservers=new Set;importedIdGenerator;layoutWrites=null;positionPreviewVersion=0;instanceIndex=new Map;connectorIds=new Set;constructor(e=Ki){this.idGenerator=e;let t=Nn(this.idGenerator,`FRAME`,{name:`Document`,width:0,height:0});this.rootId=t.id,this.nodes.set(t.id,t),this.addPage(`Page 1`)}addPage(e){return this.createNode(`CANVAS`,this.rootId,{name:e,width:0,height:0})}getPages(e=!1){return this.getChildren(this.rootId).filter(t=>t.type===`CANVAS`&&(e||!t.internalOnly))}getAllNodes(){return this.nodes.values()}getNode(e){return this.nodes.get(e)}onNodeEvents(e){return xr(this.emitter,e)}observeNodeChanges(e){return this.changeObservers.add(e),()=>this.changeObservers.delete(e)}willChangeNode(e){if(e)for(let t of this.changeObservers)t.before(e)}countDescendants(e){let t=this.nodes.get(e);if(!t)return 0;let n=0,r=[...t.childIds];for(;r.length>0;){let e=r.pop();if(e===void 0)break;n++;let t=this.nodes.get(e);if(t)for(let e of t.childIds)r.push(e)}return n}addVariable(e){bm(this,e)}removeVariable(e){xm(this,e)}addCollection(e){Sm(this,e)}createVariable(e,t,n,r){return wm(this,()=>this.generateEntityId(),e,t,n,r)}createCollection(e){let t=new Set;return Tm(this,()=>this.generateEntityId(t),e)}createMode(e,t,n){return km(this,()=>this.generateEntityId(),e,t,n)}removeCollection(e){Em(this,e)}getActiveModeId(e){return cl(this,e)}getNodeVariableModeId(e,t){return ll(this,e,t)}setActiveMode(e,t){Dm(this,e,t)}addMode(e,t,n,r){Om(this,e,t,n,r)}removeMode(e,t){Am(this,e,t)}renameMode(e,t,n){jm(this,e,t,n)}setDefaultMode(e,t){Mm(this,e,t)}resolveVariable(e,t,n){return ul(this,e,t,n)}resolveColorVariable(e){return yl(this,e)}resolveNumberVariable(e){return bl(this,e)}resolveColorVariableForNode(e,t,n){return xl(this,e,t,n)}resolveNumberVariableForNode(e,t,n){return Sl(this,e,t,n)}resolveVariableForNode(e,t,n){return Cl(this,e,t,n)}resolveStringVariableForNode(e,t,n){return wl(this,e,t,n)}getVariablesForCollection(e){return Pm(this,e)}getVariablesByType(e){return Fm(this,e)}bindVariable(e,t,n){Im(this,e,t,n)}unbindVariable(e,t){Lm(this,e,t)}getChildren(e){let t=this.nodes.get(e);return t?t.childIds.map(e=>this.nodes.get(e)).filter(e=>e!==void 0):[]}isContainer(e){let t=this.nodes.get(e);return t?Pn.has(t.type):!1}isDescendant(e,t){return this.closest(e,e=>e.id===t)!==void 0}closest(e,t){let n=this.nodes.get(e);for(let e=0;n&&e<this.nodes.size;e++){if(t(n))return n;n=n.parentId?this.nodes.get(n.parentId):void 0}}pageOf(e){return this.closest(e,e=>e.type===`CANVAS`)?.id??null}clearAbsPosCache(){this.absPosCache.clear()}getAbsolutePosition(e){let t=this.absPosCache.get(e);if(t)return t;let n=this.getNode(e);if(!n)return{x:0,y:0};let r=Ln(n,this);return this.absPosCache.set(e,r),r}getAbsoluteBounds(e){let t=this.getAbsolutePosition(e),n=this.nodes.get(e);return{x:t.x,y:t.y,width:n?.width??0,height:n?.height??0}}generateEntityId(e){let t=1/0;for(let n=0;n<t;n++){let n=(this.importedIdGenerator??this.idGenerator)();if(this.isEntityIdTaken(n)||e?.has(n)){t===1/0&&(t=this.entityIdCount()+(e?.size??0)+1);continue}return e?.add(n),n}throw Error(`The ID generator only returned IDs that are in use`)}entityIdCount(){let e=this.nodes.size+this.variables.size+this.variableCollections.size;for(let t of this.variableCollections.values())e+=t.modes.length;return e}isEntityIdTaken(e){if(this.nodes.has(e)||this.variables.has(e)||this.variableCollections.has(e))return!0;for(let t of this.variableCollections.values())for(let n of t.modes)if(n.modeId===e)return!0;return!1}indexInstance(e,t){let n=this.instanceIndex.get(e);n||(n=new Set,this.instanceIndex.set(e,n)),n.add(t)}unindexInstance(e,t){this.instanceIndex.get(e)?.delete(t)}registerNode(e,t){e.parentId=t,this.nodes.set(e.id,e),e.type===`CONNECTOR`&&this.connectorIds.add(e.id);for(let t of this.changeObservers)t.created(e);return e.type===`INSTANCE`&&e.componentId&&this.indexInstance(e.componentId,e.id),this.emitter.emit(`node:created`,e),e}withBufferedEvents(e){return this.emitter.batch(e)}createNode(e,t,n={}){let r=Nn(()=>this.generateEntityId(),e,n),i=this.nodes.get(t);return this.willChangeNode(i),i?.childIds.push(r.id),this.registerNode(r,t)}createNodeWithId(e,t,n,r={}){let i=Nn(()=>e,t,r);i.id=e;let a=n?this.nodes.get(n):void 0;return a&&!a.childIds.includes(e)&&(this.willChangeNode(a),a.childIds.push(e)),this.registerNode(i,n)}withScope(e,t){this.scopeDepths[e]++;try{return t()}finally{this.scopeDepths[e]--}}runPreviewUpdates(e,t){t&&this.previewObservers.push(t);try{this.withScope(`preview`,e)}finally{t&&this.previewObservers.pop()}}preserveSourceMetadataDuring(e){return this.withScope(`sourceMetadata`,e)}get isPreservingSourceMetadata(){return this.scopeDepths.sourceMetadata>0}applyImportedStateDuring(e,t){let n=this.importedIdGenerator;this.importedIdGenerator=t??n;try{return this.withScope(`importedState`,()=>this.preserveSourceMetadataDuring(e))}finally{this.importedIdGenerator=n}}get isApplyingImportedState(){return this.scopeDepths.importedState>0}applyDerivedLayoutDuring(e){this.withScope(`derivedLayout`,e)}get isApplyingDerivedLayout(){return this.scopeDepths.derivedLayout>0}withLayoutMutations(e){let t=this.scopeDepths.layout===0;this.scopeDepths.layout++,t&&(this.layoutWrites=new Ts);try{e()}finally{try{t&&this.publishLayoutUpdates()}finally{this.scopeDepths.layout--}}}publishLayoutUpdates(){let e=this.layoutWrites;if(this.layoutWrites=null,e)for(let[t,n,r]of e.updates(e=>this.nodes.get(e)))Ms(t,r),this.emitter.emit(`node:updated`,t.id,n)}get isApplyingLayout(){return this.scopeDepths.layout>0}updateNodePositionPreview(e,t,n){this.updateNodePreview(e,{x:t,y:n})}updateNodePreview(e,t){let n=this.nodes.get(e);n&&(t=this.sizedChanges(n,t));let r=js(this,e,t,(e,t)=>{for(let n of this.previewObservers)n(e,t)});r&&this.emitter.emit(`node:previewUpdated`,e,r)}updateNode(e,t){if(this.scopeDepths.preview>0){this.updateNodePreview(e,t);return}let n=this.nodes.get(e);if(!n)return;let r=Kt(oo(n,Kt(t,tn)),tn);this.applyNodeChanges(n,this.sizedChanges(n,r))}sizedChanges(e,t){return this.isApplyingLayout?t:fi(e,t)}restoreNodeProperties(e,t,n){let r=this.nodes.get(e);r&&this.applyNodeChanges(r,t,n)}applyNodeChanges(e,t,n=[]){let{id:r}=e;if(this.willChangeNode(e),n.length){t={...t};for(let e of n)Reflect.set(t,e,void 0)}Object.keys(t).some(e=>Er.has(e))&&this.absPosCache.clear(),e.type===`INSTANCE`&&`componentId`in t&&t.componentId!==e.componentId&&(e.componentId&&this.unindexInstance(e.componentId,r),t.componentId&&this.indexInstance(t.componentId,r)),e.type===`TEXT`&&ks(e,t),this.scopeDepths.sourceMetadata===0&&!this.isApplyingLayout&&Ms(e,Object.keys(t)),t.vectorNetwork&&(t={...t,vectorNetwork:Yn(t.vectorNetwork)}),this.layoutWrites?.record(e,t,this.scopeDepths.sourceMetadata===0&&!this.isApplyingDerivedLayout),Object.assign(e,t),t.fills&&nn(e,`fills`,t),t.strokes&&nn(e,`strokes`,t);for(let t of n)Reflect.deleteProperty(e,t);this.publishNodeUpdate(r,t)}publishNodeUpdate(e,t){this.layoutWrites||this.emitter.emit(`node:updated`,e,t)}reparentNode(e,t){let n=this.nodes.get(e);if(!n||e===this.rootId||this.isDescendant(t,e))return;let r=n.parentId?this.nodes.get(n.parentId):void 0,i=this.nodes.get(t);if(!i||n.parentId===t)return;let a=n.parentId;this.willChangeNode(n),this.willChangeNode(r),this.willChangeNode(i),this.absPosCache.clear();let o=In(r,this),s=In(i,this);if(r&&(r.childIds=r.childIds.filter(t=>t!==e)),n.parentId=t,i.childIds.push(e),Vn(o)&&Vn(s))n.x+=o[2]-s[2],n.y+=o[5]-s[5];else{let e=Bn(n,fn.multiply(o,zn(n)),s);e&&Object.assign(n,e)}this.emitter.emit(`node:reparented`,e,a,t)}insertChildAt(e,t,n){let r=this.nodes.get(e),i=this.nodes.get(t);if(!r||!i||this.isDescendant(t,e))return;let a=r.parentId,o=a?this.nodes.get(a):void 0;this.willChangeNode(r),this.willChangeNode(o),this.willChangeNode(i),o&&(o.childIds=o.childIds.filter(t=>t!==e)),i.childIds=i.childIds.filter(t=>t!==e);let s=Math.min(n,i.childIds.length);i.childIds.splice(s,0,e),r.parentId=t,this.absPosCache.clear(),this.emitter.emit(`node:reordered`,e,t,s,a)}deleteNode(e){let t=this.nodes.get(e);if(!(!t||e===this.rootId)){if(this.willChangeNode(t),t.parentId){let n=this.nodes.get(t.parentId);this.willChangeNode(n),n&&(n.childIds=n.childIds.filter(t=>t!==e))}for(let e of Array.from(t.childIds))this.deleteNode(e);t.type===`INSTANCE`&&t.componentId&&this.unindexInstance(t.componentId,e),this.connectorIds.delete(e),this.nodes.delete(e),this.emitter.emit(`node:deleted`,e,t.parentId)}}hitTest(e,t,n){return Oi(this,e,t,n)}hitTestDeep(e,t,n,r=0){return ki(this,e,t,n,r)}hitTestSelectable(e,t,n,r,i=0){return Ni(this,e,t,n,r,i)}hitTestOpenContainer(e,t,n){return Fi(this,e,t,n)}isOpenContainer(e){return Pi(this,e)}isPointInNode(e,t,n){return Ii(this,e,t,n)}hitTestDropTarget(e,t,n,r,i){return Vi(this,e,t,n,r,i)}cloneTree(e,t,n={}){let r=this.nodes.get(e);if(!r)return null;let i=br(r,null);i.source&&={...i.source,id:null,orderKey:null},i.status=null;let a=this.createNode(r.type,t,{...i,...n});r.status&&Ms(a,[`status`]);for(let e of r.childIds)this.cloneTree(e,a.id);return a}createInstance(e,t,n={}){return us(this,e,t,n)}populateInstanceChildren(e,t,n=`deep`){ds(this,e,t,n)}swapInstanceComponent(e,t,n){ps(this,e,t,n)}syncInstances(e){hs(this,e)}syncInstancesTogether(e){gs(this,e)}syncInstance(e){_s(this,e)}detachInstance(e){ys(this,e)}getMainComponent(e){return bs(this,e)}getInstances(e){return xs(this,e)}flattenTree(e,t=0){let n=e??this.rootId,r=this.nodes.get(n);if(!r)return[];let i=[];for(let e of r.childIds){let n=this.nodes.get(e);n&&(i.push({node:n,depth:t}),n.childIds.length>0&&i.push(...this.flattenTree(e,t+1)))}return i}};function Bm(e){return{rootId:e.rootId,nodes:[...e.nodes],images:[...e.images],variables:[...e.variables],variableCollections:[...e.variableCollections],activeMode:[...e.activeMode],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),figKiwiVersion:e.figKiwiVersion,figSchemaDeflated:e.figSchemaDeflated,documentColorSpace:e.documentColorSpace,enabledLibraries:[...e.enabledLibraries]}}let Vm={sessionID:4294967295,localID:4294967295};function Hm(e){return e.sessionID===Vm.sessionID&&e.localID===Vm.localID}function X(e){return`${e.sessionID}:${e.localID}`}function Um(e){let t=e.match(/^(?:VariableID:|VariableCollectionId:)?(\d+):(\d+)$/);if(t)return{sessionID:Number.parseInt(t[1],10),localID:Number.parseInt(t[2],10)};let[n,r]=e.split(`:`);return{sessionID:Number.parseInt(n,10),localID:Number.parseInt(r,10)}}function Wm(e,t){return e.map(e=>{let{boundVariables:n,textStyleId:r,fillStyleId:i,hyperlink:a}=e.style,o=a?.type===`NODE`&&t.node!==void 0;if(!n&&!r&&!i&&!o)return e;let s={...e.style};return a?.type===`NODE`&&t.node&&(s.hyperlink={type:`NODE`,value:t.node(a.value)}),n&&(s.boundVariables=Wt(n,e=>e&&t.variable(e))),r&&(s.textStyleId=t.style(r)),i&&(s.fillStyleId=t.style(i)),{...e,style:s}})}function Gm(e,t){let n=[],r=t.parentId?e.getNode(t.parentId):void 0;for(;r;)r.type===`INSTANCE`&&n.push(r),r=r.parentId?e.getNode(r.parentId):void 0;return t.type===`INSTANCE`&&n.unshift(t),n}function Km(e,t){let n=[];for(let r of Gm(e,t)){let i=bn(r.instanceOverrides,r.id,t),a=i?e.getNode(i):void 0;a&&n.push(a)}return n}function qm(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of t.nodes.values()){let t=Gm(e,n),r=new Set;for(let e of t){let t=e.id===n.id?e.instanceOverrides.self:e.instanceOverrides.descendants.get(n.id);for(let e of t?.keys()??[])r.add(e)}let i={};for(let t of Km(e,n))for(let e of po)!t.source.editedFields.includes(e)||r.has(e)||Object.assign(i,{[e]:structuredClone(t[e])});Object.keys(i).length&&e.updateNode(n.id,i)}})}function Jm(e){if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.sessionID)&&Number.isFinite(t.localID)}function Ym(e,t){return e?`fig-guide:${e.sessionID}:${e.localID}`:`guide:${t}`}function Xm(e){if(!Array.isArray(e))return[];let t=[];for(let[n,r]of e.entries()){if(!r||typeof r!=`object`)continue;let e=r;if(typeof e.offset!=`number`||!Number.isFinite(e.offset))continue;let i=Jm(e.guid)?e.guid:void 0;e.axis===`X`?t.push({id:Ym(i,n),axis:`x`,position:e.offset,...i?{figGuid:i}:{}}):e.axis===`Y`&&t.push({id:Ym(i,n),axis:`y`,position:e.offset,...i?{figGuid:i}:{}})}return t}function Zm(e,t,n){return n==null?Math.min(e,t):Math.min(Math.max(e,t),n)}let Qm=new Map([{weight:100,names:[`thin`,`hairline`,`extrathin`,`ultrathin`]},{weight:200,names:[`extralight`,`ultralight`]},{weight:300,names:[`light`]},{weight:400,names:[`regular`,`normal`,`book`,`roman`,`plain`]},{weight:500,names:[`medium`]},{weight:600,names:[`semibold`,`demibold`]},{weight:700,names:[`bold`]},{weight:800,names:[`extrabold`,`ultrabold`]},{weight:900,names:[`black`,`heavy`]}].flatMap(({names:e,weight:t})=>e.map(e=>[e,t])));function $m(e){return e.toLowerCase().replace(/italic|oblique/u,``).replace(/[^a-z0-9]+/gu,``)}function eh(e){let t=e??``,n=/(?:italic|oblique)/iu.test(t),r=$m(t),i=r.match(/(?:^|[^0-9])([1-9]00)(?:[^0-9]|$)/u)?.[1];return{weight:i?Number(i):Qm.get(r)??400,italic:n}}function th(e){return eh(e).weight}let nh={min:3,max:60},rh=new Set(`SQUARE.ELLIPSE.DIAMOND.TRIANGLE_UP.TRIANGLE_DOWN.ROUNDED_RECTANGLE.PARALLELOGRAM_RIGHT.PARALLELOGRAM_LEFT.ENG_DATABASE.ENG_QUEUE.ENG_FILE.ENG_FOLDER.TRAPEZOID.PREDEFINED_PROCESS.SHIELD.DOCUMENT_SINGLE.DOCUMENT_MULTIPLE.MANUAL_INPUT.HEXAGON.CHEVRON.PENTAGON.OCTAGON.STAR.PLUS.ARROW_LEFT.ARROW_RIGHT.SUMMING_JUNCTION.OR.SPEECH_BUBBLE.INTERNAL_STORAGE`.split(`.`));function ih(e){return typeof e==`string`&&rh.has(e)}function ah(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function oh(e,t){let n=e.baselines??[];if(e.logicalIndexToCharacterOffsetMap?.length!==t.length+1||n.length!==1)return!1;let r=n[0].position.y;return(e.glyphs??[]).every(e=>(e.rotation??0)===0&&e.position.y===r)}function sh(e){if(!e.emojiCodePoints?.length)return{};let t={emojiCodePoints:[...e.emojiCodePoints]};return e.emojiImageSet===`NOTO`&&(t.emojiImageSet=`NOTO`),t}function ch(e,t,n){if(!e||oh(e,n))return[];let r=[],i=e.truncationStartIndex??-1,a=e.glyphs??[];for(let e of i>=0?a.slice(0,i):a){let n=e.commandsBlob===void 0?void 0:t[e.commandsBlob];if(!n)return[];let i=e.advance*e.fontSize;r.push({commandsBlob:n,x:e.position.x,y:e.position.y,fontSize:e.fontSize,firstCharacter:e.firstCharacter,rotation:e.rotation,advance:Number.isFinite(i)?i:void 0,...sh(e)})}return r}let lh=new Int32Array(1),uh=new Float32Array(lh.buffer),dh=new TextDecoder;var fh=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}get offset(){return this._index}set offset(e){this._index=e}get bytes(){return this._data}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}skipByteArray(){let e=this.readVarUint();this._index+=e}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,lh[0]=r,uh[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r=this.readByte();for(;r&128&&t<56;)e|=BigInt(r&127)<<t,t+=n,r=this.readByte();return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._index,t=this.findStringTerminator(e);return this._index=t+1,dh.decode(this._data.subarray(e,t))}skipString(){this._index=this.findStringTerminator(this._index)+1}findStringTerminator(e){let t=this._data,n=e;for(;n<t.length&&t[n]!==0;)n++;if(n>=t.length)throw Error(`Unterminated string in Kiwi message`);return n}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){if(!(e instanceof Uint8Array)&&!Array.isArray(e))throw TypeError(`Expected byte array`);this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;uh[0]=e;let n=lh[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function ph(e){return JSON.stringify(e)}function mh(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}let Z={BOOL:0,BYTE:1,INT:2,UINT:3,FLOAT:4,STRING:5,INT64:6,UINT64:7,ENUM:8,STRUCT:9,MESSAGE:10},hh=new Map([[`bool`,Z.BOOL],[`byte`,Z.BYTE],[`int`,Z.INT],[`uint`,Z.UINT],[`float`,Z.FLOAT],[`string`,Z.STRING],[`int64`,Z.INT64],[`uint64`,Z.UINT64]]),gh={ENUM:Z.ENUM,STRUCT:Z.STRUCT,MESSAGE:Z.MESSAGE},_h=Symbol(`header bytes`),vh=Symbol(`header start`),yh=Symbol(`header whole decoder`);function bh(e){let t=Reflect.get(e,_h),n=Reflect.get(e,vh),r=Reflect.get(e,yh);if(!(t instanceof Uint8Array)||typeof n!=`number`||typeof r!=`function`)return;let i=new fh(t);return i.offset=n,r(i)}function xh(e,t,n){Reflect.defineProperty(e,t,{value:n,enumerable:!1})}function Sh(){throw Error(`Attempted to parse invalid message`)}function Ch(e,t){let n=new Map;for(let t of e.definitions)n.set(t.name,t);let r=new Map,i=e.definitions.map(e=>{let n=[],i=[],a=[],o=new Map;if(e.kind===`ENUM`)for(let t of e.fields)a[t.value]=t.name,o.set(t.name,t.value);let s=t?.[e.name],c={name:e.name,kind:e.kind,fields:n,byId:i,names:a,values:o,header:e.kind===`MESSAGE`&&s!==void 0};return r.set(e.name,c),c});return e.definitions.forEach((e,a)=>{if(e.kind===`ENUM`)return;let o=i[a],s=o.fields,c=o.byId,l=t?.[e.name];for(let t of e.fields){let e=wh(t,l,n,r);s.push(e),c[t.value]=e}}),i}function wh(e,t,n,r){let i=e.type;i===null&&mh(`Invalid type null for field `+ph(e.name),e.line,e.column);let a=hh.get(i),o=a===void 0?n.get(i):void 0;return a===void 0&&!o&&mh(`Invalid type `+ph(i)+` for field `+ph(e.name),e.line,e.column),{name:e.name,id:e.value,isArray:e.isArray,isDeprecated:e.isDeprecated,type:a??gh[o.kind],definition:o?r.get(o.name)??null:null,kept:t===void 0||t.includes(e.name)}}function Th(e,t){let n=Ch(e,t),r=new Map(n.map(e=>[e.name,e])),i=0,a=new WeakMap,o=e=>{let t=r.get(e);return t||mh(`Invalid type `+ph(e),0,0),t},s=(e,t)=>{switch(e.type){case Z.BOOL:return!!t.readByte();case Z.BYTE:return t.readByte();case Z.INT:return t.readVarInt();case Z.UINT:return t.readVarUint();case Z.FLOAT:return t.readVarFloat();case Z.STRING:return t.readString();case Z.INT64:return t.readVarInt64();case Z.UINT64:return t.readVarUint64();case Z.ENUM:return e.definition.names[t.readVarUint()];default:return f(e.definition,t)}},c=(e,t)=>{if(!e.isArray)return s(e,t);if(e.type===Z.BYTE)return t.readByteArray();let n=t.readVarUint(),r=Array.from({length:n});for(let i=0;i<n;i++)r[i]=s(e,t);return r},l=(e,t)=>{switch(e.type){case Z.BOOL:case Z.BYTE:t.readByte();return;case Z.INT:case Z.UINT:case Z.ENUM:t.readVarUint();return;case Z.FLOAT:t.readVarFloat();return;case Z.STRING:t.skipString();return;case Z.INT64:case Z.UINT64:t.readVarUint64();return;case Z.STRUCT:for(let n of e.definition.fields)u(n,t);return;default:{let n=e.definition.byId;for(let e=t.readVarUint();e!==0;e=t.readVarUint())u(n[e]??Sh(),t)}}},u=(e,t)=>{if(!e.isArray){l(e,t);return}if(e.type===Z.BYTE){t.skipByteArray();return}for(let n=t.readVarUint();n>0;n--)l(e,t)},d=(e,t,n)=>{e.isDeprecated?u(e,t):n[e.name]=c(e,t)},f=(e,t)=>{let n={};if(e.kind===`STRUCT`){for(let r of e.fields)d(r,t,n);return n}let r=e.header&&i===0;r&&(xh(n,_h,t.bytes),xh(n,vh,t.offset),xh(n,yh,p(e)));let a=e.byId;for(let e=t.readVarUint();e!==0;e=t.readVarUint()){let i=a[e]??Sh();r&&!i.kept?u(i,t):d(i,t,n)}return n},p=e=>{let t=a.get(e);return t||(t=t=>{i++;try{return f(e,t)}finally{i--}},a.set(e,t)),t},m=(e,t,n)=>{switch(e.type){case Z.BOOL:case Z.BYTE:n.writeByte(t);return;case Z.INT:n.writeVarInt(t);return;case Z.UINT:n.writeVarUint(t);return;case Z.FLOAT:n.writeVarFloat(t);return;case Z.STRING:n.writeString(t);return;case Z.INT64:n.writeVarInt64(t);return;case Z.UINT64:n.writeVarUint64(t);return;case Z.ENUM:{let r=e.definition,i=r.values.get(t);if(i===void 0)throw Error(`Invalid value `+JSON.stringify(t)+` for enum `+ph(r.name));n.writeVarUint(i);return}default:g(e.definition,t,n)}},h=(e,t,n)=>{if(!e.isArray){m(e,t,n);return}if(e.type===Z.BYTE){n.writeByteArray(t);return}let r=t;n.writeVarUint(r.length);for(let t of r)m(e,t,n)},g=(e,t,n)=>{let r=e.kind===`MESSAGE`;for(let i of e.fields){if(i.isDeprecated)continue;let e=t[i.name];if(e!=null)r&&n.writeVarUint(i.id),h(i,e,n);else if(!r)throw Error(`Missing required field `+ph(i.name))}r&&n.writeVarUint(0)};return{definitions:n,definition:o,read:c,skip:u,write:h,decode:f,encode:g}}function Eh(e,t){let n=Th(e,t),r={ByteBuffer:fh,schema:n};for(let e of n.definitions){if(e.kind===`ENUM`){let t={};for(let[n,r]of e.values)t[n]=r,t[r]=n;r[e.name]=t;continue}r[`decode`+e.name]=t=>n.decode(e,t instanceof r.ByteBuffer?t:new r.ByteBuffer(t)),r[`encode`+e.name]=(t,i)=>{let a=i??new r.ByteBuffer;return n.encode(e,t,a),i?void 0:a.toUint8Array()}}return r}let Dh=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],Oh=[`ENUM`,`STRUCT`,`MESSAGE`];function kh(e){let t=e instanceof fh?e:new fh(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:Oh[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:Oh[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=Dh.length)throw Error(`Invalid type `+i);n.type=Dh[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}let Ah=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],jh=[`ByteBuffer`,`package`],Mh=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,Nh=/^[A-Za-z_][A-Za-z0-9_]*$/,Ph=/^\/\/.*|\s+$/,Fh=/^=$/,Ih=/^$/,Lh=/^;$/,Rh=/^-?\d+$/,zh=/^\{$/,Bh=/^\}$/,Vh=/^\[\]$/,Hh=/^enum$/,Uh=/^struct$/,Wh=/^message$/,Gh=/^package$/,Kh=/^\[deprecated\]$/;function qh(e){let t=e.split(Mh),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?Ph.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&mh(`Syntax error `+ph(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Jh(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();mh(`Expected `+r+` but found `+ph(e.text),e.line,e.column)}}function i(){let e=t();mh(`Unexpected token `+ph(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(Gh)&&(o=t().text,r(Nh,`identifier`),r(Lh,`";"`));s<e.length&&!n(Ih);){let e=[],o;n(Hh)?o=`ENUM`:n(Uh)?o=`STRUCT`:n(Wh)?o=`MESSAGE`:i();let s=t();for(r(Nh,`identifier`),r(zh,`"{"`);!n(Bh);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(Nh,`identifier`),a=n(Vh));let c=t();r(Nh,`identifier`);let l=null;o!==`STRUCT`&&(r(Fh,`"="`),l=t(),r(Rh,`integer`),(l.text|0)+``!==l.text&&mh(`Invalid integer `+ph(l.text),l.line,l.column));let u=t();n(Kh)&&(o!==`MESSAGE`&&mh(`Cannot deprecate this field`,u.line,u.column),s=!0),r(Lh,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Yh(e){let t=Ah.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&mh(`The type `+ph(i.name)+` is defined twice`,i.line,i.column),jh.includes(i.name)&&mh(`The type name `+ph(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||mh(`The type `+ph(n.type)+` is not defined for field `+ph(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&mh(`The id for field `+ph(t.name)+` is used twice`,t.line,t.column),t.value<=0&&mh(`The id for field `+ph(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&mh(`Recursive nesting of `+ph(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function Xh(e){let t=Jh(qh(e));return Yh(t),t}function Zh(e){for(let t of e.definitions)Qh(t),t.kind===`ENUM`&&$h(t)}function Qh(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&mh(`The field ${ph(n.name)} is defined twice in ${ph(e.name)}`,n.line,n.column),t.add(n.name)}function $h(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&mh(`The enum value ${n.value} is used twice in ${ph(e.name)}`,n.line,n.column),t.add(n.value)}let eg=Xh(`enum MessageType {
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
`);Zh(eg);function tg(e,t){let n=e.readVarUint();return t?.kind===`ENUM`?t.names[n]??null:null}function ng(e,t,n){let r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=!1;for(let f=e.readVarUint();f!==0;f=e.readVarUint()){let p=n.byId[f];if(!p)throw Error(`Invalid field ${f} in Kiwi NodeChange`);switch(p.name){case`guid`:r=e.readVarUint(),i=e.readVarUint();break;case`parentIndex`:a=e.readVarUint(),o=e.readVarUint(),s=e.offset,e.skipString();break;case`phase`:c=tg(e,p.definition);break;case`type`:l=tg(e,p.definition);break;case`name`:l===`DOCUMENT`||l===`CANVAS`?u=e.readString():e.skipString();break;case`internalOnly`:d=!!e.readByte();break;default:t.skip(p,e)}}if(l!==`DOCUMENT`&&l!==`CANVAS`||r===null||i===null)return null;let f=null;if(s!==null){let t=e.offset;e.offset=s,f=e.readString(),e.offset=t}let p=a===null||o===null?null:`${a}:${o}`;return{sourceId:`${r}:${i}`,parentId:p,position:f,phase:c,type:l,name:u??`Page`,internalOnly:d}}function rg(e,t){let n=e.definition(`Message`),r=e.definition(`NodeChange`);if(n.kind!==`MESSAGE`||r.kind!==`MESSAGE`)return[];let i=new fh(t),a=[];for(let t=i.readVarUint();t!==0;t=i.readVarUint()){let o=n.byId[t];if(!o)throw Error(`Invalid field ${t} in Kiwi Message`);if(o.name!==`nodeChanges`||!o.isArray){e.skip(o,i);continue}for(let t=i.readVarUint();t>0;t--){let t=ng(i,e,r);t&&a.push(t)}break}let o=a.find(e=>e.type===`DOCUMENT`&&e.phase!==`REMOVED`)?.sourceId;return a.filter(e=>e.type===`CANVAS`&&e.phase!==`REMOVED`&&(!o||e.parentId===o)).sort((e,t)=>{let n=e.position??``,r=t.position??``;return n<r?-1:+(n>r)}).map(({sourceId:e,name:t,position:n,internalOnly:r})=>({sourceId:e,name:t,position:n,internalOnly:r}))}new Set((eg.definitions.find(e=>e.name===`OpenTypeFeature`)?.fields??[]).map(e=>e.name));let ig=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],ag=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]];Object.fromEntries(ig.map(([e,t])=>[t,e]));function og(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function sg(e){let t=[];for(let[n,r]of ig){let i=e[n];i!==void 0&&og(t,r,i)}for(let[n,r]of ag){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)og(t,e,!0);else i&&og(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])og(t,n,!0);for(let n of e.toggledOffOTFeatures??[])og(t,n,!1);return t}function cg(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function lg(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?cg(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function ug(e){return e?{r:e.r??0,g:e.g??0,b:e.b??0,a:e.a??1}:{...pn}}function dg(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function fg(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}function pg(e){e.colorVar?.value?.alias}function mg(e){let t=pg(e);return t?{color:{...t,a:e.color?.a??1},opacity:e.opacity??t.a}:{color:ug(e.color),opacity:e.opacity??1}}function hg(e){let{color:t,opacity:n}=mg(e);return{type:e.type,color:t,opacity:n,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`}}function gg(e,t){!t.type.startsWith(`GRADIENT`)||!t.stops||(e.gradientStops=t.stops.map(e=>({color:ug(e.color),position:e.position})),t.transform&&(e.gradientTransform=fg(t.transform)))}function _g(e,t){if(t.type===`IMAGE`){if(t.image&&typeof t.image==`object`){let n=t.image;typeof n.hash==`object`?e.imageHash=dg(n.hash):typeof n.hash==`string`&&(e.imageHash=n.hash)}e.imageScaleMode=t.imageScaleMode===`STRETCH`?`CROP`:t.imageScaleMode??`FILL`,t.transform&&e.imageScaleMode===`CROP`&&(e.imageTransform=fg(t.transform)),t.rotation&&(e.imageRotation=t.rotation)}}function vg(e,t){t.sourceNodeId&&(e.sourceNodeId=X(t.sourceNodeId)),t.scale&&(e.scale=t.scale),t.spacing&&(e.spacing=t.spacing),t.patternSpacing&&(e.patternSpacing=t.patternSpacing),t.patternTileType&&(e.patternTileType=t.patternTileType),t.verticalAlignment&&(e.verticalAlignment=t.verticalAlignment),t.horizontalAlignment&&(e.horizontalAlignment=t.horizontalAlignment),t.noiseType&&(e.noiseType=t.noiseType),t.density!==void 0&&(e.density=t.density),t.noiseSize&&(e.noiseSize=t.noiseSize),t.customEffectId?.guid&&(e.customEffectId=X(t.customEffectId.guid))}function yg(e){let t=hg(e);return gg(t,e),_g(t,e),vg(t,e),t}function bg(e){return e?e.map(yg):[]}function xg(e){return e===`INSIDE`||e===`OUTSIDE`?e:`CENTER`}function Sg(e,t,n,r,i,a){if(!e)return[];let o=xg(n);return e.map(e=>({...yg(e),weight:t??1,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}))}function Cg(e){return e?e.map(e=>({type:e.type,color:ug(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`,showShadowBehindNode:e.showShadowBehindNode??!0})):[]}function wg(e,t,n){return t===0&&n===0?e:ur(e,1,0,0,1,t,n)}function Tg(e,t,n){let r=[...e.fillGeometry??[],...e.strokeGeometry??[]],i=r.length>0?Kn(r):null,a=i?.x??0,o=i?.y??0,s=i?i.x+i.width:t,c=i?i.y+i.height:n;for(let t of e.derivedTextGlyphs??[]){let e=t.fontSize||0;a=Math.min(a,t.x-e*.25),o=Math.min(o,t.y-e),s=Math.max(s,t.x+e),c=Math.max(c,t.y+e*.35)}return{left:Math.max(0,-a+ +(a<0)),top:Math.max(0,-o+ +(o<0)),right:Math.max(0,s-t+ +(s>t)),bottom:Math.max(0,c-n+ +(c>n))}}function Eg(e,t,n){e.strokeGeometry&&e.strokeGeometry.length>0&&(e.strokeGeometry=wg(e.strokeGeometry,t,n)),e.fillGeometry&&e.fillGeometry.length>0&&(e.fillGeometry=wg(e.fillGeometry,t,n)),e.derivedTextGlyphs?.length&&(e.derivedTextGlyphs=e.derivedTextGlyphs.map(e=>({...e,x:e.x+t,y:e.y+n})))}function Dg(e,t){if(e.nodeType!==`TEXT`||!t)return;e.textPathData=t;let n=e.width??0,r=e.height??0;e.textPathBox={x:0,y:0,width:n,height:r};let i=Tg(e,n,r);if(i.left===0&&i.top===0&&i.right===0&&i.bottom===0)return;let a=i.left,o=i.top;e.x=(e.x??0)-a,e.y=(e.y??0)-o,e.width=n+i.left+i.right,e.height=r+i.top+i.bottom,(a!==0||o!==0)&&(e.textPathBox={x:a,y:o,width:n,height:r},Eg(e,a,o))}let Q=[`textData`,`derivedTextData`,`textUserLayoutVersion`,`textExplicitLayoutVersion`],Og=[`strokeGeometry`,`vectorData`],kg={fillStyleId:[`styleIdForFill`],strokeStyleId:[`styleIdForStrokeFill`],textStyleId:[`styleIdForText`],effectStyleId:[`styleIdForEffect`],gridStyleId:[`styleIdForGrid`],fills:[`fillPaints`,`backgroundPaints`,`backgroundColor`],strokes:[`strokePaints`],effects:[`effects`],blendMode:[`blendMode`],layoutGrids:[`layoutGrids`],guides:[`guides`],exportSettings:[`exportSettings`],status:[`sectionStatusInfo`],cornerRadius:[`cornerRadius`],independentCorners:[`rectangleCornerRadiiIndependent`],topLeftRadius:[`rectangleTopLeftCornerRadius`,`rectangleCornerRadiiIndependent`],topRightRadius:[`rectangleTopRightCornerRadius`,`rectangleCornerRadiiIndependent`],bottomLeftRadius:[`rectangleBottomLeftCornerRadius`,`rectangleCornerRadiiIndependent`],bottomRightRadius:[`rectangleBottomRightCornerRadius`,`rectangleCornerRadiiIndependent`],cornerSmoothing:[`cornerSmoothing`],borderTopWeight:[`borderTopWeight`,...Og],borderRightWeight:[`borderRightWeight`,...Og],borderBottomWeight:[`borderBottomWeight`,...Og],borderLeftWeight:[`borderLeftWeight`,...Og],independentStrokeWeights:[`borderStrokeWeightsIndependent`,`borderTopWeight`,`borderRightWeight`,`borderBottomWeight`,`borderLeftWeight`,...Og],strokeWeight:[`strokeWeight`,...Og],strokeAlign:[`strokeAlign`,...Og],strokeJoin:[`strokeJoin`,...Og],strokeMiterLimit:[`miterLimit`,...Og],strokeCap:[...Og],dashPattern:[...Og],text:[...Q],styleRuns:[...Q],fontSize:[`fontSize`,...Q],fontFamily:[`fontName`,`fontVersion`,...Q],fontWeight:[`semanticWeight`,...Q],italic:[`semanticItalic`,...Q],textAlignHorizontal:[`textAlignHorizontal`,...Q],textAlignVertical:[`textAlignVertical`,...Q],lineHeight:[`lineHeight`,...Q],letterSpacing:[`letterSpacing`,`textTracking`,...Q],textAutoResize:[`textAutoResize`,...Q],textDecorationStyle:[`textDecorationStyle`,...Q],textDecorationThickness:[`textDecorationThickness`,...Q],textDecorationFills:[`textDecorationFillPaints`,...Q],textUnderlineOffset:[`textUnderlineOffset`,...Q],leadingTrim:[`leadingTrim`,...Q],maxLines:[`maxLines`,...Q],textParagraphs:[...Q],listSpacing:[`listSpacing`,...Q],paragraphSpacing:[`paragraphSpacing`,...Q],paragraphIndent:[`paragraphIndent`,...Q],hangingList:[`hangingList`,...Q],fontVariations:[`fontVariations`,...Q],opticalSizeFromFontSize:[`detachOpticalSizeFromFontSize`,...Q],fontFeatures:[`fontVariantCommonLigatures`,`fontVariantContextualLigatures`,`toggledOnOTFeatures`,`toggledOffOTFeatures`,...Q],minWidth:[`minSize`],minHeight:[`minSize`],maxWidth:[`maxSize`],maxHeight:[`maxSize`],vectorNetwork:[`vectorData`,`fillGeometry`,`strokeGeometry`],fillGeometry:[`fillGeometry`,`vectorData`],strokeGeometry:[`strokeGeometry`,`vectorData`],isMask:[`mask`],maskType:[`maskType`],maskIsOutline:[`maskIsOutline`],componentPropertyDefinitions:[`componentPropDefs`],componentPropertyReferences:[`componentPropRefs`],componentPropertyAssignments:[`componentPropAssignments`],variantPropSpecs:[`variantPropSpecs`]};function Ag(e=[]){return new Set(e.flatMap(e=>kg[e]??[]))}function jg(e){let t=Ag(e.source.editedFields??[]);return t.size===0?e.source.fig.rawNodeFields:Object.fromEntries(Object.entries(e.source.fig.rawNodeFields).filter(([e])=>!t.has(e)))}function Mg(e){return Object.getPrototypeOf(e)===Object.prototype}function Ng(e){if(typeof e!=`object`||!e)return e;if(Array.isArray(e))return e.map(e=>Ng(e));if(!Mg(e))return structuredClone(e);let t={};for(let n of Object.keys(e))t[n]=Ng(e[n]);return t}function Pg(e){return Ng(e)}function Fg(e,t=0){if(t>64)throw Error(`Variable expression exceeds maximum depth`);let n=e?.value;if(e?.dataType===`EXPRESSION`&&!n?.expressionValue)throw Error(`Missing variable expression value`);if(!n)return;if(n.alias)return{multiplier:1,reference:n.alias};if(typeof n.floatValue==`number`&&Number.isFinite(n.floatValue))return{multiplier:n.floatValue};let r=n.expressionValue;if(r){if(r.expressionFunction===`STRINGIFY`||r.expressionFunction===`IS_TRUTHY`)return Ig(r);if(r.expressionFunction!==`MULTIPLY`||!r.expressionArguments?.length)throw Error(`Unsupported variable expression ${r.expressionFunction}`);return Lg(r.expressionArguments,t)}}function Ig(e){let t=e.expressionArguments??[],n=t.length===1?t[0].value?.alias:void 0,r=e.expressionFunction;if(!n)throw Error(`Variable expression ${r} must wrap one alias`);return{multiplier:1,reference:n}}function Lg(e,t){let n={multiplier:1};for(let r of e){let e=Fg(r,t+1);if(!e||n.reference&&e.reference)throw Error(`Variable expression is not a constant multiplied by one alias`);n.multiplier*=e.multiplier,e.reference&&(n.reference=e.reference)}if(!Number.isFinite(n.multiplier))throw Error(`Variable expression has a non-finite multiplier`);return n}function Rg(e,t,n=0){if(n>64)throw Error(`Variable expression exceeds maximum depth`);e?.value?.alias&&t(e.value.alias);for(let r of e?.value?.expressionValue?.expressionArguments??[])Rg(r,t,n+1)}let zg={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,text:`TEXT_DATA`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`},Bg=Object.fromEntries(Object.entries(zg).map(([e,t])=>[t,e])),Vg=.01;function Hg(e){return e===`ALIAS`||e===`EXPRESSION`}function Ug(e){let t=e.parameterConsumptionMap,n=new Map,r=[];for(let i of[...e.variableConsumptionMap?.entries??[],...t?.entries??[]])i.variableField?n.set(i.variableField,i):r.push(i);return[...r,...n.values()]}function Wg(e,t){let n=Ug(t);if(n.length===0)return{};let r=[];for(let t of[...Ug(e),...n]){let e=t.variableField?r.findIndex(e=>e.variableField===t.variableField):-1;e<0?r.push(Pg(t)):r[e]=Pg(t)}return{parameterConsumptionMap:{entries:r}}}let Gg={fontFamily:`FONT_FAMILY`,fontStyle:`FONT_STYLE`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,paragraphSpacing:`PARAGRAPH_SPACING`,paragraphIndent:`PARAGRAPH_INDENT`},Kg=Ut(Gg);function qg(e,t,n){return Object.entries(e).flatMap(([e,r])=>{let i=Gg[e];return!i||!r||!t.variables.has(r)?[]:[Xg(i,r,t,n)]})}function Jg(e){let t={};for(let n of Ug(e)){let e=n.variableField&&Kg[n.variableField],r=e?Fg(n.variableData)?.reference?.guid:void 0;e&&r&&(t[e]=X(r))}return t}function Yg(e,t,n){let r=e.variables.get(t);return r?.key?{assetRef:{key:r.key,...r.version?{version:r.version}:{}}}:{guid:n?.get(t)??Um(t)}}function Xg(e,t,n,r,i=1,a=!1){if(!t)return{variableField:e};let o=n.variables.get(t);if(!o)throw Error(`Missing bound variable ${t}`);if(!Number.isFinite(i))throw Error(`Non-finite variable binding multiplier`);let s={dataType:`ALIAS`,resolvedDataType:o.type,value:{alias:Yg(n,t,r)}},c;return e===`VISIBLE`?c=`IS_TRUTHY`:e===`TEXT_DATA`&&o.type!==`STRING`&&(c=`STRINGIFY`),c?{variableField:e,variableData:{dataType:`EXPRESSION`,resolvedDataType:c===`IS_TRUTHY`?`BOOLEAN`:`STRING`,value:{expressionValue:{expressionFunction:c,expressionArguments:[s]}}}}:o.type!==`FLOAT`||!a&&i===1?{variableField:e,variableData:s}:{variableField:e,variableData:{dataType:`EXPRESSION`,resolvedDataType:`FLOAT`,value:{expressionValue:{expressionFunction:`MULTIPLY`,expressionArguments:[{dataType:`FLOAT`,resolvedDataType:`FLOAT`,value:{floatValue:i}},s]}}}}}function Zg(e,t){return e===`opacity`?Vg:e===`rotation`?1:t}function Qg(e){let t=e.variableField?Bg[e.variableField]:void 0;if(!t)return;let n=Fg(e.variableData);if(e.variableData?.value?.expressionValue&&!n?.reference)throw Error(`Variable expression must contain one alias`);let r=n?.reference?.guid;return r?{field:t,variableId:X(r),multiplier:n.multiplier}:void 0}function $g(e){let t={};for(let n of Ug(e)){let e=Qg(n);e&&Ji(e.field)&&(t[e.field]=e.multiplier*(e.field===`opacity`?Vg:1))}return t}function e_(e=1){return e===1?{}:Object.fromEntries(Object.entries(t_(zg,e)).filter(([,e])=>e!==1))}function t_(e,t,n={}){let r={};for(let i of Object.keys(e))Ji(i)&&(r[i]=n[i]??Zg(i,t));return r}function n_(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t*Vg))}:Ji(e)?{[e]:t}:void 0}let{boundVariables:r_,exportSettings:i_,librarySource:a_,textPathBox:o_}=lm,s_={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function c_(e,t){return t.decode(e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t.key)?.value)}function l_(e){return c_(e,o_)??null}function u_(e){let t=c_(e,r_)??{},n=t=>{let n=ea(t)?.list;return n===`fills`?e.fillPaints!==void 0:n===`strokes`&&e.strokePaints!==void 0};t=Object.fromEntries(Object.entries(t).filter(([e])=>!n(e)));for(let n of Ug(e)){let e=Qg(n);if(e)t[e.field]=e.variableId;else if(n.variableField&&!Hg(n.variableData?.dataType)){let e=Bg[n.variableField];e&&(t=Gt(t,[e]))}}return e.fillPaints?.forEach((e,n)=>{let r=e.colorVar?.value?.alias?.guid;r&&(t[`fills/${n}/color`]=X(r))}),e.strokePaints?.forEach((e,n)=>{let r=e.colorVar?.value?.alias?.guid;r&&(t[`strokes/${n}/color`]=X(r))}),t}function d_(e){return typeof e==`string`?s_[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function f_(e){if(!e||typeof e!=`object`||Array.isArray(e))return 1;let t=e.type;if(t!==`CONTENT_SCALE`&&t!==0)return 1;let n=e.value;return typeof n==`number`&&Number.isFinite(n)?zp(n):1}function p_(e){return c_(e,i_)||(e.exportSettings??[]).flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=d_(e.imageType);return t?[{scale:f_(e.constraint),format:t}]:[]})}function m_(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function h_(e){return c_(e,a_)??null}function g_(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}let{statuses:__}=lm,v_={READY_FOR_DEV:`ready-for-dev`,COMPLETED:`completed`};v_.READY_FOR_DEV,fm(`#14ae5c`);let y_={id:v_.COMPLETED,name:`Completed`,color:fm(`#8a8a8a`)};fm(`#b3b3b3`),fm(`#0d99ff`),{...y_},fm(`#14ae5c`),fm(`#b3b3b3`),fm(`#9747ff`),fm(`#f24822`),fm(`#0d99ff`),{...y_};function b_(e){return e===v_.READY_FOR_DEV?`READY_FOR_DEV`:e===v_.COMPLETED?`COMPLETED`:null}let x_=H({status:ac(mc([`NONE`,`BUILD`,`COMPLETED`]),`NONE`)});function S_(e){let t=bc(x_,e.sectionStatusInfo),n=t.success?t.output.status:`NONE`;return n===`BUILD`?`READY_FOR_DEV`:n===`COMPLETED`?`COMPLETED`:null}function C_(e){let t=S_(e),n=c_(e,lm.status)??null;return n!==null&&b_(n)===t?n:t?v_[t]:null}let w_=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function T_(e,t,n){if(t?.guid)return e.get(X(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function E_(e,t,n){let r=T_(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints);let i=T_(e,t.styleIdForStrokeFill,n);i?.styleType===`FILL`&&i.fillPaints&&(t.strokePaints=i.fillPaints)}function D_(e,t,n){let r=T_(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=T_(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function O_(e,t,n){let r=T_(e,t.styleIdForText,n);if(!(r?.type!==`TEXT`||r.styleType!==`TEXT`))for(let e of w_)e===`textDecoration`?t.textDecoration=r.textDecoration:r[e]!==void 0&&Object.assign(t,{[e]:r[e]})}function k_(e,t,n){E_(e,t,n),D_(e,t,n),O_(e,t,n)}function A_(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`||Hm(t)?null:X(t)}function j_(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}let M_={value:100,units:`PERCENT`};function N_(e){return e?.units===M_.units&&e.value===M_.value}function P_(e){return!e||N_(e)?null:e.units===`PIXELS`?On(e.value):e.units===`PERCENT`?kn(e.value):e.units===`RAW`?kn(e.value*100):null}function F_(e){return e?e.units===`PIXELS`?On(e.value):kn(e.value):Tn}let I_=new Set([`ORIGINAL`,`UPPER`,`LOWER`,`TITLE`]);function L_(e){if(!e||typeof e!=`object`)return;let t=e;if(typeof t.url==`string`&&t.url!==``)return{type:`URL`,value:t.url};if(t.guid&&!Hm(t.guid))return{type:`NODE`,value:X(t.guid)}}function R_(e,t,n){I_.has(t.textCase)&&(e.textCase=t.textCase);let r=L_(t.hyperlink);r&&(e.hyperlink=r);for(let[r,i]of[[`textStyleId`,`styleIdForText`],[`fillStyleId`,`styleIdForFill`]]){if(t[i]===void 0)continue;let a=A_(t[i]);a!==A_(n[i])&&(e[r]=a)}let i=Jg(t);Jt(i)||(e.boundVariables=i)}function z_(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=j_(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=bg(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function B_(e,t){let n={};e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=th(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=lg(e);r.length>0&&(n.fontVariations=r),e.detachOpticalSizeFromFontSize!==void 0&&(n.opticalSizeFromFontSize=!e.detachOpticalSizeFromFontSize);let i=sg(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=F_(e.letterSpacing)),e.lineHeight&&(n.lineHeight=P_(e.lineHeight)),z_(n,e),e.fillPaints){let t=bg(e.fillPaints);t.length>0&&(n.fills=t)}return R_(n,e,t),n}function V_(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0||e===0)continue;let i=B_(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function H_(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){let o=t.get(r);o&&n.push({start:i,length:a-i,style:o}),a<e.length&&(r=e[a],i=a)}return n}function U_(e,t,n,r){for(let e of n.values())e.hyperlink??=r;return n.set(0,{hyperlink:r}),Array.from({length:t},(t,n)=>e[n]??0)}function W_(e){let t=e.textData,n=L_(e.hyperlink),r=t?.characters.length??0,i=V_(t?.styleOverrideTable??[],e),a=n?U_(t?.characterStyleIDs??[],r,i,n):t?.characterStyleIDs??[];return a.length===0||i.size===0?[]:H_(a,i)}function G_(e){return e.lineType===`ORDERED_LIST`?`ORDERED`:e.lineType===`UNORDERED_LIST`?`UNORDERED`:`NONE`}function K_(e,t=[]){if(!e)return[];let n=new Map(t.map(e=>[e.styleID,e])),r=e.map(e=>{let t={listType:G_(e),indentation:e.indentationLevel??0};t.listType!==`NONE`&&(t=vo(t,t.indentation));let r=e.styleId?n.get(e.styleId):void 0;for(let e of mo){let n=r?.[e];n!==void 0&&(t=go(t,e,n))}return t});return _o(r,r.length)}function q_(e,t){return J_(e,t).network}function J_(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e),o={x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`};a?.strokeCap&&(o.strokeCap=a.strokeCap),a?.strokeJoin&&(o.strokeJoin=a.strokeJoin),a?.cornerRadius!==void 0&&(o.cornerRadius=a.cornerRadius),c.push(o)}let l=[],u=[];for(let e=0;e<a;e++){u.push(n.getUint32(r,!0)),r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let d=[];for(let e=0;e<o;e++){let e=(n.getUint32(r,!0)&1)==1?`NONZERO`:`EVENODD`;r+=4;let t=n.getUint32(r,!0);r+=4;let i=[];for(let e=0;e<t;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;i.push(t)}d.push({windingRule:e,loops:i})}return{network:{vertices:c,segments:l,regions:d},segmentStyles:u}}let Y_=33554431;function X_(e){let{segmentStyles:t}=J_(e),n=t.findIndex(e=>(e&Y_)==Y_);return Math.max(n,0)}function Z_(e){return e===`ODD`||e===`EVENODD`?`EVENODD`:`NONZERO`}function Q_(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function $_(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=q_(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0,c=a&&a.x>0&&o>0?o/a.x:1,l=a&&a.y>0&&s>0?s/a.y:1;if(c!==1||l!==1){for(let e of i.vertices)e.x*=c,e.y*=l;for(let e of i.segments)e.tangentStart={x:e.tangentStart.x*c,y:e.tangentStart.y*l},e.tangentEnd={x:e.tangentEnd.x*c,y:e.tangentEnd.y*l}}return i}catch{return null}}function ev(e){let t=new Map;for(let n of e??[])n.fillPaints&&n.fillPaints.length>0&&t.set(n.styleID,bg(n.fillPaints));return t}function tv(e){let t=e.vectorData;return ev(t?.styleOverrideTable)}function nv(e,t,n){if(!e||e.length===0)return[];let r=[];for(let i of e){if(i.commandsBlob===void 0||i.commandsBlob<0||i.commandsBlob>=t.length)continue;let e=t[i.commandsBlob];if(e.length===0)continue;let a=i.styleID?n?.get(i.styleID):void 0;r.push({windingRule:Z_(i.windingRule),commandsBlob:e,fills:a&&a.length>0?nr(a):void 0})}return r}function rv(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[X(n)]=X(r))}return t}let iv={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`,STICKY:`STICKY`,TEXT_PATH:`TEXT`};function av(e){return e?iv[e]??`RECTANGLE`:`RECTANGLE`}function ov(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function sv(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function cv(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;default:return`FIXED`}}function lv(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function uv(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function dv(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function fv(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function pv(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function mv(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1,s=av(e.type);if(e.transform&&s!==`DOCUMENT`&&s!==`VARIABLE`){let c=e.transform;c.m00*c.m11-c.m01*c.m10<0&&(o=!0),a=Math.atan2(c.m10,o?c.m11:c.m00)*(180/Math.PI);let l=zn({type:s,x:0,y:0,width:t,height:n,rotation:a,flipX:o,flipY:!1});r=c.m02-l[2],i=c.m12-l[5]}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function hv(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function gv(e){let t={};return e.count!==void 0&&(t.pointCount=Zm(e.count,nh.min,nh.max)),e.starInnerScale!==void 0&&Number.isFinite(e.starInnerScale)&&(t.starInnerRadius=Zm(e.starInnerScale,0,1)),t}function _v(e){if(!e.lineHeight||N_(e.lineHeight))return null;let t=e.derivedTextData?.baselines?.[0];return e.lineHeight.units===`PIXELS`&&t!==void 0&&Number.isFinite(t.lineHeight)&&t.lineHeight<e.lineHeight.value&&!vv(e,t.firstCharacter,t.endCharacter)?On(t.lineHeight):P_(e.lineHeight)}function vv(e,t,n){let r=new Set((e.textData?.styleOverrideTable??[]).filter(e=>e.lineHeight).map(e=>e.styleID));return(e.textData?.characterStyleIDs??[]).slice(t,n).some(e=>e!==0&&r.has(e))}function yv(e){return{textDecoration:j_(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:bg(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function bv(e){return{textParagraphs:K_(e.textData?.lines,e.textData?.styleOverrideTable),listSpacing:e.listSpacing??0,paragraphSpacing:e.paragraphSpacing??0,paragraphIndent:e.paragraphIndent??0,hangingList:e.hangingList??!1}}function xv(e){return typeof e==`number`&&Number.isFinite(e)&&e>0?e:0}function Sv(e){return e.type===`SHAPE_WITH_TEXT`?{shapeWithTextType:ih(e.shapeWithTextType)?e.shapeWithTextType:`SQUARE`,shapeUserHeight:xv(e.shapeUserHeight),shapeTruncates:e.shapeTruncates===!0}:{}}function Cv(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:th(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...yv(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:_v(e),letterSpacing:F_(e.letterSpacing),maxLines:e.maxLines??null,...bv(e),styleRuns:W_(e),fontVariations:lg(e),opticalSizeFromFontSize:e.detachOpticalSizeFromFontSize!==!0,fontFeatures:sg(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:c_(e,lm.textDirection)??`AUTO`,...wv(e,t)}}function wv(e,t){let n=e.derivedTextData?.layoutSize;return{derivedLayout:n?{width:n.x,height:n.y}:null,derivedTextHeight:Tv(e),derivedTextGlyphs:ch(e.derivedTextData,t,e.textData?.characters??``)}}function Tv(e){let t=(e.derivedTextData?.baselines??[]).map(e=>(e.lineY??e.position.y-e.lineAscent)+e.lineHeight);return t.length>0?Math.max(...t):null}function Ev(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function Dv(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(t===`NONE`||!i||!a)return;let{x:o,y:s,width:c,height:l}=mv(e);return{x:o,y:s,width:c,height:l}}function Ov(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function kv(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function Av(e){let t=e.targetAspectRatio?.value;return!t||!Number.isFinite(t.x)||!Number.isFinite(t.y)?null:{x:t.x,y:t.y}}function jv(e){let t=sv(e.stackMode),n=e.stackPrimarySizing===void 0&&(t===`HORIZONTAL`||t===`VERTICAL`)?`HUG`:cv(e.stackPrimarySizing),r=cv(e.stackCounterSizing),i=Dv(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...Ev(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:lv(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:uv(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:dv(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:c_(e,lm.layoutDirection)??`AUTO`,...i?{derivedLayout:i}:{}}}function Mv(e){return e.strokeCap??`NONE`}function Nv(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function Pv(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function Fv(e){return Array.isArray(e)?structuredClone(e):[]}function Iv(e,t){if(e.type!==`TEXT_PATH`)return null;let n=e.vectorData,r=n?.vectorNetworkBlob,i=n?.normalizedSize;if(typeof r!=`number`||!i||i.x<=0||i.y<=0)return null;let a=t[r],o=e.textPathStart;try{return{network:q_(a,n.styleOverrideTable),normalizedSize:{x:i.x,y:i.y},tValue:o?.tValue??0,forward:o?.forward??!0,startSegment:X_(a)}}catch{return null}}function Lv(e,t){let n=$_(e,t),r=Mv(e),i=Nv(e,n);return{vectorNetwork:n,fillGeometry:Q_(nv(e.fillGeometry,t,tv(e)),n),strokeGeometry:nv(e.strokeGeometry,t),arcData:pv(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function Rv(e){let t=av(e.type);return t===`FRAME`&&ey(e)||c_(e,lm.nodeType)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}function zv(e,t,n=`source`){let r=Rv(e),i=Lv(e,t),a=Iv(e,t),o={nodeType:r,name:e.name??r,source:n===`source`?ry(e,t):ny(e),...mv(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,internalOnly:e.internalOnly===!0||Pv(e.styleType)!==null,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:ov(e),fills:bg(e.fillPaints),strokes:Sg(e.strokePaints,e.strokeWeight,e.strokeAlign,i.strokeCap,i.strokeJoin,e.dashPattern??[]),strokeWeight:e.strokeWeight??1,strokeAlign:xg(e.strokeAlign),effects:Cg(e.effects),layoutGrids:Fv(e.layoutGrids),guides:Xm(e.guides),fillStyleId:A_(e.styleIdForFill),strokeStyleId:A_(e.styleIdForStrokeFill),textStyleId:A_(e.styleIdForText),effectStyleId:A_(e.styleIdForEffect),gridStyleId:A_(e.styleIdForGrid),sharedStyleType:Pv(e.styleType),...hv(e),...gv(e),...Cv(e,t),...Sv(e),horizontalConstraint:fv(e.horizontalConstraint),verticalConstraint:fv(e.verticalConstraint),...jv(e),...i,minWidth:Ov(e.minSize,`x`),maxWidth:kv(e.maxSize,`x`),minHeight:Ov(e.minSize,`y`),maxHeight:kv(e.maxSize,`y`),targetAspectRatio:Av(e),isMask:e.mask??!1,maskType:e.maskType===`OUTLINE`?`VECTOR`:e.maskType??`ALPHA`,maskIsOutline:e.maskIsOutline??!1,expanded:!0,autoRename:e.autoRename??!0,boundVariables:u_(e),variableAssignmentScales:e_(),variableBindingScales:$g(e),variableModes:rv(e),exportSettings:p_(e),status:C_(e),pluginData:m_(e),librarySource:h_(e),pluginRelaunchData:g_(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:cy(e),componentPropertyDefinitions:r===`INSTANCE`?[]:Uv(e),componentPropertyReferences:Wv(e),componentPropertyAssignments:Kv(e),componentPropertyValues:Jv(e),...$v(e)};Dg(o,a);let s=l_(e);return s&&o.textPathBox&&(o.textPathBox={x:s.x+o.textPathBox.x,y:s.y+o.textPathBox.y,width:s.width,height:s.height}),o}let Bv={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`,SLOT:`SLOT`};function Vv(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?X(t.guidValue):``}function Hv(e){let t={allowPreferredValuesOnly:e.allowPreferredValuesOnly??!1,displayEmptyByDefault:e.displayByDefault??!1,stretchChildOnInsert:e.stretchChildOnInsert??!1};return e.minChildren!==void 0&&(t.minChildren=e.minChildren),e.maxChildren!==void 0&&(t.maxChildren=e.maxChildren),t}function Uv(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=Bv[e.type??``]??`VARIANT`,r={id:X(e.id),name:e.name,type:t,defaultValue:Vv(e.initialValue),variantOptions:t===`VARIANT`?e.preferredValues?.stringValues:void 0,preferredValues:t===`INSTANCE_SWAP`||t===`SLOT`?e.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0};e.description&&(r.description=e.description),t===`SLOT`&&e.slotPropConfig&&(r.slotSettings=Hv(e.slotPropConfig)),n.push(r)}return n}function Wv(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,4:`SLOT_CONTENT`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`,SLOT_CONTENT_ID:`SLOT_CONTENT`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:X(e.defID),field:t}]:[]})}function Gv(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return Vv(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?X(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function Kv(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[X(e.defID),Gv(e)]]:[])):{}}function qv(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:X(e.propDefId),value:e.value??``})):[]}function Jv(e){let t=qv(e),n=new Map(Uv(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?ah(r):{}}function Yv(e){if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.sessionID!=`number`||typeof t.localID!=`number`)return null;let n={sessionID:t.sessionID,localID:t.localID};return Hm(n)?null:X(n)}function Xv(e){return typeof e==`string`?e:null}function Zv(e){return typeof e==`string`?e:``}function Qv(e){return typeof e==`boolean`&&e}function $v(e){let t=e.symbolLinks??[];return{componentKey:Xv(e.componentKey),sourceLibraryKey:Xv(e.sourceLibraryKey),publishId:Yv(e.publishID),overrideKey:Yv(e.overrideKey),sharedSymbolVersion:Xv(e.sharedSymbolVersion),publishedVersion:Xv(e.publishedVersion),isPublishable:Qv(e.isPublishable),isSymbolPublishable:Qv(e.isSymbolPublishable),isExposedInstance:Qv(e.propsAreBubbled),symbolDescription:Zv(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:qv(e)}}function ey(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function ty(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function ny(e){let t=jn();return t.fig.layout=ty(e),t}function ry(e,t){return{format:`fig`,id:e.guid?X(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...oy(e,t),...sy(e,t),layout:ty(e)}}}function iy(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>iy(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=iy(i,t);return n}let ay=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.blendMode.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textAlignHorizontal.textAlignVertical.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.emojiImageSet.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.detachOpticalSizeFromFontSize.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function oy(e,t){let n={};for(let r of ay){let i=e[r];i!==void 0&&(n[r]=iy(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function sy(e,t){let n=e.symbolData;return{symbolOverrides:iy(n?.symbolOverrides??[],t),componentPropAssignments:iy(e.componentPropAssignments??[],t),derivedSymbolData:iy(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function cy(e){let t=e.symbolData;return t?.symbolID?X(t.symbolID):``}function ly(e){let t=Array.from({length:e.text.length}).fill(0),n=new Map,r=1;for(let i of e.styleRuns){let e=JSON.stringify(i.style),a=n.get(e);a||(a={id:r++,style:i.style},n.set(e,a));for(let e=i.start;e<i.start+i.length&&e<t.length;e++)t[e]=a.id}return{charIds:t,styleMap:n}}function uy(e){return[...ly(e).styleMap.values()]}function dy(e){let t=new Map;for(let n of e.getAllNodes()){if(n.sharedStyleType===null||!n.source.id)continue;let e=jg(n);typeof e.key==`string`&&t.set(n.source.id,{assetRef:{key:e.key,...typeof e.version==`string`?{version:e.version}:{}}})}return t}function fy(e,t){if(!e.styleNodeIds){let t=new Map;for(let n of e.graph.getAllNodes())n.sharedStyleType!==null&&n.source.id&&t.set(n.source.id,n.id);e.styleNodeIds=t}let n=e.styleNodeIds.get(t);return(n?e.nodeIdToGuid?.get(n):void 0)??e.nodeIdToGuid?.get(t)??Um(t)}function py(e,t){return e.styleReferences??=dy(e.graph),e.styleReferences.get(t)??{guid:fy(e,t)}}function my(e,t,n,r){let i=t.boundVariables[r];if(!i){if(!n.colorVar)return n;let{colorVar:e,...t}=n;return t}return{...n,colorVar:{dataType:`ALIAS`,resolvedDataType:`COLOR`,value:{alias:Yg(e.graph,i,e.varIdToGuid)}}}}function hy(e,t){return t.fills.map((n,r)=>my(e,t,e.fillToKiwiPaint(n),`fills/${r}/color`))}function gy(e,t){return t.strokes.map((n,r)=>my(e,t,e.fillToKiwiPaint(n),`strokes/${r}/color`))}function _y(e,t,n){let r=t=>e.nodeIdToGuid?.get(t)??Um(t),i=n.hyperlink;i&&(t.hyperlink=i.type===`URL`?{url:i.value}:{guid:r(i.value)}),n.textStyleId!==void 0&&(t.styleIdForText=n.textStyleId?py(e,n.textStyleId):{guid:{...Vm}}),n.fillStyleId!==void 0&&(t.styleIdForFill=n.fillStyleId?py(e,n.fillStyleId):{guid:{...Vm}});let a=qg(n.boundVariables??{},e.graph,e.varIdToGuid);a.length>0&&(t.parameterConsumptionMap={entries:a})}function vy(e,t,n){let r=n.styleOverrideTable;if(!r)return;let i=new Map(uy(t).map(({id:e,style:t})=>[e,t]));for(let t of r){let n=i.get(t.styleID);n&&_y(e,t,n)}}function yy(e,t,n){e.serializeTextProps(t,n,e.graph,e.fontDigestMap,e.blobs,e.glyphBlobMap),n.textData&&vy(e,t,n.textData)}function by(e){return{guids:[{sessionID:4e7,localID:e}]}}function xy(e){let t=e.guidPath?.guids;if(!(t?.length!==1||t[0].sessionID!==4e7))return t[0].localID}function Sy(e){let t=new Map;for(let n of e?.overrides??[]){let e=xy(n);e!==void 0&&t.set(e,n)}return t}function Cy(e){return Sy(e.nodeGenerationData)}function wy(e){return Sy(e.derivedImmutableFrameData)}function Ty(e,t,n){let{guidPath:r,...i}=Pg(t??{}),a={...i,type:e};return n?.size&&(a.size=Pg(n.size)),n?.transform&&(a.transform=Pg(n.transform)),n?.vectorData&&(a.vectorData=Pg(n.vectorData)),n?.derivedTextData&&(a.derivedTextData=Pg(n.derivedTextData)),a}function Ey(e){return{size:{x:e.width,y:e.height},transform:{m00:1,m01:0,m02:e.x,m10:0,m11:1,m12:e.y}}}function Dy(e,t,n){let r={};yy(e,n,r);let{derivedTextData:i,...a}=r,o={...a,guidPath:by(t),visible:n.visible,fillPaints:hy(e,n)},s={guidPath:by(t),...Ey(n)};return i&&(s.derivedTextData=i),{entry:o,derived:s}}function Oy(e,t){return e.text===``||(t.derivedTextData?.glyphs?.length??0)>0}let ky={line:0,label:1,labelBackground:2},Ay=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`];function jy(e,t){return Array.isArray(e)?e.map(({position:e,axis:n})=>({position:{x:(e?.x??0)-t.x,y:(e?.y??0)-t.y},direction:n?.x?`HORIZONTAL`:`VERTICAL`})):[]}function My(e,t){let n=jy(e,t),r=n.at(0),i=n.at(1);return r&&i?[r.position,i.position]:null}function Ny(e,t){return e.map(({position:e,direction:n})=>({position:{x:e.x+t.x,y:e.y+t.y},axis:n===`HORIZONTAL`?{x:1,y:0}:{x:0,y:1}}))}let Py=new Set([`MIDDLE_TO_START`,`MIDDLE_TO_END`]),Fy=new Set([`NONE`,`ABOVE`,`BELOW`]);function Iy(e){if(!e||typeof e!=`object`)return null;let{section:t,offset:n,offAxisOffset:r}=e;return!t||!Py.has(t)||typeof n!=`number`?null:{section:t,offset:n,offAxis:r&&Fy.has(r)?r:`NONE`}}let Ly=new Set([`NONE`,`AUTO`,`AUTO_HORIZONTAL`,`TOP`,`RIGHT`,`BOTTOM`,`LEFT`,`CENTER`,`EDGE`,`ABSOLUTE`]),Ry=new Set([`NONE`,`ROUND`,`SQUARE`,`ARROW_LINES`,`ARROW_EQUILATERAL`,`TRIANGLE_FILLED`,`DIAMOND_FILLED`,`CIRCLE_FILLED`]),zy=new Set([`ELBOWED`,`STRAIGHT`,`CURVED`]);function By(e){return e&&Ly.has(e)?e:`NONE`}function Vy(e,t){return typeof e==`string`&&Ry.has(e)?e:t}function Hy(e){let t=e??{},n=t.endpointNodeID;return{sourceId:n&&!Hm(n)?X(n):null,magnet:By(t.magnet),position:{x:t.position?.x??0,y:t.position?.y??0}}}function Uy(e,t,n){let r=e.sourceId===null?null:n(e.sourceId)??null;return r||e.sourceId===null?{nodeId:r,magnet:e.magnet,position:e.position}:{nodeId:null,magnet:`NONE`,position:t??e.position}}function Wy(e,t,n,r){let i=Pr(e,t);e.updateNode(t.id,{connectorStart:Uy(Hy(n.connectorStart),i?.start,r),connectorEnd:Uy(Hy(n.connectorEnd),i?.end,r)})}function Gy(e,t,n,r){let{nodeType:i,name:a,...o}=zv(Ty(e,t,n),r,`occurrence`);return o}function Ky(e,t,n,r){let i=Cy(n),a=wy(n),{line:o,label:s,labelBackground:c}=ky,l=n.connectorLineStyle;e.updateNode(t.id,{fills:[],strokes:[],connectorLineType:typeof l==`string`&&zy.has(l)?l:`ELBOWED`,connectorStartCap:Vy(n.connectorStartCap,`ROUND`),connectorEndCap:Vy(n.connectorEndCap,`ARROW_LINES`),connectorControlPoints:jy(n.connectorControlPoints,t),connectorCurveHandles:My(n.connectorBezierControlPoints,t),connectorLabelPosition:Iy(n.connectorTextMidpoint)});let u=i.get(s)?.textData?.characters??``,d=Gy(`RECTANGLE`,i.get(c),a.get(c),r),f=Gy(`TEXT`,i.get(s),a.get(s),r);Nr(e,t,{line:Gy(`VECTOR`,i.get(o),a.get(o),r),labelBackground:{...d,visible:u!==``},label:{...f,x:(f.x??0)+(d.x??0),y:(f.y??0)+(d.y??0),visible:u!==``}})}function qy(e,t,n){let r=t?.nodeId?e.nodeIdToGuid?.get(t.nodeId):void 0;return t&&(r||!t.nodeId)?{endpointNodeID:r??{...Vm},position:{...t.position},magnet:t.magnet}:{endpointNodeID:{...Vm},position:{...n??{x:0,y:0}},magnet:`NONE`}}function Jy(e,t,n){let r=qt(n,Ay),i=Ar(e.graph,t);if(!i)return r;let a=Pr(e.graph,t);if(r.connectorStart=qy(e,t.connectorStart,a?.start),r.connectorEnd=qy(e,t.connectorEnd,a?.end),r.connectorLineStyle=t.connectorLineType,r.connectorStartCap=t.connectorStartCap,r.connectorEndCap=t.connectorEndCap,t.connectorControlPoints.length>0&&(r.connectorControlPoints=Ny(t.connectorControlPoints,t)),t.connectorCurveHandles&&(r.connectorBezierControlPoints=Ny(t.connectorCurveHandles.map(e=>({position:e,direction:`HORIZONTAL`})),t)),t.connectorLabelPosition){let{section:e,offset:n,offAxis:i}=t.connectorLabelPosition;r.connectorTextMidpoint={section:e,offset:n,offAxisOffset:i}}r.connectorType=`MANUAL`,r.connectorVersion=1;let{line:o,label:s,labelBackground:c}=i,l={guidPath:by(ky.line),strokePaints:gy(e,o),strokeWeight:o.strokes[0]?.weight??o.strokeWeight,strokeCap:`ROUND`,cornerRadius:o.cornerRadius,dashPattern:[...o.dashPattern]},{entry:u,derived:d}=Dy(e,ky.label,s);r.nodeGenerationData={overrides:[l,u,{guidPath:by(ky.labelBackground),visible:c.visible,fillPaints:hy(e,c),cornerRadius:c.cornerRadius}],useFineGrainedSyncing:!1,diffOnlyRemovals:[]};let f={};return e.serializeGeometry(o,f,e.blobs),d.transform={m00:1,m01:0,m02:s.x-c.x,m10:0,m11:1,m12:s.y-c.y},f.vectorData&&Oy(s,d)&&(r.derivedImmutableFrameData={overrides:[{guidPath:by(ky.line),...Ey(o),vectorData:f.vectorData},d,{guidPath:by(ky.labelBackground),...Ey(c)}],version:1}),r}let Yy={read:Ky,link:Wy,write:Jy};function Xy(e,t){if(e!==null&&t!==null&&e>=t)return null;let n=e??``,r=t??``,i=0;for(;i<n.length&&i<r.length&&n[i]===r[i];)i++;let a=i<n.length?n.charCodeAt(i):32,o=t!==null&&i<t.length?t.charCodeAt(i):127;if(o-a>1)return n.slice(0,i)+String.fromCharCode(Math.floor((a+o)/2));if(i<n.length)return n.slice(0,i+1)+(Xy(n.slice(i+1),null)??`O`);let s=t?.slice(i+1)??``;return!t||s===``?null:t.slice(0,i+1)+(Xy(null,s)??``)}function Zy(e,t,n){for(let r=Xy(e,t);r!==null;r=Xy(r,t)){if(r+n<t)return r+n;if(!t.startsWith(r))return null}return null}function Qy(e,t,n=``){let r=Xy(e,t);return r===null?(Xy(e,null)??`O`)+n:n?t===null?r+n:Zy(e,t,n)??r:r}function $y(e){return e.symbolData}function eb(e){return $y(e)?.symbolOverrides??[]}function tb(e){return e.derivedSymbolData??[]}function nb(e){return $y(e)?.uniformScaleFactor??1}function rb(e,t,n){t(e,n);for(let n of eb(e))rb(n,t,n)}function ib(e){let t=e?.slotContentIdValue?.guid;if(t)return Hm(t)?void 0:t}let ab={background:0,label:1},ob=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`],sb=[`textAutoResize`,`textTruncation`,`maxLines`],cb=[`fillPaints`,`strokePaints`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`dashPattern`,`effects`,`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForEffect`];function lb(e,t){if(!e)return{};let{guidPath:n,...r}=Pg(e);return qt(zv({...r,type:`RECTANGLE`},t,`occurrence`),[`fills`,`strokes`,`strokeWeight`,`strokeAlign`,`strokeCap`,`strokeJoin`,`dashPattern`,`cornerRadius`,`effects`,`fillStyleId`,`strokeStyleId`,`effectStyleId`])}function ub(e,t,n){if(!e)return{};let{nodeType:r,name:i,...a}=zv(Ty(`TEXT`,e,t),n,`occurrence`);return{...a,...Jr}}function db(e,t,n,r){let{background:i,label:a}=ab,o=Cy(n);e.updateNode(t.id,{...lb(o.get(i),r),shapeUserHeight:t.shapeUserHeight>0?t.shapeUserHeight:t.height,...Yr(t.shapeWithTextType,t.width,t.height)});let s=wy(n).get(a);$r(e,t,ub(o.get(a),s,r))}function fb(e,t,n){let r=Zr(e.graph,t);if(!r)return n;let i=qt(n,ob);i.shapeWithTextType=t.shapeWithTextType,t.shapeUserHeight>0&&(i.shapeUserHeight=t.shapeUserHeight),t.shapeTruncates&&(i.shapeTruncates=!0);let a=ab,o={guidPath:by(a.background),...qt(n,cb),cornerRadius:t.cornerRadius},s=Dy(e,a.label,r);return i.nodeGenerationData={overrides:[o,Gt(s.entry,sb)],useFineGrainedSyncing:!1,diffOnlyRemovals:[]},Oy(r,s.derived)&&(i.derivedImmutableFrameData={overrides:[{guidPath:by(a.background),...Ey({...t,x:0,y:0})},s.derived],version:1}),i}let pb={read:db,write:fb},mb={background:0,body:1,author:2},hb=[`guid`,`parentIndex`,`phase`,`type`,`name`,`visible`,`opacity`,`blendMode`,`locked`,`size`,`transform`,`effects`,`autoRename`,`frameMaskDisabled`,`exportSettings`,`pluginData`,`pluginRelaunchData`];function gb(e,t,n){let{nodeType:r,name:i,...a}=zv(Ty(`TEXT`,e,t),n,`occurrence`);return{...a,...ni}}function _b(e,t,n,r){let i=Cy(n),a=wy(n),{background:o,body:s,author:c}=mb,l=gb(i.get(s),a.get(s),r),u=gb(i.get(c),a.get(c),r),d=i.has(c)?ii({fontSize:u.fontSize??0}):1;e.updateNode(t.id,{fills:bg(i.get(o)?.fillPaints),...ti(d)}),si(e,t,{scale:d},{body:l,author:u})}function vb(e,t,n){let r=ai(e.graph,t);if(!r)return n;let i=qt(n,hb),a=hy(e,t),o=[{guidPath:by(mb.background),fillPaints:a,cornerRadius:0}],s=[{guidPath:by(mb.background),...Ey({...t,x:0,y:0})}],c=!0;for(let[t,n]of[[mb.body,r.body],[mb.author,r.author]]){let r=Dy(e,t,n);o.push(r.entry),s.push(r.derived),c&&=Oy(n,r.derived)}return i.nodeGenerationData={overrides:o,useFineGrainedSyncing:!1,diffOnlyRemovals:[]},c&&(i.derivedImmutableFrameData={overrides:s,version:1}),i}let yb={SHAPE_WITH_TEXT:pb,STICKY:{read:_b,write:vb},CONNECTOR:Yy};function bb(e){return yb[e]}let xb={guid:{...Vm}},Sb={name:{scene:[`name`],kind:`scalar`},opacity:{scene:[`opacity`],kind:`scalar`},fontSize:{scene:[`fontSize`],kind:`scalar`,length:!0},visible:{scene:[`visible`],kind:`visible`},variableModeBySetMap:{scene:[`variableModes`],kind:`node`,absent:{entries:[]}},textData:{scene:[`text`,`styleRuns`,`textParagraphs`],kind:`text`},styleIdForText:{scene:[`textStyleId`],kind:`text-style`},fillPaints:{scene:[`fills`],kind:`paint`},strokePaints:{scene:[`strokes`],kind:`paint`},size:{scene:[`width`,`height`],kind:`size`,length:!0},stackSpacing:{scene:[`itemSpacing`],kind:`layout-distance`,length:!0},stackCounterSpacing:{scene:[`counterAxisSpacing`],kind:`layout-distance`,length:!0},stackHorizontalPadding:{scene:[`paddingLeft`],kind:`layout-distance`,length:!0},stackVerticalPadding:{scene:[`paddingTop`],kind:`layout-distance`,length:!0},stackPaddingRight:{scene:[`paddingRight`],kind:`layout-distance`,length:!0},stackPaddingBottom:{scene:[`paddingBottom`],kind:`layout-distance`,length:!0},textAutoResize:{scene:[`textAutoResize`],kind:`layout-mode`},stackChildPrimaryGrow:{scene:[`layoutGrow`],kind:`layout-mode`},stackPrimarySizing:{scene:[`primaryAxisSizing`],kind:`layout-mode`},stackCounterSizing:{scene:[`counterAxisSizing`],kind:`layout-mode`},stackChildAlignSelf:{scene:[`layoutAlignSelf`],kind:`layout-mode`},cornerRadius:{scene:[`cornerRadius`],kind:`node`,length:!0,absent:0},rectangleTopLeftCornerRadius:{scene:[`topLeftRadius`],kind:`node`,length:!0,absent:0},rectangleTopRightCornerRadius:{scene:[`topRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomRightCornerRadius:{scene:[`bottomRightRadius`],kind:`node`,length:!0,absent:0},rectangleBottomLeftCornerRadius:{scene:[`bottomLeftRadius`],kind:`node`,length:!0,absent:0},rectangleCornerRadiiIndependent:{scene:[`independentCorners`],kind:`node`,absent:!1},cornerSmoothing:{scene:[`cornerSmoothing`],kind:`node`,absent:0},strokeWeight:{scene:[`strokeWeight`],kind:`node`,length:!0},strokeAlign:{scene:[`strokeAlign`],kind:`node`,absent:`CENTER`},borderTopWeight:{scene:[`borderTopWeight`],kind:`node`,length:!0},borderRightWeight:{scene:[`borderRightWeight`],kind:`node`,length:!0},borderBottomWeight:{scene:[`borderBottomWeight`],kind:`node`,length:!0},borderLeftWeight:{scene:[`borderLeftWeight`],kind:`node`,length:!0},borderStrokeWeightsIndependent:{scene:[`independentStrokeWeights`],kind:`node`,absent:!1},strokeCap:{scene:[`strokeCap`],kind:`node`,absent:`NONE`},strokeJoin:{scene:[`strokeJoin`],kind:`node`,absent:`MITER`},miterLimit:{scene:[`strokeMiterLimit`],kind:`node`},dashPattern:{scene:[`dashPattern`],kind:`node`,length:!0,absent:[]},blendMode:{scene:[`blendMode`],kind:`node`,absent:`PASS_THROUGH`},effects:{scene:[`effects`],kind:`node`,absent:[]},locked:{scene:[`locked`],kind:`node`,absent:!1},layoutGrids:{scene:[`layoutGrids`],kind:`node`,absent:[]},styleIdForFill:{scene:[`fillStyleId`],kind:`node`,absent:xb},styleIdForStrokeFill:{scene:[`strokeStyleId`],kind:`node`,absent:xb},styleIdForEffect:{scene:[`effectStyleId`],kind:`node`,absent:xb},stackPrimaryAlignItems:{scene:[`primaryAxisAlign`],kind:`node`},stackCounterAlignItems:{scene:[`counterAxisAlign`],kind:`node`},stackPositioning:{scene:[`layoutPositioning`],kind:`node`},fontName:{scene:[`fontFamily`,`fontWeight`,`italic`],kind:`node`},fontVariations:{scene:[`fontVariations`],kind:`node`,absent:[]},detachOpticalSizeFromFontSize:{scene:[`opticalSizeFromFontSize`],kind:`node`,absent:!1},lineHeight:{scene:[`lineHeight`],kind:`node`,absent:{value:100,units:`PERCENT`}},letterSpacing:{scene:[`letterSpacing`],kind:`node`},paragraphSpacing:{scene:[`paragraphSpacing`],kind:`node`,length:!0,absent:0},textCase:{scene:[`textCase`],kind:`node`,absent:`ORIGINAL`},textDecoration:{scene:[`textDecoration`],kind:`node`,absent:`NONE`},textAlignHorizontal:{scene:[`textAlignHorizontal`],kind:`node`},textAlignVertical:{scene:[`textAlignVertical`],kind:`node`},textTruncation:{scene:[`textTruncation`],kind:`node`,absent:`DISABLED`},maxLines:{scene:[`maxLines`],kind:`node`}},Cb=Object.entries(Sb);new Map(Object.entries($a(Cb.flatMap(([e,t])=>t.scene.map(n=>({scene:n,raw:e,field:t}))),e=>e.scene)).map(([e,t])=>[e,t.map(({raw:e,field:t})=>({raw:e,field:t}))]));function wb(e){return Cb.flatMap(([t,n])=>n.kind===e?[t]:[])}wb(`scalar`);let Tb=Object.fromEntries(wb(`layout-distance`).map(e=>[Sb[e].scene[0],e])),Eb=[`componentKey`,`sourceLibraryKey`,`publishID`,`publishedVersion`,`sharedSymbolVersion`,`isSymbolPublishable`,`variantPropSpecs`,`componentPropDefs`,`overrideKey`],Db=new TextDecoder,$=(e,t=0,n=e.length)=>Db.decode(e.slice(t,n)),Ob=(e,t=0,n=e.length)=>e.slice(t,n).reduce((e,t)=>e+`0${t.toString(16)}`.slice(-2),``),kb=(e,t)=>new DataView(e.buffer,e.byteOffset+t),Ab=(e,t=0)=>kb(e,t).getInt16(0,!0),jb=(e,t=0)=>kb(e,t).getUint16(0,!1),Mb=(e,t=0)=>kb(e,t).getUint16(0,!0),Nb=(e,t=0)=>{let n=kb(e,t);return n.getUint16(0,!0)+(n.getUint8(2)<<16)},Pb=(e,t=0)=>kb(e,t).getInt32(0,!0),Fb=(e,t=0)=>kb(e,t).getUint32(0,!1),Ib=(e,t=0)=>kb(e,t).getUint32(0,!0),Lb=(e,t,n)=>kb(e,t).getBigUint64(0,!n),Rb={readUInt16BE:jb,readUInt16LE:Mb,readUInt32BE:Fb,readUInt32LE:Ib};function zb(e,t,n=0,r=!1){let i=`readUInt${t}${r?`BE`:`LE`}`;return Rb[i](e,n)}function Bb(e,t){if(e.length-t<8)return;let n=Fb(e,t);if(!(e.length-t<n))return{name:$(e,4+t,8+t),offset:t,size:n}}function Vb(e,t,n){let r=n;for(;r<e.length&&!(e.length-r<4);){if(Fb(e,r)<8){r+=8;continue}let n=Bb(e,r);if(!n)break;if(n.name===t)return n;r+=n.size}}let Hb={validate:e=>$(e,0,2)===`BM`,calculate:e=>({height:Math.abs(Pb(e,22)),width:Ib(e,18)})};function Ub(e,t){let n=e[t];return n===0?256:n}function Wb(e,t){let n=6+t*16;return{height:Ub(e,n+1),width:Ub(e,n)}}let Gb={validate(e){let t=Mb(e,0),n=Mb(e,4);return t!==0||n===0?!1:Mb(e,2)===1},calculate(e){let t=Mb(e,4);if(6+t*16>e.length)throw TypeError(`Invalid ICO`);let n=Wb(e,0);if(t===1)return n;let r=[];for(let n=0;n<t;n+=1)r.push(Wb(e,n));return{width:n.width,height:n.height,images:r}}},Kb={validate(e){let t=Mb(e,0),n=Mb(e,4);return t!==0||n===0?!1:Mb(e,2)===2},calculate:e=>Gb.calculate(e)},qb={validate:e=>Ib(e,0)===542327876,calculate:e=>({height:Ib(e,12),width:Ib(e,16)})},Jb=/^GIF8[79]a/,Yb={validate:e=>Jb.test($(e,0,6)),calculate:e=>({height:Mb(e,8),width:Mb(e,6)})},Xb={avif:`avif`,mif1:`heif`,msf1:`heif`,heic:`heic`,heix:`heic`,hevc:`heic`,hevx:`heic`},Zb={validate(e){if($(e,4,8)!==`ftyp`)return!1;let t=Vb(e,`ftyp`,0);return t?$(e,t.offset+8,t.offset+12)in Xb:!1},calculate(e){let t=Vb(e,`meta`,0),n=t&&Vb(e,`iprp`,t.offset+12),r=n&&Vb(e,`ipco`,n.offset+8);if(!r)throw TypeError(`Invalid HEIF, no ipco box found`);let i=$(e,8,12),a=[],o=r.offset+8;for(;o<r.offset+r.size;){let t=Vb(e,`ispe`,o);if(!t)break;if(t.size<20)throw TypeError(`Invalid HEIF`);let n=Fb(e,t.offset+12),i=Fb(e,t.offset+16),s=Vb(e,`clap`,o),c=n,l=i;s&&s.size>=16&&s.offset<r.offset+r.size&&(c=n-Fb(e,s.offset+12)),a.push({height:l,width:c});let u=t.offset+t.size;if(u<=o)throw TypeError(`Invalid HEIF`);o=u}if(a.length===0)throw TypeError(`Invalid HEIF, no sizes found`);return{width:a[0].width,height:a[0].height,type:i,...a.length>1?{images:a}:{}}}},Qb={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function $b(e,t){let n=t+4;if(n+4>e.length)throw TypeError(`Invalid ICNS`);return[$(e,t,n),Fb(e,n)]}function ex(e){let t=Qb[e];return{width:t,height:t,type:e}}let tx={validate:e=>$(e,0,4)===`icns`,calculate(e){let t=e.length,n=Fb(e,4),r=8,i=[];for(;r<n&&r<t;){let t=$b(e,r),n=t[1];if(n<8)throw TypeError(`Invalid ICNS`);let a=ex(t[0]);i.push(a),r+=n}if(i.length===0)throw TypeError(`Invalid ICNS, no sizes found`);return{width:i[0].width,height:i[0].height,...i.length>1?{images:i}:{}}}},nx={validate:e=>Fb(e,0)===4283432785,calculate:e=>({height:Fb(e,12),width:Fb(e,8)})},rx={validate(e){if($(e,4,8)!==`jP  `)return!1;let t=Vb(e,`ftyp`,0);return t?$(e,t.offset+8,t.offset+12)===`jp2 `:!1},calculate(e){let t=Vb(e,`jp2h`,0),n=t&&Vb(e,`ihdr`,t.offset+8);if(n)return{height:Fb(e,n.offset+8),width:Fb(e,n.offset+12)};throw TypeError(`Unsupported JPEG 2000 format`)}};function ix(e){return Ob(e,2,6)===`45786966`}function ax(e,t){return{height:jb(e,t),width:jb(e,t+2)}}function ox(e,t){let n=zb(e,16,14,t);for(let r=0;r<n;r++){let n=16+r*12,i=n+12;if(n>e.length)return;let a=e.slice(n,i);if(zb(a,16,0,t)===274)return zb(a,16,2,t)!==3||zb(a,32,4,t)!==1?void 0:zb(a,16,8,t)}}function sx(e,t){let n=e.slice(2,t),r=Ob(n,6,8),i=r===`4d4d`;if(i||r===`4949`)return ox(n,i)}function cx(e,t){if(t>e.length)throw TypeError(`Corrupt JPG, exceeded buffer limits`)}let lx={validate:e=>Ob(e,0,2)===`ffd8`,calculate(e){let t=e.slice(4),n,r;for(;t.length;){let e=jb(t,0);if(cx(t,e),t[e]!==255){t=t.slice(1);continue}if(ix(t)&&(n=sx(t,e)),r=t[e+1],r===192||r===193||r===194){let r=ax(t,e+5);return n?{height:r.height,orientation:n,width:r.width}:r}t=t.slice(e+2)}throw TypeError(`Invalid JPG, no size found`)}};var ux=class{input;endianness;byteOffset=2;bitOffset=0;constructor(e,t){this.input=e,this.endianness=t}getBits(e=1){let t=0,n=0;for(;n<e;){if(this.byteOffset>=this.input.length)throw Error(`Reached end of input`);let r=this.input[this.byteOffset],i=8-this.bitOffset,a=Math.min(e-n,i);if(this.endianness===`little-endian`){let e=(1<<a)-1,i=r>>this.bitOffset&e;t|=i<<n}else{let e=(r&(1<<a)-1<<8-this.bitOffset-a)>>8-this.bitOffset-a;t=t<<a|e}n+=a,this.bitOffset+=a,this.bitOffset===8&&(this.byteOffset++,this.bitOffset=0)}return t}};function dx(e,t){if(t)return 8*(1+e.getBits(5));let n=[9,13,18,30][e.getBits(2)];return 1+e.getBits(n)}function fx(e,t,n,r){return t&&n===0?8*(1+e.getBits(5)):n===0?dx(e,!1):Math.floor(r*[1,1.2,4/3,1.5,16/9,5/4,2][n-1])}let px={validate:e=>Ob(e,0,2)===`ff0a`,calculate(e){let t=new ux(e,`little-endian`),n=t.getBits(1)===1,r=dx(t,n);return{width:fx(t,n,t.getBits(3),r),height:r}}};function mx(e){let t=Vb(e,`jxlc`,0);if(t)return e.slice(t.offset+8,t.offset+t.size);let n=hx(e);if(n.length>0)return gx(n)}function hx(e){let t=[],n=0;for(;n<e.length;){let r=Vb(e,`jxlp`,n);if(!r)break;if(r.size<12)throw TypeError(`Invalid JXL`);t.push(e.slice(r.offset+12,r.offset+r.size)),n=r.offset+r.size}return t}function gx(e){let t=e.reduce((e,t)=>e+t.length,0),n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}let _x={validate:e=>{if($(e,4,8)!==`JXL `)return!1;let t=Vb(e,`ftyp`,0);return t?$(e,t.offset+8,t.offset+12)===`jxl `:!1},calculate(e){let t=mx(e);if(t)return px.calculate(t);throw TypeError(`Invalid JXL`)}},vx={validate:e=>{let t=$(e,1,7);return[`KTX 11`,`KTX 20`].includes(t)},calculate:e=>{let t=e[5]===49?`ktx`:`ktx2`,n=t===`ktx`?36:20;return{height:Ib(e,n+4),width:Ib(e,n),type:t}}},yx=`CgBI`,bx={validate(e){if($(e,1,8)===`PNG\r

`){let t=$(e,12,16);if(t===yx&&(t=$(e,28,32)),t!==`IHDR`)throw TypeError(`Invalid PNG`);return!0}return!1},calculate(e){return $(e,12,16)===yx?{height:Fb(e,36),width:Fb(e,32)}:{height:Fb(e,20),width:Fb(e,16)}}},xx={P1:`pbm/ascii`,P2:`pgm/ascii`,P3:`ppm/ascii`,P4:`pbm`,P5:`pgm`,P6:`ppm`,P7:`pam`,PF:`pfm`},Sx={default:e=>{let t=[];for(;e.length>0;){let n=e.shift();if(n[0]!==`#`){t=n.split(` `);break}}if(t.length===2)return{height:Number.parseInt(t[1],10),width:Number.parseInt(t[0],10)};throw TypeError(`Invalid PNM`)},pam:e=>{let t={};for(;e.length>0;){let n=e.shift();if(n.length>16||n.charCodeAt(0)>128)continue;let[r,i]=n.split(` `);if(r&&i&&(t[r.toLowerCase()]=Number.parseInt(i,10)),t.height&&t.width)break}if(t.height&&t.width)return{height:t.height,width:t.width};throw TypeError(`Invalid PAM`)}},Cx={validate:e=>$(e,0,2)in xx,calculate(e){let t=$(e,0,2),n=xx[t],r=$(e,3).split(/[\r\n]+/);return(Sx[n]||Sx.default)(r)}},wx={validate:e=>$(e,0,4)===`8BPS`,calculate:e=>({height:Fb(e,14),width:Fb(e,18)})},Tx=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,Ex={height:/\sheight=(['"])([^%]+?)\1/,root:Tx,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},Dx=2.54,Ox={in:96,cm:96/Dx,em:16,ex:8,m:96/Dx*100,mm:96/Dx/10,pc:96/72/12,pt:96/72,px:1},kx=RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(Ox).join(`|`)})?$`);function Ax(e){let t=kx.exec(e);if(t)return Math.round(Number(t[1])*(Ox[t[2]]||1))}function jx(e){let t=e.split(` `);return{height:Ax(t[3]),width:Ax(t[2])}}function Mx(e){let t=e.match(Ex.width),n=e.match(Ex.height),r=e.match(Ex.viewbox);return{height:n&&Ax(n[2]),viewbox:r&&jx(r[2]),width:t&&Ax(t[2])}}function Nx(e){return{height:e.height,width:e.width}}function Px(e,t){let n=t.width/t.height;return e.width?{height:Math.floor(e.width/n),width:e.width}:e.height?{height:e.height,width:Math.floor(e.height*n)}:{height:t.height,width:t.width}}let Fx={validate:e=>Tx.test($(e,0,1e3)),calculate(e){let t=$(e).match(Ex.root);if(t){let e=Mx(t[0]);if(e.width&&e.height)return Nx(e);if(e.viewbox)return Px(e,e.viewbox)}throw TypeError(`Invalid SVG`)}},Ix={validate(e){return Mb(e,0)===0&&Mb(e,4)===0},calculate(e){return{height:Mb(e,14),width:Mb(e,12)}}},Lx={TAG:{WIDTH:256,HEIGHT:257,COMPRESSION:259},TYPE:{SHORT:3,LONG:4,LONG8:16},ENTRY_SIZE:{STANDARD:12,BIG:20},COUNT_SIZE:{STANDARD:2,BIG:8}};function Rx(e,{isBigEndian:t,isBigTiff:n}){let r=n?Number(Lb(e,8,t)):zb(e,32,4,t),i=n?Lx.COUNT_SIZE.BIG:Lx.COUNT_SIZE.STANDARD;return e.slice(r+i)}function zx(e,t,n,r){switch(t){case Lx.TYPE.SHORT:return zb(e,16,n,r);case Lx.TYPE.LONG:return zb(e,32,n,r);case Lx.TYPE.LONG8:{let t=Number(Lb(e,n,r));if(t>2**53-1)throw TypeError(`Value too large`);return t}default:return 0}}function Bx(e,t){let n=t?Lx.ENTRY_SIZE.BIG:Lx.ENTRY_SIZE.STANDARD;if(e.length>n)return e.slice(n)}function Vx(e,{isBigEndian:t,isBigTiff:n}){let r={},i=e;for(;i?.length;){let e=zb(i,16,0,t),a=zb(i,16,2,t),o=n?Number(Lb(i,4,t)):zb(i,32,4,t);if(e===0)break;o===1&&(a===Lx.TYPE.SHORT||a===Lx.TYPE.LONG||n&&a===Lx.TYPE.LONG8)&&(r[e]=zx(i,a,n?12:8,t)),i=Bx(i,n)}return r}function Hx(e){let t=$(e,0,2),n=zb(e,16,2,t===`MM`);return{isBigEndian:t===`MM`,isBigTiff:n===43}}function Ux(e,t){let n=zb(e,16,4,t),r=zb(e,16,6,t);if(n!==8||r!==0)throw TypeError(`Invalid BigTIFF header`)}let Wx=new Set([`49492a00`,`4d4d002a`,`49492b00`,`4d4d002b`]),Gx={validate:e=>{let t=Ob(e,0,4);return Wx.has(t)},calculate(e){let t=Hx(e);t.isBigTiff&&Ux(e,t.isBigEndian);let n=Vx(Rx(e,t),t),r={height:n[Lx.TAG.HEIGHT],width:n[Lx.TAG.WIDTH],type:t.isBigTiff?`bigtiff`:`tiff`};if(n[Lx.TAG.COMPRESSION]&&(r.compression=n[Lx.TAG.COMPRESSION]),!r.width||!r.height)throw TypeError(`Invalid Tiff. Missing tags`);return r}};function Kx(e){return{height:1+Nb(e,7),width:1+Nb(e,4)}}function qx(e){return{height:1+((e[4]&15)<<10|e[3]<<2|(e[2]&192)>>6),width:1+((e[2]&63)<<8|e[1])}}function Jx(e){return{height:Ab(e,8)&16383,width:Ab(e,6)&16383}}let Yx=new Map([[`bmp`,Hb],[`cur`,Kb],[`dds`,qb],[`gif`,Yb],[`heif`,Zb],[`icns`,tx],[`ico`,Gb],[`j2c`,nx],[`jp2`,rx],[`jpg`,lx],[`jxl`,_x],[`jxl-stream`,px],[`ktx`,vx],[`png`,bx],[`pnm`,Cx],[`psd`,wx],[`svg`,Fx],[`tga`,Ix],[`tiff`,Gx],[`webp`,{validate(e){let t=$(e,0,4)===`RIFF`,n=$(e,8,12)===`WEBP`,r=$(e,12,15)===`VP8`;return t&&n&&r},calculate(e){let t=$(e,12,16),n=e.slice(20,30);if(t===`VP8X`){let e=n[0],t=(e&192)==0,r=(e&1)==0;if(t&&r)return Kx(n);throw TypeError(`Invalid WebP`)}if(t===`VP8 `&&n[0]!==47)return Jx(n);let r=Ob(n,3,6);if(t===`VP8L`&&r!==`9d012a`)return qx(n);throw TypeError(`Invalid WebP`)}}]]),Xx=Array.from(Yx.keys()),Zx=new Map([[0,`heif`],[56,`psd`],[66,`bmp`],[68,`dds`],[71,`gif`],[73,`tiff`],[77,`tiff`],[82,`webp`],[105,`icns`],[137,`png`],[255,`jpg`]]);function Qx(e){let t=e[0],n=Zx.get(t);return n&&Yx.get(n)?.validate(e)?n:Xx.find(t=>Yx.get(t)?.validate(e))}let $x={disabledTypes:[]};function eS(e){let t=Qx(e);if(t!==void 0){if($x.disabledTypes.indexOf(t)>-1)throw TypeError(`disabled file type: ${t}`);let n=Yx.get(t)?.calculate(e);if(n!==void 0){if(n.type=n.type??t,n.images&&n.images.length>1){let e=n.images.reduce((e,t)=>t.width*t.height>e.width*e.height?t:e,n.images[0]);n.width=e.width,n.height=e.height}return n}}throw TypeError(`unsupported file type: ${t}`)}let tS={png:`image/png`,jpg:`image/jpeg`,gif:`image/gif`,webp:`image/webp`};function nS(e){let t;try{t=eS(e)}catch{return null}let n=t.type===void 0?void 0:tS[t.type];return n?{type:n,width:t.width,height:t.height}:null}let rS=Ut({add:`ADDITION`,subtract:`SUBTRACTION`,multiply:`MULTIPLY`,divide:`DIVIDE`,negate:`NEGATE`,equal:`EQUALS`,notEqual:`NOT_EQUAL`,less:`LESS_THAN`,lessOrEqual:`LESS_THAN_OR_EQUAL`,greater:`GREATER_THAN`,greaterOrEqual:`GREATER_THAN_OR_EQUAL`,and:`AND`,or:`OR`,not:`NOT`,text:`STRINGIFY`,truthy:`IS_TRUTHY`,if:`TERNARY`});function iS(e){return e===void 0?void 0:rS[e]}let{token:aS,modeConditions:oS,modeAttribute:sS}=lm;function cS(e){return Tp(e,[aS,oS,sS])}function lS(e){return Jt(e)?void 0:e}function uS(e,t){return t!==void 0&&Math.fround(e)===Math.fround(t)}function dS(e,t){let n=c_(e,aS)??{},r=Object.entries(n.expressions??{}).filter(([e,n])=>{if(!Object.hasOwn(t,e))return!1;let r=t[e];return typeof r!=`number`||uS(r,n.resolved)});return{unit:n.unit,expressions:lS(Object.fromEntries(r))}}function fS(e){return c_(e,oS)??{}}function pS(e){return c_(e,sS)}let mS=e=>Jp.includes(e),hS=e=>Yp.includes(e);function gS(e){let t=(e.codeSyntax?.entries??[]).flatMap(({platform:e,value:t})=>hS(e)&&t?[[e,t]]:[]);return t.length>0?Object.fromEntries(t):void 0}function _S(e){let t=e.variableScopes?.filter(mS),n=cS(m_(e)),r={description:e.description??e.symbolDescription??``,hiddenFromPublishing:e.isPublishable===!1,scopes:t?.length?t:void 0,codeSyntax:gS(e),pluginData:n.length>0?n:void 0};return typeof e.key==`string`&&(r.key=e.key),typeof e.version==`string`&&(r.version=e.version),r}let vS=fc({sessionID:G(V(),Js(),Qs(0)),localID:G(V(),Js(),Qs(0))}),yS=fc({guid:U(vS),assetRef:U(fc({key:W(),version:U(W())}))}),bS=uc(()=>fc({dataType:U(W()),resolvedDataType:U(W()),value:U(fc({alias:U(yS),mapValue:U(fc({values:U(sc(fc({key:U(W()),guidKey:U(vS),value:U(bS)})))})),colorArrayValue:U(fc({colors:U(sc(bS))})),fontStyleValue:U(fc({asString:U(bS),asFloat:U(bS),asVariations:U(bS)})),boolValue:U(cc()),floatValue:U(V()),textValue:U(W()),colorValue:U(fc({r:V(),g:V(),b:V(),a:V()})),expressionValue:U(fc({expressionFunction:W(),expressionArguments:U(sc(bS))}))}))}));function xS(e,t,n=e=>e){let r=0,i=0,a=e=>{let o=e.value;if(!o)return;o.alias&&=t(o.alias,r++)??o.alias;let s=[...o.expressionValue?.expressionArguments??[],...o.colorArrayValue?.colors??[],o.fontStyleValue?.asString,o.fontStyleValue?.asFloat,o.fontStyleValue?.asVariations];for(let e of o.mapValue?.values??[])e.guidKey&&=n(e.guidKey,i++),s.push(e.value);for(let e of s)e&&a(e)};a(e)}function SS(e){return e.layoutScale??1}function CS(e){return e_(e.mainComponentId===null?1:SS(e))}function wS(e,t,n){for(let r of Ug(n)){if(r.variableData&&![`ALIAS`,`EXPRESSION`].includes(r.variableData.dataType??``))continue;let n=r.variableField&&Bg[r.variableField];n&&(Sn(e.instanceOverrides,e.id,t.id,hn(n),t.boundVariables[n]??null),Sn(e.instanceOverrides,e.id,t.id,`boundVariables`))}}function TS(e,t){ES(e,t,nb(t))}function ES(e,t,n=1){for(let r of Ug(t)){let t=r.variableField&&Bg[r.variableField];if(!t)continue;e.variableBindingScales??={};let i=Fg(r.variableData),a=i?.reference?i.multiplier:1,o=t===`opacity`?.01:1,s=r.variableData?.value?.expressionValue&&t!==`opacity`&&t!==`rotation`;e.variableBindingScales[t]=a*o/(s?n:1)}}function DS(e,t,n){let r=[],i=(e,a)=>{if(n(e)){r.push({match:e,top:a});return}if(!t.isInstance(e))for(let n of t.childrenOf(e))i(n,a)};for(let t of e)i(t,t);return r.length===1?{count:1,...r[0]}:{count:r.length}}function*OS(e,t){yield e;for(let n of t(e))yield*OS(n,t)}function kS(e){return e.guid?X(e.guid):void 0}function AS(e){return e.parentIndex?.guid?X(e.parentIndex.guid):void 0}function jS(e,t){let n=e.parentIndex?.position??``,r=t.parentIndex?.position??``;return n===r?0:n<r?-1:1}function MS(e){let t=new Map,n=new Map;for(let r of e){let e=kS(r);if(e===void 0)continue;if(t.has(e))throw Error(`Duplicate source node ${e}`);t.set(e,r);let i=AS(r);if(i===void 0)continue;let a=n.get(i);a?a.push(r):n.set(i,[r])}for(let e of n.values())e.sort(jS);return{sources:t,children:n}}function NS(e,t){return e?.sessionID===t.sessionID&&e.localID===t.localID}function PS(e){if(!e||typeof e!=`object`||!(`sessionID`in e)||!(`localID`in e)||typeof e.sessionID!=`number`||typeof e.localID!=`number`)return;let t={sessionID:e.sessionID,localID:e.localID};return Hm(t)?void 0:t}function FS(e,t){return NS(e.guid,t)||NS(PS(e.overrideKey),t)}function IS({children:e}){return{childrenOf:t=>e.get(kS(t)??``)??[],isInstance:e=>e.symbolData?.symbolID!==void 0}}function LS(e,t,n){let{count:r,match:i,top:a}=DS(e.children.get(t)??[],IS(e),e=>FS(e,n));return{count:r,record:i,topChild:a}}function RS(e,t,n){let r=X(t);for(let[t,i]of n.entries()){let a=e.sources.get(r);if(!a)return!1;if(t===0&&FS(a,i))continue;let{record:o}=LS(e,r,i);if(!o)return!1;if(t===n.length-1)return!0;if(!o.symbolData?.symbolID)return!1;r=X(o.symbolData.symbolID)}return!1}function zS(e,t){let n=t,r=new Set;for(;!r.has(n);){r.add(n);let t=e.sources.get(n);if(t?.type!==`INSTANCE`||!t.symbolData?.symbolID)return n;n=X(t.symbolData.symbolID)}return n}function BS(e){let t=e.value;if(t&&(t.boolValue!==void 0||t.textValue!==void 0||t.guidValue!==void 0||t.textDataValue!==void 0))return t;let n=e.varValue?.value;if(n?.symbolIdValue?.guid)return{guidValue:n.symbolIdValue.guid};if(n?.boolValue!==void 0)return{boolValue:n.boolValue};if(n?.textValue!==void 0)return{textValue:n.textValue};if(n?.textDataValue!==void 0)return{textDataValue:n.textDataValue};if(n?.slotContentIdValue)return{slotContentIdValue:n.slotContentIdValue}}function VS(e,t,n){let r=structuredClone([...e]);for(let e of t){let t=BS(e);if(!e.defID||!t)continue;let i={id:e.defID,value:structuredClone(t),origin:`assignment`,...n===void 0?{}:{rank:n}},a=r.findIndex(e=>NS(e.id,i.id));if(a===-1){r.push(i);continue}let o=r[a];r[a]={...i,superseded:[...o.superseded??[],structuredClone(o.value)]}}return r}function HS(e){return(e.componentPropDefs??[]).flatMap(e=>e.id&&e.initialValue?[{id:e.id,value:structuredClone(e.initialValue),origin:`default`}]:[])}function US(e,t,n){let r=Pg(e),i=e.componentPropRefs;for(let e of i??[]){if(!e.defID||e.isDeleted)continue;let i=t.find(t=>NS(t.id,e.defID));if(!i)continue;let{value:a,origin:o}=i,s=e=>{n?.({definitionId:structuredClone(i.id),field:e,origin:o},i)};if(e.componentPropNodeField===`VISIBLE`&&a.boolValue!==void 0)r.visible=a.boolValue,s(`visible`);else if(e.componentPropNodeField===`TEXT_DATA`){let e=typeof a.textValue==`string`?a.textValue:a.textValue?.characters??a.textDataValue?.characters;e!==void 0&&(e!==r.textData?.characters&&(r.derivedTextData=void 0),r.textData={...r.textData,characters:e},s(`textData`))}else e.componentPropNodeField===`OVERRIDDEN_SYMBOL_ID`&&a.guidValue?(r.symbolData={...r.symbolData,symbolID:a.guidValue},s(`symbolData`)):e.componentPropNodeField===`SLOT_CONTENT_ID`&&a.slotContentIdValue&&s(`slotContent`)}return r}function WS(e,t){let n=e.properties;t.derivedTextData&&(n.derivedTextData=structuredClone(t.derivedTextData)),t.fontSize!==void 0&&(n.fontSize=t.fontSize),t.lineHeight!==void 0&&(n.lineHeight=structuredClone(t.lineHeight)),t.letterSpacing!==void 0&&(n.letterSpacing=structuredClone(t.letterSpacing)),t.size&&(n.size=structuredClone(t.size),e.derivedSize=structuredClone(t.size)),t.transform&&(n.transform=structuredClone(t.transform));let{fillGeometry:r,strokeGeometry:i,vectorData:a}=t;r&&(n.fillGeometry=structuredClone(r)),i&&(n.strokeGeometry=structuredClone(i)),a&&(n.vectorData=structuredClone(a))}function GS(e,t){let n=[],r=[];e.type===`INSTANCE`&&e.symbolData?.symbolID&&e.variableModeBySetMap&&r.push({path:[e.symbolData.symbolID],props:{variableModeBySetMap:e.variableModeBySetMap}});for(let i of eb(e)){let{guidPath:e,overriddenSymbolID:a,componentPropAssignments:o,...s}=i,c=e?.guids??[];if(!c.length)continue;let l=o??[];(a||l.length)&&n.push({owner:t,declaredPath:c,path:c,swap:a,assignments:l}),Object.keys(s).length&&r.push({path:c,props:s})}return{structural:n,claims:r}}let KS={childrenOf:e=>e.children,isInstance:e=>e.mainComponentId!==null};function qS(e){return OS(e,e=>e.children)}var JS=class extends Error{diagnostic;constructor(e,t){super(t),this.diagnostic=e,this.name=`InstancePathError`}},YS=class extends Error{count;constructor(e,t){super(`Expected one instance-path target for ${X(t)}; found ${e}`),this.count=e,this.name=`SegmentError`}};function XS(e,t,n,r){return new JS({ownerId:e,mainComponentId:t,path:structuredClone(n),reason:r.count===0?`missing-target`:`ambiguous-target`},`Override declared by ${e}, path [${n.map(X).join(`, `)}]: ${r.message}`)}function ZS(e,t){let n=X(t),{count:r,match:i}=DS(e.children,KS,e=>NS(e.overrideKey,t)||e.sourceId===n);if(!i)throw new YS(r,t);return i}function QS(e,t){return NS(e.properties.symbolData?.symbolID,t)||NS(e.mainComponentOverrideKey,t)||NS(e.sourceComponentOverrideKey,t)||NS(e.sourceComponentId,t)}function $S(e,t){let n=e;for(let[r,i]of t.entries())r===0&&QS(e,i)||(n=ZS(n,i));return n}function eC(e,t,n){if(!t?.properties.size||!n.size)return;let r=nb(n);nC(e,{x:t.properties.size.x*r,y:t.properties.size.y*r},n.size)}function tC(e,t,n,r,i){let a=r-n;if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:t*i}}return i===`MAX`?{position:e+a,size:t}:i===`CENTER`?{position:e+a/2,size:t}:i===`STRETCH`?{position:e,size:Math.max(0,t+a)}:{position:e,size:t}}function nC(e,t,n){if(t.x===n.x&&t.y===n.y)return;let r=e.properties.stackMode&&e.properties.stackMode!==`NONE`;for(let i of e.children){let e=i.properties;if(r&&e.stackPositioning!==`ABSOLUTE`||!e.size)continue;let a=e.transform??{m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},o=tC(a.m02,e.size.x,t.x,n.x,e.horizontalConstraint),s=tC(a.m12,e.size.y,t.y,n.y,e.verticalConstraint),c={x:o.size,y:s.size};nC(i,e.size,c),e.size=c,e.transform={...a,m02:o.position,m12:s.position}}}let rC=(e,t)=>({x:e.x*t,y:e.y*t});function iC(e,t){e.fontSize!==void 0&&(e.fontSize*=t);for(let n of[`lineHeight`,`letterSpacing`]){let r=e[n];r?.units===`PIXELS`&&(e[n]={...r,value:r.value*t})}if(e.textData?.styleOverrideTable){e.textData=structuredClone(e.textData);for(let n of e.textData.styleOverrideTable??[])iC(n,t)}if(!e.derivedTextData)return;let n=structuredClone(e.derivedTextData);n.layoutSize&&=rC(n.layoutSize,t),n.truncatedHeight!==void 0&&(n.truncatedHeight*=t);for(let e of n.glyphs??[])e.position=rC(e.position,t),e.fontSize*=t;for(let e of n.baselines??[])e.position=rC(e.position,t),e.width*=t,e.lineHeight*=t,e.lineAscent*=t,e.lineY!==void 0&&(e.lineY*=t);e.derivedTextData=n}let aC=[`stackPadding`,...Object.values(Tb)],oC=[`strokeWeight`,`cornerRadius`,`rectangleTopLeftCornerRadius`,`rectangleTopRightCornerRadius`,`rectangleBottomLeftCornerRadius`,`rectangleBottomRightCornerRadius`],sC=[`fontSize`,`lineHeight`,`letterSpacing`,`textData`,`derivedTextData`],cC=[...aC,...oC,...sC,`dashPattern`,`effects`,`size`,`transform`];function lC(e,t){for(let n of oC){let r=e[n];typeof r==`number`&&(e[n]=r*t)}e.dashPattern&&=e.dashPattern.map(e=>e*t),e.effects&&=e.effects.map(e=>({...e,offset:e.offset?{x:e.offset.x*t,y:e.offset.y*t}:e.offset,radius:typeof e.radius==`number`?e.radius*t:e.radius,spread:typeof e.spread==`number`?e.spread*t:e.spread}))}function uC(e,t){let n=nb(t);if(!Number.isFinite(n)||n<=0)throw Error(`Invalid instance uniform scale`);if(n!==1){for(let t of qS(e)){t.layoutScale=(t.layoutScale??1)*n;for(let e of Object.keys(t.variableBindingScales??{}))t.variableBindingScales&&e!==`opacity`&&e!==`rotation`&&(t.variableBindingScales[e]*=n);let e=t.properties;iC(e,n),lC(e,n);for(let t of aC){let r=e[t];typeof r==`number`&&(e[t]=r*n)}e.size&&={x:e.size.x*n,y:e.size.y*n},e.transform&&={...e.transform,m02:e.transform.m02*n,m12:e.transform.m12*n},t.derivedSize&&={x:t.derivedSize.x*n,y:t.derivedSize.y*n}}for(let n of cC){let r=t[n];r!==void 0&&Object.assign(e.properties,{[n]:structuredClone(r)})}}}let dC=[`fontSize`,`fontName`,`fontVariations`,`detachOpticalSizeFromFontSize`,`letterSpacing`,`lineHeight`,`textCase`,`textAlignHorizontal`,`textAlignVertical`,`textAutoResize`,`styleIdForText`,`fontVariantCommonLigatures`,`fontVariantContextualLigatures`];function fC(e,t){if(`derivedTextData`in t)return;let n=t.textData;(n!==void 0&&Object.entries(n).some(([t,n])=>!en(n,e.textData?.[t]))||dC.some(n=>n in t&&!en(e[n],t[n])))&&(e.derivedTextData=void 0)}function pC(e){return{instance:(t,n={})=>mC(e,t,`INSTANCE`,n),component:(t,n={})=>mC(e,t,`SYMBOL`,n),page:(t,n={})=>mC(e,t,`CANVAS`,n)}}function mC(e,t,n,r){let{sources:i,children:a}=e,o=new Set,s=new WeakMap,c=new WeakMap,l=e=>{let t=i.get(e.sourceId);if(t?.type===`INSTANCE`)return e.properties.name;let n=t?.parentIndex?.guid,r=n?i.get(X(n)):void 0;return r?.isStateGroup===!0?r.name:e.properties.name},u=e=>{if(!e)return[];let t=PS(i.get(X(e))?.overrideKey);return t?[e,t]:[e]},d=({boundary:t})=>t?.replaced.some(n=>RS(e,n,t.path))??!1,f=(e,t)=>{if(t.count===0&&d(e))return;let n=XS(e.owner.id,e.owner.mainComponentId,e.declaredPath,t);if(t.count!==0||!r.onUnresolvedAssignment)throw n;e.owner.unresolved.push({...n.diagnostic,assignments:structuredClone(e.assignments)})},p=(t,n)=>{let r=new Map;for(let i of n){let[n]=i.path,{count:a,topChild:o}=LS(e,t,n);if(!o?.guid){f(i,new YS(a,n));continue}let s=X(o.guid),c=FS(o,n),l={...i,path:c?i.path.slice(1):i.path},u=r.get(s);u?u.push(l):r.set(s,[l])}return r},m=(e,t,n)=>{let r=e.symbolData?.symbolID;return t?[...r?[r]:[],...n].filter(e=>!NS(e,t)):[]},h=(e,t,n,r,i)=>{let a=t.symbolData?.symbolID,o=m(e,a,n),s=[...u(e.symbolData?.symbolID),...u(a)],c=e=>s.some(t=>NS(t,e)),l=[{assignments:t.componentPropAssignments??[],rank:i}],d=[],f=e=>{if(!a)throw Error(`Swap target is not an instance`);NS(a,e)||o.push(a),a=e;for(let e of u(a))c(e)||s.push(e)};for(let e of r){let t=e.path.length===0||c(e.path[0]);if(!t||e.path.length>1){d.push(t?{...e,path:e.path.slice(1)}:e);continue}e.swap&&f(e.swap),e.assignments.length&&l.push({assignments:e.assignments,rank:e.owner.rank})}return{effective:a,replaced:o,groups:l,descendant:d}},g=(e,t,n,r)=>{let i=s.get(n),a=Object.fromEntries(Object.entries(r.props).filter(([e])=>{let n=i?.get(e);return n===void 0||n>=t}));Object.keys(a).length!==0&&(ES(n,a),fC(n.properties,a),Object.assign(n.properties,Pg(a),Wg(n.properties,a)),`name`in a&&(n.hasOwnName=!0),e.propertyClaims.push({declaredBy:e.sourceId,path:structuredClone(r.path),properties:structuredClone(a)}))},_=(t,n)=>{let r=t;for(let[t,i]of n.entries()){let a=n.slice(t);if((c.get(r)??[]).some(t=>RS(e,t,a)))return!0;if(!(t===0&&QS(r,i)))try{r=ZS(r,i)}catch(e){if(!(e instanceof YS))throw e;return!1}}return!1},v=(e,t)=>{try{return $S(e,t)}catch(n){if(!(n instanceof YS))throw n;let i=XS(e.sourceId,e.mainComponentId,t,n);if(i.diagnostic.reason===`missing-target`&&_(e,t))return;if(!r.onUnresolvedProperty)throw i;r.onUnresolvedProperty(i.diagnostic);return}},y=(e,t)=>{if(!r.derivedBounds)return;let n=t.derivedSymbolData;for(let t of n??[]){let n=t.guidPath?.guids;if(!n?.length)continue;let r=v(e,n);!r||r===e||WS(r,t)}},b=(e,t)=>{let n=[],a=new Map,o=[],s,c=US(e,t,(e,t)=>{if(n.push(e),t.origin===`assignment`&&t.rank!==void 0&&a.set(e.field,t.rank),e.field===`symbolData`)for(let e of t.superseded??[])e.guidValue&&o.push(e.guidValue);if(e.field===`slotContent`){let e=ib(t.value);s=e?X(e):void 0}});if(s&&!i.has(s)){if(!r.onMissingSlotContent)throw Error(`Missing slot content ${s}`);r.onMissingSlotContent({slotId:kS(e)??``,slotContentId:s}),s=void 0}return{source:c,claims:n,bound:a,superseded:o,slotContent:s}},x=(e,t,n,a)=>{if(o.has(e))throw Error(`Cyclic component expansion at ${e}`);r.onProgress?.();let l=i.get(e);if(!l)throw Error(`Missing source node ${e}`);let u=b(l,t),{source:d}=u;o.add(e);try{let i={id:e,rank:a,mainComponentId:null,unresolved:[]},o=GS(d,i),f=[...o.structural,...n].sort((e,t)=>t.owner.rank-e.owner.rank),p=h(l,d,u.superseded,f,a),m;m=p.effective?S(i,{...p,effective:p.effective},a):u.slotContent?w(u.slotContent,p.descendant,a):C(e,d,t,p.groups,p.descendant,a);let g=T(e,l,d,p,m,u.claims);u.slotContent&&(g.slotContentId=u.slotContent),s.set(g,u.bound),m.base&&p.replaced.length&&c.set(g,p.replaced),TS(g,d);let _=m.dangling?o.claims.filter(({path:e})=>e.length===1&&QS(g,e[0])):o.claims;E(g,m.base,d,_,a,!m.dangling);for(let e of i.unresolved)r.onUnresolvedAssignment?.({...e,mainComponentId:g.mainComponentId});return g}finally{o.delete(e)}},S=(t,{effective:n,replaced:a,groups:o,descendant:s},c)=>{let l=X(n);if(!i.has(l)){if(!r.onMissingComponent)throw Error(`Missing source node ${l}`);return r.onMissingComponent({ownerId:t.id,componentId:l}),{base:null,children:[],dangling:!0}}t.mainComponentId=zS(e,l);let u=s.map(e=>a.length?{...e,boundary:{replaced:a,path:e.path}}:e),d=o.filter(e=>e.assignments.length).map(e=>({owner:{...t,rank:e.rank},declaredPath:[],path:[],assignments:e.assignments})),f=x(X(n),[],[...d,...u],c+1);return{base:f,children:f.children}},C=(e,t,n,r,i,o)=>{let s=t.type===`SYMBOL`?r.reduce((e,t)=>VS(e,t.assignments,t.rank),HS(t)):n,c=p(e,i);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let t=X(e.guid);return x(t,s,c.get(t)??[],o+1)})}},w=(e,t,n)=>{let r=p(e,t);return{base:null,children:(a.get(e)??[]).map(e=>{if(!e.guid)throw Error(`Indexed child has no GUID`);let t=X(e.guid);return x(t,[],r.get(t)??[],n+1)})}},ee=e=>{let t=ib(e.varValue?.value);return!!t&&!i.has(X(t))},te=e=>e?{mainComponentId:e.mainComponentId??e.sourceId,mainComponentOverrideKey:e.mainComponentOverrideKey??e.overrideKey,propertyClaims:structuredClone(e.propertyClaims),variableBindingScales:{...e.variableBindingScales},hasOwnName:i.get(e.sourceId)?.type===`INSTANCE`&&e.hasOwnName}:{mainComponentId:null,mainComponentOverrideKey:void 0,propertyClaims:[],variableBindingScales:{},hasOwnName:!1},T=(e,t,n,{effective:r,replaced:i,groups:a},{base:o,children:s},c)=>{let d=t.symbolData?.symbolID,[,f]=u(d),p=o&&r&&!NS(d,r)&&n.type===`INSTANCE`?Gt(n,[`fillPaints`,`styleIdForFill`]):n,m={sourceId:e,sourceComponentId:d,sourceComponentOverrideKey:f,...te(o),bindingClaims:c,overrideKey:PS(n.overrideKey),properties:{...o&&Gt(o.properties,Eb),...p,...r&&n.symbolData?{symbolData:{...n.symbolData,symbolID:r}}:{},...Wg(o?.properties??{},n)},children:s};return n.type===`INSTANCE`&&(m.properties.componentPropAssignments=a.flatMap(e=>e.assignments).filter(e=>!ee(e))),o&&i.length&&!m.hasOwnName&&(m.properties.name=o.defaultInstanceName??o.properties.name),m.defaultInstanceName=l(m),m},E=(e,t,n,r,i,a)=>{for(let t of r){let n=v(e,t.path);n&&g(e,i,n,t)}uC(e,n),eC(e,t,n),n.type===`INSTANCE`&&n.size&&(e.properties.size=structuredClone(n.size),e.derivedSize=structuredClone(n.size)),a&&y(e,n)};if(i.get(t)?.type!==n){let e={INSTANCE:`an instance`,SYMBOL:`a component`,CANVAS:`a page`}[n];throw Error(`Expected ${e} source`)}return x(t,[],[],0)}function hC(e,t){let n=jn();return n.orderKey=e.properties.parentIndex?.position??null,n.fig.layout=t.source?.fig.layout??null,n.fig.uniformScaleFactor=$y(e.properties)?.uniformScaleFactor??null,n}let gC=new Set([`childIds`,`source`,`instanceOverrides`]);function _C(e){return e instanceof Map||e instanceof Set?!0:typeof e!=`object`||!e||ArrayBuffer.isView(e)?!1:Object.values(e).some(_C)}function vC(e,t){for(let n of Object.keys(e)){if(gC.has(n))continue;let r=Reflect.get(e,n),i=Reflect.get(t,n);r===i||typeof r!=`object`||!r||_C(r)||!en(r,i)||Reflect.set(e,n,i)}let n=e.source.fig.layout,r=t.source.fig.layout;n&&n!==r&&en(n,r)&&(e.source.fig.layout=r)}function yC(e){if(e===`DOCUMENT`||e===`VARIABLE`)throw Error(`Cannot materialize ${e} as an instance descendant`)}function bC(e,t,n,r,i={}){let{blobs:a=[],sourceChildren:o=new Map,existingNodes:s=new Map,recordId:c}=i;if(!e.getNode(t))throw Error(`Missing materialization parent`);let l=new Map,u=t=>{if(l.has(t))throw Error(`Repeated or cyclic instance occurrence`);let n=zv(t.properties,a,`occurrence`);n.nodeType===`TEXT`&&t.derivedSize&&(n.derivedLayout={width:t.derivedSize.x,height:t.derivedSize.y}),yC(n.nodeType);let i=s.get(t);if(i&&(e.getNode(i.id)!==i||i.type!==n.nodeType))throw Error(`Invalid preallocated occurrence ${t.sourceId}`);l.set(t,n);let c=o.get(t);if(c&&e.getNode(c)?.type!==n.nodeType)throw Error(`Invalid source child for ${t.sourceId}`);if(t.mainComponentId!==null){let n=r.get(t.mainComponentId);if(!n||e.getNode(n)?.type!==`COMPONENT`)throw Error(`Missing materialized component ${t.mainComponentId}`)}for(let e of t.children)u(e)};u(n);let d=new Map(s),f=(e,t,n)=>{if(n)for(let r of e.bindingClaims)r.origin===`assignment`&&r.field===`visible`&&Sn(n.instanceOverrides,n.id,t.id,`visible`,t.visible)},p=(t,n,r,i,a)=>{let o=a?void 0:c?.(t);return o?e.createNodeWithId(o,n,r,i):e.createNode(n,r,i)},m=(t,i,a)=>{let c=l.get(t);if(!c)throw Error(`Missing prepared occurrence`);let{nodeType:u,...h}=c;yC(u);let g=hC(t,c),_={...h,variableAssignmentScales:CS(t),componentScale:SS(t),variableBindingScales:t_(h.boundVariables??{},t.layoutScale??1,t.variableBindingScales),componentId:t.mainComponentId===null?o.get(t)??null:r.get(t.mainComponentId),source:g},v=s.get(t);if(v&&v.parentId!==i)throw Error(`Preallocated occurrence has wrong parent ${t.sourceId}`);let y=v??p(t,u,i,_,a);v&&e.updateNode(v.id,_);let b=e.getNode(o.get(t)??``);if(b&&vC(y,b),d.set(t,y),v&&t!==n&&y.type===`COMPONENT`)return y;f(t,y,a);let x=o.get(t);return a&&t.mainComponentId!==null&&x&&(Sn(a.instanceOverrides,a.id,y.id,`sourceComponentId`,x),e.getNode(x)?.componentId!==y.componentId&&Sn(a.instanceOverrides,a.id,y.id,`componentId`,y.componentId)),y.childIds=t.children.map(e=>m(e,y.id,y.type===`INSTANCE`?y:a).id),y},h=m(n,t);return CC(d),{root:h,nodes:d}}function xC(e,t,n){return e.kind===`text`?typeof t==`object`&&!!t&&`characters`in t:e.kind!==`text-style`||!!n.textStyleId}function SC(e,t,n,r){if(!Array.isArray(r))return;let i=!1;for(let[a,o]of r.entries()){if(!o.colorVar?.value?.alias)continue;let r=hn(`${n}/${a}/color`);Sn(e.instanceOverrides,e.id,t.id,r,t.boundVariables[`${n}/${a}/color`]??null),i=!0}i&&Sn(e.instanceOverrides,e.id,t.id,`boundVariables`)}function CC(e){for(let[t,n]of e)if(n.type===`INSTANCE`)for(let r of t.propertyClaims){let i=$S(t,r.path),a=e.get(i);if(!a)throw Error(`Unmaterialized property claim target`);for(let e of Object.keys(Sb)){if(!(e in r.properties))continue;let t=Sb[e];if(xC(t,r.properties[e],a)){for(let e of t.scene){let t=a[e];Sn(n.instanceOverrides,n.id,a.id,e,structuredClone(t))}t.kind===`paint`&&SC(n,a,t.scene[0],r.properties[e])}}wS(n,a,r.properties)}}function wC(e,t,n){if(e.mainComponentId!==null){let r=n.get(e.mainComponentId);if(!r)throw Error(`Missing component occurrence ${e.mainComponentId}`);let i=new Map(t.getChildren(r.materialized.root.id).map((e,t)=>[e.id,t])),a=new Map(r.occurrence.children.map(e=>[e.sourceId,e]));e.children=e.children.filter(e=>{let t=a.get(e.sourceId),n=t&&r.materialized.nodes.get(t);return!!n&&i.has(n.id)}).toSorted((e,t)=>{let n=a.get(e.sourceId),o=a.get(t.sourceId),s=n&&r.materialized.nodes.get(n),c=o&&r.materialized.nodes.get(o);return(s?i.get(s.id)??0:0)-(c?i.get(c.id)??0:0)})}for(let r of e.children)wC(r,t,n)}function*TC(e,t){let n=new Map;for(let e of t.children){if(n.has(e.sourceId))throw Error(`Ambiguous source child ${e.sourceId}`);n.set(e.sourceId,e)}for(let t of e.children){let e=n.get(t.sourceId);if(!e)throw Error(`Missing source child ${t.sourceId}`);yield[t,e]}}function EC(e,t,n){let r=[],i=(e,n,a,o)=>{for(let[s,c]of TC(e,n)){let e=t.nodes.get(s),n=o.get(c);if(!e||!n)throw Error(`Missing materialized correspondence for ${s.sourceId}`);r.push({owner:a,target:e,source:n}),!s.slotContentId&&s.mainComponentId===c.mainComponentId&&i(s,c,a,o)}};for(let r of qS(e)){if(r.mainComponentId===null)continue;let e=n.get(r.mainComponentId),a=t.nodes.get(r);if(!e||!a)throw Error(`Missing component ${r.mainComponentId}`);i(r,e.occurrence,a,e.materialized.nodes)}for(let{owner:e,target:t,source:n}of r)Sn(e.instanceOverrides,e.id,t.id,`sourceComponentId`,n.id),t.type===`INSTANCE`&&t.componentId!==n.componentId&&Sn(e.instanceOverrides,e.id,t.id,`componentId`,t.componentId)}function DC(e,t){let n=new Map,r=(e,t,o)=>{for(let[s,c]of TC(e,t)){let e=o.get(c);if(!e)throw Error(`Unmaterialized source child ${c.sourceId}`);if(n.set(s,e.id),s.mainComponentId!==null)i(s);else if(s.slotContentId)for(let e of s.children)a(e);else r(s,c,o)}},i=e=>{if(e.mainComponentId===null)throw Error(`Expected instance occurrence`);let n=t.get(e.mainComponentId);if(!n)throw Error(`Missing component occurrence ${e.mainComponentId}`);r(e,n.occurrence,n.materialized.nodes)},a=e=>{if(e.mainComponentId!==null)i(e);else for(let t of e.children)a(t)};return a(e),n}function OC(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function kC(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}return i.length<2?null:{schemaDeflated:i[0],dataRaw:Mt(i[1]),version:n}}function AC(e){return typeof e==`object`&&!!e&&!Array.isArray(e)&&!(e instanceof Uint8Array)}function jC(e,t,n){let r=kC(e);if(!r)throw Error(`Invalid fig-kiwi container`);let i=Eh(kh(new fh(R(r.schemaDeflated))),n);if(t)try{let e=rg(i.schema,r.dataRaw);e.length>0&&t(e)}catch(e){console.warn(`Failed to scan FIG page manifest; continuing with full decode:`,e)}if(!i.decodeMessage)throw Error(`The fig-kiwi schema has no Message`);let a=i.decodeMessage(r.dataRaw),o=a.nodeChanges;if(!Array.isArray(o)||o.length===0)throw Error(`No nodes found in .fig file`);let s=o;return OC(s),{nodeChanges:s,blobs:(Array.isArray(a.blobs)?a.blobs:[]).map(e=>{let t=AC(e)?e.bytes:void 0;return t instanceof Uint8Array?t:new Uint8Array(Object.values(t??{}))}),figKiwiVersion:r.version,figSchemaDeflated:r.schemaDeflated}}function MC(e){return nS(e)?.type===`image/png`}function NC(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function PC(e){let t=e[`canvas.fig`]??e.canvas;if(t)return t;let n=null;for(let[t,r]of Object.entries(e))!r||NC(t)||(!n||r.byteLength>n.byteLength)&&(n=r);return n}function FC(e){return e===`canvas.fig`||e===`canvas`}function IC(e,t,n){let r=jt(e);if(!r)return null;let i=jC(e,t,n),a=r.slice(2).find(MC)??null;return{...i,images:[],thumbnailPNG:a,metaJSON:null}}function LC(e,t,n){let r=new Uint8Array(e),i=IC(r,t,n);if(i)return i;let a=PC(Oe(r,{filter:({name:e})=>FC(e)})),o,s;if(a)s=jC(a,t,n),o=Oe(r,{filter:({name:e})=>!FC(e)});else{if(o=Oe(r),a=PC(o),!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(o).join(`, `)}`);s=jC(a,t,n)}let c=o[`meta.json`],l=Object.entries(o).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...s,images:l,thumbnailPNG:o[`thumbnail.png`]??null,metaJSON:Object.hasOwn(o,`meta.json`)?new TextDecoder().decode(c):null}}function RC(e){let t=kC(e);if(!t)throw Error(`Invalid fig-kiwi container`);return{schemaDeflated:t.schemaDeflated,dataRaw:t.dataRaw,figKiwiVersion:t.version}}function zC(e){let t=new Uint8Array(e),n=jt(t);if(n){let e=n.slice(2).find(MC)??null;return{...RC(t),images:[],thumbnailPNG:e,metaJSON:null}}let r=PC(Oe(t,{filter:({name:e})=>FC(e)})),i=Oe(t,r?{filter:({name:e})=>!FC(e)}:void 0),a=r??PC(i);if(!a)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(i).join(`, `)}`);let o=Object.entries(i).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...RC(a),images:o,thumbnailPNG:i[`thumbnail.png`]??null,metaJSON:Object.hasOwn(i,`meta.json`)?new TextDecoder().decode(i[`meta.json`]):null}}function BC(e){let t={"canvas.fig":[Nt(e.schemaDeflated,e.kiwiData,e.figKiwiVersion,e.compress),{level:0}],"thumbnail.png":[e.thumbnailPNG,{level:0}],"meta.json":new TextEncoder().encode(e.metaJSON)};for(let n of e.images??[])t[n.name]=[n.data,{level:0}];return De(t)}function VC(e){return(e??[]).map(X).join(`/`)}function HC(e,t){let n=new Set(t.removed.map(VC)),r=e.filter(e=>!n.has(VC(e.guidPath?.guids))),i=new Map(r.map((e,t)=>[VC(e.guidPath?.guids),t]));for(let e of t.entries){let t=VC(e.path),n=i.get(t),a={...n===void 0?{guidPath:{guids:e.path}}:r[n],...structuredClone(e.set)};for(let t of e.unset)Reflect.deleteProperty(a,t);n===void 0?(i.set(t,r.length),r.push(a)):r[n]=a}return r}function UC(e,t){let n={...e,...structuredClone(t.set)};for(let e of t.unset)Reflect.deleteProperty(n,e);let r=$y(n);return t.symbolOverrides&&r&&(n.symbolData={...r,symbolOverrides:HC(r.symbolOverrides??[],t.symbolOverrides)}),t.derivedSymbolData&&(n.derivedSymbolData=HC(tb(n),t.derivedSymbolData)),n}let WC=new Set([`VARIABLE`,`VARIABLE_SET`]);function GC(e){return e?X(e):void 0}function KC(e){return`sessionID`in e&&`localID`in e&&typeof e.sessionID==`number`&&typeof e.localID==`number`}function qC(e){let t=0,n=e=>{if(!(!e||typeof e!=`object`||ArrayBuffer.isView(e))){if(Array.isArray(e)){for(let t of e)n(t);return}KC(e)&&(e.sessionID===0||e.sessionID===1)&&(t=Math.max(t,e.localID));for(let t of Object.values(e))n(t)}};return n(e),t}function JC(e){return{recordIds:e.records.flatMap(e=>e.guid?[X(e.guid)]:[]),blobCount:e.blobCount,nextLocalId:qC(e.records)+1,imageHashes:[...e.imageHashes],documentId:GC(e.records.find(e=>e.type===`DOCUMENT`)?.guid)??null}}function YC(e){return{id:GC(e.guid),parent:GC(e.parentIndex?.guid),type:e.type,parentIndex:e.parentIndex,value:e}}let XC=e=>!!e.type&&WC.has(e.type);function ZC(e,t,n){let r=new Map;for(let t of e){if(!t.id||!t.parent)continue;let e=r.get(t.parent)??[];e.push(t.id),r.set(t.parent,e)}let i=new Set,a=t.map(X);for(let e=a.pop();e!==void 0;e=a.pop())if(!(i.has(e)||n.has(e))){i.add(e);for(let t of r.get(e)??[])a.push(t)}return i}function QC(e,t){let n=[],r=new Set,i=new Map,a=n=>!!n&&!r.has(n)&&e.has(n)&&!t.has(n),o=e=>{if(a(e.parent)){i.set(e.parent,[...i.get(e.parent)??[],e]);return}if(n.push(e),!e.id)return;r.add(e.id);let t=i.get(e.id)??[];i.delete(e.id);for(let e of t)o(e)};return{emit:o,emitted:e=>r.has(e),finish(){for(let e of i.values())for(let t of e)n.push(t);return n}}}function $C(e,t){let n=new Map;for(let r of e){let e=r.parentIndex?.position,i=XC(r)&&!(r.id&&t.has(r.id));!r.parent||!e||i||e>(n.get(r.parent)??``)&&n.set(r.parent,e)}return n}function ew(e,t){let n=$C(e,t);for(let r of e){if(!XC(r)||r.value instanceof Uint8Array)continue;let e=r.value,i=r.id?t.get(r.id):void 0;if(i)e.parentIndex=structuredClone(i);else if(r.parent&&e.parentIndex){let t=Qy(n.get(r.parent)??null,null);e.parentIndex={...e.parentIndex,position:t},n.set(r.parent,t)}}}function tw(e,t,n,r){let i=new Map((t.fields??[]).map(e=>[X(e.guid),e])),a=[...i].flatMap(([e,t])=>`parentIndex`in t.set?[e]:[]),o=ZC(e,t.removed,new Set([...n.keys(),...a]));for(let t of e){if(!t.id||n.has(t.id)||o.has(t.id))continue;let e=i.get(t.id);e&&n.set(t.id,YC(UC(r(t.value),e)))}return o}function nw(e,t,n){let r=new Map;for(let e of t.records){let t=YC(e);t.id&&r.set(t.id,t)}let i=tw(e,t,r,n),a=new Set(e.flatMap(e=>e.id??[])),o=new Map,s=QC(r,a);for(let n of e){if(n.id&&i.has(n.id))continue;let e=n.id?r.get(n.id):void 0;if(t.replaceVariables&&XC(n)){n.id&&o.set(n.id,n.parentIndex),e&&s.emit(e);continue}s.emit(e??n)}for(let e of r.values())e.id&&!s.emitted(e.id)&&!a.has(e.id)&&s.emit(e);let c=s.finish();return t.replaceVariables&&ew(c,o),c}function rw(e,t,n,r){let{schema:i}=e,a={id:void 0,parent:void 0,type:void 0,parentIndex:void 0};for(let e=n.readVarUint();e!==0;e=n.readVarUint()){let o=t.byId[e];if(!o)throw Error(`Attempted to parse invalid message`);let s=o.isArray?``:o.name;if(s===`guid`)a.guid=i.read(o,n),a.id=GC(a.guid);else if(s===`parentIndex`){let e=i.read(o,n);a.parentIndex=e,a.parent=GC(e?.guid)}else s===`type`?a.type=o.definition?.names[n.readVarUint()]:s===`symbolData`&&r?a.symbolData=i.read(o,n):i.skip(o,n)}return a}function iw(e,t,n=!1){let{schema:r}=e,i=r.definition(`Message`).byId,a=new fh(t),o={parts:[],records:[],blobs:[],hasBlobs:!1};for(;;){let s=a.offset,c=a.readVarUint();if(c===0)break;let l=i[c];if(!l)throw Error(`Attempted to parse invalid message`);let u=l.name===`nodeChanges`&&l.isArray,d=l.name===`blobs`&&l.isArray;if(!u&&!d){r.skip(l,a),o.parts.push({kind:`bytes`,bytes:t.subarray(s,a.offset)});continue}let f=l.definition;if(!f)throw Error(`Kiwi ${l.name} holds no messages`);let p=f.name,m={...l,isArray:!1};for(let i=a.readVarUint();i>0;i--){let i=a.offset;if(u){let r=rw(e,f,a,n);o.records.push({...r,value:t.subarray(i,a.offset)})}else r.skip(m,a),o.blobs.push(t.subarray(i,a.offset))}o.hasBlobs||=d,o.parts.push({kind:u?`records`:`blobs`,fieldId:c,type:p})}if(o.records.length===0)throw Error(`No nodes found in .fig file`);return o}function aw(e){return Eh(kh(new fh(R(e))))}function ow(e){let t=new fh;return t.writeVarUint(e),t.toUint8Array().slice()}function sw(e,t,n){let r=new fh;return e.schema.encode(e.schema.definition(t),n,r),r.toUint8Array().slice()}function cw(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n}function lw(e,t,n){let r=aw(e),{schema:i}=r,a=iw(r,t),o=a.parts.find(e=>e.kind===`records`),s=nw(a.records,n,e=>{if(o?.kind!==`records`)throw Error(`The archive has no records`);return i.decode(i.definition(o.type),new fh(e))}),c=e=>[...a.blobs,...n.blobs.map(t=>sw(r,e,{bytes:t}))],l=[],u=(e,t)=>{l.push(ow(e),ow(t.length));for(let e of t)l.push(e)};for(let e of a.parts)e.kind===`bytes`?l.push(e.bytes):e.kind===`blobs`?u(e.fieldId,c(e.type)):u(e.fieldId,s.map(t=>t.value instanceof Uint8Array?t.value:sw(r,e.type,t.value)));if(!a.hasBlobs&&n.blobs.length>0){let e=i.definition(`Message`).fields.find(e=>e.name===`blobs`);if(!e?.definition)throw Error(`The archive schema has no blobs`);u(e.id,c(e.definition.name))}return l.push(ow(0)),cw(l)}function uw(e,t,n,r){let i=zC(e),a=lw(i.schemaDeflated,i.dataRaw,t),o=new Set(i.images.map(([e])=>e));return BC({schemaDeflated:i.schemaDeflated,kiwiData:a,thumbnailPNG:n.thumbnailPNG,metaJSON:n.metaJSON,images:[...i.images.map(([e,t])=>({name:`images/${e}`,data:t})),...n.images.filter(e=>!o.has(e.name.replace(/^images\//,``)))],figKiwiVersion:i.figKiwiVersion,compress:r})}function dw(e,t){let n=new Map,r=new Map,i=(e,t)=>{if(!e)return;let n=r.get(e)??[];n.push(t),r.set(e,n)};for(let t of e){let e=GC(t.guid);if(e&&(n.set(e,t),t.type===`INSTANCE`)){i(GC($y(t)?.symbolID),e);for(let n of eb(t))i(GC(n.overriddenSymbolID),e)}}let a=(e,t)=>{let r=new Set;for(let i=n.get(e);i;){let e=GC(i.guid);if(!e||r.has(e))return;if(r.add(e),i.type===t)return e;let a=GC(i.parentIndex?.guid);i=a?n.get(a):void 0}},o=new Set,s=new Set,c=[...t];for(let e=c.pop();e!==void 0;e=c.pop())if(!s.has(e)){s.add(e);for(let t of r.get(e)??[]){let e=a(t,`CANVAS`);e&&o.add(e);let n=a(t,`SYMBOL`);n&&c.push(n)}}return[...o]}function fw(e,t){let n=zC(e);return dw(iw(aw(n.schemaDeflated),n.dataRaw,!0).records.map(e=>({guid:e.guid,parentIndex:e.parentIndex,type:e.type,symbolData:e.symbolData})),t)}function pw(e,t,n,r=new Map){let i=new Map;for(let e of n)e.type===`INSTANCE`&&wn(e.instanceOverrides,(t,n)=>{if(n!==`width`&&n!==`height`)return;let r=t||e.id,a=i.get(r)??new Set;a.add(n),i.set(r,a)});for(let a of n){let n=t_(a.boundVariables,r.get(a.id)??1,a.variableBindingScales);e.updateNode(a.id,{variableBindingScales:n});for(let r in a.boundVariables){if((r===`width`||r===`height`)&&t.has(a.id)||i.get(a.id)?.has(r))continue;let o=a.boundVariables[r],s=e.variables.get(o);if(!s)continue;let c=e.getNodeVariableModeId(a.id,s.collectionId),l=e.resolveVariable(o,c);if(typeof l!=`number`)continue;let u=n_(r,r===`opacity`?l:l*(n[r]??1));u&&e.updateNode(a.id,u)}}}function mw(e,t){for(let n of t){let t=sl(e,n);(t.fills||t.strokes)&&e.updateNode(n.id,t)}}function hw(e,t){for(let n of t){if(n.boundVariables.visible){let{visible:t}=al(e,n);t!==void 0&&e.updateNode(n.id,{visible:t})}if(n.type!==`TEXT`)continue;let t=n.boundVariables.text;if(!t)continue;let r=Ns(e.resolveVariableForNode(n.id,t));r===void 0||r===n.text||e.updateNode(n.id,{text:r})}}function gw(e){let t=[],n=(r,i)=>{let a=e.materialized.nodes.get(r);if(!a)throw Error(`Missing checkpoint occurrence`);t.push({path:i,nodeId:a.id,mainComponentId:r.mainComponentId});let o=new Set;for(let e of r.children){if(o.has(e.sourceId))throw Error(`Ambiguous checkpoint child ${e.sourceId}`);o.add(e.sourceId),n(e,[...i,e.sourceId])}};return n(e.occurrence,[]),{rootId:e.materialized.root.id,nodes:t}}function _w(e,t,n){let r=e.getNode(n.rootId);if(!r)throw Error(`Missing resumed component ${n.rootId}`);let i=new Map,a=(t,n)=>{i.set(n.join(`/`),t);for(let r of e.getChildren(t.id)){let e=r.source.id;e&&a(r,[...n,e])}};a(r,[]);let o=new Map;for(let r of n.nodes){let n=t;for(let e of r.path){let t=n.children.filter(t=>t.sourceId===e);if(t.length!==1)throw Error(`Invalid checkpoint source path ${e}`);n=t[0]}let a=e.getNode(r.nodeId)??i.get(r.path.join(`/`));if(a){if(o.has(n)||n.mainComponentId!==r.mainComponentId)throw Error(`Invalid checkpoint occurrence ${r.nodeId}`);o.set(n,a)}}let s=e=>{if(o.has(e))for(let t of e.children)s(t)};if(s(t),o.get(t)!==r)throw Error(`Invalid checkpoint root`);return{occurrence:t,materialized:{root:r,nodes:o}}}function vw(e,t,n,r){let i=r??new Map;if(!r)for(let t of e.getAllNodes())for(let e of t.componentPropertyDefinitions)i.set(e.id,e.type);for(let e of n){let n;e.componentPropertyDefinitions.forEach((r,a)=>{if(i.set(r.id,r.type),r.type!==`INSTANCE_SWAP`)return;let o=t.get(r.defaultValue);o&&(n??=[...e.componentPropertyDefinitions],n[a]={...r,defaultValue:o})}),n&&(e.componentPropertyDefinitions=n)}for(let e of n){let n;for(let r in e.componentPropertyAssignments){if(i.get(r)!==`INSTANCE_SWAP`)continue;let a=t.get(e.componentPropertyAssignments[r]);a&&(n??={...e.componentPropertyAssignments},n[r]=a)}n&&(e.componentPropertyAssignments=n)}}function yw(e,t){for(let n of t){if(n.type!==`COMPONENT`||!n.parentId||n.variantPropSpecs.length===0)continue;let t=e.getNode(n.parentId);if(t?.type!==`COMPONENT_SET`)continue;let r=new Map(t.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of n.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(n.id,{componentPropertyValues:i})}}function bw(e,t,n){let{graph:r}=e,i=new Set(r.nodes.keys()),a=new Map,o=new Set([r.rootId,...r.getPages(!0).map(e=>e.id)]);for(let n of[...t.contentIds,...t.ancestorIds]){let t=e.sources.get(n);t&&o.add(t)}for(let e of o){let t=r.getNode(e);t&&a.set(t,structuredClone(t))}let s=new Map(e.sources),c=new Map(e.components),l=new Map(e.componentIds),u=new Set(e.savedSizeNodes),d=e.nextImportedId;r.withBufferedEvents(()=>{try{n()}catch(t){for(let[e,t]of r.nodes)i.has(e)||(t.componentId&&r.instanceIndex.get(t.componentId)?.delete(e),r.nodes.delete(e));for(let[e,t]of a)if(e.componentId&&r.instanceIndex.get(e.componentId)?.delete(e.id),Object.assign(e,t),e.type===`INSTANCE`&&e.componentId){let t=r.instanceIndex.get(e.componentId)??new Set;t.add(e.id),r.instanceIndex.set(e.componentId,t)}e.sources=s,e.components=c,e.componentIds=l,e.savedSizeNodes=u,e.nextImportedId=d;for(let[e,t]of r.instanceIndex)t.size||r.instanceIndex.delete(e);throw r.clearAbsPosCache(),t}})}function xw(e,t){let n=e.getNode(e.rootId);if(!n||!t)return;n.source.format=`fig`,n.pluginData=t.pluginData?.map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))??[],n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight;let r=c_(t,lm.enabledLibraries);for(let t of r??[])e.enabledLibraries.set(t.libraryId,t)}let Sw=new Set([`VISIBLE`,`TEXT_DATA`,`OVERRIDDEN_SYMBOL_ID`,`SLOT_CONTENT_ID`]);function Cw(e){for(let t of e.componentPropDefs??[]){let e=t.varValue?.value;t.initialValue||!e||(t.initialValue=e.symbolIdValue?.guid?{guidValue:structuredClone(e.symbolIdValue.guid)}:structuredClone(e))}}function ww(e){Cw(e);let t=e.parameterConsumptionMap,n=structuredClone(e.componentPropRefs??[]);for(let e of t?.entries??[]){let t=e.variableData?.value?.propRefValue?.defId;if(e.variableData?.dataType!==`PROP_REF`||!t||!e.variableField||!Sw.has(e.variableField))continue;let r={defID:structuredClone(t),componentPropNodeField:e.variableField},i=n.findIndex(t=>t.componentPropNodeField===e.variableField);i===-1?n.push(r):n[i]=r}n.length&&(e.componentPropRefs=n)}function Tw(e){let t=new Map;for(let n of e){if(!n.guid||typeof n.key!=`string`)continue;let e=t.get(n.key)??new Map,r=typeof n.version==`string`?n.version:``,i=X(n.guid);if(e.has(r)&&e.get(r)!==i)throw Error(`Ambiguous resource ${n.key} version ${r}`);e.set(r,i),t.set(n.key,e)}return e=>{if(e?.guid)return X(e.guid);let n=e?.assetRef;if(!n)return;let r=t.get(n.key);return n.version?r?.get(n.version):r?.has(``)?r.get(``):r?.size===1?r.values().next().value:void 0}}let Ew=[`styleIdForFill`,`styleIdForStrokeFill`,`styleIdForText`,`styleIdForEffect`,`styleIdForGrid`];function Dw(e,t,n){let r=new Set;return rb(e,e=>{for(let i of[e,...e.textData?.styleOverrideTable??[]])for(let e of Ew){let a=i[e];if(!a)continue;let o=a.guid?X(a.guid):t(a);o&&n.has(o)&&r.add(o)}}),r}function Ow(e,t,n){for(let r of eb(e))n(r,[...t,...r.guidPath?.guids??[]]);for(let r of e.derivedSymbolData??[])n(r,[...t,...r.guidPath?.guids??[]])}function kw(e){return(t,n,r)=>{let i=(t,i,a)=>{if(!t?.assetRef||t.guid)return;let o=e(t);if(!o){r?.({sourceId:n,field:i,key:t.assetRef.key,path:structuredClone(a)});return}t.guid=Um(o)},a=(e,t)=>{ww(e);for(let n of Ug(e))Rg(n.variableData,e=>i(e,n.variableField??`unknown`,t));for(let[n,r]of[[`fillPaints`,e.fillPaints],[`strokePaints`,e.strokePaints]])for(let e of r??[])i(e.colorVar?.value?.alias,n,t);let n=e.variableModeBySetMap;for(let e of n?.entries??[])i(e.variableSetID,`variableModeBySetMap`,t);for(let n of Ew)i(e[n],n,t);for(let n of e.textData?.styleOverrideTable??[])a(n,t);Ow(e,t,a)};a(t,[])}}function Aw(e){let t=kw(Tw(e));return(e,n)=>t(e,e.guid?X(e.guid):`unknown`,n)}function jw(e,t,n,r=()=>!1){let i=n,a=new Map,o=e=>{if(e.mainComponentId===null){e.properties.type===`SYMBOL`&&a.set(e.sourceId,e);for(let t of e.children)o(t)}};for(let t of e)o(t);let s=[],c=new Set,l=new Set,u=e=>{let t=new Set,n=e;for(;n;){if(t.has(n))throw Error(`Cyclic source hierarchy at ${n}`);t.add(n);let e=i.get(n);if(!e)throw Error(`Missing source ancestor ${n}`);if(e.type===`CANVAS`)return n;n=AS(e)}throw Error(`Component ${e} has no source page`)},d=e=>{for(let t of qS(e))t.mainComponentId!==null&&f(t.mainComponentId),t.properties.type===`SYMBOL`&&f(t.sourceId)},f=e=>{if(c.has(e))return;if(r(e)){c.add(e);return}if(l.has(e))throw Error(`Cyclic component dependency ${e}`);l.add(e);let n=i.get(e);if(!n?.parentIndex?.guid)throw Error(`Missing component parent ${e}`);let o=u(e),f=a.get(e)??t(e);for(let e of f.children)d(e);s.push({sourceId:e,parentSourceId:X(n.parentIndex.guid),pageSourceId:o,occurrence:f}),c.add(e),l.delete(e)};for(let t of e)d(t);return s}var Mw=class{source;decode;constructor(e,t){this.source=e,this.decode=t}get size(){return this.source.size}get(e){let t=this.source.get(e);return t===void 0?void 0:this.decode(t)}has(e){return this.source.has(e)}keys(){return this.source.keys()}*values(){for(let e of this.source.values())yield this.decode(e)}*entries(){for(let[e,t]of this.source)yield[e,this.decode(t)]}forEach(e){for(let[t,n]of this.entries())e(n,t,this)}[Symbol.iterator](){return this.entries()}};function Nw(e,t,n){let r=new Set,i=e=>{e&&r.add(X(e))},a=e=>{i(e.value?.guidValue),i(e.varValue?.value?.symbolIdValue?.guid)};return rb(e,(e,o)=>{i($y(e)?.symbolID),i(o?.overriddenSymbolID);for(let i of e.componentPropDefs??[])if(i.type===`INSTANCE_SWAP`&&a({value:i.initialValue,varValue:i.varValue}),i.type===`INSTANCE_SWAP`||i.type===`SLOT`)for(let e of i.preferredValues?.instanceSwapValues??[]){if(!e.key)continue;let i=t?.({assetRef:{key:e.key,version:e.version}});if(!i){if(!n)throw Error(`Unresolved preferred component ${e.key}`);n(e.key);continue}r.add(i)}for(let t of e.componentPropAssignments??[])a(t)}),r}function Pw(e){let t=new Set;return rb(e,e=>{for(let n of e.componentPropAssignments??[]){let e=ib(n.varValue?.value);e&&t.add(X(e))}}),t}function Fw(e,t){if(t){for(let n of t)if(e.get(n)?.type!==`CANVAS`)throw Error(`Unknown page ${n}`)}}function Iw(e,t,n,r){for(let i of t){let t=new Set([i]),a=e.get(i),o=a?AS(a):void 0;for(;o!==void 0;){if(t.has(o))throw Error(`Cyclic source hierarchy at ${o}`);if(t.add(o),n.has(o))break;if(n.add(o),a=e.get(o),!a){r.add(o);break}o=AS(a)}}}function Lw(e,t,n,r=e=>e){let i=Tw(e),{sources:a,children:o}=n,s=new Set(a.keys()),c=new Set,l=new Set,u=new Set,d=new Set,f=new Set,p=new Set,m=new Set,h=new Set;Fw(a,t);let g=e.filter(e=>e.type===`CANVAS`&&(t?t.has(kS(e)??``):e.internalOnly!==!0)).flatMap(e=>kS(e)??[]);for(;g.length;){let e=g.pop();if(!e||c.has(e))continue;let t=a.get(e);if(!t){p.has(e)?f.add(e):m.has(e)?h.add(e):d.add(e);continue}c.add(e);let n=r(t),l=Nw(n,i,e=>u.add(e));for(let e of l)p.add(e);let _=Pw(n);for(let e of _)m.add(e);g.push(...(o.get(e)??[]).flatMap(e=>kS(e)??[]),...Dw(n,i,s),...l,..._)}return Iw(a,c,l,d),{contentIds:c,ancestorIds:l,missingIds:d,missingComponentIds:f,missingSlotContentIds:h,externalPreferredKeys:u}}function Rw(e,t){let n=e.componentPropDefs;n&&(e.componentPropDefs=n.map(e=>{if(!e.parentPropDefId)return e;let n=X(e.parentPropDefId);for(let r of t){let t=(r.componentPropDefs??[]).filter(e=>e.id&&X(e.id)===n);if(t.length>1)throw Error(`Ambiguous parent property ${n}`);if(t.length===1)return{...structuredClone(t[0]),...e}}throw Error(`Missing parent property ${n}`)}))}let zw=[`guid`,`parentIndex`,`type`,`phase`,`name`,`internalOnly`,`key`,`version`,`styleType`,`overrideKey`];function Bw(e,t){let n=LC(e,void 0,{NodeChange:zw});return{figKiwiVersion:n.figKiwiVersion,figSchemaDeflated:n.figSchemaDeflated,reader:Kw(Ww(n.nodeChanges),t),blobs:n.blobs,images:n.images,records:n.nodeChanges}}function Vw(e){let t=new Map;for(let n of e)if(n.guid&&typeof n.key==`string`){let e=X(n.guid);t.set(n.key,e),typeof n.version==`string`&&t.set(`${n.key}@${n.version}`,e)}return t}function Hw(e){return e.type===`VARIABLE`||e.type===`VARIABLE_SET`}function Uw(e){let t=bh(e);if(!t)throw Error(`Record header has no archive bytes to read it whole`);return OC([t]),t}function Ww(e){let t=e.filter(e=>e.phase!==`REMOVED`),n=MS(t),r=Aw(t),i=Vw(t),a=[];for(let e of t)r(Uw(e),e=>a.push(e));let o=new Map,s=new Mw(n.sources,e=>e.styleType?u(e):e),c=new Set,l=(e,t)=>{if(c.has(e))throw Error(`Cyclic component-property ancestry`);c.add(e);try{let a=Uw(e);r(a);let o=[];for(let r=n.sources.get(AS(e)??``);r;r=n.sources.get(AS(r)??``))o.push(t(r));Rw(a,o);let c=e=>{k_(s,e,i);for(let t of eb(e))c(t)};return c(a),a}finally{c.delete(e)}},u=e=>{let t=o.get(e);return t||(t=l(e,u),o.set(e,t)),t};return{records:t,index:n,bindingDiagnostics:a,scope:()=>{let e=new Map,t=n=>{let r=o.get(n)??e.get(n);if(r)return r;let i=l(n,t);return e.set(n,i),i};return t},shared:u,interpreterIndex:()=>{let{sources:e,children:n}=MS(t.filter(e=>!Hw(e))),r=new WeakMap;return{sources:new Mw(e,u),children:new Mw(n,e=>{let t=r.get(e);return t||(t=e.map(u),r.set(e,t)),t})}}}}function Gw(e){let t;return{records:e,get sourceInterpreter(){return t??=pC(e.interpreterIndex()),t}}}function Kw(e,t){let n=`sourceInterpreter`in e?e:Gw(e),{records:r,index:i,bindingDiagnostics:a}=n.records,o=r,s=n.records.scope(),c=o.filter(Hw),l=Lw(o,t,i,s);if(l.missingIds.size)throw Error(`Missing reachable sources: ${[...l.missingIds].join(`, `)}`);let u=o.filter(e=>!Hw(e)&&(e.type===`CANVAS`||e.guid&&(l.contentIds.has(X(e.guid))||l.ancestorIds.has(X(e.guid))))).map(s),d=n.sourceInterpreter,f=pC(MS(u)),p=o.filter(e=>e.type===`CANVAS`).toSorted(jS).map(e=>{if(!e.guid)throw Error(`Page has no GUID`);return{id:X(e.guid),name:e.name??``,position:e.parentIndex?.position??null,internalOnly:e.internalOnly===!0}}),m=new Set(p.map(e=>e.id)),h;return{selectPages(e){return Kw(n,e)},get sourceRecords(){return structuredClone(o.map(s))},get recordIds(){return h??=new Set(o.flatMap(e=>e.guid?[X(e.guid)]:[])),h},get documentRecord(){let e=o.find(e=>e.type===`DOCUMENT`);return structuredClone(e&&s(e))},dependencyClosure:l,pages:p,get resources(){return structuredClone(c.map(s))},bindingDiagnostics:a,readPage(e,t={}){if(!m.has(e))throw Error(`Unknown page ${e}`);let n=f.page(e,t);return n.children=n.children.filter(e=>e.properties.isSlotContent!==!0),n},planComponents(e,t={},n){return jw(e,e=>d.component(e,t),i.sources,n)},readComponent:d.component}}var qw=class extends Error{name=`UnsupportedExpressionError`};function Jw(e,t,n=0){if(n>64)throw Error(`Variable expression is too deeply nested`);let{value:r,dataType:i,resolvedDataType:a}=e;if(!r)throw Error(`Missing variable value`);let o=i??a;if(o===`ALIAS`){let e=t(r.alias);if(!e)throw Error(`Unresolved variable alias`);return{aliasId:e}}if(o===`COLOR`&&r.colorValue)return structuredClone(r.colorValue);if(o===`BOOLEAN`&&r.boolValue!==void 0)return r.boolValue;if(o===`STRING`&&r.textValue!==void 0)return r.textValue;if(o===`FLOAT`&&r.floatValue!==void 0)return r.floatValue;if(o===`EXPRESSION`)return Yw(e,t,n);throw Error(`Unsupported variable value ${o}`)}function Yw(e,t,n){let r=e.value;if(!r)throw Error(`Missing expression`);if(r.expressionValue?.expressionFunction===`COMPOSE_COLOR`)return Qw(e,t);let i=r.expressionValue,a=iS(i?.expressionFunction);if(!a)throw i?.expressionFunction?new qw(`Unsupported variable expression ${i.expressionFunction}`):Error(`Missing variable expression function`);let o={operator:a,operands:(i?.expressionArguments??[]).map(e=>{if((e.dataType??e.resolvedDataType)===`ALIAS`&&!t(e.value?.alias))throw new qw(`${a} uses a variable this document lacks`);return Zw(Jw(e,t,n+1))})},s=bc(mc([`FLOAT`,`BOOLEAN`,`STRING`,`COLOR`]),e.resolvedDataType),c=bc(ym,{expression:`FORMULA`,type:s.success?s.output:Xw(o),value:o});if(!c.success)throw new qw(`Invalid ${a} expression`);return c.output}function Xw(e){try{return Jc(e)}catch{return}}function Zw(e){if(typeof e!=`object`||!(`expression`in e))return e;if(e.expression===`FORMULA`)return e.value;throw new qw(`Unsupported nested ${e.expression} expression`)}function Qw(e,t){let n=e.value?.expressionValue,r=n?.expressionArguments;if(n?.expressionFunction!==`COMPOSE_COLOR`||r?.length!==2)throw new qw(`Unsupported variable expression ${n?.expressionFunction}`);if(r.some(e=>e.dataType===`EXPRESSION`))throw new qw(`Unsupported nested color expression`);let i=Jw(r[0],t),a=Jw(r[1],t);return yc(el,{expression:`COMPOSE_COLOR`,color:i,opacity:a})}function $w(e,t,n,r){let i=e.variableDataValues?.entries??[];if(!i.length)throw Error(`Missing mode values`);let a={};for(let o of i){let i=X(o.modeID);if(!t.includes(i))throw Error(`Unknown mode`);let s;try{s=Jw(o.variableData,n)}catch(t){if(!(t instanceof qw)||!r)throw t;let a=structuredClone(o.variableData),c=[],l=[];xS(a,e=>{c.push(n(e)??null)},e=>(l.push(X(e)),e)),s={expression:`UNSUPPORTED`,function:a.value?.expressionValue?.expressionFunction??``,value:{...a},references:c,modes:l},r({sourceId:e.guid?X(e.guid):``,modeId:i,reason:`unsupported-variable-expression`})}if(typeof s==`object`&&`expression`in s&&s.expression===`FORMULA`&&s.type!==e.variableResolvedType)throw Error(`Expression result type does not match ${e.variableResolvedType}`);a[i]=s}return a}function eT(e,t,n,r){let i=(e,t)=>{if(!n)throw Error(`Unsupported document resource ${e.type}: ${t}`);n(structuredClone(e))};for(let n of t){if(n.type!==`VARIABLE_SET`)continue;let t=n.variableSetModes??[];if(!n.guid||t.length===0){i(n,`missing collection identity or modes`);continue}let r=cS(m_(n)),a=fS(n);e.addCollection({id:X(n.guid),name:n.name??`Variables`,modes:t.map(e=>{let t=X(e.id);return{modeId:t,name:e.name,condition:a[t],...e.sortPosition?{sortPosition:e.sortPosition}:{}}}),defaultModeId:X(t[0].id),variableIds:[],modeAttribute:pS(n),pluginData:r.length>0?r:void 0,key:typeof n.key==`string`?n.key:void 0,version:typeof n.version==`string`?n.version:void 0})}tT(e,t,i,r)}function tT(e,t,n,r){let i=Tw(t);for(let a of t){if(a.type!==`VARIABLE`)continue;let t=a.variableResolvedType,o=a.variableSetID?i(a.variableSetID):a.parentIndex?.guid&&X(a.parentIndex.guid),s=o&&e.variableCollections.get(o);if(!a.guid||!s||!o||t!==`COLOR`&&t!==`BOOLEAN`&&t!==`STRING`&&t!==`FLOAT`){n(a,`unresolved collection, identity or type`);continue}let c={};try{Object.assign(c,$w(a,s.modes.map(e=>e.modeId),i,r))}catch(e){n(a,e instanceof Error?e.message:`Invalid mode value`);continue}let l=_S(a);e.addVariable({id:X(a.guid),name:a.name??`Variable`,type:t,collectionId:o,valuesByMode:c,...l,...dS(a,c)})}}function nT(e,t,n){let{graph:r,checkpoint:i}=e,a=new Map;for(let[e,o]of i.components)a.set(e,_w(r,t.readComponent(e,n),o));return{graph:r,nextImportedId:i.nextImportedId??uT(r),recordIds:t.recordIds,components:a,sources:new Map(i.sources),componentIds:new Map(i.componentIds),savedSizeNodes:new Set(i.savedSizeNodeIds)}}function rT(e,t={},n){let r=Bw(e,new Set),i={...t,images:t.images??new Map(r.images)},a=n?nT(n,r.reader,i):fT(r.reader,r.blobs,i);a.graph.figKiwiVersion=r.figKiwiVersion,a.graph.figSchemaDeflated=r.figSchemaDeflated;let o=new Set(n?.checkpoint.loadedPageIds),s=iT(a.graph,n!==void 0),c;return{checkpoint(){return structuredClone({nextImportedId:a.nextImportedId,sources:[...a.sources],componentIds:[...a.componentIds],savedSizeNodeIds:[...a.savedSizeNodes],loadedPageIds:[...o],components:[...a.components].map(([e,t])=>[e,gw(t)])})},graph:a.graph,graphPageId(e){return r.reader.pages.some(t=>t.id===e)?a.sources.get(e):void 0},pages:r.reader.pages,archiveRecordInfo(){return c??=JC({records:r.records,blobCount:r.blobs.length,imageHashes:r.images.map(([e])=>e)}),c},loadPage(e,t){if(o.has(e))return;let n=r.reader.selectPages(new Set([e]));bw(a,n.dependencyClosure,()=>{fT(n,r.blobs,i,a,{edited:s.edited,onProgress:t}),o.add(e)})},get loadedPageIds(){return new Set(o)}}}function iT(e,t){let n=t;if(n)return{edited:n};let r=()=>!e.isApplyingImportedState&&!e.isApplyingDerivedLayout,i=()=>{r()&&(n=!0,a())},a=e.observeNodeChanges({before:i,created:i});return{get edited(){return n}}}function aT(e){let t=new Map;for(let n of e.getAllNodes())for(let e of n.componentPropertyDefinitions)t.set(e.id,e.type);return t}function oT(e){let t;do t=`0:${e.nextImportedId++}`;while(e.recordIds.has(t));return t}function sT(e,t){let n=!0,r=e,i={nextImportedId:1,recordIds:t},a=new zm(()=>{if(!n)return Ki();let e=r??oT(i);return r=void 0,e});return n=!1,{graph:a,nextImportedId:i.nextImportedId}}function cT(e,t){let n=c_(e,lm.documentId);return n&&!t.has(n)?n:e.guid&&X(e.guid)}function lT(e,t){let n=e.documentRecord,{recordIds:r}=e,i=sT(n&&cT(n,r),r),{graph:a}=i,o={graph:a,nextImportedId:i.nextImportedId,recordIds:r,sources:new Map,components:new Map,componentIds:new Map,savedSizeNodes:new Set};xw(a,n);for(let[e,n]of t.images??[])a.images.set(e,n.slice());a.applyImportedStateDuring(()=>eT(a,e.resources,t.onUnsupportedResource,t.onUnsupportedVariableExpression),()=>oT(o));for(let e of a.getPages())a.deleteNode(e.id);return o}function uT(e){let t=3,n=[...e.nodes.keys(),...e.variables.keys(),...e.variableCollections.keys(),...[...e.variableCollections.values()].flatMap(e=>e.modes.map(e=>e.modeId))];for(let e of n)/^0:\d+$/.test(e)&&(t=Math.max(t,Number(e.slice(2))+1));return t}function dT(e,t){e.preserveSourceMetadataDuring(()=>{for(let[n,r]of t){let t=e.getNode(n);if(!t)continue;let i=new Set(Km(e,t).flatMap(e=>e.source.editedFields)),a={};t.width!==r.width&&!i.has(`width`)&&(a.width=r.width),t.height!==r.height&&!i.has(`height`)&&(a.height=r.height),Object.keys(a).length>0&&e.updateNode(n,a)}})}function fT(e,t,n,r,i={edited:!1}){for(let t of e.bindingDiagnostics){if(!n.onUnresolvedBinding)throw Error(`Unresolved binding ${t.sourceId}: ${t.field}`);n.onUnresolvedBinding(t)}let a=i.onProgress?{...n,onProgress:i.onProgress}:n,o=e.pages.map(t=>e.readPage(t.id,a)),s=r??lT(e,n),c=e.planComponents(o,a,e=>s.components.has(e));return s.graph.applyImportedStateDuring(()=>pT(o,c,t,s,i),()=>oT(s))}function pT(e,t,n,r,{edited:i,onProgress:a}){let{graph:o,sources:s,components:c,savedSizeNodes:l,componentIds:u}=r,d=new Set(o.nodes.keys()),f=new Map,p=new Map,m=e=>{for(let[t,n]of e)t.derivedSize&&(l.add(n.id),p.set(n.id,{width:n.width,height:n.height})),t.layoutScale!==void 0&&f.set(n.id,t.layoutScale)},h=({sourceId:e})=>o.isEntityIdTaken(e)?void 0:e,g=[],_=(e,t)=>{if(e.mainComponentId!==null)return;let r=s.get(e.sourceId);if(r){for(let t of e.children)_(t,r);return}let{nodeType:i,...a}=zv(e.properties,n);if(i===`DOCUMENT`||i===`VARIABLE`)throw Error(`Unsupported scene type ${i}`);let c=h(e),l=c?o.createNodeWithId(c,i,t,a):o.createNode(i,t,a);s.set(e.sourceId,l.id),l.type===`COMPONENT`&&u.set(e.sourceId,l.id);let d=bb(l.type);d?.read(o,l,e.properties,n),d?.link&&g.push({node:l,record:e.properties});for(let t of e.children)_(t,l.id)};for(let t of e)_(t,o.rootId);for(let e of t){if(a?.(),c.has(e.sourceId))continue;let t=s.get(e.parentSourceId);if(!t)throw Error(`Unmaterialized component parent ${e.parentSourceId}`);let r=new Map,i=e=>{let t=s.get(e.sourceId),n=t?o.getNode(t):void 0;n&&r.set(e,n),e.mainComponentId===null&&e.children.forEach(i)};i(e.occurrence);let l=bC(o,t,e.occurrence,u,{blobs:n,sourceChildren:DC(e.occurrence,c),existingNodes:r,recordId:h});m(l.nodes),EC(e.occurrence,l,c),c.set(e.sourceId,{occurrence:e.occurrence,materialized:l}),u.set(e.sourceId,l.root.id),s.set(e.sourceId,l.root.id)}let v=new Set,y=e=>{if(e.properties.type===`SYMBOL`)return;let t=s.get(e.sourceId);if(!t)throw Error(`Missing source container ${e.sourceId}`);let r=[];for(let l of e.children){if(i&&wC(l,o,c),l.mainComponentId!==null&&!s.has(l.sourceId)){a?.();let e=bC(o,t,l,u,{blobs:n,sourceChildren:DC(l,c),recordId:h});m(e.nodes),EC(l,e,c),i&&(qm(o,e),e.root.componentId&&v.add(e.root.id)),s.set(l.sourceId,e.root.id)}else l.mainComponentId===null&&l.properties.type!==`SYMBOL`&&y(l);let e=s.get(l.sourceId);if(!e)throw Error(`Missing assembled child ${l.sourceId}`);o.getNode(e)?.parentId===t&&r.push(e)}let l=o.getNode(t);l&&(l.childIds=[...r,...l.childIds.filter(e=>!r.includes(e))])};for(let t of e)y(t);for(let e of v)o.syncInstance(e);v.size>0&&dT(o,p);let b=e=>s.get(e);for(let{node:e,record:t}of g)bb(e.type)?.link?.(o,e,t,b);for(let e of o.getAllNodes())d.has(e.id)||e.styleRuns.length===0||(e.styleRuns=Wm(e.styleRuns,{variable:e=>e,style:e=>e,node:e=>s.get(e)??e}));let x=[...o.nodes.values()].filter(e=>!d.has(e.id));return r.definitionTypes??=aT(o),vw(o,s,x,r.definitionTypes),o.preserveSourceMetadataDuring(()=>{yw(o,x),pw(o,l,x,f),mw(o,x),hw(o,x)}),r}function mT(e,t){return{original:()=>new Uint8Array(e.slice(0)),info:t,componentPages:t=>fw(e,t),patch:async(t,n)=>uw(e,t,n,await Dt(n.compressionLevel))}}function hT(e){let t=new Set(e.nodes.keys()),n=new Map,r=new Set,i=new Set,a={createNode:e.createNode.bind(e),createNodeWithId:e.createNodeWithId.bind(e),updateNode:e.updateNode.bind(e),deleteNode:e.deleteNode.bind(e)};function o(t,i){if(!t||r.has(t))return;let a=e.getNode(t);if(!a)return;let o=n.get(t)??{};n.set(t,o);for(let e of i)e in o||Object.assign(o,{[e]:structuredClone(a[e])})}return e.createNode=(e,t,n)=>{o(t,[`childIds`]);let i=a.createNode(e,t,n);return r.add(i.id),i},e.createNodeWithId=(e,t,n,i)=>{o(n,[`childIds`]);let s=a.createNodeWithId(e,t,n,i);return r.add(s.id),s},e.updateNode=(t,n)=>{let r=e.getNode(t);if(r){let e=Object.keys(n).filter(e=>!en(r[e],n[e]));e.length>0&&e.push(`source`),`componentId`in n&&e.push(`componentId`),(`fills`in n||`strokes`in n)&&e.push(`boundVariables`),o(t,e)}a.updateNode(t,n)},e.deleteNode=s=>{let c=e.getNode(s);o(c?.parentId,[`childIds`]);let l=c?[s]:[];for(;l.length>0;){let a=l.pop();if(!a)continue;let o=e.getNode(a);o&&l.push(...o.childIds),t.has(a)?i.add(a):(r.delete(a),n.delete(a))}a.deleteNode(s)},{before:n,created:r,deleted:i,stop(){e.createNode=a.createNode,e.createNodeWithId=a.createNodeWithId,e.updateNode=a.updateNode,e.deleteNode=a.deleteNode}}}function gT(e,t,n){let r=[];for(let[n,i]of t.before){let a=e.getNode(n);if(!a||t.deleted.has(n))continue;let o={};for(let e of Object.keys(i))en(i[e],a[e])||Object.assign(o,{[e]:structuredClone(a[e])});Object.keys(o).length>0&&r.push([n,o])}return{created:[...t.created].map(t=>e.getNode(t)).filter(e=>e!==void 0).map(e=>[e.id,structuredClone(e)]),updated:r,deleted:[...t.deleted],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),populatedRootIds:[...n]}}let _T=new WeakMap;function vT(e,t){let n=_T.get(e);n||(n=new Set(e.map(e=>JSON.stringify(e))),_T.set(e,n));let r=JSON.stringify(t);n.has(r)||(n.add(r),e.push(t))}function yT(e){return{derivedBounds:!0,onUnresolvedProperty:t=>vT(e,{kind:`property`,diagnostic:t}),onUnresolvedAssignment:t=>vT(e,{kind:`assignment`,diagnostic:t}),onUnresolvedBinding:t=>vT(e,{kind:`binding`,diagnostic:t}),onUnsupportedVariableExpression:t=>vT(e,{kind:`variable-expression`,diagnostic:t}),onMissingComponent:t=>vT(e,{kind:`component`,diagnostic:t}),onMissingSlotContent:t=>vT(e,{kind:`slot-content`,diagnostic:t})}}function bT(e,t=`all`){let n=[],r=rT(e,yT(n)),i=r.pages.map(e=>({sourceId:e.id,name:e.name,position:e.position,internalOnly:e.internalOnly})),a=new Map;for(let e of r.pages){let t=r.graphPageId(e.id);t&&a.set(t,e.id)}let o=()=>[...r.loadedPageIds].flatMap(e=>{let t=r.graphPageId(e);return t?[t]:[]});if(t===`all`)for(let e of i)e.internalOnly||r.loadPage(e.sourceId);else if(t===`first-page`){let e=i.find(e=>!e.internalOnly);e&&r.loadPage(e.sourceId)}return{session:r,diagnostics:n,checkpoint:()=>r.checkpoint(),graph:r.graph,pages:i,populate(e,t){let n=a.get(e);if(!n)throw Error(`Unknown graph page ${e}`);let i=!r.loadedPageIds.has(n),s=hT(r.graph);try{return r.loadPage(n,t),t?.(),{checkpoint:r.checkpoint(),populated:i,delta:gT(r.graph,s,o())}}finally{s.stop()}}}}let xT,ST,CT;function wT(e){CT?.postMessage(e)}function TT(e){if(!xT)throw Error(`FIG session has no retained reader`);let{requestId:t}=e,n=performance.now(),r=xT.populate(e.pageId,()=>{let e=performance.now();e-n<1e3||(n=e,wT({type:`population-progress`,requestId:t}))});wT({type:`population-result`,requestId:e.requestId,baseRevision:e.baseRevision,...r})}async function ET(e){let{requestId:t}=e;try{if(!ST)throw Error(`FIG session has no original archive`);if(e.type===`original-archive`){let e=ST.original();CT?.postMessage({type:`original-archive-result`,requestId:t,bytes:e},[e.buffer])}else if(e.type===`archive-info`)wT({type:`archive-info-result`,requestId:t,info:ST.info()});else if(e.type===`component-pages`)wT({type:`component-pages-result`,requestId:t,pageIds:ST.componentPages(e.componentIds)});else{let n=await ST.patch(e.patch,e.input);CT?.postMessage({type:`patch-archive-result`,requestId:t,bytes:n},[n.buffer])}}catch(e){wT({type:`archive-error`,requestId:t,error:e instanceof Error?e.message:String(e)})}}function DT(e){try{if(e.type===`original-archive`||e.type===`archive-info`||e.type===`component-pages`||e.type===`patch-archive`){ET(e);return}if(e.type===`dispose`){xT=void 0,ST=void 0,wT({type:`disposed`}),CT?.close(),CT=void 0,self.close();return}if(e.type===`cancel`)return;if(e.type===`retire`){xT=void 0;return}TT(e)}catch(t){wT({type:`population-error`,requestId:e.type===`populate`?e.requestId:void 0,error:t instanceof Error?t.message:String(t)})}}self.onmessage=async e=>{let t=e.data;CT=t.port,CT.onmessage=e=>DT(e.data),CT.start();let n=t.buffer.slice(0);try{await Ot();let e=bT(t.buffer,t.options?.populate),r=e.session.archiveRecordInfo();ST=mT(n,()=>r),wT({type:`page-manifest`,pages:e.pages}),xT=t.options?.populate===`first-page`||t.options?.populate===`none`?e:void 0,wT({type:`graph`,graph:Bm(e.graph),checkpoint:e.checkpoint(),archiveInfo:r})}catch(e){wT({type:`graph`,error:e instanceof Error?e.message:String(e)})}}})();