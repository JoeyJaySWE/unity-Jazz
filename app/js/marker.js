import params from "./query-search";

document.addEventListener("DOMContentLoaded", function(){
        // holds it to give time for proper font to be applied.
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
        }, 10);

        // scrolls us back to top incase users been scrolling during animation.
        
        setTimeout(() => {
                document.querySelector(".animationIntro").style.position = "absolute";
                if(params.get("phone") == null){
                        window.scrollTo(0,0);
                }
                }, 8000);
 });

