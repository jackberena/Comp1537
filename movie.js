function f_1(data){
    console.log(data)
    $("#temp").html(data.main.temp)
    $('#p2').html(data.weather[0].description);
    x =data.weather[0].icon;
    console.log(x);
    $("#img1").attr("src", `http://openweathermap.org/img/wn/${x}@2x.png`);
}


function get_w_f(){
    y = $("#city_name").val();
    //ajax
    $.ajax(
        {
            "url":`https://api.themoviedb.org/3/search/movie?api_key=fd2d8ec8efdbe5bd972028cd7178cd3e&language=en-US&query=${y}&page=1&include_adult=false`,
  "type": "GET",
  "success": f_1
        }
    )
}

function setup(){
    console.log('s');
    $('#get_w').click(get_w_f);

}
$(document).ready(setup)

