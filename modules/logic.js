import { tasksContainer } from './dom';

// Projects manager

export class ProjectManager {}

export class Project {}

export class TaskManager {
  constructor() {
    this.taskList = [];
    this.newId = 0;
  }
  createTask() {
    const task = new Task();
    task.id = this.newId;
    this.newId++;
    this.taskList.push(task);
    this.updateList();
    tasksContainer.appendChild(task.taskElement);
  }
  updateList() {
    this.taskList.forEach(task => console.log(task));
  }
  deleteTask(id) {}
}

export class Task {
  constructor(title, desc, date, prior) {
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
    taskTitle.textContent = 'Test Title';
    taskDesc.textContent = 'Test Description';
    taskDate.textContent = '01-01-2025';
    taskPrior.textContent = 'Test Priority';
    this.title = taskTitle.textContent;
    this.desc = taskDesc.textContent;
    this.date = taskDate.textContent;
    this.prior = taskPrior.textContent;
    const taskArr = [];
    taskArr.push(taskTitle, taskDesc, taskDate, taskPrior);
    taskArr.forEach((element) => {
      taskContainer.appendChild(element);
    });

    return taskContainer;
  }
}