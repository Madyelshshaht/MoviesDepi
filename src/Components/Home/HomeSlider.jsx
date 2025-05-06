import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Slider_Com from './Slider_Com';
import "./HomeSlider.css";

import { BiDislike, BiLike } from 'react-icons/bi';
import { FaPlay, FaPlus } from "react-icons/fa";


const HomeSlider = ({ content }) => {
    const [movieData, setMovieData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);
    const [upcomingData, setUpcomingData] = useState([]);

    console.log(upcomingData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieApi = fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39");
                const seriesApi = fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39");
                const upcomingApi = fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39");

                const [movieRes, seriesRes, upcomingRes] = await Promise.all([movieApi, seriesApi, upcomingApi]);

                const movieJson = await movieRes.json();
                const seriesJson = await seriesRes.json();
                const upcomingJson = await upcomingRes.json();



                setMovieData(movieJson.results);
                setSeriesData(seriesJson.results);
                setUpcomingData(upcomingJson.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // تحديد المحتوى الذي سيتم عرضه حسب الـ "content" المرسل
    const getDataByContent = () => {
        if (content === "Movie") return movieData;
        if (content === "Series") return seriesData;
        if (content === "Upcoming") return upcomingData;
        return [];
    };

    return (
        <div className='HomeSlider mt-5'>
            <h1 className='text-white fw-bold px-4 py-1 text-uppercase'>{content}</h1>
            <Swiper
                className="mySwiper text-center"
                navigation={true}
                modules={[Navigation]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1244: {
                        slidesPerView: 5,
                    },
                }}
            >
                {getDataByContent()?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="img d-flex flex-column px-1 my-2">
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="img" />
                            <div className="info">
                                <div className="icons my-2 d-flex text-white align-items-center gap-2">
                                    <FaPlay size={20} className='border rounded-pill icon' />
                                    <FaPlus size={20} className='border rounded-pill icon' />
                                    <BiLike size={21} className='border rounded-pill icon' />
                                    <BiDislike size={21} className='border rounded-pill icon' />
                                </div>
                                <div className="d-flex ">{item.title}</div>
                                <div className="itemInfoTop d-flex text-white gap-1 align-items-center">
                                    <span>1 hours 14 mins</span>
                                    <span> +16 </span>
                                    <span> 1999 </span>
                                </div>
                                <div className="desc text-start text-white ">
                                    {item.overview.slice(0,200)}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeSlider;
