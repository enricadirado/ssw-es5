// Import stylesheets
import './style.css';

// Write Javascript code!

/*
Realizzate l’interfaccia grafica per la funzionalità di ricerca: ad ogni nuovo carattere la ricerca viene ripetuta visualizzando il numero di corrispondenze trovate se più di una, altrimenti i dati del libro corrispondente.

collegare l’esercizio del cercare il libro dal titolo o dall’autore usando il DOM. 
associare una funzionalità di ricerca al digitare una lettera ed eseguire le ricerche quando vengono premute le lettere. 
ogni volta che premo una lettera viene visualizzato il match o il fatto che ci sono tanti match.

*/
const URL = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=3abb610b';
const result = document.getElementById('result');
const btnInput = document.getElementById('btnInput');
var archivio=[];
let database='';

fetch(URL).then(
  (response) => response.json(), // parsing per avere la stringa
  (error) => alert(error)
).then((data) => {
  console.log(data);
  const db = JSON.parse(data); // parsing per avere l’array
  console.log('db', db);
  database=db;
});


btnInput.addEventListener('keyup', function(){
  const inputText= btnInput.value;
  myFun(btnInput.value);
});


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
  




