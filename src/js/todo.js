(function() {

    const addTask = document.getElementById("addTask");
    const taskToAdd = document.getElementById("taskToAdd");

    // Create elements for action icons
    function iconCell(iconClass) {
        const cell = document.createElement("td");
        const button = document.createElement("button");
        const icon = document.createElement("i");
        icon.classList.add("bi", iconClass);
        
        if (iconClass == "bi-arrow-up") {
            button.classList.add("move-up");
            button.setAttribute("aria-label", "Move Up");
        } else if (iconClass == "bi-arrow-down") {
            button.classList.add("move-down");
            button.setAttribute("aria-label", "Move Down");
        } else {
            button.classList.add("delete");
            button.setAttribute("aria-label", "Delete");
        }

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

            disableButtons();
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
        const clicked = e.target;

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

    function disableButtons() {
        const tasks = document.getElementsByTagName("tr");
        const firstUpButton = tasks[0].children[2].children[0];
        const lastDownButton = tasks[tasks.length - 1].children[3].children[0];

        const allButtons = document.querySelectorAll(".move-up, .move-down");
        for (let i = 0; i < allButtons.length; i++) {
            let button = allButtons[i];
            button.removeAttribute("disabled");
        }
        
        firstUpButton.setAttribute("disabled", "");
        lastDownButton.setAttribute("disabled", "");
    }

    function reorder() {
        const taskRows = document.getElementsByTagName("tr");
        disableButtons();

        for (let i = 0; i < taskRows.length; i++) {
            const upButton = taskRows[i].children[2].children[0];
            const downButton = taskRows[i].children[3].children[0];

            upButton.addEventListener("click", () => {
                const task = upButton.parentElement.parentElement;
                const previousTask = task.previousElementSibling;
                const parent = document.getElementsByTagName("tbody")[0];

                if (previousTask) {
                    parent.insertBefore(task, previousTask);
                }

                disableButtons();
            });

            downButton.addEventListener("click", () => {
                const task = downButton.parentElement.parentElement;
                const nextTask = task.nextElementSibling;
                const nextNextTask = nextTask.nextElementSibling;
                const parent = document.getElementsByTagName("tbody")[0];

                if (nextTask) {
                    parent.insertBefore(task, nextNextTask);
                }

                disableButtons();
            });
        }
    }

    reorder();

    addTask.addEventListener("submit", e => {
        e.preventDefault();

        const task = taskToAdd.value;

        const errorMessage = document.getElementsByClassName("error")[0];

        if (!task) {
            errorMessage.style.display = "block";
            taskToAdd.style.borderColor = "#cf2727";

        } else {

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

            // Reset error styles
            taskToAdd.style.borderColor = "#000000";
            errorMessage.style.display = "none";
        }
    });

})();

// TODO: All buttons on new tasks delete (and are red)?????
