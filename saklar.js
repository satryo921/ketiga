function saklar(params) {
    let lampu1 = document.getElementById("lampu1");

    if (params == "on") {
        lampu1.src = "assets/images/lampu_on.png";
    }
    if (params == "off") {
        lampu1.src = "assets/images/lampu_off.png";
    }
}