import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaPlay, FaPlus } from "react-icons/fa";

const Slider_Com = ({ img, data }) => {
    console.log("Data", data)
    return (
        <div className="img d-flex flex-column px-1 my-2">
            {/* <img src={img} alt="img" />
            <div className="info">
                <div className="icons my-2 d-flex text-white align-items-center gap-2">
                    <FaPlay size={20} className='border rounded-pill icon' />
                    <FaPlus size={20} className='border rounded-pill icon' />
                    <BiLike size={21} className='border rounded-pill icon' />
                    <BiDislike size={21} className='border rounded-pill icon' />
                </div>
                <div className="itemInfoTop d-flex text-white gap-1 align-items-center">
                    <span>1 hours 14 mins</span>
                    <span> +16 </span>
                    <span> 1999 </span>
                </div>
                <div className="desc text-start text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum ad magni quidem nemo sequi laborum repellat alias quis corrupti.
                </div>
            </div> */}
        </div>
    )
}

export default Slider_Com