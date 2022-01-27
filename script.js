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
window.addEventListener('scroll', function() {
	var elements = document.getElementsByClassName('animation1');
    var elements2 = document.getElementsByClassName('animation2');
    var elements3 = document.getElementsByClassName('animation3');
    var elements4 = document.getElementsByClassName('animation4');
    var elements5 = document.getElementsByClassName('animation5');

	// checking whether fully visible
	/*if(position.top >= 0 && position.bottom <= window.innerHeight) {
		element.classList.add("animate__animated");
        element.classList.add("animate__bounce");
	}*/

	// checking for partial visibility
	/*if(position.top < window.innerHeight && position.bottom >= 0) {
		console.log('Element is partially visible in screen');
	}*/

    for(var i = 0; i < elements.length; i++){
        var position = elements[i].getBoundingClientRect();
        if(position.top < window.innerHeight - 200 && position.bottom >= 0) {
            elements[i].classList.add("animate__animated");
            elements[i].classList.add("animate__bounce");
        }else{
            elements[i].classList.remove("animate__animated");
            elements[i].classList.remove("animate__bounce");
        }
    }

    for(var i = 0; i < elements2.length; i++){
        var position = elements2[i].getBoundingClientRect();
        if(position.top < window.innerHeight - 200 && position.bottom >= 0) {
            elements2[i].classList.add("animate__animated");
            elements2[i].classList.add("animate__rubberBand");
        }else{
            elements2[i].classList.remove("animate__animated");
            elements2[i].classList.remove("animate__rubberBand");
        }
    }

    for(var i = 0; i < elements3.length; i++){
        var position = elements3[i].getBoundingClientRect();
        if(position.top < window.innerHeight - 200 && position.bottom >= 0) {
            elements3[i].classList.add("animate__animated");
            elements3[i].classList.add("animate__swing");
        }else{
            elements3[i].classList.remove("animate__animated");
            elements3[i].classList.remove("animate__swing");
        }
    }

    for(var i = 0; i < elements4.length; i++){
        var position = elements4[i].getBoundingClientRect();
        if(position.top < window.innerHeight - 200 && position.bottom >= 0) {
            elements4[i].classList.add("animate__animated");
            elements4[i].classList.add("animate__flash");
        }else{
            elements4[i].classList.remove("animate__animated");
            elements4[i].classList.remove("animate__flash");
        }
    }

    for(var i = 0; i < elements5.length; i++){
        var position = elements5[i].getBoundingClientRect();
        if(position.top < window.innerHeight - 200 && position.bottom >= 0) {
            elements5[i].classList.add("animate__animated");
            elements5[i].classList.add("animate__shakeX");
        }else{
            elements5[i].classList.remove("animate__animated");
            elements5[i].classList.remove("animate__shakeX");
        }
    }
    
});