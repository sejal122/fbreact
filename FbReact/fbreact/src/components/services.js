import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    return (
       <div><h1>Our services</h1>
       <Link to='/ourservices/newservice'>New service</Link>
       </div>
    )
}

export default Services
