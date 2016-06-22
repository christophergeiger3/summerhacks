	//Tic-Tac-Toe
	var ask = require('readline-sync');

	var player1move, player2move;
	var player1symbol, player2symbol;

	var coordinate = [[1,1], [2,1], [3,1], [1,2], [2,2], [2,3], [3,2], [1,3], [2,3], [3,3]]

	setup();

	function mainmenu()
	{
		console.log('Welcome to Tic-Tac-Toe!')
		player1symbol = ask.question('Player 1, what is your sybmbol, X or O? ')
		if(player1symbol != 'X' && player1symbol != 'O')
		{
			console.log('Error! Try again!')
			mainmenu();
		}

		player2symbol = ask.question('Player 2, what is your symbol, X or O? ')
		if(player2symbol != 'X' && player2symbol != 'O')
		{
			console.log('Error! Try again!')
			mainmenu();
		}
	}



	function setup()
	{
		/*
		console.log('\n');
		for( var i = 1; i <= 3; i++ )
		{
			if(i==1) console.log('	1	 	2	 	3	');
			console.log('		|		|		')
			console.log('	' + checkCoordinate(1 , 1) + '	|	' + checkCoordinate(1, 2) + '	|	' + checkCoordinate(1,3) + '		');
			console.log('		|		|		');
			if(i != 3) console.log('  -----------------------------------------------');
		}
		*/

		console.log('\n');
		for( var i = 1; i <= 3; i++ )
		{
			if(i==1) console.log('		1	 	2	 	3	');
			console.log('			|		|		')
			console.log( ' ' + i + '	' + checkCoordinate(1 , 1) + '		|	' + checkCoordinate(1, 2) + '		|	' + checkCoordinate(1,3) + '		');
			console.log('			|		|		');
			if(i != 3) console.log('  	-----------------------------------------------');
		}


		console.log('\n');
	}

	function checkCoordinate(x , y)
	{
			return ' ';
	}