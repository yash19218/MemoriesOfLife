import React  , {useState}from 'react'
import {Avatar,Paper,Button,Grid,Typography,Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin} from 'react-google-login';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './input';
import Icon from './GoogleIcon';
import {signup,signin} from '../../actions/auth';

const initialState = {firstName:'',lastName:'',password:'',confirmPassword:'',email:''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [isSignup,setisSignup] = useState(false);
    const [formData,setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => {
       setShowPassword((prevShowPassword)=>!prevShowPassword); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        if(isSignup){
            dispatch(signup(formData,history));
        }else{
            dispatch(signin(formData,history));
        }
    }

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const googleFailure = () => {
        console.log('Google Sign In was unsuccessful. Try Again Later! ');
    }

    const googleSuccess = async (res) => {
        // const result = res.profileObj;//cannot get property of undefined!
        const result = res?.profileObj;//if not get -> undefined ..not throw an error!
        const token = res?.tokenId;
        try{
            dispatch({type:"AUTH",data:{result,token}});
            history.push('/');
        }catch(err){
            console.log(err);
        }
    }

    const switchMode = () => {
        setisSignup((previsSignup)=>!previsSignup);
        setShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3} >
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            { isSignup && (
                                    <>

                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half={true}/>
                                        <Input name="lastName" label="Last Name" handleChange={handleChange}  half={true}/>
                                    </>
                                )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text":"password"} handleShowPassword={handleShowPassword}/>
                            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                            clientId="488626491137-3cd3u35c9h13t2indctm82nqok31u8nb.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure} 
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignup?'Already have an Account? Sign In':"Don't have an Account? Sign Up"}
                                    </Button>
                                </Grid>
                        </Grid>
                    </form>
                </Paper> 
        </Container>
    )
}

export default Auth;