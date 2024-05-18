function convertCurrency() {
    const usdAmount = document.getElementById('usdInput').value;
    
    // Perform conversion (You can use a currency conversion API here)
    // For simplicity, let's say 1 USD = 75 INR
    const inrAmount = usdAmount * 75;

    document.getElementById('result').innerHTML = `${usdAmount} USD = ${inrAmount} INR`;
}
