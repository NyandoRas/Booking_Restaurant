import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <Link
      to="/booking"
      className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg px-6 py-4 flex items-center space-x-2 transition-transform transform hover:scale-110 z-50"
      aria-label="Book a table"
    >
      <FaUtensils size={24} />
      <span className="font-semibold text-lg">Book Now</span>
    </Link>
  );
}
