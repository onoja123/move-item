
alert("Welcome to moving item using keypad")

//get design element
let yu = document.getElementById("lokl")

//keypress listener
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

//move function
function move(event){
    switch (event.key) {
        case "ArrowDown":
        y+=5;
        yu.style.top = y + "px"  
            break;
    
            case "ArrowUp":
                y-=5;
                yu.style.top = y + "px"  
                    break;

                    case "ArrowRight":
                        y+=5;
                        yu.style.left = y + "px"  
                            break;

                            case "ArrowLeft":
                                y-=5;
                                yu.style.left = y + "px"  
                                    break;
        default:
            break;
    }

}
