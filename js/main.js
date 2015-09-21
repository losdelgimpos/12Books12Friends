


$(document).ready(function(){

	console.log("books module ready");

	function replaceCover(id,index){
		var imageLink = '<img src="http://covers.openlibrary.org/b/ISBN/' + id +'-M.jpg">';
		console.log(imageLink);
		var imageLocation = "#book"+index+" .book-small-image";
		console.log(imageLocation);
		$(imageLocation).replaceWith(imageLink);
	}

	var bookCollection = [9781932416640, 9780140274912, 9780141184388, 9780099475019, 9780007200276]
	
	
	$.each(bookCollection, function(i){
		replaceCover(bookCollection[i],i+1);
	});
	
	

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



