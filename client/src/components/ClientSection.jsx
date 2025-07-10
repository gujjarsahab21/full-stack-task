import { useEffect, useState } from 'react';

export default function ClientSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/clients`)
      .then(res => res.json())
      .then(data => setClients(data));
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {clients.map(client => (
          <div key={client._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <img
              src={client.image}
              alt={client.name}
              className="h-24 w-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
            />
            <p className="italic text-center text-gray-600 mb-3">"{client.description}"</p>
            <h3 className="text-center font-semibold text-lg text-blue-900">{client.name}</h3>
            <p className="text-center text-sm text-gray-500">{client.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
