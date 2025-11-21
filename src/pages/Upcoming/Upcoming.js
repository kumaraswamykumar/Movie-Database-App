import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import Pagination from '../../components/Pagination/Pagination'
import './Upcoming.css'

const API_KEY = 'YOUR_API_KEY'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
        )
        const data = await res.json()
        setMovies(data.results)
      } catch (err) {
        console.error('Error fetching upcoming movies:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchUpcomingMovies()
  }, [page])

  if (loading) return <h2 className="loading-text">Loading...</h2>

  return (
    <div className="upcoming-container">
      <h1 className="upcoming-heading">Upcoming Movies</h1>
      <div className="upcoming-movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Upcoming
