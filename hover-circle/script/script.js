const circle = document.getElementById("circle");

circle.addEventListener("mouseenter", () => {
  circle.classList.add("hover");
});

circle.addEventListener("mouseleave", () => {
  circle.classList.remove("hover");
});
