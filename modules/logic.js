// Projects manager

class ProjectManager {
  constructor() {}
}

export class Project {
  constructor(name) {
    this.id = Date.now().toString();
    this.name = name;
    this.tasks = [];
  }
}

export class Task {
  constructor(title, desc, date, prior) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.prior = prior;
    this.taskElement = this.createHTML();
  }

  createHTML() {
    const taskContainer = document.createElement("div");
    const taskTitle = document.createElement("h3");
    const taskDesc = document.createElement("p");
    const taskDate = document.createElement("input");
    const taskPrior = document.createElement("ul");
    taskTitle.innerText = "Hola";
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDesc);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskPrior);
    
    return taskContainer;
  }
}