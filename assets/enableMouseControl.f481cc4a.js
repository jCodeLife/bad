import{aa as l,ab as e,c as L,ac as E,ad as f,ae as m,af as g}from"./index.3bc64a20.js";function C(s){if(!s.done){if(l||this.mouseControl==="drag"){let n=0,r=0,c=0,v=0,u=!1;const a=t=>{t.preventDefault(),u=!0,c=n="targetTouches"in t?t.targetTouches[0].clientX:t.clientX,v=r="targetTouches"in t?t.targetTouches[0].clientY:t.clientY},i=t=>{if(!u)return;const d="targetTouches"in t?t.targetTouches[0].clientX:t.clientX,h="targetTouches"in t?t.targetTouches[0].clientY:t.clientY,T=d-n,k=h-r;n=d,r=h,this.gyrate(T*2,k*2),(Math.abs(n-c)>10||Math.abs(r-v)>10)&&g(!1)},o=()=>{u=!1,g(!0)};if(this.mouseControl==="drag"&&!l){e.addEventListener("mousedown",a),e.addEventListener("mousemove",i),e.addEventListener("mouseup",o),document.addEventListener("mouseleave",o),s.then(()=>{e.removeEventListener("mousedown",a),e.removeEventListener("mousemove",i),e.removeEventListener("mouseup",o),document.removeEventListener("mouseleave",o),o()});return}e.addEventListener("touchstart",a),e.addEventListener("touchmove",i),e.addEventListener("touchend",o),e.addEventListener("touchcancel",o),s.then(()=>{e.removeEventListener("touchstart",a),e.removeEventListener("touchmove",i),e.removeEventListener("touchend",o),e.removeEventListener("touchcancel",o),o()});return}s.watch(L(()=>{if(E()!==this.camera)return;const n=({movementX:r,movementY:c})=>{this.gyrate(r,c)};return document.addEventListener("mousemove",n),()=>{document.removeEventListener("mousemove",n)}},[E])),s.watch(L(()=>{const n=f();if(n!==this.camera)return;const r=()=>e.requestPointerLock();e.addEventListener("click",r);const c=()=>{document.pointerLockElement===e?m(n):m(void 0)};return document.addEventListener("pointerlockchange",c),()=>{e.removeEventListener("click",r),document.removeEventListener("pointerlockchange",c),document.exitPointerLock(),m(void 0)}},[f]))}}export{C as default};
