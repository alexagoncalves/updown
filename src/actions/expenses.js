export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_CURRENT_AMOUNT = 'GET_CURRENT_AMOUNT';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SHOW_EDIT_INPUT_AMOUNT = 'SHOW_EDIT_INPUT_AMOUNT';
export const NEW_OPERATION = 'NEW_OPERATION';
export const NEW_AMOUNT = 'NEW_AMOUNT';

export const getExpensesData = (arrayName) => ({
    type: GET_EXPENSES,
    array: arrayName,
});

export const getCurrentAmountData = (currentAmount) => ({
    type: GET_CURRENT_AMOUNT,
    amount: currentAmount,
})

export const getCurrency = (currencyName) => ({
    type: GET_CURRENCY,
    currency: currencyName,
})

export const showAmountEditingInput = (isEditingAmount) => ({
    type: SHOW_EDIT_INPUT_AMOUNT,
    editStatus: isEditingAmount, 
})

export const addNewOperationToList = (newOperation) => ({
    type: NEW_OPERATION,
    operation: newOperation,
})

export const addNewAmountToList = (newAmount) => ({
    type: NEW_AMOUNT,
    amountValue: newAmount,
})