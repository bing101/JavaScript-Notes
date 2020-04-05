console.log('Annimations and effects');



$(document).ready(function(){
    $('.btn1').click(() => $('.txt').fadeOut(1000));
    $('.btn2').click(() => $('.txt').fadeIn(1000));
    $('.btn3').click(() => $('.txt').fadeToggle(1000));

    $('.btn-earth').click(earthEffect);
    $('.reset-earth').click( () => $('.img-earth').removeAttr('style'))

})

function earthEffect(){
    console.log('Button clickedd')
    $('.img-earth').animate({
        left: "+=50%",
        height: "200px"
    });
    $('.img-earth').animate({
        left: "100%",
        height: "100px"
        
    });
    
    $('.img-earth').animate({
        left: "-=50%",
        height: "25px"
        
    });
    $('.img-earth').animate({
        left: "-=40%",
        height: "100px"

    });
    
}