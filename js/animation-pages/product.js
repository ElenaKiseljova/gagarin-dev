animateFadeOutBottom(".product-about__slider", ".swiper");
animateFadeOutBottom(".calendar ", ".calendar__wrapper > *");
animateFadeOutBottom(".product-description ", ".product-description > *");
/* На экранах < 1023 анимации описания тована не будет */
if (document.body.offsetWidth > 1023) {
  animateFadeOutBottom(".product-about__center", ".product-about__center > *");
}
