!function(){var t=document.getElementById("start"),e=document.getElementById("stop"),n=null;e.disabled=!0;var r=document.querySelector("body");t.addEventListener("click",(function(t){n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.target.setAttribute("disabled",!0),t.target.nextElementSibling.removeAttribute("disabled")})),e.addEventListener("click",(function(t){clearInterval(n),t.target.setAttribute("disabled",!0),t.target.previousElementSibling.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.695a3dbd.js.map