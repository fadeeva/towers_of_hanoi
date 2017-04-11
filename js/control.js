// menu's function
var darkScreen = document.getElementById("screen_dark");
var levelMenu = document.getElementById("module_window");
var levelNumber = document.getElementById("level_number");
var closeBtn = document.getElementById("close_btn");
var selectLevelClass = document.querySelectorAll(".select_level");

darkScreen.style.display = 'none';
levelMenu.style.display = 'none';
closeBtn.style.display = 'none';
levelNumber.style.display = 'block';

level.addEventListener("click", toggleMenu);
start_stop.addEventListener("click", toggleMenu);

for(var i = 0; i < selectLevelClass.length; i++) {
    selectLevelClass[i].addEventListener('click', function(event) {
        var getLevelFromMenu = Math.abs(parseInt(this.innerHTML.substring(1, 3)));
        if(getLevelFromMenu < levels.length) {
            selectLevel(levels[getLevelFromMenu], this.innerHTML.substring(0, 3));
        }
    });
}

function toggleMenu() {
    switch(this.id) {
        case "level" :
            showLevelMenu();
            break;
        case "start_stop" :
            if(this.classList.contains('start'))
                startWatch();
            else
                stopWatch();
            break;
        default :
            break;
    }
}

function showLevelMenu() { 
    var width = document.getElementsByTagName('body')[0].clientWidth;
    
    darkScreen.style.display == 'none' ? darkScreen.style.display = 'block'
                                            : darkScreen.style.display = 'none';
    
    levelMenu.style.display == 'none' ? levelMenu.style.display = 'block'
                                            : levelMenu.style.display = 'none';
    
    darkScreen.style.left = width / 2 - 355 + "px";
    levelMenu.style.left = width / 2 - 140 + "px";
    
    darkScreen.style.top = theCanvas.offsetTop + 1 + "px";
    levelMenu.style.top = theCanvas.offsetTop - 60 + "px";
    
    levelNumber.style.display == 'block' ? levelNumber.style.display = 'none'
                                            : levelNumber.style.display = 'block';
    
    closeBtn.style.display == 'none' ? closeBtn.style.display = 'block'
                                            : closeBtn.style.display = 'none';
}

function selectLevel(level, text) {
    clean();
    drawDisks(level);
    showLevelMenu();
    levelNumber.innerHTML = text;
    startWatch();
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
    if(oldTime == 0 || newTime < oldTime) return true;
    return false;
}

