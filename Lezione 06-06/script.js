const stampa = (msg) => console.log(msg);

/*let colori = ["rosso", "verde", "blu"];

for (let colore of colori) { stampa(colore); }

let persona = {
    nome: "Luca",
    eta: 30,
}

for (let chiave in persona) { stampa(`${chiave}: ${persona[chiave]}`); } */

/*************************************************/

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somma = 0;

for (const n of numeri) somma += n;

stampa(`La somma dei numeri è: ${somma}`);

/*************************************************/