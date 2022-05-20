const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let randomNumber = "#";
  for (let i = 0; i < 6; i++) {
    randomNumber += hex[getRandom()];
  }

  document.body.style.background = randomNumber;
});

const getRandom = () => {
  return Math.floor(Math.random() * hex.length);
};
