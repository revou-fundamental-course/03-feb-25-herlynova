
function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultText = "";

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9/5) + 32;
        var kelvin = temperature + 273.15;
        resultText = temperature + "°C = " + fahrenheit.toFixed(2) + "°F = " + kelvin.toFixed(2) + "K";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5/9;
        var kelvin = celsius + 273.15;
        resultText = temperature + "°F = " + celsius.toFixed(2) + "°C = " + kelvin.toFixed(2) + "K";
    } else if (unit === "kelvin") {
        var celsius = temperature - 273.15;
        var fahrenheit = (celsius * 9/5) + 32;
        resultText = temperature + "K = " + celsius.toFixed(2) + "°C = " + fahrenheit.toFixed(2) + "°F";
    }

    document.getElementById("result").innerText = resultText;
}

function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("unit").value = "celsius";
    document.getElementById("result").innerText = "";
}

function reverseConversion() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultText = "";

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9/5) + 32;
        resultText = temperature + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5/9;
        resultText = temperature + "°F = " + celsius.toFixed(2) + "°C";
    } else if (unit === "kelvin") {
        var celsius = temperature - 273.15;
        resultText = temperature + "K = " + celsius.toFixed(2) + "°C";
    }

    document.getElementById("result").innerText = resultText;
}

