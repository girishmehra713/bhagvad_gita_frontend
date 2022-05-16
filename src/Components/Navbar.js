import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className='nav_logo'>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}><h2 className='logo_text'>Bhagavad Geeta</h2></NavLink>
      </div>
      <div className='navlinks'>
        <div className='nav_item_link'>
          <NavLink to='/Chapters' className={(navData) => (navData.isActive ? 'active' : '')}>Chapters</NavLink>
        </div>

        <div className='nav_item_link'>
          <NavLink to='/Shloks' className={(navData) => (navData.isActive ? 'active' : '')}>Shloks</NavLink>
        </div>

        <div className='nav_item_link'>
          <NavLink to='/About' className={(navData) => (navData.isActive ? 'active' : '')}>About Geeta</NavLink>
        </div>
      </div>
      <div className='searchBar'>
        <i className='fa fa-search searchicon'></i>
        <input type='text' placeholder='Search Geeta Chapters' className='searchinput'></input>
      </div>
    </nav>
  )
}

export default Navbar