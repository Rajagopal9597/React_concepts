import React from 'react'
import {BrowserRouter, Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar
