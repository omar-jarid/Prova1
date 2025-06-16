// Questa funzione rimuove i tag HTML per prevenire XSS e altre vulnerabilità legate all'inserimento di HTML non sicuro.
const sanificaHTML = (str) => {
    /*
        Creiamo un elemento div temporaneo per utilizzare il browser per sanificare il testo. 
        Il browser rimuoverà automaticamente i tag HTML non sicuri.
        Questo è un metodo semplice e sicuro per evitare XSS.
    */
    const div = document.createElement("div");

    // Impostiamo il testo del div, il browser convertirà i caratteri speciali in entità HTML, rimuovendo i tag HTML.
    div.textContent = str;

    // Restituiamo il testo sanificato.
    return div.innerHTML;
}

const inputUtente = document.getElementById("input-text");
inputUtente.innerHTML = inputUtente.value;

const button = document.querySelector("button");
button.addEventListener("click", () => {
    if (inputUtente.value.trim() === "") {
        alert("Per favore, inserisci un testo valido.");
    } else {
        inputUtente.innerHTML = inputUtente.value;
        alert("Testo inserito correttamente: " + inputUtente.value);
    }   
});