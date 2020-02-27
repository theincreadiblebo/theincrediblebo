import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';



/*
1. Import sortByDate & sortByAmount from action filters.
2. Handle event onChange => dispatch , cehck condition (if).
e.target.value
*/

const ExpensesListFilters = (props) => {
    return (
    <div className="filter">
        <input type="text" 
        value={props.filter.text} 
        onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        } } />
        <select onChange={(e)=>{
                if(e.target.value==="amount"){
                    
                        props.dispatch(sortByAmount())
                    }else if(e.target.value==="date") {
                        
                        props.dispatch(sortByDate())
                        }
                    }
                }
        >
            <option value = "amount" >By Amount</option>
            <option value = "date" >By Date</option>
        </select>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesListFilters) ; 