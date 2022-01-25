const form = document.querySelector(".message__form");
const inpust = form.querySelectorAll(".message__input");
inpust.forEach((item) => {
  item.addEventListener("focus", () => {
    item.nextElementSibling.classList.add("active");
  });

  item.addEventListener("blur", () => {
    if (!item.value.trim()) {
      item.nextElementSibling.classList.remove("active");
    } else return;
  });
});
