let seconds = 0; 
let tens = 0; 
appendTens = document.getElementById("tens"); 
appendSeconds = document.getElementById("seconds"); 
let btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");
let btnReset = document.getElementById("btn-reset");
let interval; 
console.log(appendTens);

btnStart.addEventListener("click",function(){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
}); 


let startTimer = function(){
    tens++
    if(tens <= 9){
        let set = appendTens.innerText = `0` + tens
        console.log(set);
        
    } 
    
    if(tens > 9)
    {
        set = appendTens.innerText = tens;
        console.log(set);
         
    }

    if(tens > 99)
    {
        set = appendTens.innerText = "00";
        tens = 0; 
        seconds++
        if(seconds < 9){
            set2 = appendSeconds.innerText = `0` + seconds;
            console.log(set2);
        }

        if(seconds > 9){
            set2 = appendSeconds.innerText = seconds;
            console.log(set2);
        }
        
         
    }


    
}

btnStop.addEventListener('click',function(){
    clearInterval(interval)
});

btnReset.addEventListener('click',function(){
    clearInterval(interval)
    tens = 0;
    seconds = 0;
    appendTens.innerText = "00"
    appendSeconds.innerText = "00"
    console.log(tens,seconds);
}); 