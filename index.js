var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName("back");


function frontend(){
    
     back.style.display = "none"
}

function backend(){
    front.style.display= "none";
}

function all (){
    back.style.display = "block"
    front.style.display= "block";
}