// menu's function
function toggleMenu() {
    switch(this.id) {
        case "level" :
            showLevelMenu();
            break;
        case "start_stop" :
            console.log("showMenu(start_stop)");
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
    levelMenu.style.top = theCanvas.offsetTop + 40 + "px";
    
    levelNumber.style.display == 'block' ? levelNumber.style.display = 'none'
                                            : levelNumber.style.display = 'block';
    
    closeBtn.style.display == 'none' ? closeBtn.style.display = 'block'
                                            : closeBtn.style.display = 'none';
}

var darkScreen = document.getElementById("screen_dark");
var levelMenu = document.getElementById("module_window");
var levelNumber = document.getElementById("level_number");
var closeBtn = document.getElementById("close_btn");

var selectLevelClass = document.querySelectorAll(".select_level");

for (var i = 0; i < selectLevelClass.length; i++) {
    selectLevelClass[i].addEventListener('click', function(event) {
        switch(this.innerHTML) {
            case "#01" :
                clean()
                drawDisks(level_1);
                break;
            case "#02" :
                clean()
                drawDisks(level_2);
                break;
            case "#03" :
                clean()
                drawDisks(level_3);
                break;
            default :
                break;
        }
    });
}

darkScreen.style.display = 'none';
levelMenu.style.display = 'none';
closeBtn.style.display = 'none';
levelNumber.style.display = 'block';

level.addEventListener("click", toggleMenu);
start_stop.addEventListener("click", toggleMenu);

