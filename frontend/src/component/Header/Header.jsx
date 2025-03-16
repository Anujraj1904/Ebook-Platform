import React, { useEffect, useState } from 'react'
import './Header.css'
import { assets } from '../../image/assets'

function Header() {

  const [menu,setMenu]=useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const isLoggedIn = !!user;
   // Define this variable or get it from your auth context/store

  const handleLinkClick = () => setMobileMenuOpen(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // useEffect(() => {
  //   console.log("isLoggedIn:", isLoggedIn);
  //   console.log("user:", user);
  // }, [isLoggedIn, user]);

  return (
    <div className='navbar'>
        <h1>BookByRent</h1>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  ☰
</div>
<ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>

        {["Home", "Contact", "About", "Sign up"].map((item) => (
          <li 
            key={item} 
            onClick={() => setMenu(item)} 
            className={menu === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
        <div className='navbar-right'>
            <div class="search-bar">
                <div className='search-bar-input'>
                  <input type="text" placeholder='Which book are looking for?'/>
                  <img src={assets.Search} alt=""/>
                </div>
            </div>
                
                <img src={assets.heart} alt=""/>
                <img src={assets.cartBox} alt=""/>
              
        </div>
    </div>
  );
}

export default Header;
