import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

/*
1. Create a new component name: ExpenseForm.js
2. Form includes: input type="text" name="description", input type="float" name="amount"; button type = "submit"
Do at Expense Form
3. Connect to store, import addExpense from action expense.
4. Handle event form onSubmit ; e.preventDefault(); props.dispatch(addExpense({description: e.target.description.value, amount: e.target.amount.value})
5. Return to dashboard page to see
*/

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
      console.log(expense);
      props.dispatch(addExpense(expense));
      props.history.push("/");
    }} />
  </div>
);

export default connect()(AddExpensePage);
