	
	var ask = require('readline-sync');

	console.log('Enter the lengths of the base and height of a 3 sided shape: ')

	var height = ask.question(' Height? ');
	var base = ask.question(' Base? ')

	height = parseFloat(height);
	base = parseFloat(base);

	var area = (base*height)/2;

	console.log('Area: ' + area);