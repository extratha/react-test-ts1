
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
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

const IndexWrap = styled.div`
`

const BodyContent = styled.div`
    padding: 50px 0 0 ;
`

const Index: React.FC<PropsTypes> = (props) => {
    return (
        <IndexWrap >
            <NavBar />
            <BodyContent>
                <Routes>
                    {pagesList.map((page, index) => {
                        return (<Route key={index}  path={page.path} element={page.components}></Route>)
                    })}
                </Routes>
            </BodyContent>
        </IndexWrap>
    )
}

export default Index