import React from 'react';
import './App.css';
import { HeaderBar } from './components/header-bar'
import { Articles } from './components/articles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ArticleDetails } from './components/article-details'
import { Switch } from 'react-router'

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <HeaderBar/>
        <Router>
          <Switch>
            <Route path="/item/:id">
              <ArticleDetails/>
            </Route>
            <Route path="/">
              <Articles/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
