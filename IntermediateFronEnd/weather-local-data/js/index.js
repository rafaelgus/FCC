//299 thunderstorm:https://static.pexels.com/photos/816033/pexels-photo-816033.jpeg
//499 drizzle:https://c1.staticflickr.com/5/4677/25150740527_c7a9f21a13_b.jpg
// 599 rain:https://static.pexels.com/photos/459451/pexels-photo-459451.jpeg
//699 snow:https://static.pexels.com/photos/235621/pexels-photo-235621.jpeg
//799 fog:https://static.pexels.com/photos/89773/wolf-wolves-snow-wolf-landscape-89773.jpeg
//800 Clear: https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg
//>800 Cloudy :https://static.pexels.com/photos/207962/pexels-photo-207962.jpeg
//appidkey:ddc22babad2a49ce6838f7519bd0de41

$(function(){
  
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
  
  
  
})