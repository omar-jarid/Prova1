const stampa = (msg) => console.log(msg);

stampa(`Numero totale di li nel documento: ${document.getElementsByTagName("li").length}`);
stampa(`Testo del primo paragrafo: ${document.getElementsByTagName("p")[0].textContent}`);
stampa(`Testo del primo paragrafo: ${document.querySelector("p").textContent}`);