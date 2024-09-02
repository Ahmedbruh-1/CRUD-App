import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Skeleton } from '@mui/material';

function Home() {
  // Define state for user data and its setter function
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);
    
  // Fetch data from server
  const getdata = async () => {
    try {
      const res = await fetch("http://localhost:8003/api/getdata", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });
      const data = await res.json();

      if (res.status === 422 || !data) {
        console.error("Error fetching data:", res.status);
      } else {
        // Update user data state
        setUserData(data);
        setLoading(false); // Set loading to false when data is fetched
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  //deleting the user
  const handleDelete = async (id) => {
    const data = await axios.delete(`http://localhost:8003/api/delete/${id}`)
    console.log(data)
    getdata();
  }

  //edit
  const handleEdit = (id) => {
    navigate(`/Edit/${id}`);
  };

  return (
    <div className='container'>
      <div className="table-responsive mt-1">
        <table className="table table-hover">
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Job</th>
              <th scope="col">Contact</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? ( // Render skeleton loading effect if loading state is true
              Array.from(Array(5).keys()).map((index) => ( // Change 5 to the number of skeleton items you want to display
                <tr key={index}>
                  <td>
                    <Skeleton animation="wave" />
                  </td>
                  <td>
                    <Skeleton animation="wave" />
                  </td>
                  <td>
                    <Skeleton animation="wave" />
                  </td>
                  <td>
                    <Skeleton animation="wave" />
                  </td>
                  <td>
                    <Skeleton animation="wave" />
                  </td>
                </tr>
              ))
            ) : (
              userData.map((element, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{element.username}</td>
                  <td>{element.job}</td>
                  <td>{element.number}</td>
                  <td className='d-flex justify-content-between'>
                    <NavLink to={`/details/${element._id}`}><i class="fa-solid fa-eye"></i></NavLink>
                    <button className='btn btn-primary' onClick={()=>handleEdit(element._id)}><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn btn-danger' onClick={()=>handleDelete(element._id)}><i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
