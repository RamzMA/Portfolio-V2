import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Event2Nite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <NavBar />

      {/* Event2Nite Portfolio Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Event2Nite Homepage
        </h1>

        {/* Main Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/Screenshot 2025-12-26 at 09.21.05.png"
            alt="Event2Nite Home Page"
            width={900}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        {/* Sub Pages */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Image
            src="/images/Event2NiteSearch.png"
            alt="Event2Nite Search Page"
            width={300}
            height={200}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/Event2NiteEvents.png"
            alt="Event2Nite Events Page"
            width={300}
            height={200}
            className="rounded-xl shadow"
          />
          <Image
            src="/images/Event2NiteMyEvents.png"
            alt="Event2Nite My Events Page"
            width={300}
            height={200}
            className="rounded-xl shadow"
          />
        </div>

        {/* Text Content */}
        <div className="bg-gray-50 rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold mb-2">Description:</h2>
            <p>
              Event2Nite is a modern, user-friendly web application designed to help
              users discover, create, and manage local events with ease. The homepage
              features a dynamic event search bar, a curated list of featured events,
              and an engaging, responsive interface that encourages exploration.
              Users can browse events by category, view detailed event information,
              and quickly find what’s happening in their area across all devices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Why:</h2>
            <p>
              Event2Nite was created to simplify the process of discovering and
              managing community events. Instead of relying on multiple platforms
              or social media posts, users can find, create, and organise events
              in one central location. The platform encourages community engagement,
              supports event organisers, and makes participation in local activities
              effortless for users of all technical abilities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Coding Languages & Technologies:</h2>
            <ul className="list-disc pl-6">
              <li>React</li>
              <li>Next.js (React)</li>
              <li>CSS</li>
              <li>JavaScript (event logic & interactions)</li>
              <li>HTML5</li>
              <li>Firebase</li>
              <li>Vite</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Backend / Database:</h2>
            <p>
              Firebase is used to handle authentication, event storage, and real-time
              data updates. This ensures secure user accounts, fast event retrieval,
              and scalable performance as the platform grows.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex justify-center gap-6 py-20">
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition"
        >
          Try Out The Website
        </a>
        <a
          href="#"
          className="bg-white border px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Download From GitHub
        </a>
      </div>
    </div>
  );
}
