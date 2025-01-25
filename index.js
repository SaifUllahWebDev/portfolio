var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName("backs");

function frontend() {
    // Show front-end projects, hide back-end projects
    for (var i = 0; i < front.length; i++) {
        front[i].style.display = "block";
    }
    for (var i = 0; i < back.length; i++) {
        back[i].style.display = "none";
    }
}

function backend() {
    // Show back-end projects, hide front-end projects
    for (var i = 0; i < front.length; i++) {
        front[i].style.display = "none";
    }
    for (var i = 0; i < back.length; i++) {
        back[i].style.display = "block";
    }
}

function all() {
    // Show all projects
    for (var i = 0; i < front.length; i++) {
        front[i].style.display = "block";
    }
    for (var i = 0; i < back.length; i++) {
        back[i].style.display = "block";
    }
}
