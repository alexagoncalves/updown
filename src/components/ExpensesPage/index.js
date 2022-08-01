import './expensespage.scss';
import PropTypes from 'prop-types';
import datas from '../../datas/datas';


const ExpensesPage = ({expensesList, setExpensesList, currentAmount, setCurrentAmount, isEditingAmount, setIsEditingAmount, newOperation, setNewOperation, newAmount, setNewAmount, addNewOperation, deleteItem, errorMessage, setErrorMessage}) => {

    const handleClickEditAmount = (e) => {
        const idCurrentAmount = e.target.id;
        if (isEditingAmount === idCurrentAmount ) {
            setIsEditingAmount('');
        } else {
            setIsEditingAmount(idCurrentAmount);
        }
    };

    const handleEditChange = (e) => {
        setCurrentAmount(e.currentTarget.value)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setCurrentAmount(parseFloat(currentAmount));
        setIsEditingAmount('');         
      }
      
      const handleChangeInputOperation = (e) => {
        setNewOperation(e.currentTarget.value)
      };

      const handleChangeInputAmount = (e) => {
        setNewAmount(e.currentTarget.value)
      };

      const handleSubmitOperation = (e) => {
        e.preventDefault();
        const buttonId = e.currentTarget.id;
        if (newOperation !== "" && newAmount !=="") {
            addNewOperation(newOperation, newAmount, buttonId);
            setNewOperation('');
            setNewAmount('');
            setErrorMessage('');
        } else (
            setErrorMessage('Please make sure all fields are filled in correctly.')
        )
      }

      const handleClickDelete = (e) => {
        e.preventDefault();
        const selectedItem = e.currentTarget.closest('.expenses-list__item');
        const idCurrentItem = parseInt(selectedItem.id);
        deleteItem(idCurrentItem);
        console.log(idCurrentItem)
    }


    return (
        <div className="expenses">

            { isEditingAmount === 'current-amount' ?

            <form className="expenses-current__form-edit" onSubmit={handleEditSubmit}>
                <input type="number" step="0.01" value={parseFloat(currentAmount)} className="expenses-current__edit" onChange={handleEditChange} />
            </form>
            :
            <h2 className="expenses-current" id="current-amount" onClick={handleClickEditAmount}><span>{datas.current.currency}</span> {currentAmount} </h2> }

            <div className="expenses-form">
                <p className="expenses-error">{errorMessage}</p>
                <form className="expenses-form__new">
                    <input type="text" className="form-new__identifier" placeholder="Identifier" value={newOperation} onChange={handleChangeInputOperation} />
                    <div className="expenses-operation__buttons">
                        <input type="number" className="form-new__amount" placeholder="Amount" value={newAmount} onChange={handleChangeInputAmount} />
                        <button type="button" id="add_button" onClick={handleSubmitOperation} className="material-symbols-outlined">add_circle</button>
                        <button type="button" id="subtract_button" onClick={handleSubmitOperation} className="material-symbols-outlined ">do_not_disturb_on</button>
                    </div>
                </form>
            </div>
            <ul className="expenses-list">
                {expensesList.map((item) => (
                    <li className="expenses-list__item" id={item.id} key={item.id}>
                        <span className="expenses-place">{item.place}</span>
                        <div className="expenses-updown__amount">
                            <span className="expenses-amount">€ {item.amount}</span>
                            <span className="material-symbols-outlined insert-element">{item.insert}</span>

                            <button type="button" onClick={handleClickDelete} className="material-symbols-outlined">delete</button>
                        </div>
                    </li>
                ))}    
            </ul>
        </div>
    )
}

ExpensesPage.propTypes = {
    expensesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    setExpensesList: PropTypes.func,
    setCurrentAmount: PropTypes.func,
    isEditingAmount: PropTypes.string,
    setIsEditingAmount: PropTypes.func,
    newOperation: PropTypes.string,
    setNewOperation: PropTypes.func,
    newAmount: PropTypes.string,
    setNewAmount: PropTypes.func,
    addNewOperation: PropTypes.func,
    errorMessage: PropTypes.string,
    setErrorMessage: PropTypes.func,
}

export default ExpensesPage;