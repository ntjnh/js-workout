const addTask = document.getElementById("addTask");
const taskToAdd = document.getElementById("taskToAdd");

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
    
    const upCell = document.createElement("td");
    const upButton = document.createElement("button");
    const upIcon = document.createElement("i");
    upIcon.classList.add("bi", "bi-arrow-up");
    upButton.append(upIcon);
    upCell.append(upButton);

    const downCell = document.createElement("td");
    const downButton = document.createElement("button");
    const downIcon = document.createElement("i");
    downIcon.classList.add("bi", "bi-arrow-down");
    downButton.append(downIcon)
    downCell.append(downButton);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi", "bi-trash");
    deleteButton.append(deleteIcon)
    deleteCell.append(deleteButton);

    taskRow.append(tickCell, taskCell, upCell, downCell, deleteCell);
    taskList.append(taskRow);
});

/*
Icons to use

https://icons.getbootstrap.com/icons/circle/
https://icons.getbootstrap.com/icons/check-circle-fill/
https://icons.getbootstrap.com/icons/check-circle/

*/