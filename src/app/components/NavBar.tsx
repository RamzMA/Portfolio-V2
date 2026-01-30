"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xl font-bold">
            RA
          </div>
        </motion.a>
        <ul className="flex space-x-8 text-base">
          {pathname === "/" ? (
            <>
              {[
                { label: "About Me", anchor: "#aboutme" },
                { label: "My Skills", anchor: "#myskills" },
                { label: "Projects", anchor: "#projects" },
                { label: "Contact Me", anchor: "#contactme" },
                { label: "Education", anchor: "#education" },
                { label: "Socials", anchor: "#socials" },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.anchor}
                    className="hover:text-emerald-400 transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </>
          ) : (
            <motion.li
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/"
                className="hover:text-emerald-400 transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;