(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{1427:function(e,t,a){Promise.resolve().then(a.bind(a,2240))},2240:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(3827),s=a(4090),n=a(7181),l=a(8383),o=a.n(l),i=e=>{let{label:t,total:a,user_name:n}=e;return s.useEffect(()=>{var e,r=null===(e=document.getElementById("line-chart"))||void 0===e?void 0:e.getContext("2d");r&&new(o())(r,{type:"line",data:{labels:t,datasets:[{label:"Entrepreneurship Index",backgroundColor:"#3182ce",borderColor:"#3183ce",data:a,fill:!1}]},options:{maintainAspectRatio:!0,responsive:!0,title:{display:!0,text:"Entrepreneurship Index",fontColor:"black"},legend:{labels:{fontColor:"black"},align:"end",position:"bottom"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!1,labelString:"Month",fontColor:"white"},gridLines:{display:!1,borderDash:[2],borderDashOffset:2,color:"rgba(33, 37, 41, 0.3)",zeroLineColor:"rgba(0, 0, 0, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:2}}],yAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!0,labelString:"Value",fontColor:"white"},gridLines:{borderDash:[3],borderDashOffset:3,drawBorder:!0,color:"rgba(255, 255, 255, 0.15)",zeroLineColor:"rgba(33, 37, 41, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:2}}]}}})},[t]),(0,r.jsx)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700",children:(0,r.jsx)("div",{className:"p-4 flex-auto shadow-2xl",children:(0,r.jsx)("div",{className:"relative h-350-px ",children:(0,r.jsx)("canvas",{id:"line-chart"})})})})},d=()=>{let[e,t]=(0,s.useState)(),[a,l]=(0,s.useState)({id:"",first_name:"",last_name:""});return(0,s.useEffect)(()=>{(async function(){let e=document.cookie.split(";").find(e=>e.trim().startsWith("auth="));if(e){let[,a]=e.split("="),r=await fetch("http://10.22.65.109:3000/user/decode?token="+a),s=await r.json();l(s);let n="http://10.22.65.109:3000/answer/user/"+s.id,o=await fetch(n),i=await o.json();t({createdAt:i.map(e=>{let t=new Date(e.createdAt),a=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getFullYear();return"".concat(a,":").concat(r,":").concat(s)}),total:i.map(e=>e.total)})}else console.log("Auth cookie not found.")})()},[]),(0,r.jsxs)("div",{className:"h-auto w-screen bg-primaryLight dark:bg-primaryDark",children:[(0,r.jsx)(n.default,{}),(0,r.jsx)("div",{className:"h-93.2vh w-screen flex justify-center content-center flex-wrap",children:(0,r.jsx)("div",{className:"h-85vh w-6/12 bg-secondaryLight dark:bg-secondaryDark p-6 overflow-y-auto rounded-3xl shadow-2xl",children:(0,r.jsx)(i,{label:e?null==e?void 0:e.createdAt:[""],total:e?null==e?void 0:e.total:[0],user_name:a?a.first_name:""})})})]})}},7181:function(e,t,a){"use strict";a.r(t);var r=a(3827),s=a(4090),n=a(8792),l=a(703);t.default=()=>{let[e,t]=(0,s.useState)();return(0,s.useEffect)(()=>{(async function(){let e=document.cookie.split(";").find(e=>e.trim().startsWith("auth="));if(e){let[,a]=e.split("="),r=await fetch("http://10.22.65.109:3000/user/decode?token="+a);t(await r.json())}else console.log("Auth cookie not found.")})()},[]),(0,r.jsxs)("div",{className:"w-screen h-auto flex justify-between bg-secondaryLight dark:bg-secondaryDark sticky top-0",children:[(0,r.jsxs)(n.default,{href:"/home",className:"flex ",children:[(0,r.jsx)(l.default,{width:100,height:100,src:"/images/logo.png",alt:"Asset not found",className:"w-20 h-16"}),(0,r.jsxs)("div",{className:"flex flex-col content-center justify-center flex-wrap  text-textLight dark:text-textDark",children:[(0,r.jsx)("div",{className:"font-bold text-3xl",children:"Indonesia Entrepeneurship Index"}),(0,r.jsxs)("div",{children:["Welcome, ",null==e?void 0:e.first_name]})]})]}),(0,r.jsxs)("div",{className:"w-auto gap-6 flex justify-around content-center flex-wrap font-bold text-lg text-textLight dark:text-textDark pr-4",children:[(0,r.jsx)(n.default,{href:"/form",children:"Form"}),(0,r.jsx)(n.default,{href:"/answer",children:"My Answer"}),(0,r.jsx)(n.default,{href:"/data",children:"Data"}),(0,r.jsx)(n.default,{href:"user/profile",children:"Profile"})]})]})}}},function(e){e.O(0,[990,71,607,971,69,744],function(){return e(e.s=1427)}),_N_E=e.O()}]);