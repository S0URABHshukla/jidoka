import React from 'react';
import './Button.css';
import { Link, useNavigate } from 'react-router-dom';

export function Button() {
  // const navigate=useNavigate();
  return (
    <Link to='products'>
      <button className='btn' >Our Products</button>
    </Link>
  );
}