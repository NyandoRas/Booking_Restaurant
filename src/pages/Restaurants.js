import { Link } from 'react-router-dom';

const restaurants = [
  {
    id: 1,
    name: 'The Fancy Fork',
    cuisine: 'French',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1541542684-291e9b2da04a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Sushi Central',
    cuisine: 'Japanese',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1548365328-8c88f6912b87?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Restaurants() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {restaurants.map(({ id, name, cuisine, rating, image }) => (
        <div key={id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1 text-primary-dark dark:text-primary-light">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{cuisine}</p>
            <p className="text-yellow-500 font-semibold mb-4">⭐ {rating.toFixed(1)}</p>
            <Link
              to="/booking"
              className="block w-full text-center bg-primary-dark text-white py-2 rounded-full hover:bg-primary-light transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
