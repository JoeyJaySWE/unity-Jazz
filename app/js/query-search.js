

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
hidden.value = person;


if(params.get('id') != null){
    personFields.forEach(guest => {
        guest.textContent = data[person].fname;
        
    });
    console.log(data[person]);
    console.log(personArea);
    personArea.textContent = data[person].area;
    console.log("Is admin");
    countDown.style.display = "none";
    siteProper.style.display = "flex";

}

if(params.get('id') == null){
    siteProper.style.display = "none";
}

export {data as data, person as person};
export default params;