import {params} from "./query-search";


document.addEventListener("DOMContentLoaded", function(){

        // holds it to give time for proper font to be applied.

        
        setTimeout(function(){


                const text = document.querySelectorAll(".tomatoBlock p span");
                        text.forEach(txt => {
                                let shadowWidth = txt.offsetWidth;
                                let shadow = document.createElement("span");
                                shadow.classList.add("shadow");
                                shadow.style.width = shadowWidth+"px"; 
                                txt.insertAdjacentElement("afterend", shadow);
                        });
        }, 1000);

        // scrolls us back to top incase users been scrolling during animation.
        
        setTimeout(() => {
                document.querySelector(".animationIntro").style.position = "absolute";
                if(params.get("name") === undefined){
                        window.scrollTo(0,0);
                }
                }, 8000);
 });

