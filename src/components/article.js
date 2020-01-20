import React, { useEffect, useState } from 'react'
import superagent from 'superagent'
import propTypes from 'prop-types'

const articleUrl = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`

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
      <div className="article-container">
        <div className="article-title">
          {article.title}
        </div>
      </div>
    </li>
  )
}

Article.propTypes = {
  id: propTypes.string.isRequired,
}

export { Article }