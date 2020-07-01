function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + 'papier' + '! Jeśli Twój ruch to nozyce, to wygrywasz!');

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}