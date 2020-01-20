import React from 'react';
import './App.css';
import { HeaderBar } from './components/header-bar'
import { Articles } from './components/articles'

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <HeaderBar/>
        <Articles/>
      </div>
    </div>
  );
}

export default App;
