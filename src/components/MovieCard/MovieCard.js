import {Link} from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image'

  return (
    <div className="movie-card">
      <img className="movie-image" src={imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">⭐ {movie.vote_average}</p>
        <Link to={`/movie/${movie.id}`}>
          <button type="button" className="details-btn">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
