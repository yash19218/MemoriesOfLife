import *  as api from '../api';

//Actions-creaters
export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({type:'FETCH_ALL' , payload:data});
    }catch(err){
        console.log(err.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPosts(post);

        dispatch({type:'CREATE', payload:data});
    }catch(err){
        console.log(err.message);
    }
}


export const updatedPost = (id,post) => async(dispatch) => {
    try {
        const {data} = await api.updatePosts(id,post);

        dispatch({type:'UPDATE', payload:data});
    }catch(err){
        console.log(err.message);
    }
}