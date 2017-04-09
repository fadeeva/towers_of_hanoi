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

for (var i = 0; i < selectLevelClass.length; i++) {
    selectLevelClass[i].addEventListener('click', function(event) {
        switch(this.innerHTML.substring(0, 3)) {
            case "#01" :
                selectLevel(level_1, this.innerHTML.substring(0, 3));
                break;
            case "#02" :
                selectLevel(level_2, this.innerHTML.substring(0, 3));
                break;
            case "#03" :
                selectLevel(level_3, this.innerHTML.substring(0, 3));
                break;
            case "#04" :
                selectLevel(level_4, this.innerHTML.substring(0, 3));
                break;
            case "#05" :
                selectLevel(level_5, this.innerHTML.substring(0, 3));
                break;
            case "#06" :
                selectLevel(level_6, this.innerHTML.substring(0, 3));
                break;
            default :
                break;
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
    darkScreen.style.display == 'none' ? darkScreen.style.display = 'block'
                                            : darkScreen.style.display = 'none';
    
    levelMenu.style.display == 'none' ? levelMenu.style.display = 'block'
                                            : levelMenu.style.display = 'none';
    
    darkScreen.style.left = screen.width / 2 - 363 + "px";
    levelMenu.style.left = screen.width / 2 - 150 + "px";
    
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




