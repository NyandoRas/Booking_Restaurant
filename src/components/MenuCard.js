import React from "react";
import { motion } from "framer-motion";

export default function MenuCard({ dish }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer max-w-sm mx-auto"
    >
      <img
        src={dish.image}
        alt={dish.name}
        className="rounded-lg w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {dish.name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{dish.description}</p>
      <div className="text-yellow-600 font-bold text-lg">${dish.price}</div>
    </motion.div>
  );
}
