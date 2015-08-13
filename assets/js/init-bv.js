"use strict";
$(document).ready(function() {
	var keypad = $('#keypad');
	var displayElement = $('#screen');
	var display = '';
	var firstVal,
	answer = 0,
	array = 0;

	keypad.click(function(e) {
		if(e.target.id === 'equals') {
			calculate(display);
		}
		if(e.target.id === 'clear') {
			clear();
		}
	});


	function calculate(display) {
		var array = display.split("+");
		var answer = sum(array);
		displayElement.val(answer);
		$('#history').html(answer);
	}

	function sum(array) {
		var total = 0;

		for(var i=0; i < array.length; i++) {
			total += parseInt(array[i]);
		}
		return total;
	}

	$('.button:not(.special)').on('click', function (e) {
        display += e.target.innerHTML;
        displayElement.val(display);
        workSize();
    });

	// prevent entry of non numerical character
    displayElement.keypress(function (e) {
        workSize();
        if (e.which < 48 || e.which > 57) return false;
    });

    // calculate font size depending on how many characters are on the screen
    function workSize() {
	    var characters = displayElement.val().length,
	        textSize = 13 / characters;
	    if (characters > 5) {
	        displayElement.css({'fontSize': textSize + 'em'});
	    }
	}

	// clear the screen, reset font size and calculating
	function clear() {
		array = 0,
		display = '';
		displayElement.val('').css({'fontSize': '2em'});
	}
	
});
