const secreteBtn = document.querySelector(".secret button");

secreteBtn.addEventListener("click", function(){
    const secret = document.querySelector(".secret");
    secret.classList.add("hidden");
    setTimeout(function(){
        console.log(secret);
        secret.style.display = "none";
    }, 700);
})