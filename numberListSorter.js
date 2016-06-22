
	// Write a list of numbers in ascending order

	// See sortNumberList.js


	ask = require('readline-sync');

	function acceptListInput()
	{
		while(true)
		{
			var input = ask.question('Enter a number to list or type stop to stop: ')
			if(input == 'stop') break;
			else
			{
				input = parseInt(input);
				list.push(input);
			}
		}
	}

	function findSmallestElement(newList)
	{
		for(i=0; i<newList.length; i++)
		{
			// Insert code here
		}
	}

	var list = [];
	acceptListInput();

	var sortedList = []
	var sortedListIndex = 0;
	var currentMin = Number.MIN_VALUE;

	// array.splice(index, deleteCount)
	// removes an element and shifts the array
	// Insert code here

	console.log(list);