import{_ as n,c as s,r as c,F as i,o as r,a as u,w as d,b as l,d as m,t as p}from"./index-y4mnw8B2.js";const _={async mounted(){const e=await fetch("../data/"+this.$route.params.testId);this.test=await e.json()},data(){return{test:{}}}};function f(e,h,k,w,a,x){const o=l("router-link");return r(!0),s(i,null,c(a.test.questions,t=>(r(),s("div",{key:t.number},[u(o,{to:"/tests/"+this.$route.params.testId+"/questions/"+t.number},{default:d(()=>[m(p(t.number+". "+t.title),1)]),_:2},1032,["to"])]))),128)}const b=n(_,[["render",f]]);export{b as default};
