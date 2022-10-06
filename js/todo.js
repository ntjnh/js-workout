const addTask = document.getElementById("addTask");
const taskToAdd = document.getElementById("taskToAdd");

// Create elements for action icons
function iconCell(iconClass) {
    const cell = document.createElement("td");
    const button = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("bi", iconClass);
    button.append(icon);
    cell.append(button);

    return cell;
}

addTask.addEventListener("submit", e => {
    e.preventDefault();

    const newTask = taskToAdd.value;

    // Clear input field
    taskToAdd.value = "";

    // Make elements for new task
    const taskList = document.getElementById("taskList");
    const taskRow = document.createElement("tr");
    const tickCell = document.createElement("td");
    const tick = document.createElement("i");
    tick.classList.add("bi", "bi-circle");
    tickCell.append(tick);
    const taskCell = document.createElement("td");
    taskCell.textContent = newTask;
    
    const upCell = iconCell("bi-arrow-up");
    const downCell = iconCell("bi-arrow-down");
    const deleteCell = iconCell("bi-trash");

    taskRow.append(tickCell, taskCell, upCell, downCell, deleteCell);
    taskList.append(taskRow);
});

/*
Icons to use

https://icons.getbootstrap.com/icons/circle/
https://icons.getbootstrap.com/icons/check-circle-fill/
https://icons.getbootstrap.com/icons/check-circle/

*/