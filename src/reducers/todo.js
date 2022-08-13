import {
    GET_TASKS,
    SELECTED_TASK_EDIT_INPUT,
    SELECTED_TASK_MENU,
    TASK_CONTENT,
    NEW_TASK,
    ERROR_MESSAGE,
} from '../actions/tasks';

export const initialState = {
    arrayName: [],
    editing: 0,
    selectedTask: 0,
    content: '',
    taskValue: '',
    message: '',
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
       case GET_TASKS:
        return {
            ...state,
            arrayName: action.arrayName,
        }

        case SELECTED_TASK_EDIT_INPUT:
            return {
                ...state,
                editing: action.editing,
            }
        
        case SELECTED_TASK_MENU:
            return {
                ...state,
                selectedTask: action.selectedTask,
            }

        case TASK_CONTENT:
            return {
                ...state,
                content: action.content,
            }

        case NEW_TASK:
            return {
                ...state,
                taskValue: action.taskValue,
            }
        
        case ERROR_MESSAGE:
            return {
                ...state,
                message: action.message,
            }
        default:
            return state;
    }
}

export default reducer;