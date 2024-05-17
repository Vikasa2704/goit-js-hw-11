import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="43843961-af0153872675268c29353c689",f="https://pixabay.com/api/";function p(r){const o=`${f}?key=${d}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(n=>{if(n.ok)return n.json();throw new Error("Error fetching data")}).then(n=>{if(n.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return n.hits})}function h(r){r.style.display="inline-block"}function m(r){r.style.display="none"}function y(r){return r.map(({webformatURL:o,largeImageURL:n,tags:i,likes:e,views:t,comments:a,downloads:s})=>`
            <div class="photo-card">
                <a href="${n}" target="_blank">
                    <img src="${o}" alt="${i}" loading="lazy" class="photo-card__image" />
                </a>
                <div class="photo-card__info">
                    <p class="photo-card__info-item"><b>Likes:</b> ${e}</p>
                    <p class="photo-card__info-item"><b>Views:</b> ${t}</p>
                    <p class="photo-card__info-item"><b>Comments:</b> ${a}</p>
                    <p class="photo-card__info-item"><b>Downloads:</b> ${s}</p>
                </div>
            </div>
        `).join("")}function g(){const r=document.querySelector(".gallery");r.innerHTML=""}document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector("#search-form"),o=document.querySelector("#search-input"),n=document.querySelector(".gallery"),i=document.querySelector(".loader");r.addEventListener("submit",e);function e(t){t.preventDefault();const a=o.value.trim();if(a===""){c.error({title:"Error",message:"Please enter a search query!"}),o.value="";return}g(),h(i),p(a).then(s=>{const l=y(s);n.insertAdjacentHTML("beforeend",l),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o.value=""}).catch(s=>{c.error({title:"Error",message:s.message}),o.value=""}).finally(()=>m(i))}});
//# sourceMappingURL=commonHelpers.js.map
