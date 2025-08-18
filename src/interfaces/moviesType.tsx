interface Movie {
  id: number;
  popularity: number;
  vote_count: number;
  vote_average: number;
  title: string;
  backdrop_path: string;
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  runtime: number;
  poster_path: string;
}

export default Movie;
