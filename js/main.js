


$(document).ready(function(){

	// Create a function to replaceCover of book based on the ISBN and book ID
	function replaceCover(id,index){
		var imageLink = '<img src="http://covers.openlibrary.org/b/ISBN/' + id +'-M.jpg">';
		var imageLocation = "#book"+index+" .book-small-image";
		$(imageLocation).replaceWith(imageLink);
	}

	// Define the book collection array to house ISBNs
	var bookCollection = [];

	// Loop through all divs with class book-small
	// For each book-small class, take the ISBN from data-id
	// Use this ISBN to call the replaceCover function
	$.each($(".book-small"), function(i,e){
		bookCollection.push($(e).data("id"));
		var bookISBN = $(e).data("id");
		replaceCover(bookISBN,i+1);
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
	})

	// Provide ability to close the explorer
	$('#close').on('click',function(){
		$('#bookContainer').slideUp();
	})

})



