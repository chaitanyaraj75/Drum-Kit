// Button pressed

var noofdrums=document.getElementsByClassName("drum").length;
for(var i=0;i<noofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumlet=this.innerHTML;
        keypressed(drumlet);
        buttonanimation(drumlet);
    })
}

// Keyboard pressed

document.addEventListener("keydown",function (event) {
    keypressed(event.key);
    buttonanimation(event.key);
})

//Function

function keypressed(key){
    switch (key) {
        case 'a':
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "f":
            var kick_bass=new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1=new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2=new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3=new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4=new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
    
        default:
            console.log(drumlet);
            break;
    }
}

function buttonanimation(key){
    var currkey=document.querySelector("."+key);
    currkey.classList.add("pressed");
    setTimeout(function(){
        currkey.classList.remove("pressed");
    },100);
}


