function moveObject() {
  let id = null;
  const myObject = document.getElementById("object");
  let position = 0;
  clearInterval(id);

  id = setInterval(frame, 5);
  function frame() {
    if (position == 450) {
      clearInterval(id);
    } else {
      position++;
      myObject.style.top = position + "px";
      myObject.style.left = position + "px";
    }
  }
}
