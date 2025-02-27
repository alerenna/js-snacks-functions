/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/* function initialLetterArray(arr) {
    const initials = []

    for (let i = 0; i < arr.length; i++) {
        const thisName = arr[i]

        initials.push(thisName.charAt(0))
    }
    return initials
}

// Invoca la funzione qui e stampa il risultato in console

const initialLetters = initialLetterArray(["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"])
console.log(initialLetters); */



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



//BONUS
//Soluzione con arrow function

const initialLetterArray = arr => {
    const initials = []

    for (let i = 0; i < arr.length; i++) {
        const thisName = arr[i]

        initials.push(thisName.charAt(0))
    }
    return initials
}

// Invoca la funzione qui e stampa il risultato in console

const initialLetters = initialLetterArray(["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"])
console.log(initialLetters);