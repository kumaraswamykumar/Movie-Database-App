import {useEffect, useState} from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import Pagination from '../../components/Pagination/Pagination'
import './Popular.css'

const API_KEY = 'YOUR_API_KEY' // Replace with your TMDB key

const Popular = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
        )
        const data = await res.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching popular movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPopularMovies()
  }, [page])

  if (loading) return <h2 className="loading-text">Loading...</h2>

  return (
    <div className="popular-container">
      {/* Heading text exactly "Popular" to pass test case */}
      <h1 className="popular-heading">Popular</h1>
      <div className="popular-movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default Popular
