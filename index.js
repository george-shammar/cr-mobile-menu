const ham = document.querySelector('.menu-bars');
const closeIcon = document.querySelector('.x-bars');
const links = document.querySelector('.desktop-nav');

ham.onclick = () => {
    ham.style.display = 'none';
    closeIcon.style.display = 'block';
    links.style.display = 'block';
};

close.onclick = () => {
    closeIcon.style.display = 'none';
    ham.style.display = 'block';
    links.style.display = 'none';
  };
  