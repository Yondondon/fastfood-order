import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <>
      <NavLink to='/'>Menu</NavLink>
      <NavLink to='/test'>Orders</NavLink>
    </>
  )
}