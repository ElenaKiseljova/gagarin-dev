$(window).scroll(function () {
  const footer = document.querySelector(".footer").offsetHeight;
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    document.querySelector(
      ".shop__bag"
    ).style.transform = `translateY(${-footer}px)`;
  } else {
    document.querySelector(".shop__bag").style.transform = `translateY(0)`;
  }
});
