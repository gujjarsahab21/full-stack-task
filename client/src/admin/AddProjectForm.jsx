import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProjectForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: ""
  });

  const [file, setFile] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    if (!file) return "";

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/upload/image", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    return data.imageUrl;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const imageUrl = await handleImageUpload();

    const finalForm = {
      name: form.name,
      description: form.description,
      image: imageUrl
    };

    await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalForm)
    });

    toast.success("Project added!");

    setForm({ name: "", description: "", image: "" });
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Project Name" className="w-full p-2 border rounded" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Project</button>
    </form>
  );
}
