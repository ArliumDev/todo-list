export class Project {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.taskList = [];
  }
  getTasks() {
    this.taskList.forEach((Task) => {
      Task.createUI();
      console.log("I work!");
    })
    console.log(this.taskList.slice());
  }
  removeTask() {
    console.log(this.taskList.slice());
    const target = this.taskList.findIndex((task) => task.id == 1);
    this.taskList.splice(target, 1);
    console.log(this.taskList);
    }
  }
