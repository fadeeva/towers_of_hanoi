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