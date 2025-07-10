import { useEffect, useState } from "react";

export default function SubscriberList() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/subscribers")
      .then(res => res.json())
      .then(data => setSubscribers(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((sub) => (
            <tr key={sub._id}>
              <td className="p-2 border">{sub.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
