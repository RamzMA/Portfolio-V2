import NavBar from "../components/NavBar";
import React from "react";
const DailyPulsePortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Navbar */}
      <NavBar />
       
      {/* Homepage */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Homepage</h1>

        <div className="flex justify-center mb-6">
          <img src="/images/DPPAGE1.png" className="rounded-xl shadow max-w-5xl w-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <img src="/images/DPPAGE2.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE3.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE4.png" className="rounded-xl shadow max-w-xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            The DailyPulse homepage is a vibrant and user-friendly interface designed
            to help users seamlessly balance work and life activities...
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            DailyPulse provides an all-in-one platform to manage tasks, wellness,
            and productivity without switching between apps.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>

      {/* Messages */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Messages Page</h1>

        <div className="flex justify-center mb-10">
          <img src="/images/DPPAGE5.png" className="rounded-xl shadow max-w-5xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            A messaging system allowing users to send, receive, and delete messages
            within the DailyPulse ecosystem.
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            Keeps communication centralized and improves productivity.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>

      {/* Sleep */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Sleep Page</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <img src="/images/DPPAGE6.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE7.png" className="rounded-xl shadow max-w-xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>Allows users to log and review sleep data.</p>

          <h2 className="font-semibold">Why:</h2>
          <p>Helps users track trends and improve sleep quality.</p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>

           {/* Schedule */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Schedule Page</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <img src="/images/DPPAGE8.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE9.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE10.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE11.png" className="rounded-xl shadow max-w-xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            The Schedule Page allows users to create, view, and manage daily events
            including dates, times, and descriptions.
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            Helps users stay organised, plan ahead, and track productivity.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>

      {/* Exercise */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Exercise Page</h1>

        <div className="flex justify-center mb-10">
          <img src="/images/DPPAGE12.png" className="rounded-xl shadow max-w-5xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            Users can log workouts by date and category such as push, pull, abs, and legs.
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            Encourages consistent fitness tracking and structured workout routines.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>

      {/* Work */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Work Page</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <img src="/images/DPPAGE13.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE14.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE15.png" className="rounded-xl shadow max-w-xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            A productivity hub including a timer, to-do list, and wage calculator.
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            Centralises work tools to improve efficiency and financial awareness.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">DailyPulse Steps Page</h1>

        <div className="flex justify-center mb-10">
          <img src="/images/DPPAGE16.png" className="rounded-xl shadow max-w-5xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            Designed to track daily steps and promote physical activity.
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            Feature not yet implemented due to time constraints.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>

      {/* Login */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          DailyPulse Login / Signup Page
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <img src="/images/DPPAGE17.png" className="rounded-xl shadow max-w-xl w-full" />
          <img src="/images/DPPAGE18.png" className="rounded-xl shadow max-w-xl w-full" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Description:</h2>
          <p>
            Secure authentication system allowing users to log in and save data across devices.
          </p>

          <h2 className="font-semibold">Why:</h2>
          <p>
            Ensures user data persistence and secure account access.
          </p>

          <h2 className="font-semibold">Coding Languages used:</h2>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h2 className="font-semibold">Database used:</h2>
          <p>Firebase</p>
        </div>
      </section>


      {/* Buttons */}
      <div
        id="checkoutproject"
        className="flex justify-center gap-6 py-20"
      >
        <a
          href="https://dailypulseweb.netlify.app/"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow"
        >
          Try Out The Website
        </a>
        <a
          href="https://github.com/RamzMA/DailyPulse-Website"
          className="bg-white border px-6 py-3 rounded-full hover:bg-gray-100"
        >
          Download From GitHub
        </a>
      </div>
    </div>
  );
};

export default DailyPulsePortfolio;
