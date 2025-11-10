const inputEl = document.getElementById("input-el")
const newTaskBtn = document.getElementById("newtask-btn")
const clearTasksBtn = document.getElementById("cleartasks-btn")
const ulEl = document.getElementById("ul-el")


newTaskBtn.addEventListener ("click", function() {
    addListItem()
})


clearTasksBtn.addEventListener ("click", function() {
    ulEl.innerHTML = ""
})

function addListItem() {
    const taskText = inputEl.value
    
    if (taskText) {
        const newListItem = document.createElement('li')
        
        newListItem.innerHTML = `
        <li>
            <span class="task-text">${taskText}</span>
            <input type="checkbox" class="task-checkbox">
        </li>
        `;
        ulEl.appendChild(newListItem);

        inputEl.value = "";
    }
  }  
  
  
