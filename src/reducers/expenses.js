import {
    GET_CURRENCY,
    GET_CURRENT_AMOUNT,
    GET_EXPENSES,
    NEW_AMOUNT,
    NEW_OPERATION,
    SHOW_EDIT_INPUT_AMOUNT,
} from '../actions/expenses';

export const initialState = {
    array: [],
    amount: 0,
    status: '',
    operation: '',
    amountValue: '',
    currency: '',
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_EXPENSES:
            return {
                ...state,
                array: action.array,
            }
        
        case GET_CURRENT_AMOUNT:
            return {
                ...state,
                amount: action.amount,
            }
        
        case GET_CURRENCY:
            return {
                ...state,
                currency: action.currency,
            }

        case SHOW_EDIT_INPUT_AMOUNT:
            return {
                ...state,
                status: action.editStatus,
            }

        case NEW_OPERATION:
            return {
                ...state,
                operation: action.operation,
            }

        case NEW_AMOUNT:
            return {
                ...state,
                amountValue: action.amountValue,
            }
    
        default:
            return state;
    }
}

export default reducer;