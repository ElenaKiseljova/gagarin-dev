document.addEventListener("DOMContentLoaded", () => {
  /* Home */

  animateFadeOutBottom(".intro__inner", ".intro__inner *");
  animateFadeOutBottom(".products__grid", ".products__item");
  animateFadeOutBottom(".filter__left-box", ".filter__left-box li ");
  animateFadeOutBottom(".about__title", ".about__title span");
  animateFadeOutBottom(".list", ".list__item");
  animateOpacity(".statistics__box", ".statistics__item-wrapper");
  animateFadeOutBottom(".message__form", ".input__wrapp");
  animateFadeOutBottom(".btn-group", ".btn");
  animateFadeOutBottom(".about__content", ".about__content p");
  animateFadeOutBottom(".equipment-rental", ".equipment-rental__left *");
  animateFadeOutBottom(".about__list", ".about__list *");
  animateFadeOutBottom(".basket", ".btn-show");
  /* Product */

  animateFadeOutBottom(".product-about__slider", ".slider");
  animateFadeOutBottom(".calendar ", ".calendar__wrapper > *");
  animateFadeOutBottom(".product-description ", ".product-description > *");
  /* На экранах < 1023 анимации описания тована не будет */
  if (document.body.offsetWidth > 1023) {
    animateFadeOutBottom(
      ".product-about__center",
      ".product-about__center > *"
    );
  }

  /* Privacy */
  animateFadeOutBottom(".privacy__inner", ".privacy__inner h1");
  animateFadeOutBottom(".privacy__inner", ".privacy__inner p");
  animateFadeOutBottom(".privacy__item", ".privacy__item > *");
  animateFadeOutBottom(".basket__center", ".basket__center > *");
  /* For Circles */
  const items = document.querySelectorAll(".statistics__item-wrapper");
  items.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      parallax(event);
    });
    item.addEventListener("mouseleave", (event) => {
      resetParallax(event);
    });
  });
});
