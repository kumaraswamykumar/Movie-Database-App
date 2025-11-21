import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  const [go, setGo] = useState('')

  if (go) return <Redirect to={go} />

  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="movie-title">{movie.title}</p>
      <p className="vote-average">Rating: {movie.vote_average}</p>
      <button
        type="button"
        className="view-details-btn"
        onClick={() => setGo(`/movie/${movie.id}`)}
      >
        View Details
      </button>
    </div>
  )
}

export default MovieCard
