import{L as b}from"./Admin.fd8a5958.js";import{H as h,L as f,r as p,a as r,o as i,c as l,b as c,w as d,d as t,e as v,f as w,v as y,t as k,g,F as x,h as S,i as m}from"./app.b8b140a1.js";import{S as j}from"./sweetalert2.all.4c9c5a0e.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:b,components:{Head:h,Link:f},props:{errors:Object},setup(){const o=p({title:""});return{form:o,submit:()=>{S.Inertia.post("/admin/lessons",{title:o.title},{onSuccess:()=>{j.fire({title:"Berhasil!",text:"Pelajaran Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},N=t("title",null,"Tambah Mata Pelajaran - SITEDI",-1),C=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),P={class:"container-fluid mb-5 mt-5"},T={class:"row"},V={class:"col-md-12"},D=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),H=m(" Kembali"),M={class:"card border-0 shadow"},I={class:"card-body"},E=t("h5",null,[t("i",{class:"fa fa-bookmark"}),m(" Tambah Pelajaran")],-1),F=t("hr",null,null,-1),A={class:"mb-4"},K=t("label",null,"Nama Pelajaran",-1),O={key:0,class:"alert alert-danger mt-2"},R=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"}," Simpan ",-1),U=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"}," Reset ",-1);function q(o,s,n,e,z,G){const _=r("Head"),u=r("Link");return i(),l(x,null,[c(_,null,{default:d(()=>[N,C]),_:1}),t("div",P,[t("div",T,[t("div",V,[c(u,{href:"/admin/lessons",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:d(()=>[D,H]),_:1}),t("div",M,[t("div",I,[E,F,t("form",{onSubmit:s[1]||(s[1]=v((...a)=>e.submit&&e.submit(...a),["prevent"]))},[t("div",A,[K,w(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Pelajaran","onUpdate:modelValue":s[0]||(s[0]=a=>e.form.title=a)},null,512),[[y,e.form.title]]),n.errors.title?(i(),l("div",O,k(n.errors.title),1)):g("",!0)]),R,U],32)])])])])])],64)}const Y=B(L,[["render",q]]);export{Y as default};
