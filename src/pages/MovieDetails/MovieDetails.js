import {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './MovieDetails.css'

const MovieDetails = ({match}) => {
  const {id} = match.params
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=412a83faa2614e2a6024230b50735e36&language=en-US`,
      )
      const json = await res.json()
      setMovie(json)
    }

    fetchMovie()
  }, [id])

  if (!movie) return null

  return (
    <div>
      <Navbar />
      <div className="details-container">
        <h1 className="title">{movie.title}</h1>
        <img
          className="details-img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails
