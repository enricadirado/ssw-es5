// Import stylesheets
import './style.css';

// Write Javascript code!

/*
Realizzate l’interfaccia grafica per la funzionalità di ricerca: ad ogni nuovo carattere la ricerca viene ripetuta visualizzando il numero di corrispondenze trovate se più di una, altrimenti i dati del libro corrispondente.

collegare l’esercizio del cercare il libro dal titolo o dall’autore usando il DOM. 
associare una funzionalità di ricerca al digitare una lettera ed eseguire le ricerche quando vengono premute le lettere. 
ogni volta che premo una lettera viene visualizzato il match o il fatto che ci sono tanti match.

*/
const URL =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=3abb610b';
const result = document.getElementById('result');
const btnInput = document.getElementById('btnInput');

btnInput.addEventListener('keyup', function () {
  const inputText = btnInput.value;
  fetch(URL)
    .then(
      (response) => response.json(), // parsing per avere la stringa
      (error) => alert(error)
    )
    .then((data) => {
      const db = JSON.parse(data); // parsing per avere l’array
      const archivio = db.filter((el) =>
      (el.titolo + el.autore).toLowerCase().includes(btnInput.value));
      console.log('archivioFINE', archivio);
      if (archivio.length > 1) {
        result.innerHTML =
          'La ricerca ha prodotto ' + archivio.length + ' risultati.';
      } else if (archivio.length == 1) {
        result.innerHTML =
          'Autore: ' + archivio[0].autore + '\nTitolo: ' + archivio[0].titolo;
      } else if (archivio.length == 0) {
        result.innerHTML = 'La ricerca non ha prodotto nessun risultato. ';
      }
    });
});

/*filter() crea un nuovo array con gli elementi che passano un test della funzione */
/*devo accettare solo 
- parole
- parola spazio parola ecc
- no spazio

- devono trovabili anche con minuscolo
*/

