const calendar = document.querySelector(".product-about__calendar");
const calendarClose = document.querySelector(".calendar__close");
const calendarBtn = document.querySelector(".btn-calendar-open");
/* При загрузке страницы получаем ширину дока */
let documentWidth = document.querySelector("body").clientWidth;
checkWidth(documentWidth);

function checkWidth(param) {
  calendarBtn?.addEventListener("click", (e) => {
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

const calendarItem = document.querySelectorAll(".calendar__item");
const elems = [...document.querySelectorAll(".calendar__item")];
let start, end;
let countClicks = 0;
calendarItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    /* Превый клик - выбрать день начала аренды */
    if (countClicks == 0) {
      countClicks++;
      const passed = e.target.closest(".passed");

      if (passed) return;
      else {
        calendarItem.forEach((item) => {
          item.classList.remove("plan");
          item.classList.remove("include");
          item.classList.remove("a");
        });

        item.classList.add("plan");
        calendarItem.forEach((item, index) => {
          if (item.classList.contains("plan")) {
            start = index + 1;
            console.log("start=>", start);
          }
        });
      }
    } else if (countClicks == 1) {
      /* Второй клик - выбрать день окончания аренды */
      item.classList.add("plan");
      calendarItem.forEach((item, index) => {
        if (item.classList.contains("plan")) {
          end = index;
          console.log("end=>", end);
        }
      });
      /* Если точка старта > конца */
      if (start > end) {
        calendarItem.forEach((item) => {
          item.classList.remove("plan");
        });
      }

      elems.slice(start, end - elems.length).forEach((item) => {
        item.classList.add("include");
      });

      countClicks = 0;
    }
  });
});
