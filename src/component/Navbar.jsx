import React, { useState } from 'react'

import Logo from '../assest/pizzaLogo.png' 
import { Link } from 'react-router-dom' 
import ReorderIcon from '@mui/icons-material/Reorder';
import '../style/Navbar.css'

export  function Navbar() {
const[openLink,setOpenLink]=useState(false)

    const toggleIcon=()=>{
        setOpenLink(! openLink)
    }
  return (
    <div className="navbar">
    <div className="leftSide" id={openLink ?"open" :"close"}>
      <img src={Logo} />
      <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
    <div className="rightSide">
      <Link to="/"> Home </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <button onClick={toggleIcon}>
        <ReorderIcon />
      </button>
    </div>
  </div>
    
  )
}
