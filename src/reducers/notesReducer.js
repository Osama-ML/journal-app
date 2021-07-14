/*

    {
        notes: [],
        active: null,
        active: {
            id: 'gbqtyg7786566t3r',
            title: '',
            body: '',
            imageUrl: '',
            date: ''
        }
    }

*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            
            return {
                ...state,
                active: {
                    ...action.payload
                }   
            }
    
        case types.notesLoad:

            return {
                ...state,
                notes: [...action.payload]
            }

        default:
            return state;
    }

}