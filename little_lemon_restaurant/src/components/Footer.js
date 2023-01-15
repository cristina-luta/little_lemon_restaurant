import React from 'react';
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <ul>
        <li>
            <div class="logo">
                <img src={Logo} alt="Logo" />
            </div>
        </li>

        <ul class="doormat-navigation"> Doormat Navigation
            <li>
                <a href="/" >Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/reservation">Reservation</a>
            </li>
            <li>
                <a href="/online">Order Online</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
        
        <ul class="contact">Contact
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
            
        <ul class="social-media">Social Media Links
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
</ul>
  )
}

export default Footer