


$(document).ready(function(){

	// Create a function to replaceCover of book based on the googleID
	function replaceCover(id,index){
		var imageLocation = "#book"+index+" .book-small-image";
		var googleAPI = "https://www.googleapis.com/books/v1/volumes/" + id + "?key=AIzaSyA6GBzUG7EBEJy91eoBPjCkFX3DqlP27P4";
		$.get(googleAPI, function(data){
				var book = data.volumeInfo;
				$(imageLocation).replaceWith('<img src="'+ book.imageLinks.smallThumbnail+ '">');
		})	
	}

	// Loop through all divs with class book-small
	// For each book-small class, take the google ID from data attribute
	// Use this googleID to replace cover using function able
	$.each($(".book-small"), function(i,e){
		var googleID = $(e).data("googleid");
		replaceCover(googleID,i+1);
	})

	// Defining function to openBook when book is clicked
	function openBook(book){	
		$(book).removeClass('hide');
		$(book).siblings().addClass('hide');
	}
	
	// When any of the small books are clicked, then get the ID of the book clicked and apply openBook function
	$('.book-small').on('click',function(){	
		openBook('#' + this.id +'details');
		$('#bookContainer').slideDown();
		// Get data from Open Library API from
		var bookISBN = $(this).data("id");
		var openLibAPI = "https://www.googleapis.com/books/v1/volumes/m5vIVN7LjtgC";
		$.get(openLibAPI, function(data){
				var book = data.volumeInfo;
				console.log(book.title);
				// fill into inner HTML
		})	
	})

	// Provide ability to close the explorer
	$('#close').on('click',function(){
		$('#bookContainer').slideUp();
	})

})



