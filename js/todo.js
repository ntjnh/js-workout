"use strict";

(function() {

    const addTask = document.getElementById("addTask");
    const taskToAdd = document.getElementById("taskToAdd");

    // Create elements for action icons
    function iconCell(iconClass) {
        const cell = document.createElement("td");
        const button = document.createElement("button");
        const icon = document.createElement("i");
        icon.classList.add("bi", iconClass);
        button.classList.add("delete");
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

    function enableDelete() {

        const deleteButtons = document.getElementsByClassName("delete");
    
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", e => deleteTask(e));
        }
    
        function deleteTask(e) {
    
            let button;
            let clicked = e.target;
    
            if (clicked.tagName === "I") {
                button = e.target.parentNode;
            } else {
                button = e.target;
            }
    
            let cell = button.parentNode;
            let row = cell.parentNode;
            row.remove();
        }
    }

    enableDelete();

    const completeCell = document.getElementsByClassName("complete");

    for (let i = 0; i < completeCell.length; i++) {
        completeCell[i].addEventListener("click", e => {
            completeTask(e);
        });
    }

    function completeTask(e) {
        let button;
        let clicked = e.target;

        if (clicked.tagName === "I") {
            button = clicked;
        } else {
            button = clicked.firstElementChild;
        }

        button.classList.toggle("bi-circle");
        button.classList.toggle("bi-check-circle-fill");

        const td = button.parentNode;
        td.nextElementSibling.classList.toggle("done");
    }

    function reorder() {
        const taskRows = document.getElementsByTagName("tr");

        for (let i = 0; i < taskRows.length; i++) {
            let button = taskRows[i].children[2].children[0];

            button.addEventListener("click", e => {
                let rows = [...taskRows];

                // Remove the row to move and save it temporarily
                let toMove = rows.splice(i, 1);

                // NOT WORKING: add the row back in one place in front of its previous place
                rows.splice(i - 1, 1, toMove);

            });
        }

        return;
    }

    reorder();

    addTask.addEventListener("submit", e => {
        e.preventDefault();

        const task = taskToAdd.value;

        // Clear input field
        taskToAdd.value = "";

        const taskList = document.getElementsByTagName("tbody")[0];
        
        // Create table cells with action icons
        const upCell = iconCell("bi-arrow-up");
        const downCell = iconCell("bi-arrow-down");
        const deleteCell = iconCell("bi-trash");

        const row = addNewTask(task, [upCell, downCell, deleteCell]);

        taskList.append(row);
        enableDelete();
    });

})();

// TODO: Make up buttons work
// TODO: Make down buttons work
// TODO: Styles
// TODO: Task must not be added if blank
