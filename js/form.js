const form = document.querySelector(".message__form");
const validate = {
  email(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    const fields = form.querySelectorAll('input');

    fields.forEach((field) => {
      if (field.name === 'name') {
        valid = validate.name(field.value);

        validate.drawError(field, valid);
      } else if (field.type === 'tel') {
        valid = validate.phone(field.value);

        validate.drawError(field, valid);
      } else if (field.type === 'email') {
        valid = validate.email(field.value);

        validate.drawError(field, valid);
      }
    });

    return valid;
  }
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

    if (valid && (typeof window.additional !== "undefined")) {
      window.additional.forms(form);
    }
  });

  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[type="email"]');
  const tel = form.querySelector('input[type="tel"]');

  name.addEventListener("input", () => {
    validate.drawError(name, validate.name(name.value));
  });
  email.addEventListener("input", () => {
    validate.drawError(email, validate.email(email.value));
  });
  tel.addEventListener("input", () => {
    validate.drawError(tel, validate.phone(tel.value));
  });
}
