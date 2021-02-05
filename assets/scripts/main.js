// main.js
var btn = document.getElementById("honk-btn");
btn.addEventListener("click", function(event){
    event.preventDefault()
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
// TODO
