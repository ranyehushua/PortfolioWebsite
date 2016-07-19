var output = document.getElementById('output');
var firstVal = 0;
var secondVal = 0;
//resetOutput is initially set to false, it is set to true everytime an operator is clicked
//and it will only become false again once a new digit is keyed in. Below, the computation
//will only run unless that next set of digits is entered.
var resetOutput = false;
//resultGiven is an on/off switch, set to false initally, when the equals operator is hit
//the switch turns to true, that way, if a digit is hit after the equals sign, the output
//will reset so that the new digit is not just appended to the previous result. The appendDigit
//function checks for the resultGiven and if it is true, it resets the output content and resets
//the resultGiven switch to false, before punching that new digit into the output
var resultGiven = false;
var lastOperator = '';

//function called with onclick attribute in html doc
function appendDigit (digi) {
	if (resetOutput) {
		output.textContent = '';
		resetOutput = false;
	}
	if (output.textContent === '0')
		output.textContent = ''; 
	if (resultGiven) {
		output.textContent = '';
		resultGiven = false;
	}

	output.textContent += digi.textContent;
}

//Helper function for the checkValues function below
function setVal() {
	return parseFloat(output.textContent);
}

function checkValues() {
	if (!firstVal)
		firstVal = setVal();
	else if (!secondVal && !resetOutput) {
		secondVal = setVal();
		compute();
	}
	else if (!resetOutput)
		compute();
}

//Operator Functions

function add() {
	return firstVal + secondVal;
}

function subtract() {
	return firstVal - secondVal;
}

function multiply() {
	return firstVal * secondVal;
}

function divide() {
	return firstVal / secondVal;
}

function compute() {

	switch(lastOperator) {
		case 'add':
			firstVal = add();
			break;
		case 'subtract':
			firstVal = subtract();
			break;
		case 'multiply':
			firstVal = multiply();
			break;
		case 'divide':
			firstVal = divide();
			break;
	}
	//first value is reset with the results from the operator functions and second value below is 
	//reset to 0 (falsy)
	secondVal = 0;
	//first value, which is now the result, is now the new text content for the output div
	output.textContent = firstVal;
}


/***********************************
Operator button listener functions
***********************************/
document.getElementById('plus').onclick = function() {
	checkValues();
	lastOperator = 'add';
	resetOutput = true;
}

document.getElementById('minus').onclick = function() {
	checkValues();
	lastOperator = 'subtract';
	resetOutput = true;
}

document.getElementById('times').onclick = function() {
	checkValues();
	lastOperator = 'multiply';
	resetOutput = true;
}

document.getElementById('divide').onclick = function() {
	checkValues();
	lastOperator = 'divide';
	resetOutput = true;
}

document.getElementById('equal').onclick = function() {
	checkValues();
	firstVal = 0;
	resultGiven = true;
}

document.getElementById('clear').onclick = function() {
	output.textContent = '0';
	firstVal = 0;
	secondVal = 0;
	lastOperator = '';
}