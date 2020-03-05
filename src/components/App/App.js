import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

import ShowPage from '../ShowPage';
import EpisodePage from '../EpisodePage';

const DEFAULT_PATH = '/show/6771';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Redirect to powerpuff girls page from root path */}
          <Route exact path="/">
            <Redirect to={DEFAULT_PATH} />
          </Route>

          <Route exact path="/show/:showID"
            children={(props) => <ShowPage {...props} />}
          />

          <Route exact path="/episode/:episodeID"
            children={(props) => <EpisodePage {...props} />}
          />

          <Route path="*">Not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
