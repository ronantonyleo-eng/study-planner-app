// Get elements from HTML
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// When button is clicked
addBtn.addEventListener("click", addTask);

// Function to add task
function addTask() {
  // Get input values
  const subject = document.getElementById("subject").value.trim();
  const task = document.getElementById("task").value.trim();
  const date = document.getElementById("date").value;

  // Validation
  if (subject === "" || task === "") {
    alert("Please enter subject and task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  li.innerHTML = `
    <span>
      <strong>${subject}</strong> - ${task} ${date ? `(${date})` : ""}
    </span>

    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  // Add task to list
  taskList.appendChild(li);

  // Clear inputs
  document.getElementById("subject").value = "";
  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
}

// Mark task complete
function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.style.textDecoration = "line-through";
  li.style.opacity = "0.6";
}

// Delete task
function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
