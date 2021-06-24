//execute myFunctionSticky function when user scrolls page
window.onscroll = function () { myFunctionSticky() };

//get navbar
var navbar = document.getElementById("myNavbar");

//get navbar offset position
var sticky = navbar.offsetTop;

//add sticky class to navabr when when you reach the scroll position; remove sticky when you leave scroll position
function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}