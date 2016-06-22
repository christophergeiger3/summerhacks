
	var ask = require('readline-sync');

	var cost = ask.question('What was the meal total? ');

	cost = parseFloat(cost);

	var people = ask.question('How many people are going to split the bill? ');

	people = parseInt(people);

	var iva = 0.115, gratuity = 0.15;

	var includeIva = ask.question('Is IVA included in the price? ')

	var total;

	if(includeIva == 'No')
	{
		total = (cost * iva) + cost;
	}
	else
	{
		total = cost;
	}

	//total = (total * gratuity) + total;

	var includeGratuity = ask.question('Include gratuity? ');

	var finalSum;

	if(includeGratuity == 'Yes')
	{
		finalSum = (total * gratuity) + total;
	}
	else
	{
		finalSum = total;
	}

	var amountPerPerson = finalSum / people;

	console.log('The total was: ' + finalSum.toPrecision(4));
	console.log('Each person needs to pay: ' + amountPerPerson.toPrecision(4));