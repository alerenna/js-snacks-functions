/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

/* function helloName(string) {
    return `Ciao ${string}`
}
// Invoca la funzione qui e stampa il risultato in console

const hello = helloName('Mario')
console.log(hello); */



//Risultato atteso se si passa 'Mario': // ciao Mario

//BONUS
//Soluzione con arrow function

const helloName = string => `Ciao ${string}`
// Invoca la funzione qui e stampa il risultato in console

const hello = helloName('Mario')
console.log(hello);
