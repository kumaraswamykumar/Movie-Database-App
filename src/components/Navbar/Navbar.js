import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({history}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const navigateTo = path => {
    history.push(path)
  }

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      history.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  return (
    <nav className="nav-container">
      <h1
        className="logo"
        onClick={() => navigateTo('/popular')}
        style={{cursor: 'pointer'}}
      >
        movieDB
      </h1>

      <div className="nav-right">
        <div className="nav-buttons">
          <button
            type="button"
            onClick={() => navigateTo('/popular')}
            className="nav-btn"
          >
            Popular
          </button>

          <button
            type="button"
            onClick={() => navigateTo('/top-rated')}
            className="nav-btn"
          >
            Top Rated
          </button>

          <button
            type="button"
            onClick={() => navigateTo('/upcoming')}
            className="nav-btn"
          >
            Upcoming
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          <button type="button" onClick={handleSearch} className="nav-btn">
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
