document.querySelectorAll("li").forEach(li => {
  li.addEventListener("dragstart", (e) => {
    draggedItem = li;
    li.classList.add("dragging");
  });

  li.addEventListener("dragend", (e) => {
    draggedItem = null;
    li.classList.remove("dragging");
    saveOrder();
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

  function saveOrder() {
  const data = {};
  document.querySelectorAll("ul").forEach((ul, i) => {
    data[i] = [...ul.querySelectorAll("li")].map(li => li.id);
  });
  localStorage.setItem("listsData", JSON.stringify(data));
}

function loadOrder() {
  const saved = JSON.parse(localStorage.getItem("listsData"));
  if (saved) {
    Object.keys(saved).forEach((key, i) => {
      const ul = document.querySelectorAll("ul")[i];
      saved[key].forEach(id => {
        const li = document.getElementById(id);
        if (li) ul.appendChild(li);
      });
    });
  }
}

loadOrder();