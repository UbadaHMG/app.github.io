import{d as E,c as f,r as O,a as o,b as d,f as r,i as n,Q as C,t as v,e as s,F as I,k as M,m as w,w as B,ae as U,a9 as W,z as $,h as j,p as z,n as A}from"./entry.0e8f1b40.js";import{o as D}from"./index.35670e06.js";import{S as K}from"./ShortLabel.dcf5c539.js";import{u as H,at as P}from"./constants.c1fa6fa6.js";import"./HLConst.96411594.js";const Q=["innerHTML"],G={key:1,class:"field-label label-alignment"},J={key:0},X={class:"flex-col"},Y={style:{width:"100%"}},Z={key:0,style:{display:"flex","align-items":"baseline","margin-bottom":"5px"}},p=["id","value","checked","data-q","data-required"],_=["for"],ee=["id","value"],te=["id","for"],ie=["for"],ae={key:3,id:"error-container",class:"error"},re=E({__name:"RadioOptionElement",props:{kind:{type:String},item:{type:Object},formLabelVisible:{type:Boolean},formFieldsValue:{type:Object},localTagId:{type:String},layout:{type:[Boolean,Number]},errors:{type:Object,default:()=>({})}},emits:["addOrUpdateError","handleFieldLogicChange","resetFieldsValue","setRadioValue"],setup(e,{expose:x,emit:m}){const a=e,L=H();f(()=>a.kind=="form");const u=f(()=>a.kind=="survey"),y=f(()=>a.errors[a.item.tag]),c=O(),b=i=>{u.value&&m("handleFieldLogicChange",i)},T=i=>{m("resetFieldsValue",i)},h=(i,t)=>{m("setRadioValue",{item:i,event:t})},N=(i,t)=>{c.value.checked=!0,h(i,t)},S=()=>{c.value&&(c.value.checked=!1)},R=()=>{if(u.value)return;const i=a.formFieldsValue[a.item.tag];a.item.required&&D(i)?k(a.item.tag,`${a.item.label} is required`):k(a.item.tag,null)},q=()=>{var t;let i=100;return!L.value.mobileDevice&&a.item.spreadColumns&&Number((t=a.item)==null?void 0:t.columnsNumber)?([!0,P.TWO_COLUMN].includes(a.layout)?i=Math.max(i/a.item.columnsNumber,50):i=Math.max(i/a.item.columnsNumber,20),i+"%"):"100%"},V=f(()=>({position:"relative",display:"inline-block",width:q()})),k=(i,t)=>{m("addOrUpdateError",{tag:i,error:t})};return x({validate:R,item:a.item}),(i,t)=>(o(),d("div",{class:A(["form-builder--item",{"d-none":e.item.hidden,"form-builder--item-input":r(u)}])},[r(u)&&e.item.description!==void 0?(o(),d("label",{key:0,innerHTML:e.item.description,class:"item-description"},null,8,Q)):n("",!0),e.formLabelVisible?(o(),d("label",G,[C(v(e.item.label)+" ",1),e.item.required?(o(),d("span",J,"*")):n("",!0)])):n("",!0),s("div",X,[s("div",Y,[(o(!0),d(I,null,M(e.item.picklistOptions,(l,g)=>(o(),d("div",{key:g,style:w(r(V)),class:"option-radio"},[l!==""?(o(),d("div",Z,[B(s("input",{id:l+"_"+e.item.tag+"_"+g+"_"+e.localTagId,"onUpdate:modelValue":t[0]||(t[0]=F=>e.formFieldsValue[e.item.tag]=F),value:l,checked:e.formFieldsValue[e.item.tag]==l,onChange:t[1]||(t[1]=F=>(b(e.item),S())),type:"radio","data-q":e.item.hiddenFieldQueryKey,"data-required":e.item.required},null,40,p),[[U,e.formFieldsValue[e.item.tag]]]),s("label",{style:{"margin-left":"10px","margin-bottom":"0"},for:l+"_"+e.item.tag+"_"+g+"_"+e.localTagId},v(l),9,_)])):n("",!0)],4))),128))])]),e.item.allowCustomOption?(o(),d("div",{key:2,style:w(r(V)),class:"option-radio display-flex"},[s("input",{ref:l=>c.value=l,id:e.item.tag+"_customfieldvals_"+e.localTagId,value:e.formFieldsValue[e.item.tag],onChange:t[2]||(t[2]=l=>T(e.item)),type:"radio"},null,40,ee),s("label",{id:e.item.tag+"_customfieldvals_label",for:e.item.tag+"_customfieldvals_"+e.localTagId},null,8,te),s("input",{for:e.item.tag+"_customfieldvals_label_"+e.localTagId,onFocus:t[3]||(t[3]=l=>N(e.item,l)),onInput:t[4]||(t[4]=l=>h(e.item,l)),onKeydown:t[5]||(t[5]=W($(l=>b(e.item),["prevent"]),["enter"])),type:"text",placeholder:"Press enter to add custom option",class:"add-custom-opt"},null,40,ie)],4)):n("",!0),r(y)?(o(),d("div",ae,v(r(y)),1)):n("",!0),e.item.shortLabel?(o(),j(K,{key:4},{default:z(()=>[C(v(e.item.shortLabel),1)]),_:1})):n("",!0)],2))}});export{re as default};