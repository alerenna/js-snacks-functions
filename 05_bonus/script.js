/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetingsDaytimeName(string) {
    //Inizializzo la variabile per il conteggio dell'orario
    const d = new Date();
    let dayTime = d.getHours()

    //Inizializzo la variabile per la stringa da restituire
    let greetings = ''
    
    //SE l'ora è fino alle 13 stampo Buongiorno + stringa | SE da 13 a 17 stampo buon pomeriggio | Se oltre 17 stampo buonasera

    if (dayTime < 13) {
        console.log(`Buongiono ${string}`);
    } else if(dayTime > 13 && dayTime < 17) {
        console.log(`Buon pomeriggio ${string}`);
    } else {
        console.log(`Buonasera ${string}`);
    }

    return greetings
}

// Invoca la funzione qui e stampa il risultato in console
const greetingsDayTime = greetingsDaytimeName('Mario')
console.log(greetingsDayTime);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.