// /components/ProjectsShowcase.js
import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
  {
    title: "Path to Anime",
    description: "An Anime based Front-End Project Which I built using ReactJS,TailwindCSS.",
    link: "http://pathofanimeproject-five.vercel.app",
    image: "/images/animepage.png"
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
