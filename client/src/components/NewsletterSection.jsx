import { useState } from "react";
import { toast } from "react-toastify";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async e => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    toast.success("Subscribed!");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-300 text-white py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 rounded  focus:outline-none"
          />
          <button type="submit" className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}