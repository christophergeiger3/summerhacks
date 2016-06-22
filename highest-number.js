
	/*
	var numbers = [3, 5, 10, 23, 2, 4];

	var HighestNum = -999
	for(var i = 0; i<numbers.length; i++)
	{
		if(numbers[i] >= HighestNum) HighestNum = numbers[i];
	}
	console.log('Highest Number is: ' + HighestNum);

	*/
		function searchHigh(listOfNumbers)
		{
			var largeNumber = listOfNumbers[0];
			for(var index = 0; index < listOfNumbers.length; index++)
			{
				if( largeNumber < listOfNumbers[index]) largeNumber = listOfNumbers[index];
			}
			return largeNumber;
		}

		var numbers = [3, 5, 10, 23, 2, 4];

		var highestnumber = searchHigh(numbers);
		console.log(highestnumber);
	