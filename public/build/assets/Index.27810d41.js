import{L as f}from"./Admin.097a929c.js";import{H as u,r as x,a as v,o,c as a,b as w,w as p,d as t,e as y,f as N,s as g,F as _,p as m,t as e,g as h,h as k,i as d}from"./app.1fb75458.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:f,components:{Head:u},props:{errors:Object,exams:Array,grades:Array},setup(){const n=x({exam_id:new URL(document.location).searchParams.get("exam_id")});return{form:n,filter:()=>{k.Inertia.get("/admin/reports/filter",{exam_id:n.exam_id})}}}},U=t("title",null,"Laporan Nilai Ujian - SITEDI",-1),S=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),D={class:"container-fluid mb-5 mt-5"},V={class:"row"},A={class:"col-md-12"},C={class:"card border-0 shadow mb-4"},E={class:"card-body"},F=t("h5",null,[t("i",{class:"fa fa-filter"}),d(" Filter Nilai Ujian")],-1),H=t("hr",null,null,-1),I={class:"row"},B={class:"col-md-9"},O=t("label",{class:"control-label",for:"name"},"Ujian",-1),P=["value"],K={key:0,class:"alert alert-danger mt-2"},M=t("div",{class:"col-md-3"},[t("label",{class:"form-label fw-bold text-white"},"*"),t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[t("i",{class:"fa fa-filter"}),d(" Filter ")])],-1),T={key:0,class:"card border-0 shadow"},R={class:"card-body"},W={class:"row"},X=t("div",{class:"col-md-9 col-12"},[t("h5",{class:"mt-2"},[t("i",{class:"fa fa-chart-line"}),d(" Laporan Nilai Ujian ")])],-1),q={class:"col-md-3 col-12"},z=["href"],G=t("i",{class:"fa fa-file-excel"},null,-1),J=d(" DOWNLOAD EXCEL"),Q=[G,J],Y=t("hr",null,null,-1),Z={class:"table-responsive"},$={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},tt=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}}," No. "),t("th",{class:"border-0"},"Ujian"),t("th",{class:"border-0"},"Sesi"),t("th",{class:"border-0"},"Nama Siswa"),t("th",{class:"border-0"},"Kelas"),t("th",{class:"border-0"},"Pelajaran"),t("th",{class:"border-0"},"Nilai")])],-1),st=t("div",{class:"mt-2"},null,-1),et={class:"fw-bold text-center"},ot={class:"text-center"},at={class:"fw-bold text-center"};function lt(n,l,i,r,it,rt){const b=v("Head");return o(),a(_,null,[w(b,null,{default:p(()=>[U,S]),_:1}),t("div",D,[t("div",V,[t("div",A,[t("div",C,[t("div",E,[F,H,t("form",{onSubmit:l[1]||(l[1]=y((...s)=>r.filter&&r.filter(...s),["prevent"]))},[t("div",I,[t("div",B,[O,N(t("select",{class:"form-select","onUpdate:modelValue":l[0]||(l[0]=s=>r.form.exam_id=s)},[(o(!0),a(_,null,m(i.exams,(s,c)=>(o(),a("option",{key:c,value:s.id},e(s.title)+" \u2014 Kelas : "+e(s.classroom.title)+" \u2014 Pelajaran : "+e(s.lesson.title),9,P))),128))],512),[[g,r.form.exam_id]]),i.errors.exam_id?(o(),a("div",K,e(i.errors.exam_id),1)):h("",!0)]),M])],32)])]),i.grades.length>0?(o(),a("div",T,[t("div",R,[t("div",W,[X,t("div",q,[t("a",{href:`/admin/reports/export?exam_id=${r.form.exam_id}`,target:"_blank",class:"btn btn-success btn-md border-0 shadow w-100 text-white"},Q,8,z)])]),Y,t("div",Z,[t("table",$,[tt,st,t("tbody",null,[(o(!0),a(_,null,m(i.grades,(s,c)=>(o(),a("tr",{key:s.id},[t("td",et,e(c+1),1),t("td",null,e(s.exam.title),1),t("td",null,e(s.exam_session.title),1),t("td",null,e(s.student.name),1),t("td",ot,e(s.exam.classroom.title),1),t("td",null,e(s.exam.lesson.title),1),t("td",at,e(s.grade),1)]))),128))])])])])])):h("",!0)])])])],64)}const _t=j(L,[["render",lt]]);export{_t as default};
