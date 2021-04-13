// chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana"(partendo da 1) della lista in cui il nuovo utente si trova

var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var inputUtente = prompt("Inserisci il tuo cognome");
lista.push(inputUtente);

document.writeln(lista);
console.log(lista)

