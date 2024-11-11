// /components/ProjectItem.js
import React from 'react';

export default function ProjectItem({ title, description, link, image }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block max-w-xs mx-auto my-4">
      {image && <img src={image} alt={title} className="rounded-lg shadow-lg w-full" />}
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}
