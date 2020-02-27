const stateExpenseDefault = [];

export default (state = stateExpenseDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((exp) => exp.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((exp) => {
                if(exp.id === action.id){
                    return {
                        ...exp, 
                        ...action.updates // copy total object
                    }
                }else {
                    return exp;
                }
            } );
        default:
            return state;
    }
};