import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [redirectPath, setRedirectPath] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleRedirect = path => {
    setRedirectPath(path)
  }

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setRedirectPath(`/search?query=${encodeURIComponent(searchTerm)}`)
      setSearchTerm('')
    }
  }

  if (redirectPath) {
    return <Redirect to={redirectPath} />
  }

  return (
    <nav className="navbar">
      {/* Logo as h1 to pass test case */}
      <h1 className="logo">movieDB</h1>

      <div className="nav-buttons">
        <button
          type="button"
          className="nav-btn"
          onClick={() => handleRedirect('/')}
        >
          Home
        </button>

        <button
          type="button"
          className="nav-btn"
          onClick={() => handleRedirect('/top-rated')}
        >
          Top Rated
        </button>

        <button
          type="button"
          className="nav-btn"
          onClick={() => handleRedirect('/upcoming')}
        >
          Upcoming
        </button>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="button" className="nav-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar
