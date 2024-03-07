/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito 
del controllo.*/

//dichiaro una costante per prendere l'elemento pulsante invia dal dom
const submitButtonDOMElement = document.querySelector('.submit');


//dichiaro una constante per prendere l'elemento email dal dom
const mailDOMElement = document.getElementById('mail');

// dichiaro una array come lista delle mail che possono accedere
const validEmail = ["francesca@gmail.com", "giacomo@tim.it", "gatto@hotmail.it"];

//dichiaro il value della email di default falso perchè non so se cosa c'è scritto
 let valueMailDOMElement = false;

// quando l'utente cliccherà invia 
   // devo collegare il pulsante invia all'evento click
   submitButtonDOMElement.addEventListener('click', function(){
    console.log('invia');
//dichiaro una variabile per prendere il contenuto (value) della mail nel dom
    const userMail = mailDOMElement.value;

    //la email scritta deve entrare in un ciclo per cui
  //viene controllato se la mail è nella lista di chi può accedere
  for(let i = 0; i < validEmail.length; i++){
  //SE la mail è contenuta nella lista di quelle che possono accedere
  //la variabile del contenuto della mail diventerà vera
    const validEmailArray = validEmail[i];
     if(userMail === validEmailArray){
        valueMailDOMElement = true
     }
  }

   //viene inviato un messaggio di esito del controllo
   if(valueMailDOMElement === true){
    console.log('accesso permesso')

 } else{
    console.log('accesso negato')
 }
})