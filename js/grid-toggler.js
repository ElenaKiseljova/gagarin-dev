const buttons = document.querySelectorAll(".btn__view-mode");
const grid = document.querySelectorAll(".products__grid");
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    animateFadeOutBottom(".products__grid", ".products__item");
    buttons.forEach((item) => item.classList.remove("btn__view-mode--action"));
    let key = item;
    grid.forEach((item) => {
      item.className = key.dataset.class;
    });
    item.classList.add("btn__view-mode--action");
  });
});
