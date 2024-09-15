import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

const Navbar = ( ) =>{
    // console.log('Navsbar rendering');
    return (
        <div className='navbar'>
            <div>
            <Link to="/"> <h1>Your Library</h1></Link>
            </div>
            <div>
                <Link to="/favorites"><h1>Your Favorites</h1></Link>
            </div>

        </div>
    )
}

export default Navbar; 