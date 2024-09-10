import React from 'react';
import Container from '@/shared/Container';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      image: "https://via.placeholder.com/300", 
      description: "This is a description of Project One. It involves using technologies like React and Node.js.",
      coreTech: ["React", "Node.js", "MongoDB"],
      liveLink: "#", // Replace with actual live link
      clientLink: "#", // Replace with actual client-side link
      serverLink: "#", // Replace with actual server-side link
    },
    {
      title: "Project Two",
      image: "https://via.placeholder.com/300", 
      description: "This is a description of Project Two. It involves using technologies like Angular and Express.js.",
      coreTech: ["Angular", "Express.js", "MySQL"],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
    },
    {
      title: "Project Three",
      image: "https://via.placeholder.com/300",
      description: "This is a description of Project Three. It involves using technologies like Vue.js and Firebase.",
      coreTech: ["Vue.js", "Firebase", "Firestore"],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
    },
  ];

  return (
    <Container>
      <div className="py-12 px-4 md:px-12 lg:px-20 bg-black mt-8">
      <h2 className="text-5xl font-bold text-start mb-8 text-white uppercase border-b border-slate-400 pb-4">
  Projects
</h2>

        <div className="grid grid-cols-1 gap-8 mt-12 mb-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-black rounded-lg shadow-lg overflow-hidden mt-8 border">
              {/* Flex container to place content on left and image on right */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                {/* Left Content */}
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.coreTech.map((tech, idx) => (
                      <span key={idx} className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-4">
                    <a href={project.liveLink} className="text-blue-400 hover:underline">
                      Live
                    </a>
                    <a href={project.clientLink} className="text-blue-400 hover:underline">
                      Client Side
                    </a>
                    <a href={project.serverLink} className="text-blue-400 hover:underline">
                      Server Side
                    </a>
                  </div>
                </div>
                {/* Right Image */}
                <div className="lg:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
