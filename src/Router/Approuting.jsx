
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NavbarMenu from '../Components/navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MovieListPage from '../Pages/MovieList'


const Approuting = () => {
    return (
        <>
            <NavbarMenu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movielist' element={<MovieListPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Approuting