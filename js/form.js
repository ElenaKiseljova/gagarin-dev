const form = document.querySelector(".message__form");
const validate = {
  email(email) {
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.trim().length === 0) {
      return false;
    }
    return !!regex.test(email.toLowerCase());
  },
  name(value) {
    const pattern = /^[\p{L} ]+$/gu;
    return !!pattern.test(value);
  },
  phone(value) {
    const pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;

    return !!pattern.test(value);
  },
  drawError(field, valid) {
    if (valid) {
      field.parentNode.classList.remove("error");
    } else {
      field.parentNode.classList.add("error");
    }
  },
  start(form) {
    let valid = true;

    const fields = form.querySelectorAll("input");

    fields.forEach((field) => {
      if (field.name === "name") {
        valid = validate.name(field.value);

        validate.drawError(field, valid);
      } else if (field.type === "tel") {
        valid = validate.phone(field.value);

        validate.drawError(field, valid);
      } else if (field.type === "email") {
        valid = validate.email(field.value);

        validate.drawError(field, valid);
      }
    });

    return valid;
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

    const valid = validate.start(form);

    if (valid && typeof window.additional !== "undefined") {
      window.additional.forms(form);
    }
  });

  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[type="email"]');
  const tel = form.querySelector('input[type="tel"]');
  const city = form.querySelector('input[name="city"]');
  name.addEventListener("input", () => {
    validate.drawError(name, validate.name(name.value));
  });
  city.addEventListener("input", () => {
    validate.drawError(city, validate.name(city.value));
  });
  email.addEventListener("input", () => {
    validate.drawError(email, validate.email(email.value));
  });
  tel.addEventListener("input", () => {
    validate.drawError(tel, validate.phone(tel.value));
  });
}
