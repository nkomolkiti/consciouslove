//only make active during exhibition -- now INACTIVE

$(document).ready(function(){
//GO TO PAGE IF NO INTERACTION------------------------
 function redirect(){
 window.location.href = "chapter-1.html";
 }

 var initial=setTimeout(redirect,300000); //set to 6 mins >> 360000

 $(document).click(function(event) { 
 clearTimeout( initial ); //when click, it resets a function
 initial=setTimeout(redirect,480000); //set to 10 mins >> 600000
 });

});//end doc ready