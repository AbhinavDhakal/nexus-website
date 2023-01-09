// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyNav();
};

// Get the navbar
var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var list = document.getElementById("list");

var sticky = navbar.offsetHeight - 10;
function stickyNav() {
  console.log(sticky, window.pageYOffset);
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed", "h-14");
    navbar.classList.remove("h-20");
    logo.classList.add("scale-90");
  } else {
    navbar.classList.add("h-20");
    navbar.classList.remove("h-14");
    logo.classList.remove("scale-90");
  }
}

let navBtn = document.getElementById("navButton");
let mobNav = document.getElementById("mobNav");
let navClose = document.getElementById("navClose");

navClose.addEventListener("click", closeNav);
navBtn.addEventListener("click", openNav);

function closeNav() {
  navBtn.classList.remove("hidden");
  list.classList.add("hidden");
  list.classList.remove("flex");
  navClose.classList.add("hidden");
}
function openNav() {
  navBtn.classList.add("hidden");
  list.classList.remove("hidden");
  list.classList.add("flex");
  navClose.classList.remove("hidden");
}

function sendEmail() {
  return;
  clientEmail = document.getElementById("contactEmail").value;
  clientName = document.getElementById("contactName").value;
  clientSubject = document.getElementById("contactSubject").value;
  clientPhone = document.getElementById("contactPhone").value;
  clientMessage = document.getElementById("contactMessage").value;

  fetch("http://3b01-103-148-23-183.ngrok.io", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientEmail: clientEmail,
      clientName: clientName,
      clientSubject: clientSubject,
      clientPhone: clientPhone,
      clientMessage: clientMessage,
      contactEmail: "adhakalsir@gmail.com",
    }),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
