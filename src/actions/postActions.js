import {FETCH_POSTS, NEW_POSTS} from "./types";


// Thunk middleware allows us to use/call the dispatch function directly so we can make async requests
export const fetchPosts = () => dispatch =>{
        console.log('Fetching');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts =>
                dispatch({ // Note: We dispatch the data to the reducer
                type: FETCH_POSTS,
                payload: posts
            }));
    };

export const createPost = (post) => dispatch => {
    console.log('Action called');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then( post => dispatch({
        type: NEW_POSTS,
        payload: post
    }));
};