import { createTaskTest } from './logic';

const mainDiv = document.getElementById('main-container');
const newTaskBtn = document.getElementById('new-task');
const testBtn = document.getElementById('test-task');

export function testingTaskCreation() {
  testBtn.addEventListener('click', () => createTaskTest());
}
