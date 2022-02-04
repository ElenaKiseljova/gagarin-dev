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
    //Переопределение анимации
  });
});
window.resetAnimation = function () {
  animateFadeOutBottom(".about__title", ".about__title span");
  animateFadeOutBottom(".about__content", ".about__content p");
  animateFadeOutBottom(".about__list", ".about__list *");
  animateFadeOutBottomS(".equipment-rental", ".equipment-rental__left *");
  animateOpacity(".statistics__box", ".statistics__item-wrapper");
  animateFadeOutBottomS(".message__form", ".message__form > *");
};
window.resetAnimation();
