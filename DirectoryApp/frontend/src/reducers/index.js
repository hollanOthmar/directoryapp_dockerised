import { combineReducers } from 'redux';
import feeds from './feeds';
import tags from './tags';

export default combineReducers({
    feeds, tags
});