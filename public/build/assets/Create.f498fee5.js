import{L as p}from"./Admin.38ca9280.js";import{H as w,L as y,r as S,a as _,o as i,c as n,b as d,w as u,d as t,e as V,f as h,v as g,t as r,g as m,s as U,F as b,p as L,h as D,i as f}from"./app.089bb533.js";import{S as N}from"./sweetalert2.all.ddb810f1.js";import{Z as j}from"./main.18ec42bd.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const C={layout:p,components:{Head:w,Link:y,Datepicker:j},props:{errors:Object,exams:Array},setup(){const l=S({title:"",exam_id:"",start_time:"",end_time:""});return{form:l,submit:()=>{D.Inertia.post("/admin/exam_sessions",{title:l.title,exam_id:l.exam_id,start_time:l.start_time,end_time:l.end_time},{onSuccess:()=>{N.fire({title:"Success!",text:"Sesi Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},M=t("title",null,"Tambah Sesi Ujian - Aplikasi Ujian Online",-1),H={class:"container-fluid mb-5 mt-5"},T={class:"row"},A={class:"col-md-12"},F=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),O=f(" Kembali"),W={class:"card border-0 shadow"},Z={class:"card-body"},E=t("h5",null,[t("i",{class:"fas fa-stopwatch"}),f(" Tambah Sesi")],-1),I=t("hr",null,null,-1),K={class:"row"},R={class:"col-md-6"},q={class:"mb-4"},z=t("label",null,"Nama Sesi",-1),G={key:0,class:"alert alert-danger mt-2"},J={class:"col-md-6"},P={class:"mb-4"},Q=t("label",null,"Ujian",-1),X=["value"],Y={key:0,class:"alert alert-danger mt-2"},$={class:"row"},tt={class:"col-md-6"},et={class:"mb-4"},st=t("label",null,"Waktu Mulai",-1),ot={key:0,class:"alert alert-danger mt-2"},at={class:"col-md-6"},it={class:"mb-4"},nt=t("label",null,"Waktu Selesai",-1),lt={key:0,class:"alert alert-danger mt-2"},rt=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),dt=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function mt(l,s,a,o,_t,ct){const v=_("Head"),k=_("Link"),c=_("Datepicker");return i(),n(b,null,[d(v,null,{default:u(()=>[M]),_:1}),t("div",H,[t("div",T,[t("div",A,[d(k,{href:"/admin/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:u(()=>[F,O]),_:1}),t("div",W,[t("div",Z,[E,I,t("form",{onSubmit:s[4]||(s[4]=V((...e)=>o.submit&&o.submit(...e),["prevent"]))},[t("div",K,[t("div",R,[t("div",q,[z,h(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sesi","onUpdate:modelValue":s[0]||(s[0]=e=>o.form.title=e)},null,512),[[g,o.form.title]]),a.errors.title?(i(),n("div",G,r(a.errors.title),1)):m("",!0)])]),t("div",J,[t("div",P,[Q,h(t("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=e=>o.form.exam_id=e)},[(i(!0),n(b,null,L(a.exams,(e,x)=>(i(),n("option",{key:x,value:e.id},r(e.title),9,X))),128))],512),[[U,o.form.exam_id]]),a.errors.exam_id?(i(),n("div",Y,r(a.errors.exam_id),1)):m("",!0)])])]),t("div",$,[t("div",tt,[t("div",et,[st,d(c,{modelValue:o.form.start_time,"onUpdate:modelValue":s[2]||(s[2]=e=>o.form.start_time=e)},null,8,["modelValue"]),a.errors.start_time?(i(),n("div",ot,r(a.errors.start_time),1)):m("",!0)])]),t("div",at,[t("div",it,[nt,d(c,{modelValue:o.form.end_time,"onUpdate:modelValue":s[3]||(s[3]=e=>o.form.end_time=e)},null,8,["modelValue"]),a.errors.end_time?(i(),n("div",lt,r(a.errors.end_time),1)):m("",!0)])])]),rt,dt],32)])])])])])],64)}const kt=B(C,[["render",mt]]);export{kt as default};