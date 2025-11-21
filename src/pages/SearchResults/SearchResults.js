import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import './SearchResults.css'

const API_KEY = 'YOUR_API_KEY'

const SearchResults = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = params.get('query')

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!query) return

    const fetchSearchMovies = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
        )
        const data = await res.json()
        setMovies(data.results)
      } catch (err) {
        console.error('Error fetching search movies:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchSearchMovies()
  }, [query])

  if (loading) return <h2 className="loading-text">Loading...</h2>

  return (
    <div className="search-results-container">
      <h1 className="search-results-heading">Search Results for "{query}"</h1>

      {movies.length === 0 ? (
        <p className="no-results-text">No movies found</p>
      ) : (
        <div className="search-movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
