let premier = new Date("Mar 19, 2021 08:50:47").getTime();


let timer = setInterval(function(){
    const counterField = document.querySelector("time.countdown");
    const counterContainer = document.querySelector("section#countdown");
    const siteProper = document.querySelector("#siteProper");
    let now = new Date().getTime();
    
        let remaningTime = premier - now;
    
        let days = Math.floor(remaningTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remaningTime % (1000*60*60*24)) / (1000 * 60 *60));
        let minutes = Math.floor((remaningTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds= Math.floor((remaningTime % (1000 * 60)) / 1000);
    
        counterField.textContent =   days + "D " + hours + "H "
        + minutes + "m " + seconds + "s ";
    
        if(remaningTime < 0){
                clearInterval(timer);
                counterContainer
        counterContainer.style.display = "none";
        siteProper.style.display = "flex";
    }
}, 1000);