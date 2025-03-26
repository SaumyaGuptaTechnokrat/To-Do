 const container = document.getElementById("to-do-list");
        const warningMessage = document.getElementById("warning-message");

        function saveText() {
            let getInputText = document.getElementById("text").value;

            if (getInputText === "") {
                warningMessage.style.display = "block"; // Show warning message
                return;
            } else {
                warningMessage.style.display = "none"; // Hide warning message
            }

            const newLi = document.createElement("li");
            const taskStatus = document.createElement("h3");
            taskStatus.textContent="Due";
            // Checkbox
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.addEventListener("change", function() {
                if (this.checked) {
                    taskStatus.textContent="Completed";
                } else {
                    taskStatus.textContent="Due";

                }
            });

            // Task Text
            const newSpan = document.createElement("span");
            newSpan.textContent = getInputText;

            // Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delBtn");
            deleteBtn.addEventListener("click", function() {
                newLi.remove();
            });

            newLi.appendChild(checkBox);
            newLi.appendChild(newSpan);
            newLi.appendChild(deleteBtn);
            newLi.appendChild(taskStatus);
            container.appendChild(newLi);

            document.getElementById("text").value = "";
        }
