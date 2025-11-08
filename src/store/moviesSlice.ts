import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MoviesState {
  list: Movie[];
}

const initialState: MoviesState = {
  list: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.list = action.payload;
    },
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.list.push(action.payload);
    },
  },
});

export const { setMovies, addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
