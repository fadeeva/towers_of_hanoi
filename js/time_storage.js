function getTimeRecord() {
    timeRecordStorage = localStorage;
    
    timeRecordStorage.setItem("#01", "00:00");
    timeRecordStorage.setItem("#02", "00:00");
    timeRecordStorage.setItem("#03", "00:00");
    timeRecordStorage.setItem("#04", "00:00");
    timeRecordStorage.setItem("#05", "00:00");
    timeRecordStorage.setItem("#06", "00:00");
    
    console.log(timeRecordStorage.getItem("#01"))
}

getTimeRecord()