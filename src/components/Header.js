import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Sync dark mode class on body
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/restaurants', label: 'Restaurants' },
    { to: '/booking', label: 'Book a Table' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-3xl font-extrabold text-primary-dark dark:text-primary-light">
          🍽️ DineEasy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center text-lg font-semibold">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-primary-dark dark:hover:text-primary-light transition ${
                location.pathname === to
                  ? 'text-primary-dark dark:text-primary-light'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="ml-4 px-3 py-1 rounded border border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light hover:bg-primary-dark hover:text-white transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-3xl text-primary-dark dark:text-primary-light"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-6 space-y-4 font-semibold text-lg text-center">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block ${
                location.pathname === to
                  ? 'text-primary-dark dark:text-primary-light'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="mt-4 inline-block px-4 py-2 rounded border border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light hover:bg-primary-dark hover:text-white transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
}
