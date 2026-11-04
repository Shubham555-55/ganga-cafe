import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-[80px] bg-gray-800 text-white'>

<Link to="/" >Home</Link>
<Link to="/menu" >Menu</Link>
<Link to="/contact" >Contact</Link>

    </div>
  )
}

export default Navbar