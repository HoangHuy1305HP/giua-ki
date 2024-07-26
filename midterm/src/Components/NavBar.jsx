import React from 'react';
import "../Css/NavBar.css"
const NavBar = () => {
    return (
        <div>
            <div className="include">
                <h2 style={{fontWeight:"600", color:"#FFFF"}}>Anonime</h2>
                <p style={{color:"grey"}}>Home</p>
                <p style={{color:"grey"}}>List anime</p>
                <input type="text" placeholder='Seacrh anime or movie' className='search'></input>
            </div>
        </div>
    );
}

export default NavBar;
