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