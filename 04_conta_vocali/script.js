/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


/* // Dichiara la funzione qui.
function countVowels(string) {
    //Inizializzo la variabile che conta le vocali nella stringa
    let vowelsNumber = 0

    //Controllo tutte le lettere della stringa
    for (let i = 0; i < string.length; i++) {
        const thisLetter = string[i]

        //SE la lettera è una delle vocali allora conto +1 nella variabile delle vocali
        if (thisLetter === 'a' || thisLetter === 'e' || thisLetter === 'i' || thisLetter === 'o' || thisLetter === 'u') {
            vowelsNumber += 1
        }
    }
    return vowelsNumber
}

// Invoca la funzione qui e stampa il risultato in console
const vowels = countVowels('javascript')
console.log(vowels); */



//Risultato atteso se si passa 'javascript': 3 (a, a, i)


//BONUS
//Soluzione con arrow function

const countVowels = string => {
    //Inizializzo la variabile che conta le vocali nella stringa
    let vowelsNumber = 0

    //Controllo tutte le lettere della stringa
    for (let i = 0; i < string.length; i++) {
        const thisLetter = string[i]

        //SE la lettera è una delle vocali allora conto +1 nella variabile delle vocali
        if (thisLetter === 'a' || thisLetter === 'e' || thisLetter === 'i' || thisLetter === 'o' || thisLetter === 'u') {
            vowelsNumber += 1
        }
    }
    return vowelsNumber
}

// Invoca la funzione qui e stampa il risultato in console
const vowels = countVowels('javascript')
console.log(vowels);
