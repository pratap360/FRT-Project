$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".slider").slider({ full_width: true });
    $(".dropdown-trigger").dropdown({ hover: false });
    $('.modal').modal();
    $('.collapsible').collapsible();  
    $('select').formSelect(); 
    $('.tabs').tabs();
    // $('.datepicker').datepicker(); 
    $('.chips').chips();
    $('.tooltipped').tooltip();

    // SWAP ICON ON CLICK
	// Source: https://stackoverflow.com/a/34254979/751570
	$('.dark-toggle').on('click',function(){
		if ($(this).find('i').text() == 'brightness_4'){
				$(this).find('i').text('brightness_high');
		} else {
				$(this).find('i').text('brightness_4');
		}
	});
	


});

function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}

