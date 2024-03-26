import React from 'react'
import './header.css';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate = useNavigate();
  
  const handleBlog =() =>{
    navigate("/testimony");
  }
  const handleNavigate = () =>{
      navigate("/book")
  }
  const handleLogin =() =>{
    navigate("/login");
  }
  const handleContact = () =>{
    navigate("/contact");
  }
  return (
    <div className='nav'>
      <div className='nev-logo'>EV -olution</div>
      <ul className='nav-menu'>
        <li>Home</li>
       
       
        <li onClick={handleBlog}>Blog</li>
        <li>About</li>
        <li onClick={handleLogin}>Login</li>

        <li className='' onClick={handleContact}>Contact</li>
        <button className='' onClick={handleNavigate}>Book</button>
      </ul>
    </div>
  )
}
