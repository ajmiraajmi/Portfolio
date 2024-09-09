import React from "react";
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      year: "2023",
      title: "Front-end Developer",
      location: "House - 8, Road - 2 Baridhara J Block, Dhaka 1212",
      company: "Battery Low Interactive Ltd.",
      jobType: "Internship",
    },
    {
      year: "2023",
      title: "Front-end Developer",
      location: "Remote",
      company: "Diginie_IT",
      jobType: "Internship",
    },
    {
      year: "2024",
      title: "Jr. Web Developer",
      location: "House 5 | Block B-2 | Pallabi | Dhaka",
      company: "Bangladesh Associate of IT Solution.",
      jobType: "On-Site",
    },
  ];

  return (
    <div className="container mx-56 py-8 px-4">
      <h1 className="text-4xl font-bold text-start text-white mb-8">Experience</h1>
     
      <div ref={experienceRef} className={`relative transition-opacity duration-1000 ${experienceInView ? 'opacity-100' : 'opacity-0'}`}>
        
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-8 flex items-start ${index < experiences.length - 1 ? 'pb-8' : ''}`}
          >
            {index < experiences.length - 1 && (
              <div className="absolute top-0 left-[-1px] transform h-full border-l-2 border-white "></div>
            )}
            {exp.year === "2024" && (
              <div className="absolute top-0 left-[-1px] transform h-full border-l-2 border-white"></div> 
            )}
            <div className=" mt-16 relative w-4 h-4 bg-white rounded-full -left-2"></div>
            <div className="ml-6 pl-4">
              <h2 className="text-2xl font-semibold text-white">{exp.year}</h2>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-white">Job Type: {exp.jobType}</p>
              <p className="text-white">Location: {exp.location}</p>
              <p className="text-white">Company: {exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
