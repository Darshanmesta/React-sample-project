import React from 'react'
import './styles.css'

let Header=()=>{
    return(
        <nav className="navbar">
            <ul >
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Reach Us</a></li>
            </ul>
        </nav>
    )
}

export default Header;