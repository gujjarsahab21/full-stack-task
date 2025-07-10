import { useNavigate } from "react-router-dom";
import ProjectSection from "../components/ProjectSection";
import ClientSection from "../components/ClientSection";
import ContactForm from "../components/ContactForm";
import NewsletterSection from "../components/NewsletterSection";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen font-sans scroll-smooth">
      <nav className="bg-[#6b7ad8] shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-bold">FlipBoard</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm md:text-base font-medium text-white">
            <a href="#" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
            <a
              href="#testimonials"
              className="hover:text-yellow-400 transition"
            >
              Testimonials
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white text-gray-900 "
      >
        <div className="text-center px-4">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-blue-600">FlipBoard</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 mb-8">
            Manage projects, track clients, collect contact submissions, and
            grow your newsletter – all from one place.
          </p>
          <button
            onClick={() => navigate("/admin")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Switch to Admin Mode
          </button>
        </div>
      </header>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Our Services
          </h2>
          <p className="mb-10 text-gray-700 max-w-3xl mx-auto">
            We deliver cutting-edge solutions in full stack development,
            user-centric design, and result-driven marketing tailored for
            startups to enterprises.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Web Development",
                desc: "Fast, responsive, and secure websites and web applications built with modern technologies.",
              },
              {
                title: "UI/UX Design",
                desc: "Designs that enhance usability, drive conversions, and elevate brand value.",
              },
              {
                title: "Digital Marketing",
                desc: "Marketing strategies to amplify your digital presence and reach the right audience.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">
            We are a team of passionate engineers, designers, and strategists
            creating digital solutions that solve real problems. Our focus is
            building tech with purpose and heart.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Our Projects
          </h2>
          <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
            From startup MVPs to enterprise-grade platforms, we’ve built
            products that drive results and delight users.
          </p>
          <ProjectSection />
        </div>
      </section>

      <section id="testimonials" className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Happy Clients
          </h2>
          <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
            Here's what our clients have to say about their experience working
            with us.
          </p>
          <ClientSection />
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-10">
            We'd love to hear from you! Send us a message and we’ll get back
            shortly.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-200 to-purple-400 text-white py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6">
            Get the latest insights, trends, and updates directly in your inbox.
          </p>
          <NewsletterSection />
        </div>
      </section>

      <footer className="bg-white py-6 px-6 shadow-inner mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4 md:gap-0">
          <div className="font-bold text-blue-700">FlipBoard</div>
          <div>© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
