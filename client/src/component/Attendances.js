import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import TodayIcon from '@mui/icons-material/Today';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import profile from '../component/profile.jpg';
import axios from 'axios';

const Attendances = () => {
    const [userData, setUserData] = useState([]);

    // Fetch data from server
    const getdata = async () => {
        try {
            const res = await axios.get("http://localhost:8003/api/getattendances");
            const data = res.data;
            console.log("data here", data);

            if (res.status === 422 || !data) {
            } else {
                // Update user data state
                setUserData(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div className='container mt-1'>
            <h1 style={{ fontWeight: 200 }}>Attendance Details</h1>
            <Grid container spacing={2}>
                {userData && userData?.allUsers?.map((user, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardContent>
                                <img src={profile} style={{ width: '50px' }} alt="profile" />
                                <Typography variant='h5' component='div' className='mt-3'>
                                    <PersonIcon /> Name: <span style={{ fontWeight: 100 }}>{user?.username}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <EventNoteIcon /> ID:<br />
                                    <span>{user?.id}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <MailOutlineIcon /> Name:<br />
                                    <span>{user?.name}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <MonetizationOnIcon /> Total Salary:<br />
                                    <span>{user?.totalSalary}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <DoneAllIcon /> Total Presents:<br />
                                    <span>{user?.totalPresents}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <CancelPresentationIcon /> Total Absents:<br />
                                    <span>{user?.totalAbsents}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <TodayIcon /> Leaves:<br />
                                    <span>{user?.leaves}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <LocalAtmIcon /> Deduction:<br />
                                    <span>{user?.deduction}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <MonetizationOnIcon /> Net Salary:<br />
                                    <span>{user?.netSalary}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <TodayIcon /> Date:<br />
                                    <span>{user?.date}</span>
                                </Typography>
                                <Typography className='mt-3'>
                                    <FeedbackIcon /> Feedback:<br />
                                    <span>{user?.feedback}</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Attendances;
