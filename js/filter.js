const filterBtns = document.querySelectorAll(".filter__btn");
filterBtns.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    filterBtns.forEach((item) => item.classList.remove("filter__btn-action"));
    item.classList.add("filter__btn-action");

    if (typeof window.additional !== "undefined") {
      window.additional.filters(item);
    }
  });
});

const search = document.getElementById("search");
const clearField = document.querySelector(".filter__btn-clear");

clearField.addEventListener("click", (e) => {
  search.value = "";
  clearFieldBlock();
});
search.addEventListener("focus", () => {
  search.classList.add("focus");
});
search.addEventListener("input", (e) => {
  if (search.value.length == 0) {
    clearField.classList.remove("active");
  } else {
    clearField.classList.add("active");
  }
});
search.addEventListener("blur", (e) => {
  if (search.value == "" || !search.value.trim()) {
    clearFieldBlock();
  } else return;
});

function clearFieldBlock() {
  search.classList.remove("focus");
  clearField.classList.remove("active");
  search.value = "";
}
