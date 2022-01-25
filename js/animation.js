gsap.config({
  nullTargetWarn: false,
});
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

const defs = {
  duration: 0.5,
};
const initAllScrollTriggers = (init) => {
  const animations = ScrollTrigger.getAll().filter((el) => !el.pin);
  if (init) {
    animations.forEach((el) => el.animation.restart());
  }
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
const animateRocket = (el, item) => {
  const tl = gsap.timeline(defs);
  tl.to(item, {
    xPercent: 0,
    yPercent: 0,
    ease: "expo.out",
  });

  scrollTriggerInstance(el, tl);
  return tl;
};
const animateProductToCart = (el, pos, cart) => {
  if (window.innerWidth <= 650) {
    // gsap.to(cart,{onStart:()=>{

    //   cart.classList.add('active')
    // },onComplete:()=>{
    //   cart.classList.remove('active')
    // }})
    return;
  }

  const video = `<div class='product-item__wrapper' style='left:50%; transform:translateX(-50%) scale(0.2)'><video
class='product-item'
style='width:100%;'
autoplay
loop
muted
playsinline
>
<source src="${el}" />
</video>
</div>
`;
  pos.insertAdjacentHTML("afterbegin", video);
  const elem = document.querySelector(".product-item__wrapper");
  const elParams = elem.getBoundingClientRect();

  // const innerWidth=window.innerWidth+elParams.width;
  const yMove = window.innerHeight - 80 - elParams.top + elParams.height / 2;
  const xMove = window.innerWidth / 2 + elParams.width / 2;

  gsap.set(elem, { position: "absolute" });
  gsap.to(elem, {
    x: xMove,
    y: yMove,
    scale: 0.05,
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

const animateLogo = (el) => {
  const items = Array.from(el.children).filter((el) =>
    el.getAttribute("attributeName").includes("lt")
  );

  const getRandomCoords = () => {
    const posX = Math.floor(Math.random() * 45);
    const posY = Math.floor(Math.random() * 45);
    return { x: posX, y: posY };
  };

  return items.map((el) => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.repeatDelay(0);

    for (let i = 0; i < 30; i++) {
      tl.to(el, {
        xPercent: getRandomCoords().x,
        yPercent: getRandomCoords().y,
        ease: "power1.inOut",
        duration: 1,
      });
    }

    return tl;
  });
};

const parallax = ($event)=> {
	
	const wrapper = $event.currentTarget
	const el = Array.from(wrapper.children).find((el) => el)

	const e = $event

	const mouseX = e.pageX - wrapper.offsetLeft
	const mouseY = e.pageY - wrapper.offsetTop

	const percX =
		((mouseX - wrapper.offsetWidth) / 2 / wrapper.offsetWidth) * 50
	const percY =
		((mouseY - wrapper.offsetHeight) / 2 / wrapper.offsetHeight) * 30

	gsap.to(el, { x: percX, y: percY, scale: 0.9 })
	gsap.to(el.children, { x: percX, y: percY })
}
const resetParallax = ($event)=> {
	const wrapper = $event.currentTarget
	const el = Array.from(wrapper.children).find((el) => el)
	gsap.to(el, { x: 0, y: 0, scale: 1 })
	gsap.to(el.children, { x: 0, y: 0 })
}


/* Home */

animateFadeOutBottom(".intro__inner", ".intro__inner *");
animateFadeOutBottom(".products__grid", ".products__item");
animateFadeOutBottom(".filter__left-box", ".filter__left-box li ");
animateFadeOutBottom(".about__title", ".about__title span");
animateFadeOutBottom(".list", ".list__item");
animateOpacity(".statistics__box", ".statistics__item-wrapper");
animateFadeOutBottom(".message__form", ".input__wrapp");
animateFadeOutBottom(".btn-group", ".btn");
animateFadeOutBottom(".about__content", ".about__content p");
animateFadeOutBottom(".equipment-rental", ".equipment-rental__left *");
animateFadeOutBottom(".about__list", ".about__list *");

/* Product */
animateFadeOutBottom(".product-about__center", ".product-about__center > *");
animateFadeOutBottom(".slider-nav ", ".slider-nav .slider__item");
animateFadeOutBottom(".calendar ", ".calendar__wrapper > *");
animateFadeOutBottom(".product-description ", ".product-description > *");

/* Privacy */
animateFadeOutBottom(".privacy__inner", ".privacy__inner h1");
animateFadeOutBottom(".privacy__inner", ".privacy__inner p");
animateFadeOutBottom(".privacy__list", ".privacy__item > *");

/* For Circles */
const items = document.querySelectorAll(".statistics__item-wrapper");
items.forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    parallax(event);
  });
  item.addEventListener("mouseleave", (event) => {
    resetParallax(event);
  });
});
