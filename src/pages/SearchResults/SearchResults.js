import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import MovieCard from '../../components/MovieCard/MovieCard'
import './SearchResults.css'

const SearchResults = () => {
  const [results, setResults] = useState([])
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get('q') || ''

  useEffect(() => {
    if (query.trim() !== '') {
      const searchMovies = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=412a83faa2614e2a6024230b50735e36&language=en-US&query=${query}&page=1`,
        )
        const json = await res.json()
        setResults(json.results)
      }
      searchMovies()
    }
  }, [query])

  return (
    <div>
      <Navbar />
      <h1 className="heading">Search</h1>
      <div className="movies-container">
        {results.length > 0 ? (
          results.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="no-results">No movies found for &quot;{query}&quot;</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults
