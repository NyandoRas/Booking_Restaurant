import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import RevealOnScroll from "../components/RevealOnScroll";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <Hero />
      <RevealOnScroll>
      <Testimonials />
      {/* Main Home Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16"
      >
        <section className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary-light">
            Welcome to DineEasy
          </h1>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Book your perfect table at the best restaurants with just a few clicks.
          </p>
          <div className="space-x-4">
            <Link
              to="/booking"
              className="inline-block bg-primary-dark text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary-light transition"
            >
              Book a Table Now
            </Link>
            <Link
              to="/restaurants"
              className="inline-block border border-primary-dark text-primary-dark font-semibold px-8 py-3 rounded-full hover:bg-primary-dark hover:text-white transition"
            >
              Browse Restaurants
            </Link>
          </div>
        </section>
      </motion.div>
      </RevealOnScroll>
    </>
  );
}
