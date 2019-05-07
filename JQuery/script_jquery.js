$(function () {
    //slideshow
    $('#l1').click(function () {
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();

    });

    $('#l2').click(function () {
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function () {
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });

    $('#l4').click(function () {
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });




    /*   $('#blue').click(function () {
           $('p')
               .css('color', 'blue')
               .fadeOut('fast')
               .delay(1000)
               .fadeIn(5000);
       });
   
       $('#red').click(function () {
           $('p').css('background-color', 'red');
           $('#message')
               .text("sucess")
               .css({
                   color: 'red', border: '1px solid red'
               })
               .delay(3000)
               .fadeOut('fast')
               .addClass('green');
   
           $('button').removeClass('red');
       });
       */
});