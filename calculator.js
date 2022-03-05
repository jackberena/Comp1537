
function add() {
    hide_button = "<button class ='delete'>delete</button>";
    text = jQuery('#first').val() + "+" +jQuery('#second').val() + "="
    answer = parseInt(jQuery('#first').val()) + parseInt(jQuery('#second').val());

    answer = text+answer;
    jQuery('#answer').text(answer);

    
    history_list = "<span id='lists'>" + answer + hide_button + "</span>";
    previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list + '<br>';
    jQuery('#history').html(new_answer);
  


}

function subtract(){
    hide_button = "<button class ='delete'>delete</button>";
    text = jQuery('#first').val() + '-' +jQuery('#second').val() + "="
    answer = parseInt(jQuery('#first').val()) - parseInt(jQuery('#second').val());

    answer = text + answer;
    jQuery("#answer").html(answer);

    history_list = "<span id='sublist'>" + answer + hide_button + "</span>";
    previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list + '<br>';
    jQuery('#history').html(new_answer).add.btn;
    

    
}

function multiply(){
    hide_button = "<button class ='delete'>delete</button>";
    answer = parseInt(jQuery('#first').val()) * parseInt(jQuery('#second').val());
    text = jQuery('#first').val() + "*" + jQuery('#second').val() + "="
    answer = text + answer
    jQuery("#answer").html(answer)

    history_list ="<span id='mullist'>" + answer + hide_button + "</span>";
   previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list + '<br>';
    jQuery('#history').html(new_answer);

}

function divide(){
    hide_button = "<button class ='delete'>delete</button>";
    answer = parseInt(jQuery('#first').val()) / parseInt(jQuery('#second').val());
    text = jQuery('#first').val() + "/" + jQuery('#second').val() + "="
    answer = text + answer
    jQuery("#answer").html(answer);

    history_list ="<span id='divlist'>" + answer + hide_button + "</span>";
    previous_answer = jQuery('#history').html();
    new_answer = previous_answer + history_list +  '<br>';
    jQuery('#history').html(new_answer);

}

function increase(){
    inc =$('#history').css("font-size");

    inc =parseInt(inc);
    $('#history').css("font-size", (inc +5)+ "px");
    
}

function decrease(){
    dec = $('#history').css("font-size");

    dec =parseInt(dec);
    $('#history').css("font-size", (dec - 5) + "px");
}

function remove_(){
    $(this).parent().remove();
    $('br').remove();
}



    
    
    
    
    


function setup() {
    jQuery("#add").click(add);
    jQuery("#subtract").click(subtract);
    jQuery("#multiply").click(multiply);
    jQuery("#divide").click(divide);
    jQuery("#inc").click(increase);
    jQuery("#decrease").click(decrease)
    jQuery('body').on("click", '.delete', remove_)
    
}





jQuery(document).ready(setup);
