import { app } from './app';

export class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = crypto.randomUUID();
  }
  createUI() {
    const task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('data-id', this.id);
    const labels = ['Title: ', 'Description: ', 'Date: ', 'Priority: '];
    const values = [this.title, this.description, this.dueDate, this.priority];
    const [taskTitle, taskDesc, taskDate, taskPrior] = ['task-title', 'task-desc', 'task-date', 'task-prior'].map((className, i) => {
      const task = document.createElement('p');
      task.classList.add(className);
      task.innerText = `${labels[i]} ${values[i]}`;
      return task;
    });
    const buttons = document.createElement('div');
    const editTask = document.createElement('button');
    const deleteTask = document.createElement('button');
    buttons.classList.add('task-buttons');
    editTask.classList.add('edit-task');
    deleteTask.classList.add('delete-task');
    editTask.innerText = 'Edit';
    deleteTask.innerText = 'Delete';
    editTask.addEventListener('click', () => {
      this.editUI();
    });
    deleteTask.addEventListener('click', () => {
      this.removeUI();
    });
    [editTask, deleteTask].forEach((el) => buttons.appendChild(el));
    [taskTitle, taskDesc, taskDate, taskPrior, buttons].forEach((el) => task.appendChild(el));
    app.appendChild(task);
  }
  removeUI() {
    const taskElement = document.querySelector(`[data-id="${this.id}"]`);
    if (taskElement) taskElement.remove();
  }
  editUI() {
    console.log('pending feature');
  }
}
