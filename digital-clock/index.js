let hourEl = document.getElementById("hour");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");


function clockUpdate(){
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    hourEl.textContent = h;
    minutesEl.textContent = m;
    secondsEl.textContent = s;

    if(h<10){
        hourEl.textContent = "0" + h;
    }
    if(m<10){
        minutesEl.textContent = "0" + m;
    }
    if(s<10){
        secondsEl.textContent = "0" + s;
    }

    if(h>12){
        document.getElementById("ampm").textContent = "PM";
    }

    setTimeout(()=>{
        clockUpdate();
    },1000)

}



clockUpdate();

