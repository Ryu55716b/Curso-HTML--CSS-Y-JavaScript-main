// script.js
document.getElementById("convert-btn").addEventListener("click", function () {
    // Obtener los valores de entrada
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;
    const resultElement = document.getElementById("result");
  
    // Verificar si la cantidad es válida
    if (isNaN(amount) || amount <= 0) {
      resultElement.textContent = "Por favor, ingresa una cantidad válida.";
      return;
    }
  
    // Tasa de conversión
    const usdToMxnRate = 18.50; // 1 USD = 18.50 MXN (puedes cambiarlo)
    const mxnToUsdRate = 1 / usdToMxnRate;
  
    // Calcular el resultado
    let result;
    if (currency === "usd-to-mxn") {
      result = amount * usdToMxnRate;
      resultElement.textContent = `${amount} USD son ${result.toFixed(2)} MXN.`;
    } else if (currency === "mxn-to-usd") {
      result = amount * mxnToUsdRate;
      resultElement.textContent = `${amount} MXN son ${result.toFixed(2)} USD.`;
    }
  });
  