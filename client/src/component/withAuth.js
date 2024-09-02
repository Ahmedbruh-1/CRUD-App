import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Function to create a higher-order component (HOC) for authentication
const withAuth = (WrappedComponent) => {
  // Return a functional component
  return (props) => {
    const navigate = useNavigate();

    // useEffect to run when the component mounts
    useEffect(() => {
      // Check if the user is logged in
      const isLoggedIn = !!localStorage.getItem('user');

      // If user is not logged in, redirect to login page
      if (!isLoggedIn) {
        navigate('/login');
      }
    }, [navigate]); // Dependency array with navigate to ensure useEffect runs only once

    // Render the wrapped component if user is logged in
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
