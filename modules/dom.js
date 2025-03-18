const divContent = document.querySelector('#content');

export function createUI() {
  const newProjectButton = document.createElement("button");
  const newTaskButton = document.createElement("button");

  newProjectButton.setAttribute("id", "new-project");
  newTaskButton.setAttribute("id", "new-task");
  newProjectButton.textContent = "New Project";
  newTaskButton.textContent = "New Task";
  divContent.appendChild(newProjectButton);
  divContent.appendChild(newTaskButton);
}

export function taskCreator() {
  
  const taskElements = {
    taskTitle: document.createElement('input'),
    taskDesc: document.createElement('input'),
    //taskDueDate:
    //taskPrior:
    taskNotes: document.createElement('textarea'),
    taskEdit: document.createElement('button'),
    taskCheck: document.createElement('button'),
    taskDelete: document.createElement('button'),
  };

  taskElements.taskEdit.textContent = 'Edit';
  taskElements.taskCheck.textContent = 'Check';
  taskElements.taskDelete.textContent = 'Erase';

  const newTask = document.createElement('div');

  const keys = Object.keys(taskElements);
  console.log(keys);

  for (const element in taskElements) {
    newTask.appendChild(taskElements[element]);
  }

  divContent.appendChild(newTask);
}


// Pending add class to elements based on the taskElements keys