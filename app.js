var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;
    


function start(){
    interval = setInterval(function(){
        msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;    
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0
    }
    document.getElementById("start").disabled = true;
        
    },10);
    
}




function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}



function reset(){
        msec = 0;
        sec = 0; 
        min = 0;
        msecHeading.innerHTML = msec;
        secHeading.innerHTML = sec;
        minHeading.innerHTML = min;
        stop();
        document.getElementById("start").disabled = false;
}