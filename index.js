const scrollable = document.querySelector(".content");

const onDrag = (event) => {
  // Ensure we only do this for pointers that don't have native
  // drag-scrolling behavior and when the pointer is down.
  if (event.pointerType == "mouse") {
    scrollable.scrollLeft = elementFrom - event.clientX + pointerFrom;
  }
};

scrollable.addEventListener("pointerdown", (event) => {
  // Ensure we only do this for pointers that don't have native
  // drag-scrolling behavior.
  if (event.pointerType == "mouse") {
    pointerDown = true;
    // Set the position where the mouse is starting to drag from.
    pointerFrom = event.clientX;
    // Set the position of the element is scrolled from.
    elementFrom = scrollable.scrollLeft;

    // React on pointer move.
    document.addEventListener("pointermove", onDrag);
  }
});

// Stop reacting on pointer move when pointer is no longer clicked.
document.addEventListener("pointerup", (event) => {
  // Ensure we only do this for pointers that don't have native
  // drag-scrolling behavior.
  if (event.pointerType == "mouse") {
    document.removeEventListener("pointermove", onDrag);
  }
});

function openAlexa() {
  document.getElementById("alexa").style.display = "block";
}

function closeAlexa() {
  document.getElementById("alexa").style.display = "none";
}
