import { Switch, Route } from 'react-router-dom';

import SideBar from './components/SideBar';

import './App.css';
import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import Genres from './pages/Genres';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/genres" component={Genres} />
        <Route path="/movie/:id" component={Movie}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
