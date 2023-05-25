import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <>
      <NavLink className={'navLink'} to='/'>Menu</NavLink>
      <NavLink className={'navLink'} to='/orders'>Orders</NavLink>
    </>
  )
}