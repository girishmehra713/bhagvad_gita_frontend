import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const toggleHamburger = () => {
    isActive ? setisActive(false) : setisActive(true);
  }
  return (
    <>
      <button onClick={toggleHamburger} className='my-button'>
        <i className="fas fa-bars"></i>
      </button>
      <nav className={`Navbar ${isActive ? 'show' : 'hide'}`}>
        <div className='nav_logo'>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}><h2 className='logo_text'>Bhagavad Gita</h2></NavLink>
        </div>
        <div className='navlinks'>
          <div className='nav_item_link'>
            <NavLink to='/Chapters' className={(navData) => (navData.isActive ? 'active' : '')}>Chapters</NavLink>
          </div>

          <div className='nav_item_link'>
            <NavLink to='/Shloks' className={(navData) => (navData.isActive ? 'active' : '')}>Shloks</NavLink>
          </div>

          <div className='nav_item_link'>
            <NavLink to='/About' className={(navData) => (navData.isActive ? 'active' : '')}>About Gita</NavLink>
          </div>
        </div>
        <div className='searchBar'>
          <i className='fa fa-search searchicon'></i>
          <input type='text' placeholder='Search Gita Chapters' className='searchinput'></input>
        </div>
      </nav>
    </>

  )
}

export default Navbar