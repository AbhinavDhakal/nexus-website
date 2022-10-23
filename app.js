// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var list =  document.getElementById("list")

var sticky = navbar.offsetHeight - 10;
function stickyNav() {

console.log(sticky,window.pageYOffset)
  if (window.pageYOffset > sticky) {

    navbar.classList.add("fixed","h-14","text-sm")
    navbar.classList.remove("h-20","text-lg")
    logo.classList.add("scale-75")

  } else {

    navbar.classList.remove("h-14","text-sm");
    navbar.classList.add("h-20","text-lg")
    logo.classList.remove("scale-75")
    
  }
}