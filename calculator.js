
function add() {
   
    text = jQuery('#first').val() + "+" +jQuery('#second').val() + "="
    answer = parseInt(jQuery('#first').val()) + parseInt(jQuery('#second').val());

    answer = text+answer;
    jQuery('#answer').text(answer);

    jQuery('#first').val()

}

function subtract(){
    text = jQuery('#first').val() + '-' +jQuery('#second').val() + "="
    answer = parseInt(jQuery('#first').val()) - parseInt(jQuery('#second').val());
    answer = text + answer;
    jQuery("#answer").html(answer);

}

function multiply(){
    answer = parseInt(jQuery('#first').val()) * parseInt(jQuery('#second').val());
    text = jQuery('#first').val() + "*" + jQuery('#second').val() + "="
    answer = text + answer
    jQuery("#answer").html(answer)

}

function divide(){
    answer = parseInt(jQuery('#first').val()) / parseInt(jQuery('#second').val());
    text = jQuery('#first').val() + "/" + jQuery('#second').val() + "="
    answer = text + answer
    jQuery("#answer").html(answer);

}
function setup() {
    jQuery("#add").click(add);
    jQuery("#subtract").click(subtract);
    jQuery("#multiply").click(multiply);
    jQuery("#divide").click(divide);
    
}

jQuery(document).ready(setup);
