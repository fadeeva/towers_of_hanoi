var c = 0;
var t;
var timer_is_on = 0;
var startStopBtn = document.getElementById('start_stop');
var sec = 0, min = 0, timeStr = "";

function restartWatch() {
    c = 0;
    document.getElementById('timer').innerHTML = "00:0" + c;
}

function stopWatch() {
    restartWatch();
    clearInterval(interval);
    timer_is_on = 0;
    
    if(!startStopBtn.classList.contains('start'))
        startStopBtn.classList.toggle('start');
    
    if (startStopBtn.innerHTML === 'стоп') startStopBtn.innerHTML = 'старт';
    
    stopFlag = true;
}

function timedCount() {
    document.getElementById('timer').innerHTML = c;
    
    if(Math.floor(c / 10) < 1)
        document.getElementById('timer').innerHTML = "00:0" + c;
    else if(Math.floor(c / 10) >= 1 && Math.floor(c / 10) < 6)
        document.getElementById('timer').innerHTML = "00:" + c;
    else if(Math.floor(c / 10) >= 6 && Math.floor(c / 10) < 355) {
        
        min = Math.floor(c / 60);
        sec = c - (min * 60);
        
        if(min < 10)
            timeStr = "0" + min + ":";
        else
            timeStr = min + ":";
        
        if(sec < 10)
            timeStr += "0" + sec;
        else
            timeStr += sec;
        
        document.getElementById('timer').innerHTML = timeStr;
    } else {
        stopWatch()
    }
    c++;
}

function startWatch() {
    restartWatch();
    
    if(startStopBtn.innerHTML === 'старт') startStopBtn.innerHTML = 'стоп';
    
    if(startStopBtn.classList.contains('start'))
        startStopBtn.classList.toggle('start');
    
    if(!timer_is_on){
        timer_is_on = 1;        
        interval = setInterval("timedCount()", 1000);        
    }
}