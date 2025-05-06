import React, { useEffect, useState } from 'react'
import HomeSlider from '../Components/Home/HomeSlider';



import Hero from '../Components/Hero_Img/Hero';
const Home = () => {




    return (
        <div className='home pb-5 bg-black'>
            <Hero />
            {/* <HomeSlider content="News" /> */}
            <HomeSlider content="Movie" />
            <HomeSlider content="Series" />
            <HomeSlider content="Upcoming" />


        </div>
    )
}

export default Home