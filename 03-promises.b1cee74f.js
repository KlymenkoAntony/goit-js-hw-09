var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");document.querySelector("[type='submit']");const i=document.querySelector(".form");i.querySelector("[name='delay']"),i.querySelector("[name='step']"),i.querySelector("[name='amount']"),i.querySelectorAll("label");function l({position:e,delay:t}){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=e.target,o=parseInt(t.delay.value),n=parseInt(t.step.value),i=parseInt(t.amount.value);for(let e=0;e<i;e+=1){l({position:e,delay:o+n*e}).then((({position:e,delay:t}={})=>{r.Notify.success(`&#x2705 Fulfilled promise ${e+1} in ${t}ms`)})).catch((({position:e,delay:t}={})=>{r.Notify.failure(`&#10060 Rejected promise ${e+1} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.b1cee74f.js.map
