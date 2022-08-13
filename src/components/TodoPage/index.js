import './todopage.scss';

import AddTaskForm from 'src/components/AddTaskForm';
import TodoList from 'src/components/TodoList';

const TodoPage = () => {
    
    return (
        <div className="todo-page">
            <AddTaskForm/>
            <TodoList/>
        </div>
    )
}

export default TodoPage;