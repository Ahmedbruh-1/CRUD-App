import React, { useState } from 'react';
import { Button, Grid, TextField, FormControl, InputLabel } from '@mui/material';
//import Visibility from '@mui/icons-material/Visibility';
//import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';
import { toast } from 'react-hot-toast';
import { NavLink, Navigate } from 'react-router-dom';

const Register = () => {
    const [inpval, setINP] = useState({
        userid: '',
        username: '',
        fathername: '',
        number: '',
        personalMail: '',
        companyMail: '',
        age: '',
        job: '',
        joiningdate: '',
        Salary: '',
        status: '',
        address: '',
        EmployeePicture: null,
        CNICPicture: null,
        ResumePicture: null,
        Transcript: null,
        PreviousExperience: null,
        Certificates: null,
        AccountDetails: ''
    });

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            };
        });
    };
    const addinpdata = async (e) => {
        e.preventDefault();
        const { userid, username, fathername, number, personalMail, companyMail, age, job, joiningdate, Salary, status,address, AccountDetails, password } = inpval;
        const res = await fetch("http://localhost:8003/api/Register", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userid, username, number, password, fathername, personalMail, companyMail, age, job, joiningdate, Salary, status,address, AccountDetails
            })
        });
        const data = await res.json();
        console.log("my data ====>", data);
        if (res.status === 422 || !data) {
            alert("error");
            console.log("error");
        } else {
            toast.success("User registered successfully");
        }
    }
    return (
        <div className='container'>
            <h2>Register Form</h2>
            <div className='container'>
                <NavLink to={'/home'}>
                    <button>
                        <span className="transition"></span>
                        <span className="gradient"></span>
                        <span className="label">Home</span>
                    </button>
                </NavLink>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="User ID"
                            name="userid"
                            value={inpval.userid}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Username"
                            name="username"
                            value={inpval.username}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="password"
                            name="password"
                            value={inpval.password}
                            onChange={setdata}
                            fullWidth
                            type='password'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Father's Name"
                            name="fathername"
                            value={inpval.fathername}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            name="number"
                            value={inpval.number}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Personal Email"
                            name="personalMail"
                            value={inpval.personalMail}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Company Email"
                            name="companyMail"
                            value={inpval.companyMail}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Age"
                            name="age"
                            value={inpval.age}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Job"
                            name="job"
                            value={inpval.job}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Joining Date"
                            name="joiningdate"
                            value={inpval.joiningdate}
                            onChange={setdata}
                            fullWidth
                            type='date'
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Salary"
                            name="Salary"
                            value={inpval.Salary}
                            onChange={setdata} fullWidth variant="outlined"
                        />
                    </Grid>
                    {/* Add more fields here */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Status"
                            name="status"
                            value={inpval.status}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Activation Status</FormLabel>
                            <RadioGroup
                                aria-label="activation-status"
                                name="status"
                                value={inpval.status}
                                onChange={setdata}
                                row
                            >
                                <FormControlLabel value="active" control={<Radio />} label="Active" />
                                <FormControlLabel value="not active" control={<Radio />} label="Not Active" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="address"
                            name="address"
                            value={inpval.address}
                            onChange={setdata} fullWidth variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="experience-picture-input">Employee Picture</InputLabel>
                        <TextField type="file" onChange={setdata} name="EmployeePicture" className="form-control" accept="image/*" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="experience-picture-input">CNIC Picture</InputLabel>
                        <TextField type="file" onChange={setdata} name="CNICPicture" className="form-control" accept="image/*" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="experience-picture-input">Resume Picture</InputLabel>
                        <TextField type="file" onChange={setdata} name="ResumePicture" className="form-control" accept="image/*" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel htmlFor="experience-picture-input">Transcript/Degree</InputLabel>
                        <TextField type="file" onChange={setdata} name="Transcript" className="form-control" accept="image/*" />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="experience-picture-input">Previous Experience</InputLabel>
                            <TextField type="file" onChange={setdata} name="PreviousExperience" className="form-control" accept="image/*" />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="experience-picture-input">Certificates</InputLabel>
                            <TextField type="file" onChange={setdata} name="Certificates" className="form-control" accept="image/*" />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Account Details"
                            name="AccountDetails"
                            value={inpval.AccountDetails}
                            onChange={setdata}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" onClick={addinpdata} variant="contained" color="primary">Register</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Register;
