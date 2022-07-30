import './expensespage.scss';
import PropTypes from 'prop-types';


const ExpensesPage = ({expensesList, setExpensesList}) => {

    return (
        <div className="expenses">
            <h2 className="expenses-current"><span id="expenses-euro">€</span>12.547,14</h2>
            <ul className="expenses-list">
                {expensesList.map((item) => (
                    <li className="expenses-list__item">
                        <span className="expenses-place">{item.place}</span>
                        <div className="expenses-updown__amount">
                            <span className="expenses-amount">€ {item.amount}</span>
                            <span className="material-symbols-outlined">{item.insert}</span>
                        </div>
                    </li>
                ))}
                                {expensesList.map((item) => (
                    <li className="expenses-list__item">
                        <span className="expenses-place">{item.place}</span>
                        <div className="expenses-updown__amount">
                            <span className="expenses-amount">€ {item.amount} </span>
                            <span className="material-symbols-outlined">{item.insert}</span>
                        </div>
                    </li>
                ))} 
                                {expensesList.map((item) => (
                    <li className="expenses-list__item">
                        <span className="expenses-place">{item.place}</span>
                        <div className="expenses-updown__amount">
                            <span className="expenses-amount">€ {item.amount} </span>
                            <span className="material-symbols-outlined">{item.insert}</span>
                        </div>
                    </li>
                ))} 
                                {expensesList.map((item) => (
                    <li className="expenses-list__item">
                        <span className="expenses-place">{item.place}</span>
                        <div className="expenses-updown__amount">
                            <span className="expenses-amount">€ {item.amount} </span>
                            <span className="material-symbols-outlined">{item.insert}</span>
                        </div>
                    </li>
                ))}        
            </ul>
        </div>
    )
}

ExpensesPage.propTypes = {
    expensesList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ExpensesPage;