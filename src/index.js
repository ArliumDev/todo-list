import { Project } from "../modules/logic";
import { Task } from "../modules/logic";
// Testing para hacer una task y añadirlo al array de Project

const projectTest = new Project;
const taskTest = new Task("Test","Esto es un test","hoy","total");
const taskTest2 = new Task("Test 2", "Esto es otro test", "mañana", "leve");

projectTest.addTask(taskTest);
projectTest.addTask(taskTest2);

console.log(projectTest.tasks);
