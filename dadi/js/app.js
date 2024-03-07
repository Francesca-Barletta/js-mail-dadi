/*Gioco dei dadi
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


// devo recuperare il pulsante dal dom
 const generateNumberButtonElement = document.querySelector('.generate');
// devo associare l'evento click al pulsante, quindi la sua funzione:
generateNumberButtonElement.addEventListener('click', function(){
//al click sul pulsante dell'utente,
    //devo generare due numeri random
    //un numero sarà per l'utente
    const randomUserNumber = Math.floor(Math.random() * 100);
    console.log('user number: ', randomUserNumber);
    const userNumberElement = document.getElementById('user');
    userNumberElement.innerHTML = `
    <p>Your number</p>
    <div>${randomUserNumber}</div>`
    //un numero sarà per il pc
    const randomConsoleNumber = Math.floor(Math.random() * 100);
    console.log('console number: ', randomConsoleNumber);
    const consoleNumberElement = document.getElementById('console');
    consoleNumberElement.innerHTML = `
    <p>Pc number</p>
    <div>${randomConsoleNumber}</div>`

    const resultElement = document.getElementById('result');

    if(randomUserNumber > randomConsoleNumber){
        console.log('hai vinto');
        resultElement.innerHTML = `
        <div class="box-result win"><p>Hai vinto!</p></div>`
    } else if(randomUserNumber === randomConsoleNumber){
        console.log('parità, ritenta');
        resultElement.innerHTML = `
        <div class="box-result egual"><p>Parità, ritenta!</p></div>`
    } else{
        console.log('hai perso');
        resultElement.innerHTML = `
        <div class="box-result loser"><p>Hai perso!</p></div>`
    }
})
 
  //devo stampare nel dom i due numeri

  //SE l'utente avrà il numero più alto 
    //messaggio che ha vinto
  // altrimenti 
    //messaggio che ha perso