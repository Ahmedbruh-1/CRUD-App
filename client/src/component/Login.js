import { useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from 'react-router-dom'
import logo from "../component/logo.png";
import {toast} from 'react-hot-toast';



function Login() {

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
});

  let navigate = useNavigate()

  const setdata = (e) => {

    const { name, value } = e.target;
    setInpval((preval) => {
        return {
            ...preval,
            [name]: value
        };
    });
};

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    console.log("data from form", inpval)
    try {
      const response = await axios.post('http://localhost:8003/api/login', {
        email,
        password
      });

      console.log("data from api", response)

      const responseData = response.data;

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        toast.success("login successfull")
        localStorage.setItem('user', JSON.stringify(responseData) )   
        navigate('/home')
      }
      //ROLE FUNCTION FOR LOGIN PAGE
      //if (user.role === 'manager')
      //  navigate('/dashboard')
     // else{
      //  navigate('/login')
      //}
    } catch (error) {
      console.error('Login error:', error);
      // Optionally, handle the error (e.g., show a message to the user)
    }
  };


    return (
      <div className='login-container'>
        <div className="company-logo">
          <img src={logo} alt='logo.png' />
        </div>
        <h2 className="company-name">Softa Solutions</h2>
        <form className="login-form" onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name='email' onChange={setdata} value={inpval.email} className="form-control" id="email" placeholder="mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' onChange={setdata} value={inpval.password} className="form-control" id="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary login-btn">Login</button>
        </form>
      </div>
      );
};
export default Login;
