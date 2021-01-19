document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurger = document.querySelector('.navbar-burger');
  $navbarBurger.addEventListener('click', () => {
    const nav = $navbarBurger.dataset.nav;
    const $target = document.getElementById(nav);
    $navbarBurger.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });
});