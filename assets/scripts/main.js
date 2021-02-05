// main.js
var btn = document.getElementById("honk-btn");
btn.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("horn-sound").play();
});

document.getElementsByName("radio-sound").forEach((rad) => {rad.addEventListener("click", radioChange)});

function radioChange() {
    let pict = document.getElementById("sound-image");
    let aud = document.getElementById("horn-sound");
    let radios = document.getElementsByName("radio-sound");
    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.id == "radio-air-horn") {
                pict.src = "./assets/media/images/air-horn.svg";
                pict.alt = "Air Horn";
                aud.src= "./assets/media/audio/air-horn.mp3";
            }
            else if (radio.id == "radio-car-horn") {
                pict.src = "./assets/media/images/car.svg";
                pict.alt = "Car Horn";
                aud.src= "./assets/media/audio/car-horn.mp3";
            }
            else {
                pict.src = "./assets/media/images/party-horn.svg";
                pict.alt = "Party Horn";
                aud.src= "./assets/media/audio/party-horn.mp3";
            }
        }
    })
}

document.getElementById("party-horn-form").addEventListener("keydown", function(event) {
    var key = event.key;
    if (key == 13) {
        event.preventDefault();
    }
});

document.getElementById("volume-slider").addEventListener("change", function(event) {
    let volnum = document.getElementById("volume-slider").value;
    document.getElementById("volume-number").value = volnum;
    updateImage(volnum);
});

document.getElementById("volume-number").addEventListener("change", function(event) {
    let volnum = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").value = volnum;
    updateImage(volnum);
});

function updateImage(volnum) {
    document.getElementById("horn-sound").volume = volnum/100;
    let volimg = document.getElementById("volume-image");
    if (volnum == 0) {
        volimg.src = "./assets/media/icons/volume-level-0.svg";
        volimg.alt = "Mute";
        btn.disabled = true;
    } else if (volnum > 0 && volnum < 34) {
        volimg.src = "./assets/media/icons/volume-level-1.svg";
        volimg.alt = "Low Volume";
        btn.disabled = false;
    } else if (volnum > 33 && volnum < 67) {
        volimg.src = "./assets/media/icons/volume-level-2.svg";
        volimg.alt = "Medium Volume";
        btn.disabled = false;
    } else {
        volimg.src = "./assets/media/icons/volume-level-3.svg";
        volimg.alt = "Max Volume";
        btn.disabled = false;
    }
}
// TODO
