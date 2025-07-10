import { useState, useRef } from "react";
import { toast } from "react-toastify";

export default function AddProjectForm() {
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // ✅
  const fileInputRef = useRef(); // ✅

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    if (!file) return "";

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/upload/image`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    return data.imageUrl;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true); // ✅ Show loading state

    try {
      const imageUrl = await handleImageUpload();

      const finalForm = {
        name: form.name,
        description: form.description,
        image: imageUrl
      };

      await fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalForm)
      });

      toast.success("Project added!");
      setForm({ name: "", description: "", image: "" });
      setFile(null);

      if (fileInputRef.current) fileInputRef.current.value = ""; // ✅ Clear input
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false); // ✅ Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={e => setFile(e.target.files[0])}
        className="w-full p-2 border rounded"
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 text-white rounded ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
      >
        {isLoading ? "Uploading..." : "Add Project"}
      </button>
    </form>
  );
}
