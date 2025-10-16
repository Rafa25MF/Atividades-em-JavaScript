function convert() {
    let celsius = Number(window.document.getElementById('temperatura').value);
    let form_convert = (celsius * 1.8) + 32
    if (celsius != parseInt(celsius)) {
        window.alert('Valor invalido! Digite um valor inteiro.')
        return;
    } else {
        document.getElementById('resultado').textContent = `${celsius}°C em Fahrenheit é ${form_convert}°F`;
    }

}