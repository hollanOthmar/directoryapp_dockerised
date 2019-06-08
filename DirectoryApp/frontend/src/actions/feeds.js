import axios from 'axios';
import { GET_BLOGS, GET_PODCASTS, GET_FEEDS, GET_TAGS, GET_FILTER, GET_MORE, ADD_BLOG,ADD_PODCAST, GET_POPULAR } from './types';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
// GET BLOGS
export const getBlogs = () => dispatch => {
    axios.get('/api/blogs/')
        .then(res => {
            // console.log(res.data)
            dispatch({
                blog_next: res.data.next,
                podcast_next:null,
                type: GET_BLOGS,
                payload: res.data.results
            });
        }).catch(err => console.log(err));
}

// ADD BLOG

export const addBlog = item => dispatch => {
    console.log(item);
    axios.post('/api/blogs/',item
    // {
    //     headers: {
    //          'X-CSRFTOKEN': csrfCookie,
    //      },
    // }
    )
        .then(res => {
            dispatch({
                type: ADD_BLOG,
                payload: []
            });
        }).catch(err => console.log(err));
}

// GET PODCASTS
export const getPodcasts = () => dispatch => {
    axios.get('/api/podcasts/')
        .then(res => {
            dispatch({
                blog_next: null,
                podcast_next:res.data.next,
                type: GET_PODCASTS,
                payload: res.data.results
            });
        }).catch(err => console.log(err));
}

// ADD PODCASTS
export const addPodcast = item => dispatch => {
    console.log(item);
    axios.post('/api/podcasts/',item)
        .then(res => {
            // console.log(res)
            dispatch({
                type: ADD_PODCAST,
                payload: []
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
            blog_next:blogs.data.next,
            podcast_next:podcasts.data.next,
            type: GET_FEEDS,
            payload: blogs.data.results.concat(podcasts.data.results)
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

// GET TOP 5 POPULAR TAGS
export const getPopular = () => dispatch => {
    axios.get('/api/popular/')
        .then(res => {
            dispatch({
                type: GET_POPULAR,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// GET FILTER
export const getFilter = (filter) => dispatch => {
    const encodedUri = encodeURIComponent(filter);
    // console.log(encodedUri);
    axios.all([
        axios.get(`/api/blogs/?tag=${encodedUri}`),
        axios.get(`/api/podcasts/?tag=${encodedUri}`)
      ])
      .then(axios.spread(function (blogs, podcasts) {
        dispatch({
            selected:filter,
            blog_next:blogs.data.next,
            podcast_next:podcasts.data.next,
            type: GET_FEEDS,
            payload: blogs.data.results.concat(podcasts.data.results)
        });
      }))
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));
}

// GET SEARCH
export const getSearch = (filter) => dispatch => {
    const encodedUri = encodeURIComponent(filter);
    axios.all([
        axios.get(`/api/blogs/?search=${encodedUri}`),
        axios.get(`/api/podcasts/?search=${encodedUri}`)
      ])
      .then(axios.spread(function (blogs, podcasts) {
        dispatch({
            blog_next:blogs.data.next,
            podcast_next:podcasts.data.next,
            type: GET_FEEDS,
            payload: blogs.data.results.concat(podcasts.data.results)
        });
      }))
      //.then(response => this.setState({ vehicles: response.data }))
      .catch(error => console.log(error));
}

// GET MORE
export const getMore = (url) => dispatch => {
    if(url.isLoadingBlog != null && url.isLoadingPodcast == null ||
        url.isLoadingBlog == null && url.isLoadingPodcast !=null
        ){
        axios.get(!!url.isLoadingBlog? url.isLoadingBlog : url.isLoadingPodcast)
        .then(res => {
            dispatch({
                blog_next: !!url.isLoadingBlog ? res.data.next: null,
                podcast_next:!!url.isLoadingPodcast ? res.data.next: null,
                type: GET_MORE,
                payload: res.data.results
            });
        }).catch(err => console.log(err));
    }
    else {
        axios.all([
            axios.get(url.isLoadingBlog),
            axios.get(url.isLoadingPodcast)
          ])
          .then(axios.spread(function (blogs, podcasts) {
            dispatch({
                blog_next:blogs.data.next,
                podcast_next:podcasts.data.next,
                type: GET_MORE,
                payload: blogs.data.results.concat(podcasts.data.results)
            });
          }))
          //.then(response => this.setState({ vehicles: response.data }))
          .catch(error => console.log(error));
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
