

const querystring = window.location.search;
const params = new URLSearchParams(querystring);
const countDown = document.querySelector("#countdown");
const siteProper = document.querySelector("#siteProper");
const personFields = document.querySelectorAll("[data-guest]");

console.log(params.get('fname'));
if(params.get('fname') == "admin"){
    countDown.style.display = "none";
    siteProper.style.display = "flex";
    siteProper.style.flexDirection = "column";
    siteProper.style.alignItems = "center";

}

if(params.get('fname') != null){
    personFields.forEach(person => {
        person.textContent = params.get("fname");
        
    });
}

if(params.get('fname') == null){
    siteProper.style.display = "none";
}

export default params;