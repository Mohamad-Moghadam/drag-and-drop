const item = document.querySelectorAll("li")
const left = document.querySelector(".left-ul")
const right = document.querySelector(".right-ul")

function dragAndDrop (item) {
    item.addEventListener("dragstart", (dragged_item) => {
        dragged_item.dataTransfer.setData("id", item.id)
    })

    [left, right].forEach((ul) => {
    ul.addEventListener("dragover", (e) => e.preventDefault())

    ul.addEventListener("drop", (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("id")
    const draggedItem = document.getElementById(id)
    ul.appendChild(draggedItem)
    })
})

}