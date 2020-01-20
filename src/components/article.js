import React, { useEffect, useState } from 'react'
import superagent from 'superagent'
import propTypes from 'prop-types'

import './article.css'
import moment from 'moment'

const articleUrl = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

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

const getArticle = async (id) => {
  try {
    const res = await superagent.get(articleUrl(id))
    const article = res.body
    return article
  } catch (e) {
    console.error(e)
    throw e
  }
}

const Article = ({ id }) => {
  const [article, setArticle] = useState([])
  useEffect(
    () => {
      async function fetchArticle() {
        const article = await getArticle(id)
        setArticle(article)
      }

      fetchArticle()
    }, [id],
  )

  return (
    <li>
      <div className="articles-top">
        <div className="article-container">
          <div className="article-upvote">
            <a href="https://news.ycombinator.com/vote?id=22098832&how=up&goto=news">^</a>
          </div>
          <div className="article-title">
            {article.title}
          </div>
          {article.url &&
          <div className="article-url">
            <a href={article.url}>{`( ${stripUrl(article.url)} )`}</a>
          </div>
          }
        </div>
      </div>
      <div className="article-details">
        <div className="article-details-entry">
          {`${article.score && article.score} posted by `}
          <a href="test">{article.by}</a>
        </div>
        <div className="article-details-entry">
          {article.time && moment(article.time * 1000).fromNow()}
        </div>
        <div className="article-details-entry">
          | hide |
        </div>
        <div className="article-details-entry">
          {article.descendants && article.descendants} comments
        </div>
      </div>
    </li>
  )
}

Article.propTypes = {
  id: propTypes.number.isRequired,
}

export { Article }