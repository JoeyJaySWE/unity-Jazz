const { fileLoader } = require("ejs");

const addBtn = document.querySelector("button.new-data");
const dataFields = document.querySelector("section.query-data");
const generate = document.querySelector("button.generate");
let dataIndex = 1;
let lnk = ""


addBtn.addEventListener("click", function(){
    console.log("click");

    dataFields.insertAdjacentHTML('beforeend',"<span id='dataSet"+dataIndex+"'><label for='variabel"+dataIndex+"'>Variabel "+dataIndex+"</label><input type='text' id='variabel"+dataIndex+"' name='variabel"+dataIndex+"' placeholder='name'><label for='value"+dataIndex+"'>Value "+dataIndex+"</label><input type='text' id='value"+dataIndex+"' name='value"+dataIndex+"' placeholder='Sven'></span><br>");
    dataIndex++;
});

generate.addEventListener("click", function(){
    let linkText = document.querySelector("p.link");
    console.log(linkText);
    if(linkText != null){
        console.log("I'm here!");
        linkText.parentNode.removeChild(linkText);
    }
    console.log("Clicked");
    const dataSets = document.querySelectorAll("span");
    for(let i = 1; i <= dataSets.length;i++){
        const data = document.querySelectorAll("span#dataSet"+i+" input");

        console.log(data[0].value);
        if(i === 1){
            console.log(document.querySelector("#link").textContent);
            lnk = document.querySelector("#link").value+"?"+data[0].value.replaceAll(" ","")+"="+data[1].value.replaceAll(" ","");
            
            continue;
        }
        if(data[0].value == null){
            break;
        }
        lnk = lnk+"&"+data[0].value.replaceAll(" ","")+"="+data[1].value.replaceAll(" ","");
        
    }

    dataFields.insertAdjacentHTML('beforeend', "<p class='link'>"+lnk+"</p>");
});