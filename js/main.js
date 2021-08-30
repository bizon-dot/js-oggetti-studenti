/* 
 
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


// Creo l'oggetto studente
let studente = {
    nome: `Eilen`,
    cognome: `Torres`,
    eta: `30`
}


// Ciclo l'oggetto
for (let proprietà in studente) {
    let value = studente[proprietà]
    console.log(value);
}

// Array studenti 

let studenti = [{
        nome: `Eilen`,
        cognome: `Torres`,
        eta: `30`
    },
    {
        nome: `Amelia`,
        cognome: `Bresci`,
        eta: `30`
    },
    {
        nome: `Silvio `,
        cognome: `Berlusconi`,
        eta: `60`
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    console.log(`${studenti[i][`nome`]} ${studenti[i][`cognome`]}`);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

let studentName = prompt(`Inserisci il nome`);
let studentCognome = prompt(`Inserisci il cognome`);
let studentEta = prompt(`Inserisci l'età`);
let newStudent = {
    nome: studentName,
    cognome: studentCognome,
    eta: studentEta
}
studenti.push(newStudent);
console.log(studenti);