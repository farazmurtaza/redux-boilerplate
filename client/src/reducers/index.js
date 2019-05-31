// reason for this reducer is to just bring together all other reducers
// auth reducer, error reducer, todo reducer; can be as many as wanted 

import { combineReducer } from 'redux';
import itemReducer from './itemReducer';
//more reducers imported here if needed

export default combineReducer({
    item: itemReducer
    //more reducers added here for use eg: ,auth: authReducer
});

