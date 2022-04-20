import express from 'express';
import bodyParser  from 'body-parser';
import cors from 'cors';
import mongoose from 'moongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://memories:OI8OEBiz96fwyeZD@cluster0.pbvl5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify',false); 