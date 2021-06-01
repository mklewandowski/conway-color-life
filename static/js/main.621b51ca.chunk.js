(this["webpackJsonpconway-color-life"]=this["webpackJsonpconway-color-life"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(6),f=a.n(c),g=(a(12),a(7)),l=a(2),i=(a(13),a(0)),r=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)("header",{className:"header",children:["CONWAY COLOR LIFE",Object(i.jsxs)("div",{className:"description",children:["Conway Color Life is an example of a cellular automaton, a collection of cells that change over time based on a set of simple rules. Click cells to turn them alive, and then press the Start button to see what happens.",!a&&Object(i.jsxs)("div",{className:"expand",onClick:function(){return n(!0)},children:["Learn More",Object(i.jsx)("svg",{height:"12",width:"16",className:"icon",children:Object(i.jsx)("polygon",{points:"8,12 0,0 16,0",style:{fill:"aliceblue"}})})]}),a&&Object(i.jsxs)("div",{className:"more-content",children:[Object(i.jsx)("div",{children:"Cells are either alive or dead. At each generation a cell is marked as alive or dead based on the following rules:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"A living cell with less than 2 neighbors dies"}),Object(i.jsx)("li",{children:"A living cell with 2 or 3 neighbors lives"}),Object(i.jsx)("li",{children:"A living cell with more than 3 neighbors dies"}),Object(i.jsx)("li",{children:"A dead cell with 3 living neighbors becomes alive"})]}),Object(i.jsx)("div",{children:"With each generation that a cell survives, the cell ages. Cells change color as they age based on the selected color theme."}),Object(i.jsxs)("div",{className:"expand",onClick:function(){return n(!1)},children:["Less",Object(i.jsx)("svg",{height:"12",width:"16",className:"icon",children:Object(i.jsx)("polygon",{points:"8,0 16,12 0,12",style:{fill:"aliceblue"}})})]})]})]})]})},o=(a(15),function(e){var t=e.color,a=e.isRunning,s=e.toggleCell;return Object(i.jsx)("div",{className:"cell",style:{backgroundColor:t},onClick:function(){return!a&&s()}})}),d=(a(16),50),b={state:0,age:0},u={state:1,age:0},j=[500,250,100],h=[{name:"Purple-Yellow",colors:["#8400ab","#bb009d","#e50089","#ff0073","#ff355b","#ff6543","#ff8e2a","#ffb407","#ffd900","#fcfb2d","#ffd900","#ffb407","#ff8e2a","#ff6543","#ff355b","#ff0073","#e50089","#bb009d","#8400ab"]},{name:"Orange-Blue",colors:["#ff7e00","#ff5e1c","#ff2e33","#ff004a","#ff0064","#ff0081","#f100a0","#cf00c1","#9900e2","#0000ff","#9900e2","#cf00c1","#f100a0","#ff0081","#ff0064","#ff004a","#ff2e33","#ff5e1c","#ff7e00"]},{name:"Sky-Rose",colors:["#00b5e2","#19adee","#4ba2f5","#7795f4","#a084ea","#c270d6","#dd59b9","#ef4294","#f5326b","#ef3340","#f5326b","#ef4294","#dd59b9","#c270d6","#a084ea","#7795f4","#4ba2f5","#19adee","#00b5e2"]},{name:"Magenta-Lime",colors:["#a31746","#b62a40","#c73f39","#d35530","#dd6c24","#e28315","#e39b00","#dfb400","#d8cc02","#cbe426","#d8cc02","#dfb400","#e39b00","#e28315","#dd6c24","#d35530","#c73f39","#b62a40","#a31746"]},{name:"Green-Red",colors:["#00ff00","#6fed00","#98db00","#b6c700","#cdb200","#df9b00","#ee8200","#f86600","#fe4400","#ff0000","#fe4400","#f86600","#ee8200","#df9b00","#cdb200","#b6c700","#98db00","#6fed00","#00ff00"]},{name:"Rainbow",colors:["#ff0000","#ffa500","#ffff00","#008000","#0000ff","#4b0082","#ee82ee","#4b0082","#0000ff","#008000","#ffff00","#ffa500","#ff0000"]},{name:"Pinks",colors:["#fa6e6e","#ff6374","#ff587c","#ff4b86","#ff3d92","#ff2da0","#ff1ab0","#ff02c1","#ff00d4","#ff00e8","#ff00d4","#ff02c1","#ff1ab0","#ff2da0","#ff3d92","#ff4b86","#ff587c","#ff6374","#fa6e6e"]}],m=[{name:"Big Mug"},{name:"Snake"},{name:"Bucket"},{name:"Double Bucket"},{name:"Glider"},{name:"Dragons"},{name:"R-Pentomino"}];var O=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(0),f=Object(l.a)(c,2),O=f[0],v=f[1],x=Object(s.useState)(1),p=Object(l.a)(x,2),C=p[0],k=p[1],N=Object(s.useState)(0),w=Object(l.a)(N,2),y=w[0],S=w[1],A=Object(s.useState)(Array.from({length:2500},(function(e,t){return b}))),B=Object(l.a)(A,2),R=B[0],L=B[1];return Object(s.useEffect)((function(){var e;return a&&(e=window.setInterval((function(){!function(){for(var e=[],t=R.length,a=0;a<t;a++){var s=0;s+=0===a?R[2499].state:R[a-1].state,s+=2499===a?R[0].state:R[a+1].state,s+=a-d-1<0?R[t+(a-d-1)].state:R[a-d-1].state,s+=a-d<0?R[t+(a-d)].state:R[a-d].state,s+=a-d+1<0?R[t+(a-d+1)].state:R[a-d+1].state,s+=a+d-1>=t?R[a+d-1-t].state:R[a+d-1].state,s+=a+d>=t?R[a+d-t].state:R[a+d].state,s+=a+d+1>=t?R[a+d+1-t].state:R[a+d+1].state;var n=1===R[a].state;if(3===s||2===s&&n){var c=R[a].age+1;e.push({age:n?c%h[O].colors.length:0,state:1})}else e.push(b)}L(e),S(y+1)}()}),j[C])),function(){window.clearInterval(e)}}),[a,C,O,y,R]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(r,{}),Object(i.jsxs)("div",{className:"grid-container",children:[Object(i.jsxs)("div",{className:"themes",children:["Choose Color Theme",h.map((function(e,t){return Object(i.jsx)("button",{onClick:function(){return v(t)},children:e.name},"theme-".concat(t))}))]}),Object(i.jsx)("div",{className:"grid",children:R.map((function(e,t){return Object(i.jsx)(o,{index:t,toggleCell:function(){return function(e){var t=Object(g.a)(R);t[e]=0===t[e].state?u:b,L(t)}(t)},isRunning:a,color:0===e.state?"aliceblue":h[O].colors[e.age]},"cell-".concat(t))}))}),Object(i.jsxs)("div",{className:"shapes",children:["Add Shape",m.map((function(e,t){return Object(i.jsx)("button",{onClick:function(){return function(e){var t=Array.from({length:2500},(function(e,t){return b}));"R-Pentomino"===e?(t[1224]={state:1,age:0},t[1225]={state:1,age:0},t[1175]={state:1,age:0},t[1176]={state:1,age:0},t[1275]={state:1,age:0}):"Snake"===e?(t[1224]={state:1,age:0},t[1225]={state:1,age:0},t[1174]={state:1,age:0},t[1275]={state:1,age:0},t[1124]={state:1,age:0},t[1125]={state:1,age:0},t[1324]={state:1,age:0},t[1325]={state:1,age:0},t[1075]={state:1,age:0},t[1374]={state:1,age:0},t[1024]={state:1,age:0},t[1025]={state:1,age:0},t[1424]={state:1,age:0},t[1425]={state:1,age:0}):"Bucket"===e?(t[1224]={state:1,age:0},t[1225]={state:1,age:0},t[1226]={state:1,age:0},t[1174]={state:1,age:0},t[1124]={state:1,age:0},t[1176]={state:1,age:0},t[1126]={state:1,age:0}):"Big Mug"===e?(t[1220]={state:1,age:0},t[1223]={state:1,age:0},t[1224]={state:1,age:0},t[1225]={state:1,age:0},t[1226]={state:1,age:0},t[1227]={state:1,age:0},t[1230]={state:1,age:0},t[1270]={state:1,age:0},t[1271]={state:1,age:0},t[1272]={state:1,age:0},t[1273]={state:1,age:0},t[1274]={state:1,age:0},t[1275]={state:1,age:0},t[1276]={state:1,age:0},t[1277]={state:1,age:0},t[1278]={state:1,age:0},t[1279]={state:1,age:0},t[1280]={state:1,age:0},t[1323]={state:1,age:0},t[1324]={state:1,age:0},t[1325]={state:1,age:0},t[1326]={state:1,age:0},t[1327]={state:1,age:0},t[1170]={state:1,age:0},t[1171]={state:1,age:0},t[1172]={state:1,age:0},t[1173]={state:1,age:0},t[1174]={state:1,age:0},t[1175]={state:1,age:0},t[1176]={state:1,age:0},t[1177]={state:1,age:0},t[1178]={state:1,age:0},t[1179]={state:1,age:0},t[1180]={state:1,age:0},t[1127]={state:1,age:0},t[1126]={state:1,age:0},t[1125]={state:1,age:0},t[1124]={state:1,age:0},t[1123]={state:1,age:0}):"Double Bucket"===e?(t[1222]={state:1,age:0},t[1223]={state:1,age:0},t[1224]={state:1,age:0},t[1172]={state:1,age:0},t[1122]={state:1,age:0},t[1174]={state:1,age:0},t[1124]={state:1,age:0},t[1227]={state:1,age:0},t[1228]={state:1,age:0},t[1229]={state:1,age:0},t[1177]={state:1,age:0},t[1127]={state:1,age:0},t[1179]={state:1,age:0},t[1129]={state:1,age:0}):"Dragons"===e?(t[1223]={state:1,age:0},t[1222]={state:1,age:0},t[1227]={state:1,age:0},t[1228]={state:1,age:0},t[1273]={state:1,age:0},t[1277]={state:1,age:0},t[1268]={state:1,age:0},t[1282]={state:1,age:0},t[1323]={state:1,age:0},t[1327]={state:1,age:0},t[1373]={state:1,age:0},t[1377]={state:1,age:0},t[1369]={state:1,age:0},t[1381]={state:1,age:0},t[1368]={state:1,age:0},t[1382]={state:1,age:0},t[1423]={state:1,age:0},t[1427]={state:1,age:0},t[1420]={state:1,age:0},t[1430]={state:1,age:0},t[1472]={state:1,age:0},t[1478]={state:1,age:0},t[1172]={state:1,age:0},t[1178]={state:1,age:0},t[1170]={state:1,age:0},t[1180]={state:1,age:0},t[1121]={state:1,age:0},t[1129]={state:1,age:0},t[1120]={state:1,age:0},t[1130]={state:1,age:0},t[1119]={state:1,age:0},t[1131]={state:1,age:0},t[1070]={state:1,age:0},t[1080]={state:1,age:0},t[1073]={state:1,age:0},t[1077]={state:1,age:0},t[1023]={state:1,age:0},t[1027]={state:1,age:0},t[1022]={state:1,age:0},t[1028]={state:1,age:0},t[1021]={state:1,age:0},t[1029]={state:1,age:0},t[972]={state:1,age:0},t[978]={state:1,age:0}):"Glider"===e&&(t[1225]={state:1,age:0},t[1276]={state:1,age:0},t[1277]={state:1,age:0},t[1325]={state:1,age:0},t[1326]={state:1,age:0}),L(t)}(e.name)},children:e.name},"shape-".concat(t))}))]})]}),Object(i.jsxs)("div",{className:"generation",children:["Current Generation: ",y]}),Object(i.jsxs)("div",{className:"control-buttons",children:[Object(i.jsx)("button",{disabled:a,onClick:function(){return n(!0)},children:"Start"}),Object(i.jsx)("button",{disabled:!a,onClick:function(){return n(!1)},children:"Stop"}),Object(i.jsx)("button",{disabled:a,onClick:function(){return function(){var e=Array.from({length:2500},(function(e,t){return b}));L(e),S(0)}()},children:"Clear"}),Object(i.jsxs)("div",{className:"slider-container",children:[Object(i.jsx)("input",{type:"range",min:"0",max:"2",value:C,className:"slider",id:"myRange",onChange:function(e){k(e.target.value)}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"speed",children:"Slow"}),Object(i.jsx)("span",{className:"speed",children:"Med"}),Object(i.jsx)("span",{className:"speed",children:"Fast"})]})]})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,f=t.getTTFB;a(e),s(e),n(e),c(e),f(e)}))};f.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.621b51ca.chunk.js.map