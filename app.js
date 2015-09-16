


//add button within the new div class 
//var $content = $("<li>" + "First Name: " + values.firstName + ", Last Name: " + values.lastName + ", Employee #" + values.employeeNumber + 
// 	", Title: " + values.title + ", Review Score: " + values.lastReviewScore + ", Salary: " + values.salary + '<button class="remove">Remove</button>' + "</li>");

// $("li").append($content); });

$(document).ready(function(){

var $lineNumCount = 0;
$(".initialButton").on("click", function(){
		
			
			var $bbb = $("<br>" + "<button class='newlineButton'>" + "Create New Lines" + "</button>");	
			var $createNewButton = $(".buttonTwo").append($bbb);
			//var $newLine = $("<li class='newLineNumber'>" + "new line" + "</li>"  );

			var $generateNewDiv = $("<div class='lineNumbers'>"  +  "</div>");

	$(".firstDiv").append($generateNewDiv);

	
	
$(".newlineButton").on("click", function(){
	
$lineNumCount++;
	var $newLine = $("<li class='newLineNumber'>" + "new line" + $lineNumCount + " " + "<button class='removeButton'>" + "Remove Line " + " " + "</button>" + 
		"<button class='changeColor'>" + "Change Color " + "</button>" + "</li>"  );
	$(".someLines").append($newLine );


	
	 $(document).on("click", ".removeButton", function(){
	 $(this).closest("li").remove();
});
	});





// function hello(new line){
// 	var numClicks = $
// 	if 
// }





//"<ul class='someLines'>" + "</ul>" +











	
	
});



// // remove button from form
// $(document).on("click", ".remove", function(){
// 	$(this).closest("li").remove();
// });















});