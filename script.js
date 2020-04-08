$('a.btn-literacy').on('click', function(){
    $('.panel-literacy').fadeIn();
    $('.panel-math').hide();
    $('.panel-pd').hide();
});

$('a.btn-math').on('click', function(){
    $('.panel-math').fadeIn();
    $('.panel-literacy').hide();
    $('.panel-pd').hide();
});

$('a.btn-pd').on('click', function(){
    $('.panel-pd').fadeIn();
    $('.panel-literacy').hide();
    $('.panel-math').hide();
});

$('a.btn-show-all').on('click', function(){
    $('.panel-literacy, .panel-math, .panel-pd').fadeIn();
});