import React from 'react'
import logo from '../images/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
       <img src={logo} alt=''/>
       <ul className='nav-menu'>

        <Link to='/signup'>
        <li>SignUp</li>
        </Link>

        <Link to='/signin'>
        <li>SignIn</li>
        </Link>

        <Link to='/profile'>
        <li>Profile</li>
        </Link>

        <Link to='/createpost'>
        <li>Create Post </li>
        </Link>

        <Link to='/modal'>
        <li>Logout </li>
        </Link>
        </ul>
    </div>
  )
}

export default Navbar
