import React, { useState } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 2000); // simulate 2 seconds loading
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {loading ? (
        <LoadingSpinner />
      ) : submitted ? (
        <div className="bg-green-100 dark:bg-green-800 p-4 rounded text-green-800 dark:text-green-200 text-center">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-2 border rounded focus:outline-none resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary-dark hover:bg-primary-light text-white font-semibold px-6 py-3 rounded shadow transition"
          >
            Send Message
          </button>
        </form>
      )}
    </motion.div>
  );
}
