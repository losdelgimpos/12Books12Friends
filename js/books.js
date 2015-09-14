$(document).ready(function(){

	// Defining function to openBook when book is clicked
	function openBook(book){
		$(book).removeClass('hide');
		$(book).siblings().addClass('hide');
	}

	// When any of the small books are clicked, then get the ID of the book clicked and apply openBook function
	$('.book-small').on('click',function(){
		openBook('#' + this.id +'details')
		$('#bookContainer').slideDown();
	})

	// Provide ability to close the explorer
	$('#close').on('click',function(){
		$('#bookContainer').slideUp();
	})

})

