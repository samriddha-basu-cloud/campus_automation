import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const paperStyle = { padding: 20, height: '45vh', width: 700, margin: '150px auto' };
    const avatarStyle = { backgroundColor: '#3f51b5' };
    const headingStyle = { marginBottom: 20 };
    const leftSideStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' };
    const rightSideStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
    const imageStyle = { maxWidth: '100%', maxHeight: '100%' };


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
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid container spacing={2}>
                    {/* Left Part */}
                    <Grid item xs={6} style={leftSideStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant='h5' style={{ headingStyle, marginTop: 10 }}>
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
                        <Button
                            style={{ marginTop: 20 }}
                            type='submit'
                            color='primary'
                            variant='contained'
                            fullWidth
                            onClick={handleSubmit}
                            startIcon={<LockOutlinedIcon />}
                        >
                            Login
                        </Button>
                        <Typography style={{ marginTop: 10 }}>
                            <a href='/'>Forgot password?</a>
                        </Typography>
                        <Typography style={{ marginTop: 10 }}>
                            Don't have an account? <a href='/'>Sign Up</a>
                        </Typography>
                    </Grid>

                    {/* Right Part */}
                    <Grid item xs={6} style={rightSideStyle}>
                        <Typography>Image goes here </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};