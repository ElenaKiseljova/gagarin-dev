const form = document.querySelector(".message__form");
if (form) {
  const inpust = form.querySelectorAll(".message__input");
  inpust.forEach((item) => {
    item.addEventListener("focus", () => {
      item.nextElementSibling.classList.add("active");
    });

    item.addEventListener("blur", () => {
      if (!item.value.trim()) {
        item.nextElementSibling.classList.remove("active");
        item.value = "";
      } else return;
    });
  });

  if (typeof window.additional !== 'undefined') {
    window.additional.forms(form);
  }
}

