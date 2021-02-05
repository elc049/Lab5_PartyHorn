// main.js
var btn = document.getElementById("honk-btn");
btn.addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById("horn-sound").play();
});

document.getElementsByName("radio-sound").forEach((rad) => {rad.addEventListener("click", radioChange)});

function radioChange() {
    let pict = document.getElementById("sound-image");
    let radios = document.getElementsByName("radio-sound");
    for (radio of radios) {
        if (radio.checked) {
            if (radio.id == "radio-air-horn") {
                pict.src = "./assets/media/images/air-horn.svg";
                pict.alt = "Air Horn";
                alert("air");
            }
            else if (radio.id == "radio-car-horn") {
                pict.src = "./assets/media/images/car-horn.svg";
                pict.alt = "Car Horn";
                alert("car");
            }
            else {
                pict.src = "./assets/media/images/party-horn.svg";
                pict.alt = "Party Horn";
                alert("test");
            }
        }
    } 
}
// TODO
