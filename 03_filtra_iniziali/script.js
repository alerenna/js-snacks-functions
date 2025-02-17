/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/* function wordStartWithLetter(arr,letter) {
    //Dichiaro array che contiene le parole che iniziano con la lettera indicata
    const wordInitial = []

    //Cerco nell'array tutte le parole
    for (let i = 0; i < arr.length; i++) {
        const thisWord = arr[i]

        //SE la parola trovata inizia con la lettera indicata allora la inserisco nella nuova lista
        if (thisWord.startsWith(letter)){
            wordInitial.push(thisWord)
        }

    }

    return wordInitial
}
// Invoca la funzione qui e stampa il risultato in console
const wordWithLetter = wordStartWithLetter(["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"], 'A')
console.log(wordWithLetter); */


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


//BONUS
//Soluzione con arrow function

const wordStartWithLetter = (arr,letter) => {
    //Dichiaro array che contiene le parole che iniziano con la lettera indicata
    const wordInitial = []

    //Cerco nell'array tutte le parole
    for (let i = 0; i < arr.length; i++) {
        const thisWord = arr[i]

        //SE la parola trovata inizia con la lettera indicata allora la inserisco nella nuova lista
        if (thisWord.startsWith(letter)){
            wordInitial.push(thisWord)
        }

    }

    return wordInitial
}
// Invoca la funzione qui e stampa il risultato in console
const wordWithLetter = wordStartWithLetter(["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"], 'A')
console.log(wordWithLetter);