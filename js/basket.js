const basketBtn = document.querySelectorAll(".basket-btn , .shop__bag");
const basket = document.querySelector(".basket");

const basketBtnClose = document.querySelector(".btn-close");
const btnCheckout = document.querySelector(".btn-checkout");
const btnCalendarOpen = document.querySelector(".btn-calendar-open");
const mobileNav = document.querySelector(".fix-nav");
const basketWrapper = document.querySelector(".basket__wrapper");
//Получим высоту footer'а
const footer = document.querySelector(".footer").offsetHeight;
/* go to checkout */
btnCheckout?.addEventListener("click", (e) => {
  e.preventDefault();
  toggleClassActive();
  document.body.classList.remove("active");
});
/* Ф-ция открытия и закрытия корзины */
const toggleClassActive = () => {
  document.body.classList.add("active");
  basket.classList.toggle("active");
  mobileNav.classList.remove("--show");
};

basketBtn.forEach((item) => {
  item.addEventListener("click", toggleClassActive);
});

basketBtnClose.addEventListener("click", () => {
  toggleClassActive();
  document.body.classList.remove("active");
});

/* Если нажать на серую область */
basket.addEventListener("click", (event) => {
  const target = event.target.closest(".basket__wrapper");
  if (!target) {
    toggleClassActive();
    document.body.classList.remove("active");
  } else return;
});

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

/* при нажатии на один из них будет сворачиватся меню */
const mass = document.querySelectorAll(".contact-btn");
if (mass) {
  mass.forEach((item) => {
    item.addEventListener("click", () => {
      mobileNav.classList.remove("--show");
      document.body.classList.remove("active");
    });
  });
}



