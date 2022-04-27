import axios from 'axios';

const API = axios.create({ baseURL:"http://localhost:5000" });


API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});


// const url = 'http://localhost:5000/posts';
// const url ='https://memoriesoflife.herokuapp.com/posts';

export const fetchPosts = () => API.get('/posts');

export const createPosts = (newPost)  => API.post('/posts',newPost);

export const updatePosts = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);

export const deletePosts = (id) => API.delete(`/posts/${id}`);

export const likePosts = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin',formData);

export const signUp = (formData) => API.post('/users/signup',formData);

