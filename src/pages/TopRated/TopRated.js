import {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MovieCard from '../../components/MovieCard/MovieCard'
import Pagination from '../../components/Pagination/Pagination'
import './TopRated.css'

const TopRated = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=412a83faa2614e2a6024230b50735e36&language=en-US&page=${page}`,
      )
      const json = await res.json()
      setData(json.results)
    }

    fetchData()
  }, [page])

  return (
    <div>
      <Navbar />
      <h1 className="heading">Top Rated</h1>
      <div className="movies-container">
        {data.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default TopRated
