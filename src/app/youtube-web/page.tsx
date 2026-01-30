import Image from "next/image";
import NavBar from "../components/NavBar";

export default function YoutubeWeb() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <NavBar />

      {/* YouTube Remake Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          YouTube Homepage Remake
        </h1>

        {/* Main Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/YTP1.png"
            alt="YouTube Homepage Remake"
            width={900}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        {/* Text Content */}
        <div className="bg-gray-50 rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold mb-2">Description:</h2>
            <p>
              The YouTube Homepage Remake project replicates the look and feel of
              the official YouTube homepage using only HTML and CSS. The project
              carefully recreates key visual elements such as the navigation bar,
              search interface, video grid layout, thumbnails, and metadata
              styling. The layout follows modern design principles including
              spacing, alignment, and responsive behavior to ensure a consistent
              experience across screen sizes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Why:</h2>
            <p>
              This project was created as a practical exercise to demonstrate a
              strong understanding of HTML and CSS fundamentals. By avoiding
              JavaScript entirely, the focus is placed on layout techniques,
              responsive design, and modern CSS practices such as flexbox and grid.
              The project serves as a foundation for further expansion and shows
              the ability to recreate complex, real-world interfaces with clean
              and maintainable code.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Coding Languages & Technologies:
            </h2>
            <ul className="list-disc pl-6">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Button */}
      <div className="flex justify-center py-20">
        <a
          href="https://github.com/RamzMA/YoutubeCopy"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition"
        >
          Download From GitHub
        </a>
      </div>
    </div>
  );
}
