/*const calcola = () => {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let somma = n1 + n2;
    document.getElementById("risultato").textContent = `Risultato: ${somma}`;
}*/

let n1, n2;

const aggiornaValori = () => {
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
}

const somma = () => {
    aggiornaValori();
    const risultato = n1 + n2;
    document.getElementById("risultato").textContent = `Risultato: ${risultato}`;
}

const sottrazione = () => {
    aggiornaValori();
    const risultato = n1 - n2;
    document.getElementById("risultato").textContent = `Risultato: ${risultato}`;
}

const moltiplicazione = () => {
    aggiornaValori();
    const risultato = n1 * n2;
    document.getElementById("risultato").textContent = `Risultato: ${risultato}`;
}

const divisione = () => {
    aggiornaValori();
    const risultato = n1 / n2;
    document.getElementById("risultato").textContent = `Risultato: ${risultato}`;
}
