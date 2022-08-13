export function deleteItem(arrayExpenses, idCurrentItem) {
        const itemInEdit = arrayExpenses.find(item => item.id === idCurrentItem);
        const index = arrayExpenses.indexOf(itemInEdit);
        arrayExpenses.splice(index, 1);

        return arrayExpenses;
}

export function addNewOperationPlus(arrayExpenses, newOperation, newAmount) {
    
    arrayExpenses.push({id: arrayExpenses.length + 1, place: newOperation, amount: parseFloat(newAmount), insert: 'keyboard_arrow_up'});

    return arrayExpenses;
}

export function addNewOperationMinus(arrayExpenses, newOperation, newAmount) {
    arrayExpenses.push({id: arrayExpenses.length + 1, place: newOperation, amount: parseFloat(newAmount), insert: 'keyboard_arrow_down'});

    return arrayExpenses;
}