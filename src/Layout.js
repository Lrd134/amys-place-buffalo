import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
function Layout() {
  return (
      <>
        <NavBar />
        <div className="placemat">
        
        </div>
        <Outlet />
      </>
  )
}

export default Layout;