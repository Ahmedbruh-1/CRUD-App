import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Button } from '@mui/material';

const Edit = () => {

    const {id} = useParams()
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
      AccountDetails: '',
      password: ''
  });

  const setdata = (e) => {
      const { name, value } = e.target;
      setINP((prevInput) => ({
          ...prevInput,
          [name]: value
      }));
  };

  const addinpdata = async (e) => {
    e.preventDefault();
   

    try {
        const res = await fetch(`http://localhost:8003/api/updateuser/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inpval)
        });
        console.log(1);

        const data = await res.json();
        if (res.status === 422 || !data) {
            toast.error("Error occurred while updating user");
        } else {
            toast.success("User updated successfully");
            // Optionally, you can reset the form after successful registration
            setINP({
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
                AccountDetails: '',
                password: ''
            });
        }
    } catch (err) {
        console.error(err);
        toast.error("Error occurred while updating user");
    }
};


return (
    <div className='container'>
        <h2>Register Form</h2>
        <div className='container'>
            <NavLink to={'/'}>
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
export default Edit;



