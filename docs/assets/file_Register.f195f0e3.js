import{s as k,b as n,u as x,r as R,o as m,c as S,w as u,T as v,a as g,d as e,e as h,f as U,t as V,g as T,h as E,i as c,v as _,j as f,p as I,k as q}from"./file_index.c14c5612.js";import{_ as B}from"./file__plugin-vue_export-helper.e718e6fb.js";const a=r=>(I("data-v-de44c28e"),r=r(),q(),r),C={class:"main-container"},N={class:"vue-template card-container modify2"},M={key:0,class:"addError modify"},P={class:"error-text"},A=["onSubmit"],D=a(()=>e("h2",null,"Registrate",-1)),j={class:"register-login-container"},L=a(()=>e("h4",null,"Email address",-1)),Y={class:"form-group"},z=a(()=>e("h4",null,"Password",-1)),F={class:"form-group"},G=a(()=>e("h4",null,"Confirm Password",-1)),H={class:"form-group"},J=a(()=>e("button",{type:"submit",class:"btn btn-dark btn-lg btn-block"}," Register ",-1)),K={__name:"Register",setup(r){k(g);const l=n(""),i=n(""),d=n(""),t=n(""),y=x(),w=async()=>{if(i.value===d.value){try{await g().signUp(l.value,i.value),t.value="Usuario creado! Redirigiendo...",setTimeout(()=>{y.push({name:"home"})},3e3)}catch(p){(p="AuthApiError: User already registered")&&(t.value="El usuario ya existe!")}return}else t.value="La contrase\xF1a no coincide"};return(p,s)=>{const b=R("router-link");return m(),S(v,{appear:""},{default:u(()=>[e("div",C,[e("div",N,[h(v,null,{default:u(()=>[t.value?(m(),U("div",M,[e("h3",P,V(t.value),1)])):T("",!0)]),_:1}),e("form",{onSubmit:E(w,["prevent"])},[D,e("div",j,[L,e("div",Y,[c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o),type:"email",class:"register-login-input",required:""},null,512),[[_,l.value]])]),z,e("div",F,[c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o),type:"password",class:"register-login-input",required:""},null,512),[[_,i.value]])]),G,e("div",H,[c(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>d.value=o),type:"password",class:"register-login-input",required:""},null,512),[[_,d.value]])])]),J],40,A),e("p",null,[f(" \xBFYa tienes una cuenta? Ingresa "),h(b,{to:"/auth/login",class:"link"},{default:u(()=>[f("aqu\xED")]),_:1})])])])]),_:1})}}},W=B(K,[["__scopeId","data-v-de44c28e"]]);export{W as default};
