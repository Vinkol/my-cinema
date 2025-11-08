import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import type { RootState, AppDispatch } from './store/store';
import { setMovies } from './store/moviesSlice';
import { fetchPopularMovies } from './api/tmdb';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies.list);

  useEffect(() => {
    fetchPopularMovies()
      .then((movies) => dispatch(setMovies(movies)))
      .catch(console.error);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6">🎬 Популярные фильмы</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
