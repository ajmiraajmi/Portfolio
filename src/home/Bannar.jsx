import React from "react";
import Container  from "../shared/Container"
import resume from "../assets/cv/Resume.pdf"


const Banner = () => {
  return (
    <Container>
    <div className="mt-16 container mx-auto mb-40">
      <div className="grid grid-cols-2 gap-4 text-white">
        <div className="flex flex-col justify-center p-12">
          <h1 className="text-4xl mb-4">Hello, I am Ajmira.</h1>
          <p className="text-lg ">
            As a passionate and detail-oriented Frontend Developer, I aim to
            leverage my expertise in HTML, CSS, JavaScript, and modern frontend
            frameworks to create visually appealing, user-centric web
            applications.<br></br>
            My goal is to contribute to a dynamic team where I can utilize my
            skills in responsive design, performance optimization, and
            cross-browser compatibility to deliver exceptional user experiences.
            I am committed to continuous learning and staying abreast of
            emerging technologies to drive innovation and excellence in web
            development.
          </p>
        </div>
        {/* <div>
          <img
            src="your-image-url-here"
            alt="Banner Image"
            className="w-full h-auto"
          />
        </div> */}
      </div>
      <div className="mt-8 mx-10">
          <a
            href={resume} 
            download
          >
            <button className="py-4 px-3 bg-emerald-900 rounded-lg text-white text-xl">
              Download Resume
            </button>
          </a>
        </div>
    </div>
      </Container>
  );
};

export default Banner;
