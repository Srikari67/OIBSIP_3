function output() {

    var num = document.getElementById("temp");
    var unit = document.getElementById("unit");
    console.log(unit.value);
    if (unit.value === "Celsius") {
        var val = (9 / 5) * (num.value) + 32;
        document.getElementById("output").innerHTML = val+" Fahrenheit";
    }
    else if (unit.value === "Fahrenheit") {
        var val = (5 / 9) * (num.value - 32);
        document.getElementById("output").innerHTML = val+" Celsius";
    }

}