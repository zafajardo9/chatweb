(this.webpackJsonpwebsitechat=this.webpackJsonpwebsitechat||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),o=a.n(c),i=a(13),l=a.n(i),s=a(17),u=a(12),m=(a(28),a(7)),d=a.n(m),p=(a(29),a(32),a(39),a(19)),f=a(20),h=a(11),b=a(8),g=a(21),E=a(9);b.b.add(g.a,E.d,E.a,E.b,E.c),d.a.initializeApp({apiKey:"AIzaSyA-zwGYIfiWLBu5gjQ1ZZq9Iv17A3XEFTg",authDomain:"webchat-f8df8.firebaseapp.com",databaseURL:"https://webchat-f8df8.firebaseio.com",projectId:"webchat-f8df8",storageBucket:"webchat-f8df8.appspot.com",messagingSenderId:"519649131888",appId:"1:519649131888:web:40a26e2582f578a0c4a3b5",measurementId:"G-7LWYNXZC1E"});var v=d.a.auth(),w=d.a.firestore();function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;v.signInWithPopup(e)}},r.a.createElement(h.a,{icon:["fab","google"]})," Sign in with Google"))}function I(){return v.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return v.signOut()}},r.a.createElement(h.a,{icon:"sign-out-alt"}))}function k(){var e=Object(n.useRef)(),t=w.collection("messages"),a=t.orderBy("createdAt").limit(25),c=Object(f.a)(a,{idField:"id"}),o=Object(u.a)(c,1)[0],i=Object(n.useState)(""),m=Object(u.a)(i,2),p=m[0],b=m[1],g=function(){var a=Object(s.a)(l.a.mark((function a(n){var r,c,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=v.currentUser,c=r.uid,o=r.photoURL,a.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:o});case 4:b(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,o&&o.map((function(e){return r.a.createElement(O,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{value:p,onChange:function(e){return b(e.target.value)},placeholder:"Message"}),r.a.createElement("button",{className:"form-btn",type:"submit",disabled:!p},r.a.createElement(h.a,{icon:"paper-plane"}))))}function O(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,o=n===v.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(o)},r.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,a)))}var y=function(){var e=Object(p.a)(v),t=Object(u.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"ReactJS Learning Chat"),r.a.createElement(I,null)),r.a.createElement("section",null,t?r.a.createElement(k,null):r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e233603c.chunk.js.map