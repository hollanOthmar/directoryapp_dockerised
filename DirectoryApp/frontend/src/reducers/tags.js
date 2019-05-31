import { GET_BLOGS, GET_PODCASTS, GET_FEEDS, GET_TAGS, GET_POPULAR } from '../actions/types.js';

const initialState = {
    tags: [],
    popular_tags:[]
}

export default function(state = initialState,action) {
    switch(action.type) {
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload
            };
        
        case GET_POPULAR:
            return {
                ...state,
                popular_tags: action.payload
            };
        
        default:
            return state;
    }
}