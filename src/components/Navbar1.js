import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/imgs/logo.png';
import axios from "axios";



function Navbar1() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);










    useEffect(() => {
      loadUsers();
    }, []);

  const loadUsers = async () => {

    let loggeduserid = localStorage.getItem("user_id")
    console.log("userid"+loggeduserid)

    setUserId(parseInt(loggeduserid))
    const response = await axios.get('http://localhost:8080/users');
    setUsers(response.data);


  };














  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
          <div class="user">
          <img src={logo} alt=""/>
        </div>

          </Link>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ACCOMMODATION
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BOOKING
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                RESTAURANT
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EVENTS
              </Link>
            </li>

            {/*<li className='nav-item'>*/}
            {/*  <Link*/}
            {/*    to='/products'*/}
            {/*    className='nav-links'*/}
            {/*    onClick={closeMobileMenu}*/}
            {/*  >*/}
            {/*    ADDITIONAL SERVICES*/}
            {/*  </Link>*/}
            {/*</li>*/}

            <li className='nav-item'>
              <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>


            {/*className='nav-item'*/}
            {/*<li  style={{marginLeft:'1000px',color:'black'}}>*/}
            {/*  <Link*/}
            {/*      to='/viewpg'*/}
            {/*      className='nav-links'*/}
            {/*      onClick={closeMobileMenu}*/}
            {/*  >*/}
            {/*    View Profile*/}
            {/*  </Link>*/}
            {/*</li>*/}

            {/*<ul className={"button123"}>*/}
              {users.filter(user=>user.id === userId).map(user => (
                  <li key={user.id}>
                    <Link to={`/viewpg/${user.id}`}>
                      <button  style={{marginTop:'20px'}} className={"linkbutton2"}>View profile </button>
                    </Link>
                  </li>
              ))}
            {/*</ul>*/}




            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
