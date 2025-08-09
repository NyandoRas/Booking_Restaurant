export default function About() {
  return (
    <section className="max-w-4xl mx-auto p-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary-dark dark:text-primary-light">About DineEasy</h1>
      <p className="mb-4 leading-relaxed">
        DineEasy is your go-to platform for seamless restaurant bookings.
        We believe everyone deserves a memorable dining experience.
      </p>
      <p className="mb-4 leading-relaxed">
        Our mission is to connect food lovers with the best tables in town,
        backed by exceptional service and easy-to-use technology.
      </p>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
        alt="Restaurant"
        className="rounded-lg shadow-lg mx-auto"
      />
    </section>
  );
}
