import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js";

export const getPosts = async (req,res) => {
        try{
            const PostMessages = await PostMessage.find();
            res.status(200).json(PostMessages);
        }catch(err){
            res.status(404).json({message:err.message});    
        }
}

export const createPost = async (req,res) =>{
    const post = req.body;

    const newPost = new PostMessage(post);
    //learn codes https://www.restapitutorial.com/httpstatuscodes.html
    try{
        await newPost.save();

        res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({error:err.message});
    }
}


export const updatePost = async (req,res) =>{
    const {id:_id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No Post with this ID");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});

    res.json(updatedPost);
}

export const deletePost = async (req,res) =>{
    const { id : _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No Post with this ID");

    await PostMessage.findByIdAndRemove(_id);

    res.json({message:"Post Deleted Successfully!"});
}


export const likePost = async (req,res) =>{
    const { id : _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No Post with this ID");

    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);
}