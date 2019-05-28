import { GET_BLOGS, GET_PODCASTS, GET_FEEDS } from '../actions/types.js';
// import { stat } from 'fs';

const initialState = {
    // next: null,
    feeds: []
}

export default function(state = initialState,action) {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                feeds: action.payload
            };
        
        case GET_PODCASTS:
            return {
                ...state,
                feeds: action.payload
            };
        
        case GET_FEEDS:
            return {
                ...state,
                // next: action.next,
                feeds: action.payload
                // feeds: state.feeds.concat(action.payload)
                // feeds: [...state.feeds, action.payload]
            };
        
        default:
            return state;
    }
}