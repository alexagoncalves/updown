export const GET_TASKS = 'GET_TASKS';
export const SELECTED_TASK_EDIT_INPUT = 'SELECTED_TASK_EDIT_INPUT';
export const SELECTED_TASK_MENU = 'SELECTED_TASK_MENU';
export const TASK_CONTENT = 'TASK_CONTENT';
export const NEW_TASK = 'NEW_TASK';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const getTasksData = (dataArrayName) => ({
    type: GET_TASKS,
    arrayName: dataArrayName,
});

export const showTaskEditInput = (editingTaskId) => ({
    type: SELECTED_TASK_EDIT_INPUT,
    editing: editingTaskId,
})

export const showTaskMenu = (selectedTaskId) => ({
    type: SELECTED_TASK_MENU,
    selectedTask: selectedTaskId,
})

export const changeTaskContent = (newTaskContent) => ({
    type: TASK_CONTENT,
    content: newTaskContent,
})

export const newTaskToList = (newTaskValue) => ({
    type: NEW_TASK,
    taskValue: newTaskValue,
})

export const showErrorMessage = (errorMessage) => ({
    type: ERROR_MESSAGE,
    message: errorMessage,
})

