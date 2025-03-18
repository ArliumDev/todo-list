import { taskCreator } from '../modules/dom.js';

export function createTask() {
  const newTaskButton = document.querySelector('#new-task');
  newTaskButton.addEventListener('click', () => {
    taskCreator();
  });
}