import React from 'react';
import { connect } from 'react-redux';
import startLogin from '../actions/auth';

const LoginPage = ({startLogin}) => (
    <div>
        <button onClick= {startLogin} >Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect (undefined, mapDispatchToProps) (LoginPage);

/*
1. Turn on Firebase --> Login with Google
2. Check State Login by Firebase --> firebase.auth().onAuthStateChanged
3. Login.js page --> Component
 --> button Login --> onClick 
 -> dispatch -> action (startLogin) in src/auth.js 
 -> component connect (xyz, mapDispatchToProps) (LoginPage);

 [
    dispatch(action function) => login button, edit button, remove button, add button, reducers (state, action) => return new state
 ] => store -> connect with store use connect function
*/
