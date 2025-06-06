const stampa = (msg) => console.log(msg);

// Esercizio 1
const quadrato = (n) => n * n;

stampa(`Il quadrato di 5 è: ${quadrato(5)}`);

stampa("**************************************************");

// Esercizio 2

const nomi = ["Anna", "Luca", "Marco"];
for (let i = 0; i < nomi.length; i++) { stampa(nomi[i].toUpperCase()); }

stampa("**************************************************");

// Esercizio 3

let studente = {
    nome: "Mario",
    corso: "Informatica",
    votoFinale: 30,
};

stampa(`${studente.nome} ha preso ${studente.votoFinale} al corso di ${studente.corso}.`);