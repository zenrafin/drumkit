

// Clicks Part

var keysAll = document.querySelectorAll(".drum");

for (var i = 0; i < keysAll.length; i++) {
    keysAll[i].addEventListener("click", function () {
        
        // console.log(this.innerHTML)
        soundMaker(this.innerHTML);
        effect(this.innerHTML);



    })
    
}

// Keys part


document.addEventListener("keypress",function (e) {
    // console.log(e.key);
    soundMaker(e.key);
    effect(e.key);
})


function soundMaker(keyMatcher) {
    switch (keyMatcher) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break
        case "s": 
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break

        case "d": 
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break

        case "j": 
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break

        case "k": 
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break

        case "l": 
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break
        
        default:
            break;
    }
}


function effect(params) {
    var activeKey = document.querySelector("."+ params);
    activeKey.classList.add("pressed");

    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);
}