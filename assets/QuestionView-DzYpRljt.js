import{_ as a,c,a as l,t as o,f as m,F as h,r as b,o as r,n as f,g as p,v as _,d as q}from"./index-Bt0oFFQL.js";const k={async mounted(){document.documentElement.style.setProperty("--color-background","white");const e=await(await fetch("/../testful/data/"+this.$route.params.testId)).json();this.question=e.questions.find(d=>d.number==this.$route.params.questionId)},data(){return{question:{},selection:new Set,isCorrect:!1}},computed:{isSubmitDisabled(){return this.selection.size==0}},methods:{updateSelection(i){const e=i.target.value;this.selection.has(e)?(this.question.multipleOptions||this.selection.clear(),this.selection.add(e)):this.selection.delete(e)},submit:function(){const i=this.question.answer.ids.filter(e=>!this.selection.has(e));this.isCorrect=i.length==0}}},v={class:"container"},C={key:0,class:"code-snippet"},S={class:"pre-formatted"},g=["name","value","checked"],w=["disabled"];function x(i,e,d,y,t,n){return r(),c("div",v,[l("h3",null,o(t.question.number+". "+t.question.title),1),t.question.code?(r(),c("div",C,[l("code",S,o(t.question.code),1)])):m("",!0),(r(!0),c(h,null,b(t.question.options,s=>(r(),c("label",{key:s.id,class:f(t.selection.has(s.id)?"selected":"")},[p(l("input",{type:"checkbox",name:t.question.number,value:s.id,"onUpdate:modelValue":e[0]||(e[0]=u=>t.selection=u),checked:t.selection.has(s.id),onChange:e[1]||(e[1]=(...u)=>n.updateSelection&&n.updateSelection(...u))},null,40,g),[[_,t.selection]]),q(" "+o(s.id)+". "+o(s.text),1)],2))),128)),l("button",{class:"submit",onClick:e[2]||(e[2]=(...s)=>n.submit&&n.submit(...s)),disabled:n.isSubmitDisabled},o(t.isCorrect?"Correct":"Submit"),9,w)])}const D=a(k,[["render",x],["__scopeId","data-v-87d40c06"]]);export{D as default};
