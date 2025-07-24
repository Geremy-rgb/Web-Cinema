import MovieType from "@/interfaces/moviesType";
import MovieDetail from "@/components/movies/movieDetail";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const API_KEY = "d2d31b7deeae507cf65c0f95d9b3c98c";
  const { id } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES&page=1`
  );
  const movie: MovieType = await res.json();
  return <MovieDetail movie={movie} />;
}
