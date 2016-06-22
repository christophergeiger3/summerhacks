	
	var ask = require('readline-sync');

	function isPrime (num)
	{
		if(num == 2) return true;
		for(i = 2; i < num; i++)
		{
			if(num % i == 0) return false;
		}
		return true;
	}

	var usrinput = ask.question('Enter a number to check if it is prime: ');
	usrinput = parseInt(usrinput);
	if(isPrime(usrinput)) console.log('Yes, the number is prime');
	else console.log('No, the number is not prime');