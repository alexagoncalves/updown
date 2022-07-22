import PropTypes from 'prop-types';
import './addtaskform.scss';

const AddTaskForm = ({newTask, addNewTask}) => (
    <div className="form" onSubmit={(e) => {
        e.preventDefault();
    }}>
        <form className="form-new">
            <input type="text" className="form-new__task" placeholder="New Task" value={newTask} onChange={(e) => { addNewTask(e.value);}} />
        </form>
            <button type="button" onClick={() => {}}className="material-symbols-outlined">add_task</button>
    </div>
)

AddTaskForm.propTypes = {
    newTask: PropTypes.string,
    addNewTask: PropTypes.func,
}

export default AddTaskForm;