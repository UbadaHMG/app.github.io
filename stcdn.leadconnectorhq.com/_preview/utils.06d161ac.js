import{Y as i}from"./entry.0e8f1b40.js";import{a2 as m,a3 as x,a4 as O}from"./constants.c1fa6fa6.js";function R(e,o,t){var n=-1,r=e.length;o<0&&(o=-o>r?0:r+o),t=t>r?r:t,t<0&&(t+=r),r=o>t?0:t-o>>>0,o>>>=0;for(var s=Array(r);++n<r;)s[n]=e[n+o];return s}function j(e,o,t){var n=e.length;return t=t===void 0?n:t,!o&&t>=n?e:R(e,o,t)}var k="\\ud800-\\udfff",w="\\u0300-\\u036f",T="\\ufe20-\\ufe2f",$="\\u20d0-\\u20ff",S=w+T+$,E="\\ufe0e\\ufe0f",M="\\u200d",_=RegExp("["+M+k+S+E+"]");function d(e){return _.test(e)}function D(e){return e.split("")}var p="\\ud800-\\udfff",F="\\u0300-\\u036f",L="\\ufe20-\\ufe2f",B="\\u20d0-\\u20ff",P=F+L+B,U="\\ufe0e\\ufe0f",Z="["+p+"]",u="["+P+"]",c="\\ud83c[\\udffb-\\udfff]",G="(?:"+u+"|"+c+")",v="[^"+p+"]",C="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",H="\\u200d",b=G+"?",h="["+U+"]?",V="(?:"+H+"(?:"+[v,C,g].join("|")+")"+h+b+")*",W=h+b+V,z="(?:"+[v+u+"?",u,C,g,Z].join("|")+")",J=RegExp(c+"(?="+c+")|"+z+W,"g");function N(e){return e.match(J)||[]}function I(e){return d(e)?N(e):D(e)}function q(e){return function(o){o=m(o);var t=d(o)?I(o):void 0,n=t?t[0]:o.charAt(0),r=t?j(t,1).join(""):o.slice(1);return n[e]()+r}}var K=q("toUpperCase");const Y=K;function Q(e){return Y(m(e).toLowerCase())}var X=x(function(e,o,t){return o=o.toLowerCase(),e+(t?Q(o):o)});const ee=X,ne=e=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim.test(e)!==!1,se=(e,o)=>{var n;const t=(n=window==null?void 0:window.libphonenumber)==null?void 0:n.parsePhoneNumberFromString(e,o);return t?t.isValid():!1},ae=(e,o,t=void 0)=>{const n=s=>String.prototype.split.call(o,s).filter(Boolean).reduce((a,A)=>a!=null?a[A]:a,e),r=n(/[,[\]]+?/)||n(/[,[\].]+?/);return r===void 0||r===e?t:r},y=e=>typeof e=="object"&&e!=null?!(Object.keys(e).length>=1):!0,te=e=>(o,t)=>o[e]>t[e]?1:t[e]>o[e]?-1:0,ue=(e,o)=>e.concat().sort(te(o)),ce=(e,{length:o,ending:t})=>e?(o==null&&(o=100),t==null&&(t="..."),e.length>o?e.substring(0,o-t.length)+t:e):"",ie={docx:["vnd.openxmlformats-officedocument.wordprocessingml.document","docx"],doc:["msword","doc"],xlsx:["vnd.openxmlformats-officedocument.spreadsheetml.sheet","xlsx"],xls:["vnd.ms-excel","xls"]};async function fe(e){const t=new AbortController,{signal:n}=t,r=setTimeout(()=>{t.abort()},30*1e3);try{const s=await fetch(e,{signal:n}),a=await s.json();if(clearTimeout(r),s.status!==200)throw i({statusCode:s.status,statusMessage:s.statusText});return a}catch(s){throw clearTimeout(r),i({statusCode:s.statusCode||500,statusMessage:s.statusMessage||"API took more than 30s to respond"})}}const le=(e,o)=>e.length===o.length&&e.every((t,n)=>t===o[n]);function f(e){let o=y(e);if(e instanceof Date||e===void 0||o)return e;if(e instanceof Array)return e.map(t=>f(t));if(e instanceof Object){const t={};return Object.keys(e).forEach(n=>{let r=e[n];r&&r._seconds!==void 0&&r._nanoseconds!==void 0&&(r=new Date(r._seconds*1e3+r._nanoseconds/1e6)),r instanceof Object&&(r=f(r)),n.includes("_")?t[ee(n)]=r:t[n]=r}),t}return e}function l(e){let o=y(e);if(e instanceof Date||e===void 0||o)return e;if(Array.isArray(e))return e.map(t=>l(t));if(typeof e=="object"){const t={};return Object.keys(e).forEach(n=>{let r=e[n];r&&r._seconds!==void 0&&r._nanoseconds!==void 0&&(r=new Date(r._seconds*1e3+r._nanoseconds/1e6)),typeof r=="object"&&(r=l(r)),t[O(n)]=r}),t}return e}const me=[{event:"LCCookieConsentDoneFB",data:{fb:"grant"}},{event:"LCCookieConsentDoneGTag",data:{gtag:"grant"}},{event:"LCCookieConsentDoneGTM",data:{gtm:"grant"}}],de=[{event:"LCCookieConsentDoneFB",data:{fb:"revoke"}},{event:"LCCookieConsentDoneGTag",data:{gtag:"revoke"}},{event:"LCCookieConsentDoneGTM",data:{gtm:"revoke"}}],pe=e=>e&&!e.startsWith("#")&&!/^https?:/.test(e)?`https://${e}`:e,ve=e=>{const o={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t.replace(/(\_\w)/g,function(n){return n[1].toUpperCase()})]=e[t]);return o};export{ae as a,se as b,ve as c,l as d,le as e,fe as f,me as g,ie as h,y as i,f as j,pe as l,de as r,ue as s,ce as t,ne as v};