import React , {useState,useEffect} from 'react'
import { Container, Grid,Grow,  } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import useStyles from '../../styles';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId,setCurrentId] = useState(null);
    
    useEffect(() => {
        dispatch(getPosts());
    },[currentId,dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container  className={classes.mainContainer} justify="space-between" alignItems="strech" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid> 
                </Grid>
            </Container>
        </Grow >
    );
}

export default Home;