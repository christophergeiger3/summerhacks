	
	// You can only use the function charAt() to discover if a given word is in a sentence
	// Everything is in lowercase
	
	var ask = require('readline-sync');

	var s = ask.question('Enter a sentence: ');
	var w = ask.question('Enter a word: ');

	if(isWord(s, w)) console.log('Yes, the word is in the sentence');
	else console.log('No, the word is not in the sentence');

	function isWord(sentence, word)
	{
		var x;
		x = 0;
		for(i = 0; i<sentence.length; i++)
		{
			if(word.charAt(x) == sentence.charAt(i))
			{
				x++;
				if(x == word.length - 1) return true;

			}
			else x = 0;
		}
		return false;
	}


	// Error: the boy is green : test 'hey' and 'green'