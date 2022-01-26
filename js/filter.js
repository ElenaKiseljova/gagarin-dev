const filterBtns = document.querySelectorAll(".filter__btn");
filterBtns.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    filterBtns.forEach((item) => item.classList.remove("filter__btn-action"));
    item.classList.add("filter__btn-action");
  });
});
