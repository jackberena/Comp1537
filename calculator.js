
function add() {
   
    text = jQuery('#first').val() + "+" +jQuery('#second').val() + "="
    answer = parseInt(jQuery('#first').val()) + parseInt(jQuery('#second').val());

    answer = text+answer;
    jQuery('#answer').text(answer);

  history_list = "<span id='lists'>" + answer + "</span>";
  previous_answer = jQuery('#history').html();
  new_answer = previous_answer + history_list + '<br>';
  jQuery('#history').html(new_answer);
  


}

function subtract(){
    text = jQuery('#first').val() + '-' +jQuery('#second').val() + "="
    answer = parseInt(jQuery('#first').val()) - parseInt(jQuery('#second').val());

    answer = text + answer;
    jQuery("#answer").html(answer);

    history_list = "<span id='sublist'>" + answer + "</span>";
    previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list + '<br>';
    jQuery('#history').html(new_answer);

}

function multiply(){
    answer = parseInt(jQuery('#first').val()) * parseInt(jQuery('#second').val());
    text = jQuery('#first').val() + "*" + jQuery('#second').val() + "="
    answer = text + answer
    jQuery("#answer").html(answer)

    history_list ="<span id='mullist'>" + answer + "</span>";
   previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list + '<br>';
    jQuery('#history').html(new_answer);

}

function divide(){
    answer = parseInt(jQuery('#first').val()) / parseInt(jQuery('#second').val());
    text = jQuery('#first').val() + "/" + jQuery('#second').val() + "="
    answer = text + answer
    jQuery("#answer").html(answer);

    history_list ="<span id='divlist'>" + answer + "</span>";
    previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list + '<br>';
    jQuery('#history').html(new_answer);

}
function setup() {
    jQuery("#add").click(add);
    jQuery("#subtract").click(subtract);
    jQuery("#multiply").click(multiply);
    jQuery("#divide").click(divide);
    
}

jQuery(document).ready(setup);
