
import React from 'react'
import { Link } from 'react-router-dom'
type PropsTypes = Record<string, any>

const navStyle = {
    width : '1vh',
    height: '50px',
    display: 'flex',
}
const NavBar: React.FC<PropsTypes> = (props) => {
    return (
        <div> 
            <div style={navStyle}>
                <span><Link to="/">Home</Link></span>
                <span><Link to="/login">Login</Link></span>
            </div>
        </div>
    )
}

export default NavBar