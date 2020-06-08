(function() {
    'use strict'
    // 6. Конвертер валют

    const COURS_USD_EUR = 0.93,
          COURS_USD_UAH = 26.88,
          COURS_USD_AZN = 1.7;

    let converterForm = document.querySelector('#converterForm'),
        converterInput = document.querySelector('#converterInput'),
        listOfCurrency = document.querySelector('#listOfCurrency'),
        converterOutput = document.querySelector('#converterOutput');

    converterForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    document.addEventListener("DOMContentLoaded", convert)
    converterInput.addEventListener('input', convert);
    listOfCurrency.addEventListener('change', convert);

    function convert() {
        
        // checkNumber();

        switch (listOfCurrency.value) {
            case 'eur':
                let eur = getRate('eur');
                console.log(eur);

                converterOutput.value = `${(converterInput.value * eur).toFixed(2)} EUR`;

            break;
            case 'usd':
                let usd = getRate('usd');
                console.log(usd);

                converterOutput.value = `${(converterInput.value * usd).toFixed(2)} UAH`;

            break;
            case 'azn':
                let azn = getRate('azn');
                // console.log(getRate('azn'));
                
                console.log(azn);
                
                converterOutput.value = `${(converterInput.value * azn).toFixed(2)} AZN`;

            break;
        }
    }

    function getRate(currency) {
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&json`)
            .then(response => response.json())
            .then( response => {
                console.log(response[0].rate);
                
                return response[0].rate;
            })
    }

    function checkNumber(inputValue) {
        do {
            converterInput.value = '';
            // continue;
        } while(typeof inputValue != "number")
    }


    // 7. Подсчёт стоимости с учётом скидки

    let purchaseForm = document.querySelector('#purchaseForm'),
        purchaseInput = document.querySelector('#purchaseInput'),
        purchaseOutput = document.querySelector('#purchaseOutput');
    
    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    function calculatePrice() {
        switch (purchaseInput.value) {
            case 'eur':
                converterOutput.value = `${(converterInput.value * COURS_USD_EUR).toFixed(2)} EUR`;
            break;
            case 'uah':
                converterOutput.value = `${(converterInput.value * COURS_USD_UAH).toFixed(2)} UAH`;
            break;
            case 'azn':
                converterOutput.value = `${(converterInput.value * COURS_USD_AZN).toFixed(2)} AZN`;
            break;
        }
    }

})();