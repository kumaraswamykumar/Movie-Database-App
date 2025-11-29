import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [path, setPath] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setPath(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  if (path) return <Redirect to={path} />

  return (
    <nav className="nav-container">
      <h1 className="logo" onClick={() => setPath('/popular')}>
        movieDB
      </h1>

      <div className="nav-right">
        <div className="nav-buttons">
          <button
            type="button"
            onClick={() => setPath('/popular')}
            className="nav-btn"
          >
            Popular
          </button>
          <button
            type="button"
            onClick={() => setPath('/top-rated')}
            className="nav-btn"
          >
            Top Rated
          </button>
          <button
            type="button"
            onClick={() => setPath('/upcoming')}
            className="nav-btn"
          >
            Upcoming
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input"
          />

          <button type="button" onClick={handleSearch} className="nav-btn">
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
