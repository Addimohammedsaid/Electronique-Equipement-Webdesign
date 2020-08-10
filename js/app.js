var nav = document.getElementById("header");
window.onscroll = function () {
  console.log(nav.scrollHeight);
  nav.classList.toggle("scrolled", document.scrollingElement.scrollTop > 50);
};
