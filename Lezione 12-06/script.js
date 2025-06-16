const btn = document.getElementById("run");
const out = document.getElementById("output");

function log(title, content) {
    out.textContent += `-- ${title} --\n`;
    out.textContent += (typeof content === "string") ? content : JSON.stringify(content, null, 2) + "\n";
}

btn.addEventListener("click", () => {
    out.textContent = "";
   
    // 1. Ternario
    const numero = Math.floor(Math.random() * 10);
    const esito = (numero % 2 === 0) ? "pari" : "dispari";
    log("Operatore ternario", `Il numero ${numero} è ${esito}`);

    // 2. Rest operator
    log("Rest operator", "Il rest operator permette di raccogliere un numero variabile di argomenti in un array.");

    function somma(a, b, c) { return a + b + c; }

    function sommaRest(...numeri) {
        log("Cosa ricevo", "Array di numeri")
        log("Da dove vengono", "Dalla chiamata alla funzione");

        let totale = 0;
        for (const num of numeri) totale += num;
        return totale;
    }

    const risultato1 = sommaRest(10, 20, 5, 6, 9, 14, 95);
    log("Risultato", risultato1);

    function creaFrase(...parole) {
        log("Parole ricevute", parole);

        let frase = "";
        for (const parola of parole) frase += `${parola} `;
        return frase;
    }

    const questaFrase = creaFrase("Questa", "è", "una", "frase", "creata", "con", "il", "rest", "operator");

    // 3. Spread operator
    log("Spread operator", "Lo spread operator permette di espandere un array in singoli elementi.");

    const arrayNumeri = [1, 2, 3, 4, 5];
    const risultatoSbagliato = sommaRest(arrayNumeri);
    const risultatoCorretto = sommaRest(...arrayNumeri);
    log("Risultato sbagliato", risultatoSbagliato);
    log("Risultato corretto", risultatoCorretto);

    const paroleArray = ["JavaScript", "è", "un", "linguaggio", "potente"];
    log("Array di parole", paroleArray);

    const fraseConSpread = creaFrase(...paroleArray);
    log("Frase con spread operator", fraseConSpread);

    // 4. Destructuring
    log("Destructuring", "Il destructuring permette di estrarre valori da un array o da un oggetto in modo conciso.");

    const colori = ["rosso", "verde", "blu", "giallo", "viola"];
    log("Array di colori", colori);

    const [colore1, colore2, colore3] = colori;
    log("Colori estratti", `Colore 1: ${colore1}, Colore 2: ${colore2}, Colore 3: ${colore3}`);

    // Destructuring con rest operator
    const [principale, secondario, ...altriColori] = colori;
    log("Destructuring con rest operator", `Principale: ${principale}, Secondario: ${secondario}, Altri colori: ${altriColori}`);

    // Destructuring con oggetti
    const persona = {
        nome: "Mario",
        cognome: "Rossi",
        eta: 30,
        professione: "Sviluppatore"
    };
    log("Oggetto persona", persona);

    const { nome, cognome, eta, professione } = persona;
    log("Destructuring oggetto", `Nome: ${nome}, Cognome: ${cognome}, Età: ${eta}, Professione: ${professione}`);

    // === METODO MAP() - TRASFORMARE ARRAY ===
    log("METODO MAP()", "Trasforma ogni elemento di un array e crea un nuovo array");

    // ESEMPIO 1: Numeri - Raddoppiare ogni numero
    const numeri = [1, 2, 3, 4, 5];
    log("Array originale numeri", numeri);

    // Metodo tradizionale (LUNGO!)
    const raddoppiatiTradizionale = [];
    for (let i = 0; i < numeri.length; i++) raddoppiatiTradizionale.push(numeri[i] * 2);
    log("Metodo tradizionale", raddoppiatiTradizionale);

    // CON MAP (MODERNO!)
    const raddoppiati = numeri.map((numero) => numero * 2);
    log("Con map()", raddoppiati);

    // ESEMPIO 2: Stringhe - Trasformare nomi in maiuscolo
    const nomi = ["mario", "luigi", "peach", "bowser"];
    log("Nomi originali", nomi);
    const nomiMaiuscoli = nomi.map((nome) => nome.toUpperCase());
    log("Nomi in maiuscolo", nomiMaiuscoli);

    // ESEMPIO 3: Oggetti - Trasformare array di oggetti
    const prodotti = [
        { nome: "Laptop", prezzo: 800 },
        { nome: "Mouse", prezzo: 25 },
        { nome: "Tastiera", prezzo: 60 },
    ];
    log("Prodotti originali", prodotti);
    // Aggiungere IVA del 22%
    const prodottiConIva = prodotti.map((prodotto) => ({
        ...prodotto,
        prezzo: prodotto.prezzo * 1.22
    }));
    log("Prodotti con IVA", prodottiConIva);

    // ESEMPIO 4: Map con indice
    const lettere = ["a", "b", "c"];
    const lettereConIndice = lettere.map((lettera, indice) => `${indice}: ${lettera}`);
    log("Lettere con indice", lettereConIndice);

    // ESEMPIO 5: Map + Destructuring
    const persone = [
        { nome: "Anna", età: 25 },
        { nome: "Marco", età: 30 },
        { nome: "Sofia", età: 22 },
        { nome: "Beatrice", età: 42 },
    ];
    const saluti = persone.map(({ nome, età }) => `Ciao ${nome}, hai ${età} anni!`);
    log("Saluti personalizzati", saluti);

    // ESEMPIO PRATICO: Creare lista HTML
    const frutta = ["mela", "banana", "arancia"];
    const listaHTML = frutta.map((frutto) => `<li>${frutto}</li>`);
    log("Lista HTML", listaHTML);

    // === METODO FILTER() - FILTRARE ARRAY ===
    log("METODO FILTER()", "Filtra elementi di un array basandosi su una condizione");

    // ESEMPIO 1: Numeri - Filtrare numeri pari
    const numeriMisti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log("Array originale", numeriMisti);

    // Metodo tradizionale (LUNGO!)
    const pariTradizionale = [];
    for (let i = 0; i < numeriMisti.length; i++) {
        if (numeriMisti[i] % 2 === 0) pariTradizionale.push(numeriMisti[i]);
    }

    log("Metodo tradizionale", pariTradizionale);

    // CON FILTER (MODERNO!)
    const pari = numeriMisti.filter((numero) => numero % 2 === 0);
    log("Con filter()", pari);

    // ESEMPIO 2: Stringhe - Filtrare nomi lunghi
    const nomiVarii = ["Ana", "Alessandro", "Bo", "Francesca", "Giuseppe"];
    log("Nomi originali", nomiVarii);
    const nomiLunghi = nomiVarii.filter((nome) => nome.length > 4);
    log("Nomi con più di 4 lettere", nomiLunghi);

    // ESEMPIO 3: Oggetti - Filtrare prodotti per prezzo
    const tuttiProdotti = [
        { nome: "Laptop", prezzo: 800, categoria: "tech" },
        { nome: "Mouse", prezzo: 25, categoria: "tech" },
        { nome: "Libro", prezzo: 15, categoria: "cultura" },
        { nome: "Tastiera", prezzo: 60, categoria: "tech" },
        { nome: "Penna", prezzo: 3, categoria: "ufficio" },
    ];
    log("Tutti i prodotti", tuttiProdotti);
    // Prodotti sotto i 50 euro
    const prodottiEconomici = tuttiProdotti.filter((prodotto) => prodotto.prezzo < 50);
    log("Prodotti sotto 50€", prodottiEconomici);

    // Prodotti tech
    const prodottiTech = tuttiProdotti.filter((prodotto) => prodotto.categoria === "tech");
    log("Prodotti tech", prodottiTech);

    // ESEMPIO 4: Filter con condizioni multiple

    const studenti = [
        { nome: "Mario", voto: 8, presente: true },
        { nome: "Luigi", voto: 6, presente: false },
        { nome: "Peach", voto: 9, presente: true },
        { nome: "Bowser", voto: 4, presente: true },
    ];

    const studentiPromossi = studenti.filter((studente) => studente.voto >= 6 && studente.presente === true);
    log("Studenti promossi (voto≥6 E presenti)", studentiPromossi);

    // ESEMPIO 5: Filter + Map combinati

    const prezziScontati = tuttiProdotti.filter((prodotto) => prodotto.prezzo > 20) // Solo prodotti sopra 20€
        .map((prodotto) => ({
            ...prodotto,
            prezzoScontato: prodotto.prezzo * 0.8, // Sconto del 20%
        }));
    log("Prodotti sopra 20€ con sconto", prezziScontati);

    // ESEMPIO PRATICO: Ricerca/Search
    const ricerca = "a";
    const fruttiTrovati = ["mela", "banana", "arancia", "pera", "uva"].filter((frutto) =>
        frutto.toLowerCase().includes(ricerca.toLowerCase()));
    log(`Frutti che contengono "${ricerca}"`, fruttiTrovati);
    
    // prossimi esempi...
});