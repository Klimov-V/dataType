(function() {
    'use strict'
    // 6. Конвертер валют

    const COURS_USD_EUR = 0.93,
          COURS_USD_UAH = 26.88,
          COURS_USD_AZN = 1.7;

    let form = document.querySelector('#converterForm'),
        inputValue = document.querySelector('#formInput'),
        listOfCurrency = document.querySelector('#listOfCurrency'),
        outputFild = document.querySelector('#formOutput');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    inputValue.addEventListener('input', calculate);
    listOfCurrency.addEventListener('change', calculate);

    function calculate() {
        switch (listOfCurrency.value) {
            case 'eur':
                outputFild.value = `${inputValue.value * COURS_USD_EUR} EUR`;
            break;
            case 'uah':
                outputFild.value = `${inputValue.value * COURS_USD_UAH} UAH`;
            break;
            case 'azn':
                outputFild.value = `${inputValue.value * COURS_USD_AZN} AZN`;
            break;
        }
    }

    

})();