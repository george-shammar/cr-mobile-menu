const ham = document.querySelector('.menu-bars');
const closeIcon = document.querySelector('.x-bars');
const links = document.querySelector('.desktop-nav');

ham.onclick = () => {
  ham.style.display = 'none';
  closeIcon.style.display = 'block';
  links.style.display = 'block';
};

closeIcon.onclick = () => {
  closeIcon.style.display = 'none';
  ham.style.display = 'block';
  links.style.display = 'none';
};

const navLink = document.querySelector('#portfolio');
navLink.onclick = () => {
  links.style.display = 'none';
  closeIcon.style.display = 'none';
}