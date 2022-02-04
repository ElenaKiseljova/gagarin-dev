const calendar = document.querySelector(".product-about__calendar");
const calendarClose = document.querySelector(".calendar__close");
const calendarBtn = document.querySelector(".btn-calendar-open");
/* При загрузке страницы получаем ширину дока */

let deviceWidthDefault = window.innerWidth && document.documentElement.clientWidth ?
  Math.min(window.innerWidth, document.documentElement.clientWidth) :
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.getElementsByTagName('body')[0].clientWidth;

checkWidth(deviceWidthDefault);

function checkWidth(param) {
  calendarBtn?.addEventListener("click", (e) => {
    if (param < 1440) {
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

window.frontCalendarItemsActivate = () => {
  const calendarItem = document.querySelectorAll(".calendar__item");
  const elems = [...document.querySelectorAll(".calendar__item")];
  let start, end;
  let countClicks = 0;
  calendarItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      const passed = e.target.closest(".passed");
      /* Проверка на клик именно по тем дням, которые доступны */
      if (passed) return;
      else {
        /* Превый клик - выбрать день начала аренды */
        if (countClicks == 0) {
          countClicks++;

          calendarItem.forEach((item) => {
            item.classList.remove("plan");
            item.classList.remove("include");
            item.classList.remove("a");
          });

          item.classList.add("plan");
          calendarItem.forEach((item, index) => {
            if (item.classList.contains("plan")) start = index + 1;
          });
        } else if (countClicks == 1) {
          /* Второй клик - выбрать день окончания аренды */

          item.classList.add("plan");
          calendarItem.forEach((item, index) => {
            if (item.classList.contains("plan")) end = index;
          });
          /* Если точка старта > конца */
          if (start > end)
            calendarItem.forEach((item) => item.classList.remove("plan"));

          elems
            .slice(start, end - elems.length)
            .forEach((item) => item.classList.add("include"));

          countClicks = 0;
        }
      }
    });
  });
};

window.frontCalendarItemsActivate();
