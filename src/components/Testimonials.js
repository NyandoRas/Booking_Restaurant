import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice M.",
    text: "DineEasy made booking a table so easy! Loved the interface and speed.",
  },
  {
    id: 2,
    name: "John D.",
    text: "Great restaurant options and smooth experience. Highly recommend!",
  },
  {
    id: 3,
    name: "Sophia K.",
    text: "I booked a last-minute dinner, and everything went perfectly. Thanks!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto cycle every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [index]);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="max-w-3xl mx-auto my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>

      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-lg italic text-gray-700 dark:text-gray-300"
          >
            “{testimonials[index].text}”
          </motion.blockquote>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={"author-" + testimonials[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 font-semibold text-primary-dark dark:text-primary-light"
          >
            — {testimonials[index].name}
          </motion.p>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-3">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="bg-primary-dark hover:bg-primary-light text-white rounded-full p-2 shadow"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="bg-primary-dark hover:bg-primary-light text-white rounded-full p-2 shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
