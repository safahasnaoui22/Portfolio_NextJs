(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5572:function(e,t,r){Promise.resolve().then(r.bind(r,2772))},2772:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var i=r(3827),s=r(3609),a=r(4090);let o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>localStorage.getItem(e),set:(e,t)=>localStorage.setItem(e,t),remove:e=>localStorage.removeItem(e)}})()},l=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};class n{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let c=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=await fetch(o.origin+e,{method:"POST",headers:r,body:t}),s=await i.text(),a=new n(i.status,s);if(i.ok)return a;throw a},d=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},m=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,h=()=>new n(451,"Unavailable For Headless Browser"),p=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},b=e=>{var t;return!(null===(t=e.list)||void 0===t?void 0:t.length)||!e.watchVariable},f=(e,t)=>e instanceof FormData?e.get(t):e[t],g=(e,t)=>{if(b(e))return!1;p(e.list,e.watchVariable);let r=f(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},x=()=>new n(403,"Forbidden"),y=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},v=(e,t,r)=>{let i=Number(r.get(e)||0);return t-Date.now()+i},w=(e,t,r)=>{setTimeout(()=>{r.remove(e)},t)},j=(e,t,r)=>{if(!t.throttle||!r)return!1;y(t.throttle,t.id);let i=t.id||e,s=v(i,t.throttle,r);return s>0?(w(i,s,r),!0):(r.set(i,Date.now().toString()),w(i,t.throttle,r),!1)},k=()=>new n(429,"Too Many Requests"),_=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},S=e=>"string"==typeof e?document.querySelector(e):e;var N={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;let r=l(e);o.publicKey=r.publicKey,o.blockHeadless=r.blockHeadless,o.storageProvider=r.storageProvider,o.blockList=r.blockList,o.limitRate=r.limitRate,o.origin=r.origin||t},send:(e,t,r,i)=>{let s=l(i),a=s.publicKey||o.publicKey,n=s.blockHeadless||o.blockHeadless,p=o.storageProvider||s.storageProvider,b={...o.blockList,...s.blockList},f={...o.limitRate,...s.limitRate};return n&&u(navigator)?Promise.reject(h()):(d(a,e,t),m(r),r&&g(b,r))?Promise.reject(x()):j(location.pathname,f,p)?Promise.reject(k()):c("/api/v1.0/email/send",JSON.stringify({lib_version:"4.2.0",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:(e,t,r,i)=>{let s=l(i),a=s.publicKey||o.publicKey,n=s.blockHeadless||o.blockHeadless,m=o.storageProvider||s.storageProvider,p={...o.blockList,...s.blockList},b={...o.limitRate,...s.limitRate};if(n&&u(navigator))return Promise.reject(h());let f=S(r);d(a,e,t),_(f);let y=new FormData(f);return g(p,y)?Promise.reject(x()):j(location.pathname,b,m)?Promise.reject(k()):(y.append("lib_version","4.2.0"),y.append("service_id",e),y.append("template_id",t),y.append("user_id",a),c("/api/v1.0/email/send-form",y))}},P=()=>{let[e,t]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),l=(0,a.useRef)();return(0,i.jsx)(s.E.div,{className:"h-full",initial:{y:"-200vh"},animate:{y:"0%"},transition:{duration:1},children:(0,i.jsxs)("div",{className:"h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48",children:[(0,i.jsx)("div",{className:"h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl",children:(0,i.jsxs)("div",{children:["Say Hello".split("").map((e,t)=>(0,i.jsx)(s.E.span,{initial:{opacity:1},animate:{opacity:0},transition:{duration:3,repeat:1/0,delay:.1*t},children:e},t)),"\uD83C\uDF40"]})}),(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o(!1),t(!1),N.sendForm("service_jnuxfzc","template_necdftw",l.current,"m84d5cMAGVozOkvZ0").then(()=>{t(!0),l.current.reset()},()=>{o(!0)})},ref:l,className:"h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24",children:[(0,i.jsx)("span",{children:"Dear Safa Dkhili"}),(0,i.jsx)("textarea",{rows:6,className:"bg-transparent border-b-2 border-b-black outline-none resize-none",name:"user_message"}),(0,i.jsx)("span",{children:"My mail address is:"}),(0,i.jsx)("input",{name:"user_email",type:"text",className:"bg-transparent border-b-2 border-b-black outline-none"}),(0,i.jsx)("span",{children:"Regards"}),(0,i.jsx)("button",{className:"bg-purple-200 rounded font-semibold text-gray-600 p-4",children:"Send"}),e&&(0,i.jsx)("span",{className:"text-green-600 font-semibold",children:"Your message has been sent successfully!"}),r&&(0,i.jsx)("span",{className:"text-red-600 font-semibold",children:"Something went wrong!"})]})]})})}}},function(e){e.O(0,[609,971,69,744],function(){return e(e.s=5572)}),_N_E=e.O()}]);