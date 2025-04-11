import { cancelModal, tasksContainer, newTaskBtn, taskModal } from './dom';

// Projects manager

export class ProjectManager {}

export class Project {}

export class TaskManager {
  constructor() {
    this.taskList = [];
    this.newId = 0;
  }
  createTask() {
    const task = new Task(this);
    this.taskList.push(task);
    this.updateList();
  }
  updateList() {
    this.idReassign();
    tasksContainer.innerHTML = '';
    this.taskList.forEach((task) => {
      tasksContainer.appendChild(task.taskElement);
      console.log(task);
    });
  }
  deleteTask(id) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
    this.updateList();
  }

  idReassign() {
    this.newId = 0;
    this.taskList.forEach((task) => {
      task.id = this.newId;
      this.newId++;
    });
  }
}
export class Task {
  constructor(manager, title, desc, date, prior) {
    this.manager = manager;
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.prior = prior;
    this.taskElement = this.createHTML();
    this.id = null;
  }

  createHTML() {
    const taskContainer = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDesc = document.createElement('p');
    const taskDate = document.createElement('p');
    const taskPrior = document.createElement('p');
    const taskDel = document.createElement('button');
    taskTitle.textContent = 'Test Title';
    taskDesc.textContent = 'Test Description';
    taskDate.textContent = '01-01-2025';
    taskPrior.textContent = 'Test Priority';
    taskDel.textContent = 'Delete';
    this.title = taskTitle.textContent;
    this.desc = taskDesc.textContent;
    this.date = taskDate.textContent;
    this.prior = taskPrior.textContent;
    taskDel.addEventListener('click', () => {
      const taskManager = this.manager;
      taskManager.deleteTask(this.id);
    });
    const taskArr = [];
    taskArr.push(taskTitle, taskDesc, taskDate, taskPrior, taskDel);
    taskArr.forEach((element) => {
      taskContainer.appendChild(element);
    });

    return taskContainer;
  }
}

function toggleHideModal() {
  if (cancelModal) {
    taskModal.classList.toggle('hidden');
  }
}

const taskManager = new TaskManager();

export function initializeEventListeners() {
  newTaskBtn.addEventListener('click', () => {
    taskManager.createTask();
  });
  cancelModal.addEventListener("click", () => {
    toggleHideModal();
  })
}