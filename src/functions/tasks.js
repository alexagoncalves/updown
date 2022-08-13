export function doneTask (arrayTodolist, idCurrentTask) {
    const taskInEdit = arrayTodolist.find(task => task.id === idCurrentTask);
    if (taskInEdit.done === false) {
        taskInEdit.done = true;
    } else {
        taskInEdit.done = false;
    }

    return taskInEdit;
}

export function deleteTask (arrayTodolist, idCurrentTask) {

    const taskInEdit = arrayTodolist.find(task => task.id === idCurrentTask);
    const index = arrayTodolist.indexOf(taskInEdit);
    arrayTodolist.splice(index, 1);

    return arrayTodolist;
}

export function editTask (arrayTodolist, isShowingEditInput, taskContent) {
    const taskInEdit = arrayTodolist.find(task => task.id === isShowingEditInput);
    taskInEdit.task = taskContent;

    return taskInEdit;
}

export function addNewTask (arrayTodolist, newTask) {
    arrayTodolist.push({id: arrayTodolist.length + 1, task: newTask, done: false});
    
    return arrayTodolist;
  };
