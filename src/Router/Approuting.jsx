
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NavbarMenu from '../Components/navbar/Navbar'
import Footer from '../Components/Footer/Footer'


const Approuting = () => {
    return (
        <>
            <NavbarMenu />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Approuting