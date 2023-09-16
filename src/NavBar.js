import React from 'react';

function NavBar() {
  return (
    <div className="navbar">
      <a
        className="navbar"
        href="/"
        alt="Home"
      >
        Home
      </a>
      <a
        className="navbar"
        href="/menu"
        alt="Menu"
      >
        Menu
      </a>
      <a
        className="navbar"
        href="/events"
        alt="Events"
      >
        Events
      </a>
      <a
        className="navbar"
        href="/gallery"
        alt="Gallery"
      >
        Gallery
      </a>      
      <a
        className="navbar"
        href="/feedback"
        alt="Feedback"
      >
        Feedback
      </a>

    </div>
  )
}

export default NavBar;