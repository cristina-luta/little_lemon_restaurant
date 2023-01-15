import React from 'react';
import Logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    /*<ul className={click ? "nav-menu active" : "nav-menu"}*/
        <ul>
            <div class="logo">
            <img src={Logo} alt="Logo" />
            </div>
            <li>
                <a href="/" >HOME</a>
            </li>
            <li>
                <a href="/about">ABOUT</a>
            </li>
            <li>
                <a href="/menu">MENU</a>
            </li>
            <li>
                <a href="/reservation">RESERVATION</a>
            </li>
            <li>
                <a href="/online">ORDER ONLINE</a>
            </li>
            <li>
                <a href="/login">LOGIN</a>
            </li>
        </ul>
  )
}

export default Nav