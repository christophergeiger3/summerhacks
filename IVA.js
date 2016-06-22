	//Vamos a calcular el IVA
	/*
	var ask = require('readline-sync');

	function addIva ( precio )
	{
		var iva = parseFloat(0.115);
		precio = parseFloat(precio);
		var total = (precio * iva) + precio;
		total = precio.toPrecision(4);
		return total;
	}

	var p = ask.question('What is the price of the item? ');

	console.log('Total price: %s', addIva(p));

	var precioArticuloDos = ask.question('What is the price of the second item? ');

	console.log('The total price of the second item is: %s ', addIva(precioArticuloDos));
	*/

	var ask	= require('readline-sync');

	function addIva (price)
	{
		price = parseFloat(price)
		price = price * 1.115;
		return price;
	}

	var x = ask.question('Price? ')
	console.log('Total: ' + addIva(x));

	