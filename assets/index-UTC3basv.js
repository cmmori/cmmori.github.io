(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const pe={createDocument:function(e){return new DOMParser().parseFromString(e.trim(),"text/xml")}};var A=Uint8Array,M=Uint16Array,Wr=Uint32Array,zr=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),qr=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ve=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kr=function(r,e){for(var t=new M(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var o=new Wr(t[30]),n=1;n<30;++n)for(var i=t[n];i<t[n+1];++i)o[i]=i-t[n]<<5|n;return[t,o]},Gr=Kr(zr,2),Yr=Gr[0],ye=Gr[1];Yr[28]=258,ye[258]=28;var me=Kr(qr,0),he=me[0],vr=new M(32768);for(var v=0;v<32768;++v){var D=(v&43690)>>>1|(v&21845)<<1;D=(D&52428)>>>2|(D&13107)<<2,D=(D&61680)>>>4|(D&3855)<<4,vr[v]=((D&65280)>>>8|(D&255)<<8)>>>1}var z=function(r,e,t){for(var n=r.length,o=0,i=new M(e);o<n;++o)r[o]&&++i[r[o]-1];var a=new M(e);for(o=0;o<e;++o)a[o]=a[o-1]+i[o-1]<<1;var f;if(t){f=new M(1<<e);var u=15-e;for(o=0;o<n;++o)if(r[o])for(var l=o<<4|r[o],c=e-r[o],s=a[r[o]-1]++<<c,p=s|(1<<c)-1;s<=p;++s)f[vr[s]>>>u]=l}else for(f=new M(n),o=0;o<n;++o)r[o]&&(f[o]=vr[a[r[o]-1]++]>>>15-r[o]);return f},G=new A(288);for(var v=0;v<144;++v)G[v]=8;for(var v=144;v<256;++v)G[v]=9;for(var v=256;v<280;++v)G[v]=7;for(var v=280;v<288;++v)G[v]=8;var Jr=new A(32);for(var v=0;v<32;++v)Jr[v]=5;var be=z(G,9,1),de=z(Jr,5,1),ir=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},P=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ar=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},ge=function(r){return(r+7)/8|0},gr=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r.BYTES_PER_ELEMENT==2?M:r.BYTES_PER_ELEMENT==4?Wr:A)(t-e);return n.set(r.subarray(e,t)),n},we=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],j=function(r,e,t){var n=new Error(e||we[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,j),!t)throw n;return n},Oe=function(r,e,t){var n=r.length;if(!n||t&&t.f&&!t.l)return e||new A(0);var o=!e||t,i=!t||t.i;t||(t={}),e||(e=new A(n*3));var a=function(Ar){var Er=e.length;if(Ar>Er){var _r=new A(Math.max(Er*2,Ar));_r.set(e),e=_r}},f=t.f||0,u=t.p||0,l=t.b||0,c=t.l,s=t.d,p=t.m,y=t.n,d=n*8;do{if(!c){f=P(r,u,1);var T=P(r,u+1,3);if(u+=3,T)if(T==1)c=be,s=de,p=9,y=5;else if(T==2){var b=P(r,u,31)+257,L=P(r,u+10,15)+4,I=b+P(r,u+5,31)+1;u+=14;for(var m=new A(I),g=new A(19),w=0;w<L;++w)g[ve[w]]=P(r,u+w*3,7);u+=L*3;for(var X=ir(g),er=(1<<X)-1,V=z(g,X,1),w=0;w<I;){var H=V[P(r,u,er)];u+=H&15;var h=H>>>4;if(h<16)m[w++]=h;else{var _=0,J=0;for(h==16?(J=3+P(r,u,3),u+=2,_=m[w-1]):h==17?(J=3+P(r,u,7),u+=3):h==18&&(J=11+P(r,u,127),u+=7);J--;)m[w++]=_}}var wr=m.subarray(0,b),N=m.subarray(b);p=ir(wr),y=ir(N),c=z(wr,p,1),s=z(N,y,1)}else j(1);else{var h=ge(u)+4,O=r[h-4]|r[h-3]<<8,S=h+O;if(S>n){i&&j(0);break}o&&a(l+O),e.set(r.subarray(h,S),l),t.b=l+=O,t.p=u=S*8,t.f=f;continue}if(u>d){i&&j(0);break}}o&&a(l+131072);for(var ce=(1<<p)-1,se=(1<<y)-1,tr=u;;tr=u){var _=c[ar(r,u)&ce],U=_>>>4;if(u+=_&15,u>d){i&&j(0);break}if(_||j(2),U<256)e[l++]=U;else if(U==256){tr=u,c=null;break}else{var Or=U-254;if(U>264){var w=U-257,W=zr[w];Or=P(r,u,(1<<W)-1)+Yr[w],u+=W}var nr=s[ar(r,u)&se],or=nr>>>4;nr||j(3),u+=nr&15;var N=he[or];if(or>3){var W=qr[or];N+=ar(r,u)&(1<<W)-1,u+=W}if(u>d){i&&j(0);break}o&&a(l+131072);for(var Sr=l+Or;l<Sr;l+=4)e[l]=e[l-N],e[l+1]=e[l+1-N],e[l+2]=e[l+2-N],e[l+3]=e[l+3-N];l=Sr}}t.l=c,t.p=tr,t.b=l,t.f=f,c&&(f=1,t.m=p,t.d=s,t.n=y)}while(!f);return l==e.length?e:gr(e,0,l)},Se=new A(0),F=function(r,e){return r[e]|r[e+1]<<8},x=function(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0},ur=function(r,e){return x(r,e)+x(r,e+4)*4294967296};function Ae(r,e){return Oe(r,e)}var yr=typeof TextDecoder<"u"&&new TextDecoder,Ee=0;try{yr.decode(Se,{stream:!0}),Ee=1}catch{}var _e=function(r){for(var e="",t=0;;){var n=r[t++],o=(n>127)+(n>223)+(n>239);if(t+o>r.length)return[e,gr(r,t-1)];o?o==3?(n=((n&15)<<18|(r[t++]&63)<<12|(r[t++]&63)<<6|r[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|r[t++]&63):e+=String.fromCharCode((n&15)<<12|(r[t++]&63)<<6|r[t++]&63):e+=String.fromCharCode(n)}};function Qr(r,e){if(e){for(var t="",n=0;n<r.length;n+=16384)t+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return t}else{if(yr)return yr.decode(r);var o=_e(r),i=o[0],a=o[1];return a.length&&j(8),i}}var Te=function(r,e){return e+30+F(r,e+26)+F(r,e+28)},Ie=function(r,e,t){var n=F(r,e+28),o=Qr(r.subarray(e+46,e+46+n),!(F(r,e+8)&2048)),i=e+46+n,a=x(r,e+20),f=t&&a==4294967295?Pe(r,i):[a,x(r,e+24),x(r,e+42)],u=f[0],l=f[1],c=f[2];return[F(r,e+10),u,l,o,i+F(r,e+30)+F(r,e+32),c]},Pe=function(r,e){for(;F(r,e)!=1;e+=4+F(r,e+2));return[ur(r,e+12),ur(r,e+4),ur(r,e+20)]};function je(r,e){for(var t={},n=r.length-22;x(r,n)!=101010256;--n)(!n||r.length-n>65558)&&j(13);var o=F(r,n+8);if(!o)return{};var i=x(r,n+16),a=i==4294967295||o==65535;if(a){var f=x(r,n-12);a=x(r,f)==101075792,a&&(o=x(r,f+32),i=x(r,f+48))}for(var u=e&&e.filter,l=0;l<o;++l){var c=Ie(r,i,a),s=c[0],p=c[1],y=c[2],d=c[3],T=c[4],h=c[5],O=Te(r,h);i=T,(!u||u({name:d,size:p,originalSize:y,compression:s}))&&(s?s==8?t[d]=Ae(r.subarray(O,O+p),new A(y)):j(14,"unknown compression type "+s):t[d]=gr(r,O,O+p))}return t}function xe(r){return r instanceof File||r instanceof Blob?r.arrayBuffer().then(fr):fr(r)}function fr(r){var e=new Uint8Array(r),t=je(e);return Promise.resolve(Fe(t))}function Fe(r){for(var e=[],t=0,n=Object.keys(r);t<n.length;t++){var o=n[t];e[o]=Qr(r[o])}return e}function C(r,e){for(var t=0;t<r.childNodes.length;){var n=r.childNodes[t];if(n.nodeType===1&&R(n)===e)return n;t++}}function Y(r,e){for(var t=[],n=0;n<r.childNodes.length;){var o=r.childNodes[n];o.nodeType===1&&R(o)===e&&t.push(o),n++}return t}function rr(r,e,t){for(var n=0;n<r.childNodes.length;){var o=r.childNodes[n];e?o.nodeType===1&&R(o)===e&&t(o,n):t(o,n),n++}}function Ce(r,e,t){var n=[];return rr(r,e,function(o,i){n.push(t(o,i))}),n}var Ne=/.+\:/;function R(r){return r.tagName.replace(Ne,"")}function Zr(r){if(r.nodeType!==1)return r.textContent;for(var e="<"+R(r),t=0;t<r.attributes.length;)e+=" "+r.attributes[t].name+'="'+r.attributes[t].value+'"',t++;e+=">";for(var n=0;n<r.childNodes.length;)e+=Zr(r.childNodes[n]),n++;return e+="</"+R(r)+">",e}function De(r){var e=r.documentElement,t=C(e,"sheetData"),n=[];return rr(t,"row",function(o){rr(o,"c",function(i){n.push(i)})}),n}function ke(r,e){return C(e,"v")}function $e(r,e){if(e.firstChild&&R(e.firstChild)==="is"&&e.firstChild.firstChild&&R(e.firstChild.firstChild)==="t")return e.firstChild.firstChild.textContent}function Me(r){var e=r.documentElement,t=C(e,"dimension");if(t)return t.getAttribute("ref")}function Re(r){var e=r.documentElement,t=C(e,"cellStyleXfs");return t?Y(t,"xf"):[]}function Le(r){var e=r.documentElement,t=C(e,"cellXfs");return t?Y(t,"xf"):[]}function Ue(r){var e=r.documentElement,t=C(e,"numFmts");return t?Y(t,"numFmt"):[]}function Be(r){var e=r.documentElement;return Ce(e,"si",function(t){var n=C(t,"t");if(n)return n.textContent;var o="";return rr(t,"r",function(i){o+=C(i,"t").textContent}),o})}function Xe(r){var e=r.documentElement;return C(e,"workbookPr")}function Ve(r){var e=r.documentElement;return Y(e,"Relationship")}function He(r){var e=r.documentElement,t=C(e,"sheets");return Y(t,"sheet")}function We(r,e){var t=e.createDocument(r),n={},o=Xe(t);o&&o.getAttribute("date1904")==="1"&&(n.epoch1904=!0),n.sheets=[];var i=function(f){f.getAttribute("name")&&n.sheets.push({id:f.getAttribute("sheetId"),name:f.getAttribute("name"),relationId:f.getAttribute("r:id")})};return He(t).forEach(i),n}function ze(r,e){var t=e.createDocument(r),n={sheets:{},sharedStrings:void 0,styles:void 0},o=function(a){var f=a.getAttribute("Target"),u=a.getAttribute("Type");switch(u){case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":n.styles=lr(f);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":n.sharedStrings=lr(f);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":n.sheets[a.getAttribute("Id")]=lr(f);break}};return Ve(t).forEach(o),n}function lr(r){return r[0]==="/"?r.slice(1):"xl/"+r}function Tr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Ir(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Tr(Object(t),!0).forEach(function(n){qe(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Tr(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function qe(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Ke(r,e){if(!r)return{};var t=e.createDocument(r),n=Re(t).map(cr),o=Ue(t).map(Ge).reduce(function(a,f){return a[f.id]=f,a},[]),i=function(f){return f.hasAttribute("xfId")?Ir(Ir({},n[f.xfId]),cr(f,o)):cr(f,o)};return Le(t).map(i)}function Ge(r){return{id:r.getAttribute("numFmtId"),template:r.getAttribute("formatCode")}}function cr(r,e){var t={};if(r.hasAttribute("numFmtId")){var n=r.getAttribute("numFmtId");e[n]?t.numberFormat=e[n]:t.numberFormat={id:n}}return t}function Ye(r,e){return r?Be(e.createDocument(r)):[]}function re(r,e){e&&e.epoch1904&&(r+=1462);var t=70*365+19,n=60*60*1e3;return new Date(Math.round((r-t)*24*n))}function Je(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=Qe(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(r,e){if(r){if(typeof r=="string")return Pr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pr(r,e)}}function Pr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Ze(r,e,t){if(r){var n=e[r];if(!n)throw new Error("Cell style not found: ".concat(r));if(!n.numberFormat)return!1;if(rt.indexOf(Number(n.numberFormat.id))>=0||t.dateFormat&&n.numberFormat.template===t.dateFormat||t.smartDateParser!==!1&&n.numberFormat.template&&nt(n.numberFormat.template))return!0}}var rt=[14,15,16,17,18,19,20,21,22,27,30,36,45,46,47,50,57],et=/^\[\$-414\]/,tt=/;@$/;function nt(r){r=r.toLowerCase(),r=r.replace(et,""),r=r.replace(tt,"");for(var e=r.split(/\W+/),t=Je(e),n;!(n=t()).done;){var o=n.value;if(ot.indexOf(o)<0)return!1}return!0}var ot=["ss","mm","h","hh","am","pm","d","dd","m","mm","mmm","mmmm","yy","yyyy","e"];function it(r,e,t){var n=t.getInlineStringValue,o=t.getInlineStringXml,i=t.getStyleId,a=t.styles,f=t.values,u=t.properties,l=t.options;switch(e||(e="n"),e){case"str":r=sr(r,l);break;case"inlineStr":if(r=n(),r===void 0)throw new Error('Unsupported "inline string" cell value structure: '.concat(o()));r=sr(r,l);break;case"s":var c=Number(r);if(isNaN(c))throw new Error('Invalid "shared" string index: '.concat(r));if(c>=f.length)throw new Error('An out-of-bounds "shared" string index: '.concat(r));r=f[c],r=sr(r,l);break;case"b":if(r==="1")r=!0;else if(r==="0")r=!1;else throw new Error('Unsupported "boolean" cell value: '.concat(r));break;case"z":r=void 0;break;case"e":r=at(r);break;case"d":if(r===void 0)break;var s=new Date(r);if(isNaN(s.valueOf()))throw new Error('Unsupported "date" cell value: '.concat(r));r=s;break;case"n":if(r===void 0)break;var p=Ze(i(),a,l);p?(r=jr(r),r=re(r,u)):r=(l.parseNumber||jr)(r);break;default:throw new TypeError("Cell type not supported: ".concat(e))}return r===void 0&&(r=null),r}function at(r){switch(r){case 0:return"#NULL!";case 7:return"#DIV/0!";case 15:return"#VALUE!";case 23:return"#REF!";case 29:return"#NAME?";case 36:return"#NUM!";case 42:return"#N/A";case 43:return"#GETTING_DATA";default:return"#ERROR_".concat(r)}}function sr(r,e){return e.trim!==!1&&(r=r.trim()),r===""&&(r=void 0),r}function jr(r){var e=Number(r);if(isNaN(e))throw new Error('Invalid "numeric" cell value: '.concat(r));return e}var ut=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function ft(r){var e=function(l,c){return l-c},t=r.map(function(u){return u.row}).sort(e),n=r.map(function(u){return u.column}).sort(e),o=t[0],i=t[t.length-1],a=n[0],f=n[n.length-1];return[{row:o,column:a},{row:i,column:f}]}function lt(r){for(var e=0,t=0;t<r.length;)e*=26,e+=ut.indexOf(r[t]),t++;return e}function ee(r){return r=r.split(/(\d+)/),[parseInt(r[1]),lt(r[0].trim())]}function ct(r,e,t,n,o,i,a){var f=ee(r.getAttribute("r")),u=ke(e,r),l=u&&u.textContent,c;return r.hasAttribute("t")&&(c=r.getAttribute("t")),{row:f[0],column:f[1],value:it(l,c,{getInlineStringValue:function(){return $e(e,r)},getInlineStringXml:function(){return Zr(r)},getStyleId:function(){return r.getAttribute("s")},styles:o,values:n,properties:i,options:a})}}function st(r,e,t,n,o,i){var a=De(r);return a.length===0?[]:a.map(function(f){return ct(f,r,e,t,n,o,i)})}function pt(r,e){return ht(r)||mt(r,e)||yt(r,e)||vt()}function vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(r,e){if(r){if(typeof r=="string")return xr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xr(r,e)}}function xr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function mt(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,a,f;try{for(t=t.call(r);!(o=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));o=!0);}catch(u){i=!0,f=u}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw f}}return n}}function ht(r){if(Array.isArray(r))return r}function bt(r){var e=Me(r);if(e)return e=e.split(":").map(ee).map(function(t){var n=pt(t,2),o=n[0],i=n[1];return{row:o,column:i}}),e.length===1&&(e=[e[0],e[0]]),e}function dt(r,e,t,n,o,i){var a=e.createDocument(r),f=st(a,e,t,n,o,i),u=bt(a)||ft(f);return{cells:f,dimensions:u}}function gt(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=wt(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(r,e){if(r){if(typeof r=="string")return Fr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fr(r,e)}}function Fr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Ot(r){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.rowMap,n=e.accessor,o=n===void 0?function(s){return s}:n,i=e.onlyTrimAtTheEnd,a=r.length-1;a>=0;){for(var f=!0,u=gt(r[a]),l;!(l=u()).done;){var c=l.value;if(o(c)!==null){f=!1;break}}if(f)r.splice(a,1),t&&t.splice(a,1);else if(i)break;a--}return r}function St(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=At(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(r,e){if(r){if(typeof r=="string")return Cr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cr(r,e)}}function Cr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Et(r){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.accessor,n=t===void 0?function(s){return s}:t,o=e.onlyTrimAtTheEnd,i=r[0].length-1;i>=0;){for(var a=!0,f=St(r),u;!(u=f()).done;){var l=u.value;if(n(l[i])!==null){a=!1;break}}if(a)for(var c=0;c<r.length;)r[c].splice(i,1),c++;else if(o)break;i--}return r}function _t(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=te(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(r,e){return jt(r)||Pt(r,e)||te(r,e)||It()}function It(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(r,e){if(r){if(typeof r=="string")return Nr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Nr(r,e)}}function Nr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Pt(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,a,f;try{for(t=t.call(r);!(o=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));o=!0);}catch(u){i=!0,f=u}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw f}}return n}}function jt(r){if(Array.isArray(r))return r}function xt(r,e){var t=r.dimensions,n=r.cells;if(n.length===0)return[];var o=Tt(t,2);o[0];for(var i=o[1],a=i.column,f=i.row,u=new Array(f),l=0;l<f;){u[l]=new Array(a);for(var c=0;c<a;)u[l][c]=null,c++;l++}for(var s=_t(n),p;!(p=s()).done;){var y=p.value,d=y.row-1,T=y.column-1;T<a&&d<f&&(u[d][T]=y.value)}var h=e.rowMap;if(h)for(var O=0;O<u.length;)h[O]=O,O++;return u=Ot(Et(u,{onlyTrimAtTheEnd:!0}),{onlyTrimAtTheEnd:!0,rowMap:h}),e.transformData&&(u=e.transformData(u)),u}function Ft(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=Ct(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(r,e){if(r){if(typeof r=="string")return Dr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Dr(r,e)}}function Dr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function kr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Nt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kr(Object(t),!0).forEach(function(n){Dt(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):kr(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Dt(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function kt(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};t.sheet||(t=Nt({sheet:1},t));var n=function(p){if(!r[p])throw new Error('"'.concat(p,'" file not found inside the *.xlsx file zip archive'));return r[p]},o=ze(n("xl/_rels/workbook.xml.rels"),e),i=o.sharedStrings?Ye(n(o.sharedStrings),e):[],a=o.styles?Ke(n(o.styles),e):{},f=We(n("xl/workbook.xml"),e);if(t.getSheets)return f.sheets.map(function(s){var p=s.name;return{name:p}});var u=$t(t.sheet,f.sheets);if(!u||!o.sheets[u])throw Mt(t.sheet,f.sheets);var l=dt(n(o.sheets[u]),e,i,a,f,t),c=xt(l,t);return t.properties?{data:c,properties:f}:c}function $t(r,e){if(typeof r=="number"){var t=e[r-1];return t&&t.relationId}for(var n=Ft(e),o;!(o=n()).done;){var i=o.value;if(i.name===r)return i.relationId}}function Mt(r,e){var t=e&&e.map(function(n,o){return'"'.concat(n.name,'" (#').concat(o+1,")")}).join(", ");return new Error("Sheet ".concat(typeof r=="number"?"#"+r:'"'+r+'"'," not found in the *.xlsx file.").concat(e?" Available sheets: "+t+".":""))}function mr(r){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mr(r)}function $r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Rt(r,e,t){return e&&$r(r.prototype,e),t&&$r(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Lt(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ut(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&q(r,e)}function Bt(r){var e=ne();return function(){var n=K(r),o;if(e){var i=K(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return Xt(this,o)}}function Xt(r,e){if(e&&(mr(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vt(r)}function Vt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hr(r){var e=typeof Map=="function"?new Map:void 0;return hr=function(n){if(n===null||!Ht(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,o)}function o(){return Z(n,arguments,K(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),q(o,n)},hr(r)}function Z(r,e,t){return ne()?Z=Reflect.construct:Z=function(o,i,a){var f=[null];f.push.apply(f,i);var u=Function.bind.apply(o,f),l=new u;return a&&q(l,a.prototype),l},Z.apply(null,arguments)}function ne(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ht(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function q(r,e){return q=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},q(r,e)}function K(r){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},K(r)}var E=function(r){Ut(t,r);var e=Bt(t);function t(n){var o;return Lt(this,t),o=e.call(this,"invalid"),o.reason=n,o}return Rt(t)}(hr(Error));function Wt(r){if(typeof r=="string"){var e=r;if(r=Number(r),String(r)!==e)throw new E("not_a_number")}if(typeof r!="number")throw new E("not_a_number");if(isNaN(r))throw new E("invalid_number");if(!isFinite(r))throw new E("out_of_bounds");return r}function zt(r){if(typeof r=="string")return r;if(typeof r=="number"){if(isNaN(r))throw new E("invalid_number");if(!isFinite(r))throw new E("out_of_bounds");return String(r)}throw new E("not_a_string")}function qt(r){if(typeof r=="boolean")return r;throw new E("not_a_boolean")}function Kt(r,e){var t=e.properties;if(r instanceof Date){if(isNaN(r.valueOf()))throw new E("out_of_bounds");return r}if(typeof r=="number"){if(isNaN(r))throw new E("invalid_number");if(!isFinite(r))throw new E("out_of_bounds");var n=re(r,t);if(isNaN(n.valueOf()))throw new E("out_of_bounds");return n}throw new E("not_a_date")}function Gt(r,e){return Qt(r)||Jt(r,e)||oe(r,e)||Yt()}function Yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,a,f;try{for(t=t.call(r);!(o=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));o=!0);}catch(u){i=!0,f=u}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw f}}return n}}function Qt(r){if(Array.isArray(r))return r}function br(r){"@babel/helpers - typeof";return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},br(r)}function Zt(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t)return(t=t.call(r)).next.bind(t);if(Array.isArray(r)||(t=oe(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(r,e){if(r){if(typeof r=="string")return Mr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mr(r,e)}}function Mr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Rr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Lr(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Rr(Object(t),!0).forEach(function(n){rn(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Rr(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function rn(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Ur={isColumnOriented:!1};function en(r,e,t){t?t=Lr(Lr({},Ur),t):t=Ur;var n=t,o=n.isColumnOriented,i=n.rowMap,a=n.ignoreEmptyRows;an(e),o&&(r=on(r));for(var f=r[0],u=[],l=[],c=1;c<r.length;c++){var s=ie(e,r[c],c,f,l,t);(s!==null||a===!1)&&u.push(s)}if(i)for(var p=Zt(l),y;!(y=p()).done;){var d=y.value;d.row=i[d.row-1]+1}return{rows:u,errors:l}}function ie(r,e,t,n,o,i){for(var a={},f=!0,u=function(S){var b=S.column,L=S.value,I=S.error,m=S.reason,g={error:I,row:t+1,column:b,value:L};return m&&(g.reason=m),r[b].type&&(g.type=r[b].type),g},l=[],c=function(){var S=p[s],b=r[S],L=br(b.type)==="object"&&!Array.isArray(b.type),I=e[n.indexOf(S)];I===void 0&&(I=null);var m=void 0,g=void 0,w=void 0;if(L)m=ie(b.type,e,t,n,o,i);else if(I===null)m=null;else if(Array.isArray(b.type)){var X=!1,er=nn(I).map(function(H){var _=Br(H,b,i);return _.error&&(m=H,g=_.error,w=_.reason),_.value!==null&&(X=!0),_.value});g||(m=X?er:null)}else{var V=Br(I,b,i);g=V.error,w=V.reason,m=g?I:V.value}!g&&m===null&&(typeof b.required=="function"?l.push({column:S}):b.required===!0&&(g="required")),g?o.push(u({column:S,value:m,error:g,reason:w})):(f&&m!==null&&(f=!1),(m!==null||i.includeNullValues)&&(a[b.prop]=m))},s=0,p=Object.keys(r);s<p.length;s++)c();if(f)return null;for(var y=0,d=l;y<d.length;y++){var T=d[y].column,h=r[T].required(a);h&&o.push(u({column:T,value:null,error:"required"}))}return a}function Br(r,e,t){if(r===null)return{value:null};var n;if(e.parse?n=B(r,e.parse):e.type?n=tn(r,Array.isArray(e.type)?e.type[0]:e.type,t):n={value:r},n.error)return n;if(n.value!==null){if(e.oneOf&&e.oneOf.indexOf(n.value)<0)return{error:"invalid",reason:"unknown"};if(e.validate)try{e.validate(n.value)}catch(o){return{error:o.message}}}return n}function B(r,e){try{return r=e(r),r===void 0?{value:null}:{value:r}}catch(n){var t={error:n.message};return n.reason&&(t.reason=n.reason),t}}function tn(r,e,t){switch(e){case String:return B(r,zt);case Number:return B(r,Wt);case Date:return B(r,function(n){return Kt(n,{properties:t.properties})});case Boolean:return B(r,qt);default:if(typeof e=="function")return B(r,e);throw new Error("Unsupported schema type: ".concat(e&&e.name||e))}}function ae(r,e,t){for(var n=0,o="";t+n<r.length;){var i=r[t+n];if(i===e)return[o,n];if(i==='"'){var a=ae(r,'"',t+n+1);o+=a[0],n+=1+a[1]+1}else o+=i,n++}return[o,n]}function nn(r){for(var e=[],t=0;t<r.length;){var n=ae(r,",",t),o=Gt(n,2),i=o[0],a=o[1];t+=a+1,e.push(i.trim())}return e}var on=function(e){return e[0].map(function(t,n){return e.map(function(o){return o[n]})})};function an(r){for(var e=0,t=Object.keys(r);e<t.length;e++){var n=t[e],o=r[n];if(!o.prop)throw new Error('"prop" not defined for schema entry "'.concat(n,'".'))}}function dr(r){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dr(r)}function ue(r){for(var e={},t=0,n=Object.keys(r);t<n.length;t++){var o=n[t],i=r[o],a=void 0;dr(i)==="object"&&(i=Object.keys(r[o])[0],a=ue(r[o][i])),e[o]={prop:i},a&&(e[o].type=a)}return e}var un=["schema","map"];function Xr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function Q(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xr(Object(t),!0).forEach(function(n){fn(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Xr(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function fn(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ln(r,e){if(r==null)return{};var t=cn(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function cn(r,e){if(r==null)return{};var t={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function sn(r,e,t){var n=t.schema,o=t.map,i=ln(t,un);!n&&o&&(n=ue(o));var a=kt(r,e,Q(Q({},i),{},{properties:n||i.properties}));return n?en(a.data,n,Q(Q({},i),{},{properties:a.properties})):a}function fe(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return xe(r).then(function(t){return sn(t,pe,e)})}const pr=document.querySelector("#app"),Vr=document.querySelector("#clientInput"),Hr=document.querySelector("#systemInput");let k=[],$=[];Vr.addEventListener("change",()=>{fe(Vr.files[0]).then(r=>{pn(r),le()})});Hr.addEventListener("change",()=>{fe(Hr.files[0]).then(r=>{vn(r),le()})});function pn(r){for(let e=1;e<r.length;e++)k.push({clientId:r[e][0],clientName:r[e][1],clientEmail:r[e][4].toLowerCase()})}function vn(r){for(let e=0;e<r.length;e++)$.push({systemName:r[e][0],systemEmail:r[e][1].toLowerCase()});console.log($)}function le(){if(k.length===0||$.length===0)return;let r=[];pr.innerHTML+=`
  <div id="textAreaBlock">123</div>
  `;for(let t=0;t<$.length;t++){let n=!1;for(let o=1;o<k.length;o++)if($[t].systemName===k[o].clientName){let i={...$[t]};r.push(i),r[r.length-1].clientName=k[o].clientName,r[r.length-1].clientEmail=k[o].clientEmail,r[r.length-1].clientId=k[o].clientId,r[r.length-1].actual=!0,n=!0}n||(r.push($[t]),r[r.length-1].actual=!1)}pr.innerHTML="";const e=document.createElement("div");e.classList.add("table"),pr.appendChild(e),r.forEach(t=>{t.actual?t.systemEmail!==t.clientEmail&&t.actual?t.color="yellow":t.color="green":t.color="red",e.innerHTML+=`<div class="${t.color}">Табельный номер: <span style="font-weight: 700">${t.clientId}</span>, ФИО: ${t.systemName}, Email из системы: ${t.systemEmail}, Email от клиента: ${t.clientEmail}</div>`}),console.log(r)}
