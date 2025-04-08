import { newTaskBtn } from "../modules/dom";
import { TaskManager } from "../modules/logic";

// Testing para hacer una task y añadirlo al array de Project

const taskManager = new TaskManager;

newTaskBtn.addEventListener("click", () => {
  taskManager.createTask();
});