import React from 'react';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
// import expensesReducers from './reducers/expenses';
// import filtersReducers from './reducers/filters';
import getInvisibleExpenses from './selectors/expenses';
import configureStore from './stores/configureStore';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';


const store = configureStore();
/*
// Add Expense
const addExpense = ( {id = uuidv1(), description = "Rent house", amount = 10000, createdAt = 12345} = {} ) => {
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

const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates,
    }
}

const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

*/

store.subscribe(() => {
    const state = store.getState();
    console.log(getInvisibleExpenses(state.expenses, state.filters));
})

let one = store.dispatch(addExpense({id: 1, description: "Buy a car", amount: 50000, createdAt: 1000}));
let two = store.dispatch(addExpense({id: 2, description: "Buy a house", amount: 100000, createdAt: -1000}));
// store.dispatch(addExpense({description: "Buy a Nintendo", amount: 700000, createdAt: 220719}));
// store.dispatch(removeExpense(one.expense.id));
// store.dispatch(editExpense(two.expense.id, { amount: 500000}));
// store.dispatch(setTextFilter('House'));
// store.dispatch(setTextFilter('House'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('car'));
// }, 3000);

// store.dispatch(sortByAmount());
// store.dispatch(setStartDate(-1000));
// store.dispatch(setEndDate(0));
// store.dispatch(setStartDate());

// class App extends React.Component{
//     render(){
//         return(
//             <div classname="App"></div>
//         )}      
// }

const jsx = () => (
    <Provider store = {store} >
        <AppRouter />
    </Provider>
);

export default jsx;