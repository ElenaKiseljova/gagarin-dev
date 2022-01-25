$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
});

/* Basket*/

const basketBtn = document.querySelector(".basket-btn");
const basket = document.querySelector(".basket");
const basketBtnClose = document.querySelector(".btn-close");
const btnCalendarOpen = document.querySelector(".btn-calendar-open");
const calendar = document.querySelector(".product-about__calendar");
const calendarClose = document.querySelector(".calendar__close");

function foo() {
  document.body.classList.toggle("active");
  basket.classList.toggle("active");
}
basketBtn.addEventListener("click", (event) => {
  event.preventDefault();
  foo();
  animateOpacity(".basket__center", ".basket__center  a");
});
basketBtnClose.addEventListener("click", foo);
btnCalendarOpen.addEventListener("click", (evt) => {
  evt.preventDefault();
  calendar.classList.add("active");
  document.body.classList.add("active");
});
calendarClose.addEventListener("click", () => {
  calendar.classList.remove("active");
  document.body.classList.remove("active");
});
