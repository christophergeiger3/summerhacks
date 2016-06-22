	var ask = require('readline-sync');

	function triangleArea( b, h ) { return (b*h)/2 }

	var base = ask.question('Enter base: ');
	var height = ask.question('Enter height: ');
	console.log('Area: %s', triangleArea( base, height ));