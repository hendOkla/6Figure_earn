(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{8105:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(4130)}])},50:function(e,s,a){"use strict";var r=a(5893);a(7294);let l=e=>{let{pageTitle:s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"page-title-area",children:[(0,r.jsx)("div",{className:"d-table",children:(0,r.jsx)("div",{className:"d-table-cell",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("h2",{children:s})})})}),(0,r.jsx)("div",{className:"shape1",children:(0,r.jsx)("img",{src:"/images/shape1.png",alt:"shape"})}),(0,r.jsx)("div",{className:"shape2 rotateme",children:(0,r.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})}),(0,r.jsx)("div",{className:"shape3",children:(0,r.jsx)("img",{src:"/images/shape3.svg",alt:"shape"})}),(0,r.jsx)("div",{className:"shape4",children:(0,r.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,r.jsx)("div",{className:"shape5",children:(0,r.jsx)("img",{src:"/images/shape5.png",alt:"shape"})}),(0,r.jsx)("div",{className:"shape6 rotateme",children:(0,r.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,r.jsx)("div",{className:"shape7",children:(0,r.jsx)("img",{src:"/images/shape4.svg",alt:"shape"})}),(0,r.jsx)("div",{className:"shape8 rotateme",children:(0,r.jsx)("img",{src:"/images/shape2.svg",alt:"shape"})})]})})};s.Z=l},4130:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return O}});var r=a(5893),l=a(7294),n=a(3195),c=a(6803),t=a(50),i=a(2774),o=a(4856),m=a(5697),d=a.n(m);function h(){return(h=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var x=(0,l.forwardRef)(function(e,s){var a=e.color,r=e.size,n=void 0===r?24:r,c=function(e,s){if(null==e)return{};var a,r,l=function(e,s){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],s.indexOf(a)>=0||(l[a]=e[a]);return l}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],!(s.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}(e,["color","size"]);return l.createElement("svg",h({ref:s,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:void 0===a?"currentColor":a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});x.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},x.displayName="Phone";var u=a(9669),j=a.n(u);let p=()=>{let[e,s]=(0,l.useState)([]);return l.useEffect(()=>{s([]),j().get("/api/view-contact").then(e=>{200===e.data.status&&(s(e.data.contact),console.log(e.data.contact))})},[]),e.map(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"contact-info-area ptb-80",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,r.jsxs)("div",{className:"contact-info-box",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)("h3",{children:"Mail Here"}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"mailto:info@startp.com",children:e.email})})]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,r.jsxs)("div",{className:"contact-info-box",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)("h3",{children:"Visit Here"}),(0,r.jsx)("p",{children:e.location_en})]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,r.jsxs)("div",{className:"contact-info-box",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(x,{})}),(0,r.jsx)("h3",{children:"Call Here"}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"tel:+1234567890",children:e.phone})})]})})]})})})}))};a(1664);var g=a(6455),v=a.n(g),N=a(7630),f=a.n(N);let b=f()(v()),y=()=>{b.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1})},_=()=>{let[e,s]=(0,l.useState)({customer_name:"",email:"",number:"",subject:"",text:"",error_list:[]}),a=a=>{a.persist(),s({...e,[a.target.name]:a.target.value})},n={customer_name:e.customer_name,email:e.email,number:e.number,subject:e.subject,text:e.text},c=async a=>{a.preventDefault(),j().post("/api/sendMail",n).then(a=>{200===a.data.status?y():400===a.data.status&&s({...e,error_list:a.data.errors})})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"contact-area ptb-80",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-title",children:[(0,r.jsx)("h2",{children:"Get In Touch With Us"}),(0,r.jsx)("div",{className:"bar"}),(0,r.jsx)("p",{children:"Anything On your Mind. We’ll Be Glad To Assist You!"})]}),(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,r.jsx)("img",{src:"/images/contact-img.png",alt:"image"})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,r.jsx)("form",{onSubmit:c,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"customer_name",placeholder:"Your Name",className:"form-control",value:e.customer_name,onChange:a,required:!0}),(0,r.jsx)("span",{className:"span span-reg",children:e.error_list.customer_name})]})}),(0,r.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"email",placeholder:"Your email address",className:"form-control",value:e.email,onChange:a,required:!0}),(0,r.jsx)("span",{className:"span span-reg",children:e.error_list.email})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"number",placeholder:"Your phone number",className:"form-control",value:e.number,onChange:a,required:!0}),(0,r.jsx)("span",{className:"span span-reg",children:e.error_list.number})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("input",{type:"text",name:"subject",placeholder:"Your Subject",className:"form-control",value:e.subject,onChange:a,required:!0}),(0,r.jsx)("span",{className:"span span-reg",children:e.error_list.subject})]})}),(0,r.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("textarea",{name:"text",cols:"30",rows:"5",placeholder:"Write your message...",className:"form-control",value:e.text,onChange:a,required:!0}),(0,r.jsx)("span",{className:"span span-reg",children:e.error_list.text})]})}),(0,r.jsx)("div",{className:"col-lg-12 col-sm-12",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})})]})})})]})]})})})},w=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{}),(0,r.jsx)(t.Z,{pageTitle:"Contact Us"}),(0,r.jsx)(p,{}),(0,r.jsx)(_,{}),(0,r.jsx)(c.Z,{})]});var O=w}},function(e){e.O(0,[1664,2581,5534,9774,2888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);