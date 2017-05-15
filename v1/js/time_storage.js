function getListTimeRecord() {

    if(!localStorage.getItem("#01"))
        localStorage.setItem("#01", "00:00");
    if(!localStorage.getItem("#02"))
        localStorage.setItem("#02", "00:00");
    if(!localStorage.getItem("#03"))
        localStorage.setItem("#03", "00:00");
    if(!localStorage.getItem("#04"))
        localStorage.setItem("#04", "00:00");
    if(!localStorage.getItem("#05"))
        localStorage.setItem("#05", "00:00");
    if(!localStorage.getItem("#06"))
        localStorage.setItem("#06", "00:00");
    
    var timeRecords = document.querySelectorAll(".time_record");
    
    timeRecords.forEach(function(item, i, timeRecords) {
        item.innerHTML = localStorage.getItem("#0" + (i + 1))
    })
}

function getTimeRecord(level) {
    if(localStorage.getItem(level)) {
        var str = localStorage.getItem(level);
        var sec = parseInt(str.substring(0, 3)) * 60 + parseInt(str.substring(3))
        return sec;
    } else {
        return null;
    }
}

function getCurrentTime() {
    var str = document.getElementById("timer").innerHTML;
    var arrCurrentTime = {}
    
    arrCurrentTime = {
        strTime : str,
        sec : parseInt(str.substring(0, 3)) * 60 + parseInt(str.substring(3))
    }
    return arrCurrentTime;
}

function isNewRecord(level, arrCurrentTime) {
    var oldTime = getTimeRecord(level);
    var newTime = arrCurrentTime.sec;
    if(oldTime == 0 || newTime < oldTime) {
        localStorage.setItem(level, arrCurrentTime.strTime);
        getListTimeRecord();
        return true; 
    }
    return false;
}