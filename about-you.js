	var ask = require('readline-sync'); // == input() == new Scanner(System.in)

	var name = ask.question('What\'s your name? ');
	var age = ask.question('What\'s your age? ');
	var address = ask.question('Where do you live? ');

	//console.log('Your name is ' + name + ', you are ' + age + ', and you live in ' + address);
	console.log('Your name is %s, you are %s, and you live in %s', name, age, address);

	// var newAge = parseInt(age);