// slide logic
const categoriesBox = document.getElementsByClassName("category-box");
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  slideIndex = n;
  if (n >= categoriesBox.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = categoriesBox.length;
  }
  for (i = 0; i < categoriesBox.length; i++) {
    categoriesBox[i].setAttribute("style", "display: none;");
  }
  for (i = n; i < n + 3; i++) {
    categoriesBox[i].setAttribute("style", "display: block;");
  }
}
