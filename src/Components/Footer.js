import React from 'react'

export default function Footer() {
  return (
    <footer className='footerSection'>
      <div className='footerLinks'>
        <a href='/'>About us</a>
        <a href='/'>Blog</a>
        <a href='/'>Donate</a>
        <a href='/'>API</a>
        <a href='/'>Contact us</a>
      </div>
      <div className='socialAccounts'>
        <i className='fab fa-facebook-f socialLogo'></i>
        <i className='fab fa-instagram socialLogo'></i>
        <i className='fab fa-linkedin socialLogo'></i>
        <i className='fab fa-github socialLogo'></i>
      </div>
      <div className='love'>
        Jai Shree Krishna <i className='fa fa-heart heart'></i>
      </div>
    </footer>
  )
}
