
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Login from './Login';
import Home from './Home';
type PropsTypes = Record<string, any>

const pagesList = [
    {
        path: '/login',
        components: <Login />
    },
    {
        path: '/',
        components: <Home />
    }
]

const Index: React.FC<PropsTypes> = (props) => {
    return (
        <div>
            <NavBar/>
            <Routes>
                {pagesList.map((page) => {
                    return (<Route path={page.path} element={page.components}></Route>)
                })}
            </Routes>
        </div>
    )
}

export default Index