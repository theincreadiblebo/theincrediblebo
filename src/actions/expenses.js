const uuidv1 = require('uuid/v1');
uuidv1();

// ADD_EXPENSE
export const addExpense = ( {id = uuidv1(), description = "Rent house", amount = 10000, createdAt = 12345} = {} ) => {
    return{
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv1(),
            description,
            amount,
            createdAt
        }

    }
}

export const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates,
    }
}

export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}
