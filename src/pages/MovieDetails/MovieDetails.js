import {useEffect, useState} from 'react'
import './MovieDetails.css'

const API_KEY = 'YOUR_API_KEY'

const MovieDetails = ({match}) => {
  const movieId = match.params.id
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true)
      try {
        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
        )
        const movieData = await movieRes.json()

        const castRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
        )
        const castData = await castRes.json()

        setMovie(movieData)
        setCast(castData.cast)
      } catch (err) {
        console.error('Error fetching movie details:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [movieId])

  if (loading) return <h2 className="loading-text">Loading...</h2>
  if (!movie) return <h2 className="loading-text">Movie Not Found</h2>

  return (
    <div className="movie-details-container">
      <div className="movie-main-section">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-rating">⭐ {movie.vote_average}</p>
          <p className="movie-runtime">⏱️ {movie.runtime} mins</p>
          <p className="movie-release">📅 {movie.release_date}</p>
          <p className="movie-genres">
            🎭 {movie.genres?.map(g => g.name).join(', ')}
          </p>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </div>

      <h2 className="cast-heading">Cast</h2>
      <div className="cast-grid">
        {cast.map(c => (
          <div className="cast-card" key={c.id}>
            <img
              className="cast-img"
              src={
                c.profile_path
                  ? `https://image.tmdb.org/t/p/w300${c.profile_path}`
                  : 'https://via.placeholder.com/300x450?text=No+Image'
              }
              alt={c.name}
            />
            <p className="cast-name">{c.name}</p>
            <p className="cast-character">{c.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
