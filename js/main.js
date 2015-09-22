


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

	
	// When small book is opened, slide down 
	$('.book-small').on('click',function(){	
		// Get data from Open Library API from
		var googleID = $(this).data("googleid");
		var googleAPI = "https://www.googleapis.com/books/v1/volumes/" + googleID + "?key=AIzaSyA6GBzUG7EBEJy91eoBPjCkFX3DqlP27P4";
		$.get(googleAPI, function(data){
			var book = data.volumeInfo;
			$('.book-large-image').html('<img src="'+ book.imageLinks.large+ '">');
			$('#bookTitle').html(book.title);
			// var authors = book.author;
			// var author = authors[0];
			// console.log(author);
			// $('#bookAuthor').html(book.author[0]);
			$('#bookAbstract').html(book.description);
			console.log(book);
		$('#bookContainer').slideDown();
		})	
	})

	// Provide ability to close the explorer
	$('#close').on('click',function(){
		$('#bookContainer').slideUp();
	})

})



