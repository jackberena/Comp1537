current_page_id =1;
number_of_pages = null;
page_size = null;


function paginate_menu(movie_data){
    $("#numbered_buttons").empty();
    $("header").show()
     number_of_pages = Math.ceil(movie_data.results.length /page_size);
    for(i = 1 ; i <= number_of_pages ; i++)
    {
        x = `<button id="${i}" class = "numbered_buttons_class"> ${i}</button>`;
        $("#numbered_buttons").append(x);

    }
    
}
function process_response(data){
    recieved_object =data;
    for(i = 0; i <data.results.length; i++) {
        $("#results").append(data.results[i].original_title + "<br>");
        $("#results").append(data.results[i].overview + "<br>") ;

        let poster_path = data.results[i].poster_path;
        let img_element = `<img src="http://image.tmdb.org/t/p/w500/${poster_path}">`

        $("#results").append(img_element + "<br>") ;

        let backdrop_path = data.results[i].backdrop_path
        bigger_image =`<button id="${backdrop_path}" class="image_button"> show image</button>`
        $("#results").append(bigger_image + "<br>");
    }
    paginate_menu();
}
function call_ajax(){
    x = $("#movie_name").val();
    $.ajax(
    {
        "url": `https://api.themoviedb.org/3/search/movie?api_key=fd2d8ec8efdbe5bd972028cd7178cd3e&query=${x}`,
        "type": "get",
        "success" : process_response,
    })
    $("header").show()
}   


function display_image(){

    photo = $(this).attr('id');
    $("#right").html(`<img src="http://image.tmdb.org/t/p/w500/${photo}" width=100%">`)
}

function header_button(){
    x =$(this).attr("id");
    $("#results").html(`<h2>Display(${x}, ${page_size})<h2>`)
    current_page_id =Number(x);
    $("#prev").show()
    $("#next").show()
}

function first(){
    $("#results").html(`<h2>Display(1, ${page_size})<h2>`)
    $("#prev").show()
    $("#next").show()
}

function last(){
    $("#results").html(`<h2>Display(7, ${page_size})<h2>`)
    $("#prev").show()
    $("#next").show()
}

function prev(){
    if (current_page_id > 1)
    current_page_id--;
    $("#results").html(`<h2> Display(${current_page_id}, ${page_size})<h2>`);

}

function next(){
    if(current_page_id < 7)
    current_page_id++;
    $("#results").html(`<h2> Display(${current_page_id}, ${page_size})<h2>`);
}

function change_dropdown_menu(){
    page_size =$(this).val()
    page_size = Number(page_size)
    paginate_menu()

}

function setup() {
    console.log('results');
    $('#get_movie').click(call_ajax);
    $("body").on("click", ".image_button", display_image)

    $('header button.number').click(header_button)

    $('body').on("click", ".numbered_buttons_class",header_button)

    $("#first").click(first)

    $("#last").click(last)

    $("#prev").click(prev)

    $("#next").click(next)

    $("#prev").hide()

    $("#next").hide()

    $("option:slected").change(change_dropdown_menu)

    $("select").change(change_dropdown_menu);

    


}


jQuery(document).ready(setup)
