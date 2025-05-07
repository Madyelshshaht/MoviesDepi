
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../Pages/Home'
import NavbarMenu from '../Components/navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MovieListPage from '../Pages/MovieList'
import Login from "../Components/Login/Login"

const Approuting = () => {
    const location = useLocation();
    const hideNavbarFooter = location.pathname === '/login';
    return (
        <>
            {!hideNavbarFooter && <NavbarMenu />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movielist' element={<MovieListPage />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            {!hideNavbarFooter && <Footer />}
        </>
    )
}

export default Approuting