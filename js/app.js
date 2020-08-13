var nav = document.getElementById("header");
window.onscroll = function () {
  console.log(nav.scrollHeight);
  nav.classList.toggle("scrolled", document.scrollingElement.scrollTop > 50);
};

var menu1 = document.getElementById("menu1");

menu1.onclick = function () {
  document.getElementById("sub1").classList.toggle("show");
};
