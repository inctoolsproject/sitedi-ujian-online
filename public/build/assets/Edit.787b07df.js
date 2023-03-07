import{L as b}from"./Admin.fd8a5958.js";import{H as f,L as p,r as h,a,o as g,c as y,b as e,w as r,d as t,e as w,f as V,s as k,F as v,h as q,i as m,j}from"./app.b8b140a1.js";import{S as u}from"./sweetalert2.all.4c9c5a0e.js";import{E as x}from"./Editor.3c4dc7b3.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";const E={layout:b,components:{Head:f,Link:p,Editor:x},props:{errors:Object,exam:Object,question:Object},setup(n){const o=h({question:n.question.question,option_1:n.question.option_1,option_2:n.question.option_2,option_3:n.question.option_3,option_4:n.question.option_4,option_5:n.question.option_5,answer:n.question.answer});return{form:o,submit:()=>{if(!o.option_5&&o.answer==="5")return u.fire({title:"Gagal!",text:"Kunci jawaban tidak tersedia",icon:"warning",showConfirmButton:!1,timer:2e3});q.Inertia.put(`/admin/exams/${n.exam.id}/questions/${n.question.id}/update`,{question:o.question,option_1:o.option_1,option_2:o.option_2,option_3:o.option_3,option_4:o.option_4,option_5:o.option_5,answer:o.answer},{onSuccess:()=>{u.fire({title:"Berhasil!",text:"Soal Ujian Berhasil Dipdate!",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},B=t("title",null,"Edit Soal Ujian - SITEDI",-1),U=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),C={class:"container-fluid mb-5 mt-5"},L={class:"row"},D={class:"col-md-12"},P=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),H=m(" Kembali"),N={class:"card border-0 shadow"},A={class:"card-body"},I=t("h5",null,[t("i",{class:"fa fa-question-circle"}),m(" Edit Soal Ujian ")],-1),O=t("hr",null,null,-1),F={class:"table-responsive mb-4"},K={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=t("td",{style:{width:"20%"},class:"fw-bold"}," Soal ",-1),T=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan A ",-1),G=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan B ",-1),J=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan C ",-1),R=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan D ",-1),z=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan E ",-1),Q=t("td",{style:{width:"20%"},class:"fw-bold"}," Jawaban Benar ",-1),W=j('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),X=[W],Y=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"}," Simpan ",-1),Z=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"}," Reset ",-1);function $(n,o,d,i,tt,ot){const c=a("Head"),_=a("Link"),s=a("Editor");return g(),y(v,null,[e(c,null,{default:r(()=>[B,U]),_:1}),t("div",C,[t("div",L,[t("div",D,[e(_,{href:`/admin/exams/${d.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:r(()=>[P,H]),_:1},8,["href"]),t("div",N,[t("div",A,[I,O,t("form",{onSubmit:o[7]||(o[7]=w((...l)=>i.submit&&i.submit(...l),["prevent"]))},[t("div",F,[t("table",K,[t("tbody",null,[t("tr",null,[M,t("td",null,[e(s,{"api-key":"no-api-key",modelValue:i.form.question,"onUpdate:modelValue":o[0]||(o[0]=l=>i.form.question=l),init:{menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[T,t("td",null,[e(s,{"api-key":"no-api-key",modelValue:i.form.option_1,"onUpdate:modelValue":o[1]||(o[1]=l=>i.form.option_1=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[G,t("td",null,[e(s,{"api-key":"no-api-key",modelValue:i.form.option_2,"onUpdate:modelValue":o[2]||(o[2]=l=>i.form.option_2=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[J,t("td",null,[e(s,{"api-key":"no-api-key",modelValue:i.form.option_3,"onUpdate:modelValue":o[3]||(o[3]=l=>i.form.option_3=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[R,t("td",null,[e(s,{"api-key":"no-api-key",modelValue:i.form.option_4,"onUpdate:modelValue":o[4]||(o[4]=l=>i.form.option_4=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[z,t("td",null,[e(s,{"api-key":"no-api-key",modelValue:i.form.option_5,"onUpdate:modelValue":o[5]||(o[5]=l=>i.form.option_5=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[Q,t("td",null,[V(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=l=>i.form.answer=l)},X,512),[[k,i.form.answer]])])])])])]),Y,Z],32)])])])])])],64)}const at=S(E,[["render",$]]);export{at as default};