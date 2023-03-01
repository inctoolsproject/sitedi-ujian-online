import{L as g}from"./Admin.fd8a5958.js";import{P as y}from"./Pagination.8753d309.js";import{H as x,L as S,m as B,a as c,o as l,c as r,b as d,w as _,d as t,e as b,f as C,v as L,F as f,p as T,h as p,t as o,i as I}from"./app.b8b140a1.js";import{S as w}from"./sweetalert2.all.4c9c5a0e.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const P={layout:g,components:{Head:x,Link:S,Pagination:y},props:{students:Object},setup(){const i=B(new URL(document.location).searchParams.get("q"));return{search:i,handleSearch:()=>{p.Inertia.get("/admin/students",{q:i.value})},destroy:e=>{w.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#3085d6",confirmButtonColor:"#d33",confirmButtonText:"Ya, hapus!",cancelButtonText:"Tidak"}).then(h=>{h.isConfirmed&&(p.Inertia.delete(`/admin/students/${e}`),w.fire({title:"Dihapus!",text:"Siswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},A=t("title",null,"Siswa - SITEDI",-1),D=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),H={class:"container-fluid mb-5 mt-5"},V={class:"row"},q={class:"col-md-8"},E={class:"row"},F={class:"col-md-5 col-12 mb-2"},K={class:"row"},M={class:"col-md-6 col-12 mb-2"},U=t("i",{class:"fa fa-plus-circle"},null,-1),j=I(" Tambah"),J=t("div",{class:"col-md-6 col-12 mb-2"},null,-1),O={class:"col-md-7 col-12 mb-2"},R={class:"input-group"},Y=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),z={class:"row mt-1"},G={class:"col-md-12"},Q={class:"card border-0 shadow"},W={class:"card-body"},X={class:"table-responsive"},Z={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},$=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}}," No. "),t("th",{class:"border-0"},"NIS"),t("th",{class:"border-0"},"Nama"),t("th",{class:"border-0"},"Kelas"),t("th",{class:"border-0"},"Jenis Kelamin"),t("th",{class:"border-0"},"Password"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}}," Aksi ")])],-1),tt=t("div",{class:"mt-2"},null,-1),st={class:"fw-bold text-center"},et={class:"text-center"},ot={class:"text-center"},at={class:"text-center"},nt=t("i",{class:"fa fa-pencil-alt"},null,-1),dt=["onClick"],it=t("i",{class:"fa fa-trash"},null,-1),ct=[it];function lt(i,a,n,e,h,rt){const v=c("Head"),m=c("Link"),k=c("Pagination");return l(),r(f,null,[d(v,null,{default:_(()=>[A,D]),_:1}),t("div",H,[t("div",V,[t("div",q,[t("div",E,[t("div",F,[t("div",K,[t("div",M,[d(m,{href:"/admin/students/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:_(()=>[U,j]),_:1})]),J])]),t("div",O,[t("form",{onSubmit:a[1]||(a[1]=b((...s)=>e.handleSearch&&e.handleSearch(...s),["prevent"]))},[t("div",R,[C(t("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.search=s),type:"text",class:"form-control border-0 shadow",placeholder:"masukkan kata kunci dan enter..."},null,512),[[L,e.search]]),Y])],32)])])])]),t("div",z,[t("div",G,[t("div",Q,[t("div",W,[t("div",X,[t("table",Z,[$,tt,t("tbody",null,[(l(!0),r(f,null,T(n.students.data,(s,u)=>(l(),r("tr",{key:u},[t("td",st,o(++u+(n.students.current_page-1)*n.students.per_page),1),t("td",null,o(s.nis),1),t("td",null,o(s.name),1),t("td",et,o(s.classroom.title),1),t("td",ot,o(s.gender),1),t("td",null,o(s.password),1),t("td",at,[d(m,{href:`/admin/students/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:_(()=>[nt]),_:2},1032,["href"]),t("button",{onClick:b(_t=>e.destroy(s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},ct,8,dt)])]))),128))])])]),d(k,{links:n.students.links,align:"end"},null,8,["links"])])])])])])],64)}const pt=N(P,[["render",lt]]);export{pt as default};
