// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// const colorPicker = document.querySelectorAll(".color");
// for (let colorPick in colorPicker) {
//   colorPick.addEventListener("click", (event) => pickAColor)
// }

/* pickAColor changes color and some selectable quality, perhaps class, of #current-color.  Changes style background to a color.  But if the color is changed, I can likewise pull the color so class change isn't needed.  First, to set the background color so it has a default, otherwise code will crash when it looks for a background color that isn't set.
*/

// function pickAColor(event) {
//   const userColorSelect = event.target.background;
  
// }

const currColorSectionDoc = document.querySelector("#current-color");
const paletteDivDoc = document.querySelectorAll(".color");
const canvasCellDoc = document.querySelectorAll(".cell");

paletteDivDoc.forEach((divDoc)=> {
  divDoc.addEventListener("click",() => {
    currColorSectionDoc.style.backgroundColor = divDoc.style.backgroundColor;
  });
});

// const mainDivSelector = document.querySelectorAll(".cell");

canvasCellDoc.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = currColorSectionDoc.style.backgroundColor;
  });
});
// setAttribute