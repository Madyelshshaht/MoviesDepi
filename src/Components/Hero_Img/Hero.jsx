import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Info, PlayIcon } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Pagination } from 'swiper/modules';
import { PuffLoader } from "react-spinners";

const Hero = () => {
    const [Trend, setTrend] = useState([]);
    const [loading, setLoading] = useState(false)
    // console.log(Trend)

    const [showIframe, setShowIframe] = useState(false);

    const toggleIframe = () => {
        setShowIframe(!showIframe);
    };

    const closeIframe = () => {
        if (showIframe) setShowIframe(false);
    };

    const GetTrend = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39");
            const data = await res.json();
            setTrend(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        GetTrend();
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading text-white d-flex justify-content-center align-items-center ">
                    <PuffLoader color="#ff0000" />
                </div>
            ) : (
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {Trend?.map((t) => {
                        return (
                            <>
                                <SwiperSlide key={t.id}>
                                    <div
                                        className="Hero "
                                        onClick={closeIframe}
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original${t.poster_path})`,
                                        }}
                                    >

                                        <div
                                            className={`${showIframe ? "overlay" : "nooverlay"
                                                } additional-class`}
                                        ></div>
                                        {showIframe && (
                                            <iframe
                                                src="https://www.youtube.com/embed/hUUszE29jS0?si=uYnP6ZEnGIylQlT7"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                                referrerpolicy="strict-origin-when-cross-origin"
                                                allowfullscreen
                                                className="ifram w-full h-96 rounded-lg shadow-lg border z-3 position-absolute "
                                            ></iframe>
                                        )}

                                        <div className="content ms-md-5 container py-2">
                                            <div className="info-top d-flex align-items-center gap-3 mb-5">
                                                <h3 className="fs-2 fw-bold text-white">Movies</h3>
                                            </div>
                                            <div className="info-bottom">
                                                <h1 className="title text-uppercase text-white">
                                                    {t.title ? t.title : t.original_name}
                                                </h1>
                                                <h3 className=" mb-4 fw-bold mt-0 text-white">
                                                    {t.media_type}
                                                </h3>
                                                <div className="desc text-white ">{t.overview}</div>
                                                <div className="buttons d-flex gap-3 pt-4">
                                                    <div
                                                        className="d-flex gap-1 align-items-center btn btn-outline-success text-white position-relative z-3"
                                                        onClick={toggleIframe}
                                                    >

                                                        <span className="fw-semibold play">
                                                            {!showIframe ? (
                                                                <span>
                                                                    <PlayIcon size={18} /> {"Play"}
                                                                </span>
                                                            ) : (
                                                                "Close"
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-1 align-items-center btn btn-outline-secondary text-white">
                                                        <span>

                                                            <Info size={18} />
                                                        </span>
                                                        <span className="fw-semibold info"> Info </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
            )}

        </>
    );
};

export default Hero;
