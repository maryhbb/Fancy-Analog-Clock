(()=>{const t=t=>t*Math.PI/180;function e(e,n){const o=t(n);return{x:e*Math.cos(o),y:e*Math.sin(o)}}function n(t){if(t%90==0){const{x:n,y:o}=e(75,t);!function(t,e,n){const o=document.querySelector("svg"),r=document.createElementNS("http://www.w3.org/2000/svg","text");o.prepend(r),r.setAttribute("x",t),r.setAttribute("y",e),r.textContent=n,r.classList.add("text")}(n,o,(t+90)/30)}}function o(t){const n=t%30==0;!function(t,e,n){const o=document.querySelector("svg"),r=document.createElementNS("http://www.w3.org/2000/svg","line");o.appendChild(r),r.setAttribute("x1",t.x),r.setAttribute("y1",t.y),r.setAttribute("x2",e.x),r.setAttribute("y2",e.y),r.setAttribute("stroke",n?"#333":"#888"),r.setAttribute("stroke-width",n?4:3)}(e(100,t),e(n?85:90,t),n)}for(let t=0;t<360;t+=6)o(t),n(t);const r=document.querySelector("#hour"),s=document.querySelector("#minute"),c=document.querySelector("#second");setInterval((function(){const t=30*(new Date).getHours(),e=6*(new Date).getMinutes(),n=6*(new Date).getSeconds();r.style.transform=`rotate(${t}deg)`,s.style.transform=`rotate(${e}deg)`,c.style.transform=`rotate(${n}deg)`}),1e3)})();