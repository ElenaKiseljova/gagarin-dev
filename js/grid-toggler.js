const buttons = document.querySelectorAll(".btn__view-mode");

window.viewMode = "";

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.class.includes("row")) {
      window.viewMode = "row";
    } else {
      window.viewMode = "";
    }

    animateFadeOutBottom(".products__grid", ".products__item");
    buttons.forEach((item) => item.classList.remove("btn__view-mode--action"));
    let key = item;

    const grid = document.querySelectorAll(".products__grid");
    grid.forEach((item) => {
      item.className = key.dataset.class;
    });
    item.classList.add("btn__view-mode--action");
  });
});
