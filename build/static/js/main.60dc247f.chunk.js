(this["webpackJsonptesseract.js-react-app"]=this["webpackJsonptesseract.js-react-app"]||[]).push([[0],{113:function(e,t,n){e.exports=n(351)},118:function(e,t,n){},158:function(e,t,n){},201:function(e,t){},203:function(e,t){},215:function(e,t){},217:function(e,t){},351:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n.n(o),c=n(111),i=n.n(c),r=(n(118),n(18)),l=n(112),s=n.n(l),u=(n(158),n(49)),g=n.n(u);var d=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(""),l=Object(r.a)(i,2),u=l[0],d=l[1],f=Object(o.useState)(""),h=Object(r.a)(f,2),m=h[0],v=h[1],p=Object(o.useState)(0),b=Object(r.a)(p,2),w=b[0],j=b[1],E=Object(o.useState)(0),O=Object(r.a)(E,2),y=O[0],I=O[1],k=Object(o.useRef)(null),W=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e=document.querySelector("#currentImage"),t=0,n=0;t=0===e.clientWidth?640:e.clientWidth,n=0===e.clientHeight?800:e.clientHeight,j(t),I(n),console.log("Image Width: "+t+", Image Height: "+n)}),[n]),a.a.createElement("div",{className:"App"},a.a.createElement("input",{accept:"image/*",id:"icon-button-file",type:"file",capture:"environment",onChange:function(e){c(URL.createObjectURL(e.target.files[0]))},style:{marginTop:50}}),a.a.createElement("button",{onClick:function(){d("Processing..."),v(""),console.log("Image Width: "+w+", Image Height: "+y);var e=k.current,t=e.getContext("2d");t.drawImage(W.current,0,0,w,y),console.log(e);var n=e.toDataURL("image/jpeg");g.a.read(n,(function(e,n){j(4*w),I(4*y);var o=4*w,a=4*y;n.resize(o,a).greyscale().invert().brightness(-.2).contrast(.5).normalize().getBase64(g.a.AUTO,(function(e,n){console.log(n);var c=new Image;c.onload=function(){t.drawImage(c,0,0,o,a)},c.src=n,s.a.recognize(n,"eng",{logger:function(e){return console.log(e)}}).catch((function(e){console.error(e)})).then((function(e){console.log(e),v(e.data.confidence+"%"),d(e.data.text)}))}))}))},style:{height:30,borderRadius:10}},"Do The Thing!"),a.a.createElement("h3",null,"Confidence Level: ",m),a.a.createElement("h3",null,"Extracted text (Editable)"),a.a.createElement("div",null,a.a.createElement("span",{className:"editableBox",contenteditable:"true",onChange:function(e){d(e.target.value)}},u)),a.a.createElement("h3",null,"Uploaded Image"),a.a.createElement("img",{src:n,className:"App-logo",alt:"Nothing Uploaded!",id:"currentImage",ref:W}),a.a.createElement("h3",null,"Modified Image"),a.a.createElement("canvas",{ref:k,width:w,height:y}))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");f?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[113,1,2]]]);
//# sourceMappingURL=main.60dc247f.chunk.js.map