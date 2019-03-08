import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Aside.css';

const Aside = () => {
 return (
  <div className='aside-wrapper'>
   <div className='aside-container'>
    <ul className='custom-list-tyle'>
     <li><Link to='/'> Home </Link></li>
     <li><Link to='/cart'> Cart </Link></li>
     <li><Link to='/contact'> Contact </Link></li>
    </ul>
   
   </div>
  </div>
 );
};

export default Aside;