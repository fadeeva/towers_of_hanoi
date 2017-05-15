window.onload = function() { init(); }

var theCanvas = null;
var ctx = null;

var offsetX = document.getElementById('canvas').offsetLeft;
var offsetY = document.getElementById('canvas').offsetTop;

var currentLevel = levels[1];
var currentDisk = disks.invisible;
var timeStart = false; // flag for timer
var height = 248; // start height for disk position, use in drawDisks()

function init() {
    theCanvas = document.getElementById('canvas');
    ctx = theCanvas.getContext("2d");
    
    drawGameBoard();
    drawDisks(currentLevel);
    getListTimeRecord();
    
    theCanvas.addEventListener("mousedown", handleMouseDown);
    theCanvas.addEventListener("mousemove", handleMouseMove);
    theCanvas.addEventListener("mouseup", handleMouseUp);
    theCanvas.addEventListener("mouseout", handleMouseOut);
}   

function blank() {
    drawGameBoard();
    drawDisks(currentLevel);
}

function handleMouseDown(event) { 
    event = event || window.event;
    
    currentDisk = whatDisk(event);
    
    if(!timeStart) {
        timeStart = true;
        startWatch();
    }
    
    if(isDraggable(currentDisk)) {
        currentDisk.isDragging = true;
    } else {
        currentDisk = disks.invisible;
    }
}

function handleMouseUp(event) {    
    event = event || window.event;
    
    if(currentDisk != disks.invisible) {
        currentDisk.isDragging = false;
        goToRod(currentDisk, event);
    }
}

function handleMouseOut(event) { 
    event = event || window.event;

    currentDisk.isDragging = false;
}

function handleMouseMove(event) {
    event = event || window.event;
    
    var canMouseX = parseInt(event.pageX-offsetX);
    var canMouseY = parseInt(event.pageY-offsetY);
    
    if(currentDisk.isDragging){
        ctx.clearRect(0,0,726,325);
        
        currentDisk.changePlace = true;
        blank();
        
        ctx.fillStyle = currentDisk.color;
        ctx.fillRect(canMouseX - currentDisk.width / 2, canMouseY - 10, currentDisk.width, 24);
    }
}

function isDraggable(disk) {
    for(var i in currentLevel) {
        if(currentLevel[i][currentLevel[i].length - 1] == disk) {
            return true;
        }
    }
    return false;
}

function goToRod(disk, event) {
    var currentRod;
    var purposeRod;
    
    var canMouseX = parseInt(event.pageX-offsetX);
    var canMouseY = parseInt(event.pageY-offsetY);
    
    if(canMouseX > 100 && canMouseX < 130 && canMouseY > 60 && canMouseY < 200) {
        purposeRod = currentLevel.rod_1;
    } else if(canMouseX > 330 && canMouseX < 370 && canMouseY > 60 && canMouseY < 200) {
        purposeRod = currentLevel.rod_2;
    } else if(canMouseX > 550 && canMouseX < 600 && canMouseY > 60 && canMouseY < 200) {
        purposeRod = currentLevel.rod_3;
    } else {
        comeBack(currentDisk);
        return;
    }
    
    for(var i in currentLevel) {
        if(currentLevel[i][currentLevel[i].length - 1] == disk) {
            currentRod = currentLevel[i];
            break;
        }
    }
    
    if(purposeRod.length != 0) {
        if(purposeRod[purposeRod.length - 1].width < currentRod[currentRod.length - 1].width) {
            comeBack(currentDisk);
            return;
        }   
    }
       
    currentRod.pop();
    purposeRod.push(disk);

    disk.changePlace = false;

    clean();
    drawDisks(currentLevel);
    
    if(isWin(currentLevel)) {
        showWinWindow()
        turnLevelToStartPosition(currentLevel);
        stopWatch();
        timeStart = false;
        clean();
        drawDisks(currentLevel);
    }
}

function turnLevelToStartPosition(level) {   
    level.rod_1 = level.rod_1.concat(level.rod_2, level.rod_3);
    level.rod_1.sort(function(a, b) {
        return b.width - a.width;
    });

    level.rod_2 = [];
    level.rod_3 = [];
}

function isWin(level) {
    if(level.rod_1.length == 0 && (level.rod_2.length == 0 || level.rod_3.length == 0)) {
        return true;
    } else {
        return false;
    }
}

function comeBack(disk) {
    disk.changePlace = false;
    
    clean();
    drawDisks(currentLevel)
}

function whatDisk(event) {
    var cursorX = parseInt(event.pageX-offsetX);
    var cursorY = parseInt(event.pageY-offsetY);
    
    for(var i in disks) {
        if((cursorX >= disks[i].x) && (cursorX <= disks[i].x + disks[i].width) &&
           (cursorY >= disks[i].y) && (cursorY <= disks[i].y + 24)) {           
            return disks[i];
        }
    }

    return disks.invisible
}

function drawGameBoard() {
    // board's shadow
    ctx.fillStyle = "#24262f";
    ctx.beginPath();
    ctx.moveTo(0, 272);
    ctx.lineTo(708, 272);
    ctx.lineTo(726, 305);
    ctx.lineTo(726, 325);           
    ctx.lineTo(24, 325);
    ctx.lineTo(0, 290);
    ctx.closePath();
    ctx.fill();

    // board
    ctx.fillStyle = "#16171c";
    ctx.fillRect(0, 272, 708, 20);

    // rods
    ctx.fillStyle = "#6b728e";
    ctx.fillRect(118, 66, 6, 206);
    ctx.fillRect(347, 66, 6, 206);
    ctx.fillRect(578, 66, 6, 206);
}

function clean() {
    // canvas area
    ctx.fillStyle = "#2e313d";
    ctx.fillRect(0, 0, 726, 325);
    drawGameBoard();
}

function drawDisks(oLevel) { 
    oLevel = (typeof oLevel !== "object") ? {} : oLevel;
    
    var rod = [];
    var rodGap = 0;
    
    for(var key in oLevel) {
        rod = oLevel[key];
        rodNumber = parseInt(key[4]);       
        
        if(rod.length) {                       
            rod.forEach(function(disk, i, arr) {
                if(disk.changePlace) return
                
                if(rodNumber == 1) {
                    rodGap = disk.rodGap;
                } else if(rodNumber == 2) {
                    rodGap = disk.rodGap * 3 + (disk.width - 12)
                } else if(rodNumber == 3){
                    rodGap = disk.rodGap * 5 + (disk.width - 12) * 2
                }
                
                disk.x = rodGap;
                disk.y = height;
                
                ctx.fillStyle = disk.color;
                ctx.fillRect(rodGap, height, disk.width, 24);
                height -= 24;
            });
        }
        height = 248;
    }
}