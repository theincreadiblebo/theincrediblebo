import React from 'react';
import { connect } from 'react-redux';
import expenses from '../reducers/expenses';
import ExpensesListItem from './ExpensesListItem';
import selectedExpense from '../selectors/expenses';

const ExpensesList = (props) => (
    <div className="list">
        <h3>These are Expenses List</h3>
        {props.expenses.map((expense) => {
            return <ExpensesListItem key = {expense.id} {...expense} />;
        })}
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpense(state.expenses, state.filters)
    }
}; // HOC.


const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList);
export default ConnectedExpensesList;