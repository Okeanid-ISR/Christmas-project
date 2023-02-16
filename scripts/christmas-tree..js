$(document).ready(function(){
    $('#christmas-tree').mouseleave(function(){
        $(this).removeClass('clicked');
    }).click(function(){
        $(this).addClass('clicked').html($(this).html());
    });
});

$('.container').on('mouseover', function(){
    $('.bauble').addClass('light');
    $('.star').addClass('star-light');
})

$('.container').on('mouseout', function(){
    $('.bauble').removeClass('light');
})