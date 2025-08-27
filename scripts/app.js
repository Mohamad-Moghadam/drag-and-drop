const items = document.querySelectorAll("li")
const left = document.querySelector(".left-ul")
const right = document.querySelector(".right-ul")

function dragAndDrop (item) {
    item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id)
    })

    items.forEach(item => dragAndDrop(item))

    right.addEventListener("dragover", (event) => event.preventDefault())
    
    right.addEventListener("drop", (event) => {
    event.preventDefault()
    const id = event.dataTransfer.getData("text/plain")
    const draggedItem = document.getElementById(id)
    right.appendChild(draggedItem)
    })
}