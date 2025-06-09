let listaSpesa = [];

const aggiornaLista = () => {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let item of listaSpesa) {
        let li = document.createElement("li");
        li.textContent = item;

        let button = document.createElement("button");
        button.textContent = "Rimuovi";
        button.onclick = () => {
            listaSpesa = listaSpesa.filter(i => i !== item);
            aggiornaLista();
        };

        li.appendChild(button);
        ul.appendChild(li);
    }
}

const aggiungiElemento = () => {
    let input = document.getElementById("inputItem");
    let valore = input.value.trim();

    if (valore !== "") {
        listaSpesa.push(valore);
        input.value = "";
        aggiornaLista();
    } else { alert("Inserisci un prodotto!"); }
}