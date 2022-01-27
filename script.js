nav = document.getElementsByTagName("nav")[0];
nav_btn = document.getElementsByTagName("button")[0];
var open = false;
function toggle(){
    if(open){
        nav_btn.classList.remove("fa-close");
        nav_btn.classList.add("fa-bars");
        nav.style.display = "none";
        open = false;
    }else{
        nav_btn.classList.add("fa-close");
        nav_btn.classList.remove("fa-bars");
        nav.style.display = "inline-block";
        open = true;
    }
}
function check_screen(){
    if(window.innerWidth >= 701){
        nav.style.display = "inline-block";
    }else{
        if(!open){
            nav.style.display = "none";
        }
    }
}
/* AOS ANIMATION */