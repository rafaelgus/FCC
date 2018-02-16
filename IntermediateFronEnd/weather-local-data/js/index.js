//299 thunderstorm:https://static.pexels.com/photos/816033/pexels-photo-816033.jpeg
//499 drizzle:https://c1.staticflickr.com/5/4677/25150740527_c7a9f21a13_b.jpg
// 599 rain:https://static.pexels.com/photos/459451/pexels-photo-459451.jpeg
//699 snow:https://static.pexels.com/photos/235621/pexels-photo-235621.jpeg
//799 fog:https://static.pexels.com/photos/89773/wolf-wolves-snow-wolf-landscape-89773.jpeg
//800 Clear: https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg
//>800 Cloudy :https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg
//appidkey:ddc22babad2a49ce6838f7519bd0de41

/*$(function(){
  
  let C = false;
  let apiData;
  
  backgroundImg = [
    
    'https://static.pexels.com/photos/816033/pexels-photo-816033.jpeg','https://c1.staticflickr.com/5/4677/25150740527_c7a9f21a13_b.jpg','https://static.pexels.com/photos/459451/pexels-photo-459451.jpeg','https://static.pexels.com/photos/235621/pexels-photo-235621.jpeg','https://static.pexels.com/photos/89773/wolf-wolves-snow-wolf-landscape-89773.jpeg',' https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg','https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg'
  ]  
  // Function transform  c to f - f to c
  function displayTemp(F,C){
    if(C) return Math.round((F-32)*(5/9)) + '&deg; C';
    return Math.round(F) + '&deg; F';
  }
  
  //Function Render
  $.getJSON('https://freegeoip.net/json/') 
     .done (function(location){
    console.log(location);
  })
  
  
  
})*/
if (navigator.geolocation) {				
 navigator.geolocation.getCurrentPosition(showPosition);
} else {
 alert('Geolocation is not supported in your browser');
}

function showPosition(position) {
  var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

  $.getJSON(api, function(data){
    // Getting Weather Details
    $("#place").html(data.name + ", " + data.sys.country);
    $("#windSpeed").html(data.wind.speed + "km/h   ");
    $("#humidity").html(data.main.humidity + "%     ");
    $("#celsius").html(data.main.temp.toFixed(1) + "°C  ");
    $("#temp").html(data.main.temp.toFixed(1));
    $("#description").html(data.weather[0].description);
    
    // Get Current Date and Time
    var dt = new Date();
    $("#dateTime").html(dt.getDate() + "/" + (dt.getMonth()+1)  + "/" + dt.getFullYear() + " "+ dt.getHours() + ":" + dt.getMinutes());
    
    // Weather Icon Conditions
    if(data.weather[0].description.indexOf("clouds")!== -1){
      $("#weather-icon").html("<i class='wi wi-day-cloudy' style='font-size: 2.5em'></i>");   
    }
    else if(data.weather[0].description.indexOf("clear sky")!== -1){
      $("#weather-icon").html("<i class='wi wi-day-sunny' style='font-size: 2.5em'></i>");
    }
    else if(data.weather[0].description.indexOf("rain")!== -1){
      $("#weather-icon").html("<i class='wi wi-rain-wind' style='font-size: 2.5em'></i>");
    }
    else if(data.weather[0].description.indexOf("thunderstorm")!== -1){
      $("#weather-icon").html("<i class='wi wi-thunderstorm' style='font-size: 2.5em'></i>");
    }
    else if(data.weather[0].description.indexOf("snow")!== -1){
      $("#weather-icon").html("<i class='wi wi-snow' style='font-size: 2.5em'></i>");
    }
    else if(data.weather[0].description.indexOf("mist")!== -1){
      $("#weather-icon").html("<i class='wi wi-fog' style='font-size: 2.5em'></i>");
    }
    else if(data.weather[0].description.indexOf("mist")!== -1){
      $("#weather-icon").html("<i class='wi wi-fog' style='font-size: 2.5em'></i>");
    }
  });
}

// Temperature Conversion
function getFahrenheit() {
  $("#btnCelsius").css("color", "#2d314a");
  $("#btnFahrenheit").css("color", "#fff");
  
  $("#temp").html(((parseInt($("#temp").text()) * 1.8) + 32).toFixed(2));
}
                                           
function getCelsius() {
  $("#btnCelsius").css("color", "#fff");
  $("#btnFahrenheit").css("color", "#2d314a");
  
  $("#temp").html(Math.round((parseInt($("#temp").text()) - 32)/ 1.8).toFixed(1));
}