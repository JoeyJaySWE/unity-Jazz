const querystring = window.location.search;
const params = new URLSearchParams(querystring);
const countDown = document.querySelector("#countdown");
const siteProper = document.querySelector("#siteProper");
const person = document.querySelector("[data-guest]");

console.log(params.get('fname'));
if(params.get('fname') == "admin"){
    countDown.style.display = "none";
    siteProper.style.display = "block";
}

if(params.get('fname') != null){
    person.textContent = params.get("fname");
}

if(params.get('fname') == null){
    siteProper.style.display = "none";
}