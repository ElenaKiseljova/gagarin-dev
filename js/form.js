const form = document.querySelector(".message__form");
const validate = {
  validateEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim().length === 0) {
      return false;
    }
    return !!regex.test(email.toLowerCase());
  },
  validateName(value) {
    const pattern = /^[\p{L} ]+$/gu;
    return !!pattern.test(value);
  },
  validatePhone(value) {
    const pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;

    return !!pattern.test(value);
  },
};
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

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (typeof window.additional !== "undefined") {
      window.additional.forms(form);
    }
  });

  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[type="email"]');
  const tel = form.querySelector('input[type="tel"]');

  name.addEventListener("input", () => {
    if (validate.validateName(name.value)) {
      name.parentNode.classList.remove("error");
    } else {
      name.parentNode.classList.add("error");
    }
  });
  email.addEventListener("input", () => {
    if (validate.validateEmail(email.value)) {
      email.parentNode.classList.remove("error");
    } else {
      email.parentNode.classList.add("error");
    }
  });
  tel.addEventListener("input", () => {
    if (validate.validatePhone(tel.value)) {
      tel.parentNode.classList.remove("error");
    } else {
      tel.parentNode.classList.add("error");
    }
  });
}
