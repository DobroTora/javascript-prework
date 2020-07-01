var computerMove;
var playerMove;
computerMove = 'kamień';
playerMove = 'papier';
var randomNumber;


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