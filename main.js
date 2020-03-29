// Creare e salvare gli input in console

var bottone = document.getElementById('genera');
// Al click stampo in console gli input
bottone.addEventListener("click",
 function() {
   // Dati essenziali
   var nome = document.getElementById('name').value;
   var chilometri = document.getElementById ('percorso').value;
   var eta = document.getElementById('anni').value;
   var prezzo = chilometri * 0.21;
   var offerta;

   console.log ("Nome : " + nome);
   console.log ("chilometri : " + chilometri);
   console.log("eta : " + eta);

   // Condizioni per il prezzo del biglietto

   if (eta < 18) {
     prezzo= prezzo / 100 * 80;
     offerta = "Junior";
   } else if (eta > 65) {
     prezzo= prezzo / 100 * 60;
     offerta = "Senior";
   } else {
     prezzo;
     offerta = "Standard";
   }
    console.log("prezzo: " + prezzo);

  // Stampo a video l'output
  var risultato = document.getElementById('risultato');
  risultato.style.display = "block";

  document.getElementById('nome-utente').innerHTML = "Nome passeggero: " + nome;
  document.getElementById('offerta-utente').innerHTML = "Offerta: " + offerta;
  document.getElementById('carrozza-utente').innerHTML = "Carrozza: " + Math.floor(Math.random()*10 +1);
  document.getElementById('codice-utente').innerHTML = "Codice OCP: " + Math.floor(Math.random()*1000);
  document.getElementById('prezzo-utente').innerHTML = "Prezzo: " + prezzo;
 }
)

// Sul bottone "annulla" il programma resetta tutto
var annulla = document.getElementById('annulla');
annulla.addEventListener("click",
 function() {
   risultato.style.display = "none";
  }
)
// Devo cancellare gli input nel form
function funziona() {
document.getElementById("dati").reset();
}
