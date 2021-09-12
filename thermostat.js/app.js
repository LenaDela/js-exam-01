function plus() {
    let chosenValue = parseInt(document.getElementById("tc").innerHTML);
    document.getElementById("tc").innerHTML = chosenValue += 1;
    gifCallback();
}

function moins() {
    let chosenValue = parseInt(document.getElementById("tc").innerHTML);
    document.getElementById("tc").innerHTML = chosenValue -= 1;
    gifCallback();
}

function gifCallback() {
    let chosenTemperature = parseInt(document.getElementById("tc").innerHTML);
    if (chosenTemperature > 100) {
        grab_data("hot");
    }
    if (chosenTemperature < 0) {
        grab_data("cold");
    }
}

function saveCallback() {
    let actualTemperature = parseInt(document.getElementById("ta").innerHTML);
    let chosenTemperature = parseInt(document.getElementById("tc").innerHTML);
    if (actualTemperature < chosenTemperature) {
        document.getElementById("ta").innerHTML = actualTemperature += 1;
    } else if (actualTemperature > chosenTemperature) {
        document.getElementById("ta").innerHTML = actualTemperature -= 1;
    }
}

function save() {
    setInterval(saveCallback, 500);
}

function favorite() {
    document.getElementById("tc").innerHTML = 20;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("plus").addEventListener("click", plus)
    document.getElementById("moins").addEventListener("click", moins)
    document.getElementById("save").addEventListener("click", save)
    document.getElementById("favorite").addEventListener("click", favorite)
});