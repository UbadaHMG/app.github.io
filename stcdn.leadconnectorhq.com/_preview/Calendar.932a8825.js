import{d as w,I as x,o as y,a as t,b as o,Q as E,t as b,f as h,h as c,i as I,q as i,s as d,e as S,P as g}from"./entry.0e8f1b40.js";import{u as B,w as D}from"./constants.c1fa6fa6.js";import{u as P}from"./useRedirectAction.c1fc0127.js";import"./HLConst.96411594.js";const k=i(()=>d(()=>import("./CalendarComponentv3.5de7fa34.js"),["./_calendarServices.cf9d17c3.css","./app.5efdd9e1.css","./_main.58e50ebc.css","./TextElement.0b941f97.css","./TextBoxListElement.b602ad61.css","./TextAreaElement.0c70ddc9.css","./OptionElement.05aaf420.css","./authorizeNet.328fe155.css","./FormComponent.f054a818.css","./vue-multiselect.eb3eab67.css","./CalendarRecurringAppointments.3ef96c60.css","./ghl-payment-element.045b884e.css","./CalendarPaymentPage.d0445c33.css","./CalendarComponentv3.dbcd94b8.css"],import.meta.url).then(e=>e.default||e)),L=i(()=>d(()=>import("./CalendarCompNew.5f7edb0c.js"),["./TextElement.0b941f97.css","./TextBoxListElement.b602ad61.css","./TextAreaElement.0c70ddc9.css","./OptionElement.05aaf420.css","./authorizeNet.328fe155.css","./FormComponent.f054a818.css","./vue-multiselect.eb3eab67.css","./app.5efdd9e1.css","./CalendarRecurringAppointments.3ef96c60.css","./DatePick.6beced99.css","./CalendarComponent.64f21e04.css","./_main.58e50ebc.css","./_calendarServices.cf9d17c3.css","./ghl-payment-element.045b884e.css","./CalendarPaymentPage.d0445c33.css","./CalendarComponentv3.dbcd94b8.css"],import.meta.url).then(e=>e.default||e)),O={key:0,class:"form-error"},R=S("i",{class:"fas fa-exclamation-triangle"},null,-1),N=w({__name:"Calendar",props:{element:{type:Object,required:!0}},setup(e){const s=e,{t:m}=x(),u=B(),f=g(),{redirectOnSubmit:v}=P();function a(){v(s.element)}return y(async()=>{const n=await $fetch(f.public.newBaseURL+`/get-whitelabel?locationId=${u.value.locationId}`);D("wl",n.whitelabelUrl)}),(n,T)=>{var l,r;const C=k,_=L;return t(),o("div",null,[e.element.extra.calendarId&&e.element.extra.calendarId.value==="none"?(t(),o("div",O,[R,E(" "+b(h(m)("unable_to_fetch_calendar")),1)])):(r=(l=e.element)==null?void 0:l.calendarData)!=null&&r.isTeamSelected?(t(),c(C,{key:1,"calendar-data":e.element.calendarData,calendarElementClass:e.element.id,redirect:e.element.extra.action&&e.element.extra.action.value==="none",onOnSubmit:a,"funnel-preview":!0,"direct-widget":!1},null,8,["calendar-data","calendarElementClass","redirect"])):e.element.calendarData?(t(),c(_,{key:2,"calendar-data":e.element.calendarData,calendarElementClass:e.element.id,redirect:e.element.extra.action&&e.element.extra.action.value==="none","funnel-preview":!0,onOnSubmit:a},null,8,["calendar-data","calendarElementClass","redirect"])):I("",!0)])}}});export{N as default};