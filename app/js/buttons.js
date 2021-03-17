document.addEventListener("DOMContentLoaded", function(){

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

const secreteBtn = document.querySelector(".secret button");




const toForm = document.querySelector("#toFormBtn");

toForm.addEventListener("click", function(){
  console.log("Click");
    const contactForm = document.querySelector("form");
    contactForm.scrollIntoView();
})



const wineBtns = document.querySelectorAll(".wineBtns button");
const redWine = wineBtns[0];
const whiteWine = wineBtns[1];

wineBtns.forEach(wineBtn => {
  wineBtn.addEventListener("click", function(){
    if(this.textContent == "red wine"){
        this.style.backgroundImage = "linear-gradient(334deg, #46001a, #54001f,  #46001a)";
        whiteWine.style.backgroundImage = "unset";
    }
    else{
      this.style.backgroundImage = "linear-gradient(334deg, #EED490, #D2B14F, #EED490 )";
        redWine.style.backgroundImage = "unset";
    }
    return false;
    console.log("Dont print");
  })

});

});