import { Task } from './task';

export class Project {
  constructor(name) {
    this.name = name;
    // this.id = crypto.randomUUID();
    this.taskList = [];
  }
  addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority, (id) => this.removeTask(id));
    this.taskList.push(task);
  }
  getTasks() {
    this.taskList.forEach((Task) => {
      Task.createUI();
    });
  }
  removeTask(id) {
    this.taskList = this.taskList.filter(task => task.id !== id);
    console.log(this.taskList);
  }
}
