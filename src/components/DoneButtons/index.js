import './donebuttons.scss';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const DoneButtons = ({deleteTask, doneTask}) => {

    const handleClickDelete = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        deleteTask(idCurrentTask);
    }

    const handleClickUndone = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        doneTask(idCurrentTask);
    }

    return (
        <div className="done-buttons">
            <button type="button" onClick={handleClickUndone} className="material-symbols-outlined">settings_backup_restore</button>
            <button type="button" onClick={handleClickDelete} className="material-symbols-outlined">delete</button>
        </div>
    )
}

DoneButtons.propTypes ={
    deleteTask: propTypes.func,
    doneTask: propTypes.func,
}

export default DoneButtons;