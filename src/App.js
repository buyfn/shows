import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';

import ShowPage from './components/ShowPage';
import EpisodePage from './components/EpisodePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/show/:showID"
            children={(props) => <ShowPage {...props} />}
          />

          <Route exact path="/episode/:episodeID"
            children={(props) => <EpisodePage {...props} />}
          />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <h1>Not found</h1>
  );
}

export default App;
