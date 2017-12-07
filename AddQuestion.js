$(function)    (){
    var.$QuizController  = $('#QuestionId');
    var.$userController = $ ('#UserController');
    var.tokenController = $('#TokenController');

    var OptionTemplate:   "" +
      "<li>"+

    function addOption(option){
        $.Options.append('Mustache.render(optionTemplate, option);
    }


    $.ajax({
        type: 'GET',
        url: 'api/option/1',
        success: function(Options)   {
            $.each(options, function( i, option)){
                addOption(option);
            });
},
error: function(){
    alert('error adding option');
}
});

$('#add-option').on('click', function(){
 var option = {
     name.$name.val(),
     question: $question.val(),
 };

})
name: $name.val();
};
$.ajax({
type: POST,
url: 'api/option/1'
 data: option,
 succes: function(newOption) {
    $
 }


})