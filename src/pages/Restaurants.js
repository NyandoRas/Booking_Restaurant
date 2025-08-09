import React from "react";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";
import RevealOnScroll from "../components/RevealOnScroll";

const dishes = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh salmon grilled to perfection with herbs and lemon.",
    price: "25.99",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
    price: "15.99",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: "12.99",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb28?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Restaurant() {
  return (
    <RevealOnScroll>
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dishes.map((dish) => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>
    </motion.div>
    </RevealOnScroll>
  );
}
