document.querySelectorAll("li").forEach(li => {
  li.addEventListener("dragstart", (e) => {
    draggedItem = li;
    li.classList.add("dragging");
  });

  li.addEventListener("dragend", (e) => {
    draggedItem = null;
    li.classList.remove("dragging");
  });
});

document.querySelectorAll("ul").forEach(ul => {
  ul.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  ul.addEventListener("drop", (e) => {
    if (draggedItem) {
      ul.appendChild(draggedItem);
    }
  });
});