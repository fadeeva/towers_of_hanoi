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
    
}

var darkScreen = document.getElementById("screen_dark");
var levelMenu = document.getElementById("module_window");


darkScreen.style.display = 'none';
levelMenu.style.display = 'none';

level.addEventListener("click", toggleMenu);
start_stop.addEventListener("click", toggleMenu);