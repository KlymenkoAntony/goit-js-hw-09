!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.body;var o=null;t.addEventListener("click",(function(){o=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0})),n.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.4a484ea6.js.map
