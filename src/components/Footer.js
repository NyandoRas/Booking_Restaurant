import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        {icons.map(({ icon, link }, idx) => (
          <motion.a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, color: "#FACC15" }} // Yellow glow on hover
            whileTap={{ scale: 0.9 }}
            className="text-2xl"
          >
            {icon}
          </motion.a>
        ))}
      </div>
      <p className="text-center mt-6 text-sm">&copy; {new Date().getFullYear()} DineEasy. All rights reserved.</p>
    </footer>
  );
}
