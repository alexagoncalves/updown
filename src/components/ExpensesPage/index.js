import './expensespage.scss';
// import datas from '../../datas/datas';
import { useDispatch, useSelector } from 'react-redux';
import { addNewOperationMinus, addNewOperationPlus, deleteItem } from '../../functions/expenses';
import { addNewAmountToList, addNewOperationToList, getCurrentAmountData, getExpensesData, showAmountEditingInput } from '../../actions/expenses';
import { showErrorMessage } from '../../actions/tasks';


const ExpensesPage = () => {

    const expensesList = useSelector((state) => state.expenses.array);
    const currentAmount = useSelector((state) => state.expenses.amount);
    const isEditingAmount = useSelector((state) => state.expenses.status);
    const errorMessage = useSelector((state) => state.todo.message);
    const newOperation = useSelector((state) => state.expenses.operation);
    const newAmount = useSelector((state) => state.expenses.amountValue);
    const currency = useSelector((state) => state.expenses.currency);

    const dispatch = useDispatch();

    const handleClickEditAmount = (e) => {
        const idCurrentAmount = e.target.id;
        if (isEditingAmount === idCurrentAmount ) {
            setIsEditingAmount('');
        } else {
            dispatch(showAmountEditingInput(idCurrentAmount));
        }
    };

    const handleEditChange = (e) => {
        dispatch(getCurrentAmountData(e.currentTarget.value));
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(getCurrentAmountData(currentAmount));
        dispatch(showAmountEditingInput(''));
      }
      
      const handleChangeInputOperation = (e) => {
        dispatch(addNewOperationToList(e.currentTarget.value));
      };

      const handleChangeInputAmount = (e) => {
        dispatch(addNewAmountToList(e.currentTarget.value));
      };

      const handleSubmitOperationPlus = (e) => {
        e.preventDefault();
        if (newOperation !== "" && newAmount !=="") {
            addNewOperationPlus(expensesList, newOperation, newAmount);
            dispatch(addNewOperationToList(''));
            dispatch(addNewAmountToList(''));
            dispatch(showErrorMessage(''));
            dispatch(getCurrentAmountData(currentAmount + parseFloat(newAmount)));
        } else (
            dispatch(showErrorMessage('Please make sure all fields are filled in correctly.'))
        )
      }
      const handleSubmitOperationMinus = (e) => {
        e.preventDefault();
        if (newOperation !== "" && newAmount !=="") {
            addNewOperationMinus(expensesList, newOperation, newAmount);
            dispatch(addNewOperationToList(''));
            dispatch(addNewAmountToList(''));
            dispatch(showErrorMessage(''));
            dispatch(getCurrentAmountData(currentAmount - parseFloat(newAmount)));
        } else (
            dispatch(showErrorMessage('Please make sure all fields are filled in correctly.'))
        )
      }

      const handleClickDelete = (e) => {
        e.preventDefault();
        const selectedItem = e.currentTarget.closest('.expenses-list__item');
        const idCurrentItem = parseInt(selectedItem.id);
        deleteItem(expensesList, idCurrentItem);
        dispatch(getExpensesData([...expensesList]));
    }


    return (
        <div className="expenses">

            { isEditingAmount === 'current-amount' ?

            <form className="expenses-current__form-edit" onSubmit={handleEditSubmit}>
                <input type="number" step="0.01" value={parseFloat(currentAmount)} className="expenses-current__edit" onChange={handleEditChange} />
            </form>
            :
            <h2 className="expenses-current" id="current-amount" onClick={handleClickEditAmount}><span>{currency}</span> {currentAmount} </h2> }

            <div className="expenses-form">
                <p className="expenses-error">{errorMessage}</p>
                <form className="expenses-form__new">
                    <input type="text" className="form-new__identifier" placeholder="Identifier" value={newOperation} onChange={handleChangeInputOperation} />
                    <div className="expenses-operation__buttons">
                        <input type="number" className="form-new__amount" placeholder="Amount" value={newAmount} onChange={handleChangeInputAmount} />
                        <button type="button" id="add_button" onClick={handleSubmitOperationPlus} className="material-symbols-outlined">add_circle</button>
                        <button type="button" id="subtract_button" onClick={handleSubmitOperationMinus} className="material-symbols-outlined ">do_not_disturb_on</button>
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

export default ExpensesPage;