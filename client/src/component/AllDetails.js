import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LabelIcon from '@mui/icons-material/Label';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import profile from '../component/profile.jpg';

function AllDetails() {
    const [userData, setUserData] = useState([]);

    // Fetch data from server
    const getdata = async () => {
        try {
            const res = await fetch('http://localhost:8003/api/getdata', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
            } else {
                // Update user data state
                setUserData(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div className='container mt-1'>
            <h1 style={{ fontWeight: 200 }}>Welcome</h1>
            <Grid container spacing={2}>
                {userData.map((user, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 600 }}>
                            <CardContent>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <img src={profile} style={{ width: '50px' }} alt='profile' />
                                        <Typography variant='h5' component='div' className='mt-3'>
                                            Name: <span style={{ fontWeight: 100 }}>{user?.username}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <PermIdentityIcon /> ID:<br />
                                            <span>{user?.userid}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <MailIcon /> Email:<br />
                                            <span>{user?.personalMail}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <WorkIcon /> Work:<br />
                                            <span>{user?.job}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <PhoneAndroidIcon /> Mobile:<br />
                                            <span>{user?.number}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <LocationOnIcon /> Address:<br />
                                            <span>{user?.address}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <LabelIcon /> Status:<br />
                                            <span>{user?.status}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <MailIcon /> Company Mail:<br />
                                            <span>{user?.companyMail}</span>
                                        </Typography>
                                        <Typography className='mt-3'>
                                            <AccountBalanceWalletIcon /> Salary:<br />
                                            <span>{user?.Salary}</span>
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default AllDetails;
