const stampa = (msg) => console.log(msg);

const elementi = document.querySelectorAll("li");
for (const item of elementi) stampa(item.textContent);