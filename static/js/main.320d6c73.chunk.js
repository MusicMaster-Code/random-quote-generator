(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),i=n(1);n(9);var s=function(){var e,t=Object(o.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(o.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1],f=function(){fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e=Math.floor(Math.random()*t.quotes.length),c(t.quotes[e].quote),d(t.quotes[e].author)}))};Object(o.useEffect)(f,[]);var h='https://twitter.com/intent/tweet?text="'+r+'" -'+u,w="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption="+encodeURIComponent(u)+"&content="+encodeURIComponent(r)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container",id:"quote-box"},a.a.createElement("div",{id:"text"},r),a.a.createElement("br",null),a.a.createElement("div",{id:"author"},"-"+u),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"button",id:"new-quote",onClick:f},"New Quote"),a.a.createElement("a",{className:"fa fa-twitter",id:"tweet-quote",title:"Post this quote on twitter!",target:"_blank",href:h}),a.a.createElement("a",{className:"fa fa-tumblr",href:w,target:"_blank"}))))},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(s,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quote-generator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/quote-generator","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.320d6c73.chunk.js.map