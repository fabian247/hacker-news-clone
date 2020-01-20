import React from 'react'

import './header-bar.css'

const barEntries = [
  { name: "new", url: "https://news.ycombinator.com/newest" },
  { name: "past", url: "https://news.ycombinator.com/front" },
  { name: "comments", url: "https://news.ycombinator.com/newcomments" },
  { name: "ask", url: "https://news.ycombinator.com/ask" },
  { name: "show", url: "https://news.ycombinator.com/show" },
  { name: "jobs", url: "https://news.ycombinator.com/jobs" },
  { name: "submit", url: "https://news.ycombinator.com/submit" },
]

const HeaderBar = () => {
  return (
    <div className="bar-container">
      <div className="bar-logo">F</div>
      <div className="bar-title">Hacker News</div>
      {barEntries.map(entry => (
        <div key={entry.name} className="bar-entry">
          <div className="bar-separator">|</div>
          <a href={entry.url}>{entry.name}</a>
        </div>
      ))}
    </div>
  )
}

export { HeaderBar }