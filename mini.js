const calculateNegative=e=>{let t="";return t="a"===e[3]?e.substring(5,e.length-1):e.substring(4,e.length-1),t=t.split(",").map(((e,t)=>3!=t?255-e:e)).join(","),`rgb(${t})`},colorForElement=(e,t)=>{for(var n=null,o=e.ownerDocument.defaultView;e&&(!(n=o.getComputedStyle(e).getPropertyValue(t))||"transparent"==n);)e=e.parentElement;return n},goNuts=()=>{document.querySelectorAll("*").forEach((e=>{const t=colorForElement(e,"color"),n=colorForElement(e,"background-color");e.style.color=calculateNegative(t),e.style.backgroundColor=calculateNegative(n)})),"Positive"==document.getElementById("the-button").innerText?document.getElementById("the-button").innerHTML="Negative":document.getElementById("the-button").innerHTML="Positive"},init=()=>{document.querySelector("*").style.backgroundColor="white";const e=document.createElement("div");e.setAttribute("id","the-box"),e.appendChild(document.createTextNode("Click here to go"));const t=document.createElement("button");t.setAttribute("id","the-button"),t.appendChild(document.createTextNode("Negative")),e.appendChild(t),document.querySelector("body").appendChild(e);const n=document.createTextNode('\n#the-box {\nbackground-color: cyan;\nfont-family: "Segoe UI";\nfont-size: 2em;\npadding: 3px;\nwidth: fit-content;\nposition: fixed;\nbottom: 0%;\nright: 5%;\n}\n#the-button {\nfont-family: "Segoe UI";\nfont-size: 0.9em;\ncursor: pointer;\n}'),o=document.createElement("style");o.appendChild(n),document.querySelector("head").appendChild(o),document.getElementById("the-button").onclick=goNuts};init();