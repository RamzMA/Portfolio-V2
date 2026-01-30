import Image from "next/image";

export default function WageCalculatorWeb() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/R.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </a>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="/" className="hover:text-blue-400">About Me</a></li>
            <li><a href="/" className="hover:text-blue-400">My Skills</a></li>
            <li><a href="/" className="hover:text-blue-400">Projects</a></li>
            <li><a href="/" className="hover:text-blue-400">Contact Me</a></li>
            <li><a href="/" className="hover:text-blue-400">Education</a></li>
            <li><a href="/" className="hover:text-blue-400">Socials</a></li>
          </ul>
        </div>
      </nav>

      {/* Login Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Wage Calculator Login
        </h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/WCP1.PNG"
            alt="Wage Calculator Login"
            width={900}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        <div className="bg-gray-50 rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold">Description:</h2>
          <p>
            The Wage Calculator login screen provides a secure and intuitive entry
            point for users to access personalised wage calculation tools. The
            interface uses Firebase Authentication, allowing users to log in with
            email and password while benefiting from built-in validation and error
            handling. The clean layout and responsive design ensure accessibility
            across desktop and mobile devices.
          </p>

          <h2 className="text-xl font-semibold">Why:</h2>
          <p>
            Secure authentication is essential when handling financial data.
            This login system demonstrates best practices in user authentication,
            data protection, and UX-focused design. It ensures users can safely
            access their wage information while keeping the entry process fast
            and frustration-free.
          </p>

          <h2 className="text-xl font-semibold">Authentication:</h2>
          <p>Firebase Authentication</p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            Wage Calculator Dashboard
          </h1>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/WCP2.PNG"
              alt="Wage Calculator Dashboard"
              width={900}
              height={500}
              className="rounded-xl shadow"
            />
          </div>

          <div className="bg-white rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold">Description:</h2>
            <p>
              The Wage Calculator dashboard allows users to calculate their earnings
              based on hourly pay, special day rates, and worked hours. Users can
              input values dynamically and instantly see calculated results for
              daily, weekly, or monthly wages. Calculations update in real time,
              providing immediate feedback.
            </p>

            <h2 className="text-xl font-semibold">Why:</h2>
            <p>
              This feature showcases practical JavaScript logic, real-time UI
              updates, and form handling. It solves a real-world problem by helping
              users quickly understand their income, supporting better budgeting
              and financial planning.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-xl shadow p-8 space-y-4">
          <h2 className="text-2xl font-semibold">
            Coding Languages & Technologies
          </h2>
          <ul className="list-disc pl-6">
            <li>Swift</li>
          </ul>
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
