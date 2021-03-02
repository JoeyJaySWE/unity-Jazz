const cookie = getCookie("swear");
if(cookie === "true"){
    console.log("Cookie set");
    document.querySelector(".secret").style.display = "none";
}

const secreteBtn = document.querySelector(".secret button");

secreteBtn.addEventListener("click", function(){
    const secret = document.querySelector(".secret");
    document.cookie = "swear=true";
    secret.classList.add("hidden");
    setTimeout(function(){
        console.log(secret);
        secret.style.display = "none";
    }, 700);
})