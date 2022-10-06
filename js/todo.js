"use strict";

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

function addNewTask(task, cells) {
    const tickCell = document.createElement("td");
    const tick = document.createElement("i");
    tick.classList.add("bi", "bi-circle");
    tickCell.append(tick);
    const taskCell = document.createElement("td");
    taskCell.textContent = task;

    const taskRow = document.createElement("tr");

    taskRow.append(tickCell, taskCell, ...cells);

    return taskRow;
}

addTask.addEventListener("submit", e => {
    e.preventDefault();

    // Save task string
    const task = taskToAdd.value;

    // Clear input field
    taskToAdd.value = "";

    const taskList = document.getElementById("taskList");
    
    // Create table cells with action icons
    const upCell = iconCell("bi-arrow-up");
    const downCell = iconCell("bi-arrow-down");
    const deleteCell = iconCell("bi-trash");

    const row = addNewTask(task, [upCell, downCell, deleteCell]);

    taskList.append(row);
});

/*
Icons to use

https://icons.getbootstrap.com/icons/circle/
https://icons.getbootstrap.com/icons/check-circle-fill/
https://icons.getbootstrap.com/icons/check-circle/

*/