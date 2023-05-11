import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export function Button() {
  return (
    <Link to='products'>
      <button className='btn' > <ShoppingCartCheckoutIcon/> Our Products</button>
    </Link>
  );
}