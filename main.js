function addListItem() {
	var text= $('#newtext').val();
	$('#list').append('<li><input type="checkbox"/>'+text+'<button class="delete">-</button></li>');
	$('#newtext').val('');
}

function deleteItem() {
	$(this).parent().remove();
}


$(function(){

$('#add').on('click',addListItem);
$('.delete').on('click',deleteItem);


});