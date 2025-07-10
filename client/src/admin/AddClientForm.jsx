import { useState, useRef } from "react";
import { toast } from "react-toastify";

export default function AddClientForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: ""
  });

  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // ✅ Loading state
  const fileInputRef = useRef(); // ✅ To reset file input

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
    setIsLoading(true); // ✅ Start loading

    try {
      const imageUrl = await handleImageUpload();

      const finalForm = {
        name: form.name,
        designation: form.designation,
        description: form.description,
        image: imageUrl
      };

      await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalForm)
      });

      toast.success("Client added!");
      setForm({ name: "", designation: "", description: "", image: "" });
      setFile(null);

      if (fileInputRef.current) fileInputRef.current.value = ""; // ✅ Clear file input
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false); // ✅ Stop loading
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Client Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="designation"
        value={form.designation}
        onChange={handleChange}
        placeholder="Designation"
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
        {isLoading ? "Uploading..." : "Add Client"}
      </button>
    </form>
  );
}
