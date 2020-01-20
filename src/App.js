import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'

import { HeaderBar } from './components/header-bar'
import { Articles } from './components/articles'
import { ArticleDetails } from './components/article-details'
import { FooterBar } from './components/footer-bar'

import './App.css';

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
        <FooterBar/>
      </div>
    </div>
  );
}

export default App;
