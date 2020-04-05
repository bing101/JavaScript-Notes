console.log('Jquery Tutorial sheet')

// jquery selector
$('h5.heading-two').hide()

// span selector and css property
$('p span').css('color', 'blue')

// List item manipulation
$('#ul li').css('text-align', 'center')
$('#ul li:odd').css('background-color', '#cccccc')
$('#ul li:even').css('background-color', 'gray')

// Function
$('.btn1').click( () => $('#ul li').toggle() )

// Event listener
$(document).on('mousemove', e => $('#coord').html(`(${e.clientX}, ${e.clientY})`))

$('input').focus( () => {
    $(this).css('background', 'pink') ;
    
});
