(this.webpackJsonpdiscordclone=this.webpackJsonpdiscordclone||[]).push([[0],{39:function(e,a,n){},42:function(e,a,n){},66:function(e,a,n){e.exports=n(88)},71:function(e,a,n){},87:function(e,a,n){},88:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(18),r=n.n(l),s=(n(71),n(23)),i=n.n(s),o=i.a.initializeApp({apiKey:"AIzaSyCkHqF0xTEuz3nGfDRRPUAjESC_a47rofg",authDomain:"discord-clone-67a74.firebaseapp.com",databaseURL:"https://discord-clone-67a74.firebaseio.com",projectId:"discord-clone-67a74",storageBucket:"discord-clone-67a74.appspot.com",messagingSenderId:"938787127893",appId:"1:938787127893:web:f9e2f776df4ab145ef4adc",measurementId:"G-HVZREHTN2T"}).firestore(),m=i.a.auth(),u=new i.a.auth.GoogleAuthProvider,d=n(11),E=n(29),h=(n(39),n(44)),p=n.n(h),f=n(48),b=n.n(f),g=n(49),v=n.n(g),N=n(50),_=n.n(N),S=n(51),j=n.n(S),I=n(52),O=n.n(I),y=function(e){var a=e.channelName;return c.a.createElement("div",{className:"chatHeader"},c.a.createElement("div",{className:"chatHeader_l"},c.a.createElement("h3",null,c.a.createElement("span",{className:"chatHeader_s"},"#"),a)),c.a.createElement("div",{className:"chatHeader_r"},c.a.createElement(p.a,null),c.a.createElement(b.a,null),c.a.createElement(v.a,null),c.a.createElement("div",{className:"chatHeader_S"},c.a.createElement("input",{type:"text",placeholder:"Search"}),c.a.createElement(_.a,null)),c.a.createElement(j.a,null),c.a.createElement(O.a,null)))},C=n(53),k=n.n(C),w=n(54),H=n.n(w),z=n(55),x=n.n(z),T=n(56),A=n.n(T),B=n(102),D=function(e){e.timestamp;var a=e.message,n=e.user;return c.a.createElement("div",{className:"message"},c.a.createElement(B.a,{src:n.photo}),c.a.createElement("div",{className:"message_info"},c.a.createElement("h4",null,n.displayName),c.a.createElement("p",null,a)))},R=n(21),L=Object(R.b)({name:"user",initialState:{user:null},reducers:{login:function(e,a){e.user=a.payload},logout:function(e){e.user=null}}}),M=L.actions,F=M.login,G=M.logout,P=function(e){return e.user.user},U=L.reducer,V=Object(R.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,a){e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),W=V.actions.setChannelInfo,J=function(e){return e.app.channelId},q=function(e){return e.app.channelName},K=V.reducer,Z=function(){var e=Object(d.c)(P),a=Object(d.c)(J),n=Object(d.c)(q),l=Object(t.useState)(""),r=Object(E.a)(l,2),s=r[0],m=r[1],u=Object(t.useState)([]),h=Object(E.a)(u,2),p=h[0],f=h[1];Object(t.useEffect)((function(){a&&o.collection("dbchannels").doc(a).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[a]);return c.a.createElement("div",{className:"chat"},c.a.createElement(y,{channelName:n}),c.a.createElement("div",{className:"chat_message"},p.map((function(e){return c.a.createElement(D,{timestamp:e.timestamp,message:e.message,user:e.user})}))),c.a.createElement("div",{className:"chat_input"},c.a.createElement(k.a,{fontSize:"large"}),c.a.createElement("form",null,c.a.createElement("input",{type:"text",disabled:!a,value:s,onChange:function(e){return m(e.target.value)},placeholder:"Message # ".concat(n)}),c.a.createElement("button",{type:"submit",className:"chat_inputButton",onClick:function(n){n.preventDefault(),o.collection("dbchannels").doc(a).collection("messages").add({timestamp:i.a.firestore.FieldValue.serverTimestamp(),message:s,user:e}),m("")}},"Send Message")),c.a.createElement("div",{className:"chat_inputIcon"},c.a.createElement(H.a,{fontSize:"large"}),c.a.createElement(x.a,{fontSize:"large"}),c.a.createElement(A.a,{fontSize:"large"}))))},$=n(101),Q=(n(87),function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login_img"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/768px-Discord_Color_Text_Logo.svg.png",alt:"discord"})),c.a.createElement($.a,{onClick:function(e){m.signInWithPopup(u).catch((function(e){return alert(e.message)}))}},"Sign IN"))}),X=(n(42),n(35)),Y=n.n(X),ee=n(57),ae=n.n(ee),ne=function(e){var a=e.id,n=e.channelName;console.log("id is",a);var t=Object(d.b)();return c.a.createElement("div",{className:"sidebarchannel",onClick:function(){return t(W({channelId:a,channelName:n}))}},c.a.createElement("h4",null,c.a.createElement("span",{className:"sidebarchannel_s"},"#"),n))},te=n(58),ce=n.n(te),le=n(59),re=n.n(le),se=n(60),ie=n.n(se),oe=n(61),me=n.n(oe),ue=n(62),de=n.n(ue),Ee=n(63),he=n.n(Ee),pe=function(){var e=Object(d.c)(P),a=Object(t.useState)([]),n=Object(E.a)(a,2),l=n[0],r=n[1];Object(t.useEffect)((function(){o.collection("dbchannels").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,channel:e.data()}})))}))}),[]);return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar_start"},c.a.createElement("h3",null,"Muhammad Haris"),c.a.createElement(Y.a,null)),c.a.createElement("div",{className:"sidebar_channels"},c.a.createElement("div",{className:"sidebar_channelsHeader"},c.a.createElement("div",{className:"sidebar_h"},c.a.createElement(Y.a,null),c.a.createElement("h4",null,"Channels")),c.a.createElement(ae.a,{className:"sidebar_icon",onClick:function(){var e=prompt("Enter a new channel name");e&&o.collection("dbchannels").add({channelName:e})}})),c.a.createElement("div",{className:"sidebar_channelI"},l.map((function(e){var a=e.id,n=e.channel;return c.a.createElement(ne,{key:a,id:a,channelName:n.channelName})})))),c.a.createElement("div",{className:"sidebar_2last"},c.a.createElement(ce.a,{fontSize:"large",className:"s2l_vicon"}),c.a.createElement("div",{className:"sidebar_2lastInfo"},c.a.createElement("h3",null,"Voice Connected"),c.a.createElement("p",null,"Stream")),c.a.createElement("div",{className:"sidebar_2lastIcon"},c.a.createElement(re.a,null),c.a.createElement(ie.a,null))),c.a.createElement("div",{className:"sidebar_last"},c.a.createElement(B.a,{className:"siidebar_avatar",src:e.photo,onClick:function(){return m.signOut()}}),c.a.createElement("div",{className:"sidebar_lastInfo"},c.a.createElement("h3",null,e.displayName),c.a.createElement("p",null,"#",e.uid.substring(0,5))),c.a.createElement("div",{className:"sidebar_lastIcon"},c.a.createElement(me.a,null),c.a.createElement(de.a,null),c.a.createElement(he.a,null))))},fe=function(){var e=Object(d.c)(P),a=Object(d.b)();return Object(t.useEffect)((function(){m.onAuthStateChanged((function(e){console.log("user is",e),a(e?F({uid:e.uid,photo:e.photoURL,email:e.email,displayName:e.displayName}):G())}))}),[a]),c.a.createElement("div",{className:"app"},e?c.a.createElement(c.a.Fragment,null,c.a.createElement(pe,null),c.a.createElement(Z,null)):c.a.createElement(Q,null))},be=Object(R.a)({reducer:{user:U,app:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:be},c.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.e7dbc9fd.chunk.js.map