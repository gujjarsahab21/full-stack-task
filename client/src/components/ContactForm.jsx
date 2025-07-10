import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({ fullName: "", email: "", mobile: "", city: "" });
  const [errors, setErrors] = useState({});

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.fullName) errs.fullName = "Full name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email format";
    if (!form.mobile) errs.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.mobile)) errs.mobile = "Mobile must be 10 digits";
    if (!form.city) errs.city = "City is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    toast.success("Form submitted successfully!");
    setForm({ fullName: "", email: "", mobile: "", city: "" });
    setErrors({});
  };

  return (
    <section className="py-10 bg-white px-4">
      <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {['fullName', 'email', 'mobile', 'city'].map(field => (
            <div key={field}>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field.replace(/([A-Z])/, ' $1')}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </section>
  );
}