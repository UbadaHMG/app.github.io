import{d as $,I as W,c as C,r as E,a as o,b as s,f as l,i as d,Q as c,t as f,e as a,n as v,w,R as I,a9 as K,z as S,m as j,T as Y,h as D,p as H,P as Q}from"./entry.0e8f1b40.js";import{y as A,o as G,z as J}from"./index.35670e06.js";import{C as X}from"./check-circle.32c8084a.js";import{S as Z}from"./ShortLabel.dcf5c539.js";import{at as x,aw as M}from"./constants.c1fa6fa6.js";import"./HLConst.96411594.js";const _=["innerHTML"],ee={key:1,class:"label-alignment"},te={key:0},ie={class:"flex-col"},le=["placeholder","name","data-q","data-required"],ae=["onClick"],ne={key:1,class:"verified-text"},oe=["src"],re={key:2,class:"verification-container"},se=a("br",null,null,-1),de=["onClick"],me=["onClick"],ue={key:2,id:"error-container",class:"error"},ce={key:3,id:"error-container",class:"error"},ke=$({__name:"EmailElement",props:{kind:{type:String},item:{type:Object},formLabelVisible:{type:Boolean},formFieldsValue:{type:Object},layoutType:{type:[Number,Boolean]},checkFullWidthPosition:{type:Boolean},fontSize:{type:[Number,String]},locationId:{type:String},errors:{type:Object,default:()=>({})}},emits:["addOrUpdateError","isSlideMovable","verifyEmail"],setup(t,{expose:N,emit:p}){const e=t,O=Q(),{t:F}=W(),y=C(()=>e.kind=="survey"||e.kind=="quiz"),L=C(()=>e.errors[e.item.tag]),P=n=>{y.value&&p("isSlideMovable",n)},R=()=>{var i;if(y.value)return;const n=e.formFieldsValue[e.item.tag];if(e.item.required&&G(n))m(e.item.tag,F("email_error"));else{if(!J(n)){m(e.item.tag,F("guest_email_invalid_error"));return}if(e.item.enableValidateEmail&&!((i=e.item)!=null&&i.hidden)&&!V.value&&n){m(e.item.tag,"Email is not verified!");return}m(e.item.tag,null)}},h=E(""),u=E(null),T=E(null),b=E(!1),V=E(!1),q=C(()=>e.item.enableValidateEmail&&A(e.formFieldsValue[e.item.tag])),U=()=>{const n={locationId:e.locationId,email:e.formFieldsValue[e.item.tag],type:e.kind};$fetch(`${O.public.FORMS_SERVICE_URL}/forms/verify-email`,{method:"POST",body:n}).then(i=>{T.value=i.token,m(e.item.tag,null),u.value=null,b.value=!0}).catch(i=>{var r,k;m(e.item.tag,(r=i.data)==null?void 0:r.message),y.value&&(u.value=(k=i.data)==null?void 0:k.message),console.error(i)})},z=()=>{const n={locationId:e.locationId,email:e.formFieldsValue[e.item.tag],type:e.kind,token:T.value,otp:h.value};$fetch(`${O.public.FORMS_SERVICE_URL}/forms/verify-email`,{method:"POST",body:n}).then(i=>{i!=null&&i.ok&&(m(e.item.tag,null),u.value=null,V.value=!0,b.value=!1,p("verifyEmail","Yes"))}).catch(i=>{var r,k;m(e.item.tag,(r=i.data)==null?void 0:r.message),y.value&&(u.value=(k=i.data)==null?void 0:k.message),console.error(i)})},B=()=>{e.formFieldsValue[e.item.tag]="",h.value="",b.value=!1,m(e.item.tag,null),u.value=null},m=(n,i)=>{p("addOrUpdateError",{tag:n,error:i})},g=C(()=>[x.ONE_COLUMN,x.TWO_COLUMN,x.SINGLE_LINE].includes(e.layoutType)?e.item.fieldWidthPercentage?e.item.fieldWidthPercentage<=50:!0:e.layoutType===!0&&e.checkFullWidthPosition);return N({validate:R,item:e.item}),(n,i)=>(o(),s("div",{class:v(["form-builder--item field-container",{"d-none":t.item.hidden,"form-builder--item-input":t.kind==="survey"}])},[l(y)&&t.item.description!==void 0?(o(),s("label",{key:0,innerHTML:t.item.description,class:"item-description",style:{display:"block"}},null,8,_)):d("",!0),t.formLabelVisible?(o(),s("label",ee,[c(f(t.item.label)+" ",1),t.item.required?(o(),s("span",te,"*")):d("",!0)])):d("",!0),a("div",ie,[!l(b)&&!l(V)?(o(),s("div",{key:0,class:v(["email-input",l(g)?"block":"flex"])},[w(a("input",{"onUpdate:modelValue":i[0]||(i[0]=r=>t.formFieldsValue[t.item.tag]=r),placeholder:!t.formLabelVisible&&t.item.required?t.item.placeholder+"*":t.item.placeholder,name:t.item.tag,onKeydown:i[1]||(i[1]=K(S(r=>P({}),["prevent"]),["enter"])),type:"email",class:"form-control","data-q":t.item.hiddenFieldQueryKey,"data-required":t.item.required},null,40,le),[[I,t.formFieldsValue[t.item.tag]]]),l(q)?(o(),s("button",{key:0,onClick:S(U,["prevent"]),class:v(["preview-common-btn",l(g)?"mt-3":""]),style:j({fontSize:`${t.fontSize}px`})}," Verify Email ",14,ae)):d("",!0)],2)):d("",!0),l(V)?(o(),s("div",ne,[a("img",{src:l(X),height:"18",width:"18",alt:"verified",class:"mr-3"},null,8,oe),a("span",null,[c(" Your email "),a("b",null,f(t.formFieldsValue[t.item.tag]),1),c(" has been successfully verified.")])])):d("",!0),l(b)?(o(),s("div",re,[a("p",null,[c(" Your verification code has been sent to "),a("b",null,f(t.formFieldsValue[t.item.tag]),1),c(". "),se,c("Kindly review your email inbox and insert the code below to complete the verification process. ")]),a("div",{class:v(["email-input mt-3",l(g)||l(M)()?"block":"flex"])},[w(a("input",{type:"text","onUpdate:modelValue":i[2]||(i[2]=r=>Y(h)?h.value=r:null),maxlength:"6",class:"otp",placeholder:"Enter OTP"},null,512),[[I,l(h)]]),a("div",{class:v(l(g)||l(M)()?"mt-3 block":"flex")},[a("button",{onClick:S(z,["prevent"]),class:v(["confirm-btn",l(g)?"mb-3":""])}," Confirm Code ",10,de),a("button",{onClick:S(B,["prevent"]),class:"reset-btn"}," Edit Email ",8,me)],2)],2)])):d("",!0),t.item.shortLabel?(o(),D(Z,{key:3},{default:H(()=>[c(f(t.item.shortLabel),1)]),_:1})):d("",!0)]),l(L)?(o(),s("div",ue,f(l(L)),1)):d("",!0),l(u)?(o(),s("div",ce,f(l(u)),1)):d("",!0)],2))}});export{ke as default};