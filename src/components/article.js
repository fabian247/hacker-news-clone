import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

import './article.css'
import { Link } from 'react-router-dom'
import { getItem } from '../calls/get-item'
import { By } from './by'
import { UpvoteIcon } from './upvote-icon'

const findDomain = (urlParts) => {
  return urlParts.find(part => (!part.includes('http') && part !== ""))
}

const stripWWW = (domain) => {
  if (domain.slice(0, 4) === 'www.') {
    return domain.slice(4)
  }
  return domain
}

const stripUrl = (url) => {
  const parts = url.split('/')
  const domain = findDomain(parts)
  const strippedDomain = stripWWW(domain)
  return strippedDomain
}

const Article = ({ id, title, url, score, by, time, descendants }) => (<>
    <div className="articles-top">
      <div className="article-container">
        <UpvoteIcon id={id}/>
        <div className="article-title">
          {title}
        </div>
        {url &&
        <div className="article-url">
          <a href={url}>{`( ${stripUrl(url)} )`}</a>
        </div>
        }
      </div>
    </div>
    <div className="article-details">
      <div className="article-details-entry">
        {`${score && score} posted by `}
        {/*TODO:: Add url to user*/}
        <By by={by} time={time}/>
      </div>
      <div className="article-details-entry">
        | hide |
      </div>
      <div className="article-details-entry">
        {/*TODO: Add subpage*/}
        {descendants && descendants}
        <Link to={`item/${id}`}> comments </Link>
      </div>
    </div>
  </>
)

const ArticleRow = ({ id }) => {
  const [article, setArticle] = useState([])
  useEffect(
    () => {
      async function fetchArticle() {
        const article = await getItem(id)
        setArticle(article)
      }

      fetchArticle()
    }, [id],
  )

  return (
    <li>
      <Article {...article} />
    </li>
  )
}

ArticleRow.propTypes = {
  id: propTypes.number.isRequired,
}

export { ArticleRow, Article }