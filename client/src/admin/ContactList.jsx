import { useEffect, useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Mobile</th>
            <th className="p-2 border">City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="p-2 border">{contact.fullName}</td>
              <td className="p-2 border">{contact.email}</td>
              <td className="p-2 border">{contact.mobile}</td>
              <td className="p-2 border">{contact.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
