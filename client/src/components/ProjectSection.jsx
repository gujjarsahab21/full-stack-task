import { useEffect, useState } from 'react';

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{proj.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{proj.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
