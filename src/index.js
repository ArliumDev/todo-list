import './styles.css';
import { Project } from './project';

const testProject = new Project('test');
testProject.addTask('bla', 'bli', '2025-07-22', 'blu');
testProject.addTask("a", "b", "2025-07-23", "c");
testProject.addTask("d", "e", "2025-07-23", "f");
testProject.addTask("g", "h", "2025-07-23", "i");
testProject.getTasks();
console.log(testProject);
