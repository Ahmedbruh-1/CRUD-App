import React, { useState, useEffect } from 'react';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LabelIcon from '@mui/icons-material/Label';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import profile from "../component/profile.jpg"
import Grid from '@mui/material/Grid';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();

  // Define state for user data
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8003/api/getuser/${id}`); // Use Axios.get
        const data = res.data; // Axios response data is in res.data

        if (!data) {
          console.log("Error fetching user data");
        } else {
          setUserData(data);
          console.log("User data fetched successfully");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log("state data", userData)

  //fetching all the users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8003/api/getusersdetails`);
        const data = res.data;
  
        if (!data || data.length === 0) {
          console.log("No users found");
        } else {
          setUserData(data);
          console.log("Users data fetched successfully");
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className='container mt-1'>
      <h1 style={{ fontWeight: 200 }}>Welcome</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                  {/* there was mess inside this jsx */}
                  <img src={profile} style={{ width: '50px' }} alt="profile" />
                  <h3 className='mt-3'>Name: <span style={{ fontWeight: 100 }}>{userData?.username}</span></h3>
                  <h3 className='mt-3'><PermIdentityIcon />ID:<br /><span>{userData?.userid}</span></h3>
                  <p className='mt-3'><MailIcon />Email:<br /><span>{userData?.personalMail}</span></p>
                  <p className='mt-3'><WorkIcon />Work:<br /><span>{userData?.job}</span></p>
                  <p className='mt-3'><PhoneAndroidIcon />Mobile:<br /><span>{userData?.number}</span></p>
                  <p className='mt-3'><LocationOnIcon />Address:<br /><span>{userData?.address}</span></p>
                  <p className='mt-3'><LabelIcon />status:<br /><span>{userData?.status}</span></p>
                  <p className='mt-3'><MailIcon />companyMail:<br /><span>{userData?.companyMail}</span></p>
                  <p className='mt-3'><AccountBalanceWalletIcon />Salary:<br /><span>{userData?.Salary}</span></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <button>
        <NavLink to={"/home"}>
        <button class="button">
          Home
        </button>
        </NavLink>
      </button>
    </div>
  );
};

export default Details;
