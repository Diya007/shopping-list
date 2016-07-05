function addListItem() {
	var text= $('#newtext').val();
	$('#list').append('<li><input type="checkbox" class="done"/>'+text+'<button class="delete">-</button></li>');
	$('#newtext').val('');
	arr.push(text);
	
}



function deleteItem() {
 	$(this).parent().remove();
 	var deleted = $(this).parent().text().slice(0,-1);
    for (var j = 0; j < arr.length; j ++) {
		if (arr[j] == deleted) {
			arr.splice(j,1);
		}
	}
	//Deleting items in the arr;
}




function finishItem() {
	$(this).parent().toggleClass('finishItem');
}

var arr = ["Bread", "Milk", "Cheese", "Tissue", "Paper Towel"];
	




function searchItem(){
	var searchText=$('.searchbar').val()
	for (var i = 0; i < arr.length; i++ ) {
		if (arr[i] == searchText) {
			$('#newsearch').text('The item exists!');
			break;
		}
		else {
			$('#newsearch').text('Nothing match');
		}
		
	}
}



//build an array
//push item into the array 
//for loop, loop through the array
//loop through the array and check arr[i]==searchText
//if arr[i] == searchText, alert the item already exists
// if arr[i] !== searchText. alert nothing match







$(function(){
	$('#add').on('click',addListItem);
	$(document).on('click','.delete',deleteItem);
	$(document).on('click','.done',finishItem);
	$('#find').on('click',searchItem);
});



