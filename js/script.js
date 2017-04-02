window.onload = function() { init(); }

var theCanvas = null;
var ctx = null;

var offsetX = document.getElementById('canvas').offsetLeft;
var offsetY = document.getElementById('canvas').offsetTop;

var disks = {        
    blue   : { color: "#73cad4",
               width: 32,
               rodGap: 105,
               isDragging: false,
               changePlace: false,
               x : 0,
               y : 0},   
    purple : { color: "#9a73d4",
               width: 78,
               rodGap: 83,
               isDragging: false,
               changePlace: false,
               x : 0,
               y : 0 },
    orange : { color: "#d4b173",
               width: 122,
               rodGap: 61,
               isDragging: false,
               changePlace: false,
               x : 0,
               y : 0 },
    green  : { color: "#afe66e",
               width: 166,
               rodGap: 39,
               isDragging: false,
               changePlace: false,
               x : 0,
               y : 0 },
    pink   : { color: "#ed82b7",
               width: 210,
               rodGap: 17,
               isDragging: false,
               changePlace: false,
               x : 0,
               y : 0 },   
}

function init() {
    theCanvas = document.getElementById('canvas');
    ctx = theCanvas.getContext("2d");
    
    drawGameBoard();
    drawDisks(level_1);
    
    theCanvas.addEventListener("mousedown", handleMouseDown);
    theCanvas.addEventListener("mousemove", handleMouseMove);
    theCanvas.addEventListener("mouseup", handleMouseUp);
    theCanvas.addEventListener("mouseout", handleMouseOut);
}   

function blank() {
    drawGameBoard();
    drawDisks(level_1);
}

var currentDisk = null;
function handleMouseDown(event) { 
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);

    currentDisk = whatDisk();
    console.log(currentDisk)
    disks.orange.isDragging = true;
}

function handleMouseUp(event) {    
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);
    disks.orange.isDragging = false;
}

function handleMouseOut(event) { 
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);
    disks.orange.isDragging = false;
}

function handleMouseMove(event) {
    canMouseX = parseInt(event.clientX-offsetX);
    canMouseY = parseInt(event.clientY-offsetY);
    
    if(disks.orange.isDragging){
        ctx.clearRect(0,0,726,325);
        
        disks.orange.changePlace = true;
        blank();
        
        ctx.fillStyle = disks.orange.color;
        ctx.fillRect(canMouseX - 40, canMouseY - 20, disks.orange.width, 24);
        disks.orange.x = canMouseX - 40;
        disks.orange.y = canMouseY - 20;
    }
}









function whatDisk() {
    var cursorX = event.clientX - offsetX;
    var cursorY = event.clientY - offsetY;
    
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
    ctx.fillRect(118, 86, 6, 186);
    ctx.fillRect(347, 86, 6, 186);
    ctx.fillRect(578, 86, 6, 186);
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
