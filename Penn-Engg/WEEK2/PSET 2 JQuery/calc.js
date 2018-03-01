
//Numbers in calculator 
 $('#button1').click(addInput);
 $('#button2').click(addInput);
 $('#button3').click(addInput);
 $('#button4').click(addInput);
 $('#button5').click(addInput);
 $('#button6').click(addInput);
 $('#button7').click(addInput);
 $('#button8').click(addInput);
 $('#button9').click(addInput);
 $('#button0').click(addInput);
 
 var operandOne = '';
 var operandTwo = '';
 var operator = '';
 var result = '';
 var computationDone = 0;
 var prevChar = '';
 var secWasDone = false;
 
 
$('#equalsButton').click(function () {
		
		debugger;
		if(!operator) return; //operator not yet existed
		
		if(operandOne && operator && isOperator(prevChar)) return ;
		
		if(prevChar == '=' && result && operator && !operandOne && operandTwo ) {
				
				$('#display').val(eval(result+operator+operandTwo));
				result = eval(result+operator+operandTwo) ;
				return;
		}
		
		operandTwo = $('#display').val();
		result = eval(operandOne+operator+operandTwo)+'';
		$('#display').val(result);
		operandOne = '';
		prevChar = '=';
	}
 );
 
 function isOperator(character) {
	 
	 return character == '+' || character == '/' || character == '-'|| character == '*';
 }
 
 function addInput() {
	 debugger;
	 
	 if(prevChar == '=' && result && operator) {
		 debugger;
		operandOne = '';
		operandTwo = '';
		operator = '';
		result = '';
		secWasDone = false;
		prevChar = $(this).val();
		$('#display').val('');
		 
	 }
	 
	 if(prevChar == '=' && operandOne && !operandTwo && operator) {// separating value one and value two for display purposes
		 
		 $('#display').val('');
		 operandTwo = 'dummyValue';
		 secWasDone = true;
	 }
	 
	 if(isOperator(prevChar) && operandOne && !operandTwo && operator) {// separating value one and value two for display purposes
		 
		 $('#display').val('');
		 operandTwo = 'dummyValue';
		  secWasDone = true;
	 }
	  a = $('#display').val() == '' ? '0' :  $('#display').val();
	  b = a + $(this).val();
	 $('#display').val(eval(b));
	 prevChar = $(this).val();
	 
 }
 
 
 
 //Clear button in calculator
 $('#clearButton').click(function () { 
		operandOne = '';
		operandTwo = '';
		operator = '';
		result = '';
		prevChar = $(this).val();
		$('#display').val('');
 });
 
 //Operator Buttons in calculator
 $('#addButton').click(function () 
	{
		debugger;
		if(prevChar == '='){
			operandTwo = '';
			result = '';
		}
		
		if(operandOne && operator && secWasDone) {
			operandTwo = $('#display').val();
			result = eval(operandOne+operator+operandTwo)+'';
			$('#display').val(result);
			operandOne = '';
			prevChar = '='; 
			secWasDone = false;
			return;
		}
		operator = '+';
		operandOne = $('#display').val();
		prevChar = '+';
	}
 );
 
  $('#subtractButton').click(function () 
	{
		debugger;
		{
		if(prevChar == '='){
			operandTwo = '';
			result = '';
		}
		
		if(operandOne && operator && secWasDone) {
			operandTwo = $('#display').val();
			result = eval(operandOne+operator+operandTwo)+'';
			$('#display').val(result);
			operandOne = '';
			prevChar = '='; 
			secWasDone = false;
			return;
		}
		
		operator = '-';
		operandOne = $('#display').val();
		prevChar = '-';
	}
	 
	}
 );
 
 
  $('#divideButton').click(function () 
	{
		debugger;
		if(prevChar == '='){
			operandTwo = '';
			result = '';
		}
		
	if(operandOne && operator && secWasDone) {
			operandTwo = $('#display').val();
			result = eval(operandOne+operator+operandTwo)+'';
			$('#display').val(result);
			operandOne = '';
			prevChar = '='; 
			secWasDone = false;
			return;
		}
		operator = '/';
		operandOne = $('#display').val();
		prevChar = '/';
	
	
	}
 );
 
 $('#multiplyButton').click(function () 
	{
		{
		if(prevChar == '='){
			operandTwo = '';
			result = '';
		}
	
		if(operandOne && operator && secWasDone) {
			operandTwo = $('#display').val();
			result = eval(operandOne+operator+operandTwo)+'';
			$('#display').val(result);
			operandOne = '';
			prevChar = '='; 
			secWasDone = false;
			return;
		}	
		operator = '*';
		operandOne = $('#display').val();
		prevChar = '*';
	}
	
	}
 );


