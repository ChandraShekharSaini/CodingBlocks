import React from 'react';
import NavBar1 from '../NavBarComponents/NavBar1';
import NavBar2 from '../NavBarComponents/NavBar2';
import NavBar3 from '../NavBarComponents/NavBar3';

const NavBar = ({ showAll = true }) => {
  return (
    <>
      {showAll && <NavBar1 />}
      <NavBar2 />
      <NavBar3 />
 
    </>
  );
};

export default NavBar;
