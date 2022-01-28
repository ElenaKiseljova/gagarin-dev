const calendar = document.querySelector(".product-about__calendar");
const calendarClose = document.querySelector(".calendar__close");
const calendarBtn = document.querySelector(".btn-calendar-open");
/* При загрузке страницы получаем ширину дока */
let documentWidth = document.querySelector("body").clientWidth;
checkWidth(documentWidth);

function checkWidth(param) {
  calendarBtn.addEventListener("click", (e) => {
    if (param < 1439) {
      e.preventDefault();
      calendar.classList.add("active");
      document.body.classList.add("active");
    } else return;
  });
}

calendar.addEventListener("click", (e) => {
  const target = e.target.closest(".calendar");
  if (!target) {
    calendar.classList.remove("active");
    document.body.classList.remove("active");
  }
});
/* Закрыть */
calendarClose.addEventListener("click", () => {
  calendar.classList.remove("active");
  document.body.classList.remove("active");
});
