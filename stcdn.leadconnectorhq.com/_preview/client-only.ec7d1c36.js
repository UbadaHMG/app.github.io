import{d as o,r as u,o as d,b}from"./entry.0e8f1b40.js";const m=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(k,{slots:a,attrs:t}){const l=u(!1);return d(()=>{l.value=!0}),e=>{var r;if(l.value)return(r=a.default)==null?void 0:r.call(a);const n=a.fallback||a.placeholder;if(n)return n();const c=e.fallback||e.placeholder||"",f=e.fallbackTag||e.placeholderTag||"span";return b(f,t,c)}}});export{m as _};