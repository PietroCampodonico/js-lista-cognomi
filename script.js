// chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana"(partendo da 1) della lista in cui il nuovo utente si trova

var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var inputUtente = prompt("Inserisci il tuo cognome");
lista.push(inputUtente);
console.log(lista)

var listaAlfabetica = lista.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
});

console.log (listaAlfabetica)

var i= 0;
var listaDefinitiva = document.getElementById("cognomi")


while (i < listaAlfabetica.length) {
    listaDefinitiva.innerHTML += "<li>" + (i+1) + ") " + listaAlfabetica[i] + "</li>";

    i++
}


