import{d as ee,I as te,c as b,r as f,o as ie,J as oe,A as ne,w as F,f as n,a as r,b as d,e as l,n as h,i as u,Q as c,t as y,a9 as $,z as p,m as ae,v as le,T as re,R as B,h as T,p as q,ad as de,u as ue,P as se}from"./entry.0e8f1b40.js";import{t as K,o as me,w as ce}from"./index.35670e06.js";import{F as he}from"./FunnelServices.e4841ee2.js";import{l as ye,i as fe}from"./IntlTel.edb30062.js";import{V as ve,o as be}from"./optimize_script.5f619b33.js";import{S as O}from"./ShortLabel.dcf5c539.js";import{C as ge}from"./check-circle.32c8084a.js";import{at as x,aw as j}from"./constants.c1fa6fa6.js";const Ce=["id"],ke=["innerHTML"],Ve={key:1,class:"label-alignment"},Se={key:0},Pe={key:2,class:"flex-col"},Fe=["value","name","placeholder","id","data-q","data-required"],pe=["onClick"],we={key:0,class:"verified-text"},Ie=["src"],Le={key:1,class:"verification-container"},Te=l("br",null,null,-1),qe=["onClick"],Oe=["onClick"],xe={key:3},Ee={class:"flex-col"},Ne=["placeholder","name","id","data-q","data-required"],Ue={key:4,class:"flex-col"},Me=["type","placeholder","name","id","data-q","data-required"],Re={key:5,id:"error-container",class:"error"},De={key:6,id:"error-container",class:"error"},Ye=ee({__name:"TextElement",props:{kind:{type:String},item:{type:Object},formLabelVisible:{type:Boolean},phoneCountryIncluded:{type:Object},phoneCountryCode:{type:Object},formattedPhone:{type:Object},locationCountry:{type:String},formFieldsValue:{type:Object},phoneFields:{type:Object},phoneCountryDerived:{type:String},layoutType:{type:[Number,Boolean]},checkFullWidthPosition:{type:Boolean},fontSize:{type:[Number,String]},locationId:{type:String},mediumId:{type:String},errors:{type:Object,default:()=>({})}},emits:["addOrUpdateError","isSlideMovable","customFieldPhoneNumberUpdate","updatePhoneCountryDerived","verifyPhone"],setup(t,{expose:z,emit:g}){const e=t,{t:W}=te(),E=se(),w=b(()=>{var o;return((o=e.item)==null?void 0:o.enableCountryPicker)!==!1}),N=f(),C=f(),Q=o=>{e.phoneCountryIncluded[e.item.tag]=o.target.value},H=b(()=>e.kind=="form"),v=b(()=>e.kind=="survey"),U=b(()=>e.errors[e.item.tag]),Y=()=>{var o;((o=e.item)==null?void 0:o.tag)==="phone"&&be(()=>{ue(ye(w,{intlTelFunc:()=>{w.value&&fe(R)}}))})};ie(()=>{var o;((o=e.item)==null?void 0:o.tag)==="phone"&&he.getGeoLocation().then(i=>{const a=i.country!=="ZZ"?i.country:e.locationCountry;e.phoneCountryCode[e.item.tag]=a,A(a),e.phoneCountryIncluded[e.item.tag]&&e.phoneCountryCode[e.item.tag]&&L({tag:e.item.tag})}).catch(i=>{console.error("Error while fetching headers: ",i)})});const L=o=>{g("customFieldPhoneNumberUpdate",o)},M=o=>{v.value&&g("isSlideMovable",o)},R=()=>{var i;const o=N.value;o&&(C.value=(i=window==null?void 0:window.intlTelInput)==null?void 0:i.call(window,o,{preferredCountries:["us","gb","ca","au"],initialCountry:e.locationCountry.toLowerCase()||"us"}),o.addEventListener("countrychange",()=>{if(!C.value)return;const a=C.value.getNumber(),m=C.value.getSelectedCountryData().iso2;e.phoneCountryIncluded[o.name]=a,e.phoneCountryCode[o.name]=m?m.toUpperCase():"US",L({tag:o.name})}))},A=o=>{g("updatePhoneCountryDerived",o)},G=o=>{var a,m;if(v.value)return;const i=e.formFieldsValue[e.item.tag];if(e.item.required&&me(i))s(e.item.tag,((a=e.item)==null?void 0:a.error)??` ${e.item.label} is required`);else if(e.item.tag==="phone")if(!K(i,e.phoneCountryCode[e.item.tag]?e.phoneCountryCode[e.item.tag]:e.locationCountry))s(e.item.tag,W("invalid_phone_no"));else if(e.item.enableValidatePhone&&!((m=e.item)!=null&&m.hidden)&&!I.value&&i){s(e.item.tag,"Phone is not verified!");return}else s(e.item.tag,null);else e.item.tag==="website"&&!ce(i)?s(e.item.tag,"Invalid url"):s(e.item.tag,null)},k=f(""),V=f(null),D=f(null),S=f(!1),I=f(!1),Z=b(()=>e.formFieldsValue[e.item.tag]?e.item.enableValidatePhone&&K(e.formFieldsValue[e.item.tag],e.phoneCountryCode[e.item.tag]?e.phoneCountryCode[e.item.tag]:e.locationCountry):!1),J=()=>{var a;S.value=!0;const o=(a=window.libphonenumber.parsePhoneNumberFromString(e.formFieldsValue[e.item.tag],e.phoneCountryCode[e.item.tag]?e.phoneCountryCode[e.item.tag]:e.locationCountry))==null?void 0:a.number,i={locationId:e.locationId,phone:o,type:v.value?"survey":"form",mediumId:e.mediumId};$fetch(`${E.public.FORMS_SERVICE_URL}/forms/verify-phone`,{method:"POST",body:i}).then(m=>{D.value=m.token}).catch(m=>{console.error(m)})},X=()=>{const o={locationId:e.locationId,phone:e.formFieldsValue[e.item.tag],type:v.value?"survey":"form",token:D.value,otp:k.value,mediumId:e.mediumId};$fetch(`${E.public.FORMS_SERVICE_URL}/forms/verify-phone`,{method:"POST",body:o}).then(i=>{i!=null&&i.ok&&(s(e.item.tag,null),V.value=null,I.value=!0,S.value=!1,g("verifyPhone","Yes"))}).catch(i=>{s(e.item.tag,"The security code is not correct or has been used. Try with a new code."),v.value&&(V.value="The security code is not correct or has been used. Try with a new code."),console.error(i)})},_=()=>{k.value="",S.value=!1,s(e.item.tag,null),V.value=null},s=(o,i)=>{g("addOrUpdateError",{tag:o,error:i})};oe(()=>e.phoneCountryDerived,(o,i)=>{i!==o&&w.value&&R()}),ne(()=>{var o;(o=C.value)==null||o.destroy()});const P=b(()=>[x.ONE_COLUMN,x.TWO_COLUMN,x.SINGLE_LINE].includes(e.layoutType)?e.item.fieldWidthPercentage?e.item.fieldWidthPercentage<=50:!0:e.layoutType===!0&&e.checkFullWidthPosition);return z({validate:G,item:e.item}),(o,i)=>F((r(),d("div",null,[l("div",{class:h([{"d-none":t.item.hidden},"field-container"])},[l("div",{id:"form-"+t.item.tag,class:h(["form-builder--item",{"form-builder--item-input":t.kind=="survey"}])},[n(v)&&t.item.description!==void 0?(r(),d("label",{key:0,innerHTML:t.item.description,class:"item-description"},null,8,ke)):u("",!0),t.formLabelVisible?(r(),d("label",Ve,[c(y(t.item.label||" ")+" ",1),t.item.required?(r(),d("span",Se,"*")):u("",!0)])):u("",!0),t.item.tag=="phone"?(r(),d("div",Pe,[F(l("div",{class:h(["phone-input",n(P)?"block":"flex"])},[t.item.tag=="phone"?(r(),d("input",{key:0,onInput:Q,value:t.formattedPhone[t.item.tag],type:"tel",name:t.item.tag,placeholder:!t.formLabelVisible&&t.item.required?t.item.placeholder+"*":t.item.placeholder,autocomplete:"off",class:h(n(w)?"countryphone":"form-control"),ref:a=>N.value=a,id:t.item.tag,"data-q":t.item.hiddenFieldQueryKey,"data-required":t.item.required,onKeyup:i[0]||(i[0]=a=>L(t.item)),onKeydown:i[1]||(i[1]=$(p(a=>M({}),["prevent"]),["enter"]))},null,42,Fe)):u("",!0),n(Z)?(r(),d("button",{key:1,onClick:p(J,["prevent"]),class:h(["verify-phone-btn",n(P)?"mt-3":""]),style:ae({fontSize:`${t.fontSize}px`})}," Verify Phone ",14,pe)):u("",!0)],2),[[le,!n(S)&&!n(I)]]),n(I)?(r(),d("div",we,[l("img",{src:n(ge),height:"18",width:"18",alt:"verified",class:"mr-3"},null,8,Ie),l("span",null,[c(" Your phone "),l("b",null,y(t.formFieldsValue[t.item.tag]),1),c(" has been successfully verified.")])])):u("",!0),n(S)?(r(),d("div",Le,[l("p",null,[c(" Your verification code has been sent to "),l("b",null,y(t.formFieldsValue[t.item.tag]),1),c(". "),Te,c("Kindly review your sms and insert the code below to complete the verification process. ")]),l("div",{class:h(["phone-input mt-3",n(P)||n(j)()?"block":"flex"])},[F(l("input",{type:"text","onUpdate:modelValue":i[2]||(i[2]=a=>re(k)?k.value=a:null),maxlength:"6",class:"otp",placeholder:"Enter OTP"},null,512),[[B,n(k)]]),l("div",{class:h(n(P)||n(j)()?"mt-3 block":"flex")},[l("button",{onClick:p(X,["prevent"]),class:h(["confirm-btn",n(P)?"mb-3":""])}," Confirm Code ",10,qe),l("button",{onClick:p(_,["prevent"]),class:"reset-btn"}," Edit Phone ",8,Oe)],2)],2)])):u("",!0),t.item.shortLabel?(r(),T(O,{key:2},{default:q(()=>[c(y(t.item.shortLabel),1)]),_:1})):u("",!0)])):n(H)&&t.item.tag=="website"?(r(),d("div",xe,[l("div",Ee,[F(l("input",{"onUpdate:modelValue":i[3]||(i[3]=a=>t.formFieldsValue[t.item.tag]=a),placeholder:!t.formLabelVisible&&t.item.required?t.item.placeholder+"*":t.item.placeholder,name:t.item.tag,type:"text",class:"form-control",id:t.item.tag,"data-q":t.item.hiddenFieldQueryKey,"data-required":t.item.required},null,8,Ne),[[B,t.formFieldsValue[t.item.tag]]]),t.item.shortLabel?(r(),T(O,{key:0},{default:q(()=>[c(y(t.item.shortLabel),1)]),_:1})):u("",!0)])])):(r(),d("div",Ue,[F(l("input",{"onUpdate:modelValue":i[4]||(i[4]=a=>t.formFieldsValue[t.item.tag]=a),type:t.item.type,placeholder:!t.formLabelVisible&&t.item.required?t.item.placeholder+"*":t.item.placeholder,name:t.item.tag,onKeydown:i[5]||(i[5]=$(p(a=>M({}),["prevent"]),["enter"])),class:"form-control",id:t.item.tag,"data-q":t.item.hiddenFieldQueryKey,"data-required":t.item.required},null,40,Me),[[de,t.formFieldsValue[t.item.tag]]]),t.item.shortLabel?(r(),T(O,{key:0},{default:q(()=>[c(y(t.item.shortLabel),1)]),_:1})):u("",!0)])),n(U)?(r(),d("div",Re,y(n(U)),1)):u("",!0),n(V)&&t.item.tag=="phone"?(r(),d("div",De,y(n(V)),1)):u("",!0)],10,Ce)],2)])),[[n(ve),Y]])}});export{Ye as _};