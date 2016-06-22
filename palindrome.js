
	var ask = require('readline-sync');

	var palindrome = ask.question('Enter a palindrome: ')

	if(palcheck(palindrome)) console.log( 'Yes, that is a palindrome!' );
	else console.log( 'That\'s not a palindrome!' );

	function palcheck(pal)
	{
		pal = pal.split('');

		for(i = 0; i < (pal.length/2); i++)
		{
			var y = pal.length - i - 1;
			if(pal[i] == pal[y]) continue;
			else return false;

		}

		return true;
	}

