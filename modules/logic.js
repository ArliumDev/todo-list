const mainDiv = document.getElementById('main-container');
const newTask = document.getElementById('new-task');

export function taskModal() {
  const modal = document.getElementById('task-modal');
  const closeBtn = document.getElementById('close-form');
  newTask.addEventListener('click', () => (modal.style.display = 'block'));
  closeBtn.addEventListener('click', () => (modal.style.display = 'none'));
  // Pending clicking outside modal closes it
}

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.taskElement = this.createHTML();
  }

  createHTML() {
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h2');
    const taskDesc = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const toggleBtn = document.createElement('button');
    taskTitle.textContent = this.title;
    taskDesc.textContent = this.description;
    deleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';
    toggleBtn.textContent = 'Complete';
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDesc);
    taskContainer.appendChild(deleteBtn);
    taskContainer.appendChild(editBtn);
    taskContainer.appendChild(toggleBtn);

    return taskContainer;
  }
}

export function createTaskTest() {
  const task = new Task("Testing", "This is a test");
  mainDiv.appendChild(task.taskElement);
}