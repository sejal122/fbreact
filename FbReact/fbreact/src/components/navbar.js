import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li> <Link to='/ourservices'>Services</Link>  </li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
