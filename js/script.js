$(document).ready(function() {

	$( "#button" ).click(function() {
              
		for(var i = 1; i <= 100; i++) {
		   var printVal = '';
		   if(i % 3 == 0) printVal = 'fizz';
		   if(i % 5 == 0) printVal = printVal + 'buzz';
		   if(printVal == '') printVal = i;
		   console.log(printVal);
		}   
	

	})


})