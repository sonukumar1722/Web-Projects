console.log("Dragable and Dropable");

const whiteBoxes = document.getElementsByClassName("whiteBox");
const imgBox = document.querySelector(".imgBox");

// Event listener for draggable element imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart has been triggered");
  // Adding class hold
  e.target.className += " hold";
  setTimeout(() => {
    // After dragging remove img from original position
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd has been triggered");
  e.target.className = "imgBox";
});

for (box of whiteBoxes) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Drangover fired");
  });

  box.addEventListener("dragenter", (e) => {
    e.target.className += " dashed";
    console.log("DrangEnter fired");
  });

  box.addEventListener("dragleave", (e) => {
    e.target.className = " whiteBox";
    console.log("DrangLeave fired");
  });

  box.addEventListener("drop", (e) => {
    e.target.append(imgBox);
    console.log("Drangover fired");
  });
}
