const curtains = document.querySelector(".curtains");
curtains.addEventListener("mouseenter", () => {
  curtains.classList.add("active");
});
curtains.addEventListener("mouseleave", () => {
  curtains.classList.remove("active");
});
