const header = document.getElementById('header');
const links = document.querySelectorAll('.color-links');
window.addEventListener('scroll', scrollColor);
function scrollColor() {
  if (window.pageYOffset >= 200) {
    header.className = 'header-color';
    links.forEach((i) => {
      i.className = 'color-links2';
    });
  } else {
    header.className = '';
    links.forEach((i) => {
      i.className = 'color-links';
    });
  }
}
