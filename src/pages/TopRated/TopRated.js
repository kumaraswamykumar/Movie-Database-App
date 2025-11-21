import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import Pagination from '../../components/Pagination/Pagination'
import './TopRated.css'

const API_KEY = 'YOUR_API_KEY'

const TopRated = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
        )
        const data = await res.json()
        setMovies(data.results)
      } catch (err) {
        console.error('Error fetching top rated movies:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchTopRatedMovies()
  }, [page])

  if (loading) return <h2 className="loading-text">Loading...</h2>

  return (
    <div className="toprated-container">
      <h1 className="toprated-heading">Top Rated Movies</h1>
      <div className="toprated-movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default TopRated
