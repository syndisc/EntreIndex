(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{5955:function(e,t,n){Promise.resolve().then(n.bind(n,2690))},2690:function(e,t,n){"use strict";n.r(t);var s=n(3827),a=n(3363),l=n(703),r=n(8792),o=n(7907),c=n(4090);t.default=()=>{let[e,t]=c.useState({email:"",password:""}),[n,i]=c.useState("Password");function d(n){t({...e,[n.target.name]:n.target.value})}let u=(0,o.useRouter)();return(0,s.jsx)("div",{className:"w-screen h-screen  p-2 flex justify-center content-center flex-wrap bg-gradient-to-br from-cyan-600 to-blue-900",children:(0,s.jsxs)("div",{className:"w-3/5 flex h-auto shadow-2xl rounded-3xl",children:[(0,s.jsx)("div",{className:"w-1/2 h-full hidden lg:flex justify-center content-center flex-wrap p-6 bg-cyan-600 rounded-l-3xl ",children:(0,s.jsx)(l.default,{width:1e3,height:1e3,src:"/images/login.png",alt:"Not found",className:"h-full w-4/5"})}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 h-full bg-secondaryLight dark:bg-secondaryDark p-2 rounded-l-3xl rounded-r-3xl lg:rounded-l-none flex justify-center content-center flex-wrap flex-col",children:[(0,s.jsx)("div",{className:"text-6xl md:text-3xl font-bold text-textLight dark:text-textDark h-auto w-2/3",children:"Login Page"}),(0,s.jsxs)("div",{className:"flex flex-col h-auto",children:[(0,s.jsxs)("div",{className:"flex flex-col h-auto mt-2 ",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm ps-2",children:"Email"}),(0,s.jsx)("input",{type:"email",className:"h-12 rounded-3xl p-2 border dark:text-black",name:"email",onChange:e=>{d(e)}})]}),(0,s.jsxs)("div",{className:"flex flex-col h-auto mt-2",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm ps-2",children:"Password"}),(0,s.jsxs)("div",{className:"h-12",children:[(0,s.jsx)("input",{type:n,className:"w-11/12 h-full rounded-l-3xl p-2 border dark:text-black",name:"password",onChange:e=>{d(e)}}),(0,s.jsx)("button",{className:"w-1/12 h-full bg-accentLight rounded-r-3xl p-2",onMouseDown:()=>{i("text")},onMouseUp:()=>{i("password")},children:"i"})]})]}),(0,s.jsx)("button",{className:"h-12 bg-primaryLight hover:bg-cyan-600 p-2 hover:text-white border font-bold mt-3 dark:bg-primaryDark flex content-center justify-center flex-wrap rounded-3xl",onClick:function(){(0,a.C)("http://10.22.65.109:3000/user/login",e,u)},children:"Login"}),(0,s.jsxs)("div",{className:"mt-3",children:["Does not have an account?",(0,s.jsx)(r.default,{href:"register",className:"pl-2 text-blue-400 font-bold",children:"Click here!"})]})]})]})]})})}},3363:function(e,t,n){"use strict";n.d(t,{C:function(){return o},D:function(){return r}});var s=n(6123);function a(e){s.toast.success(e)}function l(e){s.toast.error(e)}async function r(e,t,n){let s=await fetch(e,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),r=await s.json();s.ok?a(r.message):l(r.message[0])}async function o(e,t,n){let s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await s.json();if(s.ok){a(r.message);let e=new Date;e.setTime(e.getTime()+864e5);let t="; expires="+e.toUTCString();document.cookie="auth="+r.token+t+"; path=/",n.push("/home")}else l(r.message[0])}},7907:function(e,t,n){"use strict";var s=n(5313);n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}})}},function(e){e.O(0,[607,123,971,69,744],function(){return e(e.s=5955)}),_N_E=e.O()}]);