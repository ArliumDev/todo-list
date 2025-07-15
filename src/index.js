import './styles.css';
import { Project } from './project';
import { Task } from './task';

const testingProject = new Project("test");
const testingTask = new Task('bla', 'bli', '2025-07-15', 'blu');

testingProject.taskList.push(testingTask);
console.log(testingProject.taskList);

testingTask.createUI();

