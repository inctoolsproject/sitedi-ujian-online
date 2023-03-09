import{L as w}from"./Admin.bfe2a804.js";import{H as v,L as V,r as k,a as d,o as m,c as u,b as n,w as c,d as t,e as x,t as f,g as _,f as S,s as U,F as j,h as B,i as p,j as C}from"./app.4e8d6ed2.js";import{S as b}from"./sweetalert2.all.2a976501.js";import{E}from"./Editor.bd2b843f.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:w,components:{Head:v,Link:V,Editor:E},props:{errors:Object,exam:Object},setup(a){const e=k({img:"",question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:""});return{form:e,submit:()=>!e.option_5&&e.answer==="5"?b.fire({title:"Gagal!",text:"Kunci jawaban tidak tersedia",icon:"warning",showConfirmButton:!1,timer:2e3}):B.Inertia.post(`/admin/exams/${a.exam.id}/questions/store`,{img:e.img,question:e.question,option_1:e.option_1,option_2:e.option_2,option_3:e.option_3,option_4:e.option_4,option_5:e.option_5,answer:e.answer},{onSuccess:()=>{b.fire({title:"Berhasil!",text:"Soal Ujian Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3})}})}},data(){return{imageUrl:null}},methods:{selectedFile(a){const e=a.target.files[0];if(e){const i=new FileReader;i.onload=o=>{this.imageUrl=o.target.result},i.readAsDataURL(e)}},removeSelect(){this.imageUrl=null,this.$refs.formImage.value=""}}},q=t("title",null,"Tambah Soal Ujian - SITEDI",-1),D=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),I={class:"container-fluid mb-5 mt-5"},N={class:"row"},P={class:"col-md-12"},T=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),A=p(" Kembali"),H={class:"card border-0 shadow"},R={class:"card-body"},G=t("h5",null,[t("i",{class:"fa fa-question-circle"}),p(" Tambah Soal Ujian ")],-1),K=t("hr",null,null,-1),M={class:"mb-4"},O=t("label",null,"File Gambar (optional)",-1),J={class:"d-flex align-items-center"},z=["src"],Q={key:0,class:"alert alert-danger mt-2"},W={key:1,class:"alert alert-danger mt-2"},X={class:"table-responsive mb-4"},Y={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Z=t("td",{style:{width:"20%"},class:"fw-bold"}," Soal ",-1),$=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan A ",-1),tt=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan B ",-1),et=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan C ",-1),lt=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan D ",-1),ot=t("td",{style:{width:"20%"},class:"fw-bold"}," Pilihan E ",-1),it=t("td",{style:{width:"20%"},class:"fw-bold"}," Jawaban Benar ",-1),nt=C('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),st=[nt],at=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"}," Simpan ",-1),rt=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"}," Reset ",-1);function dt(a,e,i,o,g,r){const h=d("Head"),y=d("Link"),s=d("Editor");return m(),u(j,null,[n(h,null,{default:c(()=>[q,D]),_:1}),t("div",I,[t("div",N,[t("div",P,[n(y,{href:`/admin/exams/${i.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:c(()=>[T,A]),_:1},8,["href"]),t("div",H,[t("div",R,[G,K,t("form",{onSubmit:e[10]||(e[10]=x((...l)=>o.submit&&o.submit(...l),["prevent"]))},[t("div",M,[O,t("div",J,[t("input",{type:"file",class:"form-control",ref:"formImage",onChange:e[0]||(e[0]=(...l)=>r.selectedFile&&r.selectedFile(...l)),onInput:e[1]||(e[1]=l=>o.form.img=l.target.files[0])},null,544),t("span",null,[t("i",{class:"fas fa-times-circle",style:{width:"24px",marginLeft:"8px",cursor:"pointer"},onClick:e[2]||(e[2]=(...l)=>r.removeSelect&&r.removeSelect(...l))})])]),t("img",{src:g.imageUrl,style:{width:"70%",marginTop:"16px",borderRadius:"12px"}},null,8,z),i.errors.file?(m(),u("div",Q,f(i.errors.file),1)):_("",!0),i.errors[0]?(m(),u("div",W,f(i.errors[0]),1)):_("",!0)]),t("div",X,[t("table",Y,[t("tbody",null,[t("tr",null,[Z,t("td",null,[n(s,{"api-key":"no-api-key",modelValue:o.form.question,"onUpdate:modelValue":e[3]||(e[3]=l=>o.form.question=l),init:{menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[$,t("td",null,[n(s,{"api-key":"no-api-key",modelValue:o.form.option_1,"onUpdate:modelValue":e[4]||(e[4]=l=>o.form.option_1=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[tt,t("td",null,[n(s,{"api-key":"no-api-key",modelValue:o.form.option_2,"onUpdate:modelValue":e[5]||(e[5]=l=>o.form.option_2=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[et,t("td",null,[n(s,{"api-key":"no-api-key",modelValue:o.form.option_3,"onUpdate:modelValue":e[6]||(e[6]=l=>o.form.option_3=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[lt,t("td",null,[n(s,{"api-key":"no-api-key",modelValue:o.form.option_4,"onUpdate:modelValue":e[7]||(e[7]=l=>o.form.option_4=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[ot,t("td",null,[n(s,{"api-key":"no-api-key",modelValue:o.form.option_5,"onUpdate:modelValue":e[8]||(e[8]=l=>o.form.option_5=l),init:{height:130,menubar:!1,plugins:"lists",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist"}},null,8,["modelValue"])])]),t("tr",null,[it,t("td",null,[S(t("select",{class:"form-control","onUpdate:modelValue":e[9]||(e[9]=l=>o.form.answer=l)},st,512),[[U,o.form.answer]])])])])])]),at,rt],32)])])])])])],64)}const bt=F(L,[["render",dt]]);export{bt as default};