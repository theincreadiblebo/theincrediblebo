import React from 'react';
import { Link } from 'react-router-dom';
import {startRemoveExpense} from '../actions/expenses';
import {connect} from 'react-redux';

/*
1. Handle event onClick remove button
2. Call dispatch() and import action removeExpense(id).
3. Connect to store
*/

const ExpensesListItem = (props) => (
    <div>
        <p> Description: {props.description} - Amount: {props.amount} - CreatedAt: {props.createdAt}
        <Link to={`/edit/${props.id}`} > Edit </Link> 
        <button onClick={() => props.dispatch(startRemoveExpense(props.id))} >X</button> </p>
    </div>
);

export default connect()(ExpensesListItem);