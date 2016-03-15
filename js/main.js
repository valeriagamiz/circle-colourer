var $div = $('div');

$('#colour-button').on('change', function (){
    $div.css('background-color', $('#colour-button').val());;
});
