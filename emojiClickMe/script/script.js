const closedFace = document.getElementById("closed");
const openFace = document.getElementById("open");

closedFace.addEventListener("click", () => {
  openFace.classList.add("active");
  closedFace.classList.remove("active");
});

openFace.addEventListener("click", () => {
  closedFace.classList.add("active");
  openFace.classList.remove("active");
});
