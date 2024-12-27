import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignIn.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Sign In Data:', formData); // Print form data to console

    // Perform any additional form validation or API call here

    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="signin">
      <div>
        <form className="loginform" onSubmit={handleSubmit}>
          <img src={logo} className="signuplogo" alt="" />
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" id="login-btn" value="Sign In" />
        </form>
        <div className="loginform2">
          Don't have an account?{' '}
          <Link to="/signup">
            <span style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


