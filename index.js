const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');

const convertValue = async () => {
    const inputReais = document.getElementById('input-real').value
    const ValueReal = document.getElementById('real-value')
    const ValueDolar = document.getElementById('dolar-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    ValueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais);

    if (select.value === "US$ Dólar Americano") {
        ValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar);
    }

    if (select.value === "€ Euro") {
        ValueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro);
    }

    if (select.value === "₿ Bitcoin") {
        ValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputReais / bitcoin);
    }

};

changeCurrency = () => {
    const paragraphText = document.getElementById('paragraph-text')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        paragraphText.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/eua.svg"
    }

    if (select.value === '€ Euro') {
        paragraphText.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }

    if (select.value === '₿ Bitcoin') {
        paragraphText.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)