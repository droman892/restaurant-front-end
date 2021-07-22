window.onscroll = function () { myFunctionSticky() };

var navbar = document.getElementById("myNavbar");

var sticky = navbar.offsetTop;

function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}