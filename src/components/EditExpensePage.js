import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
  console.log(props.expenses);
  return (
    <div>
      <ExpenseForm expenses={props.expense} onSubmit={expensesEdited => {
        props.dispatch(startEditExpense(props.expense.id, expensesEdited));
        props.history.push("/");
      } } />
    </div>
  );
};

// Viet ham mapStateToProps
// Connect to store and check id, if exist ==> show information

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
    exp => exp.id === props.match.params.id
    )
  }
}

export default connect(mapStateToProps)(EditExpensePage) ;
