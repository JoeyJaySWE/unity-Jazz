

const querystring = window.location.search;
const params = new URLSearchParams(querystring);
const countDown = document.querySelector("#countdown");
const siteProper = document.querySelector("#siteProper");
const personFields = document.querySelectorAll("[data-guest]");
const personArea = document.querySelector("[data-location]");
let person = params.get('id');
let data = require('./queries.json');
data = data.invited;


//form fix
document.querySelector("form").action = window.location.href;
let hidden = document.querySelector("input[name=id]");

if(querystring ===""){
    hidden.value = "404";
}
else{

    hidden.value = person;
}


if(querystring != "" && person != "404"){
    personFields.forEach(guest => {
        console.log("person: "+person);
        guest.textContent = data[person].fname;
        
    });
    personArea.textContent = data[person].area;
    countDown.style.display = "none";
    siteProper.style.display = "flex";

}
if(params.get("name") != ""  && person === ""){
    personFields.forEach(guest => {
        guest.textContent = params.get("name");
        
    });
}


export {data as data, person as person, params as params};
