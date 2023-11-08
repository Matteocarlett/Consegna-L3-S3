function aggiungiTask() {
    const input = document.getElementById("input")
    const testo = input.value.trim()
    
    if (testo !== "") {
        const li = document.createElement("li")
        const newSpan = document.createElement("span")
        const deleteButton = document.createElement("button")

        newSpan.textContent = testo
        deleteButton.textContent = "Elimina"
        deleteButton.classList.add("elimina")

        newSpan.addEventListener("click", function () {
            li.classList.toggle("completed")
        })

        deleteButton.addEventListener("click", function () {
            li.remove()
        })

        li.appendChild(newSpan)
        li.appendChild(deleteButton)

        const lista = document.getElementById("lista")
        lista.appendChild(li)

        input.value = ""
    } else {
        alert("Inserisci il testo per aggiungere una task!")
    }
}

const task = document.getElementById("task")
task.addEventListener("click", aggiungiTask)