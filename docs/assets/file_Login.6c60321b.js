import{u as h,a as f,b as i,r as b,o as S,d as w,e,w as c,v as y,t as k,f as I,g as d,h as _,i as x,j as V,p as q,k as B}from"./file_index.a753ea0d.js";import{_ as L}from"./file__plugin-vue_export-helper.e718e6fb.js";const a=o=>(q("data-v-886be231"),o=o(),B(),o),M={class:"main-container"},N={class:"vue-template card-container"},T=["onSubmit"],C=a(()=>e("h2",null,"Iniciar Sesion",-1)),D={class:"form-group"},E=a(()=>e("label",null,"Email address",-1)),R={class:"form-group"},U=a(()=>e("label",null,"Password",-1)),j=a(()=>e("button",{type:"submit",class:"btn btn-dark btn-lg btn-block"},"Sign In",-1)),A={__name:"Login",setup(o){const p=h(),m=f(),n=i(""),r=i(""),s=i(""),v=async()=>{try{await m.signIn(n.value,r.value),p.push({path:"/"})}catch(u){s.value="Hay un error en las credenciales",console.log(u.message),setTimeout(()=>{s.value=null},1e4)}};return(u,t)=>{const g=b("router-link");return S(),w("div",M,[e("div",N,[c(e("p",{class:"error-msg"},k(s.value),513),[[y,s.value]]),e("form",{onSubmit:I(v,["prevent"])},[C,e("div",D,[E,c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),type:"email",class:"form-control form-control-lg",required:""},null,512),[[d,n.value]])]),e("div",R,[U,c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>r.value=l),type:"password",class:"form-control form-control-lg",required:""},null,512),[[d,r.value]])]),j],40,T),e("p",null,[_("\xBFAun no te has registrado? Reg\xEDstrate "),x(g,{to:"/auth/register",class:"link"},{default:V(()=>[_("aqu\xED")]),_:1})])])])}}},z=L(A,[["__scopeId","data-v-886be231"]]);export{z as default};