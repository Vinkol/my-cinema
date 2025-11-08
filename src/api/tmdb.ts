export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const TMDB_API_KEY = import.meta.env.VITE_TMDB_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies(): Promise<Movie[]> {
  const res = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=ru-RU&page=1`);
  if (!res.ok) throw new Error('Ошибка при загрузке фильмов: ' + res.statusText);
  const data = await res.json();
  return data.results.map((m: Movie) => ({
    id: m.id,
    title: m.title,
    poster_path: m.poster_path,
  }));
}
