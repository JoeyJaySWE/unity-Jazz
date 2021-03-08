const text = document.querySelectorAll(".tomatoBlock span");

text.forEach(txt => {
        let shadowWidth = txt.offsetWidth;
        let shadow = document.createElement("span");
        shadow.classList.add("shadow");
        console.log("Length: "+shadowWidth);
        shadow.style.width = shadowWidth+"px"; 
        txt.insertAdjacentElement("afterend", shadow);
});