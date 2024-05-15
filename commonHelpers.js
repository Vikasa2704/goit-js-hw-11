import{i as c,S as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="43843961-af0153872675268c29353c689",f="https://pixabay.com/api/";function d(n){const o=`${f}?key=${u}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(t.ok)return t.json();throw new Error("Error fetching data")}).then(t=>{if(t.hits.length===0)throw new Error("No images found");return t.hits})}function p(n){return n.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:i,downloads:a})=>`
      <div class="photo-card">
        <a href="${t}" target="_blank">
          <img src="${o}" alt="${s}" loading="lazy" class="photo-card__image" />
         </a>
        <div class="photo-card__info">
          <p class="photo-card__info-item"><b>Likes:</b> ${e}</p>
          <p class="photo-card__info-item"><b>Views:</b> ${r}</p>
          <p class="photo-card__info-item"><b>Comments:</b> ${i}</p>
          <p class="photo-card__info-item"><b>Downloads:</b> ${a}</p>
        </div>
        </a>
      </div>
    `).join("")}function m(){const n=document.querySelector(".gallery");n.innerHTML=""}const h=document.querySelector("#search-form"),y=document.querySelector("#search-input"),g=document.querySelector(".gallery");h.addEventListener("submit",b);function b(n){n.preventDefault();const o=y.value.trim();if(o===""){c.error({title:"Error",message:"Please enter a search query"});return}m(),d(o).then(t=>{const s=p(t);g.insertAdjacentHTML("beforeend",s)}).catch(t=>{c.error({title:"Error",message:t.message})})}const _=new l(".gallery a",{captionsData:"alt",captionDelay:250});_.show();
//# sourceMappingURL=commonHelpers.js.map
