// Reducers are pure functions that take in the previous state of your store
// and an action you would like to use to transform the store.
// These are commonly a list of case statements.

import {FETCH_POSTS, NEW_POSTS} from "../actions/types";

const initialState = { // This is the default state for redux post reducers
    items: [],
    item: {}
};



// Evaluate what type we are dealing with
export default function(state = initialState, action){
    switch (action.type){
        case FETCH_POSTS:
            console.log('reducer');
            return {
                ...state,
                items: action.payload
            };
        case  NEW_POSTS:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
    
}