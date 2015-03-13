$(document).ready( function(){
	$(".title").hide().html("Fizz Buzz!").fadeIn(1000);
	$(".iStart").on("click", function(){
		fizzStart(); 
	}); 

});

// ========================

function fizzStart(){
	var m = parseInt($(".iNum").val())+1;
	// console.log(m);
	for (var i=1; i < m; i++){
		if ( i%3 == 0 && i%5 == 0 ){
			$(".content").append(i + ". <b>Fizz Buzz!</b> <br>");
		}else if ( i%3 == 0 ){
			$(".content").append(i + ". Fizz! <br>");
		}else if ( i%5 == 0 ){
			$(".content").append(i + ". Buzz! <br>");
		}else{
			$(".content").append(i + ". ---- <br>");
		}
	}
}