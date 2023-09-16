import React from 'react';

function NavBar() {
  const handleMouseEnter = event => {
    if (event.target.nodeName === "LI") {
      event.target.children[0].children[0].className = ''
    } else
      event.target.children[0].className = '';

  }
  const handleMouseLeave = event => {
    if (event.target.nodeName === "LI") {
      event.target.children[0].children[0].className = 'hidden'
    } else
      event.target.children[0].className = 'hidden';

  }
  return (
    <div className="navbar">
      <ul className="navbar">
        <li className="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <a
            className="navbar"
            href="/"
            alt="Home"
          >
          <img className="hidden" src="cup_wh.png" alt="if-link-is-hovered-this-cup-shows"/>
            Home
          </a>
        </li>
        <li className="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <a
            className="navbar"
            href="/menu"
            alt="Menu"
          >
          <img className="hidden" src="cup_wh.png" alt="if-link-is-hovered-this-cup-shows"/>
            Menu
          </a>
        </li>
        <li className="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <a
            className="navbar"
            href="/events"
            alt="Events"
          >
          <img className="hidden" src="cup_wh.png" alt="if-link-is-hovered-this-cup-shows"/>
            Events
          </a>
        </li>
        <li className="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <a
            className="navbar"
            href="/gallery"
            alt="Gallery"
          >
          <img className="hidden" src="cup_wh.png" alt="if-link-is-hovered-this-cup-shows"/>
            Gallery
          </a>      
        </li>
        <li className="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <a
            className="navbar"
            href="/feedback"
            alt="Feedback"
          >
          <img className="hidden" src="cup_wh.png" alt="if-link-is-hovered-this-cup-shows"/>
            Feedback
          </a>
        </li>
    </ul>
    </div>
  )
}

export default NavBar;