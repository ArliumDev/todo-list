import './styles.css';
import { Project } from './project';
import { Task } from './task';

const testingProject = new Project("test");
const testingTask = new Task('bla', 'bli', '2025-07-15', 'blu');
const testingTask2 = new Task ("ble", "blu", "2025-07-22", "blo");

Object.assign(testingTask, {id: 1});
Object.assign(testingTask2, {id: 2});

testingProject.taskList.push(testingTask, testingTask2);

testingProject.getTasks(Task);

testingProject.deleteTask(1);
