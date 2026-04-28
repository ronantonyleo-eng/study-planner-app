// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent empty task
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark completed when clicked
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Delete task
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent complete toggle
    li.remove();
  });

  // Add delete button to task
  li.appendChild(deleteBtn);

  // Add task to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
