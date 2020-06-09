$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-play-pause").click(function(){
        if ($('#carousel-play-pause').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carousel-play-pause span').removeClass('fa-pause');
            $('#carousel-play-pause span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carousel-play-pause span').removeClass('fa-play');
            $('#carousel-play-pause span').addClass('fa-pause');
        }      
    });
    $('#login-btn').click(function(){
        $('#login-modal').modal('toggle');
    });
    $('#reserve-btn').click(function(){
        $('#reserve-modal').modal('toggle');
    });
});