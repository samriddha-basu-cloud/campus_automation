import React from 'react';
import { Paper, Grid, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import IMG from '../../src/srm_background.jpeg';

const Register = () => {
    const paperStyle = {
        padding: 20,
        width: 400,
        margin: '110px auto',
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: 20,
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

    const inputStyle = {
        marginBottom: 15,
    };

    return (
        <div>
            <Paper elevation={10} style={paperStyle}>
                <div style={pseudoElementStyle}></div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" style={headingStyle}>
                            Register
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={inputStyle}>

                        <TextField
                            label="First Name"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} style={inputStyle}>

                        <TextField
                            label="Last Name"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} style={inputStyle}>

                        <TextField
                            label="Email"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6} style={inputStyle}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="role-select">Role</InputLabel>
                            <Select
                                labelId="role-select"
                                label="Role"
                            >
                                <MenuItem value="student">Student</MenuItem>
                                <MenuItem value="teacher">Teacher</MenuItem>
                                <MenuItem value="parent">Parent</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} style={inputStyle}>

                        <TextField
                            label="Password"
                            fullWidth
                            variant="outlined"
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12} style={inputStyle}>

                        <TextField
                            label="Retype Password"
                            fullWidth
                            variant="outlined"
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ backgroundColor: '#e4b316' }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Register;