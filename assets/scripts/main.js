// main.js
var btn = document.getElementById("honk-btn");
btn.onclick=function() {
    document.getElementById("horn-sound").play();
}

var radios = document.getElementsByName("radio-sound");
radios.onclick=function() {
    let pict = document.getElementById("sound-image");
    for (radio of radios) {
        if (radio.checked) {
            if (radio.id == "radio-air-horn") {
                pict.src = "./assets/media/images/air-horn.svg";
                pict.alt = "Air Horn";
            }
            else if (radio.id == "radio-car-horn") {
                pict.src = "./assets/media/images/car-horn.svg";
                pict.alt = "Car Horn";
            }
            else {
                pict.src = "./assets/media/images/party-horn.svg";
                pict.alt = "Party Horn";
            }
        }
    }
}

// TODO
