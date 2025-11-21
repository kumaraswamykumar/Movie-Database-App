import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Popular from './pages/Popular/Popular'
import TopRated from './pages/TopRated/TopRated'
import Upcoming from './pages/Upcoming/Upcoming'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import SearchResults from './pages/SearchResults/SearchResults'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/search" component={SearchResults} />
      <Redirect to="/popular" />
    </Switch>
  </Router>
)

export default App
