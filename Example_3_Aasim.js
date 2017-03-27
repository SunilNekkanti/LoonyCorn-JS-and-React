function printSomething()
{
	var userInput = prompt("Enter a number between 1-10");

	if(userInput >= 1 && userInput <= 10)
	{	for (var i = 0; i < userInput; i++)
		{
			document.write("<br>" + (i+1) + ") So apparently you can add and switch around HTML via this.</br>");
			document.write("<br> I entered " + userInput + " which is what this iterators over</br> ")

		}

		
	}
	else
	{
		alert("Invalid input, " + userInput +"Enter a number between 1 and 10!");
	}

}