import React, { useState } from 'react'

import './footer-bar.css'

const barEntries = [
  { name: "Guidelines", url: "https://news.ycombinator.com/newest" },
  { name: "FAQ", url: "https://news.ycombinator.com/front" },
  { name: "Support", url: "https://news.ycombinator.com/newcomments" },
  { name: "API", url: "https://news.ycombinator.com/ask" },
  { name: "Security", url: "https://news.ycombinator.com/show" },
  { name: "Lists", url: "https://news.ycombinator.com/jobs" },
  { name: "Bookmarklet", url: "https://news.ycombinator.com/submit" },
  { name: "Legal", url: "https://news.ycombinator.com/submit" },
  { name: "Apply to YC", url: "https://news.ycombinator.com/submit" },
  { name: "Contact", url: "https://news.ycombinator.com/submit" },
]

const FooterBar = () => {
  const [searchText, setSearchText] = useState('')
  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="footer-container">
      <div className="footer-menu">
        {barEntries.map(entry => (
          <div key={entry.name} className="footer-entry">
            <div className="footer-separator">|</div>
            <a href={entry.url}>{entry.name}</a>
          </div>
        ))}
        <div className="footer-separator">|</div>
      </div>
      <div className="footer-search">
        Search:
        <form
          className="footer-form"
          onSubmit={event => {
            event.preventDefault()
            alert(`You searched for: ${searchText}`)
          }}
        >
          <input
            className="footer-input"
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  )
}

export { FooterBar }
