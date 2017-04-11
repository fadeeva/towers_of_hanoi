function getTimeRecord() {

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
