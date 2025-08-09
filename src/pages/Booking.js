import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!form.date) return "Date is required.";
    if (!form.time) return "Time is required.";
    if (form.guests < 1) return "Number of guests must be at least 1.";
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    // Pass booking data via state
    navigate('/confirmation', { state: { booking: form } });
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Book Your Table</h2>

      {error && (
        <div className="mb-4 text-red-600 font-semibold bg-red-100 p-2 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-semibold">Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your full name"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-semibold">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="you@example.com"
            required
          />
        </label>

        <div className="flex space-x-4">
          <label className="block flex-1">
            <span className="text-gray-700 font-semibold">Date</span>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          <label className="block flex-1">
            <span className="text-gray-700 font-semibold">Time</span>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>
        </div>

        <label className="block">
          <span className="text-gray-700 font-semibold">Number of Guests</span>
          <input
            name="guests"
            type="number"
            min="1"
            max="20"
            value={form.guests}
            onChange={handleChange}
            className="mt-1 w-24 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-bold py-3 rounded-full hover:bg-pink-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
