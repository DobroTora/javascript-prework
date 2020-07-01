var computerMove;
var playerMove;
var randomNumber;
var playerMove, playerInput;
computerMove = 'kamień';
playerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nozyce, to wygrywasz!');
printMessage('Wylosowana liczba to: ' + randomNumber);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

if (randomNumber == '2') {
    computerMove = 'papier';
  } else {
    computerMove = 'nieznany ruch';
  }
printMessage('Mój ruch: ' + computerMove);

  if (randomNumber == '3') {
    computerMove = 'nożyce';
  } else {
    computerMove = 'nieznany ruch';
  }
printMessage('Mój ruch: ' + computerMove);

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
    printMessage('nieznany ruch' + playerMove);
}
printMessage('Twój ruch: ' + playerMove);
if (playerInput == '2') {
    playerMove = 'papier';
  } else {
    printMessage('nieznany ruch' + playerMove);
  }
  printMessage('Twój ruch: ' + playerMove);
  if (playerInput == '3') {
    playerMove = 'nożyce';
  } else {
    printMessage('nieznany ruch' + playerMove);
  }
  printMessage('Twój ruch: ' + playerMove);