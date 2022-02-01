const basketBtn = document.querySelectorAll(".basket-btn , .shop__bag");
const basket = document.querySelector(".basket");

const basketBtnClose = document.querySelector(".btn-close");
const btnCalendarOpen = document.querySelector(".btn-calendar-open");
const mobileNav = document.querySelector(".fix-nav");
const basketWrapper = document.querySelector(".basket__wrapper");
//Получим высоту footer'а
const footer = document.querySelector(".footer").offsetHeight;

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
