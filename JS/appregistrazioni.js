let utente = {};
let elencoUtenti = [];

function aggiungiUtente() { 
    let userdata = Array.from(document.getElementsByClassName('userdata'));
    for(let i = 0; i < userdata.length; i++) {
        utente[i] = userdata[i].value;
    }
    elencoUtenti.push(utente);
    utente = new Object();
}

function controllaUtente() {
    console.log(elencoUtenti);
}

const registerButton = document.getElementById('register');
const eRegister = registerButton.addEventListener('click', aggiungiUtente);
const eCheck = registerButton.addEventListener('click', controllaUtente);
