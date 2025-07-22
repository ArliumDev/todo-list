import { Task } from './task';

export class Project {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.taskList = [];
  }
  addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    this.taskList.push(task);
  }
  getTasks() {
    this.taskList.forEach((Task) => {
      Task.createUI();
    });
  }
  removeTask() {
    
  }
}
