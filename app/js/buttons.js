import {data, person} from "./query-search";
import params from "./query-search";

document.addEventListener("DOMContentLoaded", function(){

/* -----------------[element Variables]------------------- */
  
  const toForm = document.querySelector("#toFormBtn");
  const contactForm = document.querySelector("form");
  const wineBtns = document.querySelectorAll(".wineBtns button");
  const redWine = wineBtns[0];
  const whiteWine = wineBtns[1];
  const submitBtn = document.querySelector("button.submit");
  const formSend = document.querySelector(".formSend");
  const travel = document.querySelector(".travel");
  const noTravel = document.querySelector(".noTravel");
  const formName = document.querySelector("inout[name=name]");
  const formNumber = document.querySelector("input[name=phone]");
  const formMail = document.querySelector("input[name=mail]");
  

/* ------------------------------------------ */

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  
const cookie = getCookie("swear");
if(cookie === "true"){
    console.log("Cookie set");
    document.querySelector(".secret").style.display = "none";
}






toForm.addEventListener("click", function(){
  console.log("Click");
    contactForm.scrollIntoView();
})





wineBtns.forEach(wineBtn => {
  wineBtn.addEventListener("click", function(){
    if(this.textContent == "red wine"){
        this.style.backgroundImage = "linear-gradient(334deg, #46001a, #54001f,  #46001a)";
        whiteWine.style.backgroundImage = "unset";
        document.querySelector("input[name=wine]").value = "red";
    }
    else{
      this.style.backgroundImage = "linear-gradient(334deg, #EED490, #D2B14F, #EED490 )";
        redWine.style.backgroundImage = "unset";
        document.querySelector("input[name=wine]").value = "white";
    }
    return false;
  })// closes clickEvenListener

});// closes wineBtns.forEach.


if(params.get("phone") != null){

  setTimeout(() => {
    formSend.scrollIntoView("alignToBottom");

  }, 8000);
  contactForm.style.animation = "fadeForm 2s ease-out";
  contactForm.style.animationFillMode = "forwards";

    contactForm.style.display = "none";

    if(data[person].area.toLowerCase() == "göteborg"){
      noTravel.style.display = "block";
    }
    else{
      travel.style.display = "block";
    }

    console.log("show post form");
    formSend.style.display = "flex";
    formSend.style.animation = "fadeInMsg 2s ease-out";
    formSend.style.animationFillMode = "forwards";


}


}); // closes document ready function.