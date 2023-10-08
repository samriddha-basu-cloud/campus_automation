import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Select, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import IMG from '../../src/srm_background.jpeg';
import IMG2 from '../../src/login_paper.jpeg';
 import {Link} from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('student');

    const containerStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Position relative to allow for the pseudo-element
    };

    const pseudoElementStyle = {
        content: '""',
        backgroundImage: `url(${IMG})`,
        filter: 'blur(4px)', 
        backgroundSize: 'cover', 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Place it behind the content
    };

    const paperStyle = {
        padding: 20,
        width: 870,
    };

    const avatarStyle = { backgroundColor: '#3f51b5' };
    const headingStyle = { marginBottom: 20 };
    const leftSideStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' };
    const rightSideStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === 'operations@phyfarm.com' && password === 'phyfarm321') {
            alert('Login successful');
        } else {
            alert('Invalid email or password');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div style={containerStyle}>
            <div style={pseudoElementStyle}></div> {/* Pseudo-element for the background blur */}
            <Paper elevation={10} style={paperStyle}>
                <Grid container spacing={2}>
                    {/* Left Part */}
                    <Grid item xs={6} style={leftSideStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' style={{ ...headingStyle, marginTop: 10 }}>
                                SRM Campus Automation
                            </Typography>
                        </Grid>
                        <TextField
                            value={email}
                            variant='outlined'
                            placeholder='johndoe@gmail.com'
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth
                            style={{ marginTop: 12 }}
                            InputProps={{
                                startAdornment: <EmailIcon style={{ marginRight: 8, color: 'gray' }} />,
                            }}
                        />
                        <TextField
                            value={password}
                            type='password'
                            variant='outlined'
                            placeholder='password'
                            onChange={(event) => setPassword(event.target.value)}
                            style={{ marginTop: 10 }}
                            fullWidth
                            InputProps={{
                                startAdornment: <VpnKeyIcon style={{ marginRight: 8, color: 'gray' }} />,
                            }}
                        />
                        <Select
                            value={userType}
                            onChange={(event) => setUserType(event.target.value)}
                            fullWidth
                            style={{ marginTop: 10 }}
                        >
                            <MenuItem value="student">Student</MenuItem>
                            <MenuItem value="teacher">Teacher</MenuItem>
                            <MenuItem value="parent">Parent</MenuItem>
                        </Select>
                        <Button
                            style={{ marginTop: 20, backgroundColor: '#e4b316' }}
                            type='submit'
                            variant='contained'
                            fullWidth
                            onClick={handleSubmit}
                            startIcon={<LockOutlinedIcon />}
                        >
                            Login
                        </Button>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ marginTop: 10, fontSize: 14 }}>
                                <a href='/' style={{ color: 'black' }}>Forgot password?</a>
                            </Typography>
                            <Typography style={{ marginTop: 10, fontSize: 14 }}>
                                Don't have an account? <Link to="/register">SignUp</Link>
                            </Typography>
                        </div>

                    </Grid>

                    {/* Right Part */}
                    <Grid item xs={6} style={rightSideStyle}>
                        <img src={IMG2} alt='login' style={{ width: '100%', height: 400, width: 430 }} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};