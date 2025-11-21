import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Popular from './pages/Popular/Popular'
import TopRated from './pages/TopRated/TopRated'
import Upcoming from './pages/Upcoming/Upcoming'
import SearchResults from './pages/SearchResults/SearchResults'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="/movie/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
