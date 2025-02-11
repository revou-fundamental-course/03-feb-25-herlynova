// ini fie javascript
document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    // Validate input
    if (temperatureInput === '') {
        alert('Please enter a temperature value.');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result;
    let explanation;

    if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        result = (temperature * 9/5) + 32;
        explanation = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
    } else {
        // Convert Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
        explanation = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
    }

    // Display the result
    document.getElementById('result').innerText = explanation;
});