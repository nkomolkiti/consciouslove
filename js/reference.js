//REFERNCE-------------------------------------
$('.reference').click( function(){
	$('#popupRef').addClass('show');
	$('#popupRef').removeClass('hide');
});

$('.exitRefBtn').click( function(){
	$('#popupRef').removeClass('show');
	$('#popupRef').addClass('hide');
});