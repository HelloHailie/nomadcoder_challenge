const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];


const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click",function colorChange () {
    const chosenRandomColor1 = colors[(Math.floor(Math.random() * colors.length))];
    const chosenRandomColor2 = colors[(Math.floor(Math.random() * colors.length))];
    body.style.backgroundImage =`linear-gradient(to right, ${chosenRandomColor1}, ${chosenRandomColor2})`;
})