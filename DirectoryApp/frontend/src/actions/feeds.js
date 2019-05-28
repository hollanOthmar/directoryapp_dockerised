import axios from 'axios';
import { GET_BLOGS, GET_PODCASTS, GET_FEEDS, GET_TAGS, GET_FILTER } from './types';

// GET BLOGS
export const getBlogs = () => dispatch => {
    axios.get('/api/blogs/')
        .then(res => {
            console.log(res.data)
            dispatch({
                // next: res.data.next,
                type: GET_FEEDS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// GET PODCASTS
export const getPodcasts = () => dispatch => {
    axios.get('/api/podcasts/')
        .then(res => {
            dispatch({
                type: GET_PODCASTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// GET FEEDS
export const getFeeds = () => dispatch => {
    axios.all([
        axios.get('/api/blogs/'),
        axios.get('/api/podcasts/')
      ])
      .then(axios.spread(function (blogs, podcasts) {
        dispatch({
            type: GET_FEEDS,
            payload: blogs.data.concat(podcasts.data)
        });
      }))
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));

}


// GET TAGS
export const getTags = () => dispatch => {
    axios.get('/api/tags/')
        .then(res => {
            dispatch({
                type: GET_TAGS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// GET FILTER
export const getFilter = (filter) => dispatch => {
    axios.all([
        axios.get(`/api/blogs/?tag=${filter}`),
        axios.get(`/api/podcasts/?tag=${filter}`)
      ])
      .then(axios.spread(function (blogs, podcasts) {
        dispatch({
            type: GET_FEEDS,
            payload: blogs.data.concat(podcasts.data)
        });
      }))
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));
}

// GET SEARCH
export const getSearch = (filter) => dispatch => {
    axios.all([
        axios.get(`/api/blogs/?search=${filter}`),
        axios.get(`/api/podcasts/?search=${filter}`)
      ])
      .then(axios.spread(function (blogs, podcasts) {
        dispatch({
            type: GET_FEEDS,
            payload: blogs.data.concat(podcasts.data)
        });
      }))
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));
}

// GET MORE
export const getMore = (url) => dispatch => {
    axios.get(url)
        .then(res => {
            dispatch({
                next: res.data.next,
                type: GET_FEEDS,
                payload: res.data.results
            });
        }).catch(err => console.log(err));
}
