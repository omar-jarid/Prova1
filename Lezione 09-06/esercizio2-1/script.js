const stampa = (msg) => console.log(msg);

const listaDiAnchors = document.querySelectorAll("a");
listaDiAnchors.forEach((anchor) => stampa(anchor));

stampa("***********************************************************");

const paragrafi = document.querySelectorAll("p");
stampa(`Numero di paragrafi: ${paragrafi.length}`);

stampa("***********************************************************");

const listaDiDataId = document.querySelectorAll("[data-id]");
listaDiDataId.forEach((element) => stampa(element));

stampa("***********************************************************");

const linkConHash = document.querySelectorAll('a[href^="#"]');
linkConHash.forEach((link) => stampa(link));