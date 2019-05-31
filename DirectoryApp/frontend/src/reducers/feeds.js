import { GET_BLOGS, GET_PODCASTS, GET_FEEDS, GET_MORE,ADD_PODCAST,ADD_BLOG } from '../actions/types.js';
// import { stat } from 'fs';

const initialState = {
    refresh_feed:true,
    podcast_next:null,
    blog_next: null,
    selected:null,
    feeds: []
}

export default function(state = initialState,action) {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                refresh_feed:true,
                podcast_next:action.podcast_next,
                blog_next: action.blog_next,
                feeds: action.payload
            };
        
        case GET_PODCASTS:
            return {
                ...state,
                refresh_feed:true,
                podcast_next:action.podcast_next,
                blog_next: action.blog_next,
                feeds: action.payload
            };
        
        case GET_FEEDS:
            return {
                ...state,
                selected:action.selected,
                podcast_next:action.podcast_next,
                blog_next: action.blog_next,
                feeds: action.payload
                // feeds: state.feeds.concat(action.payload)
                // feeds: [...state.feeds, action.payload]
            };
        
        case GET_MORE:
            return {
                ...state,
                podcast_next:action.podcast_next,
                blog_next: action.blog_next,
                // feeds: action.payload
                feeds: state.feeds.concat(action.payload)
                // feeds: [...state.feeds, action.payload]
            };
        case ADD_BLOG:
            return {
                ...state
            };
        case ADD_PODCAST:
            return {
                ...state
            };
        
        default:
            return state;
    }
}