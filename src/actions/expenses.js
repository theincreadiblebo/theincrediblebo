import database from '../firebase/firebase';
// const uuidv1 = require('uuid/v1');
// uuidv1();

// ADD_EXPENSE
export const addExpense = ( expense ) => {
    return{
        type: 'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (dataExpense = {}) => {
    const { description, amount, createAt=5000 } = dataExpense;

    const expense = { description, amount, createAt }

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
        .ref(`users/${uid}/expenses`)
        .push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((err) => {
            console.log(err);
        });
    }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates,
    }
}

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
        .ref(`users/${uid}/expenses/${id}`)
        .set(updates)
        .then(() => {
            dispatch(editExpense(id, updates));
        }).catch(err => console.log(err));
    }
}

// REMOVE_EXPENSE
export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
        .ref(`users/${uid}/expenses/${id}`)
        .remove()
        .then(() => {
            dispatch(removeExpense(id));
        }).catch(err => console.log(err));
    }
}

export const setExpenses = ( expenses ) => {
    return {
        type: 'SET_EXPENSE',
        expenses
    }
};

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        let expenses = [];
        // Get data from Firebase
        return database
        .ref(`users/${uid}/expenese`)
        .once("value")
        .then((dataSnapshot) => {
            dataSnapshot.forEach(childSnapshot => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            return expenses;

        }).then((expenses) => {
        // Push data to store Redux
            dispatch(setExpenses(expenses));
        }).catch((err) => {
            console.log(err);
        })
    }
};