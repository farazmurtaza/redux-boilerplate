//import required constants
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/constants';

//cases for each constant
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
        default:
            return state;
    }
}
