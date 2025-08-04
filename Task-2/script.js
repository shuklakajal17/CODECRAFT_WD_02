function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editTask(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  const btnDiv = document.createElement("div");
  btnDiv.className = "task-buttons";
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(btnDiv);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function editTask(taskItem) {
  const newTask = prompt("Edit your task:", taskItem.firstChild.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    taskItem.firstChild.textContent = newTask.trim();
  }
}
