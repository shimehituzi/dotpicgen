(this["webpackJsonprtk-template"]=this["webpackJsonprtk-template"]||[]).push([[0],{176:function(e,t,a){e.exports=a(186)},186:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(17),o=a(34),u=a(212),i=a(213),f=a(214),m=a(35),s=a(28);!function(e){e.Gray="#616161",e.Red="#ff8a80",e.Blue="#82b1ff",e.Green="#b9f6ca",e.Yellow="#ffff8d",e.White="#f5f5f5"}(n||(n={}));var b,d,E={pulletColor:n.Gray},p=Object(s.b)({name:"color",initialState:E,reducers:{reset:function(){return E},setColor:function(e,t){e.pulletColor=t.payload}}}),y={dots:Array(9).fill(Array(9).fill(n.White))},h=Object(s.b)({name:"canvas",initialState:y,reducers:{changeDotColor:function(e,t){e.dots[t.payload.y][t.payload.x]=t.payload.color}}}),j=Object(s.a)({reducer:(b={},Object(m.a)(b,p.name,p.reducer),Object(m.a)(b,h.name,h.reducer),b)}),k=(d={},Object(m.a)(d,p.name,p.actions),Object(m.a)(d,h.name,h.actions),d),C=o.c,v=function(){return Object(o.b)()},O=a(172),g=a(6),x=a(209),w=a(210),B=a(211),G=a(203),S=a(205),W=a(206),A=function(){return l.a.createElement(G.a,{position:"static"},l.a.createElement(S.a,null,l.a.createElement(W.a,{variant:"h5",color:"textSecondary"},"\u30c9\u30c3\u30c8\u7d75\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc")))},D=a(216),J=a(207),T=a(215),z=function(){var e=C((function(e){return e.color})),t=v(),a=Object(r.useCallback)((function(e,a){null!==a&&t(k.color.setColor(a))}),[t]);return l.a.createElement(D.a,{size:"small",value:e.pulletColor,exclusive:!0,onChange:a},Object.values(n).map((function(e,t){return l.a.createElement(J.a,{key:t,value:e},l.a.createElement(T.a,{style:{color:e}}))})))},F=a(20),I=function(){var e=C((function(e){return e.canvas.dots})),t=C((function(e){return e.color.pulletColor})),a=v(),n=Object(r.useCallback)((function(e,n){return function(){a(k.canvas.changeDotColor({y:e,x:n,color:t}))}}),[a,t]),c={clear:"both",display:"table"},o=Object(r.useCallback)((function(e){return{border:"none",float:"left",height:25,width:25,margin:-1,backgroundColor:e}}),[]),u={backgroundColor:F.a.grey[300],paddingBottom:16};return l.a.createElement(x.a,null,l.a.createElement(w.a,{style:u},e.map((function(e,t){return l.a.createElement("div",{key:t,style:c},e.map((function(e,a){return l.a.createElement("div",{key:a,style:o(e),onClick:n(t,a)})})))}))))},R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(x.a,null,l.a.createElement(w.a,null,l.a.createElement(B.a,{container:!0,justify:"center"},l.a.createElement(z,null))),l.a.createElement(w.a,null,l.a.createElement(B.a,{container:!0,justify:"center"},l.a.createElement(I,null)))))},Y=function(){return l.a.createElement(O.a,null,l.a.createElement(g.a,{exact:!0,path:"/"},l.a.createElement(R,null)))},q=a(173),H=Object(q.a)({palette:{primary:{light:"#58a5ef",main:"#0277bc",dark:"#004c8b",contrastText:"#ffffff"},secondary:{light:"#ffff72",main:"#ffeb3b",dark:"#c8b900",contrastText:"#000000"},type:"dark"}});Object(c.render)(l.a.createElement(u.a,{theme:H},l.a.createElement(o.a,{store:j},l.a.createElement(i.a,null),l.a.createElement(f.a,{maxWidth:"sm"},l.a.createElement(Y,null)))),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.1655230e.chunk.js.map