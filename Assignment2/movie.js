function process_response(data){
    console.log(data);
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
}
function call_ajax(){
    x = $("#movie_name").val();
    $.ajax(
    {
        "url": `https://api.themoviedb.org/3/search/movie?api_key=fd2d8ec8efdbe5bd972028cd7178cd3e&query=${x}`,
        "type": "get",
        "success" : process_response,
    })
}   


function display_image(){

    photo = $(this).attr('id');
    $("#right").html(`<img src="http://image.tmdb.org/t/p/w500/${photo}" width=100%">`)
}


function setup() {
    console.log('results');
    $('#get_movie').click(call_ajax);
    $("body").on("click", ".image_button", display_image)
}


jQuery(document).ready(setup)
