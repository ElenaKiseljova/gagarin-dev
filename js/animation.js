gsap.config({
  nullTargetWarn: false,
});
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

const defs = {
  duration: 0.5,
};

const scrollTriggerInstance = (el, animation) => {
  return ScrollTrigger.create({
    animation,
    trigger: el,
    start: "top bottom",
  });
};
const splitText = (el, type) => {
  return new SplitText(el, type);
};

const animateLinkOnHover = () => {
  const allLinks = document.querySelectorAll(
    ".social__item, .nav__link, .contacts__link"
  );

  allLinks.forEach((link) => {
    link.setAttribute("data-hover", link.textContent);
  });
};
const animateSplittedText = (el, text) => {
  const spText = splitText(text, { type: "lines", linesClass: "line" });
  const tl = gsap.timeline(defs);

  tl.fromTo(
    spText.lines,
    { yPercent: 100, rotationX: 80, opacity: 0 },
    { yPercent: 0, rotationX: 0, opacity: 1, stagger: 0.1 }
  );
  scrollTriggerInstance(el, tl);
};
const animateActiveItem = (el, items) => {
  gsap.to(items, { opacity: 0.5 });
  gsap.to(el, { opacity: 1 });
};
const animateFadeOutBottom = (el, items) => {
  const tl = gsap.timeline(defs);
  gsap.set(items, { opacity: 0 });
  tl.fromTo(
    items,
    { yPercent: 30, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.1 }
  );
  scrollTriggerInstance(el, tl);
  return tl;
};
const animateFadeOutRt = (el, items) => {
  const tl = gsap.timeline(defs);
  gsap.set(items, { opacity: 0, xPercent: 30 });
  tl.to(items, { opacity: 1, xPercent: 0, stagger: 0.1 });

  scrollTriggerInstance(el, tl);
};
const animateOpacity = (el, items) => {
  const tl = gsap.timeline(defs);
  tl.fromTo(items, { opacity: 0 }, { opacity: 1, stagger: 0.1 });
  scrollTriggerInstance(el, tl);
};
const animateOnScroll = (container, el, el2) => {
  const items = Array.from(container.children).filter(
    (el) =>
      !el.classList.contains("pin-spacer") &&
      !el.classList.contains("intro--about")
  );

  return ScrollTrigger.matchMedia({
    "(min-width:1024px)"() {
      gsap.set(items, { opacity: 0 });
      const tl = gsap.timeline();
      const scrollInstance = ScrollTrigger.create({
        trigger: container,
        scrub: 1,
        start: "top top",
        pinSpacing: true,
        end: "+=300",
        pin: true,
        animation: tl,
      });

      tl.to(el, { yPercent: -100, duration: 0.5 }).to(
        items,
        { opacity: 1 },
        "-=0.5"
      );

      return scrollInstance;
    },
    "(max-width:1023.98px)"() {
      gsap.to(container, { clearProps: "all" });
      gsap.set(items, { opacity: 1 });
    },
  });
};

const parallax = ($event) => {
  const wrapper = $event.currentTarget;
  const el = Array.from(wrapper.children).find((el) => el);

  const e = $event;

  const mouseX = e.pageX - wrapper.offsetLeft;
  const mouseY = e.pageY - wrapper.offsetTop;

  const percX = ((mouseX - wrapper.offsetWidth) / 2 / wrapper.offsetWidth) * 50;
  const percY =
    ((mouseY - wrapper.offsetHeight) / 2 / wrapper.offsetHeight) * 30;

  gsap.to(el, { x: percX, y: percY, scale: 0.9 });
  gsap.to(el.children, { x: percX, y: percY });
};
const resetParallax = ($event) => {
  const wrapper = $event.currentTarget;
  const el = Array.from(wrapper.children).find((el) => el);
  gsap.to(el, { x: 0, y: 0, scale: 1 });
  gsap.to(el.children, { x: 0, y: 0 });
};
const animateProductToCart = (el, pos, cart) => {
  if (window.innerWidth <= 650) {
    gsap.to(cart, {
      onStart: () => {
        cart.classList.add("active");
      },
      onComplete: () => {
        cart.classList.remove("active");
      },
    });
    return;
  }

  const image = `<img class="phantom-image" src=${el} />`;
  pos.insertAdjacentHTML("afterbegin", image);
  const elem = document.querySelector(".phantom-image");
  const elParams = elem.getBoundingClientRect();

  const innerWidth = window.innerWidth + elParams.width;
  const yMove =
    window.innerHeight - 200; /* - 80 - elParams.top + elParams.height / 2 */
  const xMove = innerWidth; /* / 2 + elParams.width / 2 */

  gsap.set(elem, {
    position: "absolute",
    x: "50%",
    y: "50%",
  });
  gsap.to(elem, {
    x: xMove,
    y: yMove,
    scale: 0.01,
    duration: 3,
    onComplete: () => {
      elem.remove();
    },
  });
  gsap.set(elem, {
    opacity: 0,
    delay: 1.5,
  });
};
/* const cart = document.querySelector(".add-to-cart");
cart.addEventListener("click", (e) => {
  const el = e.target.dataset.src;
  const pos = document.querySelector(".slider");
  const shopBag = document.querySelector(".shop__bag");
  animateProductToCart(el, pos, shopBag);
});
 */
