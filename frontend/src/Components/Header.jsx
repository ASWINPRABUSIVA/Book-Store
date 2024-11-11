
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/admin">Admin</Link> | 
        <Link to="/seller">Seller</Link> | 
        <Link to="/user">User</Link>
      </nav>
    </header>
  );
}

export default Header;
