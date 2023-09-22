

import React from 'react';
import Calendar from './Calendar.js';
function About() {
  
  return (
    <>
      
      {/*<div className="doordash"> Doordash coming 09/28/2023 </div>*/}
      <div className="socials"> <a  alt="follow us on instragram @Amys_place_buffalo"  href="https://www.instagram.com/amys_place_buffalo/"><img alt="follow us on instragram @Amys_place_buffalo" className="instagram" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"/> </a>
      <br></br><a className="toast x-large-font" alt="order here" href="https://order.toasttab.com/online/amys-place?rwg_token=AOZt1jX4FQ3I2wUIAHo7KgawgPiTF83KXlG_aer0gu6zxe5AKSxBbbFkDyy9ZBHkjkKDwfaVScP6HDV3T9YZiLzqNmFTlnvzhg%3D%3D">
        <img className="toast" alt="order here" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Toast_logo.svg/2560px-Toast_logo.svg.png"/><br></br> Order Here!</a>
        </div>

      <div className="x-large-font centered-text about">
        <h1 className="about">Amy's Place Buffalo</h1>
          <p className="about">Since 1981 Amy's Place has been a staple in the University Heights district of Buffalo NY.<br></br>
          We exclusively serve Vegetarian and Vegan food.<br></br>
            We strive to support and improve our local community.
          </p>
        <h2 className="about">Hours: </h2>
        <p className="about"> Monday :  5pm-9pm<br></br>
            Tuesday : Closed<br></br>
            Wednesday : Closed <br></br>
            Thursday : 5pm-9pm<br></br>
            Friday : 9am-3pm , 5pm-9pm<br></br>
            Saturday : 9am-3pm , 5pm <br></br>
            Sunday : 9am-3pm 
        </p>
      </div>
      <div className="location x-large-font centered-text">
        <h1 className="centered location"> Location </h1>
        <iframe alt="amys place location on google maps, directions are available on google maps" className="location" title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5840.75419684974!2d-78.83233383311821!3d42.94925708409538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d372bceca45431%3A0x3bb3fab3e888be6f!2sAmy&#39;s%20Place!5e0!3m2!1sen!2sus!4v1695351833697!5m2!1sen!2sus"
        style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <p className="location"><a href="https://maps.app.goo.gl/nE5pxdAL4px3UYQi9">3234 Main St. Buffalo, NY 14214</a></p>
      </div>
      <div className="events x-large-font centered-text"> <Calendar/> </div>
    </>
  )
}

export default About;