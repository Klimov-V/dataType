(function() {
    'use strict'

    // 1. Возраст

    // do {
    //     let age;

    //     do {
    //         age = +prompt("How old are you?");
    //     } while(isNaN(age) || age > 120 || age < 0)

    //     if (age < 12) {
    //         alert('You\'re a child');
    //     } else if (age >= 12 && age < 18) {
    //         alert("You're a teenager");
    //     } else if (age >= 18 && age < 60) {
    //         alert("You're an adult");
    //     } else {
    //         alert("You're a old person");
    //     }
    // } while (confirm("Do you whant to continue?"))

    // 2. Спецсимвол

    // do {
    //     let numb;            

    //     do {
    //         do {
    //             numb = prompt("Enter a digit fom 0 to 9");      // дополнительная проверка, на случай если ничего не введёт
    //         } while (!numb)

    //         numb = Number(numb.slice(0, 1));
    //     } while(isNaN(numb))

    //     switch (numb) {
    //         case 1:
    //             alert('Special simbol on this key is "!"');
    //         break;
    //         case 2:
    //             alert('Special simbol on this key is "@"');
    //         break;
    //         case 3:
    //             alert('Special simbol on this key is "#"');
    //         break;
    //         case 4:
    //             alert('Special simbol on this key is "$"');
    //         break;
    //         case 5:
    //             alert('Special simbol on this key is "%"');
    //         break;
    //         case 6:
    //             alert('Special simbol on this key is "^"');
    //         break;
    //         case 7:
    //             alert('Special simbol on this key is "&"');
    //         break;
    //         case 8:
    //             alert('Special simbol on this key is "*"');
    //         break;
    //         case 9:
    //             alert('Special simbol on this key is "("');
    //         break;

    //         default:
    //             alert('Special simbol on this key is ")"');
    //     }

    // } while (confirm("Do you whant to continue?"))

    // 3. Совпадение цифр в числе

    // do {
    //     let numb;

    //     do {
    //         do {
    //             numb = prompt("Enter a number of 3 digit");
    //         } while (numb.length < 3)
    //     } while(isNaN(numb))                                // я не ограничиваю пользователя 3-мя символами, можно сделать обрезку numb = Number(numb.slice(0, 3));

    //     for (let i = 0; i < numb.length - 1; i++) {
    //         if (numb[i] == numb[i - 1]) continue;
            
    //         let n = 0,
    //             t = 0;
            
    //         for (let j = i + 1; j < numb.length; j++) {
    //             if (numb[i] == numb[j]) {
    //                 t++;
    //                 n = numb[i];
    //             }
    //         }
            
    //         if (t) {
    //             alert(`Число ${n} повторяется ${++t} раз`);
    //         }
    //     }
    // } while (confirm("Do you whant to continue?"))

    // 4. Делали на занятии

    // 5. Проверка на палиндром

    function checkPalindrome() {
        let numb;

        do {
            do {
                numb = prompt("Enter a number of 5 digit");
            } while (numb.length < 5)
        } while(isNaN(numb))

        for (let i = 0; i < numb.length / 2; i++) {
            if (numb[i] == numb[numb.length - i - 1]) {
                continue;
            } else {
                return alert(`Your number is not a palindrome`);
            }
        }
        alert(`Your number is a palindrome, congratolation!`)
    }

    do {
        checkPalindrome();
    } while (confirm("Do you whant to continue?"))

    // 6. 

    

})();