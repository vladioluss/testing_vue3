import{d as g,c as o,a as s,r as m,o as l,F as _,b as B,t as r,_ as S,e as v,f as h,w as $,B as x,g as C,h as F,p as L,i as U,j as R,k as p,l as j,u as q,m as w,n as M,q as b,s as z,v as D}from"./index-85d7e514.js";const H={class:"tr"},K=g({__name:"BaseTable",props:["headers"],setup(a){return(t,d)=>(l(),o("table",null,[s("thead",null,[s("tr",H,[m(t.$slots,"headers",{},()=>[(l(!0),o(_,null,B(a.headers,(u,f)=>(l(),o("th",{key:f},r(u),1))),128))],!0)])]),s("tbody",null,[m(t.$slots,"rows",{},void 0,!0)])]))}});const X=S(K,[["__scopeId","data-v-e42282c9"]]),G=a=>(L("data-v-c1b89722"),a=a(),U(),a),J={key:0,class:"modal"},P={class:"body"},Q=G(()=>s("h2",null,"Вы действительно хотите удалить заказ?",-1)),W={class:"footer__btns"},Y=g({__name:"BaseModal",props:["modelValue"],setup(a){return(t,d)=>a.modelValue?(l(),o("div",J,[s("div",P,[m(t.$slots,"body",{},()=>[Q],!0),m(t.$slots,"footer",{},()=>[s("div",W,[h(x,{type:"button",onClick:d[0]||(d[0]=$(u=>(t.$emit("update:modelValue",!1),t.$emit("okBtn",1)),["prevent"]))}),h(x,{type:"button",onClick:d[1]||(d[1]=$(u=>t.$emit("update:modelValue",!1),["prevent"]))},{text:C(()=>[F("Отмена")]),_:1})])],!0)])])):v("",!0)}});const Z=S(Y,[["__scopeId","data-v-c1b89722"]]),ee="events",te=R("events",()=>{const a=p([]);async function t(){await j(ee,{}).then(d=>{a.value=d.data})}return{events:a,getEvents:t}}),se={class:"table"},ne=["onClick"],ae={key:0,class:"actions-row"},oe={key:0},le={class:"actions-btns"},de=["onClick"],re=["onClick"],N="events",V="Выполнен",ue=g({__name:"OrdersView",setup(a){const t=te(),d=q();t.getEvents();const u=p(0),f=["№","Имя клиента","Адрес","Дата заказа","Статус","Комментарий"];let y=p(!1);function O(c){y.value=!y.value;let n={Адрес:"address","Дата заказа":"date"}[c];n!==void 0&&t.events.sort((e,i)=>{let E=e[n],I=i[n];return y.value?E.localeCompare(I):I.localeCompare(E)})}const k=p(!1);function T(c){w(`${N}/${c}`).then(()=>t.getEvents()).catch(n=>M().setError(n))}function A(c){let n={...c,status:V};D(`${N}/${n.id}`,n).then(()=>t.getEvents()).catch(e=>M().setError(e))}return(c,n)=>(l(),o(_,null,[s("div",se,[h(X,null,{headers:C(()=>[(l(),o(_,null,B(f,e=>s("th",{key:e,onClick:i=>O(e)},r(e),9,ne)),64)),b(d).isAdmin?(l(),o("th",ae)):v("",!0)]),rows:C(()=>[(l(!0),o(_,null,B(b(t).events,e=>(l(),o("tr",{key:e.id,class:z(e.status===V?"status-done":"")},[s("td",null,r(e.id),1),s("td",null,r(e.name),1),s("td",null,r(e.address),1),s("td",null,r(e.date),1),s("td",null,r(e.status),1),s("td",null,r(e.comment),1),b(d).isAdmin?(l(),o("td",oe,[s("div",le,[e.status!==V?(l(),o("div",{key:0,class:"action done",onClick:$(i=>A(e),["prevent"])},"V ",8,de)):v("",!0),s("div",{class:"action del",onClick:$(i=>(k.value=!0,u.value=e.id),["prevent"])},"X ",8,re)])])):v("",!0)],2))),128))]),_:1})]),h(Z,{modelValue:k.value,"onUpdate:modelValue":n[0]||(n[0]=e=>k.value=e),onOkBtn:n[1]||(n[1]=e=>T(u.value.id))},null,8,["modelValue"])],64))}});const ie=S(ue,[["__scopeId","data-v-5da036e8"]]);export{ie as default};