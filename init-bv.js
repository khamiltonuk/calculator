$(function() {
	var keypad = $('#keypad');
	var displayElement = $('#screen');
	var display = '';
	var firstVal;

	keypad.click(function(e) {
		if(e.target.id === 'equals') {
			calculate(display);
		} else {
			display += e.target.innerHTML;
			displayElement.val(display);
		}
	});

	function clear() {
		displayElement = '';
	}

	function calculate(display) {
		var array = display.split("+");
		var answer = sum(array);


		displayElement.val(answer);
	}

	function sum(array) {
		var total = 0;

		for(var i=0; i < array.length; i++) {
			total += parseInt(array[i]);
		}	
		return total;
	}
}); 

