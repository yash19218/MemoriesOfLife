import {FETCH_ALL,CREATE,UPDATE,LIKE,DELETE} from '../constants/actionTypes';
import *  as api from '../api';

//Actions-creaters
export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({type:FETCH_ALL , payload:data});
    }catch(err){
        console.log(err.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPosts(post);

        dispatch({type:CREATE, payload:data});
    }catch(err){
        console.log(err.message);
    }
}


export const updatedPost = (id,post) => async(dispatch) => {
    try {
        const {data} = await api.updatePosts(id,post);

        dispatch({type:UPDATE, payload:data});
    }catch(err){
        console.log(err);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
         await api.deletePosts(id);
            //we are n't interested what return after deletion!
        dispatch({type:DELETE, payload:id});
    }catch(err){
        console.log(err);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePosts(id);
           
        dispatch({type:LIKE, payload:data});
    }catch(err){
        console.log(err);
    }
}