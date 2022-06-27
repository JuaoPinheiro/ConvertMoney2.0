const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');

const dolar = 5.24
const euro = 5.54
const bitcoin = 110546
const ethereum = 6322

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const ValueReal = document.getElementById('real-value')
    const ValueDolar = document.getElementById('dolar-value')

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

    if (select.value === "Ξ Ethereum") {
        ValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "ETH"
        }).format(inputReais / ethereum);
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

    if (select.value === 'Ξ Ethereum') {
        paragraphText.innerHTML = "Ethereum"
        currencyImg.src = "./assets/ethereummm.jpg"
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)