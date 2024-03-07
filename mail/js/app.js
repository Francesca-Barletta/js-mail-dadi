/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito 
del controllo.*/

//dichiaro una costante per prendere l'elemento pulsante invia dal dom
const submitDOMElement = document.querySelector('submit');

//dichiaro una constante per prendere l'elemento email dal dom
const mailDOMElement = document.getElementById('mail');

//dichiaro una variabile per prendere il contenuto (value) della mail nel dom
let valueMailDOMElement = mailDOMElement.value;

// dichiaro una array come lista delle mail che possono accedere
const validEmail = [];

//dichiaro il value della email di default falso perchè non so se cosa c'è scritto
valueMailDOMElement = false;

// quando l'utente cliccherà invia 
   // devo collegare il pulsante invia all'evento click
   submitDOMElement.addEventListener('click', function()){
    //la email scritta deve entrare in un ciclo per cui
  //viene controllato se la mail è nella lista di chi può accedere
  for()
  
}

  //viene inviato un messaggio di esito del controllo