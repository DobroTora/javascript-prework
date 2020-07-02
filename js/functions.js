function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}


function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const buttonTest, buttonRock, buttonScissors, buttonPaper;
const argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-paper');
buttonPaper = document.getElementById('button-scissors');

function buttonClicked(argButtonName, buttonPaper, buttonRock, buttonScissors, computerMove, playerMove, randomNumber, playerInput){
    clearMessages();
    console.log(argButtonName + ' został kliknięty");
    console.log(buttonPaper + ' został kliknięty");
    console.log(buttonRock + ' został kliknięty");
    console.log(buttonScissors + ' został kliknięty");



    function getMoveName(argMoveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
      if (argMoveId == 1) {
        return 'kamień';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      } else if {
          return printMessage('Wygrales');
      } else if (playerMove == computerMove) {
          return printMessage('Remis');
      } else if {
        return printMessage('Przegrales');
      } 
    
      if (argMoveId == 2) {
        return 'papier';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'papier';
      } else if {
        return printMessage('Wygrales');
      } else if (playerMove == computerMove) {
        return printMessage('Remis');
      } else if {
        return printMessage('Przegrales');
      } 
    
      if (argMoveId == 3) {
        return 'nozyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'nozyce';
      } else if {
        return printMessage('Wygrales');
      } else if (playerMove == computerMove) {
        return printMessage('Remis');
      } else if {
        return printMessage('Przegrales');
      } 
    }
    
    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    playerInput = argButtonName;
    playerMove = getMoveName(playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);




}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});

buttonRock.addEventListener('click', function(){
    buttonClicked('Rock button clicked')
});

buttonPaper.addEventListener('click', function(){
    buttonClicked('Paper button clicked')
});

buttonScissors.addEventListener('click', function(){
    buttonClicked('Scissors button clicked')
});
