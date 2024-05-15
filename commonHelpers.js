import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="43843961-af0153872675268c29353c689",d="https://pixabay.com/api/";function p(n){const o=`${d}?key=${f}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(t.ok)return t.json();throw new Error("Error fetching data")}).then(t=>{if(t.hits.length===0)throw new Error("No images found");return t.hits})}function m(n){return n.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:i,downloads:l})=>`
      <div class="photo-card">
        <a href="${t}" target="_blank">
          <img src="${o}" alt="${s}" loading="lazy" class="photo-card__image" />
         </a>
        <div class="photo-card__info">
          <p class="photo-card__info-item"><b>Likes:</b> ${e}</p>
          <p class="photo-card__info-item"><b>Views:</b> ${r}</p>
          <p class="photo-card__info-item"><b>Comments:</b> ${i}</p>
          <p class="photo-card__info-item"><b>Downloads:</b> ${l}</p>
        </div>
        
      </div>
    `).join("")}function h(){const n=document.querySelector(".gallery");n.innerHTML=""}const a=document.querySelector("#search-form"),y=document.querySelector("#search-input"),g=document.querySelector(".gallery");a.addEventListener("submit",b);function b(n){n.preventDefault();const o=y.value.trim();if(o===""){c.error({title:"Error",message:"Please enter a search query"}).finally(()=>a.reset());return}h(),p(o).then(t=>{const s=m(t);g.insertAdjacentHTML("beforeend",s)}).catch(t=>{c.error({title:"Error",message:t.message})})}const _=new u(".gallery a",{captionsData:"alt",captionDelay:250});_.show();
//# sourceMappingURL=commonHelpers.js.map
