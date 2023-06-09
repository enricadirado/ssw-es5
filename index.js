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
let database = '';

btnInput.addEventListener('keyup', function () {
  const inputText = btnInput.value;
  fetch(URL)
    .then(
      (response) => response.json(), // parsing per avere la stringa
      (error) => alert(error)
    )
    .then((data) => {
      const db = JSON.parse(data); // parsing per avere l’array
      const archivio = db.filter(myFun, btnInput.value);
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
function myFun(value) {
  console.log('btn', this);
  if (value.titolo.match(this)) {
    console.log('this:', this, ' value: ', value, ' titolo:', value.titolo);
    return value.titolo;
  }
}

/*
function myFun(btn){
  while(archivio.length > 0) {
    archivio.pop();
  }
  for (let x in archivio){
    console.log(x);
    for (let y in archivio[x]){
      if (this[x][y].match(btn)){
        archivio.push(this[x][y]);
        console.log(archivio);
      }
    }
  }
};

&&(pattern.test(this)



function myFun(value){
  console.log('btn', this);

  console.log('test', pattern.test("ma"));*/
//const pattern = (/(\w*\s)*\w*/);
/*const str= value.titolo.concat(value.autore).toLocaleLowerCase();

  if (value.titolo.match(this)){
    console.log('this', this);
    console.log('value', value);
    console.log('titolo', value.titolo);
    return value.titolo;
  } 
}

*/
