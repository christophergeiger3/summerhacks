
	// Switch the value of two variables without a third variable

	var ask = require('readline-sync');

	var a = ask.question('Enter A: ');
	var b = ask.question('Enter B: ');

	a = parseInt(a);
	b = parseInt(b);

	// a,b
	a = a - b; // a-b, b
	b = a + b; // a-b, a-b+b --> a-b, a
	a = a - b; // a-b-a, a --> -b, a
	a = a * -1;

	console.log('A: ' + a);
	console.log('B: ' + b);


	/*
		Given number print all primes up to that number

		List of numbers write them in order, any type of number

		charAt() only, 

	*/