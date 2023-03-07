import{L as _}from"./Admin.fd8a5958.js";import{H as b,L as f,r as h,a as s,o as g,c as y,b as e,w as d,d as t,e as w,f as V,s as k,F as v,h as j,i as u,j as x}from"./app.b8b140a1.js";import{S as m}from"./sweetalert2.all.4c9c5a0e.js";import{E as S}from"./Editor.3c4dc7b3.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const U={layout:_,components:{Head:b,Link:f,Editor:S},props:{errors:Object,exam:Object},setup(a){const o=h({question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:""});return{form:o,submit:()=>!o.option_5&&o.answer==="5"?m.fire({title:"Gagal!",text:"Kunci jawaban tidak tersedia",icon:"warning",showConfirmButton:!1,timer:2e3}):j.Inertia.post(`/admin/exams/${a.exam.id}/questions/store`,{question:o.question,option_1:o.option_1,option_2:o.option_2,option_3:o.option_3,option_4:o.option_4,option_5:o.option_5,answer:o.answer},{onSuccess:()=>{m.fire({title:"Berhasil!",text:"Soal Ujian Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3})}})}}},E=t("title",null,"Tambah Soal Ujian - SITEDI",-1),q=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),C={class:"container-fluid mb-5 mt-5"},L={class:"row"},D={class:"col-md-12"},P=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),H=u(" Kembali"),N={class:"card border-0 shadow"},T={class:"card-body"},A=t("h5",null,[t("i",{class:"fa fa-question-circle"}),u(" Tambah Soal Ujian ")],-1),I=t("hr",null,null,-1),F={class:"table-responsive mb-4"},K={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=t("td",{style:{width:"20%"},class:"fw-bold"}," Soal ",-1),O=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan A ",-1),G=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan B ",-1),J=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan C ",-1),R=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan D ",-1),z=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan E ",-1),Q=t("td",{style:{width:"20%"},class:"fw-bold"}," Jawaban Benar ",-1),W=x('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),X=[W],Y=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"}," Simpan ",-1),Z=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"}," Reset ",-1);function $(a,o,r,l,tt,ot){const c=s("Head"),p=s("Link"),n=s("Editor");return g(),y(v,null,[e(c,null,{default:d(()=>[E,q]),_:1}),t("div",C,[t("div",L,[t("div",D,[e(p,{href:`/admin/exams/${r.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:d(()=>[P,H]),_:1},8,["href"]),t("div",N,[t("div",T,[A,I,t("form",{onSubmit:o[7]||(o[7]=w((...i)=>l.submit&&l.submit(...i),["prevent"]))},[t("div",F,[t("table",K,[t("tbody",null,[t("tr",null,[M,t("td",null,[e(n,{"api-key":"no-api-key",modelValue:l.form.question,"onUpdate:modelValue":o[0]||(o[0]=i=>l.form.question=i),init:{menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[O,t("td",null,[e(n,{"api-key":"no-api-key",modelValue:l.form.option_1,"onUpdate:modelValue":o[1]||(o[1]=i=>l.form.option_1=i),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[G,t("td",null,[e(n,{"api-key":"no-api-key",modelValue:l.form.option_2,"onUpdate:modelValue":o[2]||(o[2]=i=>l.form.option_2=i),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[J,t("td",null,[e(n,{"api-key":"no-api-key",modelValue:l.form.option_3,"onUpdate:modelValue":o[3]||(o[3]=i=>l.form.option_3=i),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[R,t("td",null,[e(n,{"api-key":"no-api-key",modelValue:l.form.option_4,"onUpdate:modelValue":o[4]||(o[4]=i=>l.form.option_4=i),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[z,t("td",null,[e(n,{"api-key":"no-api-key",modelValue:l.form.option_5,"onUpdate:modelValue":o[5]||(o[5]=i=>l.form.option_5=i),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[Q,t("td",null,[V(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=i=>l.form.answer=i)},X,512),[[k,l.form.answer]])])])])])]),Y,Z],32)])])])])])],64)}const at=B(U,[["render",$]]);export{at as default};