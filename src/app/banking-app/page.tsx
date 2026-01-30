import Image from "next/image";

export default function BankingApp() {
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
          Banking App Login / Register
        </h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/Banking-login.png"
            alt="Banking App Login"
            width={900}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        <div className="bg-gray-50 rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold">Description:</h2>
          <p>
            The Banking App login screen allows users to securely access their
            accounts using Firebase Authentication. The interface is clean and
            intuitive, featuring email and password validation, clear error
            handling, and secure session management.
          </p>

          <h2 className="text-xl font-semibold">Why:</h2>
          <p>
            A secure and intuitive authentication flow is critical for any
            financial application. This section demonstrates a focus on user
            experience, security best practices, and authentication integration.
          </p>

          <h2 className="text-xl font-semibold">Database / Auth:</h2>
          <p>Firebase Authentication</p>
        </div>
      </section>

      {/* Transfers Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            Transfers Dashboard
          </h1>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/Screenshot 2025-09-12 at 19.19.13.png"
              alt="Transfers Dashboard"
              width={900}
              height={500}
              className="rounded-xl shadow"
            />
          </div>

          <div className="bg-white rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold">Description:</h2>
            <p>
              Users can transfer funds between accounts using a unique bank ID,
              as well as deposit and withdraw funds. The application verifies
              recipient existence and updates account balances in real time using
              Firestore.
            </p>

            <h2 className="text-xl font-semibold">Why:</h2>
            <p>
              This dashboard highlights real-time data synchronization, validation
              logic, and secure user-to-user interactions—core requirements for
              modern financial applications.
            </p>

            <h2 className="text-xl font-semibold">Database:</h2>
            <p>Firebase Firestore</p>
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Transactions & History
        </h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/Transactions.png"
            alt="Transactions Page"
            width={900}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        <div className="bg-gray-50 rounded-xl shadow p-8 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold">Description:</h2>
          <p>
            The Transactions page allows users to view a detailed history of
            deposits, withdrawals, and transfers. Each transaction can be deleted,
            with balances automatically recalculated and updated in real time.
          </p>

          <h2 className="text-xl font-semibold">Why:</h2>
          <p>
            This section demonstrates CRUD operations, real-time updates, and
            data consistency handling using Firestore. It reinforces reliability
            and transparency—essential traits for banking applications.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-xl shadow p-8 space-y-4">
            <h2 className="text-2xl font-semibold">
              Coding Languages & Technologies
            </h2>
            <ul className="list-disc pl-6">
              <li>Javascript</li>
              <li>Next.js (React)</li>
              <li>CSS</li>
              <li>Firebase Authentication</li>
              <li>Firebase Firestore</li>
              <li>HTML5</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex justify-center gap-6 py-20">
        <a
          href="https://banking-app-firebase.netlify.app/dashboard.html"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition"
        >
          Try Out The Website
        </a>
        <a
          href="https://github.com/RamzMA/Banking-App-Firebase"
          className="bg-white border px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Download From GitHub
        </a>
      </div>
    </div>
  );
}
