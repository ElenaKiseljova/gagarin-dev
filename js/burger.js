const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".fix-nav");
const closeNav = document.querySelector(".close__burger");
function openMenu() {
  document.body.classList.toggle("active");
  navigation.classList.toggle("--show");
}
burger.addEventListener("click", openMenu);
closeNav.addEventListener("click", openMenu);


