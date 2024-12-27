import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../images/logo.png';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
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
    console.log('Form Data:', formData); // Print form data to console

    // Perform any additional form validation or API call here

    // Redirect to the sign-in page
    navigate('/signin');
  };

  return (
    <div className="signup">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <img className="signuplogo" src={logo} alt="" />
          <p className="loginpara">
            Sign up to see photos and videos <br /> from your friends
          </p>
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
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
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
          <p className="loginpara" style={{ fontSize: '12px', margin: '3px 0px' }}>
            By signing up, you agree to our Terms, <br /> privacy policy and cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up" />
        </form>
        <div className="form2">
          Already have an account?{' '}
          <Link to="/signin">
            <span style={{ color: 'blue', cursor: 'pointer' }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
