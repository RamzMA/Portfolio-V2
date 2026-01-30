"use client";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaReact, 
  FaSwift, 
  FaGitAlt, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaDatabase, 
  FaBook, 
  FaFire 
} from "react-icons/fa";
 import Image from "next/image";

export default function App() {
  // Typewriter effect for intro
  const typewriterText = "An aspiring full stack developer and college student at Maynooth University!";
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 60;
  const deletingSpeed = 40;
  const pauseTime = 1200;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isDeleting && charIndex <= typewriterText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(typewriterText.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(typewriterText.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (charIndex > typewriterText.length) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex(charIndex - 1);
      }, pauseTime);
    } else if (charIndex < 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setCharIndex(0);
      }, pauseTime);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, typewriterText]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Navbar */}
     <NavBar />

      {/* Hero Section */}
      <section className="py-24 bg-linear-to-br from-emerald-50 via-cyan-50 to-blue-50 relative overflow-hidden" id="aboutme">
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-size-[40px_40px]"></div>
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto relative z-10">
            <motion.div 
              className="flex-1 text-center md:text-left"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-6xl font-extrabold mb-4 bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hello There!
              </motion.h1>
              <h2 className="text-3xl font-semibold mb-6 text-slate-800">
                I'M <span className="text-emerald-600 font-bold">RAMZ AHMED</span>
              </h2>
              <div className="text-xl text-slate-700 mb-8 min-h-20">
                <span>{displayed}</span>
                <motion.span 
                  className="inline-block w-0.5 h-6 bg-emerald-600 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
              <motion.a 
                className="inline-block px-8 py-4 bg-linear-to-r from-emerald-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                href="#about_me"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More!
              </motion.a>
            </motion.div>
            <motion.div 
              className="flex-1 flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src="/images/IMG_7249.jpg" 
                  alt="Ramz Ahmed" 
                  width={320}
                  height={320}
                  className="w-80 h-80 rounded-full shadow-2xl object-cover ring-8 ring-white"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Me */}
      <section className="py-20 bg-white" id="about_me">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">About</span> Me
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-linear-to-br from-slate-50 to-slate-100 p-10 rounded-3xl shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-slate-800">Hello! I'm Ramz Ahmed</h3>
              <p className="text-lg text-slate-600 mb-3">3rd Year Student at Maynooth University</p>
              <p className="text-base text-slate-700 mb-4 leading-relaxed">
                A 21-year-old aspiring full stack developer passionate about building seamless user experiences with HTML, CSS, and JavaScript, and developing robust server-side logic using Node.js, Express, and databases like MongoDB and SQL.
              </p>
              <p className="text-base text-slate-700 mb-6 leading-relaxed">
                Beyond coding, I enjoy exploring tech trends and working on personal projects. I'm eager to continue learning, tackle complex challenges, and contribute to meaningful projects. Feel free to check out my work.
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.a 
                  className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Out My Projects
                </motion.a>
                <motion.a 
                  className="px-6 py-3 bg-linear-to-r from-emerald-600 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  href="#myskills"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See My Skills
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-linear-to-br from-blue-50 via-cyan-50 to-emerald-50" id="myskills">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">My</span> Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FaJava, name: "Java", color: "text-red-600", description: "Started in my 1st year of college, strong foundation in OOP and algorithms." },
              { icon: FaPython, name: "Python", color: "text-blue-600", description: "Learned in my 5th/6th year of Secondary school, proficient in scripting and data analysis." },
              { icon: FaHtml5, name: "HTML", color: "text-orange-600", description: "Began in my 2nd year, skilled in creating structured web pages." },
              { icon: FaCss3Alt, name: "CSS", color: "text-blue-500", description: "Started in my 2nd year, adept at styling and responsive design." },
              { icon: FaJs, name: "JavaScript", color: "text-yellow-500", description: "Learned in my 2nd year, experienced in dynamic web applications." },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-600", description: "Started in my 2nd year, proficient in server-side development." },
              { icon: FaDatabase, name: "SQL", color: "text-slate-700", description: "Learned in my 2nd year, strong understanding of database management." },
              { icon: FaDatabase, name: "MongoDB", color: "text-green-700", description: "Started in my 2nd year, experienced with NoSQL databases." },
              { icon: FaBook, name: "Prolog", color: "text-purple-700", description: "Started in my 1st year of college, knowledge in logic programming." },
              { icon: FaDatabase, name: "Express", color: "text-slate-600", description: "Learned in my 2nd year, skilled in building RESTful APIs." },
              { icon: FaReact, name: "React", color: "text-cyan-500", description: "Self-taught, proficient in building interactive UIs." },
              { icon: FaSwift, name: "Swift", color: "text-orange-500", description: "Self-taught, knowledgeable in iOS app development." },
              { icon: FaFire, name: "Firebase", color: "text-yellow-600", description: "Self-taught, experienced in backend services and real-time databases." },
              { icon: FaGitAlt, name: "Git", color: "text-red-600", description: "Independent learning, proficient in version control and collaboration." }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <skill.icon className={`text-5xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{skill.name}</h3>
                <p className="text-center text-sm text-slate-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white" id="projects">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">My</span> Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                name: "DailyPulse", 
                description: "A news aggregation platform with real-time updates",
                image: "/images/DPPAGE1.png",
                icons: [FaDatabase, FaHtml5, FaCss3Alt, FaJs],
                gradient: "from-blue-600 to-cyan-600",
                link: "/dailypulse-web"
              },
              { 
                name: "Event2Nite", 
                description: "Event discovery and management application",
                image: "/images/Event2NiteSearch.png",
                icons: [FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt],
                gradient: "from-purple-600 to-pink-600",
                link: "/event2nite"
              },
              { 
                name: "Youtube Remake", 
                description: "A modern recreation of YouTube's interface",
                image: "/images/YTP1.png",
                icons: [FaHtml5, FaCss3Alt],
                gradient: "from-red-600 to-orange-600",
                link: "/youtube-web"
              },
              { 
                name: "Banking Website", 
                description: "Secure banking platform with Firebase integration",
                image: "/images/Banking-login.png",
                icons: [FaHtml5, FaCss3Alt, FaJs, FaFire],
                gradient: "from-emerald-600 to-green-600",
                link: "/banking-app"
              },
              { 
                name: "Wage Calculator", 
                description: "iOS app for calculating wages and taxes",
                image: "/images/calculator-one-icon-1024x1024-2pxb4tpa.png",
                icons: [FaDatabase, FaSwift],
                gradient: "from-yellow-600 to-amber-600",
                link: "/wage-calculator-web"
              }
            ].map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-linear-to-br from-slate-50 to-slate-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-2 bg-linear-to-r ${project.gradient}`}></div>
                <div className="p-8">
                  <Image src={project.image} alt={project.name} width={320} height={180} className="rounded mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 text-slate-800">{project.name}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex gap-3 mb-6 text-2xl">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} className="text-slate-700 group-hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <motion.a 
                    href={project.link} 
                    className={`inline-block px-6 py-3 bg-linear-to-r ${project.gradient} text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-linear-to-br from-emerald-50 via-cyan-50 to-blue-50" id="contactme">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Contact</span> Me
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <motion.form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="bg-white p-10 rounded-3xl shadow-2xl space-y-6"
              whileHover={{ y: -5 }}
            >
              <input type="hidden" name="access_key" value="96f19ebd-9325-4b9d-975d-16f11ff67927" />
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full border-2 border-slate-200 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-500 text-black"
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full border-2 border-slate-200 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-500 text-black"
                  required 
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows={5}
                  className="w-full border-2 border-slate-200 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-slate-500 text-black"
                  required 
                />
              </div>
              <motion.button 
                type="submit" 
                className="w-full px-6 py-4 bg-linear-to-r from-emerald-600 to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      {/* Education */}
      <section className="py-20 bg-white" id="education">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My</span> Education
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                year: "Year 1",
                semesters: [
                  {
                    name: "Semester 1",
                    courses: [
                      "Introduction to Programming I",
                      "Introduction to Data Science I",
                      "Computer Systems I",
                      "Linear Algebra",
                      "Differential Calculus",
                      "From Cell to Organism"
                    ]
                  },
                  {
                    name: "Semester 2",
                    courses: [
                      "Introduction to Programming II",
                      "Introduction to Data Science II",
                      "Computer Systems II",
                      "Linear Algebra",
                      "Integral Calculus",
                      "Biological Function & Diversity"
                    ]
                  }
                ]
              },
              {
                year: "Year 2",
                semesters: [
                  {
                    name: "Semester 1",
                    courses: [
                      "Data Structures and Algorithms I",
                      "Computer Architecture",
                      "Software Testing",
                      "Introduction to Statistics",
                      "Calculus 3",
                      "Databases"
                    ]
                  },
                  {
                    name: "Semester 2",
                    courses: [
                      "Data Structures and Algorithms II",
                      "Software Engineering & Software Process",
                      "Web Information Processing",
                      "Introduction to UX UI",
                      "Theory of Computation",
                      "Operating Systems, Communication and Concurrency"
                    ]
                  }
                ]
              },
              {
                year: "Year 3",
                semesters: [
                  {
                    name: "Semester 1",
                    courses: [
                      "Computation & Complexity",
                      "Computer Networks",
                      "Programming Languages & Compilers",
                      "Software Design",
                      "Software Verification",
                      "Team Project"
                    ]
                  }
                ]
              },
              {
                year: "Year 4",
                semesters: [
                  {
                    name: "Semester 1",
                    courses: ["Coming Soon..."]
                  },
                  {
                    name: "Semester 2",
                    courses: ["Coming Soon..."]
                  }
                ]
              }
            ].map((yearData, index) => (
              <motion.div
                key={yearData.year}
                className="bg-linear-to-br from-slate-50 to-slate-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b-2 border-emerald-500 pb-2">
                  {yearData.year}
                </h3>
                {yearData.semesters.map((semester) => (
                  <div key={semester.name} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-lg text-slate-700 mb-3">{semester.name}</h4>
                    <ul className="space-y-2">
                      {semester.courses.map((course, i) => (
                        <li key={i} className="flex items-start text-slate-600">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span className="text-sm">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Socials */}
      <section className="py-20 bg-linear-to-br from-purple-50 via-pink-50 to-blue-50" id="socials">
        <motion.div 
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">My Socials</span> 
          </motion.h2>
          <motion.div 
            className="flex gap-12 justify-center"
            variants={itemVariants}
          >
            {[
              { icon: FaLinkedin, color: "text-blue-600", hoverColor: "hover:text-blue-700", link: "https://www.linkedin.com/in/ramz-ahmed-179688225/" },
              { icon: FaGithub, color: "text-slate-800", hoverColor: "hover:text-slate-900", link: "https://github.com/RamzMA" },
              { icon: FaEnvelope, color: "text-emerald-600", hoverColor: "hover:text-emerald-700", link: "mailto:Ramzahmedm@gmail.com" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.link} 
                className={`${social.color} ${social.hoverColor} transition-colors duration-300`}
                target={social.link.startsWith('http') ? "_blank" : undefined}
                rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <social.icon className="text-5xl" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-300">2026 Ramz Ahmed</p>
        </div>
      </footer>
    </div>
  );
}
