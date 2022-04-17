// JQUERY HOVER ELEMENT TO GIVE THE COLORS OF BRAZILIAN FLAG
		$(document).ready(function(){
		  $("h1").hover(function(){
			$(this).css("background-color", "yellow");
			}, function(){
			$(this).css("background-color", "green");
			});
			});


//------------------JQUERY FOR INDIA.HTML PAGE--------------------//

// jQuery for next arrow
$('#right-arrow').click(function(){
	//declaring variables for current and next slide to target them
	var currentSlide = $('.slide.active');
	var nextSlide = currentSlide.next();

	//on click current slide will disappear and next slide will show up
	currentSlide.fadeOut(300).removeClass('active');
	nextSlide.fadeIn(300).addClass('active');

	//when at last slide and user click next arrow, first div will come back
	if (nextSlide.length == 0) {
		$('.slide').first().fadeIn(300).addClass('active');
	}

});

// jQuery for previous arrow
$('#left-arrow').click(function(){
	//declaring variables for current and previous slide to target them
	var currentSlide = $('.slide.active');
	var prevSlide = currentSlide.prev();

	//on clicking previous arrow, current slide will disappear and previous slide will come
	currentSlide.fadeOut(300).removeClass('active');
	prevSlide.fadeIn(300).addClass('active');

	//when at first div and user click previous arrow, last div will come
	if (prevSlide.length == 0) {
		$('.slide').last().fadeIn(300).addClass('active');
	}

});


//----------------FORM VALIDATION FOR BOOK NOW PAGE------------------------//

function validateForm(){

	// Variable for fullname
	var x = document.getElementById("fullname").value;

	// Variable for telephone
	var t = document.getElementById("jtelephone").value;

	// Variable for Data-type of number of travellers
	var n = document.getElementById("jadults").value;

	//Alert for fullname
	if (document.getElementById("fullname").value == ""){
		alert("Fullname must be filled out");
		return false;
	}

	//Alert for telephone number length
	else if(t.length <= 4) {  
	    alert("Telephone number must be above 4 characters in length");
	    return false;  
  	}

  	//Alert for telephone number data-type in numeric
	else if(isNaN(t)){
		alert("Telephone number must be numeric in data!");
		return false;
	}

  	//Alert for number of travellers can't be less than 1
	else if (n <= 0){
		alert("Number of travellers must be 1 or more");
		return false;
	}

	//Alert for not selecting a destination
	else if(document.getElementById("jdestination").value == "0.0"){
		alert("Please Select a destination!");
		return false;
	}

	//Alert for choosing travel date
	else if(document.getElementById("jdate1").value == ""){
		alert("Please choose a travel date!");
		return false;
	}

	//Alert for choosing return date
	else if(document.getElementById("jdate2").value == ""){
		alert("Please choose a return date!");
		return false;
	}

	//Alert for succesfully booking
	else{
		alert("Thank you for Booking with us, We'll contact you shortly with a customized travel package for you.");
	}

}// validateForm() Function ends here !!