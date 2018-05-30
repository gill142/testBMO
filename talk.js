function talk() {
	'use strict';
	//This function will post your own message
	var name = document.getElementById('talkname').value;
	var message = document.getElementById('talkmessage').value;
	if (name == '' || message == '') { //Check the form
		alert ('Please fill in your name and message');
		return;
	}
	var now = new Date();
	var content = '<div>' + name + ' @ ' + now + '<hr />' + message + '</div>';
	document.getElementById('talkingroom').innerHTML = content + document.getElementById('talkingroom').innerHTML; //Append to the top of this section
	document.getElementById('talkmessage').value = ''; //Clean UI
}