
document.addEventListener("DOMContentLoaded", function(){
        setTimeout(function(){

                const guest = document.querySelector("[data-guest]");
                const text = document.querySelectorAll(".tomatoBlock span");
                        text.forEach(txt => {
                                console.log(txt.offsetWidth);
                                console.log(txt.style.width);
                                let shadowWidth = txt.offsetWidth;
                                let shadow = document.createElement("span");
                                shadow.classList.add("shadow");
                                console.log("Length: "+shadowWidth);
                                shadow.style.width = shadowWidth+"px"; 
                                txt.insertAdjacentElement("afterend", shadow);
                        });
        }, 1);
});

