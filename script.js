// cat-oral-language
// cat-phonological-awareness
// cat-phonemic-awareness
// cat-phonics-decoding
// cat-fluency
// cat-vocabulary
// cat-comprehension
// cat-language

// .cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language

$('a.btn-oral-language').on('click', function () {
    $('.cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-oral-language').fadeIn();
});

$('a.btn-phonological-awareness').on('click', function () {
    $('.cat-oral-language, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-phonological-awareness').fadeIn();
});

$('a.btn-phonemic-awareness').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-phonemic-awareness').fadeIn();
});

$('a.btn-phonics-decoding').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-phonics-decoding').fadeIn();
});

$('a.btn-fluency').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-fluency').fadeIn();
});

$('a.btn-vocabulary').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-comprehension, .cat-language').hide();
    $('.cat-vocabulary').fadeIn();
});

$('a.btn-comprehension').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-language').hide();
    $('.cat-comprehension').fadeIn();
});

$('a.btn-language').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension').hide();
    $('.cat-language').fadeIn();
});

$('a.btn-show-all').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').fadeIn();
});



// from original demo

// $('a.btn-literacy').on('click', function(){
//     $('.panel-literacy').fadeIn();
//     $('.panel-math').hide();
//     $('.panel-pd').hide();
// });

// $('a.btn-math').on('click', function(){
//     $('.panel-math').fadeIn();
//     $('.panel-literacy').hide();
//     $('.panel-pd').hide();
// });

// $('a.btn-pd').on('click', function(){
//     $('.panel-pd').fadeIn();
//     $('.panel-literacy').hide();
//     $('.panel-math').hide();
// });