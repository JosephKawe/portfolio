import{d as h,b as n,s as p,e as b,v as d,o,c as a,a as r,t as f,F as j,m as x}from"./index-464a9ab3.js";import{d as m}from"./data-7795701d.js";const y={class:"flex font-kanit h-screen bg-main-bg bg-left items-center flex-col bg-cover bg-fixed w-full"},k={key:0},P={key:1,class:"bg-fourth/50 flex items-start backdrop-blur-md w-10/12 rounded-lg mt-[10%] h-3/5"},w=["src"],B={class:"bg-blue-500 w-full h-[50%] mt-[5%] flex items-center flex-col"},L=["src"],F=h({__name:"ProjectView",setup(N){const l=n(null),t=n(null),c=n(!0),v=p();b(()=>{d(()=>v.params.id,e=>{if(typeof e=="string"){const s=parseInt(e,10);l.value=isNaN(s)?null:s}else typeof e=="number"?l.value=e:l.value=null;g()},{immediate:!0})});const g=()=>{c.value=!0;try{const e=m.projects.find(s=>s.id===l.value);e?t.value=e:console.error("Projeto não encontrado")}catch(e){console.error("Erro ao carregar o projeto",e)}finally{c.value=!1}},i=n([]),_=e=>m.languageIcons.filter(s=>e.includes(s.name));return d(()=>t.value,()=>{t.value&&(i.value=_(t.value.languages))}),(e,s)=>(o(),a("div",y,[c.value?(o(),a("div",k,"Carregando...")):(o(),a("div",P,[r("img",{class:"h-[50%] bg-blue-50 object-contain rounded-md mt-[5%] ml-[5%]",src:"/src/assets/"+t.value.imageUrl},null,8,w),r("div",B,[r("h2",null,f(t.value?t.value.name:"Projeto não encontrado"),1)])])),(o(!0),a(j,null,x(i.value,u=>(o(),a("div",{class:"flex justify-center items-center h-7 w-7 rounded-full",key:u.id},[r("img",{class:"h-[50%] w-[50%] object-contain",src:"/src/assets/icons/"+u.path},null,8,L),r("h2",null,f(u.name),1)]))),128))]))}});export{F as default};