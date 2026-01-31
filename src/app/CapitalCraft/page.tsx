import NavBar from "../components/NavBar";
import Image from "next/image";

export default function CapitalCraftPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">CapitalCraft-V1</h1>
        <p className="text-center text-lg max-w-2xl mx-auto mb-8">
          CapitalCraft is a modern social finance platform where users can share financial posts, engage in discussions, and build personal profiles. Built as a full-stack portfolio application, it emphasizes real-world architecture, authentication, and API-driven design.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <Image src="/images/Login.png" alt="Login" width={500} height={250} className="rounded-xl shadow" />
          <Image src="/images/Register.png" alt="Register" width={500} height={250} className="rounded-xl shadow" />
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <Image src="/images/Feed1.png" alt="Feed 1" width={500} height={250} className="rounded-xl shadow" />
          <Image src="/images/Feed2.png" alt="Feed 2" width={500} height={250} className="rounded-xl shadow" />
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <Image src="/images/Create.png" alt="Create Post" width={500} height={250} className="rounded-xl shadow" />
          <Image src="/images/Edit.png" alt="Edit Post" width={500} height={250} className="rounded-xl shadow" />
        </div>
        <div className="bg-white rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold">Description:</h2>
          <p>
            CapitalCraft is a clean, secure, and scalable space for finance-focused conversations. Users can register, log in, create posts, comment, and interact with others in a modern, responsive UI. The backend is built with FastAPI, SQLAlchemy, and JWT authentication, while the frontend uses React, TypeScript, and Tailwind CSS.
          </p>
          <h2 className="text-xl font-semibold">Why:</h2>
          <p>
            This project demonstrates full-stack development skills, secure authentication flows, API-first backend design, and a clean, modern UI/UX. It is not a tutorial clone, but an evolving real-world application for learning and portfolio use.
          </p>
          <h2 className="text-xl font-semibold">Tech Stack:</h2>
          <ul className="list-disc pl-6">
            <li>Backend: Python, FastAPI, SQLAlchemy, SQLite (dev), JWT Auth</li>
            <li>Frontend: React (Vite), TypeScript, Tailwind CSS, Lucide Icons</li>
          </ul>
          <h2 className="text-xl font-semibold">Key Features:</h2>
          <ul className="list-disc pl-6">
            <li>JWT-based authentication (register/login)</li>
            <li>Public feed with posts from all users</li>
            <li>Comment system (create/delete your own)</li>
            <li>Post management (create/delete your own)</li>
            <li>Modern, responsive UI with dark mode</li>
          </ul>
          <h2 className="text-xl font-semibold">Planned Improvements:</h2>
          <ul className="list-disc pl-6">
            <li>Likes on posts</li>
            <li>Image support for posts</li>
            <li>Charts, graphs, and financial visuals</li>
            <li>User profile page</li>
            <li>Footer with links & metadata</li>
            <li>Migration to PostgreSQL</li>
          </ul>
        </div>
      </section>


      {/* Buttons */}
      <div
        id="checkoutproject"
        className="flex justify-center gap-6 py-20"
      >
        <a
          href="https://capitalcraft-ra.netlify.app/login"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow"
        >
          Try Out The Website
        </a>
        <a
          href="https://github.com/RamzMA/CapitalCraft"
          className="bg-white border px-6 py-3 rounded-full hover:bg-gray-100"
        >
          Download From GitHub
        </a>
      </div>
    </div>
  );
}
