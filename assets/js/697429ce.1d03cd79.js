"use strict";(self.webpackChunkecole=self.webpackChunkecole||[]).push([[690],{2204:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var o=t(6540),i=t(5641),r=t(4848);function a(){const[e,n]=(0,o.useState)({name:"",email:"",phone:"",program:"",motivation:""}),[t,a]=(0,o.useState)(""),[l,s]=(0,o.useState)(!1),[m,c]=(0,o.useState)(0),[u,d]=(0,o.useState)(0),[p,h]=(0,o.useState)("");function f(){const e=Math.floor(5*Math.random())+1,n=Math.floor(5*Math.random())+1;c(e),d(n)}function v(t){n({...e,[t.target.name]:t.target.value})}return(0,o.useEffect)((()=>{f()}),[]),(0,r.jsx)(i.A,{title:"Admission",description:"D\xe9posez votre candidature \xe0 l'ISIG",children:(0,r.jsxs)("main",{className:"admission-main",children:[(0,r.jsx)("h1",{children:"D\xe9posez votre candidature"}),(0,r.jsx)("p",{children:"Merci de l'int\xe9r\xeat que vous portez \xe0 l'ISIG. Remplissez ce formulaire pour entamer votre admission."}),(0,r.jsxs)("form",{className:"admission-form",onSubmit:function(n){if(n.preventDefault(),parseInt(t.trim(),10)!==m+u)return s(!1),h("R\xe9ponse incorrecte. Veuillez r\xe9essayer."),a(""),void f();s(!0),h("");const o=`mailto:contact@monimba.com?subject=${encodeURIComponent("Candidature ISIG")}&body=${encodeURIComponent(`Nom : ${e.name}\nEmail : ${e.email}\nT\xe9l\xe9phone : ${e.phone}\nProgramme : ${e.program}\nMotivation :\n${e.motivation}`)}`;window.location.href=o},children:[(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Nom complet",value:e.name,onChange:v,required:!0}),(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Adresse email",value:e.email,onChange:v,required:!0}),(0,r.jsx)("input",{type:"tel",name:"phone",placeholder:"Num\xe9ro de t\xe9l\xe9phone",value:e.phone,onChange:v,required:!0}),(0,r.jsxs)("select",{name:"program",value:e.program,onChange:v,required:!0,children:[(0,r.jsx)("option",{value:"",children:"Choisir un programme"}),(0,r.jsx)("option",{value:"Licence Informatique",children:"Licence Informatique"}),(0,r.jsx)("option",{value:"Licence Administration des Affaires",children:"Licence Administration des Affaires"}),(0,r.jsx)("option",{value:"Master Intelligence Artificielle",children:"Master Intelligence Artificielle"})]}),(0,r.jsx)("textarea",{name:"motivation",rows:5,placeholder:"Votre lettre de motivation",value:e.motivation,onChange:v,required:!0}),(0,r.jsxs)("div",{style:{marginTop:"2rem",textAlign:"left"},children:[(0,r.jsxs)("label",{style:{fontWeight:"bold",marginBottom:"0.5rem",display:"block"},children:["Pour confirmer que vous \xeates humain : Combien font ",m," + ",u," ?"]}),(0,r.jsx)("input",{type:"text",value:t,onChange:function(e){const n=e.target.value;a(n),h("")},placeholder:"Votre r\xe9ponse",required:!0}),p&&(0,r.jsx)("div",{style:{color:"red",marginTop:"0.5rem",fontSize:"0.95rem"},children:p})]}),(0,r.jsx)("button",{type:"submit",style:{marginTop:"2rem"},children:"Envoyer ma candidature"})]})]})})}}}]);