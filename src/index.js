import './styles.css';
import { Project } from './project';

const testProject = new Project('test');
testProject.addTask('bla', 'bli', '2025-07-22', 'blu');
testProject.getTasks();
console.log(testProject);
