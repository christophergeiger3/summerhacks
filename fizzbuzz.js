	/*
		/ by 3 -> fizz
		/ by 5 -> buzz
		3 and 5 -> fizzbuzz
		1 to 50
	*/

	function checkDivisibility(num)
	{
		var divisByThree, divisByFive;
		if( num%3 == 0 ) divisByThree = true;
		else divisByThree = false;
		if( num%5 == 0 ) divisByFive = true;
		else divisByFive = false;
		if( divisByThree && divisByFive )
			{
			console.log('Fizzbuzz!')
			return;
			}
		else if( divisByThree )
			{
				console.log('Fizz!')
				return;
			}
		else if( divisByFive )
			{
				console.log('Buzz!')
				return;
			}
		else
		{
			console.log(num)
			return;
		}
	}

	for(var i = 1; i < 51; i = i+1)
	{
		checkDivisibility(i);
	}