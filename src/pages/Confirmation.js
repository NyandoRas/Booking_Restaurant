import { useLocation, Link } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="text-center max-w-lg mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-4">No booking found.</h2>
        <Link
          to="/booking"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
        >
          Make a Booking
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Booking Confirmed!</h2>
      <p className="mb-2"><strong>Name:</strong> {booking.name}</p>
      <p className="mb-2"><strong>Email:</strong> {booking.email}</p>
      <p className="mb-2"><strong>Date:</strong> {booking.date}</p>
      <p className="mb-2"><strong>Time:</strong> {booking.time}</p>
      <p className="mb-6"><strong>Guests:</strong> {booking.guests}</p>
      <Link
        to="/"
        className="block w-full text-center bg-pink-600 text-white font-semibold py-3 rounded-full hover:bg-pink-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
