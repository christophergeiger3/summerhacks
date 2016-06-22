	//Number is even or odd

	var ask = require('readline-sync');

	var number = ask.question('Give me a number: ');

	number = parseInt(number);

	if(number % 2 == 0)
	{
		console.log('It is an even number')
	}

	else
	{
		console.log('It is an odd number')
	}