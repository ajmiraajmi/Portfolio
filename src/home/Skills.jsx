import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-white text-4xl font-bold text-center mb-10 uppercase">
        Skills
      </h1>

      <Slider {...settings}>
        <div className="group text-center">
          <IoLogoHtml5 className="text-white text-6xl group-hover:text-orange-600 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-orange-600 transition duration-300">HTML5</div>
        </div>

        <div className="group text-center">
          <IoLogoCss3 className="text-white text-6xl group-hover:text-blue-600 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-blue-600 transition duration-300">CSS3</div>
        </div>

        <div className="group text-center">
          <IoLogoJavascript className="text-white text-6xl group-hover:text-yellow-400 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-yellow-400 transition duration-300">JavaScript</div>
        </div>

        <div className="group text-center">
          <RiTailwindCssFill className="text-white text-6xl group-hover:text-teal-400 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-teal-400 transition duration-300">Tailwind CSS</div>
        </div>

        <div className="group text-center">
          <FaBootstrap className="text-white text-6xl group-hover:text-purple-600 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-purple-600 transition duration-300">Bootstrap</div>
        </div>

        <div className="group text-center">
          <FaReact className="text-white text-6xl group-hover:text-blue-400 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-blue-400 transition duration-300">React</div>
        </div>

        <div className="group text-center">
          <SiMongodb className="text-white text-6xl group-hover:text-green-500 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-green-500 transition duration-300">MongoDB</div>
        </div>

        <div className="group text-center">
          <FaNodeJs className="text-white text-6xl group-hover:text-green-600 transition duration-300 transform group-hover:scale-110" />
          <div className="mt-2 text-white group-hover:text-green-600 transition duration-300">Node.js</div>
        </div>
      </Slider>
    </div>
  )
}

export default Skills;
