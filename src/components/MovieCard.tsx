import type { Movie } from '../api/tmdb';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto"
      />
      <div className="p-3 text-center text-sm font-medium">{movie.title}</div>
    </div>
  );
}
