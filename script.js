// Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar. Questa deve visualizzare:

// Un nome utente, preso da prompt salvi sul localStorage
// Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
// Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript
// Bisogna fare un controllo (try) sul nome utente stesso, se non presente nel localStorage allora mostri un errore in console, e successivamente aggiunto (catch)

const newEl = (el) => document.createElement(el);

const getUserName = prompt("Inserisci il tuo username");
localStorage.setItem("username", getUserName);

const body = document.body;
const navbar = newEl("nav");
navbar.className = "navbar";

try {
  if (getUserName !== "") {
    navbar.append(`Ciao ${getUserName}, bentornato!`);
    body.append(navbar);
  } else {
    throw new error();
  }
} catch (error) {
  navbar.append(`Ciao, non ho trovato il tuo username`);
  body.append(navbar);
  throw new Error("Can't find username");
}
