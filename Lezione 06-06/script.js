const stampa = (msg) => console.log(msg);
const tabella = (msg) => console.table(msg);

/*let colori = ["rosso", "verde", "blu"];

for (let colore of colori) { stampa(colore); }

let persona = {
    nome: "Luca",
    eta: 30,
}

for (let chiave in persona) { stampa(`${chiave}: ${persona[chiave]}`); } */

/*************************************************/

/*const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somma = 0;

for (const n of numeri) somma += n;

stampa(`La somma dei numeri è: ${somma}`); */

/*************************************************/

// Esercizio 1 - Aggiungi due colori e rimuovi l'ultimo

const colori = ["rosso", "verde", "blu"];
colori.push("giallo", "viola");

const ultimoColore = colori.pop();
stampa(`Ultimo colore rimosso: ${ultimoColore}`);

stampa("*************************************************************")

// Esercizio 2 - Verifica se "verde" è presente e stampa il suo indice
const indiceVerde = colori.indexOf("verde");
if (indiceVerde !== -1) stampa(`Il colore "verde" si trova all'indice: ${indiceVerde}`);

stampa("*************************************************************")

// Esercizio 3 - Cambia il colore in seconda posizione
colori[1] = "arancione";
stampa(`Colore in seconda posizione cambiato a: ${colori[1]}`);

stampa("*************************************************************")

// Esercizio 4 - Rimuovi il primo elemento e stampa l'array aggiornato
const primoColoreRimosso = colori.shift();
stampa(`Primo colore rimosso: ${primoColoreRimosso}`);
tabella(colori);

/*************************************************/