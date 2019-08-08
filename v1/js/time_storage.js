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
    
    let timeRecords = document.querySelectorAll(".time_record");
    
    timeRecords.forEach(function(item, i, timeRecords) {
        item.innerHTML = localStorage.getItem("#0" + (i + 1))
    })
}

function getTimeRecord(level) {
    if(localStorage.getItem(level)) {
        let str = localStorage.getItem(level);
        let sec = parseInt(str.substring(0, 3)) * 60 + parseInt(str.substring(3))
        return sec;
    } else {
        return null;
    }
}

function getCurrentTime() {
    let str = document.getElementById("timer").innerHTML;
    let arrCurrentTime = {}
    
    arrCurrentTime = {
        strTime : str,
        sec : parseInt(str.substring(0, 3)) * 60 + parseInt(str.substring(3))
    }
    return arrCurrentTime;
}

function isNewRecord(level, arrCurrentTime) {
    let oldTime = getTimeRecord(level);
    let newTime = arrCurrentTime.sec;
    if(oldTime == 0 || newTime < oldTime) {
        localStorage.setItem(level, arrCurrentTime.strTime);
        getListTimeRecord();
        return true; 
    }
    return false;
}