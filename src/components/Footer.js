import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        <div className="mb-4 space-x-6 text-2xl">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary-dark dark:hover:text-primary-light transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary-dark dark:hover:text-primary-light transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary-dark dark:hover:text-primary-light transition">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} DineEasy. All rights reserved.</p>
      </div>
    </footer>
  );
}
