var disks = {    
    
    blue : {
        color: "#73cad4",
        width: 32,
        rodGap: 105
    },
    
    purple: {
        color: "#9a73d4",
        width: 78,
        rodGap: 83
    },
    
    orange : {
        color: "#d4b173",
        width: 122,
        rodGap: 61
    },
    
    green : {
        color : "#afe66e",
        width: 166,
        rodGap: 39
    },
    
    pink : {
        color: "#ed82b7",
        width: 210,
        rodGap: 17
    },
    
}


// game's levels
var level_0 = {
    rod_1 : [],
    rod_2 : [],
    ros_3 : []
}

var level_1 = {
    rod_1 : [disks.pink, disks.green, disks.orange],
    rod_2 : [],
    ros_3 : []
}

// menu's function
function toggleMenu() {
    switch(this.id) {
        case "level" :
            console.log("showMenu(level)");
            break;
        case "start_stop" :
            console.log("showMenu(start_stop)");
            break;
        default :
            break;
    }
}

level.addEventListener("click", toggleMenu);
start_stop.addEventListener("click", toggleMenu);

window.onload = function() {

    var theCanvas = document.getElementById('canvas');
    var isDragging = false;

    /*
    function show(event) {
        var X = event.pageX - this.offsetLeft 
        var Y = event.pageY - this.offsetTop 
        console.log("x= " + X + " y = " + Y)
    }
    */
    
    function handleMouseDown(event) {
        console.log("down")
    }
    
    function handleMouseMove(event) {
        console.log("move")
    }
    
    function handleMouseUp(event) {
        console.log("up")
    }
    
    function handleMouseOut(event) { 
        console.log("out")
    }
    
    theCanvas.addEventListener("mousedown", handleMouseDown);
    theCanvas.addEventListener("mousemove", handleMouseMove);
    theCanvas.addEventListener("mouseup", handleMouseUp);
    theCanvas.addEventListener("mouseout", handleMouseOut);
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
            
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
                            if(rodNumber == 1) {
                                rodGap = disk.rodGap;
                            } else if(rodNumber == 2) {
                                rodGap = disk.rodGap * 3 + (disk.width - 12)
                            } else if(rodNumber == 3){
                                rodGap = disk.rodGap * 5 + (disk.width - 12) * 2
                            }
                            
                            ctx.fillStyle = disk.color;
                            ctx.fillRect(rodGap, height, disk.width, 24);
                            height -= 24;
                        });
                    }
                    
                    height = 248;
                }
            }
            
            
            
        }
    }
    drawDisks(level_1)
}


