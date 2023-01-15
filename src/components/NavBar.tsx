
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
type PropsTypes = Record<string, any>

const HorizonBar = styled.div`
    width : 100vw;
    height: 50px;
    display: flex;
    justify-content: end;
    backdrop-filter: blur(10px);
    position:fixed;
`
const MenuItem = styled.div`
    padding: 0 8px;
    display: inline-flex;
    a {
        text-decoration: none;
        font-weight: 400;
        margin: auto 0;
    }
`
const NavBar: React.FC<PropsTypes> = (props) => {
    return (
            <HorizonBar>
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <MenuItem><Link to="/login">Login</Link></MenuItem>
            </HorizonBar>
    )
}

export default NavBar