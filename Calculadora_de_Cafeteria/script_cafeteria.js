function somar() {
        let v_cafe = 10
        let buscar_valor = Number(window.document.getElementById('qt_cafe').value);
        let soma = v_cafe * buscar_valor;
        if (buscar_valor <= 0) {
                window.alert('Valor invalido! Digite um valor maior que 0.');
                return;
        }
        else if (buscar_valor != parseInt(buscar_valor)) {
                window.alert('Valor invalido! Digite um valor inteiro.');
                return;
        }
        else {
                document.getElementById('resultado').textContent = `Valor a pagar: R$${soma}`;
        }
}