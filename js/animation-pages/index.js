animateFadeOutBottom(".intro__inner", ".intro__inner *");
animateFadeOutBottom(".products__grid", ".products__grid > *");
animateFadeOutBottom(".filter__left-box", ".filter__left-box li ");
animateFadeOutBottom(".about__title", ".about__title span");
animateFadeOutBottom(".list", ".list__item");
animateOpacity(".statistics__box", ".statistics__item-wrapper");
animateFadeOutBottomS(".message__form", ".message__form > *");

animateFadeOutBottom(".about__content", ".about__content p");
animateFadeOutBottomS(".equipment-rental", ".equipment-rental__left *");
animateFadeOutBottom(".about__list", ".about__list *");

if (document.body.offsetWidth > 768) {
  const items = document.querySelectorAll(".statistics__item-wrapper");
  items.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      parallax(event);
    });
    item.addEventListener("mouseleave", (event) => {
      resetParallax(event);
    });
  });
}
