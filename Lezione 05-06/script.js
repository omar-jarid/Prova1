//console.log("Hello, World!");

/*let n = 0;

while (n < 10) {
    console.log(n);
    n++;
}*/
 

function stampa(msg) { console.log(msg); }

//stampa("Hello, World!");

/*******************************************************************/

/*let animali = ["cane", "gatto", "coniglio", "pesce", "elefante", "leone", "tigre", "orso", "lupo", "volpe"];

for (let i = 0; i < animali.length; i++) { stampa(animali[i]); }*/

/*******************************************************************/

// ESERCIZIO 1
/*function saluta(lingua = "IT") {
    if (lingua === "EN") {
        stampa("Hello!");
        return;
    }

    stampa("Ciao!");
}

saluta();
saluta("EN");*/

// ESERCIZIO 2
/*function somma(a, b) { return a + b; }
function sottrazione(a, b) { return a - b; }
function moltiplicazione(a, b) { return a * b; }
function divisione(a, b) { return a / b; }

function eseguiOperazione(a, b, operazione) {
    if (typeof operazione !== "function") {
        stampa("Operazione non valida");
        return;
    }

    let risultato = operazione(a, b);
    stampa(`Il risultato dell'operazione è: ${risultato}`);
}

eseguiOperazione(10, 5, somma);
eseguiOperazione(10, 5, sottrazione);
eseguiOperazione(10, 5, moltiplicazione);
eseguiOperazione(10, 5, divisione);*/

// ESERCIZIO 3
/*const saluta = (lingua = "IT") => {
    if (lingua === "EN") {
        stampa("Hello!");
        return;
    }

    stampa("Ciao!");
}

const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => {
    if (typeof operazione !== "function") {
        stampa("Operazione non valida");
        return;
    }

    let risultato = operazione(a, b);
    stampa(`Il risultato dell'operazione è: ${risultato}`);
}

saluta();
saluta("EN");
stampa("***********************************************************");
eseguiOperazione(10, 5, somma);
eseguiOperazione(10, 5, sottrazione);
eseguiOperazione(10, 5, moltiplicazione);
eseguiOperazione(10, 5, divisione);*/

/*******************************************************************/

/*const mese = 13;

switch (mese) {
    case 1: 
        stampa("Gennaio"); 
        break;
    case 2: 
        stampa("Febbraio"); 
        break;
    case 3: 
        stampa("Marzo"); 
        break;
    case 4: 
        stampa("Aprile"); 
        break;
    case 5: 
        stampa("Maggio"); 
        break;
    case 6: 
        stampa("Giugno"); 
        break;
    case 7: 
        stampa("Luglio"); 
        break;
    case 8: 
        stampa("Agosto"); 
        break;
    case 9: 
        stampa("Settembre"); 
        break;
    case 10: 
        stampa("Ottobre"); 
        break;
    case 11: 
        stampa("Novembre"); 
        break;
    case 12: 
        stampa("Dicembre"); 
        break;
    default: 
        stampa("Mese non valido");
}*/

/*******************************************************************/

/*const eta = 32;
const isSick = false;

if (eta >= 18 && !isSick) stampa("OK per uscire");*/

/*******************************************************************/

const isEven = (num) => {
    if (num % 2 === 0) {
        stampa("Il numero è pari");
    } else { stampa("Il numero è dispari"); }
}

isEven(10);
isEven(11);    