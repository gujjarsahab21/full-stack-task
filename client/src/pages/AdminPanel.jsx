import { useNavigate } from "react-router-dom";
import AddProjectForm from "../admin/AddProjectForm";
import AddClientForm from "../admin/AddClientForm";
import ContactList from "../admin/ContactList";
import SubscriberList from "../admin/SubscriberList";

export default function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-10">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">Admin Dashboard</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 cursor-pointer transition"
          >
            Switch to Landing Mode
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              ➕ Add Project
            </h2>
            <AddProjectForm />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              👤 Add Client
            </h2>
            <AddClientForm />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📨 Contact Submissions
          </h2>
          <ContactList />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📧 Newsletter Subscribers
          </h2>
          <SubscriberList />
        </div>
      </main>
    </div>
  );
}
