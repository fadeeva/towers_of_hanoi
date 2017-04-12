window.onload = function() { init(); }

var theCanvas = null;
var ctx = null;

var offsetX = document.getElementById('canvas').offsetLeft;
var offsetY = document.getElementById('canvas').offsetTop;

function init() {
    theCanvas = document.getElementById('canvas');
    ctx = theCanvas.getContext("2d");
    
    drawGameBoard();
    drawDisks(levels[1]);
    getListTimeRecord();
    
    theCanvas.addEventListener("mousedown", handleMouseDown);
    theCanvas.addEventListener("mousemove", handleMouseMove);
    theCanvas.addEventListener("mouseup", handleMouseUp);
    theCanvas.addEventListener("mouseout", handleMouseOut);
}   

function blank() {
    drawGameBoard();
    drawDisks(levels[1]);
}

var currentDisk = disks.invisible;
console.log(currentDisk)
function handleMouseDown(event) { 
    event = event || window.event;
    
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);

    currentDisk = whatDisk(event);
    //console.log(currentDisk)
    currentDisk.isDragging = true;
}

function handleMouseUp(event) {    
    event = event || window.event;
    
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);
    
    currentDisk.isDragging = false;
    currentDisk = disks.invisible;
}

function handleMouseOut(event) { 
    event = event || window.event;
    
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);
    currentDisk.isDragging = false;
}

function handleMouseMove(event) {
    event = event || window.event;
    
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);
    
    if(currentDisk.isDragging){
        ctx.clearRect(0,0,726,325);
        
        currentDisk.changePlace = true;
        blank();
        
        ctx.fillStyle = currentDisk.color;
        ctx.fillRect(canMouseX - 60, canMouseY, currentDisk.width, 24);
        currentDisk.x = canMouseX - 40;
        currentDisk.y = canMouseY - 20;
    } else {
        //blank()
        currentDisk.x = 0;
        currentDisk.y = 0;
        currentDisk.changePlace = false;
        
        ctx.fillStyle = currentDisk.color;
        ctx.fillRect(currentDisk.rodGap, 248, currentDisk.width, 24);
    }
}









function whatDisk(event) {
    var cursorX = event.clientX - offsetX;
    var cursorY = event.clientY - offsetY;
    console.log(event.clientX + " : " + event.clientY)
    for(var i in disks) {
        
        if((cursorX >= disks[i].x) && (cursorX <= disks[i].x + disks[i].width) &&
           (cursorY >= disks[i].y) && (cursorY <= disks[i].y + 24)) {
            
            console.log(i)
            return disks[i];
        }
    }
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
    // board
    ctx.fillStyle = "#2e313d";
    ctx.fillRect(0, 0, 726, 325);
    drawGameBoard();
}

function drawDisks(oLevel) { 
    oLevel = (typeof oLevel !== "object") ? {} : oLevel;
    var height = 248;
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










